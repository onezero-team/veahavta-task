import { bannerImages, BannerImage } from '@/lib/models/banner-images'
import Image from 'next/image'
import React from 'react'

export default function BannerImageList() {
  return (
    <div className="hidden w-full h-full absolute sm:none md:none xxl:block">
      {bannerImages.map((image: BannerImage) => {
        return (
          <div key={image.src} className={`absolute w-72 ${image.position} `}>
            <Image
              src={image.src}
              width={315}
              height={380}
              objectFit="contain"
              objectPosition={'center'}
              layout="responsive"
              alt={'photo'}
            />
          </div>
        )
      })}
    </div>
  )
}
