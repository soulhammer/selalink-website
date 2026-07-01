import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathModule = path;
const blogRoot = path.join(__dirname, 'content/blog');
const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id', 'ko'];

const translationData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/blogs/habits.json'), 'utf-8')
);

function run() {
  let createdCount = 0;

  Object.entries(translationData).forEach(([blogSlug, data]) => {
    const koPath = pathModule.join(blogRoot, 'ko', `${blogSlug}.md`);
    if (!fs.existsSync(koPath)) {
      console.warn(`[경고] ko 원본 파일이 없습니다: ${blogSlug}.md`);
      return;
    }

    const koContent = fs.readFileSync(koPath, 'utf-8');
    const pubDateMatch = koContent.match(/pubDate:\s*"([^"]+)"/);
    const pubDate = pubDateMatch ? pubDateMatch[1] : '2026-06-30';
    const updatedDateMatch = koContent.match(/updatedDate:\s*"([^"]+)"/);
    const updatedDate = updatedDateMatch ? updatedDateMatch[1] : null;

    // koContent로부터 한글 STEP 명칭 및 본문 파싱 수집
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

    languages.forEach(lang => {
      if (lang === 'ko') return;
      const targetDir = pathModule.join(blogRoot, lang);
      const targetPath = pathModule.join(targetDir, `${blogSlug}.md`);

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      let title = data.title[lang] || data.title['en'] || "";
      let description = data.description[lang] || data.description['en'] || "";
      let authority = data.authority[lang] || data.authority['en'] || "";
      let intro = (data.intro[lang] || data.intro['en'] || "").replace(/\\n/g, '\n');
      let whyTitle = data.whyTitle[lang] || data.whyTitle['en'] || "";
      let whyDesc = (data.whyDesc[lang] || data.whyDesc['en'] || "").replace(/\\n/g, '\n');
      let cautionTitle = data.cautionTitle[lang] || data.cautionTitle['en'] || "";
      let cautionDesc = (data.cautionDesc[lang] || data.cautionDesc['en'] || "").replace(/\\n/g, '\n');

      if (lang === 'ko') {
        const fmTitleMatch = koContent.match(/title:\s*"([^"]+)"/);
        title = fmTitleMatch ? fmTitleMatch[1] : title;

        const fmDescMatch = koContent.match(/description:\s*"([^"]+)"/);
        description = fmDescMatch ? fmDescMatch[1] : description;

        const fmAuthMatch = koContent.match(/authority:\s*"([^"]+)"/);
        authority = fmAuthMatch ? fmAuthMatch[1] : authority;

        // 인트로 추출 및 HTML 찌꺼기 제거
        const introMatch = koBodyParts.match(/^([\s\S]*?)##\s+1\./);
        if (introMatch) {
          intro = introMatch[1].trim();
          intro = intro.replace(/<div class="my-8 p-6 rounded-\[2rem\].*?<\/div>/s, '').trim();
          intro = intro.replace(/<div[\s\S]*?<\/div>/g, '').replace(/<\/div>/g, '').replace(/<div[^>]*>/g, '').trim();
        }
      }

      const rawTags = lang === 'en' 
        ? ["Great Habits", blogSlug.split('-')[0], "Routine", "Stamina"]
        : [title ? title.substring(0, 10) : "Routine", "Routine"];
      const tags = JSON.stringify(rawTags);

      const steps = [];
      const stepCards = [];

      // 1.6:1 와이드 크롭 이미지가 물리적으로 존재한다면 동적으로 stepImages 바인딩
      let currentStepImages = data.stepImages;
      if (!currentStepImages) {
        const detailImgName = `${blogSlug.replace(/-/g, '_')}_relax_detail.png`;
        const detailImgPath = `/images/blog/${detailImgName}`;
        const checkPath = pathModule.join(__dirname, '../public', 'images', 'blog', detailImgName);
        if (fs.existsSync(checkPath)) {
          currentStepImages = ["", detailImgPath, ""];
        }
      }

      data.steps.forEach((step, idx) => {
        const stepIdx = idx + 1;
        let sName = step.name[lang] || step.name['en'] || "";
        let sText = (step.text[lang] || step.text['en'] || "").replace(/\\n/g, '\n');

        if (lang === 'ko' && koSteps[idx]) {
          sName = koSteps[idx].name;
          sText = koSteps[idx].text;
        }

        steps.push({ name: sName, text: sText });

        let imageHtml = '';
        if (currentStepImages && currentStepImages[idx]) {
          imageHtml = `\n  <div class="mt-6 flex justify-center">\n    <img src="${currentStepImages[idx]}" alt="${sName}" class="rounded-2xl max-w-full h-auto border border-slate-200/50 dark:border-slate-800/50 shadow-sm" />\n  </div>`;
        }

        stepCards.push(`<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 tracking-wider">${lang === 'ko' ? '단계' : lang === 'ja' ? 'ステップ' : lang === 'zh' ? '步骤' : lang === 'fr' ? 'ÉTAPE' : lang === 'es' || lang === 'pt' ? 'PASO' : lang === 'id' ? 'LANGKAH' : lang === 'de' ? 'SCHRITT' : 'STEP'} ${stepIdx}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${sName}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${sText}
  </p>${imageHtml}
</div>`);
      });

      const stepsYaml = steps.map(s => `  - name: "${s.name.replace(/"/g, '\\"')}"\n    text: "${s.text.replace(/"/g, '\\"')}"`).join('\n');

      let faqSection = '';
      if (data.faqs && data.faqs.length > 0) {
        const faqTitle = lang === 'ko' ? '자주 묻는 질문 (FAQ)'
          : lang === 'ja' ? '\u3088\u304f\u3042\u308b\u8cea\u554f (FAQ)'
          : lang === 'zh' ? '\u5e38\u89c1\u95ee\u9898 (FAQ)'
          : lang === 'es' ? 'Preguntas Frecuentes (FAQ)'
          : lang === 'fr' ? 'Foire Aux Questions (FAQ)'
          : lang === 'de' ? 'H\u00e4ufig gestellte Fragen (FAQ)'
          : lang === 'pt' ? 'Perguntas Frequentes (FAQ)'
          : lang === 'id' ? 'Pertanyaan Sering Diajukan (FAQ)'
          : 'Frequently Asked Questions (FAQ)';

        const faqItems = data.faqs.map((faq, faqIdx) => {
          const q = faq.question[lang] || faq.question['en'];
          const a = (faq.answer[lang] || faq.answer['en']).replace(/\\n/g, '\n');
          const isOpen = faqIdx === 0 ? ' open' : '';
          const borderClass = faqIdx < data.faqs.length - 1 ? ' border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4' : '';
          return `  <details class="group${borderClass} cursor-pointer"${isOpen}>
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
      <span>${q}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">\u25bc</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${a}
    </p>
  </details>`;
        }).join('\n\n');

        faqSection = `\n---\n\n<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0 mb-6 flex items-center gap-2">
    <span>\ud83d\udccd</span> ${faqTitle}
  </h3>
  
${faqItems}
</div>\n`;
      }

      let faqsYaml = '';
      if (data.faqs && data.faqs.length > 0) {
        faqsYaml = 'faqs:\n' + data.faqs.map(faq => {
          const q = faq.question[lang] || faq.question['en'];
          const a = faq.answer[lang] || faq.answer['en'];
          return `  - question: "${q.replace(/"/g, '\\"')}"\n    answer: "${a.replace(/"/g, '\\"')}"`;
        }).join('\n') + '\n';
      }

      const fileContent = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
pubDate: "${pubDate}"
${updatedDate ? `updatedDate: "${updatedDate}"\n` : ''}category: "BuildSelf"
tags: ${tags}
heroImage: "/images/blog/${blogSlug.replace(/-/g, '_')}.png"
app: "buildself"
authority: "${authority.replace(/"/g, '\\"')}"
steps:
${stepsYaml}
${faqsYaml}---

