import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 데이터 임포트
import { condimentIngredients } from './data/ingredients/condiment.ts';
import { dairyIngredients } from './data/ingredients/dairy.ts';
import { etcIngredients } from './data/ingredients/etc.ts';
import { fruitIngredients } from './data/ingredients/fruit.ts';
import { grainIngredients } from './data/ingredients/grain.ts';
import { meatIngredients } from './data/ingredients/meat.ts';
import { seafoodIngredients } from './data/ingredients/seafood.ts';
import { vegetableIngredients } from './data/ingredients/vegetable.ts';

// 헬퍼 및 템플릿 임포트
import { parseKoSteps, cleanMarkdown, ensureDir } from './utils/compilerHelper.js';
import { renderStepCard, renderCautionBox, renderFaqSection } from './utils/blogTemplates.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, 'content/blog');
const publicRoot = path.join(__dirname, '../public');
const transJsonPath = '/Users/soulhammer/.gemini/antigravity-ide/brain/77b027a6-2e4b-442f-b4b6-800970723a3b/scratch/blog_translations.json';

const allIngredients = [
  ...condimentIngredients, ...dairyIngredients, ...etcIngredients,
  ...fruitIngredients, ...grainIngredients, ...meatIngredients,
  ...seafoodIngredients, ...vegetableIngredients
];

