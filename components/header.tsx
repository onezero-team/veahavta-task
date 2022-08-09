import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import LogoForPage from '../assets/logo.png'
import Image from 'next/image'
export default function Header({ data }: CommonType) {
  console.log('data', data)
  const { dir } = useLocale()
  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 pt-4 px-4">
        <div className="grid grid-cols-auto-1fr gap-x-6 mx-auto max-w-screen-lg bg-light rounded-lg">
          <Logo />
          <ul className="flex flex-row gap-x-2 justify-between ml-3">
            <div className="flex flex-row gap-x-10 justify-between ml-3">
              {data.appLinks.map((page, index) => (
                <li key={index} className="flex items-center">
                  <Link href={page.relativeLink}>
                    <a className="text-primary">{page.text}</a>
                  </Link>
                </li>
              ))}
            </div>
            <div className="flex flex-row gap-x-2 justify-between ml-3">
              <li className="flex items-center">
                <ChangeLangButton className="" lang="en">
                  {data.languageNames[0].en}
                </ChangeLangButton>
              </li>
              <li className="flex items-center ">
                <ChangeLangButton className="" lang="he">
                  {data.languageNames[0].he}
                </ChangeLangButton>
              </li>
            </div>
          </ul>
        </div>
      </header>
    </>
  )
}

const Logo = () => {
  return (
    <Link href="/">
      <a className="">
        <Image
          className="rounded-lg"
          src={LogoForPage}
          width={142}
          height={62}
          alt="logo"
        />
      </a>
    </Link>
  )
}
