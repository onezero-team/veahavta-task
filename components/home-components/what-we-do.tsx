import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import {
  Heading,
  PageHeader,
  ServicesHeader,
} from '../data-components/header-text'
import Card from '../what-we-do-components/card'

export default function WhatWeDo({ data }: HomePageType) {
  return (
    <>
      <Heading className="text-red mx-5 pt-30 sm:text-center sm:pt-48">
        {data.homepage.whatWeDoHeading}
      </Heading>
      <ServicesHeader>{data.homepage.whatWeDoTitle}</ServicesHeader>
      <WrapperLarge className=" mt-6.5 grid-cols-4-auto mx-auto gap-6 sm:mt-14">
        {data?.homepage?.whatWeDoCards?.map((card, idx) => (
          <Card
            title={card.title}
            text={card.text}
            img={card.imagePath}
            key={idx}
          />
        ))}
      </WrapperLarge>
    </>
  )
}
