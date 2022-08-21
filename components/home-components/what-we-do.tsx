import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import CarouselCards from '../carousel'

export default function WhatWeDo({ data }: HomePageType) {
  return (
    <WrapperLarge className='mt-[192px] sm:mt-[121px]'>
      <h3 className="text-red text-md justify-self-center sm:justify-self-start">{data.homepage.whatWeDoHeading}</h3>
      <h2 className='font-bold text-xxl text-center mb-[58px] sm:hidden'>{data.homepage.whatWeDoTitle}</h2>
      <CarouselCards data={data}></CarouselCards>
    </WrapperLarge>
  )
}
