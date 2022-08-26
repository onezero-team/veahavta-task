import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-md">{children}</div>
}

export function WrapperLarge({
  children,
  className = '',
  id = '',
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`grid sm:px-5 ${className}`}>
      {children}
    </section>
  )
}
