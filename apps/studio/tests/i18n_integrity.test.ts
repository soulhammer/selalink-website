import { describe, it, expect } from 'vitest';
import en from '../src/i18n/locales/en.json';
import ko from '../src/i18n/locales/ko.json';
import ja from '../src/i18n/locales/ja.json';
import zh from '../src/i18n/locales/zh.json';
import es from '../src/i18n/locales/es.json';
import fr from '../src/i18n/locales/fr.json';
import de from '../src/i18n/locales/de.json';
import pt from '../src/i18n/locales/pt.json';
import id from '../src/i18n/locales/id.json';

const locales: Record<string, any> = { ko, ja, zh, es, fr, de, pt, id };
const brandNames = [
  'SelaLink',
  'BuildSelf',
  'FreshSelf',
  'logSelf',
  'FreshSnap',
  'BuildSnap',
  'Google Play Store',
  'Google Play',
  'App Store'
];

// 영문 그대로 유지되어야 하는 공통 키 목록
const allowedEnglishKeys = new Set([
  'nav.blog',
  'platform.mobile',
  'platform.web',
  'lineup.guide.title',
  'bs.download.appstore',
  'bs.download.playstore',
  'bs.shorts.story',
  'meta.keywords',
  'app.buildself.meta.keywords',
  'app.logself.meta.keywords',
  'app.freshself.meta.keywords',
  'app.freshsnap.meta.keywords'
]);

