import { GetProjectsDocument, Project } from "@app/graphql/generated";
import useCreateOnInterview from "@app/src/atomic/pages/dashboard/interviews/hooks/useCreateOneInterview";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import LayoutTemplate from "@app/src/atomic/templates/LayoutTemplate";
import { useRouter } from "next/router";

const Projects = () => {
    const router = useRouter()
    const { handleCreate } = useCreateOnInterview()

    async function startInterview(project: Project) {
        if (project?.id && project?.name && project?.template?.id) {
            const response = await handleCreate({
                projectId: project?.id,
                projectName: project?.name,
                templateId: project?.template?.id
            })
            if (response) {
                router.push(`/dashboard/interviews/${response?.id}`)
            }
        }
    }
    return (
        <DashboardTemplate title="Projetos">
            <LayoutTemplate
                paginatedQueryName="projects"
                query={GetProjectsDocument}
                options={{
                    limit: 10
                }}
                refetchFilter={(value: string, refetch: any) => refetch({
                    filter: {
                        name: { iLike: `%${value}%` }
                    }
                })}
                Card={({ item }: { item: Project }) => (
                    <div>
                        <h1>{item?.id}</h1>
                        <p>{item?.name}</p>
                        <p onClick={() => startInterview(item)}>Iniciar Entrevista</p>
                    </div>
                )}
            />
        </DashboardTemplate>
    )
}
export default Projects;