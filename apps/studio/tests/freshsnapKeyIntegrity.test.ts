import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

import koData from '../src/i18n/locales/freshsnap/ko.json';
import enData from '../src/i18n/locales/freshsnap/en.json';
import jaData from '../src/i18n/locales/freshsnap/ja.json';
import zhData from '../src/i18n/locales/freshsnap/zh.json';
import esData from '../src/i18n/locales/freshsnap/es.json';
import frData from '../src/i18n/locales/freshsnap/fr.json';
import deData from '../src/i18n/locales/freshsnap/de.json';
import ptData from '../src/i18n/locales/freshsnap/pt.json';
import idData from '../src/i18n/locales/freshsnap/id.json';

const dataMap: Record<string, any> = {
  ko: koData.indexLocal,
  en: enData.indexLocal,
  ja: jaData.indexLocal,
  zh: zhData.indexLocal,
  es: esData.indexLocal,
  fr: frData.indexLocal,
  de: deData.indexLocal,
  pt: ptData.indexLocal,
  id: idData.indexLocal
};

describe('FreshSnap UI tLocal() 호출 키 사전 전수 매칭 TDD 검증', () => {
  it('freshsnapIndex.ts에서 호출하는 모든 tLocal("key") 키는 9개 다국어 사전에 100% 실존해야 하며, raw 키 문자열(util.card.ate 등)이 노출되지 않아야 한다', () => {
    const scriptPath = path.join(__dirname, '../src/utils/freshsnapIndex.ts');
    const content = fs.readFileSync(scriptPath, 'utf-8');

    const matches = content.matchAll(/tLocal\(['"]([^'"]+)['"]\)/g);
    const usedKeys = new Set<string>();
    for (const match of matches) {
      usedKeys.add(match[1]);
    }

    const languages = Object.keys(dataMap);
    const missingKeyReport: { lang: string; missingKeys: string[] }[] = [];

    languages.forEach((lang) => {
      const dictionary = dataMap[lang] || {};
      const missing: string[] = [];

      usedKeys.forEach((key) => {
        if (!dictionary[key]) {
          missing.push(key);
        }
      });

      if (missing.length > 0) {
        missingKeyReport.push({ lang, missingKeys: missing });
      }
    });

    if (missingKeyReport.length > 0) {
      console.error('❌ [FreshSnap 키 누락 발견] tLocal() 키가 사전에 존재하지 않습니다:', missingKeyReport);
    }

    expect(
      missingKeyReport.length,
      `오류: ${missingKeyReport.length}개 언어 사전에 누락된 FreshSnap tLocal() 키가 존재합니다.`
    ).toBe(0);
  });
});
