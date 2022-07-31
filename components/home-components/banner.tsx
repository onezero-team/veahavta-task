import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import Image from 'next/image'
import groupImage from '../../public/assets/group.png'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header" className="overflow-hidden relative sm:max-w-full ">
      <div className="absolute -top-3/4  right-5   sm:hidden  md:hidden ">
        <Image src={groupImage} alt="" width={1650} layout="fixed" />
      </div>
      <div className="wrapper pb-6 bg-banner  sm:p-10 sm:pb-36 ">
        <div className="md:z-50 lg:z-50 ">
          <PageHeader>{data.homepage}</PageHeader>
        </div>
        <button
          type="button"
          className="self-center hover:opacity-90 cursor-pointer z-50 mt-5"
        >
          <a
            href="#support-us"
            className="text-2xl 
          w-48 
          self-center 
          h-16 
          bg-icon-bg 
         text-light 
          rounded-full 
          sm:mt-10 
          flex 
          justify-center 
          items-center
          
          "
          >
            {data.homepage.getToKnowUsButton}
          </a>
        </button>

        <style jsx>{`
          .wrapper {
            display: flex;
            flex-direction: column;
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            background: linear-gradient(
              109.17deg,
              #f4f3fd 38.49%,
              #d3d1fc 72.36%
            );
            height: 575px;
          }
        `}</style>
      </div>
    </div>
  )
}
