import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import BrandLogo from './brand-logo'
import { Button } from './data-components/button'
import Link from 'next/link'
export default function Footer({ data }: CommonType) {
  console.log(data, 'FOOTER')
  return (
    <WrapperLarge>
      <footer className="bg-light">
        <div className="grid md:grid-cols-4 grid-cols-1">
          <div className="flex place-content-center ">
            <BrandLogo />
          </div>
          <div>
            <div className="flex place-content-center ">
              <Button
                className="bg-light text-xl font-bold text-btnblue rounded-full border-2 px-7 py-2 "
                text={data.footerScheduleButton}
              />
            </div>
            <br />
            <div className="flex place-content-center ">
              <Button
                className="bg-light text-xl font-bold text-btnblue rounded-full border-2 px-10 py-2"
                text={data.footerSupportUsButton}
              />
            </div>
          </div>
          <div>
            <FooterMenu data={data} />
          </div>
          <div>
            <ContactUs data={data} />
          </div>
        </div>
      </footer>
    </WrapperLarge>
  )
}

const FooterMenu = ({ data }: any) => {
  return (
    <div>
      <div className="flex place-content-center text-xl font-bold">
        {data.footerMenuTitle}
      </div>
      {data.appLinks.map((item: any, key: any) => {
        return (
          <div className="flex place-content-center" key={key}>
            <Link href={item.relativeLink}>{item.text}</Link>
          </div>
        )
      })}
    </div>
  )
}

const ContactUs = ({ data }: any) => {
  return (
    <div>
      <div className="flex place-content-center text-xl font-bold">
        {data.footerContactUsTitle}
      </div>
      {data.contactUsLinks.map((item: any, key: any) => {
        return (
          <div className="flex place-content-center" key={key}>
            <Link
              href={
                item.linkType === 'tel'
                  ? `tel:${item.linkValue}`
                  : item.linkType === 'mail'
                  ? `mailto:${item.text}`
                  : `https://www.google.co.il/maps/search/${item.text}`
              }
            >
              {item.text}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
