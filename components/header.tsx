import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import HeaderLinks from './modular-components/HeaderLinks'
import israelLogo from '../public/assets/israel-lan.svg'
import englishLogo from '../public/assets/english-lan.svg'
import tanzaniaLogo from '../public/assets/tanzania-lan.svg'
import arabicLogo from '../public/assets/arabic-lan.svg'
import amharicLogo from '../public/assets/amharic-lan.svg'
import Image from 'next/image'
import logo from '../public/assets/navbar-logo.svg'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()
  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 pt-4 px-4 relative">
        <div className="grid grid-cols-auto-1fr  mx-auto max-w-screen-2xl p-3 bg-light rounded-lg z-1">
          <div className="ml-36">
            <Image src={logo} />
          </div>
          <ul className="flex flex-row font-bold gap-x-24 mt-auto text-2xl mb-auto">
            <HeaderLinks headerData={data.appLinks} />
            <div className="flex flex-row gap-x-2 font-bold items-center mr-auto">
              <li>
                <ChangeLangButton className="" lang="ar" imageProp={arabicLogo}>
                  {data.languageNames[0].ar}
                </ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton className="" lang="he" imageProp={israelLogo}>
                  {data.languageNames[0].he}
                </ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton
                  className=""
                  lang="en"
                  imageProp={englishLogo}
                >
                  {data.languageNames[0].en}
                </ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton
                  className=""
                  lang="am"
                  imageProp={amharicLogo}
                >
                  {data.languageNames[0].am}
                </ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton
                  className=""
                  lang="ti"
                  imageProp={tanzaniaLogo}
                >
                  {data.languageNames[0].ti}
                </ChangeLangButton>
              </li>
            </div>
          </ul>
        </div>
      </header>
    </>
  )
}
