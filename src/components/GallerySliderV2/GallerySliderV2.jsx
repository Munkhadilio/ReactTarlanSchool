import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from './../../images/slickdemo/img__slider_1.jpg';
import img2 from './../../images/slickdemo/img__slider_2.jpg';
import img3 from './../../images/slickdemo/img__slider_3.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './GallerySliderV2.module.scss';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function GallerySliderV2() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });
  const images = [img1, img2, img3];

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="gallerySwiper">
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide${index}`} className={styles.slider__img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
