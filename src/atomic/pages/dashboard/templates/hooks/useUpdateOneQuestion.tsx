import { UpdateOneQuestionInput, Question, QuestionTypeEnum, useUpdateOneQuestionMutation } from "@app/graphql/generated"
import useToast from "@app/src/common/hooks/useToast"

const useUpdateOneQuestion = () => {
    const toast = useToast()
    const [mutate] = useUpdateOneQuestionMutation({
        refetchQueries: []
    })
    async function updateQuestion({ id, update }: UpdateOneQuestionInput): Promise<Question | null | any> {
        try {

            const response = await mutate({
                variables: {
                    input: {
                        id: id,
                        update: {
                            index: update?.index,
                            title: update?.title,
                            type: update?.type,
                            description: update?.description,
                            groupId: update?.groupId,
                            options: update?.options,
                            placeholder: update?.placeholder
                        }
                    }
                }
            })
            return response?.data?.updateOneQuestion ?? null
        } catch (err) {
            console.log(err)
            toast({
                title: 'Erro ao atualizar pergunta',
                status: 'error',
            })
        }
    }
    return {
        updateQuestion,
    }
}
export default useUpdateOneQuestion;