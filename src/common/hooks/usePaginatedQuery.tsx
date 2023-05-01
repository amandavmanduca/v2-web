import { useCallback, useMemo, useState } from 'react'

import {
  DocumentNode,
  QueryHookOptions,
  TypedDocumentNode,
  useQuery,
} from '@apollo/client'
import { Maybe, SortDirection, SortNulls } from '@app/graphql/generated'

export type usePaginatedQueryProps = {
  limit?: number
  offset?: number
  sorting?: SortType | null
} & QueryHookOptions<any, Record<string, any>>

export type SortType = {
  field: string
  direction: SortDirection
  nulls?: Maybe<SortNulls>
  label?: string
} | null

export function usePaginatedQuery<Result>(
  paginatedQueryName: string,
  query: DocumentNode | TypedDocumentNode<any, Record<string, any>>,
  options?: usePaginatedQueryProps,
) {
  const [limit, setLimit] = useState(options?.limit ?? 20)
  const [offset, setOffset] = useState(options?.offset ?? 0)
  const [sorting, setSorting] = useState<SortType>(options?.sorting ?? null)
  
  if (options && !options?.fetchPolicy) options.fetchPolicy = 'network-only'

  let variables: any = {
    ...options?.variables,
    paging: { limit, offset },
  }

  if (sorting) {
    const sortingClone = {
      ...sorting
     }
    delete sortingClone.label
    variables = { ...variables, sorting: sortingClone }
  }

  const response = useQuery(query, {
    ...options,
    variables: variables,
  })

  const page = useMemo(
    () => Math.floor(offset / limit) + 1,
    [offset, limit],
  )

  const nextPage = useCallback(
    async (sortingCall: SortType = null) => {
      const refetchArray: any = {
        paging: {
          limit,
          offset: offset + limit,
        },
      }

      setSorting(sortingCall)
      await response.refetch(refetchArray)
      setOffset(offset + limit)
    },
    [limit, offset, response],
  )

  const prevPage = useCallback(
    async (sortingCall: SortType = null) => {
      const refetchArray: any = {
        paging: {
          limit,
          offset: offset - limit,
        },
      }
      setSorting(sortingCall)
      await response.refetch(refetchArray)
      setOffset(offset - limit)
    },
    [limit, offset, response],
  )

  const hasNext =
    response?.data?.[paginatedQueryName]?.pageInfo?.hasNextPage
  const hasPrev =
    response?.data?.[paginatedQueryName]?.pageInfo?.hasPreviousPage

  return {
    ...response,
    data: response?.data as Result,
    page,
    limit,
    offset,
    nextPage,
    prevPage,
    hasNext,
    hasPrev,
    setLimit,
    setOffset,
  }
}
