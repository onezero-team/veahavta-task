import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader, Heading } from '../data-components/header-text'
import { WrapperLarge } from '../wrapper'
import { Button } from '../data-components/button'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div className="wrapper ">
        <div className="background"></div>
        <WrapperLarge className=" grid-cols-1fr-1fr-1fr">
          <div className="text-xl col-span-1 col-start-2 text-center mt-60">
            <PageHeader>{data.homepage.title}</PageHeader>
            <Heading className="mb-3 ">{data.homepage.description}</Heading>
            <Button
              className="col-start-2 mx-auto mt-10"
              text={data.homepage.getToKnowUsButton}
            />
          </div>
        </WrapperLarge>
        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            width: 1920px;
            height: 780px;
            position: relative;
          }
          div.background {
            position: absolute;
            width: 1920px;
            height: 780px;
            z-index: -1;
            inset: 0;
            background: url('/img/baner/Rectangle 6.png') 1262px 540px no-repeat,
              url('/img/baner/Rectangle 5.png') 1627px 259px no-repeat,
              url('/img/baner/Rectangle 2.png') 1398px 87px no-repeat,
              url('/img/baner/Rectangle 7.png') 322px 540px no-repeat,
              url('/img/baner/Rectangle 8.png') 0px 300px no-repeat,
              url('/img/baner/Rectangle 9.png') 165px 0px no-repeat,
              url('/img/baner/Rectangle 10.png') 637px 0px no-repeat,
              linear-gradient(109.17deg, #f4f3fd 38.49%, #d3d1fc 72.36%);
          }
        `}</style>
      </div>
    </div>
  )
}
