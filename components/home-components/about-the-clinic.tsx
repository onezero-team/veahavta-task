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
        className="bg-light relative z-40 h-125 flex flex-row-reverse justify-evenly items-center
         mobile:flex-col-reverse  
         sm:flex-col-reverse md:flex-col-reverse md:gap-4  sm:gap-10 lg:flex-row-reverse
         sm:h-auto sm:pt-10 mobile:h-auto mobile:pt-10
         "
      >
        <article
          className="flex flex-col w-2/5 justify-start h-100 items-start
         mobile:h-auto mobile:w-full mobile:items-center mobile:p-4 
         sm:h-auto sm:items-end md:w-1/2 sm:w-1/2  lg:w-3/12 gap-10 
         "
        >
          <span className="text-darkPurple text-xl self-start md:mt-10 mobile:mt-10 ">
            {aboutHeading ? aboutHeading : 'aboutHeading'}
          </span>
          <h2
            className="font-bold text-5xl text-center flex w-125 
          mobile:text-3xl mobile:w-full mobile:text-center sm:w-full  mobile:justify-center
          xxl:text-3xl desktop:text-4xl md:text-3xl sm:text-3xl sm:text-right
          "
          >
            {aboutTitle ? aboutTitle : 'About title'}
          </h2>
          <p className="w-full text-xl mobile:w-full mobile:text-right">
            {aboutUsText ? aboutUsText : 'About us Text'}
          </p>
          <button
            className="bg-header-blue font-bold text-light
           pr-4 pl-4 pt-1 pb-1 rounded-3xl self-start cursor-pointer"
          >
            {aboutUsButton ? aboutUsButton : 'Read more'}
          </button>
        </article>
        <div className="w-125 mobile:w-5/6 sm:flex justify-center sm:items-center ">
          <Image
            src={'/about/Rectangle-8.png'}
            width={570}
            height={450}
            alt={'photo'}
          />
        </div>
      </section>
    </WrapperLarge>
  )
}
