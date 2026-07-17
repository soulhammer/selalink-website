// FreshSnap App 전용 다국어 번역 사전

import koData from './locales/freshsnap/ko.json' with { type: 'json' };
import enData from './locales/freshsnap/en.json' with { type: 'json' };
import jaData from './locales/freshsnap/ja.json' with { type: 'json' };
import zhData from './locales/freshsnap/zh.json' with { type: 'json' };
import esData from './locales/freshsnap/es.json' with { type: 'json' };
import frData from './locales/freshsnap/fr.json' with { type: 'json' };
import deData from './locales/freshsnap/de.json' with { type: 'json' };
import ptData from './locales/freshsnap/pt.json' with { type: 'json' };
import idData from './locales/freshsnap/id.json' with { type: 'json' };

const dataMap: Record<string, any> = {
  ko: koData,
  en: enData,
  ja: jaData,
  zh: zhData,
  es: esData,
  fr: frData,
  de: deData,
  pt: ptData,
  id: idData
};

export const indexLocalTranslations: Record<string, Record<string, string>> = {};
export const indexSourceTranslations: Record<string, Record<string, string>> = {};
export const detailLocalTranslations: Record<string, Record<string, string>> = {};
export const detailSourceTranslations: Record<string, Record<string, string>> = {};
export const detailDescTemplates: Record<string, string> = {};
export const detailMethodNames: Record<string, Record<string, string>> = {};

Object.keys(dataMap).forEach((lang) => {
  const data = dataMap[lang];
  indexLocalTranslations[lang] = data.indexLocal;
  indexSourceTranslations[lang] = data.indexSource;
  detailLocalTranslations[lang] = data.detailLocal;
  detailSourceTranslations[lang] = data.detailSource;
  detailDescTemplates[lang] = data.detailDescTemplate;
  detailMethodNames[lang] = data.detailMethodNames;
});
