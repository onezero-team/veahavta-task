import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'
import aboutLogo from '../../public/assets/about-hands.png'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div>
        <div className="about__text" id="about-us">
          <h2>{data.homepage.aboutHeading}</h2>
        </div>
        <div className="about__image">
          <Image src={aboutLogo} />
        </div>
        <style jsx>{`
          div {
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            margin-top: 3%;
          }
          div.about__image {
            max-width: 700px;
            max-height: 630px;
          }
        `}</style>
      </div>
    </WrapperLarge>
  )
}
