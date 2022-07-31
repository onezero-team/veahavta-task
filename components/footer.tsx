import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import Image from 'next/image'
import logo from '../public/assets/navbar-logo.svg'
import HeaderLinks from './modular-components/HeaderLinks.jsx'
import Contact from './modular-components/Contact.jsx'

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
      <footer
        className="
      footer bg-light gap-6 grid grid-cols-4-auto px-36 mt-36 pb-36 
      sm:flex sm:flex-col sm:p-0 sm:items-center sm:gap-y-16
      md:flex md:flex-col md:items-center  
        "
      >
        <Image src={logo} width="348" height="152" alt="" />
        <div
          className="
        footer-buttons flex flex-col gap-y-10 justify-center mr-20 
        sm:mr-0 sm:gap-y-5 
        md:flex-row md:mr-0 md:gap-x-5 
        "
        >
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

        <div className="menu sm:hidden md:hidden ">
          <h3 className="font-bold text-2xl mb-2">{data.footerMenuTitle}</h3>
          <ul className="flex flex-col  text-base gap-y-2">
            <HeaderLinks headerData={data.appLinks} />
          </ul>
        </div>
        <div className="contactUs sm:mb-20">
          <h3 className="font-bold text-2xl mb-2">
            {data.footerContactUsTitle}
          </h3>
          <ul
            className="flex flex-col gap-y-2  
          md:grid  
          md:grid-cols-2-auto  
          md:gap-y-5  
          md:gap-x-5"
          >
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
