import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface Card {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface CardSlideshowProps {
  cards: Card[];
}

const CardSlideshow = ({ cards }: CardSlideshowProps) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        // when screen is >= 640px (SM)
        640: {
          slidesPerView: 1,
        },
        // when screen is >= 768px (MD)
        768: {
          slidesPerView: 2,
        },
      }}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id} className="">
          <div className="min-h-[11rem] rounded-[2rem] drop-shadow md:min-h-[14rem]">
            <div className="min-h-[10rem] rounded-lg bg-white p-8 shadow-md md:min-h-[13rem]">
              <p className="mb-4 text-gray-600">{card.description}</p>
              <div className="flex items-center text-blue-600">
                <span className="mr-2">{card.link}</span>
                <span className="inline-block h-4 w-4 -rotate-45 transform border-b border-r"></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default CardSlideshow;
