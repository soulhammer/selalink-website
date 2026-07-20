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

  describe('나의 가상 냉장고 D-Day 계산 및 Zero-Waste 점수 연산 검증', () => {
    it('구매일과 보관 기간에 따른 남은 D-Day가 정확히 연산되는가', () => {
      // 오늘이 2026-07-20이라고 가정
      const today = new Date('2026-07-20');
      today.setHours(0, 0, 0, 0);

      const calculateRemaining = (buyDateStr: string, durationDays: number) => {
        const buyParts = buyDateStr.split('-');
        const buyDate = new Date(parseInt(buyParts[0], 10), parseInt(buyParts[1], 10) - 1, parseInt(buyParts[2], 10));
        buyDate.setHours(0, 0, 0, 0);
        
        const diffTime = today.getTime() - buyDate.getTime();
        const elapsedDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (durationDays === 9999) return 9999;
        return durationDays - elapsedDays;
      };

      // 1. 보관 기한이 10일이고, 3일 전에 구매한 경우 -> 남은 기한 7일 (D-7)
      expect(calculateRemaining('2026-07-17', 10)).toBe(7);

      // 2. 보관 기한이 5일이고, 7일 전에 구매한 경우 -> 기한 초과 2일 (D+2, 즉 -2)
      expect(calculateRemaining('2026-07-13', 5)).toBe(-2);

      // 3. 오늘 구매한 경우 -> 남은 기한이 보관 기한과 동일
      expect(calculateRemaining('2026-07-20', 7)).toBe(7);

      // 4. 무기한 보관 식재료인 경우 -> 9999 반환
      expect(calculateRemaining('2026-07-10', 9999)).toBe(9999);
    });

    it('소비/폐기 수량에 따른 Zero-Waste Score가 올바르게 연산되는가', () => {
      const getZeroWasteScore = (consumed: number, wasted: number) => {
        const total = consumed + wasted;
        return total === 0 ? 100 : Math.round((consumed / total) * 100);
      };

      // 1. 아무 내역이 없는 초기 상태 -> 100%
      expect(getZeroWasteScore(0, 0)).toBe(100);

      // 2. 3개 먹고, 1개 버린 경우 -> 75%
      expect(getZeroWasteScore(3, 1)).toBe(75);

      // 3. 2개 먹고, 3개 버린 경우 -> 40%
      expect(getZeroWasteScore(2, 3)).toBe(40);

      // 4. 전부 먹고 하나도 안 버린 경우 -> 100%
      expect(getZeroWasteScore(5, 0)).toBe(100);
    });
  });

});
