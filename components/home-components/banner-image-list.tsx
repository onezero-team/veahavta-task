import Image from 'next/image'

export default function BannerImageList() {
  return (
    <div className="hidden w-full h-full  xl:block  absolute ">
      <div className={'absolute w-2/12 h-64 right-28  top-20'}>
        <Image
          src={'/header/Rectangle-2.png'}
          objectFit="contain"
          objectPosition={'center'}
          layout="fill"
          alt={'photo'}
        />
      </div>
      <div className={'absolute h-72 w-56 right-0 bottom-40'}>
        <Image
          src={'/header/Rectangle-5.png'}
          objectFit="contain"
          objectPosition={'center'}
          layout="fill"
          alt={'photo'}
        />
      </div>
      <div className={'absolute w-2/12 h-52 right-56 -bottom-0'}>
        <Image
          src={'/header/Rectangle-6.png'}
          width={315}
          height={380}
          objectFit="contain"
          objectPosition={'center'}
          layout="responsive"
          alt={'photo'}
        />
      </div>
      <div className={'absolute w-2/12 left-56 -bottom-20'}>
        <Image
          src={'/header/Rectangle-7.png'}
          width={315}
          height={380}
          objectFit="contain"
          objectPosition={'center'}
          layout="responsive"
          alt={'photo'}
        />
      </div>
      <div className={'absolute w-2/12 left-32 -top-3'}>
        <Image
          src={'/header/Rectangle-9.png'}
          width={315}
          height={380}
          objectFit="contain"
          objectPosition={'center'}
          layout="responsive"
          alt={'photo'}
        />
      </div>
      <div className={'absolute w-2/12 -left-5 bottom-44'}>
        <Image
          src={'/header/Rectangle-8.png'}
          width={315}
          height={380}
          objectFit="contain"
          objectPosition={'center'}
          layout="responsive"
          alt={'photo'}
        />
      </div>
      <div className={'absolute w-2/12 left-110 -top-24'}>
        <Image
          src={'/header/Rectangle-10.png'}
          width={315}
          height={380}
          objectFit="contain"
          objectPosition={'center'}
          layout="responsive"
          alt={'photo'}
        />
      </div>
    </div>
  )
}