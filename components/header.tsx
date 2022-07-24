import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import Image from 'next/image'

import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import Logo from './Logo'

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
        <div className="grid grid-cols-auto-1fr gap-x-6 mx-auto max-w-screen-lg pt-1.5 pr-2.5 pb-1 bg-light rounded-lg">
          <Logo />

          <ul className="flex flex-row items-center text-2xl whitespace-nowrap">
            {data?.appLinks?.map((page, idx) => (
              <li className="ml-8 mr-7 " key={idx}>
                <Link href={page.relativeLink}>{page.text}</Link>
              </li>
            ))}

            <li>
              <ChangeLangButton className="" lang="ar">
                <Image
                  src="/SAU_2x.png"
                  alt={data.languageNames[0].ar}
                  width={52}
                  height={32}
                />
              </ChangeLangButton>
            </li>
            <li>
              <ChangeLangButton className="" lang="he">
                <Image
                  src="/ISR_2x.png"
                  alt={data.languageNames[0].he}
                  width={52}
                  height={32}
                />
              </ChangeLangButton>
            </li>
            <li>
              <ChangeLangButton className="" lang="en">
                <Image
                  src="/GBR_2x.png"
                  alt={data.languageNames[0].en}
                  width={52}
                  height={32}
                />
              </ChangeLangButton>
            </li>
            <li>
              <ChangeLangButton className="" lang="am">
                <Image
                  src="/ETH_2x.png"
                  alt={data.languageNames[0].am}
                  width={52}
                  height={32}
                />
              </ChangeLangButton>
            </li>
            <li>
              <ChangeLangButton className="" lang="ti">
                <Image
                  src="/ERI_2x.png"
                  alt={data.languageNames[0].ti}
                  width={52}
                  height={32}
                />
              </ChangeLangButton>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
