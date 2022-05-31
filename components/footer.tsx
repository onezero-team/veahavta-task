import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import Image from 'next/image'
import logo from '/public/logo.png'
import Menu from './menu'

export default function Footer({ data }: CommonType) {
  const classBtn =
    'font-bold text-base text-center mx-auto mt-3 w-32 h-12 border-header-blue border-2 rounded-3xl flex justify-center items-center text-header-blue my-auto'

  const contact = (
    <div className="flex items-center flex-wrap">
      <div
        className="flex items-center mt-4 cursor-pointer"
        onClick={() => {
          window.open(
            `tel:${data.contactUsLinks[0].linkValue.replace(/[".0"-.]/g, '')}`,
          )
        }}
      >
        <div className="h-5 w-5 relative">
          <Image
            src={data.contactUsLinks[0].imagePath.replace(
              '/icons/',
              '/icons/footer-',
            )}
            alt=""
            width={'100'}
            height={'100'}
            layout={'fill'}
          />
        </div>
        <div className="text-base font-normal mx-3">
          {data.contactUsLinks[0].text}
          <div>{data.contactUsLinks[1].text}</div>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <div className="h-5 w-4 relative">
          <Image
            src={data.contactUsLinks[2].imagePath.replace(
              '/icons/',
              '/icons/footer-',
            )}
            alt=""
            width={'100'}
            height={'100'}
            layout={'fill'}
          />
        </div>
        <div className="text-base font-normal mx-4">
          {data.contactUsLinks[2].text}
        </div>
      </div>
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.contactUsLinks[3].text}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex items-center mt-4">
          <div className="h-4 w-5 relative">
            <Image
              src={data.contactUsLinks[3].imagePath.replace(
                '/icons/',
                '/icons/footer-',
              )}
              alt=""
              width={'100'}
              height={'100'}
              layout={'fill'}
            />
          </div>
          <div className="text-base font-normal mx-3">
            {data.contactUsLinks[3].text}
          </div>
        </div>
      </a>
    </div>
  )

  return (
    <WrapperLarge>
      <footer className="bg-light w-11/12 sm:w-9/12 mx-auto gap-6 grid sm:grid-cols-4 sm:h-96 pb-24">
        <div className="w-3/5 sm:w-80 h-24 sm:h-40 relative mt-12 sm:mt-16 mx-auto sm:mx-0">
          <Image
            src={logo}
            alt=""
            width={'100%'}
            height={'100%'}
            layout="fill"
          />
        </div>

        <div className="mt-2 sm:mt-24">
          <div className={classBtn}>{data.footerScheduleButton}</div>
          <div className={classBtn}>{data.footerSupportUsButton}</div>
        </div>

        <div className="hidden sm:flex mt-24 text-2xl font-bold  flex-col mx-14">
          {data.footerMenuTitle}
          <div className="text-base font-normal contents leading-9">
            {' '}
            <Menu data={data} replace={data.appLinks[0].text} />
          </div>
        </div>
        <div className="mt-11 sm:mt-24 w-4/5 sm:w-full mx-auto text-2xl font-bold flex flex-col">
          {data.footerContactUsTitle}
          {contact}
        </div>
      </footer>
    </WrapperLarge>
  )
}
