import { HomePageType } from '@/lib/interface'
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import Spinner from '@/components/icons/spinner'

interface FormValues {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

const validEmail = new RegExp('^[\\w\\-.]+@([\\w-]+.)+[\\w-]{2,4}$')
const validPhone = new RegExp(
  '^\\+?(972|0)(-)?0?(([23489]{1}\\d{7})|[5]{1}\\d{8})$',
)
const getErrorMessage = (
  value: string,
  validateObj: RegExp,
  requiredErrorMessage: string,
  invalidErrorMessage: string,
) => {
  if (!value) {
    return requiredErrorMessage
  } else if (!validateObj.test(value)) {
    return invalidErrorMessage
  }

  return ''
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
}

export default function ContactUsForm({ data }: HomePageType) {
  const [showSuccessMessage, setShowSuccessMessage] = useState<string>('')
  const onSubmit = async (
    values: FormValues,
    submitProps: FormikHelpers<FormValues>,
  ) => {
    console.log('Sending values to backend', values)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setShowSuccessMessage(data.common.contactUsFormSuccessMessage)
    submitProps.resetForm()
  }

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {}
    const { firstName, lastName, email, phone, message } = values

    const {
      contactUsFormErrorFirstNameMissing,
      contactUsFormErrorLastNameMissing,
      contactUsFormErrorEmailMissing,
      contactUsFormErrorEmailInvalid,
      contactUsFormErrorPhoneMissing,
      contactUsFormErrorPhoneInvalid,
      contactUsFormErrorMessageMissing,
    } = data.common

    if (!firstName) {
      errors.firstName = contactUsFormErrorFirstNameMissing
    }

    if (!lastName) {
      errors.lastName = contactUsFormErrorLastNameMissing
    }

    if (!message) {
      errors.message = contactUsFormErrorMessageMissing
    }

    const emailErrorMessage = getErrorMessage(
      email,
      validEmail,
      contactUsFormErrorEmailMissing,
      contactUsFormErrorEmailInvalid,
    )

    if (emailErrorMessage) {
      errors.email = emailErrorMessage
    }

    const phoneErrorMessage = getErrorMessage(
      phone,
      validPhone,
      contactUsFormErrorPhoneMissing,
      contactUsFormErrorPhoneInvalid,
    )

    if (phoneErrorMessage) {
      errors.phone = phoneErrorMessage
    }

    return errors
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="grid md:grid-cols-2 max-w-xs md:max-w-2xl mx-auto gap-y-4 md:gap-y-6 p-8 md:pt-16 rounded-3xl shadow-2xl border-2 border-brown-bg bg-light">
            <div className="flex flex-col gap-y-1">
              <label className="font-bold text-2xl mb-3" htmlFor="firstName">
                {data.common.contactUsFormFirstName}
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="w-64 h-14 rounded-lg shadow-md border-1 border-brown-bg px-4 py-2"
              />
              <div className="text-red font-semibold">
                <ErrorMessage name="firstName" />
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="font-bold text-2xl mb-3" htmlFor="lastName">
                {data.common.contactUsFormLastName}
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="w-64 h-14 rounded-lg shadow-md border-1 border-brown-bg px-4 py-2"
              />
              <div className="text-red font-semibold">
                <ErrorMessage name="lastName" />
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="font-bold text-2xl mb-3" htmlFor="email">
                {data.common.contactUsFormEmail}
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-64 h-14 rounded-lg shadow-md border-1 border-brown-bg px-4 py-2"
              />
              <div className="text-red font-semibold">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="font-bold text-2xl mb-3" htmlFor="phone">
                {data.common.contactUsFormPhone}
              </label>
              <Field
                type="phone"
                id="phone"
                name="phone"
                className="w-64 h-14 rounded-lg shadow-md border-1 border-brown-bg px-4 py-2"
              />
              <div className="text-red font-semibold">
                <ErrorMessage name="phone" />
              </div>
            </div>

            <div className="flex flex-col gap-y-1 md:col-span-2">
              <label className="font-bold text-2xl mb-3" htmlFor="message">
                {data.common.contactUsFormMessage}
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className="w-64 h-32 md:h-36 md:w-11/12 rounded-lg shadow-md border-1 border-brown-bg px-4 py-2"
              />
              <div className="text-red font-semibold">
                <ErrorMessage name="message" />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 md:col-span-2">
              {!isSubmitting ? (
                <button
                  type="submit"
                  className="bg-icon-bg text-light rounded-3xl text-2xl font-bold w-48 h-16 mt-8 hover:scale-110"
                >
                  {data.common.contactUsFormSendButton}
                </button>
              ) : (
                <>
                  <span className="text-header-blue flex justify-center items-center">
                    <Spinner />
                  </span>
                  <span className="sr-only">Loading...</span>
                </>
              )}

              <p className="text-2xl text-success font-bold">
                {showSuccessMessage}
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
