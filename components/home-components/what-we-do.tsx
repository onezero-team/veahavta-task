import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Card from '../modular-components/Card'

export default function WhatWeDo({ data }: HomePageType) {
  const cards = data.homepage.whatWeDoCards
  return (
    <WrapperLarge>
      <div>
        <div className="whatWeDo-text">
          <h2 className="whatWeDo__heading">{data.homepage.whatWeDoHeading}</h2>
          <h3 className="whatWeDo__title">{data.homepage.whatWeDoTitle}</h3>
          <div className="cards">
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
        <style jsx>{`
          div {
            margin-top: 5%;
            display: flex;
            flex-direction: column;
          }
          .whatWeDo-text {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          .whatWeDo__heading {
            font-weight: 400;
            font-size: 28px;
            color: #d25c78;
          }
          .whatWeDo__title {
            font-weight: 700;
            font-size: 82px;
          }
          .cards {
            display: flex;
            flex-direction: row;
            justify-content: center;
            column-gap: 5%;
          }
        `}</style>
      </div>
    </WrapperLarge>
  )
}
