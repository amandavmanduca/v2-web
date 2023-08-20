import { Project, useGetProjectsLazyQuery } from "@app/graphql/generated"

const useGetProjects = () => {
    const [fetch, { loading }] = useGetProjectsLazyQuery({
        fetchPolicy: 'no-cache'
    })
    async function getProjects(): Promise<{
        projects: Project[] | [] | any,
    }> {
        const response = await fetch()
        return {
            projects: response?.data?.projects?.nodes ?? [],
        }
    }
    return {
        getProjects,
        loading
    }
}
export default useGetProjects;