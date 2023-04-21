import { InterviewTemplate, Maybe, Project } from "@app/graphql/generated";
import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import useCreateOneTemplate from "@app/src/atomic/pages/dashboard/templates/hooks/useCreateOneTemplate";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import FormProvider from "@app/src/providers/FormProvider";
import { useState } from "react";
import useUpdateOneTemplate from "../hooks/updateOneTemplate";
import { setSelectedValue } from "@app/src/common/utils/setSelectedValue";

const TemplateForm = ({
    projects = []
}: {
    projects: {
        value: string;
        label: Maybe<string> | undefined;
    }[] | []
}) => {
    const [template, setTemplate] = useState<InterviewTemplate | null>(null)
    const { createTemplate } = useCreateOneTemplate()
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

    async function handleCreate(values: any) {
        const response = await createTemplate({
            interviewTemplate: {
                name: values?.name,
                version: values?.version,
                isFinished: false,
                isAvailable: false,
                projectId: values?.projectId?.value
            }
        })
        if (response) {
            setTemplate(response)
        }
    }

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
        if (!template) {
            await handleCreate(values)
        } else {
            await handleUpdate(values)
        }
    }

    const initialValues = template ? {
        id: template?.id,
        name: template?.name,
        version: template?.version,
        isFinished: template?.isFinished,
        isAvailable: template?.isAvailable,
        projectId: setSelectedValue(projects, template?.projectId)
    } : {
        version: 1
    }

    return (
        <DashboardTemplate title="Modelos">
            <FormProvider
                title="Novo Modelo"
                onSubmit={(v) => handleSubmit(v)}
                initialValues={initialValues}
                // validate={}
                submitButton="Salvar"
                fields={fields}
            />
        </DashboardTemplate>
    )
}
export default TemplateForm;