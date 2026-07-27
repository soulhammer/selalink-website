import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distRoot = path.join(__dirname, '../../../dist');
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

async function checkTranslationIntegrity() {
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

  let isFullScan = process.argv.includes('--full') || process.env.CI === 'true';
  const changedSlugs = new Set();

  if (!isFullScan) {
    try {
      const diffOutput = execSync('git diff --name-only HEAD', { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
      const statusOutput = execSync('git status --porcelain', { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
      
      const lines = [
        ...diffOutput.split('\n'),
        ...statusOutput.split('\n').map(line => line.slice(3).trim())
      ].map(l => l.trim()).filter(Boolean);
      
      const uniqueChangedFiles = [...new Set(lines)];
      
      if (uniqueChangedFiles.length === 0) {
        console.log('✨ Git 변경 사항이 없습니다. 번역 검증을 마칩니다.');
        process.exit(0);
      }
      
      for (const file of uniqueChangedFiles) {
        const contentBlogMatch = file.match(/src\/content\/blog\/[^/]+\/([^/]+)\.md$/);
        const dataBlogMatch1 = file.match(/src\/data\/blogs\/habits\/([^/]+)\.json$/);
        const dataBlogMatch2 = file.match(/src\/data\/habits\/items\/([^/]+)\.json$/);
        
        const slug = (contentBlogMatch && contentBlogMatch[1]) || 
                     (dataBlogMatch1 && dataBlogMatch1[1]) || 
                     (dataBlogMatch2 && dataBlogMatch2[1]);
                     
        if (slug) {
          changedSlugs.add(slug);
        } else {
          // 중요하지 않은 파일 변경(예: README.md)은 전수 검사로 전환하지 않고 스킵
          if (file.endsWith('.md') && !file.includes('src/content/blog/')) {
            continue;
          }
          console.log(`⚠️  블로그 데이터 외 파일 변경 감지 -> 전수 검증으로 전환: ${file}`);
          isFullScan = true;
          break;
        }
      }
      
      if (!isFullScan && changedSlugs.size === 0) {
        console.log('✨ 검증 대상 블로그 파일의 변경이 없습니다. 검증을 완료합니다.');
        process.exit(0);
      }
    } catch (err) {
      console.log('⚠️  Git 명령어 실행 실패 -> 전수 검증으로 안전하게 전환합니다.');
      isFullScan = true;
    }
  }

  let scanTargets = htmlFiles;
  if (!isFullScan) {
    console.log(`⚡ 증분 검증(Incremental Check) 활성화 - 변경된 블로그 대상: [${[...changedSlugs].join(', ')}]`);
    scanTargets = htmlFiles.filter(filePath => {
      const relativePath = path.relative(distRoot, filePath);
      return [...changedSlugs].some(slug => relativePath.includes(`/blog/${slug}/`));
    });
    
    if (scanTargets.length === 0) {
      console.log('✨ 변경된 블로그에 매핑되는 빌드 결과물이 없습니다. 검사를 완료합니다.');
      process.exit(0);
    }
  } else {
    console.log('📊 전수 검증(Full Scan) 실행 - 모든 빌드 HTML 페이지를 검사합니다.');
  }

  await Promise.all(scanTargets.map(async (filePath) => {
    const relativePath = path.relative(distRoot, filePath);
    const pathParts = relativePath.split(path.sep);
    const lang = pathParts[0];

    // robots.txt나 sitemap 등 언어 경로가 아닌 것은 검사하지 않음
    if (!locales.includes(lang)) return;

    const rawHtml = await fs.promises.readFile(filePath, 'utf-8');

    // 리다이렉트 전용 HTML은 검사에서 스킵
    if (rawHtml.includes('http-equiv="refresh"') || rawHtml.includes('Redirecting to')) {
      return;
    }

    checkedCount++;

    // 본문 콘텐츠 영역만 타겟팅 추출 (템플릿 공용 영역 제외)
    let bodySection = '';
    const articleMatch = rawHtml.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i);
    if (articleMatch) {
      bodySection = articleMatch[1];
    } else {
      const mainMatch = rawHtml.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
      bodySection = mainMatch ? mainMatch[1] : rawHtml;
    }

    let plainText = bodySection
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

    // 2. undefined, [object Object], national 오타 및 비영어 페이지 내 responses 노이즈 검출
    if (plainText.includes('undefined')) {
      logError(`${relativePath}: 'undefined' 문자열 노출`);
    }
    if (plainText.includes('[object Object]')) {
      logError(`${relativePath}: '[object Object]' 문자열 노출`);
    }
    if (plainText.includes('national:')) {
      logError(`${relativePath}: UI 오타 단어 'national:' 이 노출되었습니다.`);
    }
    if (lang !== 'en' && /\bresponses\b/i.test(plainText)) {
      logError(`${relativePath}: 비영어 페이지['${lang}'] 본문 내에 치환 오류 오염 단어 'responses'가 노출되었습니다.`);
    }
    const unreplacedEnglishHeaders = [
      "Body Language & Signals",
      "Customized 3-Step Home Care Routine",
      "3-Step Routine Guide",
      "Scientifically Proven Storage Guide"
    ];
    for (const unrepHeader of unreplacedEnglishHeaders) {
      if (lang !== 'en' && plainText.includes(unrepHeader)) {
        logError(`${relativePath}: 비영어 페이지['${lang}'] 본문 내에 미번역 영문 헤더 문구("${unrepHeader}")가 노출되었습니다.`);
      }
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
        const isEasternHistoryPost = relativePath.includes('confucius-guqin-harmony') || 
                                     relativePath.includes('sejong-dawn-reading') || 
                                     relativePath.includes('zhuge-liang-guqin-strategy');
        const hasChinese = isEasternHistoryPost ? false : /[\u4E00-\u9FFF]/.test(plainText);
        if (hasChinese) {
          logError(`${relativePath}: 라틴계열 페이지에 CJK 한자(중국어)가 검출되었습니다.`);
        }

        // 영어(en)가 아닌 타 라틴계열 페이지에 영어가 통째로 폴백되어 노출되는 버그 검출
        if (lang !== 'en' && plainText.length > 100) {
          let hasTargetLangChar = false;
          
          if (lang === 'de') {
            const hasDeChar = /[äöüßÄÖÜ]/.test(plainText);
            const deWords = plainText.match(/\b(ich|sie|ist|sind|und|der|die|das|in|zu|den|von|nicht|mit)\b/gi) || [];
            hasTargetLangChar = hasDeChar || deWords.length >= 3;
          } else if (lang === 'fr') {
            const hasFrChar = /[éèàùçâêîôûëïüœÉÈÀÙÇÂÊÎÔÛËÏÜŒ]/.test(plainText);
            const frWords = plainText.match(/\b(je|est|sont|et|le|la|les|en|dans|pour|une|des|qui|que)\b/gi) || [];
            hasTargetLangChar = hasFrChar || frWords.length >= 3;
          } else if (lang === 'es') {
            const hasEsChar = /[áéíóúñüÁÉÍÓÚÑÜ¿¡]/.test(plainText);
            const esWords = plainText.match(/\b(el|la|los|las|un|una|es|son|y|en|para|com|de|no|que)\b/gi) || [];
            hasTargetLangChar = hasEsChar || esWords.length >= 3;
          } else if (lang === 'pt') {
            const hasPtChar = /[áéíóúçãõâêôÁÉÍÓÚÇÃÕÂÊÔ]/.test(plainText);
            const ptWords = plainText.match(/\b(o|a|os|as|um|uma|é|são|e|em|para|com|de|não|que)\b/gi) || [];
            hasTargetLangChar = hasPtChar || ptWords.length >= 3;
          } else if (lang === 'id') {
            const idWords = plainText.match(/\b(yang|dan|di|ke|dari|adalah|untuk|pada|dengan|ini|itu|tidak|bisa)\b/gi) || [];
            hasTargetLangChar = idWords.length >= 3;
          }

          if (!hasTargetLangChar) {
            logError(`${relativePath}: 타겟 언어 [${lang.toUpperCase()}]의 문법이나 고유 단어가 전혀 감지되지 않습니다. 영어로 폴백 노출되는 번역 누락 버그가 의심됩니다.`);
          }
        }
      }

      // D. 전용 문자 누락 검증 (번역 누락 및 영어 Fallback 방지)
      if (plainText.length > 100) {
        if (lang === 'ja') {
          const japaneseMatches = plainText.match(/[\u3040-\u309F\u30A0-\u30FF]/g) || [];
          if (japaneseMatches.length < 100) {
            logError(`${relativePath}: 일본어 페이지인데 일본어(가나) 문자가 너무 적게 검출되었습니다 (${japaneseMatches.length}자). 번역 누락(영어로 폴백됨)이 의심됩니다.`);
          }
        }
        if (lang === 'zh') {
          const chineseMatches = plainText.match(/[\u4E00-\u9FFF]/g) || [];
          if (chineseMatches.length < 150) {
            logError(`${relativePath}: 중국어 페이지인데 중국어(한자) 문자가 너무 적게 검출되었습니다 (${chineseMatches.length}자). 번역 누락(영어로 폴백됨)이 의심됩니다.`);
          }
        }
        if (lang === 'ko') {
          const koreanMatches = plainText.match(/[\uAC00-\uD7A3\u3130-\u318F]/g) || [];
          if (koreanMatches.length < 150) {
            logError(`${relativePath}: 한국어 페이지인데 한국어(한글) 문자가 너무 적게 검출되었습니다 (${koreanMatches.length}자).`);
          }
        }
      }
    }
  }));

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
