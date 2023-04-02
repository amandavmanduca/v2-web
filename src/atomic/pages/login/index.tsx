import { useAuthContext } from "@app/src/context/auth";


const Login = () => {
    const { login } = useAuthContext();
    function handleLogin() {
        login({
            email: "teste@teste.com",
            password: "123456"
        })
    }
    return (
        <>
            <h1>Login</h1>
            <button onClick={() => handleLogin()}>Logar</button>
        </>
    )
}

export default Login;