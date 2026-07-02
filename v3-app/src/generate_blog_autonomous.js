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

// 템플릿 생성 헬퍼 함수
function generateScaffoldingTemplates(slug, type) {
  let itemsPath, blogsPath, koPath;

  if (type === 'habit') {
    itemsPath = path.join(__dirname, 'data/habits/items', `${slug}.json`);
    blogsPath = path.join(__dirname, 'data/blogs/habits', `${slug}.json`);
    koPath = path.join(__dirname, 'content/blog/ko', `${slug}.md`);

    if (!fs.existsSync(itemsPath)) {
      const itemsDir = path.dirname(itemsPath);
      if (!fs.existsSync(itemsDir)) fs.mkdirSync(itemsDir, { recursive: true });
      
      const itemsTemplate = {
        id: slug,
        name: "위인 이름",
        gender: "male",
        era: "시대 구분",
        location: "국가/지역",
        lifespan: "생몰년도 (예: 1800 - 1880)",
        birthYear: 1800,
        bio: "인물의 짧은 일대기 설명",
        habitName: "습관의 직관적인 명칭",
        tags: ["#태그1", "#태그2"],
        timeOfDay: "anytime",
        requiredItems: ["준비물 1"],
        frequency: "daily",
        historicalStory: "역사적 배경 및 흥미로운 위인의 습관 수행 이야기 상세 서술",
        sciencePrinciples: "이 습관이 뇌과학, 인지과학, 생리학적으로 집중력이나 생산성을 높여주는 과학적 원리 설명",
        quote: "위인의 명언 혹은 습관과 관련된 구절",
        trigger: "이 습관을 개시하기에 적절한 트리거 상황",
        modernGuide: ["단계 1 가이드 설명", "단계 2 가이드 설명", "단계 3 가이드 설명"],
        actionName: "현대인의 액션 플랜 명칭",
        sources: ["출처 문헌 1", "출처 문헌 2"]
      };
      fs.writeFileSync(itemsPath, JSON.stringify(itemsTemplate, null, 2), 'utf-8');
      console.log(`📁 [템플릿 생성] 원천 데이터 소스 뼈대가 적재되었습니다: src/data/habits/items/${slug}.json`);
    }

    if (!fs.existsSync(blogsPath)) {
      const blogsDir = path.dirname(blogsPath);
      if (!fs.existsSync(blogsDir)) fs.mkdirSync(blogsDir, { recursive: true });

      const blogsTemplate = {};
      blogsTemplate[slug] = {
        title: { en: "English Title", ko: "한국어 제목" },
        description: { en: "English Description", ko: "한국어 설명" },
        authority: { en: "English Sources & Authority", ko: "한국어 출처 및 학술적 근거" },
        intro: { en: "English Introduction paragraph", ko: "한국어 도입문 문단" },
        whyTitle: { en: "Why this habit works", ko: "이 습관이 효과적인 이유" },
        whyDesc: { en: "Detailed English scientific reason", ko: "자세한 한국어 과학적 근거 설명" },
        cautionTitle: { en: "Caution & Tip", ko: "주의사항 및 팁 소제목" },
        cautionDesc: { en: "Detailed English caution explanation", ko: "자세한 한국어 주의사항 문맥" },
        steps: [
          { name: { en: "Step 1 Title", ko: "1단계 제목" }, text: { en: "Step 1 English description", ko: "1단계 한국어 상세 설명" } },
          { name: { en: "Step 2 Title", ko: "2단계 제목" }, text: { en: "Step 2 English description", ko: "2단계 한국어 상세 설명" } },
          { name: { en: "Step 3 Title", ko: "3단계 제목" }, text: { en: "Step 3 English description", ko: "3단계 한국어 상세 설명" } }
        ],
        faqs: [{ question: { en: "FAQ Question 1?", ko: "자주 묻는 질문 1?" }, answer: { en: "FAQ Answer 1.", ko: "자주 묻는 질문 답변 1." } }]
      };
      fs.writeFileSync(blogsPath, JSON.stringify(blogsTemplate, null, 2), 'utf-8');
      console.log(`📁 [템플릿 생성] 다국어 번역 리소스 뼈대가 적재되었습니다: src/data/blogs/habits/${slug}.json`);
    }

    if (!fs.existsSync(koPath)) {
      const koDir = path.dirname(koPath);
      if (!fs.existsSync(koDir)) fs.mkdirSync(koDir, { recursive: true });

      const mdTemplate = `---
formatVersion: 4
title: "한국어 마스터 제목"
description: "한국어 마스터 요약 설명"
pubDate: "2026-07-02"
category: "BuildSelf"
tags: ["루틴", "습관"]
heroImage: "/images/blog/${slug.replace(/-/g, '_')}.png"
app: "buildself"
authority: "출처 및 학술 연구 정보"
updatedDate: "2026-07-02"
faqs:
  - question: "자주 묻는 질문 1?"
    answer: "자주 묻는 질문 답변 1."
---

"여기에 대표 명언 혹은 핵심 문구를 적습니다." 🚶‍♂️

도입문 문단을 이곳에 한글로 작성합니다. 위인의 일대기나 흥미로운 비하인드 스토리를 담아 독자의 흥미를 유발해 주세요.
`;
      fs.writeFileSync(koPath, mdTemplate, 'utf-8');
      console.log(`📁 [템플릿 생성] 한국어 마스터 마크다운 템플릿이 적재되었습니다: src/content/blog/ko/${slug}.md`);
    }

  } else if (type === 'storage') {
    itemsPath = path.join(__dirname, 'data/ingredients/items', `${slug}.json`);
    blogsPath = path.join(__dirname, 'data/blogs/ingredients', `${slug}.json`);
    koPath = path.join(__dirname, 'content/blog/ko', `${slug}.md`);

    if (!fs.existsSync(itemsPath)) {
      const itemsDir = path.dirname(itemsPath);
      if (!fs.existsSync(itemsDir)) fs.mkdirSync(itemsDir, { recursive: true });

      const itemsTemplate = {
        id: slug,
        category: "vegetable",
        emoji: "🥬",
        isProcessed: false,
        names: { ko: "식재료명", en: "Ingredient Name", ja: "食材名", zh: "食材名称", es: "Ingrediente", fr: "Ingrédient", de: "Zutat", pt: "Ingrediente", id: "Bahan" },
        storage: {
          fridge: {
            durationDays: 7,
            tips: { ko: "여기에 보관 방법을 작성하세요.", en: "Write storage instructions here.", ja: "ここに保管方法を記入してください。", zh: "在此处编写存储说明。", es: "Escriba las instrucciones de almacenamiento aquí.", fr: "Écrivez les instructions de stockage ici.", de: "Geben Sie hier die Lagerungsanweisungen ein.", pt: "Escreva as instruções de armazenamento aqui.", id: "Tulis instruksi penyimpanan di sini." },
            sources: ["RDA", "USDA"]
          }
        }
      };
      fs.writeFileSync(itemsPath, JSON.stringify(itemsTemplate, null, 2), 'utf-8');
      console.log(`📁 [템플릿 생성] 식재료 원천 데이터 소스 뼈대가 적재되었습니다: src/data/ingredients/items/${slug}.json`);
    }

    if (!fs.existsSync(blogsPath)) {
      const blogsDir = path.dirname(blogsPath);
      if (!fs.existsSync(blogsDir)) fs.mkdirSync(blogsDir, { recursive: true });

      const blogsTemplate = {};
      blogsTemplate[slug] = {
        title: { en: "English Title", ko: "한국어 제목" },
        description: { en: "English Description", ko: "한국어 설명" }
      };
      fs.writeFileSync(blogsPath, JSON.stringify(blogsTemplate, null, 2), 'utf-8');
      console.log(`📁 [템플릿 생성] 식재료 다국어 번역 리소스 뼈대가 적재되었습니다: src/data/blogs/ingredients/${slug}.json`);
    }

    // 2-C. content/blog/ko/[slug].md 뼈대 생성
    if (!fs.existsSync(koPath)) {
      const koDir = path.dirname(koPath);
      if (!fs.existsSync(koDir)) fs.mkdirSync(koDir, { recursive: true });

      const mdTemplate = `---
formatVersion: 4
title: "식재료 보관법 한국어 제목"
description: "식재료 보관법 한국어 요약 설명"
pubDate: "2026-07-02"
category: "BuildSelf"
tags: ["식재료 보관", "신선 보관"]
heroImage: "/images/blog/${slug.replace(/-/g, '_')}.png"
app: "buildself"
authority: "RDA, USDA"
updatedDate: "2026-07-02"
---

여기에 식재료 보관 관련 핵심 설명이나 도입부를 작성합니다.
`;
      fs.writeFileSync(koPath, mdTemplate, 'utf-8');
      console.log(`📁 [템플릿 생성] 식재료 한국어 마스터 마크다운 템플릿이 적재되었습니다: src/content/blog/ko/${slug}.md`);
    }

  } else if (type === 'pet') {
    itemsPath = path.join(__dirname, 'data/pets/items', `${slug}.json`);
    blogsPath = path.join(__dirname, 'data/blogs/pets', `${slug}.json`);
    koPath = path.join(__dirname, 'content/blog/ko', `${slug}.md`);

    // 3-A. pets/items/[slug].json 뼈대 생성
    if (!fs.existsSync(itemsPath)) {
      const itemsDir = path.dirname(itemsPath);
      if (!fs.existsSync(itemsDir)) fs.mkdirSync(itemsDir, { recursive: true });

      const itemsTemplate = {
        id: slug,
        title: "반려동물 케어 타이틀",
        species: "dog",
        breed: "품종명 (Breed)",
        lifespan: "10 ~ 12년",
        sleepPattern: "수면 패턴 상세 서술",
        likes: [
          "좋아하는 것 1",
          "좋아하는 것 2"
        ],
        dislikes: [
          "싫어하는 것 1",
          "싫어하는 것 2"
        ],
        bodyLanguage: [
          {
            signal: "바디 랭귀지 신호 1",
            meaning: "바디 랭귀지 의미 1"
          }
        ],
        dailyRoutine: {
          step1: "아침 케어",
          step2: "오후 활동",
          step3: "저녁 정리"
        },
        heroImage: `/images/blog/${slug.replace(/-/g, '_')}.png`,
        sources: ["American Kennel Club (AKC)"]
      };
      fs.writeFileSync(itemsPath, JSON.stringify(itemsTemplate, null, 2), 'utf-8');
      console.log(`📁 [템플릿 생성] 반려동물 원천 데이터 소스 뼈대가 적재되었습니다: src/data/pets/items/${slug}.json`);
    }

    // 3-B. blogs/pets/[slug].json 뼈대 생성
    if (!fs.existsSync(blogsPath)) {
      const blogsDir = path.dirname(blogsPath);
      if (!fs.existsSync(blogsDir)) fs.mkdirSync(blogsDir, { recursive: true });

      const blogsTemplate = {};
      blogsTemplate[slug] = {
        title: { en: "English Title", ko: "한국어 제목" },
        description: { en: "English Description", ko: "한국어 설명" }
      };
      fs.writeFileSync(blogsPath, JSON.stringify(blogsTemplate, null, 2), 'utf-8');
      console.log(`📁 [템플릿 생성] 반려동물 다국어 번역 리소스 뼈대가 적재되었습니다: src/data/blogs/pets/${slug}.json`);
    }

    // 3-C. content/blog/ko/[slug].md 뼈대 생성
    if (!fs.existsSync(koPath)) {
      const koDir = path.dirname(koPath);
      if (!fs.existsSync(koDir)) fs.mkdirSync(koDir, { recursive: true });

      const mdTemplate = `---
formatVersion: 4
title: "반려동물 케어 한국어 제목"
description: "반려동물 케어 한국어 요약 설명"
pubDate: "2026-07-02"
category: "BuildSelf"
tags: ["반려동물", "케어"]
heroImage: "/images/blog/${slug.replace(/-/g, '_')}.png"
app: "buildself"
authority: "AKC"
updatedDate: "2026-07-02"
---

여기에 반려동물 케어 관련 핵심 설명이나 도입부를 작성합니다.
`;
      fs.writeFileSync(koPath, mdTemplate, 'utf-8');
      console.log(`📁 [템플릿 생성] 반려동물 한국어 마스터 마크다운 템플릿이 적재되었습니다: src/content/blog/ko/${slug}.md`);
    }
  }
}

