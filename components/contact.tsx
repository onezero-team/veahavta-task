import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import Image from 'next/image'
import reactStringReplace from 'react-string-replace'

export default function Contact({ data }: CommonType) {
  return (
    <WrapperLarge>
      <div className="w-full grid sm:grid-cols-2 sm:mt-4">
        {data.contactUsLinks.map((item, index) => {
          return (
            <div
              className="mt-3 flex items-center sm:mt-6"
              key={index}
              onClick={() => {
                item.linkType === 'tel'
                  ? window.open(
                      `tel:${item.linkValue.replace(/[".0"-.]/g, '')}`,
                    )
                  : item.linkType === 'email'
                  ? window.open(
                      `https://mail.google.com/mail/?view=cm&fs=1&to=${item.text}`,
                    )
                  : null
              }}
            >
              <div className="h-11 w-11 relative bg-header-blue flex justify-center items-center rounded-full my-2 ">
                <div className="h-5 w-5 relative">
                  <Image
                    src={item.imagePath}
                    alt=""
                    width={'100'}
                    height={'100'}
                    layout="fill"
                  />
                </div>
              </div>
              <div className="">
                <div className="text-2xl md:text-xl lg:text-base mx-3">
                  {reactStringReplace(
                    item.text.replace('0', ''),
                    item.text.split('0')[1],
                    (match, i) => (
                      <div>0{match}</div>
                    ),
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </WrapperLarge>
  )
}
