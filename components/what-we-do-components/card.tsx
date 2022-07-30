import Image from 'next/image'
import { Heading } from '../data-components/header-text'
import { Text } from '../data-components/paragraph-text'

export default function Card({
  title,
  text,
  img,
}: {
  title: string
  text: string
  img: string
}) {
  return (
    <div className=" h-90 w-86 rounded-[31px] shadow-4xl mx-3 first:mr-5 last:ml-5 overflow-clip ">
      <div className="flex justify-center items-center bg-card-bg py-16">
        <Image src={img} alt={title} height={128} width={128} />
      </div>
      <div className=" px-5 py-7.1">
        <Heading className="text-header-blue font-bold mb-1">{title}</Heading>
        <Text className="text-lg">{text}</Text>
      </div>
    </div>
  )
}
