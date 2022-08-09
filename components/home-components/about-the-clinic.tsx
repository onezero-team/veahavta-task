import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'
import Rectangle11 from '../../assets/Rectangle_11.png'

export default function AboutTheClinic({ data }: HomePageType) {
  console.log('data', data)
  return (
    <WrapperLarge>
      <div className="wrapper">
        <div className="container">
          <div className="image">
            <Image
              src={Rectangle11}
              alt="Rectangle 11"
              width={702}
              height={628}
            />
          </div>
          <div className="details">
            <h1 className="heading">{data.homepage.aboutHeading}</h1>
            <h2 className="title">{data.homepage.aboutTitle}</h2>
            <p className="aboutUsText">{data.homepage.aboutUsText}</p>
            <button className="aboutUsButton">
              {data.homepage.aboutUsButton}
            </button>
          </div>
        </div>
      </div>
      ;
      <style jsx>{`
        div.wrapper {
          z-index: 10;
          background: #fff;
          height: 845px;
          display: flex;
          justify-content: center;
        }
        div.container {
          display: flex;
          width: 100%;
          justify-content: space-around;
          align-items: center;
        }
        div.image {
          box-sizing: border-box;
          background: url(rod-long-89bQBucvJdw-unsplash.jpg);
          border-radius: 8px;
        }
        div.details {
          display: flex;
          flex-direction: column;
          margin: auto;
          width: 31%;
        }
        h2.title {
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 700;
          font-size: 52px;
          line-height: 115%;
          color: #000000;
        }
        h1.heading {
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 37px;
          text-align: center;
          color: #4e47f9;
          text-align: right;
        }
        p.aboutUsText {
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 29px;
          text-align: right;
          color: #000000;
          margin-top: 50px;
        }
        button.aboutUsButton {
          background: #4e47f9;
          border-radius: 51px;
          width: 185px;
          height: 60px;
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 700;
          line-height: 29px;
          color: #ffffff;
          text-align: center;
          margin-top: 50px;
        }
      `}</style>
    </WrapperLarge>
  )
}
