import { Maybe, Project } from "@app/graphql/generated";
import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import TemplateForm from "@app/src/atomic/pages/dashboard/templates/forms/TemplateForm";
import useCreateOneTemplate from "@app/src/atomic/pages/dashboard/templates/hooks/useCreateOneTemplate";
import useGetMyCreatedProjects from "@app/src/atomic/pages/dashboard/templates/hooks/useGetMyCreatedProjects";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import FormProvider from "@app/src/providers/FormProvider";
import { useEffect, useState } from "react";

const CreateTemplate = () => {
    const { getProjects } = useGetMyCreatedProjects()

    const [projects, setProjects] = useState<{
            value: string;
            label: Maybe<string> | undefined;
        }[] | []>([])

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

    return (
        <TemplateForm projects={projects} />
    )
}
export default CreateTemplate;