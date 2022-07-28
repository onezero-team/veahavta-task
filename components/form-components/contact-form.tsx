import { WrapperLarge } from '../wrapper'
import { BlueButton } from '../data-components/button'
import { Common } from '@/lib/interface'
import { Formik, Field } from 'formik'
import { InputTextField, TextAreaField } from './input-field'
import { object } from 'yup'

interface Values {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}
interface Errors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

export default function ContactForm({ data }: { data: Common }) {
  const emailRegex = new RegExp(
    '^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$',
  )
  const phoneRegex = new RegExp('^[0][1-9]{1,2}[-]{0,1}[0-9]{7}$')
  return (
    <>
      <Formik<Values>
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        }}
        validate={(values) => {
          let errors: Errors = {}
          if (!values.firstName) {
            errors.firstName = data.contactUsFormErrorFirstNameMissing
          }
          if (!values.lastName) {
            errors.lastName = data.contactUsFormErrorLastNameMissing
          }
          if (!values.email) {
            errors.email = data.contactUsFormErrorEmailMissing
          } else if (!emailRegex.test(values.email)) {
            errors.email = data.contactUsFormErrorEmailInvalid
          }
          if (!values.phone) {
            errors.phone = data.contactUsFormErrorPhoneMissing
          } else if (!phoneRegex.test(values.phone)) {
            errors.phone = data.contactUsFormErrorPhoneInvalid
          }
          if (!values.message) {
            errors.message = data.contactUsFormErrorMessageMissing
          }
          return errors
        }}
        onSubmit={(values, { resetForm }) => {
          console.log({ values }), resetForm()
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          touched,
          errors,
        }) => (
          <form className="contact-form" onSubmit={handleSubmit}>
            <WrapperLarge className=" grid-cols-1fr-1fr mt-12 mx-6 relative">
              <fieldset className="my-3 mx-4 ">
                <Field
                  name="firstName"
                  label={data.contactUsFormFirstName}
                  component={InputTextField}
                />
                {touched.firstName && errors.firstName && (
                  <p className="font-bold text-red">{errors.firstName}</p>
                )}
              </fieldset>
              <fieldset className="my-3 mx-4 ">
                <Field
                  name="lastName"
                  label={data.contactUsFormLastName}
                  component={InputTextField}
                />
                {touched.lastName && errors.lastName && (
                  <p className="font-bold text-red">{errors.lastName}</p>
                )}
              </fieldset>
              <fieldset className="my-3 mx-4 ">
                <Field
                  name="email"
                  label={data.contactUsFormEmail}
                  component={InputTextField}
                />
                {touched.email && errors.email && (
                  <p className="font-bold text-red">{errors.email}</p>
                )}
              </fieldset>
              <fieldset className="my-3 mx-4 ">
                <Field
                  name="phone"
                  label={data.contactUsFormPhone}
                  component={InputTextField}
                />
                {touched.phone && errors.phone && (
                  <p className="font-bold text-red">{errors.phone}</p>
                )}
              </fieldset>
              <fieldset className="my-3 mx-4 col-span-2 ">
                <Field
                  name="message"
                  label={data.contactUsFormMessage}
                  component={TextAreaField}
                />
                {touched.message && errors.message && (
                  <p className="font-bold text-red">{errors.message}</p>
                )}
              </fieldset>
              <BlueButton
                text={data.contactUsFormSendButton}
                disabled={Object.keys(errors).length}
                className="mx-4 my-5"
                type="submit"
              />
            </WrapperLarge>
          </form>
        )}
      </Formik>

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
