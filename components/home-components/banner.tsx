import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { Button } from '@/components/design-components/Button'



export default function Banner({ data, about }: any) {
  const splitSentence = data.homepage.title.split('-')

  return (
    <div id="top-header">
      <div className="wrapper">
        <div className={'absolute image-display'}>
          <img src={'/image/image-for-banner.png'} />
        </div>
        <div className="background"></div>
        <div
          className={
            'flex flex-wrap h-full flex-col justify-center items-center'
          }
        >
          <div
            className={
              'flex flex-shrink cursor-default font-body font-bold my-font-size'
            }
          >
            {splitSentence[0] + ' - '}
          </div>
          <div
            className={
              'flex flex-shrink cursor-default font-body font-bold my-font-size'
            }
          >
            {splitSentence[1]}
          </div>
          <div
            className={'flex flex-shrink text-center description-div font-body'}
          >
            {data.homepage.description}
          </div>
          <div className={'mt-9 my-btn'}>
            <Button
              text={data.homepage.getToKnowUsButton}
              type={'big'}
              refBtn={about}
            />
          </div>
        </div>
        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            position: relative;
            width: 100%;
            height: 780px;
            overflow: hidden;
          }

          body::-webkit-scrollbar {
            display: none;
          }

          .my-font-size {
            font-size: 82px;
            line-height: 107.26px;
          }

          .description-div {
            height: 80px;
            width: 396px;
            left: 762px;
            top: 460px;
            font-size: 24px;
          }

          .image-for-banner {
            display: block;
          }

          @media only screen and (max-width: 1586px) {
            .description-div {
              font-size: 22px;
              height: 80px;
              width: 396px;
              left: -3px;
              top: 381px;
            }

            .my-font-size {
              font-size: 38px;
              line-height: 49.7px;
            }
          }

          @media only screen and (max-width: 1308px) {
            .image-display {
              display: none;
            }
          }

          @media only screen and (min-width: 1925px) {
            .image-display {
              display: none;
            }
          }

          @media only screen and (max-width: 417px) {
            .description-div {
              font-size: 15px;
              height: 30px;
              width: 196px;
              left: -3px;
              top: 381px;
            }

            .my-font-size {
              font-size: 18px;
              line-height: 19.7px;
            }
          }

          .my-btn {
            margin-top: 100px;
            z-index: 5;
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

          .description-div {
            margin-top: 20px;
          }
        `}</style>
      </div>
    </div>
  )
}
