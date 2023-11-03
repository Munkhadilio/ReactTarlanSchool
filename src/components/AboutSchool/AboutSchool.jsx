import React from 'react';
import styles from './AboutSchool.module.scss';
import { useInView } from 'react-intersection-observer';

export const AboutSchool = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`}>
      <div className={styles.container}>
        <h1>О школе</h1>
        <div className={styles.text} ref={ref}>
          Международная школа Tarlan Scholl начала работу в период обновления Казахстанского
          образования. Уровень образования будущих выпускников школы позволяет им успешно поступать
          в лучшие университеты мира, и учиться там, демонстрируя качество Казахстанского
          образования. За это время школа Tarlan Scholl стала инновационной школой, ориентированной
          на лучшие образцы мирового опыта в образовании.
          <br />
          <br />
          Профессиональная международная команда педагогов создают и поддерживают образовательную
          среду, мотивирующую учеников на достижение высоких результатов в обучении, способствующую
          формированию широкого мышления и разностороннему развитию.
        </div>
      </div>
    </div>
  );
};
