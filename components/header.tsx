import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import HeaderLinks from './modular-components/HeaderLinks.jsx'
import israelLogo from '../public/assets/israel-lan.svg'
import englishLogo from '../public/assets/english-lan.svg'
import tanzaniaLogo from '../public/assets/tanzania-lan.svg'
import arabicLogo from '../public/assets/arabic-lan.svg'
import amharicLogo from '../public/assets/amharic-lan.svg'
import Image from 'next/image'
import logo from '../public/assets/navbar-logo.svg'
import burgerIcon from '../public/assets/burgerIcon.svg'
import { useState } from 'react'

export default function Header({ data }: CommonType) {
  const [navBar, setNavBar] = useState(false)
  const { dir } = useLocale()
  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary  '}
      />
      <header className="h-header z-10 pt-4 px-4  relative">
        <div className="flex justify-between  relative  items-center pt-1 rounded-lg z-1  bg-light main-header mobile:max-w-full ">
          <div>
            <Image src={logo} alt="" />
          </div>
          <button
            type="button"
            className="ml-5 mobile:visible laptop:hidden "
            onClick={() => setNavBar(!navBar)}
          >
            <Image src={burgerIcon} alt="" />
          </button>
          {navBar && (
            <nav className="flex flex-col self-center  laptop:gap-x-10  text-xl absolute text-center p-5  top-16 bg-light min-w-full rounded-b-2xl">
              <HeaderLinks headerData={data.appLinks} />
              <ul className="flex flex-row  self-center laptop:gap-x-24  text-xl  list  mt-5">
                <div className="flex flex-row gap-x-2  ">
                  <li>
                    <ChangeLangButton lang="ar" imageProp={arabicLogo}>
                      {data.languageNames[0].ar}
                    </ChangeLangButton>
                  </li>
                  <li>
                    <ChangeLangButton lang="he" imageProp={israelLogo}>
                      {data.languageNames[0].he}
                    </ChangeLangButton>
                  </li>
                  <li>
                    <ChangeLangButton lang="en" imageProp={englishLogo}>
                      {data.languageNames[0].en}
                    </ChangeLangButton>
                  </li>
                  <li>
                    <ChangeLangButton lang="am" imageProp={amharicLogo}>
                      {data.languageNames[0].am}
                    </ChangeLangButton>
                  </li>
                  <li>
                    <ChangeLangButton lang="ti" imageProp={tanzaniaLogo}>
                      {data.languageNames[0].ti}
                    </ChangeLangButton>
                  </li>
                </div>
              </ul>
            </nav>
          )}
          <nav className="flex  self-center  laptop:gap-x-10  text-3xl laptop:text-2xl mobile:hidden">
            <HeaderLinks headerData={data.appLinks} />
          </nav>
          <ul className="flex flex-row    laptop:gap-x-24  text-xl  list mobile:hidden">
            <div className="flex flex-row gap-x-2  ">
              <li>
                <ChangeLangButton lang="ar" imageProp={arabicLogo}>
                  {data.languageNames[0].ar}
                </ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton lang="he" imageProp={israelLogo}>
                  {data.languageNames[0].he}
                </ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton lang="en" imageProp={englishLogo}>
                  {data.languageNames[0].en}
                </ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton lang="am" imageProp={amharicLogo}>
                  {data.languageNames[0].am}
                </ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton lang="ti" imageProp={tanzaniaLogo}>
                  {data.languageNames[0].ti}
                </ChangeLangButton>
              </li>
            </div>
          </ul>
        </div>
        <style jsx>{`
          .h-header {
            background: linear-gradient(
              109.17deg,
              #f4f3fd 38.49%,
              #d3d1fc 72.36%
            );
          }
        `}</style>
      </header>
    </>
  )
}
