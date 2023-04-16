import { CSSProperties, HTMLInputTypeAttribute } from 'react';
import { Field as FinalFormField, SupportedInputs } from 'react-final-form'
import { Flex, FormLabel, Input } from '@chakra-ui/react';

export type FormFieldProps = {
    name: string;
    component: SupportedInputs;
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    label?: string;
    style?: CSSProperties | undefined
}

const FormField: React.FunctionComponent<FormFieldProps> = ({
    name,
    component,
    type = 'text',
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
          <Flex display="grid" style={{ width: '100%', ...style }}>
            {label && <FormLabel w="100%">{label}</FormLabel>}
            <Input {...input} type={type} style={{ width: '100%' }} />
            {meta?.touched && meta?.error && <span>{meta?.error}</span>}
          </Flex>
        )}
    </FinalFormField>
    )
}

export default FormField;