import { useLocale } from '@/lib/hooks'
import { AppLink, Common, CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function Navigation({ data }: CommonType) {
  const { dir } = useLocale()
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

  return (
    <>
      <DesktopNavbar className="hidden md:grid " data={data} />
      <MobileHamburgerMenu
        className="md:hidden"
        data={data}
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
      />
    </>
  )
}

const DesktopNavbar = ({
  data,
  className,
}: {
  data: Common
  className?: string
}) => {
  return (
    <nav className={`w-full items-center grid grid-cols-3 ${className}`}>
      <ul className="flex justify-around col-span-2">
        <MenuItems appLinks={data.appLinks} />
      </ul>
      <ul className="flex justify-around items-center ">
        <Flags languageNames={data.languageNames[0]} />
      </ul>
    </nav>
  )
}

const MobileHamburgerMenu = ({
  data,
  className,
  setIsHamburgerMenuOpen,
  isHamburgerMenuOpen,
}: {
  data: Common
  className?: string
  isHamburgerMenuOpen: boolean
  setIsHamburgerMenuOpen: Function
}) => {
  return (
    <>
      <button
        className={`${className} z-20 justify-self-end`}
        onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
      >
        {isHamburgerMenuOpen ? (
          <AiFillCloseCircle className="mx-8" size={25} />
        ) : (
          <TiThMenu className="mx-8" size={25} />
        )}
      </button>
      <nav
        className={`${
          isHamburgerMenuOpen ? 'flex' : 'hidden'
        } w-full h-full flex-col absolute top-0 right-0 left-0 p-5 bg-light`}
      >
        <ul className="justify-around absolute top-20 ">
          <Flags languageNames={data.languageNames[0]} />
        </ul>
        <ul className=" items-center absolute top-20 rtl:right-40 ltr:left-40">
          <MenuItems appLinks={data.appLinks} className="mb-5 text-3xl" />
        </ul>
      </nav>
    </>
  )
}

const MenuItems = ({
  appLinks,
  className,
}: {
  appLinks: Array<AppLink>
  className?: string
}) => {
  return (
    <>
      {appLinks.map(({ text, relativeLink }) => (
        <Link key={text} href={relativeLink} passHref>
          <h1 className={`cursor-pointer text-xl ${className}`}>{text}</h1>
        </Link>
      ))}
    </>
  )
}

const Flags = ({
  languageNames,
}: {
  languageNames: { [key: string]: any } | undefined
}) => {
  return (
    <>
      {languageNames
        ? Object.keys(languageNames).map((key: string) => (
            <li key={key} className="mx-1">
              <ChangeLangButton lang={key}>
                {languageNames[key]}
              </ChangeLangButton>
            </li>
          ))
        : undefined}
    </>
  )
}
