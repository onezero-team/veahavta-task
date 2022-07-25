export const Button = ({
  className,
  type,
  text,
  ...props
}: {
  className?: string
  type?: string
  text?: string
}) => {
  return <button className={`rounded-full bg-icon-bg w-max text-xl font-bold text-center text-white px-7 pt-2 pb-3 ${className}`}>{text}</button>
}
