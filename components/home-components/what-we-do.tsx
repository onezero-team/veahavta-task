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

  const Buttons = () => {
    return (
      <>
        <button
          className="absolute left-0 m-auto text-2xl
           inset-y-1/2 cursor-pointer text-gray-400 z-20
           bg-light border-2 border-brown-bg p-4 rounded-full h-16 w-16
           "
          onClick={handlePrevSlide}
        >
          &#10095;
        </button>
        <button
          className="absolute right-0 m-auto text-2xl
           inset-y-1/2 cursor-pointer text-gray-400 z-20
            bg-light p-4 rounded-full h-16 w-16
            border-2 border-brown-bg
            "
          onClick={handleNextSlide}
        >
          &#10094;
        </button>
      </>
    )
  }
  return (
    <WrapperLarge>
      <div className="relative animate-fadeIn mobile:flex mobile:flex-col">
        {width && whatWeDoCards && width < 450 ? (
          <>
            <Buttons />
            <span className="text-red text-xl text-center w-100">
              {whatWeDoHeading}
            </span>
            <div className="mt-20 mobile:mt-3">
              <MobileCards
                whatWeDoCards={whatWeDoCards}
                currentSlide={currentSlide}
              />
            </div>
          </>
        ) : (
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
