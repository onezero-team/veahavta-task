import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import { Button } from '../data-components/button'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div className="wrapper">
        <PageHeader>{data.homepage.title}</PageHeader>

        <h2 className="homepage h2 mx-72 text-xl">
          {data.homepage.description}
        </h2>

        <div className="grid grid-cols-7">
          <div className="img1 -mt-80 ml-28 mr-auto"></div>
          <div className="img2 ml-auto -mr-80 mb-auto -mt-40"></div>
          <div className="img3 ml-auto -mr-60 mb-auto -mt-0"></div>
          <div className="img4 -mt-96 ml-auto mr-96"></div>
          <div className="img5 -mt-56 ml-auto mr-80"></div>
          <div className="img6  ml-auto mr-40"></div>
          <div className="img7 -mt-36 ml-auto -mr-26"></div>
        </div>
        <Button
          className="button text-center"
          text={data.homepage.getToKnowUsButton}
        ></Button>

        <div className="background"></div>

        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            position: relative;
          }
          div.background {
            position: absolute;
            z-index: -1;
            inset: 0;
            background: linear-gradient(
              109.17deg,
              rgba(1, 157, 177, 0.21) 38.49%,
              #019db1 98.95%
            );
          }
          .img1,
          .img2,
          .img3,
          .img4,
          .img5,
          .img6,
          img7 {
            transform: scale(0.6);
            position: static;
            border-radius: 8px;
            height: 380px;
            width: 315px;
          }
          .img1 {
            z-index: 0;
            background: grey;
          }
          .img2 {
            z-index: 1;
            background: green;
          }
          .img3 {
            z-index: 0;
            background: yellow;
          }
          .img4 {
            z-index: 0;
            background: red;
          }
          .img5 {
            z-index: 0;
            background: white;
          }
          .img6 {
            margin-top: -600px
            z-index: 1;
            background: blue;
          }
          .img7 {
            z-index: 1;
            background: brown;
          }
          .button {
            border: 1px solid black;
            background: #4e4ff9;
            width: 185px;
            height: 60px;
            z-index:10;
          }
          .homepage{
             width:380px;
          }
        `}</style>
      </div>
    </div>
  )
}
