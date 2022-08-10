import { HomePageType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { Formik } from 'formik'

export default function ContactUsForm({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <div className="contactUsForm border-box  w-[650px] h-[700px] left-80 top-[2250px] drop-shadow-lg rounded-3xl">
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            lastName: '',
            message: '',
            phone: '',
          }}
          validate={(values) => {
            const errors = {
              email: '',
              firstName: '',
              lastName: '',
              message: '',
              phone: '',
            }
            if (!values.email) {
              errors.email = data.common.contactUsFormErrorEmailMissing
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = data.common.contactUsFormErrorEmailInvalid
            } else if (!values.firstName) {
              errors.firstName = data.common.contactUsFormErrorFirstNameMissing
            } else if (!values.lastName) {
              errors.lastName = data.common.contactUsFormErrorLastNameMissing
            } else if (!values.message) {
              errors.message = data.common.contactUsFormErrorMessageMissing
            } else if (!values.phone) {
              errors.phone = data.common.contactUsFormErrorPhoneMissing
            }

            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(data.common.contactUsFormSuccessMessage)

              setSubmitting(false)
            }, 400)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              className="form flex flex-col justify-center items-center w-full p-4"
              onSubmit={handleSubmit}
            >
              <div className="inputs grid grid-cols-2 w-full">
                <div className="flex flex-col justify-evenly p-5">
                  <label className="font-bold text-[22px]" htmlFor="firstName">
                    {data.common.contactUsFormFirstName}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className="w-full h-14 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-lg mt-2"
                  />
                  {errors.firstName && touched.firstName && errors.firstName}
                </div>
                <div className="flex flex-col justify-evenly p-5">
                  <label className="font-bold text-[22px]" htmlFor="lastName">
                    {data.common.contactUsFormLastName}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className="w-full h-14 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-lg mt-2"
                  />
                  {errors.lastName && touched.lastName && errors.lastName}
                </div>
                <div className="flex flex-col justify-evenly p-5">
                  <label className="font-bold text-[22px]" htmlFor="email">
                    {data.common.contactUsFormEmail}
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="w-full h-14 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-lg mt-2"
                  />
                  {errors.email && touched.email && errors.email}
                </div>
                <div className="flex flex-col justify-evenly p-5">
                  <label className="font-bold text-[22px]" htmlFor="phone">
                    {data.common.contactUsFormPhone}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    className="w-full h-14 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-lg mt-2"
                  />
                  {errors.phone && touched.phone && errors.phone}
                </div>
              </div>
              <div className="textfield flex flex-col justify-evenly p-5">
                <label className="font-bold text-[22px]" htmlFor="message">
                  {data.common.contactUsFormMessage}
                </label>
                <textarea
                  className="textarea w-[580px] h-[145px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-lg mt-2 "
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                {errors.message && touched.message && errors.message}
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'start',
                  marginTop: '30px',
                }}
              >
                <button
                  className="sendButton w-48 h-14 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-3xl mt-2 font-bold text-[28px]"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {data.common.contactUsFormSendButton}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <style jsx>{`
        div.contactUsForm {
          background: #ffffff;
        }
        button.sendButton {
          background: #4e47f9;
          color: #ffffff;
          transition: all 0.3s ease-in-out;
        }
        button.sendButton:hover {
          background: white;
          color: #4e47f9;
          transition: all 0.3s ease-in-out;
        }
        @media screen and (max-width: 768px) {
          div.contactUsForm {
            margin-top: 100px;
            height: 100%;
            width: 80vw;
          }
          div.inputs {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          textarea.textarea {
            width: 63vw;
          }
        }
      `}</style>{' '}
    </WrapperLarge>
  )
}
