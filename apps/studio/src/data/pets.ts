import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export interface PetBodyLanguage {
  signal: string;
  meaning: string;
}

export interface PetDailyRoutine {
  step1: string;
  step2: string;
  step3: string;
}

export interface Pet {
  id: string;
  title: string;
  species: string;
  breed: string;
  lifespan: string;
  sleepPattern: string;
  likes: string[];
  dislikes: string[];
  bodyLanguage: PetBodyLanguage[];
  dailyRoutine: PetDailyRoutine;
  heroImage: string;
  sources: string[];
}

let modules: Record<string, any> = {};

let globModules: any = {};
try {
  // @ts-ignore
  globModules = import.meta.glob('./pets/items/*.json', { eager: true });
} catch (e) {
  // Fallback for non-Vite environments
}

if (Object.keys(globModules).length > 0) {
  modules = globModules;
} else {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const itemsDir = path.join(__dirname, 'pets/items');
  if (fs.existsSync(itemsDir)) {
    const files = fs.readdirSync(itemsDir).filter(f => f.endsWith('.json'));
    files.forEach(file => {
      const filePath = path.join(itemsDir, file);
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      modules[file] = { default: content };
    });
  }
}

export const pets: Pet[] = Object.values(modules)
  .map((mod: any) => mod.default as Pet)
  .sort((a, b) => a.id.localeCompare(b.id));
