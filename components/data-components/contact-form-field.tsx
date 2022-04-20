import { Field } from 'formik'

import { HomePageType } from '@/lib/interface'

export const ContactFormField = (fieldData: any) => {
  console.log('ContactFormField => fieldData', fieldData)

  return (
    <div className="flex flex-col">
      <label htmlFor={fieldData.fieldType} className="text-2xl font-bold pb-3">
        {fieldData.label}
      </label>
      <Field
        type={fieldData.fieldType}
        name={fieldData.fieldType}
        id={fieldData.fieldType}
        autoFocus
        className="form-field w-64 h-14 rounded-lg drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]"
      />
    </div>
  )
}
