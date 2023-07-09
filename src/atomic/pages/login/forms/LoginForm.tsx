import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import FormProvider from "@app/src/providers/FormProvider";
import { loginValidation } from "../validations/login-validation";

export type LoginFormValues = {
    email: string;
    password: string
}

const LoginForm = ({
    handleLogin
}: {
    handleLogin: (values: LoginFormValues) => void
}) => {
    const fields: FormFieldProps[] = [
        {
            name: "email",
            label: "E-mail",
            type: 'email',
            component: {
                type: "input"
            },
            placeholder: "Digite seu e-mail"
        },
        {
            name: "password",
            label: "Senha",
            type: 'password',
            component: {
                type: "input"
            },
            placeholder: "Digite sua senha"
        },
    ]

    return (
        <FormProvider
            title="Login"
            onSubmit={handleLogin}
            initialValues={{}}
            validate={loginValidation}
            submitButton="Entrar"
            resetButton={null}
            fields={fields}
        />
    )
}

export default LoginForm;