import Image from 'next/image'
export default function Card(props: any) {
  return (
    <div className="max-w-sm rounded-3xl shadow-lg">
      <div className="flex justify-center rounded-t-3xl bg-cardbg pt-10 pb-8">
        <Image src={props.path} width={128} height={128} alt="icon" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.text}</p>
      </div>
    </div>
  )
}
