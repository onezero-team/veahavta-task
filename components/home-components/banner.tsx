import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import Image from 'next/image'
import React from 'react'
import { PageHeader } from '../data-components/header-text'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div
        className="wrapper h-150  z-10 relative  pt-4 overflow-hidden 
       bg-gradient-to-br from-light to-purple flex flex-col  justify-center items-center  "
      >
        <div className="flex flex-col justify-between h-64 items-center">
          <PageHeader>{data.homepage.title}</PageHeader>
          <p className=" text-center w-3/5 text-2xl mobile:w-5/6 ">
            {' '}
            {data.homepage.description}
          </p>
          <button className="bg-header-blue font-bold text-light pr-4 pl-4 pt-1 pb-1 rounded-3xl">
            {data.homepage.getToKnowUsButton}
          </button>
        </div>
        <div className="hidden w-full h-full absolute sm:none md:none lg:block">
          <div className="absolute w-72 right-40 -top-10">
            <Image
              className=""
              src={'/header/Rectangle-2.png'}
              width={315}
              height={380}
              objectFit="contain"
              objectPosition={'center'}
              layout="responsive"
            />
          </div>
          <div className="absolute w-72 right-0 bottom-36">
            <Image
              className=""
              src={'/header/Rectangle-5.png'}
              width={315}
              height={380}
              layout="responsive"
            />
          </div>
          <div className="absolute w-72 right-80 -bottom-12">
            <Image
              className=""
              src={'/header/Rectangle-6.png'}
              width={315}
              height={380}
              objectFit="contain"
              objectPosition={'center'}
              layout="responsive"
            />
          </div>
          <div className="absolute w-72 left-72 -bottom-32">
            <Image
              className=""
              src={'/header/Rectangle-7.png'}
              width={315}
              height={380}
              objectFit="contain"
              objectPosition={'center'}
              layout="responsive"
            />
          </div>
          <div className="absolute w-72 left-36 -top-3">
            <Image
              className=""
              src={'/header/Rectangle-9.png'}
              width={315}
              height={380}
              objectFit="contain"
              objectPosition={'center'}
              layout="responsive"
            />
          </div>
          <div className="absolute w-72 -left-5 bottom-32">
            <Image
              className=""
              src={'/header/Rectangle-8.png'}
              width={315}
              height={380}
              objectFit="contain"
              objectPosition={'center'}
              layout="responsive"
            />
          </div>
          <div className="absolute w-72 left-96 -top-40">
            <Image
              className=""
              src={'/header/Rectangle-10.png'}
              width={315}
              height={380}
              objectFit="contain"
              objectPosition={'center'}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            position: relative;
          }
          div.background {
            position: absolute;
            z-index: -1;
            inset: 0;
            background: linear-gradient(
              109.17deg,
              rgba(1, 157, 177, 0.21) 38.49%,
              #019db1 98.95%
            );
          }
        `}</style> */
}
