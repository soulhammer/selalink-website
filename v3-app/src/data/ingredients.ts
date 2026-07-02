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

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

let modules: Record<string, any> = {};

// glob로 모든 개별 식재료 JSON 로드 (Vite 컴파일 타임 동적 수집 또는 Node.js 실시간 폴백)
if (typeof import.meta.glob === 'function') {
  modules = import.meta.glob('./ingredients/items/*.json', { eager: true });
} else {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const itemsDir = path.join(__dirname, 'ingredients/items');
  if (fs.existsSync(itemsDir)) {
    const files = fs.readdirSync(itemsDir).filter(f => f.endsWith('.json'));
    files.forEach(file => {
      const filePath = path.join(itemsDir, file);
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      modules[file] = { default: content };
    });
  }
}

export const ingredients: Ingredient[] = Object.values(modules)
  .map((mod: any) => mod.default as Ingredient)
  .sort((a, b) => a.id.localeCompare(b.id));
