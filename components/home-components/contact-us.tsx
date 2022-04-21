import { CommonType, HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import { v4 as uuidv4 } from 'uuid'
import  Basic from '../formik/formik'
import { ButtonWhite } from '../data-components/buttonWhite'

export default function ContactUs({ data }: HomePageType ) {
  return (
    <WrapperLarge>
      <div className="contactUs flex justify-center">
        <div className="part text-center">
          <ButtonWhite className="contactUsBtn font-bold ml-20" text={data.homepage.contactUsHeading}></ButtonWhite>
          <h1 className="contactUsTitle text-3xl font-bold text-center">{data.homepage.contactUsTitle}</h1>
          <h3 className="contactUsText text-lg w-80 text-center">{data.homepage.contactUsText}</h3>
            {data.common.contactUsLinks.map((contact) => (
              <div key={uuidv4()} className="link text-xs flex flex-col-2">
                <img src={contact.imagePath}></img>
                <div >{contact.text}</div>
                <div>{contact.linkType}</div>
                <div>{contact.linkValue}</div>
              </div>
            ))}
        </div>
        <div className="basic">
          <Basic data={data} />
        </div>
        <style jsx>{`
          .link {
            display: flex;
            flex-direction: column;
            flew-wrap: wrap;
            margin: 5px;
            border-radius: 10px;
          }
         
          .contactUs {
            background:#F4F3FD;
          }
          .basic {
            margin-top: -50px;
            margin-bottom: 50px;
            margin-right: 50px;
            background:white;
            display:flex;
            flex-flow:row wrap;
          }
          .contactUsBtn {
            margin-rigth: 300px;
            margin-top: 30px;
          }
        `}</style>
      </div>
    </WrapperLarge>
  )
}
