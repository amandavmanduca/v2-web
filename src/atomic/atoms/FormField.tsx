import { CSSProperties, HTMLInputTypeAttribute } from 'react';
import { Field as FinalFormField, SupportedInputs } from 'react-final-form'
import { Flex, FormLabel, Input, Textarea } from '@chakra-ui/react';
import SelectField from './SelectField';
import { Maybe } from 'graphql/jsutils/Maybe';
import Text from './Text';

export type FormFieldProps = {
    name: string;
    component: {
        type: SupportedInputs;
        options?: {
            value: string | number;
            label:  Maybe<string> | undefined;
        }[],
        isMulti?: boolean
        isCreatable?: boolean
    };
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    description?: Maybe<string> | undefined;
    label?: string;
    style?: CSSProperties | undefined
    disabled?: boolean
    onBlur?: any
}

const FormField: React.FunctionComponent<FormFieldProps> = ({
    name,
    component,
    type = 'text',
    placeholder,
    description,
    label,
    style,
    disabled = false,
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
        const isCreatable = {
            isCreatable: component?.isCreatable
        }
        return (
          <Flex display="grid" style={{ width: '100%', ...style }}>
            {label && (
                <FormLabel w="100%">
                    {label}
                    {description && <Text fontWeight="normal">Obs: <i>{description}</i></Text>}
                </FormLabel>
            )}
            <SelectedComponent
                placeholder={placeholder}
                type={type}
                disabled={disabled}
                style={{ width: '100%', backgroundColor: 'white' }}
                {...input}
                options={component?.options}
                onBlur={onBlur}
                {...component.type === 'select' && isMulti}
                {...component.type === 'select' && isCreatable}
            />
            {meta?.touched && meta?.error && <span style={{ fontSize: '12px', color: 'red', textAlign: 'right' }}>{meta?.error}</span>}
          </Flex>
        )}}
    </FinalFormField>
    )
}

export default FormField;