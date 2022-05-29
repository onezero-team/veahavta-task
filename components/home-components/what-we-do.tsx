import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'

export default function WhatWeDo({ data }: HomePageType) {

  const clinicService = <div className="flex flex-row justify-between">
    {data.homepage.whatWeDoCards.map((item, index) => {
      return (
        <div className='w-1/4 border-2 border-contact-bg rounded-3xl mx-3' key={index}>
          <div className="h-60 bg-contact-bg rounded-t-3xl flex justify-center items-center">
            <div className="h-2/5 w-2/5 relative">
              <Image src={item.imagePath} alt="" width={"100%"} height={"100%"} layout="fill" /></div></div>
          <div className="h-60 p-5 flex flex-col justify-start ">
            <div className='text-3xl text-header-blue font-bold'>{item.title}</div>
            <div className='text-lg mt-2'>{item.text}</div>
          </div>
        </div>
      )
    })}</div>


  return <WrapperLarge>
    <div className='z-10 w-full bg-light'>
      <div className='w-3/4 mt-8 mb-24 mx-auto h-[40rem] grid grid-rows-1 grid-flow-col relative'>

        <div className=''>
          <div className='text-3xl text-brown text-center'>
            {data.homepage.whatWeDoHeading} </div>
          <div className='text-7xl mt-4 font-bold text-center'>
            {data.homepage.whatWeDoTitle}</div>
          <div className='text-lg mt-14'>
            <div className='mx-auto'>{clinicService}</div>
          </div>
        </div>
      </div>
    </div>

  </WrapperLarge>
}
