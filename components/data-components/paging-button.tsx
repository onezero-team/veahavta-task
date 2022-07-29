import React, { MouseEventHandler } from 'react'

export default function PagingButton({
  onClick,
  src,
  className,
  dir,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>
  src: string
  className?: string
  dir: 'left' | 'right'
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={`
        h-17 w-17 z-20
        box-border shadow-4xl bg-white border-brown-bg border-2 rounded-full
        flex justify-center items-center absolute  top-64 ${className}`}
      >
        <img src={src} height={13} alt={dir} />
      </button>
    </>
  )
}
