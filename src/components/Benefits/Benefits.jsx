import React from 'react';
import styles from './Benefits.module.scss';
import { useInView } from 'react-intersection-observer';
import footballIMG from './../../images/football.jpg';
import busIMG from './../../images/bus.jpg';
import securityMG from './../../images/security.jpg';
import foodIMG from './../../images/food.jpg';

export const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={ref}>
      <div className="container">
        <h1 className={styles.title}>Пространство и комфорт</h1>
        <div className={styles.items}>
          <div className={`${styles.item} ${styles.first}`}>
            <img src={footballIMG} alt="" />
            <div className={styles.card}>
              <div className={styles.card__content}>
                <h2 className={styles.descr}>Спортивное пространство</h2>
                <h3 className={styles.text}>
                  Зал минифутбола, футбольное поле, зал единоборств, спортивная площадка.
                </h3>
              </div>
            </div>
          </div>

          <div className={`${styles.item} ${styles.second}`}>
            <img src={foodIMG} alt="" />
            <div className={styles.card}>
              <div className={styles.card__content}>
                <h2 className={styles.descr}>Питание</h2>
                <h3 className={styles.text}>
                  У нас в Тарлане есть собственная кухня на которой готовится сбалансированное
                  питание для школьников. Включая меню для аллергиков.
                </h3>
              </div>
            </div>
          </div>

          <div className={`${styles.item} ${styles.third}`}>
            <div className={styles.card}>
              <div className={styles.card__content}>
                <h2 className={styles.descr}>Транспорт</h2>
                <h3 className={styles.text}>
                  По будням утром и вечером курсирует школьный автобус.
                </h3>
              </div>
            </div>
            <img src={busIMG} alt="" />
          </div>

          <div className={`${styles.item} ${styles.fourth}`}>
            <div className={styles.card}>
              <div className={styles.card__content}>
                {' '}
                <h2 className={styles.descr}>Безопасность</h2>
                <h3 className={styles.text}>
                  Безопасность в Тарлане осуществляют: круглосуточная собственная служба
                  безопасности, видеонаблюдение на всей территории, контрольно- пропускной пункт.
                </h3>
              </div>
            </div>
            <img src={securityMG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
