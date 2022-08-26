import { whatWeDoCards } from '@/lib/interface'
import { useLocale } from '@/lib/hooks'
import React from 'react'

export default function Card({ data }: { data: whatWeDoCards }) {
  const { dir } = useLocale()
  return (
    <div className="sm:mx-8  ml-px shadow-4xl rounded-[31px] w-[340px] h-[480px] xs:w-[260px] xs:h-[364px] overflow-hidden">
      <div className="bg-contact-bg flex justify-center items-center h-1/2">
        <img className="h-[128px]" src={data.imagePath} />
      </div>
      <div className="p-5 pt-[30px]">
        <h2
          className={`text-accent-purple font-bold ${
            dir === 'ltr' ? 'text-left' : 'text-right'
          }`}
        >
          {data.title}
        </h2>
        <p
          className={`text-paragraph leading-snug ${
            dir === 'ltr' ? 'text-left' : 'text-right'
          }`}
        >
          {data.text}
        </p>
      </div>
    </div>
  )
}
