import { InterviewTemplate, UpdateOneInterviewTemplateInput, useUpdateOneTemplateMutation } from "@app/graphql/generated"

const useUpdateOneTemplate = () => {
    const [mutate] = useUpdateOneTemplateMutation({
        refetchQueries: ['getTemplates', 'getTemplate']
    })
    async function updateTemplate({ id, update }: UpdateOneInterviewTemplateInput): Promise<InterviewTemplate | null | any> {
        try {
            const response = await mutate({
                variables: {
                    input: {
                        id: id,
                        update: {
                            isAvailable: update?.isAvailable ?? false,
                            isFinished: update?.isFinished ?? false,
                            name: update?.name,
                            version: Number(update?.version),
                            projectId: update?.projectId ?? null
                        }
                    }
                }
            })
            return response?.data?.updateOneInterviewTemplate
        } catch (err) {
            console.log(err)
        }
    }
    return {
        updateTemplate
    }
}
export default useUpdateOneTemplate;