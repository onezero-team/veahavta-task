import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ILink {
  text: string
  linkType: string
  imagePath: string
  linkValue: string
}

interface Iprops {
  contactUsLinks: {
    text: string
    linkType: string
    imagePath: string
    linkValue: string
  }[]
  contactUsText: string
  contactUsTitle: string
  contactUsHeading: string
}

const Links: any = ({ contactUsLinks }: Iprops) => {
  return contactUsLinks.map((link: ILink) => {
    return (
      <div key={link.text} className="flex items-center gap-1">
        <div className=" p-2 flex justify-center items-center bg-primary rounded-full">
          <Image
            src={link.imagePath}
            width={20}
            alt={link.text}
            height={20}
            key={link.text}
          />
        </div>
        {link.linkType === 'email' && (
          <Link href={`mailto:${link.text}`}>
            <a className="w-40"> {link.text}</a>
          </Link>
        )}
        {link.linkType === 'tel' && (
          <Link href={`tel:${link.linkValue}`}>
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
      className="flex flex-col  h-52 justify-around items-start gap-6
    mobile:gap-10 mobile:w-10/12  mobile:p-4  mobile:items-center mobile:h-auto
    xl:w-1/4 md:w-fit 
    "
    >
      <span className="bg-light w-24 p-2 text-center text-darkPurple font-bold rounded-xl">
        {contactUsHeading ? contactUsHeading : 'Contact Us'}
      </span>
      <h2 className="font-bold text-3xl text-center mobile:text-2xl mobile:w-full  ">
        {contactUsTitle ? contactUsTitle : 'We Are Here For You'}
      </h2>
      <p className="w-96 text-lg mobile:w-full mobile:text-xl ">
        {contactUsText
          ? contactUsText
          : 'The clinic is open Tuesday and Thursday 16:00-19:00 and Saturday 10:00-14:00'}
      </p>

      <div
        className="gap-3 flex flex-wrap  w-100  mobile:flex-col
       mobile:h-auto mobile:w-full items-center mobile:items-start "
      >
        <Links contactUsLinks={contactUsLinks} />
      </div>
    </article>
  )
}
