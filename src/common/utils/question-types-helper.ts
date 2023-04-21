import { QuestionTypeEnum } from "@app/graphql/generated"

const questionTypes = [
    QuestionTypeEnum.Text,
    QuestionTypeEnum.Textarea,
    QuestionTypeEnum.Number,
    QuestionTypeEnum.Select,
    QuestionTypeEnum.MultiSelect,
]

const questionTypeLabels = {
    [QuestionTypeEnum.Text]: 'Texto',
    [QuestionTypeEnum.Textarea]: 'Caixa de texto',
    [QuestionTypeEnum.Number]: 'Numérico',
    [QuestionTypeEnum.Select]: 'Selecionar',
    [QuestionTypeEnum.MultiSelect]: 'Multipla seleção',
}

const questionTypeOptions = questionTypes?.map(t => ({
    value: t,
    label: questionTypeLabels[t]
}))

export {
    questionTypes,
    questionTypeLabels,
    questionTypeOptions
}