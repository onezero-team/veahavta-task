import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Image from 'next/image'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import LangsLinks from './data-components/langs-links'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()
  const { appLinks, languageNames } = data
  const langs = Object.keys(languageNames[0])

  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'h-14 bg-gradient-to-r from-purple-500 to-pink-500'}
      />
      <header className=" z-50 justify-center   overflow-hidden  bg-gradient-to-br   ">
        <div
          className="flex mt-8  fixed z-50 right-2/4 pt-4 pb-4 translate-x-2/4  gap-x-2 mx-auto justify-around bg-light rounded-lg 
        sm:w-150 lg:w-160 w-full "
        >
          <Logo />
          <ul className="flex flex-row    self-stretch">
            <div className="lg:flex flex-row gap-x-3  w-4/4  items-center hidden  md:visible  ">
              <LangsLinks appLinks={appLinks} />
            </div>
          </ul>
          <ul
            className="flex flex-row gap-x-2 items-center  mx-r-auto  w-1/3 justify-end
          
          mobile:hidden  md:flex"
          >
            {langs.map((lang, i) => {
              return (
                <li key={lang}>
                  <ChangeLangButton
                    src={`/icons/flags/${i}.png`}
                    lang={lang}
                  ></ChangeLangButton>
                </li>
              )
            })}
          </ul>
          <div className="  pl-10 cursor-pointer  relative block lg:hidden     ">
            <Image src="/header/mobile-menu.svg" alt="menu" layout="fill" />
          </div>
        </div>
      </header>
    </>
  )
}

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src={'/logo.png'} width={75} height={34} alt="1ogo" />
      </a>
    </Link>
  )
}
