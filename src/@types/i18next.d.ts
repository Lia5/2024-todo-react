import 'i18next';
import enJSON from '@/locale/en.json';

const resources = {
  translation: enJSON,
} as const;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}
