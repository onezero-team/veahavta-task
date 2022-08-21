import { HomePageType } from '@/lib/interface'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ArrowProps } from 'react-multi-carousel/lib/types';
import Card from './data-components/card';

type Props ={
    onClick: (event: React.MouseEvent<HTMLElement>) => void
}

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    smallDesktop: {
      breakpoint: { max: 1500, min: 1100 },
      items: 3,
    
    },
    tablet: {
      breakpoint: { max: 1100, min: 800 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1
    }
  };

export default function CarouselCards({ data }: HomePageType) {
  return (
    <Carousel 
        responsive={responsive} 
        className="w-[1456px] h-[490px] md:w-[1100px] sm:w-[750px] xs:w-[400px] justify-self-center mt-[26px]"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
    >
        {data.homepage.whatWeDoCards.map((card)=> {
            return(
            <Card key={card.title} data={card}></Card>
        )})
        }
    </Carousel>
  );
}



const CustomRightArrow = ({ onClick }: ArrowProps) => {
    return (<button className="absolute right-0 z-10 flex items-center justify-center shadow-4xl rounded-[51px] w-[68px] h-[68px] bg-light overflow-hidden" onClick={onClick}  >
        <img src="icons/arrow-icon.svg"></img>
    </button>);
};

const CustomLeftArrow = ({ onClick }: ArrowProps) => {
    return (<button className="absolute left-0 flex items-center justify-center shadow-4xl rounded-[51px] w-[68px] h-[68px] bg-light overflow-hidden" onClick={onClick}  >
        <img src="icons/arrow-icon.svg" className='rotate-180'></img>
    </button>);
};
