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
// distributeBlogDates 함수 삭제 완료



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
      console.log('🤖 [AI 자가 치유 실패] 에러를 자체 치유하지 못했습니다. 수동 수정이 필요합니다.');
      break;
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

      const todayStr = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().split('T')[0];
      const mdTemplate = `---
formatVersion: 4
title: "한국어 마스터 제목"
description: "한국어 마스터 요약 설명"
pubDate: "${todayStr}"
category: "BuildSelf"
tags: ["루틴", "습관"]
heroImage: "/images/blog/${slug.replace(/-/g, '_')}.png"
app: "buildself"
authority: "출처 및 학술 연구 정보"
updatedDate: "${todayStr}"
faqs:
  - question: "자주 묻는 질문 1?"
    answer: "자주 묻는 질문 답변 1."
---

"여기에 대표 명언 혹은 핵심 문구를 적습니다." 🚶‍♂️

도입문 문단을 이곳에 한글로 작성합니다. 위인의 일대기나 흥미로운 비하인드 스토리를 담아 독자의 흥미를 유발해 주세요.

<div class="my-8 p-6 rounded-[2rem] border border-indigo-500/10 bg-indigo-500/5 dark:border-indigo-500/20 dark:bg-indigo-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-indigo-800 dark:text-indigo-300 m-0">
      역사적 & 학술적 근거
    </h5>
    <p class="text-xs text-indigo-700/80 dark:text-indigo-400/80 m-0 mt-1.5 leading-relaxed">
      본 콘텐츠는 [출처 및 역사적 기록 정보] 및 관련 인지과학/생리학 연구 결과를 기반으로 작성되었습니다.
    </p>
  </div>
</div>
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

      const todayStr = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().split('T')[0];
      const mdTemplate = `---
formatVersion: 4
title: "식재료 보관법 한국어 제목"
description: "식재료 보관법 한국어 요약 설명"
pubDate: "${todayStr}"
category: "FreshSnap"
tags: ["식재료 보관", "신선 보관"]
heroImage: "/images/blog/${slug.replace(/-/g, '_')}.png"
app: "buildself"
authority: "RDA, USDA"
updatedDate: "${todayStr}"
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

      const todayStr = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().split('T')[0];
      const jsonTemplate = {
        [slug]: {
          "pubDate": todayStr,
          "updatedDate": todayStr,
          "locales": {
            "ko": {
              "title": "반려동물 케어 한국어 제목",
              "description": "반려동물 케어 한국어 요약 설명",
              "authority": "AKC",
              "intro": "여기에 인트로를 작성합니다.",
              "profile": {
                "breed": "품종명",
                "lifespan": "10-15 years",
                "sleep_pattern": "12-14 hours",
                "temperament": "Gentle, Intelligent"
              },
              "whyTitle": "이 품종을 이해해야 하는 이유",
              "whyDesc": "이 품종의 건강과 행동 분석의 과학적 근거를 서술합니다.",
              "body_signals": [
                {
                  "name": "시그널 행동 명칭",
                  "meaning": "행동이 내포한 인지적/신체적 의미",
                  "response": "보호자의 권장 대처 방안"
                }
              ],
              "daily_routine": [
                {
                  "name": "하루 루틴 단계명",
                  "text": "세부 수행 지침 내용"
                }
              ],
              "faqs": [
                {
                  "question": "자주 묻는 질문 1?",
                  "answer": "질문에 대한 답변 내용 1."
                }
              ],
              "tags": ["반려동물", "케어"]
            }
          }
        }
      };
      fs.writeFileSync(blogsPath, JSON.stringify(jsonTemplate, null, 2), 'utf-8');
      console.log(`📁 [템플릿 생성] 반려동물 다국어 번역 리소스 뼈대가 적재되었습니다: src/data/blogs/pets/${slug}.json`);
    }

    // 3-C. content/blog/ko/[slug].md 뼈대 생성
    if (!fs.existsSync(koPath)) {
      const koDir = path.dirname(koPath);
      if (!fs.existsSync(koDir)) fs.mkdirSync(koDir, { recursive: true });

      const todayStr = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().split('T')[0];
      const mdTemplate = `---
formatVersion: 4
title: "반려동물 케어 한국어 제목"
description: "반려동물 케어 한국어 요약 설명"
pubDate: "${todayStr}"
category: "PetSelf"
tags: ["반려동물", "케어"]
heroImage: "/images/blog/${slug.replace(/-/g, '_')}.png"
app: "petself"
authority: "AKC"
updatedDate: "${todayStr}"
steps:
  - name: "하루 루틴 단계명 1"
    text: "세부 수행 지침 내용 1"
faqs:
  - question: "자주 묻는 질문 1?"
    answer: "자주 묻는 질문 답변 1."
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

  // 3. 자가 치유 검증 수행
  runSelfHealingValidation();
}

startAutonomousWorkflow();
