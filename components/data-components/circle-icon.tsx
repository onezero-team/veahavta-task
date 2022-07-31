/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image'

/**
 *  This RFC renders mobile navigation button
 * @param  src - Callback to run on user Click
 * @param className Optinal , A string variable representing the class or space-separated classes of the current element.
 * @param alt Optinal , provides fallback (alternate) text to display when the image is not loaded.

 * @returns Render component
 */
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
    <div
      className={`flex rounded-full h-11 w-11 justify-center items-center  ${className}`}
    >
      <img src={src} height={26} alt={alt ? alt : ''} />
    </div>
  )
}
