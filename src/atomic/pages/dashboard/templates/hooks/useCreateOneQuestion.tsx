import { CreateOneQuestionInput, Question, QuestionTypeEnum, useCreateOneQuestionMutation } from "@app/graphql/generated"

const useCreateOneQuestion = () => {
    const [mutate] = useCreateOneQuestionMutation({
        refetchQueries: []
    })
    async function createQuestion({ question }: CreateOneQuestionInput): Promise<Question | null | any> {
        try {

            const response = await mutate({
                variables: {
                    input: {
                        question: {
                            index: question?.index,
                            title: question?.title,
                            type: question?.type,
                            description: question?.description,
                            groupId: question?.groupId,
                            options: question?.options,
                            placeholder: question?.placeholder
                        }
                    }
                }
            })
            return response?.data?.createOneQuestion ?? null
        } catch (err) {
            console.log(err)
        }
    }
    async function handleCreate(groupId: string) {
        const created = await createQuestion({
            question: {
                index: null,
                title: 'Nova questão',
                type: QuestionTypeEnum.Text,
                description: null,
                groupId: groupId,
                options: null,
                placeholder: null
            }
        })
        return created
    }
    return {
        createQuestion,
        handleCreate
    }
}
export default useCreateOneQuestion;