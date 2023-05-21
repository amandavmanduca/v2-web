import { UserRoleEnum } from "@app/graphql/generated";

export const roleLabel = {
    [UserRoleEnum.Admin]: "Administrador",
    [UserRoleEnum.Coordinator]: "Coordenador",
    [UserRoleEnum.Interviewer]: "Entrevistador",
    [UserRoleEnum.Visitor]: "Visitante",
}