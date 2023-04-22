import { Question, QuestionTypeEnum } from "@app/graphql/generated"
import { FormFieldProps } from "@app/src/atomic/atoms/FormField"
import { HTMLInputTypeAttribute } from "react"
import { SupportedInputs } from "react-final-form"

const handleQuestionComponentType = (type: QuestionTypeEnum): SupportedInputs | any => {
    const componentTypes = {
        [QuestionTypeEnum.Text]: "input",
        [QuestionTypeEnum.Textarea]: "textarea",
        [QuestionTypeEnum.Number]: "input",
        [QuestionTypeEnum.Select]: "select",
        [QuestionTypeEnum.MultiSelect]: "select",
    }
    return componentTypes[type]
}

const handleQuestionHtmlType = (type: QuestionTypeEnum): HTMLInputTypeAttribute | any => {
    const htmlTypes = {
        [QuestionTypeEnum.Text]: "text",
        [QuestionTypeEnum.Textarea]: "text",
        [QuestionTypeEnum.Number]: "number",
        [QuestionTypeEnum.Select]: "text",
        [QuestionTypeEnum.MultiSelect]: "text",
    }
    return htmlTypes[type]
}

export const formatQuestionsToFields = (rawFields: Question[] | []): FormFieldProps[] => {
    return rawFields?.map((q: Question) => ({
        label: q?.title,
        name: q?.id,
        type: handleQuestionHtmlType(q?.type),
        component: {
            type: handleQuestionComponentType(q?.type),
            isMulti: false,
            options: q?.options?.map((o: string) => ({
                value: o,
                label: o
            })) ?? []
        },
        placeholder: q?.placeholder ?? ''
    }))
}