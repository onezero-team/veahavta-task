import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Card from '../data-components/card'

export default function WhatWeDo({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div className="text-redtxt text-xl pb-5 md:justify-self-center">
        {data.homepage.whatWeDoHeading}
      </div>
      <div
        className={`grid grid-cols-1 justify-self-center md:grid-cols-4 gap-5`}
      >
        <RenderCards cards={data.homepage.whatWeDoCards} />
      </div>
    </WrapperLarge>
  )
}

const RenderCards = ({ cards }: any) => (
  <>
    {cards.map((item: any, key: any) => {
      return (
        <Card
          path={item.imagePath}
          text={item.text}
          title={item.title}
          key={key}
        />
      )
    })}
  </>
)
