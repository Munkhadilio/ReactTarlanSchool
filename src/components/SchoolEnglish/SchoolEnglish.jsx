import React from 'react';
import styles from './SchoolEnglish.module.scss';
import { useTranslation } from 'react-i18next';
import './../../i18next';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaLanguage, FaUsers, FaBook } from 'react-icons/fa'; // Импортируем несколько иконок из react-icons

export const SchoolEnglish = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`}>
      <div className="container">
        <h2 className={styles.title} ref={ref}>
          {t('schoolEnglish.title')}
        </h2>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <FaUsers />
            </div>
            <h3 className={styles.text}>{t('schoolEnglish.block3')}</h3>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <FaLanguage />
            </div>
            <h3 className={styles.text}>{t('schoolEnglish.block2')}</h3>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <FaGraduationCap />
            </div>
            <h3 className={styles.text}>{t('schoolEnglish.block4')}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
