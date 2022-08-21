import { Homepage } from '@/lib/interface'
import { FullButton } from './fullButton'

export const AboutText = ({ children }: { children: Homepage }) => {
  return (
    <div className="flex flex-col pt-10 px-[90px] md:px-[30px]">
      <h3 className="text-accent-purple text-md">{children.aboutHeading}</h3>
      <h2 className="text-xl font-bold">{children.aboutTitle}</h2>
      <p className="text-paragraph mt-[52px]">{children.aboutUsText}</p>
      <FullButton
        className="mt-8 text-md font-bold self-start"
        text={children.aboutUsButton}
      ></FullButton>
    </div>
  )
}
