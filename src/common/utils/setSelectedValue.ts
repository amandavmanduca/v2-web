import { SelectOptions } from "../types/select";

export const setSelectedValue = (
    options: SelectOptions,
    selectedValue: string
) => {
    return options?.filter(v => v?.value === selectedValue) ?? {}
}

export const setSelectedArrayOfValues = (
    options: SelectOptions,
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