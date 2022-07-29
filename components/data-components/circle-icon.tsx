/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export const CircleIcon = ({
  src,
  className = '',
  alt,
}: {
  src: string
  className?: string
  alt?: string
}) => {
  return (
    <>
      <div
        className={`flex rounded-full h-11 w-11 justify-center items-center  ${className}`}
      >
        <img src={src} height={26} alt={alt ? alt : ''} />
      </div>
    </>
  )
}
