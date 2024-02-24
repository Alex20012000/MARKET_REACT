'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import Image from 'next/image';
import Slide_1 from '@/assets/images/slide-1.jpg';
import Slide_2 from '@/assets/images/slide-2.jpg';
import Slide_3 from '@/assets/images/slide-3.jpg';

import 'swiper/css';
import 'swiper/scss/pagination';
import style from './Slider.module.scss';

const Slider = () => {
    return <div className = {style.wrapper}>
        <Swiper
            modules = {[Pagination, Autoplay]}
            slidesPerView = {1}
            onSlideChange = {() => console.log('slide change')}
            onSwiper = {(swiper) => console.log(swiper)}
            autoplay = {{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination = {{
                clickable: true,
            }}
            centeredSlides = {true}
        >
            <SwiperSlide><Image src = {Slide_1} alt = 'Slide_1' /></SwiperSlide>
            <SwiperSlide><Image src = {Slide_2} alt = 'Slide_2' /></SwiperSlide>
            <SwiperSlide><Image src = {Slide_3} alt = 'Slide_3' /></SwiperSlide>
        </Swiper>
    </div>
}

export default Slider;