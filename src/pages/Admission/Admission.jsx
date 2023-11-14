import React from 'react';
import styles from './Admisson.module.scss';
import { Contacts } from './../Contacts/Contacts';
import { Price } from '../../components/Price/Price';
export const Admission = () => {
  return (
    <>
      <div className={styles.root}>
        <div className="container">
          <h2 className={styles.title}>Правила поступления</h2>
          <div className={styles.block1}>
            <h4 className={styles.subtitle}>
              Список необходимых документов для поступления в первый класс:
            </h4>
            <ul className={styles.check__list}>
              <li>Заявление о приеме ребенка в школу плюс договор со школой;</li>
              <li>Копия свидетельства о рождении ребенка;</li>
              <li>Медицинская карта (форма № 026-У);</li>
              <li>Прививочная карта (форма 063-У);</li>
              <li>Справки с места жительства и места работы родителей;</li>
              <li>Фото цветное 3х4 – 4 штуки;</li>
            </ul>
          </div>

          <div className={styles.block2}>
            <h4 className={styles.subtitle}>Правила приема в 2-11 классы</h4>
            <h6 className={styles.descr}>
              Для поступления учащихся в нашу школу с второго по одиннадцатый класс необходимо
              предоставить следующие документы:
            </h6>
            <ul className={styles.check__list}>
              <li>Заявление о приеме ребенка в школу плюс договор со школой;</li>
              <li>Копия свидетельства о рождении ребенка;</li>
              <li>Медицинская карта (форма № 026-У);</li>
              <li>Прививочная карта (форма 063-У);</li>
              <li>Справки с места жительства и места работы родителей;</li>
              <li>Фото цветное 3х4 – 4 штуки;</li>
              <li>Личное дело, обучающегося из предыдущей школы;</li>
              <li>
                Выписка текущих оценок по всем предметам, заверенная печатью школы (при переходе в
                течение учебного года).
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <Price /> */}
      <Contacts />
    </>
  );
};
