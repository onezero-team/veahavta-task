import Link from 'next/link'

export default function MenuHrefList({
  appLinks,
  className = '',
}: {
  className?: string
  appLinks: Array<{
    text: string
    relativeLink: string
  }>
}) {
  const links = appLinks?.map((page, idx) => (
    <li className={className} key={idx}>
      <Link href={page.relativeLink ? page.relativeLink : '/'}>
        {page.text}
      </Link>
    </li>
  ))

  return <>{links}</>
}
