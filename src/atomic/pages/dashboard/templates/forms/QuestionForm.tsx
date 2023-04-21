import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import FormProvider from "@app/src/providers/FormProvider";
import { useState } from "react";
import { Maybe, Question } from "@app/graphql/generated";
import useUpdateOneQuestion from "../hooks/useUpdateOneQuestion";
import { questionTypeOptions } from "@app/src/common/utils/question-types-helper";
import { createAndsetSelectedValue, setSelectedValue } from "@app/src/common/utils/setSelectedValue";

type QuestionFormProps = {
    groupId: Maybe<string> | undefined;
    values?: Question | null
}

const QuestionForm = ({
    groupId,
    values = null
}: QuestionFormProps) => {
    const [question, setQuestion] = useState<Question | null>(values)
    const { updateQuestion } = useUpdateOneQuestion()

    const createdOptions = createAndsetSelectedValue(question?.options ?? [])
    const fields: FormFieldProps[] = [
        {
            label: "Título",
            name: "title",
            type: 'text',
            component: {
                type: "input"
            },
            placeholder: "Digite o título da questão"
        },
        {
            label: "Descrição",
            name: "description",
            type: 'text',
            component: {
                type: "input"
            },
            placeholder: "Descreva uma descrição para orientar o pesquisador"
        },
        {
            label: "Placeholder",
            name: "placeholder",
            type: 'text',
            component: {
                type: "input"
            },
            placeholder: "Adicione um placeholder"
        },
        {
            label: "Tipo de Questão",
            name: "type",
            type: 'text',
            component: {
                type: "select",
                isMulti: false,
                options: questionTypeOptions
            },
            placeholder: "Selecione o tipo de questão"
        },
        {
            label: "Opções",
            name: "options",
            type: 'text',
            component: {
                type: "select",
                isMulti: true,
                options: createdOptions,
                isCreatable: true
            },
            placeholder: "Adicione as opções para as questões de selecionar"
        },
    ]

    async function handleUpdate(values: any) {
        const options = values?.options && values?.options?.map((o: { value: string; label: string }) => o?.value)
        const updated = await updateQuestion({
            id: values?.id,
            update: {
                index: values?.index,
                title: values?.title,
                type: values?.type?.value,
                description: values?.description,
                groupId: groupId,
                options: options,
                placeholder: values?.placeholder
            }
        })
        if (updated) {
            setQuestion(updated)
        }
    }

    async function handleSubmit(values: any) {
        handleUpdate(values)
    }

    const initialValues = {
        id: question?.id,
        title: question?.title,
        index: question?.index,
        description: question?.description,
        placeholder: question?.placeholder,
        options: createdOptions,
        type: question?.type && setSelectedValue(questionTypeOptions, question?.type),
        groupId: groupId,
    }

    return (
        <FormProvider
            title="Group"
            onSubmit={(v) => handleSubmit(v)}
            initialValues={initialValues}
            // validate={}
            submitButton="Salvar"
            submitOnBlur={true}
            displayButtons={false}
            fields={fields}
        />
    )
}
export default QuestionForm;