import React from 'react';
import styles from './Footer.module.scss';
import logo from './../../images/logo.png';
import { ReactComponent as Mail } from './../../images/soical-svg/mail.svg';
import { ReactComponent as Instagram } from './../../images/soical-svg/instagram.svg';
import { ReactComponent as Whatsapp } from './../../images/soical-svg/whatsapp.svg';
import { ReactComponent as Youtube } from './../../images/soical-svg/youtube.svg';
import { ReactComponent as Telegram } from './../../images/soical-svg/telegram.svg';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.block1}>
            <div className={styles.logo}>
              <img src={logo} alt="" />
              <div className={styles.logo__text}>
                TARLAN <br /> <span>SCHOOL</span>
              </div>
            </div>
            <div className={styles.social}>
              <a href="#">
                <Mail className={styles.social__icons} />
              </a>
              <a href="#">
                <Instagram className={styles.social__icons} />
              </a>
              <a href="#">
                <Whatsapp className={styles.social__icons} />
              </a>
              <a href="#">
                <Youtube className={styles.social__icons} />
              </a>
              <a href="#">
                <Telegram className={styles.social__icons} />
              </a>
            </div>
            <div className={styles.address}>
              Республика Казахстан, г. Алматы, мкр «Каргалы» ул. Редько, д.7
            </div>
            <div className={styles.mail}>sicbaiterek@mail.ru</div>
            <div className={styles.auth}>Панель администратора</div>
          </div>

          <div className={styles.block2}>
            <h1 className={styles.title}>Контакты</h1>
            <div className={styles.items}>
              <div className={styles.name}>Приемная</div>
              <div className={styles.num}>+7 (727) 398-72-56 </div>
            </div>
            <div className={styles.items}>
              <div className={styles.name}>Приемная</div>
              <div className={styles.num}>+7 (727) 221-10-82</div>
            </div>
            <div className={styles.items}>
              <div className={styles.name}>
                Ким Игорь Леонидович, Генеральный Директор МШЛ "Байтерек"
              </div>
              <div className={styles.num}>+7 (701) 515-72-60</div>
            </div>
            <div className={styles.items}>
              <div className={styles.name}>Богаскулова Салиха Исламбековна, Зам. Ген Директора</div>
              <div className={styles.num}>+7 (777) 181 2207</div>
            </div>
          </div>

          <div className={styles.block3}>
            <h1 className={styles.title}>Меню</h1>
            <h3 className={styles.section}>О школе</h3>
            <h3 className={styles.section}>Поступление</h3>
            <h3 className={styles.section}>Школьная жизнь</h3>
            <h3 className={styles.section}>Контакты</h3>
            <h3 className={styles.section}>Детский сад</h3>
          </div>

          <div className={styles.block4}>
            <h1 className={styles.title}>Рабочие дни</h1>
            <h3 className={styles.time}>Понедельник - Пятница с 08:00 - 18:00 (детский сад)</h3>
            <h3 className={styles.time}>Понедельник - Пятница с 08:30 - 16:05 (школа)</h3>
            <h3 className={styles.time}>Суббота - Воскресенье: выходные</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};
