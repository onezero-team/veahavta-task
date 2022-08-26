import { appLinks } from '@/lib/interface'

export default function AppLinks({
  data,
  className,
}: {
  data: appLinks
  className?: string
}) {
  return (
    <li className={className}>
      <a href={`/${data.relativeLink}`} className="duration-500">
        {data.text}
      </a>
    </li>
  )
}
