import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('BuildSnap Astro UI 템플릿 유니코드 한글 누출 스캐너 테스트', () => {
  it('BuildSnap index.astro 템플릿 내 다국어 치환되지 않은 하드코딩 한글 UI 텍스트가 존재하지 않아야 한다', () => {
    const filePath = path.join(__dirname, '../src/pages/[lang]/apps/buildsnap/index.astro');
    const content = fs.readFileSync(filePath, 'utf-8');

    // Astro Frontmatter script (--- ... ---) 영역 제외, HTML 마크업 영역만 스캔
    const markupContent = content.split('---').slice(2).join('---');
    const lines = markupContent.split('\n');
    const leakedLines: { lineNum: number; line: string }[] = [];

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const trimmed = line.trim();

      // HTML 주석 또는 코드 주석 제외
      if (trimmed.startsWith('<!--') || trimmed.startsWith('//') || trimmed.startsWith('*')) {
        return;
      }

      // t('...') 바인딩 라인 및 환경변수 제외
      if (trimmed.includes('{t(') || trimmed.includes("t('") || trimmed.includes('import.meta.env')) {
        return;
      }

      // 유니코드 한글 검사 (\uAC00-\uD7AF)
      if (/[\uAC00-\uD7AF]/.test(trimmed)) {
        leakedLines.push({ lineNum, line: trimmed });
      }
    });

    if (leakedLines.length > 0) {
      console.error('⚠️ [HTML UI 누출 발견] index.astro 마크업 내 미번역 한글 하드코딩 라인들:', leakedLines);
    }

    expect(leakedLines.length, `오류: index.astro 마크업 내 ${leakedLines.length}개의 미번역 한글 UI 텍스트가 발견되었습니다.`).toBe(0);
  });

  it('BuildSnap 클라이언트 스크립트(_buildsnapClient.ts) 내에 다국어 치환되지 않은 동적 UI 한글 텍스트가 존재하지 않아야 한다', () => {
    const filePath = path.join(__dirname, '../src/pages/[lang]/apps/buildsnap/_buildsnapClient.ts');
    const content = fs.readFileSync(filePath, 'utf-8');

    const lines = content.split('\n');
    const leakedLines: { lineNum: number; line: string }[] = [];

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const trimmed = line.trim();

      // 주석 및 console log, 내부 데이터 키 제외
      if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.includes('console.')) {
        return;
      }

      // translations[...] 및 내부 데이터 맵핑 로직 예외 처리
      if (trimmed.includes('translations[') || trimmed.includes('getTranslatedMentorName') || trimmed.includes('eraStr.includes') || trimmed.includes('tClient(')) {
        return;
      }

      // 유니코드 한글 검사 (\uAC00-\uD7AF)
      if (/[\uAC00-\uD7AF]/.test(trimmed)) {
        leakedLines.push({ lineNum, line: trimmed });
      }
    });

    if (leakedLines.length > 0) {
      console.error('⚠️ [클라이언트 JS 누출 발견] _buildsnapClient.ts 내 미번역 한글 라인들:', leakedLines);
    }

    expect(leakedLines.length, `오류: _buildsnapClient.ts 내 ${leakedLines.length}개의 미번역 한글 동적 UI 텍스트가 발견되었습니다.`).toBe(0);
  });
});
