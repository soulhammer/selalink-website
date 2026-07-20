import { detailLocalTranslations, detailSourceTranslations, detailDescTemplates, detailMethodNames } from '../../i18n/freshsnapTranslations';

export interface FreshSnapDetailData {
  recommendedMethod: 'fridge' | 'room' | 'freezer';
  initialGuide: any;
  initialDays: number;
  initialBuyDateStr: string;
  initialBuyDateFormatted: string;
  initialEatUntil: string;
  initialDDayText: string;
  dynamicDescription: string;
  dynamicKeywords: string;
  combinedSchemas: any[];
  pageTitle: string;
  localTranslations: any;
  sourceTranslations: any;
}

export function getFreshSnapDetailData(currentItem: any, currentLang: string): FreshSnapDetailData {
  const localName = currentItem.names[currentLang] || currentItem.names['en'];
  const localTranslations = detailLocalTranslations;
  const sourceTranslations = detailSourceTranslations;

  const t = (key: string, variables: Record<string, string> = {}) => {
    let text = localTranslations[currentLang]?.[key] || localTranslations['en']?.[key] || key;
    Object.entries(variables).forEach(([k, val]) => {
      text = text.replace(`{${k}}`, val);
    });
    return text;
  };

  const tSource = (key: string) => {
    return sourceTranslations[currentLang]?.[key] || sourceTranslations['en']?.[key] || key;
  };

  // 추천 보관 방식 결정 우선순위: 냉장 -> 실온 -> 냉동 (기간이 0인 비권장 보관법은 후순위 제외)
  const getRecommendedMethod = (): 'fridge' | 'room' | 'freezer' => {
    if (currentItem.storage.fridge && currentItem.storage.fridge.durationDays > 0) return 'fridge';
    if (currentItem.storage.room && currentItem.storage.room.durationDays > 0) return 'room';
    if (currentItem.storage.freezer && currentItem.storage.freezer.durationDays > 0) return 'freezer';
    
    // 모두 0일이거나 특수 상황일 때는 구조상 정의된 방식을 반환
    if (currentItem.storage.fridge) return 'fridge';
    if (currentItem.storage.room) return 'room';
    return 'freezer';
  };

  const recommendedMethod = getRecommendedMethod();
  const initialGuide = currentItem.storage[recommendedMethod];
  const initialDays = initialGuide?.durationDays || 0;

  // 검색 엔진 및 AI Search 봇을 위한 SSR/SSG 시점 기본 D-Day 연산
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');
  const initialBuyDateStr = `${y}-${m}-${d}`;

  const initialBuyDateFormatted = today.toLocaleDateString(currentLang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let initialEatUntil = '';
  let initialDDayText = '';

  if (initialDays > 0) {
    const expireDate = new Date(today);
    expireDate.setDate(today.getDate() + initialDays);
    
    const expireDateStr = expireDate.toLocaleDateString(currentLang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    initialEatUntil = t('detail.calc.eat_until', { date: expireDateStr });
    initialDDayText = `🟢 ${t('detail.calc.dday', { dday: `D-${initialDays}` })}`;
  } else {
    initialDDayText = t('detail.not_recommended');
  }

  const descTemplates = detailDescTemplates;
  const methodNames = detailMethodNames;

  const detailsList: string[] = [];
  ['fridge', 'room', 'freezer'].forEach((meth) => {
    const guide = currentItem.storage[meth as keyof typeof currentItem.storage];
    if (guide && guide.durationDays > 0) {
      const template = methodNames[currentLang]?.[meth as keyof (typeof methodNames)['en']] || methodNames['en']?.[meth as keyof (typeof methodNames)['en']] || '';
      if (guide.durationDays === 9999) {
        const infiniteText: Record<string, string> = {
          ko: '무기한', en: 'Infinite', ja: '無期限', zh: '无期限', es: 'Indefinido', fr: 'Indéfini', de: 'Unbegrenzt', pt: 'Indefinido', id: 'Selamanya'
        };
        const infStr = infiniteText[currentLang] || infiniteText['en'];
        detailsList.push(template.replace('({d}일)', `(${infStr})`).replace('({d} days)', `(${infStr})`).replace('({d}일)', `(${infStr})`).replace('({d}天)', `(${infStr})`).replace('({d} dias)', `(${infStr})`).replace('({d} jours)', `(${infStr})`).replace('({d} Tagen)', `(${infStr})`).replace('({d} dias)', `(${infStr})`).replace('({d} hari)', `(${infStr})`).replace('{d}', infStr));
      } else {
        detailsList.push(template.replace('{d}', String(guide.durationDays)));
      }
    }
  });
  const detailsText = detailsList.join(', ');
  const dynamicDescription = (descTemplates[currentLang] || descTemplates['en'])
    .replace('{details}', detailsText)
    .replace(/{name}/g, localName);

  // 9개 언어 대응 동적 키워드 생성
  const localSearchKeywords = currentItem.searchKeywords?.[currentLang] || currentItem.searchKeywords?.['en'] || [];
  const dynamicKeywords = `${localName}, ${localName} 보관법, ${localName} 보관 기간, ${localName} 소비기한, ${currentItem.id.replace(/-/g, ' ')}, ${localSearchKeywords.join(', ')}, FreshSnap, FreshSelf, SelaLink`;

  // 9개 언어별 HowTo 스키마 단계 및 명칭 사전
  const methodNames: Record<string, Record<string, string>> = {
    ko: { fridge: '냉장 보관법', room: '실온 보관법', freezer: '냉동 보관법', title: '{name} 보관 방식 & 권장 보관 기간' },
    en: { fridge: 'Refrigerated Storage', room: 'Room Temperature Storage', freezer: 'Frozen Storage', title: 'How to store {name}' },
    ja: { fridge: '冷蔵保存', room: '常温保存', freezer: '冷凍保存', title: '{name}の保存方法と推奨期間' },
    zh: { fridge: '冷藏保存', room: '常温保存', freezer: '冷冻保存', title: '{name}的保存方式与推荐期限' },
    es: { fridge: 'Almacenamiento Refrigerado', room: 'Temperatura Ambiente', freezer: 'Almacenamiento Congelado', title: 'Cómo almacenar {name}' },
    fr: { fridge: 'Stockage Réfrigéré', room: 'Température Ambiante', freezer: 'Stockage Congelé', title: 'Comment conserver {name}' },
    de: { fridge: 'Kühlung Lagerung', room: 'Raumtemperatur Lagerung', freezer: 'Gefrierlagerung', title: 'Wie man {name} lagert' },
    pt: { fridge: 'Armazenamento Refrigerado', room: 'Temperatura Ambiente', freezer: 'Armazenamento Congelado', title: 'Como armazenar {name}' },
    id: { fridge: 'Penyimpanan Dingin', room: 'Suhu Ruangan', freezer: 'Penyimpanan Beku', title: 'Cara menyimpan {name}' }
  };

  const faqTemplates: Record<string, { q: string; aInfinite: string; aLimit: string }> = {
    ko: {
      q: "{name} {method} 기간과 보관 방법은 어떻게 되나요?",
      aInfinite: "{name}의 권장 {method} 기간은 무기한입니다. 보관 팁: {tips}",
      aLimit: "{name}의 권장 {method} 기간은 {days}일입니다. 보관 팁: {tips}"
    },
    en: {
      q: "How long can you store {name} in the {method} and how to do it?",
      aInfinite: "The recommended storage period for {name} in the {method} is indefinite. Tips: {tips}",
      aLimit: "The recommended storage period for {name} in the {method} is {days} days. Tips: {tips}"
    },
    ja: {
      q: "{name}の{method}期間と保存方法はどうなりますか？",
      aInfinite: "{name}の推奨{method}期間は無期限です。保存のコツ: {tips}",
      aLimit: "{name}の推奨{method}期間は{days}日です。保存のコツ: {tips}"
    },
    zh: {
      q: "{name}的{method}期限与保存方法是什么？",
      aInfinite: "{name}的推荐{method}期限是无限制的。保存建议: {tips}",
      aLimit: "{name}的推荐{method}期限是{days}天。保存建议: {tips}"
    },
    es: {
      q: "¿Cómo y cuánto tempo se puede conservar {name} en {method}?",
      aInfinite: "El período recomendado de conservación para {name} en {method} es indefinido. Consejo: {tips}",
      aLimit: "El período recomendado de conservación para {name} en {method} es de {days} días. Consejo: {tips}"
    },
    fr: {
      q: "Combien de temps peut-on conserver {name} en {method} et comment faire ?",
      aInfinite: "La durée de conservation recommandée pour {name} en {method} est indéfinie. Astuce: {tips}",
      aLimit: "La durée de conservation recommandée pour {name} en {method} est de {days} jours. Astuce: {tips}"
    },
    de: {
      q: "Wie lange kann man {name} im {method} lagern und wie geht das?",
      aInfinite: "Die empfohlene Lagerzeit für {name} im {method} ist unbegrenzt. Tipp: {tips}",
      aLimit: "Die empfohlene Lagerzeit für {name} im {method} beträgt {days} Tage. Tipp: {tips}"
    },
    pt: {
      q: "Como e quanto tempo pode conservar {name} no {method}?",
      aInfinite: "O período recomendado de conservação para {name} no {method} é por tempo indeterminado. Dica: {tips}",
      aLimit: "O período recomendado de conservação para {name} no {method} é de {days} dias. Dica: {tips}"
    },
    id: {
      q: "Berapa lama Anda bisa menyimpan {name} di {method} dan bagaimana caranya?",
      aInfinite: "Masa penyimpanan yang disarankan untuk {name} di {method} adalah tanpa batas waktu. Tips: {tips}",
      aLimit: "Masa penyimpanan yang disarankan untuk {name} di {method} adalah {days} hari. Tips: {tips}"
    }
  };

  const langMap = methodNames[currentLang] || methodNames['en'];
  const faqTpl = faqTemplates[currentLang] || faqTemplates['en'];

  // 동적 HowTo 스키마(JSON-LD) 생성
  const steps = [];

  if (currentItem.storage.fridge && currentItem.storage.fridge.durationDays > 0) {
    steps.push({
      "@type": "HowToStep",
      "name": langMap.fridge,
      "text": currentItem.storage.fridge.tips[currentLang] || currentItem.storage.fridge.tips['en']
    });
  }
  if (currentItem.storage.room && currentItem.storage.room.durationDays > 0) {
    steps.push({
      "@type": "HowToStep",
      "name": langMap.room,
      "text": currentItem.storage.room.tips[currentLang] || currentItem.storage.room.tips['en']
    });
  }
  if (currentItem.storage.freezer && currentItem.storage.freezer.durationDays > 0) {
    steps.push({
      "@type": "HowToStep",
      "name": langMap.freezer,
      "text": currentItem.storage.freezer.tips[currentLang] || currentItem.storage.freezer.tips['en']
    });
  }

  const schemaTitle = langMap.title.replace('{name}', localName);

  const ingredientHowToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": schemaTitle,
    "description": dynamicDescription,
    "image": currentItem.iconImage 
      ? (currentItem.iconImage.startsWith('http') ? currentItem.iconImage : `https://selalink.net${currentItem.iconImage}`)
      : "https://selalink.net/assets/images/og/freshself.png",
    "step": steps
  };

  // 동적 FAQ 스키마 생성 (Semantic SEO 극대화)
  const faqEntities: any[] = [];
  ['fridge', 'room', 'freezer'].forEach((meth) => {
    const guide = currentItem.storage[meth as keyof typeof currentItem.storage];
    if (guide && guide.durationDays > 0) {
      const methodLabel = localTranslations[currentLang]?.[`detail.storage.${meth}`] || localTranslations['en']?.[`detail.storage.${meth}`] || meth;
      const tipsText = guide.tips[currentLang] || guide.tips['en'] || '';
      
      const qText = faqTpl.q.replace('{name}', localName).replace('{method}', methodLabel);
      const aText = guide.durationDays === 9999
        ? faqTpl.aInfinite.replace('{name}', localName).replace('{method}', methodLabel).replace('{tips}', tipsText)
        : faqTpl.aLimit.replace('{name}', localName).replace('{method}', methodLabel).replace('{days}', guide.durationDays.toString()).replace('{tips}', tipsText);

      faqEntities.push({
        "@type": "Question",
        "name": qText,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": aText
        }
      });
    }
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqEntities
  };

  const combinedSchemas = [ingredientHowToSchema, faqSchema];

  // 다국어 페이지 타이틀 템플릿
  const detailTitleTemplate: Record<string, string> = {
    ko: `${localName} - 보관법 & 소비기한 계산기 (FreshSnap) | FreshSnap`,
    en: `${localName} - Storage Guide & Expiration Calculator (FreshSnap) | FreshSnap`,
    ja: `${localName} - 保存方法＆期限チェッカー (FreshSnap) | FreshSnap`,
    zh: `${localName} - 保存方式与保质期查询 (FreshSnap) | FreshSnap`,
    es: `${localName} - Guía de Conservación & Caducidad (FreshSnap) | FreshSnap`,
    fr: `${localName} - Guide de Conservation & D-Day (FreshSnap) | FreshSnap`,
    de: `${localName} - Haltbarkeits- & Vorrats-Ratgeber (FreshSnap) | FreshSnap`,
    pt: `${localName} - Guia de Conservação & Validade (FreshSnap) | FreshSnap`,
    id: `${localName} - Panduan Penyimpanan & Kalkulator Kesegaran (FreshSnap) | FreshSnap`
  };
  const pageTitle = detailTitleTemplate[currentLang] || detailTitleTemplate['en'];

  return {
    recommendedMethod,
    initialGuide,
    initialDays,
    initialBuyDateStr,
    initialBuyDateFormatted,
    initialEatUntil,
    initialDDayText,
    dynamicDescription,
    dynamicKeywords,
    combinedSchemas,
    pageTitle,
    localTranslations,
    sourceTranslations
  };
}
