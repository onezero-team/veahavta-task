import Image from 'next/image'

export default function BannerImageList() {
  return (
    <div className="hidden w-full h-full xl:none xxl:block  absolute  sm:none md:none ">
      <div className={'absolute w-72 h-80 right-40  -top-10'}>
        <Image
          src={'/header/Rectangle-2.png'}
          // width={315}
          // height={380}
          objectFit="contain"
          objectPosition={'center'}
          layout="fill"
          alt={'photo'}
        />
      </div>
      <div className={'absolute h-96 w-64 right-0 bottom-36'}>
        <Image
          src={'/header/Rectangle-5.png'}
          // width={315}
          // height={380}
          objectFit="contain"
          objectPosition={'center'}
          layout="fill"
          alt={'photo'}
        />
      </div>
      <div className={'absolute w-72 right-72 -bottom-12'}>
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
      <div className={'absolute w-72 left-72 -bottom-32'}>
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
      <div className={'absolute w-72 -left-5 bottom-32'}>
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
      <div className={'absolute w-72 left-96 -top-40'}>
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
