import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div className="wrapper">
        <PageHeader>{data.homepage}</PageHeader>
        <div className="background" />
        <img
          src="banner/kids.png"
          className="banner-img top-0 left-[165px] md:left-[65px] sm:hidden"
        />
        <img
          src="banner/babies.png"
          className="banner-img top-[300px] left-0 sm:hidden"
        />
        <img
          src="banner/hands.png"
          className="banner-img top-0 left-[637px] md:left-[500px] sm:hidden"
        />
        <img
          src="banner/mother.png"
          className="banner-img top-[540px] left-[322px] md:left-[200px] z-[0] sm:hidden"
        />
        <img
          src="banner/father.png"
          className="banner-img top-[87px] right-[207px] md:right-[50px] z-[0] sm:hidden"
        />
        <img
          src="banner/family.png"
          className="banner-img top-[259px] right-0 sm:hidden"
        />
        <img
          src="banner/granny.png"
          className="banner-img top-[540px] right-[343px] md:right-[200px] sm:hidden"
        />

        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            position: relative;
            overflow: hidden;
            height: 780px;
          }
          div.background {
            position: absolute;
            z-index: -1;
            inset: 0;
            background: linear-gradient(
              109.17deg,
              #f4f3fd 38.49%,
              #d3d1fc 72.36%
            );
          }
          .banner-img {
            position: absolute;
            width: 15%;
            min-width: 200px;
          }
        `}</style>
      </div>
    </div>
  )
}
