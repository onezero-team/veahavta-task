export const FooterContactItem = ({ link }: { link: any }) => {
  const getImgPath = () => {
    switch (link.linkType) {
      case 'tel':
        return 'phone-icon-contact.svg'
      case 'address':
        return 'address-icon-contact.svg'
      case 'email':
        return 'email-icon-contact.svg'

      default:
        break
    }
  }

  const getImgSize = () => {
    switch (link.linkType) {
      case 'tel':
        return 'w-[20px] h-[20px]'
      case 'address':
        return 'w-[18px] h-[26px]'
      case 'email':
        return 'w-[27px] h-[20px]'

      default:
        break
    }
  }

  const getClass = () => {
    switch (link.linkType) {
      case 'tel':
        return 'w-[133px] sm:w-[260px]'
      case 'address':
        return 'w-[160px]'
      case 'email':
        return ''

      default:
        break
    }
  }

  const getLinkPath = () => {
    if (link.linkType === 'email') {
      return 'mailto:veahavta.clinic@example.com?subject=Subject&body=message%20goes%20here'
    } else if (link.linkType === 'address') {
      return 'https://www.google.com/maps/dir/?api=1&destination=32.815739,34.997805'
    } else if (link.linkType === 'tel') {
      return
    }
  }

  if (!link) return <div></div>
  return (
    <>
      {link.linkType !== 'tel' && (
        <a
          href={getLinkPath()}
          className="footer-contact-item flex flex-row gap-3 cursor-pointer mb-2"
        >
          <div className={`flex items-center justify-center w-[27px]`}>
            <div className={`link-img ${getImgSize()} bg-cover`}></div>
          </div>

          <div className="link-description flex flex-col">
            <span className={`link-text ${getClass()}`}>{link.text}</span>
          </div>
        </a>
      )}

      {link.linkType === 'tel' && (
        <div className="footer-contact-item flex flex-row gap-3 cursor-pointer mb-2 ">
          <div className={`flex items-center justify-center sm:w-[27px]`}>
            <div className={`link-img ${getImgSize()} bg-cover`}></div>
          </div>

          <div className="link-description flex flex-col">
            <a href={'tel:052-1234567'} className={`link-text ${getClass()}`}>
              {link.text.split('/')[0]}
            </a>
            <a href={'tel:052-7654321'} className={`link-text ${getClass()}`}>
              {link.text.split('/')[1]}
            </a>
          </div>
        </div>
      )}
      <style jsx>{`
        div.link-img {
          background-image: url('assets/icons/${getImgPath()}');
        }
      `}</style>
    </>
  )
}
