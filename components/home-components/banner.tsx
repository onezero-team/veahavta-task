import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import Image from 'next/image'
import groupImage from '../../public/assets/group.png'

export default function Banner({ data }: HomePageType) {
  return (
    <div
      id="top-header"
      className="overflow-hidden relative mobile:max-w-full "
    >
      <div className="absolute  -top-56   left-px mobile:hidden  notMobileOrDesk:hidden ">
        <Image src={groupImage} alt="" layout="fixed" />
      </div>
      <div className="wrapper pb-6 bg-banner  mobile:p-10 mobile:pb-36 ">
        <div className="laptop:z-50 desk:z-50 tablet:z-50">
          <PageHeader>{data.homepage}</PageHeader>
        </div>

        <a
          type="button"
          href="#support-us"
          className="
          button 
          z-50 text-2xl 
          hover:opacity-90 
          cursor-pointer 
          w-48 
          self-center 
          h-16 
          bg-icon-bg 
         text-light 
         rounded-full 
         mt-5  
         mobile:mt-10 
         flex 
         justify-center 
         items-center"
        >
          {data.homepage.getToKnowUsButton}
        </a>

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
          }
        `}</style>
      </div>
    </div>
  )
}