describe('정적 번역 파일 (locales/*.json) 무결성 및 고유명사 검증 테스트', () => {
  const enKeys = Object.keys(en);

  // 1. 번역 키 대칭성 검증 (Symmetry Check)
  Object.entries(locales).forEach(([lang, data]) => {
    it(`[${lang.toUpperCase()}] 파일이 영어(en) 기준과 동일한 번역 키 대칭성을 가져야 한다`, () => {
      const currentKeys = Object.keys(data);

      // 누락된 키 분석
      const missingKeys = enKeys.filter(k => !currentKeys.includes(k));
      expect(
        missingKeys,
        `오류: ${lang}.json 에 다음 번역 키가 누락되었습니다: \n${missingKeys.join('\n')}`
      ).toEqual([]);

      // 타겟 언어 사전에만 있는 불필요한 키 분석
      const extraKeys = currentKeys.filter(k => !enKeys.includes(k));
      expect(
        extraKeys,
        `오류: ${lang}.json 에 정의된 다음 키는 en.json 에 없는 유령 키입니다: \n${extraKeys.join('\n')}`
      ).toEqual([]);
    });
  });

  // 2. 브랜드 고유명사 정확성 및 일치 검증
  Object.entries({ en, ...locales }).forEach(([lang, data]) => {
    it(`[${lang.toUpperCase()}] 번역 팩 내 브랜드 및 스토어 고유명사의 정확성을 보존해야 한다`, () => {
      Object.entries(data).forEach(([key, val]) => {
        if (typeof val !== 'string') return;

        // 고유명사를 잘못 표기한 대표적인 오류 감지 패턴
        const misspellPatterns = [
          { regex: /\bselalink\b/i, correct: 'SelaLink' },
          { regex: /\bbuildself\b/i, correct: 'BuildSelf' },
          { regex: /\bfreshself\b/i, correct: 'FreshSelf' },
          { regex: /\blogself\b/i, correct: 'logSelf' },
          { regex: /\bfreshsnap\b/i, correct: 'FreshSnap' },
          { regex: /\bbuildsnap\b/i, correct: 'BuildSnap' },
          { regex: /Google\s*Play\s*Store/i, correct: 'Google Play Store' }
        ];

        misspellPatterns.forEach(({ regex, correct }) => {
          if (regex.test(val)) {
            const match = val.match(regex);
            if (match && match[0] !== correct) {
              expect.fail(
                `오류: [${lang.toUpperCase()}] 번역 키 "${key}" 의 값 "${val}" 내에 고유명사 표기 오류가 있습니다. "${match[0]}" -> "${correct}" 로 수정하십시오.`
              );
            }
          }
        });
      });
    });
  });

  // 3. 유니코드 기반 번역 품질 검증 (영어 Fallback 방어)
  Object.entries(locales).forEach(([lang, data]) => {
    it(`[${lang.toUpperCase()}] 번역 값이 타겟 언어별 유니코드 문자열 특성을 만족해야 한다`, () => {
      Object.entries(data).forEach(([key, val]) => {
        if (typeof val !== 'string' || val.trim().length === 0) return;

        const enVal = en[key as keyof typeof en];
        
        // ----------------------------------------------------------------
        // 3-A. 영어 원본과 완전 동일 여부를 통한 번역 누락(Fallback) 검출
        // ----------------------------------------------------------------
        const isSameAsEnglish = val.trim().toLowerCase() === enVal.trim().toLowerCase();
        if (isSameAsEnglish) {
          // 영어와 동일해도 되는 키(화이트리스트), 위인/티어/상태/블로그/스튜디오 키는 검사 스킵
          const isBypassKey = allowedEnglishKeys.has(key) || 
                              /^bs\.mentor\..*/.test(key) ||
                              /^bs\.tier\..*/.test(key) ||
                              /.*\.blog$/.test(key) ||
                              /.*\.studio$/.test(key) ||
                              /.*\.status$/.test(key);
          
          if (isBypassKey) return;

          // 브랜드명, 숫자, 이모지, 기호로만 구성되어 있어 영어와 동일할 수밖에 없는 키는 검사 스킵
          let cleaned = val;
          brandNames.forEach(brand => {
            cleaned = cleaned.replace(new RegExp(brand, 'gi'), '');
          });
          cleaned = cleaned.replace(/<\/?[^>]+(>|$)/g, ' ');
          const isBypass = /^[\d\s\p{Emoji}\p{Symbol}\p{Punctuation}]+$/u.test(cleaned.trim());
          if (isBypass || cleaned.trim().length === 0) return;

          // 그 외에 영어 리소스와 완전히 똑같은 것은 번역 누락으로 판단
          expect.fail(
            `오류: [${lang.toUpperCase()}] 번역 키 "${key}" 의 번역본이 영어 원본 "${enVal}" 과 완전히 동일하여 번역 누락이 강력히 의심됩니다.`
          );
        }

        // ----------------------------------------------------------------
        // 3-B. 언어별 고유 문자(한글, 가나, CJK 한자) 포함 체크 (ko, ja, zh 대상)
        // ----------------------------------------------------------------
        let cleaned = val;
        brandNames.forEach(brand => {
          cleaned = cleaned.replace(new RegExp(brand, 'gi'), '');
        });
        cleaned = cleaned.replace(/<\/?[^>]+(>|$)/g, ' ');
        const isBypass = /^[\d\s\p{Emoji}\p{Symbol}\p{Punctuation}]+$/u.test(cleaned.trim());
        if (isBypass || cleaned.trim().length === 0) return;

        if (lang === 'ko') {
          const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/.test(val);
          expect(
            hasKorean,
            `오류: 한국어 번역 키 "${key}" 의 값 "${val}" 에 한글이 포함되어 있지 않습니다.`
          ).toBe(true);
        } else if (lang === 'ja') {
          const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(val);
          expect(
            hasJapanese,
            `오류: 일본어 번역 키 "${key}" 의 값 "${val}" 에 일본어 문자(가나/한자)가 포함되어 있지 않습니다.`
          ).toBe(true);
        } else if (lang === 'zh') {
          const hasChinese = /[\u4E00-\u9FFF]/.test(val);
          expect(
            hasChinese,
            `오류: 중국어 번역 키 "${key}" 의 값 "${val}" 에 한자가 포함되어 있지 않습니다.`
          ).toBe(true);
        }
      });
    });
  });
});
