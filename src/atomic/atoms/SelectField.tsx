import Select, { components, Props } from "react-select";

const SelectField = (props: Props) => {
    return (
        <Select isClearable defaultValue={props?.defaultValue} {...props} />
    )
}

export default SelectField;