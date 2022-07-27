export const PageHeader = ({ children }: { children: string }) => {
  return (
    <>
      <h1 className="PageHeader font-bold text-center ">{children}</h1>
      <style jsx>
        {`
          h1.PageHeader {
            font-size: 82px;
            line-height: 107px;
          }
        `}
      </style>
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
  return <h3 className={`text-2xl ${className}`}>{children}</h3>
}
export const FooterHeading = ({
  children,
  className = '',
}: {
  children: string
  className?: string
}) => {
  return <h3 className={`text-xl ${className}`}>{children}</h3>
}
