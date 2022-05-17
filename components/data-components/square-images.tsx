import Image from 'next/image'

export default function SquareImages() {
  return (
    <div className="hidden md:block max-h-full max-w-full">
      <SquareImage
        width="315"
        height="380"
        path="/faces/face-6.svg"
        classes="right-[93px] top-[50px]"
      />
      <SquareImage
        width="315"
        height="380"
        path="/faces/face-7.svg"
        classes="right-[-80px] top-[265px]"
      />
      <SquareImage
        width="315"
        height="380"
        path="/faces/face-5.svg"
        classes="right-[280px] top-[60%]"
      />

      <SquareImage
        width="315"
        height="380"
        path="/faces/face-4.svg"
        classes="left-[37%] top-[-20%]"
      />
      <SquareImage
        width="315"
        height="380"
        path="/faces/face-3.svg"
        classes="left-[20%] top-[60%]"
      />
      <SquareImage
        width="315"
        height="380"
        path="/faces/face-2.svg"
        classes="left-[10%]"
      />
      <SquareImage
        width="315"
        height="380"
        path="/faces/face-1.svg"
        classes="left-[-1%]  top-[40%]"
      />
    </div>
  )
}

// can be exported later
const SquareImage = ({
  width,
  height,
  path,
  classes,
}: {
  width: string
  height: string
  path: string
  classes: string
}) => (
  <div className={`absolute ${classes}`}>
    <Image src={path} width={width} height={height} />
  </div>
)
