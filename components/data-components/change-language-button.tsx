/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Image from 'next/image'
import Hebrew from '../../assets/ISR_2x.png'
import English from '../../assets/GBR_2x.png'
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
        <Image
          alt={lang === 'en' ? 'en' : 'he'}
          src={lang === 'en' ? English : Hebrew}
          width={52}
          height={32}
        />
      </button>
    </div>
  )
}
