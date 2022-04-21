import { HomePageType } from '@/lib/interface'
import { url } from 'inspector'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import { Button } from '../data-components/button'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div className="grid grid-cols-2">
        <div>
          <img className="aboutImg"></img>
        </div>
        <div>
          <h1 className="aboutHeading mt-32">{data.homepage.aboutHeading}</h1>

          <h1 className="text-4xl font-bold aboutTitle">
            {data.homepage.aboutTitle}
          </h1>
          <h1 className="aboutText">{data.homepage.aboutUsText}</h1>
          <Button
            className="aboutUsButtonBtn"
            text={data.homepage.aboutUsButton}
          ></Button>
        </div>
        <style jsx>{`
          .aboutImg {
            transform: scale(0.7);
            width: 702px;
            height: 628px;
            border : 2px solid orange;
            background: lightgrey;
          }
          .aboutTitle {
            width: 350px;
            height: 182px;
          }
          .aboutUsButtonBtn {
            border: 1px solid black;
            background-color: blue;
          }
          .aboutHeading {
            color: blue;
          }
          .aboutText{
            width:400px
          }
        `}</style>
      </div>
    </WrapperLarge>
  )
}
