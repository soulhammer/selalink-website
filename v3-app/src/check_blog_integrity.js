import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 경로 설정
const blogRoot = path.join(__dirname, 'content/blog');
const publicRoot = path.join(__dirname, '../public');

const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];
const allLangs = ['ko', ...languages];

// 한글 정규식
const koreanRegex = /[\uAC00-\uD7A3\u3130-\u318F]/;

let hasErrors = false;
let hasWarnings = false;

function logError(message) {
  console.error(`\x1b[31m❌ [ERR] ${message}\x1b[0m`);
  hasErrors = true;
}

function logWarn(message) {
  console.warn(`\x1b[33m⚠️ [WARN] ${message}\x1b[0m`);
  hasWarnings = true;
}

function logOk(message) {
  console.log(`\x1b[32m✅ [OK] ${message}\x1b[0m`);
}

// 헬퍼: frontmatter와 body 분리
function parseMarkdown(content) {
  const parts = content.split('---');
  if (parts.length < 3) {
    return { frontmatter: '', body: content };
  }
  return {
    frontmatter: parts[1],
    body: parts.slice(2).join('---')
  };
}

// 헬퍼: YAML frontmatter 파싱 (경량 파서)
function parseYaml(yamlStr) {
  const result = {};
  const lines = yamlStr.split('\n');
  let currentKey = null;
  let inFaqs = false;
  let currentFaq = null;

  for (let line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    // faqs: 시작 탐지
    if (trimmed === 'faqs:') {
      result.faqs = [];
      inFaqs = true;
      continue;
    }

    // 다른 키가 시작되면 faqs 파싱 해제
    if (inFaqs && line.search(/\S/) === 0 && !trimmed.startsWith('-') && trimmed.includes(':')) {
      inFaqs = false;
    }

    if (inFaqs) {
      if (trimmed.startsWith('-')) {
        if (currentFaq) result.faqs.push(currentFaq);
        currentFaq = {};
        const rest = trimmed.slice(1).trim();
        const colonIdx = rest.indexOf(':');
        if (colonIdx !== -1) {
          const k = rest.slice(0, colonIdx).trim();
          const v = rest.slice(colonIdx + 1).trim().replace(/^"|"$/g, '');
          currentFaq[k] = v;
        }
      } else {
        const colonIdx = trimmed.indexOf(':');
        if (colonIdx !== -1 && currentFaq) {
          const k = trimmed.slice(0, colonIdx).trim();
          const v = trimmed.slice(colonIdx + 1).trim().replace(/^"|"$/g, '');
          currentFaq[k] = v;
        }
      }
      continue;
    }

    const colonIdx = trimmed.indexOf(':');
    if (colonIdx !== -1) {
      const k = trimmed.slice(0, colonIdx).trim();
      const v = trimmed.slice(colonIdx + 1).trim().replace(/^"|"$/g, '');
      result[k] = v;
    }
  }
  if (currentFaq && result.faqs) {
    result.faqs.push(currentFaq);
  }
  return result;
}

