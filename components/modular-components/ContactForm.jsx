import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function ContactForm({
  firstNamePlaceHolder,
  lastNamePlaceHolder,
  emailPlaceHolder,
  phonePlaceHolder,
  textPlaceHolder,
  submitButton,
  errors,
}) {
  const {
    contactUsFormErrorFirstNameMissing,
    contactUsFormErrorEmailInvalid,
    contactUsFormErrorEmailMissing,
    contactUsFormErrorLastNameMissing,
    contactUsFormErrorMessageMissing,
    contactUsFormErrorPhoneInvalid,
    contactUsFormErrorPhoneMissing,
    contactUsFormSuccessMessage,
  } = errors

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const [submit, setSubmit] = useState(false)

  const formState = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      text: '',
    },
    onSubmit: (values) => {
      console.log(values)
      setSubmit(true)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(contactUsFormErrorFirstNameMissing),
      lastName: Yup.string().required(contactUsFormErrorLastNameMissing),
      email: Yup.string()
        .email(contactUsFormErrorEmailInvalid)
        .required(contactUsFormErrorEmailMissing),
      phone: Yup.string()
        .matches(phoneRegExp, contactUsFormErrorPhoneInvalid)
        .required(contactUsFormErrorPhoneMissing),
      text: Yup.string().required(contactUsFormErrorMessageMissing),
    }),
  })

  return (
    <form
      className="grid grid-cols-2 gap-y-10  bg-light p-12 z-20 rounded-xl  -mt-60 shadow-4xl border-solid border-light border-2 mobile:flex mobile:flex-col mobile:p-5 laptop:p-3"
      onSubmit={formState.handleSubmit}
      id="contact-us"
    >
      <div className="input-container">
        <label htmlFor="firstName " className="font-bold text-xl">
          {firstNamePlaceHolder}
        </label>
        <input
          className="input"
          id="firstName"
          name="firstName"
          type="text"
          value={formState.values.firstName}
          onChange={formState.handleChange}
          onBlur={formState.handleBlur}
        ></input>
        {formState.errors.firstName && formState.touched.firstName ? (
          <p className="text-red font-bold">{formState.errors.firstName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <label htmlFor="lastName" className="font-bold  text-xl">
          {lastNamePlaceHolder}
        </label>
        <input
          className="input"
          id="lastName"
          name="lastName"
          type="text"
          value={formState.values.lastName}
          onChange={formState.handleChange}
          onBlur={formState.handleBlur}
        ></input>
        {formState.errors.lastName && formState.touched.lastName ? (
          <p className="text-red font-bold">{formState.errors.lastName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <label htmlFor="email" className="font-bold  text-xl">
          {emailPlaceHolder}
        </label>
        <input
          className="input"
          id="email"
          name="email"
          type="email"
          value={formState.values.email}
          onChange={formState.handleChange}
          onBlur={formState.handleBlur}
        ></input>
        {formState.errors.email && formState.touched.email ? (
          <p className="text-red font-bold ">{formState.errors.email}</p>
        ) : null}
      </div>
      <div className="input-container">
        <label htmlFor="phone" className="font-bold  text-xl">
          {phonePlaceHolder}
        </label>
        <input
          className="input"
          id="phone"
          name="phone"
          type="tel"
          value={formState.values.phone}
          onChange={formState.handleChange}
          onBlur={formState.handleBlur}
        ></input>
        {formState.errors.phone && formState.touched.phone ? (
          <p className="text-red font-bold">{formState.errors.phone}</p>
        ) : null}
      </div>
      <div className="input-container col-span-full min-w-full">
        <label htmlFor="text" className="font-bold  text-xl">
          {textPlaceHolder}
        </label>
        <textarea
          className="h-72  w-full input"
          id="text"
          name="text"
          value={formState.values.text}
          onChange={formState.handleChange}
          onBlur={formState.handleBlur}
        ></textarea>
        {formState.errors.text && formState.touched.text ? (
          <p className="text-red font-bold">{formState.errors.text}</p>
        ) : null}
      </div>
      <button
        className="z-40 bg-header-blue w-40 h-16 rounded-full text-contact-bg font-bold text-lg p-3"
        type="submit"
      >
        {submitButton}
      </button>
      {submit && (
        <p className="text-success font-bold text-lg">
          {contactUsFormSuccessMessage}
        </p>
      )}
      <style jsx>{`
        .input-container {
          display: flex;
          flex-direction: column;
          max-width: 95%;
        }
        .input {
          border: 1px solid #ffffff;
          filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
          border-radius: 8px;
          padding: 3%;
          text-indent: 15px;
        }
      `}</style>
    </form>
  )
}

export default ContactForm
