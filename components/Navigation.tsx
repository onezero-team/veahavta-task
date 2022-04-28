import { useLocale } from '@/lib/hooks'
import { AppLink, Common, CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { AiFillCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'

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
    <nav className={`w-full items-center grid grid-cols-4 ${className}`}>
      <ul className="flex justify-around col-span-2">
        <MenuItems appLinks={data.appLinks} />
      </ul>
      <ul className="flex justify-around items-center col-start-4 ">
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
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }

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

      <motion.nav
        animate={isHamburgerMenuOpen ? 'open' : 'closed'}
        transition={{ duration: 0.8 }}
        initial={false}
        variants={variants}
        className={` w-full h-full flex-col fixed top-0 right-0 left-0 p-5 bg-light `}
      >
        <ul className="justify-around absolute top-20 ">
          <Flags
            languageNames={data.languageNames[0]}
            onClick={() => setIsHamburgerMenuOpen(false)}
          />
        </ul>
        <ul className=" items-center absolute top-20 rtl:right-40 ltr:left-40">
          <MenuItems
            appLinks={data.appLinks}
            onClick={() => setIsHamburgerMenuOpen(false)}
            className="mb-5 text-3xl"
          />
        </ul>
      </motion.nav>
    </>
  )
}

const MenuItems = ({
  appLinks,
  className,
  onClick,
}: {
  appLinks: Array<AppLink>
  className?: string
  onClick?: Function
}) => {
  return (
    <>
      {appLinks.map(({ text, relativeLink }) => (
        <li
          key={text}
          className={`cursor-pointer text-xl hover:bg-azure ${className}`}
          onClick={(e) => onClick && onClick()}
        >
          <Link href={relativeLink || '#top-header'} passHref>
            {text}
          </Link>
        </li>
      ))}
    </>
  )
}

const Flags = ({
  languageNames,
  onClick,
}: {
  languageNames: { [key: string]: any } | undefined
  onClick?: Function
}) => {
  return (
    <>
      {languageNames
        ? Object.keys(languageNames).map((key: string) => (
            <li key={key} className="mx-1 ">
              <ChangeLangButton lang={key} onClick={onClick}>
                {languageNames[key]}
              </ChangeLangButton>
            </li>
          ))
        : undefined}
    </>
  )
}
