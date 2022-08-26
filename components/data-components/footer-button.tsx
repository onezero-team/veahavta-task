export const FooterButton = ({
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
      className={`w-min-32 text-sm-paragraph font-bold leading-none rounded-[34px] text-accent-purple border-solid border-2 border-accent-purple px-6 py-3.5 mb-2.5 ${className}`}
    >
      {text}
    </button>
  )
}
