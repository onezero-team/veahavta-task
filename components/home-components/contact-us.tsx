import React, { useEffect, useRef, useState } from 'react'
import { ContactUsForm } from '@/components/design-components/ContactUsForm'

export default function ContactUs({ data, getRef }: any) {
  const [isEn, setIsEn] = useState<string>('')
  const contactRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    getRef('contact', contactRef)
  }, [])

  useEffect(() => {
    if (
      window.location.pathname !== '/' &&
      window.location.pathname !== '/ar'
    ) {
      if (isEn === '') {
        setIsEn('-en')
      }
    } else {
      if (isEn === '-en') {
        setIsEn('')
      }
    }
  })

  function leftOrRight(type: string) {
    if (type === 'right') {
      if (isEn === '') {
        return '/icons/right-side-circle.svg'
      } else {
        return '/icons/left-side-circle.svg'
      }
    } else {
      if (isEn === '') {
        return '/icons/left-side-circle.svg'
      } else {
        return '/icons/right-side-circle.svg'
      }
    }
  }

  return (
    <>
      <div
        ref={contactRef}
        className={
          'main-container-contact-us relative flex justify-center items-center'
        }
      >
        <div className={'absolute w-full h-full flex justify-start'}>
          <img className={'right-circle' + isEn} src={leftOrRight('right')} />
        </div>
        <div className={'absolute w-full h-full flex justify-end'}>
          <img className={'left-circle' + isEn} src={leftOrRight('left')} />
        </div>
        <div className={'absolute flex justify-between mini-contact-container'}>
          <div className={'flex flex-col mt-80 my-block-for-res'}>
            <div className={'contact-heading flex justify-center items-center'}>
              <div className={'contact-heading-text cursor-default'}>
                {data.homepage.contactUsHeading}
              </div>
            </div>
            <div className={'my-title-contact mt-7'}>
              <div className={'my-title-contact-text cursor-default'}>
                {data.homepage.contactUsTitle}
              </div>
            </div>
            <div className={'my-desc-contact mt-3'}>
              <div className={'my-desc-contact-text cursor-default'}>
                {data.homepage.contactUsText}
              </div>
            </div>
            <div className={'my-block mt-10'}>
              <div className={'my-row-contact flex justify-between'}>
                <div className={'flex'}>
                  <div
                    className={'my-round-icon flex justify-center items-center'}
                  >
                    <img src={'/icons/phone-icon.svg'} />
                  </div>
                  <div
                    className={
                      'round-icon-desc my-zero' + isEn + ' cursor-default'
                    }
                  >
                    {data.common.contactUsLinks[0].text}
                  </div>
                </div>
                <div className={'flex my-m-t'}>
                  <div
                    className={'my-round-icon flex justify-center items-center'}
                  >
                    <img src={'/icons/phone-icon.svg'} />
                  </div>
                  <div
                    className={
                      'round-icon-desc my-one' + isEn + ' ml-3 cursor-default'
                    }
                  >
                    {data.common.contactUsLinks[1].text}
                  </div>
                </div>
              </div>
              <div className={'my-row-contact flex justify-between mt-4'}>
                <div className={'flex'}>
                  <div
                    className={'my-round-icon flex justify-center items-center'}
                  >
                    <img src={'/icons/location-icon.svg'} />
                  </div>
                  <div
                    className={
                      'round-icon-desc my-two' + isEn + ' cursor-default'
                    }
                  >
                    {data.common.contactUsLinks[2].text}
                  </div>
                </div>
                <div className={'flex my-m-t'}>
                  <div
                    className={'my-round-icon flex justify-center items-center'}
                  >
                    <img src={'/icons/email-icon.svg'} />
                  </div>
                  <div
                    className={
                      'round-icon-desc my-three' +
                      isEn +
                      ' ml-3 mt-2 cursor-default'
                    }
                  >
                    {data.common.contactUsLinks[3].text}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={''}>
            <ContactUsForm data={data} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .main-container-contact-us {
            min-height: 680px;
            background: #f4f3fd;
          }

          .round-icon-desc.my-zero {
            height: 21px;
            width: 135px;
            left: 1376px;
            top: 537px;
            font-family: Assistant;
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            color: black;
            margin-right: 14px;
          }

          .round-icon-desc.my-zero-en {
            height: 21px;
            width: 135px;
            left: 1376px;
            top: 537px;
            font-family: Assistant;
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            color: black;
            margin-left: 14px;
          }

          .round-icon-desc.my-one {
            height: 21px;
            width: 112px;
            left: 1182px;
            top: 537px;
            font-family: Assistant;
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            margin-right: 14px;
            color: black;
          }

          .round-icon-desc.my-one-en {
            height: 21px;
            width: 112px;
            left: 1182px;
            top: 537px;
            font-family: Assistant;
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            margin-left: 14px;
            color: black;
          }

          .round-icon-desc.my-two {
            height: 21px;
            width: 244px;
            left: 1182px;
            top: 537px;
            font-family: Assistant;
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            margin-right: 14px;
            color: black;
            margin-top: 10px;
          }

          .round-icon-desc.my-two-en {
            height: 21px;
            width: 244px;
            left: 1182px;
            top: 537px;
            font-family: Assistant;
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            margin-left: 14px;
            color: black;
            margin-top: 10px;
          }

          .round-icon-desc.my-three {
            height: 21px;
            width: 112px;
            left: 1182px;
            top: 537px;
            font-family: Assistant;
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            margin-right: 14px;
            color: black;
          }

          .round-icon-desc.my-three-en {
            height: 21px;
            width: 112px;
            left: 1182px;
            top: 537px;
            font-family: Assistant;
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            margin-left: 14px;
            color: black;
          }

          .my-round-icon {
            height: 44px;
            width: 44px;
            left: 1525px;
            top: 536px;
            background: #4e47f9;
            border-radius: 50%;
          }

          .my-title-contact-text {
            font-family: Assistant;
            font-size: 42px;
            font-weight: 700;
            line-height: 55px;
            letter-spacing: 0em;
            color: black;
          }

          .my-title-contact {
            height: 55px;
            left: 1260px;
            top: 370px;
            cursor: default;
          }

          .contact-heading {
            height: 40px;
            width: 119px;
            left: 1451px;
            top: 349px;
            border-radius: 51px;
            background: white;
            cursor: default;
          }

          .contact-heading-text {
            font-family: Assistant;
            font-size: 22px;
            font-weight: 700;
            line-height: 29px;
            letter-spacing: 0em;
            color: #4e47f9;
          }

          .my-desc-contact {
            width: 479px;
            left: 1091px;
            top: 436px;
          }

          .my-desc-contact-text {
            font-family: Assistant;
            font-size: 22px;
            font-weight: 400;
            line-height: 29px;
            letter-spacing: 0em;
            color: black;
          }

          .mini-contact-container {
            width: 1300px;
            margin-top: -250px;
          }

          .right-circle {
            width: 185px;
            height: 318px;
          }

          .left-circle {
            width: 282px;
            height: 226px;
            margin-top: 454px;
          }

          .right-circle-en {
            width: 282px;
            height: 226px;
            margin-top: 454px;
          }

          .left-circle-en {
            width: 185px;
            height: 318px;
          }

          @media only screen and (max-width: 1340px) {
            .my-block-for-res {
              background: white;
              margin-bottom: 50px;
            }

            .my-desc-contact {
              width: 356px;
            }

            .contact-heading {
              width: 72px;
            }

            .my-row-contact {
              flex-direction: column;
            }

            .mini-contact-container {
              width: fit-content;
              justify-content: center;
              flex-direction: column;
              margin-top: -950px;
            }

            .my-m-t {
              margin-top: 15px;
            }
          }
        `}
      </style>
    </>
  )
}
