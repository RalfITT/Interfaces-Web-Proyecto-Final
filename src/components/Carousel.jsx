import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css';

import Slide1 from './slides/slide1';
import Slide2 from './slides/slide2';
import Slide3 from './slides/slide3';
import Slide4 from './slides/slide4';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Carousel() {
    return (
        <>
            <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Slide1 /></SwiperSlide>
                <SwiperSlide><Slide2 /></SwiperSlide>
                <SwiperSlide><Slide3 /></SwiperSlide>
                <SwiperSlide><Slide4 /></SwiperSlide>
            </Swiper>
        </>
    );
}
