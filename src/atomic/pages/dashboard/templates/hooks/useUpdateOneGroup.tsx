import { QuestionGroup, UpdateOneQuestionGroupInput, useUpdateOneQuestionGroupMutation } from "@app/graphql/generated"
import useToast from "@app/src/common/hooks/useToast"

const useUpdateOneGroup = () => {
    const toast = useToast()
    const [mutate] = useUpdateOneQuestionGroupMutation({
        refetchQueries: ['getTemplates', 'getTemplate']
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
            toast({
                title: 'Erro ao atualizar grupo de perguntas',
                status: 'error',
            })
        }
    }
    return {
        updateGroup
    }
}
export default useUpdateOneGroup;