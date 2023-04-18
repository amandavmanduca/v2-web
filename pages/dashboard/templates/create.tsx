import { Maybe, Project } from "@app/graphql/generated";
import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import useCreateOneTemplate from "@app/src/atomic/pages/dashboard/templates/hooks/useCreateOneTemplate";
import useGetMyCreatedProjects from "@app/src/atomic/pages/dashboard/templates/hooks/useGetMyCreatedProjects";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import FormProvider from "@app/src/providers/FormProvider";
import { useEffect, useState } from "react";

const CreateTemplate = () => {
    const { getProjects } = useGetMyCreatedProjects()
    const { createTemplate } = useCreateOneTemplate()
    const [projects, setProjects] = useState<{
            value: string;
            label: Maybe<string> | undefined;
        }[] | []>([])
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
    useEffect(() => {
        (async () => {
            const { withoutTemplate }: { withoutTemplate: Project[] | [] }  = await getProjects()
            if (withoutTemplate?.length > 0) {
                const projectsArray= withoutTemplate?.map((p: Project) => ({
                    value: p?.id,
                    label: p?.name
                }))
                setProjects(projectsArray)
            }
        })()
    }, [])
    async function handleSubmit(values: any) {
        await createTemplate({
            interviewTemplate: {
                name: values?.name,
                version: values?.version,
                isFinished: false,
                isAvailable: false,
                projectId: values?.projectId?.value
            }
        })
    }
    return (
        <DashboardTemplate title="Modelos">
            <FormProvider
                title="Novo Modelo"
                onSubmit={(v) => handleSubmit(v)}
                initialValues={{
                    version: 1
                }}
                // validate={}
                submitButton="Salvar"
                fields={fields}
            />
        </DashboardTemplate>
    )
}
export default CreateTemplate;