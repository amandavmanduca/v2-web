import { GetTemplatesDocument, InterviewTemplate, UserRoleEnum } from "@app/graphql/generated";
import Text from "@app/src/atomic/atoms/Text";
import GeneralCard from "@app/src/atomic/molecules/GeneralCard";
import useCreateOneTemplate from "@app/src/atomic/pages/dashboard/templates/hooks/useCreateOneTemplate";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import LayoutTemplate from "@app/src/atomic/templates/LayoutTemplate";
import { BaseActionsEnum, ModuleTypesEnum } from "@app/src/common/utils/role-permissions";
import { useAuthContext } from "@app/src/context/auth";

const Templates = () => {
    const { me } = useAuthContext()
    const { handleCreate } = useCreateOneTemplate()
    return (
        <DashboardTemplate title="Modelos">
            <LayoutTemplate
                paginatedQueryName="interviewTemplates"
                query={GetTemplatesDocument}
                options={{
                    limit: 9
                }}
                handleNew={{
                    handleNew: handleCreate,
                    titleComplement: "Modelo",
                    action: BaseActionsEnum.create,
                    module: ModuleTypesEnum.InterviewTemplate,
                    role: me?.role as UserRoleEnum
                }}
                refetchFilter={(value: string, refetch: any) => refetch({
                    filter: {
                        or: [
                            {
                                name: { iLike: `%${value}%` }
                            },
                            {
                                project: {
                                    name: { iLike: `%${value}%` } 
                                }
                            }
                        ]
                        
                    }
                })}
                Card={({ item }: { item: InterviewTemplate }) => (
                    <GeneralCard
                        cardtitle={item?.name}
                    >
                        <Text>{item?.project?.name}</Text>
                        <Text
                            style={{ cursor: 'pointer' }}
                            _hover={{ textDecoration: 'underline' }}
                            alignSelf="end"
                            display="flex"
                            height="100%"
                            alignItems="flex-end"
                        >
                            <a href={`/dashboard/templates/${item?.id}`} target="_blank">Ver Detalhes</a>
                        </Text>
                    </GeneralCard>
                )}
            />
        </DashboardTemplate>
    )
}
export default Templates;