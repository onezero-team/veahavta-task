import { Common, CommonType, Homepage } from '@/lib/interface'
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import AboutTheClinic from './home-components/about-the-clinic'
import ContactUsInfo from './home-components/contact-us-info'
import { WrapperLarge } from './wrapper'

type iFooter = {
  data: Common
}

export default function Footer({ data }: iFooter) {
  const {
    footerMenuTitle,
    footerContactUsTitle,
    footerScheduleButton,
    footerSupportUsButton,
    contactUsLinks,
    appLinks,
  } = data

  const MenuLinks: any = () => {
    return appLinks.map((link, i) => {
      if (i !== 0) {
        return (
          <Link key={link.text} href={link.relativeLink}>
            <a>{link.text}</a>
          </Link>
        )
      }
    })
  }

  return (
    <WrapperLarge>
      <footer
        className="bg-light h-100 flex items-center justify-evenly
      mobile:flex-col mobile:h-160  overflow-hidden relative"
      >
        <div className="w-80 h-44">
          <Image
            width={350}
            height={152}
            src={'/footer/footer-logo.png'}
            layout="responsive"
            alt="logo"
          />
        </div>
        <div
          className="flex flex-col h-44 justify-start gap-2

        mobile:order-2 mobile:w-36"
        >
          <button
            className="border-2 border-darkPurple font-bold text-darkPurple p-4 pt-2 pb-2  rounded-full
           mobile:text-xl mobile:p-3
           "
          >
            {footerScheduleButton}
          </button>
          <button
            className="border-2 border-darkPurple font-bold text-darkPurple p-4 pt-2 pb-2  rounded-full
          mobile:text-xl mobile:p-3
          "
          >
            {footerSupportUsButton}
          </button>
        </div>
        <div className="flex flex-col h-44 mobile:hidden">
          <span className="font-bold">{footerMenuTitle}</span>

          <MenuLinks />
        </div>

        <div className="flex flex-col gap-1 h-44 mobile:order-3 mobile:gap-5">
          <span className="font-bold mobile:text-2xl">
            {footerContactUsTitle}
          </span>
          <div className=" flex flex-col gap-3">
            {contactUsLinks.map((link) => {
              return (
                <Link key={link.text} href={link.linkValue}>
                  <a className="flex text-xl">
                    <div className="w-7 h-7">
                      <Image
                        src={`/footer/${link.imagePath}`}
                        width={25}
                        height={25}
                        layout={'fixed'}
                        className=" bg-clip-text"
                        alt={link.text}
                      />
                    </div>
                    {link.text}
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </footer>
    </WrapperLarge>
  )
}
