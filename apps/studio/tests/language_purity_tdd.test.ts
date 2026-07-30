import { describe, it, expect } from 'vitest';
import { checkLanguagePurity, detectMojibake, detectNoiseTokens, checkEmojiParity } from '../src/utils/validatorUtils.js';

const langs = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'] as const;
type Lang = typeof langs[number];

// 각 언어별 대표 샘플 문장 (일반 문장)
const sampleSentences: Record<Lang, string> = {
  ko: '이 습관은 매일 아침 꾸준히 실천하는 것이 뇌 건강과 집중력 향상에 대단히 좋습니다.',
  en: 'This daily habit is extremely effective for improving your mental focus and long-term productivity.',
  ja: 'この習慣は毎日の集中力向上と脳の健康維持に非常に効果的です。',
  zh: '这个习惯对于提高每天的专注力和维持大脑健康非常有有效。',
  es: 'Este hábito diario es extremadamente efectivo para mejorar su concentración mental y productividad a largo plazo.',
  fr: 'Cette habitude quotidienne est extrêmement efficace pour améliorer votre concentration mentale et votre productivité.',
  de: 'Diese tägliche Gewohnheit ist äußerst effektiv, um Ihre mentale Konzentration und langfristige Produktivität zu steigern.',
  pt: 'Este hábito diário é extremamente eficaz para melhorar sua concentração mental e produtividade a longo prazo.',
  id: 'Kebiasaan harian ini sangat efektif untuk meningkatkan konsentrasi mental dan produktivitas jangka panjang Anda.'
};

// 허용되어야 하는 고유명사/학술용어 샘플 셋
const allowedEntities = [
  'Albert Einstein',
  'Steve Jobs',
  'René Descartes',
  'Prefrontal Cortex',
  'Task-Switching Cost',
  'Cognitive Neuroscience',
  'BDNF',
  'Serotonin',
  'Dopamine',
  'PetSelf',
  'FreshSnap',
  'BuildSelf',
  'IUCN',
  'pH',
  'mg/kg',
  '℃'
];

