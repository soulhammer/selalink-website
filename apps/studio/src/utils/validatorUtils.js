// 주요 한글/영문 오탈자 사전 (Known Typos)
const KNOWN_TYPOS = [
  { typo: '리리스테리아', correct: '리스테리아' }
];

// 이종 언어 오유입 감지 단어 (Distinct cross-language leakage tokens)
const CROSS_LANGUAGE_SIGNATURES = [
  // 인도네시아어 시그니처 (타 라틴계 및 동양어 유입 방지)
  { word: 'menit', sourceLang: 'id', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'de', 'pt'] },
  { word: 'secara', sourceLang: 'id', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'de', 'pt'] },
  { word: 'adalah', sourceLang: 'id', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'de', 'pt'] },
  { word: 'dengan', sourceLang: 'id', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'de', 'pt'] },
  { word: 'untuk', sourceLang: 'id', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'de', 'pt'] },
  { word: 'dalam', sourceLang: 'id', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'de', 'pt'] },
  { word: 'tidak', sourceLang: 'id', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'de', 'pt'] },
  
  // 독일어 시그니처
  { word: 'sekunden', sourceLang: 'de', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'pt', 'id'] },
  { word: 'stunden', sourceLang: 'de', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'pt', 'id'] },
  { word: 'oder', sourceLang: 'de', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'pt', 'id'] },
  { word: 'nicht', sourceLang: 'de', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'pt', 'id'] },

  // 프랑스어 시그니처
  { word: 'heures', sourceLang: 'fr', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'de', 'pt', 'id'] },
  { word: 'avec', sourceLang: 'fr', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'de', 'pt', 'id'] },
  { word: 'dans', sourceLang: 'fr', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'de', 'pt', 'id'] },

  // 스페인어 / 포르투갈어 시그니처
  { word: 'cuando', sourceLang: 'es', targetLangs: ['ko', 'ja', 'zh', 'en', 'fr', 'de', 'id'] },
  { word: 'quando', sourceLang: 'pt', targetLangs: ['ko', 'ja', 'zh', 'en', 'fr', 'de', 'id'] },

  // 영어 미번역 잔류 단어 시그니처 (비영어 텍스트 유입 차단, de는 Signals/Signale 명사 사용 허용)
  { word: 'signals', sourceLang: 'en', targetLangs: ['ko', 'ja', 'zh', 'es', 'fr', 'pt', 'id'] },
  { word: 'without', sourceLang: 'en', targetLangs: ['ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'] },
  { word: 'between', sourceLang: 'en', targetLangs: ['ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'] },
  { word: 'through', sourceLang: 'en', targetLangs: ['ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'] },
  { word: 'should', sourceLang: 'en', targetLangs: ['ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'] },
  { word: 'because', sourceLang: 'en', targetLangs: ['ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'] }
];

/**
 * 유니코드 인코딩 오염(Mojibake 또는 \uFFFD) 여부를 검사합니다.
 * @param {string} text 
 * @returns {boolean}
 */
export function detectMojibake(text) {
  if (typeof text !== 'string') return false;
  return text.includes('\uFFFD') || /Ã[¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿À-ÿ]|ì[ -ÿ]|ë[ -ÿ]/g.test(text);
}

export function detectNoiseTokens(text, lang) {
  if (typeof text !== 'string') return false;
  // 1. undefined, [object Object] 등 개발 코드 오염 검사
  if (/\b(undefined|\[object Object\])\b/i.test(text)) {
    return true;
  }
  // 2. 소문자 'null'은 독일어(de)에서 숫자 0(auf null reduzieren 등)을 의미하므로 독일어 외 언어에서만 오염으로 진단
  if (lang !== 'de' && /\bnull\b/.test(text)) {
    return true;
  }
  // 3. 'responses' 노이즈 단어는 비영어(zh, ja, ko, de, es, fr 등) 텍스트 슬롯에 섞였을 때만 오염으로 진단
  if (lang !== 'en' && /\bresponses\b/i.test(text)) {
    return true;
  }
  return false;
}

/**
 * 텍스트에서 괄호 표기, 브랜드명, 마크다운 링크, 학명 등 허용된 예외 요소를 소거한 순수 검사 텍스트를 반환합니다.
 * @param {string} text 
 * @returns {string}
 */
function stripAllowedExceptions(text) {
  if (!text || typeof text !== 'string') return '';
  return text
    // 1. 브랜드 및 서비스명 예외
    .replace(/\b(PetSelf|FreshSnap|BuildSelf)\b/g, '')
    // 2. 마크다운 이탤릭/학명 (*Eclectus roratus* 등)
    .replace(/\*[^*]+\*/g, '')
    // 3. 전각/반각 괄호 및 대괄호 내부 예외 ( (Sexual Dimorphism), （Toe-tapping）, [FCI] 등 )
    .replace(/\([^\)]+\)/g, '')
    .replace(/（[^）]+）/g, '')
    .replace(/\[[^\]]+\]/g, '')
    // 4. URL 및 파일 경로 예외
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\/[\w.\/-]+/g, '')
    // 5. 허용 단위 및 공통 기호 (IUCN, FCI, AKC, AAV, pH, ℃, %, mg, kg, cm, mm, L, ml 등)
    .replace(/\b(IUCN|FCI|AKC|AAV|NIFS|USDA|WHO|FAO|FDA|pH|℃|℉|%|mg|g|kg|cm|mm|m|L|ml)\b/gi, '');
}

/**
 * 텍스트 슬롯 내의 이종 언어 유입(언어 순도 오염), 오탈자 및 노이즈 단어 침투 여부를 검사합니다.
 * @param {string} text 검사할 텍스트
 * @param {string} lang 대상 언어 코드 (ko, en, ja, zh, es, fr, de, pt, id)
 * @param {object} options 추가 옵션 (isEasternHistory 등)
 * @returns {{ valid: boolean, errorReason?: string }}
 */
