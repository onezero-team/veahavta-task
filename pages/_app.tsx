import Layout from '@/components/layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useRef, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [aboutTheClinicRef, setAboutTheClinicRef] =
    useState<HTMLDivElement | null>(null)
  const [whatWeDoRef, setWhatWeDo] = useState<HTMLDivElement | null>(null)
  const [contactRef, setContactRef] = useState<HTMLDivElement | null>(null)
  const [formMobileRef, setFormMobileRef] = useState<HTMLDivElement | null>(
    null,
  )

  function getRef(type: string, ref: any) {
    if (type === 'about') {
      setAboutTheClinicRef(ref)
    }

    if (type === 'whatWeDo') {
      setWhatWeDo(ref)
    }

    if (type === 'contact') {
      setContactRef(ref)
    }

    if (type === 'mobile') {
      setFormMobileRef(ref)
    }
  }

  return (
    <Layout
      pageProps={pageProps}
      aboutRef={aboutTheClinicRef}
      contactRef={contactRef}
      mobileRef={formMobileRef}
    >
      <Component
        {...pageProps}
        getRef={getRef}
        about={aboutTheClinicRef}
        what={whatWeDoRef}
      />
    </Layout>
  )
}

export default MyApp
