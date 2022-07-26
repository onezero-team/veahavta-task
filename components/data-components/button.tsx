export const BlueButton = ({
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
      <button
        className={`rounded-full bg-icon-bg w-max font-bold text-center whitespace-nowrap text-white  px-7 pt-2 pb-3 ${className}`}
      >
        {text}
      </button>
      <style jsx>
        {`
          button {
            min-width: 185px;
            hegiht: 60px;
          }
        `}
      </style>
    </>
  )
}
export const WhiteButton = ({
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
      <button
        className={`rounded-full bg-white text-icon-bg border-2 border-icon-bg w-max font-bold text-center whitespace-nowrap  px-7 py-3 ${className}`}
      >
        {text}
      </button>
      <style jsx>
        {`
          button {
            min-width: 128px;
            hegiht: 48px;
          }
        `}
      </style>
    </>
  )
}
