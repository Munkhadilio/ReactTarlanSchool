import React from 'react';
import styles from './Footer.module.scss';
import logo from './../../images/logo.png';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { ReactComponent as Mail } from './../../images/soical-svg/mail.svg';
import { ReactComponent as Instagram } from './../../images/soical-svg/instagram.svg';
import { ReactComponent as Whatsapp } from './../../images/soical-svg/whatsapp.svg';
import { ReactComponent as Youtube } from './../../images/soical-svg/youtube.svg';
import { ReactComponent as Telegram } from './../../images/soical-svg/telegram.svg';
import { logout, userDetails, userDetailsBoolean } from '../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';

export const Footer = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(userDetailsBoolean);

  const onClickLogout = () => {
    dispatch(logout());
    Cookies.remove('accessToken');
  };

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
              {/* <a href="#">
                <Telegram className={styles.social__icons} />
              </a> */}
            </div>
            <div className={styles.address}>
              Республика Казахстан, г. Алматы, мкр «Каргалы» ул. Редько, д.7
            </div>
            <div className={styles.mail}>sicbaiterek@mail.ru</div>
            {isAuth ? (
              ''
            ) : (
              <Link to="/login" className={styles.auth}>
                Панель администратора
              </Link>
            )}
            {isAuth ? (
              <>
                <Link to="/add-post" className={styles.auth}>
                  Написать статью
                </Link>

                <button className={styles.log__out} onClick={() => onClickLogout()}>
                  Выйти
                </button>
              </>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.block2}>
            <h1 className={styles.title}>Контакты</h1>
            <div className={styles.c__item}>
              <div className={styles.name}>Приемная</div>
              <a className={styles.num} href="tel:+77273987256">
                +7 (727) 398-72-56
              </a>
            </div>
            <div className={styles.c__item}>
              <div className={styles.name}>Приемная</div>
              <a className={styles.num} href="tel:+77272211082">
                +7 (727) 221-10-82
              </a>
            </div>
            <div className={styles.c__item}>
              <div className={styles.name}>Богаскулова Салиха Исламбековна, Зам. Ген Директора</div>
              <a className={styles.num} href="tel:+77771812207">
                +7 (777) 181-22-07
              </a>
            </div>
            <div className={styles.c__item}>
              <div className={styles.name}>Ткаченко Елена Васильевна, Завуч по ВР</div>
              <a className={styles.num} href="tel:+77072542168">
                +7 (707) 254-21-68
              </a>
            </div>
            <div className={styles.c__item}>
              <div className={styles.name}>Кабинет завучей</div>
              <a className={styles.num} href="tel:+77272211082">
                +7 (727) 221-10-82
              </a>
            </div>
            <div className={styles.c__item}>
              <div className={styles.name}>
                Адеми Айдаркызы Жамбылова, ассистент по работе с клиентами
              </div>
              <a className={styles.num} href="tel:+77778401585">
                +7 (777) 840-15-85
              </a>
            </div>
          </div>

          <div className={styles.block3}>
            <h1 className={styles.title}>Меню</h1>
            <Link to="/" onClick={window.scrollTo(0, 0)} className={styles.section}>
              Главная
            </Link>
            <Link to="/about" className={styles.section}>
              О школе
            </Link>
            <Link to="/admission" className={styles.section}>
              Поступление
            </Link>
            <Link to="/contacts" className={styles.section}>
              Контакты
            </Link>
            <Link to="" className={styles.section}>
              Детский сад
            </Link>
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
