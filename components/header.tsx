import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import BrandLogo from './brand-logo'
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
        <div className="mx-auto max-w-screen-2xl p-0.5 md:px-3 bg-light rounded-lg">
          <ul className="grid">
            <div className="grid grid-cols-auto-1fr-auto gap-2.5 lg:gap-5 ">
              <div className="grid place-items-center">
                <BrandLogo />
              </div>

              <div className="grid-cols-4-auto-1fr gap-2.5 lg:gap-10 place-items-center hidden md:flex">
                <Links data={data} />
              </div>
              <div className="grid-cols-5 gap-x-2.5 place-items-center hidden md:flex">
                <Languages data={data} />
              </div>
            </div>
          </ul>
        </div>
      </header>
    </>
  )
}

const Links = ({ data }: any) => (
  <>
    {data.appLinks.map((item: any, key: any) => {
      return (
        // <div className="text-2xl" key={key}>
        <p className="hidden md:block text-2xl" key={key}>
          <Link href={item.relativeLink}>{item.text}</Link>
        </p>
        // </div>
      )
    })}
  </>
)

const Languages = ({ data }: any) => (
  <>
    <li>
      <ChangeLangButton className="" lang="ar">
        {data.languageNames[0].ar}
      </ChangeLangButton>
    </li>
    <li>
      <ChangeLangButton className="" lang="he">
        {data.languageNames[0].he}
      </ChangeLangButton>
    </li>
    <li>
      <ChangeLangButton className="" lang="en">
        {data.languageNames[0].en}
      </ChangeLangButton>
    </li>
    <li>
      <ChangeLangButton className="" lang="am">
        {data.languageNames[0].am}
      </ChangeLangButton>
    </li>
    <li>
      <ChangeLangButton className="" lang="ti">
        {data.languageNames[0].ti}
      </ChangeLangButton>
    </li>
  </>
)

// const Logo = () => {
//   return (
//     <Link href="/">
//       <a>Logo</a>
//     </Link>
//   )
// }
