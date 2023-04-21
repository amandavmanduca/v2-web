import { Project, useGetMyCreatedProjectsLazyQuery, useGetMyCreatedProjectsQuery } from "@app/graphql/generated"

const useGetMyCreatedProjects = () => {
    const [fetch, { loading }] = useGetMyCreatedProjectsLazyQuery()
    async function getProjects({
        currentTemplateId
    }: {
        currentTemplateId?: string
    }): Promise<{
        allProjects: Project[] | [] | any,
        withoutTemplate: Project[] | [] | any
    }> {
        const response = await fetch()
        return {
            allProjects: response?.data?.me?.createdProjects ?? [],
            withoutTemplate: response?.data?.me?.createdProjects?.filter(p => p?.template === null || p?.template?.id === currentTemplateId) ?? []
        }
    }
    return {
        getProjects,
        loading
    }
}
export default useGetMyCreatedProjects;