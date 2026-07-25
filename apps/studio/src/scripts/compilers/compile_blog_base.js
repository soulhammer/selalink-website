import fs from 'fs';
import pathModule from 'path';
import { ensureDir } from '../../utils/compilerHelper.js';

export const ALL_LOCALES = ['ko', 'en', 'zh', 'ja', 'es', 'fr', 'de', 'pt', 'id'];

export function buildHistoryMetaMap(masterDir, blogRootDir) {
  const historyMetaMap = {};
  try {
    const jsonFiles = fs.readdirSync(masterDir).filter(f => f.endsWith('.json'));
    jsonFiles.forEach(file => {
      const slug = file.replace('.json', '');
      const diskKoPath = pathModule.join(blogRootDir, 'ko', `${slug}.md`);

      if (fs.existsSync(diskKoPath)) {
        const content = fs.readFileSync(diskKoPath, 'utf-8');
        const pubMatch = content.match(/pubDate:\s*"([^"]+)"/);
        const upMatch = content.match(/updatedDate:\s*"([^"]+)"/);
        const heroMatch = content.match(/heroImage:\s*"([^"]+)"/);
        const tagsMatch = content.match(/tags:\s*(\[[\s\S]*?\])/);

        historyMetaMap[slug] = {
          pubDate: pubMatch ? pubMatch[1] : null,
          updatedDate: upMatch ? upMatch[1] : null,
          heroImage: heroMatch ? heroMatch[1] : null,
          tags: tagsMatch ? tagsMatch[1] : null
        };
      }
    });
  } catch (e) {
    console.warn('⚠️ [경고] 역사적 메타데이터 맵 구축 중 스킵:', e.message);
  }
  return historyMetaMap;
}

export function compileMasterJsonCollection({ masterDir, blogRootDir, blogTypeName, renderLocaleMarkdown }) {
  console.log(`🚀 [${blogTypeName} 파이프라인] 다국어 마크다운 빌드 가동...\n`);
  const historyMetaMap = buildHistoryMetaMap(masterDir, blogRootDir);
  const files = fs.readdirSync(masterDir).filter(f => f.endsWith('.json'));

  let totalGenerated = 0;

  files.forEach(file => {
    const filePath = pathModule.join(masterDir, file);
    let rawText = fs.readFileSync(filePath, 'utf-8').trim();
    if (rawText.startsWith('ewog')) {
      rawText = Buffer.from(rawText, 'base64').toString('utf-8');
    }
    const rawData = JSON.parse(rawText);
    const blogSlug = file.replace('.json', '');
    const data = rawData[blogSlug] || rawData[Object.keys(rawData)[0]];

    if (!data) return;

    const histMeta = historyMetaMap[blogSlug] || {};

    ALL_LOCALES.forEach(lang => {
      const langDir = pathModule.join(blogRootDir, lang);
      ensureDir(langDir);

      const markdownContent = renderLocaleMarkdown({ blogSlug, lang, data, histMeta });
      const mdPath = pathModule.join(langDir, `${blogSlug}.md`);

      let shouldWrite = true;
      if (fs.existsSync(mdPath)) {
        const existingContent = fs.readFileSync(mdPath, 'utf-8');
        if (existingContent === markdownContent) {
          shouldWrite = false;
        }
      }

      if (shouldWrite) {
        fs.writeFileSync(mdPath, markdownContent, 'utf-8');
        totalGenerated++;
      }
    });
  });

  console.log(`[완료] 총 ${totalGenerated}개의 다국어 ${blogTypeName} 파일이 성공적으로 처리되었습니다!`);
}
