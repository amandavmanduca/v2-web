import { CreateOneResponseInput, Response, useCreateOneResponseMutation } from "@app/graphql/generated"
import useToast from "@app/src/common/hooks/useToast"

const useCreateOneResponse = () => {
    const toast = useToast()
    const [mutate] = useCreateOneResponseMutation({
        refetchQueries: ['getInterview']
    })
    async function createResponse({ response }: CreateOneResponseInput): Promise<Response | null | any> {
        if (!response?.answer) {
            return
        }
        try {
            const mutationResponse = await mutate({
                variables: {
                    input: {
                        response: {
                            answer: response?.answer,
                            interviewId: response?.interviewId,
                            questionId: response?.questionId,
                        }
                    }
                }
            })
            return mutationResponse?.data?.createOneResponse ?? null
        } catch (err) {
            console.log(err)
            toast({
                title: 'Erro ao responder pergunta',
                status: 'error',
            })
        }
    }

    return {
        createResponse,
    }
}
export default useCreateOneResponse;