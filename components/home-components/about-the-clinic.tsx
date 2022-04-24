import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'
import img from '../../public/images/Rect-about.png'
import { Button } from '../data-components/button'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge
      id="about-us"
      className="max-w-screen-lg mx-auto md:py-10 grid md:grid-cols-2 gap-14"
    >
      <div>
        <Image
          src={img}
          width="702px"
          height="628px"
          layout="responsive"
          alt="about-clinic"
        />
      </div>
      <div className="flex flex-col justify-center text-center  rtl:md:text-right ltr:md:text-left">
        <div className="text-purple text-2xl">{data.homepage.aboutHeading}</div>
        <div className="font-bold text-5xl">{data.homepage.aboutTitle}</div>
        <p className="mt-5">{data.homepage.aboutUsText}</p>
        <Button
          className="mt-5 max-w-[185px] rounded-full p-2 bg-purple text-light px-5 font-medium self-center md:self-start"
          text={data.homepage?.getToKnowUsButton}
        />
      </div>
    </WrapperLarge>
  )
}
