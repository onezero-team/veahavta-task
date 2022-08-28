import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import CarouselCards from '../carousel'
import { PageHeader } from '../data-components/header-text'

export default function WhatWeDo({ data }: HomePageType) {
  return (
    <WrapperLarge className="mt-[192px] sm:mt-[121px]">
      <h3 className="text-red text-md justify-self-center sm:justify-self-start">
        {data.homepage.whatWeDoHeading}
      </h3>
      <PageHeader className="mb-[58px] sm:hidden">
        {data.homepage.whatWeDoTitle}
      </PageHeader>
      <CarouselCards data={data}></CarouselCards>
    </WrapperLarge>
  )
}
