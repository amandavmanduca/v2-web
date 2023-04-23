import { GetProjectsDocument, Project, UserRoleEnum } from "@app/graphql/generated";
import Text from "@app/src/atomic/atoms/Text";
import GeneralCard from "@app/src/atomic/molecules/GeneralCard";
import useCreateOnInterview from "@app/src/atomic/pages/dashboard/interviews/hooks/useCreateOneInterview";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import LayoutTemplate from "@app/src/atomic/templates/LayoutTemplate";
import { useAuthContext } from "@app/src/context/auth";
import { useRouter } from "next/router";

const Projects = () => {
    const router = useRouter()
    const { me } = useAuthContext()
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
                Card={({ item }: { item: Project }) => {
                    const isInterviewer = me?.role === UserRoleEnum.Interviewer
                    const available = item?.template?.isAvailable
                    const finished = item?.template?.isFinished
                    const readyForInterviews = available && finished
                    return (
                        <GeneralCard
                            cardTitle={item?.name}
                        >
                            {item?.template?.id ? (
                                <>
                                    <Text
                                        style={{ cursor: 'pointer' }}
                                        _hover={{ textDecoration: 'underline' }}
                                        >
                                        <a href={`/dashboard/templates/${item?.template?.id}`} target="_blank">{item?.template?.name}</a>
                                    </Text>
                                    <Text><i>{finished ? "Template Pronto" : "Template em Andamento"}</i></Text>
                                    {isInterviewer && readyForInterviews && (
                                        <Text onClick={() => startInterview(item)}>Iniciar Entrevista</Text>
                                    )}
                                </>
                            ) : (
                                <Text><i>Sem entrevista</i></Text>
                            )}
                        </GeneralCard>
                    )
                }}
            />
        </DashboardTemplate>
    )
}
export default Projects;