const blogToIngMap = {
  'how-to-store-apples': 'apple',
  'how-to-store-avocado': 'avocado',
  'how-to-store-bananas': 'banana',
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

const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id', 'ko'];
const ingredientsDir = path.join(__dirname, 'data/blogs/ingredients');

// 1. 공통 메타 정보 로드
const { l10n, storageFaqs, sourceMapLang } = JSON.parse(
  fs.readFileSync(path.join(ingredientsDir, 'meta.json'), 'utf-8')
);

// 2. specialFaqs 동적 빌드
const specialFaqs = {};
const specialFaqsDir = path.join(ingredientsDir, 'special_faqs');
if (fs.existsSync(specialFaqsDir)) {
  fs.readdirSync(specialFaqsDir).forEach(file => {
    if (file.endsWith('.json')) {
      const filePath = path.join(specialFaqsDir, file);
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      Object.assign(specialFaqs, fileData);
    }
  });
}

function run() {
  if (!fs.existsSync(transJsonPath)) {
    console.error(`[오류] 번역 JSON 파일이 존재하지 않습니다: ${transJsonPath}`);
    return;
  }

  const transMap = JSON.parse(fs.readFileSync(transJsonPath, 'utf-8'));
  const stepsTransJsonPath = '/Users/soulhammer/.gemini/antigravity-ide/brain/77b027a6-2e4b-442f-b4b6-800970723a3b/scratch/blog_steps_translations.json';
  const stepsTransMap = JSON.parse(fs.readFileSync(stepsTransJsonPath, 'utf-8'));
  let compiledCount = 0;

  Object.entries(blogToIngMap).forEach(([blogSlug, ingId]) => {
    // 1. ko 마스터 파일 로드
    const koPath = path.join(blogRoot, 'ko', `${blogSlug}.md`);
    if (!fs.existsSync(koPath)) {
      console.warn(`[경고] ko 마스터 파일 없음: ${blogSlug}.md`);
      return;
    }

    const koContent = fs.readFileSync(koPath, 'utf-8');
    
    // koContent에서 pubDate 파싱
    const pubDateMatch = koContent.match(/pubDate:\s*"([^"]+)"/);
    const koPubDate = pubDateMatch ? pubDateMatch[1] : '2026-06-22';

    const ing = allIngredients.find(i => i.id === ingId);
    if (!ing) {
      console.warn(`[경고] 식재료 ID 없음: ${ingId}`);
      return;
    }

    // 한국어 마스터 블로그로부터 STEP 수집
    const koSteps = parseKoSteps(koContent);

    // 2. 다국어 폴더에 컴파일 적용
    languages.forEach(lang => {
      const targetDir = path.join(blogRoot, lang);
      const targetPath = path.join(targetDir, `${blogSlug}.md`);

      ensureDir(targetDir);

      if (blogSlug === 'how-to-store-apples' || blogSlug === 'how-to-store-watermelon') {
        if (fs.existsSync(targetPath)) {
          // 기존 파일의 steps 메타데이터만 ko 스키마 및 각 언어 번역에 맞추어 보존/주입
          let originalContent = fs.readFileSync(targetPath, 'utf-8');
          const originalParts = originalContent.split('---');
          
          if (originalParts.length >= 3) {
            let originalFrontmatter = originalParts[1];
            const originalBody = originalParts.slice(2).join('---');

            // steps 데이터 조립
            const steps = [];
            const ingStepsTrans = stepsTransMap[ingId] || [];
            
            koSteps.forEach((koStep, idx) => {
              const stepTrans = ingStepsTrans[idx];
              let translatedName = koStep.name;
              let translatedText = koStep.text;
              
              if (stepTrans) {
                translatedName = stepTrans.name[lang] || stepTrans.name['en'] || koStep.name;
                translatedText = stepTrans.text[lang] || stepTrans.text['en'] || koStep.text;
              }
              steps.push({ name: translatedName, text: translatedText });
            });

            const stepsYaml = steps.map(s => `  - name: "${s.name.replace(/"/g, '\\"')}"\n    text: "${s.text.replace(/"/g, '\\"')}"`).join('\n');
            
            // 기존 steps 필드가 있으면 교체, 없으면 주입
            if (originalFrontmatter.includes('steps:')) {
              originalFrontmatter = originalFrontmatter.replace(/steps:[\s\S]*/, `steps:\n${stepsYaml}\n`);
            } else {
              originalFrontmatter += `\nsteps:\n${stepsYaml}\n`;
            }

            // pubDate 동적 반영
            if (originalFrontmatter.includes('pubDate:')) {
              originalFrontmatter = originalFrontmatter.replace(/pubDate:\s*"[^"]*"/, `pubDate: "${koPubDate}"`);
            } else {
              originalFrontmatter += `\npubDate: "${koPubDate}"\n`;
            }

            let finalContent = `---${originalFrontmatter}---${originalBody}`;
            finalContent = cleanMarkdown(finalContent);
            fs.writeFileSync(targetPath, finalContent, 'utf-8');
            console.log(`[보존 및 갱신] ${lang}/${blogSlug}.md 고품질 수동 번역 보존 완료.`);
            compiledCount++;
            return;
          }
        }
      }

      // 그 외 20개 식재료 파일은 ko 구조를 바탕으로 완벽히 다국어 번역 조립
      const dict = l10n[lang];
      const name = ing.names[lang] || ing.names['en'] || ingId;

      const title = dict.titleCorrected 
        ? dict.titleCorrected.replaceAll('[name]', name) 
        : dict.title.replaceAll('[name]', name);

      const description = dict.desc.replaceAll('[name]', name);
      const tags = JSON.stringify([name, dict.guideTitle, ing.category]);

      // 3. steps 및 카드 HTML 번역 수집
      const steps = [];
      const stepCards = [];
      const ingStepsTrans = stepsTransMap[ingId] || [];

      koSteps.forEach((koStep, idx) => {
        const stepIdx = idx + 1;
        const stepTrans = ingStepsTrans[idx];
        
        let translatedName = koStep.name;
        let translatedText = koStep.text;
        
        if (stepTrans) {
          translatedName = stepTrans.name[lang] || stepTrans.name['en'] || koStep.name;
          translatedText = stepTrans.text[lang] || stepTrans.text['en'] || koStep.text;
        } else {
          console.warn(`[경고] 번역 맵에 단계 누락: ${ingId} STEP ${stepIdx}`);
        }

        steps.push({ name: translatedName, text: translatedText });

        let imageHtml = '';
        if (stepIdx === 1) {
          const detailNames = [
            `${ingId.replace(/-/g, '_')}_storage_detail.png`,
            `${ingId}_storage_detail.png`,
            `${blogSlug.replace('how-to-store-', '').replace(/-/g, '_')}_storage_detail.png`,
            `${blogSlug.replace('how-to-store-', '')}_storage_detail.png`
          ];
          const foundName = detailNames.find(name => {
            const checkPath = path.join(publicRoot, 'images', 'blog', name);
            return fs.existsSync(checkPath);
          });
          if (foundName) {
            const detailImgPath = `/images/blog/${foundName}`;
            imageHtml = `\n  <div class="mt-6 flex justify-center">\n    <img src="${detailImgPath}" alt="${translatedName}" class="rounded-2xl max-w-full h-auto border border-slate-200/50 dark:border-slate-800/50 shadow-sm" />\n  </div>`;
          }
        }

        stepCards.push(renderStepCard(lang, stepIdx, translatedName, translatedText, imageHtml));
      });

      const stepsYaml = steps.map(s => `  - name: "${s.name.replace(/"/g, '\\"')}"\n    text: "${s.text.replace(/"/g, '\\"')}"`).join('\n');

      // 4. 신뢰기관 HTML 조립
      const rawSources = [];
      ['room', 'fridge', 'freezer'].forEach(method => {
        const storage = ing.storage[method];
        if (storage && storage.sources) {
          storage.sources.forEach(s => {
            if (!rawSources.includes(s)) rawSources.push(s);
          });
        }
      });
      if (rawSources.length === 0) rawSources.push('USDA', 'MFDS');

      const transSources = rawSources.map(s => {
        const lMap = sourceMapLang[lang] || sourceMapLang['en'];
        return lMap[s] || s;
      });
      const authorityHtml = transSources.join(' & ');

      // 5. 번역 맵에서 인트로 및 주의사항 가져오기
      const ingTrans = transMap[ingId];
      let intro = '';
      if (lang === 'ko') {
        const koParts = koContent.split('---');
        const koBody = koParts.slice(2).join('---').trim();
        const koIntroMatch = koBody.match(/^([\s\S]*?)##\s+1\./);
        intro = koIntroMatch ? koIntroMatch[1].trim() : koBody;
        intro = intro.replace(/<div class="my-8 p-6 rounded-\[2rem\].*?<\/div>/s, '').trim();
        intro = intro.replace(/<div[\s\S]*?<\/div>/g, '').trim();
        intro = intro.replace(/<\/div>/g, '').trim();
        intro = intro.replace(/<div[^>]*>/g, '').trim();
        if (intro.endsWith('---')) intro = intro.substring(0, intro.length - 3).trim();
      } else {
        intro = ingTrans && ingTrans.intro[lang] 
          ? ingTrans.intro[lang] 
          : dict.title.replaceAll('[name]', name); // 대체값
      }

      const cautionHtmls = [];
      if (ingTrans && ingTrans.cautions) {
        ingTrans.cautions.forEach((c, idx) => {
          const cTitle = c.title[lang] || c.title['en'] || "";
          const cDesc = c.desc[lang] || c.desc['en'] || "";
          const colorClass = idx === 0 ? 'border-rose-500 bg-rose-500/5' : 'border-amber-500 bg-amber-500/5';
          cautionHtmls.push(renderCautionBox(colorClass, '⚠️', cTitle, cDesc));
        });
      }

      // 6. FAQ Yaml 및 HTML 조립
      const faqList = (specialFaqs[ingId] && specialFaqs[ingId][lang])
        ? specialFaqs[ingId][lang]
        : (specialFaqs[ingId] && specialFaqs[ingId]['en'])
          ? specialFaqs[ingId]['en']
          : storageFaqs[lang] || storageFaqs['en'];

      const faqItems = [];
      const faqsYamlList = [];

      faqList.forEach(faq => {
        const fQuestion = faq.question.replaceAll('[name]', name);
        const fAnswer = faq.answer.replaceAll('[name]', name);
        faqItems.push({ question: fQuestion, answer: fAnswer });
        faqsYamlList.push(`  - question: "${fQuestion.replace(/"/g, '\\"')}"\n    answer: "${fAnswer.replace(/"/g, '\\"')}"`);
      });

      const faqsYaml = faqsYamlList.length > 0 ? `faqs:\n${faqsYamlList.join('\n')}\n` : '';
      const faqSectionHtml = renderFaqSection(lang, faqItems);

      // 7. 최종 마크다운 조합
      const heroImageName = `${ingId.replace(/-/g, '_')}_storage_hack.png`;
      const markdown = `---
layout: "../../../layouts/BlogPostLayout.astro"
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
pubDate: "${koPubDate}"
category: "StoreSelf"
tags: ${tags}
heroImage: "/images/blog/${heroImageName}"
app: "storeself"
authority: "${authorityHtml.replace(/"/g, '\\"')}"
steps:
${stepsYaml}
${faqsYaml}---

${intro}

<div class="my-8 p-6 rounded-[2rem] border border-emerald-500/10 bg-emerald-500/5 dark:border-emerald-500/20 dark:bg-emerald-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-emerald-800 dark:text-emerald-300 m-0">
      ${dict.authTitle}
    </h5>
    <p class="text-xs text-emerald-700/80 dark:text-emerald-400/80 m-0 mt-1.5 leading-relaxed">
      ${dict.authPrefix} ${authorityHtml}.
    </p>
  </div>
</div>

---

## 1. ${dict.whyTitle}

${dict.whyDescCorrectedCorrect ? dict.whyDescCorrectedCorrect : (dict.whyDescCorrected ? dict.whyDescCorrected : dict.whyDesc)}

---

## 2. ${dict.guideTitle}

${stepCards.join('\n\n')}

---

## 3. ${dict.cautionTitle}

${cautionHtmls.join('\n\n')}
${faqSectionHtml}
`;
      const finalMarkdown = cleanMarkdown(markdown);
      fs.writeFileSync(targetPath, finalMarkdown, 'utf-8');
      compiledCount++;
    });
  });
  console.log(`[완료] 총 ${compiledCount}개의 다국어 식재료 블로그 파일이 정상적으로 빌드되었습니다!`);
}

run();
