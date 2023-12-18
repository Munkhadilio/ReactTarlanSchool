import React, { useRef } from 'react';
import styles from './QwForm.module.scss';
import axios from './../../axios';
import { useTranslation } from 'react-i18next';
import './../../i18next';
import { useInView } from 'react-intersection-observer';
import config from '../../config';
import { useSelector } from 'react-redux';
import { nowLanguage } from '../../redux/slices/language';

export const QwForm = ({ scrollRef }) => {
  // scrollRef передаем его в Home
  const { t } = useTranslation();
  const language = useSelector(nowLanguage);
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await axios.post(`${config.API_BASE_URL}/send-email`, data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{t('qwForm.questions')}</h3>
          <h3 className={styles.descr}>{t('qwForm.selectionCommittee')}</h3>
          <form action="" ref={scrollRef} onSubmit={(e) => handleSubmit(e)}>
            <input
              className={styles.input__name}
              name="name"
              placeholder={t('qwForm.input_name')}
              type="text"
            />
            <input className={styles.input__phone} name="phone" placeholder="+7 (777) 777-77-77" />
            <input
              className={styles.input__email}
              name="email"
              placeholder={t('qwForm.input_email')}
              type="email"
            />
            <button className={styles.form__button} type="submit">
              {t('qwForm.button_send')}
            </button>
          </form>
          {/* <a className={styles.privacy}>
            {language === 'ru' ? (
              <>
                Нажимая на кнопку «Отправить» я соглашаюсь с{' '}
                <span>политикой конфиденциальности</span>
              </>
            ) : (
              <>
                «Жіберу» түймесін басу арқылы мен <span>құпиялылық саясатымен</span> келісемін
              </>
            )}
          </a> */}
        </div>
      </div>
    </div>
  );
};
