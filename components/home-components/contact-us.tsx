import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Contact from '../modular-components/Contact'
import Image from 'next/image'
import Circle from '../../public/assets/circle.png'
import CircleTwo from '../../public/assets/circleTwo.png'

export default function ContactUs({ data }: HomePageType) {
  const contactData = data.common.contactUsLinks
  return (
    <WrapperLarge>
      <div className="mt-52 bg-contact-bg contacts-container relative">
        <span className="circle-1">
          <Image src={Circle} />
        </span>
        <span className="circle-2">
          <Image src={CircleTwo} />
        </span>
        <div className="contactUs-text flex flex-col gap-y-3">
          <h2 className="text-icon-bg text-xl">
            {data.homepage.contactUsHeading}
          </h2>
          <h3 className="text-4xl font-bold">{data.homepage.contactUsTitle}</h3>
          <p>{data.homepage.contactUsText}</p>
          <div className="contacts  max-w-xl  grid grid-cols-2-auto gap-y-16 mt-20 z-10">
            {contactData.map((contact, index) => {
              return (
                <Contact
                  key={index}
                  text={contact.text}
                  linkValue={contact.linkValue}
                  linkType={contact.linkType}
                  imagePath={contact.imagePath}
                />
              )
            })}
          </div>
        </div>

        <style jsx>{`
          .contacts-container {
            padding: 10% 15% 5% 15%;
          }
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
      </div>
    </WrapperLarge>
  )
}
