import { contactUsLinks } from '@/lib/interface'
import React from 'react'

export default function ContactInfo({
  data,
  isFooter = false,
}: {
  data: contactUsLinks
  isFooter?: boolean
}) {
  const [link, setLink] = React.useState('')
  React.useEffect(() => {
    if (data.linkType === 'tel') {
      setLink('tel:' + data.linkType)
    } else if (data.linkType === 'address') {
      setLink(data.linkType)
    } else if (data.linkType === 'email') {
      setLink('mailto:' + data.linkType)
    } else {
      setLink(data.linkType)
    }
  }, [])

  return (
    <div className={`flex ${!isFooter && 'gap-3'}`}>
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={data.imagePath}
          alt={data.linkType}
          className={`${
            !isFooter && 'bg-accent-purple'
          } object-none rounded-full w-11 h-11`}
        ></img>
      </a>
      <div className="flex flex-col justify-center w-2/3 sm:w-6/12">
        <p className={`text-xs ${isFooter && 'leading-tight w-56'}`}>
          {data.text}
        </p>
      </div>
    </div>
  )
}
