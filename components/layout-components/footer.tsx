import { CommonType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import Logo from '../data-components/Logo'
import { WhiteButton } from '../data-components/text-button'
import { FieldsetHeading } from '../data-components/header-text'
import MenuHrefList from '../data-components/menu-href-list'
import { ContactLinksTypes } from '../contact-components/contact-links'

export default function Footer({ data }: CommonType) {
  return (
    <>
      <WrapperLarge>
        <footer className=" sm:h-fit sm:mb-29 justify-items-center items-center bg-light mt-12 md:mt-16 mx-auto grid md:gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          <Logo className="mb-4 w-54 h-auto  md:w-full" />
          <WrapperLarge className=" grid-rows-auto-1fr justify-center items-start gap-3">
            <WhiteButton text={data.footerScheduleButton} />
            <WhiteButton text={data.footerSupportUsButton} />
          </WrapperLarge>
          <WrapperLarge className="hidden md:grid justify-center items-start ">
            <ul>
              <FieldsetHeading className="font-bold">
                {data.footerMenuTitle}
              </FieldsetHeading>
              <MenuHrefList appLinks={data.appLinks} className="" />
            </ul>
          </WrapperLarge>
          <WrapperLarge className=" mt-11.5 justify-center items-start md:mt-0">
            <ul>
              <FieldsetHeading className=" font-bold">
                {data.footerContactUsTitle}
              </FieldsetHeading>
              <ContactLinksTypes contactLinks={data.contactUsLinks} />
            </ul>
          </WrapperLarge>
        </footer>
      </WrapperLarge>
    </>
  )
}
