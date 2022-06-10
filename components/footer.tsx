import { Common, CommonType, Homepage } from '@/lib/interface'
import Image from 'next/image'
import Link from 'next/link'
import { WrapperLarge } from './wrapper'

type iFooter = {
  data: Common
}

type Ilink = {
  text: string
  linkType: string
  imagePath: string
  linkValue: string
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
            <a className="text-xl">{link.text}</a>
          </Link>
        )
      }
    })
  }

  const customHref = (link: Ilink) => {
    if (link.linkType === 'tel') {
      return `tel:${link.linkValue}`
    }
    if (link.linkType === 'email') {
      return `mailto:${link.text}`
    }
    if (link.linkType === 'address') {
      return `http://maps.google.com/maps?q=${link.text}`
    }
  }

  return (
    <WrapperLarge>
      <footer
        className="bg-light  flex items-center justify-evenly
         xl:flex-row flex-col
           h-110 overflow-hidden relative
          sm:flex-col sm:p-10 xl:h-80 xl:p-0 sm:h-125  
          "
      >
        <div className="w-80 h-1/5 sm:h-1/3  ">
          <Image
            width={350}
            height={152}
            src={'/footer/footer-logo.png'}
            layout="responsive"
            alt="logo"
          />
        </div>
        <div
          className="flex flex-col h-2/3  
                      w-full sm:w-fit   
                         justify-center
                      gap-6    items-center "
        >
          <button
            className="border-2 border-darkPurple  
            font-bold text-darkPurple p-6 pt-2 pb-2  rounded-full
            w-40 min-w-fit  sm:w-full"
          >
            {footerScheduleButton
              ? footerScheduleButton
              : 'Schedule an appointment'}
          </button>
          <button
            className="border-2 border-darkPurple font-bold text-darkPurple p-4 pt-2 pb-2  rounded-full
            w-36 
          "
          >
            {footerSupportUsButton ? footerSupportUsButton : 'Support us'}
          </button>
        </div>
        <div className=" flex-col h-44 hidden xl:flex gap-2 md:flex-col ">
          <span className="font-bold text-xl">
            {footerMenuTitle.length > 0 ? footerMenuTitle : 'Menu'}
          </span>

          <MenuLinks />
        </div>
        <div
          className="flex flex-col h-44  
        gap-2 sm:gap-5  lg:gap-2 "
        >
          <span className="font-bold text-2xl  lg:text-xl ">
            {footerContactUsTitle}
          </span>
          <div className=" flex flex-col gap-3 ">
            {contactUsLinks.map((link, i) => {
              const myhref = customHref(link)
              return (
                <Link
                  key={link.text}
                  href={
                    link.linkType === 'address'
                      ? `http://maps.google.com/maps?q=${link.text}`
                      : { pathname: myhref }
                  }
                >
                  <a
                    className="flex text-xl"
                    target={link.linkType === 'address' ? '_blank' : '_self'}
                  >
                    <div className="w-7 h-7">
                      <Image
                        src={`/footer/${link.imagePath}`}
                        width={25}
                        height={25}
                        layout={'fixed'}
                        className={`bg-clip-text`}
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
