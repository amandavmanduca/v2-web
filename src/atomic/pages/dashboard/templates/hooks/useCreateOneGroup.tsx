import { CreateOneQuestionGroupInput, QuestionGroup, useCreateOneQuestionGroupMutation } from "@app/graphql/generated"
import useToast from "@app/src/common/hooks/useToast"

const useCreateOneGroup = () => {
    const toast = useToast()
    const [mutate] = useCreateOneQuestionGroupMutation({
        refetchQueries: ['getTemplates', 'getTemplate']
    })
    async function createGroup({ questionGroup }: CreateOneQuestionGroupInput): Promise<QuestionGroup | null | any> {
        try {

            const response = await mutate({
                variables: {
                    input: {
                        questionGroup: {
                            name: questionGroup?.name,
                            description: questionGroup?.description,
                            templateId: questionGroup?.templateId
                        }
                    }
                }
            })
            return response?.data?.createOneQuestionGroup ?? null
        } catch (err) {
            console.log(err)
            toast({
                title: 'Erro ao criar grupo de perguntas',
                status: 'error',
            })
        }
    }
    async function handleCreate(templateId: string) {
        const created = await createGroup({
            questionGroup: {
                name: 'Novo Grupo',
                description: null,
                templateId: templateId
            }
        })
        return created
    }
    return {
        createGroup,
        handleCreate
    }
}
export default useCreateOneGroup;