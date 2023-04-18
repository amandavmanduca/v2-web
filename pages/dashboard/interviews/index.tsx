import { GetInterviewsDocument, Interview, Project } from "@app/graphql/generated";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import LayoutTemplate from "@app/src/atomic/templates/LayoutTemplate";

const Projects = () => {
    return (
        <DashboardTemplate title="Entrevistas">
            <LayoutTemplate
                paginatedQueryName="interviews"
                query={GetInterviewsDocument}
                options={{
                    limit: 4
                }}
                refetchFilter={(value: string, refetch: any) => refetch({
                    filter: {
                        name: { iLike: `%${value}%` }
                    }
                })}
                Card={({ item }: { item: Interview }) => (
                    <div>
                        <h1>{item?.id}</h1>
                        <p>{item?.name}</p>
                    </div>
                )}
            />
        </DashboardTemplate>
    )
}
export default Projects;