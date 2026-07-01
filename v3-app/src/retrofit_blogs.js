import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, 'content/blog');
const publicRoot = path.join(__dirname, '../public');

// 파이썬 크롭 모듈 연동
function cropImageIfExist(slug, type) {
  let imageName = '';
  if (type === 'habit') {
    imageName = slug.replace(/-/g, '_') + '_relax';
  } else {
    const ingId = slug.replace('how-to-store-', '');
    imageName = `${ingId}_storage`;
  }

  const rawImagePath = path.join(publicRoot, 'images', 'blog', `${imageName}.png`);
  const croppedImagePath = path.join(publicRoot, 'images', 'blog', `${imageName}_detail.png`);

  if (!fs.existsSync(rawImagePath)) {
    // 1:1 이미지가 생성되지 않은 상태이면 패스 (안전 장치)
    return false;
  }

  if (fs.existsSync(croppedImagePath)) {
    // 이미 크롭되어 있다면 완료로 간주
    return true;
  }

  console.log(`🎨 [크롭 가공] '${imageName}.png' 감지! 1.6:1 와이드 크롭 이미지 생성 중...`);
  
  const pyScriptPath = path.join(__dirname, 'temp_crop.py');
  const pyCode = `import os
from PIL import Image

src = "${rawImagePath}"
dest = "${croppedImagePath}"

if os.path.exists(src):
    img = Image.open(src)
    w, h = img.size
    top = int(h * 0.15)
    bottom = int(h * 0.85)
    cropped = img.crop((0, top, w, bottom))
    cropped.save(dest)
    print("Python: Successfully cropped to 1.6:1.")
else:
    print("Python: Image not found.")
`;

  fs.writeFileSync(pyScriptPath, pyCode, 'utf-8');

  try {
    execSync('python3 temp_crop.py', { cwd: __dirname });
    if (fs.existsSync(pyScriptPath)) fs.unlinkSync(pyScriptPath);
    return true;
  } catch (err) {
    console.error(`❌ [크롭 에러] PIL 라이브러리 실행 오류: ${err.message}`);
    if (fs.existsSync(pyScriptPath)) fs.unlinkSync(pyScriptPath);
    return false;
  }
}

function run() {
  console.log('🔄 [개조 파이프라인] 기존 블로그 전수 진단 및 최신 규격 업그레이드 기동...');

  // 1. 구형 수동 위인 8종 데이터 마이그레이션 도구 선제 실행
  console.log('\n1️⃣ [마이그레이션] 구형 수동 위인 번역 사전 동적 마이그레이션 중...');
  try {
    const migrationOutput = execSync('node src/migrate_old_blogs.js', { cwd: path.join(__dirname, '..') }).toString();
    console.log(migrationOutput.trim());
  } catch (err) {
    console.error('❌ [마이그레이션 실패] 구형 블로그 역공학 파싱 오류:', err.message);
    process.exit(1);
  }

  // 2. 전체 한국어 마크다운 파일을 읽고, 갭(결함)이 감지되는 포스트 목록을 100% 동적 추출
  console.log('\n2️⃣ [동적 갭 분석] 전체 마크다운 전수 무결성 스캔 및 진단...');
  const koDir = path.join(blogRoot, 'ko');
  if (!fs.existsSync(koDir)) {
    console.error('❌ [오류] 한국어 블로그 디렉토리가 존재하지 않습니다.');
    process.exit(1);
  }

  const allKoFiles = fs.readdirSync(koDir).filter(f => f.endsWith('.md'));
  
  const habitRetrofitTargets = [];
  const storageRetrofitTargets = [];

  allKoFiles.forEach(file => {
    const slug = file.replace('.md', '');
    const isStorage = slug.startsWith('how-to-store-');
    const filePath = path.join(koDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // 결함 조건 판별: (1) 크롭 이미지 누락 또는 (2) FAQ 아코디언 UI 누락
    const hasCroppedImage = content.includes('_detail.png');
    const hasFaqAccordion = content.includes('자주 묻는 질문') || content.includes('FAQ');

    if (!hasCroppedImage || !hasFaqAccordion) {
      if (isStorage) {
        storageRetrofitTargets.push(slug);
      } else {
        habitRetrofitTargets.push(slug);
      }
    }
  });

  console.log(`📊 [스캔 통계] 총 ${allKoFiles.length}개 포스트 검사 완료.`);
  console.log(`   - 갭(결함) 감지된 위인 습관 블로그 (${habitRetrofitTargets.length}개):`, habitRetrofitTargets);
  console.log(`   - 갭(결함) 감지된 식재료 보관 블로그 (${storageRetrofitTargets.length}개):`, storageRetrofitTargets);

  // 3. 동적으로 필터링된 위인 습관 대상 크롭 실행
  console.log('\n3️⃣ [미디어 개조] 결함 감지된 위인 습관 이미지 크롭 실행...');
  let habitCropped = 0;
  habitRetrofitTargets.forEach(slug => {
    const success = cropImageIfExist(slug, 'habit');
    if (success) habitCropped++;
  });
  console.log(`   - 위인 습관 보조 크롭 가공률: ${habitCropped}/${habitRetrofitTargets.length}`);

  // 4. 동적으로 필터링된 식재료 대상 크롭 실행
  console.log('\n4️⃣ [미디어 개조] 결함 감지된 식재료 보관 이미지 크롭 실행...');
  let storageCropped = 0;
  storageRetrofitTargets.forEach(slug => {
    const success = cropImageIfExist(slug, 'storage');
    if (success) storageCropped++;
  });
  console.log(`   - 식재료 보관 보조 크롭 가공률: ${storageCropped}/${storageRetrofitTargets.length}`);

  // 5. 다국어 마크다운 빌더 동시 재기동 (모든 신형 껍데기 조립)
  console.log('\n5️⃣ [껍데기 업그레이드] 결함 식별 블로그 다국어 마크다운 일괄 재생성...');
  try {
    console.log('   - 위인 습관 다국어 빌드 기동...');
    execSync('node src/translate_habits.js', { cwd: path.join(__dirname, '..') });
    
    console.log('   - 식재료 보관법 다국어 빌드 기동...');
    execSync('node src/compile_multilingual_blogs.js', { cwd: path.join(__dirname, '..') });
    
    console.log('\n\x1b[32m✨ [성공] 개조 파이프라인의 데이터 동적 합성 공정이 완료되었습니다!\x1b[0m');
  } catch (err) {
    console.error('❌ [빌드 실패] 일괄 마크다운 재생성 오류:', err.message);
    process.exit(1);
  }
}

run();
