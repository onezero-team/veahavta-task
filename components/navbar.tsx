import { CommonType } from '@/lib/interface'
import { useState } from 'react'
import { ChangeLangButton } from './data-components/change-language-button'

export default function NavBar({ data }: CommonType) {
  let [open, setOpen] = useState(false)
  return (
    <div className="min-md:flex items-center justify-between bg-white p-3 min-md:pr-10 pr-7 pl-[22px]">
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex justify-center items-center rounded-full min-md:hidden w-[42px] h-[42px] bg-lightPurple"
      >
        <img src="hamburger-menu.svg" className="w-6 h-5"></img>
      </button>

      <ul
        className={`bg-light min-md:flex min-md:items-center min-md:pb-0 pb-1 absolute min-md:static min-md:z-auto z-[-1] left-8 min-md:w-auto min-md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? 'top-20 ' : 'top-[-490px]'
        }`}
      >
        {data.appLinks.map((link) => (
          <li key={link.text} className="min-md:ml-8 text-xl min-md:my-0 my-7">
            <a href={`/${link.relativeLink}`} className="duration-500">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul
        className={`bg-light min-md:flex min-md:items-center min-md:pb-0 pb-1 absolute min-md:static min-md:z-auto z-[-1] left-8 min-md:w-auto min-md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? 'top-20 ' : 'top-[-490px]'
        }`}
      >
        {Object.keys(data.languageNames[0]).map((language) => (
          <li className="h-8 mr-4" key={language}>
            <ChangeLangButton lang={language}>{language}</ChangeLangButton>
          </li>
        ))}
      </ul>
    </div>
  )
}
