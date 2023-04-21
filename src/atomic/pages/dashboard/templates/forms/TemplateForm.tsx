import { InterviewTemplate, Maybe, QuestionGroup } from "@app/graphql/generated";
import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import FormProvider from "@app/src/providers/FormProvider";
import { useState } from "react";
import useUpdateOneTemplate from "../hooks/updateOneTemplate";
import { setSelectedValue } from "@app/src/common/utils/setSelectedValue";
import GroupForm from "./GroupForm";
import useCreateOneGroup from "../hooks/useCreateOneGroup";

const TemplateForm = ({
    projects,
    values
}: {
    projects: {
        value: string;
        label: Maybe<string> | undefined;
    }[] | [],
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
        projectId: setSelectedValue(projects, template?.projectId)
    }

    const [questionGroups, setQuestionGroups] = useState(template?.questionGroups ?? [])

    async function handleCreateGroup(templateId: string) {
        const response = await createGroup(templateId)
        setQuestionGroups(prev => [...prev, response])
    }

    return (
        <DashboardTemplate title="Modelos">
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
            <button onClick={() => handleCreateGroup(template?.id)}>+ Grupo</button>
        </DashboardTemplate>
    )
}
export default TemplateForm;