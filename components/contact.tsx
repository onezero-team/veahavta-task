import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import Image from 'next/image'
import reactStringReplace from 'react-string-replace';

export default function Contact({ data }: CommonType) {


  return (
    <WrapperLarge>
        <div className='w-full grid grid-cols-2 mt-4'>
    {data.contactUsLinks.map((item, index)=>{
    return( 
   <div className='flex items-center mt-6' key={index}>
    <div className="h-11 w-11 mx-3 relative bg-header-blue flex justify-center items-center rounded-full my-2 ">
    <div className="h-5 w-5 relative">
     <Image src={item.imagePath} alt="" width={"100"} height={"100"} layout="fill"/></div></div>
     <div className="">
     {/* <div className='text-3xl text-header-blue font-bold'>{item.linkValue}</div> */}
     <div className='text-base'>{reactStringReplace(item.text.replace("0",""), item.text.split("0")[1], (match, i) => (
       <div>0{match}</div>
     ))}
</div>
     </div> 
     </div> 
 )})}</div>

    </WrapperLarge>
  )
}
