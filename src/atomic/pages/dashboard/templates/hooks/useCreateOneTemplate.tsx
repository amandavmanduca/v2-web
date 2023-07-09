import { CreateOneInterviewTemplateInput, InterviewTemplate, useCreateOneTemplateMutation } from "@app/graphql/generated"
import useToast from "@app/src/common/hooks/useToast"
import { useRouter } from "next/router"

const useCreateOneTemplate = () => {
    const router = useRouter()
    const toast = useToast()
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
                            version: Number(interviewTemplate?.version),
                            projectId: interviewTemplate?.projectId ?? null
                        }
                    }
                }
            })
            return response?.data?.createOneInterviewTemplate
        } catch (err) {
            console.log(err)
            toast({
                title: 'Erro ao criar questionário',
                status: 'error',
            })
        }
    }
    async function handleCreate() {
        const response = await createTemplate({
            interviewTemplate: {
                name: 'Novo Modelo',
                version: 1,
                isFinished: false,
                isAvailable: false,
                projectId: null
            }
        })
        if (response) {
            router.push(`/dashboard/templates/${response?.id}`)
        }
    }
    return {
        createTemplate,
        handleCreate
    }
}
export default useCreateOneTemplate;