import { HomePageType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { Button } from '../data-components/button'
import { ContactUsLink } from '../data-components/contact-us-link'
import { ContactForm } from '../data-components/contact-form'

export default function ContactUs({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <section className="contact-us h-fit bg-contact-bg relative overflow-x-clip">
        <div className="right-img absolute w-[316px] h-[316px] right-[-132px] top-[33px] bg-no-repeat opacity-30 hidden sm:inline-block"></div>
        <div className="left-img absolute w-[297px] h-[297px] left-[-15px] bottom-[-70px] bg-no-repeat opacity-30 hidden sm:inline-block"></div>

        <div className="grid grid-cols-1-auto sm:grid-cols-2 gap-x-2 w-fit m-auto">
          <div className="contact-info w-fit m-auto pt-12sm:pt-28">
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

            <div className="contact-options grid sm:grid-cols-2 sm:grid-rows-2 gap-x-8 gap-y-4 w-fit sm:mb-14">
              {data.common.contactUsLinks.map((link, idx) => (
                <ContactUsLink link={link} key={`contact-us-link-${idx}`} />
              ))}
            </div>
          </div>

          <div className="contact-form-container mt-8 mb-10 sm:mb-0 sm:mt-[-130px] z-10 flex items-center justify-center">
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
