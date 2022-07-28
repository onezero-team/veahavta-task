import { WrapperLarge } from '../wrapper'
import { CircleImage } from './circle-icon'
import { BaseTextarea } from './content-text'

export default function ContactLinks({
  contactLinks,
  className = '',
}: {
  className?: string
  contactLinks: Array<{
    text: string
    linkType: string
    imagePath: string
    linkValue: string
  }>
}) {
  const linkList = contactLinks?.map((link, idx) => (
    <WrapperLarge className=" grid-cols-auto-1fr items-center" key={idx}>
      <CircleImage
        src={link.imagePath}
        alt={link.linkType}
        className={className}
      />
      <WrapperLarge className=" mr-4">
        <BaseTextarea>{link.text}</BaseTextarea>
      </WrapperLarge>
    </WrapperLarge>
  ))

  return <>{linkList}</>
}

type Reduce = {
  tel: Array<{
    text: string
    linkType: string
    imagePath: string
    linkValue: string
  }>
  address: Array<{
    text: string
    linkType: string
    imagePath: string
    linkValue: string
  }>
  email: Array<{
    text: string
    linkType: string
    imagePath: string
    linkValue: string
  }>
}

export function ContactLinksTypes({
  contactLinks,
  className = '',
}: {
  className?: string
  contactLinks: Array<{
    text: string
    linkType: string
    imagePath: string
    linkValue: string
  }>
}) {
  const reduced: Reduce = contactLinks.reduce((allLinks, link) => {
    if (link.linkType in allLinks) {
      Object.assign(allLinks, {
        [link.linkType]: [...allLinks[link.linkType], link],
      })
    } else Object.assign(allLinks, { [link.linkType]: [link] })

    return allLinks
  }, {})

  return (
    <>
      <WrapperLarge className=" grid-cols-auto-1fr items-center">
        <CircleImage
          src={'/icons/blue-phone-icon.svg'}
          alt={reduced.tel[0].linkType}
          className={className}
        />
        <WrapperLarge className=" mr-4">
          {reduced.tel.map((link, idx) => (
            <BaseTextarea key={idx}>{link.text}</BaseTextarea>
          ))}
        </WrapperLarge>
        <CircleImage
          src={'/icons/blue-email-icon.svg'}
          alt={reduced.email[0].linkType}
          className={className}
        />
        <WrapperLarge className=" mr-4">
          {reduced.email.map((link, idx) => (
            <BaseTextarea key={idx}>{link.text}</BaseTextarea>
          ))}
        </WrapperLarge>
        <CircleImage
          src={'/icons/blue-address-icon.svg'}
          alt={reduced.address[0].linkType}
          className={className}
        />
        <WrapperLarge className=" mr-4">
          {reduced.address.map((link, idx) => (
            <BaseTextarea key={idx}>{link.text}</BaseTextarea>
          ))}
        </WrapperLarge>
      </WrapperLarge>
    </>
  )
}
