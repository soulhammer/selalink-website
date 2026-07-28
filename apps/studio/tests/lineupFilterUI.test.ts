import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

import en from '../src/i18n/locales/en.json';
import ko from '../src/i18n/locales/ko.json';
import ja from '../src/i18n/locales/ja.json';
import zh from '../src/i18n/locales/zh.json';
import es from '../src/i18n/locales/es.json';
import fr from '../src/i18n/locales/fr.json';
import de from '../src/i18n/locales/de.json';
import pt from '../src/i18n/locales/pt.json';
import id from '../src/i18n/locales/id.json';

const locales: Record<string, Record<string, string>> = { en, ko, ja, zh, es, fr, de, pt, id };

describe('SelaLink 라인업 필터 UI 및 i18n 정합성 검증 테스트', () => {

  describe('1. 라인업 필터 다국어 번역 키 완전성 검증', () => {
    const requiredFilterKeys = [
      'lineup.filter.all',
      'lineup.filter.self',
      'lineup.filter.snap',
      'lineup.filter.share'
    ];

    Object.entries(locales).forEach(([lang, data]) => {
      it(`[${lang.toUpperCase()}] 모든 라인업 필터 키가 명확히 정의되어 있어야 한다`, () => {
        requiredFilterKeys.forEach((key) => {
          expect(data[key], `오류: ${lang}.json 파일에 "${key}" 번역 키가 누락되었습니다.`).toBeDefined();
          expect(data[key].length, `오류: ${lang}.json 파일의 "${key}" 번역 문자열이 비어있습니다.`).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('2. index.astro 필터 탭 바 및 카테고리 데이터 속성 정합성 검증', () => {
    const indexPath = path.resolve(__dirname, '../src/pages/[lang]/index.astro');

    it('index.astro 파일이 존재하고 필터 탭 관련 데이터 속성을 포함해야 한다', () => {
      expect(fs.existsSync(indexPath)).toBe(true);
      const content = fs.readFileSync(indexPath, 'utf-8');

      // 필터 버튼 데이터 속성 체크
      expect(content).toContain('data-filter-btn="all"');
      expect(content).toContain('data-filter-btn="self"');
      expect(content).toContain('data-filter-btn="snap"');

      // Bento Card 카테고리 데이터 속성 체크
      expect(content).toContain('data-category="self"');
      expect(content).toContain('data-category="snap"');

      // 클라이언트 측 필터링 JS 함수 존재 여부 체크
      expect(content).toContain('setupLineupFilter');
      expect(content).toContain('data-filter-btn');
    });
  });

  describe('3. 빌드 출력물(HTML) 내 라인업 필터 바 렌더링 검증', () => {
    const distPath = path.resolve(__dirname, '../dist');

    it('빌드 디렉토리가 존재하는 경우 각 언어별 index.html에 필터 탭 마크업이 올바르게 생성되어 있어야 한다', () => {
      if (!fs.existsSync(distPath)) {
        // 빌드 전 수행 시 스킵
        return;
      }

      Object.keys(locales).forEach((lang) => {
        const langHtmlPath = path.resolve(distPath, lang, 'index.html');
        if (fs.existsSync(langHtmlPath)) {
          const html = fs.readFileSync(langHtmlPath, 'utf-8');
          expect(html).toContain('data-filter-btn="all"');
          expect(html).toContain('data-filter-btn="self"');
          expect(html).toContain('data-filter-btn="snap"');
          expect(html).toContain('data-category="self"');
          expect(html).toContain('data-category="snap"');
        }
      });
    });
  });
});
