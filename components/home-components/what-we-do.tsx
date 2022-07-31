import { HomePageType } from '@/lib/interface'
import React, { useEffect, useState } from 'react'
import { WrapperLarge } from '../wrapper'
import Card from '../modular-components/Card.jsx'
import Image from 'next/image'
import RightArrow from '../../public/assets/rightArrow.svg'
import LeftArrow from '../../public/assets/leftArrow.svg'

export default function WhatWeDo({ data }: HomePageType) {
  const cards = data.homepage.whatWeDoCards
  const [current, setCurrent] = useState(0)
  const length = cards.length
  const [isComputer, setIsComputer] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
    if (window.innerWidth > 425) {
      setIsComputer(true)
    } else {
      setIsComputer(false)
    }
  }, [width])

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const backSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <WrapperLarge>
      <div className="mt-20 flex flex-col sm:items-center" id="support-us">
        <div className="items-center flex flex-col">
          <h2 className=" text-3xl  text-red  sm:text-2xl sm:self-start sm:mb-3">
            {data.homepage.whatWeDoHeading}
          </h2>
          <h3 className="font-bold  text-8xl sm:hidden md:text-6xl">
            {data.homepage.whatWeDoTitle}
          </h3>
          {isComputer ? (
            <div
              className="
            mt-10 
            flex 
            flex-row 
            px-10 
            justify-center 
            gap-x-10  
            max-w-max 
            md:grid md:grid-cols-2-auto md:gap-y-10  
            sm:flex sm:flex-col
            "
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  link={card.imagePath}
                  title={card.title}
                  text={card.text}
                />
              ))}
            </div>
          ) : (
            <div className="relative">
              <div className="justify-between absolute inline-flex left-0 right-0  top-60">
                <button type="button" onClick={nextSlide}>
                  <Image src={RightArrow} alt="" />
                </button>
                <button type="button" onClick={backSlide}>
                  <Image src={LeftArrow} alt="" />
                </button>
              </div>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`${index === current ? `slide_active` : `slide`}`}
                >
                  <Card
                    link={card.imagePath}
                    title={card.title}
                    text={card.text}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <style jsx>{`
          .slide {
            display: none;
          }
        `}</style>
      </div>
    </WrapperLarge>
  )
}
