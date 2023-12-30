import React from 'react';
import { useTranslation } from 'react-i18next';
import './../../i18next';
import Chess from './../../images/Mugs/Chess.jpg';
import Dance from './../../images/Mugs/Dancing.jpg';
import Mindstorms from './../../images/Mugs/LegoMindstorms.jpg';

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Mugs.module.scss';

import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';

export default function Mugs() {
  const { t } = useTranslation();
  const chessMugName = t('mugs.chess.title');
  const chessMugText = t('mugs.chess.text');
  const danceMugName = t('mugs.dance.title');
  const danceMugText = t('mugs.dance.text');
  const roboticsMugName = t('mugs.robotics.title');
  const roboticsMugText = t('mugs.robotics.text');

  const images = [
    {
      img: Chess,
      mugName: chessMugName,
      mugText: chessMugText,
    },
    {
      img: Dance,
      mugName: danceMugName,
      mugText: danceMugText,
    },
    {
      img: Mindstorms,
      mugName: roboticsMugName,
      mugText: roboticsMugText,
    },
  ];

  return (
    <div className="mugsSlider">
      <div className="container">
        <h2 className="mugsSlider__title"> {t('mugs.title')}</h2>
        <Swiper
          direction={'horizontal'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Mousewheel, Pagination]}
          className="swiper2">
          {images.map((mug, index) => (
            <SwiperSlide key={index}>
              <div className="swiper__img">
                <img src={mug.img} alt="" />
              </div>
              <div className="swiper__content">
                <div className="swiper__title">{mug.mugName}</div>
                <div className="swiper__text">{mug.mugText}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
