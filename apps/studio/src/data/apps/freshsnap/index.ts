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

try {
  // Vite 컴파일러가 빌드 타임에 모든 JSON 데이터를 수집하여 번들에 정적으로 바인딩합니다.
  // @ts-ignore
  modules = import.meta.glob('./items/*.json', { eager: true });
} catch (e) {
  // Vite 환경이 아닌 순수 Node.js 스크립트 실행 환경 (예: compile_ingredient_blogs.js)을 위한 실시간 폴백
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const itemsDir = path.join(__dirname, 'items');
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
