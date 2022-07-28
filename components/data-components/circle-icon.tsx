/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export const CircleImage = ({
  src,
  className,
  alt,
}: {
  src: string
  className?: string
  alt?: string
}) => {
  return (
    <>
      <div
        className={`flex CircleImage rounded-full w-max text-center p-2 ${className}`}
      >
        <img src={src} width={26} height={26} alt={alt ? alt : ''} />
      </div>
      <style jsx>
        {`
          div.CircleImage {
            height: 44px;
            width: 44px;
          }
        `}
      </style>
    </>
  )
}
