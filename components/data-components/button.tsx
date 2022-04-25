export const Button = ({
  className,
  type,
  text,
  ...props
}: {
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  text?: string
}) => {
  return (
    <button type={type} className={`${className}`}>
      {text}
    </button>
  )
}
