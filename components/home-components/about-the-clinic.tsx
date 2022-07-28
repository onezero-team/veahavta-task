/* eslint-disable @next/next/no-img-element */

import { HomePageType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { Heading, ItemHeader } from '../data-components/header-text'
import { Textarea } from '../data-components/content-text'
import Image from 'next/image'
import { BlueButton } from '../data-components/text-button'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge className="max-w-screen-xl grid-cols-1fr-1fr mt-24 mx-auto gap-5 ">
      <div className=" flex justify-end relative">
        <img
          src={'/img/about/Rectangle 8.png'}
          alt={''}
          height={628}
          width={702}
        />
      </div>
      <div className="m-20" id={'about-us'}>
        <Heading className="text-header-blue mb-3 ">
          {data.homepage.aboutHeading}
        </Heading>
        <ItemHeader className="text-5xl mb-12">
          {data.homepage.aboutTitle}
        </ItemHeader>
        <Textarea>{data.homepage.aboutUsText}</Textarea>
        <BlueButton className="text-2xl" text={data.homepage.aboutUsButton} />
      </div>
    </WrapperLarge>
  )
}
