import React from 'react';
import styles from './SendRequest.module.scss';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export const SendRequest = ({ scrollRef }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  const scrollToElement = () => {
    const element = scrollRef.current;

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const middle = absoluteElementTop - window.innerHeight / 2;
      window.scrollTo({ top: middle, behavior: 'smooth' });
    }
  };

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <h1 className={styles.title}>
          Частная школа с уникальным образовательным подходом для вашего ребенка!
        </h1>
        <div className={styles.buttons}>
          <button className={styles.apply__button}>
            <Link to="/admission">Как поступить</Link>
          </button>
          <button className={styles.button__consultation} onClick={() => scrollToElement()}>
            Получить консультацию
          </button>
        </div>
      </div>
    </div>
  );
};
