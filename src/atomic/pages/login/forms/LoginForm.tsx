import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import FormProvider from "@app/src/providers/FormProvider";

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
            title="Login Form"
            onSubmit={handleLogin}
            initialValues={{}}
            // validate={}
            submitButton="Salvar"
            fields={fields}
        />
    )
}

export default LoginForm;