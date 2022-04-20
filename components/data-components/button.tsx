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
  return (
    <button type="submit" className={`${className} leading-9 pointer`}>
      {text}
    </button>
  )
}
