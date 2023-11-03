import React from 'react';
import styles from './EduConcept.module.scss';
import { useInView } from 'react-intersection-observer';
import edu1 from './../../images/eduConcept1.png';
import edu2 from './../../images/eduConcept2.png';
import edu3 from './../../images/eduConcept3.png';

export const EduConcept = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className={styles.container}>
        <h1 className={styles.subtitle}>Все ступени образования: от детского сада до 11 класса.</h1>
        <h2 className={styles.title}>Образовательная концепция</h2>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={edu3} alt="edu3" />
            <h3 className={styles.text}>
              Наши преподаватели - это высококвалифицированные специалисты, готовые делиться своими
              знаниями и опытом с учениками.
            </h3>
          </div>
          <div className={styles.item}>
            <img src={edu2} alt="edu2" />
            <h3 className={styles.text}>
              Мы стремимся предоставить уникальное образование для каждого ученика. Наши учебные
              программы разработаны так, чтобы каждый ученик мог найти что-то, что вдохновляет и
              помогает раскрыть свой потенциал.
            </h3>
          </div>
          <div className={styles.item}>
            <img src={edu1} alt="edu1" />
            <h3 className={styles.text}>
              Мы стремимся не только развивать интеллект, но и культивировать творческое мышление и
              уверенность в себе, подготавливая к разнообразным вызовам современного мира.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
