import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import Image from 'next/image'
import img1 from '../../public/assets/images/Rectangle-1.png'
import img2 from '../../public/assets/images/Rectangle-2.png'
import img3 from '../../public/assets/images/Rectangle-3.png'
import img4 from '../../public/assets/images/Rectangle-4.png'
import img5 from '../../public/assets/images/Rectangle-5.png'
import img6 from '../../public/assets/images/Rectangle-6.png'
import img7 from '../../public/assets/images/Rectangle-7.png'
import { Button } from '../data-components/button'

export default function Banner({ data }: HomePageType) {
  const descriptionLines = data.homepage.description.split(',')
  const headerLines = data.homepage.title.split('-')
  const images = [
    { img: img1, pos: 'top-[0px] right-[1000px]' },
    { img: img2, pos: 'top-[0px] right-[500px]' },
    { img: img3, pos: 'top-[90px] right-[100px]' },
    { img: img4, pos: 'top-[250px] right-[-100px]' },
    { img: img5, pos: 'top-[540px] right-[250px]' },
    { img: img6, pos: 'top-[540px] right-[900px]' },
    { img: img7, pos: 'top-[250px] left-[0px]' },
  ]

  return (
    <div id="top-header">
      <div className="wrapper md:h-[780px] overflow-hidden flex flex-col items-center justify-center">
        <div className="background">
          {images.map(({ img, pos }) => (
            <div key={pos} className={`hidden md:block absolute ${pos}`}>
              <Image src={img} alt="img" layout="fixed" />
            </div>
          ))}
        </div>
        <PageHeader>{`${headerLines[0]}-`}</PageHeader>
        <PageHeader>{headerLines[1]}</PageHeader>
        <p className="text-center mt-3">
          {descriptionLines[0]},<br />
          {descriptionLines[1]}.
        </p>
        <Button
          className="mt-5 rounded-full p-2 bg-purple text-light px-5 font-medium"
          text={data.homepage?.getToKnowUsButton}
        />

        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            position: relative;
            min-height: 500px;
          }
          div.background {
            position: absolute;
            z-index: -1;
            inset: 0;
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
