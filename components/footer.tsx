import { useState, useEffect } from 'react'
import _ from 'lodash'
import { CommonType } from '@/lib/interface'

import { WrapperLarge } from './wrapper'
import { Button } from '../components/data-components/button'
import { FooterContactItem } from '../components/data-components/footer-contact-item'

export default function Footer({ data }: CommonType) {
  const [contactItems, setContactItems] = useState<
    Array<{
      text: string
      linkType: string
      imagePath: string
      linkValue: string
    }>
  >([])

  useEffect(() => {
    if (data) {
      const contactUsLinks = _.cloneDeep(data.contactUsLinks)
      const combinedTwoItemsTxt =
        contactUsLinks[0].text + '/' + contactUsLinks[1].text
      const tempArr = contactUsLinks
      tempArr.shift()
      tempArr[0].text = combinedTwoItemsTxt
      const tempAdress = tempArr[1]
      tempArr[1] = tempArr[2]
      tempArr[2] = tempAdress
      setContactItems(tempArr)
    }
  }, [data])

  if (!contactItems) return <div></div>
  return (
    <>
      <WrapperLarge>
        <footer
          id="footer"
          className="bg-light h-[390px] flex items-center justify-center p-4 sm:p-0"
        >
          <div className="grid grid-cols-2-auto grid-rows-2-auto sm:grid-cols-4-auto m-x-auto gap-x-4 gap-y-4 sm:gap-x-32 h-fit w-fit">
            <div className="logo bg-cover w-[120px] h-[52px] sm:w-[348px] sm:h-[152px] sm:mt-[-50px] mr-[-14px] sm:mr-0"></div>

            <div className="flex flex-col items-center justify-start w-fit">
              <Button
                text={data.footerScheduleButton}
                className={
                  'my-9 text-base leading-5 bg-white text-icon-bg border-2 border-icon-bg font-bold hover:bg-icon-bg hover:text-white px-6 py-1 rounded-full mb-0 mt-0 rtl:w-[128px] ltr:w-[240px]'
                }
              ></Button>

              <Button
                text={data.footerSupportUsButton}
                className={
                  'my-9 text-base leading-5 bg-white text-icon-bg border-2 border-icon-bg font-bold hover:bg-icon-bg hover:text-white px-6 py-1 rounded-full mb-0 mt-2 rtl:w-[128px] ltr:w-[240px]'
                }
              ></Button>
            </div>

            <div className="footer-menu flex flex-col justify-start items-center w-fit">
              <h2 className="text-xl font-bold mb-2">{data.footerMenuTitle}</h2>

              <a href="#contact-us">{data.footerContactUsTitle}</a>
              <a href="#footer"> {data.footerSupportUsButton}</a>
            </div>

            <div className="flex flex-col items-center">
              <div>
                <h2 className="text-xl font-bold mb-2">
                  {data.footerContactUsTitle}
                </h2>
                {contactItems.map((item, idx) => {
                  return (
                    <FooterContactItem
                      link={item}
                      key={`footer-contact-item-${idx}`}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </footer>
      </WrapperLarge>

      <style jsx>{`
        div.logo {
          background-image: url('assets/img/logo.svg');
        }
        span.footer-contact-img {
          background-image: url('assets/img/icons.phone-icon-contact');
        }
      `}</style>
    </>
  )
}
