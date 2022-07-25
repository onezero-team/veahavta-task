import { HomePageType } from '@/lib/interface'
import React, { ReactChild, ReactNode } from 'react'
import { WrapperLarge } from '../wrapper'
import { Heading, ItemHeader } from '../data-components/header-text'
import { Textarea } from '../data-components/content-text'
import Image from 'next/image'
import { Button } from '../data-components/button'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge className=' grid-cols-1fr-1fr mt-24 mx-auto gap-5 '>
      <div className='flex justify-end'>
        <Image          
          src={'/img/about/Rectangle 8.png'}
          priority={true}
          height={628}
          width={702}
        />
      </div>
      <AboutBox>
        <Heading className='text-header-blue mb-3 '>{data.homepage.aboutHeading}</Heading>
        <ItemHeader>{data.homepage.aboutTitle}</ItemHeader>
        <Textarea>{data.homepage.aboutUsText}</Textarea>
        <Button
          text={data.homepage.aboutUsButton}
        />
      </AboutBox>
    </WrapperLarge>
  )
}


export const AboutBox = ({ children }: { children?: ReactNode }) => {
  return <div className="m-20" id={'about-us'} >{children}</div>
}