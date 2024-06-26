import React, { useState, useRef } from 'react';
import styles from './CompositionOfTeachers.module.scss';
import { useTranslation } from 'react-i18next';
import './../../i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ImCross } from 'react-icons/im';
import { useSelector } from 'react-redux';
import { nowLanguage } from '../../redux/slices/language';

export const CompositionOfTeachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const importedImages = [];
  const toBeginning = useRef(null);
  const { t } = useTranslation();

  const language = useSelector(nowLanguage);

  for (let i = 1; i <= 34; i++) {
    importedImages.push(require(`../../images/Teachers/${i}.jpg`));
  }

  const [ref, inView] = useInView({
    triggerOnce: true, // Опция, чтобы анимация сработала только один раз
  });

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const scrollToBeginning = () => {
    if (toBeginning.current) {
      const elementRect = toBeginning.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const middle = absoluteElementTop - window.innerHeight / 6;
      window.scrollTo({ top: middle, behavior: 'instant' });
    }
  };

  const ruDirector = [
    {
      img: importedImages[0],
      name: 'Ким Игорь Леонидович',
      role: 'Генеральный Директор "TARLAN SCHOOL"',
      additionalInfo: 'Почетный работник образования Республики Казахстан',
    },
  ];

  const kzDirector = [
    {
      img: importedImages[0],
      name: 'Ким Игорь Леонидович',
      role: '"TARLAN SCHOOL" мектебінің бас директоры',
      additionalInfo: 'Қазақстан Республикасының Білім беру ісінің құрметті қызметкері',
    },
  ];

  const ruTeachers = [
    {
      img: importedImages[1],
      name: 'Богаскулова Салиха Сламбековна',
      role: 'Заместитель генерального директора, учитель казахского языка и литературы',
      additionalInfo:
        'Образование высшее категория высшая окончила ЛГУ им.Герцена, АГУ им.Абая стаж 32 года Кандидат педагогических наук',
    },
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

  const kzTeachers = [
    {
      img: importedImages[1],
      name: 'Богаскулова Салиха Сламбековна',
      role: 'Бас директордың орынбасары, Қазақ тілі мен әдебиеті мұғалімі',
      additionalInfo:
        'Білімі жоғары жоғары санат ол ЛМУ-ді бітірді.Герцен, АГУ им.Абай еңбек өтілі 32 жыл Педагогика ғылымдарының кандидаты',
    },
    {
      img: importedImages[2],

      name: 'Ткаченко Елена Васильевна',
      role: 'Тәрбие бөлімінің меңгерушісі, тарих пәнінің мұғалімі',
      additionalInfo:
        'Білімі жоғары Бірінші санат Жұмыс өтілі 15 жыл ҚазҰУ-им бітірген.Әл-Фараби, тарих пәнінің оқытушысы Бостандық РҚБ, "Нұр Отан" партиясы, "Әлеуметтік бастамалар Қорының"грамоталарымен марапатталған ҚР Білім және ғылымды дамытуға қосқан үлесі үшін "АСЫЛ ҰСТАЗ" медалімен марапатталған',
    },
    {
      img: importedImages[3],
      name: 'Галицкая Людмила Геннадьевна',
      role: 'Оқу бөлімінің меңгерушісі, орыс тілі мен әдебиеті пәнінің мұғалімі',
      additionalInfo:
        'Білімі жоғары ҚазМУ-фил бітірген, филолог. Пед.еңбек өтілі 32 жыл, жоғары санат, меңгеруші, Бостандық ауданы РҚБ грамоталарымен, ҚР білім беруді дамытуға қосқан үлесі үшін 2021 ж. білім департаментінің грамотасымен марапатталған',
    },
    {
      img: importedImages[4],
      name: 'Кашкенова Гүлнара Айсайқызы',
      role: 'Орыс тілі мен әдебиеті пәнінің мұғалімі',
      additionalInfo: 'Білімі жоғары, педагогикалық өтілі 14 жыл, жалпы 38 жыл. Санат: Модератор',
    },
    {
      img: importedImages[5],
      name: 'Рысбеков Болат Мұратұлы',
      role: 'Биология Пәнінің Мұғалімі',
      additionalInfo:
        'Білімі жоғары. Биология және жаратылыстану пәндерінің мұғалімі. Жұмыс өтілі 4 жыл. ҚММУ түлегі. Биология бойынша республикалық олимпиаданың екі дүркін алтын жүлдегері. Жаратылыстану ғылымдары бойынша Халықаралық Олимпиаданың алтын жүлдегері',
    },
    {
      img: importedImages[6],
      name: 'Жүсіпов Әлібек Ысқақұлы',
      role: 'Физика Пәнінің Мұғалімі',
      additionalInfo: 'Білімі жоғары: Satbayev University',
    },
    {
      img: importedImages[7],
      name: 'Пильская Марина Александровна',
      role: 'Орыс тілі мен әдебиеті пәнінің мұғалімі',
      additionalInfo:
        'Білімі жоғары Жоғары санат. Білімі-АМУ. Абай, үздік диплом. Еңбек өтілі-24 жыл. Жұмыс істеген жылдары оқушылар аудандық, қалалық және халықаралық олимпиадалардың жеңімпаздары. Педагогика және оқыту әдістемесі бойынша 30-дан астам мақаланың авторы.',
    },
    {
      img: importedImages[8],
      name: 'Мұратов Ернұр Ермекұлы',
      role: 'Ағылшын тілі мұғалімі',
      additionalInfo: 'Білімі Жоғары. Еңбек өтілі 4 жыл',
    },
    {
      img: importedImages[9],
      name: 'Якунина Татьяна Викторовна',
      role: 'Бастауыш сынып мұғалімі. Сынып қолы-л 4Б кл',
      additionalInfo:
        'Білімі-Жоғары. Бастауыш сынып мұғалімі. Еңбек өтілі: 35 жыл. Санат - жоғары, Зерттеуші мұғалім.',
    },
    {
      img: importedImages[10],
      name: 'Уринова Ольга Обидовна',
      role: 'Хореография мұғалімі',
      additionalInfo: 'Білімі жоғары.',
    },
    {
      img: importedImages[11],
      name: 'Дорохова Ольга Игоревна',
      role: 'Бастауыш сынып мұғалімі',
      additionalInfo: 'Білімі жоғары АМУ оларға.Абай Педагогикалық еңбек өтілі 12 жыл 2 санат',
    },
    {
      img: importedImages[12],
      name: 'Имирова Светлана Абдурашитовна',
      role: 'Бастауыш сынып мұғалімі',
      additionalInfo:
        'жоғары санат, Еңбек өтілі 35 жыл. Білімі жоғары (Киров атындағы ҚазМУ) Медеу және Бостандық аудандары әкімдерінің грамоталары, "Бөбек" ОО-ның грамоталары бар.',
    },
    {
      img: importedImages[13],
      name: 'Репнякова Ксения Сергеевна',
      role: 'Ағылшын тілі мұғалімі',
      additionalInfo: 'Білімі-Жоғары. Еңбек өтілі 5 жыл Санат: 2',
    },
    {
      img: importedImages[14],
      name: 'Макаренко Анна Валентиновна',
      role: 'Бастауыш сынып мұғалімі',
      additionalInfo: 'Волгоград педагогикалық институты. Еңбек өтілі 40 жыл. Санат жоқ.',
    },
    {
      img: importedImages[15],
      name: 'Мамырбаева Әсем Мәжитова',
      role: 'Қазақ тілі мен әдебиеті пәнінің мұғалімі',
      additionalInfo: 'Білімі жоғары ҚазҰПУ.Абай еңбек өтілі 10 жыл бірінші санат',
    },
    {
      img: importedImages[16],
      name: 'Когай Луиза Михайловна',
      role: 'Дене шынықтыру мұғалімі',
      additionalInfo:
        'Білімі жоғары Кезик еңбек өтілі 25 жыл 2 санат 2002 жылғы баскетболдан Еуропа чемпионатының тәрбиеленушілері жүлдегерлері',
    },
    {
      img: importedImages[17],
      name: 'Штукерт Светлана Евгеньевна',
      role: 'Сурет мұғалімі, сызбалар',
      additionalInfo:
        'Білімі жоғары ҚазПТИ бітірген, 1981 жыл 1 санат Оқушылар-халықаралық шығармашылық конкурстардың жүлдегерлері',
    },
    {
      img: importedImages[18],
      name: 'Осипова Светлана Петровна',
      role: 'Дене шынықтыру мұғалімі',
      additionalInfo:
        'Білімі жоғары жоғары санат "Жыл мұғалімі" байқауының лауреаты Алматы 2000 Тәрбиеленушілер Алматы қ. жарыстарының бірнеше дүркін жүлдегерлері',
    },
    {
      img: importedImages[19],
      name: 'Жубанышев Алмас Жумахметович',
      role: 'Информатика пәнінің мұғалімі',
      additionalInfo:
        'Білімі жоғары. ҚазҰПУ. Абай физика-математика факультеті, еңбек өтілі 10 жыл',
    },
    {
      img: importedImages[20],
      name: 'Нурбекова Гульмира Жолдыгуловна',
      role: 'Математика пәнінің мұғалімі',
      additionalInfo: 'Жұмыс өтілі-29 жыл, санат жоғары. Бостандық РҚБ грамотасы.',
    },
    {
      img: importedImages[21],
      name: 'Лопатина Наталья Борисовна',
      role: 'География Пәнінің Мұғалімі',
      additionalInfo: 'Білімі жоғары',
    },
    {
      img: importedImages[22],
      name: 'Абдрахманова Арман Мукашевна',
      role: 'Орыс тілі мен әдебиеті пәнінің мұғалімі',
      additionalInfo:
        'Білімі жоғары Біліктілігі жоғары деңгейдегі жоғары санатты. Педагогикалық өтілі: 32 жыл. "Қазақстан Республикасының 2016 жылғы үздік педагогы" атағы мен медалінің иегері. "Ы.Алтынсарин". "ҚР Білім беру ісінің құрметті қызметкері" төсбелгісінің иегері. Халықаралық Пушкин русистер байқауының лауреаты (Мәскеу қ.). ҚР БҒМ Құрмет грамоталарының иегері; Халықаралық және Республикалық педагогикалық олимпиадалар мен конкурстардың, ғылыми жобалар жарыстарының жүлдегері. Қазақстан Республикасының мұғалімдеріне арналған әдістемелік құралдарды құрастырушы.',
    },
    {
      img: importedImages[23],
      name: 'Сәрсенбай Қали Ысқақұлы',
      role: 'Ағылшын тілі және химия пәнінің мұғалімі',
      additionalInfo: 'Білімі-Жоғары',
    },
    {
      img: importedImages[24],
      name: 'Стешина Светлана Николаевна',
      role: 'Бастауыш сынып мұғалімі',
      additionalInfo:
        '1981 жылы Есік педагогикалық училищесін бітірді. Аудан және білім департаменті бойынша грамоталармен марапатталған',
    },
    {
      img: importedImages[25],
      name: 'Калакбасова Баян Жолдыгуловна',
      role: 'Тарих Пәнінің Мұғалімі',
      additionalInfo:
        'Білімі жоғары. Тараз педагогикалық институты. Педагогикалық өтілі-12 жыл. Санат-педагог-модератор. Марапаттары-Алматы облысы Жамбыл ауданы РҚБ',
    },
    {
      img: importedImages[26],
      name: 'Бейімбетов Диас',
      role: 'Математика Пәнінің Мұғалімі',
      additionalInfo:
        'Білімі жоғары. Білімі Жоғары Сүлейман Демирель атындағы университет (СДУ). Еңбек өтілі 7 жыл',
    },
    {
      img: importedImages[27],
      name: 'Нұрпейісова Гүлмира Жұмабекқызы',
      role: 'Информатика мұғалімі (IT)',
      additionalInfo:
        'Білімі жоғары. Еңбек өтілі 34 жыл. ҚазҰУ. Әл-Фараби ФПМ факультеті (бакалавр), ҚазҰУ. Әл-Фараби факультеті (магистратура, теория. механика). ҚазҰАУ экономика факультеті Құқықтану мамандығы',
    },
    {
      img: importedImages[28],
      name: 'Аскерханова Салтанат Аскерханқызы',
      role: 'Қазақ тілі мұғалімі',
      additionalInfo: 'Білімі Жоғары. Педагогикалық өтілі 17 жыл. Бірінші санат',
    },
    {
      img: importedImages[29],
      name: 'Құрманбаева Жазира Құсайынқызы',
      role: 'Қазақ тілі мұғалімі',
      additionalInfo: 'Білімі жоғары. Еңбек өтілі 13 жыл.',
    },
    {
      img: importedImages[30],
      name: 'Георгиади Елена Вячеславовна',
      role: 'Бастауыш сынып мұғалімі',
      additionalInfo: 'Білімі жоғары. Еңбек өтілі 20 жыл. Санат-Бірінші.',
    },
    {
      img: importedImages[31],
      name: 'Ансарова Эльвира Эрнестовна',
      role: 'Бастауыш сынып мұғалімі',
      additionalInfo: 'Білімі жоғары. Жұмыс өтілі 10 жыл. Санат-Педагог-модератор',
    },
    {
      img: importedImages[32],
      name: 'Амраева Шадмира Инипахуновна',
      role: 'Музыка Мұғалімі',
      additionalInfo: 'Білімі жоғары. Еңбек өтілі 36 жыл. Жоғары санат, Педагог-зерттеуші',
    },
    {
      img: importedImages[33],
      name: 'Любомир Ольга Владиславовна',
      role: 'Бастауыш сынып мұғалімі',
      additionalInfo:
        'Білімі жоғары. Педагогикалық өтілі-бастауыш мектепте 40 жыл Жоғары санат, педагог-зерттеуші',
    },
  ];

  return (
    <div className={`${styles.root} ${inView ? styles.visible : ''}`} ref={toBeginning}>
      <div ref={ref}>
        {!selectedTeacher ? (
          <div className="container">
            <h1 className={styles.title}>{t('teachers.title')}</h1>
            <div className={styles.first__items}>
              {language === 'ru' ? (
                <div
                  className={styles.first__item}
                  onClick={() => {
                    handleTeacherClick(ruDirector[0]);
                    scrollToBeginning();
                  }}>
                  <img src={importedImages[0]} alt="" />
                  <h3 className={styles.name}>{ruDirector[0].name}</h3>
                  <h3 className={styles.role}>{ruDirector[0].role}</h3>
                  <h3 className={styles.additionalInfo}>{ruDirector[0].additionalInfo}</h3>
                </div>
              ) : (
                <div
                  className={styles.first__item}
                  onClick={() => {
                    handleTeacherClick(kzDirector[0]);
                    scrollToBeginning();
                  }}>
                  <img src={importedImages[0]} alt="" />
                  <h3 className={styles.name}>{kzDirector[0].name}</h3>
                  <h3 className={styles.role}>{kzDirector[0].role}</h3>
                  <h3 className={styles.additionalInfo}>{kzDirector[0].additionalInfo}</h3>
                </div>
              )}
            </div>
            {location.pathname === '/' && (
              <>
                <div className={styles.items}>
                  {language === 'ru'
                    ? ruTeachers.slice(0, 8).map((data, i) => (
                        <div
                          className={styles.item}
                          key={i}
                          onClick={() => {
                            handleTeacherClick(data);
                            scrollToBeginning();
                          }}>
                          <img src={data.img} alt="" />
                          <h3 className={styles.name}>{data.name}</h3>
                          <h3 className={styles.role}>{data.role}</h3>
                          <h3 className={styles.additionalInfo}>{data.additionalInfo}</h3>
                        </div>
                      ))
                    : kzTeachers.slice(0, 8).map((data, i) => (
                        <div
                          className={styles.item}
                          key={i}
                          onClick={() => {
                            handleTeacherClick(data);
                            scrollToBeginning();
                          }}>
                          <img src={data.img} alt="" />
                          <h3 className={styles.name}>{data.name}</h3>
                          <h3 className={styles.role}>{data.role}</h3>
                          <h3 className={styles.additionalInfo}>{data.additionalInfo}</h3>
                        </div>
                      ))}
                </div>

                <button className={styles.button__all} onClick={() => navigate('/teachers')}>
                  {t('teachers.button')}
                </button>
              </>
            )}
            {location.pathname === '/teachers' && (
              <div className={styles.items}>
                {language === 'ru'
                  ? ruTeachers.map((data, i) => (
                      <div
                        className={styles.item}
                        key={i}
                        onClick={() => {
                          handleTeacherClick(data);
                          scrollToBeginning();
                        }}>
                        <img src={data.img} alt="" />
                        <h3 className={styles.name}>{data.name}</h3>
                        <h3 className={styles.role}>{data.role}</h3>
                        <h3 className={styles.additionalInfo}>{data.additionalInfo}</h3>
                      </div>
                    ))
                  : kzTeachers.map((data, i) => (
                      <div
                        className={styles.item}
                        key={i}
                        onClick={() => {
                          handleTeacherClick(data);
                          scrollToBeginning();
                        }}>
                        <img src={data.img} alt="" />
                        <h3 className={styles.name}>{data.name}</h3>
                        <h3 className={styles.role}>{data.role}</h3>
                        <h3 className={styles.additionalInfo}>{data.additionalInfo}</h3>
                      </div>
                    ))}
              </div>
            )}
          </div>
        ) : (
          ''
        )}
        {selectedTeacher && (
          <div className="container">
            <h1 className={styles.title}>Наши преподаватели</h1>
            <div className={styles.fullPost}>
              <img className={styles.fullPost__teacherIMG} src={selectedTeacher.img} alt="" />
              <div className={styles.fullPost__info}>
                <h3 className={styles.fullPost__info__name}>{selectedTeacher.name}</h3>
                <h3 className={styles.fullPost__info__role}>{selectedTeacher.role}</h3>
                <h3 className={styles.fullPost__info__additionalInfo}>
                  {selectedTeacher.additionalInfo}
                </h3>
              </div>
              <ImCross onClick={() => setSelectedTeacher('')} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
