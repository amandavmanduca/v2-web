import Button from "@app/src/atomic/atoms/Button";
import { usePaginatedQuery, usePaginatedQueryProps } from "@app/src/common/hooks/usePaginatedQuery";
import { Flex } from "@chakra-ui/react";
import {
    ApolloQueryResult,
    DocumentNode,
    TypedDocumentNode,
  } from '@apollo/client'
import { useState, useEffect } from "react";

export type LayoutTemplateProps = {
    paginatedQueryName: string,
    query: DocumentNode | TypedDocumentNode<any, Record<string, any>>,
    Card: ({ item }: any) => JSX.Element,
    refetchFilter?: (v: string, variables?: Partial<Record<string, any>> | undefined) => Promise<ApolloQueryResult<any>> | null;
    options?: usePaginatedQueryProps,
}

const LayoutTemplate = ({
    paginatedQueryName,
    query,
    Card,
    refetchFilter,
    options,
}: LayoutTemplateProps) => {
    const [input, setInput] = useState('');
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

    const dataArray = data?.[paginatedQueryName]?.nodes

    async function handleSearch() {
        if(refetchFilter) {
            refetchFilter(input, refetch)
            setOffset(0)
        }
    }

    if (loading) {
        return <></>
    }

    return (
        <Flex display="grid" gridGap="20px">
            {refetchFilter && (
                <input
                    type="text"
                    value={input}
                    onChange={(v) => setInput(v?.target?.value)}
                    onKeyUp={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="Buscar por nome"
                    style={{ padding: '5px 10px' }}
                />
            )}
            <Flex display="grid" gap="15px" gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}>
                {dataArray?.map((item: any, index: number) => (
                    <Card key={index} item={item} style={{ width: '100%' }} />
                ))}
            </Flex>
            <Flex>
                {hasPrev && <Button onClick={() => prevPage()}>{"<"}</Button>}
                <Button>{page}</Button>
                {hasNext && <Button onClick={() => nextPage()}>{">"}</Button>}
            </Flex>
        </Flex>
    )
}
export default LayoutTemplate;