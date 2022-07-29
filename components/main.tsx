import React from 'react'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main
        id="main-content"
        className=" min-w-full m-auto flex flex-col justify-items-center"
      >
        {children}
      </main>
    </>
  )
}
