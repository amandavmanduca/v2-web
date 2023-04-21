import { QuestionGroup, UpdateOneQuestionGroupInput, useUpdateOneQuestionGroupMutation } from "@app/graphql/generated"

const useUpdateOneGroup = () => {
    const [mutate] = useUpdateOneQuestionGroupMutation({
        refetchQueries: ['getTemplates']
    })
    async function updateGroup({ id, update }: UpdateOneQuestionGroupInput): Promise<QuestionGroup | null | any> {
        try {

            const response = await mutate({
                variables: {
                    input: {
                        id: id,
                        update: {
                            description: update?.description,
                            name: update?.name,
                            templateId: update?.templateId
                        }
                    }
                }
            })
            return response?.data?.updateOneQuestionGroup ?? null
        } catch (err) {
            console.log(err)
        }
    }
    return {
        updateGroup
    }
}
export default useUpdateOneGroup;