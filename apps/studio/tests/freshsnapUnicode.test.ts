import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('FreshSnap Astro UI 템플릿 유니코드 한글 누출 스캐너 테스트', () => {
  it('FreshSnap [ingredient].astro 템플릿 내 다국어 치환되지 않은 하드코딩 한글 UI 텍스트가 존재하지 않아야 한다', () => {
    const filePath = path.join(__dirname, '../src/pages/[lang]/apps/freshsnap/[ingredient].astro');
    const content = fs.readFileSync(filePath, 'utf-8');

    // Astro Frontmatter script (--- ... ---) 영역 제외, HTML 마크업 영역만 스캔
    const markupContent = content.split('---').slice(2).join('---');
    const lines = markupContent.split('\n');
    const leakedLines: { lineNum: number; line: string }[] = [];

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const trimmed = line.trim();

      // HTML 주석 또는 코드/CSS 주석 제외
      if (trimmed.startsWith('<!--') || trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*')) {
        return;
      }

      // t('...') 바인딩 라인 및 tUi('...') 및 환경변수 제외
      if (trimmed.includes('{t(') || trimmed.includes("t('") || trimmed.includes('{tUi(') || trimmed.includes("tUi('") || trimmed.includes('import.meta.env')) {
        return;
      }

      // 유니코드 한글 검사 (\uAC00-\uD7AF)
      if (/[\uAC00-\uD7AF]/.test(trimmed)) {
        leakedLines.push({ lineNum, line: trimmed });
      }
    });

    if (leakedLines.length > 0) {
      console.error('⚠️ [HTML UI 누출 발견] [ingredient].astro 마크업 내 미번역 한글 하드코딩 라인들:', leakedLines);
    }

    expect(leakedLines.length, `오류: [ingredient].astro 마크업 내 ${leakedLines.length}개의 미번역 한글 UI 텍스트가 발견되었습니다.`).toBe(0);
  });

  it('FreshSnap index.astro 템플릿 내 다국어 치환되지 않은 하드코딩 한글 UI 텍스트가 존재하지 않아야 한다', () => {
    const filePath = path.join(__dirname, '../src/pages/[lang]/apps/freshsnap/index.astro');
    const content = fs.readFileSync(filePath, 'utf-8');

    const markupContent = content.split('---').slice(2).join('---');
    const lines = markupContent.split('\n');
    const leakedLines: { lineNum: number; line: string }[] = [];

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const trimmed = line.trim();

      if (trimmed.startsWith('<!--') || trimmed.startsWith('//') || trimmed.startsWith('*')) {
        return;
      }

      if (trimmed.includes('{t(') || trimmed.includes("t('") || trimmed.includes('{tUi(') || trimmed.includes("tUi('") || trimmed.includes('import.meta.env')) {
        return;
      }

      if (/[\uAC00-\uD7AF]/.test(trimmed)) {
        leakedLines.push({ lineNum, line: trimmed });
      }
    });

    if (leakedLines.length > 0) {
      console.error('⚠️ [HTML UI 누출 발견] freshsnap/index.astro 마크업 내 미번역 한글 하드코딩 라인들:', leakedLines);
    }

    expect(leakedLines.length, `오류: freshsnap/index.astro 마크업 내 ${leakedLines.length}개의 미번역 한글 UI 텍스트가 발견되었습니다.`).toBe(0);
  });
});
