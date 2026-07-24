import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentBlogDir = path.join(__dirname, 'content/blog');
const foreignLocales = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

console.log('🧹 [언어 격리(Language Isolation) 마크다운 정제 가동]...\n');

let cleanedCount = 0;

foreignLocales.forEach(loc => {
  const locDir = path.join(contentBlogDir, loc);
  if (!fs.existsSync(locDir)) return;

  const mdFiles = fs.readdirSync(locDir).filter(f => f.endsWith('.md'));

  mdFiles.forEach(file => {
    const filePath = path.join(locDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // 프론트매터 외부 본문 및 제목에서 한글(Hangul) 완벽 100% 제거/치환
    const lines = content.split('\n');
    let inFrontmatter = false;
    let frontmatterCount = 0;

    const cleanedLines = lines.map(line => {
      if (line.trim() === '---') {
        frontmatterCount++;
        inFrontmatter = frontmatterCount % 2 === 1;
        return line;
      }

      if (inFrontmatter) {
        if (line.startsWith('title:') || line.startsWith('description:')) {
          // 프론트매터 한글 제거
          return line.replace(/[\uAC00-\uD7A3\u3130-\u318F]/g, '');
        }
        return line;
      }

      // 본문 한글 100% 제거
      return line.replace(/[\uAC00-\uD7A3\u3130-\u318F]/g, '');
    });

    content = cleanedLines.join('\n');
    fs.writeFileSync(filePath, content, 'utf-8');
    cleanedCount++;
  });
});

console.log(`✅ [언어 격리 정제 완료] 총 ${cleanedCount}개 외국어 마크다운 포스트에서 타 언어 오염이 100% 정제되었습니다!\n`);
