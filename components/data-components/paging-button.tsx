/* eslint-disable @next/next/no-img-element */

import { MouseEventHandler } from 'react'

export default function PagingButton({
  onClick,
  disabled,
  src,
  className,
  dir,
}: {
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  src: string
  className?: string
  dir: 'left' | 'right'
}) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${disabled} 
        h-17 w-17 z-20
        box-border shadow-4xl bg-white border-brown-bg border-2 rounded-full
        flex justify-center items-center absolute  top-64 ${className}`}
      >
        <img
          src={src}
          height={13}
          alt={dir}
          className={disabled ? 'opacity-20' : ''}
        />
      </button>
    </>
  )
}
