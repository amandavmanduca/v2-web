import { InterviewTemplate, Maybe, Project } from "@app/graphql/generated"
import TemplateForm from "@app/src/atomic/pages/dashboard/templates/forms/TemplateForm"
import useGetMyCreatedProjects from "@app/src/atomic/pages/dashboard/templates/hooks/useGetMyCreatedProjects"
import useGetTemplate from "@app/src/atomic/pages/dashboard/templates/hooks/useGetTemplate"
import { SelectOptions } from "@app/src/common/types/select"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const UpdateTemplate = () => {
    const router = useRouter()
    const { id: templateId } = router.query
    const { getTemplate, loading } = useGetTemplate()
    const [template, setTemplate] = useState<InterviewTemplate | null | any>(null)

    const { getProjects, loading: loadingProjects } = useGetMyCreatedProjects()

    const [projects, setProjects] = useState<SelectOptions>([])

    useEffect(() => {
        (async () => {

            if (templateId && typeof templateId === 'string') {
                const response = await getTemplate(templateId)
                if (response) {
                    setTemplate(response)
                } else {
                    router.push('/dashboard/templates')
                }
                
                const { withoutTemplate }: { withoutTemplate: Project[] | [] }  = await getProjects({
                    currentTemplateId: templateId
                })
                if (withoutTemplate?.length > 0) {
                    const projectsArray= withoutTemplate?.map((p: Project) => ({
                        value: p?.id,
                        label: p?.name
                    }))
                    setProjects(projectsArray)
                }
            }
                
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [templateId])

    if (loading || loadingProjects) {
        return <p>Aguarde...</p>
    }

    return (
        <TemplateForm projects={projects} values={template} />
    )
}
export default UpdateTemplate