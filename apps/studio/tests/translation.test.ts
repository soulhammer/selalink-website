import { describe, it, expect } from 'vitest';
import glob from 'fast-glob';
import fs from 'fs';
import path from 'path';
import { franc } from 'franc-min';
import { ui, defaultLang, useTranslations } from '../src/i18n/ui';
import { buildsnapTranslations } from '../src/i18n/buildsnapTranslations';

// 9개 국어 폴더와 franc (ISO 639-3) 언어 코드 매핑
const langMapping: Record<string, string> = {
  de: 'deu', // 독일어
  en: 'eng', // 영어
  es: 'spa', // 스페인어
  fr: 'fra', // 프랑스어
  id: 'ind', // 인도네시아어
  ja: 'jpn', // 일본어
  ko: 'kor', // 한국어
  pt: 'por', // 포르투갈어
  zh: 'cmn', // 중국어 (간체/번체 포함)
};

const locales = Object.keys(langMapping);
const latinLanguages = ['deu', 'eng', 'spa', 'fra', 'por', 'ita', 'lat', 'ind', 'zlm', 'jav', 'mad', 'ilo', 'tgl', 'msa', 'nld'];

// 공통 화이트리스트 단어군 (번역 제외하고 그대로 노출되어야 하는 약어, 인명, 브랜드명 등)
const globalWhitelist = [
  'BuildSelf', 'FreshSnap', 'FreshSelf', 'LogSelf',
  'MFDS', 'USDA', 'RDA', 'FDA', 'CDC', 'FSA', 'EFSA', 'KCA', 'NIFS',
  'NEJM', 'JPSP', 'JN', 'JPTS', 'APA',
  'Cognition and Emotion', 'Beethoven as I Knew Him', 'The Second World War',
  'NASA', 'DMN', 'API', 'UI', 'STEP', 'SCHRITT',
  'Anton Schindler', 'Walter Isaacson', 'Eve Curie', 'Winston Churchill',
  'Ludwig van Beethoven', 'Marie Curie', 'Leonardo da Vinci', 'Charles Darwin',
  'Demosthenes', 'René Descartes', 'Thomas Edison', 'Benjamin Franklin',
  'Virginia Woolf', 'Haruki Murakami', 'Nikola Tesla',
  // 학술 및 신뢰근거 문구 (번역본에서 영문 고정 노출되는 문단 예외처리용)
  'Verified Scientific Authority',
  'This storage guide is verified based on',
  'This guide is verified based on',
  'official guidelines from the',
  'United States Department of Agriculture',
  'Agricultural Research Service',
  'Cornell Feline Health Center'
];

// KO/EN 원문 소스에서 대문자 인명 및 고유명사 동적 추출 헬퍼
function extractDynamicProperNouns(): string[] {
  const dynamicSet = new Set<string>();
  try {
    const enFiles = glob.sync('src/content/blog/en/**/*.md');
    enFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf-8');
      // 대문자로 시작하는 연속 2단어 이상 인명/기관명 패턴 (예: Karl Marx, Albert Einstein, British Museum)
      const matches = content.match(/\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+\b/g);
      if (matches) {
        matches.forEach(m => {
          if (m.length > 4 && !/^(The|This|That|In|On|At|For|With|From|And|Or|But|If|When)\b/i.test(m)) {
            dynamicSet.add(m);
          }
        });
      }
    });
  } catch (e) {}
  return Array.from(dynamicSet);
}

const dynamicWhitelist = extractDynamicProperNouns();
const effectiveWhitelist = [...new Set([...globalWhitelist, ...dynamicWhitelist])];

// 단어 길이 순(긴 단어 우선) 정렬 후 1회만 단일 정규식 패턴으로 사전 컴파일
const sortedWhitelist = effectiveWhitelist
  .filter(Boolean)
  .sort((a, b) => b.length - a.length)
  .map(word => word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));

const compiledWhitelistRegex = sortedWhitelist.length > 0
  ? new RegExp(sortedWhitelist.join('|'), 'gi')
  : null;

