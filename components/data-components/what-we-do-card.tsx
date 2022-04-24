export const WhatWeDoCard = ({ card }: { card: any }) => {
  return (
    <>
      <div className="what-we-do-card flex flex-col w-[170px] h-60 sm:w-[300px] sm:h-[429px] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-2xl sm:rounded-3xl">
        <div className="card-thumbnail bg-contact-bg w-full h-28 sm:h-56 flex items-center rounded-t-2xl sm:rounded-t-3xl">
          <div className="card-img w-14 h-14 sm:w-28 sm:h-28 bg-cover m-auto"></div>
        </div>

        <div className="card-description pt-2 px-3 sm:pt-8 sm:px-5">
          <h3 className="text-header-blue rtl:text-right ltr:text-left text-base sm:text-xl font-bold">
            {card.title}
          </h3>
          <p className=" text-xs sm:text-lg">{card.text}</p>
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
