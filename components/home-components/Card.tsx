import Image from "next/image"
import { Heading } from "../data-components/header-text"
import { Textarea } from "../data-components/content-text"

export default function Card({ title, text, img }: {
    title: string
    text: string
    img: string
}) {
    console.log(img)
    return (
        <>
            <div className='card  overflow-clip '>
                <div className="flex justify-center items-center bg-card-bg py-16">
                    <Image
                        src={img}
                        height={128}
                        width={128}
                    />
                </div>
                <div className=" px-5 py-7">
                    <Heading className="text-header-blue font-bold mb-1">{title}</Heading>
                    <Textarea >{text}</Textarea>
                </div>
            </div>
            <style jsx>
                {`div.card{
                height:480px;
                width:330px;
                border-radius:31px;
                box-shadow: 0px 0px 4px 0px #00000040;

            }
                
            `}
            </style>
        </>
    )
}
