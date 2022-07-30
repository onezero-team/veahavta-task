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
        className="mt-3  w-full border border-white shadow-4xl rounded-lg h-15"
        type="text"
        id={name}
        name={name}
        {...field}
        {...props} />
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
      <textarea className="mt-3  w-full border border-white shadow-4xl rounded-lg h-37" id={name} name={name} {...field} />
    </>
  )
}
