import { WrapperLarge } from '../wrapper'
import { BlueButton } from '../data-components/text-button'
import { Common } from '@/lib/interface'
import { Formik, Field } from 'formik'
import { InputTextField, TextAreaField } from './input-field'
import { useLocale } from '@/lib/hooks'

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
const emailRegex = new RegExp(
  '^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$',
)
const phoneRegex = new RegExp('^[0][1-9]{1,2}[-]{0,1}[0-9]{7}$')

export default function ContactForm({ data }: { data: Common }) {
  const { dir } = useLocale()
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
        onSubmit={(values, { resetForm, setSubmitting, setStatus }) => {
          setSubmitting(true)
          console.log('values to send : ', values)
          resetForm()
          setStatus({ success: true })
          setSubmitting(false)
        }}
        OnBlur={(setStatus) => {
          setStatus({})
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          touched,
          errors,
          status,
        }) => (
          <form
            className={`${
              dir === 'rtl'
                ? 'xl:left-auto xl:right-formSpace'
                : ' xl:left-formSpace xl:right-auto'
            } 
          sm:w-fit sm:h-formMinHight sm:bottom-formBottom absolute left-0 shadow-4xl bottom-9 w-mobileForm
           mx-5 z-10 px-10 border-2 border-white rounded-[36px] bg-white`}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:grid sm:grid-cols-1fr-1fr mt-12 mx-6 relative">
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
              {status?.success && (
                <p className="font-bold">{data.contactUsFormSuccessMessage}</p>
              )}
            </div>
          </form>
        )}
      </Formik>
      {/* 
      <style jsx>
        {`
          form.contact-form {
            position: absolute;
            min-height: 700px;
            width: 650px;
            bottom: 115px;
            right: ${dir === 'rtl' ? '922px' : 'auto'};
            left: ${dir === 'ltr' ? '922px' : 'auto'};
            background: #ffffff;
            border: 2px solid #ffffff;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 36px;
          }
        `}
      </style> */}
    </>
  )
}
