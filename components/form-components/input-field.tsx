import { FieldProps } from 'formik'
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'

type Errors = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

type InputProps = Errors &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type TextProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export function InputTextField({
  name,
  label,
  field,
  ...props
}: {
  name: string
  label: string
  field: FieldProps & InputProps
}) {
  return (
    <>
      <label htmlFor={name} className="font-bold text-xl ">
        {label}{' '}
      </label>
      <input
        className="mt-3"
        type="text"
        id={name}
        name={name}
        {...field}
        {...props}
      />
      <style jsx>
        {`
          input {
            width: 100%;
            height: 60px;
            border: 1px solid #ffffff;
            box-shadow: 0px 0px 4px 0px #00000040;
            border-radius: 8px;
          }
        `}
      </style>
    </>
  )
}
export function TextAreaField({
  name,
  label,
  field,
}: {
  name: string
  label: string
  field: FieldProps & TextProps
}) {
  return (
    <>
      <label htmlFor={name} className="font-bold text-xl ">
        {label}{' '}
      </label>
      <textarea className="mt-3" id={name} name={name} {...field} />
      <style jsx>
        {`
          textarea {
            width: 100%;
            height: 145px;
            border: 1px solid #ffffff;
            box-shadow: 0px 0px 4px 0px #00000040;
            border-radius: 8px;
            resize: none;
          }
        `}
      </style>
    </>
  )
}
