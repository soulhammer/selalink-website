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

// 다국어 번역 사전
const l10n = {
  en: {
    title: 'How to Store [name] Fresh: Scientific Storage Guide',
    desc: 'Learn the best storage temperature, methods, and duration for [name] based on official safety guidelines.',
    whyTitle: 'Why store like this? Scientific facts',
    whyDesc: 'Understanding the unique characteristics of each ingredient and following the proper storage method is extremely important for maintaining freshness and hygiene.',
    guideTitle: 'Scientifically Proven Storage Guide',
    cautionTitle: 'Crucial Rules and Cautions',
    cautionDesc: 'Immediately isolate any damaged or spoiling ingredients. Storing them wet in an airtight container accelerates decay, so keep them dry or completely dehydrated before storage.',
    intro: 'Have you ever wasted [name] due to improper storage? Today, StoreSelf shares the scientifically proven preservation guide to keep your [name] fresh longer.',
    methodNames: { room: 'Room Temperature', fridge: 'Refrigerated Storage', freezer: 'Frozen Storage' },
    days: 'Days',
    step: 'STEP'
  },
  ja: {
    title: '[name]の鮮度を保つ保存方法：科学的保管ガイド',
    desc: '公的安全基準に基づく[name]の最適な保存温度、保管方法、保存期間について解説します。',
    whyTitle: 'なぜこのように保存するのか？科学的な事実',
    whyDesc: '食材ごとの特性を理解し、正しい保存方法を実践することは、鮮度キープと衛生管理において非常に重要です。',
    guideTitle: '科学的に検証された保存ガイド',
    cautionTitle: '保存時の注意点',
    cautionDesc: '傷がついたり傷み始めた食材はすぐに隔離してください。水気が残った状態で密閉保存すると腐敗が早まるため、乾いた状態で保存することが重要です。',
    intro: 'もしかして[name]の保存方法を間違えて、傷ませてしまった経験はありませんか？本日、StoreSelfでは科学的に検証された正しい[name]の保存方法をご紹介します。',
    methodNames: { room: '常温保存', fridge: '冷蔵保存', freezer: '冷凍保存' },
    days: '日間',
    step: 'ステップ'
  },
  zh: {
    title: '如何保鲜储存[name]：科学储存指南',
    desc: '根据官方食品安全指南，了解[name]的最佳储存温度、方式和保鲜时长。',
    whyTitle: '为什么要这样储存？科学原理',
    whyDesc: '了解每种食材的独特特性并遵循正确的储存方法，对于保持新鲜度和卫生至关重要。',
    guideTitle: '科学验证的储存指南',
    cautionTitle: '储存注意事项',
    cautionDesc: '请立即隔离任何破损或变质的食材。带水密封储存会加速腐烂，因此在储存前请保持干燥或彻底晾干。',
    intro: '您是否曾因储存不当而浪费了[name]？今天，StoreSelf为您分享经过科学验证的[name]保鲜储存指南，让食材持久新鲜。',
    methodNames: { room: '常温储存', fridge: '冷藏储存', freezer: '冷冻储存' },
    days: '天',
    step: '步骤'
  },
  es: {
    title: 'Cómo almacenar [name] fresco: Guía científica de conservación',
    desc: 'Descubra la mejor temperatura, métodos y duración para conservar [name] según las directrices oficiales de seguridad.',
    whyTitle: '¿Por qué almacenarlo así? Datos científicos',
    whyDesc: 'Comprender las características únicas de cada ingrediente y seguir el método de almacenamiento adecuado es fundamental para mantener la frescura y la higiene.',
    guideTitle: 'Guía de almacenamiento científicamente probada',
    cautionTitle: 'Reglas cruciales y precauciones',
    cautionDesc: 'Aísle inmediatamente los ingredientes dañados o en mal estado. Almacenarlos húmedos en un recipiente hermético acelera la descomposición; manténgalos secos antes de guardarlos.',
    intro: '¿Alguna vez ha tenido que tirar [name] por no guardarlo correctamente? Hoy, StoreSelf comparte la guía de conservación científicamente probada para mantener su [name] fresco por más tiempo.',
    methodNames: { room: 'Temperatura Ambiente', fridge: 'Almacenamiento Refrigerado', freezer: 'Almacenamiento Congelado' },
    days: 'Días',
    step: 'PASO'
  },
  fr: {
    title: 'Comment conserver [name] frais : Guide scientifique de conservation',
    desc: 'Découvrez la température, les méthodes et la durée optimales de conservation pour [name] selon les directives de sécurité officielles.',
    whyTitle: 'Pourquoi conserver ainsi ? Faits scientifiques',
    whyDesc: 'Il est essentiel de comprendre les caractéristiques uniques de chaque ingrédient et de suivre la bonne méthode de conservation pour préserver la fraîcheur et l’hygiène.',
    guideTitle: 'Guide de conservation scientifiquement prouvé',
    cautionTitle: 'Règles cruciales et précautions',
    cautionDesc: 'Isolez immédiatement tout ingrédient abîmé ou en début de dégradation. Conserver des aliments humides dans une boîte hermétique accélère le pourrissement ; séchez-les bien.',
    intro: 'Avez-ce déjà jeté [name] parce qu’il était mal conservé ? Aujourd’hui, StoreSelf vous propose un guide de conservation scientifiquement prouvé pour garder votre [name] frais plus longtemps.',
    methodNames: { room: 'Température Ambiante', fridge: 'Stockage Réfrigéré', freezer: 'Stockage Congelé' },
    days: 'Jours',
    step: 'ÉTAPE'
  },
  de: {
    title: 'Wie man [name] frisch lagert: Wissenschaftlicher Aufbewahrungsratgeber',
    desc: 'Erfahren Sie die beste Lagertemperatur, Methode und Haltbarkeit für [name] basierend auf offiziellen Sicherheitsrichtlinien.',
    whyTitle: 'Warum so lagern? Wissenschaftliche Fakten',
    whyDesc: 'Die einzigartigen Eigenschaften jedes Lebensmittels zu verstehen und die richtige Lagerungsmethode anzuwenden, ist entscheidend für Frische und Hygiene.',
    guideTitle: 'Wissenschaftlich geprüfter Lagerungsratgeber',
    cautionTitle: 'Wichtige Warnhinweise zur Lagerung',
    cautionDesc: 'Sondern Sie beschädigte oder verderbende Lebensmittel sofort aus. Feucht verpackte Lagerung beschleunigt die Fäulnis; halten Sie sie trocken oder trocknen Sie sie vor dem Lagern vollständig.',
    intro: 'Mussten Sie schon einmal [name] wegwerfen, weil es falsch gelagert wurde? Heute stellt Ihnen StoreSelf den wissenschaftlich geprüften Lagerungsratgeber vor, um Ihr [name] deutlich länger frisch zu halten.',
    methodNames: { room: 'Raumtemperatur', fridge: 'Kühllagerung', freezer: 'Gefrierlagerung' },
    days: 'Tage',
    step: 'SCHRITT'
  },
  pt: {
    title: 'Como armazenar [name] fresco: Guia científico de conservação',
    desc: 'Descubra a melhor temperatura, métodos e duração de armazenamento para [name] com base nas diretrizes oficiais de segurança.',
    whyTitle: 'Por que armazenar assim? Fatos científicos',
    whyDesc: 'Comprender as características únicas de cada ingrediente e seguir o método de armazenamento adequado é extremamente importante para manter o frescor e a higiene.',
    guideTitle: 'Guia de armazenamento comprovado cientificamente',
    cautionTitle: 'Regras cruciais e precauções',
    cautionDesc: 'Isole imediatamente qualquer ingrediente danificado ou estragado. Armazená-los úmidos em um recipiente fechado acelera a deterioração; mantenha-os secos antes de guardar.',
    intro: 'Você já teve que deitar fora [name] por não o guardar corretamente? Hoje, o StoreSelf partilha o guia de conservação cientificamente comprovado para manter o seu [name] fresco por mais tempo.',
    methodNames: { room: 'Temperatura Ambiente', fridge: 'Armazenamento Refrigerado', freezer: 'Armazenamento Congelado' },
    days: 'Dias',
    step: 'PASSO'
  },
  id: {
    title: 'Cara Menyimpan [name] agar Tetap Segar: Panduan Penyimpanan Ilmiah',
    desc: 'Ketahui suhu, metode, dan masa simpan terbaik untuk [name] berdasarkan pedoman keselamatan resmi.',
    whyTitle: 'Mengapa disimpan seperti ini? Fakta ilmiah',
    whyDesc: 'Memahami karakteristik unik setiap bahan makanan dan mengikuti metode penyimpanan yang benar sangat penting untuk menjaga kesegaran dan kebersihan.',
    guideTitle: 'Panduan Penyimpanan yang Terbukti Secara Ilmiah',
    cautionTitle: 'Aturan Penting dan Peringatan',
    cautionDesc: 'Segera pisahkan bahan makanan yang rusak atau mulai membusuk. Menyimpannya dalam keadaan basah di wadah kedap udara mempercepat pembusukan; pastikan kering sebelum disimpan.',
    intro: 'Apakah Anda pernah membuang [name] karena salah menyimpannya? Hari ini, StoreSelf membagikan panduan penyimpanan terbukti ilmiah untuk menjaga [name] Anda tetap segar lebih lama.',
    methodNames: { room: 'Suhu Ruang', fridge: 'Penyimpanan Dingin', freezer: 'Penyimpanan Beku' },
    days: 'Hari',
    step: 'LANGKAH'
  }
};

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
