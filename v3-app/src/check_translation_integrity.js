import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distRoot = path.join(__dirname, '../dist');
const locales = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

let hasErrors = false;
let checkedCount = 0;

function logError(message) {
  console.error(`\x1b[31m❌ [ERR] ${message}\x1b[0m`);
  hasErrors = true;
}

function logOk(message) {
  console.log(`\x1b[32m✅ [OK] ${message}\x1b[0m`);
}

// 헬퍼: 디렉토리 내의 모든 HTML 파일 재귀적으로 찾기
function getHtmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getHtmlFiles(fullPath, files);
    } else if (file.endsWith('.html')) {
      files.push(fullPath);
    }
  });
  return files;
}

function checkTranslationIntegrity() {
  console.log('\n🔎 \x1b[36m[웹사이트 빌드 결과물 다국어 검증기] 최종 품질 검사를 시작합니다...\x1b[0m\n');

  if (!fs.existsSync(distRoot)) {
    logError(`빌드 결과물 디렉토리가 없습니다. 빌드를 먼저 수행하세요: ${distRoot}`);
    process.exit(1);
  }

  const htmlFiles = getHtmlFiles(distRoot);
  
  if (htmlFiles.length === 0) {
    logError('검증할 HTML 파일이 빌드 폴더 내에 존재하지 않습니다.');
    process.exit(1);
  }

  htmlFiles.forEach((filePath) => {
    const relativePath = path.relative(distRoot, filePath);
    const pathParts = relativePath.split(path.sep);
    const lang = pathParts[0];

    // robots.txt나 sitemap 등 언어 경로가 아닌 것은 검사하지 않음
    if (!locales.includes(lang)) return;

    checkedCount++;
    const rawHtml = fs.readFileSync(filePath, 'utf-8');

    // 헤더(언어 선택기 포함), 스크립트, 스타일 태그 제외하여 본문 텍스트 추출
    let plainText = rawHtml
      .replace(/<header\b[^>]*>[\s\S]*?<\/header>/gi, '')
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' '); // HTML 태그 제거

    plainText = plainText.replace(/\s+/g, ' ').trim();

    // 1. 번역 키 미치환(Placeholder) 누출 검출
    const keyLeakRegex = /\b(nav|hero|app|ls|bs|fs|footer|blog|cta|platform|meta)\.[a-zA-Z0-9_\.]+\b/i;
    const keyLeakMatch = plainText.match(keyLeakRegex);
    if (keyLeakMatch) {
      logError(`${relativePath}: 치환되지 않은 번역 키 노출 - "${keyLeakMatch[0]}"`);
    }

    // 2. undefined 및 [object Object] 검출
    if (plainText.includes('undefined')) {
      logError(`${relativePath}: 'undefined' 문자열 노출`);
    }
    if (plainText.includes('[object Object]')) {
      logError(`${relativePath}: '[object Object]' 문자열 노출`);
    }

    // 법적 의무 페이지 여부 판별
    const isLegalPage = relativePath.includes('privacy') || 
                        relativePath.includes('terms') || 
                        relativePath.includes('data-deletion');

    if (isLegalPage) {
      // 법적 페이지는 ko일 때 한국어, 그 외에는 영어(한글 없음) 확인
      if (lang === 'ko') {
        const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/.test(plainText);
        if (!hasKorean) {
          logError(`${relativePath}: 한국어 법적 페이지에 한국어가 정상 노출되지 않습니다.`);
        }
      } else {
        const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/.test(plainText);
        if (hasKorean) {
          logError(`${relativePath}: 다국어 법적 페이지에 한국어가 노출되고 있습니다 (영어로 폴백되어야 함).`);
        }
      }
    } else {
      // 일반 페이지의 크로스 다국어 격리 검사
      
      // A. 한국어 잔재 유입 검증 (한국어가 아닌 페이지)
      if (lang !== 'ko') {
        const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/.test(plainText);
        if (hasKorean) {
          logError(`${relativePath}: 번역되지 않은 한국어(한글)가 감출되었습니다.`);
        }
      }

      // B. 일본어 잔재 유입 검증 (일본어가 아닌 페이지)
      if (lang !== 'ja') {
        const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/.test(plainText);
        if (hasJapanese) {
          logError(`${relativePath}: 일본어가 아닌 페이지에 일본어(가나)가 검출되었습니다.`);
        }
      }

      // C. 중국어/한자 잔재 유입 검증 (라틴/유럽/인도네시아어 페이지)
      if (['de', 'en', 'es', 'fr', 'pt', 'id'].includes(lang)) {
        const hasChinese = /[\u4E00-\u9FFF]/.test(plainText);
        if (hasChinese) {
          logError(`${relativePath}: 라틴계열 페이지에 CJK 한자(중국어)가 검출되었습니다.`);
        }
      }
    }
  });

  console.log(`\n📊 총 ${checkedCount}개의 다국어 HTML 페이지 검증 완료.`);
  if (hasErrors) {
    console.error('\n\x1b[31m🚨 번역 품질 검증 실패! 빌드를 중단합니다.\x1b[0m\n');
    process.exit(1);
  } else {
    logOk('모든 빌드 페이지의 다국어 번역 및 품질 검증이 완벽합니다!\n');
    process.exit(0);
  }
}

checkTranslationIntegrity();
