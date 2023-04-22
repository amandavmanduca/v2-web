import { Interview, useGetInterviewLazyQuery } from "@app/graphql/generated"

const useGetInterview = () => {
    const [fetch, { loading }] = useGetInterviewLazyQuery({
        fetchPolicy: "network-only"
    })
    async function getInterview(id: string): Promise<Interview | null | any> {
        const response = await fetch({
            variables: {
                id: id
            }
        })
        return response?.data?.interview ?? null
    }
    return {
        getInterview,
        loading
    }
}
export default useGetInterview;