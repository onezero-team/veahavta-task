import { WhatWeDoCardType } from '@/lib/interface'

export const WhatWeDoCard = ({ card }: { card: any }) => {
  console.log('card:', card)

  return (
    <>
      <div className="what-we-do-card flex flex-col w-[338px] h-[480px] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[31px]">
        <div className="card-thumbnail bg-contact-bg w-full flex items-center rounded-t-[31px]">
          <div className="card-img w-[128px] h-[128px] bg-cover my-[55px] mx-[100px]"></div>
        </div>

        <div className="pt-[30px] px-[20px]">
          <h3 className="text-header-blue rtl:text-right ltr:text-left text-xl font-bold">
            {card.title}
          </h3>
          <p className="text-[18px]">{card.text}</p>
        </div>
      </div>

      <style jsx>{`
        div.card-img {
          background-image: url('assets/${card.imagePath}');
        }
      `}</style>
    </>
  )
}
