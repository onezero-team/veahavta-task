import { CardProps } from '@/lib/interface'
import Image from 'next/image'

interface Imobile {
  whatWeDoCards: CardProps[] | any
  currentSlide: number
}

function MobileCards({ whatWeDoCards, currentSlide }: Imobile) {
  return whatWeDoCards.map((card: CardProps, index: number) => {
    if (index === currentSlide) {
      return (
        <div key={card.title} className="border-2 m-9">
          <div
            key={card.title}
            className="flex flex-col h-100 items-center bg-light justify-between  "
          >
            <div className="bg-lightPurple w-full flex justify-center">
              <Image
                src={card.imagePath}
                width={150}
                height={205}
                key={card.title}
                layout={'fixed'}
                className="animate-fadeIn "
              />
            </div>
            <div className="flex flex-col h-1/2 w-2/3 pt-4">
              <span className="text-xl text-right text-darkPurple font-bold ">
                {card.title}
              </span>
              <p>{card.text}</p>
            </div>
          </div>
        </div>
      )
    }
  })
}

export default MobileCards
