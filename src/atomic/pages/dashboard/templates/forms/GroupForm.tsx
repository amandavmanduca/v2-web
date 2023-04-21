import { FormFieldProps } from "@app/src/atomic/atoms/FormField";
import FormProvider from "@app/src/providers/FormProvider";
import useCreateOneGroup from "../hooks/useCreateOneGroup";
import useUpdateOneGroup from "../hooks/useUpdateOneGroup";
import { useState } from "react";
import { QuestionGroup } from "@app/graphql/generated";

type GroupFormProps = {
    templateId: string
}

const GroupForm = ({
    templateId
}: GroupFormProps) => {
    const [group, setGroup] = useState<QuestionGroup | null>(null)
    const { createGroup } = useCreateOneGroup()
    const { updateGroup } = useUpdateOneGroup()

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

    async function handleCreate(values: any) {
        const created = await createGroup({
            questionGroup: {
                name: values?.name,
                description: values?.description ?? '',
                templateId: values?.templateId
            }
        })
        if (created) {
            setGroup(created)
        }
    }

    async function handleUpdate(values: any) {
        const updated = await updateGroup({
            id: values?.id,
            update: {
                id: values?.id,
                name: values?.name,
                description: values?.description ?? '',
                templateId: values?.templateId
            }
        })
        if (updated) {
            setGroup(updated)
        }
    }

    async function handleSubmit(values: any) {
        if (!group) {
            handleCreate(values)
        } else {
            handleUpdate(values)
        }
    }

    const initialValues = group ? {
        id: group?.id,
        templateId: group?.templateId,
        name: group?.name,
        description: group?.description,
    } : {
        templateId: templateId
    }

    return (
            <FormProvider
                title="Group"
                onSubmit={(v) => handleSubmit(v)}
                initialValues={initialValues}
                // validate={}
                submitButton="Salvar"
                fields={fields}
            />
    )
}
export default GroupForm;