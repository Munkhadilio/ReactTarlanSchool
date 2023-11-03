import React from 'react';
import styles from './News.module.scss';
import { useInView } from 'react-intersection-observer';
import newsIMG1 from './../../images/news/news1.jpg';
import newsIMG2 from './../../images/news/news2.jpg';
import newsIMG3 from './../../images/news/news3.jpg';

export const News = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  const data = [
    {
      img: newsIMG1,
      title: 'Как выбрать профессию?',
      descr:
        'Считается, что сегодняшним школьникам за жизнь придётся сменить 5–7 профессий. Такой уж им достался стремительно меняющийся и непредсказуемый мир.',
      date: '03.02.23',
    },

    {
      img: newsIMG3,
      title: 'Как выбрать профессию?',
      descr:
        'Друзья в детстве — важнейший ресурс для развития. С ними мы проходим первые уроки про доверие, коммуникацию, решение конфликтов, эмпатию, самооценку, поддержку.',
      date: '03.10.23',
    },
    {
      img: newsIMG2,
      title: 'Программы на каникулы с 9 по 13 октября',
      descr: 'Мы спросили ChatGPT, что такое школьные каникулы, и получили ответ...',
      date: '08.10.22',
    },
  ];

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <h1 className={styles.title}>Новости школы</h1>
        <div className={styles.items}>
          {data.map((data, index) => (
            <div className={styles.item} key={index}>
              <img className={styles.news__img} src={data.img} alt="" />
              <h2 className={styles.news__title}>{data.title} </h2>
              <h3 className={styles.news__descr}>{data.descr}</h3>
              <h4 className={styles.news__date}>{data.date}</h4>
            </div>
          ))}
        </div>
        <button>Все новости</button>
      </div>
    </div>
  );
};
