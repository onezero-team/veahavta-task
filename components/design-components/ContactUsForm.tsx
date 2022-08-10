import { HomePageType } from '@/lib/interface'
import { Button } from '@/components/design-components/Button'
import { useFormik } from 'formik'



interface Error {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export const ContactUsForm = ({ data } :HomePageType) => {
  const validate = (values: any) => {
    const errors = {} as Error

    if (!values.firstName) {
      errors.firstName = data.common.contactUsFormErrorFirstNameMissing
    }
    if (!values.lastName) {
      errors.lastName = data.common.contactUsFormErrorLastNameMissing
    }

    if (!values.email) {
      errors.email = data.common.contactUsFormErrorEmailMissing
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = data.common.contactUsFormErrorEmailInvalid
    }

    if (!values.phone) {
      errors.phone = data.common.contactUsFormErrorPhoneMissing
    } else if (values.phone.length !== 10) {
      errors.phone = data.common.contactUsFormErrorPhoneInvalid
    }

    if (!values.message) {
      errors.message = data.common.contactUsFormErrorMessageMissing
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    validate,
    onSubmit: (values) => {
      alert(data.common.contactUsFormSuccessMessage)
    },
  })

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className={'main-container-contact-us-form flex justify-center'}
      >
        <div className={'row-container flex flex-col'}>
          <div className={'row flex justify-between'}>
            <div className={'flex flex-col'}>
              <div className={'my-title-contact'}>
                {data.common.contactUsFormFirstName}
              </div>
              <div className={'my-input-contact'}>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  name={'firstName'}
                  className={'my-input-obj'}
                  type={'text'}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className={'my-error'}>{formik.errors.firstName}</div>
                ) : null}
              </div>
            </div>
            <div className={'flex flex-col'}>
              <div className={'my-title-contact'}>
                {data.common.contactUsFormLastName}
              </div>
              <div className={'my-input-contact'}>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  name={'lastName'}
                  className={'my-input-obj'}
                  type={'text'}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className={'my-error'}>{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className={'row flex justify-between mt-6'}>
            <div className={'flex flex-col'}>
              <div className={'my-title-contact'}>
                {data.common.contactUsFormEmail}
              </div>
              <div className={'my-input-contact'}>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name={'email'}
                  className={'my-input-obj'}
                  type={'text'}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={'my-error'}>{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className={'flex flex-col'}>
              <div className={'my-title-contact'}>
                {data.common.contactUsFormPhone}
              </div>
              <div className={'my-input-contact'}>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  name={'phone'}
                  className={'my-input-obj'}
                  type={'text'}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className={'my-error'}>{formik.errors.phone}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className={'row flex mt-8'}>
            <div className={'flex flex-col'}>
              <div className={'my-title-contact'}>
                {data.common.contactUsFormMessage}
              </div>
              <div className={'my-text-area-contact'}>
                <textarea
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  name={'message'}
                  className={'my-text-area-obj'}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className={'my-error'}>{formik.errors.message}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className={'mt-9'}>
            <Button text={data.common.contactUsFormSendButton} type={'big'} />
          </div>
        </div>
      </form>

      <style jsx>
        {`
          .main-container-contact-us-form {
            height: 700px;
            width: 650px;
            left: 348px;
            top: 20px;
            border-radius: 36px;
            border: 2px solid #ffffff;
            box-shadow: 0px 0px 4px 0px #00000040;
            background: white;
          }

          .my-error {
            color: red;
          }

          .my-title-contact {
            left: 873px;
            top: 85px;
            font-family: Assistant;
            font-size: 22px;
            font-weight: 700;
            line-height: 29px;
            letter-spacing: 0em;
            color: black;
            cursor: default;
          }

          .row-container {
            width: 85%;
            margin-top: 65px;
          }

          .my-input-obj {
            height: 60px;
            width: 260px;
            left: 688px;
            top: 128px;
            border-radius: 8px;
            border: 1px solid #ffffff;
            box-shadow: 0px 0px 4px 0px #00000040;
            background: white;
            outline: none;
            margin-top: 14px;
          }

          .my-text-area-obj {
            height: 145px;
            width: 550px;
            left: 398px;
            top: 384px;
            border-radius: 8px;
            background: white;
            border: 1px solid #ffffff;
            box-shadow: 0px 0px 4px 0px #00000040;
            resize: none;
            margin-top: 14px;
          }

          @media only screen and (max-width: 1340px) {
            .row {
              flex-direction: column;
              margin-top: 2px;
            }

            .row-container {
              justify-content: center;
              align-items: center;
              margin-top: 15px;
            }

            .my-text-area-obj {
              height: 128px;
              width: 260px;
              margin-top: 5px;
            }

            .main-container-contact-us-form {
              height: 823px;
              width: 350px;
            }
          }
        `}
      </style>
    </>
  )
}
