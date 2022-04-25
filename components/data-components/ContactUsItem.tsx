import { ContactUsLink } from '@/lib/interface'
import Image from 'next/image'

export function ContactUsItem({
  text,
  imagePath,
  linkType,
  linkValue,
}: ContactUsLink) {
  return (
    <div className="flex mb-5 justify-start items-center relative ">
      <div className="rounded-full flex items-center justify-center w-[44px] h-[44px] bg-header-blue">
        <Image src={imagePath} width="20px" height="20px" alt={linkType} />
      </div>
      <div className="mx-3 text-ellipsis">{text}</div>
    </div>
  )
}
