import { HomePageType } from '@/lib/interface'
import React from 'react'
import { Button } from '../data-components/button'
import { WrapperLarge } from '../wrapper'
import { v4 as uuidv4 } from 'uuid'
import Basic from '../formik/Formik'

export default function ContactUs({ data }: HomePageType) {
  return (
    <WrapperLarge>
     <div className="contactUs flex flex-col-2">
       <div className="part" >
     <Button text={data.homepage.contactUsHeading}></Button>
      <h1>{data.homepage.contactUsTitle}</h1>
      <h3>{data.homepage.contactUsText}</h3>
      <h1 className="flex flex-row-2">
        {data.common.contactUsLinks.map((link) => (
          // console.log(data.common.contactUsLinks)
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
      `}</style>
      </div>
    </WrapperLarge>
  )
}