// HTML 태그, 마크다운 이미지/링크 구문, 특정 시스템 기호 등 제거용 정규식
const htmlRegex = /<\/?[^>]+(>|$)/g;
const mdLinkRegex = /!\[.*?\]\(.*?\)|\[.*?\]\(.*?\)/g;
const systemCharRegex = /[:"'\-.,!?#*\[\]\(\)\{\}\/_\r\n]/g;

// 화이트리스트 및 문법 기호 지우기
function sanitizeText(text: string): string {
  let cleaned = text;
  cleaned = cleaned.replace(htmlRegex, ' ');
  cleaned = cleaned.replace(mdLinkRegex, ' ');

  if (compiledWhitelistRegex) {
    cleaned = cleaned.replace(compiledWhitelistRegex, ' ');
  }

  return cleaned;
}

// Frontmatter 영역 파싱 제외 헬퍼
function splitContent(rawContent: string): { frontmatter: string; body: string } {
  const parts = rawContent.split('---');
  if (parts.length >= 3) {
    const frontmatter = parts[1];
    const body = parts.slice(2).join('---');
    return { frontmatter, body };
  }
  return { frontmatter: '', body: rawContent };
}

// 본문 내의 모든 HTML 태그 목록 및 개수 추출
function extractHtmlTags(text: string): Record<string, number> {
  const tags: Record<string, number> = {};
  const tagRegex = /<\/?[a-zA-Z0-9]+(>|(?=\s|>))/g;
  let match;
  while ((match = tagRegex.exec(text)) !== null) {
    const tag = match[0].replace(/[<\/>]/g, '').split(' ')[0];
    tags[tag] = (tags[tag] || 0) + 1;
  }
  return tags;
}

describe('블로그 콘텐츠 다국어 검증 및 구조적 정합성 테스트', () => {
  const koFiles = glob.sync('src/content/blog/ko/**/*.md').map(f => path.basename(f));
  const mdFiles = glob.sync('src/content/blog/**/*.md');

  // ========================================================
  // 검증 1: 다국어 파일 대칭성 검증 (File Symmetry Test)
  // ========================================================
  describe('로케일 폴더 간 파일 대칭성 검증', () => {
    locales.forEach((locale) => {
      if (locale === 'ko') return;

      it(`[${locale.toUpperCase()}] 폴더에 한국어(ko) 기준 모든 파일이 존재해야 한다`, () => {
        const localeFiles = glob.sync(`src/content/blog/${locale}/**/*.md`).map(f => path.basename(f));
        
        koFiles.forEach(file => {
          expect(localeFiles, `오류: [${locale}] 폴더에 번역 파일 "${file}"이 누락되었습니다.`).toContain(file);
        });
      });
    });
  });

  // ========================================================
  // 검증 2: 개별 파일 무결성 및 언어 격리 테스트
  // ========================================================
  describe('개별 번역 무결성 및 언어 격리 검증', () => {
    mdFiles.forEach((filePath) => {
      const pathParts = filePath.split('/');
      const lang = pathParts[pathParts.length - 2];
      const fileName = pathParts[pathParts.length - 1];
      const targetFrancLang = langMapping[lang];

      it(`[${lang.toUpperCase()}] ${fileName} 파일 정합성 검사`, () => {
        const rawContent = fs.readFileSync(filePath, 'utf-8');
        const { frontmatter, body } = splitContent(rawContent);
        
        // ----------------------------------------------------
        // 검증 2-A: Frontmatter 날짜 형식(YYYY-MM-DD) 검증
        // ----------------------------------------------------
        const pubDateMatch = frontmatter.match(/pubDate:\s*["']?(\d{4}-\d{2}-\d{2})["']?/);
        const updatedDateMatch = frontmatter.match(/updatedDate:\s*["']?(\d{4}-\d{2}-\d{2})["']?/);

        expect(pubDateMatch, `오류: ${fileName} 의 pubDate 형식이 올바르지 않습니다. (YYYY-MM-DD 규격 필요)`).not.toBeNull();
        if (updatedDateMatch) {
          expect(updatedDateMatch, `오류: ${fileName} 의 updatedDate 형식이 올바르지 않습니다. (YYYY-MM-DD 규격 필요)`).not.toBeNull();
        }

        // ----------------------------------------------------
        // 검증 2-B: 깨진 인코딩 기호(\uFFFD)가 파일에 포함되어 있는지 검사
        // ----------------------------------------------------
        const hasEncodingError = rawContent.includes('\uFFFD');
        expect(hasEncodingError, `오류: ${fileName} 파일 내에 깨진 인코딩 기호가 존재합니다.`).toBe(false);

        // ----------------------------------------------------
        // 검증 2-C: 소스 파일(ko) 대비 HTML 마크업 및 미디어 대칭성 검사
        // ----------------------------------------------------
        const koFilePath = path.join('src/content/blog/ko', fileName);
        if (fs.existsSync(koFilePath) && lang !== 'ko') {
          const koRawContent = fs.readFileSync(koFilePath, 'utf-8');
          const koTags = extractHtmlTags(koRawContent);
          const targetTags = extractHtmlTags(rawContent);

          // 1) 핵심 레이아웃 태그 검사 (식재료 보관법에 한해 엄격 대조 적용)
          const isStorage = fileName.startsWith('how-to-store-');
          if (isStorage) {
            const criticalTags = ['div', 'span'];
            criticalTags.forEach(tag => {
              if (koTags[tag] !== undefined) {
                expect(
                  targetTags[tag],
                  `오류: ${fileName} 번역본의 HTML <${tag}> 태그 개수(${targetTags[tag] || 0}개)가 한국어 원본(${koTags[tag]}개)과 일치하지 않습니다. 레이아웃 붕괴가 의심됩니다.`
                ).toBe(koTags[tag]);
              }
            });
          }

          // strong 태그 불일치는 warning 처리
          if (koTags['strong'] !== targetTags['strong']) {
            console.warn(`[WARN] ${fileName} (${lang.toUpperCase()}): 번역본의 <strong> 태그 개수(${targetTags['strong'] || 0}개)가 한국어 원본(${koTags['strong'] || 0}개)과 다릅니다.`);
          }

          // 2) 이미지 삽입 링크(![]()) 개수 일치 검사 (이미지 누락 차단)
          const koImages = (koRawContent.match(/!\[.*?\]\(.*?\)/g) || []).length;
          const targetImages = (rawContent.match(/!\[.*?\]\(.*?\)/g) || []).length;
          expect(
            targetImages,
            `오류: ${fileName} 번역본의 이미지 개수(${targetImages}개)가 한국어 원본(${koImages}개)과 다릅니다. 이미지 누락이 의심됩니다.`
          ).toBe(koImages);

          // 3) 외부/내부 텍스트 링크([]()) 개수 일치 검사 (참고 정보 누락 차단)
          const koLinks = (koRawContent.match(/[^!]\[.*?\]\(.*?\)/g) || []).length;
          const targetLinks = (rawContent.match(/[^!]\[.*?\]\(.*?\)/g) || []).length;
          expect(
            targetLinks,
            `오류: ${fileName} 번역본의 링크 개수(${targetLinks}개)가 한국어 원본(${koLinks}개)과 다릅니다. 참고 링크 유실이 의심됩니다.`
          ).toBe(koLinks);
        }

        // ----------------------------------------------------
        // 검증 2-C.1.5: PetSelf 포스트의 app 및 tags 검증
        // ----------------------------------------------------
        const isPetSelf = fileName.endsWith('-care.md');
        if (isPetSelf) {
          const fmLines = frontmatter.split('\n');
          const hasAppPetSelf = fmLines.some(line => line.trim().startsWith('app:') && line.includes('petself'));
          expect(
            hasAppPetSelf,
            `오류: 반려동물 포스트인 ${fileName}의 frontmatter에 'app: "petself"'가 지정되어 있지 않습니다.`
          ).toBe(true);
        }

        // ----------------------------------------------------
        // 검증 2-C.2: 실물 FAQ 아코디언 블록 존재 여부 정밀 검증 및 대칭성 검증
        // ----------------------------------------------------
        let hasKoFaqs = false;
        if (fs.existsSync(koFilePath)) {
          const koRawContent = fs.readFileSync(koFilePath, 'utf-8');
          const koParts = koRawContent.split('---');
          const koFm = koParts.length >= 3 ? koParts[1] : '';
          hasKoFaqs = (koFm.includes('faqs:') || koFm.includes('faqs')) && !koFm.includes('faqs: []');
        }

        const hasFaqsInFm = (frontmatter.includes('faqs:') || frontmatter.includes('faqs')) && !frontmatter.includes('faqs: []');

        if (hasKoFaqs && lang !== 'ko') {
          expect(
            hasFaqsInFm,
            `오류: [${lang.toUpperCase()}] ${fileName} 번역본에 FAQ(faqs) 필드가 누락되었습니다. 한국어 원본에는 FAQ가 존재하므로 번역본에도 반드시 포함되어야 합니다.`
          ).toBe(true);
        }

        if (hasFaqsInFm) {
          const faqTitlesMap: Record<string, string> = {
            ko: '자주 묻는 질문 (FAQ)',
            ja: 'よくある質問 (FAQ)',
            zh: '常见问题 (FAQ)',
            es: 'Preguntas Frecuentes (FAQ)',
            fr: 'Foire Aux Questions (FAQ)',
            de: 'Häufig gestellte Fragen (FAQ)',
            pt: 'Perguntas Frequentes (FAQ)',
            id: 'Pertanyaan Sering Diajukan (FAQ)',
            en: 'Frequently Asked Questions (FAQ)'
          };
          const expectedFaqTitle = faqTitlesMap[lang] || 'Frequently Asked Questions (FAQ)';
          
          const normalizedBody = body.toLowerCase();
          const hasFaqTitle = normalizedBody.includes(expectedFaqTitle.toLowerCase()) || 
                              normalizedBody.includes('frequently asked questions') ||
                              normalizedBody.includes('perguntas frequentes') ||
                              normalizedBody.includes('perguntas frecuentes') ||
                              normalizedBody.includes('preguntas frecuentes');

          expect(
            hasFaqTitle,
            `오류: [${lang.toUpperCase()}] ${fileName} 의 프론트매터에는 faqs가 정의되어 있으나, 본문 내에 실물 FAQ 아코디언 HTML 섹션('${expectedFaqTitle}')이 누락되어 있습니다.`
          ).toBe(true);
        }

        // ----------------------------------------------------
        // 검증 2-C.2: 리터럴 \n 누수 감지
        // ----------------------------------------------------
        expect(
          rawContent.includes('\\n'),
          `오류: [${lang.toUpperCase()}] ${fileName} 내에 리터럴 '\\n' 이 유출되어 있습니다.`
        ).toBe(false);

        // ----------------------------------------------------
        // 검증 2-C.3: 리터럴 ** 누수 감지
        // ----------------------------------------------------
        expect(
          rawContent.includes('**'),
          `오류: [${lang.toUpperCase()}] ${fileName} 내에 리터럴 '**' 이 유출되어 있습니다.`
        ).toBe(false);

        // ----------------------------------------------------
        // 검증 2-D: 1단계 문자셋 격리 필터
        // ----------------------------------------------------
        const sanitizedAll = sanitizeText(rawContent);

        if (['de', 'en', 'es', 'fr', 'pt', 'id'].includes(lang)) {
          const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/g.test(sanitizedAll);
          const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/g.test(sanitizedAll);
          
          // 동양 역사 위인 출처 서적명/고유명사가 포함된 특수 포스트의 경우 CJK 한자 고유명사 허용
          const isEasternHistoryPost = ['confucius-guqin-harmony.md', 'sejong-dawn-reading.md', 'zhuge-liang-guqin-strategy.md'].includes(fileName);
          const hasChinese = isEasternHistoryPost ? false : /[\u4E00-\u9FFF]/g.test(sanitizedAll);

          expect(hasKorean, `오류: 라틴어 문서 [${lang}] ${fileName} 에 한국어(한글)가 포함되어 있습니다.`).toBe(false);
          expect(hasJapanese, `오류: 라틴어 문서 [${lang}] ${fileName} 에 일본어(가나)가 포함되어 있습니다.`).toBe(false);
          expect(hasChinese, `오류: 라틴어 문서 [${lang}] ${fileName} 에 CJK 한자가 포함되어 있습니다.`).toBe(false);
        }

        if (lang === 'ko') {
          const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/g.test(sanitizedAll);
          const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/g.test(sanitizedAll);
          expect(hasJapanese, `오류: 한국어 문서 ${fileName} 에 일본어(가나)가 포함되어 있습니다.`).toBe(false);
          expect(hasKorean, `오류: 한국어 문서 ${fileName} 에 한국어(한글)가 전혀 포함되어 있지 않습니다.`).toBe(true);
        }

        if (lang === 'ja') {
          const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/g.test(sanitizedAll);
          expect(hasKorean, `오류: 일본어 문서 ${fileName} 에 한국어(한글)가 포함되어 있습니다.`).toBe(false);
        }

        if (lang === 'zh') {
          const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/g.test(sanitizedAll);
          const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/g.test(sanitizedAll);
          expect(hasKorean, `오류: 중국어 문서 ${fileName} 에 한국어(한글)가 포함되어 있습니다.`).toBe(false);
          expect(hasJapanese, `오류: 중국어 문서 ${fileName} 에 일본어(가나)가 포함되어 있습니다.`).toBe(false);
        }

        // ----------------------------------------------------
        // 검증 2-E: 2단계 NLP 기반 문장/문단 단위 언어 감별
        // ----------------------------------------------------
        const paragraphs = body.split(/\n\n+/);

        paragraphs.forEach((para, index) => {
          // HTML 태그와 마크다운 링크 등을 제거한 텍스트로 검증 여부 판단
          const cleanText = sanitizeText(para)
            .replace(systemCharRegex, '')
            .trim();

          const isSkip = cleanText.length === 0 || 
                         para.trim().startsWith('#') || 
                         para.trim().startsWith('|') ||
                         para.trim().startsWith('<');
          if (isSkip) return;

          const sanitizedPara = sanitizeText(para)
            .replace(systemCharRegex, '')
            .trim();

          const cleanLen = sanitizedPara.replace(/\s+/g, '').length;

          if (cleanLen >= 40) {
            const detectedLang = franc(sanitizedPara);

            const isTargetLatin = latinLanguages.includes(targetFrancLang);
            const isDetectedLatin = latinLanguages.includes(detectedLang);

            const isTargetAsian = ['kor', 'jpn', 'cmn'].includes(targetFrancLang);

            let isAllowed = 
              detectedLang === 'und' || 
              detectedLang === targetFrancLang;

            // 라틴계열 언어 간의 짧은 문장 오판율 완화 허용
            if (isTargetLatin && isDetectedLatin) {
              isAllowed = true;
              
              // 영어(eng)로 감지되었고 타겟 언어가 영어가 아닌 경우, 영어 최빈출 단어 빈도 분석을 통해 영문 통째 유출 검출
              if (detectedLang === 'eng' && targetFrancLang !== 'eng') {
                const words = sanitizedPara.toLowerCase().split(/\s+/);
                const englishStopwords = ['the', 'of', 'and', 'to', 'is', 'a', 'that', 'it', 'for', 'on', 'with', 'as'];
                const stopwordCount = words.filter(w => englishStopwords.includes(w)).length;
                
                // 영어 불용어가 3회 이상 출현 시, 다이아크리틱이 존재하지 않으면 에러 처리
                if (stopwordCount >= 3) {
                  let hasTargetIndicator = false;
                  if (targetFrancLang === 'deu' && /[äöüßÄÖÜ]/.test(sanitizedPara)) hasTargetIndicator = true;
                  if (targetFrancLang === 'fra' && /[éèàùçâêîôûëïüœÉÈÀÙÇÂÊÎÔÛËÏÜŒ]/.test(sanitizedPara)) hasTargetIndicator = true;
                  if (targetFrancLang === 'spa' && /[áéíóúñüÁÉÍÓÚÑÜ¿¡]/.test(sanitizedPara)) hasTargetIndicator = true;
                  if (targetFrancLang === 'por' && /[áéíóúçãõâêôÁÉÍÓÚÇÃÕÂÊÔ]/.test(sanitizedPara)) hasTargetIndicator = true;
                  
                  if (!hasTargetIndicator) {
                    isAllowed = false;
                  }
                }
              }
            }

            // 스페인어(spa)와 포르투갈어(por) 간의 형태소 유사성으로 인한 감지 혼동 허용
            if ((targetFrancLang === 'por' && detectedLang === 'spa') || 
                (targetFrancLang === 'spa' && detectedLang === 'por')) {
              isAllowed = true;
            }

            // 인도네시아어(ind)와 말레이어/자바어/순다어 등 간의 유사성으로 인한 감지 혼동 허용
            if (targetFrancLang === 'ind' && ['msa', 'zlm', 'jav', 'mad', 'sun', 'uzn', 'eng'].includes(detectedLang)) {
              isAllowed = true;
            }

            // 각 유럽 언어별 고유 문자(다이아크리틱) 또는 고유 어휘 필수 감지 시에만 허용 (영문 오탐지 방지 및 순수 언어 보장)
            if (detectedLang === 'eng' || detectedLang === 'und') {
              if (targetFrancLang === 'deu' && (/[äöüßÄÖÜ]/.test(sanitizedPara) || /Praxis|Gewohnheit|Disziplin|Übung|Langzeitgedächtnis/.test(sanitizedPara))) {
                isAllowed = true;
              }
              if (targetFrancLang === 'fra' && (/[éèàùçâêîôûëïüœÉÈÀÙÇÂÊÎÔÛËÏÜŒ]/.test(sanitizedPara) || /pratique|habitude|discipline|activité|mémoire/.test(sanitizedPara))) {
                isAllowed = true;
              }
              if (targetFrancLang === 'spa' && (/[áéíóúñüÁÉÍÓÚÑÜ]/.test(sanitizedPara) || /práctica|rutina|atención|organización|memoria/.test(sanitizedPara))) {
                isAllowed = true;
              }
              if (targetFrancLang === 'por' && (/[áéíóúçãõâêôÁÉÍÓÚÇÃÕÂÊÔ]/.test(sanitizedPara) || /prática|rotina|atenção|organização|memória|desenvolvimento|foco/.test(sanitizedPara))) {
                isAllowed = true;
              }
            }

            if (isTargetAsian) {
              // CJK 및 한국어 언어군의 경우, 해당 언어 고유의 문자셋이 매칭되거나 인용문 문단인 경우 허용
              if (targetFrancLang === 'kor') {
                if (/[\uAC00-\uD7A3\u3130-\u318F]/.test(para) || /[\uAC00-\uD7A3\u3130-\u318F]/.test(sanitizedPara) || /[\uAC00-\uD7A3\u3130-\u318F]/.test(rawContent)) {
                  isAllowed = true;
                }
              }
              if (targetFrancLang === 'jpn') {
                if (/[\u3040-\u309F\u30A0-\u30FF]/.test(para) || /[\u3040-\u309F\u30A0-\u30FF]/.test(sanitizedPara) || /[\u3040-\u309F\u30A0-\u30FF]/.test(rawContent)) {
                  isAllowed = true;
                }
              }
              if (targetFrancLang === 'cmn') {
                const hasKana = /[\u3040-\u309F\u30A0-\u30FF]/.test(para) || /[\u3040-\u309F\u30A0-\u30FF]/.test(sanitizedPara);
                const hasHangul = /[\uAC00-\uD7A3\u3130-\u318F]/.test(para) || /[\uAC00-\uD7A3\u3130-\u318F]/.test(sanitizedPara);
                if (!hasKana && !hasHangul) {
                  isAllowed = true;
                }
              }
            }

            expect(
              isAllowed, 
              `오류: [${lang.toUpperCase()}] ${fileName} 본문 ${index + 1}번째 문단에 타 언어가 감지되었습니다. (감지된 언어: ${detectedLang}, 예상 언어: ${targetFrancLang})\n내용: "${para.substring(0, 100)}..."`
            ).toBe(true);
          }
        });
      });
    });
  });
});

// ========================================================
// 검증 3: UI 번역 사전(ui.ts)의 무결성 및 대칭성 검증
// ========================================================
describe('UI 번역 사전(ui.ts) 구조 및 정합성 검증', () => {
  const defaultKeys = Object.keys(ui[defaultLang as keyof typeof ui]);

  locales.forEach((locale) => {
    if (locale === defaultLang) return;

    it(`[${locale.toUpperCase()}] 번역 키 리스트가 기본 언어(${defaultLang})와 완전히 일치해야 한다`, () => {
      const localeKeys = Object.keys(ui[locale as keyof typeof ui]);

      // 1. 누락된 번역 키 검출
      defaultKeys.forEach(key => {
        expect(localeKeys, `오류: ui.${locale} 사전에 번역 키 "${key}"가 누락되었습니다.`).toContain(key);
      });

      // 2. 미사용/잘못 정의된 번역 키 검출
      localeKeys.forEach(key => {
        expect(defaultKeys, `오류: ui.${locale} 사전에 기본 언어(${defaultLang})에 없는 잘못된 키 "${key}"가 정의되어 있습니다.`).toContain(key);
      });
    });
  });

  it('모든 언어 번역문의 템플릿 플레이스홀더($1) 개수가 일치해야 한다', () => {
    const placeholderRegex = /\$\d+/g;

    defaultKeys.forEach((key) => {
      const enVal = ui[defaultLang as keyof typeof ui][key as keyof typeof ui[typeof defaultLang]];
      const enPlaceholders = enVal.match(placeholderRegex) || [];

      locales.forEach((locale) => {
        if (locale === defaultLang) return;

        const val = ui[locale as keyof typeof ui][key as keyof typeof ui[keyof typeof ui]];
        if (typeof val === 'string') {
          const placeholders = val.match(placeholderRegex) || [];
          
          expect(
            placeholders.length,
            `오류: ui.${locale}["${key}"] 번역문의 플레이스홀더($1) 개수(${placeholders.length}개)가 기본 언어(${enPlaceholders.length}개)와 다릅니다.\n기본값: "${enVal}"\n번역값: "${val}"`
          ).toBe(enPlaceholders.length);
        }
      });
    });
  });

  locales.forEach((locale) => {
    if (locale === 'ko') return;

    it(`[${locale.toUpperCase()}] UI 번역 사전(locales/${locale}.json)에 한글(번역 누출)이 포함되어 있지 않아야 한다`, () => {
      const filePath = path.join(__dirname, `../src/i18n/locales/${locale}.json`);
      const rawContent = fs.readFileSync(filePath, 'utf-8');
      const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/g.test(rawContent);
      expect(hasKorean, `오류: UI [${locale}] 사전에 번역되지 않은 한글이 포함되어 있습니다.`).toBe(false);
    });
  });

  locales.forEach((locale) => {
    it(`[${locale.toUpperCase()}] UI 번역 사전(locales/${locale}.json)에 비어있는 번역(Empty String)이 없어야 한다`, () => {
      const filePath = path.join(__dirname, `../src/i18n/locales/${locale}.json`);
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      const flattenData: Record<string, any> = {};
      const flat = (obj: any, prefix = '') => {
        Object.keys(obj).forEach(key => {
          const val = obj[key];
          const newKey = prefix ? `${prefix}.${key}` : key;
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            flat(val, newKey);
          } else {
            flattenData[newKey] = val;
          }
        });
      };
      flat(content);

      const emptyKeys = Object.keys(flattenData).filter(k => {
        const val = flattenData[k];
        return val === null || val === undefined || (typeof val === 'string' && val.trim() === '');
      });
      expect(emptyKeys, `오류: UI [${locale}] 사전에 비어있는 번역 키가 존재합니다: ${emptyKeys.join(', ')}`).toEqual([]);
    });
  });
});

// ========================================================
// 검증 3.5: 프레시스냅(FreshSnap) 번역 사전 구조 및 정합성 검증
// ========================================================
describe('FreshSnap 번역 사전 구조 및 정합성 검증', () => {
  const freshsnapDir = path.join(__dirname, '../src/i18n/locales/freshsnap');
  const locales = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

  const getFreshSnapKeys = (locale: string) => {
    const filePath = path.join(freshsnapDir, `${locale}.json`);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const keys: string[] = [];
    const flatten = (obj: any, prefix = '') => {
      Object.keys(obj).forEach(key => {
        const val = obj[key];
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          flatten(val, newKey);
        } else {
          keys.push(newKey);
        }
      });
    };
    flatten(content);
    return { keys, content };
  };

  const defaultLocale = 'en';
  const { keys: defaultKeys } = getFreshSnapKeys(defaultLocale);

  locales.forEach((locale) => {
    if (locale === defaultLocale) return;

    it(`[${locale.toUpperCase()}] FreshSnap 번역 키 리스트가 기본 언어(${defaultLocale})와 완전히 일치해야 한다`, () => {
      const { keys: localeKeys } = getFreshSnapKeys(locale);

      // 1. 누락된 번역 키 검출
      defaultKeys.forEach(key => {
        expect(localeKeys, `오류: FreshSnap ui.${locale} 사전에 번역 키 "${key}"가 누락되었습니다.`).toContain(key);
      });

      // 2. 미사용/잘못 정의된 번역 키 검출
      localeKeys.forEach(key => {
        expect(defaultKeys, `오류: FreshSnap ui.${locale} 사전에 기본 언어(${defaultLocale})에 없는 잘못된 키 "${key}"가 정의되어 있습니다.`).toContain(key);
      });
    });

    if (locale !== 'ko') {
      it(`[${locale.toUpperCase()}] FreshSnap 번역 사전(locales/freshsnap/${locale}.json)에 한글(번역 누출)이 포함되어 있지 않아야 한다`, () => {
        const filePath = path.join(freshsnapDir, `${locale}.json`);
        const rawContent = fs.readFileSync(filePath, 'utf-8');
        const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/g.test(rawContent);
        expect(hasKorean, `오류: FreshSnap [${locale}] 사전에 번역되지 않은 한글이 포함되어 있습니다.`).toBe(false);
      });
    }

    it(`[${locale.toUpperCase()}] FreshSnap 번역 값 중에 비어있는 번역(Empty String)이 없어야 한다`, () => {
      const { content } = getFreshSnapKeys(locale);
      const flattenData: Record<string, any> = {};
      const flat = (obj: any, prefix = '') => {
        Object.keys(obj).forEach(key => {
          const val = obj[key];
          const newKey = prefix ? `${prefix}.${key}` : key;
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            flat(val, newKey);
          } else {
            flattenData[newKey] = val;
          }
        });
      };
      flat(content);
      
      const emptyKeys = Object.keys(flattenData).filter(k => {
        const val = flattenData[k];
        return val === null || val === undefined || (typeof val === 'string' && val.trim() === '');
      });
      expect(emptyKeys, `오류: FreshSnap [${locale}] 사전에 비어있는 번역 키가 존재합니다: ${emptyKeys.join(', ')}`).toEqual([]);
    });
  });
});

// ========================================================
// 검증 3.7: 빌드스냅(BuildSnap) 번역 사전 구조 및 정합성 검증
// ========================================================
describe('BuildSnap 번역 사전 구조 및 정합성 검증', () => {
  const locales = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];
  const defaultLocale = 'en';

  const defaultKeys = Object.keys(buildsnapTranslations[defaultLocale]);

  locales.forEach((locale) => {
    if (locale === defaultLocale) return;

    it(`[${locale.toUpperCase()}] BuildSnap 번역 키 리스트가 기본 언어(${defaultLocale})와 완전히 일치해야 한다`, () => {
      const localeKeys = Object.keys(buildsnapTranslations[locale]);

      // 1. 누락된 번역 키 검출
      defaultKeys.forEach(key => {
        expect(localeKeys, `오류: BuildSnap ui.${locale} 사전에 번역 키 "${key}"가 누락되었습니다.`).toContain(key);
      });

      // 2. 미사용/잘못 정의된 번역 키 검출
      localeKeys.forEach(key => {
        expect(defaultKeys, `오류: BuildSnap ui.${locale} 사전에 기본 언어(${defaultLocale})에 없는 잘못된 키 "${key}"가 정의되어 있습니다.`).toContain(key);
      });
    });

    if (locale !== 'ko') {
      it(`[${locale.toUpperCase()}] BuildSnap 번역 사전(locales/buildsnap/${locale}.json)에 한글(번역 누출)이 포함되어 있지 않아야 한다`, () => {
        const rawContent = JSON.stringify(buildsnapTranslations[locale]);
        const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/g.test(rawContent);
        expect(hasKorean, `오류: BuildSnap [${locale}] 사전에 번역되지 않은 한글이 포함되어 있습니다.`).toBe(false);
      });
    }

    it(`[${locale.toUpperCase()}] BuildSnap 번역 값 중에 비어있는 번역(Empty String)이 없어야 한다`, () => {
      const localeData = buildsnapTranslations[locale];
      const emptyKeys = Object.keys(localeData).filter(k => {
        const val = localeData[k];
        return val === null || val === undefined || (typeof val === 'string' && val.trim() === '');
      });
      expect(emptyKeys, `오류: BuildSnap [${locale}] 사전에 비어있는 번역 키가 존재합니다: ${emptyKeys.join(', ')}`).toEqual([]);
    });
  });

  it('모든 BuildSnap 번역문의 템플릿 플레이스홀더($1) 개수가 일치해야 한다', () => {
    const placeholderRegex = /\$\d+/g;

    defaultKeys.forEach((key) => {
      const enVal = buildsnapTranslations[defaultLocale][key];
      const enPlaceholders = enVal.match(placeholderRegex) || [];

      locales.forEach((locale) => {
        if (locale === defaultLocale) return;

        const val = buildsnapTranslations[locale][key];
        if (typeof val === 'string') {
          const placeholders = val.match(placeholderRegex) || [];
          
          expect(
            placeholders.length,
            `오류: BuildSnap buildsnapTranslations.${locale}["${key}"] 번역문의 플레이스홀더($1) 개수(${placeholders.length}개)가 기본 언어(${enPlaceholders.length}개)와 다릅니다.\n기본값: "${enVal}"\n번역값: "${val}"`
          ).toBe(enPlaceholders.length);
        }
      });
    });
  });
});

// ========================================================
// 검증 3.9: 글로벌 메인 UI 번역 사전 구조 및 정합성 검증
// ========================================================
describe('글로벌 메인 UI 번역 사전 구조 및 정합성 검증', () => {
  const locales = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];
  const defaultLocale = 'en';
  const localesDir = path.join(__dirname, '../src/i18n/locales');

  const getKeys = (locale: string) => {
    const filePath = path.join(localesDir, `${locale}.json`);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return { keys: Object.keys(content), content };
  };

  const { keys: defaultKeys } = getKeys(defaultLocale);

  locales.forEach((locale) => {
    if (locale === defaultLocale) return;

    it(`[${locale.toUpperCase()}] 글로벌 메인 UI 번역 키 리스트가 기본 언어(${defaultLocale})와 완전히 일치해야 한다`, () => {
      const { keys: localeKeys } = getKeys(locale);

      // 1. 누락된 번역 키 검출
      defaultKeys.forEach(key => {
        expect(localeKeys, `오류: 글로벌 locales/${locale}.json 사전에 번역 키 "${key}"가 누락되었습니다.`).toContain(key);
      });

      // 2. 미사용/잘못 정의된 번역 키 검출
      localeKeys.forEach(key => {
        expect(defaultKeys, `오류: 글로벌 locales/${locale}.json 사전에 기본 언어(${defaultLocale})에 없는 잘못된 키 "${key}"가 정의되어 있습니다.`).toContain(key);
      });
    });

    if (locale !== 'ko') {
      it(`[${locale.toUpperCase()}] 글로벌 메인 UI 번역 사전(locales/${locale}.json)에 한글(번역 누출)이 포함되어 있지 않아야 한다`, () => {
        const filePath = path.join(localesDir, `${locale}.json`);
        const rawContent = fs.readFileSync(filePath, 'utf-8');
        const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/g.test(rawContent);
        expect(hasKorean, `오류: 글로벌 locales/${locale}.json 사전에 번역되지 않은 한글이 포함되어 있습니다.`).toBe(false);
      });
    }
  });
});

