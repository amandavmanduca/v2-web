import { CustomApolloProvider } from '@app/server/apollo'
import { AuthProvider } from '@app/src/context/auth'
import '@app/styles/Home.module.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomApolloProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </CustomApolloProvider>
  )
}
