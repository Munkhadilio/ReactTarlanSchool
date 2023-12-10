import React from 'react';
import styles from './AboutSchool.module.scss';
import { useTranslation } from 'react-i18next';
import './../../i18next';
import { nowLanguage } from '../../redux/slices/language';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

export const AboutSchool = () => {
  const language = useSelector(nowLanguage);
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <h1>
          {language === 'ru' ? (
            <>
              Добро пожаловать в <span>Tarlan School</span>
            </>
          ) : (
            <>
              <span>Тарлан мектебіне</span> қош келдіңіз
            </>
          )}
        </h1>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            {t('aboutSchool.text1')}
            <br />
            <br />
            {t('aboutSchool.text2')}
          </div>
          <div className={styles.youTube}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AvivN8PgJhE?si=1oV2eUjsFreOc8rL&amp;start=33"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BwqIlQz8hcA?si=1S7nuAUQoNELY5lG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
