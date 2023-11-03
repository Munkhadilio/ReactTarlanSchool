import React from 'react';
import styles from './SchoolEnglish.module.scss';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaLanguage, FaUsers, FaBook } from 'react-icons/fa'; // Импортируем несколько иконок из react-icons

export const SchoolEnglish = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`}>
      <div className={styles.container}>
        <h2 className={styles.title} ref={ref}>
          Учебная программа в школе Тарлан
        </h2>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <FaGraduationCap />
            </div>
            <h3 className={styles.text}>
              Школа Тарлан работает по учебной программе, разработанной согласно требованиям
              государственного стандарта.
            </h3>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <FaLanguage />
            </div>
            <h3 className={styles.text}>
              В конце года ученики школы TARLAN SCHOOL сдают Cambridge тест на определение уровня
              английского языка. Результаты всех экзаменов Cambridge English дают подробное
              представление об успеваемости учеников и их способностях на каждом уровне
              общеевропейской шкалы языковых компетенций (CEFR). Экзамены Cambridge English
              пользуются доверием и признаются тысячами организациями по всему миру.
            </h3>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <FaUsers />
            </div>
            <h3 className={styles.text}>
              Мы также гордимся тем, что в нашей школе английский язык преподаётся носителем языка,
              что обеспечивает более глубокое и качественное обучение.
            </h3>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <FaBook />
            </div>
            <h3 className={styles.text}>
              Школа "TARLAN SCHOOL" работает по учебной программе, разработанной согласно
              требованиям государственного стандарта и Оксфордской образовательной программы
              (включая интенсивное изучение дисциплин на английском языке)
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
