import { CommonType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import Logo from '../data-components/Logo'
import { WhiteButton } from '../data-components/text-button'
import { FieldsetHeading } from '../data-components/header-text'
import MenuHrefList from '../data-components/menu-href-list'
import { ContactLinksTypes } from '../data-components/contact-links'

export default function Footer({ data }: CommonType) {
  return (
    <>
      <WrapperLarge>
        <footer className=" h-full bg-light mt-16 mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          <Logo height={152} width={348} />          
          <WrapperLarge className=" grid-rows-auto-1fr justify-center items-start gap-3">
            <WhiteButton text={data.footerScheduleButton}  />
            <WhiteButton text={data.footerSupportUsButton}  />
          </WrapperLarge>
          <WrapperLarge className=" justify-center items-start ">
            <ul>
              <FieldsetHeading className=" font-bold">
                {data.footerMenuTitle}
              </FieldsetHeading>
              <MenuHrefList appLinks={data.appLinks} className="" />
            </ul>
          </WrapperLarge>
          <WrapperLarge className=" justify-center items-start ">
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
