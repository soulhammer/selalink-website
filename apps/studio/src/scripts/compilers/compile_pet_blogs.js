import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { cleanMarkdown } from '../../utils/compilerHelper.js';
import { 
  renderEvidenceBox, 
  renderPetStepCard, 
  renderPetRoutineCard, 
  renderTipBox, 
  renderFaqSection
} from '../../utils/blogTemplates.js';
import { compileMasterJsonCollection } from './compile_blog_base.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, '../../content/blog');
const petsDir = path.join(__dirname, '../../data/blogs/pets');
const metaPath = path.join(petsDir, '_meta.json');

if (!fs.existsSync(metaPath)) {
  console.error(`❌ [ERR] _meta.json 파일이 존재하지 않습니다: ${metaPath}`);
  process.exit(1);
}

function renderLocaleMarkdown({ blogSlug, lang, data, histMeta }) {
  const master = data;
  const enData = master.locales?.['en'] || master.locales?.['ko'] || {};
  const locData = master.locales?.[lang] || enData;

  const title = locData.title || enData.title || '';
  const desc = locData.description || enData.description || '';
  const auth = locData.authority || enData.authority || '';
  const intro = locData.intro || enData.intro || '';

  const profile = locData.profile || enData.profile || {};
  const pBreed = profile.breed || '';
  const pLifespan = profile.lifespan || '';
  const pSleep = profile.sleep_pattern || '';
  const pNutr = profile.nutrition || '';
  const pTraits = profile.key_traits || [];

  const safeClean = (txt) => typeof txt === 'string' ? cleanMarkdown(txt) : (txt ? cleanMarkdown(String(txt)) : '');

  const step1Title = locData.whyTitle || enData.whyTitle || '';
  const step1Text = safeClean(locData.whyDesc || enData.whyDesc || '');

  const signals = (locData.body_signals && locData.body_signals.length > 0) ? locData.body_signals : (enData.body_signals || []);
  const routines = (locData.daily_routine && locData.daily_routine.length > 0) ? locData.daily_routine : (enData.daily_routine || []);

  const stepTitlesMap = {
    ko: {
      step2: (b) => `${b}의 몸짓 언어와 바디 시그널`,
      step3: (b) => `${b} 맞춤형 3단계 홈케어 루틴`
    },
    en: {
      step2: (b) => `${b}'s Body Language & Behavioral Signals`,
      step3: (b) => `Customized 3-Step Home Care Routine for ${b}`
    },
    zh: {
      step2: (b) => `${b} 的肢体语言与行为信号`,
      step3: (b) => `${b} 定制化 3 步家庭护理流程`
    },
    ja: {
      step2: (b) => `${b}のボディランゲージと行動サイン`,
      step3: (b) => `${b}のための3ステップホームケアルーティン`
    },
    es: {
      step2: (b) => `Lenguaje corporal y señales de conducta de ${b}`,
      step3: (b) => `Rutina diaria de 3 pasos para el cuidado de ${b}`
    },
    fr: {
      step2: (b) => `Langage corporel et signaux comportementaux du ${b}`,
      step3: (b) => `Routine quotidienne en 3 étapes pour le soin du ${b}`
    },
    de: {
      step2: (b) => `Körpersprache und Verhaltenssignale von ${b}`,
      step3: (b) => `Maßgeschneiderte 3-Schritte-Tagesroutine für ${b}`
    },
    pt: {
      step2: (b) => `Linguagem corporal e sinais de comportamento do ${b}`,
      step3: (b) => `Rotina diária de 3 passos para cuidados com ${b}`
    },
    id: {
      step2: (b) => `Bahasa Tubuh dan Sinyal Perilaku ${b}`,
      step3: (b) => `Rutinitas Perawatan Harian 3 Langkah untuk ${b}`
    }
  };

  const curStepTitleMap = stepTitlesMap[lang] || stepTitlesMap['en'];
  const step2Title = curStepTitleMap.step2(pBreed);
  const step2Text = signals.map(s => {
    const sName = s.name || s.signal || '';
    const sMeaning = s.meaning || s.description || s.desc || '';
    const sResponse = s.response || s.action || s.solution || '';
    return `* ${sName}: ${sMeaning}${sResponse ? ` (${sResponse})` : ''}`;
  }).join('\n\n');

  const step3Title = curStepTitleMap.step3(pBreed);
  const step3Text = routines.map((r, idx) => {
    const rTitle = r.title || r.name || `STEP ${idx + 1}`;
    const rContent = r.content || r.text || r.desc || r.description || '';
    return `* STEP ${idx + 1}. ${rTitle}: ${rContent}`;
  }).join('\n\n');

  const tipsList = locData.pro_tips || enData.pro_tips || [];
  const tip1Text = safeClean(tipsList[0] || '');
  const tip2Text = safeClean(tipsList[1] || '');

  const faqItems = (locData.faqs || enData.faqs || []).map(item => ({
    question: String(item.q || item.question || ''),
    answer: safeClean(String(item.a || item.answer || '')).replace(/\\n/g, '\n')
  }));

  const stepsYaml = `steps:
  - name: "${step1Title.replace(/"/g, '\\"')}"
    text: "${step1Text.replace(/"/g, '\\"')}"
  - name: "${step2Title.replace(/"/g, '\\"')}"
    text: "${step2Text.replace(/"/g, '\\"')}"
  - name: "${step3Title.replace(/"/g, '\\"')}"
    text: "${step3Text.replace(/"/g, '\\"')}"`;

  const faqsYaml = faqItems.length > 0
    ? 'faqs:\n' + faqItems.map(f => `  - question: "${f.question.replace(/"/g, '\\"')}"\n    answer: "${f.answer.replace(/"/g, '\\"')}"`).join('\n')
    : '';

  const pubDate = master.pubDate || histMeta.pubDate || "2026-06-19";
  const updatedDate = master.updatedDate || histMeta.updatedDate || pubDate;
  const heroImage = master.heroImage || histMeta.heroImage || `/images/blog/${blogSlug.replace(/-/g, '_')}.webp`;

  const labelsMap = {
    ko: { meaning: '의미', response: '대처법', signal: '바디 시그널' },
    en: { meaning: 'Meaning', response: 'Response', signal: 'Body Signal' },
    zh: { meaning: '含义', response: '应对', signal: '肢体信号' },
    ja: { meaning: '意味', response: '対処法', signal: 'ボディシグナル' },
    es: { meaning: 'Significado', response: 'Respuesta', signal: 'Señal Corporal' },
    fr: { meaning: 'Signification', response: 'Reponse', signal: 'Signal Corporel' },
    de: { meaning: 'Bedeutung', response: 'Reaktion', signal: 'Körpersignal' },
    pt: { meaning: 'Significado', response: 'Resposta', signal: 'Sinal Corporal' },
    id: { meaning: 'Arti', response: 'Tindakan', signal: 'Sinyal Tubuh' }
  };
  const curLabels = labelsMap[lang] || labelsMap['en'];

  const evidenceBoxHtml = renderEvidenceBox(lang, auth, 'petself');
  const step1CardHtml = renderPetRoutineCard(lang, 1, step1Title, step1Text);

  let step2CardHtml = '';
  if (signals.length > 0) {
    step2CardHtml = signals.map((sig, idx) => {
      const sigName = sig.name || sig.signal || pBreed;
      const sigMeaning = sig.meaning || sig.description || sig.desc || '';
      const sigResponse = sig.response || sig.action || sig.solution || '';
      return renderPetStepCard(
        lang, idx + 1, curLabels.signal, sigName, 
        curLabels.meaning, sigMeaning, 
        curLabels.response, sigResponse
      );
    }).join('\n\n');
  } else {
    step2CardHtml = renderPetStepCard(
      lang, 1, curLabels.signal, pBreed, 
      curLabels.meaning, '', 
      curLabels.response, ''
    );
  }

  let step3CardHtml = '';
  if (routines.length > 0) {
    step3CardHtml = routines.map((r, idx) => {
      const rTitle = r.title || r.name || `ROUTINE ${idx + 1}`;
      const rText = r.content || r.text || r.desc || r.description || '';
      return renderPetRoutineCard(lang, idx + 1, rTitle, rText);
    }).join('\n\n');
  } else {
    step3CardHtml = renderPetRoutineCard(lang, 1, step3Title, step3Text);
  }

  const tipText = tip1Text || tip2Text;
  const tipBoxHtml = tipText ? renderTipBox(tipText) : '';
  const faqSectionHtml = renderFaqSection(lang, faqItems);

  const langTagMap = {
    ko: ["반려동물", "펫케어", pBreed],
    en: ["PetCare", "PetHealth", pBreed],
    zh: ["宠物护理", "宠物健康", pBreed],
    ja: ["ペットケア", "ペット健康", pBreed],
    es: ["CuidadoMascotas", "SaludMascotas", pBreed],
    fr: ["SoinAnimaux", "SanteAnimaux", pBreed],
    de: ["Haustierpflege", "Haustiergesundheit", pBreed],
    pt: ["CuidadoPets", "SaudePets", pBreed],
    id: ["PerawatanHewan", "KesehatanHewan", pBreed]
  };
  const tagsJson = JSON.stringify(langTagMap[lang] || langTagMap['en']);

  let markdown = `---
layout: "../../../layouts/BlogPostLayout.astro"
title: "${title.replace(/"/g, '\\"')}"
description: "${desc.replace(/"/g, '\\"')}"
pubDate: "${pubDate}"
updatedDate: "${updatedDate}"
category: "FreshSelf"
tags: ${tagsJson}
heroImage: "${heroImage}"
app: "petself"
formatVersion: 4
authority: "${auth.replace(/"/g, '\\"')}"
${stepsYaml}
${faqsYaml}
---

${intro}

${evidenceBoxHtml}

---

## 1. ${step1Title}

${step1CardHtml}

---

## 2. ${step2Title}

${step2CardHtml}

---

## 3. ${step3Title}

${step3CardHtml}

---

${tipBoxHtml}

${faqSectionHtml}
`;

  return cleanMarkdown(markdown);
}

compileMasterJsonCollection({
  masterDir: petsDir,
  blogRootDir: blogRoot,
  blogTypeName: 'PetSelf 반려동물 블로그',
  renderLocaleMarkdown
});
