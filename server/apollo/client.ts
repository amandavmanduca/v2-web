import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { NEXT_PUBLIC_API_URL } from '@app/constants';

export const client = new ApolloClient({
    uri: NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache(),
});