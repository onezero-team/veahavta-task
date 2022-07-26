export const BaseTextarea = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  return <p className={`text-base${className} `}>{children}</p>
}
export const Textarea = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  return <p className={`text-lg pb-8 ${className} `}>{children}</p>
}
export const ContextText = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  return <p className={`text-xl pb-8 ${className} `}>{children}</p>
}