describe('🛡️ 9×9 전수 매트릭스(72개 언어 조합) & 5대 실전 엣지 케이스 완전 보강 TDD 테스트', () => {

  // 1. 72개 1:1 언어 교차 오유입 차단 전수 검증 (Matrix Permutation Tests)
  describe('1. 9개 언어 간 72개 1:1 교차 오유입(Cross-Leakage) 차단 전수 검증', () => {
    langs.forEach(targetLang => {
      langs.forEach(sourceLang => {
        if (targetLang === sourceLang) return; // 동일 언어는 스킵

        it(`[차단 검증] Target: '${targetLang}' 슬롯에 Source: '${sourceLang}' 문장 유입 시 반드시 FAIL 처리되어야 한다`, () => {
          const leakedText = sampleSentences[sourceLang];
          const res = checkLanguagePurity(leakedText, targetLang);
          expect(res.valid, `오류: '${targetLang}' 슬롯에 '${sourceLang}' 문장("${leakedText}")이 유입되었으나 차단되지 않았습니다!`).toBe(false);
        });
      });
    });
  });

  // 2. 9개 언어 각각에 고유명사/학술용어가 포함된 정상 문장 보존 검증 (Allowed Entity Tests)
  describe('2. 9개 언어 전체에서 외래어/고유명사/학술용어가 자연스럽게 포함된 경우 정상 PASS 검증', () => {
    langs.forEach(targetLang => {
      allowedEntities.forEach(entity => {
        it(`[보존 검증] Target: '${targetLang}' 슬롯에 고유명사/학술용어 '${entity}' 포함 시 정상 PASS되어야 한다`, () => {
          const validTextWithEntity = `${sampleSentences[targetLang]} (${entity})`;
          const res = checkLanguagePurity(validTextWithEntity, targetLang);
          expect(res.valid, `오류: '${targetLang}' 슬롯에서 허용 대상 고유명사 '${entity}'가 불필요하게 에러 처리되었습니다! (Reason: ${res.errorReason})`).toBe(true);
        });
      });
    });
  });

  // 3. 단문(Short-text: 1~3단어 헤더/버튼) 영문 미번역 유출 검증
  describe('3. 단문(Short-text: 제목, 버튼 등 1~3단어) 영문 미번역 유출 엣지 케이스 검증', () => {
    const shortTextUnreplaced = ['Download Now', 'Read More', 'Step-by-Step Guide', 'Learn More', 'Get Started'];

    langs.filter(l => l !== 'en').forEach(lang => {
      shortTextUnreplaced.forEach(shortText => {
        it(`[단문 차단] Target: '${lang}' 슬롯에 단문 영문 미번역("${shortText}") 유입 시 차단되어야 한다`, () => {
          const res = checkLanguagePurity(shortText, lang);
          expect(res.valid, `오류: '${lang}' 슬롯에 단문 영문("${shortText}")이 유출되었으나 감지되지 않았습니다.`).toBe(false);
        });
      });
    });
  });

  // 4. 개발 오염 노이즈 토큰 & Mojibake 인코딩 깨짐 검증
  describe('4. 개발 오염 노이즈 단어 (undefined, [object Object], null) & Mojibake 인코딩 검증', () => {
    it('undefined 또는 [object Object] 노이즈 토큰 감지', () => {
      expect(detectNoiseTokens('이 텍스트에는 undefined 가 포함되어 있습니다.', 'ko')).toBe(true);
      expect(detectNoiseTokens('User profile: [object Object]', 'en')).toBe(true);
      expect(checkLanguagePurity('This is undefined state.', 'en').valid).toBe(false);
    });

    it('소문자 null 은 독일어(de)에서 숫자 0 의미로 허용, 타 언어에서는 차단', () => {
      expect(detectNoiseTokens('auf null reduzieren', 'de')).toBe(false);
      expect(detectNoiseTokens('Value is null', 'en')).toBe(true);
      expect(checkLanguagePurity('Value is null', 'en').valid).toBe(false);
    });

    it('Mojibake UTF-8 깨진 유니코드 문장 감지', () => {
      expect(detectMojibake('Cette habitude Ã©tait trÃ¨s importante.')).toBe(true);
      expect(checkLanguagePurity('Cette habitude Ã©tait trÃ¨s importante.', 'fr').valid).toBe(false);
      expect(checkLanguagePurity('Hello \uFFFD World', 'en').valid).toBe(false);
    });
  });

  // 5. 이모지 정합성(Emoji Parity) 검증
  describe('5. 다국어 끝 이모지 정합성(Emoji Parity) 검증', () => {
    it('8개 언어에는 끝 이모지 🍌 가 존재하는데 특정 언어만 누락된 경우 차단', () => {
      const localeMap = {
        ko: '바나나 보관법 🍌',
        en: 'Banana Storage Hacks 🍌',
        ja: 'バナナ保存法 🍌',
        zh: '香蕉保存法 🍌',
        es: 'Almacenar Plátanos 🍌',
        fr: 'Conserver les bananes 🍌',
        de: 'Bananen lagern 🍌',
        pt: 'Armazenar Bananas 🍌',
        id: 'Menyimpan Pisang' // 이모지 누락!
      };
      const res = checkEmojiParity(localeMap, 'title');
      expect(res.valid).toBe(false);
      expect(res.errorReason).toContain('id');
    });

    it('모든 언어에 끝 이모지가 일치하게 존재하는 경우 정상 PASS', () => {
      const localeMap = {
        ko: '바나나 보관법 🍌',
        en: 'Banana Storage Hacks 🍌',
        ja: 'バナナ保存法 🍌',
        zh: '香蕉保存法 🍌',
        es: 'Almacenar Plátanos 🍌',
        fr: 'Conserver les bananes 🍌',
        de: 'Bananen lagern 🍌',
        pt: 'Armazenar Bananas 🍌',
        id: 'Menyimpan Pisang 🍌'
      };
      const res = checkEmojiParity(localeMap, 'title');
      expect(res.valid).toBe(true);
    });
  });

  // 6. 복합 엣지 케이스 (Complex Mixed Corruption Tests)
  describe('6. 복합 문장 및 엣지 케이스 정밀 검증', () => {
    it('한국어 슬롯에 스페인어/독일어가 섞여있는 복합 유출 차단', () => {
      const text = '이 습관은 좋습니다. Este hábito es muy bueno para la salud.';
      const res = checkLanguagePurity(text, 'ko');
      expect(res.valid).toBe(false);
    });

    it('스페인어 슬롯에 프랑스어/독일어 문장이 섞인 경우 차단', () => {
      const text = 'Este hábito es bueno. Cette habitude est très importante pour la santé.';
      const res = checkLanguagePurity(text, 'es');
      expect(res.valid).toBe(false);
    });

    it('독일어 슬롯에 인도네시아어 문장이 섞인 경우 차단', () => {
      const text = 'Diese Gewohnheit ist gut. Kebiasaan harian ini sangat efektif untuk Anda.';
      const res = checkLanguagePurity(text, 'de');
      expect(res.valid).toBe(false);
    });

    it('일본어 슬롯에 중국어 고유 문자/문장이 섞인 경우 차단', () => {
      const text = 'この習慣は良いです。这个习惯对于提高每天的专注力非常有效。';
      const res = checkLanguagePurity(text, 'ja');
      expect(res.valid).toBe(false);
    });

    it('중국어 슬롯에 일본어 가나가 섞인 경우 차단', () => {
      const text = '这个习惯非常重要。この習慣はとても効果的です。';
      const res = checkLanguagePurity(text, 'zh');
      expect(res.valid).toBe(false);
    });

    it('동양 역사 특수 포스트의 한자 표기 정상 허용', () => {
      const text = 'Confucius played the Guqin (琴) to harmonize his mind.';
      const res = checkLanguagePurity(text, 'en', { isEasternHistory: true });
      expect(res.valid).toBe(true);
    });
  });

});
