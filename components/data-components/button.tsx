export const Button = ({
  className,
  type,
  text,
  onClick,
  children,
  ...props
}: {
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  text?: string
  onClick?: Function
  children?: JSX.Element | JSX.Element[]
}) => {
  return (
    <button
      type={type}
      onClick={() => onClick && onClick()}
      className={`${className} transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
    `}
    >
      {children || text}
    </button>
  )
}
