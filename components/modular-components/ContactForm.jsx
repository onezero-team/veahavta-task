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
      className="form grid grid-cols-2 gap-y-10  bg-light p-12 z-20 rounded-xl  -mt-60"
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
        ></input>
        {formState.errors.firstName && (
          <p className="text-red font-bold">{formState.errors.firstName}</p>
        )}
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
        ></input>
        {formState.errors.lastName && (
          <p className="text-red font-bold">{formState.errors.lastName}</p>
        )}
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
        ></input>
        {formState.errors.email && (
          <p className="text-red font-bold ">{formState.errors.email}</p>
        )}
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
        ></input>
        {formState.errors.phone && (
          <p className="text-red font-bold">{formState.errors.phone}</p>
        )}
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
        ></textarea>
        {formState.errors.text && (
          <p className="text-red font-bold">{formState.errors.text}</p>
        )}
      </div>
      <button
        className=" bg-header-blue w-40 h-16 rounded-full text-contact-bg font-bold text-lg p-3"
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
        .form {
          border: 2px solid #ffffff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        }
        .input-container {
          display: flex;
          flex-direction: column;
          max-width: 260px;
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
