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

console.log('🧼 [Intro 브랜드 구문 정제기] 9개 언어 intro 텍스트 정제를 시작합니다...\n');

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

      if (lang === 'ko') {
        intro = intro
          .replace(/오늘\s*PetSelf에서는\s*/g, '이번 가이드에서는 ')
          .replace(/이번에는\s*PetSelf가,?\s*/g, '이번 가이드에서는 ')
          .replace(/오늘은\s*PetSelf가\s*/g, '이번 가이드에서는 ')
          .replace(/오늘\s*FreshSnap에서는\s*/g, '이번 가이드에서는 ')
          .replace(/오늘은\s*PetSelf와\s*함께\s*/g, '이번 가이드에서는 ');
      } else if (lang === 'en') {
        intro = intro
          .replace(/Today on PetSelf, we\s*/gi, 'In this guide, we ')
          .replace(/Today, PetSelf explores\s*/gi, 'In this guide, we explore ')
          .replace(/Today, PetSelf\s*/gi, 'In this guide, ')
          .replace(/Today, FreshSnap\s*/gi, 'In this guide, ');
      } else if (lang === 'ja') {
        intro = intro
          .replace(/今回はPetSelfが、?\s*/g, '本記事では、')
          .replace(/本日FreshSnapでは、?\s*/g, '本記事では、')
          .replace(/今日はPetSelfが、?\s*/g, '本記事では、');
      } else if (lang === 'zh') {
        intro = intro
          .replace(/今天\s*PetSelf\s*将\s*/g, '本指南将')
          .replace(/今天\s*FreshSnap\s*将\s*/g, '本指南将')
          .replace(/今天\s*PetSelf\s*/g, '本指南');
      } else if (lang === 'es') {
        intro = intro
          .replace(/Hoy,?\s*PetSelf\s*explora\s*/gi, 'En esta guía se explora ')
          .replace(/Hoy,?\s*PetSelf\s*/gi, 'En esta guía, ')
          .replace(/Hoy en FreshSnap,?\s*/gi, 'En esta guía, ');
      } else if (lang === 'fr') {
        intro = intro
          .replace(/Aujourd'hui,?\s*PetSelf\s*/gi, 'Dans ce guide, ')
          .replace(/Aujourd'hui,?\s*FreshSnap\s*/gi, 'Dans ce guide, ');
      } else if (lang === 'de') {
        intro = intro
          .replace(/Heute befasst sich PetSelf\s*/gi, 'In diesem Ratgeber ')
          .replace(/Heute untersucht FreshSnap\s*/gi, 'In diesem Ratgeber ')
          .replace(/Heute stellt PetSelf\s*/gi, 'In diesem Ratgeber ')
          .replace(/Heute beleuchtet PetSelf\s*/gi, 'In diesem Ratgeber ')
          .replace(/Heute\s*PetSelf\s*/gi, 'In diesem Ratgeber ');
      } else if (lang === 'pt') {
        intro = intro
          .replace(/Hoje,?\s*o\s*PetSelf\s*/gi, 'Neste guia, ')
          .replace(/Hoje no FreshSnap,?\s*/gi, 'Neste guia, ');
      } else if (lang === 'id') {
        intro = intro
          .replace(/Hari ini di PetSelf,?\s*kami\s*/gi, 'Dalam panduan ini, kami ')
          .replace(/Hari ini di FreshSnap,?\s*kami\s*/gi, 'Dalam panduan ini, kami ')
          .replace(/Hari ini di PetSelf,?\s*/gi, 'Dalam panduan ini, ')
          .replace(/Hari ini PetSelf\s*/gi, 'Dalam panduan ini, ');
      }

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

console.log(`✨ 총 ${updatedFileCount}개 Master JSON 파일의 intro 정제가 완료되었습니다!\n`);
