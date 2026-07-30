// 주요 한글/영문 오탈자 사전 (Known Typos)
const KNOWN_TYPOS = [
  { typo: '리리스테리아', correct: '리스테리아' }
];

// 6개 라틴계 언어별 대표 불용어/기능어 사전 (Functional Stopwords Map)
const STOPWORDS_MAP = {
  en: new Set([
    'the', 'of', 'and', 'in', 'to', 'a', 'is', 'that', 'for', 'it', 'with', 'as', 'was', 'on', 'at', 'by',
    'this', 'an', 'be', 'are', 'from', 'or', 'have', 'your', 'which', 'will', 'more', 'can', 'has', 'helps',
    'improve', 'every', 'day', 'should', 'you', 'mindset', 'cannot', 'long', 'term', 'success', 'focus',
    'productivity', 'daily', 'routine', 'achieve', 'without', 'causing', 'fatigue', 'habit', 'extremely',
    'effective', 'improving', 'mental', 'download', 'now', 'read', 'more', 'step', 'guide', 'learn', 'get', 'started'
  ]),
  es: new Set([
    'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'y', 'e', 'en', 'para', 'con', 'por', 'que',
    'es', 'son', 'su', 'sus', 'del', 'al', 'como', 'más', 'mas', 'pero', 'este', 'esta', 'estos', 'estas',
    'bueno', 'buena', 'salud', 'mismo', 'atuendo', 'reducir', 'fatiga', 'habito', 'hábito', 'muy', 'diario',
    'extremadamente', 'efectivo', 'mejorar', 'concentración', 'mental', 'productividad', 'largo', 'plazo'
  ]),
  fr: new Set([
    'le', 'la', 'les', 'un', 'une', 'des', 'et', 'en', 'dans', 'pour', 'avec', 'par', 'que', 'qui',
    'est', 'sont', 'son', 'sa', 'ses', 'du', 'au', 'aux', 'comme', 'plus', 'mais', 'cette', 'ce', 'ces',
    'tres', 'très', 'importante', 'sante', 'santé', 'toujours', 'jours', 'habitude', 'quotidienne',
    'extrêmement', 'efficace', 'améliorer', 'votre', 'concentration', 'productivité'
  ]),
  de: new Set([
    'der', 'die', 'das', 'ein', 'eine', 'einen', 'einer', 'und', 'in', 'zu', 'den', 'von', 'nicht', 'mit',
    'ist', 'sind', 'im', 'dem', 'sich', 'des', 'auf', 'für', 'als', 'auch', 'es', 'an', 'er', 'aus',
    'gehirn', 'entspannen', 'neue', 'ideen', 'entwickeln', 'jeden', 'tag', 'schwarzen', 'gewohnheit',
    'tägliche', 'äußerst', 'effektiv', 'ihre', 'mentale', 'konzentration', 'langfristige', 'produktivität', 'steigern'
  ]),
  pt: new Set([
    'o', 'a', 'os', 'as', 'um', 'uma', 'uns', 'umas', 'e', 'em', 'para', 'com', 'por', 'que',
    'é', 'são', 'seu', 'sua', 'seus', 'suas', 'do', 'da', 'dos', 'das', 'no', 'na', 'nos', 'nas',
    'como', 'mais', 'mas', 'este', 'esta', 'cama', 'habito', 'hábito', 'diário', 'extremamente', 'eficaz',
    'melhorar', 'concentração', 'produtividade', 'longo', 'prazo'
  ]),
  id: new Set([
    'yang', 'dan', 'di', 'ke', 'dari', 'adalah', 'untuk', 'pada', 'dengan', 'ini', 'itu', 'tidak',
    'bisa', 'akan', 'atau', 'juga', 'ada', 'karena', 'kebiasaan', 'sangat', 'baik', 'kesehatan', 'anda',
    'harian', 'efektif', 'meningkatkan', 'konsentrasi', 'produktivitas', 'jangka', 'panjang'
  ])
};

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
  { word: 'kebiasaan', sourceLang: 'id', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'de', 'pt'] },
  
  // 독일어 시그니처
  { word: 'sekunden', sourceLang: 'de', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'pt', 'id'] },
  { word: 'stunden', sourceLang: 'de', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'pt', 'id'] },
  { word: 'oder', sourceLang: 'de', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'pt', 'id'] },
  { word: 'nicht', sourceLang: 'de', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'fr', 'pt', 'id'] },

  // 프랑스어 시그니처
  { word: 'heures', sourceLang: 'fr', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'de', 'pt', 'id'] },
  { word: 'avec', sourceLang: 'fr', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'de', 'pt', 'id'] },
  { word: 'dans', sourceLang: 'fr', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'de', 'pt', 'id'] },
  { word: 'cette', sourceLang: 'fr', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'de', 'pt', 'id'] },
  { word: 'habitude', sourceLang: 'fr', targetLangs: ['ko', 'ja', 'zh', 'en', 'es', 'de', 'pt', 'id'] },

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

