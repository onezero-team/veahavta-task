import React, { useRef, useState } from 'react'
import { HomePageType } from '@/lib/interface'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

export default function CardSwiper({ data }: HomePageType) {
  return (
    <div className="flex w-full h-full  text-center">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="sm:hidden mySwiper w-full"
      >
        {data.homepage.whatWeDoCards.map((card, index) => (
          <SwiperSlide className="flex justify-center h-full" key={index}>
            <div className="card w-[338px] h-[480px] drop-shadow-lg rounded-xl">
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
          </SwiperSlide>
        ))}
        <style jsx>{`
          @media screen and (max-width: 768px) {
            div.card {
              background: #ffffff;
            }
          }
        `}</style>
      </Swiper>
    </div>
  )
}
