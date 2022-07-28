export const BlueButton = ({
  className = 'text-xl_2_5',
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
        className={`rounded-full bg-icon-bg w-max font-bold text-center  text-white  ${className}`}
        {...props}
      >
        {text}
      </button>
      <style jsx>
        {`
          button {
            min-width: 185px;
            height: 60px;
          }
          button:disabled {
            --tw-bg-opacity: 0.2;
          }
        `}
      </style>
    </>
  )
}
export const WhiteButton = ({
  className = '',
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
        className={`rounded-full bg-white text-icon-bg border-2 border-icon-bg w-max font-bold text-center whitespace-nowrap py-3 ${className}`}
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
