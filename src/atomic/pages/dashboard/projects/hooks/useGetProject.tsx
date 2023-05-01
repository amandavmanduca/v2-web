import { Project, useGetProjectLazyQuery } from "@app/graphql/generated"

const useGetProject = () => {
    const [fetch, { loading }] = useGetProjectLazyQuery({
        fetchPolicy: "network-only"
    })
    async function getProject(id: string): Promise<Project | null | any> {
        const response = await fetch({
            variables: {
                id: id
            }
        })
        return response?.data?.project ?? null
    }
    return {
        getProject,
        loading
    }
}
export default useGetProject;