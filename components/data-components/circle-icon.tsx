import Image from "next/image"

export const CircleImage = ({
  src,
  className,
}: {
  src: string
  className?: string
}) => {
  return(
  <>
  <div className="CircleImage rounded-full bg-icon-bg w-max text-center p-2">
    <Image
      src={src}
      width={26}
      height={26}
      className={`${className}`}
    />
  </div>
  <style jsx>
    {`div.CircleImage{
      height:44px;
      width:44px;
    }
    `}
  </style>
  </>
  )
}

