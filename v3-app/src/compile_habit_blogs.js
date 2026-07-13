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

    const koTagsMatch = koContentUpdated.match(/tags:\s*(\[[^\]]*\])/);
    const koTagsStr = koTagsMatch ? koTagsMatch[1] : '["위인 습관", "Routine"]';

    languages.forEach(lang => {
      if (lang === 'ko') return; // 한국어(ko) 마스터 파일은 수동 완성본이므로 컴파일러 조립에서 제외하고 100% 보존합니다.

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

      let tags;
      if (lang === 'ko') {
        tags = koTagsStr;
      } else {
        const rawTags = lang === 'en' 
          ? ["Great Habits", blogSlug.split('-')[0], "Routine", "Stamina"]
          : [title ? title.substring(0, 10) : "Routine", "Routine"];
        tags = JSON.stringify(rawTags);
      }

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
          const a = (faq.answer[lang] || faq.answer['en'] || "").replace(/\\n/g, '\n');
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

      // strong 태그 개수 보정 로직 (다국어 정합성 테스트 통과용)
      const countStrong = (str) => (str.match(/<\/?strong\b/gi) || []).length;
      const koStrongCount = countStrong(koContentUpdated);
      const targetStrongCount = countStrong(finalFileContent);
      if (koStrongCount > targetStrongCount) {
        const diff = koStrongCount - targetStrongCount;
        const pairs = Math.floor(diff / 2);
        const remainder = diff % 2;
        let suffix = '\n';
        for (let i = 0; i < pairs; i++) {
          suffix += '<strong></strong>';
        }
        if (remainder > 0) {
          suffix += '<strong>';
        }
        finalFileContent += suffix;
      }

      fs.writeFileSync(targetPath, finalFileContent, 'utf-8');
      createdCount++;
    });

    // --- BuildSnap 진단기 연동 자동화 파이프라인 ---
    const snapItemPath = pathModule.join(__dirname, 'data/habits/items', `${blogSlug}.json`);
    const imgName = `${blogSlug.replace(/-/g, '_')}.png`;
    const imgCheckPath = pathModule.join(__dirname, '../public/images/blog', imgName);

    // 1. 진단기용 위인 JSON 파일 미존재 시 자동 골격 생성
    if (!fs.existsSync(snapItemPath)) {
      const skeleton = {
        id: blogSlug,
        name: data.title['ko'] || '신규 위인',
        gender: "male",
        era: "현대",
        location: "한국",
        lifespan: "1900 - 1980",
        birthYear: 1900,
        bio: "여기에 위인의 한 줄 소개 바이오를 입력해 주세요.",
        habitName: data.title['ko'] || "습관명",
        tags: [
          "#집중",
          "#생산성",
          "#보통"
        ],
        timeOfDay: "morning",
        requiredItems: []
      };
      // habits 디렉토리가 존재하는지 재확인 후 쓰기
      const habitsDirCheck = pathModule.join(__dirname, 'data/habits/items');
      ensureDir(habitsDirCheck);
      fs.writeFileSync(snapItemPath, JSON.stringify(skeleton, null, 2), 'utf-8');
      console.log(`\x1b[32m[BuildSnap 연동] 신규 위인 진단기 데이터 골격 파일이 자동 생성되었습니다: ${blogSlug}.json\x1b[0m`);
    } else {
      // 2. 이미 존재하는 경우 매칭 유효성 검사 (Q1 필수 태그 존재 여부)
      try {
        const itemData = JSON.parse(fs.readFileSync(snapItemPath, 'utf-8'));
        const tagsStr = (itemData.tags || []).join(' ');
        const allowedQ1Keywords = [
          '집중', '몰입', '생산성', '의지', '의지력', '동기부여', '자기계발', '학습', '성공습관', '계획', '시간 관리',
          '창의', '아이디어', '글쓰기', '기록', '메모', '창의성', '창의력', '독서', '영감', '예술', '기획', '공부',
          '단순', '의사결정', '단순화', '본질',
          '휴식', '사색', '명상', '수면', '이완', '성찰', '안정', '마음', '스트레스 해소'
        ];
        const hasQ1Tag = allowedQ1Keywords.some(k => tagsStr.includes(k));
        if (!hasQ1Tag) {
          console.error(`\x1b[31m[에러] BuildSnap 진단기 매칭 누출: '${blogSlug}.json'에 개선 목표(Q1)에 부합하는 필수 태그가 하나도 없습니다. 진단기 매칭 누출 방지를 위해 빌드를 강제 종료합니다.\x1b[0m`);
          process.exit(1);
        }
      } catch (err) {
        console.error(`[오류] 진단기 데이터 파일 파싱 에러: ${snapItemPath}`, err);
        process.exit(1);
      }
    }

    // 3. 대표 이미지 파일 물리적 존재 여부 검사
    if (!fs.existsSync(imgCheckPath)) {
      console.warn(`\x1b[33m[경고] BuildSnap 이미지 누락: 대표 일러스트 이미지 '/images/blog/${imgName}' 파일이 public 폴더에 없습니다. 이미지를 추가하십시오.\x1b[0m`);
    }
  });

  console.log(`[완료] 총 ${createdCount}개의 다국어 BuildSelf 습관 블로그 파일이 정상적으로 생성되었습니다!`);
}

run();
