import { HomePageType } from '@/lib/interface'
import { PageHeader } from '../data-components/header-text'
import BannerImageList from './banner-image-list'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div
        className="wrapper h-150 z-10 relative pt-4 overflow-hidden 
            bg-gradient-to-br from-light to-purple flex flex-col  justify-center items-center"
      >
        <BannerImageList />
        <div className="flex flex-col justify-between h-64 items-center gap-10 mobile:gap-5">
          <PageHeader>{data.homepage.title}</PageHeader>
          <p className=" text-center w-3/5 text-2xl mobile:w-5/6 ">
            {' '}
            {data.homepage.description}
          </p>
          <button className="bg-header-blue font-bold text-light p-10 pt-3 pb-3  rounded-3xl cursor-pointer">
            {data.homepage.getToKnowUsButton
              ? data.homepage.getToKnowUsButton
              : 'Get to know us'}
          </button>
        </div>
      </div>
    </div>
  )
}
