import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import Image from 'next/image'
import logo from '../public/assets/navbar-logo.svg'
import HeaderLinks from './modular-components/HeaderLinks'
import Contact from './modular-components/Contact'

export default function Footer({ data }: CommonType) {
  const contacts = data.contactUsLinks
  const newArray = contacts.map((contact) => {
    let newPath = contact.imagePath
    newPath = newPath.replace(/\.svg/, '-2.svg')
    return {
      ...contact,
      imagePath: newPath,
    }
  })

  return (
    <WrapperLarge>
      <footer className="footer bg-light gap-6 grid md:grid-cols-2 lg:grid-cols-4 px-36 mt-36 pb-36 ">
        <Image src={logo} width="348" height="152" />
        <div className="footer-buttons flex flex-col gap-y-2 justify-center mr-20 ">
          <button
            className="footer__button text-header-blue font-bold "
            type="button"
          >
            {data.footerScheduleButton}
          </button>
          <button
            className="footer__button text-header-blue font-bold"
            type="button"
          >
            {data.footerSupportUsButton}
          </button>
        </div>

        <div className="menu">
          <h3 className="font-bold text-2xl mb-2">{data.footerMenuTitle}</h3>
          <ul className="flex flex-col  text-base gap-y-2">
            <HeaderLinks headerData={data.appLinks} />
          </ul>
        </div>
        <div className="contactUs">
          <h3 className="font-bold text-2xl mb-2">
            {data.footerContactUsTitle}
          </h3>
          <ul>
            {newArray.map((contact, index) => {
              return (
                <Contact
                  key={index}
                  text={contact.text}
                  linkValue={contact.linkValue}
                  linkType={contact.linkType}
                  imagePath={contact.imagePath}
                  setBackground={false}
                />
              )
            })}
          </ul>
        </div>
        <style jsx>{`
          .footer__button {
            border: 2px solid #4e47f9;
            border-radius: 34px;
            width: 128px;
            height: 48px;
          }
        `}</style>
      </footer>
    </WrapperLarge>
  )
}
