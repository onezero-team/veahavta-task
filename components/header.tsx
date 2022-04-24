import { useLocale } from '@/lib/hooks'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import { CommonType } from '@/lib/interface'
import { LanguagesType } from '@/lib/interface'

import { ChangeLangButton } from './data-components/change-language-button'
import { HamburgerBtn } from '../components/hamburger-btn'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()
  const [languages, setLanguages] = useState<any>([])
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false)

  useEffect(() => {
    const langObj: LanguagesType = data.languageNames[0]
    const langArr = Object.keys(langObj).map((key) => key)
    const ar = langArr[2]
    langArr.splice(2, 1)
    langArr.unshift(ar)
    setLanguages(langArr)
  }, [data])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  if (!data || !languages) return <div></div>
  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="absolute w-full z-10 sm:pt-3 sm:px-3 pt-1 px-1">
        <div
          className={`screen sm:hidden fixed top-0 left-0 right-0 bottom-0 bg-transparent-acreen opacity-0 transition-[opacity] delay-750 cursor-pointer pointer-events-none ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : ''
          }`}
          onClick={toggleMenu}
        ></div>

        <div className="sm:grid sm:grid-cols-auto-1fr sm:gap-x-6 sm:mx-auto sm:max-w-screen-lg sm:py-1 sm:px-3 bg-light rounded-lg h-22 sm:items-center sm:relative">
          <div className="flex justify-between p-1 sm:p-0">
            <HamburgerBtn toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

            <a href="/" className="main-logo rtl:ml-1 ltr:mr-1 sm:m-0">
              <div className="logo bg-cover sm:w-[142px] sm:h-[62px] w-[100px] h-[44px] mt-0.5"></div>
            </a>
          </div>

          <nav
            className={`main-nav flex flex-col gap-10 sm:gap-0 sm:flex-row sm:justify-between fixed sm:relative top-[62px] sm:top-0 rtl:right-0 ltr:right-[100%] h-screen w-48 sm:w-full sm:h-fit sm:relative bg-light p-4 rtl:translate-x-full ltr:translate-x-0 sm:p-0 sm:rtl:translate-x-0 sm:ltr:translate-x-full transition-transform shadow-[-12px_0_20px_4px_rgba(0,0,0,0.2)] sm:shadow-none ${
              isMenuOpen ? 'rtl:translate-x-0 ltr:translate-x-full' : ''
            }`}
          >
            <div
              className={`menu flex flex-col sm:flex-row items-center gap-y-4 sm: gap-x-4 rtl:text-xl ltr:text-lg `}
            >
              {data.appLinks.map((link) => {
                return (
                  <Link href={link.relativeLink} key={link.text}>
                    <span className="cursor-pointer hover:bg-cyan rounded-sm  sm:px-2 px-2  w-full sm:w-fit">
                      {link.text}
                    </span>
                  </Link>
                )
              })}
            </div>

            <ul className="flex flex-col gap-2 sm:gap-1 sm:flex-row items-center sm:rtl:pl-2 sm:ltr:pr-2">
              {languages.map((lang: string) => (
                <li key={lang}>
                  <ChangeLangButton className="" lang={lang}></ChangeLangButton>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <style jsx>{`
        body.menu-open .main-nav {
          transform: translateX(0);
        }

        div.logo {
          background-image: url('assets/img/logo.svg');
        }
      `}</style>
    </>
  )
}
