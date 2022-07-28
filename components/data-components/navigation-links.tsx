import { AppLinkType } from '@/lib/interface'
import React from 'react'
import Link from 'next/link'

interface NavigationLinksProps {
  appLinks: Array<AppLinkType>
  classNameList?: string
  classNameItem?: string
}

export default function NavigationLinks({
  appLinks,
  classNameList = '',
  classNameItem = '',
}: NavigationLinksProps) {
  return (
    <ul className={classNameList}>
      {appLinks.map((key) => {
        return (
          <li key={key.text} className={classNameItem}>
            <Link href={key.relativeLink === '' ? '/' : key.relativeLink}>
              <a>{key.text}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
