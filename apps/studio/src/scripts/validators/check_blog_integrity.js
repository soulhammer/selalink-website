import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 경로 설정
const blogRoot = path.join(__dirname, '../../content/blog');
const publicRoot = path.join(__dirname, '../../../public');

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
  const imageHashes = new Map();

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

  // 1.5. 반려동물 케어용 JSON 내부 마스터 키 정합성 진단
  const petsDir = path.join(__dirname, 'data/blogs/pets');
  if (fs.existsSync(petsDir)) {
    fs.readdirSync(petsDir).forEach(file => {
      if (file.endsWith('.json') && file !== 'meta.json') {
        const slug = file.replace('.json', '');
        const filePath = path.join(petsDir, file);
        try {
          const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          const petMasterSlugKeys = Object.keys(fileData);
          petMasterSlugKeys.forEach(key => {
            if (key !== slug) {
              logError(`[반려동물 키 정합성 오류] ${file}: JSON 파일 이름(슬러그: '${slug}')과 내부 데이터의 루트 매핑 키(키: '${key}')가 불일치하여 컴파일 매핑 누수가 발생할 우려가 있습니다.`);
            }
          });
        } catch (e) {
          logError(`[반려동물 JSON 파싱 오류] ${file}: JSON 형식이 유효하지 않습니다: ${e.message}`);
        }
      }
    });
  }

  // 한국어 마스터 블로그 포스트를 기준으로 삼음
  const masterFiles = filesByLang['ko'] || [];

  if (masterFiles.length === 0) {
    logError('한국어(ko) 마스터 블로그 파일이 없습니다. 검사를 중단합니다.');
    process.exit(1);
  }

  // 2. 각 포스트별 검증 실행
  masterFiles.forEach(file => {
    const blogSlug = file.replace('.md', '');

    // 2-0. 파일명 영문 소문자/숫자/하이픈 형식 검증 (SEO 및 AWS 라우팅 깨짐 방지)
    const filenameRegex = /^[a-z0-9-]+$/;
    if (!filenameRegex.test(blogSlug)) {
      logError(`[파일명 형식 오류] 마스터 파일명('${file}')이 영문 소문자, 숫자, 하이픈의 조합(/^[a-z0-9-]+$/)으로 구성되어 있지 않습니다. 배포 환경에서 404가 의심됩니다.`);
    }

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

      // 2-A.2. App 식별자 화이트리스트 검사
      const validApps = ['buildself', 'selalink', 'petself', 'freshsnap'];
      if (!meta.app || !validApps.includes(meta.app)) {
        logError(`[비표준 App 식별자] ${lang.toUpperCase()} ${file}: 정의된 app 필드값('${meta.app}')이 표준 화이트리스트(${validApps.join(', ')})에 포함되어 있지 않습니다.`);
      }

      // 2-B. Frontmatter & JSON-LD (faqs) 구문 유효성 검사
      const koHasFaqs = koMeta.faqs && Array.isArray(koMeta.faqs);
      const targetHasFaqs = meta.faqs && Array.isArray(meta.faqs);
      if (koHasFaqs && !targetHasFaqs) {
        logError(`[대칭성 위반/FAQ 누락] ${lang.toUpperCase()} ${file}: 한국어 원본에는 FAQ가 정의되어 있으나, 번역본에는 'faqs' 필드가 누락되었습니다.`);
      }

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
        const rawRelPath = meta.heroImage.startsWith('/') ? meta.heroImage : `/${meta.heroImage}`;
        const webpRelPath = rawRelPath.replace(/\.png$/, '.webp');
        
        let relativeImgPath = rawRelPath;
        let absoluteImgPath = path.join(publicRoot, relativeImgPath);
        
        if (!fs.existsSync(absoluteImgPath) && fs.existsSync(path.join(publicRoot, webpRelPath))) {
          relativeImgPath = webpRelPath;
          absoluteImgPath = path.join(publicRoot, relativeImgPath);
        }

        if (!fs.existsSync(absoluteImgPath)) {
          logError(`[이미지 부재] ${lang.toUpperCase()} ${file}: heroImage '${meta.heroImage}' 파일이 public 폴더에 존재하지 않습니다.`);
        } else {
          try {
            const fileBuffer = fs.readFileSync(absoluteImgPath);
            const hash = crypto.createHash('md5').update(fileBuffer).digest('hex');
            
            if (imageHashes.has(hash)) {
              const existing = imageHashes.get(hash);
              if (existing.path !== absoluteImgPath) {
                logError(`[대표 이미지 중복 도용 방지] 포스트 '${blogSlug}'의 heroImage('${meta.heroImage}')가 다른 포스트 '${existing.slug}'의 이미지와 내용이 완전히 동일(복사)합니다. 각 포스트마다 고유한 일러스트를 생성하여 제공하십시오.`);
              }
            } else {
              imageHashes.set(hash, { slug: blogSlug, path: absoluteImgPath });
            }
          } catch (err) {
            logError(`[이미지 해시 오류] ${file}: heroImage 해시 계산 실패 - ${err.message}`);
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

      // 2-E. 미번역 한글 유입 감지 (ko 제외, strict mode 일 때만 차단)
      const cleanBody = parsed.body.replace(/<[^>]*>/g, ''); // HTML 태그 제외
      if (koreanRegex.test(cleanBody)) {
        if (process.env.STRICT_I18N === 'true') {
          logError(`[한글 유입 방지] ${lang.toUpperCase()} ${file}: 다국어 포스트 본문 내에 번역되지 않은 한글 문장이 감지되었습니다.`);
        }
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

      // 2-H. 리터럴 \n 누수 감지
      if (parsed.body.includes('\\n') || parsed.frontmatter.includes('\\n')) {
        logError(`[리터럴 개행 누수 방지] ${lang.toUpperCase()} ${file}: 포스트 내용 내에 리터럴 '\\n' 문자열이 감지되었습니다.`);
      }

      // 2-I. 리터럴 ** 누수 감지 (마크다운 볼드체 문법 '**텍스트**' 오용/누수 방지, 단일 **는 허용)
      const hasBoldMarkdown = /\*\*[^*]+\*\*/.test(parsed.body) || /\*\*[^*]+\*\*/.test(parsed.frontmatter);
      if (hasBoldMarkdown) {
        logError(`[리터럴 ** 누수 방지] ${lang.toUpperCase()} ${file}: 포스트 내용 내에 변환되지 않은 마크다운 볼드체 '**' 문법이 감지되었습니다.`);
      }
    });

    // 2-J. 원천 소스 아이템 데이터셋 존재성 검증 (BuildSnap 전용 아이템이 존재하는 경우에만 선택적 태그 검증)
    const isHabitBlog = fs.existsSync(path.join(__dirname, 'data/blogs/habits', `${blogSlug}.json`));
    if (isHabitBlog) {
      const sourceJsonPath = path.join(__dirname, 'data/apps/buildsnap/items', `${blogSlug}.json`);
      if (fs.existsSync(sourceJsonPath)) {
        // Q1 진단기 매칭 누출 검증 (BuildSnap 카드로 등록된 아이템인 경우만 적용)
        try {
          const itemData = JSON.parse(fs.readFileSync(sourceJsonPath, 'utf-8'));
          const tagsStr = (itemData.tags || []).join(' ');
          const allowedQ1Keywords = [
            '집중', '몰입', '생산성', '의지', '의지력', '동기부여', '자기계발', '학습', '성공습관', '계획', '시간 관리',
            '창의', '아이디어', '글쓰기', '기록', '메모', '창의성', '창의력', '독서', '영감', '예술', '기획', '공부',
            '단순', '의사결정', '단순화', '본질',
            '휴식', '사색', '명상', '수면', '이완', '성찰', '안정', '마음', '스트레스 해소'
          ];
          const hasQ1Tag = allowedQ1Keywords.some(k => tagsStr.includes(k));
          if (!hasQ1Tag) {
            logError(`[진단기 매칭 누출] '${blogSlug}.json'에 개선 목표(Q1)에 부합하는 필수 태그가 하나도 없습니다. 진단기에서 노출될 수 있도록 태그를 보완하십시오.`);
          }
        } catch (err) {
          logError(`[JSON 파싱 에러] '${blogSlug}.json' 파일 파싱 실패 - ${err.message}`);
        }
      }
    }

    const isIngredientBlog = fs.existsSync(path.join(__dirname, 'data/blogs/ingredients', `${blogSlug}.json`));
    if (isIngredientBlog) {
      const sourceJsonPath = path.join(__dirname, 'data/apps/freshsnap/items', `${blogSlug}.json`);
    }

    const isPetBlog = fs.existsSync(path.join(__dirname, 'data/blogs/pets', `${blogSlug}.json`));
    if (isPetBlog) {
      const sourceJsonPath = path.join(__dirname, 'data/apps/petsnap/items', `${blogSlug}.json`);
    }

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
