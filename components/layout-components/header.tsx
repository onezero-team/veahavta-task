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
      <header className="h-header z-10 pt-4 px-5">
        <WrapperLarge className="xl:mx-60 grid-cols-auto-1fr xl:gap-6 bg-light rounded-lg whitespace-nowrap flex-nowrap">
          <Logo
            height={62}
            width={142}
            className="my-1 mr-3 flex flex-shrink-0 "
          />
          <ul className="flex flex-row flex-shrink-0 items-center text-2xl whitespace-nowrap flex-nowrap">
            <MenuHerfList
              appLinks={data.appLinks}
              className="NavLink ml-8 mr-7 flex-nowrap "
            />
            <div className={dir === 'ltr' ? 'ml-auto mr-5' : 'mr-auto ml-2'}>
              <LanguagesButtonList languageNames={data.languageNames[0]} />
            </div>
          </ul>
          <img />
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
