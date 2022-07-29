import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import background from '../../public/assets/main-background.png'
import groupImage from '../../public/assets/group.png'
import Image from 'next/image'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div className="wrapper">
        <div className="background">
          <Image src={background} />
        </div>
        <div className="background group">
          <Image src={groupImage} />
        </div>

        <PageHeader>{data.homepage}</PageHeader>
        <button className="buttonTest">
          {data.homepage.getToKnowUsButton}
        </button>

        <style jsx>{`
          div {
            gap: 0;
            padding-bottom: 5%;
          }
          div.wrapper {
            display: flex;
            flex-direction: column;
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};

            position: relative;
          }
          div.background {
            position: absolute;
            z-index: -1;
            inset: 0;
            overflow: hidden;
          }
          div.group {
            margin-top: -5%;
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
        `}</style>
      </div>
    </div>
  )
}
