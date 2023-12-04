import React from 'react';
import Chess from './../../images/Mugs/Chess.jpg';
import Dance from './../../images/Mugs/Dancing.jpg';
import Mindstorms from './../../images/Mugs/LegoMindstorms.jpg';

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Mugs.module.scss';

import { Mousewheel, Pagination } from 'swiper/modules';

export default function Mugs() {
  const images = [
    {
      img: Chess,
      mugName: 'Шахматы',
      mugText:
        'Присоединяйтесь к шахматной секции! Развивайте свои умственные способности, предвосхищайте ходы и наслаждайтесь игрой, погружаясь в увлекательный мир шахмат.',
    },
    {
      img: Dance,
      mugName: 'Танцы',
      mugText:
        'Откройте для себя мир танцев вместе с танцевальной секцией! Отталкивайтесь от ритма, раскройте свой талант и наслаждайтесь каждым движением, погружаясь в атмосферу танцевальных эмоций.',
    },
    {
      img: Mindstorms,
      mugName: 'Робототехника Lego Mindstorms',
      mugText:
        'Примите вызов технологических инноваций в робототехнической секции! Создавайте, программируйте и воплощайте свои идеи в жизнь, погружаясь в захватывающий мир робототехники и инженерии.',
    },
  ];

  return (
    <div className="mugsSlider">
      <div className="container">
        <h2 className="mugsSlider__title">Кружки и секции</h2>
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
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
