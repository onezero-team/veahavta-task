import { CommonType } from '@/lib/interface'
import Link from 'next/link'

export default function Menu({ data, replace, setIsMenuOpen }: CommonType) {
  return (
    <>
      {data.appLinks.map((item, index) => (
        <div key={index} onClick={() => setIsMenuOpen(false)}>
          <Link key={index} href={item.relativeLink}>
            {item.text.replace(replace, '')}
          </Link>
        </div>
      ))}
    </>
  )
}
