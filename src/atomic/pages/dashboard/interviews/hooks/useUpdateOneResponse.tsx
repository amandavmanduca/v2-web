import { UpdateOneResponseInput, Response, useUpdateOneResponseMutation } from "@app/graphql/generated"

const useUpdateOneResponse = () => {
    const [mutate] = useUpdateOneResponseMutation({
        refetchQueries: ['getInterview']
    })
    async function updateResponse({ id, update }: UpdateOneResponseInput): Promise<Response | null | any> {
        if (!update?.answer) {
            return
        }
        try {
            const mutationResponse = await mutate({
                variables: {
                    input: {
                        id: id,
                        update: {
                            answer: update?.answer,
                            interviewId: update?.interviewId,
                            questionId: update?.questionId,
                        }
                    }
                }
            })
            return mutationResponse?.data?.updateOneResponse ?? null
        } catch (err) {
            console.log(err)
        }
    }

    return {
        updateResponse,
    }
}
export default useUpdateOneResponse;