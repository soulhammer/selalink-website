import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

let modules: Record<string, any> = {};

let globModules: any = {};
try {
  // @ts-ignore
  globModules = import.meta.glob('./items/*.json', { eager: true });
} catch (e) {
  // Fallback for non-Vite environments (e.g. running scripts via pure Node.js CLI)
}

if (Object.keys(globModules).length > 0) {
  modules = globModules;
} else {
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

export const habits: Habit[] = Object.values(modules)
  .map((mod: any) => mod.default as Habit)
  .sort((a, b) => a.id.localeCompare(b.id));
