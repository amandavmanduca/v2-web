import { useMeLazyQuery } from "@app/graphql/generated";


export default function useMeLazy() {
  const [getMe, { data, refetch, loading }] = useMeLazyQuery();

  return {
    getMe,
    data,
    refetch,
    loading,
  };
}
