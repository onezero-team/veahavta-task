import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import Image from 'next/image'
import Navigation from './Navigation'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()

  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />

      <header className="h-header z-10 lg:pt-4 lg:px-4">
        <div className="flex justify-between mx-auto max-w-screen-lg bg-light px-2 rounded-lg">
          <Image
            src="/images/veahavta-icon.svg"
            height={'62px'}
            width={'142px'}
            alt="logo"
          />
          <Navigation data={data} />
        </div>
      </header>
    </>
  )
}
