import FormField, { FormFieldProps, IFormField } from "@app/src/atomic/atoms/FormField";
import { ValidationErrors } from "final-form";
import { Form } from 'react-final-form'

const FormProvider = ({
  onSubmit,
  validate,
  title,
  submitButton = 'Submit',
  resetButton = 'Limpar',
  fields
}: {
  onSubmit: (values: any) => void;
  validate?: ((values: any) => ValidationErrors | Promise<ValidationErrors>) | undefined;
  title: string
  submitButton?: string;
  resetButton?: string | null
  fields: FormFieldProps[]
}) => {

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, form: { reset } }) => (
        <form onSubmit={handleSubmit}>
          <h2>{title}</h2>
          <div
            style={{
              display: 'grid',
              gridGap: '10px'
            }}
          >
            {fields?.map((field: IFormField, index: number) => (
              <FormField key={index} {...field} />
            ))}
          </div>
          {resetButton && <button type="reset" onClick={() => reset()}>{resetButton}</button>}
          <button type="submit">{submitButton}</button>
        </form>
      )}
    />
  );
};
export default FormProvider;