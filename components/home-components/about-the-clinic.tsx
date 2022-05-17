import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'
import { Button } from '../data-components/button'
export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <section id="about-us">
      <WrapperLarge>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 md:gap-20">
          <div className="md:row-start-1 md:row-end-1 md:col-start-1 md:col-end-1">
            <Image
              width={702}
              height={628}
              src="/hands.png"
              alt="hands with heart"
            />
          </div>
          <div className="md:row-start-1 md:row-end-1 md:col-start-2 md:col-end-2 pt-10">
            <div className="text-btnblue text-3xl pb-3">
              {data.homepage.aboutHeading}
            </div>
            <div className="text-6xl font-bold">{data.homepage.aboutTitle}</div>
            <p className="pt-12 text-lg pb-10">{data.homepage.aboutUsText}</p>
            <Button
              className="bg-btnblue text-2xl font-bold text-light rounded-full px-7 py-2"
              type=""
              text={data.homepage.aboutUsButton}
            />
          </div>
        </div>
      </WrapperLarge>
    </section>
  )
}
