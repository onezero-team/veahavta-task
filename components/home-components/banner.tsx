import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import SquareImages from '../data-components/square-images'
import { WrapperLarge, Wrapper } from '../wrapper'
import { Button } from '../data-components/button'
export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div className="wrapper overflow-hidden">
        <WrapperLarge>
          <div className="grid place-items-center md:py-24">
            <div className="background">
              <SquareImages />
            </div>
            <PageHeader>{data.homepage.title}</PageHeader>
            <p className="text-xl text-center max-w-[400px] md:text-2xl pb-7">
              {data.homepage.description}
            </p>
            <Button
              className="bg-btnblue text-2xl font-bold text-light rounded-full px-7 py-2"
              type=""
              text={data.homepage.getToKnowUsButton}
            />
          </div>
        </WrapperLarge>
        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            position: relative;
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
        `}</style>
      </div>
    </div>
  )
}
