import { GetInterviewsDocument, Interview, Project } from "@app/graphql/generated";
import Text from "@app/src/atomic/atoms/Text";
import GeneralCard from "@app/src/atomic/molecules/GeneralCard";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import LayoutTemplate from "@app/src/atomic/templates/LayoutTemplate";
import { Flex } from "@chakra-ui/react";

const Projects = () => {
    return (
        <DashboardTemplate title="Entrevistas">
            <LayoutTemplate
                paginatedQueryName="interviews"
                query={GetInterviewsDocument}
                options={{
                    limit: 9,
                }}
                refetchFilter={(value: string, refetch: any) => refetch({
                    filter: {
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
        </DashboardTemplate>
    )
}
export default Projects;