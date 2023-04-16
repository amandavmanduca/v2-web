import { GetProjectsDocument, GetProjectsQuery } from "@app/graphql/generated";
import Button from "@app/src/atomic/atoms/Button";
import { usePaginatedQuery, usePaginatedQueryProps } from "@app/src/common/hooks/usePaginatedQuery";
import { Flex } from "@chakra-ui/react";
import {
    DocumentNode,
    TypedDocumentNode,
  } from '@apollo/client'

export type LayoutTemplateProps = {
    paginatedQueryName: string,
    query: DocumentNode | TypedDocumentNode<any, Record<string, any>>,
    Card: ({ item }: any) => JSX.Element,
    options?: usePaginatedQueryProps,
}

const LayoutTemplate = ({
    paginatedQueryName,
    query,
    Card,
    options,
}: LayoutTemplateProps) => {
    const {
        refetch,
        data,
        hasNext,
        hasPrev,
        setOffset,
        nextPage,
        prevPage,
        page,
        loading,
    } = usePaginatedQuery<any>(
        paginatedQueryName,
        query,
        options,
    )
    if (loading) {
        return <></>
    }
    const dataArray = data?.[paginatedQueryName]?.nodes

    if (dataArray?.length === 0) {
        return <p>Ops, não encontramos nada aqui</p>
    }
    return (
        <Flex display="grid" gridGap="20px">
            <Flex display="grid" gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}>
                {dataArray?.map((item: any, index: number) => (
                    <Card key={index} item={item} style={{ width: '100%' }} />
                ))}
            </Flex>
            <Flex>
                {hasPrev && <Button onClick={() => prevPage()}>Voltar</Button>}
                <Button>{page}</Button>
                {hasNext && <Button onClick={() => nextPage()}>Avançar</Button>}
            </Flex>
        </Flex>
    )
}
export default LayoutTemplate;