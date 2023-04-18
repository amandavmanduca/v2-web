import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import FormProvider from "@app/src/providers/FormProvider";
import useCreateOneGroup from "../hooks/useCreateOneGroup";

type GroupFormProps = {
    templateId: string
}

const GroupForm = ({
    templateId
}: GroupFormProps) => {
    const { createGroup } = useCreateOneGroup()
    const fields: FormFieldProps[] = [
        {
            label: "Nome",
            name: "name",
            type: 'text',
            component: {
                type: "input"
            },
            placeholder: "Digite o nome da seção"
        },
        {
            label: "Descrição",
            name: "description",
            type: 'text',
            component: {
                type: "textarea"
            },
            placeholder: "Descreva a seção"
        },
    ]

    async function handleSubmit(values: any) {
        await createGroup({
            questionGroup: {
                name: values?.name,
                description: values?.description ?? '',
                templateId: values?.templateId
            }
        })
    }
    return (
            <FormProvider
                title="Group"
                onSubmit={(v) => handleSubmit(v)}
                initialValues={{
                    templateId: templateId
                }}
                // validate={}
                submitButton="Salvar"
                fields={fields}
            />
    )
}
export default GroupForm;