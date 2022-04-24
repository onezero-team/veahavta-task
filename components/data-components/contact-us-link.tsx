export const ContactUsLink = ({ link }: { link: any }) => {
  const getImgSize = () => {
    switch (link.linkType) {
      case 'tel':
        return 'w-[20px] h-[20px]'
      case 'address':
        return 'w-[20px] h-[28px]'
      case 'email':
        return 'w-[27px] h-[20px]'

      default:
        break
    }
  }

  const getLinkTxt = () => {
    if (link.linkType === 'tel') {
      return link.text.replace(/[0-9]/g, '')
    } else {
      return link.text
    }
  }

  const getLinkVal = () => {
    if (link.linkType === 'tel') {
      return link.linkValue.replace(/\+/g, '') + '+'
    } else {
      return link.linkValue
    }
  }

  const getLinkPath = () => {
    if (link.linkType === 'email') {
      return 'mailto:veahavta.clinic@example.com?subject=Subject&body=message%20goes%20here'
    } else if (link.linkType === 'address') {
      return 'https://www.google.com/maps/dir/?api=1&destination=32.815739,34.997805'
    } else if (link.linkType === 'tel') {
      return 'tel:+123456789'
    }
  }

  return (
    <>
      <a
        href={getLinkPath()}
        className={`contact-us-link flex flex-row gap-3 'cursor-pointer'}`}
      >
        <div
          className={`link-img-container bg-header-blue w-[44px] h-[44px] rounded-full flex items-center justify-center bg-no-repeat`}
        >
          <div className={`link-img ${getImgSize()} bg-cover`}></div>
        </div>

        <div className="link-description flex flex-col justify-center rtl:w-[160px] ltr:w-[180px]">
          <span className="link-text">{getLinkTxt()}</span>
          <span className="link-value">{getLinkVal()}</span>
        </div>
      </a>

      <style jsx>{`
        div.link-img {
          background-image: url('assets${link.imagePath}');
        }
      `}</style>
    </>
  )
}
