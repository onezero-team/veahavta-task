import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'
import aboutLogo from '../../public/assets/about-hands.png'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div className="flex flex-row-reverse gap-x-20 justify-center mt-36 mobile:flex-col-reverse mobile:gap-y-5 mobile:mb-28">
        <div
          className=" mt-10 flex flex-col justify-start  max-w-xl mobile:flex mobile:flex-col mobile:gap-y-5 "
          id="about-us"
        >
          <h2 className=" text-icon-bg text-3xl ">
            {data.homepage.aboutHeading}
          </h2>
          <h3 className="font-bold text-6xl mobile:text-4xl">
            {data.homepage.aboutTitle}
          </h3>
          <p className=" text-lg">{data.homepage.aboutUsText}</p>
          <button
            className=" self-start bg-icon-bg rounded-full w-48 h-16 text-contact-bg font-bold text-xl mt-4"
            type="button"
          >
            {data.homepage.aboutUsButton}
          </button>
        </div>
        <div className="max-w-2xl">
          <Image src={aboutLogo} alt="" />
        </div>
      </div>
    </WrapperLarge>
  )
}
