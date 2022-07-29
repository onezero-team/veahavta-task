import React from 'react'
import Image from 'next/image'

function Card({ link, title, text }) {
  return (
    <div className="card-container">
      <span className="card__image bg-contact-bg">
        <Image src={link} width="128" height="128" />
      </span>
      <div className="card-text">
        <h2 className="card__title text-icon-bg">{title}</h2>
        <p className="card__text">{text}</p>
      </div>

      <style jsx>
        {`
          .card-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 31px 31px 31px 31px;
            width: 100%;
            height: 480px;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          }
          .card-text {
            border-radius: 0 0 31px 31px;
            background: #ffffff;
            padding: 5%;
            height: 50%;
          }
          .card__image {
            border-radius: 31px 31px 0 0;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .card__title {
            font-weight: 700;
            font-size: 28px;
          }
          .card__text {
            font-weight: 400;
            font-size: 18px;
          }
        `}
      </style>
    </div>
  )
}

export default Card
