import { Maybe } from "graphql/jsutils/Maybe";

export const setSelectedValue = (
    options: {
        value: string;
        label: Maybe<string> | undefined;
    }[] | [],
    selectedValue: string
) => {
    return options?.filter(v => v?.value === selectedValue) ?? {}
}

export const setSelectedArrayOfValues = (
    options: {
        value: string;
        label: Maybe<string> | undefined;
    }[] | [],
    selectedValuesId: string[]
) => {
    return options?.filter(v => selectedValuesId.includes(v?.value)) ?? {}
}

export const createAndsetSelectedValue = (options: string[] | []) => {
    return options?.map((o: string) => ({
        value: o,
        label: o
    }))
}