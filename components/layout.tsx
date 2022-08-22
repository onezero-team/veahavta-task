import Footer from '@/components/footer'
import Header from './Header'
import Main from './Main'
import { useLocale } from '@/lib/hooks'
import theme from '@/lib/theme.preval'
import React from 'react'

export default function Layout({ children, pageProps }: any) {
  const { dir, router } = useLocale()
  if (['/404', '/500'].includes(router.pathname)) {
    return <>{children}</>
  }

  return (
    <>
      <div className="app-wrapper" dir={dir}>
        <Header data={pageProps.data} />
        <Main>{children}</Main>
        <Footer data={pageProps.data} />
      </div>
      <style jsx global>
        {`
          html {
            min-height: 100% !important;
            height: 100%;
            scroll-behavior: smooth;
          }

          body {
            min-height: 100% !important;
            height: 100%;
          }

          body::-webkit-scrollbar {
            display: none;
          }

          #__next {
            min-height: -webkit-fill-available;
            height: 100%;
          }

          .app-wrapper {
            display: grid;
            flex-direction: column;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr auto;
            min-height: -webkit-fill-available;
            height: 100%;
          }

          *:focus-visible {
            outline: none !important;
          }

          .welcome-div {
            background: linear-gradient(
              109.17deg,
              #f4f3fd 38.49%,
              #d3d1fc 72.36%
            );
          }

          div.background {
            background: linear-gradient(
              109.17deg,
              #f4f3fd 38.49%,
              #d3d1fc 72.36%
            );
          }
        `}
      </style>
    </>
  )
}
