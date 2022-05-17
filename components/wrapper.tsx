import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-md">{children}</div>
}

export function WrapperLarge({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <section className={`grid md:px-12 lg:px-28 px-6 py-6 md:py-6 lg:py-10 xl:px-28 xl:py-16 mx-auto  ${className}`}>{children}</section>
}
