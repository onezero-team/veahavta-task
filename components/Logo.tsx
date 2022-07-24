import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/">
      <a className="mt-px mr-px">
        <Image
          src="/logo.png"
          alt="Landscape picture"
          width={142}
          height={62}
        />
      </a>
    </Link>
  )
}
