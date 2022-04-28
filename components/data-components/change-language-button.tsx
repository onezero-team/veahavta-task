/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Button } from './button'

const flagsMap: { [key: string]: string } = {
  ar: '/assets/flags/SAU_2x.svg',
  am: '/assets/flags/ETH_2x.svg',
  en: '/assets/flags/GBR_2x.svg',
  he: '/assets/flags/ISR_2x.svg',
  ti: '/assets/flags/ERI_2x.svg',
}

export const ChangeLangButton = ({
  className,
  children,
  lang,
  onClick,
}: {
  className?: string
  children?: React.ReactNode
  lang: string
  onClick?: Function
}) => {
  const router = useRouter()
  const changeLocale = (lang: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: lang })
    if (onClick) onClick()
  }
  return (
    <div>
      <Button type="button" onClick={() => changeLocale(lang)}>
        <Image src={flagsMap[lang]} height={32} width={52} alt={lang} />
      </Button>
    </div>
  )
}
