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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, 'content/blog');
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

const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

// 공용 템플릿 번역 사전
const l10n = {
  en: {
    title: 'How to Store [name] Fresh: Scientific Storage Guide',
    desc: 'Learn the best storage temperature, methods, and duration for [name] based on official safety guidelines.',
    whyTitle: 'Why store like this? Scientific facts',
    whyDesc: 'Understanding the unique characteristics of each ingredient and following the proper storage method is extremely important for maintaining freshness and hygiene.',
    guideTitle: 'Scientifically Proven Storage Guide',
    cautionTitle: 'Crucial Rules and Cautions',
    methodNames: { room: 'Room Temperature', fridge: 'Refrigerated Storage', freezer: 'Frozen Storage' },
    days: 'Days',
    step: 'STEP',
    authPrefix: 'This storage guide is verified based on official guidelines from the'
  },
  ja: {
    title: '[name]の鮮度를 保つ保存方法：科学的保管ガイド', // 번역 교정 적용
    titleCorrected: '[name]の鮮度を保つ保存方法：科学的保管ガイド',
    desc: '公的安全基準に基づく[name]の最適な保存温度、保管方法、保存期間について解説します。',
    whyTitle: 'なぜこのように保存するのか？科学的な事実',
    whyDesc: '食材ごとの特性를 理解し、正しい保存方法を実践することは、鮮度キープと衛生管理において非常に重要です。',
    whyDescCorrected: '食材ごとの特性を理解し、正しい保存方法を実践することは、鮮度キープと衛生管理において非常に重要です。',
    guideTitle: '科学的に検証された保存ガイド',
    cautionTitle: '保存時の注意点',
    methodNames: { room: '常温保存', fridge: '冷蔵保存', freezer: '冷凍保存' },
    days: '日間',
    step: 'ステップ',
    authPrefix: '本ガイドは、公認された食品衛生および保管ガイドラインを遵守して作成されました。'
  },
  zh: {
    title: '如何保鲜储存[name]：科学储存指南',
    desc: '根据官方食品安全指南，了解[name]的最佳储存温度、方式和保鲜时长。',
    whyTitle: '为什么要这样储存？科学原理',
    whyDesc: '了解每种食材的独特特性并遵循正确的储存方法，对于保持新鲜度和卫生至关重要。',
    guideTitle: '科学验证的储存指南',
    cautionTitle: '储存注意事项',
    methodNames: { room: '常温储存', fridge: '冷藏储存', freezer: '冷冻储存' },
    days: '天',
    step: '步骤',
    authPrefix: '本指南严格遵守以下机构公认的食品安全与储存指南：'
  },
  es: {
    title: 'Cómo almacenar [name] fresco: Guía científica de conservación',
    desc: 'Descubra la mejor temperatura, métodos y duración para conservar [name] según las directrices oficiales de seguridad.',
    whyTitle: '¿Por qué almacenarlo así? Datos científicos',
    whyDesc: 'Comprender las características únicas de cada ingrediente y seguir el método de almacenamiento adecuado es fundamental para mantener la frescura y la higiene.',
    guideTitle: 'Guía de almacenamiento científicamente probada',
    cautionTitle: 'Reglas cruciales y precauciones',
    methodNames: { room: 'Temperatura Ambiente', fridge: 'Almacenamiento Refrigerado', freezer: 'Almacenamiento Congelado' },
    days: 'Días',
    step: 'PASO',
    authPrefix: 'Esta guía de conservación cumple con las directrices oficiales de:'
  },
  fr: {
    title: 'Comment conserver [name] frais : Guide scientifique de conservation',
    desc: 'Découvrez la température, les méthodes et la durée optimales de conservation pour [name] selon les directives de sécurité officielles.',
    whyTitle: 'Pourquoi conserver ainsi ? Faits scientifiques',
    whyDesc: 'Il est essentiel de comprendre les caractéristiques uniques de chaque ingrédient et de suivre la bonne méthode de conservation pour préserver la fraîcheur et l’hygiène.',
    guideTitle: 'Guide de conservation scientifiquement prouvé',
    cautionTitle: 'Règles cruciales et précautions',
    methodNames: { room: 'Température Ambiante', fridge: 'Stockage Réfrigéré', freezer: 'Stockage Congelé' },
    days: 'Jours',
    step: 'ÉTAPE',
    authPrefix: 'Ce guide de conservation est basé sur les directives officielles de :'
  },
  de: {
    title: 'Wie man [name] frisch lagert: Wissenschaftlicher Aufbewahrungsratgeber',
    desc: 'Erfahren Sie die beste Lagertemperatur, Methode und Haltbarkeit für [name] basierend auf offiziellen Sicherheitsrichtlinien.',
    whyTitle: 'Warum so lagern? Wissenschaftliche Fakten',
    whyDesc: 'Die einzigartigen Eigenschaften jedes Lebensmittels zu verstehen und die richtige Lagerungsmethode anzuwenden, ist entscheidend für Frische und Hygiene.',
    guideTitle: 'Wissenschaftlich geprüfter Lagerungsratgeber',
    cautionTitle: 'Wichtige Warnhinweise zur Lagerung',
    methodNames: { room: 'Raumtemperatur', fridge: 'Kühllagerung', freezer: 'Gefrierlagerung' },
    days: 'Tage',
    step: 'SCHRITT',
    authPrefix: 'Dieser Leitfaden entspricht den offiziellen Richtlinien von:'
  },
  pt: {
    title: 'Como armazenar [name] fresco: Guia científico de conservação',
    desc: 'Descubra la mejor temperatura, métodos y duración de almacenamiento para [name] con base nas diretrizes oficiais de segurança.',
    whyTitle: 'Por que armazenar assim? Fatos científicos',
    whyDesc: 'Compreender as características únicas de cada ingrediente e seguir o método de armazenamento adequado é extremamente importante para manter o frescor e a higiene.',
    guideTitle: 'Guia de armazenamento comprovado cientificamente',
    cautionTitle: 'Regras cruciais e precauções',
    methodNames: { room: 'Temperatura Ambiente', fridge: 'Armazenamento Refrigerado', freezer: 'Armazenamento Congelado' },
    days: 'Dias',
    step: 'PASSO',
    authPrefix: 'Este guia de conservação segue as diretrizes oficiais de:'
  },
  id: {
    title: 'Cara Menyimpan [name] agar Tetap Segar: Panduan Penyimpanan Ilmiah',
    desc: 'Ketahui suhu, metode, dan masa simpan terbaik untuk [name] berdasarkan pedoman keselamatan resmi.',
    whyTitle: 'Mengapa disimpan seperti ini? Fakta ilmiah',
    whyDesc: 'Memahami karakteristik unik setiap bahan makanan dan mengikuti metode penyimpanan yang benar sangat penting untuk menjaga kesegaran dan kebersihan.',
    guideTitle: 'Panduan Penyimpanan yang Terbukti Secara Ilmiah',
    cautionTitle: 'Aturan Penting dan Peringatan',
    methodNames: { room: 'Suhu Ruang', fridge: 'Penyimpanan Dingin', freezer: 'Penyimpanan Beku' },
    days: 'Hari',
    step: 'LANGKAH',
    authPrefix: 'Panduan penyimpanan ini didasarkan pada pedoman keselamatan resmi dari:'
  }
};

