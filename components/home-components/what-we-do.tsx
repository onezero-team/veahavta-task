import React, { useEffect, useRef, useState } from 'react'
import { ServiceCard } from '@/components/design-components/ServiceCard'
import { useLocale } from '@/lib/hooks'

export default function WhatWeDo({ data, getRef }: any) {
  const [isEn, setIsEn] = useState<string>('')
  const cardContainerRef = useRef<HTMLDivElement | null>(null)
  const mainContainerRef = useRef<HTMLDivElement | null>(null)
  const [xAxis, setXAxis] = useState<number>(355)
  const { dir } = useLocale()

  function changeXAxis() {
    if (window.innerWidth > 500) {
      if (xAxis !== 355) {
        setXAxis(355)
      }
    } else {
      if (xAxis !== 255) {
        setXAxis(255)
      }
    }
  }

  useEffect(() => {
    changeXAxis()
    window.addEventListener('resize', changeXAxis)
  }, [])

  useEffect(() => {
    if (dir === 'ltr') {
      if (isEn === '') {
        setIsEn('-en')
      }
    } else {
      if (isEn === '-en') {
        setIsEn('')
      }
    }
  }, [dir])

  useEffect(() => {
    getRef('whatWeDo', mainContainerRef)
  }, [])

  const getWhatWeDoCards = () => {
    return data.homepage?.whatWeDoCards?.map(
      (
        card: { imagePath: string; title: string; text: string },
        index: React.Key | null | undefined,
      ) => {
        if (index === 0 && isEn === '') {
          return (
            <div key={index} className={'mr-2'}>
              <ServiceCard
                imageUrl={card.imagePath}
                title={card.title}
                description={card.text}
              />
            </div>
          )
        } else if (index === 0 && isEn === '-en') {
          return (
            <div key={index} className={'ml-2'}>
              <ServiceCard
                imageUrl={card.imagePath}
                title={card.title}
                description={card.text}
              />
            </div>
          )
        } else if (index !== 0 && isEn === '') {
          return (
            <div key={index} className={'mr-5'}>
              <ServiceCard
                imageUrl={card.imagePath}
                title={card.title}
                description={card.text}
              />
            </div>
          )
        } else {
          return (
            <div key={index} className={'ml-5'}>
              <ServiceCard
                imageUrl={card.imagePath}
                title={card.title}
                description={card.text}
              />
            </div>
          )
        }
      },
    )
  }

  function leftOrRight(type: string) {
    if (type === 'left') {
      if (isEn === '') {
        return '/icons/right-button-for-card.svg'
      } else {
        return '/icons/left-button-for-card.svg'
      }
    } else {
      if (isEn === '') {
        return '/icons/left-button-for-card.svg'
      } else {
        return '/icons/right-button-for-card.svg'
      }
    }
  }

  function scrollDirectionForAddXAxis(type: string) {
    if (type === 'left') {
      if (isEn === '') {
        return Math.abs(xAxis)
      } else {
        return -Math.abs(xAxis)
      }
    } else {
      if (isEn === '') {
        return -Math.abs(xAxis)
      } else {
        return Math.abs(xAxis)
      }
    }
  }

  return (
    <>
      <div ref={mainContainerRef} className={'my-main-container-what-we-do'}>
        <div className={'w-full flex justify-center'}>
          <div className={'flex flex-col items-center move-left'}>
            <div className={'my-header-what cursor-default'}>
              {data.homepage.whatWeDoHeading}
            </div>
            <div className={'my-title-what cursor-default'}>
              {data.homepage.whatWeDoTitle}
            </div>
          </div>
        </div>
        <div className={'w-full flex justify-center card-main-container'}>
          <div
            ref={cardContainerRef}
            className={'card-container flex justify-between'}
          >
            {getWhatWeDoCards()}
            <div className={'scroll-btn absolute justify-between'}>
              <img
                onClick={() => {
                  // @ts-ignore
                  cardContainerRef?.current?.scrollLeft +=
                    scrollDirectionForAddXAxis('left')
                }}
                className={'cursor-pointer my-left-btn' + isEn}
                src={leftOrRight('left')}
              />

              <img
                onClick={() => {
                  // @ts-ignore
                  cardContainerRef.current?.scrollLeft +=
                    scrollDirectionForAddXAxis('right')
                }}
                className={'cursor-pointer my-right-btn' + isEn}
                src={leftOrRight('right')}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .my-main-container-what-we-do {
            min-height: 948px;
          }

          .scroll-btn {
            display: none;
            width: 88.77%;
          }

          .my-right-btn {
            margin-top: 200px;
            margin-left: -33px;
          }

          .my-left-btn {
            margin-right: -35px;
            margin-top: 200px;
          }

          .my-right-btn-en {
            margin-top: 200px;
            margin-right: -35px;
          }

          .my-left-btn-en {
            margin-top: 200px;
            margin-left: -22px;
          }

          .card-container {
            width: 1430px;
            margin-top: 58px;
            height: 550px;
          }

          .my-title-what {
            height: auto;
            width: auto;
            left: 691px;
            top: 1730px;
            font-family: Assistant;
            font-size: 82px;
            font-weight: 700;
            line-height: 107px;
            text-align: left;
            color: black;
          }

          .my-header-what {
            height: auto;
            width: auto;
            left: 872px;
            top: 1692px;
            font-family: Assistant;
            font-size: 28px;
            font-weight: 400;
            line-height: 37px;
            color: #d25c78;
            margin-top: 50px;
          }

          @media only screen and (max-width: 1500px) {
            .card-container {
              width: 1430px;
              margin-top: 58px;
              overflow: auto;
              overflow-y: hidden;
              width: 90vw;
            }

            .card-container::-webkit-scrollbar {
              display: none;
            }

            .my-title-what {
              display: none;
            }

            .make-margin {
              margin: 10px;
            }

            .scroll-btn {
              display: flex;
            }
          }

          @media only screen and (max-width: 1340px) {
            .my-main-container-what-we-do {
              height: 1300px;
            }
          }

          @media only screen and (max-width: 484px) {
            .my-main-container-what-we-do {
              height: 1450px;
            }
          }

          @media only screen and (max-width: 1406px) {
            .my-title-what {
              display: none;
            }
          }

          @media only screen and (max-width: 998px) {
            .my-title-what {
              display: none;
            }

            .make-margin {
              margin: 10px;
            }
          }

          @media only screen and (max-width: 685px) {
            .my-right-btn {
              margin-top: 200px;
              margin-left: -13px;
            }

            .my-left-btn {
              margin-right: -17px;
              margin-top: 200px;
            }
          }

          @media only screen and (max-width: 550px) {
            .my-left-btn-en {
              margin-top: 200px;
              margin-left: -12px;
            }

            .my-right-btn-en {
              margin-top: 200px;
              margin-right: -16px;
            }

            .my-left-btn {
              margin-top: 200px;
              margin-right: -14px;
            }

            .my-right-btn {
              margin-top: 200px;
              margin-left: -17px;
            }
          }

          @media only screen and (max-width: 413px) {
            .my-title-what {
              display: none;
            }

            .make-margin {
              margin: 10px;
            }
          }
        `}
      </style>
    </>
  )
}
