import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import { FullButton } from '../data-components/full-button'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge
      id="about-us"
      className="grid-cols-2 xs:grid-cols-1 pt-24 xs:pt-10 px-60 md:px-20"
    >
      <img
        src="love-hands.jpg"
        alt="two hands and a heart"
        className="justify-self-end sm:justify-self-center"
      ></img>
      <div className="flex flex-col pt-10 px-24 md:px-8 min-sm:px-8 xs:p-0">
        <h3 className="text-accent-purple text-md sm:text-sm sm:mt-10">{data.homepage.aboutHeading}</h3>
        <h2 className="text-xl font-bold sm:text-xl-mobile">{data.homepage.aboutTitle}</h2>
        <p className="text-paragraph mt-14 sm:mt-9">{data.homepage.aboutUsText}</p>
        <FullButton
          className="mt-8 text-md font-bold self-start"
          text={data.homepage.aboutUsButton}
        ></FullButton>
      </div>
    </WrapperLarge>
  )
}