const sourceMapLang = {
  en: { 'USDA': 'USDA', 'FDA': 'FDA', 'WHO': 'WHO', 'MFDS': 'MFDS', 'RDA': 'RDA', 'NIFS': 'NIFS', 'KCA': 'KCA', 'CDC': 'CDC', 'FSA': 'FSA', 'EFSA': 'EFSA' },
  ja: { 'USDA': '米国農務省(USDA)', 'FDA': '米国食品医薬品局(FDA)', 'WHO': '世界保健機関(WHO)', 'MFDS': '食品医薬品安全処(MFDS)', 'RDA': '農村振興庁(RDA)', 'NIFS': '国立水産科学部(NIFS)', 'KCA': '韓国消費者院(KCA)', 'CDC': 'CDC', 'FSA': 'FSA', 'EFSA': 'EFSA' },
  zh: { 'USDA': '美国农务部(USDA)', 'FDA': '美国食品药品监督管理局(FDA)', 'WHO': '世界卫生组织(WHO)', 'MFDS': '韩国食品医药品安全处(MFDS)', 'RDA': '韩国农村振兴厅(RDA)', 'NIFS': '韩国国立水产科学部(NIFS)', 'KCA': '韩国消费者院(KCA)', 'CDC': 'CDC', 'FSA': 'FSA', 'EFSA': 'EFSA' }
};

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
    const ing = allIngredients.find(i => i.id === ingId);
    if (!ing) {
      console.warn(`[경고] 식재료 ID 없음: ${ingId}`);
      return;
    }

    // 한국어 마스터 블로그로부터 STEP 수집 (h4와 p 태그 이용)
    const koSteps = [];
    const stepRegex = /<h4[^>]*>([\s\S]*?)<\/h4>\s*<\/div>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
    let koMatch;
    const koBodyParts = koContent.split('---').slice(2).join('---');
    while ((koMatch = stepRegex.exec(koBodyParts)) !== null) {
      koSteps.push({
        name: koMatch[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(),
        text: koMatch[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
      });
    }

    // 2. 다국어 폴더에 컴파일 적용
    languages.forEach(lang => {
      const targetDir = path.join(blogRoot, lang);
      const targetPath = path.join(targetDir, `${blogSlug}.md`);

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // 사과와 바나나의 경우 이미 수동으로 작성된 고품질 번역본이 있으므로, 본문 덮어쓰기 금지
      if (blogSlug === 'how-to-store-apples' || blogSlug === 'how-to-store-bananas') {
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

            const finalContent = `---${originalFrontmatter}---${originalBody}`;
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

        stepCards.push(`<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20 tracking-wider">${dict.step} ${stepIdx}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${translatedName}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${translatedText}
  </p>
</div>`);
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
      const authorityHtml = `<strong>${transSources.join(' & ')}</strong>`;

      // 5. 번역 맵에서 인트로 및 주의사항 가져오기
      const ingTrans = transMap[ingId];
      const intro = ingTrans && ingTrans.intro[lang] 
        ? ingTrans.intro[lang] 
        : dict.title.replaceAll('[name]', name); // 대체값

      const cautionHtmls = [];
      if (ingTrans && ingTrans.cautions) {
        ingTrans.cautions.forEach((c, idx) => {
          const cTitle = c.title[lang];
          const cDesc = c.desc[lang];
          const colorClass = idx === 0 ? 'border-rose-500 bg-rose-500/5' : 'border-amber-500 bg-amber-500/5';
          cautionHtmls.push(`<div class="my-6 p-5 rounded-2xl border-l-4 ${colorClass} flex items-start gap-4">
  <span class="text-xl">⚠️</span>
  <div>
    <strong class="text-slate-950 dark:text-white font-extrabold block mb-1">${cTitle}</strong>
    <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
      ${cDesc}
    </p>
  </div>
</div>`);
        });
      }

      // 최종 마크다운 조립
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

<div class="my-8 p-6 rounded-[2rem] border border-emerald-500/10 bg-emerald-500/5 dark:border-emerald-500/20 dark:bg-emerald-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-emerald-800 dark:text-emerald-300 m-0">
      Verified Scientific Authority
    </h5>
    <p class="text-xs text-emerald-700/80 dark:text-emerald-400/80 m-0 mt-1.5 leading-relaxed">
      ${dict.authPrefix} ${authorityHtml}.
    </p>
  </div>
</div>

---

## 1. ${dict.whyTitle}

${dict.whyDescCorrected ? dict.whyDescCorrected : dict.whyDesc}

---

## 2. ${dict.guideTitle}

${stepCards.join('\n\n')}

---

## 3. ${dict.cautionTitle}

${cautionHtmls.join('\n\n')}
`;

      fs.writeFileSync(targetPath, newContent, 'utf-8');
      compiledCount++;
    });
  });

  console.log(`[완료] 총 ${compiledCount}개의 다국어 마크다운 블로그 파일이 완벽하게 2단계 동기화 컴파일 완료되었습니다!`);
}

run();
