import { Maybe } from "@app/graphql/generated";

export type SelectOptions = {
    value: string;
    label: Maybe<string> | undefined;
}[] | []