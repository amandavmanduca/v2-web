import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import FormProvider from "@app/src/providers/FormProvider";
import useCreateOneGroup from "../hooks/useCreateOneGroup";
import useUpdateOneGroup from "../hooks/useUpdateOneGroup";
import { useState } from "react";
import { Maybe, Question, QuestionGroup } from "@app/graphql/generated";
import useCreateOneQuestion from "../hooks/useCreateOneQuestion";
import QuestionForm from "./QuestionForm";
import { Button, Flex } from "@chakra-ui/react";
import InterviewFormLayoutHelper from "@app/src/atomic/molecules/InterviewFormLayoutHelper";

type GroupFormProps = {
    templateId: Maybe<string> | undefined;
    values: QuestionGroup
}

const GroupForm = ({
    templateId,
    values
}: GroupFormProps) => {
    const [group, setGroup] = useState<QuestionGroup>(values)
    const { createGroup } = useCreateOneGroup()
    const { updateGroup } = useUpdateOneGroup()

    const { handleCreate: createQuestion } = useCreateOneQuestion()

    const fields: FormFieldProps[] = [
        {
            label: "Nome",
            name: "name",
            type: 'text',
            component: {
                type: "input"
            },
            placeholder: "Digite o nome da seção"
        },
        {
            label: "Descrição",
            name: "description",
            type: 'text',
            component: {
                type: "textarea"
            },
            placeholder: "Descreva a seção"
        },
    ]

    async function handleCreate(values: any) {
        const created = await createGroup({
            questionGroup: {
                name: values?.name,
                description: values?.description ?? '',
                templateId: values?.templateId
            }
        })
        if (created) {
            setGroup(created)
        }
    }

    async function handleUpdate(values: any) {
        const updated = await updateGroup({
            id: values?.id,
            update: {
                id: values?.id,
                name: values?.name,
                description: values?.description ?? '',
                templateId: values?.templateId
            }
        })
        if (updated) {
            setGroup(updated)
        }
    }

    async function handleSubmit(values: any) {
        if (!group) {
            handleCreate(values)
        } else {
            handleUpdate(values)
        }
    }

    const initialValues = group ? {
        id: group?.id,
        templateId: group?.templateId,
        name: group?.name,
        description: group?.description,
    } : {
        templateId: templateId
    }

    
    const [questions, setQuestions] = useState(group?.questions ?? [])

    async function handleCreateQuestion(groupId: string) {
        const response = await createQuestion(groupId)
        setQuestions(prev => [...prev, response])
    }

    return (
        <>
            <InterviewFormLayoutHelper
                backgroundColor="gray.100"
            >
                <FormProvider
                    title={group?.name ?? 'Grupo de Questões'}
                    onSubmit={(v) => handleSubmit(v)}
                    initialValues={initialValues}
                    // validate={}
                    submitButton="Salvar"
                    submitOnBlur={true}
                    displayButtons={false}
                    fields={fields}
                />
                {questions?.map((g: Question, index: number) => (
                    <QuestionForm key={index} groupId={group?.id} values={g} />
                ))}
                <Flex w="100%" justifyContent="flex-start">
                    <Button onClick={() => handleCreateQuestion(group?.id)}>+ Questão</Button>
                </Flex>
            </InterviewFormLayoutHelper>
        </>
    )
}
export default GroupForm;