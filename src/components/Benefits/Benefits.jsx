import React from 'react';
import styles from './Benefits.module.scss';
import { useTranslation } from 'react-i18next';
import './../../i18next';
import { useInView } from 'react-intersection-observer';
import footballIMG from './../../images/football.jpg';
import busIMG from './../../images/bus.jpg';
import securityMG from './../../images/security.jpg';
import foodIMG from './../../images/food.jpg';

export const Benefits = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <h1 className={styles.title}>{t('benefits.title')}</h1>
        <div className={styles.items}>
          <div className={`${styles.item} ${styles.first}`}>
            <img src={footballIMG} alt="" />
            <div className={styles.card}>
              <div className={styles.card__content}>
                <h2 className={styles.descr}>{t('benefits.sport.title')}</h2>
                <h3 className={styles.text}>{t('benefits.sport.text')}</h3>
              </div>
            </div>
          </div>

          <div className={`${styles.item} ${styles.second}`}>
            <img src={foodIMG} alt="" />
            <div className={styles.card}>
              <div className={styles.card__content}>
                <h2 className={styles.descr}>{t('benefits.nutrition.title')}</h2>
                <h3 className={styles.text}>{t('benefits.nutrition.text')}</h3>
              </div>
            </div>
          </div>

          <div className={`${styles.item} ${styles.third}`}>
            <div className={styles.card}>
              <div className={styles.card__content}>
                <h2 className={styles.descr}>{t('benefits.transport.title')}</h2>
                <h3 className={styles.text}>{t('benefits.transport.text')}</h3>
              </div>
            </div>
            <img src={busIMG} alt="" />
          </div>

          <div className={`${styles.item} ${styles.fourth}`}>
            <div className={styles.card}>
              <div className={styles.card__content}>
                <h2 className={styles.descr}>{t('benefits.safety.title')}</h2>
                <h3 className={styles.text}>{t('benefits.safety.text')}</h3>
              </div>
            </div>
            <img src={securityMG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
