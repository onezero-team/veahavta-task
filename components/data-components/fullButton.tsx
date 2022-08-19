import { Button } from "./button"

export const FullButton = ({
    className,
    text,
    ...props
  }: {
    className?: string
    text?: string
  }) => {
    return <button className={`min-w-[185px] h-[60px] bg-accent-purple rounded-[51px] text-light ${className}`}>{text}</button>
  }