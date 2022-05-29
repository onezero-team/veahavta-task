import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import { WrapperLarge } from './wrapper'

export default function Menu({ data, replace }: CommonType) {
  return (
    <>
      {data.appLinks.map((item, index) => (
        <Link key={index} href={item.relativeLink}>
          {item.text.replace(replace, '')}
        </Link>
      ))}
    </>
  )
}
