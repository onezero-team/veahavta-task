import { CommonType } from '@/lib/interface'
import { useState } from 'react'
import { useLocale } from '@/lib/hooks'
import { ChangeLangButton } from './data-components/change-language-button'

export default function NavBar({ data }: CommonType) {
  let [open, setOpen] = useState(false)
  const { dir, locale } = useLocale()
  return (
    <>
      <div className="bg-white p-3 lg:pr-10 pr-7 pl-[22px]">
        <button
          onClick={() => setOpen(!open)}
          className={`cursor-pointer flex justify-center items-center rounded-full min-md:hidden w-11 h-11 bg-light-purple ${
            dir === 'ltr' ? 'ml-auto' : 'mr-auto'
          }`}
        >
          <img src="hamburger-menu.svg" className="w-6 h-5"></img>
        </button>
        <div
          className={`flex sm:flex-row items-center justify-between sm:px-8 bg-light sm:rounded-b-3xl absolute min-md:static min-md:z-auto z-[-1] transition-all duration-200 ease ${
            dir === 'ltr' ? 'left-8' : 'right-8'
          } ${open ? 'top-20' : '-top-96'}`}
        >
          <ul
            className={`min-md:flex min-md:items-center min-md:pb-0 pb-1 min-md:w-auto min-md:pl-0 ${
              dir === 'ltr' ? 'sm:pr-4' : 'sm:pl-4'
            } `}
          >
            {data.appLinks.map((link) => (
              <li
                key={link.text}
                className={`ml-4 lg:ml-8 text-md sm:text-sm min-md:my-0 my-7`}
              >
                <a
                  href={`/${locale + link.relativeLink}`}
                  className="duration-500"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <ul
            className={`bg-light min-md:flex min-md:items-center min-md:pb-0 pb-1 min-md:w-auto min-md:pl-0`}
          >
            {Object.keys(data.languageNames[0]).map((language) => (
              <li className="h-8 mr-1 lg:mr-4 mt-1" key={language}>
                <ChangeLangButton lang={language}>{language}</ChangeLangButton>
              </li>
            ))}
          </ul>
          <div className="min-md:hidden absolute top-2 right-0 w-full h-4 bg-gradient-to-b from-grey ..."></div>
        </div>
      </div>
    </>
  )
}
