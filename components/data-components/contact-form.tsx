import { HomePageType } from '@/lib/interface'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { Button } from '../data-components/button'

export const ContactForm = ({ data }: HomePageType) => {
  const [formFieldValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isInputValid, setIsInputValid] = useState(false)
  const [isSubmitMsgShown, setIsSubmitMsgShown] = useState(false)

  const onSubmit = (values: any, actions: any) => {
    setIsSubmitMsgShown(true)
    actions.resetForm()
  }

  const validate = async (values: any) => {
    const errors: any = {}

    if (values.firstname === '') {
      errors.firstname = `*${data.common.contactUsFormErrorFirstNameMissing}`
    }

    if (values.lastname === '') {
      errors.lastname = `*${data.common.contactUsFormErrorLastNameMissing}`
    }

    if (values.email === '') {
      errors.email = `*${data.common.contactUsFormErrorEmailMissing}`
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = `*${data.common.contactUsFormErrorEmailInvalid}`
    }

    if (values.phone === '') {
      errors.phone = `*${data.common.contactUsFormErrorPhoneMissing}`
    } else if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
        values.phone,
      )
    ) {
      errors.phone = `*${data.common.contactUsFormErrorPhoneInvalid}`
    }

    if (values.message === '') {
      errors.message = `*${data.common.contactUsFormErrorMessageMissing}`
    }

    if (Object.keys(errors).length === 0) setIsInputValid(true)
    else setIsInputValid(false)

    return errors
  }

  return (
    <>
      <div
        id="contact-us"
        className="contact-form w-[365px] sm:w-[650px] h-fit shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[31px] bg-white relative"
      >
        <Formik
          enableReinitialize={true}
          initialValues={formFieldValues}
          validate={validate}
          onSubmit={onSubmit}
          validateOnChange={true}
          validateOnBlur={true}
        >
          <Form className="">
            <div className="fields-container grid grid-flow-col-dense grid-rows-6-auto sm:grid-flow-row sm:grid-cols-2 sm:grid-rows-2 gap-y-2 sm:gap-x-8 sm:gap-y-5 pt-7 px-7 sm:pt-14 sm:px-12 h-fit">
              <div className="flex flex-col h-fit">
                <label
                  htmlFor="firstname"
                  className="text-xl sm:text-2xl font-bold pb-3"
                >
                  {data.common.contactUsFormFirstName}
                </label>
                <Field
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoFocus
                  className="form-field w-64 h-10 sm:h-14 rounded-lg drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] px-4 font-bold text-xl text-input-txt"
                />
                <ErrorMessage
                  name="firstname"
                  component="p"
                  className="text-red pt-2 text-xl rtl:pr-2 ltr:pl-2"
                />
              </div>

              <div className="flex flex-col h-fit">
                <label
                  htmlFor="lastname"
                  className="text-xl sm:text-2xl font-bold pb-3"
                >
                  {data.common.contactUsFormLastName}
                </label>
                <Field
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-field w-64 h-10 sm:h-14 rounded-lg drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] px-4 font-bold text-xl text-input-txt"
                />
                <ErrorMessage
                  name="lastname"
                  component="p"
                  className="text-red pt-2 text-xl rtl:pr-2 ltr:pl-2"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-xl sm:text-2xl font-bold pb-3"
                >
                  {data.common.contactUsFormEmail}
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="form-field w-64 h-10 sm:h-14 rounded-lg drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] px-4 font-bold text-xl text-input-txt"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red pt-2 text-xl rtl:pr-2 ltr:pl-2"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-xl sm:text-2xl font-bold pb-3"
                >
                  {data.common.contactUsFormPhone}
                </label>
                <Field
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-field w-64 h-10 sm:h-14 rounded-lg drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] px-4 font-bold text-xl text-input-txt"
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red pt-2 text-xl rtl:pr-2 ltr:pl-2"
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label
                  htmlFor="message"
                  className="text-xl sm:text-2xl font-bold pb-3"
                >
                  {data.common.contactUsFormMessage}
                </label>
                <Field
                  as="textarea"
                  type="text"
                  name="message"
                  id="message"
                  className="form-field w-[320px] sm:w-[550px] sm:h-[145px] rounded-lg drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] px-4 py-4 font-bold text-xl text-input-txt resize-none "
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red pt-2 text-xl rtl:pr-2 ltr:pl-2"
                />
              </div>

              <Button
                text={data.common.contactUsFormSendButton}
                className={` text-white font-bold px-14 py-1 sm:py-2 rounded-full my-4 sm:mt-6 sm:mb-12 w-fit text-2xl ${
                  isInputValid ? 'bg-icon-bg hover:bg-blue' : 'bg-input-txt'
                }`}
                isDisabled={!isInputValid}
              ></Button>

              {isInputValid && isSubmitMsgShown && (
                <div className="submit-message absolute inset-x-2/4 translate-x-2/4 translate-y-2/4 bg-success font-bold text-2xl flex items-center justify-center p-3 text-center rounded-lg w-[260px] h-[260px]">
                  <h1 className="">
                    {data.common.contactUsFormSuccessMessage}
                  </h1>
                </div>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </>
  )
}
