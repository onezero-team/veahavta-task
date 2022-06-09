import { useLocale } from '@/lib/hooks'
import { CardProps } from '@/lib/interface'
import Image from 'next/image'

type Imobile = {
  whatWeDoCards: CardProps[]
  currentSlide: number
  handlePrevSlide: Function
  handleNextSlide: Function
}

const Buttons = ({ handlePrevSlide, handleNextSlide }: any) => {
  const local = useLocale()
  let dir = local.dir
  const btnOne = dir === 'rtl' ? '-left-8' : '-right-8'
  const btnTwo = dir === 'rtl' ? '-right-8' : '-left-8'
  return (
    <>
      <button
        className={` absolute ${btnOne}  m-auto text-2xl
                 inset-y-1/2 cursor-pointer text-gray-400 z-20
                  bg-light p-1 mobile:p-2 rounded-full h-16 w-16 mobile:h-14 mobile:w-14
                  border-2 border-brown-bg`}
        onClick={handlePrevSlide}
      >
        &#10095;
      </button>
      <button
        className={`absolute ${btnTwo} m-auto text-2xl
         inset-y-1/2 cursor-pointer text-gray-400 z-20
          bg-light p-4 mobile:p-1 rounded-full h-16 w-16 mobile:h-14 mobile:w-14
          border-2 border-brown-bg`}
        onClick={handleNextSlide}
      >
        &#10094;
      </button>
    </>
  )
}

function MobileCards({
  whatWeDoCards,
  currentSlide,
  handlePrevSlide,
  handleNextSlide,
}: Imobile): any {
  return whatWeDoCards.map((card: CardProps, index: number) => {
    if (index === currentSlide) {
      return (
        <div key={card.title}>
          <div
            className="border-2 mt-5 relative max-w-lg w-75
             mobile:w-64"
          >
            <Buttons
              handlePrevSlide={handlePrevSlide}
              handleNextSlide={handleNextSlide}
            />

            <div
              key={card.title}
              className="flex flex-col  h-96 items-center sm:w-72  bg-light justify-between  "
            >
              <div className="bg-lightPurple w-full h-1/2 flex justify-center">
                <Image
                  src={card.imagePath}
                  width={150}
                  height={200}
                  key={card.title}
                  layout={'fixed'}
                  alt={card.title}
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
        </div>
      )
    }
  })
}

export default MobileCards
