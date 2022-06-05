/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useRouter } from 'next/router'

export const ChangeLangButton = ({
  className,
  children,
  lang,
  src,
}: {
  className?: string
  children?: React.ReactNode
  lang: string
  src: string
}) => {
  const router = useRouter()
  const changeLocale = (lang: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: lang })
  }
  return (
    <div>
      <button onClick={() => changeLocale(lang)}>
        <Image src={src} width={40} height={20} alt="1" layout="fixed" />
      </button>
    </div>
  )
}
