import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide1 from '../assets/slider1.jpg'
import slide2 from '../assets/slider2.jpg'
import slide3 from '../assets/slider3.jpg'
import slide4 from '../assets/slider4.jpg'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Courasel() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide> 
        <img  style={{height:460 }} src={slide1} alt="" /> </SwiperSlide>
        <SwiperSlide> <img  style={{height:460 }} src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img  style={{height:460 }} src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img  style={{height:460 }} src={slide4} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
