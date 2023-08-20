import { GetTemplatesDocument, InterviewTemplate, Project, UserRoleEnum } from "@app/graphql/generated";
import SelectField from "@app/src/atomic/atoms/SelectField";
import Text from "@app/src/atomic/atoms/Text";
import GeneralCard from "@app/src/atomic/molecules/GeneralCard";
import useGetProjects from "@app/src/atomic/pages/dashboard/projects/hooks/useGetProjects";
import useCreateOneTemplate from "@app/src/atomic/pages/dashboard/templates/hooks/useCreateOneTemplate";
import DashboardTemplate from "@app/src/atomic/templates/DashboardTemplate"
import LayoutTemplate from "@app/src/atomic/templates/LayoutTemplate";
import { SelectOption, SelectOptions } from "@app/src/common/types/select";
import { BaseActionsEnum, ModuleTypesEnum } from "@app/src/common/utils/role-permissions";
import { useAuthContext } from "@app/src/context/auth";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Templates = () => {
    const { me } = useAuthContext()
    const { handleCreate } = useCreateOneTemplate()

    const { getProjects, loading } = useGetProjects()
    const [projects, setProjects] = useState<SelectOptions | null>(null);
    const [selectedProject, setSelectedProject] = useState<SelectOption | null>(null);

    useEffect(() => {
        (async() => {
            const response = await getProjects();
            if (response?.projects) {
                const projectsArray= response?.projects?.map((p: Project) => ({
                    value: p?.id,
                    label: p?.name
                }))
                setProjects(projectsArray)
            }
        })()
    }, [])

    return (
        <DashboardTemplate title="Formulário de Pesquisa">
            <div style={{ marginBottom: '20px' }}>
                <SelectField
                    options={projects ?? []}
                    name="project"
                    value={selectedProject}
                    onChange={(v: any) => setSelectedProject(v)}
                    placeholder="Selecione o projeto"
                    isMulti={false}
                />
            </div>
            {loading && <Spinner />}
            {selectedProject?.value && (  
                <LayoutTemplate
                    paginatedQueryName="interviewTemplates"
                    query={GetTemplatesDocument}
                    options={{
                        limit: 9,
                        variables: {
                            filter: {
                                projectId: { eq: selectedProject?.value }
                            }
                        }
                    }}
                    handleNew={{
                        handleNew: handleCreate,
                        titleComplement: "Modelo",
                        action: BaseActionsEnum.create,
                        module: ModuleTypesEnum.InterviewTemplate,
                        role: me?.role as UserRoleEnum
                    }}
                    refetchFilter={(value: string, refetch: any) => refetch({
                        filter: {
                            and: [
                                {
                                    projectId: { eq: selectedProject?.value }
                                },
                                {
                                    or: [
                                        {
                                            name: { iLike: `%${value}%` }
                                        },
                                        {
                                            project: {
                                                name: { iLike: `%${value}%` } 
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    })}
                    Card={({ item }: { item: InterviewTemplate }) => (
                        <GeneralCard
                            cardtitle={item?.name}
                        >
                            {item?.project?.name && <Text>Projeto: [{item?.project?.name}]</Text>}
                            <Text
                                style={{ cursor: 'pointer' }}
                                _hover={{ textDecoration: 'underline' }}
                                alignSelf="end"
                                display="flex"
                                height="100%"
                                alignItems="flex-end"
                            >
                                <a href={`/dashboard/templates/${item?.id}`} target="_blank">Ver Detalhes</a>
                            </Text>
                        </GeneralCard>
                    )}
                />
            )}
        </DashboardTemplate>
    )
}
export default Templates;