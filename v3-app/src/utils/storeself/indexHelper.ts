import { indexLocalTranslations, indexSourceTranslations } from '../../i18n/storeselfTranslations';

export const localTranslations = indexLocalTranslations;
export const sourceTranslations = indexSourceTranslations;

export const categories = [
  'all',
  'vegetable',
  'fruit',
  'dairy',
  'meat',
  'seafood',
  'grain',
  'condiment',
  'etc'
];

export function getLocalizedIngredients(ingredients: any[], currentLang: string) {
  return ingredients.map((item) => {
    const localName = item.names[currentLang] || item.names['en'];
    
    // 추천 보관 방식 결정 (상세 페이지와 동일)
    const getRecommendedMethod = () => {
      if (item.storage.fridge && item.storage.fridge.durationDays > 0) return 'fridge';
      if (item.storage.room && item.storage.room.durationDays > 0) return 'room';
      if (item.storage.freezer && item.storage.freezer.durationDays > 0) return 'freezer';
      return item.storage.fridge ? 'fridge' : (item.storage.room ? 'room' : 'freezer');
    };
    
    const recommendedMethod = getRecommendedMethod();
    const guide = item.storage[recommendedMethod];
    const sources = guide?.sources || [];
    
    // 검색 인덱스에 출처 다국어 명칭 및 약어 추가 (기획안 C)
    let sourceKeywords = sources.join(' ');
    sources.forEach((src: string) => {
      const koText = sourceTranslations['ko']?.[`source.${src}`] || '';
      const enText = sourceTranslations['en']?.[`source.${src}`] || '';
      sourceKeywords += ` ${koText} ${enText}`;
    });

    const localSearchKeywords = item.searchKeywords?.[currentLang] || item.searchKeywords?.['en'] || [];
    
    return {
      ...item,
      localName,
      recommendedMethod,
      sources,
      // 검색 인덱스를 위한 키워드 결합 (다국어 동의어 대응)
      searchIndex: `${localName.toLowerCase()} ${item.id} ${item.category} ${localSearchKeywords.join(' ').toLowerCase()} ${sourceKeywords.toLowerCase()}`
    };
  });
}

export function getCategoryCounts(ingredients: any[]) {
  return categories.reduce((acc, cat) => {
    if (cat === 'all') {
      acc[cat] = ingredients.length;
    } else {
      acc[cat] = ingredients.filter((item) => item.category === cat).length;
    }
    return acc;
  }, {} as Record<string, number>);
}
