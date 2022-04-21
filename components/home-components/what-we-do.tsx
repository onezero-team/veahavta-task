import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '../data-components/button'
import Image from 'next/image'
import Footer from '../footer'

export default function WhatWeDo({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <h1 className="whatWeDoHeading text-center text-xl">
        {data.homepage.whatWeDoHeading}
      </h1>
      <h1 className="whatWeDoTitle text-center text-5xl">
        {data.homepage.whatWeDoTitle}
      </h1>
      <h1 className="container  flex flex-row-4">
       
        {data.homepage.whatWeDoCards.map((card) => (
          <div key={uuidv4()} className="card ">
            <Image height="50px" width="50px" className="whatWeDoImg"  src={card.imagePath}></Image>
            <div className="cardTitle">{card.title}</div>
            <div>{card.text}</div>
          </div>
        ))}
      </h1>

      <style jsx>{`
        .card {
          border: 2px solid black;
          margin: 100px 20px;
          padding: 10px;
          border-radius: 10px;
          width: 300px;
          heigth: 300px;
        }
        .whatWeDoHeading {
          color: black;
        }
        .whatWeDoingImg{
          border: 1px solid black;
        }
        .container {
          margin: auto;
          align-items: center;
          justify-content: center;
        }
        .cardTitle {
          color:;
        }
      `}</style>
    </WrapperLarge>
  )
}
