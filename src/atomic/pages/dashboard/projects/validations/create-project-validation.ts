import { requiredValidation } from "@app/src/common/constants";
import { IProject } from "../forms/ProjectForm";

export const createProjectValidation = (values: IProject) => {
    const errors: IProject | any = {}

    if (!values.name) {
        errors.name = requiredValidation
    }

    if (values.numberOfEstimatedInterviews && typeof values.numberOfEstimatedInterviews !== 'number') {
        errors.numberOfEstimatedInterviews = "Deve ser um número inteiro"
    }
    return errors
}