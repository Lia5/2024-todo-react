import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from '@/locale/en.json';
import uaJSON from '@/locale/ua.json';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources: {
    en: { transation: enJSON },
    ua: { transation: uaJSON },
  },
  lng: 'en',
});
