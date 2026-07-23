/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { 
  getFreshnessRingClass, 
  parseQuickAddData 
} from '../src/utils/freshsnap/refrigerator';

describe('FreshSnap 신규 UI/UX 기능 헬퍼 검증 (TDD Red Phase)', () => {
  
  describe('D-Day 신선도 네온 링 스타일 클래스 계산 (getFreshnessRingClass)', () => {
    it('D-4 이상인 경우 Emerald 신선도 링 클래스를 반환해야 한다', () => {
      const ringClass = getFreshnessRingClass(5);
      expect(ringClass).toBe('ring-2 ring-emerald-500/80 shadow-emerald-500/20');
    });

    it('D-1 ~ D-3 인 경우 Amber 주의 링 클래스를 반환해야 한다', () => {
      const ringClass1 = getFreshnessRingClass(3);
      const ringClass2 = getFreshnessRingClass(1);
      expect(ringClass1).toBe('ring-2 ring-amber-500/80 shadow-amber-500/20');
      expect(ringClass2).toBe('ring-2 ring-amber-500/80 shadow-amber-500/20');
    });

    it('D-0 이하(당일 및 경과)인 경우 Indigo-Red 펄스 링 클래스를 반환해야 한다', () => {
      const ringClass0 = getFreshnessRingClass(0);
      const ringClassExpired = getFreshnessRingClass(-2);
      expect(ringClass0).toBe('ring-2 ring-indigo-500 dark:ring-rose-500 animate-pulse');
      expect(ringClassExpired).toBe('ring-2 ring-indigo-500 dark:ring-rose-500 animate-pulse');
    });
  });

  describe('1-Tap 쾌속 냉장고 담기 파서 (parseQuickAddData)', () => {
    const mockIngredient = {
      id: 'cabbage',
      category: 'vegetable',
      emoji: '🥬',
      names: { ko: '양배추', en: 'Cabbage' },
      storage: {
        fridge: { durationDays: 10, sources: ['mfds', 'usda'], tips: { ko: '키친타월에 싸서 냉장 보관하세요.' } },
        room: { durationDays: 3, sources: ['usda'], tips: { ko: '통풍이 잘되는 서늘한 곳 보관' } }
      }
    };

    it('식재료 도감 아이템에서 권장 보관기간과 추천 보관위치가 자동 매핑된 냉장고 아이템을 생성해야 한다', () => {
      const result = parseQuickAddData(mockIngredient, 'ko');
      
      expect(result.ingredientId).toBe('cabbage');
      expect(result.name).toBe('양배추');
      expect(result.storageMethod).toBe('fridge');
      expect(result.durationDays).toBe(10);
      expect(result.tip).toBe('키친타월에 싸서 냉장 보관하세요.');
      expect(result.sources).toContain('mfds');
    });

    it('꿀(Honey) 및 식초(Vinegar) 등 영구 보관 식재료의 durationDays가 9999로 올바르게 정제 매핑되어야 한다', () => {
      const mockHoney = {
        id: 'honey',
        names: { ko: '꿀' },
        storage: { room: { durationDays: 9999, tips: { ko: '상하지 않고 영구적입니다.' } } }
      };
      const result = parseQuickAddData(mockHoney, 'ko');
      expect(result.durationDays).toBe(9999);
      expect(result.tip).toContain('영구적');
    });
  });
});

