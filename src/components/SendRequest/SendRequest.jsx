import React from 'react';
import styles from './SendRequest.module.scss';
import ReactTyped from 'react-typed';
import { useInView } from 'react-intersection-observer';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveLink, setDropdownStyle } from '../../redux/slices/headerSlice';

import { useTranslation } from 'react-i18next';
import './../../i18next';

export const SendRequest = ({ scrollRef }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
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

  const TypedText = ({ text }) => <ReactTyped strings={text} typeSpeed={25} />;
  const text = [t('sendRequest.title_continuation')];

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            {t('sendRequest.title')} <TypedText text={text} />
          </h1>
          <div className={styles.buttons}>
            <button
              className={styles.apply__button}
              onClick={() => {
                navigate('/admission');
                dispatch(setActiveLink('admission'));
                dispatch(setDropdownStyle(false));
              }}>
              {t('sendRequest.button_how-to-enter-school')}
            </button>
            <button className={styles.button__consultation} onClick={() => scrollToElement()}>
              {t('sendRequest.button_consultation')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
