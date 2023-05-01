import { Project, UpdateOneProjectInput, UpdateUserInput, useUpdateOneProjectMutation } from "@app/graphql/generated"

const useUpdateOneProject = () => {
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
        }
    }
    return {
        updateProject
    }
}
export default useUpdateOneProject;