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
        className="bg-light relative z-40 lg:h-125 flex lg:flex-row-reverse justify-evenly items-center
           flex-col
            sm:p-10 gap-10
            
         "
      >
        <article
          className="flex flex-col  justify-start  xl:items-start
         h-auto w-full items-center p-4 
         sm:h-auto sm:items-end md:w-1/2 sm:w-1/2  lg:w-3/12 gap-10 
         "
        >
          <span className="text-darkPurple text-xl self-start  mt-10 ">
            {aboutHeading ? aboutHeading : 'aboutHeading'}
          </span>
          <h2
            className="font-bold   flex  
          text-2xl w-full text-center sm:w-full  justify-center
           desktop:text-4xl md:text-3xl sm:text-3xl sm:text-right
          "
          >
            {aboutTitle ? aboutTitle : 'About title'}
          </h2>
          <p className="w-full text-xl  ">
            {aboutUsText ? aboutUsText : 'About us Text'}
          </p>
          <button
            className="bg-header-blue font-bold text-light
           p-10 pt-3 pb-3 rounded-3xl self-start cursor-pointer "
          >
            {aboutUsButton ? aboutUsButton : 'Read more'}
          </button>
        </article>
        <div className="lg:w-100 w-5/6 sm:flex justify-center sm:items-center ">
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
