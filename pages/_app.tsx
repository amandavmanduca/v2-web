import { ApolloProvider } from '@apollo/client'
import { client } from '@app/server/apollo/client'
import '@app/styles/Home.module.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
