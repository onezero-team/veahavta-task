import { HomePageType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { ContactHeading, ItemHeader } from '../data-components/header-text'
import { ContextText } from '../contact-components/content-text'
import ContactForm from '../form-components/contact-form'
import ContactLinks from '../contact-components/contact-links'

export default function ContactUs({ data }: HomePageType) {
  return (
    <>
      <div className="relative">
        <div className=" mx-5 my-14 w-100 z-10 xl:absolute xl:mr-80 xl:bottom-33 ">
          <ContactHeading className="text-xl_1_5 text-header-blue mb-5.1 bg-white w-max rounded-full xl:font-bold xl:text-center xl:px-6 xl:py-1 ">
            {data.homepage.contactUsHeading}
          </ContactHeading>
          <ItemHeader className="text-4xl xl:text-xl_4_5 mb-4">
            {data.homepage.contactUsTitle}
          </ItemHeader>
          <ContextText className=" text-lg whitespace-normal ml-24 xl:text-xl_1_5">
            {data.homepage.contactUsText}
          </ContextText>
          <WrapperLarge className=" mt-6.5 gap-4 md:grid-cols-1fr-1fr ">
            <ContactLinks
              contactLinks={data.common.contactUsLinks}
              className={'bg-icon-bg'}
            />
          </WrapperLarge>
        </div>
        <div className="ContactUsBackground mt-64" id="contact-us">
          <div className="circlesBackground" />
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
        `}
      </style>
    </>
  )
}
