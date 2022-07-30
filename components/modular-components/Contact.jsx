import React from 'react'
import Image from 'next/image'

function Contact({ text, linkValue, linkType, imagePath, setBackground }) {
  return (
    <div className="contact flex ">
      <a href={`${linkType}:${linkValue}`}>
        {setBackground ? (
          <span
            width="44"
            height="44"
            className="contact__image bg-icon-bg rounded-full px-3 py-2 pt-4 ml-3"
          >
            <Image src={imagePath} width="20" height="20" alt="" />
          </span>
        ) : (
          <span className="ml-2 ">
            <Image src={imagePath} width="25" height="25" alt="" />
          </span>
        )}
        {text}
      </a>
      <style jsx>{`
        .contact__image {
          transition: 0.3s;
        }
        .contact__image:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  )
}

export default Contact
