import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
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

          <ul className="flex flex-row gap-x-2 items-center text-2xl">
          {
            data?.appLinks?.map((page)=>
            <li className=' mr-12'>
            <Link  href={page.relativeLink}>              
              {page.text}              
            </Link>
          </li>
          )}
          
          

            <li>
              <ChangeLangButton className="" lang="ar">
                <img src='SAU_2x.png' alt={data.languageNames[0].ar} />
              </ChangeLangButton>
            </li>
            <li>
              <ChangeLangButton className="" lang="he">
                <img src='ISR_2x.png' alt={data.languageNames[0].he} />
              </ChangeLangButton>
            </li>
            <li>
              <ChangeLangButton className="" lang="en">
                <img src='GBR_2x.png' alt={data.languageNames[0].en} />
              </ChangeLangButton>
            </li>
            <li>
              <ChangeLangButton className="" lang="am">
                <img src='ETH_2x.png' alt={data.languageNames[0].am} />
              </ChangeLangButton>
            </li>
            <li>
              <ChangeLangButton className="" lang="ti">
                <img src='ERI_2x.png' alt={data.languageNames[0].ti} />
              </ChangeLangButton>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}


