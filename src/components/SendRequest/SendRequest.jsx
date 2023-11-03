import React from 'react';
import styles from './SendRequest.module.scss';
import { useInView } from 'react-intersection-observer';
import TarlanSchool from './../../images/TarlanSchool2.png';
import { Link } from 'react-router-dom';

export const SendRequest = ({ scrollRef }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  const scrollToElement = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <h1 className={styles.title}>
          Международная частная школа с уникальным образовательным подходом для вашего ребенка!
        </h1>
        <div className={styles.buttons}>
          <button className={styles.apply__button}>
            <Link to="/admission">Как поступить</Link>
          </button>
          <button className={styles.button__consultation} onClick={() => scrollToElement()}>
            Получить консультацию
          </button>
        </div>
        {/* <img className={styles.schoolIMG} src={TarlanSchool} alt="School" /> */}
      </div>
    </div>
  );
};
