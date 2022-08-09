import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import Image from 'next/image'
import Rectangle1 from '../../assets/Rectangle_4.png'
import Rectangle2 from '../../assets/Rectangle_5.png'
import Rectangle3 from '../../assets/Rectangle_6.png'
import Rectangle4 from '../../assets/Rectangle_7.png'
import Rectangle5 from '../../assets/Rectangle_8.png'
import Rectangle6 from '../../assets/Rectangle_9.png'
import Rectangle7 from '../../assets/Rectangle_10.png'
export default function Banner({ data }: HomePageType) {
  console.log('data', data)
  return (
    <div id="top-header">
      <div className="wrapper">
        <div className="background">
          <div className="image1">
            <Image
              src={Rectangle1}
              alt="Rectangle 1"
              width={315}
              height={380}
            />
          </div>
          <div className="image2">
            <Image
              src={Rectangle2}
              alt="Rectangle 1"
              width={315}
              height={380}
            />
          </div>
          <div className="image3">
            <Image
              src={Rectangle3}
              alt="Rectangle 3"
              width={315}
              height={380}
            />
          </div>
          <div className="image4">
            <Image
              src={Rectangle4}
              alt="Rectangle 4"
              width={315}
              height={380}
            />
          </div>
          <div className="image5">
            <Image
              src={Rectangle5}
              alt="Rectangle 5"
              width={315}
              height={380}
            />
          </div>
          <div className="image6">
            <Image
              src={Rectangle6}
              alt="Rectangle 6"
              width={315}
              height={380}
            />
          </div>
          <div className="image7">
            <Image
              src={Rectangle7}
              alt="Rectangle 7"
              width={315}
              height={380}
            />
          </div>
        </div>
        <PageHeader>{data.homepage.title}</PageHeader>
        <div className="description">{data.homepage.description}</div>
        <button className="getToKnowUsButton">
          {data.homepage.getToKnowUsButton}
        </button>
        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 790px;
          }
          div.background {
            position: absolute;
            z-index: -1;
            inset: 0;
            background: linear-gradient(
              109.17deg,
              #f4f3fd 38.49%,
              #d3d1fc 98.95%
            );
          }
          div.description {
            font-size: 28px;
            font-weight: 500;
            width: 27%;
            text-align: center;
            margin-top: 10px;
          }
          div.image1 {
            box-sizing: border-box;
            position: absolute;
            width: 315px;
            height: 380px;
            left: 1398px;
            top: 87px;
            background: url(pexels-meruyert-gonullu-7499397.jpg);
            filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
            border-radius: 8px;
          }
          div.image2 {
            box-sizing: border-box;
            position: absolute;
            width: 315px;
            height: 380px;
            left: 1627px;
            top: 259px;
            background: url(pexels-migs-reyes-4205505.jpg);
            filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
            border-radius: 8px;
          }
          div.image3 {
            box-sizing: border-box;
            position: absolute;
            width: 315px;
            height: 380px;
            left: 1262px;
            top: 540px;
            background: url(pexels-robert-stokoe-1421784.jpg);
            filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
            border-radius: 8px;
          }
          div.image4 {
            ox-sizing: border-box;
            position: absolute;
            width: 315px;
            height: 380px;
            left: 322px;
            top: 540px;
            background: url(pexels-nicholas-githiri-1027931.jpg);
            filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
            border-radius: 8px;
          }
          div.image5 {
            box-sizing: border-box;
            position: absolute;
            width: 315px;
            height: 380px;
            left: -43px;
            top: 300px;
            z-index: 1;
            background: url(pexels-pixabay-50692.jpg);
            filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
            border-radius: 8px;
          }
          div.image6 {
            box-sizing: border-box;
            position: absolute;
            width: 315px;
            height: 380px;
            left: 165px;
            top: 0px;
            background: url(pexels-samer-daboul-1815257.jpg);
            filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
            border-radius: 8px;
          }
          div.image7 {
            box-sizing: border-box;
            position: absolute;
            width: 315px;
            height: 380px;
            left: 637px;
            top: -190px;
            background: url(pexels-pixabay-236164.jpg);
            filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
            border-radius: 8px;
          }
          button.getToKnowUsButton {
            width: 185px;
            height: 60px;
            background: #4e47f9;
            border-radius: 51px;
            font-family: 'Assistant';
            font-style: normal;
            font-weight: 700;
            line-height: 37px;
            /* identical to box height */
            text-align: center;
            color: #ffffff;
            margin-top: 20px;
          }
        `}</style>
      </div>
    </div>
  )
}
