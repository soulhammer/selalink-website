import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 경로 설정
const blogRoot = path.join(__dirname, 'content/blog');
const publicRoot = path.join(__dirname, '../public');

// 인자 파싱
const args = process.argv.slice(2);
const slugArg = args.find(a => a.startsWith('--slug='))?.split('=')[1];
const typeArg = args.find(a => a.startsWith('--type='))?.split('=')[1] || 'habit'; // 'habit', 'storage' or 'pet'

if (!slugArg) {
  console.error('\x1b[31m❌ [ERR] --slug=[블로그슬러그] 인자가 필요합니다.\x1b[0m');
  console.log('사용예시: node src/generate_blog_autonomous.js --slug=strawberry-storage --type=storage');
  process.exit(1);
}

// 1. 소스 마스터 파일 언어 자율 판별
function detectSourceLanguage(slug) {
  const enPath = path.join(blogRoot, 'en', `${slug}.md`);
  const koPath = path.join(blogRoot, 'ko', `${slug}.md`);

  const enExists = fs.existsSync(enPath);
  const koExists = fs.existsSync(koPath);

  if (!enExists && !koExists) {
    console.error(`\x1b[31m❌ [ERR] 마스터 소스 파일이 존재하지 않습니다: ${slug}.md (ko 또는 en 폴더를 확인해 주세요)\x1b[0m`);
    process.exit(1);
  }

  if (enExists && !koExists) return 'en';
  if (!enExists && koExists) return 'ko';

  // 둘 다 존재할 경우 글자 수(완성도)가 더 긴 파일을 마스터로 채택
  const enLen = fs.readFileSync(enPath, 'utf-8').length;
  const koLen = fs.readFileSync(koPath, 'utf-8').length;
  return enLen >= koLen ? 'en' : 'ko';
}

// 과거 발행일 자율 배정 함수 (Backdating)
function distributeBlogDates(slug) {
  const masterPath = path.join(blogRoot, 'ko', `${slug}.md`);
  if (!fs.existsSync(masterPath)) return;

  const content = fs.readFileSync(masterPath, 'utf-8');
  
  // 이미 수동으로 날짜가 기입되어 있고, 그 날짜가 오늘(2026-07-01) 날짜가 아니라 과거 날짜라면 보호
  const pubDateMatch = content.match(/pubDate:\s*"([^"]+)"/);
  const todayStr = '2026-07-01';
  if (pubDateMatch && pubDateMatch[1] !== todayStr && pubDateMatch[1].match(/^\d{4}-\d{2}-\d{2}$/)) {
    console.log(`ℹ️ [날짜 보존] '${slug}' 의 기존 발행일이 보존됩니다: ${pubDateMatch[1]}`);
    return;
  }

  // 1. 기존 ko 폴더 내의 모든 마크다운 파일들의 pubDate 수집 (단, 현재 대상 파일은 제외)
  const existingDates = new Set();
  const koFiles = fs.readdirSync(path.join(blogRoot, 'ko')).filter(f => f.endsWith('.md') && f !== `${slug}.md`);
  koFiles.forEach(f => {
    const fileContent = fs.readFileSync(path.join(blogRoot, 'ko', f), 'utf-8');
    const match = fileContent.match(/pubDate:\s*"([^"]+)"/);
    if (match) {
      existingDates.add(match[1]);
    }
  });

  // 2. 2026-01-01부터 2026-07-01까지 기존 날짜와 겹치지 않는 빈 날짜 목록 추출
  const startDate = new Date('2026-01-01');
  const endDate = new Date('2026-07-01');
  const availableDates = [];

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    if (!existingDates.has(dateStr)) {
      availableDates.push(dateStr);
    }
  }

  if (availableDates.length === 0) {
    console.warn('⚠️ [경고] 2026년 상반기 중 남은 빈 날짜 슬롯이 없습니다. 오늘 날짜로 대체합니다.');
    return;
  }

  // 3. 결정론적 무작위 인덱스 선택 (동일한 슬러그명은 항상 동일한 과거 날짜로 고정 매핑되도록 해시 유도)
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  const selectedIndex = Math.abs(hash) % availableDates.length;
  const selectedDate = availableDates[selectedIndex];

  console.log(`📅 [날짜 안배] '${slug}' 포스트의 발행일이 [${selectedDate}] 로 과거 자동 배정되었습니다.`);

  // 4. 마스터 파일의 pubDate 및 updatedDate 업데이트
  let updatedContent = content;
  
  if (pubDateMatch) {
    updatedContent = updatedContent.replace(/pubDate:\s*"[^"]+"/, `pubDate: "${selectedDate}"`);
  } else {
    updatedContent = updatedContent.replace('---\n', `---\npubDate: "${selectedDate}"\n`);
  }

  const updatedDateMatch = content.match(/updatedDate:\s*"([^"]+)"/);
  if (updatedDateMatch) {
    updatedContent = updatedContent.replace(/updatedDate:\s*"[^"]+"/, `updatedDate: "${selectedDate}"`);
  } else {
    updatedContent = updatedContent.replace('authority:', `updatedDate: "${selectedDate}"\nauthority:`);
  }

  fs.writeFileSync(masterPath, updatedContent, 'utf-8');
}

