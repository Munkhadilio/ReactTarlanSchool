import React from 'react';
import styles from './EduConcept.module.scss';
import { useTranslation } from 'react-i18next';
import './../../i18next';
import { useInView } from 'react-intersection-observer';
import edu1 from './../../images/eduConcept1.png';
import edu2 from './../../images/eduConcept2.png';
import edu3 from './../../images/eduConcept3.png';

export const EduConcept = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <h1 className={styles.subtitle}>{t('eduConcept.title')}</h1>
        <h2 className={styles.title}>{t('eduConcept.subtitle')}</h2>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={edu2} alt="edu3" />
            <h3 className={styles.text}>{t('eduConcept.block1')}</h3>
          </div>
          <div className={styles.item}>
            <img src={edu1} alt="edu2" />
            <h3 className={styles.text}>{t('eduConcept.block2')}</h3>
          </div>
          <div className={styles.item}>
            <img src={edu3} alt="edu1" />
            <h3 className={styles.text}>{t('eduConcept.block3')}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
