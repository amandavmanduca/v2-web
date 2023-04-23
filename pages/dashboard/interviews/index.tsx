import { GetInterviewsDocument, Interview, Project } from "@app/graphql/generated";
import Text from "@app/src/atomic/atoms/Text";
import GeneralCard from "@app/src/atomic/molecules/GeneralCard";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import LayoutTemplate from "@app/src/atomic/templates/LayoutTemplate";

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
                Card={({ item }: { item: Interview }) => (
                    <GeneralCard
                        cardTitle={item?.name}
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
                    </GeneralCard>
                )}
            />
        </DashboardTemplate>
    )
}
export default Projects;