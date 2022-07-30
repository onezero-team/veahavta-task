import { Common } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { CircleIcon } from './circle-icon'
import { BaseTextarea } from './content-text'
import { ReducedContactLinks } from '../../lib/interface'
import LinkRow from './link-row'



export default function ContactLinks({
  contactLinks,
  className = '',
}: {
  className?: string
  contactLinks: Common["contactUsLinks"]
}) {
  const linkList = contactLinks?.map((link, idx) => (
    <a
      href={`${link.linkType !== 'email' ? link.linkType : 'mailto'}: ${link.linkType === 'tel' ? link.linkValue : link.text
        } `}
      key={idx}
    >
      <WrapperLarge className=" grid-cols-auto-1fr items-center">
        <CircleIcon
          src={link.imagePath}
          alt={link.linkType}
          className={className}
        />
        <WrapperLarge className=" mr-4">
          <BaseTextarea>{link.text}</BaseTextarea>
        </WrapperLarge>
      </WrapperLarge>
    </a>
  ))

  return <>{linkList}</>
}



export function ContactLinksTypes({
  contactLinks,
  className = '',
}: {
  className?: string
  contactLinks: Common["contactUsLinks"]

}) {
  const reduced: ReducedContactLinks = contactLinks.reduce((allLinks: ReducedContactLinks, link) => {
    Object.assign(allLinks, { [link.linkType]: [...allLinks[link.linkType], link] })
    return allLinks
  }, { tel: [], address: [], email: [] })


  return (
    <>
      <WrapperLarge className={` grid-cols-auto-1fr items-center ${className}`}>

        <LinkRow reduce={reduced} type='tel' />
        <LinkRow reduce={reduced} type='email' />
        <LinkRow reduce={reduced} type='address' />

      </WrapperLarge>
    </>
  )
}
