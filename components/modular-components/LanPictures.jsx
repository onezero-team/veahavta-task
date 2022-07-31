import React from 'react'
import { ChangeLangButton } from '../data-components/change-language-button'
import israelLogo from '../../public/assets/israel-lan.svg'
import englishLogo from '../../public/assets/english-lan.svg'
import tanzaniaLogo from '../../public/assets/tanzania-lan.svg'
import arabicLogo from '../../public/assets/arabic-lan.svg'
import amharicLogo from '../../public/assets/amharic-lan.svg'

function LanguagePictures({ data }) {
  return (
    <>
      <li>
        <ChangeLangButton lang="ar" imageProp={arabicLogo}>
          {data.languageNames[0].ar}
        </ChangeLangButton>
      </li>
      <li>
        <ChangeLangButton lang="he" imageProp={israelLogo}>
          {data.languageNames[0].he}
        </ChangeLangButton>
      </li>
      <li>
        <ChangeLangButton lang="en" imageProp={englishLogo}>
          {data.languageNames[0].en}
        </ChangeLangButton>
      </li>
      <li>
        <ChangeLangButton lang="am" imageProp={amharicLogo}>
          {data.languageNames[0].am}
        </ChangeLangButton>
      </li>
      <li>
        <ChangeLangButton lang="ti" imageProp={tanzaniaLogo}>
          {data.languageNames[0].ti}
        </ChangeLangButton>
      </li>
    </>
  )
}

export default LanguagePictures
