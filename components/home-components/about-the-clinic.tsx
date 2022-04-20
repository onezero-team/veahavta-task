import { HomePageType } from '@/lib/interface'

import { WrapperLarge } from '../wrapper'
import { Button } from '../data-components/button'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <>
      <WrapperLarge className="bg-white grid-cols-2 gap-28 pt-24 pb-48 px-60">
        <div className="about-img w-[503px] h-[450px] bg-cover"></div>

        <div className="about-description">
          <h3 className="text-header-blue text-xl font-normal mt-10 mb-3">
            {data.homepage.aboutHeading}
          </h3>
          <h2 className="text-5xl font-bold w-[430px] mb-12">
            {data.homepage.aboutTitle}
          </h2>
          <p className="text-[18px]">{data.homepage.aboutUsText}</p>
          <Button
            text={data.homepage.getToKnowUsButton}
            className={'my-9'}
          ></Button>
        </div>
      </WrapperLarge>

      <style jsx>{`
        div.about-img {
          background-image: url('/assets/img/hands.png');
        }
      `}</style>
    </>
  )
}
