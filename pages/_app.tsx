import { useEffect } from 'react'
import Layout from '@/components/layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

import smoothscroll from 'smoothscroll-polyfill'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
