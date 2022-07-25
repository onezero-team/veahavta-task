import { HomePageType } from '@/lib/interface'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import Image from 'next/image'

export default function ContactUs({ data }: HomePageType) {
  return (
    <>

      <div className='ContactUsBackground mt-64'>
        <div className='circlesBackground' />
        <form className='contact-form'></form>
      </div>

      <style jsx>
        {`
          
          div.ContactUsBackground{    
            position:relative;
            width:1920px;
            height:680px;  
            background: #f4f3fd;                     
            z-index:-1;    
          }
          div.circlesBackground{            
            width:1920px;
            height:680px;  
            z-index:-1;    
            opacity: 0.2;
            background:
            url('/img/contact/Vector-1.png') 100% 30px no-repeat,
            url('/img/contact/Vector.png') 0 100% no-repeat;           
           }

          form.contact-form{
            position:absolute;
            height:700px;
            width:650px;
            bottom:115px;
            left:348px;
            background:#ffffff;
            border: 2px solid #FFFFFF;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius:36px;


          }
           
      `}
      </style>
    </>
  )
}
