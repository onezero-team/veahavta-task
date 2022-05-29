import { Homepage } from '@/lib/interface'
import reactStringReplace from 'react-string-replace';

export const PageHeader = ({ children }: { children: Homepage }) => {

  const childrenTitle = reactStringReplace(children.title, children.title.split("-")[1], (match, i) => (
    <div>{match}</div>
  ))
  const childrenDescription = reactStringReplace(children.description, children.description.split(",")[1], (match, i) => (
    <div>{match}</div>
  ))

  return (
    <div className='absolute top-60 w-full flex flex-col items-center'>

      <div className="font-bold text-7xl w-5/12 text-center leading-tight">{childrenTitle}</div>
      <div className="text-xl font-normal text-center mt-2">{childrenDescription}</div>
      <div className="font-bold text-2xl mt-9 min-w-44 px-8 h-14 bg-header-blue rounded-3xl flex justify-center items-center 
  text-light my-auto">{children.getToKnowUsButton}</div>
    </div>
  )
}
