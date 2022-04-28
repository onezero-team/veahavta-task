import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'

export default function WhatWeDo({ data }: HomePageType) {
  return (
    <WrapperLarge id="about-us" className="mx-auto max-w-screen-xl">
      <div className="text-center text-red text-2xl">
        {data.homepage.whatWeDoHeading}
      </div>
      <div className="text-center font-bold text-6xl mb-14">
        {data.homepage.whatWeDoTitle}
      </div>
      <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 sm:gap-0">
        {data.homepage.whatWeDoCards.map(({ title, text, imagePath }) => (
          <WhatWeDoCard
            key={title}
            title={title}
            text={text}
            imagePath={imagePath}
          />
        ))}
      </ul>
    </WrapperLarge>
  )
}

function WhatWeDoCard({
  title,
  text,
  imagePath,
}: {
  title: string
  text: string
  imagePath: string
}) {
  return (
    <li className="flex items-top justify-center mx-2">
      <div className="card-shadow w-[338px] h-auto mb-5">
        <div className="h-[241px] rounded-t-lg flex items-center justify-center bg-contact-bg">
          <Image src={imagePath} alt={title} width="128px" height="128px" />
        </div>
        <div className=" p-3 pb-5">
          <div className="text-2xl font-bold text-header-blue">{title}</div>
          <div>{text}</div>
        </div>
      </div>
      <style jsx>{`
        .card-shadow {
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border: 2px solid #ffffff;
          box-sizing: border-box;
          border-radius: 31px;
          overflow: hidden;
        }
      `}</style>
    </li>
  )
}