// 중국어 전용 특수 관용 표현 (일본어 슬롯 유입 방지용 - 일본어에 존재하지 않는 간체/중국어 문법어)
const CHINESE_EXCLUSIVE_TOKENS = ['这个', '对于', '提高', '专注力'];

// 스페인어(es) 전용 고유 키워드 셋 (포르투갈어와 차별화)
const ES_EXCLUSIVE_SET = new Set(['el', 'los', 'las', 'del', 'al', 'con', 'por', 'pero', 'mas', 'más', 'estos', 'estas', 'siempre', 'después', 'puedo', 'pueden', 'rutina', 'tarjetas', 'palabras', 'profesionales', 'investigadores']);
// 포르투갈어(pt) 전용 고유 키워드 셋 (스페인어와 차별화)
const PT_EXCLUSIVE_SET = new Set(['o', 'os', 'as', 'do', 'da', 'dos', 'das', 'no', 'na', 'nos', 'nas', 'com', 'por', 'mas', 'mais', 'sempre', 'depois', 'posso', 'podem', 'rotina', 'cartões', 'palavras', 'profissionais', 'pesquisadores']);


// 대표적인 단문 영문 미번역 헤더/버튼 관용구 (Short English Unreplaced Patterns)
const SHORT_ENGLISH_UNREPLACED_PATTERNS = [
  /\b(download now|read more|step-by-step guide|learn more|get started|3-step guide|home care routine)\b/i
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
  if (/\bundefined\b/i.test(text) || text.includes('[object Object]')) {
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
 * 텍스트에서 괄호 표기, 브랜드명, 학술명사/인명 고유명사, 마크다운 링크, 학명 등 허용된 예외 요소를 소거한 순수 검사 텍스트를 반환합니다.
 * @param {string} text 
 * @param {Set<string>} [extraAllowedSet] 추가 허용어 집합
 * @returns {string}
 */
function stripAllowedExceptions(text, extraAllowedSet = new Set()) {
  if (!text || typeof text !== 'string') return '';
  let cleaned = text;

  // 1. 브랜드 및 서비스명 예외 소거
  cleaned = cleaned.replace(/\b(PetSelf|FreshSnap|BuildSelf|SelaLink|FreshSelf|logSelf|BuildSnap)\b/g, '');

  // 2. 마크다운 이탤릭/학명 (*Eclectus roratus* 등)
  cleaned = cleaned.replace(/\*[^*]+\*/g, '');

  // 3. 전각/반각 괄호 및 대괄호 내부 예외 ( (Sexual Dimorphism), (Albert Einstein), [FCI] 등 )
  cleaned = cleaned.replace(/\([^\)]+\)/g, '');
  cleaned = cleaned.replace(/（[^）]+）/g, '');
  cleaned = cleaned.replace(/\[[^\]]+\]/g, '');

  // 4. URL 및 파일 경로 예외
  cleaned = cleaned.replace(/https?:\/\/\S+/g, '');
  cleaned = cleaned.replace(/\/[\w.\/-]+/g, '');

  // 5. 허용 단위 및 공통 기호 (IUCN, FCI, AKC, AAV, NIFS, USDA, WHO, FAO, FDA, pH, ℃, %, mg, kg, cm, mm, L, ml, BDNF, Serotonin, Dopamine 등)
  cleaned = cleaned.replace(/\b(IUCN|FCI|AKC|AAV|NIFS|USDA|WHO|FAO|FDA|pH|℃|℉|%|mg|g|kg|cm|mm|m|L|ml|BDNF|Serotonin|Dopamine)\b/gi, '');

  // 6. 대문자로 시작하는 2단어 이상의 영문 인명/고유명사 (예: Albert Einstein, Steve Jobs, René Descartes, Prefrontal Cortex, Task-Switching Cost)
  cleaned = cleaned.replace(/\b[A-Z][a-zA-Zà-ÿ]*\s+[A-Z][a-zA-Zà-ÿ]*\b/g, '');
  cleaned = cleaned.replace(/\b(Prefrontal Cortex|Task-Switching Cost|Cognitive Neuroscience)\b/gi, '');

  // 7. 동적으로 주입된 추가 허용어 소거
  if (extraAllowedSet && extraAllowedSet.size > 0) {
    extraAllowedSet.forEach(word => {
      if (word && word.length > 2) {
        const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        cleaned = cleaned.replace(new RegExp(`\\b${escaped}\\b`, 'g'), '');
      }
    });
  }

  return cleaned;
}

