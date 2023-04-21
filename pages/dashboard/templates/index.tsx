import { GetTemplatesDocument, InterviewTemplate } from "@app/graphql/generated";
import useCreateOneTemplate from "@app/src/atomic/pages/dashboard/templates/hooks/useCreateOneTemplate";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import LayoutTemplate from "@app/src/atomic/templates/LayoutTemplate";

const Templates = () => {
    const { handleCreate } = useCreateOneTemplate()
    return (
        <DashboardTemplate title="Modelos">
            <button onClick={() => handleCreate()}>Create</button>
            <LayoutTemplate
                paginatedQueryName="interviewTemplates"
                query={GetTemplatesDocument}
                options={{
                    limit: 4
                }}
                refetchFilter={(value: string, refetch: any) => refetch({
                    filter: {
                        name: { iLike: `%${value}%` }
                    }
                })}
                Card={({ item }: { item: InterviewTemplate }) => (
                    <div>
                        <h1>{item?.id}</h1>
                        <p>{item?.name}</p>
                    </div>
                )}
            />
        </DashboardTemplate>
    )
}
export default Templates;