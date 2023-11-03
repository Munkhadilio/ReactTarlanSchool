import React from 'react';
import styles from './CompositionOfTeachers.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const CompositionOfTeachers = () => {
  const location = useLocation();
  const importedImages = [];

  for (let i = 1; i <= 34; i++) {
    importedImages.push(require(`../../images/Teachers/${i}.jpg`));
  }

  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  const directors = [
    {
      img: importedImages[0],
      name: 'Ким Игорь Леонидович',
      role: 'Генеральный Директор "TARLAN SCHOOL"',
      additionalInfo: 'Почетный работник образования Республики Казахстан',
    },
    {
      img: importedImages[1],
      name: 'Богаскулова Салиха Сламбековна',
      role: 'Заместитель генерального директора, учитель казахского языка и литературы',
      additionalInfo:
        'Образование высшее категория высшая окончила ЛГУ им.Герцена, АГУ им.Абая стаж 32 года Кандидат педагогических наук',
    },
  ];

  const teachers = [
    {
      img: importedImages[2],

      name: 'Ткаченко Елена Васильевна',
      role: 'Завуч по воспитательной части, учитель истории',
      additionalInfo:
        'Образование высшее Категория первая Стаж работы 15 лет Окончила КазНУ им.Аль-Фараби, преподаватель истории Награждена грамотами Бостандыкского РОО, Партии «Нур Отан», «Фонда социальных инициатив» Награждена медалью «АСЫЛ ҰСТАЗ», за вклад в развитие образования и науки РК',
    },
    {
      img: importedImages[3],
      name: 'Галицкая Людмила Геннадьевна',
      role: 'Завуч по учебной части, учитель русского языка и литературы',
      additionalInfo:
        'Образование высшее Окончила КазГУ, филолог. Пед.стаж 32 года, категория высшая, завуч, награждена грамотами РОО Бостандыкского района, грамота Департамента образования 2021 г за вклад в развитие образования РК',
    },
    {
      img: importedImages[4],
      name: 'Кашкенова Гульнара Айсаевна',
      role: 'Учитель русского языка и литературы',
      additionalInfo:
        'Образование высшее, педагогический стаж 14 лет, общий 38 лет. Категория: Модератор',
    },
    {
      img: importedImages[5],
      name: 'Рысбеков Дулат Муратович',
      role: 'Учитель Биологии',
      additionalInfo:
        'Образование высшее. Учитель биологии и естествознания. Стаж работы 4 года. Выпускник КГМУ. Двухкратный золотой призер Республиканской олимпиады по биологии. Золотой призер Международной олимпиады по естественным наукам',
    },
    {
      img: importedImages[6],
      name: 'Жусупов Алибек Искакович',
      role: 'Учитель Физики',
      additionalInfo: 'Образование высшее: Satbayev University',
    },
    {
      img: importedImages[7],
      name: 'Пильская Марина Александровна',
      role: 'Учитель русского языка и литературы',
      additionalInfo:
        'Образование высшее Высшая категория. Образование-АГУ им. Абая, диплом с отличием. Стаж-24 года. За годы работы учащиеся-победители районных, городских и международных олимпиад. Автор более 30 статей по педагогике и методике преподавания.',
    },
    {
      img: importedImages[8],
      name: 'Муратов Ернур Ермекулович',
      role: 'Учитель Английского языка',
      additionalInfo: 'Образование Высшее. Стаж 4 года',
    },
    {
      img: importedImages[9],
      name: 'Якунина Татьяна Викторовна',
      role: 'Учитель начальных классов. Классный рук-ль 4Б кл',
      additionalInfo:
        'Образование - Высшее. Учитель начальных классов. Педстаж - 35 лет. Категория- высшая, учитель-исследователь.',
    },
    {
      img: importedImages[10],
      name: 'Уринова Ольга Обидовна',
      role: 'Учитель хореографии',
      additionalInfo: 'Образование высшее.',
    },
    {
      img: importedImages[11],
      name: 'Дорохова Ольга Игоревна',
      role: 'Классный руководитель 2"А" класса',
      additionalInfo: 'Образование высшее АГУ им.Абая Педстаж 12 лет 2 категория',
    },
    {
      img: importedImages[12],
      name: 'Имирова Светлана Абдурашитовна',
      role: 'Учитель начальных классов',
      additionalInfo:
        'высшая категория, Стаж 35 лет. Образование высшее ( КазГУ им Кирова) Есть грамоты акимов Медеуского и Бостандыкского районов, грамота НООЦП "Бобек".',
    },
    {
      img: importedImages[13],
      name: 'Репнякова Ксения Сергеевна',
      role: 'Учитель английского языка',
      additionalInfo: 'Стаж 5 лет АГГПК #2',
    },
    {
      img: importedImages[14],
      name: 'Макаренко Анна Валентиновна',
      role: 'Учитель начальных классов. Классный руководитель 2"Б" класса',
      additionalInfo: 'Волгоградский пед. институт. Стаж 40 лет. Б/К.',
    },
    {
      img: importedImages[15],
      name: 'Мамырбаева Асем Мажитовна',
      role: 'Учитель казахского языка и литературы',
      additionalInfo: 'Образование высшее КазНПу им.Абая стаж 10 лет первая категория',
    },
    {
      img: importedImages[16],
      name: 'Когай Луиза Михайловна',
      role: 'Учитель физ.культуры',
      additionalInfo:
        'Образование высшее КазИПК стаж 25 лет 2 категория Воспитанники призеры чемпионата Европы по баскетболу 2002 г.',
    },
    {
      img: importedImages[17],
      name: 'Штукерт Светлана Евгеньевна',
      role: 'Учитель ИЗО, черчения',
      additionalInfo:
        'Образование высшее Окончила КазПИ, 1981 год 1 категория Учащиеся – призеры международных творческих конкурсов',
    },
    {
      img: importedImages[18],
      name: 'Осипова Светлана Петровна',
      role: 'Учитель физ.культуры',
      additionalInfo:
        'Образование высшее высшая категория Лауреат конкурса «Учитель года» Алматы 2000 Воспитанники неоднократные призеры соревнований г. Алматы',
    },
    {
      img: importedImages[19],
      name: 'Жубанышев Алмас Жумахметович',
      role: 'Учитель информатики',
      additionalInfo:
        'Образование высшее. КазНПУ им. Абая физика-математический факультет, стаж 10 лет',
    },
    {
      img: importedImages[20],
      name: 'Нурбекова Гульмира Жолдыгуловна',
      role: 'Учитель математики',
      additionalInfo: 'Стаж работы-29 лет, категория высшая. Грамота Бостандыкского РОО.',
    },
    {
      img: importedImages[21],
      name: 'Лопатина Наталья Борисовна',
      role: 'Учитель Географии',
      additionalInfo: 'Образование высшее',
    },
    {
      img: importedImages[22],
      name: 'Абдрахманова Арман Мукашевна',
      role: 'Учитель русского языка и литературы',
      additionalInfo:
        'Образование высшее Высшей категории высшего уровня квалификации. Педагогический стаж: 32 года. Обладатель Звания и медали «Лучший педагог Республики Казахстан 2016 года». Обладатель Нагрудного знака «Ы.Алтынсарин». Обладатель Нагрудного знака «Почётный работник образования РК». Лауреат Международного Пушкинского конкурса русистов (г. Москва). Обладатель Почетных грамот МОН РК; Призёр Международных и Республиканских педагогических олимпиад и конкурсов, соревнований научных проектов. Составитель методических пособий для учителей Республики Казахстан.',
    },
    {
      img: importedImages[23],
      name: 'Сарсенбай Кали Искакулы',
      role: 'Учитель английского языка и Химии',
      additionalInfo: 'Образование - Высшее',
    },
    {
      img: importedImages[24],
      name: 'Стешина Светлана Николаевна',
      role: 'Учитель начальных классов',
      additionalInfo:
        'В 1981 год окончила Иссыкское пед училище. Награждена грамотами по линии РайОНО и Департамента Образования',
    },
    {
      img: importedImages[25],
      name: 'Калакбасова Баян Жолдыгуловна',
      role: 'Учитель Истории',
      additionalInfo:
        'Образование высшее. Таразский педагогический институт. Стаж педагогический - 12 лет. Категория- педагог - модератор. Награды- РОО Жамбылского района Алматинской обл',
    },
    {
      img: importedImages[26],
      name: 'Беимбетов Диас',
      role: 'Учитель Математики',
      additionalInfo:
        'Образование высшее. Образование высшее университет имени Сулеймана Демиреля (СДУ). Стаж 7 лет',
    },
    {
      img: importedImages[27],
      name: 'Нурпеисова Гульмира Жумабековна',
      role: 'Учитель Информатики (IT)',
      additionalInfo:
        'Образование высшее. Стаж работы 34 года. КазНУ им. Аль-Фараби факультет ФМПМ (бакалавр), КазНУ им. Аль-Фараби факультет ФМПМ',
    },
    {
      img: importedImages[28],
      name: 'Аскерханова Салтанат Аскерхановна',
      role: 'Учитель Казахского языка',
      additionalInfo: 'Образование высшее. Первая категория, Педагогический стаж - 17 лет',
    },
    {
      img: importedImages[29],
      name: 'Курманбаева Жазира Кусайыновна',
      role: 'Учитель казахского языка',
      additionalInfo: 'Образование высшее. Стаж 13 лет.',
    },
    {
      img: importedImages[30],
      name: 'Георгиади Елена Вячеславовна',
      role: 'Учитель начальных классов',
      additionalInfo: 'Образование высшее. Стаж 20 лет. Категория - Первая.',
    },
    {
      img: importedImages[31],
      name: 'Ансарова Эльвира Эрнестовна',
      role: 'Учитель начальных классов',
      additionalInfo: 'Образование высшее. Стаж работы 10 лет. Категория - Педагог-модератор',
    },
    {
      img: importedImages[32],
      name: 'Амраева Шадмира Инипахуновна',
      role: 'Учитель Музыки',
      additionalInfo:
        'Образование высшее. Стаж работы 36 лет. Категория Высшая, Педагог-исследователь',
    },
    {
      img: importedImages[33],
      name: 'Любомир Ольга Владиславовна',
      role: 'Учитель начальных классов',
      additionalInfo:
        'Образование высшее. Педстаж: 40 лет в начальной школе. Высшая категория, педагог-исследователь',
    },
  ];

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`}>
      <div className="container">
        <h1 className={styles.title}>Наши преподаватели</h1>
        <div className={styles.first__items} ref={ref}>
          <div className={styles.first__item}>
            <img src={importedImages[0]} alt="" />
            <h3 className={styles.name}>{directors[0].name}</h3>
            <h3 className={styles.role}>{directors[0].role}</h3>
            <h3 className={styles.additionalInfo}>{directors[0].additionalInfo}</h3>
          </div>
          <div className={styles.first__item}>
            <img src={importedImages[1]} alt="" />
            <h3 className={styles.name}>{directors[1].name}</h3>
            <h3 className={styles.role}>{directors[1].role}</h3>
            <h3 className={styles.additionalInfo}>{directors[1].additionalInfo}</h3>
          </div>
        </div>
        {location.pathname === '/' && (
          <>
            <div className={styles.items}>
              {teachers.slice(0, 8).map((data, i) => (
                <div className={styles.item} key={i}>
                  <img src={data.img} alt="" />
                  <h3 className={styles.name}>{data.name}</h3>
                  <h3 className={styles.role}>{data.role}</h3>
                  <h3 className={styles.additionalInfo}>{data.additionalInfo}</h3>
                </div>
              ))}
            </div>
            <Link className={styles.link__all} to="/teachers">
              <button className={styles.button_all}>Все учителя</button>
            </Link>
          </>
        )}
        {location.pathname === '/teachers' && (
          <div className={styles.items}>
            {teachers.map((data, i) => (
              <div className={styles.item} key={i}>
                <img src={data.img} alt="" />
                <h3 className={styles.name}>{data.name}</h3>
                <h3 className={styles.role}>{data.role}</h3>
                <h3 className={styles.additionalInfo}>{data.additionalInfo}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
