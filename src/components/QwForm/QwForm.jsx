import React, { useRef } from 'react';
import styles from './QwForm.module.scss';
import { useInView } from 'react-intersection-observer';

export const QwForm = ({ scrollRef }) => {
  // scrollRef передаем его в Home
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Остались вопросы?</h3>
          <h3 className={styles.descr}>Свяжитесь с нашей приемной комиссией</h3>
          <form action="" ref={scrollRef}>
            <input
              className={styles.input__name}
              name="name"
              placeholder="Как вас зовут?"
              type="text"
            />
            <input className={styles.input__phone} name="phone" placeholder="+7 (777) 777-77-77" />
            <input
              className={styles.input__email}
              name="email"
              placeholder="Электронная почта"
              type="email"
            />
            <button className={styles.form__button}>Отправить</button>
          </form>
          <a className={styles.privacy}>
            Нажимая на кнопку «Отправить» я соглашаюсь с <span>политикой конфиденциальности</span>
          </a>
        </div>
      </div>
    </div>
  );
};
