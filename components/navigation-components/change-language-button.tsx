/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'

/**
 *  this function create button to update localisation to given @param lang
 * @param lang Text direction 'rtl' | 'ltr'
 * @param className Optinal , A string variable representing the class or space-separated classes of the current element.
 * @param children Optinal , collection of an element's child elements
 *
 * @returns Render Component
 */
export const ChangeLangButton = ({
  className = '',
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
      <button className={className} onClick={() => changeLocale(lang)}>
        {children}
      </button>
    </div>
  )
}
