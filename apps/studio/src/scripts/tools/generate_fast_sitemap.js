import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distRoot = path.join(__dirname, '../../../dist');
const siteUrl = 'https://selalink.net';

console.log('🚀 [초고속 사이트맵 생성기] SEO XML 사이트맵 생성을 시작합니다...');
const startTime = Date.now();

function getHtmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getHtmlFiles(fullPath, files);
    } else if (file.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

if (!fs.existsSync(distRoot)) {
  console.error(`❌ [ERR] dist 폴더가 존재하지 않습니다: ${distRoot}`);
  process.exit(1);
}

const htmlFiles = getHtmlFiles(distRoot);
const urls = [];

for (const filePath of htmlFiles) {
  const relativePath = path.relative(distRoot, filePath).replace(/\\/g, '/');
  
  let route = '/' + relativePath.replace(/index\.html$/, '').replace(/\.html$/, '');
  if (route.length > 1 && route.endsWith('/')) {
    route = route.slice(0, -1);
  }

  // 필터 조건 적용
  // 1. 301 리다이렉트 대상 구버전 freshself/ingredients 제외
  if (route.includes('/apps/freshself/ingredients/')) {
    continue;
  }

  // 2. 약관/개인정보/데이터삭제 등 legal 페이지 제외
  const isLegalPage = /\/(privacy|terms|data-deletion)$/.test(route);
  if (isLegalPage) {
    continue;
  }

  const fullUrl = `${siteUrl}${route === '/' ? '' : route}/`;
  urls.push(fullUrl);
}

// sitemap-index.xml 및 sitemap.xml 작성
const lastMod = new Date().toISOString().split('T')[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastMod}</lastmod>\n  </url>`).join('\n')}
</urlset>`;

const sitemapPath = path.join(distRoot, 'sitemap-index.xml');
fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');

// 기본 sitemap.xml 및 하위 호환 sitemap-0.xml 동시 생성
const defaultSitemapPath = path.join(distRoot, 'sitemap.xml');
fs.writeFileSync(defaultSitemapPath, sitemapXml, 'utf-8');

const sitemap0Path = path.join(distRoot, 'sitemap-0.xml');
fs.writeFileSync(sitemap0Path, sitemapXml, 'utf-8');

const elapsed = ((Date.now() - startTime) / 1000).toFixed(3);
console.log(`✨ [사이트맵 생성 완료] 총 ${urls.length}개의 URL 사이트맵 생성 완료! (${elapsed}초 소요)\n`);
