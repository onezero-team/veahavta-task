import { ReactNode } from 'react'
import { string } from 'yup'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-md">{children}</div>
}

export function WrapperLarge({
  children,
  id,
  className = '',
}: {
  children: React.ReactNode
  id?: string
  className?: string
}) {
  return (
    <section id={id} className={`grid ${className}`}>
      {children}
    </section>
  )
}
