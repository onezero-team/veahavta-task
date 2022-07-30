import { ReactElement } from 'react'

export const BaseTextarea = ({
  children,
  className = '',
}: {
  children: string | ReactElement
  className?: string
}) => {
  return <p className={`text-base ${className} `}>{children}</p>
}
export const Textarea = ({
  children,
  className = '',
}: {
  children: string
  className?: string
}) => {
  return <p className={`text-lg ${className} `}>{children}</p>
}
export const ContextText = ({
  children,
  className = '',
}: {
  children: string | ReactElement
  className?: string
}) => {
  return <p className={`text-xl ${className} `}>{children}</p>
}
