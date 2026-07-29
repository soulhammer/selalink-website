import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import glob from 'fast-glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const studioRoot = path.join(__dirname, '../../..');

const targetDirs = [
  path.join(studioRoot, 'src/data/blogs/pets/*.json'),
  path.join(studioRoot, 'src/data/blogs/ingredients/*.json')
];

console.log('🧠 [스마트 다국어 문장 정제기] 9개 언어별 문맥 및 완벽한 무결성 교정을 시작합니다...\n');

let updatedFileCount = 0;

targetDirs.forEach(pattern => {
  const files = glob.sync(pattern);
  files.forEach(filePath => {
    const raw = fs.readFileSync(filePath, 'utf-8');
    let data = JSON.parse(raw);
    const topKey = Object.keys(data)[0];
    if (!topKey || !data[topKey] || !data[topKey].locales) return;

    const locales = data[topKey].locales;
    let modified = false;

    Object.keys(locales).forEach(lang => {
      let intro = locales[lang].intro;
      if (!intro || typeof intro !== 'string') return;

      const originalIntro = intro;

      // 1. 공통 범용 구문 정제 (브랜드 구문 완벽 교정)
      if (lang === 'ko') {
        intro = intro
          .replace(/오늘\s*(PetSelf|FreshSnap)에서는\s*/gi, '이번 가이드에서는 ')
          .replace(/오늘\s*(PetSelf|FreshSnap)가\s*/gi, '이번 가이드에서는 ')
          .replace(/오늘은\s*(PetSelf|FreshSnap)와\s*함께\s*/gi, '이번 가이드에서는 ')
          .replace(/이번에는\s*(PetSelf|FreshSnap)가,?\s*/gi, '이번 가이드에서는 ')
          .replace(/오늘\s*(PetSelf|FreshSnap)에서\s*/gi, '이번 가이드에서 ')
          .replace(/(PetSelf|FreshSnap)가\s*/gi, '');
      } else if (lang === 'en') {
        intro = intro
          .replace(/Today,?\s*(on|at)?\s*(PetSelf|FreshSnap),?\s*we\s*/gi, 'In this guide, we ')
          .replace(/Today,?\s*(on|at)?\s*(PetSelf|FreshSnap)\s+(shares|presents|explores|details|provides)\s*/gi, 'In this guide, we $2 ')
          .replace(/Today,?\s*(PetSelf|FreshSnap)\s+(shares|presents|explores|details|provides)\s*/gi, 'In this guide, we $2 ')
          .replace(/(PetSelf|FreshSnap)'s\s*/gi, 'the ')
          .replace(/(PetSelf|FreshSnap)\s+(shares|presents|explores|details|provides)\s*/gi, 'This guide $2 ')
          .replace(/on (PetSelf|FreshSnap)\b/gi, 'in this guide')
          .replace(/by (PetSelf|FreshSnap)\b/gi, 'in this guide');
      } else if (lang === 'ja') {
        intro = intro
          .replace(/本日、?\s*(PetSelf|FreshSnap)では、?\s*/gi, '本記事では、')
          .replace(/本日(PetSelf|FreshSnap)では、?\s*/gi, '本記事では、')
          .replace(/今回は(PetSelf|FreshSnap)が、?\s*/gi, '本記事では、')
          .replace(/今日は(PetSelf|FreshSnap)が、?\s*/gi, '本記事では、')
          .replace(/(PetSelf|FreshSnap)では、?\s*/gi, '本記事では、')
          .replace(/(PetSelf|FreshSnap)が、?\s*/gi, '本記事では、');
      } else if (lang === 'zh') {
        intro = intro
          .replace(/今天,?\s*(PetSelf|FreshSnap)\s*(将|为您|分享|解析|带来)\s*/gi, '本指南将')
          .replace(/今天,?\s*(PetSelf|FreshSnap)\s*/gi, '本指南')
          .replace(/(PetSelf|FreshSnap)\s*(将|为您|分享|解析|带来)\s*/gi, '本指南将')
          .replace(/(PetSelf|FreshSnap)\s*/gi, '本指南');
      } else if (lang === 'es') {
        intro = intro
          .replace(/Hoy,?\s*(en|el)?\s*(PetSelf|FreshSnap),?\s*(presenta|comparte|explora|ofrece)\s*/gi, 'En esta guía se $3 ')
          .replace(/Hoy,?\s*(en|el)?\s*(PetSelf|FreshSnap),?\s*/gi, 'En esta guía, ')
          .replace(/Hoy\s+(PetSelf|FreshSnap)\s+(presenta|comparte|explora)\s*/gi, 'En esta guía se $2 ')
          .replace(/rutina en (\d+) pasos de (PetSelf|FreshSnap)/gi, 'rutina de $1 pasos')
          .replace(/(PetSelf|FreshSnap)\s+(presenta|comparte|explora)\s*/gi, 'Esta guía $2 ')
          .replace(/de (PetSelf|FreshSnap)\b/gi, 'de esta guía');
      } else if (lang === 'fr') {
        intro = intro
          .replace(/Aujourd'hui,?\s*(chez|sur)?\s*(PetSelf|FreshSnap),?\s*(présente|partage|découvrez|explore)\s*/gi, 'Dans ce guide, découvrez ')
          .replace(/Aujourd'hui,?\s*(chez|sur)?\s*(PetSelf|FreshSnap),?\s*/gi, 'Dans ce guide, ')
          .replace(/routine en (\d+) étapes de (PetSelf|FreshSnap)/gi, 'routine en $1 étapes')
          .replace(/Découvrez la routine en (\d+) étapes de (PetSelf|FreshSnap)/gi, 'Découvrez une routine en $1 étapes')
          .replace(/(PetSelf|FreshSnap)\s+(vous\s+)?(présente|propose|partage)\s*/gi, 'Ce guide vous propose ')
          .replace(/de (PetSelf|FreshSnap)\b/gi, 'de ce guide');
      } else if (lang === 'de') {
        intro = intro
          .replace(/Heute\s+(stellt|befasst sich|untersucht|beleuchtet|zeigt)\s+(PetSelf|FreshSnap)\s+(Ihnen\s+)?/gi, 'In diesem Ratgeber erfahren Sie ')
          .replace(/Heute,?\s*(PetSelf|FreshSnap)\s+(stellt|befasst sich|untersucht|beleuchtet|zeigt)\s*/gi, 'In diesem Ratgeber ')
          .replace(/Heute,?\s*(PetSelf|FreshSnap)\s*/gi, 'In diesem Ratgeber ')
          .replace(/(PetSelf|FreshSnap)\s+stellt\s+(eine|die)\s+(\d+)-Schritte-Routine\s+vor\.?/gi, 'In diesem Ratgeber erfahren Sie die $2-Schritte-Routine.')
          .replace(/(PetSelf|FreshSnap)\s+zeigt\s+(die|eine)\s+(\d+)-Schritte-Routine\.?/gi, 'In diesem Ratgeber erfahren Sie die $2-Schritte-Routine.')
          .replace(/(PetSelf|FreshSnap)\s+(stellt|zeigt)\s*/gi, 'Dieser Ratgeber zeigt ')
          .replace(/von (PetSelf|FreshSnap)\b/gi, 'dieses Ratgebers');
      } else if (lang === 'pt') {
        intro = intro
          .replace(/Hoje,?\s*(o|no)?\s*(PetSelf|FreshSnap),?\s*(apresenta|partilha|explora|traz)\s*/gi, 'Neste guia, apresentamos ')
          .replace(/Hoje,?\s*(o|no)?\s*(PetSelf|FreshSnap),?\s*/gi, 'Neste guia, ')
          .replace(/Hojes,?\s*(o|no)?\s*(PetSelf|FreshSnap),?\s*(apresenta|partilha|explora|traz)\s*/gi, 'Neste guia, apresentamos ')
          .replace(/Hojes,?\s*(o|no)?\s*(PetSelf|FreshSnap),?\s*/gi, 'Neste guia, ')
          .replace(/rotina de (\d+) passos do (PetSelf|FreshSnap)/gi, 'rotina de $1 passos')
          .replace(/(PetSelf|FreshSnap)\s+(apresenta|partilha|explora)\s*/gi, 'Este guia apresenta ')
          .replace(/do (PetSelf|FreshSnap)\b/gi, 'deste guia');
      } else if (lang === 'id') {
        intro = intro
          .replace(/Hari ini,?\s*(di)?\s*(PetSelf|FreshSnap),?\s*(membagikan|menyajikannya|menjelaskan|mengeksplorasi|membahas|menganalisis)\s*/gi, 'Dalam panduan ini, kami $3 ')
          .replace(/Hari ini,?\s*(di)?\s*(PetSelf|FreshSnap),?\s*/gi, 'Dalam panduan ini, ')
          .replace(/(PetSelf|FreshSnap)\s+(membagikan|menyajikannya|menjelaskan|mengeksplorasi|membahas|menganalisis)\s*/gi, 'Panduan ini $1 ')
          .replace(/dari (PetSelf|FreshSnap)\b/gi, 'dari panduan ini');
      }

      // 최종 안전 보장: 남아있는 찌꺼기 브랜드 단어 소거
      intro = intro.replace(/PetSelf|FreshSnap/g, '');

      if (intro !== originalIntro) {
        locales[lang].intro = intro;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf-8');
      updatedFileCount++;
    }
  });
});

console.log(`✨ 스마트 정제 완료: 총 ${updatedFileCount}개 Master JSON 파일의 intro 문장이 자연스럽게 수정되었습니다!\n`);
