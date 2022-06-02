import { HomePageType } from '@/lib/interface'
import React, { useEffect, useState } from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'

export default function WhatWeDo({ data }: HomePageType) {
  const [numCard, setNumCard] = useState(0)
  const [innerWidth, setinnerWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setinnerWidth(window.innerWidth)
    }
    function handleResize() {
      setinnerWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    console.log(innerWidth);
  }, [innerWidth])

  const clinicService = (
    <div className="flex flex-row justify-between">
      {data.homepage.whatWeDoCards.map((item, index) => {
        if (innerWidth < 640 ? index === numCard : index !== 5) {
          return (
            <div
              className="w-11/12 sm:w-1/4 border-2 border-contact-bg rounded-3xl mx-auto sm:mx-3"
              key={index}
            >
              <div className="h-60 bg-contact-bg rounded-t-3xl flex justify-center items-center">
                <div className="h-2/5 w-2/5 relative">
                  <Image
                    src={item.imagePath}
                    alt=""
                    width={'100%'}
                    height={'100%'}
                    layout="fill"
                  />
                </div>
              </div>
              <div className="h-64 p-5 flex flex-col justify-start ">
                <div className="text-3xl text-header-blue font-bold">
                  {item.title}
                </div>
                <div className="text-2xl md:text-2xl lg:text-lg mt-2">{item.text}</div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )

  return (
    <WrapperLarge>
      <div className="z-10 w-full bg-light">
        <div className="px-5 w-full sm:w-3/4 mt-28 sm:mt-8 sm:mb-24 sm:mx-auto sm:h-[40rem] relative">
          <div className="text-xl sm:text-3xl text-brown sm:text-center">
            {data.homepage.whatWeDoHeading}{' '}
          </div>
          <div className="hidden sm:block text-7xl mt-4 font-bold text-center">
            {data.homepage.whatWeDoTitle}
          </div>
          <div className="mt-6 text-2xl md:text-2xl lg:text-lg sm:mt-14 relative">
            <button
              className="w-16 h-16 rounded-full bg-light shadow-4xl flex items-center justify-center absolute right-0 top-52 sm:hidden"
              onClick={() =>
                numCard === 3 ? setNumCard(0) : setNumCard(numCard + 1)
              }
            >
              <div className="w-12 h-12 relative flex items-center justify-center rotate-180">
                <Image
                  src={'/arrow.png'}
                  alt=""
                  width={'100%'}
                  height={'100%'}
                  layout="fill"
                />
              </div>
            </button>
            <button
              className="w-16 h-16 rounded-full bg-light shadow-4xl flex items-center justify-center absolute left-0 top-52 sm:hidden"
              onClick={() =>
                numCard === 0 ? setNumCard(3) : setNumCard(numCard - 1)
              }
            >
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Image
                  src={'/arrow.png'}
                  alt=""
                  width={'100%'}
                  height={'100%'}
                  layout="fill"
                />
              </div>
            </button>

            <div className="mx-auto">{clinicService}</div>
          </div>
        </div>
      </div>
    </WrapperLarge>
  )
}
