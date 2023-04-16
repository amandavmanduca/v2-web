import Button from "@app/src/atomic/atoms/Button";
import FormField, { FormFieldProps } from "@app/src/atomic/atoms/FormField";
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
  fields
}: {
  onSubmit: (values: any) => void;
  validate?: ((values: any) => ValidationErrors | Promise<ValidationErrors>) | undefined;
  title: string
  initialValues?: any;
  submitButton?: string;
  resetButton?: string | null
  fields: FormFieldProps[]
}) => {

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialValues}
      render={({ handleSubmit, form: { reset } }) => (
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <h2>{title}</h2>
          <Flex
            display="grid"
            gridGap="10px"
            marginTop="20px"
          >
            {fields?.map((field: FormFieldProps, index: number) => (
              <FormField key={index} {...field} />
            ))}
          </Flex>
          <Flex gridGap="10px" marginTop="20px">
            {resetButton && <Button type="reset" onClick={() => reset()}>{resetButton}</Button>}
            <Button type="submit">{submitButton}</Button>
          </Flex>
        </form>
      )}
    />
  );
};
export default FormProvider;