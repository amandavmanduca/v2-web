import { InterviewTemplate, useGetTemplateLazyQuery } from "@app/graphql/generated"

const useGetTemplate = () => {
    const [fetch, { loading }] = useGetTemplateLazyQuery({
        fetchPolicy: "network-only"
    })
    async function getTemplate(id: string): Promise<InterviewTemplate | null | any> {
        const response = await fetch({
            variables: {
                id: id
            }
        })
        return response?.data?.interviewTemplate ?? null
    }
    return {
        getTemplate,
        loading
    }
}
export default useGetTemplate;