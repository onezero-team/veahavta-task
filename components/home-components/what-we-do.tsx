import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import { Heading, PageHeader } from '../data-components/header-text'
import Card from './Card'

export default function WhatWeDo({ data }: HomePageType) {
  return (
    <>
      <Heading className="text-red text-center pt-48">
        {data.homepage.whatWeDoHeading}
      </Heading>
      <PageHeader>{data.homepage.whatWeDoTitle}</PageHeader>
      <WrapperLarge className=" grid-cols-4-auto mx-auto gap-6 mt-14">
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
