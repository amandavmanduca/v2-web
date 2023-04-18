import { CreateOneInterviewTemplateInput, CreateOneProjectInput, UpdateUserInput, useCreateOneTemplateMutation } from "@app/graphql/generated"

const useCreateOneTemplate = () => {
    const [mutate] = useCreateOneTemplateMutation({
        refetchQueries: ['getTemplates']
    })
    async function createTemplate({ interviewTemplate }: CreateOneInterviewTemplateInput) {
        await mutate({
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
    }
    return {
        createTemplate
    }
}
export default useCreateOneTemplate;