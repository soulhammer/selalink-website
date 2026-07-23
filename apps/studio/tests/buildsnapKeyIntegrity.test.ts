import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { buildsnapTranslations } from '../src/i18n/buildsnapTranslations';

describe('Astro 템플릿 t() 호출 키 사전 전수 매칭 TDD 검증', () => {
  it('index.astro에서 사용된 모든 {t("key")} 키는 9개 다국어 사전에 100% 실존해야 하며, raw 키 문자열이 화면에 누출되지 않아야 한다', () => {
    const astroPath = path.join(__dirname, '../src/pages/[lang]/apps/buildsnap/index.astro');
    const content = fs.readFileSync(astroPath, 'utf-8');

    // {t('...')} 및 t('...') 키 추출 정규식
    const matches = content.matchAll(/t\(['"]([^'"]+)['"]\)/g);
    const usedKeys = new Set<string>();
    for (const match of matches) {
      usedKeys.add(match[1]);
    }

    const languages = Object.keys(buildsnapTranslations);
    const missingKeyReport: { lang: string; missingKeys: string[] }[] = [];

    languages.forEach((lang) => {
      const dictionary = buildsnapTranslations[lang] || {};
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
      console.error('❌ [키 누락 발견] Astro UI 템플릿에서 호출하는 t() 키가 사전에 존재하지 않습니다:', missingKeyReport);
    }

    expect(missingKeyReport.length, `오류: ${missingKeyReport.length}개 언어 사전에 누락된 t() 키가 존재합니다.`).toBe(0);
  });
});
