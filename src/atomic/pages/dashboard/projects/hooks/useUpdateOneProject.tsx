import { Project, UpdateOneProjectInput, UpdateUserInput, useUpdateOneProjectMutation } from "@app/graphql/generated"
import useToast from "@app/src/common/hooks/useToast"

const useUpdateOneProject = () => {
    const toast = useToast()
    const [mutate] = useUpdateOneProjectMutation({
        refetchQueries: ['getProjects']
    })
    async function updateProject({ id, update }: UpdateOneProjectInput): Promise<Project | null | any> {
        const coord: UpdateUserInput[] | any = update?.coordinators?.map((c: any) => ({
            id: c?.value
        }))
        const interv: UpdateUserInput[] | any = update?.interviewers?.map((c: any) => ({
            id: c?.value
        }))
        try {
            const response = await mutate({
                variables: {
                    input: {
                        id: id,
                        update: {
                            ...update,
                            numberOfEstimatedInterviews: Number(update?.numberOfEstimatedInterviews),
                            coordinators: coord,
                            interviewers: interv,
                        }
                    }
                }
            })
            return response?.data?.updateOneProject ?? null
        } catch (err) {
            console.log(err)
            toast({
                title: 'Erro ao atualizar projeto',
                status: 'error',
            })
        }
    }
    return {
        updateProject
    }
}
export default useUpdateOneProject;