import { CreateOneInterviewTemplateInput, CreateOneProjectInput, InterviewTemplate, UpdateUserInput, useCreateOneTemplateMutation } from "@app/graphql/generated"

const useCreateOneTemplate = () => {
    const [mutate] = useCreateOneTemplateMutation({
        refetchQueries: ['getTemplates']
    })
    async function createTemplate({ interviewTemplate }: CreateOneInterviewTemplateInput): Promise<InterviewTemplate | null | any> {
        try {
            const response = await mutate({
                variables: {
                    input: {
                        interviewTemplate: {
                            isAvailable: false,
                            isFinished: false,
                            name: interviewTemplate?.name,
                            version: interviewTemplate?.version,
                            projectId: interviewTemplate?.projectId ?? null
                        }
                    }
                }
            })
            return response?.data?.createOneInterviewTemplate
        } catch (err) {
            console.log(err)
        }
    }
    return {
        createTemplate
    }
}
export default useCreateOneTemplate;