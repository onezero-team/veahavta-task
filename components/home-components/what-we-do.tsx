import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Card from '../modular-components/Card'

export default function WhatWeDo({ data }: HomePageType) {
  const cards = data.homepage.whatWeDoCards
  return (
    <WrapperLarge>
      <div className="mt-20 flex flex-col mobile:items-center" id="support-us">
        <div className="items-center flex flex-col">
          <h2 className=" text-3xl  text-red  mobile:text-xl">
            {data.homepage.whatWeDoHeading}
          </h2>
          <h3 className="font-bold  text-8xl mobile:hidden">
            {data.homepage.whatWeDoTitle}
          </h3>
          <div className="mt-10 flex flex-row justify-center gap-x-10  max-w-max mobile:flex-col">
            {cards.map((card, index) => (
              <Card
                key={index}
                link={card.imagePath}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </div>
    </WrapperLarge>
  )
}
