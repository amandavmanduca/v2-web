import { Project } from "@app/graphql/generated";
import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate";
import { setSelectedArrayOfValues } from "@app/src/common/utils/setSelectedValue";
import FormProvider from "@app/src/providers/FormProvider";
import { Maybe } from "graphql/jsutils/Maybe";
import { useState } from "react";
import useUpdateOneProject from "../hooks/useUpdateOneProject";

const ProjectForm = ({
    users,
    values
}: {
    users: {
        coordinators: {
            value: string;
            label: Maybe<string> | undefined;
        }[] | [],
        interviewers: {
            value: string;
            label: Maybe<string> | undefined;
        }[] | []
    },
    values: Project
}) => {
    const [project, setProject] = useState<Project>(values)
    const { updateProject } = useUpdateOneProject()
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
            label: "Total de Entrevistas Estimadas",
            name: "numberOfEstimatedInterviews",
            type: 'number',
            component: {
                type: "input"
            },
            placeholder: "Digite o número estimado de entrevistas"
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
    
    async function handleUpdate(values: any) {
        const response = await updateProject({
            id: values?.id,
            update: {
                name: values?.name,
                numberOfEstimatedInterviews: values?.numberOfEstimatedInterviews,
                coordinators: values?.coordinators,
                interviewers: values?.interviewers,
                generalDescription: values?.generalDescription,
                interviewerOrientations: values?.interviewerOrientations,
                terms: values?.terms
            }
        })
        if (response) {
            setProject(response)
        }
    }

    async function handleSubmit(values: any) {
        await handleUpdate(values)
    }

    const coordinatorsIds = project?.coordinators?.map(c => c?.id) ?? []
    const interviewesIds = project?.interviewers?.map(i => i?.id) ?? []
    
    const initialValues = {
        id: project?.id,
        name: project?.name,
        terms: project?.terms,
        generalDescription: project?.generalDescription,
        interviewerOrientations: project?.interviewerOrientations,
        numberOfEstimatedInterviews: Number(project?.numberOfEstimatedInterviews),
        coordinators: project?.coordinators ? setSelectedArrayOfValues(users?.coordinators, coordinatorsIds) : null,
        interviewers: project?.coordinators ? setSelectedArrayOfValues(users?.interviewers, interviewesIds) : null
    }

    console.log(initialValues)
    return (
        <DashboardTemplate title="Projetos">
            <FormProvider
                title="Editando Projeto"
                onSubmit={(v) => handleSubmit(v)}
                initialValues={initialValues}
                // validate={}
                submitButton="Salvar"
                fields={fields}
            />
        </DashboardTemplate>
    )
}
export default ProjectForm;