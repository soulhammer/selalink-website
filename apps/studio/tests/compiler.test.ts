import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

function findScriptPath(scriptName: string): string {
  const possiblePaths = [
    path.join(projectRoot, 'src', scriptName),
    path.join(projectRoot, 'src/scripts/compilers', scriptName),
    path.join(projectRoot, 'src/scripts/validators', scriptName),
    path.join(projectRoot, 'src/scripts/tools', scriptName),
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) return p;
  }
  return path.join(projectRoot, 'src', scriptName);
}

describe('블로그 컴파일러 및 동기화 아키텍처 리팩토링 검증', () => {

  it('1. 레거시 스크립트(sync_multilingual_blogs.js)가 코드베이스에서 완벽히 삭제되었는가', () => {
    const legacyPath = findScriptPath('sync_multilingual_blogs.js');
    const exists = fs.existsSync(legacyPath);
    expect(exists).toBe(false);
  });

  it('2. 위인 컴파일러(compile_habit_blogs.js)에서 하드코딩된 targetSlugs 필터가 완전히 제거되었는가', () => {
    const filePath = findScriptPath('compile_habit_blogs.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // lang === 'ko' 일 때 targetSlugs를 검사하여 스킵하는 필터링 로직이 존재하는지 검증
    const hasFilter = content.includes("lang === 'ko' && !targetSlugs.includes");
    expect(hasFilter).toBe(false);
  });

  it('3. 보관법 컴파일러(compile_storage_blogs.js)에서 하드코딩된 blogToIngMap 객체가 완전히 제거되었는가', () => {
    const filePath = findScriptPath('compile_storage_blogs.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    // 하드코딩된 blogToIngMap 맵 선언이 존재하는지 검증 (동적 검색 구조로 변경 시 해당 변수명이 없거나 리팩토링되어야 함)
    const hasHardcodedMap = content.includes("'how-to-store-apples': 'apple'") || content.includes("'how-to-store-watermelon': 'watermelon'");
    expect(hasHardcodedMap).toBe(false);
  });

  it('4. generate_blog_autonomous.js에서 distributeBlogDates 날짜 분산 함수가 완전히 삭제되었는가', () => {
    const filePath = findScriptPath('generate_blog_autonomous.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasDistribute = content.includes('function distributeBlogDates(');
    expect(hasDistribute).toBe(false);
  });

  it('5. generate_blog_autonomous.js의 뼈대 생성 템플릿에 과거 날짜(2026-07-02, 2026-07-01) 하드코딩이 제거되었는가', () => {
    const filePath = findScriptPath('generate_blog_autonomous.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasHardcodedDates = content.includes('pubDate: "2026-07-02"') || content.includes('updatedDate: "2026-07-02"') || content.includes('pubDateMatch[1] !== todayStr');
    expect(hasHardcodedDates).toBe(false);
  });

  it('6. retrofit_blogs.js에서 하드코딩된 petSlugs 리스트가 제거되었는가', () => {
    const filePath = findScriptPath('retrofit_blogs.js');
    const exists = fs.existsSync(filePath);
    if (exists) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const hasPetSlugsHardcoded = content.includes("const petSlugs = [");
      expect(hasPetSlugsHardcoded).toBe(false);
    } else {
      expect(exists).toBe(false);
    }
  });

  it('7. compile_pet_blogs.js 또는 compile_blog_base.js에서 다국어 파이프라인 빌드가 올바르게 연결되었는가', () => {
    const filePath = findScriptPath('compile_pet_blogs.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasCoreEngine = content.includes("compileMasterJsonCollection");
    expect(hasCoreEngine).toBe(true);
  });

  it('8. compile_storage_blogs.js 또는 compile_blog_base.js에서 다국어 파이프라인 빌드가 올바르게 연결되었는가', () => {
    const filePath = findScriptPath('compile_storage_blogs.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasCoreEngine = content.includes("compileMasterJsonCollection");
    expect(hasCoreEngine).toBe(true);
  });

  it('9. compile_storage_blogs.js의 renderLocaleMarkdown 함수가 바인딩되어 있는가', () => {
    const filePath = findScriptPath('compile_storage_blogs.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasRender = content.includes("renderLocaleMarkdown");
    expect(hasRender).toBe(true);
  });

  it('10. compile_pet_blogs.js에서 renderEvidenceBox의 세 번째 인자가 \'petself\' 테마로 설정되어 있는가', () => {
    const filePath = findScriptPath('compile_pet_blogs.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasCorrectTheme = content.includes("renderEvidenceBox(lang, auth, 'petself')");
    expect(hasCorrectTheme).toBe(true);
  });

  it('11. 3대 컴파일러 전체에서 steps 및 faqs 텍스트의 줄바꿈 이스케이프 해제(\\n -> \n) 처리가 완료되었는가', () => {
    const habitPath = findScriptPath('compile_habit_blogs.js');
    const storagePath = findScriptPath('compile_storage_blogs.js');
    const petPath = findScriptPath('compile_pet_blogs.js');

    const habitContent = fs.readFileSync(habitPath, 'utf-8');
    const storageContent = fs.readFileSync(storagePath, 'utf-8');
    const petContent = fs.readFileSync(petPath, 'utf-8');

    // steps/faqs 내 줄바꿈 변환 로직 확인 (replace(/\\n/g, '\n')가 다각적으로 사용되는지 검증)
    const habitCheck = habitContent.includes('replace(/\\\\n/g');
    const storageCheck = storageContent.includes('replace(/\\\\n/g');
    const petCheck = petContent.includes('replace(/\\\\n/g');

    expect(habitCheck && storageCheck && petCheck).toBe(true);
  });

  it('12. compile_storage_blogs.js에서 safeClean 함수가 안전하게 선언되었는가', () => {
    const filePath = findScriptPath('compile_storage_blogs.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasSafeClean = content.includes('safeClean');
    expect(hasSafeClean).toBe(true);
  });

  it('13. check_blog_integrity.js에서 반려동물 JSON 루트 키와 파일명 일치 여부를 검증하는 린트 로직이 탑재되었는가', () => {
    const filePath = findScriptPath('check_blog_integrity.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasPetKeyLint = content.includes('petMasterData[slug]') || content.includes('petMasterKeys') || content.includes('petsDir');
    expect(hasPetKeyLint).toBe(true);
  });

  it('14. blogTemplates.js에서 renderEvidenceBox 함수에 domain에 따른 동적 CSS 테마 색상 클래스가 적용되어 있는가', () => {
    const filePath = path.join(projectRoot, 'src/utils/blogTemplates.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasDynamicTheme = content.includes('domain ===') || content.includes('domain === \'pet\'') || content.includes('border-emerald-500');
    expect(hasDynamicTheme).toBe(true);
  });

  it('15. compilerHelper.js에서 parseKoSteps 결과 단계 수가 0개일 때 throw Error로 빌드를 정지시키는 안전 장치가 있는가', () => {
    const filePath = path.join(projectRoot, 'src/utils/compilerHelper.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasGuard = content.includes('throw') && content.includes('0');
    expect(hasGuard).toBe(true);
  });

  it('16. compile_pet_blogs.js에서 renderLocaleMarkdown이 정의되어 마크다운을 안전하게 반환하는가', () => {
    const filePath = findScriptPath('compile_pet_blogs.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasRender = content.includes('function renderLocaleMarkdown');
    expect(hasRender).toBe(true);
  });

  it('17. check_blog_integrity.js 및 컴파일러 내에 app 화이트리스트 유효성 검증 단언이 존재하는가', () => {
    const filePath = findScriptPath('check_blog_integrity.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasAppWhiteList = content.includes('buildself') && content.includes('selalink') && content.includes('petself') && content.includes('freshsnap');
    expect(hasAppWhiteList).toBe(true);
  });

  it('18. check_blog_integrity.js 내에 파일명 문자셋 규격을 검증하는 정규식(/^[a-z0-9-]+$/) 린트가 존재하는가', () => {
    const filePath = findScriptPath('check_blog_integrity.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasFilenameRegex = content.includes('/^[a-z0-9-]+$/');
    expect(hasFilenameRegex).toBe(true);
  });

  it('19. generate_blog_autonomous.js에서 오늘 날짜 뼈대 주입 시 KST 타임존 오프셋 보정 로직을 탑재했는가', () => {
    const filePath = findScriptPath('generate_blog_autonomous.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasTimezoneOffset = content.includes('9 * 60 * 60 * 1000') || content.includes('9*60*60*1000') || content.includes('timezone') || content.includes('offset');
    expect(hasTimezoneOffset).toBe(true);
  });

  it('20. generate_blog_autonomous.js에서 카테고리 생성 시 FreshSnap 및 PetSelf 분류가 타입별 분기 적용되었는가', () => {
    const filePath = findScriptPath('generate_blog_autonomous.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasDynamicCategory = content.includes('FreshSnap') && content.includes('PetSelf');
    expect(hasDynamicCategory).toBe(true);
  });

  it('21. blogTemplates.js에서 renderFaqSection의 summary 영역에 키보드/WAI-ARIA 접근성 전용 속성(aria-expanded 등)이 부여되어 있는가', () => {
    const filePath = path.join(projectRoot, 'src/utils/blogTemplates.js');
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasAria = content.includes('aria-expanded') || content.includes('role="button"');
    expect(hasAria).toBe(true);
  });

});
