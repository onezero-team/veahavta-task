import { HomePageType } from '@/lib/interface'
import React, { LegacyRef } from 'react'
import { CircleIcon } from '../data-components/circle-icon'
import { Heading, ServicesHeader } from '../data-components/header-text'
import PagingButton from '../data-components/paging-button'
import Card from '../what-we-do-components/card'

export default function WhatWeDo({ data }: HomePageType) {
  const contentWrapper = React.useRef(null)
  const sideScroll = (
    element: HTMLDivElement | any,
    side: 'left' | 'right',
  ) => {
    element.scrollLeft +=
      side === 'left' ? -(element.clientWidth - 12) : element.clientWidth - 12
  }

  return (
    <>
      <Heading className="text-red mx-5 pt-30 pb-px sm:pb-0  sm:text-center sm:pt-48">
        {data.homepage.whatWeDoHeading}
      </Heading>

      <ServicesHeader>{data.homepage.whatWeDoTitle}</ServicesHeader>

      <div className=" relative 2xl:hidden">
        <PagingButton
          dir="left"
          onClick={() => {
            sideScroll(contentWrapper.current, 'left')
          }}
          className=" left-2"
          src="./icons/Phone/left.svg"
        />

        <PagingButton
          dir="right"
          onClick={() => {
            sideScroll(contentWrapper.current, 'right')
          }}
          className="right-2"
          src="./icons/Phone/right.svg"
        />
      </div>
      <div
        ref={contentWrapper}
        className=" grid  grid-cols-4-auto overflow-x-hidden scroll-smooth w-full xl:w-auto sm:mx-auto py-1 scroll-touch mt-6.5 sm:mt-14  "
      >
        {data?.homepage?.whatWeDoCards?.map((card, idx) => (
          <Card
            title={card.title}
            text={card.text}
            img={card.imagePath}
            key={idx}
          />
        ))}
      </div>
      <style></style>
    </>
  )
}
