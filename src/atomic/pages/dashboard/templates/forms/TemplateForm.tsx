import { InterviewTemplate, QuestionGroup } from "@app/graphql/generated";
import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import FormProvider from "@app/src/providers/FormProvider";
import { useState } from "react";
import useUpdateOneTemplate from "../hooks/updateOneTemplate";
import { setSelectedValue } from "@app/src/common/utils/setSelectedValue";
import GroupForm from "./GroupForm";
import useCreateOneGroup from "../hooks/useCreateOneGroup";
import { Flex } from "@chakra-ui/react";
import Button from "@app/src/atomic/atoms/Button";
import InterviewFormLayoutHelper from "@app/src/atomic/molecules/InterviewFormLayoutHelper";
import { SelectOptions } from "@app/src/common/types/select";

const TemplateForm = ({
    projects,
    values
}: {
    projects: SelectOptions,
    values: InterviewTemplate
}) => {
    const [template, setTemplate] = useState<InterviewTemplate>(values)
    const { handleCreate: createGroup } = useCreateOneGroup()
    const { updateTemplate } = useUpdateOneTemplate()
    const fields: FormFieldProps[] = [
        {
            label: "Nome",
            name: "name",
            type: 'text',
            component: {
                type: "input"
            },
            placeholder: "Digite o nome do modelo de pesquisa"
        },
        {
            label: "Versão",
            name: "version",
            type: 'number',
            component: {
                type: "input"
            },
            placeholder: "Digite a versão"
        },
        {
            label: "Projeto",
            name: "projectId",
            type: 'text',
            component: {
                type: "select",
                isMulti: false,
                options: projects
            },
            placeholder: "Selecione o projeto"
        },
    ]

    async function handleUpdate(values: any) {
        const response = await updateTemplate({
            id: values?.id,
            update: {
                name: values?.name,
                version: values?.version,
                isFinished: values?.isFinished,
                isAvailable: values?.isAvailable,
                projectId: values?.projectId?.value
            }
        })
        if (response) {
            setTemplate(response)
        }
    }

    async function handleSubmit(values: any) {
        await handleUpdate(values)
    }

    const initialValues = {
        id: template?.id,
        name: template?.name,
        version: template?.version,
        isFinished: template?.isFinished,
        isAvailable: template?.isAvailable,
        projectId: template?.projectId ? setSelectedValue(projects, template?.projectId) : null
    }

    const [questionGroups, setQuestionGroups] = useState(template?.questionGroups ?? [])

    async function handleCreateGroup(templateId: string) {
        const response = await createGroup(templateId)
        setQuestionGroups(prev => [...prev, response])
    }

    return (
        <DashboardTemplate title="Modelos">
            <InterviewFormLayoutHelper
                backgroundColor="gray.200"
            >
                <FormProvider
                    title="Novo Modelo"
                    onSubmit={(v) => handleSubmit(v)}
                    initialValues={initialValues}
                    // validate={}
                    submitButton="Salvar"
                    submitOnBlur={true}
                    displayButtons={false}
                    fields={fields}
                />
                {questionGroups?.map((g: QuestionGroup, index: number) => (
                    <GroupForm key={index} templateId={template?.id} values={g} />
                ))}
                <Flex w="100%" justifyContent="flex-end">
                    <Button onClick={() => handleCreateGroup(template?.id)}>+ Grupo</Button>
                </Flex>
            </InterviewFormLayoutHelper>
        </DashboardTemplate>
    )
}
export default TemplateForm;