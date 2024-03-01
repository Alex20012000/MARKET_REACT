'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import Image from 'next/image';
import Slide_1 from '@/assets/images/slide-1.jpg';
import Slide_2 from '@/assets/images/slide-2.jpg';
import Slide_3 from '@/assets/images/slide-3.jpg';
import arrowLongSvg from '@/assets/images/arrowLong.svg';


import 'swiper/css';
import 'swiper/scss/pagination';
import style from './Slider.module.scss';
import cn from 'classnames';

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
        <div className = {cn(style.promo_stiker, style.promo_stiker_1)}>
            <div className={style.sticker__first}>
                <span className={style.sticker__text}>
                    Change<br/>old book<br/>on new
                </span>
                <div className = {style.sticker__svg}><Image src = {arrowLongSvg} alt = 'promo1'/></div>
            </div>
        </div>
        <div className = {cn(style.promo_stiker, style.promo_stiker_2)}>   
            <div className={style.sticker__second}>
                <span className={style.sticker__text}>
                top<br/>100<br/>books<br/> 2022
                </span>
                <div className={style.sticker__svg}><Image src = {arrowLongSvg} alt = 'promo2'/></div>
            </div>
        </div>
    </div>
}

export default Slider;