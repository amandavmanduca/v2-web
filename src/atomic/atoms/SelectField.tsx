import Select, { components, Props } from "react-select";

const SelectField = (props: Props) => {
    return (
        <Select isClearable {...props} />
    )
}

export default SelectField;