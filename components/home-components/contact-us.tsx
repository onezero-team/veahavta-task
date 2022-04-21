import { HomePageType } from '@/lib/interface'
import React from 'react'
import { Button } from '../data-components/button'
import { WrapperLarge } from '../wrapper'
import { v4 as uuidv4 } from 'uuid'
import Basic from '../formik/Formik'
import {ButtonWhite} from "../data-components/buttonWhite"

export default function ContactUs({ data }: HomePageType) {
  return (
    <WrapperLarge>
     <div className="contactUs flex   justify-center">
       <div className="part" >
     <ButtonWhite className='contactUsBtn font-bold ml-20' text={data.homepage.contactUsHeading}></ButtonWhite>
      <h1 className='contactUsTitle text-3xl font-bold text-center'>{data.homepage.contactUsTitle}</h1>
      <h3 className="contactUsText text-lg w-80 text-center">{data.homepage.contactUsText}</h3>
      <h1 className="flex flex-row-2 text-md ">
        {data.common.contactUsLinks.map((link) => (
          <div key={uuidv4()} className="link">
            <img src={link.imagePath}></img>
            <div>{link.text}</div>
            <div>{link.linkType}</div>
            <div>{link.linkValue}</div>
          </div>
        ))}
      </h1>
      </div>
      <div className="basic">
      <Basic/>
      </div>
      <style jsx>{`
        .link {
          border: 2px solid black;
          margin: 5px;
          border-radius: 10px;
        }
        .contactUs{
          background:lightgrey;
        }
        .basic{
          margin-top: -20px;
          
        }
        .contactUsBtn{
          margin-rigth: 300px;
          margin-top: 30px;
        }
      `}</style>
      </div>
    </WrapperLarge>
  )
}
