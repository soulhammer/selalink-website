import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const localesDir = path.join(__dirname, '../../i18n/locales');
const langs = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

console.log('🧹 [CTA 타이틀 이모지 정돈 스크립트 기동]...\n');

langs.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/"cta\.buildself\.title": "🏆 /g, '"cta.buildself.title": "');
    content = content.replace(/"cta\.freshself\.title": "🍏 /g, '"cta.freshself.title": "');
    content = content.replace(/"cta\.petself\.title": "🐾 /g, '"cta.petself.title": "');
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`[정돈 완료] ${lang}.json`);
  }
});

console.log('\n✨ 9개 언어 파일의 CTA 타이틀 이모지 제거 및 깔끔 정돈 완료!');
