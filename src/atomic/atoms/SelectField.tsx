import Select, { Props } from "react-select";
import Creatable from 'react-select/creatable';

interface SelectFieldProps extends Props {
    isCreatable?: boolean
    disabled?: boolean
}

const SelectField = ({ disabled, ...props}: SelectFieldProps) => {
    const type = props?.isCreatable ? 'creatable' : 'default'
    const typeOptions = {
        default: Select,
        creatable: Creatable
    }
    const SelectType = typeOptions[type]
    return (
        <SelectType
            isClearable
            defaultValue={props?.defaultValue}
            instanceId={props?.name}
            onBlur={props?.onBlur}
            isDisabled={disabled}
            {...props}
        />
    )
}

export default SelectField;