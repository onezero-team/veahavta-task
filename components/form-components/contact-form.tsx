import { WrapperLarge } from '../wrapper'
import { BlueButton } from '../data-components/button'

export default function ContactForm() {
  return (
    <>
      <WrapperLarge>
        <form className="contact-form">
          <label htmlFor="firstName">שם פרטי</label>
          <input type="text" id="firstName" name="firstName" />

          <label htmlFor="lastName">שם משפחה</label>
          <input type="text" id="lastName" name="lastName" />

          <label htmlFor="email">מייל</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="phone">טלפון</label>
          <input type="tel" id="phone" name="phone" />

          <label htmlFor="note">מה תרצו לומר לנו</label>
          <textarea id="note" name="note" />

          <BlueButton text="שליחה" />
        </form>
      </WrapperLarge>

      <style jsx>
        {`
          form.contact-form {
            position: absolute;
            height: 700px;
            width: 650px;
            bottom: 115px;
            left: 348px;
            background: #ffffff;
            border: 2px solid #ffffff;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 36px;
          }
        `}
      </style>
    </>
  )
}
