import React, { useState } from 'react'
import { Formik, FormikHelpers, Form, Field } from 'formik'
import { Iform, Values } from '@/lib/interface'
import * as Yup from 'yup'

function ContactUsForm({ data }: Iform) {
  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    text: '',
    tel: 0,
  }
  function onSendData(setSubmitting: Function, values: Values) {
    setTimeout(() => {
      const { name, lastName, email, text, tel } = values
      alert(
        `name: ${name} \n lastname: ${lastName} \n email: ${email} \n phone: ${tel} \n text: ${text}
          \n                                     ${data.contactUsFormSuccessMessage}`,
      )
      setSubmitting(false)
    }, 500)
  }

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required(`${data.contactUsFormErrorFirstNameMissing}`),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required(`${data.contactUsFormErrorLastNameMissing}`),
    email: Yup.string()
      .email(`${data.contactUsFormErrorEmailInvalid}`)
      .required(`${data.contactUsFormErrorEmailMissing}`),
    tel: Yup.string()
      .min(9, data.contactUsFormErrorPhoneInvalid)
      .max(10, data.contactUsFormErrorPhoneInvalid)
      .required(data.contactUsFormErrorPhoneMissing),
    text: Yup.string().required(data.contactUsFormErrorMessageMissing),
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={(
        values: Values,
        { setSubmitting, resetForm }: FormikHelpers<Values>,
      ) => {
        onSendData(setSubmitting, values)
        resetForm()
      }}
    >
      {({ errors, touched }) => (
        <Form
          className="relative  min-h-100  border-2 border-light rounded-xl
    w-110 right-36 bottom-20 flex flex-col bg-light p-4 shadow-4xl text-xl 
    mobile:static mobile:w-full mobile:max-w-sm  mobile:p-4 z-40 mobile:self-center
      md:static sm:static mobile:h-150 
    "
        >
          <div
            className="flex flex-wrap justify-between gap-4 h-full items-center z-40
       mobile:flex-col mobile:items-center mobile:w-full mobile:gap-1  "
          >
            <div className=" flex flex-col w-3/7 gap-2 mobile:w-full z-40">
              <label className="font-bold" htmlFor="name">
                {data.contactUsFormFirstName}
              </label>
              <Field
                className=" shadow-4xl h-16 text-xl rounded-xl mobile:h-12 mobile:w-full"
                id="name"
                name="name"
                type="text"
              />
              {errors.name && touched.name ? errors.name : null}
            </div>
            <div className=" flex flex-col w-2/5 gap-2 mobile:w-full">
              <label className="font-bold" htmlFor="lastName">
                {data.contactUsFormLastName}
              </label>
              <Field
                className="shadow-4xl h-16 text-xl rounded-xl mobile:h-12 "
                id="lastName"
                name="lastName"
                type="text"
              />
              {errors.lastName && touched.lastName ? errors.lastName : null}
            </div>
            <div className=" flex flex-col w-w-2/5 gap-2 mobile:w-full">
              <label className="font-bold mobile:w-full" htmlFor="email">
                {data.contactUsFormEmail}
              </label>
              <Field
                className="shadow-4xl h-16 text-xl rounded-xl mobile:w-full mobile:h-12 "
                id="email"
                name="email"
                type="email"
              />
              {errors.email && touched.email ? errors.email : null}
            </div>
            <div className=" flex flex-col w-2/5 gap-2 mobile:w-full">
              <label className="font-bold" htmlFor="tel">
                {data.contactUsFormPhone}
              </label>
              <Field
                className="shadow-4xl h-16 text-xl rounded-xl  mobile:h-12 "
                id="tel"
                type="number"
                name="tel"
              />
              {errors.tel && touched.tel ? errors.tel : null}
            </div>
            <div className=" flex flex-col w-full  gap-4 mobile:text-center ">
              <label className="font-bold" htmlFor="text">
                {data.contactUsFormMessage}
              </label>
              <Field
                component="textarea"
                className="shadow-4xl rounded-xl h-40 mobile:h-20"
                id="text"
                name="text"
              />
            </div>
            {data.contactUsFormErrorMessageMissing}
            <div className="flex  w-80 h-12">
              <button
                className="bg-header-blue font-bold text-light
            pr-8 pl-8 rounded-3xl text-xl"
              >
                {data.contactUsFormSendButton}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactUsForm
