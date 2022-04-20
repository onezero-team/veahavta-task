import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import { WhatWeDoCard } from '../data-components/what-we-do-card'

export default function WhatWeDo({ data }: HomePageType) {
  console.log('data:', data)

  return (
    <WrapperLarge>
      <section className="what-we-do mb-64">
        <div className="header-container flex flex-col items-center">
          <h3 className="text-red text-xl font-normal mt-10 mb-3">
            {data.homepage.whatWeDoHeading}
          </h3>
          <h2 className="text-7xl font-bold  mb-12 text-center">
            {data.homepage.whatWeDoTitle}
          </h2>
        </div>

        <div className="cards-container flex justify-center">
          <div className="cards-list grid grid-cols-4 gap-6 items-center w-fit">
            {data.homepage.whatWeDoCards.map((card, idx) => (
              <WhatWeDoCard card={card} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </WrapperLarge>
  )
}
