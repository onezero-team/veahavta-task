import { useLocale } from '@/lib/hooks'
import { HomePageType } from '@/lib/interface'
import { useRef, useState } from 'react'
import { Heading, ServicesHeader } from '../data-components/header-text'
import PagingButton from '../data-components/paging-button'
import Card from '../what-we-do-components/card'

export default function WhatWeDo({ data }: HomePageType) {
  const [leftStop, setLeftStop] = useState(false)
  const [rightStop, setRightStop] = useState(false)

  const { dir } = useLocale()
  const contentWrapper = useRef(null)
  const sideScroll = (
    element: HTMLDivElement | any,
    side: 'left' | 'right',
  ) => {
    const pos = element.scrollLeft

    element.scrollLeft +=
      side === 'left' ? -(element.clientWidth + 12) : element.clientWidth - 12

    if (dir === 'ltr') {
      element.scrollLeft > 0 ? setLeftStop(false) : setLeftStop(true)
      element.scrollWidth - element.clientWidth > element.scrollLeft
        ? setRightStop(false)
        : setRightStop(true)
    } else {
      console.log(element.scrollLeft)
      element.scrollLeft < 0 ? setRightStop(false) : setRightStop(true)
      element.clientWidth - element.scrollWidth < element.scrollLeft
        ? setLeftStop(false)
        : setLeftStop(true)
    }
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
          disabled={leftStop}
          onClick={() => {
            sideScroll(contentWrapper.current, 'left')
          }}
          className=" left-2"
          src="./icons/Phone/left.svg"
        />

        <PagingButton
          dir="right"
          disabled={rightStop}
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
