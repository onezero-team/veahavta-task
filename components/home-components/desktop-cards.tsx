import { CardProps } from '@/lib/interface'
import Image from 'next/image'
import React from 'react'

interface Iprops {
  whatWeDoHeading: string
  whatWeDoTitle: string
  whatWeDoCards: CardProps[]
}

function DesktopCards({
  whatWeDoHeading,
  whatWeDoTitle,
  whatWeDoCards,
}: Iprops) {
  return (
    <section className="flex flex-col h-125 text-center justify-center gap-8">
      <span className="text-red text-xl">{whatWeDoHeading}</span>
      <h2 className="font-bold lg:text-5xl text-center text-4xl w-full ">
        {whatWeDoTitle}
      </h2>

      <div className="cards w-full flex justify-center gap-10">
        {whatWeDoCards &&
          whatWeDoCards.map((card: CardProps) => {
            return (
              <div
                key={card.title}
                className="w-48 h-80 border-2 border-brown-bg rounded-xl  flex flex-col overflow-hidden"
              >
                <div className="w-48 h-32  flex flex-col justify-center box-border rounded-xl pl-1 ">
                  <div className="h-48 bg-lightPurple flex items-center">
                    <Image
                      src={card.imagePath}
                      width={192}
                      height={100}
                      layout={'fixed'}
                      className="bg-lightPurple rounded-sm"
                      alt={card.title}
                    />
                  </div>
                </div>
                <div className="flex flex-col  h-full">
                  <span className="text-xl text-right text-darkPurple font-bold pt-4 pr-2 ">
                    {card.title}
                  </span>
                  <p className="text-sm text-right p-1">{card.text}</p>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default DesktopCards
