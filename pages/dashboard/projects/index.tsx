import { GetProjectsDocument, Project, ProjectSortFields, SortDirection, UserRoleEnum } from "@app/graphql/generated";
import Text from "@app/src/atomic/atoms/Text";
import GeneralCard from "@app/src/atomic/molecules/GeneralCard";
import useCreateOnInterview from "@app/src/atomic/pages/dashboard/interviews/hooks/useCreateOneInterview";
import useCreateOneProject from "@app/src/atomic/pages/dashboard/projects/hooks/useCreateOneProject";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import LayoutTemplate from "@app/src/atomic/templates/LayoutTemplate";
import { BaseActionsEnum, ModuleTypesEnum } from "@app/src/common/utils/role-permissions";
import { useAuthContext } from "@app/src/context/auth";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Projects = () => {
    const router = useRouter()
    const { me } = useAuthContext()
    const { handleCreate: handleCreateInterview } = useCreateOnInterview()
    const { handleCreate } = useCreateOneProject()

    async function startInterview(project: Project) {
        if (project?.id && project?.name && project?.template?.id) {
            const response = await handleCreateInterview({
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
                    limit: 15,
                    sorting: {
                        field: ProjectSortFields.CreatedAt,
                        direction: SortDirection.Desc
                    }
                }}
                handleNew={{
                    handleNew: handleCreate,
                    titleComplement: "Projeto",
                    action: BaseActionsEnum.create,
                    module: ModuleTypesEnum.Project,
                    role: me?.role as UserRoleEnum
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
                    const currentNumberOfInterviews = Number(item?.interviews?.totalCount) ?? 0
                    const numberOfEstimatedInterviews = Number(item?.numberOfEstimatedInterviews) > currentNumberOfInterviews ? Number(item?.numberOfEstimatedInterviews) : currentNumberOfInterviews;
                    let currentPercentage = (numberOfEstimatedInterviews > 0) ? (100 * currentNumberOfInterviews / numberOfEstimatedInterviews) : 0
                    if (currentPercentage > 100) {
                        currentPercentage = 100
                    }
                    return (
                        <GeneralCard
                            cardtitle={item?.name}
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
                                        <Text
                                            cursor="pointer"
                                            textDecoration="underline"
                                            onClick={() => startInterview(item)}
                                            alignSelf="end"
                                        >
                                            Iniciar Entrevista
                                        </Text>
                                    )}
                                </>
                            ) : (
                                <Text><i>Sem entrevista</i></Text>
                            )}
                            <div style={{ alignSelf: 'end' }}>
                                <Text>Entrevistadores: {item?.interviewers?.length}</Text>
                                <Text>Entrevistas: {item?.interviews?.totalCount}</Text>
                            </div>
                            <Text
                                style={{ cursor: 'pointer' }}
                                _hover={{ textDecoration: 'underline' }}
                                alignSelf="end"
                                display="flex"
                                height="100%"
                                alignItems="flex-end"
                            >
                                <a href={`/dashboard/projects/${item?.id}`} target="_blank">Ver Detalhes</a>
                            </Text>
                            {numberOfEstimatedInterviews > 0 && (
                                <Flex
                                    flexDirection="column"
                                    w="100%"
                                >
                                    <Text fontSize="12px">{currentNumberOfInterviews}/{numberOfEstimatedInterviews} - {currentPercentage}%</Text>
                                    <Flex borderRadius="5px" w={`${currentPercentage}%`} h="5px" backgroundColor="gray.400" />
                                </Flex>
                            )}
                        </GeneralCard>
                    )
                }}
            />
        </DashboardTemplate>
    )
}
export default Projects;