export function checkLanguagePurity(text, lang, options = {}) {
  if (!text || typeof text !== 'string') {
    return { valid: true };
  }

  // 1. Mojibake 검사
  if (detectMojibake(text)) {
    return {
      valid: false,
      errorReason: `'${lang}' 텍스트 슬롯 내에 유니코드 인코딩 깨짐(Mojibake)이 감지되었습니다.`
    };
  }

  // 2. 알려진 오탈자(Typo) 감지
  for (const item of KNOWN_TYPOS) {
    if (text.includes(item.typo)) {
      return {
        valid: false,
        errorReason: `'${lang}' 텍스트 슬롯 내 오탈자 '${item.typo}'가 감지되었습니다. '${item.correct}'(으)로 교정해야 합니다.`
      };
    }
  }

  // 3. 노이즈 토큰(시스템 잔류 영단어 오염) 검사
  if (detectNoiseTokens(text, lang)) {
    return {
      valid: false,
      errorReason: `'${lang}' 텍스트 슬롯 내에 비정상 시스템 노이즈 단어(responses, undefined 등)가 유입되었습니다.`
    };
  }

  // 4. 언어 간 고유 시그니처 오유입 검사
  for (const sig of CROSS_LANGUAGE_SIGNATURES) {
    if (sig.targetLangs.includes(lang)) {
      const regex = new RegExp(`\\b${sig.word}\\b`, 'i');
      if (regex.test(text)) {
        return {
          valid: false,
          errorReason: `'${lang}' 언어 데이터에 '${sig.sourceLang}' 언어 전용 고유 단어('${sig.word}')가 오유입되었습니다.`
        };
      }
    }
  }

  const { isEasternHistory = false } = options;

  // 5. 라틴계열 언어 문자 검사
  if (['en', 'es', 'fr', 'de', 'pt', 'id'].includes(lang)) {
    const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/.test(text);
    const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/.test(text);
    const hasChinese = isEasternHistory ? false : /[\u4E00-\u9FFF]/.test(text);

    if (hasKorean || hasJapanese || hasChinese) {
      return {
        valid: false,
        errorReason: '라틴계열 데이터에 이종 언어(한글/가나/한자)가 포함되어 있습니다.'
      };
    }
  }

  // 6. 동양 언어 문자 순도 및 비동양어 잔류 검사
  const cleanedText = stripAllowedExceptions(text);

  if (lang === 'ko') {
    const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/.test(cleanedText);
    if (hasJapanese) {
      return {
        valid: false,
        errorReason: '한국어 데이터에 일본어(가나)가 포함되어 있습니다.'
      };
    }
  }

  if (lang === 'ja') {
    const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/.test(text);
    if (hasKorean) {
      return {
        valid: false,
        errorReason: '일본어 데이터에 한국어(한글)가 포함되어 있습니다.'
      };
    }
  }

  if (lang === 'zh') {
    const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/.test(text);
    const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/.test(text);
    if (hasKorean || hasJapanese) {
      return {
        valid: false,
        errorReason: '중국어 데이터에 한국어/일본어가 포함되어 있습니다.'
      };
    }
  }

  return { valid: true };
}

/**
 * 다국어 텍스트 슬롯 간 제목 끝 이모지 정합성(Emoji Parity)을 검사합니다.
 * 타 8개 언어 대다수의 끝에 특정 이모지가 존재하는데 특정 언어에만 누락된 경우를 감지합니다.
 * @param {Record<string, string>} localeMap 언어 코드를 키로 하는 텍스트 맵 { ko: '...', en: '...', ... }
 * @param {string} fieldName 필드명 (예: cautions[1].title)
 * @returns {{ valid: boolean, errorReason?: string }}
 */
export function checkEmojiParity(localeMap, fieldName) {
  if (!localeMap || typeof localeMap !== 'object') {
    return { valid: true };
  }

  const langs = Object.keys(localeMap);
  if (langs.length < 2) return { valid: true };

  const trailingEmojiMap = {};
  const emojiCounts = {};

  langs.forEach(lang => {
    const text = localeMap[lang];
    if (typeof text === 'string') {
      const match = text.trim().match(/(\p{Extended_Pictographic}+)$/u);
      if (match) {
        const emoji = match[1];
        trailingEmojiMap[lang] = emoji;
        emojiCounts[emoji] = (emojiCounts[emoji] || 0) + 1;
      }
    }
  });

  // 과반수(최소 3개 언어 이상)에서 공통으로 사용된 끝 이모지 탐색
  let dominantEmoji = null;
  for (const [emoji, count] of Object.entries(emojiCounts)) {
    if (count >= 3) {
      dominantEmoji = emoji;
      break;
    }
  }

  if (!dominantEmoji) {
    return { valid: true }; // 공통 끝 이모지 기준이 없는 슬롯은 정상 패스
  }

  // dominantEmoji가 정의되었는데, 특정 언어에만 해당 끝 이모지가 없는 경우 감지
  for (const lang of langs) {
    const text = localeMap[lang];
    if (typeof text === 'string') {
      const emoji = trailingEmojiMap[lang];
      if (emoji !== dominantEmoji) {
        return {
          valid: false,
          errorReason: `'${fieldName}' 필드의 다국어 간 끝 이모지 미매칭! 타 언어에는 이모지 '${dominantEmoji}'가 배치되어 있으나 '${lang}' 텍스트 끝에는 해당 이모지가 누락되어 있습니다.`
        };
      }
    }
  }

  return { valid: true };
}