// 2. 파이썬 크롭 모듈 자동 트리거
function cropSubImage(imageName) {
  const rawImagePath = path.join(publicRoot, 'images', 'blog', `${imageName}.png`);
  const croppedImagePath = path.join(publicRoot, 'images', 'blog', `${imageName}_detail.png`);

  if (!fs.existsSync(rawImagePath)) {
    console.warn(`\x1b[33m⚠️ [WARN] 크롭할 원본 이미지를 찾을 수 없습니다: ${rawImagePath}\x1b[0m`);
    return false;
  }

  console.log(`🎨 [이미지 크롭] '${imageName}.png' 파일 상하단 15% 잘라내기 실행 중...`);
  
  // 파이썬 크롭 스크립트를 임시 생성 및 실행
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
    print("Python: Successfully cropped image to 1.6:1 wide ratio.")
else:
    print("Python: Source image not found.")
`;

  fs.writeFileSync(pyScriptPath, pyCode, 'utf-8');

  try {
    const pyOutput = execSync('python3 temp_crop.py', { cwd: __dirname }).toString();
    console.log(pyOutput.trim());
    fs.unlinkSync(pyScriptPath);
    return true;
  } catch (err) {
    console.error(`\x1b[31m❌ [Python 크롭 실패] PIL 라이브러리 미설치 또는 파이썬 오류: ${err.message}\x1b[0m`);
    if (fs.existsSync(pyScriptPath)) fs.unlinkSync(pyScriptPath);
    return false;
  }
}

// 3. 자가 치유(Self-healing) 루프가 결합된 정합성 Linter 검사 작동
function runSelfHealingValidation() {
  console.log('\n🧪 [자가 치유 검증] 빌드 전 무결성 검증기 실행 중...');
  
  let attempts = 0;
  const maxAttempts = 3;
  let success = false;

  while (attempts < maxAttempts && !success) {
    attempts++;
    console.log(`[시도 ${attempts}/${maxAttempts}] check_blog_integrity.js 구동 중...`);
    
    try {
      // 검증기 스크립트를 동기 실행
      execSync('node src/check_blog_integrity.js', { cwd: path.join(__dirname, '..') });
      console.log('\x1b[32m✨ [성공] 자율 블로그 생성 및 검증 절차가 통과되었습니다!\x1b[0m');
      success = true;
    } catch (err) {
      console.error(`\x1b[31m❌ [검증 실패] 결함이 발견되었습니다.\x1b[0m`);
      
      // 에러 로그 분석 시나리오 프로토타입
      // 실제 프로덕션에서는 err.stdout을 파싱하여 특정 에러 패턴이 발견되었을 때
      // 예: 한글 유입 -> 번역 리트라이, 이미지 누락 -> 이미지 크롭 트리거 등
      // 여기서는 예시로 이미지 크롭 누락 시 자동으로 크롭을 1회 재시도해주는 로직을 수행함
      console.log('🤖 [AI 자가 치유 엔진] 에러 로그를 읽고 자동 교정 절차를 실행합니다...');
      
      const subImageName = slugArg.replace(/-/g, '_') + '_relax'; // 보조 이미지명 예시
      const fixed = cropSubImage(subImageName);
      if (!fixed) {
        console.log('🤖 [AI 자가 치유 실패] 에러를 자체 치유하지 못했습니다. 수동 수정이 필요합니다.');
        break;
      }
    }
  }

  if (!success) {
    process.exit(1);
  }
}

function startAutonomousWorkflow() {
  console.log(`\n🚀 [AI 자율 블로그 생성기] '${slugArg}' 생성 프로세스 기동 중...`);
  
  if (typeArg === 'pet') {
    try {
      console.log(`🤖 [AI 파이프라인] 반려동물 컴파일러 기동: node src/compile_pet_blogs.js --slug=${slugArg}`);
      execSync(`node src/compile_pet_blogs.js --slug=${slugArg}`, { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
      runSelfHealingValidation();
      return;
    } catch (err) {
      console.error(`❌ [ERR] 반려동물 컴파일 중 오류 발생: ${err.message}`);
      process.exit(1);
    }
  }

  // 1. 소스 언어 판별
  const masterLang = detectSourceLanguage(slugArg);
  console.log(`ℹ️ [소스 감지] 마스터 소스 파일의 언어는 [${masterLang.toUpperCase()}] 입니다.`);

  // 1.5. 지능형 과거 날짜 자율 배정 (Backdating) - 수동 스크립트로 분리됨
  // distributeBlogDates(slugArg);

  // 2. 이미지 가공 연동 (최상단 heroImage 명칭 기반 보조 이미지명 유도)
  const imageBaseName = slugArg.replace(/-/g, '_') + '_relax';
  cropSubImage(imageBaseName);

  // 3. 자가 치유 검증 수행
  runSelfHealingValidation();
}

startAutonomousWorkflow();
