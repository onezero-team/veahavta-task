import Layout from '@/components/layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any
  return (
    <Layout pageProps={pageProps}>
      <AnyComponent {...pageProps} />
    </Layout>
  )
}

export default MyApp
