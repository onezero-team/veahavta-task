import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import Image from 'next/image'
import logo from '/public/logo.png'
import Menu from './menu'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()

  //   const linksHeader = data.appLinks.map((item, index) => (
  //     <Link href={item.relativeLink} key={index}>{item.text}</Link>
  //  ))

  const btnChangeLang = Object.keys(data.languageNames[0]).map(
    (item, index) => <ChangeLangButton key={index} lang={item} />,
  )

  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 pt-4 w-3/4 absolute left-[12.5%]">
        <div className="w-full grid justify-between grid-cols-auto-1fr gap-x-6 px-3 bg-light rounded-lg h-16 items-center">
          <div className="flex flex-row gap-x-8 items-center text-2xl">
            <Logo />
            {/* <Menu data={data} /> */}
          </div>
          <div className="flex flex-row gap-x-4 justify-end">
            {btnChangeLang}
          </div>
        </div>
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
