import { Field } from 'formik'

export default function FormInput({
  className,
  label,
  name,
  type,
  error,
  touched,
}: {
  className?: string
  label: string
  name: string
  type: string
  error?: string
  touched?: boolean
}) {
  return (
    <div className={`${name === 'more' && className} flex flex-col`}>
      <label className="my-2 mt-4" htmlFor={name}>
        <h3 className="text-sm font-bold">{label}</h3>
      </label>
      <Field
        className={`h-3/7 rounded-[8px] px-2 py-4 text-paragraph appearance-none shadow-4xl ${
          name === 'more' && 'h-32'
        }`}
        name={name}
        type={type}
      />
      <span className="text-red">{error && touched && error}</span>
    </div>
  )
}
