import {
    ApolloClient,
    ApolloProvider,
    concat,
    
    HttpLink,
    
    InMemoryCache,
  } from "@apollo/client";
  import { setContext } from "@apollo/client/link/context";
  import { onError } from "@apollo/client/link/error";
import { NEXT_PUBLIC_API_URL } from "@app/src/common/constants";
import { getCookie } from "@app/src/common/utils/cookies";
  
  const setAuthorizationLink = setContext(() => {
    const token = getCookie("authToken") ?? null;
    const recaptchaToken = getCookie("recaptcha") ?? null;
  
    let data = {
      headers: {},
    };
    if (!!token) {
      data = {
        headers: {
          authorization: "Bearer " + token,
        },
      };
    }
    if (!!recaptchaToken) {
      data = {
        headers: {
          ...data?.headers,
          recaptcha: recaptchaToken,
        },
      };
    }
    return data;
  });

  const httpLink = new HttpLink({
    uri: NEXT_PUBLIC_API_URL
  })

  const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
    if (operation?.getContext()?.enableErrorMessages) {
      if (graphQLErrors) {
        const message = graphQLErrors?.[0]?.message;
        console.log(message);
      }
  
      if (networkError) {
        console.log(networkError?.message);
      }
    }
  });
  
  export const apolloClient = new ApolloClient({
    link: setAuthorizationLink.concat(concat(errorLink, httpLink)),
    ssrMode: !process.browser,
    cache: new InMemoryCache(),
  });
  
  export const CustomApolloProvider = ({ children }: any) => {
    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
  };
  