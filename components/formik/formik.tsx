import React, { useState } from 'react'
import { HomePageType } from '@/lib/interface'
import { Formik, Field, Form } from 'formik'
import { Button } from '../data-components/button'

export default function Basic({ data }: HomePageType) {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <Form className="form grid grid-cols-2">
        <label className="label" htmlFor="firstName">
          {data.common.contactUsFormFirstName}
          <Field
            className="field"
            id="firstName"
            name="firstName"
            placeholder="Jane"
          />
        </label>
        <label className="label" htmlFor="lastName">
          {data.common.contactUsFormLastName}
          <Field
            className="field"
            id="lastName"
            name="lastName"
            placeholder="Doe"
          />
        </label>
        <label className="label" htmlFor="phone">
          {data.common.contactUsFormPhone}
          <Field
            className="field"
            id="phone"
            name="phone"
            type="phone"
            placeholder="Jane"
          />
        </label>

        <label className="label" htmlFor="email">
          {data.common.contactUsFormEmail}
          <Field
            className="field"
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
        </label>

        <label className="labelfeed" htmlFor="fedback">
          {data.common.contactUsFormMessage}
          <Field
            className="field"
            label="feedback"
            id="feedback"
            name="fedback"
            as="textarea"
            cols="50"
            rows="5"
          />
          <Button
            className="formikBtn"
            text={data.common.contactUsFormSendButton}
          ></Button>
        </label>

        <style jsx global>{`
          .form {
            border: 1px solid lightgrey;
            border-radius: 25px;
            width: 500px;
            height:500px;
            padding: 60px;
          }
          .label {
            font-weight: bold;
          }
          .field {
            border: 1px solid lightgrey;
            border-radius: 2px;
          }
          .formikBtn {
            height: 10px;
            width: 10px;
          }
          .labelfeed {
            font-weight: bold;
          }
        `}</style>
      </Form>
    </Formik>
  )
}
