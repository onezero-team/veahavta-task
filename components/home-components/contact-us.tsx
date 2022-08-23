import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import ContactInfo from '../data-components/contact-info'
import ContactForm from '../data-components/contact-form'

export default function ContactUs({ data }: HomePageType) {
  return <WrapperLarge id="contact-us" className='h-[815px] relative grid-cols-auto-1fr gap-x-36 pb-[115px] mt-[130px]'>
    <div className='absolute w-full h-5/6 bottom-0 bg-contact-bg z-[-1]' />
    <img src="left-ring.svg" className='absolute left-0 bottom-0 opacity-20' />
    <img src="right-ring.svg" className='absolute right-0 top-1/4 opacity-20 sm:hidden' />
    <div className='flex flex-col items-start mt-72 w-4/6 justify-self-end'>
      <h3 className='bg-light rounded-[50px] text-accent-purple text-sm font-bold px-6 py-1 mb-4'>{data.homepage.contactUsHeading}</h3>
      <h2 className='text-lg font-bold'>{data.homepage.contactUsTitle}</h2>
      <p className='text-sm'>{data.homepage.contactUsText}</p>
      <div className='grid grid-cols-2 gap-x-9 gap-y-2 mt-10'>
      {
        data.common.contactUsLinks.map((item, i) => {
          return <ContactInfo key={i} data={item} />
        })
      }
      </div>
    </div>
    <ContactForm data={data.common}></ContactForm>
  </WrapperLarge>
}
