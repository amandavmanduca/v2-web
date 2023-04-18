import { Project, useGetMyCreatedProjectsLazyQuery, useGetMyCreatedProjectsQuery } from "@app/graphql/generated"

const useGetMyCreatedProjects = () => {
    const [fetch] = useGetMyCreatedProjectsLazyQuery()
    async function getProjects(): Promise<{
        allProjects: Project[] | [] | any,
        withoutTemplate: Project[] | [] | any
    }> {
        const response = await fetch()
        return {
            allProjects: response?.data?.me?.createdProjects ?? [],
            withoutTemplate: response?.data?.me?.createdProjects?.filter(p => p?.template === null) ?? []
        }
    }
    return {
        getProjects
    }
}
export default useGetMyCreatedProjects;