/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Image from 'next/image'

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

  const imgLang = (
    <Image
      src={`/lang/${lang}.png`}
      alt=""
      width={'100%'}
      height={'100%'}
      layout="fill"
    />
  )

  return (
    <div>
      <button className="w-12 h-8 relative" onClick={() => changeLocale(lang)}>
        {imgLang}
      </button>
    </div>
  )
}
