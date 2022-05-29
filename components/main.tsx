import React from 'react'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main id="main-ontent">{children}</main>
    </>
  )
}
