import Image from 'next/image'

export default function BannerImageList() {
  return (
    <div className="hidden w-full h-full  xl:block  absolute ">
      <div className={'absolute w-72 h-72 right-32  top-20'}>
        <Image
          src={'/header/Rectangle-2.png'}
          objectFit="contain"
          objectPosition={'center'}
          layout="fill"
          alt={'photo'}
        />
      </div>
      <div className={'absolute h-72 w-52 right-0 bottom-40'}>
        <Image
          src={'/header/Rectangle-5.png'}
          objectFit="contain"
          objectPosition={'center'}
          layout="fill"
          alt={'photo'}
        />
      </div>
      <div className={'absolute w-60 right-72 -bottom-12'}>
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
      <div className={'absolute w-72 left-64 -bottom-32'}>
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
      <div className={'absolute w-72 left-36 -top-3'}>
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
      <div className={'absolute w-64 -left-5 bottom-24'}>
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
      <div className={'absolute w-72 left-150 -top-28'}>
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
