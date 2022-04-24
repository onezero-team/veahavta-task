export const Button = ({
  className,
  type,
  text,
  isDisabled,
  ...props
}: {
  className?: string
  type?: string
  text?: string
  isDisabled?: boolean
}) => {
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={`${className} leading-9 pointer`}
    >
      {text}
    </button>
  )
}
