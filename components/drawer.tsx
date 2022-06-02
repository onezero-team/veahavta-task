import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import Image from 'next/image'
import logo from '/public/logo.png'
import Menu from '@/components/menu'
import { useState } from 'react'

export default function Drawer({
  data,
  setIsMenuOpen,
  btnChangeLang,
}: CommonType) {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-screen w-full bg-dark/[.5] z-0"
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className="absolute top-0 left-0 h-96 w-full bg-light font-bold z-10"
          onClick={(event) => event.stopPropagation()}
        >
          <div
            onClick={() => setIsMenuOpen(false)}
            className="mx-10 mt-10 text-3xl w-3"
          >
            X
          </div>
          <div className="flex flex-col items-center text-3xl md:text-2xl lg:text-xl mt-3 leading-10">
            <Menu data={data} setIsMenuOpen={setIsMenuOpen} />
          </div>

          <div className="mx-5 my-16 flex flex-row gap-x-4 justify-between">
            {btnChangeLang}
          </div>
        </div>
      </div>
    </>
  )
}
