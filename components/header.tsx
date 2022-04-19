import { useLocale } from '@/lib/hooks'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { CommonType } from '@/lib/interface'
import { LanguagesType } from '@/lib/interface'

import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import logo from '../public/assets/img/logo.png'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()
  const [languages, setLanguages] = useState<any>([])

  useEffect(() => {
    const langObj: LanguagesType = data.languageNames[0]
    const langArr = Object.keys(langObj).map((key) => key)
    const ar = langArr[2]
    langArr.splice(2, 1)
    langArr.unshift(ar)
    setLanguages(langArr)
  }, [data])

  if (!data || !languages) return <div></div>
  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="absolute w-full z-10 pt-3 px-3">
        <div className="grid grid-cols-auto-1fr gap-x-6 mx-auto max-w-screen-lg py-1 px-3 bg-light rounded-lg h-22 items-center">
          <a
            href=""
            className="main-logo"
            style={{ width: '142px', height: '62px' }}
          >
            <Image src={logo} alt="logo" className="mt-0.5" />
          </a>

          <nav className="flex flex-row justify-between">
            <div className="menu flex flex-row items-center gap-x-2 rtl:text-xl ltr:text-lg">
              {data.appLinks.map((link) => {
                return (
                  <Link href={link.relativeLink} key={link.text}>
                    <span className="cursor-pointer hover:bg-cyan rounded-sm px-2">
                      {link.text}
                    </span>
                  </Link>
                )
              })}
            </div>

            <ul className="flex flex-row items-center gap-x-1 rtl:pl-2 ltr:pr-2">
              {languages.map((lang: string) => (
                <li key={lang}>
                  <ChangeLangButton className="" lang={lang}></ChangeLangButton>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
