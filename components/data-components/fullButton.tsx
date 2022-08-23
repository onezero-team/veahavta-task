import { Button } from './button'

export const FullButton = ({
  className,
  text,
  type,
  ...props
}: {
  className?: string
  text?: string
  type?: string
}) => {
  return (
    <button
      
      className={`min-w-[185px] h-[60px] bg-accent-purple rounded-[51px] px-[30px] text-light ${className}`}
    >
      {text}
    </button>
  )
}
