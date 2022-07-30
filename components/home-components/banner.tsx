import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader, Heading } from '../data-components/header-text'
import { WrapperLarge } from '../wrapper'
import { BlueButton } from '../data-components/text-button'
import { useLocale } from '@/lib/hooks'

export default function Banner({ data }: HomePageType) {
  const { dir } = useLocale()
  return (
    <div id="top-header">
      <div className="wrapper ">
        <div className="background">
          <div className="hidden xl:block backgroundImagesRight "></div>
          <div className="hidden xl:block backgroundImagesLeft "></div>
        </div>
        <WrapperLarge className="text-center mt-56 sm:mt-42 sm:grid-cols-1fr-auto-1fr  ">
          <div className="max-w-screen-md col-start-2">
            <PageHeader>{data.homepage.title}</PageHeader>
            <Heading className="mb-3 mt-2.5 md:mt-0.5">
              {data.homepage.description}
            </Heading>
            <BlueButton
              className="text-3xl col-start-2 mx-auto mt-9.9"
              text={data.homepage.getToKnowUsButton}
            />
          </div>
        </WrapperLarge>
        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            height: 780px;
            position: relative;
          }
          div.backgroundImagesRight {
            position: absolute;
            width: ${dir === 'rtl' ? '1920px' : 'auto'};
            z-index: -1;
            inset: 0;
            background: url('/img/baner/Rectangle 6.png') 1262px 540px no-repeat,
              url('/img/baner/Rectangle 5.png') 1627px 259px no-repeat,
              url('/img/baner/Rectangle 2.png') 1398px 87px no-repeat;
          }
          div.backgroundImagesLeft {
            position: absolute;
            z-index: -1;

            inset: 0;
            background: url('/img/baner/Rectangle 7.png') 322px 540px no-repeat,
              url('/img/baner/Rectangle 8.png') 0px 300px no-repeat,
              url('/img/baner/Rectangle 9.png') 165px 0px no-repeat,
              url('/img/baner/Rectangle 10.png') 637px 0px no-repeat;
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
        `}</style>
      </div>
    </div>
  )
}
