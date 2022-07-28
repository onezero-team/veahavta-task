/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image'
import { ChangeLangButton } from './change-language-button'

export default function LanguagesButtonList({
  languageNames,
}: {
  languageNames: object
}) {
  const languagesButtons = Object.entries(languageNames).map((entry, key) => {
    return (
      <li className="ml-2 justify-self-start float-left" key={key}>
        <ChangeLangButton lang={entry[0]}>
          <div>
            <img
              src={`/img/lang/${entry[0]}.svg`}
              alt={entry[1]}
              width={52}
              height={32}
            />
          </div>
        </ChangeLangButton>
      </li>
    )
  })

  return <>{languagesButtons}</>
}
