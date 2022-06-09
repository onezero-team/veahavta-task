import { useWindowSize } from '@/lib/hooks/useResize'
import { HomePageType } from '@/lib/interface'
import React, { useMemo, useState } from 'react'
import { WrapperLarge } from '../wrapper'
import MobileCards from './mobile-cards'
import DesktopCards from './desktop-cards'

export default function WhatWeDo({ data }: HomePageType) {
  const { whatWeDoHeading, whatWeDoTitle, whatWeDoCards } = data.homepage

  const heading = useMemo(() => whatWeDoHeading, [whatWeDoHeading])
  const title = useMemo(() => whatWeDoTitle, [whatWeDoTitle])

  const { width } = useWindowSize()

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = () => {
    let newSlide =
      currentSlide === whatWeDoCards.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const handlePrevSlide = () => {
    let newSlide =
      currentSlide === 0 ? whatWeDoCards.length - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  return (
    <WrapperLarge>
      <div
        className="relative flex animate-fadeIn mobile:flex mobile:flex-col h-auto
         sm:h-auto  mobile:mt-16 sm:mt-10 sm:flex-col justify-center sm:items-center
         mobile:h-auto w-full 
      "
      >
        {width && whatWeDoCards.length > 0 && width < 1024 && (
          <>
            <span className="text-red text-xl text-right mr-5 ">
              {whatWeDoHeading}
            </span>
            <div
              className="mt-20 mobile:mt-3 flex justify-center
             sm:mt-2 md:mt-2 "
            >
              <MobileCards
                handleNextSlide={handleNextSlide}
                handlePrevSlide={handlePrevSlide}
                whatWeDoCards={whatWeDoCards}
                currentSlide={currentSlide}
              />
            </div>
          </>
        )}
        {width && whatWeDoCards.length > 0 && width > 1024 && (
          <DesktopCards
            whatWeDoTitle={title}
            whatWeDoHeading={heading}
            whatWeDoCards={whatWeDoCards}
          />
        )}
      </div>
    </WrapperLarge>
  )
}
