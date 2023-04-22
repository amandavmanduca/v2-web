import { UserRoleEnum } from "@app/graphql/generated";

export type RouteProps = {
    name: string;
    path: string;
    permission: UserRoleEnum[] | string[]
}

const routesOptions = [
    {
        name: 'Projetos',
        path: '/dashboard/projects',
        permission: []
    },
    {
        name: 'Modelos',
        path: '/dashboard/templates',
        permission: [UserRoleEnum.Coordinator]
    },
    {
        name: 'Entrevistas',
        path: '/dashboard/interviews',
        permission: []
    },
]

export function routes(role: UserRoleEnum): RouteProps[] {
    return routesOptions?.filter((r: RouteProps) => r?.permission?.length === 0 || r?.permission?.includes(role))
}