import { Question, QuestionTypeEnum, Response } from "@app/graphql/generated"
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
    return rawFields?.map((q: Question) => formatQuestionToField(q))
}

export const formatQuestionToField = (q: Question): FormFieldProps => {
    return ({
        label: q?.title,
        name: "answer",
        type: handleQuestionHtmlType(q?.type),
        component: {
            type: handleQuestionComponentType(q?.type),
            isMulti: q?.type === QuestionTypeEnum.MultiSelect ? true : false,
            options: q?.options?.map((o: string) => ({
                value: o,
                label: o
            })) ?? []
        },
        placeholder: q?.placeholder ?? ''
    })
}

export const setAnswerToQuestion = (answers: Response[] | [], questionId: string): Response | null => {
    return answers?.find((a: Response) => a?.questionId === questionId) || null
}

export const formatAnswerInitialValue = (question: Question, answers: Response[] | undefined | null) => {
    if (!answers) {
        return null
    }
    const response = answers?.find(a => a?.questionId === question?.id)
    
    if (question?.type === QuestionTypeEnum.MultiSelect) {
        return ({
            id: response?.id ?? null,
            answer: response?.answer?.map((o: string) => ({
                value: o,
                label: o
            })) ?? null
        })
    } else if (question?.type === QuestionTypeEnum.Select) {
        return ({
            id: response?.id ?? null,
            answer: response?.answer?.map((o: string) => ({
                value: o,
                label: o
            }))[0] ?? null
        })
    } else {
        return ({
            id: response?.id ?? null,
            answer: response?.answer?.[0] ?? null
        })
    }
}

export function formatAnswerBeforeSubmit(answer: any, question: Question) {
    if (question?.type === QuestionTypeEnum.MultiSelect) {
        return answer?.map((o: {
                value: string;
                label: string
            }) => o?.value) ?? null
    } else if (question?.type === QuestionTypeEnum.Select) {
        return [answer?.value] ?? null
    } else {
        return [answer] ?? null
    }
}