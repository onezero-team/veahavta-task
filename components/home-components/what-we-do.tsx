import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'

export default function WhatWeDo({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div className="wrapper">
        <div className="container">
          <div className="whatWeDoHeading">{data.homepage.whatWeDoHeading}</div>
          <div className="whatWeDoTitle">{data.homepage.whatWeDoTitle}</div>
          <div className="cards">
            {data.homepage.whatWeDoCards.map((card, index) => (
              <div className="card" key={index}>
                <Image
                  src={card.imagePath}
                  alt={card.title}
                  width={338}
                  height={241}
                  className="cardImage"
                />
                <div className="cardTitle">{card.title}</div>
                <div className="cardText">{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
          flex-direction: column;
          width: 100%;
          align-items: center;
        }
        div.whatWeDoHeading {
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 37px;
          /* identical to box height */

          text-align: center;

          color: #d25c78;
        }
        div.whatWeDoTitle {
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 700;
          font-size: 82px;
          line-height: 107px;

          color: #000000;
        }
        div.cards {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-top: 50px;
        }
        div.card {
          width: 338px;
          height: 480px;
          background: #ffffff;
          border: 2px solid #ffffff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 31px;
          border-radius: 31px;
          padding: 15px;
        }
        div.cardTitle {
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 37px;
          /* identical to box height */

          text-align: right;

          color: #4e47f9;
        }
        div.cardText {
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          text-align: right;
          margin-top: 10px;
          color: #000000;
        }
      `}</style>{' '}
    </WrapperLarge>
  )
}
