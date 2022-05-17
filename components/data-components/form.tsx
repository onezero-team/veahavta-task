import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.number().required('Required'),
  text: Yup.string().required('Required'),
})

export default function MyForm({ data }: any) {
  const [sent, setSent] = useState(false)
  return (
    <div className="">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          text: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          setSent(true)
          console.log(values)
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-full max-w-wrp bg-light shadow-4xl rounded-xl p-4 xl:place-self-auto">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-md bg-light md:px-5 px-10 py-5 md:h-3/6 md:left-[200px] md:top-[2000px] justify-center"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 p-2.5 md:p-5 ">
              <div className="mb-6">
                <label>{data.common.contactUsFormFirstName}</label>
                <br />
                <Field className="shadow-lg rounded-md" name="firstName" />
                {errors.firstName && touched.firstName ? (
                  <div>{data.common.contactUsFormErrorFirstNameMissing}</div>
                ) : null}
              </div>
              <div className="mb-6">
                <label>{data.common.contactUsFormLastName}</label>
                <br />
                <Field className="shadow-lg rounded-md" name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div>{data.common.contactUsFormErrorLastNameMissing}</div>
                ) : null}
              </div>
              <div className="mb-6">
                <label>{data.common.contactUsFormEmail}</label>
                <br />
                <Field className="shadow-lg rounded-md" name="email" />
                {errors.email && touched.email ? (
                  <div>{data.common.contactUsFormErrorEmailMissing}</div>
                ) : null}
              </div>
              <div className="mb-6">
                <label>{data.common.contactUsFormPhone}</label>
                <br />
                <Field className="shadow-lg rounded-md" name="phone" />
                {errors.phone && touched.phone ? (
                  <div>{data.common.contactUsFormErrorPhoneInvalid}</div>
                ) : null}
              </div>
              <div className="">
                <label>{data.common.contactUsFormMessage}</label>
                <br />
                <Field className="shadow-lg rounded-md w-10/12" name="text" />
                {errors.text && touched.text ? (
                  <div>{data.common.contactUsFormErrorMessageMissing}</div>
                ) : null}
              </div>
              <br />
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-btnblue text-2xl font-bold text-light rounded-full px-7 py-2"
                >
                  {data.common.contactUsFormSendButton}
                </button>
              </div>
            </div>
            {sent && <div>{data.common.contactUsFormSuccessMessage}</div>}
          </Form>
        )}
      </Formik>
    </div>
  )
}
