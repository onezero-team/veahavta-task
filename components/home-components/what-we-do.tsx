import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import { WhatWeDoCard } from '../data-components/what-we-do-card'

export default function WhatWeDo({ data }: HomePageType) {
  return (
    <WrapperLarge id="what-we-do">
      <section className="what-we-do mb-12 sm:mb-65">
        <div className="header-container flex flex-col items-center">
          <h3 className="text-red text-base sm:text-xl font-normal mt-10 mb-3">
            {data.homepage.whatWeDoHeading}
          </h3>
          <h2 className="text-4xl sm:text-7xl font-bold  mb-12 text-center">
            {data.homepage.whatWeDoTitle}
          </h2>
        </div>

        <div className="cards-container flex justify-center">
          <div className="cards-list grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center w-fit mb-12 sm:mb-52">
            {data.homepage.whatWeDoCards.map((card, idx) => (
              <WhatWeDoCard card={card} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </WrapperLarge>
  )
}
