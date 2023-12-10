import React from 'react';
import styles from './Director.module.scss';
import { useTranslation } from 'react-i18next';
import './../../i18next';
import { useInView } from 'react-intersection-observer';
import director from './../../images/director1.jpg';

export const Director = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <h1 className={styles.title}> {t('director.title')} </h1>
        <div className={styles.wrapper}>
          <img src={director} alt="" />
          <div className={styles.director}>
            <h3 className={styles.director__text}>
              {t('director.text')}
              <br />
              <br />
            </h3>
            <h3 className={styles.director__name}>{t('director.name')}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
