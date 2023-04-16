import { GetInterviewsDocument, GetProjectsDocument, Project } from "@app/graphql/generated";
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
                Card={({ item }: { item: Project }) => (
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