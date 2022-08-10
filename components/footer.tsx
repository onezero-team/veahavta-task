import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import { ButtonForFooter } from '@/components/design-components/ButtonForFooter'
import { useEffect, useRef } from 'react'

export default function Footer({
  data,
  aboutRef,
  contactUsRef,
  footerRef,
}: any) {
  const footerR = useRef<HTMLDivElement>(null)

  useEffect(() => {
    footerRef(footerR)
  }, [])

  return (
    <>
      <footer className="bg-light my-footer-container flex justify-center">
        <div ref={footerR} className={'inner-container-footer'}>
          <div className={'my-logo-footer'}>
            <img className={'my-image-logo'} src={'/image/BigLogo.svg'} />
          </div>
          <div className={'buttons flex flex-col'}>
            <ButtonForFooter text={data.common.footerScheduleButton} />
            <div className={'mt-2.5'}>
              <ButtonForFooter text={data.common.footerSupportUsButton} />
            </div>
          </div>
          <div className={'my-menu-footer'}>
            <div className={'my-header-footer'}>
              {data.common.footerMenuTitle}
            </div>
            <div
              onClick={() => {
                aboutRef.current?.scrollIntoView()
              }}
              className={'link-font cursor-pointer'}
            >
              {data.homepage.aboutHeading}
            </div>
            <div
              onClick={() => {
                contactUsRef.current?.scrollIntoView()
              }}
              className={'link-font cursor-pointer'}
            >
              {data.common.footerContactUsTitle}
            </div>
            <div className={'link-font cursor-pointer'}>
              {data.common.footerSupportUsButton}
            </div>
          </div>
          <div className={'my-menu-contact-footer'}>
            <div className={'my-header-footer'}>
              {data.common.footerContactUsTitle}
            </div>
            <a
              href={`${data.common.contactUsLinks[0].linkType}:${data.common.contactUsLinks[0].linkValue}`}
              className={'flex data-contact-row first-row'}
            >
              <img
                className={'icon-img'}
                src={'/icons/phone-purple-icon.svg'}
              />
              <div className={'flex flex-col mt-3 mr-3 ml-3'}>
                <div className={'cursor-default'}>
                  {data.common.contactUsLinks[0].text}
                </div>
                <div className={'cursor-default'}>
                  {data.common.contactUsLinks[1].text}
                </div>
              </div>
            </a>
            <a
              href={`mailto:${data.common.contactUsLinks[3].text}`}
              className={'flex data-contact-row '}
            >
              <img className={'icon-img'} src={'/icons/email-purple.svg'} />
              <div className={'flex flex-col mt-3 mr-3 ml-3'}>
                <div className={'cursor-default second'}>
                  {data.common.contactUsLinks[3].text}
                </div>
              </div>
            </a>
            <a
              href={`http://maps.google.com/?q=${data.common.contactUsLinks[2].text}`}
              target={'_blank'}
              className={'flex data-contact-row third-row'} rel="noreferrer"
            >
              <img className={'icon-img'} src={'/icons/location-purple.svg'} />
              <div className={'flex flex-col mt-3 mr-3 ml-3'}>
                <div className={'cursor-default'}>
                  {data.common.contactUsLinks[2].text}
                </div>
              </div>
            </a>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .my-footer-container {
            min-height: 389px;
          }

          .first-row {
            margin-right: 3px;
            margin-left: 3px;
          }

          .third-row {
            margin-right: 5px;
            margin-left: 5px;
          }

          .inner-container-footer {
            width: 62%;
            display: flex;
            justify-content: space-between;
          }

          .my-menu-contact-footer {
            margin-top: 104px;
            width: 270px;
          }

          .my-image-logo {
            width: 348px;
            height: 152px;
            margin-top: 62px;
          }

          .buttons {
            margin-top: 106px;
          }

          .my-menu-footer {
            display: flex;
            flex-direction: column;
            margin-top: 106px;
          }

          .my-header-footer {
            height: 29px;
            left: 779px;
            font-family: Assistant;
            font-size: 22px;
            font-weight: 700;
            line-height: 29px;
            letter-spacing: 0em;
            color: black;
            cursor: default;
          }

          .link-font {
            width: 94px;
            left: 741px;
            font-family: Assistant;
            font-size: 16px;
            font-weight: 400;
            line-height: 34px;
            letter-spacing: 0em;
            color: black;
            margin-top: 2px;
          }

          .data-contact-row {
            margin-top: 5px;
          }

          .second {
            width: 134px;
          }

          .icon-img {
            margin-top: 11px;
          }

          @media only screen and (max-width: 1420px) {
            .my-menu-footer {
              display: none;
            }
          }

          @media only screen and (max-width: 1270px) {
            .my-menu-footer {
              display: none;
            }

            .inner-container-footer {
              flex-direction: column;
              align-items: center;
              height: 600px;
            }

            .buttons {
              margin-top: 38px;
            }

            .my-menu-contact-footer {
              margin-top: 50px;
              margin-bottom: 100px;
            }
          }
        `}
      </style>
    </>
  )
}
