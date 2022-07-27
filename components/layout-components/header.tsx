import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import MenuHerfList from '../data-components/menu-href-list'
import OneZeroSkipToMainContent from '../onezero-skip-to-main-content'
import Logo from '../data-components/Logo'
import LanguagesButtonList from '../data-components/languages-button-list'
import { WrapperLarge } from '../wrapper'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()
  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 pt-4 px-4">
        <WrapperLarge className=" grid-cols-auto-1fr gap-6 mx-64 bg-light rounded-lg whitespace-nowrap flex-nowrap">
          <Logo
            height={62}
            width={142}
            className="mt-2 mr-3 flex flex-shrink-0 "
          />
          <ul className="flex flex-row flex-shrink-0 items-center text-2xl whitespace-nowrap flex-nowrap">
            <MenuHerfList
              appLinks={data.appLinks}
              className="NavLink ml-8 mr-7 flex-nowrap "
            />
            <div className={dir === 'ltr' ? 'ml-auto' : 'mr-auto'}>
              <LanguagesButtonList languageNames={data.languageNames[0]} />
            </div>
          </ul>
        </WrapperLarge>
      </header>
    </>
  )
}
