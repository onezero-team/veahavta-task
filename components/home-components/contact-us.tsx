import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import { Formik } from 'formik'
import Vector from '../../assets/vector.png'
import Image from 'next/image'
import Vector_2 from '../../assets/vector_1.png'
export default function ContactUs({ data }: HomePageType) {
  console.log('data', data)
  return (
    <WrapperLarge>
      <div className="wrapper">
        <div className="container">
          <div className="vector">
            <Image src={Vector} alt="vector" />
          </div>
          <div className="vector2">
            <Image src={Vector_2} alt="vector" />
          </div>
          <div className="details">
            <button className="contactUsHeading">
              {data.homepage.contactUsHeading}
            </button>
            <div className="contactUsTitle">{data.homepage.contactUsTitle}</div>
            <div className="contactUsText">{data.homepage.contactUsText}</div>
            <div className="contactLinks">
              {data.common.contactUsLinks.map((item, index) => (
                <a key={index}>{item.text}</a>
              ))}
            </div>
          </div>
          <div className="contactUsForm">
            <Formik
              initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                message: '',
                phone: '',
              }}
              validate={(values) => {
                const errors = {}
                if (!values.email) {
                  errors.email = data.common.contactUsFormErrorEmailMissing
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = data.common.contactUsFormErrorEmailInvalid
                } else if (!values.firstName) {
                  errors.firstName =
                    data.common.contactUsFormErrorFirstNameMissing
                } else if (!values.lastName) {
                  errors.lastName =
                    data.common.contactUsFormErrorLastNameMissing
                } else if (!values.message) {
                  errors.message = data.common.contactUsFormErrorMessageMissing
                } else if (!values.phone) {
                  errors.phone = data.common.contactUsFormErrorPhoneMissing
                }

                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(data.common.contactUsFormSuccessMessage)

                  setSubmitting(false)
                }, 400)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="form_container">
                      <label htmlFor="firstName">
                        {data.common.contactUsFormFirstName}
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </div>
                    <div className="form_container">
                      <label htmlFor="lastName">
                        {data.common.contactUsFormLastName}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                      {errors.lastName && touched.lastName && errors.lastName}
                    </div>
                    <div className="form_container">
                      <label htmlFor="email">
                        {data.common.contactUsFormEmail}
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && errors.email}
                    </div>
                    <div className="form_container">
                      <label htmlFor="phone">
                        {data.common.contactUsFormPhone}
                      </label>
                      <input
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                      {errors.phone && touched.phone && errors.phone}
                    </div>
                  </div>
                  <div className="form_container message">
                    <label htmlFor="message">
                      {data.common.contactUsFormMessage}
                    </label>
                    <textarea
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    />
                    {errors.message && touched.message && errors.message}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'start',
                      marginTop: '30px',
                    }}
                  >
                    <button
                      className="sendButton"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {data.common.contactUsFormSendButton}
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <style jsx>{`
        div.wrapper {
          z-index: 10;
          background: #fff;
          display: flex;
          justify-content: center;
          background: #f4f3fd;
        }
        div.container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 680px;
        }
        div.details {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 50%;
        }
        button.contactUsHeading {
          width: 119px;
          height: 40px;
          background: #ffffff;
          border-radius: 51px;
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 700;
          font-size: 22px;
          line-height: 29px;
          color: #4e47f9;
        }
        div.contactUsForm {
          box-sizing: border-box;
          position: absolute;
          width: 650px;
          height: 700px;
          left: 348px;
          top: 2400px;
          background: #ffffff;
          border: 2px solid #ffffff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 36px;
        }
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 15px;
        }
        label {
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 700;
          font-size: 22px;
          line-height: 29px;
          /* identical to box height */
          text-align: right;
        }
        input {
          width: 260px;
          height: 60px;
          border: 1px solid #ffffff;
          filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
          border-radius: 8px;
          margin-top: 10px;
        }
        div.form-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
        }
        div.form_container {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          padding: 10px;
        }
        textarea {
          width: 570px;
          height: 145px;
          border: 1px solid #ffffff;
          filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
          border-radius: 8px;
          padding: 10px;
          margin-top: 10px;
        }
        div.message {
          width: 100%;
          padding: 10px;
        }
        button.sendButton {
          width: 185px;
          height: 60px;
          background: #4e47f9;
          border-radius: 51px;
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 37px;
          text-align: center;
          color: #ffffff;
        }
        div.contactUsTitle {
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 700;
          font-size: 42px;
          line-height: 55px;
          /* identical to box height */
          text-align: right;
          color: #000000;
        }
        div.contactUsText {
          font-family: 'Assistant';
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 29px;
          /* identical to box height */

          text-align: right;
          width: 70%;
          color: #000000;
        }
        div.contactLinks {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        a {
          margin-top: 50px;
        }
        div.vector {
          position: absolute;
          right: 85.19%;
          top: 311.12%;
          opacity: 0.5;
        }
        div.vector2 {
          position: absolute;
          left: 90.19%;
          top: 265.12%;
          opacity: 0.5;
        }
      `}</style>{' '}
    </WrapperLarge>
  )
}
