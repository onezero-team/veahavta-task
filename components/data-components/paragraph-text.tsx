import { ReactElement } from 'react'

export const Text = ({
  children,
  className = 'text-base',
}: {
  children: string | ReactElement
  className?: string
}) => {
  return <p className={className}>{children}</p>
}
