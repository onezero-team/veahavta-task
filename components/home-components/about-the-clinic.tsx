import React, { RefAttributes, useEffect, useRef } from 'react'
import { Button } from '@/components/design-components/Button'

export default function AboutTheClinic({ data, getRef, whatRef }: any) {
  const aboutRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    getRef('about', aboutRef)
  }, [])

  return (
    <>
      <div ref={aboutRef} className={'my-main-container flex justify-around'}>
        <div className={'flex my-image'}>
          <img src={'/image/about-image.png'} />
        </div>
        <div className={'my-desc-container'}>
          <div className={'my-header cursor-default'}>
            {data.homepage.aboutHeading}
          </div>
          <div className={'my-title cursor-default'}>
            {data.homepage.aboutTitle}
          </div>
          <div className={'my-desc cursor-default'}>
            {data.homepage.aboutUsText}
          </div>
          <div className={'mt-9 my-btn-about'}>
            <Button
              text={data.homepage.aboutUsButton}
              type={'small'}
              refBtn={whatRef}
            />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .my-main-container {
            height: 917px;
            overflow: hidden;
          }

          .my-btn-about {
            z-index: 5;
          }

          .my-header {
            width: 158px;
            font-family: Assistant;
            font-size: 28px;
            font-weight: 400;
            line-height: 37px;
            color: #4e47f9;
          }

          .my-title {
            height: 182px;
            width: 546px;
            left: 317px;
            top: 188px;
            font-family: Assistant;
            font-size: 52px;
            font-weight: 700;
            line-height: 60px;
            letter-spacing: 0em;
            color: black;
            margin-top: 13px;
          }

          .my-desc {
            height: 92px;
            width: 530px;
            left: 333px;
            top: 422px;
            font-family: Assistant;
            font-size: 18px;
            font-weight: 400;
            line-height: 29px;
            letter-spacing: 0em;
            color: black;
            margin-top: 52px;
          }

          .my-image {
            margin-top: 92px;
            height: 628px;
            width: 702px;
            left: 970px;
            top: 97px;
            border-radius: 8px;
            margin-right: 150px;
          }

          .my-desc-container {
            margin-top: 133px;
            margin-left: 150px;
          }

          @media only screen and (max-width: 1693px) {
            .my-main-container {
              width: 100%;
              flex-direction: column;
              align-items: center;
              height: 1400px;
            }

            .my-image {
              align-items: center;
              justify-content: center;
              margin-right: 0px;
            }

            .my-desc-container {
              margin-left: 0px;
              align-items: center;
              justify-content: center;
            }
          }

          @media only screen and (max-width: 725px) {
            .my-image {
              margin-top: 50px;
              margin-right: 0px;
              height: 328px;
              width: 402px;
            }

            .my-main-container {
              justify-content: normal;
              height: 1000px;
            }

            .my-desc-container {
              margin-top: 80px;
              margin-left: 0px;
              margin-left: 0px;
              align-items: center;
              justify-content: center;
            }
          }

          @media only screen and (max-width: 575px) {
            .my-image {
              margin-top: 50px;
              margin-right: 0px;
              height: 128px;
              width: 202px;
            }

            .my-main-container {
              justify-content: normal;
              height: 800px;
            }

            .my-desc-container {
              margin-top: 80px;
              margin-left: 0px;
              margin-left: 0px;
              align-items: center;
              justify-content: center;
            }

            .my-header {
              width: auto;
              font-family: Assistant;
              font-size: 28px;
              font-weight: 400;
              line-height: 37px;
              color: #4e47f9;
            }

            .my-title {
              height: auto;
              width: auto;
              left: 317px;
              top: 188px;
              font-family: Assistant;
              font-size: 52px;
              font-weight: 700;
              line-height: 60px;
              letter-spacing: 0em;
              color: black;
              margin-top: 13px;
            }

            .my-desc {
              height: auto;
              width: auto;
              left: 333px;
              top: 422px;
              font-family: Assistant;
              font-size: 18px;
              font-weight: 400;
              line-height: 29px;
              letter-spacing: 0em;
              color: black;
              margin-top: 52px;
            }
          }
        `}
      </style>
    </>
  )
}
