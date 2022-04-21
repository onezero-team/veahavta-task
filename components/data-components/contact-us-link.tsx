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

  const onLinkClick = () => {
    if (link.linkType === 'email') {
      //For Gmail (user has to be signed in to google)
      window.location.href =
        'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=veahavta.clinic@gmail.com&su="Website%20message"'

      //For default email client
      // window.location.href =
      //   'mailto:veahavta.clinic@example.com?subject=Subject&body=message%20goes%20here'
    }
  }

  return (
    <>
      <div className="contact-us-link flex flex-row gap-3">
        <div
          className={`link-img-container bg-header-blue w-[44px] h-[44px] rounded-full flex items-center justify-center bg-no-repeat ${
            link.linkType === 'email' ? 'cursor-pointer' : ''
          }`}
          onClick={onLinkClick}
        >
          <div className={`link-img ${getImgSize()} bg-cover`}></div>
        </div>

        <div className="link-description flex flex-col justify-center rtl:w-[160px] ltr:w-[180px]">
          <span className="link-text">{getLinkTxt()}</span>
          <span className="link-value">{getLinkVal()}</span>
        </div>
      </div>

      <style jsx>{`
        div.link-img {
          background-image: url('assets${link.imagePath}');
        }
      `}</style>
    </>
  )
}