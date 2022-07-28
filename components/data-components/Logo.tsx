/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import Image from 'next/image'

export default function Logo({
  width,
  height,
  className = '',
}: {
  width?: number
  height?: number
  className?: string
}) {
  return (
    <Link href="/">
      <a className={`relative ${className}`}>
        <img
          src="/logo.svg"
          alt="Logo"
          width={width ? width : undefined}
          height={height ? height : undefined}
          // layout={width && height ? undefined : 'fill'}
        />
      </a>
    </Link>
  )
}
