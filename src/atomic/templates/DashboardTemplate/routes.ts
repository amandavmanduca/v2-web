import { UserRoleEnum } from "@app/graphql/generated";

export type RouteProps = {
    name: string;
    path: string;
    permission: UserRoleEnum[] | string[]
}

export const routesOptions = [
    {
        name: 'Projetos',
        path: '/dashboard/projects',
        permission: [UserRoleEnum.Coordinator, UserRoleEnum.Interviewer]
    },
    {
        name: 'Formulário de Pesquisa',
        path: '/dashboard/templates',
        permission: [UserRoleEnum.Coordinator]
    },
    {
        name: 'Entrevistas',
        path: '/dashboard/interviews',
        permission: [UserRoleEnum.Coordinator, UserRoleEnum.Interviewer]
    },
]

export function routes(role: UserRoleEnum): RouteProps[] {
    return routesOptions?.filter((r: RouteProps) => r?.permission?.length === 0 || r?.permission?.includes(role))
}