import en from './locales/en.json';
import ko from './locales/ko.json';
import ja from './locales/ja.json';
import zh from './locales/zh.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import pt from './locales/pt.json';
import id from './locales/id.json';

export const languages = {
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  id: 'Bahasa Indonesia'
};

export const defaultLang = 'en';

export const ui = {
  en,
  ko,
  ja,
  zh,
  es,
  fr,
  de,
  pt,
  id
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    // @ts-ignore
    return (ui[lang] && ui[lang][key]) ? ui[lang][key] : ui[defaultLang][key];
  }
}
