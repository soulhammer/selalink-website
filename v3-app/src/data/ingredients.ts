export interface StorageGuide {
  durationDays: number;
  tips: Record<string, string>;
  sources?: string[];
}

export interface Ingredient {
  id: string;
  category: 'vegetable' | 'fruit' | 'dairy' | 'meat' | 'seafood' | 'grain' | 'condiment' | 'etc';
  emoji: string;
  names: Record<string, string>;
  isProcessed: boolean;
  iconImage?: string;
  searchKeywords?: Record<string, string[]>;
  storage: {
    room?: StorageGuide;
    fridge?: StorageGuide;
    freezer?: StorageGuide;
  };
}

// glob로 모든 개별 식재료 JSON 로드 (Vite 컴파일 타임 동적 수집)
const modules = import.meta.glob('./ingredients/items/*.json', { eager: true });
export const ingredients: Ingredient[] = Object.values(modules)
  .map((mod: any) => mod.default as Ingredient)
  .sort((a, b) => a.id.localeCompare(b.id));
