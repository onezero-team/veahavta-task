import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import { AboutText } from '../data-components/about-text'

export default function AboutTheClinic({ data }: HomePageType) {
  return <WrapperLarge id="about-us" className='grid-cols-2 sm:grid-cols-1 pt-[97px] px-[247px] md:px-[80px]'>
    <img src="love-hands.jpg" className="justify-self-end sm:justify-self-center"></img>
    <AboutText>
      {data.homepage}
    </AboutText>

  </WrapperLarge>
}
