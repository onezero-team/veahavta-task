import { Common } from '@/lib/interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Link {
  text: string
  linkType: string
  imagePath: string
  linkValue: string
}

interface Iprops {
  contactUsLinks: Link[]
  contactUsText: string
  contactUsTitle: string
  contactUsHeading: string
}

const Links = ({ contactUsLinks }: any) => {
  return contactUsLinks.map((link: Link) => {
    return (
      <div key={link.text} className="flex items-center gap-1">
        <div className=" p-2 flex justify-center items-center bg-primary rounded-full">
          <Image src={link.imagePath} width={20} height={20} key={link.text} />
        </div>
        {link.linkType === 'email' && (
          <Link href={`mailto:${link.text}`}>
            <a className="w-40"> {link.text}</a>
          </Link>
        )}
        {link.linkType === 'tel' && (
          <Link href={`tel:${link.text}`}>
            <a className="w-40"> {link.text}</a>
          </Link>
        )}
        {link.linkType === 'address' && (
          <Link
            key={link.linkValue}
            href={`http://maps.google.com/maps?q=${link.text}`}
          >
            <a target={'_blank'} className="w-40">
              {' '}
              {link.text}
            </a>
          </Link>
        )}
      </div>
    )
  })
}

export default function ContactUsInfo({
  contactUsLinks,
  contactUsText,
  contactUsTitle,
  contactUsHeading,
}: Iprops) {
  return (
    <article
      className="flex flex-col h-52 justify-around items-start gap-6
   mobile:h-96 mobile:gap-6 mobile:w-1/2 mobile: p-4"
    >
      <span className="bg-light w-20 text-center text-darkPurple font-bold rounded-xl pl-2 pt-1 pb-1">
        {contactUsHeading}
      </span>
      <h2 className="font-bold text-3xl text-center mobile:text-4xl mobile:w-full mobile:text-right">
        {contactUsTitle}
      </h2>
      <p className="w-96 text-lg">{contactUsText}</p>

      <div className="gap-3 flex flex-wrap  w-100 mobile:flex-col mobile:h-80 ">
        <Links contactUsLinks={contactUsLinks} />
      </div>
    </article>
  )
}
