/* eslint-disable @next/next/no-img-element */

import { MouseEventHandler } from "react"

export const BurgerMenuButton = ({
  onClick,
  className,
  alt,
}: {
  onClick?:MouseEventHandler<HTMLButtonElement>
  className?: string
  alt?: string
}) => {


  return (
    <>
      <button
        onClick={onClick}
        className={`NavBurger rounded-full w-max text-center ${className}`}
      >
        <img src={'/icons/navBurger-icon.svg'}  alt={alt ? alt : ''} />
      </button>   
    </>
  )
}
