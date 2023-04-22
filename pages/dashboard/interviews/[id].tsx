import { Interview, Question, QuestionGroup } from "@app/graphql/generated"
import { FormFieldProps } from "@app/src/atomic/atoms/FormField"
import { formatQuestionsToFields } from "@app/src/atomic/pages/dashboard/interviews/helpers"
import useGetInterview from "@app/src/atomic/pages/dashboard/interviews/hooks/useGetInterview"
import FormProvider from "@app/src/providers/FormProvider"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const UpdateInterview = () => {
    const router = useRouter()
    const { id: interviewId } = router.query
    const { getInterview, loading } = useGetInterview()
    const [interview, setInterview] = useState<Interview | null | any>(null)

    useEffect(() => {
        (async () => {

            if (interviewId && typeof interviewId === 'string') {
                const response = await getInterview(interviewId)
                if (response) {
                    setInterview(response)
                } else {
                    router.push('/dashboard/templates')
                }
            }
                
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [interviewId])

    if (loading) {
        return <p>Aguarde...</p>
    }

    function handleSubmit(values: any) {
        console.log('values ', values)
    }

    const groups = interview?.template?.questionGroups

    return (
        <div>
            {groups?.map((g: QuestionGroup) => (
                <div key={g?.id}>
                    <p>{g?.name}</p>
                    <p>{g?.description}</p>
                    <FormProvider
                        title={interview?.name}
                        onSubmit={(v) => handleSubmit(v)}
                        initialValues={{}}
                        // validate={}
                        submitButton="Salvar"
                        submitOnBlur={false}
                        displayButtons={false}
                        fields={formatQuestionsToFields(g?.questions ?? [])}
                    />
                </div>
            ))}

        </div>
    )
}
export default UpdateInterview