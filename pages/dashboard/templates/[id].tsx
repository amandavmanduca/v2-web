import { InterviewTemplate } from "@app/graphql/generated"
import GroupForm from "@app/src/atomic/pages/dashboard/templates/forms/GroupForm"
import useGetTemplate from "@app/src/atomic/pages/dashboard/templates/hooks/useGetTemplate"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const UpdateTemplate = () => {
    const router = useRouter()
    const { id: templateId } = router.query
    const { getTemplate } = useGetTemplate()
    const [template, setTemplate] = useState<InterviewTemplate | null | any>(null)

    useEffect(() => {
        (async () => {
            if (templateId && typeof templateId === 'string') {
                const response = await getTemplate(templateId)
                setTemplate(response)
            }
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [templateId])

    if (!template) {
        return <p>Modelo não encontrado</p>
    }

    return (
        <GroupForm templateId={template?.id} />
    )
}
export default UpdateTemplate