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
        <div className="flex justify-between  relative  items-center pt-1 rounded-lg z-1  bg-light main-header sm:max-w-full ">
          <div>
            <Image src={logo} alt="" />
          </div>
          <button
            type="button"
            className="ml-5  md:hidden lg:hidden"
            onClick={() => setNavBar(!navBar)}
          >
            <Image src={burgerIcon} alt="" />
          </button>
          {navBar && (
            <nav className="flex flex-col self-center  text-xl absolute text-center p-5  top-16 bg-light min-w-full rounded-b-2xl">
              <HeaderLinks headerData={data.appLinks} />
              <ul className="flex flex-row  self-center md:gap-x-24  text-xl   mt-5">
                <div className="flex flex-row gap-x-2  ">
                  <LanguagePictures data={data} />
                </div>
              </ul>
            </nav>
          )}
          <nav className="flex flex-row self-center lg:gap-x-36 md:gap-x-5  text-3xl md:text-xl sm:hidden ">
            <HeaderLinks headerData={data.appLinks} />
          </nav>
          <ul className="sm:hidden">
            <div className="flex flex-row gap-x-2 md:grid md:grid-cols-2-auto">
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
