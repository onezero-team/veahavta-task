import { Homepage } from '@/lib/interface'
import { FullButton } from './fullButton'

export const PageHeader = ({ children }: { children: Homepage }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="w-[700px] h-[200px] font-bold text-xxl text-center min-md:mt-[164px]">
        {children.title}
      </h1>
      <p className="w-[520px] text-center text-md">{children.description}</p>
      <FullButton
        className="mt-[40px] text-md font-bold"
        text={children.getToKnowUsButton}
      ></FullButton>
    </div>
  )
}
