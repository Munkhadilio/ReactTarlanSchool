import React from 'react';
import styles from './Director.module.scss';
import director from './../../images/director1.jpg';

export const Director = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <h1 className={styles.title}>Обращение директора</h1>
        <div className={styles.wrapper}>
          <img src={director} alt="" />
          <div className={styles.director}>
            <h3 className={styles.director__text}>
              "В сегодняшнем динамичном мире, полном разнообразными событиями, возможностями,
              современными высокими технологиями, сложностью выбора, мы должны помочь нашим детям
              выбрать такой путь, где будут воплощаться их самые заветные желания и мечты. Это в
              первую очередь касается выбора школы, годы в которой определит будущее личности с
              правильными и истинными ориентирами. Наш приоритет - давать прочные знания, чтобы
              выпускники Школы Тарлан могли уверенно поступать в любой ВУЗ мира!"
              <br />
              <br />
            </h3>
            <h3 className={styles.director__name}>- Ким Игорь Леонидович, генеральный директор</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
