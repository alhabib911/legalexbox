import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import EightSlideFour from './EightSlide/EightSlideFour';
import EightSlideOne from './EightSlide/EightSlideOne';
import EightSlideThree from './EightSlide/EightSlideThree';
import EightSlideTwo from './EightSlide/EightSlideTwo';

const EighthSlider = () => {
    return (
        <div className='mx-20'>
            <Swiper slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide><EightSlideOne /></SwiperSlide>
                <SwiperSlide><EightSlideTwo/></SwiperSlide>
                <SwiperSlide><EightSlideThree/></SwiperSlide>
                <SwiperSlide><EightSlideFour/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default EighthSlider;