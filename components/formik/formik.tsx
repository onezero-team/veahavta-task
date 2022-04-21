import React, { useState } from 'react'
import { HomePageType}  from '@/lib/interface'
import { Formik, Field, Form } from 'formik'
import { Button } from '../data-components/button';
import { ValuesOfCorrectTypeRule } from 'graphql';

export default function Basic({ data }: HomePageType) {
  const [first, setFirst]=useState("");
  const [last, setLast]=useState("");
  const [phone, setPhone]=useState("");
  const [email, setEmail]=useState("");
  return(
    <Formik 
      initialValues={{
        firstName: '',
        lastName: '',
        phone:'',
        email: '',
        message: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2));
      }}
    >
      
      <Form className="form items-center justify-center  flex flex-wrap">
        <label className="label" htmlFor="firstName">{data.common.contactUsFormFirstName}
        </label>
        <Field
          className="field"
          id="firstName"
          name="firstName"
          placeholder="Jane"
          
        />

        <label className="label" htmlFor="lastName">{data.common.contactUsFormLastName}
        </label>
        <Field
          className="field"
          id="lastName"
          name="lastName"
          placeholder="Doe"
        />

        <label className="label" htmlFor="phone">
        {data.common.contactUsFormPhone}
        </label>
        <Field
          className="field"
          id="phone"
          name="phone"
          type="phone"
          placeholder="Jane"
        />

        <label className="label" htmlFor="email">
        {data.common.contactUsFormEmail}
        </label>
        <Field
          className="field"
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label className="label" htmlFor="fedback">
        {data.common.contactUsFormMessage}
        </label>
        
        <Field
          className="field"
          label="feedback"
          id="feedback"
          name="fedback"
          as ="textarea"
        
        />
        <Button className='formikBtn' text={data.common.contactUsFormSendButton}></Button>
        <style jsx global>{`
          .form{
            border: 1px solid lightgrey;
            border-radius: 36px;
           width:470px;
           display:flex;
          }
          .label{
            font-weight: bold;
            margin-top: -60px;
          }
          .field{
            border: 1px solid lightgrey;
            border-radius:2px;
          }
          
        `}</style>
      </Form>
    </Formik>
  )
};


