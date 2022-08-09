import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import LogoForPage from '../assets/logo.png'
import Image from 'next/image'
export default function Header({ data }: CommonType) {
  const { dir } = useLocale()
  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 pt-4 px-4">
        <div
          id="menu"
          className="grid grid-cols-auto-1fr gap-x-6 mx-auto max-w-screen-lg bg-light rounded-lg"
        >
          <Logo />
          <ul className="flex flex-row gap-x-2 justify-between ml-3">
            <div className="links flex flex-row gap-x-10 justify-between ml-3">
              {data.appLinks.map((page, index) => (
                <li key={index} className="flex items-center">
                  <a href={page.relativeLink} className="text-primary">
                    {page.text}
                  </a>
                </li>
              ))}
            </div>
            <div className="links flex flex-row gap-x-2 justify-between ml-3">
              <li className="flex items-center">
                <ChangeLangButton className="" lang="en">
                  {data.languageNames[0].en}
                </ChangeLangButton>
              </li>
              <li className="flex items-center ">
                <ChangeLangButton className="" lang="he">
                  {data.languageNames[0].he}
                </ChangeLangButton>
              </li>
            </div>
            <div className="menu-button hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </ul>
        </div>
      </header>
      <style jsx>{`
        @media screen and (max-width: 768px) {
          header {
            width: 100vw;
          }
          #menu {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          ul {
            display: flex;
            justify-content: space-between;
            padding-top: 0;
          }
          .links {
            display: none;
          }
          .menu-button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 42px;
            height: 42px;
            background: #e6e4fd;
            border-radius: 51px;
            margin-right: 1rem;
          }
        }
      `}</style>
    </>
  )
}

const Logo = () => {
  return (
    <Link href="/">
      <a className="">
        <Image
          className="rounded-lg"
          src={LogoForPage}
          width={142}
          height={62}
          alt="logo"
        />
      </a>
    </Link>
  )
}
