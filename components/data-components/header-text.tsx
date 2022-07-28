export const PageHeader = ({ children }: { children: string }) => {
  return (
    <>
      <h1 className=" text-mobileMainHeader md:text-mainHeader font-bold text-center ">
        {children}
      </h1>
    </>
  )
}
export const ServicesHeader = ({ children }: { children: string }) => {
  return (
    <>
      <h1 className="hidden text-mainHeader font-bold text-center md:inline">
        {children}
      </h1>
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
  return <h3 className={`text-xl_1_5 sm:text-xl_2_5 ${className}`}>{children}</h3>
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
  return <h5 className={`text-xl_1_5 ${className}`}>{children}</h5>
}