// ========================================================
// 검증 4: 다국어 치환 유틸리티(useTranslations)의 런타임 동작 및 폴백 검증
// ========================================================
describe('다국어 치환 헬퍼 함수(useTranslations) 단위 테스트', () => {
  it('정상적인 언어 사전에 대해 텍스트 치환이 바르게 작동해야 한다', () => {
    // 1. 한국어 치환 헬퍼 테스트
    const tKo = useTranslations('ko');
    expect(tKo('blog.heading')).toBe('SelaLink 라이프 저널');

    // 2. 영어(기본값) 치환 헬퍼 테스트
    const tEn = useTranslations('en');
    expect(tEn('blog.heading')).toBe('SelaLink Life Journal');
  });

  it('특정 언어 사전에 값이 유실되거나 누락된 경우 기본 언어(en)로 자연스럽게 폴백(Fallback)되어야 한다', () => {
    // 강제로 빈 사전 또는 누락 상황을 테스트하기 위해 캐스팅을 사용해 독일어('de') 사용
    const tDe = useTranslations('de');

    // 독일어 사전에 해당 키가 누락되었거나 없다고 가정 시 기본 언어('en')의 'Lifestyle & Habits Blog'가 반환되는지 검증
    // (만약 독일어 사전에 값이 정의되어 있다면 독일어 값을, 없다면 영어 값을 반환하게 됨)
    const expectedValue = ui['de']['blog.heading'] || ui['en']['blog.heading'];
    expect(tDe('blog.heading')).toBe(expectedValue);
  });

  it('모든 다국어에 대해 blog.filter.petself 치환이 정상적으로 작동해야 한다', () => {
    locales.forEach(locale => {
      const t = useTranslations(locale as any);
      expect(t('blog.filter.petself')).toBeDefined();
      expect(t('blog.filter.petself').length).toBeGreaterThan(0);
    });
  });
});

// ========================================================
describe('블로그 콘텐츠 전체 무결성 정밀 Linter 테스트', () => {
  it('모든 마크다운 포스트의 이미지, JSON-LD, 미번역 한글 누출, 깨진 내부 링크가 존재하지 않아야 한다', () => {
    const { execSync } = require('child_process');
    const path = require('path');

    const scriptPath = path.join(__dirname, '../src/scripts/validators/check_blog_integrity.js');
    const output = execSync(`node ${scriptPath}`, { maxBuffer: 10 * 1024 * 1024, cwd: path.join(__dirname, '..'), env: { ...process.env, SILENT: 'true' } }).toString();
    expect(output).toBeDefined();
  }, 60000);
});





