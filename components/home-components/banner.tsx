import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import groupImage from '../../public/assets/group.png'
import Image from 'next/image'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header" className="overflow-hidden box-border">
      <div className="wrapper pb-6 bg-banner   max-w-full  mobile:pb-20">
        <div className="background"></div>
        <div className="absolute -bottom-36  group">
          <Image src={groupImage} />
        </div>

        <PageHeader>{data.homepage}</PageHeader>
        <button className="buttonTest">
          {data.homepage.getToKnowUsButton}
        </button>

        <style jsx>{`
          .wrapper {
            display: flex;
            flex-direction: column;
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            box-size: border-box;
            position: relative;
            background: linear-gradient(
              109.17deg,
              #f4f3fd 38.49%,
              #d3d1fc 72.36%
            );
            z-index: -1;
          }
          button {
            margin-top: 2%;
            background: #4e47f9;
            width: 185px;
            height: 60px;
            border-radius: 51px;
            align-self: center;
            color: #ffffff;
            font-size: 25px;
          }
          @media screen and (max-width: 400px) {
            .group {
              display: none;
            }
          }
        `}</style>
      </div>
    </div>
  )
}
