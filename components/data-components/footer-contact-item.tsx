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
        return 'w-[260px]'
      case 'address':
        return 'w-[160px]'
      case 'email':
        return ''

      default:
        break
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
          className={`flex items-center justify-center w-[27px] ${
            link.linkType === 'email' ? 'cursor-pointer' : ''
          }`}
          onClick={onLinkClick}
        >
          <div className={`link-img ${getImgSize()} bg-cover`}></div>
        </div>

        <div className="link-description flex flex-col">
          <span className={`link-text ${getClass()}`}>{link.text}</span>
        </div>
      </div>

      <style jsx>{`
        div.link-img {
          background-image: url('assets/icons/${getImgPath()}');
        }
      `}</style>
    </>
  )
}