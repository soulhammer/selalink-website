import { describe, it, expect } from 'vitest';
import { getLocalizedIngredients, getCategoryCounts } from '../src/utils/freshsnap/indexHelper';

describe('FreshSnap 식재료 다국어 검색/추천 비즈니스 로직 검증', () => {
  
  // 모의 식재료 데이터
  const mockIngredients = [
    {
      id: 'apple',
      category: 'fruit',
      names: {
        ko: '사과',
        en: 'Apple',
        ja: 'リンゴ'
      },
      searchKeywords: {
        ko: ['부사', '아오리'],
        en: ['fuji', 'gala']
      },
      storage: {
        fridge: { durationDays: 21, sources: ['usda'] },
        room: { durationDays: 7, sources: ['fda'] },
        freezer: { durationDays: 0 }
      }
    },
    {
      id: 'onion',
      category: 'vegetable',
      names: {
        ko: '양파',
        en: 'Onion'
      },
      storage: {
        fridge: { durationDays: 0 },
        room: { durationDays: 30, sources: ['usda'] }
      }
    }
  ];

  it('식재료 다국어 명칭 및 검색어 결합 인덱스가 정상 생성되는가', () => {
    // 1. 한국어 환경 변환 검증
    const koResult = getLocalizedIngredients(mockIngredients, 'ko');
    expect(koResult[0].localName).toBe('사과');
    expect(koResult[0].searchIndex).toContain('사과');
    expect(koResult[0].searchIndex).toContain('apple');
    expect(koResult[0].searchIndex).toContain('부사');
    
    // 2. 영어 환경 변환 검증
    const enResult = getLocalizedIngredients(mockIngredients, 'en');
    expect(enResult[0].localName).toBe('Apple');
    expect(enResult[0].searchIndex).toContain('apple');
    expect(enResult[0].searchIndex).toContain('fuji');
  });

  it('추천 보관 방법이 우위 로직(냉장 > 실온 > 냉동)에 의해 정확히 연산되는가', () => {
    const koResult = getLocalizedIngredients(mockIngredients, 'ko');
    
    // 사과는 fridge 기간이 있으므로 fridge가 추천됨
    expect(koResult[0].recommendedMethod).toBe('fridge');
    
    // 양파는 fridge 기간이 0이고, room 기간만 있으므로 room이 추천됨
    expect(koResult[1].recommendedMethod).toBe('room');
  });

  it('카테고리별 분기 집계가 MECE 원칙으로 정상 산출되는가', () => {
    const counts = getCategoryCounts(mockIngredients);
    expect(counts.all).toBe(2);
    expect(counts.fruit).toBe(1);
    expect(counts.vegetable).toBe(1);
    expect(counts.meat).toBe(0);
  });

});
