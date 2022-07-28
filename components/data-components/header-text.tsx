export const PageHeader = ({ children }: { children: string }) => {
  return (
    <>
      <h1 className=" text-mobileMainHeader md:text-mainHeader font-bold text-center ">{children}</h1>
     
    </>
  )
}

export const ItemHeader = ({
  children,
  className = '',
}: {
  children: string
  className?: string
}) => <h5 className={` font-bold ${className}`}>{children}</h5>

export const Heading = ({
  children,
  className = '',
}: {
  children: string
  className?: string
}) => {
  return <h3 className={`text-3xl ${className}`}>{children}</h3>
}

export const ContactHeading = ({
  children,
  className = '',
}: {
  children: string
  className?: string
}) => {
  return <h4 className={`text-2xl ${className}`}>{children}</h4>
}
export const FieldsetHeading = ({
  children,
  className = '',
}: {
  children: string
  className?: string
}) => {
  return <h5 className={`text-xl ${className}`}>{children}</h5>
}
