import { useAuthContext } from "@app/src/context/auth";
import LoginForm, { LoginFormValues } from "./forms/LoginForm";

const Login = () => {
    const { login } = useAuthContext();
    async function handleLogin(values: LoginFormValues) {
        await login({
            email: values?.email,
            password: values?.password
        })
    }
    return (
        <>
            <LoginForm handleLogin={handleLogin} />
        </>
    )
}

export default Login;