import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div className="wrapper">About the clinic</div>;
      <style jsx>{`
        div.wrapper {
          z-index: 10;
          background: #fff;
        }
        div.background {
          position: absolute;
          z-index: -1;
          inset: 0;
          background: linear-gradient(
            109.17deg,
            #f4f3fd 38.49%,
            #d3d1fc 98.95%
          );
        }
      `}</style>
    </WrapperLarge>
  )
}
