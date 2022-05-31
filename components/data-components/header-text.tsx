import { Homepage } from '@/lib/interface'
import reactStringReplace from 'react-string-replace'

export const PageHeader = ({ children }: { children: Homepage }) => {
  const childrenTitle = reactStringReplace(
    children.title,
    children.title.split('-')[1],
    (match, i) => <div>{match}</div>,
  )
  const childrenDescription = reactStringReplace(
    children.description,
    children.description.split(',')[1],
    (match, i) => <div>{match}</div>,
  )

  return (
    <div className="absolute top-60 w-full flex flex-col items-center">
      <div className="font-bold text-4xl w-11/12 text-center leading-tight sm:text-7xl sm:w-5/12 sm:leading-tight">
        {childrenTitle}
      </div>
      <div className="text-lg font-normal text-center mt-6 sm:text-2xl sm:mt-3">
        {childrenDescription}
      </div>
      <div
        className="font-bold text-2xl mt-14 min-w-44 px-8 h-16 bg-header-blue rounded-3xl flex justify-center items-center 
  text-light my-auto sm:mt-8"
      >
        {children.getToKnowUsButton}
      </div>
    </div>
  )
}
