export const Button = ({
  className,
  type,
  text,
  ...props
}: {
  className?: string
  type?: string
  text?: string
}) => {
  return (
    <>
    <button className={`rounded-full bg-icon-bg w-max font-bold text-center whitespace-nowrap text-white  px-7 pt-2 pb-3 ${className}`}>
      {text}
    </button>
    <style jsx>
      {`
      button{
        width:185px;
        hegiht:60px;
      }

      `}
    </style>
    </>
  )
}
