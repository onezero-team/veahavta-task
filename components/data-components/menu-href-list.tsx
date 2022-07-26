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
    <>
      <li className={`NavLink ${className}`} key={idx}>
        <Link href={page.relativeLink}>{page.text}</Link>
      </li>
      <style jsx>
        {`
          li.NavLink {
            font-size: 28px;
          }
        `}
      </style>
    </>
  ))

  return <>{links}</>
}
