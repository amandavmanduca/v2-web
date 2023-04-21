import { CreateOneQuestionGroupInput, QuestionGroup, useCreateOneQuestionGroupMutation } from "@app/graphql/generated"

const useCreateOneGroup = () => {
    const [mutate] = useCreateOneQuestionGroupMutation({
        refetchQueries: ['getTemplates']
    })
    async function createGroup({ questionGroup }: CreateOneQuestionGroupInput): Promise<QuestionGroup | null | any> {
        try {

            const response = await mutate({
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
            return response?.data?.createOneQuestionGroup ?? null
        } catch (err) {
            console.log(err)
        }
    }
    return {
        createGroup
    }
}
export default useCreateOneGroup;