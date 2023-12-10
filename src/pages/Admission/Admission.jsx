import React from 'react';
import styles from './Admisson.module.scss';
import { useTranslation } from 'react-i18next';
import './../../i18next';
import { Contacts } from './../Contacts/Contacts';
import { useInView } from 'react-intersection-observer';
export const Admission = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <>
      <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
        <div className="container">
          <h2 className={styles.title}>{t('admission.title')}</h2>
          <div className={styles.block1}>
            <h4 className={styles.subtitle}>{t('admission.firstGrade.title')}</h4>
            <ul className={styles.check__list}>
              <li>{t('admission.firstGrade.li1-firstGrade')}</li>
              <li>{t('admission.firstGrade.li2-firstGrade')}</li>
              <li>{t('admission.firstGrade.li3-firstGrade')}</li>
              <li>{t('admission.firstGrade.li4-firstGrade')}</li>
              <li>{t('admission.firstGrade.li5-firstGrade')}</li>
              <li>{t('admission.firstGrade.li6-firstGrade')}</li>
            </ul>
          </div>

          <div className={styles.block2}>
            <h4 className={styles.subtitle}>{t('admission.secondClass.title')}</h4>
            <h6 className={styles.descr}>{t('admission.secondClass.subtitle')}</h6>
            <ul className={styles.check__list}>
              <li>{t('admission.secondClass.li1-secondClass')}</li>
              <li>{t('admission.secondClass.li2-secondClass')}</li>
              <li>{t('admission.secondClass.li3-secondClass')}</li>
              <li>{t('admission.secondClass.li4-secondClass')}</li>
              <li>{t('admission.secondClass.li5-secondClass')}</li>
              <li>{t('admission.secondClass.li6-secondClass')}</li>
              <li>{t('admission.secondClass.li7-secondClass')}</li>
              <li>{t('admission.secondClass.li8-secondClass')}</li>
            </ul>
          </div>
        </div>
      </div>
      <Contacts />
    </>
  );
};
