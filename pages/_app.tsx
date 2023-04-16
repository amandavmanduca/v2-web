import { CustomApolloProvider } from '@app/server/apollo'
import { AuthProvider } from '@app/src/context/auth'
import '@app/styles/Home.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { extendTheme } from '@chakra-ui/react'
import { colors } from '@app/src/common/theme'

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CustomApolloProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </CustomApolloProvider>
    </ChakraProvider>
  )
}
