import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import Image from 'next/image'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
        <div className="background h-192 w-full relative -z-10">

  <div className='absolute h-96 w-80 top-64 right-0 z-10'>
  <Image src={"/imgHeader/1.png"} alt="" width={'100%'} height={'100%'} layout="fill"/>  </div>

  <div className='absolute h-96 w-80 top-20 right-52'>
  <Image  src={"/imgHeader/2.png"} alt="" width={'100%'} height={'100%'} layout="fill"/>  </div>

  <div className='absolute h-96 w-80 -bottom-36 right-80'>
  <Image src={"/imgHeader/3.png"} alt="" width={'100%'} height={'100%'} layout="fill"/>  </div>

  <div className='absolute h-48 w-80 top-0 left-[40rem]'>
<Image src={"/imgHeader/4.png"} alt="" width={'100%'} height={'100%'} layout="fill"/>  </div>

<div className='absolute h-96 w-80 left-80 -bottom-36 -z-10'>
<Image src={"/imgHeader/5.png"} alt="" width={'100%'} height={'100%'} layout="fill"/>  </div>

<div className='absolute h-96 w-80 top-72 -left-4 z-10'>
<Image src={"/imgHeader/6.png"} alt="" width={'100%'} height={'100%'} layout="fill"/>  </div>

<div className='absolute h-96 w-80 top-0 left-40'>
<Image src={"/imgHeader/7.png"} alt="" width={'100%'} height={'100%'} layout="fill"/>  </div>

        </div>

        <PageHeader>{data.homepage}
        </PageHeader>

        <style jsx>{`
          div.background {
            background: linear-gradient(
              109.17deg, #F4F3FD 38.49%, #D3D1FC 72.36%);
          }
        `}</style>
      </div>
  )
}
