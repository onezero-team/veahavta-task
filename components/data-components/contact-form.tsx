import { Common, FormData } from '@/lib/interface'
import React from 'react'
import { Formik, Form } from 'formik'
import FormInput from './form-input'
import { FullButton } from './full-button'

export default function ContactForm({ data }: { data: Common }) {
  const validateData = (values: FormData) => {
    const errors = {} as FormData
    if (!values.firstName) {
      errors.firstName = data.contactUsFormErrorFirstNameMissing
    }
    if (!values.email) {
      errors.email = data.contactUsFormErrorEmailMissing
    } else if (!/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = data.contactUsFormErrorEmailInvalid
    }
    if (!values.lastName) {
      errors.lastName = data.contactUsFormErrorLastNameMissing
    }
    if (!values.phone) {
      errors.phone = data.contactUsFormErrorPhoneMissing
    }
    if (!values.more) {
      errors.more = data.contactUsFormErrorMessageMissing
    }
    if (
      values.phone &&
      !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(values.phone)
    ) {
      errors.phone = data.contactUsFormErrorPhoneInvalid
    }

    return errors
  }
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        more: '',
      }}
      validate={validateData}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        alert('Your submission has been successful')
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ errors, touched }) => (
        <Form className="bg-light rounded-[36px] appearance-none shadow-4xl md:w-10/12 lg:w-2/3 gap-x-4 px-8 lg:grid sm:py-4 sm:mt-16 xs:grid-cols-1 grid-cols-2 lg:px-12 md:py-14 lg:pb-24 lg:pt-12 sm:pb-10 relative z-10">
          <FormInput
            label={data.contactUsFormFirstName}
            name="firstName"
            type="text"
            error={errors.firstName}
            touched={touched.firstName}
          />
          <FormInput
            label={data.contactUsFormLastName}
            name="lastName"
            type="text"
            error={errors.lastName}
            touched={touched.lastName}
          />
          <FormInput
            label={data.contactUsFormEmail}
            name="email"
            type="email"
            error={errors.email}
            touched={touched.email}
          />
          <FormInput
            label={data.contactUsFormPhone}
            name="phone"
            type="phone"
            error={errors.phone}
            touched={touched.phone}
          />
          <FormInput
            label={data.contactUsFormMessage}
            name="more"
            type="text"
            error={errors.more}
            touched={touched.more}
            className="col-span-2"
          />
          <FullButton
            text={data.contactUsFormSendButton}
            className="text-md font-bold mt-4"
            type="submit"
          />
        </Form>
      )}
    </Formik>
  )
}
