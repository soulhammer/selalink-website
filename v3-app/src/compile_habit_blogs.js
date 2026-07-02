import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 헬퍼 및 템플릿 임포트
import { parseKoSteps, cleanMarkdown, ensureDir } from './utils/compilerHelper.js';
import { renderEvidenceBox, renderStepCard, renderTipBox, renderFaqSection } from './utils/blogTemplates.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathModule = path;
const blogRoot = path.join(__dirname, 'content/blog');
const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id', 'ko'];

const labelsPath = path.join(__dirname, 'data/blogs/compilerLabels.json');
const labels = JSON.parse(fs.readFileSync(labelsPath, 'utf-8'));

const habitsDir = path.join(__dirname, 'data/blogs/habits');
const translationData = {};
if (fs.existsSync(habitsDir)) {
  fs.readdirSync(habitsDir).forEach(file => {
    if (file.endsWith('.json')) {
      const filePath = path.join(habitsDir, file);
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      Object.assign(translationData, fileData);
    }
  });
} else {
  console.warn(`[경고] habits 디렉토리가 존재하지 않습니다: ${habitsDir}`);
}

function run() {
  let createdCount = 0;

  Object.entries(translationData).forEach(([blogSlug, data]) => {
    const koPath = pathModule.join(blogRoot, 'ko', `${blogSlug}.md`);
    if (!fs.existsSync(koPath)) {
      console.warn(`[경고] ko 원본 파일이 없습니다: ${blogSlug}.md`);
      return;
    }

    const koContent = fs.readFileSync(koPath, 'utf-8');
    
    // KO 파일에 formatVersion: 4 주입/업데이트
    let koContentUpdated = koContent;
    if (koContentUpdated.includes('formatVersion:')) {
      koContentUpdated = koContentUpdated.replace(/formatVersion:\s*\d+/, 'formatVersion: 4');
    } else {
      koContentUpdated = koContentUpdated.replace('---\n', '---\nformatVersion: 4\n');
    }
    if (koContentUpdated !== koContent) {
      fs.writeFileSync(koPath, koContentUpdated, 'utf-8');
    }

    const pubDateMatch = koContentUpdated.match(/pubDate:\s*"([^"]+)"/);
    const pubDate = pubDateMatch ? pubDateMatch[1] : '2026-06-30';
    const updatedDateMatch = koContentUpdated.match(/updatedDate:\s*"([^"]+)"/);
    const updatedDate = updatedDateMatch ? updatedDateMatch[1] : null;

    // koContent로부터 한글 STEP 명칭 및 본문 파싱 수집
    const koSteps = parseKoSteps(koContentUpdated);

    languages.forEach(lang => {
      if (lang === 'ko') return;
      const targetDir = pathModule.join(blogRoot, lang);
      const targetPath = pathModule.join(targetDir, `${blogSlug}.md`);

      ensureDir(targetDir);

      let title = data.title[lang] || data.title['en'] || "";
      let description = data.description[lang] || data.description['en'] || "";
      let authority = data.authority[lang] || data.authority['en'] || "";
      let intro = (data.intro[lang] || data.intro['en'] || "").replace(/\\n/g, '\n');
      let whyTitle = data.whyTitle[lang] || data.whyTitle['en'] || "";
      let whyDesc = (data.whyDesc[lang] || data.whyDesc['en'] || "").replace(/\\n/g, '\n');
      let cautionTitle = data.cautionTitle[lang] || data.cautionTitle['en'] || "";
      let cautionDesc = (data.cautionDesc[lang] || data.cautionDesc['en'] || "").replace(/\\n/g, '\n');

      const rawTags = lang === 'en' 
        ? ["Great Habits", blogSlug.split('-')[0], "Routine", "Stamina"]
        : [title ? title.substring(0, 10) : "Routine", "Routine"];
      const tags = JSON.stringify(rawTags);

      const steps = [];
      const stepCards = [];

      // 1.6:1 와이드 크롭 이미지가 물리적으로 존재한다면 동적으로 stepImages 바인딩 - 보조 이미지 제외 규격으로 주석 처리
      // let currentStepImages = data.stepImages;
      // if (!currentStepImages) {
      //   const detailImgName = `${blogSlug.replace(/-/g, '_')}_relax_detail.png`;
      //   const detailImgPath = `/images/blog/${detailImgName}`;
      //   const checkPath = pathModule.join(__dirname, '../public', 'images', 'blog', detailImgName);
      //   if (fs.existsSync(checkPath)) {
      //     currentStepImages = ["", detailImgPath, ""];
      //   }
      // }

      data.steps.forEach((step, idx) => {
        const stepIdx = idx + 1;
        let sName = step.name[lang] || step.name['en'] || "";
        let sText = (step.text[lang] || step.text['en'] || "").replace(/\\n/g, '\n');

        steps.push({ name: sName, text: sText });

        let imageHtml = '';
        // 보조 이미지 제외 규격으로 <img> 삽입 로직 제거
        // if (currentStepImages && currentStepImages[idx]) {
        //   imageHtml = `\n  <div class="mt-6 flex justify-center">\n    <img src="${currentStepImages[idx]}" alt="${sName}" class="rounded-2xl max-w-full h-auto border border-slate-200/50 dark:border-slate-800/50 shadow-sm" />\n  </div>`;
        // }

        stepCards.push(renderStepCard(lang, stepIdx, sName, sText, imageHtml));
      });

      const stepsYaml = steps.map(s => `  - name: "${s.name.replace(/"/g, '\\"')}"\n    text: "${s.text.replace(/"/g, '\\"')}"`).join('\n');

      let faqItems = [];
      if (data.faqs && data.faqs.length > 0) {
        faqItems = data.faqs.map(faq => {
          return {
            question: faq.question[lang] || faq.question['en'],
            answer: (faq.answer[lang] || faq.answer['en']).replace(/\\n/g, '\n')
          };
        });
      }

      const faqSection = renderFaqSection(lang, faqItems);

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
formatVersion: 4
authority: "${authority.replace(/"/g, '\\"')}"
steps:
${stepsYaml}
${faqsYaml}---

${intro}

${renderEvidenceBox(lang, authority, 'habits')}

---

## 1. ${whyTitle}

${whyDesc}

---

## 2. ${labels.habitSection2Title[lang] || labels.habitSection2Title['en']}

${stepCards.join('\n\n')}

---

## 3. ${cautionTitle}
${renderTipBox(cautionDesc)}
${faqSection}`;

      let finalFileContent = cleanMarkdown(fileContent);
      fs.writeFileSync(targetPath, finalFileContent, 'utf-8');
      createdCount++;
    });
  });

  console.log(`[완료] 총 ${createdCount}개의 다국어 BuildSelf 습관 블로그 파일이 정상적으로 생성되었습니다!`);
}

run();
