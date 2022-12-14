import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import SixSlideOne from './SixSlide/SixSlideOne';
// import SixSlideOne from './SixSlide/SixSlideOne';

const SixSlide = () => {
    return (
        <div>
            <Swiper slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide><SixSlideOne /></SwiperSlide>
                <SwiperSlide><SixSlideOne/></SwiperSlide>
                <SwiperSlide><SixSlideOne/></SwiperSlide>
                <SwiperSlide><SixSlideOne/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SixSlide;