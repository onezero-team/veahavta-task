export const PageHeader = ({
  children,
  className,
}: {
  children: String
  className?: String
}) => {
  return (
    <h1
      className={`w-full font-bold text-2xl text-center xs:text-2xl-mobile xs:-mt-24 ${className}`}
    >
      {children}
    </h1>
  )
}
