import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');
const publicImagesBlog = path.join(studioRoot, 'public/images/blog');
const publicFavicon = path.join(studioRoot, 'public/favicon.png');
const contentBlogDir = path.join(studioRoot, 'src/content/blog');
const dataDir = path.join(studioRoot, 'src/data');

console.log('🚀 [이미지 WebP 전면 최적화] 작업을 시작합니다...\n');

// 1. public/favicon.png (5.2MB) 최적화
async function optimizeFavicon() {
  if (fs.existsSync(publicFavicon)) {
    const statsBefore = fs.statSync(publicFavicon);
    console.log(`📸 [Favicon] 기존 용량: ${(statsBefore.size / 1024 / 1024).toFixed(2)}MB`);
    
    const tempFavicon = path.join(studioRoot, 'public/favicon_temp.png');
    await sharp(publicFavicon)
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9, quality: 85 })
      .toFile(tempFavicon);
      
    fs.renameSync(tempFavicon, publicFavicon);
    const statsAfter = fs.statSync(publicFavicon);
    console.log(`✅ [Favicon] 최적화 완료 용량: ${(statsAfter.size / 1024).toFixed(2)}KB\n`);
  }
}

// 2. public/images/blog/*.png -> WebP 변환
async function convertBlogImages() {
  if (!fs.existsSync(publicImagesBlog)) return;

  const files = fs.readdirSync(publicImagesBlog).filter(f => f.endsWith('.png'));
  console.log(`🖼️ [Blog Images] 총 ${files.length}개의 PNG 이미지 변환을 시작합니다...`);

  let convertedCount = 0;
  let totalSavedBytes = 0;

  for (const file of files) {
    const pngPath = path.join(publicImagesBlog, file);
    const webpName = file.replace(/\.png$/, '.webp');
    const webpPath = path.join(publicImagesBlog, webpName);

    const pngStats = fs.statSync(pngPath);
    
    await sharp(pngPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    totalSavedBytes += (pngStats.size - webpStats.size);
    convertedCount++;

    // 원본 PNG 삭제
    fs.unlinkSync(pngPath);
  }

  console.log(`✅ [Blog Images] ${convertedCount}개 변환 완료! (총 ${(totalSavedBytes / 1024 / 1024).toFixed(2)}MB 절감)\n`);
}

// 3. 마크다운 파일(src/content/blog/*/*.md) heroImage 경로 업데이트
function updateMarkdownReferences(dir) {
  if (!fs.existsSync(dir)) return;
  const list = fs.readdirSync(dir);
  let updatedCount = 0;

  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      updatedCount += updateMarkdownReferences(fullPath);
    } else if (item.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes('.png')) {
        const newContent = content.replace(/(\/images\/blog\/[a-zA-Z0-9_\-]+)\.png/g, '$1.webp');
        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent, 'utf-8');
          updatedCount++;
        }
      }
    }
  }
  return updatedCount;
}

// 4. 데이터 JSON & TS 파일 경로 업데이트
function updateDataReferences(dir) {
  if (!fs.existsSync(dir)) return;
  const list = fs.readdirSync(dir);
  let updatedCount = 0;

  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      updatedCount += updateDataReferences(fullPath);
    } else if (item.endsWith('.json') || item.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes('.png')) {
        const newContent = content.replace(/(\/images\/blog\/[a-zA-Z0-9_\-]+)\.png/g, '$1.webp');
        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent, 'utf-8');
          updatedCount++;
        }
      }
    }
  }
  return updatedCount;
}

// 5. 스크립트 코드 내 확장자 기본값 업데이트
function updateScriptReferences() {
  const scriptsToUpdate = [
    path.join(studioRoot, 'src/generate_blog_autonomous.js'),
    path.join(studioRoot, 'src/retrofit_blogs.js'),
    path.join(__dirname, '../../AGENTS.md')
  ];

  scriptsToUpdate.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf-8');
      const newContent = content.replace(/(\/images\/blog\/[a-zA-Z0-9_\-]+)\.png/g, '$1.webp');
      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`📝 [Script Update] ${path.basename(filePath)} 동기화 완료`);
      }
    }
  });
}

async function main() {
  try {
    await optimizeFavicon();
    await convertBlogImages();

    console.log('📄 [Markdown] 블로그 포스트 heroImage 경로 교체를 진행합니다...');
    const mdCount = updateMarkdownReferences(contentBlogDir);
    console.log(`✅ [Markdown] ${mdCount}개 마크다운 파일 경로 업데이트 완료!\n`);

    console.log('📊 [Data] src/data JSON 및 TS 소스 파일 경로 교체를 진행합니다...');
    const dataCount = updateDataReferences(dataDir);
    console.log(`✅ [Data] ${dataCount}개 데이터 파일 경로 업데이트 완료!\n`);

    updateScriptReferences();

    console.log('✨ [모든 이미지 WebP 최적화 완수] 최적화 작업이 완전히 종료되었습니다!');
  } catch (err) {
    console.error('❌ [ERR] 최적화 중 에러 발생:', err);
    process.exit(1);
  }
}

main();
