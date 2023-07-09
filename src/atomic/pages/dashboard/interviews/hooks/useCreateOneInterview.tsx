import { CreateOneInterviewInput, Interview, useCreateOneInterviewMutation } from "@app/graphql/generated"
import useToast from "@app/src/common/hooks/useToast"

const useCreateOnInterview = () => {
    const toast = useToast()
    const [mutate] = useCreateOneInterviewMutation({
        refetchQueries: ['getInterviews']
    })
    async function creatInterview({ interview }: CreateOneInterviewInput): Promise<Interview | null | any> {
        try {

            const response = await mutate({
                variables: {
                    input: {
                        interview: {
                            name: interview?.name,
                            projectId: interview?.projectId,
                            templateId: interview?.templateId
                        }
                    }
                }
            })
            return response?.data?.createOneInterview ?? null
        } catch (err) {
            console.log(err)
            toast({
                title: 'Erro ao criar entrevista',
                status: 'error',
            })
        }
    }
    async function handleCreate({
        projectId,
        templateId,
        projectName
    }: {
        projectId: string;
        templateId: string;
        projectName: string;
    }) {
        const created = await creatInterview({
            interview: {
                name: `${projectName} - ${new Date().toLocaleString('pt-BR')}`,
                projectId: projectId,
                templateId: templateId
            }
        })
        return created
    }
    return {
        creatInterview,
        handleCreate
    }
}
export default useCreateOnInterview;