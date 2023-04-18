import { CreateOneQuestionGroupInput, useCreateOneQuestionGroupMutation } from "@app/graphql/generated"

const useCreateOneGroup = () => {
    const [mutate] = useCreateOneQuestionGroupMutation({
        refetchQueries: ['getTemplates']
    })
    async function createGroup({ questionGroup }: CreateOneQuestionGroupInput) {
        await mutate({
            variables: {
                input: {
                    questionGroup: {
                        name: questionGroup?.name,
                        description: questionGroup?.description,
                        templateId: questionGroup?.templateId
                    }
                }
            }
        })
    }
    return {
        createGroup
    }
}
export default useCreateOneGroup;