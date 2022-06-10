import { IcontactUsLinks } from '@/lib/interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ILink {
  text: string
  linkType: string
  imagePath: string
  linkValue: string
}

const Links: any = ({ contactUsLinks }: IcontactUsLinks) => {
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
}: IcontactUsLinks) {
  return (
    <article
      className="flex flex-col  h-52 justify-around items-start gap-6
     mobile:w-10/12  p-4   
    xl:w-1/4 md:w-fit 
    "
    >
      <span className="bg-light w-24 p-2 text-center text-darkPurple font-bold rounded-xl">
        {contactUsHeading ? contactUsHeading : 'Contact Us'}
      </span>
      <h2 className="font-bold text-3xl text-center">
        {contactUsTitle ? contactUsTitle : 'We Are Here For You'}
      </h2>
      <p className=" md:text-lg sm:w-96 w-full text-xl ">
        {contactUsText
          ? contactUsText
          : 'The clinic is open Tuesday and Thursday 16:00-19:00 and Saturday 10:00-14:00'}
      </p>

      <div
        className="gap-3 flex flex-wrap lg:flex-row flex-col
       h-auto lg:w-100 items-center  "
      >
        <Links contactUsLinks={contactUsLinks} />
      </div>
    </article>
  )
}
