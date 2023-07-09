import { requiredValidation } from "@app/src/common/constants";
import { LoginFormValues } from "../forms/LoginForm";

export const loginValidation = (values: LoginFormValues) => {
    const errors: LoginFormValues | any = {}

    if (!values.email) {
        errors.email = requiredValidation
    }

    if (!values.password) {
        errors.password = requiredValidation
    }

    return errors
}