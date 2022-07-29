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
      className="form grid grid-cols-2 gap-y-10"
      onSubmit={formState.handleSubmit}
    >
      <div className="input-container">
        <label htmlFor="firstName">{firstNamePlaceHolder}</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formState.values.firstName}
          onChange={formState.handleChange}
        ></input>
        {formState.errors.firstName && (
          <p className="text-red font-bold">{formState.errors.firstName}</p>
        )}
      </div>
      <div className="input-container">
        <label htmlFor="lastName">{lastNamePlaceHolder}</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formState.values.lastName}
          onChange={formState.handleChange}
        ></input>
        {formState.errors.lastName && (
          <p className="text-red font-bold">{formState.errors.lastName}</p>
        )}
      </div>
      <div className="input-container">
        <label htmlFor="email">{emailPlaceHolder}</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formState.values.email}
          onChange={formState.handleChange}
        ></input>
        {formState.errors.email && (
          <p className="text-red font-bold">{formState.errors.email}</p>
        )}
      </div>
      <div className="input-container">
        <label htmlFor="phone">{phonePlaceHolder}</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formState.values.phone}
          onChange={formState.handleChange}
        ></input>
        {formState.errors.phone && (
          <p className="text-red font-bold">{formState.errors.phone}</p>
        )}
      </div>
      <div className="input-container col-span-full min-w-full">
        <label htmlFor="text">{textPlaceHolder}</label>
        <textarea
          className="h-72  w-full"
          id="text"
          name="text"
          value={formState.values.text}
          onChange={formState.handleChange}
        ></textarea>
        {formState.errors.text && (
          <p className="text-red font-bold">{formState.errors.text}</p>
        )}
      </div>
      <button
        className=" bg-header-blue w-40 h-16 rounded-full text-contact-bg font-bold text-lg"
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
          max-width: 260px;
        }
      `}</style>
    </form>
  )
}

export default ContactForm
