import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import reactStringReplace from 'react-string-replace';
import {
  parsePhoneNumberFromString,
} from "libphonenumber-js";

export default function FormContant({ data }: CommonType) {

  const [modalSucsses, setModalSucsses] = useState(false);

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, data.contactUsFormErrorFirstNameMissing)
      .max(50, 'Too Long!')
      .required(data.contactUsFormErrorFirstNameMissing),
    lastName: Yup.string()
      .min(2, data.contactUsFormErrorLastNameMissing)
      .max(50, 'Too Long!')
      .required(data.contactUsFormErrorLastNameMissing),
    email: Yup.string().email(data.contactUsFormErrorEmailInvalid)
      .required(data.contactUsFormErrorEmailMissing),
    phone: Yup.string()
      .test("isVassslidNumber", data.contactUsFormErrorPhoneMissing, (phone?: string | any) => {
        return phone?.length > 0 ? true : false
      })
      .test("isValidNumber", data.contactUsFormErrorPhoneInvalid, (phone?: string | null) => {
        const parsedNumber = !!phone && parsePhoneNumberFromString(phone, "IL")
        return parsedNumber && parsedNumber.isValid() ? true : false
      })
      .required(data.contactUsFormErrorPhoneInvalid),
    message: Yup.string()
      .min(5, data.contactUsFormErrorMessageMissing)
      .max(5000, 'Too Long!')
      .required(data.contactUsFormErrorMessageMissing),
  });

  const classDivInput = "flex flex-col items-start "
  const classInput = "w-full h-16 border-2 border-contact-bg rounded-lg mt-3"
  const classError = "w-full h-8 text-base text-red font-normal"

  return (
    <WrapperLarge>
      <div className='pos-absolute z-10 w-1/3 bg-light h-[44rem] bottom-32 border-2 border-contact-bg 
        rounded-3xl p-12 text-xl font-bold' id="contact-us">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(values);
            setModalSucsses(true);
            setTimeout(() => {
              setModalSucsses(false);
            }, 2000);

          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className='gap-x-6 grid grid-cols-2'>

                <div className={classDivInput}>
                  {data.contactUsFormFirstName}
                  <Field name="firstName" className={classInput} />
                  <div className={classError}>
                    {errors.firstName && touched.firstName ? errors.firstName : null}</div>
                </div>

                <div className={classDivInput}>
                  {data.contactUsFormLastName}
                  <Field name="lastName" className={classInput} />
                  <div className={classError}>
                    {errors.lastName && touched.lastName ? errors.lastName : null}</div>
                </div>


                <div className={classDivInput}>
                  {data.contactUsFormEmail}
                  <Field name="email" type="email" className={classInput} />
                  <div className={classError}>
                    {errors.email && touched.email ? errors.email : null}</div>
                </div>

                <div className={classDivInput}>
                  {data.contactUsFormPhone}
                  <Field name="phone" type="phone" className={classInput} />
                  <div className={classError}>
                    {errors.phone && touched.phone ? errors.phone : null}</div>
                </div>
              </div>

              <div className={`${classDivInput} w-full`}>
                {data.contactUsFormMessage}
                <Field name="message" className='w-full h-36 border-2 border-contact-bg rounded-lg' component="textarea" />
                <div className={classError}>
                  {errors.message && touched.message ? errors.message : null}</div>
              </div>

              <button type="submit" className="font-bold text-2xl mt-9 w-44 h-14 bg-header-blue rounded-3xl 
              flex justify-center items-center text-light my-auto">{data.contactUsFormSendButton}</button>

            </Form>
          )}
        </Formik>

        {modalSucsses && <div className='absolute z-10 w-full bg-light/[.7] h-[44rem] bottom-0 left-0 
        border-2 border-contact-bg rounded-3xl text-2xl font-bold flex flex-col justify-center items-center' >
          {reactStringReplace(data.contactUsFormSuccessMessage, data.contactUsFormSuccessMessage.split("!")[1],
            (match, i) => (
              <div className='mt-6'>{match}</div>
            ))}</div>}
        <style jsx>
          {`
        .pos-absolute {
          position: absolute;
          inset-inline-end: 14%;}
        `}</style>

      </div>
    </WrapperLarge>
  )
}