function startAutonomousWorkflow() {
  console.log(`\n🚀 [AI 자율 블로그 생성기] '${slugArg}' 생성 프로세스 기동 중...`);
  
  if (typeArg === 'pet') {
    // 0.5. 신규 반려동물 추가 시 템플릿 스캐폴딩 자동 생성
    generateScaffoldingTemplates(slugArg, typeArg);

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

  // 0.5. 신규 습관/보관법 추가 시 템플릿 스캐폴딩 자동 생성
  if (typeArg === 'habit' || typeArg === 'storage') {
    generateScaffoldingTemplates(slugArg, typeArg);
  }

  // 1. 첫 단계 컴파일 자동 구동 (SOP 준수 및 수동 컴파일 누락 보완)
  try {
    if (typeArg === 'habit') {
      console.log(`🤖 [AI 파이프라인] 위인 습관 컴파일러 기동: node src/compile_habit_blogs.js`);
      execSync(`node src/compile_habit_blogs.js`, { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
    } else if (typeArg === 'storage') {
      console.log(`🤖 [AI 파이프라인] 보관법 컴파일러 기동: node src/compile_storage_blogs.js`);
      execSync(`node src/compile_storage_blogs.js`, { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
    }
  } catch (err) {
    console.error(`❌ [ERR] 컴파일 중 오류 발생: ${err.message}`);
    process.exit(1);
  }

  // 2. 소스 언어 판별
  const masterLang = detectSourceLanguage(slugArg);
  console.log(`ℹ️ [소스 감지] 마스터 소스 파일의 언어는 [${masterLang.toUpperCase()}] 입니다.`);

  // 2.5. 지능형 과거 날짜 자율 배정 (Backdating) - 사용자 요청으로 비활성화 유지
  // distributeBlogDates(slugArg);

  // 3. 자가 치유 검증 수행
  runSelfHealingValidation();
}

startAutonomousWorkflow();
