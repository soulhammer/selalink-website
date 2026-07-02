export interface Habit {
  id: string;
  name: string;
  gender: string;
  era: string;
  location: string;
  lifespan: string;
  birthYear: number;
  bio: string;
  habitName: string;
  tags: string[];
  timeOfDay: string;
  requiredItems: string[];
  frequency: string;
  historicalStory: string;
  sciencePrinciples: string;
  quote: string;
  trigger: string;
  modernGuide: string[];
  actionName: string;
  sources: string[];
}

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

let modules: Record<string, any> = {};

if (typeof import.meta.glob === 'function') {
  modules = import.meta.glob('./habits/items/*.json', { eager: true });
} else {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const itemsDir = path.join(__dirname, 'habits/items');
  if (fs.existsSync(itemsDir)) {
    const files = fs.readdirSync(itemsDir).filter(f => f.endsWith('.json'));
    files.forEach(file => {
      const filePath = path.join(itemsDir, file);
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      modules[file] = { default: content };
    });
  }
}

export const habits: Habit[] = Object.values(modules)
  .map((mod: any) => mod.default as Habit)
  .sort((a, b) => a.id.localeCompare(b.id));