/**
 * 텍스트 슬롯 내의 이종 언어 유입(언어 순도 오염), 오탈자 및 노이즈 단어 침투 여부를 검사합니다.
 * @param {string} text 검사할 텍스트
 * @param {string} lang 대상 언어 코드 (ko, en, ja, zh, es, fr, de, pt, id)
 * @param {object} options 추가 옵션 (isEasternHistory, extraAllowedSet 등)
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
      errorReason: `'${lang}' 텍스트 슬롯 내에 비정상 시스템 노이즈 단어(responses, undefined, [object Object] 등)가 유입되었습니다.`
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

  // 4-A. 단문 영문 미번역 패턴 감지 (비영어 언어 슬롯 대상)
  if (lang !== 'en') {
    for (const pat of SHORT_ENGLISH_UNREPLACED_PATTERNS) {
      if (pat.test(text)) {
        return {
          valid: false,
          errorReason: `'${lang}' 텍스트 슬롯에 치환되지 않은 단문 영문 문구("${text}")가 유출되었습니다.`
        };
      }
    }
  }

  const { isEasternHistory = false, extraAllowedSet = new Set() } = options;
  const cleanedText = stripAllowedExceptions(text, extraAllowedSet);

  // 5. 라틴계열 언어 문자 검사 및 언어 순도/미번역/이종 유입 평가
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

    // 라틴계 언어 6개 간 불용어 점수 다차원 평가 (72개 조합 전수 오유입 차단)
    const words = (cleanedText.match(/[a-zA-Zà-ÿäöüßÄÖÜáéíóúñÁÉÍÓÚÑçãõâêôÇÃÕÂÊÔ]+/g) || []).map(w => w.toLowerCase());
    if (words.length >= 4) {
      const scores = { en: 0, es: 0, fr: 0, de: 0, pt: 0, id: 0 };
      let totalTargetStopwords = 0;
      
      words.forEach(w => {
        Object.keys(STOPWORDS_MAP).forEach(l => {
          if (STOPWORDS_MAP[l].has(w)) {
            scores[l]++;
          }
        });
      });

      totalTargetStopwords = scores[lang] || 0;
      let dominantLang = lang;
      let maxScore = totalTargetStopwords;

      Object.entries(scores).forEach(([l, s]) => {
        if (l !== lang && s > maxScore) {
          maxScore = s;
          dominantLang = l;
        }
      });

      // 스페인어(es) vs 포르투갈어(pt) 겹침 오탐 완화 예외
      let isFalsePositiveIberian = false;
      if ((lang === 'es' && dominantLang === 'pt') || (lang === 'pt' && dominantLang === 'es')) {
        let esExclusiveCount = 0;
        let ptExclusiveCount = 0;
        words.forEach(w => {
          if (ES_EXCLUSIVE_SET.has(w)) esExclusiveCount++;
          if (PT_EXCLUSIVE_SET.has(w)) ptExclusiveCount++;
        });
        if (lang === 'es' && (esExclusiveCount >= 1 || totalTargetStopwords >= scores.pt)) {
          isFalsePositiveIberian = true;
        } else if (lang === 'pt' && (ptExclusiveCount >= 1 || totalTargetStopwords >= scores.es)) {
          isFalsePositiveIberian = true;
        }
      }

      // 최소 2개 이상의 타겟 언어 불용어나 뚜렷한 기능어 패턴이 있고, 다른 언어 점수가 3점 이상 우세할 때만 차단
      if (!isFalsePositiveIberian && dominantLang !== lang && maxScore >= totalTargetStopwords + 3) {
        return {
          valid: false,
          errorReason: `'${lang}' 텍스트 슬롯에 '${dominantLang}' 언어 문장("${cleanedText.slice(0, 35)}...")이 오유입되었습니다.`
        };
      }
    }


  }

  // 6. 동양 언어 문자 순도 및 비동양어 잔류 검사
  if (lang === 'ko') {
    const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/.test(cleanedText);
    if (hasJapanese) {
      return {
        valid: false,
        errorReason: '한국어 데이터에 일본어(가나)가 포함되어 있습니다.'
      };
    }

    // 한국어 슬롯 내 중국어 고유 어휘 유출 검사
    for (const token of CHINESE_EXCLUSIVE_TOKENS) {
      if (text.includes(token)) {
        return {
          valid: false,
          errorReason: `한국어 슬롯에 중국어 고유 표현('${token}')이 유출되었습니다.`
        };
      }
    }

    // 한국어 슬롯 내 외국어(라틴계 언어) 유출 검사
    const latinWords = (cleanedText.match(/[a-zA-Zà-ÿ]{3,}/g) || []);
    let latinStopCount = 0;
    latinWords.forEach(w => {
      const lower = w.toLowerCase();
      Object.values(STOPWORDS_MAP).forEach(swSet => {
        if (swSet.has(lower)) latinStopCount++;
      });
    });

    if (latinWords.length >= 3 && latinStopCount >= 2) {
      return {
        valid: false,
        errorReason: '한국어 데이터에 번역되지 않은 이종 라틴계 언어 문장이 유출되었습니다.'
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

    // 일본어 슬롯 내 중국어 고유 어휘 유출 검사
    for (const token of CHINESE_EXCLUSIVE_TOKENS) {
      if (text.includes(token)) {
        return {
          valid: false,
          errorReason: `일본어 슬롯에 중국어 고유 표현('${token}')이 유출되었습니다.`
        };
      }
    }

    // 일본어 슬롯 내 라틴계 문장 유출 검사
    const latinWords = (cleanedText.match(/[a-zA-Zà-ÿ]{3,}/g) || []);
    let latinStopCount = 0;
    latinWords.forEach(w => {
      const lower = w.toLowerCase();
      Object.values(STOPWORDS_MAP).forEach(swSet => {
        if (swSet.has(lower)) latinStopCount++;
      });
    });
    if (latinWords.length >= 3 && latinStopCount >= 2) {
      return {
        valid: false,
        errorReason: '일본어 데이터에 번역되지 않은 라틴계 언어 문장이 유출되었습니다.'
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

    // 중국어 슬롯 내 라틴계 문장 유출 검사
    const latinWords = (cleanedText.match(/[a-zA-Zà-ÿ]{3,}/g) || []);
    let latinStopCount = 0;
    latinWords.forEach(w => {
      const lower = w.toLowerCase();
      Object.values(STOPWORDS_MAP).forEach(swSet => {
        if (swSet.has(lower)) latinStopCount++;
      });
    });
    if (latinWords.length >= 3 && latinStopCount >= 2) {
      return {
        valid: false,
        errorReason: '중국어 데이터에 번역되지 않은 라틴계 언어 문장이 유출되었습니다.'
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
