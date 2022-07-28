import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import MenuHerfList from '../data-components/menu-href-list'
import OneZeroSkipToMainContent from '../onezero-skip-to-main-content'
import Logo from '../data-components/Logo'
import LanguagesButtonList from '../data-components/languages-button-list'
import { WrapperLarge } from '../wrapper'
import { BurgerMenuButton } from '../data-components/burger-button'
import {useState} from 'react'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()
  const [openMenu,SetOpenMenu] = useState('h-closeMenu')

  const toggleBurgerHandler=()=>{
    SetOpenMenu((openMenu==='')?'h-closeMenu':'')
  }

  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header pt-12 z-10 sm:pt-5 px-5">
        <WrapperLarge className={` ${openMenu} NavBar grid-cols-1fr-auto h-auto transition-all overflow-hidden lg:grid-cols-auto-auto-1fr 2xl:mx-60 bg-light rounded-lg whitespace-nowrap flex-nowrap`}>
          <Logo
            height={62}
            width={142}
            className="my-2 mr-3 flex flex-shrink-0 "/>
            <BurgerMenuButton alt={data.footerMenuTitle} className={' ml-3 sm:hidden justify-self-end'} onClick={toggleBurgerHandler}  />
          <ul className="  flex flex-col sm:flex-row flex-shrink-0 sm:items-center text-2xl whitespace-nowrap flex-nowrap mr-6">
            <MenuHerfList
              appLinks={data.appLinks}
              className="NavLink ml-8 mr-7 flex-nowrap " />
          </ul>
          <ul className={` sm:flex align-middle ${dir === 'ltr' ? 'ml-auto mr-5' : 'mr-auto ml-2'}`}>
            <LanguagesButtonList languageNames={data.languageNames[0]} />
          </ul>
        </WrapperLarge>
      </header>

      <style jsx>
        {`
          li.NavLink {
            font-size: 28px;
          }          

        `}
      </style>

    </>

  )
}
