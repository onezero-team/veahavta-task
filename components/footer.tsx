import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import Logo from '../assets/footerLogo.png'
import Image from 'next/image'
export default function Footer({ data }: CommonType) {
  return (
    <WrapperLarge>
      <footer className="bg-light gap-6 grid md:grid-cols-2 lg:grid-cols-4 h-96">
        <div className="flex justify-center items-center w-full">
          <Image src={Logo} alt="logo" width={348} height={152} />
        </div>
        <div className="links flex flex-col justify-center items-center">
          <button className="link font-bold w-32 h-12 text-[16px] rounded-3xl mb-4 border-2 border-[#4e47f9]]">
            {data.footerScheduleButton}
          </button>
          <button className="link font-bold w-32 h-12 text-[16px] rounded-3xl mb-4 border-2 border-[#4e47f9]]">
            {data.footerSupportUsButton}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="menu_title font-bold text-[22px]">
            {data.footerMenuTitle}
          </span>
          {data.appLinks.map((item, index) => (
            <a key={index} className="link">
              {item.text}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="menu_title font-bold text-[22px]">
            {data.footerContactUsTitle}
          </span>
          {data.contactUsLinks.map((item, index) => (
            <a key={index} className="link">
              {item.text}
            </a>
          ))}
        </div>
      </footer>
      <style jsx>{`
        button.link {
          color: #4e47f9;
        }
        @media screen and (max-width: 768px) {
          footer {
            margin-top: 700px;
            height: 70vh;
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>{' '}
    </WrapperLarge>
  )
}
