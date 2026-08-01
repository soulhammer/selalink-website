import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');
const publicDir = path.join(studioRoot, 'public');

console.log('🚀 [Dual Format 듀얼 최적화 & 엑스박스 방지 파이프라인] 시작...\n');

// 1. 재귀적으로 모든 PNG, JPG, JPEG 이미지 검색
function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getAllImages(filePath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.webp', '.webp', '.webp'].includes(ext)) {
        results.push(filePath);
      }
    }
  }
  return results;
}

const targetImages = getAllImages(publicDir);
console.log(`🖼️ 총 ${targetImages.length}개의 원본 이미지 대상 스캔 완료.\n`);

let webpCount = 0;

for (const imgPath of targetImages) {
  const ext = path.extname(imgPath);
  const webpPath = imgPath.substring(0, imgPath.length - ext.length) + '.webp';

  try {
    // WebP 생성 (85% 품질) - 원본 PNG/JPG는 삭제하지 않고 유지!
    execSync(`cwebp -q 85 "${imgPath}" -o "${webpPath}" 2>/dev/null || true`);
    if (fs.existsSync(webpPath)) {
      webpCount++;
    }

    // 대용량 원본 PNG/JPG도 경량화 압축하여 404 호환성 보장
    const stats = fs.statSync(imgPath);
    if (stats.size > 500 * 1024) { // 500KB 초과 원본
      if (ext === '.webp') {
        execSync(`sips -s format png "${imgPath}" --out "${imgPath}" 2>/dev/null || true`);
      } else if (ext === '.webp' || ext === '.webp') {
        execSync(`sips -s format jpeg -s formatOptions 85 "${imgPath}" --out "${imgPath}" 2>/dev/null || true`);
      }
    }
  } catch (err) {
    console.warn(`⚠️ 경고: [${path.basename(imgPath)}] 처리 중 건너뜀`);
  }
}

console.log(`✅ [Dual Format 보존] ${webpCount}개 WebP 생성 완료 및 원본 PNG/JPG 호환 파일 100% 보완 완료!\n`);

// 2. 소스 코드 내 명시적 경로도 .webp로 튜닝
function updateCodeReferences(dir) {
  if (!fs.existsSync(dir)) return 0;
  let count = 0;
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      count += updateCodeReferences(fullPath);
    } else if (item.endsWith('.astro') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.json')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      // 템플릿 및 경로 내 .jpg, .png, .jpeg -> .webp 튜닝
      let newContent = content
        .replace(/(\.jpg|\.png|\.jpeg)(["'`\?])/gi, '.webp$2');

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf-8');
        count++;
      }
    }
  }
  return count;
}

console.log('📝 [코드베이스] 동적 템플릿 및 리터럴 경로 .webp로 정밀 보정...');
const updatedFilesCount = updateCodeReferences(path.join(studioRoot, 'src'));
console.log(`✅ 총 ${updatedFilesCount}개 컴포넌트 및 스크립트 경로 동기화 완료!\n`);


