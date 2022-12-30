import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import SixSlideOne from "./SixSlide/SixSlideOne";
// import SixSlideOne from './SixSlide/SixSlideOne';

const SixSlide = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        className="mySwiper"
      >
        <SwiperSlide>
          <SixSlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SixSlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SixSlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SixSlideOne />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SixSlide;
