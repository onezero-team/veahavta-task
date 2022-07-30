import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import HeaderLinks from './modular-components/HeaderLinks.jsx'
import Image from 'next/image'
import logo from '../public/assets/navbar-logo.svg'
import burgerIcon from '../public/assets/burgerIcon.svg'
import { useState } from 'react'
import LanguagePictures from './modular-components/LanPictures.jsx'

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
            className="ml-5  laptop:hidden tablet:hidden desk:hidden"
            onClick={() => setNavBar(!navBar)}
          >
            <Image src={burgerIcon} alt="" />
          </button>
          {navBar && (
            <nav className="flex flex-col self-center  text-xl absolute text-center p-5  top-16 bg-light min-w-full rounded-b-2xl">
              <HeaderLinks headerData={data.appLinks} />
              <ul className="flex flex-row  self-center laptop:gap-x-24  text-xl   mt-5">
                <div className="flex flex-row gap-x-2  ">
                  <LanguagePictures data={data} />
                </div>
              </ul>
            </nav>
          )}
          <nav className="flex flex-row self-center desk:gap-x-36 notMobileOrDesk:gap-x-5  text-3xl laptop:text-2xl mobile:hidden tablet:text-2xl">
            <HeaderLinks headerData={data.appLinks} />
          </nav>
          <ul className="mobile:hidden">
            <div className="flex flex-row gap-x-2 tablet:grid tablet:grid-cols-2-auto">
              <LanguagePictures data={data} />
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
