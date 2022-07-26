export const PageHeader = ({ children }: { children: string }) => {
  return <h1 className=" font-bold text-7xl text-center ">{children}</h1>
}

export const ItemHeader = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  return <h2 className={` font-bold ${className}`}>{children}</h2>
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

export const ContactHeading = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  return <h3 className={`text-2xl ${className}`}>{children}</h3>
}
