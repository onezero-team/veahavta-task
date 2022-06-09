import Link from 'next/link'
import React from 'react'

interface ILangsLinks {
  appLinks: {
    text: string
    relativeLink: string
  }[]
}

function LangsLinks({ appLinks }: ILangsLinks) {
  return (
    <>
      {appLinks.map((link) => {
        return (
          <Link key={link.text} href={link.relativeLink}>
            {link.text}
          </Link>
        )
      })}
    </>
  )
}

export default LangsLinks
