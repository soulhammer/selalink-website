import fs from 'fs';
import pathModule from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { cleanMarkdown } from './utils/compilerHelper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathModule.dirname(__filename);

const habitsDir = pathModule.join(__dirname, 'data/blogs/habits');
const blogRootDir = pathModule.join(__dirname, 'content/blog');

const locales = ['ko', 'en', 'zh', 'ja', 'es', 'fr', 'de', 'pt', 'id'];

// 역사적 메타데이터 보존 맵 구축 (c7523675 및 3a61e460 커밋 연쇄 검상)
const historyMetaMap = {};
try {
  const jsonFiles = fs.readdirSync(habitsDir).filter(f => f.endsWith('.json'));
  jsonFiles.forEach(file => {
    const slug = file.replace('.json', '');
    let gitContent = null;
    try {
      gitContent = execSync(`git show c7523675:apps/studio/src/content/blog/ko/${slug}.md`, {
        encoding: 'utf-8',
        stdio: ['pipe', 'pipe', 'ignore']
      });
    } catch (e) {
      try {
        gitContent = execSync(`git show 3a61e460:apps/studio/src/content/blog/ko/${slug}.md`, {
          encoding: 'utf-8',
          stdio: ['pipe', 'pipe', 'ignore']
        });
      } catch (err) {}
    }

    if (gitContent) {
      const pubMatch = gitContent.match(/pubDate:\s*"([^"]+)"/);
      const upMatch = gitContent.match(/updatedDate:\s*"([^"]+)"/);
      const heroMatch = gitContent.match(/heroImage:\s*"([^"]+)"/);
      const tagsMatch = gitContent.match(/tags:\s*(\[[\s\S]*?\])/);

      historyMetaMap[slug] = {
        pubDate: pubMatch ? pubMatch[1] : null,
        updatedDate: upMatch ? upMatch[1] : null,
        heroImage: heroMatch ? heroMatch[1] : null,
        tags: tagsMatch ? tagsMatch[1] : null
      };
    } else {
      // 커밋 기록에 없는 경우 디스크 상의 기존 KO md 파일에서 추출
      const diskKoPath = pathModule.join(blogRootDir, 'ko', `${slug}.md`);
      if (fs.existsSync(diskKoPath)) {
        const content = fs.readFileSync(diskKoPath, 'utf-8');
        const pubMatch = content.match(/pubDate:\s*"([^"]+)"/);
        const upMatch = content.match(/updatedDate:\s*"([^"]+)"/);
        const heroMatch = content.match(/heroImage:\s*"([^"]+)"/);
        const tagsMatch = content.match(/tags:\s*(\[[\s\S]*?\])/);

        historyMetaMap[slug] = {
          pubDate: pubMatch ? pubMatch[1] : null,
          updatedDate: upMatch ? upMatch[1] : null,
          heroImage: heroMatch ? heroMatch[1] : null,
          tags: tagsMatch ? tagsMatch[1] : null
        };
      }
    }
  });
} catch (e) {
  console.warn('⚠️ [경고] 역사적 메타데이터 맵 구축 중 일부분 추출 스킵:', e.message);
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function renderEvidenceBox(lang, authority, blogSlug = '') {
  const titles = {
    ko: '역사적 및 학술적 근거',
    en: 'Historical & Academic Evidence',
    zh: '历史 and 学术依据',
    ja: '歴史的・学術的根拠',
    es: 'Fundamento Histórico y Académico',
    fr: 'Fondement Historique et Académique',
    de: 'Historische und akademische Grundlage',
    pt: 'Fundamentação Histórica e Académica',
    id: 'Landasan Historis dan Akademis'
  };

  const templates = {
    ko: `본 콘텐츠는 <strong>${authority}</strong>에 근거하여 ${blogSlug} 루틴을 다룹니다.`,
    en: `This analysis regarding ${blogSlug} is based on <strong>${authority}</strong>.`,
    zh: '关于 ' + blogSlug + ' 的内容基于 <strong>' + authority + '</strong> 撰写。',
    ja: '「' + blogSlug + '」は <strong>' + authority + '</strong> に基づいて作成されました。',
    es: `El análisis sobre ${blogSlug} se basa en <strong>${authority}</strong>.`,
    fr: `L'analyse concernant ${blogSlug} est basée sur <strong>${authority}</strong>.`,
    de: `Die Analyse zu ${blogSlug} basiert auf <strong>${authority}</strong>.`,
    pt: `A análise sobre ${blogSlug} é baseada em <strong>${authority}</strong>.`,
    id: `Analisis mengenai ${blogSlug} didasarkan pada <strong>${authority}</strong>.`
  };

  const titleText = titles[lang] || titles['en'];
  const bodyHtml = templates[lang] || templates['en'];

  return `<div class="my-8 p-6 rounded-[2rem] border border-indigo-500/10 bg-indigo-500/5 dark:border-indigo-500/20 dark:bg-indigo-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-indigo-800 dark:text-indigo-300 m-0">
      ${titleText}
    </h5>
    <p class="text-xs text-indigo-700/80 dark:text-indigo-400/80 m-0 mt-1.5 leading-relaxed">
      ${bodyHtml}
    </p>
  </div>
</div>`;
}

function renderFaqSection(lang, faqs) {
  if (!faqs || faqs.length === 0) return '';

  const sectionTitles = {
    ko: '자주 묻는 질문 (FAQ)',
    en: 'Frequently Asked Questions (FAQ)',
    zh: '常见问题 (FAQ)',
    ja: 'よくある質問 (FAQ)',
    es: 'Preguntas Frecuentes (FAQ)',
    fr: 'Foire Aux Questions (FAQ)',
    de: 'Häufig gestellte Fragen (FAQ)',
    pt: 'Perguntas Frecuentes (FAQ)',
    id: 'Pertanyaan Sering Diajukan (FAQ)'
  };

  const sectionTitle = sectionTitles[lang] || sectionTitles['en'];

  let itemsHtml = faqs.map((faq, index) => `  <details class="group cursor-pointer"${index === 0 ? ' open' : ''}>
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none" role="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
      <span>${faq.q}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${faq.a}
    </p>
  </details>`).join('\n  <div class="my-4 border-t border-slate-100 dark:border-slate-800/60"></div>\n');

  return `<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0 mb-6 flex items-center gap-2">
    <span>📌</span> ${sectionTitle}
  </h3>
  
${itemsHtml}
</div>`;
}

function compileBlogs() {
  console.log('🚀 [BuildSelf 습관 블로그 단방향 파이프라인] 다국어 마크다운 빌드 가동...\n');
  const files = fs.readdirSync(habitsDir).filter(f => f.endsWith('.json'));

  let totalGenerated = 0;

  files.forEach(file => {
    const filePath = pathModule.join(habitsDir, file);
    let rawText = fs.readFileSync(filePath, 'utf-8').trim();
    if (rawText.startsWith('ewog')) {
      rawText = Buffer.from(rawText, 'base64').toString('utf-8');
    }
    const rawData = JSON.parse(rawText);
    const blogSlug = file.replace('.json', '');
    const data = rawData[blogSlug] || rawData[Object.keys(rawData)[0]];

    if (!data) return;

    const histMeta = historyMetaMap[blogSlug] || {};
    const pubDate = data.pubDate || histMeta.pubDate || "2026-06-19";
    const updatedDate = data.updatedDate || histMeta.updatedDate || pubDate;

    // heroImage 확장자 스마트 판단 (.webp 우선 보존)
    const relWebpPath = `/images/blog/${blogSlug.replace(/-/g, '_')}.webp`;
    const relPngPath = `/images/blog/${blogSlug.replace(/-/g, '_')}.png`;
    const absWebpPath = pathModule.join(__dirname, '../public', relWebpPath);
    
    let heroImage = data.heroImage || histMeta.heroImage;
    if (!heroImage) {
      heroImage = fs.existsSync(absWebpPath) ? relWebpPath : relPngPath;
    }

    const defaultKoTags = histMeta.tags || JSON.stringify(data.tags?.['ko'] || ["위습관", "루틴"]);

const isStrict = process.argv.includes('--strict') || process.env.CI === 'true';

locales.forEach(lang => {
  const targetDir = pathModule.join(blogRootDir, lang);
  ensureDir(targetDir);

  if (isStrict && (!data.title?.[lang] || !data.description?.[lang] || !data.intro?.[lang])) {
    throw new Error(`🚨 [STRICT ERR] ${file}: 타겟 언어 [${lang.toUpperCase()}]의 필수 다국어 데이터가 누락되었습니다.`);
  }

  let title = data.title?.[lang] || data.title?.['en'] || data.title?.['ko'] || "";
  let description = data.description?.[lang] || data.description?.['en'] || data.description?.['ko'] || "";
  let authority = data.authority?.[lang] || data.authority?.['en'] || data.authority?.['ko'] || "";
  let intro = cleanMarkdown(data.intro?.[lang] || data.intro?.['en'] || data.intro?.['ko'] || "").replace(/\\n/g, '\n');
  let whyTitle = data.whyTitle?.[lang] || data.whyTitle?.['en'] || data.whyTitle?.['ko'] || "";
  let whyDesc = cleanMarkdown(data.whyDesc?.[lang] || data.whyDesc?.['en'] || data.whyDesc?.['ko'] || "").replace(/\\n/g, '\n');
  let cautionTitle = data.cautionTitle?.[lang] || data.cautionTitle?.['en'] || data.cautionTitle?.['ko'] || "";
  let cautionDesc = cleanMarkdown(data.cautionDesc?.[lang] || data.cautionDesc?.['en'] || data.cautionDesc?.['ko'] || "").replace(/\\n/g, '\n');

      let tags;
      if (data.tags?.[lang]) {
        tags = JSON.stringify(data.tags[lang]);
      } else if (lang === 'ko') {
        tags = defaultKoTags;
      } else {
        tags = '[]';
      }

      const steps = [];
      const stepCards = [];

      const stepLabels = {
        ko: 'STEP',
        en: 'STEP',
        zh: '步骤',
        ja: 'ステップ',
        es: 'PASO',
        fr: 'ÉTAPE',
        de: 'SCHRITT',
        pt: 'PASSO',
        id: 'LANGKAH'
      };

      const stepLabel = stepLabels[lang] || stepLabels['en'];

      if (data.steps && Array.isArray(data.steps)) {
        data.steps.forEach((step, idx) => {
          const stepName = step.name?.[lang] || step.name?.['en'] || step.name?.['ko'] || '';
          const stepText = cleanMarkdown(step.text?.[lang] || step.text?.['en'] || step.text?.['ko'] || '').replace(/\\n/g, '\n');

          steps.push({ name: stepName, text: stepText });

          stepCards.push(`<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 tracking-wider">${stepLabel} ${idx + 1}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${stepName}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${stepText}
  </p>
</div>`);
        });
      }

      const stepsYaml = steps.length > 0
        ? 'steps:\n' + steps.map(s => `  - name: "${s.name.replace(/"/g, '\\"')}"\n    text: "${s.text.replace(/"/g, '\\"')}"`).join('\n')
        : 'steps: []';

      const faqItems = [];
      if (data.faqs && Array.isArray(data.faqs)) {
        data.faqs.forEach(faq => {
          const q = faq.question?.[lang] || faq.question?.['en'] || faq.question?.['ko'] || '';
          const a = cleanMarkdown(faq.answer?.[lang] || faq.answer?.['en'] || faq.answer?.['ko'] || '').replace(/\\n/g, '\n');
          faqItems.push({ q, a });
        });
      }

      const faqSection = renderFaqSection(lang, faqItems);

      let faqsYaml = 'faqs: []';
      if (data.faqs && data.faqs.length > 0) {
        faqsYaml = 'faqs:\n' + data.faqs.map(faq => {
          const q = faq.question?.[lang] || faq.question?.['en'] || faq.question?.['ko'] || '';
          const a = (faq.answer?.[lang] || faq.answer?.['en'] || faq.answer?.['ko'] || '').replace(/\\n/g, '\n');
          return `  - question: "${q.replace(/"/g, '\\"')}"\n    answer: "${a.replace(/"/g, '\\"')}"`;
        }).join('\n');
      }

      const fileContent = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
pubDate: "${pubDate}"
${updatedDate ? `updatedDate: "${updatedDate}"\n` : ''}category: "BuildSelf"
tags: ${tags}
heroImage: "${heroImage}"
app: "buildself"
formatVersion: 4
authority: "${authority.replace(/"/g, '\\"')}"
${stepsYaml}
${faqsYaml}
---

${intro}

${renderEvidenceBox(lang, authority, blogSlug)}

---

## ${whyTitle}

${whyDesc}

---

## ${cautionTitle}

${cautionDesc}

${stepCards.join('\n\n')}

${faqSection}
`;

      const targetFile = pathModule.join(targetDir, `${blogSlug}.md`);
      fs.writeFileSync(targetFile, fileContent.trim() + '\n', 'utf-8');
      totalGenerated++;
    });
  });

  console.log(`[완료] 총 ${totalGenerated}개의 다국어 BuildSelf 습관 블로그 파일이 정상적으로 생성되었습니다!\n`);
}

compileBlogs();
