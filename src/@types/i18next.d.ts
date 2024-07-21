import 'i18next';
import enJSON from '@/locale/en.json';
import uaJSON from '@/locale/ua.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof enJSON;
      ua: typeof uaJSON;
    };
  }
}
import { resources, defaultNS } from './i18n';
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['en'];
  }
}
