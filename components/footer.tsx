import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import Image from 'next/image'
import { Button } from './data-components/button'
import Link from 'next/link'
import { ContactUsItem } from './data-components/ContactUsItem'

export default function Footer({ data }: CommonType) {
  const menuLinks = data.appLinks.filter((link) => link.relativeLink)
  return (
    <WrapperLarge>
      <footer className="bg-light mt-28 mx-auto max-w-screen-xl gap-6 grid md:grid-cols-2 xl:grid-cols-4 ">
        <div className="relative">
          <div className="md:absolute top-[-40px] ">
            <Image
              src="/images/veahavta-icon.svg"
              height={'152px'}
              width={'348px'}
              alt="logo"
            />
          </div>
        </div>
        <div className="flex flex-col  justify-self-center">
          <Button
            className="mb-5 w-[135px] rounded-full border-2 p-2 text-header-blue font-bold  px-5 self-center md:self-start"
            text={data.footerScheduleButton}
          />
          <Button
            className="mb-5 w-[135px] rounded-full border-2 p-2 text-header-blue font-bold  px-5 self-center md:self-start"
            text={data.footerSupportUsButton}
          />
        </div>
        <div className="flex flex-col  justify-self-center">
          <h2 className="text-xl font-bold">{data.footerMenuTitle}</h2>
          <ul>
            {menuLinks.map((menuLink) => (
              <li
                key={menuLink.text}
                className="cursor-pointer text-l hover:bg-azure"
              >
                <Link href={menuLink.relativeLink} passHref>
                  {menuLink.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-self-center">
          {data.contactUsLinks.map((contactUsLink) => (
            <ContactUsItem key={contactUsLink.text} {...contactUsLink} />
          ))}
        </div>
      </footer>
    </WrapperLarge>
  )
}
