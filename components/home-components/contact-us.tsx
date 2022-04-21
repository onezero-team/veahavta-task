import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import { v4 as uuidv4 } from 'uuid'
import Basic from '../formik/formik'
import { ButtonWhite } from '../data-components/buttonWhite'

export default function ContactUs({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div className="contactUs flex justify-center ">
        <div className="part text-center mt-20">
          <ButtonWhite
            className="contactUsBtn font-bold ml-10"
            text={data.homepage.contactUsHeading}
          ></ButtonWhite>
          <h1 className="contactUsTitle text-3xl font-bold text-center">
            {data.homepage.contactUsTitle}
          </h1>
          <h3 className="contactUsText text-lg w-80 text-center ">
            {data.homepage.contactUsText}
          </h3>
          <div className="conainer grid grid-cols-2">
            {data.common.contactUsLinks.map((contact) => (
              <div key={uuidv4()} className="link text-xs">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="44" height="44" fill="" />
                  <g id="Ellipse 2 1">
                    <path
                      id="Vector"
                      d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
                      fill="#4E47F9"
                    />
                    <path
                      id="Vector_2"
                      d="M22 8C19.3478 8 16.8043 9.0325 14.9289 10.8703C13.0536 12.7082 12 15.2009 12 17.8C12 24.8 22 36 22 36C22 36 32 24.8 32 17.8C32 15.2009 30.9464 12.7082 29.0711 10.8703C27.1957 9.0325 24.6522 8 22 8ZM22 21.3C21.2936 21.3 20.6031 21.0947 20.0158 20.7101C19.4285 20.3256 18.9707 19.7789 18.7004 19.1394C18.4301 18.4999 18.3594 17.7961 18.4972 17.1172C18.635 16.4382 18.9751 15.8146 19.4746 15.3251C19.9741 14.8356 20.6105 14.5023 21.3033 14.3672C21.996 14.2322 22.7141 14.3015 23.3667 14.5664C24.0193 14.8313 24.5771 15.2799 24.9695 15.8555C25.362 16.4311 25.5714 17.1078 25.5714 17.8C25.5714 18.2596 25.4791 18.7148 25.2996 19.1394C25.1201 19.564 24.857 19.9499 24.5254 20.2749C24.1937 20.5999 23.8 20.8577 23.3667 21.0336C22.9334 21.2095 22.469 21.3 22 21.3Z"
                      fill="white"
                    />
                  </g>
                </svg>

                <div className="contactText">{contact.text}</div>
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
            display: flex;
            margin: 5px;
            border-radius: 10px;
            align-items: end;
          }

          .contactUs {
            background: #f4f3fd;
            margin-top:100px;
          }
          .basic {
            margin-top: -135px;
            margin-bottom: 50px;
            margin-right: 50px;
            background: white;
            display: flex;
            flex-flow: row wrap;
          }
          .contactUsBtn {
            margin-rigth: 300px;
            margin-top: 30px;
          }
          .contactText {
            width: 100px;
          }
        `}</style>
      </div>
    </WrapperLarge>
  )
}
