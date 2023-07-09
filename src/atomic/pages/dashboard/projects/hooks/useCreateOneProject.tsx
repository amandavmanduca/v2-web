import { CreateOneProjectInput, Project, UpdateUserInput, useCreateOneProjectMutation } from "@app/graphql/generated"
import useToast from "@app/src/common/hooks/useToast"
import { useRouter } from "next/router"

const useCreateOneProject = () => {
    const router = useRouter()
    const toast = useToast()
    const [mutate] = useCreateOneProjectMutation({
        refetchQueries: ['getProjects']
    })
    async function createProject({ project }: CreateOneProjectInput): Promise<Project | null | any> {
        const coord: UpdateUserInput[] | any = project?.coordinators?.map((c: any) => ({
            id: c?.value
        }))
        const interv: UpdateUserInput[] | any = project?.interviewers?.map((c: any) => ({
            id: c?.value
        }))
        try {
            const response = await mutate({
                variables: {
                    input: {
                        project: {
                            name: project?.name,
                            generalDescription: project?.generalDescription,
                            interviewerOrientations: project?.interviewerOrientations,
                            numberOfEstimatedInterviews: project?.numberOfEstimatedInterviews,
                            terms: project?.terms,
                            coordinators: coord,
                            interviewers: interv,
                        }
                    }
                }
            })
            return response?.data?.createOneProject ?? null
        } catch (err) {
            console.log(err)
            toast({
                title: 'Erro ao criar projeto',
                status: 'error',
            })
        }
    }
    async function handleCreate() {
        const response = await createProject({
            project: {
                name: 'Novo Projeto',
                numberOfEstimatedInterviews: 10,
            }
        })
        if (response) {
            router.push(`/dashboard/projects/${response?.id}`)
        }
    }
    return {
        handleCreate
    }
}
export default useCreateOneProject;