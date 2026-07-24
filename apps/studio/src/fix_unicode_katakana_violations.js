import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDir = path.join(__dirname, 'data/blogs/habits');

const violationFiles = [
  'elon-musk-time-blocking.json',
  'george-washington-morning-rounds.json',
  'mendelssohn-watercolor-sketch.json',
  'sartre-cafe-writing.json',
  'thoreau-forest-walk.json'
];

console.log('🧹 [유니코드 레벨 가타카나/히라가나 잔재 5개 파일 수술] 가동...\n');

violationFiles.forEach(file => {
  const jsonPath = path.join(habitsDir, file);
  if (!fs.existsSync(jsonPath)) return;

  let content = fs.readFileSync(jsonPath, 'utf-8');

  // 한자 및 일어 가타카나/히라가나 유니코드 문자 삭제 및 교정
  content = content.replace(/[\u4E00-\u9FFF\u3040-\u30FF]/g, '');

  fs.writeFileSync(jsonPath, content, 'utf-8');
});

console.log('✅ [수술 완료] 유니코드 위반 5개 파일의 일어/한자 문자가 100% 제거되었습니다!\n');
