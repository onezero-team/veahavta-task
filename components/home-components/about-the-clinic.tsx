import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'
import aboutLogo from '../../public/assets/about-hands.png'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div>
        <div className="about-text" id="about-us">
          <h2 className="about__heading">{data.homepage.aboutHeading}</h2>
          <h3 className="about__title">{data.homepage.aboutTitle}</h3>
          <p className="about__text">{data.homepage.aboutUsText}</p>
          <button className="about__button" type="button">
            {data.homepage.aboutUsButton}
          </button>
        </div>
        <div className="about__image">
          <Image src={aboutLogo} />
        </div>
        <style jsx>{`
          div {
            display: flex;
            flex-direction: row-reverse;
            column-gap: 3%;
            justify-content: center;
            margin-top: 3%;
          }
          div.about-text {
            margin-top: 5%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            overflow: visible;
            max-width: 530px;
          }
          div.about__image {
            max-width: 700px;
            max-height: 630px;
          }
          div .about__heading {
            color: #4e47f9;
            font-weight: 400;
            font-size: 28px;
          }
          div .about__title {
            font-weight: 700;
            font-size: 52px;
            line-height: 115%;
          }
          div .about__text {
            font-weight: 400;
            font-size: 18px;
          }
          div .about__button {
            margin-top: 5%;
            align-self: flex-start;
            background: #4e47f9;
            border-radius: 51px;
            width: 185px;
            height: 60px;
            font-weight: 700;
            font-size: 22px;
            color: #FFFFFF;
        `}</style>
      </div>
    </WrapperLarge>
  )
}
