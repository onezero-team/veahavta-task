import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import Image from 'next/image'
import logo from '/public/logo.png'
import Menu from '@/components/menu'
import Drawer from '@/components/drawer'
import { useState } from 'react'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const btnChangeLang = Object.keys(data.languageNames[0]).map(
    (item, index) => <ChangeLangButton key={index} lang={item} setIsMenuOpen={setIsMenuOpen} />,
  )


  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 w-[84%] mt-12 absolute left-[8%] sm:left-[12.5%] sm:w-[75%] sm:mt-4 ">

        <div className="w-full grid justify-between grid-cols-auto-1fr gap-x-6 px-3 bg-light 
        rounded-lg h-16 items-center">

          <div className="flex flex-row gap-x-8 items-center text-2xl">
            <Logo />
            <div className="hidden sm:contents">
              <Menu data={data} setIsMenuOpen={setIsMenuOpen} /></div>
          </div>

          <div className="hidden sm:flex flex-row gap-x-4 justify-end">
            {btnChangeLang}
          </div>
          <div className="w-full flex justify-end sm:hidden">
            <div className="w-11 h-11 bg-[#E6E4FD] rounded-full flex items-center justify-center"
              onClick={() => setIsMenuOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#000000" }}>
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path></svg>            </div>
          </div>
          {isMenuOpen && <Drawer data={data} setIsMenuOpen={setIsMenuOpen} btnChangeLang={btnChangeLang} />}        </div>
      </header>
    </>
  )
}

const Logo = () => {
  return (
    <div className="w-32 h-12 relative">
      <Link href="/">
        <a>
          <Image
            src={logo}
            alt=""
            width={'100%'}
            height={'100%'}
            layout="fill"
          />
        </a>
      </Link>
    </div>
  )
}
