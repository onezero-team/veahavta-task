import AboutTheClinic from '@/components/home-components/about-the-clinic'
import Banner from '@/components/home-components/banner'
import ContactUs from '@/components/home-components/contact-us'
import WhatWeDo from '@/components/home-components/what-we-do'
import { HomePageType, HOMEPAGE_QUERY } from '@/lib/interface'
import { NextPageContext } from 'next'
import { request } from '../lib/datocms'

export async function getStaticProps({ locale }: NextPageContext) {
  let data: any
  try {
    data = await request({
      query: HOMEPAGE_QUERY(locale as string),
    })
  } catch {
    console.warn(
      '\x1b[33m%s\x1b[0m',
      '[ USING MOCK DATA ]: Failed to receive data from datocms, probably because .env.local file is missing.',
    )
    data =
      locale === 'he'
        ? require('../mockData/he.json')?.data
        : require('../mockData/en.json')?.data
  }

  return {
    props: { data },
  }
}

export default function Home({ data }: HomePageType) {
  return (
    <div className="grid grid-cols-1 gap-y-16">
      <Banner data={data} />
      <AboutTheClinic data={data} />
      <WhatWeDo data={data} />
      <ContactUs data={data} />
    </div>
  )
}
