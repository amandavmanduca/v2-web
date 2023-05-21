import Button from "@app/src/atomic/atoms/Button";
import FormField, { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import Text from "@app/src/atomic/atoms/Text";
import { Flex } from "@chakra-ui/react";
import { ValidationErrors } from "final-form";
import { Form } from 'react-final-form'

const FormProvider = ({
  onSubmit,
  validate,
  title,
  submitButton = 'Submit',
  resetButton = 'Limpar',
  initialValues = {},
  fields,
  submitOnBlur = false,
  displayButtons = true
}: {
  onSubmit: (values: any) => void;
  validate?: ((values: any) => ValidationErrors | Promise<ValidationErrors>) | undefined;
  title: string;
  initialValues?: any;
  submitButton?: string;
  resetButton?: string | null;
  fields: FormFieldProps[];
  submitOnBlur?: boolean;
  displayButtons?: boolean;
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialValues}
      render={({ handleSubmit, form: { reset } }) => (
        <form
          style={{
            width: '100%',
            marginTop: '0px',
            marginBottom: '10px'
          }}
          onSubmit={handleSubmit}
        >
          {/* <Text fontSize="20px" fontWeight="bold">{title}</Text> */}
          <Flex
            display="grid"
            gridGap="5px"
            marginTop="8px"
          >
            {fields?.map((field: FormFieldProps, index: number) => (
              <FormField key={index} {...field} {...(submitOnBlur) && { onBlur: handleSubmit }} />
            ))}
          </Flex>
          {displayButtons && (
            <Flex gridGap="5px" marginTop="20px">
              {resetButton && <Button type="reset" onClick={() => reset()}>{resetButton}</Button>}
              <Button type="submit">{submitButton}</Button>
            </Flex>
          )}
        </form>
      )}
    />
  );
};
export default FormProvider;