import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import FormContact from '../form'
import Contact from '../contact'
import Image from 'next/image'

export default function ContactUs({ data }: HomePageType) {

  return <WrapperLarge>
    <div className='z-10 w-full bg-contact-bg mt-40 h-[42rem] relative' >

      <div className='w-2/5 mt-40 absolute'>
        <div className="font-bold text-1xl w-32 h-10 bg-light rounded-3xl flex justify-center items-center 
  text-header-blue">
          {data.homepage.contactUsHeading} </div>
        <div className='font-bold text-5xl mt-5'>
          {data.homepage.contactUsTitle}</div>
        <div className='text-xl mt-3'>
          {data.homepage.contactUsText.split("וביום")[0]}</div>
        <div className='text-xl'>
          {data.homepage.contactUsText.split("16:00-19:00")[1]}</div>
        <Contact data={data.common} />
      </div>
      <FormContact data={data.common} />
    </div>
    <style jsx>
      {`
        .absolute {
          position: absolute;
          inset-inline-start: 14%;}
        `}</style>



  </WrapperLarge>
}
