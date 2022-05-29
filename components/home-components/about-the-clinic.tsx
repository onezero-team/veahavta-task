import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'

export default function AboutTheClinic({ data }: HomePageType) {
  return <WrapperLarge>
    <div className='z-10 w-full bg-light ' id="about-us">
    <div className='w-3/4 my-24 mx-auto h-[40rem] grid grid-rows-1 grid-flow-col relative '>
      <div className='w-[42rem] h-[40rem] relative'>
        <Image src={"/hand&love.png"} alt='' width={'100%'} height={'100%'} layout="fill"/>
      </div>

    <div className='mt-10 mx-20 '>
    <div className='text-3xl text-header-blue'>
      {data.homepage.aboutHeading} </div>
    <div className='text-5xl mt-4 font-bold'>
      {data.homepage.aboutTitle}</div>
    <div className='text-lg mt-14'>
      {data.homepage.aboutUsText}</div>
      <div className="font-bold text-1xl mt-9 w-44 h-14 bg-header-blue rounded-3xl flex justify-center items-center 
  text-light my-auto">
      {data.homepage.aboutUsButton}</div>
    </div>
    </div>
    </div>
    
    </WrapperLarge>
}
