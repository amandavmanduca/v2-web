import { User } from "@app/graphql/generated";
import { UserRoleEnum, useGetUsersToProjectsLazyQuery } from "@app/graphql/generated";

const useGetUsersToProject = () => {
    const limit = 50
    const [fetch] = useGetUsersToProjectsLazyQuery({
        variables: {
            filter: {
                role: { in: [UserRoleEnum.Coordinator, UserRoleEnum.Interviewer]}
            },
            paging: {
                limit: limit
            }
        },
        fetchPolicy: 'network-only',
    });

    async function getAllUsers(): Promise<{
        allUsers: User[] | [],
        coordinators: User[] | [],
        interviewers: User[] | []
    }> {
        let offset = 0
        let allUsers: User[] | [] = [];
        let hasMoreData = true
        do {
            const response = await fetch({
                variables: {
                    paging: {
                        limit: limit,
                        offset: offset
                    }
                }
            })
            offset = offset + limit
            //@ts-ignore
            allUsers = [...allUsers, ...response?.data?.users?.nodes]
            if (!response?.data?.users?.pageInfo?.hasNextPage) {
                hasMoreData = false
                break;
            }
        } while (hasMoreData === true)
        return {
            allUsers: allUsers,
            coordinators: allUsers?.filter?.((u: User) => u?.role === UserRoleEnum.Coordinator),
            interviewers: allUsers?.filter?.((u: User) => u?.role === UserRoleEnum.Interviewer),
        }
    }
    return {
        getAllUsers
    }
}
export default useGetUsersToProject;