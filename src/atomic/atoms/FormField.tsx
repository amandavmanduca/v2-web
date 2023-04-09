import { CSSProperties } from 'react';
import { Field as FinalFormField, SupportedInputs } from 'react-final-form'

export interface IFormField {
    name: string;
    component: SupportedInputs;
    placeholder?: string
    label?: string
    style?: CSSProperties | undefined
}

export type FormFieldProps = {
    name: string;
    component: SupportedInputs;
    placeholder?: string;
    label?: string;
    style?: CSSProperties | undefined
}

const FormField: React.FunctionComponent<IFormField> = ({
    name,
    component,
    placeholder,
    label,
    style
}: FormFieldProps) => {
    return (
    <FinalFormField  
        name={name}
        component={component}
        placeholder={placeholder}
    >
        {({ input, meta }) => (
          <div style={{ width: '100%', ...style }}>
            {label && <label>{label}</label>}
            <input type="text" {...input} style={{ width: '100%' }} />
            {meta?.touched && meta?.error && <span>{meta?.error}</span>}
          </div>
        )}
    </FinalFormField>
    )
}

export default FormField;