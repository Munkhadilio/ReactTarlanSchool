import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import logo from './../../images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Mail } from './../../images/soical-svg/mail.svg';
import { ReactComponent as Instagram } from './../../images/soical-svg/instagram.svg';
import { ReactComponent as Whatsapp } from './../../images/soical-svg/whatsapp.svg';
import { ReactComponent as Youtube } from './../../images/soical-svg/youtube.svg';
import { ReactComponent as Telegram } from './../../images/soical-svg/telegram.svg';

export const Header = ({ scrollRef }) => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToElement = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // const dropownClick = (e) => {
  //   setDropdownOpen(!isDropdownOpen);
  // };

  useEffect(() => {
    // Установить isMenuOpen в false при каждом изменении маршрута
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Компьютерная версия */}
      <header className={`${styles.root} ${styles.desktopOnly}`}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.block1}>
              <Link className={''} to="/">
                <img src={logo} alt="logo" onClick={() => window.scrollTo(0, 0)} />
              </Link>
            </div>

            <div className={styles.rside}>
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
              <a className={styles.phone} href="tel:+77273987256">
                +7 (727) 398-72-56{' '}
              </a>
              <button className={styles.button__consultation} onClick={() => scrollToElement()}>
                Получить консультацию
              </button>
              <a href="#">RU</a>
            </div>
          </div>
          {/* <div className={styles.line}></div> */}
          <div className={styles.nav}>
            <Link className={''} to="/">
              Главная
            </Link>{' '}
            <Link className={''} to="/about">
              О школе
            </Link>
            {/* <div className={styles.dropdown}>
              <div className={styles.dropbtn} onClick={dropownClick}>
                О школе
                <div className={styles.drowdown__arrow}></div>
              </div>
              <div
                className={`${styles.dropdown__content} ${
                  isDropdownOpen ? styles.dropdown__content__active : ''
                } `}>
                <Link className={''} to="/about">
                  О нас
                </Link>
                <Link className={''} to="/about">
                  О школе
                </Link>
                <Link className={''} to="/about">
                  О школе
                </Link>
              </div>
            </div> */}
            <Link className={''} to="/admission">
              Поступление
            </Link>
            <Link className={''} to="/contacts">
              Контакты
            </Link>
            <a href="https://tarlan-kids.kz/index.php/ru/">Детский сад</a>
          </div>
        </div>
      </header>

      <header className={`${styles.root} ${styles.mobileOnly}`}>
        <div className="container">
          <div className={styles.wrapper}>
            <Link className={`${styles.logo}`} to="/">
              <img src={logo} alt="logo" onClick={() => window.scrollTo(0, 0)} />
            </Link>
            <div className={styles.menuControls}>
              <svg
                className={`${styles.ham} ${styles.hamRotate} ${styles.ham8} ${
                  isMenuOpen ? styles.active : ''
                } `}
                viewBox="0 0 100 100"
                width="60"
                onClick={() => handleClick()}>
                <path
                  className={`${styles.line}  ${styles.top} `}
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                />
                <path className={`${styles.line} ${styles.middle} `} d="m 30,50 h 40" />
                <path
                  className={`${styles.line} ${styles.bottom} `}
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                />
              </svg>
            </div>
            {isMenuOpen && (
              <div className={`${styles.splash} ${isMenuOpen ? styles.splash__active : ''}`}>
                <div className={styles.menu__items}>
                  <div className={styles.nav}>
                    <Link className={''} to="/">
                      Главная
                    </Link>
                    <Link className={''} to="/about">
                      О школе
                    </Link>
                    <Link className={''} to="/admission">
                      Поступление
                    </Link>
                    <Link className={''} to="/contacts">
                      Контакты
                    </Link>
                    <a href="https://tarlan-kids.kz/index.php/ru/">Детский сад</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
