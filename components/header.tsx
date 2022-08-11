import { useLocale } from '@/lib/hooks'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import React, { useEffect, useRef, useState } from 'react'

export default function Header({
  data,
  about,
  contact,
  footerRef,
  mobileRef,
}: any) {
  const { dir } = useLocale()

  const ulRef = useRef<HTMLUListElement | null>(null)
  const [isMenu, setIsMenu] = useState<boolean>(true)

  const addOrRemoveClassForDropDown = (type: string) => {
    if (type === 'add') {
      ulRef.current?.classList.add('top-[80px]')
      ulRef.current?.classList.remove('flex')
      ulRef.current?.classList.add('contents')
      ulRef.current?.classList.add('opacity-100')
    } else {
      ulRef.current?.classList.remove('top-[80px]')
      ulRef.current?.classList.add('flex')
      ulRef.current?.classList.remove('contents')
      ulRef.current?.classList.remove('opacity-100')
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (isMenu && window.innerWidth >= 768) {
        addOrRemoveClassForDropDown('remove')
        setIsMenu(true)
      }
    })

    document.addEventListener('click', (event) => {
      // @ts-ignore
      const searchPanel = event?.target?.closest('.my-nav-net')
      if (!searchPanel) {
        addOrRemoveClassForDropDown('remove')
        setIsMenu(true)
      }
    })

    window.addEventListener('scroll', () => {
      if (isMenu) {
        addOrRemoveClassForDropDown('remove')
        setIsMenu(true)
      }
    })
  }, [])

  const openMenu = (e: React.MouseEvent<HTMLImageElement>): void => {
    if (isMenu) {
      addOrRemoveClassForDropDown('add')
      setIsMenu(false)
    } else {
      addOrRemoveClassForDropDown('remove')
      setIsMenu(true)
    }
  }

  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="w-screen h-header z-10 pt-4 px-4">
        <nav
          className={
            'my-nav-net bg-light  md:flex mx-auto md:items-center gap-x-6  max-w-screen-lg rounded-lg  '
          }
        >
          <div className={' flex justify-between items-center mx-2'}>
            <Logo />
            <span className={'text-3xl cursor-pointer md:hidden block'}>
              <img
                id={'menu'}
                onClick={(e) => openMenu(e)}
                src={'/image/iphone-nav-icon.svg'}
              />
            </span>
          </div>
          <ul
            ref={ulRef}
            className="md:flex justify-end md:items-center z-[-1] md:z-auto
                md:static absolute
                bg-light  w-full left-0 md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all
                ease-in duration-500 justify-between "
          >
            <div className={'flex my-text-headers'}>
              <div className={'flex'}>
                <li
                  className={
                    'mx-2 my-6 md:my-0 font-body font-normal cursor-pointer'
                  }
                >
                  {data.common.appLinks[0].text}
                </li>
                <li
                  onClick={() => {
                    about.current?.scrollIntoView()
                  }}
                  className={
                    'mx-2 my-6 md:my-0 font-body about-h font-normal cursor-pointer'
                  }
                >
                  {data.common.appLinks[1].text}
                </li>
                <li
                  onClick={() => {
                    if (window?.innerWidth <= 1340) {
                      mobileRef.current?.scrollIntoView()
                    } else {
                      contact.current?.scrollIntoView()
                    }
                  }}
                  className={
                    'mx-2 my-6 md:my-0 font-body font-normal cursor-pointer'
                  }
                >
                  {data.common.appLinks[2].text}
                </li>
                <li
                  onClick={() => {
                    footerRef.current?.scrollIntoView()
                  }}
                  className={
                    'mx-2 my-6 md:my-0 font-body font-normal cursor-pointer'
                  }
                >
                  {data.common.appLinks[3].text}
                </li>
              </div>
            </div>

            <div className={'flex justify-around flag-container'}>
              <li className={'flex my-6 md:my-0 cursor-pointer'}>
                <ChangeLangButton className="" lang="ar" />
              </li>
              <li className={'flex my-6 md:my-0 cursor-pointer'}>
                <ChangeLangButton className="" lang="he" />
              </li>
              <li className={'flex my-6 md:my-0 cursor-pointer'}>
                <ChangeLangButton className="" lang="en" />
              </li>
              <li className={'flex my-6 md:my-0 cursor-pointer'}>
                <ChangeLangButton className="" lang="am" />
              </li>
              <li className={'flex my-6 md:my-0 cursor-pointer'}>
                <ChangeLangButton className="" lang="ti" />
              </li>
            </div>
          </ul>
        </nav>
      </header>

      <style jsx>
        {`
          .flag-container {
            padding-left: 10px;
            padding-right: 10px;
            width: 40%;
          }

          @media only screen and (max-width: 960px) {
            .flag-container {
              width: 50%;
            }
          }
          
          

          @media only screen and (max-width: 819px) {
            .flag-container {
              width: 47%;
            }
          }
          

          @media only screen and (max-width: 767px) {
            .my-text-headers {
              justify-content: space-around;
              width: 100%;
            }

            .flag-container {
              width: 100%;
            }
          }

          @media only screen and (max-width: 388px) {
            .about-h {
              width: 50px;
            }

            .flag-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

const Logo = () => {
  return (
    <Link href="/">
      <img src="image/Logo.svg" />
    </Link>
  )
}
