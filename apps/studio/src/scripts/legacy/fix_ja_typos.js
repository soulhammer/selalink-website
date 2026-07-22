import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDir = path.join(__dirname, 'data/blogs/habits');

fs.readdirSync(habitsDir).forEach(file => {
  if (!file.endsWith('.json')) return;
  const filePath = path.join(habitsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // 교정 룰
  content = content.replace(/指先の触覚刺激가/g, '指先の触覚刺激が');
  content = content.replace(/green 自分の習慣/g, '自分の習慣');
  content = content.replace(/一人で working 프리랜서도 이 루틴을 적용할 수 있나요？/g, '一人で活動するフリーランスもこのルーティンを適用できますか？');
  content = content.replace(/프리랜서/g, 'フリーランス');
  content = content.replace(/단축/g, '短縮');
  content = content.replace(/집중する/g, '集中する');
  content = content.replace(/적いE-ink/g, '少ないE-ink');
  
  // 러더퍼드 가타카나 교정 ('스트' -> '\u30b9\u30c8')
  content = content.replace(/アーネ스트/g, 'アーネスト');
  content = content.replace(/스트/g, 'スト');

  fs.writeFileSync(filePath, content, 'utf-8');
});

console.log('JA 러더퍼드 가타카나 완벽 교정 완료');
