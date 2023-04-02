import React from "react";
import { createContext, useCallback, useContext } from "react";

import { ApolloQueryResult } from "@apollo/client";

import { useRouter } from "next/router";
import { MeQuery } from "@app/graphql/generated";
import useMeLazy from "./hooks/useMe";
import useLogin from "./hooks/useLogin";
import { destroyCookie, setCookie } from "@app/src/common/utils/cookies";



type LoginProps = {
  email: string;
  password: string;
};

type AuthContextType = {
  login(props: LoginProps): Promise<void>;
  logout(): Promise<void>;
  me: any;
  loadingMe: boolean;
  loadingLogin: boolean;
  refetchMe(): Promise<ApolloQueryResult<MeQuery>> | any;
};

const AuthContext = createContext<AuthContextType>({
  login: async () => undefined,
  logout: async () => undefined,
  me: undefined,
  refetchMe: async () => undefined,
  loadingMe: false,
  loadingLogin: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { getMe, data, refetch, loading } = useMeLazy();
  const me = data?.me;

  const { login: loginMutation, loadingLogin } = useLogin();

  const login = useCallback(
    async ({ email, password }: {
        email: string;
        password: string;
    }) => {
      try {
        const { data } = await loginMutation({
            email: email,
            password: password
        });

        if (data?.login?.token) {
          setCookie("authToken", data?.login?.token, undefined, {
            path: "/",
          });
          await getMe();

          console.log("Autenticado com sucesso!");

          router.push("/admin/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    },
    [getMe, loginMutation, router]
  );

  const logout = useCallback(async () => {
    await destroyCookie("authToken");
    router.push("/auth/login");
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        login,
        loadingLogin,
        logout,
        me,
        refetchMe: refetch,
        loadingMe: loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
