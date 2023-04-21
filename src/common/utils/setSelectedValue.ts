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