import React, { useEffect, useRef } from 'react';
import styles from './SelectLang.module.scss';
import ImgKZ from './../../images/lang/KZ.png';
import ImgRU from './../../images/lang/RU.png';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nowLanguage, setLanguage } from '../../redux/slices/language';

export const SelectLang = ({ mobileOnly, setMenuOpen }) => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const timeoutRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  //const { language } = useSelector((state) => state.language);
  const language = useSelector(nowLanguage);

  const languageAll = [
    { id: 1, name: 'ru', image: ImgRU },
    { id: 2, name: 'kz', image: ImgKZ },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const dropdownOptions = languageAll.filter((dropdownLang) => dropdownLang.name !== language);

  return (
    <div className={styles.lang}>
      <div
        className={styles.lang__main}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {languageAll.map((item) => {
          if (item.name === language) {
            return (
              <img key={item.id} className={styles.lang__img} src={item.image} alt={item.name} />
            );
          }
        })}
      </div>
      {dropdownOptions.map(
        (dropdown) =>
          showDropdown && (
            <div
              key={dropdown.id}
              className={styles.lang__dropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <img
                onClick={() => {
                  dispatch(setLanguage(dropdown.name));
                  changeLanguage(dropdown.name);
                  mobileOnly && setMenuOpen(false);
                }}
                className={styles.lang__img}
                src={dropdown.image}
                alt={dropdown.name}
              />
            </div>
          ),
      )}
    </div>
  );
};
