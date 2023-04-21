import { CSSProperties, HTMLInputTypeAttribute } from 'react';
import { Field as FinalFormField, SupportedInputs } from 'react-final-form'
import { Flex, FormLabel, Input, Select, Textarea } from '@chakra-ui/react';
import SelectField from './SelectField';
import { Maybe } from 'graphql/jsutils/Maybe';

export type FormFieldProps = {
    name: string;
    component: {
        type: SupportedInputs;
        options?: {
            value: string | number;
            label:  Maybe<string> | undefined;
        }[],
        isMulti?: boolean
    };
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    label?: string;
    style?: CSSProperties | undefined
    onBlur?: any
}

const FormField: React.FunctionComponent<FormFieldProps> = ({
    name,
    component,
    type = 'text',
    placeholder,
    label,
    style,
    onBlur,
}: FormFieldProps) => {
    const components = {
        input: Input,
        textarea: Textarea,
        select: SelectField,
    }
    const SelectedComponent = components[component.type]
    return (
    <FinalFormField
        name={name}
        component={component.type}
        placeholder={placeholder}
    >
        {({ input, meta }) => {
        const isMulti = {
            isMulti: component?.isMulti
        }
        return (
          <Flex display="grid" style={{ width: '100%', ...style }}>
            {label && <FormLabel w="100%">{label}</FormLabel>}
            <SelectedComponent
                placeholder={placeholder}
                type={type}
                style={{ width: '100%', backgroundColor: 'white' }}
                {...input}
                options={component?.options}
                onBlur={onBlur}
                {...component.type === 'select' && isMulti}
            />
            {meta?.touched && meta?.error && <span>{meta?.error}</span>}
          </Flex>
        )}}
    </FinalFormField>
    )
}

export default FormField;