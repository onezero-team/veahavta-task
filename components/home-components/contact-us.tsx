import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import ContactInfo from '../data-components/contact-info'
import ContactForm from '../data-components/contact-form'

export default function ContactUs({ data }: HomePageType) {
  return (
    <WrapperLarge
      id="contact-us"
      className="relative grid-cols-auto-1fr md:grid-cols-2 sm:grid-cols-1 gap-x-36 md:gap-x-20 pb-28 sm:pb-9 mt-32 sm:mt-14"
    >
      <div className="absolute w-full h-5/6 sm:h-1/2 bottom-0 bg-contact-bg z-0" />
      <img
        src="left-ring.svg"
        alt="deco"
        className="absolute left-0 bottom-0 opacity-20"
      />
      <img
        src="right-ring.svg"
        alt="deco"
        className="absolute right-0 top-1/4 opacity-20 sm:hidden"
      />
      <div className="flex flex-col items-start mt-72 sm:mt-0 w-4/6 justify-self-end sm:justify-self-start  relative z-1">
        <h3 className="bg-light rounded-[50px] text-accent-purple text-sm font-bold px-6 sm:px-0 py-1 mb-4">
          {data.homepage.contactUsHeading}
        </h3>
        <h2 className="text-lg sm:text-md font-bold">
          {data.homepage.contactUsTitle}
        </h2>
        <p className="text-sm sm:text-paragraph">
          {data.homepage.contactUsText}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-9 gap-y-2 mt-10">
          {data.common.contactUsLinks.map((item, i) => {
            return <ContactInfo key={i} data={item} />
          })}
        </div>
      </div>
      <ContactForm data={data.common}></ContactForm>
    </WrapperLarge>
  )
}
