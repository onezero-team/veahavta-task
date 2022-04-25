import React from 'react'
import * as Yup from 'yup'
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik'
import Input from './Input'
import { Button } from './button'
import { isValidTel, isValidEmail } from '@/lib/validations'
import { HomePageType } from '@/lib/interface'

interface FormValues {
  firstName: string
  lastName: string
  tel: string
  email: string
  info: string
}

const InnerForm = (props: HomePageType & FormikProps<FormValues>): any => {
  const { touched, errors, isSubmitting, data, submitCount } = props
  return (
    <Form>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
        <div>
          <Field
            type="text"
            name="firstName"
            text={data.common.contactUsFormFirstName}
            as={Input}
          />
          {touched.firstName && errors.firstName && (
            <ErrorMsg msg={errors.firstName} />
          )}
        </div>
        <div>
          <Field
            type="text"
            name="lastName"
            text={data.common.contactUsFormLastName}
            as={Input}
          />
          {touched.lastName && errors.lastName && (
            <ErrorMsg msg={errors.lastName} />
          )}
        </div>
        <div>
          <Field
            type="email"
            name="email"
            text={data.common.contactUsFormEmail}
            as={Input}
          />
          {touched.email && errors.email && <ErrorMsg msg={errors.email} />}
        </div>
        <div>
          <Field
            type="tel"
            name="tel"
            text={data.common.contactUsFormPhone}
            as={Input}
          />
          {touched.tel && errors.tel && <ErrorMsg msg={errors.tel} />}
        </div>
      </div>

      <Field
        type="textarea"
        className="mt-8"
        name="info"
        text={data.common.contactUsFormMessage}
        as={Input}
      />
      <Button
        className="rounded-full w-[140px] p-3 mt-8 text-light text-2xl bg-header-blue font-bold"
        text={data.common.contactUsFormSendButton}
      />
      {isSubmitting && (
        <div className="mt-5 text-success">
          {data.common.contactUsFormSuccessMessage}
        </div>
      )}
    </Form>
  )
}

const ContactUsForm = withFormik<HomePageType, FormValues>({
  mapPropsToValues: (props) => {
    return {
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
      info: '',
    }
  },

  validate: (values: FormValues, props: HomePageType) => {
    let errors: FormikErrors<FormValues> = {}

    if (!values.firstName) {
      errors.firstName = props.data.common.contactUsFormErrorFirstNameMissing
    }

    if (!values.lastName) {
      errors.lastName = props.data.common.contactUsFormErrorLastNameMissing
    }

    if (!values.tel) {
      errors.tel = props.data.common.contactUsFormErrorPhoneMissing
    } else if (!isValidTel(values.tel)) {
      errors.tel = props.data.common.contactUsFormErrorPhoneInvalid
    }

    if (!values.email) {
      errors.email = props.data.common.contactUsFormErrorEmailMissing
    } else if (!isValidEmail(values.email)) {
      errors.email = props.data.common.contactUsFormErrorEmailInvalid
    }

    return errors
  },

  handleSubmit: (values, actions) => {
    console.log(values)

    actions.setValues({
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
      info: '',
    })
    actions.setTouched({
      firstName: false,
      lastName: false,
      tel: false,
      email: false,
    })
  },
})(InnerForm)

function ErrorMsg({ msg }: { msg: string }) {
  return <div className="text-sm text-red m-0 p-0 ">{msg}</div>
}

export default ContactUsForm
