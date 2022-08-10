import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'
import Rectangle11 from '../../assets/Rectangle_11.png'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div id="about-us" className="wrapper z-10 flex justify-center">
        <div className="container flex w-full justify-around items-center mt-10 mb-10">
          <div className="box-border rounded-lg">
            <Image
              src={Rectangle11}
              alt="Rectangle 11"
              width={702}
              height={628}
            />
          </div>
          <div className="details flex flex-col m-auto w-2/6">
            <p className="heading font-normal text-[24px] leading-9  ">
              {data.homepage.aboutHeading}
            </p>
            <h2 className="title font-bold text-[52px] leading-tight">
              {data.homepage.aboutTitle}
            </h2>
            <p className="aboutUsText text-[18px] mt-10">
              {data.homepage.aboutUsText}
            </p>
            <button className="aboutUsButton rounded-[50px] w-48	h-16 font-bold	mt-12 text-[white]	">
              {data.homepage.aboutUsButton}
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        div.wrapper {
          background: #fff;
          z-index: 10;
        }
        p.heading {
          color: #4e47f9;
        }

        button.aboutUsButton {
          background: #4e47f9;
          transition: all 0.3s ease-in-out;
        }
        button.aboutUsButton:hover {
          background: white;
          color: #4e47f9;
          transition: all 0.3s ease-in-out;
        }
        @media screen and (max-width: 768px) {
          div.wrapper {
            background: #fff;
            width: 100vw;
          }
          div.container {
            flex-direction: column;
            display: flex;
          }
          div.details {
            width: 80vw;
          }
          h2.title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </WrapperLarge>
  )
}
