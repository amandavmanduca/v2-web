import { Interview, Question, QuestionGroup } from "@app/graphql/generated"
import { formatAnswerBeforeSubmit, formatAnswerInitialValue, formatQuestionToField } from "@app/src/atomic/pages/dashboard/interviews/helpers"
import useCreateOneResponse from "@app/src/atomic/pages/dashboard/interviews/hooks/useCreateOneResponse"
import useGetInterview from "@app/src/atomic/pages/dashboard/interviews/hooks/useGetInterview"
import useUpdateOneResponse from "@app/src/atomic/pages/dashboard/interviews/hooks/useUpdateOneResponse"
import FormProvider from "@app/src/providers/FormProvider"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const UpdateInterview = () => {
    const router = useRouter()
    const { id: interviewId } = router.query
    const { getInterview, loading } = useGetInterview()
    const [interview, setInterview] = useState<Interview | null | any>(null)

    const { createResponse } = useCreateOneResponse()
    const { updateResponse } = useUpdateOneResponse()

    async function getFullInterview(interviewId: string) {
        const response = await getInterview(interviewId)
        if (response) {
            setInterview(response)
        } else {
            router.push('/dashboard/templates')
        }
    }

    useEffect(() => {
        (async () => {

            if (interviewId && typeof interviewId === 'string') {
                await getFullInterview(interviewId)
            }
                
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [interviewId])

    if (loading) {
        return <p>Aguarde...</p>
    }

    const groups = interview?.template?.questionGroups

    async function handleSubmit(values: any, question: Question, hasInitialValue: boolean) {
        const answer = formatAnswerBeforeSubmit(values?.answer, question)
        if (!hasInitialValue) {
            await createResponse({
                response: {
                    interviewId: values?.interviewId,
                    questionId: values?.questionId,
                    answer: answer
                }
            })
            await getInterview(interview?.id)
        } else {
            await updateResponse({
                id: values?.id,
                update: {
                    interviewId: values?.interviewId,
                    questionId: values?.questionId,
                    answer: answer
                }
            })
        }
        await getFullInterview(interview?.id)
    }

    return (
        <div>
            {groups?.map((g: QuestionGroup) => (
                <div key={g?.id}>
                    <p>{g?.name}</p>
                    <p>{g?.description}</p>
                    {g?.questions?.map((question: Question) => {
                        const initialAnswerValue = formatAnswerInitialValue(question, question?.answers)
                        const hasInitialValue = initialAnswerValue?.id ? true : false
                        return (
                        <FormProvider
                            key={question?.id}
                            title={""}
                            onSubmit={(v) => handleSubmit(v, question, hasInitialValue)}
                            initialValues={{
                                interviewId: interview?.id,
                                questionId: question?.id,
                                ...initialAnswerValue
                            }}
                            // validate={}
                            submitButton="Salvar"
                            submitOnBlur={true}
                            displayButtons={false}
                            fields={[formatQuestionToField(question)]}
                        />
                    )})}
                </div>
            ))}

        </div>
    )
}
export default UpdateInterview