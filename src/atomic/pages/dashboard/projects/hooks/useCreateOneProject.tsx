import { CreateOneProjectInput, UpdateUserInput, useCreateOneProjectMutation } from "@app/graphql/generated"

const useCreateOneProject = () => {
    const [mutate] = useCreateOneProjectMutation({
        refetchQueries: ['getProjects']
    })
    async function createProject({ project }: CreateOneProjectInput) {
        const coord: UpdateUserInput[] | any = project?.coordinators?.map((c: any) => ({
            id: c?.value
        }))
        const interv: UpdateUserInput[] | any = project?.interviewers?.map((c: any) => ({
            id: c?.value
        }))
        await mutate({
            variables: {
                input: {
                    project: {
                        name: project?.name,
                        generalDescription: project?.generalDescription,
                        interviewerOrientations: project?.interviewerOrientations,
                        terms: project?.terms,
                        coordinators: coord,
                        interviewers: interv,
                    }
                }
            }
        })
    }
    return {
        createProject
    }
}
export default useCreateOneProject;