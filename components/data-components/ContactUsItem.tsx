import { ContactUsLink } from '@/lib/interface'
import Image from 'next/image'
import Link from 'next/link'

export function ContactUsItem({
  text,
  imagePath,
  linkType,
  linkValue,
}: ContactUsLink) {
  let link = ''
  switch (linkType) {
    case 'tel':
      link = `tel:${linkValue}`
      break
    case 'email':
      link = `mailto:${linkValue}`
      break
    case 'address':
      link = `https://www.google.com.sa/maps/search/${text}/`
      break
    default:
  }
  return (
    <Link href={link} passHref>
      <a target="_blank">
        <div className="flex mb-5 justify-start items-center relative cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105  duration-200">
          <div className="rounded-full flex items-center justify-center w-[44px] h-[44px] bg-header-blue">
            <Image src={imagePath} width="20px" height="20px" alt={linkType} />
          </div>
          <div className="mx-3 text-ellipsis">{text}</div>
        </div>
      </a>
    </Link>
  )
}
