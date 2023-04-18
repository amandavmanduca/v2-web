import Select, { components, Props } from "react-select";

const SelectField = (props: Props) => {
    return (
        <Select isClearable defaultValue={props?.defaultValue} instanceId={props?.name} {...props} />
    )
}

export default SelectField;