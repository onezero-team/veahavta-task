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

  useEffect(() => {
    if (window.innerWidth > 425) {
      setIsComputer(true)
    } else {
      setIsComputer(false)
    }
  }, [isComputer])

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const backSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <WrapperLarge>
      <div className="mt-20 flex flex-col mobile:items-center" id="support-us">
        <div className="items-center flex flex-col">
          <h2 className=" text-3xl  text-red  mobile:text-xl mobile:self-start mobile:mb-3">
            {data.homepage.whatWeDoHeading}
          </h2>
          <h3 className="font-bold  text-8xl mobile:hidden">
            {data.homepage.whatWeDoTitle}
          </h3>
          {isComputer ? (
            <div className="mt-10 flex flex-row justify-center gap-x-10  max-w-max ">
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
