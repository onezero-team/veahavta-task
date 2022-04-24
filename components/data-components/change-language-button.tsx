/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Image from 'next/image'

const flagsMap: { [key: string]: string } = {
  ar: '/assets/flags/SAU_2x.png',
  am: '/assets/flags/ETH_2x.png',
  en: '/assets/flags/GBR_2x.png',
  he: '/assets/flags/ISR_2x.png',
  ti: '/assets/flags/ERI_2x.png',
}

export const ChangeLangButton = ({
  className,
  children,
  lang,
}: {
  className?: string
  children?: React.ReactNode
  lang: string
}) => {
  const router = useRouter()
  const changeLocale = (lang: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: lang })
  }
  return (
    <div>
      <button onClick={() => changeLocale(lang)}>
        <Image src={flagsMap[lang]} height={32} width={52} alt={lang} />
      </button>
    </div>
  )
}
