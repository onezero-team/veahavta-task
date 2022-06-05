import { HomePageType } from '@/lib/interface'
import Image from 'next/image'
import React from 'react'
import { WrapperLarge } from '../wrapper'

export default function AboutTheClinic({ data }: HomePageType) {
  const { aboutHeading, aboutTitle, aboutUsText, aboutUsButton } = data.homepage
  return (
    <WrapperLarge>
      <section
        id="about-us"
        className="bg-light relative z-40 h-125 flex flex-row-reverse justify-evenly items-center mobile:flex-col-reverse mobile:h-150"
      >
        <article className="flex flex-col w-2/5 justify-around h-100 items-start mobile:h-150 mobile:w-full mobile:items-center mobile:p-4">
          <span className="text-darkPurple text-xl ">{aboutHeading}</span>
          <h2 className="font-bold text-5xl text-right flex w-125 mobile:text-4xl mobile:w-full mobile:text-center">
            {aboutTitle}
          </h2>
          <p className="w-7/12 text-xl mobile:w-full mobile:text-right">
            {aboutUsText}
          </p>
          <button
            className="bg-header-blue font-bold text-light
           pr-4 pl-4 pt-1 pb-1 rounded-3xl"
          >
            {aboutUsButton}
          </button>
        </article>
        <div className="w-150 mobile:w-5/6">
          <Image
            src={'/about/Rectangle-8.png'}
            width={570}
            height={450}
            layout={'responsive'}
            alt={'photo'}
          />
        </div>
      </section>
    </WrapperLarge>
  )
}
