import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div className="z-10 w-full bg-light " id="about-us">
        <div className="w-full  mx-auto relative grid sm:grid-rows-1 sm:grid-flow-col sm:my-24 sm:w-3/4 sm:h-[40rem]">
          <div className="w-11/12 mx-auto h-[80vw] relative mt-10 sm:w-[42rem] sm:h-[40rem] sm:mt-0">
            <Image
              src={'/hand&love.png'}
              alt=""
              width={'100%'}
              height={'100%'}
              layout="fill"
            />
          </div>

          <div className="mt-10 mx-5 sm:mx-20 ">
            <div className="text-xl text-header-blue sm:text-3xl">
              {data.homepage.aboutHeading}{' '}
            </div>
            <div className="text-4xl mt-4 font-bold sm:text-5xl">
              {data.homepage.aboutTitle}
            </div>
            <div className="text-2xl md:text-2xl lg:text-lg mt-9 sm:mt-14">
              {data.homepage.aboutUsText}
            </div>
            <div
              className="font-bold text-2xl mt-9 w-44 h-14 bg-header-blue rounded-3xl flex justify-center items-center 
  text-light my-auto"
            >
              {data.homepage.aboutUsButton}
            </div>
          </div>
        </div>
      </div>
    </WrapperLarge>
  )
}
