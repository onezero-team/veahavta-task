import { HomePageType } from '@/lib/interface'
import React, { useEffect, useState } from 'react'
import { WrapperLarge } from '../wrapper'
import Contact from '../modular-components/Contact.jsx'
import Image from 'next/image'
import Circle from '../../public/assets/circle.png'
import CircleTwo from '../../public/assets/circleTwo.png'
import ContactForm from '../modular-components/ContactForm'

export default function ContactUs({ data }: HomePageType) {
  const contactData = data.common.contactUsLinks
  return (
    <WrapperLarge
      className="
      pb-20  
      grid-cols-2-auto mt-52 
      bg-contact-bg
       contacts-container 
       relative 
       p-36 
       sm:block  sm:p-0 sm:mt-16 sm:pt-10 sm:px-2 sm:pb-24 
       md:flex md:flex-col 
       md:mt-20 md:p-10
        "
    >
      <span className="circle-1">
        <Image src={Circle} alt="" />
      </span>
      <span className="circle-2">
        <Image src={CircleTwo} alt="" />
      </span>
      <div className="flex flex-col gap-y-3 sm:mb-72  md:mb-72">
        <h2 className="text-icon-bg text-xl">
          {data.homepage.contactUsHeading}
        </h2>
        <h3 className="text-4xl font-bold">{data.homepage.contactUsTitle}</h3>
        <p>{data.homepage.contactUsText}</p>
        <div className=" max-w-xl  grid grid-cols-2-auto gap-y-16 mt-20 z-10 sm:flex sm:flex-col sm:h-2/4 sm:gap-y-10 ">
          {contactData.map((contact, index) => {
            return (
              <Contact
                key={index}
                text={contact.text}
                linkValue={contact.linkValue}
                linkType={contact.linkType}
                imagePath={contact.imagePath}
                setBackground={true}
              />
            )
          })}
        </div>
      </div>
      <div className="form-container">
        <ContactForm
          firstNamePlaceHolder={data.common.contactUsFormFirstName}
          lastNamePlaceHolder={data.common.contactUsFormLastName}
          emailPlaceHolder={data.common.contactUsFormEmail}
          phonePlaceHolder={data.common.contactUsFormPhone}
          textPlaceHolder={data.common.contactUsFormMessage}
          submitButton={data.common.contactUsFormSendButton}
          errors={data.common}
        />
      </div>

      <style jsx>{`
        .circle-1 {
          position: absolute;
          opacity: 0.2;
          left: 0;
          bottom: 0;
        }
        .circle-2 {
          position: absolute;
          right: 0;
          top: 5%;
          opacity: 0.2;
          z-index: 0;
        }
      `}</style>
    </WrapperLarge>
  )
}
