import React from 'react';
import styles from './AboutSchool.module.scss';
import { useInView } from 'react-intersection-observer';

export const AboutSchool = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`}>
      <div className="container">
        <h1>
          Добро пожаловать в <span>Tarlan School</span>
        </h1>
        <div className={styles.wrapper}>
          <div className={styles.text} ref={ref}>
            Частная школа Tarlan School начала работу в период обновления Казахстанского
            образования. Уровень образования будущих выпускников школы позволяет им успешно
            поступать в лучшие университеты мира, и учиться там, демонстрируя качество
            Казахстанского образования. За это время школа Tarlan School стала инновационной школой,
            ориентированной на лучшие образцы мирового опыта в образовании.
            <br />
            <br />
            Профессиональная международная команда педагогов создают и поддерживают образовательную
            среду, мотивирующую учеников на достижение высоких результатов в обучении,
            способствующую формированию широкого мышления и разностороннему развитию.
          </div>
          <div className={styles.youTube}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AvivN8PgJhE?si=1oV2eUjsFreOc8rL&amp;start=33"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BwqIlQz8hcA?si=1S7nuAUQoNELY5lG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
