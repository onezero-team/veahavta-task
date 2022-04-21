import { CommonType, HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import { v4 as uuidv4 } from 'uuid'
import  Basic from '../formik/formik'
import { ButtonWhite } from '../data-components/buttonWhite'

export default function ContactUs({ data }: HomePageType ) {
  return (
    <WrapperLarge>
      <div className="contactUs flex justify-center ">
        <div className="part text-center mt-20">
          <ButtonWhite className="contactUsBtn font-bold ml-10" text={data.homepage.contactUsHeading}></ButtonWhite>
          <h1 className="contactUsTitle text-3xl font-bold text-center">{data.homepage.contactUsTitle}</h1>
          <h3 className="contactUsText text-lg w-80 text-center ">{data.homepage.contactUsText}</h3>
          <div className='conainer grid grid-cols-2'>
            {data.common.contactUsLinks.map((contact) => (
              <div key={uuidv4()} className="link text-xs">
                <img src={contact.imagePath}></img>
                <div >{contact.text}</div>
                <div>{contact.linkType}</div>
                <div>{contact.linkValue}</div>
              </div>
            ))}
            </div>
        </div>
        <div className="basic">
          <Basic data={data} />
        </div>
        <style jsx>{`
          .link {
            margin: 5px;
            border-radius: 10px;
            align-items: end;

          }
         
          .contactUs {
            background:#F4F3FD;
          }
          .basic {
            margin-top: -135px;
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
