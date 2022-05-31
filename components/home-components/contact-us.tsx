import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import FormContact from '../form'
import Contact from '../contact'
import Image from 'next/image'

export default function ContactUs({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div className="z-10 w-full background sm:mt-40 sm:h-[42rem] relative pb-10">
        <div className="w-72 h-56 absolute left-0 bottom-0">
          <Image
            src={'/circle-left.svg'}
            alt=""
            width={'100'}
            height={'100'}
            layout="fill"
          />
        </div>
        <div className="hidden sm:block w-48 h-80 absolute top-8 right-0">
          <Image
            src={'/circle-right.svg'}
            alt=""
            width={'100'}
            height={'100'}
            layout="fill"
          />
        </div>

        <div className="sm:w-2/5 sm:mt-40 absoluteContact">
          <div
            className="sm:font-bold text-xl sm:w-32 h-10 bg-light rounded-3xl flex sm:justify-center items-center 
  text-header-blue"
          >
            {data.homepage.contactUsHeading}{' '}
          </div>
          <div className="text-4xl font-bold sm:text-5xl mt-5">
            {data.homepage.contactUsTitle}
          </div>
          <div className="text-base sm:text-xl mt-3">
            {data.homepage.contactUsText
              .split('19:00')[0]
              .replace('0-', '0-19:00')}
          </div>
          <div className="text-base sm:text-xl">
            {data.homepage.contactUsText.split('16:00-19:00')[1]}
          </div>
          <Contact data={data.common} />
        </div>
        <FormContact data={data.common} />
      </div>
      <style jsx>
        {`
          .absoluteContact {
            position: absolute;
            inset-inline-start: 15%;
          }
          .background {
            background: #f4f3fd;
          }

          @media (max-width: 640px) {
            .absoluteContact {
              position: relative;
              margin: 3rem 1rem;
              inset-inline-start: 0;
            }
            .background {
              background: linear-gradient(#fff 50%, #f4f3fd 50%);
            }
          }
        `}
      </style>
    </WrapperLarge>
  )
}
