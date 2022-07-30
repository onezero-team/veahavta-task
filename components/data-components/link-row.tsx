import { ReducedContactLinks } from "@/lib/interface"
import { WrapperLarge } from "../wrapper"
import { CircleIcon } from "./circle-icon"
import { BaseTextarea } from "./content-text"


export default function LinkRow({ reduce, type }: { reduce: ReducedContactLinks, type: 'tel' | 'address' | 'email' }) {

    const map = reduce[type].map((link, idx) => {
        return (
            <BaseTextarea key={idx}>
                <a  href={`${link.linkType !== 'email' ? link.linkType : 'mailto'}:${link.linkType === 'tel' ? link.linkValue : link.text}`}>
                    {link.text}
                </a>
            </BaseTextarea>
        )
    })

    return (
        <>
            <CircleIcon
                src={`/icons/blue-${type}-icon.svg`}
                alt={type}
            />
            <WrapperLarge className=" mr-4">
                {map}

            </WrapperLarge>
        </>


    )
}

