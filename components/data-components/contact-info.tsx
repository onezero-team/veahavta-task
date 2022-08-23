import { contactUsLinks } from '@/lib/interface'
import React from 'react'

export default function ContactInfo({ data }: {data: contactUsLinks}) {
  const [link, setLink] = React.useState('');
  React.useEffect(() => {
    if(data.linkType === 'tel') {
      setLink('tel:' + data.linkType);
    } else if(data.linkType === 'address') {
      setLink(data.linkType);
    } else if(data.linkType === 'email') {
      setLink('mailto:' + data.linkType);
    } else {
      setLink(data.linkType);
    }
  }, []);

  return <div  className='flex flex gap-3'>
    <a href={link} target='_blank'>
      <img src={data.imagePath} className="bg-accent-purple object-none rounded-full w-11 h-11"></img>
    </a>
    <div className="flex flex-col w-2/3">
        <p className="text-xs">{data.text}</p>
    </div>
  </div>
}