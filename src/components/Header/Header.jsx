import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import logo from './../../images/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setActiveLink, setDropdownStyle } from '../../redux/slices/headerSlice';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Header = ({ scrollRef }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const { activeLink, styleContent } = useSelector((state) => state.header);

  const handleLinkClick = () => {
    setShowDropdown(false); // Установка состояния на false после клика на ссылку
  };

  const handleDropdownClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToElement = async () => {
    await navigate('/');
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const linkClick = (route, dropdownStyle) => {
    dispatch(setActiveLink(route));
    dispatch(setDropdownStyle(dropdownStyle));
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 1000);
  };
  useEffect(() => {
    // Установить isMenuOpen в false при каждом изменении маршрута
    setMenuOpen(false);
  }, [location]);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Компьютерная версия */}
      <header className={`${styles.root} ${styles.desktopOnly}`}>
        <div className="container">
          <div className={styles.wrapper}>
            <Link to="/">
              <img
                className={styles.logo}
                src={logo}
                alt="logo"
                onClick={() => {
                  window.scrollTo(0, 0);
                  linkClick('home', false);
                }}
              />
            </Link>
            <div className={styles.nav}>
              <Link
                className={`${styles.nav__a} ${activeLink === 'home' ? styles.nav__a__active : ''}`}
                to="/"
                onClick={() => {
                  linkClick('home', false);
                }}>
                Главная
              </Link>
              <div
                className={`${styles.dropdown} ${styleContent ? styles.nav__a__active : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                О школе
                <div
                  className={`${styles.dropdown__arrow} ${
                    showDropdown ? styles.dropdown__arrow__active : ''
                  }`}></div>
                {showDropdown && (
                  <div className={styles.dropdown__content}>
                    <Link
                      className={`${styles.dropdown__a} ${
                        activeLink === 'about' ? styles.dropdown__a__active : ''
                      }`}
                      to="/about"
                      onClick={() => {
                        handleLinkClick();
                        linkClick('about', true);
                      }}>
                      О нас
                    </Link>
                    <Link
                      className={`${styles.dropdown__a} ${
                        activeLink === 'teachers' ? styles.dropdown__a__active : ''
                      }`}
                      to="/teachers"
                      onClick={() => {
                        handleLinkClick();
                        linkClick('teachers', true);
                      }}>
                      Преподаватели
                    </Link>
                    <Link
                      className={`${styles.dropdown__a} ${
                        activeLink === 'news' ? styles.dropdown__a__active : ''
                      }`}
                      to="/news"
                      onClick={() => {
                        handleLinkClick();
                        linkClick('news', true);
                      }}>
                      Новости
                    </Link>
                  </div>
                )}
              </div>
              <Link
                className={`${styles.nav__a} ${
                  activeLink === 'admission' ? styles.nav__a__active : ''
                }`}
                to="/admission"
                onClick={() => {
                  linkClick('admission', false);
                }}>
                Правила поступления
              </Link>
              <Link
                className={`${styles.nav__a} ${
                  activeLink === 'contacts' ? styles.nav__a__active : ''
                }`}
                to="/contacts"
                onClick={() => {
                  linkClick('contacts', false);
                }}>
                Контакты
              </Link>
              <a
                className={`${styles.nav__a} ${
                  activeLink === 'tarlan-kids' ? styles.nav__a__active : ''
                }`}
                onClick={() => {
                  linkClick('tarlan-kids', false);
                }}
                href="https://tarlan-kids.kz/index.php/ru/">
                Детский сад
              </a>
            </div>
          </div>
        </div>
      </header>

      <header className={`${styles.root} ${styles.mobileOnly}`}>
        <div className={styles.wrapper}>
          <Link className={`${styles.logo}`} to="/">
            <img
              className={styles.logo}
              src={logo}
              alt="logo"
              onClick={() => {
                window.scrollTo(0, 0);
                linkClick('home', false);
              }}
            />
          </Link>
          <div className={styles.menuControls}>
            <svg
              className={`${styles.ham} ${styles.hamRotate} ${styles.ham8} ${
                isMenuOpen ? styles.active : ''
              } `}
              viewBox="0 0 100 100"
              width="60"
              onClick={() => handleDropdownClick()}>
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
                  <Link
                    className={`${styles.nav__a} ${
                      activeLink === 'home' ? styles.nav__a__active : ''
                    }`}
                    to="/"
                    onClick={() => {
                      linkClick('home', false);
                    }}>
                    Главная
                  </Link>
                  <Link
                    className={`${styles.dropdown__a} ${
                      activeLink === 'about' ? styles.dropdown__a__active : ''
                    }`}
                    to="/about"
                    onClick={() => {
                      handleLinkClick();
                      linkClick('about', true);
                    }}>
                    О нас
                  </Link>
                  <Link
                    className={`${styles.dropdown__a} ${
                      activeLink === 'teachers' ? styles.dropdown__a__active : ''
                    }`}
                    to="/teachers"
                    onClick={() => {
                      handleLinkClick();
                      linkClick('teachers', true);
                    }}>
                    Преподаватели
                  </Link>
                  <Link
                    className={`${styles.dropdown__a} ${
                      activeLink === 'news' ? styles.dropdown__a__active : ''
                    }`}
                    to="/news"
                    onClick={() => {
                      handleLinkClick();
                      linkClick('news', true);
                    }}>
                    Новости
                  </Link>
                  <Link
                    className={`${styles.nav__a} ${
                      activeLink === 'admission' ? styles.nav__a__active : ''
                    }`}
                    to="/admission"
                    onClick={() => {
                      linkClick('admission', false);
                    }}>
                    Правила поступления
                  </Link>
                  <Link
                    className={`${styles.nav__a} ${
                      activeLink === 'contacts' ? styles.nav__a__active : ''
                    }`}
                    to="/contacts"
                    onClick={() => {
                      linkClick('contacts', false);
                    }}>
                    Контакты
                  </Link>
                  <a
                    className={`${styles.nav__a} ${
                      activeLink === 'tarlan-kids' ? styles.nav__a__active : ''
                    }`}
                    onClick={() => {
                      linkClick('tarlan-kids', false);
                    }}
                    href="https://tarlan-kids.kz/index.php/ru/">
                    Детский сад
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
