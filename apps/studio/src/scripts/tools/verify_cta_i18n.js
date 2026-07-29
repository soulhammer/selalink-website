import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const localesDir = path.join(__dirname, '../../i18n/locales');
const langs = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];
const checkKeys = ['cta.badge.free_app', 'cta.action.download_free', 'cta.subtext.free'];

let hasError = false;

console.log('🔍 [CTA 다국어 정밀 재점검] 9개 언어 검사를 시작합니다...\n');

langs.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ [ERR] ${lang}.json 파일이 존재하지 않습니다.`);
    hasError = true;
    return;
  }

  const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  // 1. 키 존재 여부 확인
  checkKeys.forEach(key => {
    if (!content[key]) {
      console.error(`❌ [ERR] ${lang}.json 에 키가 누락되었습니다: ${key}`);
      hasError = true;
    } else {
      console.log(`  [OK] [${lang}] ${key} => "${content[key]}"`);
    }
  });

  // 2. 외국어 파일 내 한글 유니코드 잔류 스캔
  if (lang !== 'ko') {
    checkKeys.forEach(key => {
      const text = content[key] || '';
      if (/[\uAC00-\uD7A3]/.test(text)) {
        console.error(`❌ [ERR] ${lang}.json (${key}) 내에 한국어(한글)가 포함되어 있습니다: "${text}"`);
        hasError = true;
      }
    });
  }
});

console.log('\n----------------------------------------');
if (!hasError) {
  console.log('✅ [검증 성공] 9개 언어 전체에서 CTA 번역 키가 100% 누락 없이 완전하며, 외국어 파일 내 한글 잔류가 0건입니다!');
} else {
  console.error('🚨 [검증 실패] 일부 로케일 데이터에 문제가 발견되었습니다.');
  process.exit(1);
}
