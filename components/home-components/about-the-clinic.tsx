import { HomePageType } from '@/lib/interface'

import { WrapperLarge } from '../wrapper'
import { Button } from '../data-components/button'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <>
      <WrapperLarge
        id="about-us"
        className="bg-white grid-cols-1 sm:grid-cols-2 pt-24 pb-20 sm:pb-48 m-auto w-fit"
      >
        <div className="about-img w-[280px] h-[250px] sm:w-[503px] sm:h-[450px] bg-cover flex self-center justify-self-center"></div>

        <div className="about-description w-[503px] my-5 mx-6 sm:my-10 sm:mx-12">
          <h3 className="text-header-blue text-xl font-normal mb-3">
            {data.homepage.aboutHeading}
          </h3>
          <h2 className="text-3xl sm:text-5xl font-bold w-[360px] sm:w-[430px] mb-12">
            {data.homepage.aboutTitle}
          </h2>
          <p className="text-[18px] w-[360px] sm:w-fit">
            {data.homepage.aboutUsText}
          </p>
          <Button
            text={data.homepage.aboutUsButton}
            className={
              'my-9 bg-icon-bg hover:bg-blue text-white font-bold text-base px-14 rounded-full py-1'
            }
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
