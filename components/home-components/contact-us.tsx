import { ContactUsLink, HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'
import { Button } from '../data-components/button'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import ContactUsForm from '../data-components/ContactUsForm'
import { ContactUsItem } from '../data-components/ContactUsItem'

export default function ContactUs({ data }: HomePageType) {
  return (
    <WrapperLarge id="contact-us" className=" relative mt-8 xl:mt-28">
      <div className="background h-full xl:h-[700px] overflow-hidden w-full -z-10 bg-contact-bg absolute grid grid-cols-2 ">
        <Circle pos="top-[20px] right-[-120px]" />
        <Circle pos="bottom-[-40px] left-[-50px]" />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 relative ">
        <div className="flex justify-center xl:justify-end relative">
          <div className=" h-[500px] xl:h-[700px] flex items-center justify-center">
            <ContactUsInfoSection data={data} />
          </div>
        </div>
        <div className="form-card xl:absolute rtl:xl:right-[50%] ltr:xl:left-[50%] xl:top-[-100px] flex xl:justify-self-start justify-self-center items-center justify-center h-[800px] md:h-[700px] p-6 mb-5 bg-light">
          <ContactUsForm data={data} />
        </div>
      </div>
      <style jsx>{`
        .form-card {
          border: 2px solid #ffffff;
          box-sizing: border-box;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 36px;
        }
      `}</style>
    </WrapperLarge>
  )
}

function Circle({ pos }: { pos: string }) {
  return (
    <div className={`absolute opacity-20 ${pos}`}>
      <Image
        src="/icons/circle.svg"
        width="316px"
        height="316px"
        alt="circle"
      />
    </div>
  )
}

function ContactUsInfoSection({ data }: HomePageType) {
  return (
    <div className="px-10 flex flex-col">
      <Button
        className="rounded-full w-[130px] p-2 px-4 mb-5 bg-light text-xl text-header-blue font-bold"
        text={data.homepage.contactUsHeading}
      />
      <h2 className="text-4xl font-bold mb-5">
        {data.homepage.contactUsTitle}
      </h2>
      <p className="text-xl mb-5">{data.homepage.contactUsText}</p>
      <div className="grid grid-cols-1 xl:grid-cols-2 self-start">
        {data.common.contactUsLinks.map((data) => (
          <ContactUsItem key={data.text} {...data} />
        ))}
      </div>
    </div>
  )
}
