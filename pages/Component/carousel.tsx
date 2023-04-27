import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
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
      <SwiperSlide>
        <div className="relative h-80 md:h-96">
          <img className="absolute inset-0 h-full w-full transform rounded-[2rem] object-cover pb-4 drop-shadow transition-all duration-300 ease-in-out hover:scale-105" src="/img/5.webp" alt="carousel-1" />
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl opacity-0 transition-opacity duration-300 ease-in-out hover:bg-slate-800 hover:opacity-[0.9]">
            <div className="font-semibold text-white">
              <h2 className="mb-2 text-2xl md:text-4xl">Landing Page</h2>
              <p className="mb-2 text-xl text-slate-100 md:text-3xl">responsive landing page</p>
              <button type="button" className="my-5 mb-2 mr-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                Lihat detail
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-80 md:h-96">
          <img className="absolute inset-0 h-full w-full transform rounded-[2rem] object-cover pb-4 drop-shadow transition-all duration-300 ease-in-out hover:scale-105" src="/img/2.webp" alt="carousel-1" />
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl opacity-0 transition-opacity duration-300 ease-in-out hover:bg-slate-800 hover:opacity-[0.9]">
            <div className="font-semibold text-white">
              <h2 className="mb-2 ml-5 text-2xl md:text-4xl">php crud</h2>
              <p className="mb-2 ml-5 text-xl text-slate-100 md:text-3xl">php crud using framework codeigniter</p>
              <button type="button" className="my-5 mb-2 ml-5 mr-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                Lihat detail
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-80 md:h-96">
          <img className="absolute inset-0 h-full w-full transform rounded-[2rem] object-cover pb-4 drop-shadow transition-all duration-300 ease-in-out hover:scale-105" src="/img/3.webp" alt="carousel-1" />
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl opacity-0 transition-opacity duration-300 ease-in-out hover:bg-slate-800 hover:opacity-[0.9]">
            <div className="font-semibold text-white">
              <h2 className="mb-2 text-2xl md:text-4xl">Company profile</h2>
              <p className="mb-2 text-xl text-slate-100 md:text-3xl">company responsive landing page</p>
              <button type="button" className="my-5 mb-2 mr-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                Lihat detail
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-80 md:h-96">
          <img className="absolute inset-0 h-full w-full transform rounded-[2rem] object-cover pb-4 drop-shadow transition-all duration-300 ease-in-out hover:scale-105" src="/img/4.webp" alt="carousel-1" />
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl opacity-0 transition-opacity duration-300 ease-in-out hover:bg-slate-800 hover:opacity-[0.9]">
            <div className="font-semibold text-white">
              <h2 className="mb-2 text-2xl md:text-4xl">personal biodata</h2>
              <p className="mb-2 text-xl text-slate-100 md:text-3xl">personal responsive landing page</p>
              <button type="button" className="my-5 mb-2 mr-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                Lihat detail
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
