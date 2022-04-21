import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import { v4 as uuidv4 } from 'uuid'
import { FaHands } from 'react-icons/fa'
export default function WhatWeDo({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <h1 className="whatWeDoHeading text-center text-xl">
        {data.homepage.whatWeDoHeading}
      </h1>
      <h1 className="whatWeDoTitle text-center text-5xl">
        {data.homepage.whatWeDoTitle}
      </h1>
      <h1 className="container items-stretch  text-center flex">
        {data.homepage.whatWeDoCards.map((card) => (
          <div key={uuidv4()} className="card flex flex-col">
            <FaHands
              className="faHands"
              style={{
                height: '60px',
                width: '60px',
                alignSelf: 'center',
                marginTop: "50px"
              
              }}
            />
            <div className="cardTitle">{card.title}</div>
            <div className="cardText">{card.text}</div>
          </div>
        ))}
      </h1>

      <style jsx>{`
        .card {
          border: 2px solid lightgrey;
          margin: 100px 20px;
          padding: 10px;
          border-radius: 20px;
          width: 300px;
          height: 400px;
          background: linear-gradient(to top, white 50%, #F4F3FD 50%);
        }
        .whatWeDoHeading {
          background:white;
          color: red;
        }
        .whatWeDoTitle {
          font-weight: bold;
        }
        .container {
          height: 400px;
          margin-bottom: 180px;
        }
        .cardTitle {
          margin-top: 150px;
          color: blue;
        }
        
      `}</style>
    </WrapperLarge>
  )
}
