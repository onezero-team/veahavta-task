import { HomePageType } from '@/lib/interface'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { Button } from '../data-components/button'
// import { ContactFormField } from '../data-components/contact-form-field'

export const ContactForm = ({ data }: HomePageType) => {
  console.log('ContactForm => data', data)
  const [formFieldValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isInputValid, setIsInputValid] = useState(false)
  const [isSubmitMsg, setIsSubmitMsg] = useState(false)

  {
    /* Dynamically render a component if time permits */
  }
  // const formFields = [
  //   { fieldType: 'firstname', label: data.common.contactUsFormFirstName },
  //   { fieldType: 'lastname', label: data.common.contactUsFormLastName },
  //   { fieldType: 'email', label: data.common.contactUsFormFirstName },
  //   { fieldType: 'phone', label: data.common.contactUsFormEmail },
  //   { fieldType: 'message', label: data.common.contactUsFormPhone },
  // ]

  const onSubmit = (values: any) => {
    setIsSubmitMsg(true)
  }

  // contactUsFormSuccessMessage: 'קיבלנו את ההודעה! בקרוב ניצור קשר'

  const validate = async (values: any) => {
    const errors: any = {}
    console.log('values:', values)

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
      <div className="contact-form w-[650px] h-[700px] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[31px] bg-white relative">
        <Formik
          enableReinitialize={true}
          initialValues={formFieldValues}
          validate={validate}
          onSubmit={onSubmit}
          validateOnChange={false}
          validateOnBlur={true}
        >
          <Form className="">
            {/* <div className="errors">
              
            </div> */}

            <div className="fields-container grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-6 pt-14 px-12">
              {/* Dynamically render a component if time permits */}
              {/* {formFields.map((formField, idx) => {
                return (
                  <ContactFormField
                    key={`form-field-${idx}`}
                    fieldData={formField}
                  />
                )
              })} */}

              <div className="flex flex-col">
                <label htmlFor="firstname" className="text-2xl font-bold pb-3">
                  {data.common.contactUsFormFirstName}
                </label>
                <Field
                  type="firstname"
                  name="firstname"
                  id="firstname"
                  autoFocus
                  className="form-field w-64 h-14 rounded-lg drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] px-4 font-bold text-xl text-input-txt"
                />
                <ErrorMessage
                  name="firstname"
                  component="p"
                  className="text-red pt-2 text-xl rtl:pr-2 ltr:pl-2"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastname" className="text-2xl font-bold pb-3">
                  {data.common.contactUsFormLastName}
                </label>
                <Field
                  type="lastname"
                  name="lastname"
                  id="lastname"
                  className="form-field w-64 h-14 rounded-lg drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] px-4 font-bold text-xl text-input-txt"
                />
                <ErrorMessage
                  name="lastname"
                  component="p"
                  className="text-red pt-2 text-xl rtl:pr-2 ltr:pl-2"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-2xl font-bold pb-3">
                  {data.common.contactUsFormEmail}
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="form-field w-64 h-14 rounded-lg drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] px-4 font-bold text-xl text-input-txt"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red pt-2 text-xl rtl:pr-2 ltr:pl-2"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-2xl font-bold pb-3">
                  {data.common.contactUsFormPhone}
                </label>
                <Field
                  type="phone"
                  name="phone"
                  id="phone"
                  className="form-field w-64 h-14 rounded-lg drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] px-4 font-bold text-xl text-input-txt"
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red pt-2 text-xl rtl:pr-2 ltr:pl-2"
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label htmlFor="message" className="text-2xl font-bold pb-3">
                  {data.common.contactUsFormMessage}
                </label>
                <Field
                  as="textarea"
                  type="message"
                  name="message"
                  id="message"
                  className="form-field w-[550px] h-[145px] rounded-lg drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] px-4 py-4 font-bold text-xl text-input-txt resize-none "
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red pt-2 text-xl rtl:pr-2 ltr:pl-2"
                />
              </div>

              <Button
                text={data.common.contactUsFormSendButton}
                className={
                  'my-9 bg-icon-bg hover:bg-blue text-white font-bold px-14 py-2 rounded-full mb-0 mt-2 w-fit text-2xl'
                }
              ></Button>

              {isInputValid && isSubmitMsg && (
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
