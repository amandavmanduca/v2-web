import { Maybe } from "@app/graphql/generated";

export type SelectOptions = SelectOption[] | []

export type SelectOption = {
    value: string;
    label: Maybe<string> | undefined;
}