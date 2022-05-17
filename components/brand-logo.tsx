import Image from 'next/image'
export default function BrandLogo() {
  return (
    <Image
      src="/brand-logo.svg"
      height={'62px'}
      width={'142px'}
      alt="Brand logo"
    />
  )
}
