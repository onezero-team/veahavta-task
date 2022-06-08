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
        className="bg-lightPurple    mt-16 flex  relative justify-evenly items-center p-20
        mobile:flex-col mobile:w-full  mobile:p-1 mobile:mt-0
         mobile:justify-around mobile:items-center sm:bg-light xl:bg-lightPurple mobile:bg-light
          md:flex-col   sm:h-auto md:h-auto lg:h-auto mobile:h-210 sm:gap-32 xl:flex-row
          md:p-0 md:pt-20 md:pb-10  sm:flex-col
         "
      >
        <ContactUsInfo
          contactUsLinks={contactUsLinks}
          contactUsText={contactUsText}
          contactUsTitle={contactUsTitle}
          contactUsHeading={contactUsHeading}
        />
        <ContactUsForm data={contactFormData} />
        <div className="w-80 absolute -right-20 top-12 opacity-20 mobile:hidden lg:hidden sm:hidden xl:block">
          <Image
            src={'/shapes/Vector-1.svg'}
            width={300}
            height={300}
            layout={'responsive'}
            alt={'phone'}
          />
        </div>
        <div className="w-80  absolute -bottom-10 -left-2 opacity-20 mobile:w-48 ">
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
