import React from 'react'
import Link from 'next/link'

function HeaderLinks(headerData) {
  const { headerData: links } = headerData

  return (
    <>
      {links.map((element, index) => {
        return (
          <Link key={index} href={element.relativeLink}>
            <a>
              {element.text}
              <style jsx>
                {`
                  a {
                    transition: 0.3s;
                  }
                  a:hover {
                    transform: scale(1.01);
                  }
                `}
              </style>
            </a>
          </Link>
        )
      })}
    </>
  )
}

export default HeaderLinks
