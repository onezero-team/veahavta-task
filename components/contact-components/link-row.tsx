import { ReducedContactLinks } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { CircleIcon } from '../data-components/circle-icon'
import { Text } from '../data-components/paragraph-text'

export default function LinkRow({
  reduce,
  type,
}: {
  reduce: ReducedContactLinks
  type: 'tel' | 'address' | 'email'
}) {
  const map = reduce[type].map((link, idx) => {
    return (
      <Text key={idx}>
        <a
          href={`${link.linkType !== 'email' ? link.linkType : 'mailto'}:${
            link.linkType === 'tel' ? link.linkValue : link.text
          }`}
        >
          {link.text}
        </a>
      </Text>
    )
  })

  return (
    <>
      <CircleIcon src={`/icons/blue-${type}-icon.svg`} alt={type} />
      <WrapperLarge className="">{map}</WrapperLarge>
    </>
  )
}
