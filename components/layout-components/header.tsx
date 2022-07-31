import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import MenuHerfList from '../navigation-components/menu-href-list'
import OneZeroSkipToMainContent from '../onezero-skip-to-main-content'
import Logo from '../data-components/Logo'
import LanguagesButtonList from '../navigation-components/languages-button-list'
import { WrapperLarge } from '../wrapper'
import { BurgerMenuButton } from '../navigation-components/burger-button'
import { useState } from 'react'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()
  const [openMenu, SetOpenMenu] = useState('max-h-closeMenu')

  const toggleBurgerHandler = () => {
    SetOpenMenu(openMenu === '' ? 'max-h-closeMenu' : '')
  }

  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 pt-11.5 px-5 md:pt-5.5 2xl:px-0">
        <WrapperLarge
          className={`${openMenu}  grid-cols-1fr-auto transition-all overflow-hidden lg:grid-cols-auto-auto-1fr 2xl:mx-60 bg-light rounded-lg whitespace-nowrap flex-nowrap`}
        >
          <Logo
            height={62}
            width={142}
            className="mt-1.6 mr-2 mb-1 md:mr-2.9 flex flex-shrink-0 "
          />
          <BurgerMenuButton
            alt={data.footerMenuTitle}
            className={'mx-3 lg:hidden justify-self-end'}
            onClick={toggleBurgerHandler}
          />
          <ul className="flex flex-col lg:flex-row flex-shrink-0 lg:items-center text-2xl whitespace-nowrap flex-nowrap mr-6">
            <MenuHerfList
              appLinks={data.appLinks}
              className=" text-xl_2_5 ml-8 mr-7 flex-nowrap "
            />
          </ul>
          <ul
            className={` lg:flex align-middle ${
              dir === 'ltr' ? 'ml-auto mr-5' : 'mr-auto ml-2'
            }`}
          >
            <LanguagesButtonList languageNames={data.languageNames[0]} />
          </ul>
        </WrapperLarge>
      </header>
    </>
  )
}
