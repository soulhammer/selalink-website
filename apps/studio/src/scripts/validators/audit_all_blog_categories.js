import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogsBaseDir = path.join(__dirname, 'data/blogs');

const categories = ['habits', 'ingredients', 'pets'];
const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

console.log('🔍 [습관 외 전체 블로그 카테고리 (식재료/반려동물/습관) 다국어 전수 분석 시작]\n');

const categoryStats = {};

categories.forEach(cat => {
  const catDir = path.join(blogsBaseDir, cat);
  if (!fs.existsSync(catDir)) return;

  const files = fs.readdirSync(catDir).filter(f => f.endsWith('.json'));
  categoryStats[cat] = {
    fileCount: files.length,
    missingKO: 0,
    missingLocales: 0,
    truncated: 0,
    issues: []
  };

  files.forEach(file => {
    const filePath = path.join(catDir, file);
    const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const slug = Object.keys(raw)[0];
    const data = raw[slug];

    if (!data) return;

    const fileIssues = [];

    // Title / Desc check
    locales.forEach(loc => {
      const title = data.title?.[loc];
      const desc = data.description?.[loc];
      if (!title || title.trim().length === 0) {
        fileIssues.push(`[누락] title.${loc}`);
        if (loc === 'ko') categoryStats[cat].missingKO++;
        else categoryStats[cat].missingLocales++;
      }
      if (!desc || desc.trim().length === 0) {
        fileIssues.push(`[누락] description.${loc}`);
        if (loc === 'ko') categoryStats[cat].missingKO++;
        else categoryStats[cat].missingLocales++;
      }
    });

    if (fileIssues.length > 0) {
      categoryStats[cat].issues.push({ slug, fileIssues });
    }
  });
});

Object.keys(categoryStats).forEach(cat => {
  const st = categoryStats[cat];
  console.log(`📌 카테고리 [${cat.toUpperCase()}] - 총 ${st.fileCount}개 포스트`);
  console.log(`   - KO 누락: ${st.missingKO}건 | 타 언어 누락: ${st.missingLocales}건 | 결함 포스트 수: ${st.issues.length}개\n`);
});

