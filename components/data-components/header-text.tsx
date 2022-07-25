export const PageHeader = ({ children }: { children: string }) => {
  return <h1 className=" font-bold text-6xl text-center ">{children}</h1>
}

export const ItemHeader = ({ children }: { children: string }) => {
  return <h2 className=" font-bold text-6xl mb-16">{children}</h2>
}
export const Heading = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  return <h3 className={`text-3xl ${className}`}>{children}</h3>
}
