import { UserRoleEnum } from "@app/graphql/generated";

export enum BaseActionsEnum {
    read = 'read',
    create = 'create',
    update = 'update',
    delete = 'delete',
}

export enum ModuleTypesEnum {
    Project = 'Project',
    Interview = 'Interview',
    InterviewTemplate = 'InterviewTemplate',
  }

type PermissionType = {
    [key in UserRoleEnum]: {
        [key in ModuleTypesEnum]: BaseActionsEnum[];
    };
};

export function handlePermissions(role: UserRoleEnum, module: ModuleTypesEnum, action: BaseActionsEnum) {
    return permissions[role]?.[module]?.includes(action)
}

const permissions: PermissionType = {
    [UserRoleEnum.Admin]: {
        "Project": [BaseActionsEnum.read, BaseActionsEnum.update, BaseActionsEnum.delete],
        "Interview": [BaseActionsEnum.read, BaseActionsEnum.update, BaseActionsEnum.delete],
        "InterviewTemplate": [BaseActionsEnum.read, BaseActionsEnum.create, BaseActionsEnum.update, BaseActionsEnum.delete],
    },
    [UserRoleEnum.Coordinator]: {
        "Project": [BaseActionsEnum.read, BaseActionsEnum.create, BaseActionsEnum.update, BaseActionsEnum.delete],
        "Interview": [BaseActionsEnum.read, BaseActionsEnum.update, BaseActionsEnum.delete],
        "InterviewTemplate": [BaseActionsEnum.read, BaseActionsEnum.create, BaseActionsEnum.update, BaseActionsEnum.delete],
    },
    [UserRoleEnum.Interviewer]: {
        "Project": [BaseActionsEnum.read],
        "Interview": [BaseActionsEnum.read, BaseActionsEnum.create, BaseActionsEnum.update, BaseActionsEnum.delete],
        "InterviewTemplate": [BaseActionsEnum.read],
    },
    [UserRoleEnum.Visitor]: {
        "Project": [],
        "Interview": [],
        "InterviewTemplate": [],
    },
}