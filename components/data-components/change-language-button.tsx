/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'

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
    <>
      <div
        className="btn-flag w-[52px] h-[32px] rounded hover:shadow-[0_0_0_2px_rgba(255,255,255,0.8),_0_0_0_4px_rgba(0,121,191,0.4)]"
        onClick={() => changeLocale(lang)}
      ></div>

      <style jsx>{`
        div.btn-flag {
          background-image: url('/assets/img/${lang}.png');
          width: '100%';
          height: '100%';
        }
      `}</style>
    </>
  )
}
