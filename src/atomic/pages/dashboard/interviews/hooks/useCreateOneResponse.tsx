import { CreateOneResponseInput, Response, useCreateOneResponseMutation } from "@app/graphql/generated"

const useCreateOneResponse = () => {
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
        }
    }

    return {
        createResponse,
    }
}
export default useCreateOneResponse;