${intro}

<div class="my-8 p-6 rounded-[2rem] border border-indigo-500/10 bg-indigo-500/5 dark:border-indigo-500/20 dark:bg-indigo-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-indigo-800 dark:text-indigo-300 m-0">
      ${lang === 'ko' ? '역사적 & 학술적 근거' : lang === 'ja' ? '歴史的＆学術的根拠' : lang === 'zh' ? '历史与学术依据' : lang === 'es' ? 'Fundamento Histórico y Académico' : lang === 'fr' ? 'Fondement Historique & Académique' : lang === 'de' ? 'Historischer & Wissenschaftlicher Beleg' : lang === 'pt' ? 'Base Histórica e Acadêmica' : lang === 'id' ? 'Bukti Sejarah & Akademik' : 'Historical & Academic Evidence'}
    </h5>
    <p class="text-xs text-indigo-700/80 dark:text-indigo-400/80 m-0 mt-1.5 leading-relaxed">
      ${lang === 'ko' ? `본 콘텐츠는 <strong>${authority}</strong>에 기반하고 있습니다.` : lang === 'ja' ? `本コンテンツは、<strong>${authority}</strong>に基づいています。` : lang === 'zh' ? `本内容基于 <strong>${authority}</strong>。` : lang === 'es' ? `Este contenido se basa en <strong>${authority}</strong>.` : lang === 'fr' ? `Ce contenu est basé sur <strong>${authority}</strong>.` : lang === 'de' ? `Dieser Inhalt basiert auf <strong>${authority}</strong>.` : lang === 'pt' ? `Este conteúdo baseia-se em <strong>${authority}</strong>.` : lang === 'id' ? `Konten ini didasarkan pada <strong>${authority}</strong>.` : `This content is based on <strong>${authority}</strong>.`}
    </p>
  </div>
</div>

---

## 1. ${whyTitle}

${whyDesc}

---

## 2. ${lang === 'ja' ? '現代人のための実践ルーティン 3段階' : lang === 'zh' ? '适合现代人的三步实践惯例' : lang === 'es' ? 'Rutina Práctica de 3 Pasos para el Profesional Moderno' : lang === 'fr' ? 'Routine Pratique en 3 Étapes pour l’Homme Moderne' : lang === 'de' ? 'Praktische 3-Schritte-Routine für den Alltag' : lang === 'pt' ? 'Rutina Prática de 3 Passos para o Profissional Moderno' : lang === 'id' ? '3 Langkah Rutinitas Praktis untuk Manusia Modern' : '3-Step Practical Routine for Modern Professionals'}

${stepCards.join('\n\n')}

---

## 3. ${cautionTitle}
<div class="my-6 p-5 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-start gap-4">
  <span class="text-xl">💡</span>
  <div>
    <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
      ${cautionDesc}
    </p>
  </div>
</div>
${faqSection}`;

      let finalFileContent = fileContent.replace(/\*\*/g, '');
      fs.writeFileSync(targetPath, finalFileContent, 'utf-8');
      createdCount++;
    });
  });

  console.log(`[완료] 총 ${createdCount}개의 다국어 BuildSelf 습관 블로그 파일이 정상적으로 생성되었습니다!`);
}

run();
