import { Maybe, User } from "@app/graphql/generated";
import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import useCreateOneProject from "@app/src/atomic/pages/dashboard/projects/hooks/useCreateOneProject";
import useGetUsersToProject from "@app/src/atomic/pages/dashboard/projects/hooks/useGetUsersToProjects";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import FormProvider from "@app/src/providers/FormProvider";
import { useEffect, useState } from "react";

const CreateProject = () => {
    const { getAllUsers } = useGetUsersToProject()
    const { createProject } = useCreateOneProject()
    const [users, setUsers] = useState<{
        coordinators: {
            value: string;
            label: Maybe<string> | undefined;
        }[] | [],
        interviewers: {
            value: string;
            label: Maybe<string> | undefined;
        }[] | []
    }>({
        coordinators: [],
        interviewers: []
    })
    const fields: FormFieldProps[] = [
        {
            label: "Nome",
            name: "name",
            type: 'text',
            component: {
                type: "input"
            },
            placeholder: "Digite o nome do projeto"
        },
        {
            label: "Orientações",
            name: "interviewerOrientations",
            type: 'text',
            component: {
                type: "textarea"
            },
            placeholder: "Digite as orientações gerais para os entrevistadores"
        },
        {
            label: "Descrição",
            name: "generalDescription",
            type: 'text',
            component: {
                type: "textarea"
            },
            placeholder: "Descreva o projeto"
        },
        {
            label: "Termos",
            name: "terms",
            type: 'text',
            component: {
                type: "textarea"
            },
            placeholder: "Escreva os termos"
        },
        {
            label: "Coordenadores",
            name: "coordinators",
            type: 'text',
            component: {
                type: "select",
                isMulti: true,
                options: users?.coordinators
            },
            placeholder: "Selecione coordenadores"
        },
        {
            label: "Entrevistadores",
            name: "interviewers",
            type: 'text',
            component: {
                type: "select",
                isMulti: true,
                options: users?.interviewers
            },
            placeholder: "Selecione entrevistadores"
        },
    ]
    useEffect(() => {
        (async () => {
            const response = await getAllUsers()
            const coordinators = response?.coordinators?.map((c: User) => ({
                value: c?.id,
                label: c?.name
            }))
            const interviewers = response?.allUsers?.map((c: User) => ({
                value: c?.id,
                label: c?.name
            }))
            setUsers({
                coordinators: coordinators,
                interviewers: interviewers,
            })
        })()
    }, [])
    async function handleSubmit(values: any) {
        await createProject({
            project: {
                name: values?.name,
                coordinators: values?.coordinators,
                interviewers: values?.interviewers,
                generalDescription: values?.generalDescription,
                interviewerOrientations: values?.interviewerOrientations,
                terms: values?.terms,
            }
        })
    }
    return (
        <DashboardTemplate title="Projetos">
            <FormProvider
                title="Novo Projeto"
                onSubmit={(v) => handleSubmit(v)}
                // initialValues={{}}
                // validate={}
                submitButton="Salvar"
                fields={fields}
            />
        </DashboardTemplate>
    )
}
export default CreateProject;