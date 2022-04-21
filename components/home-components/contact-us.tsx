import { HomePageType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { Button } from '../data-components/button'
import { ContactUsLink } from '../data-components/contact-us-link'
import { ContactForm } from '../data-components/contact-form'

export default function ContactUs({ data }: HomePageType) {
  return (
    <WrapperLarge id="contact-us">
      <section className="contact-us h-[650px] bg-contact-bg relative">
        <div className="right-img absolute w-[316px] h-[316px] right-[-132px] top-[33px] bg-no-repeat opacity-30"></div>
        <div className="left-img absolute w-[297px] h-[297px] left-[-15px] bottom-[-70px] bg-no-repeat opacity-30"></div>

        <div className="flex flex-row gap-x-24">
          <div className="contact-info rtl:pr-[250px] ltr:pl-[250px] pt-[110px] ">
            <Button
              text={data.homepage.contactUsHeading}
              className={
                'my-9 bg-white hover:bg-icon-bg hover:text-white text-header-blue font-bold text-base px-6 rounded-full '
              }
            ></Button>

            <h1 className="font-bold text-4xl">
              {data.homepage.contactUsTitle}
            </h1>
            <p className="text-lg w-[380px] mt-3 mb-10">
              {data.homepage.contactUsText}
            </p>

            <div className="contact-options grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-4 w-fit">
              {data.common.contactUsLinks.map((link, idx) => (
                <ContactUsLink link={link} key={idx} />
              ))}
            </div>
          </div>

          <div className="contact-form-container mt-[-130px] z-10">
            <ContactForm data={data} />
          </div>
        </div>
      </section>

      <style jsx>{`
        div.right-img {
          background-image: url('assets/img/right-img.png');
        }

        div.left-img {
          background-image: url('assets/img/left-img.png');
        }
      `}</style>
    </WrapperLarge>
  )
}
