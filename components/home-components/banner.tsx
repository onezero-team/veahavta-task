import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import Image from 'next/image'
import Rectangle1 from '../../assets/Rectangle_4.png'
import Rectangle2 from '../../assets/Rectangle_5.png'
import Rectangle3 from '../../assets/Rectangle_6.png'
import Rectangle4 from '../../assets/Rectangle_7.png'
import Rectangle5 from '../../assets/Rectangle_8.png'
import Rectangle6 from '../../assets/Rectangle_9.png'
import Rectangle7 from '../../assets/Rectangle_10.png'
export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div className="wrapper flex flex-col	justify-center items-center h-[790px]">
        <div className="background absolute z-[-1] inset-0">
          <div className="border-box absolute w-80 h-96 left-[75%] top-[8%] drop-shadow-md rounded-lg">
            <Image src={Rectangle1} alt="Rectangle 1" />
          </div>
          <div className="border-box absolute w-80 h-96 drop-shadow-md rounded-lg left-[83%] top-[32%]">
            <Image src={Rectangle2} alt="Rectangle 1" />
          </div>
          <div className="image3 border-box absolute w-80 h-96 drop-shadow-md rounded-lg left-[64%] top-[64%] ">
            <Image src={Rectangle3} alt="Rectangle 3" />
          </div>
          <div className="image4 border-box absolute w-80 h-96 drop-shadow-md rounded-lg left-[17%] top-[65%]">
            <Image src={Rectangle4} alt="Rectangle 4" />
          </div>
          <div className="image5 border-box absolute w-80 h-96 drop-shadow-md rounded-lg left-[-2%] top-[35%] z-10">
            <Image src={Rectangle5} alt="Rectangle 5" />
          </div>
          <div className="image6 border-box absolute w-80 h-96 drop-shadow-md rounded-lg left-[9%]">
            <Image src={Rectangle6} alt="Rectangle 6" />
          </div>
          <div className="image7 border-box absolute w-80 h-96 drop-shadow-md rounded-lg left-[34%] top-[-24%]">
            <Image src={Rectangle7} alt="Rectangle 7" height={380} />
          </div>
        </div>
        <PageHeader>{data.homepage.title}</PageHeader>
        <p className="w-3/12	text-[28px] text-center	mt-5">
          {data.homepage.description}
        </p>
        <button className="getToKnowUsButton w-44 h-14 rounded-[51px] font-bold text-[white] mt-[10px]">
          {data.homepage.getToKnowUsButton}
        </button>
        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
          }
          div.background {
            background: linear-gradient(
              109.17deg,
              #f4f3fd 38.49%,
              #d3d1fc 98.95%
            );
          }

          button.getToKnowUsButton {
            background: #4e47f9;
          }
        `}</style>
      </div>
    </div>
  )
}
