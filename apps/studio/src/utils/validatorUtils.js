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

/**
 * 텍스트 슬롯 내의 이종 언어 유입(언어 순도 오염) 여부를 검사합니다.
 * @param {string} text 검사할 텍스트
 * @param {string} lang 대상 언어 코드 (ko, en, ja, zh, es, fr, de, pt, id)
 * @param {object} options 추가 옵션 (isEasternHistory 등)
 * @returns {{ valid: boolean, errorReason?: string }}
 */
export function checkLanguagePurity(text, lang, options = {}) {
  if (!text || typeof text !== 'string') {
    return { valid: true };
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
