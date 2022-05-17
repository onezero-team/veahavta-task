import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import MyForm from '../data-components/form'
import { Button } from '../data-components/button'
import Image from 'next/image'
import Link from 'next/link'
export default function ContactUs({ data }: HomePageType) {
  return (
    <section id="contact-us">
      <div className="block h-[500px] bg-lightpurle">
        <WrapperLarge>
          <div className="grid md:grid-cols-2 md:grid-rows-2">
            <div className="hidden md:block md:cols-start-1">
              <Button
                className="bg-light text-2xl font-bold text-btnblue rounded-full px-7 py-2"
                text={data.homepage.contactUsHeading}
              />
              <div className="text-6xl font-bold">
                {data.homepage.contactUsTitle}
              </div>
              <p className="text-lg">{data.homepage.contactUsText}</p>
              <div className="grid grid-cols-2 pt-5">
                <ul className="grid-rows-2">
                  <li className="">
                    <div className="grid grid-rows-1fr grid-flow-col grid-cols-auto-1fr gap-2.5 justify-self-center">
                      <Image
                        width={44}
                        height={44}
                        src="/icons/phone.svg"
                        alt="phone"
                      />{' '}
                      <p className="pt-3">
                        <Link
                          href={`tel:${data.common.contactUsLinks[0].linkValue}`}
                        >
                          {data.common.contactUsLinks[0].text}
                        </Link>
                      </p>
                    </div>
                  </li>
                  <li className=" pt-3">
                    <div className="grid grid-rows-1fr grid-flow-col grid-cols-auto-1fr gap-2.5 justify-self-center">
                      <Image
                        width={44}
                        height={44}
                        src="/icons/location.svg"
                        alt="phone"
                      />{' '}
                      <p className="pt-3">
                        <Link
                          href={`https://www.google.co.il/maps/search/:${data.common.contactUsLinks[2].text}`}
                        >
                          {data.common.contactUsLinks[2].text}
                        </Link>
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className="grid-rows-2">
                  <li className="">
                    <div className="grid grid-rows-1fr grid-flow-col grid-cols-auto-1fr gap-2.5 justify-self-center">
                      <Image
                        width={44}
                        height={44}
                        src="/icons/phone.svg"
                        alt="phone"
                      />{' '}
                      <p className="pt-3">
                        <Link
                          href={`tel:${data.common.contactUsLinks[1].linkValue}`}
                        >
                          {data.common.contactUsLinks[1].text}
                        </Link>
                      </p>
                    </div>
                  </li>
                  <li className=" pt-3">
                    <div className="grid grid-rows-1fr grid-flow-col grid-cols-auto-1fr gap-2.5 justify-self-center">
                      <Image
                        width={44}
                        height={44}
                        src="/icons/email.svg"
                        alt="phone"
                      />{' '}
                      <p className="pt-3">
                        <Link
                          href={`mailto:${data.common.contactUsLinks[3].text}`}
                        >
                          {data.common.contactUsLinks[3].text}
                        </Link>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-start-2">
              <MyForm data={data} />
            </div>
          </div>
        </WrapperLarge>
      </div>
    </section>
  )
}
