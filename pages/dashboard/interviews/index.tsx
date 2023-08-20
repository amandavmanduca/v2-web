import { GetInterviewsDocument, Interview, Project } from "@app/graphql/generated";
import SelectField from "@app/src/atomic/atoms/SelectField";
import Text from "@app/src/atomic/atoms/Text";
import GeneralCard from "@app/src/atomic/molecules/GeneralCard";
import useGetProjects from "@app/src/atomic/pages/dashboard/projects/hooks/useGetProjects";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import LayoutTemplate from "@app/src/atomic/templates/LayoutTemplate";
import { SelectOption, SelectOptions } from "@app/src/common/types/select";
import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Projects = () => {
    const { getProjects, loading } = useGetProjects()
    const [projects, setProjects] = useState<SelectOptions | null>(null);
    const [selectedProject, setSelectedProject] = useState<SelectOption | null>(null);

    useEffect(() => {
        (async() => {
            const response = await getProjects();
            if (response?.projects) {
                const projectsArray= response?.projects?.map((p: Project) => ({
                    value: p?.id,
                    label: p?.name
                }))
                setProjects(projectsArray)
            }
        })()
    }, [])

    return (
        <DashboardTemplate title="Entrevistas">
            <div style={{ marginBottom: '20px' }}>
                <SelectField
                    options={projects ?? []}
                    name="project"
                    value={selectedProject}
                    onChange={(v: any) => setSelectedProject(v)}
                    placeholder="Selecione o projeto"
                    isMulti={false}
                />
            </div>
            {loading && <Spinner />}
            {selectedProject?.value && (
                <LayoutTemplate
                    paginatedQueryName="interviews"
                    query={GetInterviewsDocument}
                    options={{
                        limit: 9,
                        variables: {
                            filter: {
                                projectId: { eq: selectedProject?.value }
                            }
                        }
                    }}
                    refetchFilter={(value: string, refetch: any) => refetch({
                        filter: {
                            and: [
                                {
                                    projectId: { eq: selectedProject?.value }
                                },
                                {
                                    or: [
                                        {
                                            name: { iLike: `%${value}%` }
                                        },
                                        {
                                            interviewer: {
                                                name: { iLike: `%${value}%` }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    })}
                    Card={({ item }: { item: Interview }) => {
                        let totalQuestions = 0;
                        let totalAnswers = 0
                        item?.template?.questionGroups?.map(g => g?.questions?.map(() => {
                            totalQuestions = totalQuestions + 1
                        }))
                        item?.answers?.map(() => {
                            totalAnswers = totalAnswers + 1
                        })
                        let currentPercentage = (totalQuestions > 0) ? (100 * totalAnswers / totalQuestions) : 0
                        if (currentPercentage > 100) {
                            currentPercentage = 100
                        }
                        return (
                        <GeneralCard
                            cardtitle={item?.name}
                        >
                            <Text>Projeto: {item?.project?.name}</Text>
                            <Text>Modelo: {item?.template?.name}</Text>
                            <Text>Entrevistador: {item?.interviewer?.name}</Text>
                            <Text
                                style={{ cursor: 'pointer' }}
                                _hover={{ textDecoration: 'underline' }}
                                alignSelf="end"
                                display="flex"
                                height="100%"
                                alignItems="flex-end"
                            >
                                <a href={`/dashboard/interviews/${item?.id}`} target="_blank">Ver Entrevista</a>
                            </Text>
                            {totalQuestions > 0 && (
                                <Flex
                                    flexDirection="column"
                                    w="100%"
                                >
                                    <Text fontSize="12px">{totalAnswers}/{totalQuestions} - {currentPercentage}%</Text>
                                    <Flex borderRadius="5px" w={`${currentPercentage}%`} h="5px" backgroundColor="gray.400" />
                                </Flex>
                            )}
                        </GeneralCard>
                    )}}
                />
            )}
        </DashboardTemplate>
    )
}
export default Projects;