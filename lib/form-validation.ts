import * as Yup from 'yup'

interface Ischema {
  contactUsFormEmail: string
  contactUsFormPhone: string
  contactUsFormFirstName: string
  contactUsFormLastName: string
  contactUsFormMessage: string
  contactUsFormSendButton: string
  contactUsFormSuccessMessage: string
  contactUsFormErrorFirstNameMissing: string
  contactUsFormErrorLastNameMissing: string
  contactUsFormErrorEmailMissing: string
  contactUsFormErrorEmailInvalid: string
  contactUsFormErrorPhoneMissing: string
  contactUsFormErrorPhoneInvalid: string
  contactUsFormErrorMessageMissing: string
}

export function createSchema(data: Ischema) {
  const schema = Yup.object().shape({
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
  return schema
}
