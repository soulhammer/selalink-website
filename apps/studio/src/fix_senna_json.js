import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, 'data/blogs/habits/senna-pre-race-visualization.json');

if (fs.existsSync(jsonPath)) {
  let content = fs.readFileSync(jsonPath, 'utf-8');
  // ** 리터럴 제거
  content = content.replace(/\*\*/g, '');
  fs.writeFileSync(jsonPath, content, 'utf-8');
  console.log('✅ [senna-pre-race-visualization.json 수술 완료] ** 리터럴 100% 제거!');
}
