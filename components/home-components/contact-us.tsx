import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Vector from '../../assets/Vector.png'
import Image from 'next/image'
import Vector_2 from '../../assets/Vector_1.png'
import ContactUsForm from './formIk'
export default function ContactUs({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div id="contact-us" className="wrapper z-10 flex justify-center">
        <div className="container flex justify-between items-center w-full h-[680px]">
          <div className="vector absolute opacity-50 left-0 top-[2748px]">
            <Image src={Vector} alt="vector" />
          </div>
          <div className="vector absolute opacity-50 right-0">
            <Image src={Vector_2} alt="vector" />
          </div>
          <div className="details flex flex-col justify-around h-3/6">
            <button className="contactUsHeading w-32 h-10 rounded-3xl font-bold text-[22px]">
              {data.homepage.contactUsHeading}
            </button>
            <div className="font-bold text-[42px] ">
              {data.homepage.contactUsTitle}
            </div>
            <div className="contactUsText text-[22px] w-3/5 ">
              {data.homepage.contactUsText}
            </div>
            <div className="contactLinks grid grid-cols-2">
              {data.common.contactUsLinks.map((item, index) => {
                if (item.linkType === 'email') {
                  return (
                    <div className="flex items-center w-full" key={index}>
                      <div className="img mt-10">
                        <Image
                          src={item.imagePath}
                          alt="vector"
                          width={50}
                          height={50}
                        />
                      </div>
                      <a
                        href={`mailto:${item.text}`}
                        className="text mt-10"
                        key={index}
                      >
                        {item.text}
                      </a>
                    </div>
                  )
                } else if (item.linkType === 'tel') {
                  return (
                    <div className="flex items-center w-full" key={index}>
                      <div className="img mt-10">
                        <Image
                          src={item.imagePath}
                          alt="vector"
                          width={50}
                          height={50}
                        />
                      </div>
                      <a
                        href={`tel:${item.text}`}
                        className="text mt-10"
                        key={index}
                      >
                        {item.text}
                      </a>
                    </div>
                  )
                } else if (item.linkType === 'address') {
                  return (
                    <div className="flex items-center w-full" key={index}>
                      <div className="img mt-10">
                        <Image
                          src={item.imagePath}
                          alt="vector"
                          width={50}
                          height={50}
                        />
                      </div>
                      <a
                        href={`https://www.google.com/maps/place/${item.text}`}
                        className="text mt-10"
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.text}
                      </a>
                    </div>
                  )
                }

                return (
                  <div className="flex items-center w-full" key={index}>
                    <div className="img mt-10">
                      <Image
                        src={item.imagePath}
                        alt="vector"
                        width={50}
                        height={50}
                      />
                    </div>
                    <a className="text mt-10">{item.text}</a>
                  </div>
                )
              })}
            </div>
          </div>
          <ContactUsForm data={data} />
        </div>
      </div>
      <style jsx>{`
        div.wrapper {
          background: #fff;
          background: #f4f3fd;
        }

        button.contactUsHeading {
          background: #ffffff;
          color: #4e47f9;
        }

        @media screen and (max-width: 768px) {
          div.container {
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          div.vector {
            display: none;
          }

          div.contactLinks {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-items: center;
          }
          div.contactLinks div {
            display: flex;
            justify-content: space-between;
          }
          div.contactLinks div .text {
            padding-right: 20px;
          }
          div.details {
            margin-top: 2px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>{' '}
    </WrapperLarge>
  )
}
