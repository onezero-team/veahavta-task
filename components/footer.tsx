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
            <a>{link.text}</a>
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
      return `http://maps.google.com/maps?q=${link.text.trim()}`
    }
  }

  return (
    <WrapperLarge>
      <footer
        className="bg-light h-100 flex items-center justify-evenly
         xl:flex-row mobile:flex-col md:flex-col md:h-auto
          md:p-10 mobile:h-150 mobile:p-10  mobile:gap-10  overflow-hidden relative
          sm:flex-col sm:h-auto sm:p-10 
          "
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

        mobile:order-2 mobile:w-2/3"
        >
          <button
            className="border-2 border-darkPurple font-bold text-darkPurple p-4 pt-2 pb-2  rounded-full
           mobile:text-lg mobile:p-3"
          >
            {footerScheduleButton
              ? footerScheduleButton
              : 'Schedule an appointment'}
          </button>
          <button
            className="border-2 border-darkPurple font-bold text-darkPurple p-4 pt-2 pb-2  rounded-full
          mobile:text-xl mobile:p-3
          "
          >
            {footerSupportUsButton ? footerSupportUsButton : 'Support us'}
          </button>
        </div>
        <div className="flex flex-col h-44 mobile:hidden md:hidden lg:flex-col  ">
          <span className="font-bold">{footerMenuTitle}</span>

          <MenuLinks />
        </div>

        <div className="flex flex-col gap-1 h-44 mobile:order-3 mobile:gap-5 ">
          <span className="font-bold mobile:text-2xl">
            {footerContactUsTitle}
          </span>
          <div className=" flex flex-col gap-3 ">
            {contactUsLinks.map((link) => {
              const myhref = customHref(link)

              return (
                <Link
                  key={link.text}
                  href={{
                    pathname: myhref,
                  }}
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
