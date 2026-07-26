/**
 * 다국어 블로그 및 Master JSON 검증용 공통 유틸리티 모듈
 */

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
 * 텍스트 슬롯 내의 이종 언어 유입(언어 순도 오염) 및 노이즈 단어 침투 여부를 검사합니다.
 * @param {string} text 검사할 텍스트
 * @param {string} lang 대상 언어 코드 (ko, en, ja, zh, es, fr, de, pt, id)
 * @param {object} options 추가 옵션 (isEasternHistory 등)
 * @returns {{ valid: boolean, errorReason?: string }}
 */
export function checkLanguagePurity(text, lang, options = {}) {
  if (!text || typeof text !== 'string') {
    return { valid: true };
  }

  // 1. 노이즈 토큰(시스템 잔류 영단어 오염) 검사
  if (detectNoiseTokens(text, lang)) {
    return {
      valid: false,
      errorReason: `'${lang}' 텍스트 슬롯 내에 비정상 시스템 노이즈 단어(responses, undefined 등)가 유입되었습니다.`
    };
  }

  const { isEasternHistory = false } = options;

  // 라틴계열 언어 검사
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

  if (lang === 'ko') {
    const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/.test(text);
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
