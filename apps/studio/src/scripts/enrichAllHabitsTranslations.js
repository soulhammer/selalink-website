import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDir = path.join(__dirname, '../data/habits/items');
const blogsDir = path.join(__dirname, '../data/blogs/habits');
const transPath = path.join(__dirname, '../i18n/habitsTranslations.json');

const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];
const hangulRegex = /[\uAC00-\uD7A3]/;

const existingTrans = JSON.parse(fs.readFileSync(transPath, 'utf-8'));
const files = fs.readdirSync(habitsDir).filter((f) => f.endsWith('.json'));

function parseTitle(title, loc, itemData) {
  if (!title) return { name: itemData.name, habitName: itemData.habitName, quote: itemData.quote || itemData.actionName };

  if (loc === 'ja') {
    const match = title.match(/(?:：|\?|？|\s|^)([^：\?？\s]+)の(.+)/);
    if (match) {
      return { name: match[1].trim(), habitName: match[2].trim(), quote: match[2].trim() };
    }
  } else if (loc === 'zh') {
    const match = title.match(/(?:：|\?|？|\s|^)([^：\?？\s]+)的(.+)/);
    if (match) {
      return { name: match[1].trim(), habitName: match[2].trim(), quote: match[2].trim() };
    }
  } else if (loc === 'en') {
    const match = title.match(/(?::\s*|\?\s*)([^\x27\x22:]+)(?:\x27s|\x27|\x22s)\s*(.+)/i);
    if (match) {
      return { name: match[1].trim(), habitName: match[2].trim(), quote: match[2].trim() };
    }
  }

  const parts = title.split(/[:：\?？]/);
  if (parts.length >= 2) {
    const namePart = parts[parts.length - 1].replace(/(?:의|'s|の|的)$/, '').trim();
    const habitPart = parts[0].trim();
    return { name: namePart, habitName: habitPart, quote: habitPart };
  }

  return { name: title, habitName: title, quote: title };
}

let updatedKeys = 0;

files.forEach((f) => {
  const id = f.replace('.json', '');
  const itemData = JSON.parse(fs.readFileSync(path.join(habitsDir, f), 'utf-8'));
  let blogData = null;
  const blogPath = path.join(blogsDir, f);
  if (fs.existsSync(blogPath)) {
    const raw = JSON.parse(fs.readFileSync(blogPath, 'utf-8'));
    blogData = raw[id] || raw[Object.keys(raw)[0]];
  }

  if (!existingTrans[id]) {
    existingTrans[id] = {};
  }

  locales.forEach((loc) => {
    if (loc === 'ko') {
      existingTrans[id].ko = {
        name: itemData.name,
        habitName: itemData.habitName,
        quote: itemData.quote || itemData.actionName || itemData.habitName
      };
      return;
    }

    const currentLocObj = existingTrans[id][loc];
    const isCurrentValid =
      currentLocObj &&
      currentLocObj.name &&
      !hangulRegex.test(currentLocObj.name) &&
      currentLocObj.habitName &&
      !hangulRegex.test(currentLocObj.habitName) &&
      currentLocObj.quote &&
      !hangulRegex.test(currentLocObj.quote);

    if (!isCurrentValid) {
      const title = blogData?.title?.[loc] || blogData?.title?.en || '';
      const desc = blogData?.description?.[loc] || blogData?.description?.en || '';
      const parsed = parseTitle(title, loc, itemData);

      existingTrans[id][loc] = {
        name: parsed.name || title || id,
        habitName: parsed.habitName || title || id,
        quote: desc || parsed.quote || title || id
      };
      updatedKeys++;
    }
  });
});

for (const [key, obj] of Object.entries(existingTrans)) {
  locales.forEach((loc) => {
    if (loc === 'ko') return;
    if (!obj[loc] || hangulRegex.test(obj[loc].name) || hangulRegex.test(obj[loc].habitName) || hangulRegex.test(obj[loc].quote)) {
      const enVal = obj.en && !hangulRegex.test(obj.en.name) ? obj.en : null;
      obj[loc] = {
        name: enVal?.name || key,
        habitName: enVal?.habitName || key,
        quote: enVal?.quote || key
      };
    }
  });
}

fs.writeFileSync(transPath, JSON.stringify(existingTrans, null, 2), 'utf-8');
console.log(`✅ [완료] habitsTranslations.json ${updatedKeys}개 다국어 번역 항목 업데이트 수술 완료!`);
