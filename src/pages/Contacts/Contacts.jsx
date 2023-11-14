import React from 'react';
import styles from './Contacts.module.scss';
import { useInView } from 'react-intersection-observer';

export const Contacts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });
  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className={styles.container}>
        <h1 className={styles.title}>Адрес и контакты</h1>
        <div className={styles.wrapper}>
          <div className={styles.contacts}>
            <div className={styles.items}>
              <div className={styles.name}>Приемная</div>
              <a className={styles.num} href="tel:+77273987256">
                +7 (727) 398-72-56
              </a>
            </div>
            <div className={styles.items}>
              <div className={styles.name}>Приемная</div>
              <a className={styles.num} href="tel:+77273987257">
                +7 (727) 398-72-57
              </a>
            </div>
            <div className={styles.items}>
              <div className={styles.name}>Богаскулова Салиха Исламбековна, Зам. Ген Директора</div>
              <a className={styles.num} href="tel:+77771812207">
                +7 (777) 181-22-07
              </a>
            </div>
            <div className={styles.items}>
              <div className={styles.name}>Ткаченко Елена Васильевна, Завуч по ВР</div>
              <a className={styles.num} href="tel:+77072542168">
                +7 (707) 254-21-68
              </a>
            </div>{' '}
            <div className={styles.items}>
              <div className={styles.name}>Кабинет завучей</div>
              <a className={styles.num} href="tel:+77272211082">
                +7 (727) 221-10-82
              </a>
            </div>{' '}
            <div className={styles.items}>
              <div className={styles.name}>
                Адеми Айдаркызы Жамбылова, ассистент по работе с клиентами
              </div>
              <a className={styles.num} href="tel:+77778401585">
                +7 (777) 840-15-85
              </a>
            </div>
          </div>
          <div className={styles.responsive__map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5820.14978186794!2d76.87208859515675!3d43.16595212409241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836919c2718467%3A0xb885df235642499f!2z0KjQutC-0LvQsCBUQVJMQU4gU0NIT09MICjRgNCw0L3QtdC1INCc0KjQmyAi0JHQsNC50YLQtdGA0LXQuiIp!5e0!3m2!1sru!2skz!4v1698688201818!5m2!1sru!2skz"
              width="100%"
              height="100%"
              style={{ border: '0' }} // Используйте объект стилей
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
