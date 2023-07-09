import { Project, User } from "@app/graphql/generated";
import ProjectForm from "@app/src/atomic/pages/dashboard/projects/forms/ProjectForm";
import useGetProject from "@app/src/atomic/pages/dashboard/projects/hooks/useGetProject";
import useGetUsersToProject from "@app/src/atomic/pages/dashboard/projects/hooks/useGetUsersToProjects";
import { SelectOptions } from "@app/src/common/types/select";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UpdateProject = () => {
    const router = useRouter()
    const { id: projectId } = router.query
    const { getProject, loading } = useGetProject()
    const { getAllUsers } = useGetUsersToProject()

    const [project, setProject] = useState<Project | null | any>(null)

    const [users, setUsers] = useState<{
        coordinators: SelectOptions,
        interviewers: SelectOptions
    }>({
        coordinators: [],
        interviewers: []
    })
    
    useEffect(() => {
        (async () => {

            if (projectId && typeof projectId === 'string') {
                const response = await getProject(projectId)
                if (response) {
                    setProject(response)
                } else {
                    router.push('/dashboard/projects')
                }
            }
                
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectId])

   
    useEffect(() => {
        (async () => {
            const response = await getAllUsers()
            const coordinators = response?.coordinators?.map((c: User) => ({
                value: c?.id,
                label: c?.name
            }))
            const interviewers = response?.interviewers?.map((c: User) => ({
                value: c?.id,
                label: c?.name
            }))
            setUsers({
                coordinators: coordinators,
                interviewers: interviewers,
            })
        })()
    }, [])

    if (loading) {
        return <p>Aguarde...</p>
    }

    if (!users || !project) {
        return <></>
    }

    return (
        <ProjectForm users={users} values={project} />
    )
}
export default UpdateProject;