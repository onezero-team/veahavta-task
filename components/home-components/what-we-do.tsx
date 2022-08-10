import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'
import CardSwiper from './swiper'

export default function WhatWeDo({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div
        id="support-us"
        className="wrapper z-10 flex justify-center h-[790px] "
      >
        <div className="container flex flex-col w-full items-center">
          <p className="whatWeDoHeading text-[28px]">
            {data.homepage.whatWeDoHeading}
          </p>
          <p className="title font-bold text-[82px]">
            {data.homepage.whatWeDoTitle}
          </p>
          <div className="cards flex justify-between w-full mt-10">
            {data.homepage.whatWeDoCards.map((card, index) => (
              <div
                className="card w-[338px] h-[480px] drop-shadow-lg rounded-xl p-2"
                key={index}
              >
                <div className="cardImage">
                  <Image
                    src={card.imagePath}
                    alt={card.title}
                    width={338}
                    height={241}
                  />
                </div>
                <div className="cardTitle font-bold text-[28px]">
                  {card.title}
                </div>
                <div className="text-[18px]">{card.text}</div>
              </div>
            ))}
          </div>
          <CardSwiper data={data} />
        </div>
      </div>
      <style jsx>{`
        div.wrapper {
          background: #fff;
        }
        p.whatWeDoHeading {
          color: #d25c78;
        }
        div.card {
          background: #ffffff;
        }
        div.cardTitle {
          color: #4e47f9;
        }
        div.cardImage {
          object-fit: cover;
        }
        div.cardImage {
          background: #f4f3fd;
          border-radius: 31px 31px 0px 0px;
        }
        @media screen and (max-width: 768px) {
          div.wrapper {
            width: 100vw;
          }
          p.title {
            text-align: center;
          }
          div.cards {
            display: none;
          }
          div.card {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </WrapperLarge>
  )
}
