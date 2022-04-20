import React from 'react'
import { Formik, Field, Form } from 'formik'
const Basic = () => (
  <div className="commonForm grid grid-col-1 ">
    <h1>Sign Up</h1>
    <Formik
      className="formik"
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <Form className="form">
        <label className="label" htmlFor="firstName">
          First Name
        </label>
        <Field
          className="field"
          id="firstName"
          name="firstName"
          placeholder="Jane"
        />

        <label className="label" htmlFor="lastName">
          Last Name
        </label>
        <Field
          className="field"
          id="lastName"
          name="lastName"
          placeholder="Doe"
        />

        <label className="label" htmlFor="phone">
          Phone
        </label>
        <Field
          className="field"
          id="phone"
          name="phone"
          type="phone"
          placeholder="Jane"
        />

        <label className="label" htmlFor="email">
          Email
        </label>
        <Field
          className="field"
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label className="label" htmlFor="fedback">
          Feedback
        </label>
        <Field
          className="field"
          label="feedback"
          id="feedback"
          name="fedback"
          type="text"
        />
        <button className="button" type="submit">
          Submit
        </button>
      </Form>
    </Formik>

    <style jsx>{`
      .formik,
      .form,
      .field,
      .button,
      .commonForm {
        border: 1px solid black;
        border-radius: 5px;
        background: white;
      }
      .commonForm {
        height: 400px;
      }
    `}</style>
  </div>
)

export default Basic
