import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'
import { Button } from '../data-components/button'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import ContactUsForm from '../data-components/ContactUsForm'

export default function ContactUs({ data }: HomePageType) {
  return (
    <WrapperLarge id="contact-us" className="h-[800px] relative mt-8">
      <div className="background h-[1300px] xl:h-[700px] overflow-hidden w-full -z-10 bg-contact-bg absolute xl:top-[100px] grid grid-cols-2 ">
        <Circle pos="top-[20px] right-[-120px]" />
        <Circle pos="bottom-[-40px] left-[-50px]" />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 relative ">
        <div className="flex justify-center xl:justify-end relative">
          <div className="xl:absolute xl:top-[100px] h-[500px] xl:h-[700px] flex items-center justify-center">
            <ContactUsInfoSection data={data} />
          </div>
        </div>
        <div className="form-card flex xl:justify-self-start justify-self-center items-center justify-center h-[700px] p-6 bg-light">
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
      <h1 className="text-4xl font-bold mb-5">
        {data.homepage.contactUsTitle}
      </h1>
      <p className="text-xl">{data.homepage.contactUsText}</p>
      <div className="grid grid-cols-1 xl:grid-cols-2 self-start">
        {data.common.contactUsLinks.map((data) => (
          <div
            key={data.text}
            className="flex mt-5 justify-start items-center "
          >
            <div className="rounded-full flex items-center justify-center w-[44px] h-[44px]  bg-header-blue">
              <Image
                src={data.imagePath}
                width="20px"
                height="20px"
                alt={data.linkType}
              />
            </div>
            <div className="px-5 ">{data.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
