import { detailLocalTranslations, detailSourceTranslations, detailDescTemplates, detailMethodNames } from '../../i18n/storeselfTranslations';

export interface StoreSelfDetailData {
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

export function getStoreSelfDetailData(currentItem: any, currentLang: string): StoreSelfDetailData {
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
    .replace('{details}', detailsText);

  // 9개 언어 대응 동적 키워드 생성
  const localSearchKeywords = currentItem.searchKeywords?.[currentLang] || currentItem.searchKeywords?.['en'] || [];
  const dynamicKeywords = `${localName}, ${localName} 보관법, ${localName} 보관 기간, ${localName} 소비기한, ${currentItem.id.replace(/-/g, ' ')}, ${localSearchKeywords.join(', ')}, StoreSelf, FreshSelf, SelaLink`;

  // 동적 HowTo 스키마(JSON-LD) 생성
  const isKo = currentLang === 'ko';
  const steps = [];

  if (currentItem.storage.fridge && currentItem.storage.fridge.durationDays > 0) {
    steps.push({
      "@type": "HowToStep",
      "name": isKo ? "냉장 보관법" : (currentLang === 'ja' ? '冷蔵保存' : (currentLang === 'zh' ? '冷藏保存' : 'Refrigerated Storage')),
      "text": currentItem.storage.fridge.tips[currentLang] || currentItem.storage.fridge.tips['en']
    });
  }
  if (currentItem.storage.room && currentItem.storage.room.durationDays > 0) {
    steps.push({
      "@type": "HowToStep",
      "name": isKo ? "실온 보관법" : (currentLang === 'ja' ? '常温保存' : (currentLang === 'zh' ? '常温保存' : 'Room Temperature Storage')),
      "text": currentItem.storage.room.tips[currentLang] || currentItem.storage.room.tips['en']
    });
  }
  if (currentItem.storage.freezer && currentItem.storage.freezer.durationDays > 0) {
    steps.push({
      "@type": "HowToStep",
      "name": isKo ? "냉동 보관법" : (currentLang === 'ja' ? '冷凍保存' : (currentLang === 'zh' ? '冷冻保存' : 'Frozen Storage')),
      "text": currentItem.storage.freezer.tips[currentLang] || currentItem.storage.freezer.tips['en']
    });
  }

  const ingredientHowToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": isKo ? `${localName} 보관 방식 & 권장 보관 기간` : (currentLang === 'ja' ? `${localName}の保存方法と推奨期間` : (currentLang === 'zh' ? `${localName}的保存方式与推荐期限` : `How to store ${localName}`)),
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
      const qText = isKo 
        ? `${localName} ${methodLabel} 기간과 보관 방법은 어떻게 되나요?`
        : `How long can you store ${localName} in the ${meth} and how to do it?`;
      const aText = guide.durationDays === 9999
        ? `${localName}의 권장 ${methodLabel} 기간은 무기한입니다. 보관 팁: ${guide.tips[currentLang] || guide.tips['en']}`
        : `${localName}의 권장 ${methodLabel} 기간은 ${guide.durationDays}일입니다. 보관 팁: ${guide.tips[currentLang] || guide.tips['en']}`;
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
    ko: `${localName} - 보관법 & 소비기한 계산기 (StoreSelf) | StoreSelf`,
    en: `${localName} - Storage Guide & Expiration Calculator (StoreSelf) | StoreSelf`,
    ja: `${localName} - 保存方法＆期限チェッカー (StoreSelf) | StoreSelf`,
    zh: `${localName} - 保存方式与保质期查询 (StoreSelf) | StoreSelf`,
    es: `${localName} - Guía de Conservación & Caducidad (StoreSelf) | StoreSelf`,
    fr: `${localName} - Guide de Conservation & D-Day (StoreSelf) | StoreSelf`,
    de: `${localName} - Haltbarkeits- & Vorrats-Ratgeber (StoreSelf) | StoreSelf`,
    pt: `${localName} - Guia de Conservação & Validade (StoreSelf) | StoreSelf`,
    id: `${localName} - Panduan Penyimpanan & Kalkulator Kesegaran (StoreSelf) | StoreSelf`
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