function checkIntegrity() {
  console.log('\n🔎 \x1b[36m[블로그 무결성 검증기] 빌드 전 품질 검사를 시작합니다...\x1b[0m\n');

  if (!fs.existsSync(blogRoot)) {
    logError(`블로그 루트 디렉토리가 없습니다: ${blogRoot}`);
    process.exit(1);
  }

  // 1. 모든 언어 디렉토리의 파일 목록 수집
  const filesByLang = {};
  allLangs.forEach(lang => {
    const langDir = path.join(blogRoot, lang);
    if (fs.existsSync(langDir)) {
      filesByLang[lang] = fs.readdirSync(langDir).filter(f => f.endsWith('.md'));
    } else {
      filesByLang[lang] = [];
      logWarn(`[디렉토리 누락] ${lang} 언어 디렉토리가 존재하지 않습니다.`);
    }
  });

  // 한국어 마스터 블로그 포스트를 기준으로 삼음
  const masterFiles = filesByLang['ko'] || [];

  if (masterFiles.length === 0) {
    logError('한국어(ko) 마스터 블로그 파일이 없습니다. 검사를 중단합니다.');
    process.exit(1);
  }

  // 2. 각 포스트별 검증 실행
  masterFiles.forEach(file => {
    const blogSlug = file.replace('.md', '');
    const koPath = path.join(blogRoot, 'ko', file);
    const koContent = fs.readFileSync(koPath, 'utf-8');
    const koParsed = parseMarkdown(koContent);
    const koMeta = parseYaml(koParsed.frontmatter);

    // 2-A. Cross-Language Symmetry Check (다국어 대칭 존재성)
    languages.forEach(lang => {
      const targetPath = path.join(blogRoot, lang, file);
      if (!fs.existsSync(targetPath)) {
        logError(`[대칭성 위반] ${lang.toUpperCase()} 언어에 '${file}' 파일이 누락되어 다국어 셀렉터 404가 의심됩니다.`);
        return;
      }

      const content = fs.readFileSync(targetPath, 'utf-8');
      const parsed = parseMarkdown(content);
      const meta = parseYaml(parsed.frontmatter);

      // 2-B. Frontmatter & JSON-LD (faqs) 구문 유효성 검사
      if (meta.faqs && Array.isArray(meta.faqs)) {
        meta.faqs.forEach((faq, idx) => {
          if (!faq.question || !faq.answer) {
            logError(`[YAML/FAQ 에러] ${lang.toUpperCase()} ${file}: ${idx + 1}번째 FAQ의 질문/답변이 유효하지 않습니다.`);
          } else {
            // 따옴표 이스케이프 여부 및 구글 구조화 JSON-LD 변환 시 깨질 문자가 있는지 가상 구문 테스트
            try {
              const testJson = JSON.stringify({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              });
              JSON.parse(testJson);
            } catch (err) {
              logError(`[JSON-LD 구문 에러] ${lang.toUpperCase()} ${file}: FAQ ${idx + 1}의 JSON 스키마 변환 실패 - ${err.message}`);
            }
          }
        });
      }

      // 2-C. 이미지 파일 존재성 검증
      // heroImage 검사
      if (meta.heroImage) {
        const relativeImgPath = meta.heroImage.startsWith('/') ? meta.heroImage : `/${meta.heroImage}`;
        const absoluteImgPath = path.join(publicRoot, relativeImgPath);
        if (!fs.existsSync(absoluteImgPath)) {
          logError(`[이미지 부재] ${lang.toUpperCase()} ${file}: heroImage '${meta.heroImage}' 파일이 public 폴더에 존재하지 않습니다.`);
        }
      }

      // 본문 <img> 태그 검사
      const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
      let imgMatch;
      while ((imgMatch = imgRegex.exec(parsed.body)) !== null) {
        const imgSrc = imgMatch[1];
        if (imgSrc.startsWith('/')) {
          const absoluteImgPath = path.join(publicRoot, imgSrc);
          if (!fs.existsSync(absoluteImgPath)) {
            logError(`[이미지 부재] ${lang.toUpperCase()} ${file}: 본문 내 이미지 '${imgSrc}' 파일이 public 폴더에 없습니다.`);
          }
        }
      }

      // 2-D. 내부 링크 깨짐 검사 (Broken Internal Links)
      const linkRegex = /\[[^\]]*\]\(([^)]+)\)/g;
      let linkMatch;
      while ((linkMatch = linkRegex.exec(parsed.body)) !== null) {
        const linkHref = linkMatch[1];
        // 다국어 내부 블로그 상세 상대 링크 탐지 (예: /ko/blog/how-to-store-apples)
        const blogLinkRegex = /^\/([a-z]{2})\/blog\/([a-zA-Z0-9_-]+)$/;
        const match = linkHref.match(blogLinkRegex);
        if (match) {
          const targetLang = match[1];
          const targetSlug = match[2];
          const targetFilePath = path.join(blogRoot, targetLang, `${targetSlug}.md`);
          if (!fs.existsSync(targetFilePath)) {
            logError(`[끊어진 내부 링크] ${lang.toUpperCase()} ${file}: 본문 내 링크 '${linkHref}' 가 존재하지 않는 포스트로 연결되어 있습니다.`);
          }
        }
      }

      // 2-E. 미번역 한글 유입 감지 (ko 제외)
      const cleanBody = parsed.body.replace(/<[^>]*>/g, ''); // HTML 태그 제외
      if (koreanRegex.test(cleanBody)) {
        // 단, 위인의 고유 한국어 표기명 등이 있을 수 있으나, 본문 번역 누락 방지를 위해 감지하여 에러 발생
        // 예외 허용하고 싶다면 특정 어휘 필터링 가능하나 원칙적으로 번역본에 한글이 있는 것은 에러
        // 단, 💡 이모지 뒤에 공용 컴포넌트 타이틀이나 FAQ 등은 스크립트가 자동 수정하지만 한글 텍스트가 직접 들어있으면 에러
        logError(`[한글 유입 방지] ${lang.toUpperCase()} ${file}: 다국어 포스트 본문 내에 번역되지 않은 한글 문장이 감지되었습니다.`);
      }

      // 2-F. 번역 분량 비율 이상 감지
      const koLength = koParsed.body.replace(/\s+/g, '').length;
      const targetLength = parsed.body.replace(/\s+/g, '').length;
      if (koLength > 0) {
        const ratio = targetLength / koLength;
        if (ratio < 0.3) {
          logWarn(`[번역 누락 의심] ${lang.toUpperCase()} ${file}: 번역본 글자 수 분량이 한국어 원문 대비 너무 짧습니다. (비율: ${(ratio * 100).toFixed(1)}%)`);
        } else if (ratio > 3.0) {
          logWarn(`[번역 중복 의심] ${lang.toUpperCase()} ${file}: 번역본 글자 수 분량이 한국어 원문 대비 비정상적으로 깁니다. (비율: ${(ratio * 100).toFixed(1)}%)`);
        }
      }
      // 2-G. undefined 텍스트 누수 감지
      if (parsed.body.includes('undefined') || parsed.frontmatter.includes('undefined')) {
        logError(`[undefined 누수 방지] ${lang.toUpperCase()} ${file}: 포스트 내용 내에 'undefined' 문자열이 감지되었습니다.`);
      }
    });

    if (!hasErrors) {
      logOk(`${blogSlug} 포스트 다국어 검증 완료`);
    }
  });

  console.log('\n🏁 \x1b[36m[블로그 무결성 검증 완료]\x1b[0m');
  if (hasErrors) {
    console.error('\n\x1b[31m🚨 에러가 발견되어 빌드를 차단합니다. 위의 오류들을 먼저 해결해 주세요.\x1b[0m\n');
    process.exit(1);
  } else if (hasWarnings) {
    console.warn('\n\x1b[33m⚠️ 일부 경고가 발견되었으나 빌드는 진행됩니다. 필요 시 번역 분량을 확인해 주세요.\x1b[0m\n');
    process.exit(0);
  } else {
    logOk('\n✨ 모든 블로그 포스트의 품질 및 다국어 정합성이 완벽합니다! 빌드를 계속 진행합니다.\n');
    process.exit(0);
  }
}

checkIntegrity();
