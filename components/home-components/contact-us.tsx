import { HomePageType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { ContactHeading, ItemHeader } from '../data-components/header-text'
import { ContextText } from '../data-components/content-text'
import ContactForm from '../form-components/contact-form'
import ContactLinks from '../data-components/contact-links'

export default function ContactUs({ data }: HomePageType) {
  return (
    <>
      <div className="ContactUsBackground mt-64" id="contact-us">
        <div className="circlesBackground" />
        <div className="AboutWrapper mr-80 mt-40 ">
          <ContactHeading className=" text-header-blue font-bold bg-white w-max rounded-full text-center px-6 py-1 mb-6">
            {data.homepage.contactUsHeading}
          </ContactHeading>
          <ItemHeader className=" text-5xl mb-4">
            {data.homepage.contactUsTitle}
          </ItemHeader>
          <ContextText className="whitespace-normal ml-24">
            {data.homepage.contactUsText}
          </ContextText>
          <WrapperLarge className=" grid-cols-1fr-1fr ">
            <ContactLinks
              contactLinks={data.common.contactUsLinks}
              className={'bg-icon-bg'}
            />
          </WrapperLarge>
          <ContactForm data={data.common} />
        </div>
      </div>

      <style jsx>
        {`
          div.ContactUsBackground {
            position: relative;
            width: 100%;
            //width: 1920px;
            height: 680px;
            background: #f4f3fd;
            // z-index:-1;
          }
          div.circlesBackground {
            position: absolute;
            width: 100%;
            //width: 1920px;
            height: 680px;
            opacity: 0.2;
            background: url('/img/contact/Vector-1.svg') 100% 30px no-repeat,
              url('/img/contact/Vector.svg') 0 100% no-repeat;
            // z-index:-1;
          }

          div.AboutWrapper {
            width: 500px;
          }
        `}
      </style>
    </>
  )
}
