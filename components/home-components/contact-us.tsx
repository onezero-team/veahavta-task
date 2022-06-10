import { HomePageType } from '@/lib/interface'
import Image from 'next/image'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import ContactUsInfo from './contact-us-info'
import ContactUsForm from './contact-us-form'

export default function ContactUs({ data }: HomePageType) {
  const {
    contactUsLinks,
    contactUsFormEmail,
    contactUsFormPhone,
    contactUsFormFirstName,
    contactUsFormLastName,
    contactUsFormMessage,
    contactUsFormSendButton,
    contactUsFormSuccessMessage,
    contactUsFormErrorFirstNameMissing,
    contactUsFormErrorLastNameMissing,
    contactUsFormErrorEmailMissing,
    contactUsFormErrorEmailInvalid,
    contactUsFormErrorPhoneMissing,
    contactUsFormErrorPhoneInvalid,
    contactUsFormErrorMessageMissing,
  } = data.common
  const { contactUsHeading, contactUsTitle, contactUsText } = data.homepage

  const contactFormData = {
    contactUsFormEmail,
    contactUsFormPhone,
    contactUsFormFirstName,
    contactUsFormLastName,
    contactUsFormMessage,
    contactUsFormSendButton,
    contactUsFormSuccessMessage,
    contactUsFormErrorFirstNameMissing,
    contactUsFormErrorLastNameMissing,
    contactUsFormErrorEmailMissing,
    contactUsFormErrorEmailInvalid,
    contactUsFormErrorPhoneMissing,
    contactUsFormErrorPhoneInvalid,
    contactUsFormErrorMessageMissing,
  }

  return (
    <WrapperLarge>
      <section
        id="contact-us"
        className=" bg-light flex flex-col xl:flex-row relative  justify-evenly  items-center 
         w-full  p-1 mt-16
          xl:bg-lightPurple 
          h-240 sm:h-220 lg:h-200 xl:h-auto  sm:gap-32 
          md:p-0 md:pt-20 md:pb-10  gap-0
         "
      >
        <ContactUsInfo
          contactUsLinks={contactUsLinks}
          contactUsText={contactUsText}
          contactUsTitle={contactUsTitle}
          contactUsHeading={contactUsHeading}
        />
        <ContactUsForm data={contactFormData} />
        <div className="w-80 absolute -right-20 top-12 opacity-20 hidden  xl:block">
          <Image
            src={'/shapes/Vector-1.svg'}
            width={300}
            height={300}
            layout={'responsive'}
            alt={'phone'}
          />
        </div>
        <div className=" w-48 xl:w-80  absolute -bottom-10 -left-2 opacity-20 ">
          <Image
            src={'/shapes/Vector.svg'}
            width={300}
            height={300}
            layout={'responsive'}
            alt={'phone'}
          />
        </div>
      </section>
    </WrapperLarge>
  )
}
