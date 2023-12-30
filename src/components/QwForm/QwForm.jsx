import React, { useRef, useState } from 'react';
import styles from './QwForm.module.scss';
import axios from './../../axios';
import { useTranslation } from 'react-i18next';
import './../../i18next';
import { useInView } from 'react-intersection-observer';
import config from '../../config';
import { useSelector } from 'react-redux';
import { nowLanguage } from '../../redux/slices/language';

export const QwForm = ({ scrollRef }) => {
  const { t } = useTranslation();
  const language = useSelector(nowLanguage);
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.name || formData.phone || formData.email) {
        const response = await axios.post(`${config.API_BASE_URL}/send-email`, formData);

        setFormData({
          name: '',
          phone: '',
          email: '',
        });

        setShowModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
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
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                className={styles.input__phone}
                name="phone"
                placeholder="+7 (777) 777-77-77"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                className={styles.input__email}
                name="email"
                placeholder={t('qwForm.input_email')}
                type="email"
                value={formData.email}
                onChange={handleInputChange}
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

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modal__content}>
            <span className={styles.modal__close} onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>Спасибо! Форма успешно отправлена.</p>
          </div>
        </div>
      )}
    </>
  );
};
