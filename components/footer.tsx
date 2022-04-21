import { useState, useEffect } from 'react'
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
      const combinedTwoItemsTxt =
        data.contactUsLinks[0].text + ' ' + data.contactUsLinks[1].text
      const tempArr = data.contactUsLinks
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
        <footer className="bg-light h-[390px] flex items-center justify-center">
          {/* <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4 items-start  w-fit"> */}
          <div className="flex flex-row items-start justify-evenly w-full">
            <div className="logo bg-cover w-[348px] h-[152px]"></div>

            <div className="flex flex-col items-center justify-start">
              <Button
                text={data.footerScheduleButton}
                className={
                  'my-9 text-base leading-5 bg-white text-icon-bg border-2 border-icon-bg font-bold hover:bg-icon-bg hover:text-white px-6 py-3 rounded-full mb-0 mt-0 rtl:w-[128px] ltr:w-[240px]'
                }
              ></Button>

              <Button
                text={data.footerSupportUsButton}
                className={
                  'my-9 text-base leading-5 bg-white text-icon-bg border-2 border-icon-bg font-bold hover:bg-icon-bg hover:text-white px-6 py-3 rounded-full mb-0 mt-2 rtl:w-[128px] ltr:w-[240px]'
                }
              ></Button>
            </div>

            <div className="footer-menu flex flex-col items-start justify-start">
              <h2 className="text-xl font-bold mb-2">{data.footerMenuTitle}</h2>
              <ul>
                <li></li>
                <li>{data.footerContactUsTitle}</li>
                <li>{data.footerSupportUsButton}</li>
              </ul>
            </div>

            <div className="footer-contact flex flex-col items-center">
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
