import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import { FullButton } from '../data-components/full-button'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div className="wrapper flex justify-center">
        <div className="flex flex-col items-center justify-center  w-[700px] xs:w-11/12">
          <PageHeader className="xs:-mt-24">
            {data.homepage.title}
          </PageHeader>
          <p className="w-3/4 text-center text-md xs:text-sm">{data.homepage.description}</p>
          <FullButton
            className="mt-10 text-md font-bold"
            text={data.homepage.getToKnowUsButton}
          ></FullButton>
        </div>
        <div className="background" />
        <img
          src="banner/kids.png"
          alt="kids"
          className="banner-img top-0 left-[165px] md:left-[65px] sm:hidden"
        />
        <img
          src="banner/babies.png"
          alt="babies"
          className="banner-img top-[300px] left-0 sm:hidden"
        />
        <img
          src="banner/hands.png"
          alt="holding hands"
          className="banner-img top-0 left-[637px] md:left-[500px] sm:hidden"
        />
        <img
          src="banner/mother.png"
          alt="mother with a child"
          className="banner-img top-[540px] left-[322px] md:left-[200px] z-[0] sm:hidden"
        />
        <img
          src="banner/father.png"
          alt="father with a baby"
          className="banner-img top-[87px] right-[207px] md:right-[50px] z-[0] sm:hidden"
        />
        <img
          src="banner/family.png"
          alt="family photo"
          className="banner-img top-[259px] right-0 sm:hidden"
        />
        <img
          src="banner/granny.png"
          alt="grandma with family"
          className="banner-img top-[540px] right-[343px] md:right-[200px] sm:hidden"
        />

        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: 22px;
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
