/* eslint-disable @next/next/no-img-element */

import { MouseEventHandler } from 'react'


/**
 *  This RFC renders mobile navigation button
 * @param  onClick - Callback to run on user Click
 * @param className Optinal , A string variable representing the class or space-separated classes of the current element.
 * @param alt Optinal , provides fallback (alternate) text to display when the image is not loaded.

 * @returns Render component
 */
export const BurgerMenuButton = ({
  onClick,
  className,
  alt
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  alt?: string
}) => {
  return (
    <button
      onClick={onClick}
      className={`NavBurger rounded-full w-max text-center ${className}`}>
      <img src={'/icons/navBurger-icon.svg'} alt={alt? alt : ''} />
    </button>
  )
}
