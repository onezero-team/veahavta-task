import React from 'react'
import Image from 'next/image'

function Card({ link, title, text }) {
  return (
    <div
      className={`
      card-container flex flex-col justify-center rounded-3xl w-full  shadow-4xl  
      sm:w-80 sm:mb-10 sm:right-0 
      md:max-w-sm
      `}
    >
      <span className="card__image bg-contact-bg flex items-center justify-center h-full">
        <Image src={link} width="128" height="128" alt="" />
      </span>
      <div className="rounded-3xl bg-light h-2/4 mt-10 p-2">
        <h2 className="font-bold text-3xl text-icon-bg">{title}</h2>
        <p className="text-lg">{text}</p>
      </div>

      <style jsx>
        {`
          .card-container {
            height: 480px;
          }
          .card__image {
            border-radius: 31px 31px 0 0;
          }
        `}
      </style>
    </div>
  )
}

export default Card
