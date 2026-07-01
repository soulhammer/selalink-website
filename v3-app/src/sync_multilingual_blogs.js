import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 데이터 파일 임포트
import { condimentIngredients } from './data/ingredients/condiment.ts';
import { dairyIngredients } from './data/ingredients/dairy.ts';
import { etcIngredients } from './data/ingredients/etc.ts';
import { fruitIngredients } from './data/ingredients/fruit.ts';
import { grainIngredients } from './data/ingredients/grain.ts';
import { meatIngredients } from './data/ingredients/meat.ts';
import { seafoodIngredients } from './data/ingredients/seafood.ts';
import { vegetableIngredients } from './data/ingredients/vegetable.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, 'content/blog');

// 모든 식재료 데이터를 하나의 배열로 통합
const allIngredients = [
  ...condimentIngredients,
  ...dairyIngredients,
  ...etcIngredients,
  ...fruitIngredients,
  ...grainIngredients,
  ...meatIngredients,
  ...seafoodIngredients,
  ...vegetableIngredients
];

// 블로그 파일명과 식재료 ID 간의 매핑 정보
const blogToIngMap = {
  'how-to-store-avocado': 'avocado',
  'how-to-store-beef': 'beef',
  'how-to-store-bread': 'bread',
  'how-to-store-chicken': 'chicken',
  'how-to-store-eggs': 'egg',
  'how-to-store-garlic': 'garlic',
  'how-to-store-green-onions': 'green-onion',
  'how-to-store-milk': 'milk',
  'how-to-store-mushrooms': 'mushroom',
  'how-to-store-nuts': 'nuts',
  'how-to-store-olive-oil': 'olive-oil',
  'how-to-store-onions': 'onion',
  'how-to-store-perilla-oil': 'perilla-oil',
  'how-to-store-potatoes': 'potato',
  'how-to-store-salmon': 'salmon',
  'how-to-store-spinach': 'spinach',
  'how-to-store-squid': 'squid',
  'how-to-store-tofu': 'tofu',
  'how-to-store-tomatoes': 'tomato',
  'how-to-store-watermelon': 'watermelon'
};

const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id']; // ko는 원본 유지하므로 스킵

// 외부 JSON 파일에서 번역 데이터 로드
const { l10n } = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/blogs/ingredients/meta.json'), 'utf-8')
);

function run() {
  let updatedFiles = 0;

  Object.entries(blogToIngMap).forEach(([blogSlug, ingId]) => {
    // 1. 해당 식재료 객체 확보
    const ing = allIngredients.find(i => i.id === ingId);
    if (!ing) {
      console.warn(`[경고] 식재료 ID '${ingId}'에 대한 데이터를 찾을 수 없습니다.`);
      return;
    }

    // 2. 다국어 폴더 순회
    languages.forEach(lang => {
      const langDir = path.join(blogRoot, lang);
      const filePath = path.join(langDir, `${blogSlug}.md`);

      if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true });
      }

      const dict = l10n[lang];
      const name = ing.names[lang] || ing.names['en'] || ingId;

      // 타이틀 및 설명 치환
      const title = dict.title.replaceAll('[name]', name);
      const description = dict.desc.replaceAll('[name]', name);
      const intro = dict.intro.replaceAll('[name]', name);

      // 태그 번역은 없으므로 영문 이름 또는 ko 원본에서 파생하여 간단히 정의
      const tags = JSON.stringify([name, dict.guideTitle, ing.category]);

      // 3. steps 추출
      const steps = [];
      const stepCards = [];
      let stepIdx = 1;

      ['room', 'fridge', 'freezer'].forEach(method => {
        const guide = ing.storage[method];
        if (guide && guide.tips && guide.tips[lang]) {
          const methodLabel = dict.methodNames[method];
          const duration = guide.durationDays;
          const tipText = guide.tips[lang];

          const stepName = `${methodLabel} (${duration}${dict.days}) 🥑`;
          steps.push({
            name: stepName,
            text: tipText
          });

          // 본문에 삽입할 STEP 카드 HTML 빌드
          stepCards.push(`<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20 tracking-wider">${dict.step} ${stepIdx}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${stepName}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${tipText}
  </p>
</div>`);
          stepIdx++;
        }
      });

      // YAML Frontmatter 생성
      const stepsYaml = steps.map(s => `  - name: "${s.name.replace(/"/g, '\\"')}"\n    text: "${s.text.replace(/"/g, '\\"')}"`).join('\n');
      const authorityHtml = ing.storage.fridge?.sources 
        ? `<strong>${ing.storage.fridge.sources.join(' & ')}</strong>` 
        : ing.storage.room?.sources 
          ? `<strong>${ing.storage.room.sources.join(' & ')}</strong>` 
          : `<strong>USDA & WHO</strong>`;

      const newContent = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
pubDate: "2026-06-22"
category: "StoreSelf"
tags: ${tags}
heroImage: "/images/blog/${ingId.replace(/-/g, '_')}_storage_hack.png"
app: "storeself"
authority: "${authorityHtml.replace(/"/g, '\\"')}"
steps:
${stepsYaml}
---

${intro}

---

## 1. ${dict.whyTitle}

${dict.whyDesc}

---

## 2. ${dict.guideTitle}

${stepCards.join('\n\n')}

---

## 3. ${dict.cautionTitle}

<div class="my-6 p-5 rounded-2xl border-l-4 border-rose-500 bg-rose-500/5 dark:bg-rose-500/10 flex items-start gap-4">
  <span class="text-xl">⚠️</span>
  <div>
    <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
      ${dict.cautionDesc}
    </p>
  </div>
</div>
`;

      fs.writeFileSync(filePath, newContent, 'utf-8');
      updatedFiles++;
    });
  });

  console.log(`[완료] 총 ${updatedFiles}개의 다국어 마크다운 블로그 파일이 완벽하게 번역되어 재생성되었습니다!`);
}

run();
