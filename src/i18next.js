import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruTranslation from './translations/ru.json';
import kzTranslation from './translations/kz.json';

i18n.use(initReactI18next).init({
  resources: {
    // Сюда языки кидаем
    ru: { translation: ruTranslation },
    kz: { translation: kzTranslation },
  },
  lng: 'ru', // Язык по умолчанию русский
  fallbackLng: 'ru', // Язык, который будет использован в случае отсутствия перевода
  interpolation: {
    escapeValue: false, // Это там для XSS атак вроде, в доках брал, хз как работает
  },
});

export default i18n;
