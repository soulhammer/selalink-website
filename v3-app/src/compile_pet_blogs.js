import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 헬퍼 및 템플릿 임포트
import { cleanMarkdown, ensureDir } from './utils/compilerHelper.js';
import { 
  renderEvidenceBox, 
  renderPetStepCard, 
  renderPetRoutineCard, 
  renderTipBox, 
  renderFaqSection,
  getPetLabels
} from './utils/blogTemplates.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, 'content/blog');
const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id', 'ko'];

const petsDir = path.join(__dirname, 'data/blogs/pets');
const metaPath = path.join(petsDir, 'meta.json');
if (!fs.existsSync(metaPath)) {
  console.error(`❌ [ERR] meta.json 파일이 존재하지 않습니다: ${metaPath}`);
  process.exit(1);
}
const { labelDict } = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
const labels = getPetLabels();

// 1. 품종별 마스터 공통 메타 정보 로드
const petMasterData = {};
if (fs.existsSync(petsDir)) {
  fs.readdirSync(petsDir).forEach(file => {
    if (file.endsWith('.json') && file !== 'meta.json') {
      const filePath = path.join(petsDir, file);
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      Object.assign(petMasterData, fileData);
    }
  });
}

// 2. 다국어 번역 로케일 데이터 로드
const localesDir = path.join(petsDir, 'locales');
const petLocales = {};
languages.forEach(lang => {
  const localePath = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(localePath)) {
    petLocales[lang] = JSON.parse(fs.readFileSync(localePath, 'utf-8'));
  } else {
    petLocales[lang] = {};
  }
});

// Markdown 생성 엔진
function generateMarkdown(slug, lang) {
  const master = petMasterData[slug];
  if (!master) return '';

  const data = petLocales[lang]?.[slug] || petLocales['en']?.[slug];
  if (!data) return '';

  const title = data.title;
  const desc = data.description;
  const auth = data.authority;
  const intro = data.intro;

  const pBreed = data.profile.breed;
  const pLifespan = data.profile.lifespan;
  const pSleep = data.profile.sleep_pattern;
  const pTemp = data.profile.temperament;

  const whyTitle = data.whyTitle;
  const whyDesc = data.whyDesc;

  const bodySignals = data.body_signals || [];
  const dailyRoutine = data.daily_routine || [];
  const faqs = data.faqs || [];

  // 라벨 매핑
  const lProfile = labelDict.profileTitle[lang] || labelDict.profileTitle['en'];
  const lLifespan = labelDict.lifespanLabel[lang] || labelDict.lifespanLabel['en'];
  const lSleep = labelDict.sleepLabel[lang] || labelDict.sleepLabel['en'];
  const lTemp = labelDict.tempLabel[lang] || labelDict.tempLabel['en'];
  const lMeaning = labelDict.meaningLabel[lang] || labelDict.meaningLabel['en'];
  const lResponse = labelDict.responseLabel[lang] || labelDict.responseLabel['en'];

  const section2Title = labels.petSection2Title[lang] || labels.petSection2Title['en'];
  const section3Title = labels.petSection3Title[lang] || labels.petSection3Title['en'];
  const summaryText = labels.petSummaryTexts[lang] || labels.petSummaryTexts['en'];

  // Frontmatter 생성
  const tags = data.tags || [];
  const formattedTags = JSON.stringify(tags);
  const formattedFaqs = faqs.map(f => `  - question: "${f.question.replace(/"/g, '\\"')}"\n    answer: "${f.answer.replace(/"/g, '\\"')}"`).join('\n');

  const pubDateStr = master.pubDate || new Date().toISOString().split('T')[0];
  const updatedDateStr = master.updatedDate || pubDateStr;
  const heroImageSlug = slug.replace(/-/g, '_');

  let md = `---
layout: "../../../layouts/BlogPostLayout.astro"
title: "${title.replace(/"/g, '\\"')}"
description: "${desc.replace(/"/g, '\\"')}"
pubDate: "${pubDateStr}"
updatedDate: "${updatedDateStr}"
heroImage: "/images/blog/${heroImageSlug}.png"
authority: "${auth.replace(/"/g, '\\"')}"
app: "petself"
tags: ${formattedTags}
faqs:
${formattedFaqs}
---

${intro}

${renderEvidenceBox(lang, auth, 'ingredients')}

<div class="my-6 p-6 rounded-[1.5rem] border border-slate-200/65 bg-slate-50/50 dark:border-white/5 dark:bg-slate-900/20">
  <h3 class="text-lg font-extrabold text-indigo-600 dark:text-indigo-400 mt-0 mb-4 flex items-center gap-2">
    🐾 ${pBreed} ${lProfile}
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="flex flex-col"><span class="text-xs text-slate-400">${lLifespan}</span><span class="font-bold text-slate-800 dark:text-slate-200">${pLifespan}</span></div>
    <div class="flex flex-col"><span class="text-xs text-slate-400">${lSleep}</span><span class="font-bold text-slate-800 dark:text-slate-200">${pSleep}</span></div>
    <div class="flex flex-col"><span class="text-xs text-slate-400">${lTemp}</span><span class="font-bold text-slate-800 dark:text-slate-200">${pTemp}</span></div>
  </div>
</div>

## 1. ${whyTitle}

${whyDesc}

`;

  // 행동 시그널 해독 카드 생성
  bodySignals.forEach((sig, idx) => {
    const sName = sig.name;
    const sMean = sig.meaning;
    const sResp = sig.response;
    md += renderPetStepCard(lang, idx + 1, 'SIGNAL', sName, lMeaning, sMean, lResponse, sResp) + '\n\n';
  });

  md += `---

## 2. ${section2Title}

`;

  // 3단계 홈케어 루틴 카드 생성
  dailyRoutine.forEach((rt, idx) => {
    const rName = rt.name;
    const rText = rt.text;
    md += renderPetRoutineCard(lang, idx + 1, rName, rText) + '\n\n';
  });

  md += `## 3. ${section3Title}
${renderTipBox(summaryText)}

---

${renderFaqSection(lang, faqs)}
`;

  return md;
}

// 빌드 프로세스 시작
const args = process.argv.slice(2);
const slugArg = args.find(a => a.startsWith('--slug='))?.split('=')[1];

const buildPetBlog = (slug) => {
  console.log(`🚀 [Pet 컴파일러] '${slug}' 다국어 블로그 생성 시작...`);
  languages.forEach(lang => {
    const langDir = path.join(blogRoot, lang);
    ensureDir(langDir);

    let markdownContent = generateMarkdown(slug, lang);
    if (markdownContent) {
      markdownContent = cleanMarkdown(markdownContent);
      const destPath = path.join(langDir, `${slug}.md`);
      fs.writeFileSync(destPath, markdownContent, 'utf-8');
      console.log(`✅ [생성 완료] ${lang.toUpperCase()} -> ${destPath}`);
    }
  });
  console.log(`🎉 [컴파일 완료] '${slug}' 9개 국어 마크다운 빌드 성공.`);
};

if (slugArg) {
  if (!petMasterData[slugArg]) {
    console.error(`❌ [ERR] 유효하지 않은 --slug 인자입니다: ${slugArg}`);
    process.exit(1);
  }
  buildPetBlog(slugArg);
} else {
  console.log(`🚀 [Pet 컴파일러] 인자가 없어 등록된 모든 반려동물 블로그를 일괄 생성합니다.`);
  Object.keys(petMasterData).forEach(slug => {
    buildPetBlog(slug);
  });
}

