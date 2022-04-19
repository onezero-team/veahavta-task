import themePreval from '@/lib/theme.preval'
import Image from 'next/image'

import { HomePageType } from '@/lib/interface'

import { PageHeader } from '../data-components/header-text'
import { PageSubHeader } from '../data-components/header-subtext'
import { Button } from '../data-components/button'
import rect1 from '../../public/assets/img/Rectangle-2.png'
import rect2 from '../../public/assets/img/Rectangle-5.png'
import rect3 from '../../public/assets/img/Rectangle-6.png'
import rect4 from '../../public/assets/img/Rectangle-7.png'
import rect5 from '../../public/assets/img/Rectangle-9.png'
import rect6 from '../../public/assets/img/Rectangle-8.png'
import rect7 from '../../public/assets/img/Rectangle-10.png'

export default function Banner({ data }: HomePageType) {
  const positions = [
    { name: rect1, class: 'top-[160px] right-[80px]' },
    { name: rect2, class: 'top-[330px] right-[-90px]' },
    { name: rect3, class: 'bottom-[-190px] right-[240px]' },
    { name: rect4, class: 'bottom-[-190px] left-[300px]' },
    { name: rect5, class: 'top-[96px] left-[65px]' },
    { name: rect6, class: 'bottom-[100px] left-[-63px]' },
    { name: rect7, class: 'top-[96px] left-[500px]' },
  ]

  return (
    <div id="top-header">
      <div className="wrapper">
        <div className="background"></div>

        <div className="flex flex-col items-center">
          <PageHeader>{data.homepage.title}</PageHeader>
          <PageSubHeader>{data.homepage.description}</PageSubHeader>
          <Button
            text={data.homepage.getToKnowUsButton}
            className={'my-9'}
          ></Button>
        </div>

        {positions.map((position) => {
          return (
            <div
              key={position.class}
              className={`absolute ${position.class} w-[315px] h-[380px]`}
            >
              <Image src={position.name} alt="rect" />
            </div>
          )
        })}

        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            position: relative;
            height: 780px;
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
