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
  console.log('text:', text)

  return (
    <button
      className={`${className} bg-icon-bg hover:bg-blue text-white font-bold text-xl rounded-full px-7 py-2 leading-9 pointer`}
    >
      {text}
    </button>
  )
}
