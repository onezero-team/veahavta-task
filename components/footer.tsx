import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import Logo from '../assets/footerLogo.png'
import Image from 'next/image'
export default function Footer({ data }: CommonType) {
  console.log('data', data)
  return (
    <WrapperLarge>
      <footer className="bg-light gap-6 grid md:grid-cols-2 lg:grid-cols-4 h-96">
        <div className="logo_container">
          <Image src={Logo} alt="logo" width={348} height={152} />
        </div>
        <div className="links">
          <button className="link">{data.footerScheduleButton}</button>
          <button className="link">{data.footerSupportUsButton}</button>
        </div>
        <div className="menu">
          <span className="menu_title">{data.footerMenuTitle}</span>
          {data.appLinks.map((item, index) => (
            <a key={index} className="link">
              {item.text}
            </a>
          ))}
        </div>
        <div className="menu">
          <span className="menu_title">{data.footerContactUsTitle}</span>
          {data.contactUsLinks.map((item, index) => (
            <a key={index} className="link">
              {item.text}
            </a>
          ))}
        </div>
      </footer>
      <style jsx>{`
        div.logo_container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        div.links {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        button.link {
          border: 2px solid #4e47f9;
          border-radius: 34px;
          width: 128px;
          height: 48px;
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 21px;
          /* identical to box height */
          text-align: center;
          color: #4e47f9;
          margin-bottom: 16px;
        }
        div.menu {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        span.menu_title {
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 700;
          font-size: 22px;
          line-height: 29px;
          /* identical to box height */

          text-align: right;

          color: #000000;
        }
      `}</style>{' '}
    </WrapperLarge>
  )
}
