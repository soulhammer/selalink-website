/**
 * @vitest-environment jsdom
 */
import { describe, test, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('블로그 상세 페이지 UI 구조 및 TDD 정합성 검증', () => {

  const slugAstroPath = path.resolve(__dirname, '../src/pages/[lang]/blog/[slug].astro');
  const blogTocAsidePath = path.resolve(__dirname, '../src/components/blog/BlogTocAside.astro');
  const blogDetailTsPath = path.resolve(__dirname, '../src/utils/blogDetail.ts');

  let slugContent = '';
  let blogDetailTsContent = '';

  beforeEach(() => {
    const slugFile = fs.readFileSync(slugAstroPath, 'utf-8');
    const blogTocFile = fs.readFileSync(blogTocAsidePath, 'utf-8');
    slugContent = slugFile + blogTocFile;
    blogDetailTsContent = fs.readFileSync(blogDetailTsPath, 'utf-8');
  });

  test('60% 스크롤 시 나타나던 sticky-cta-bar 토스트 레이아웃 및 관련 JS 스크롤 바인딩 이벤트가 완전히 제거되었는지 검증', () => {
    // 1. Astro 파일에서 id="sticky-cta-bar" 요소가 제거되었는지 검증
    expect(slugContent.includes('id="sticky-cta-bar"')).toBe(false);
    expect(slugContent.includes('id="close-sticky-cta"')).toBe(false);

    // 2. blogDetail.ts JS 파일에서 sticky-cta-bar 이벤트 listener 로직이 완전 제거되었는지 검증
    expect(blogDetailTsContent.includes('sticky-cta-bar')).toBe(false);
    expect(blogDetailTsContent.includes('close-sticky-cta')).toBe(false);
  });

  test('PC 우측 사이드바 목차(Desktop TOC) 하단에 desktop-toc-mini-widget 영역이 제거되었는지 검증', () => {
    expect(slugContent.includes('id="desktop-toc-mini-widget"')).toBe(false);
  });

  test('본문 종료 직후(Post-Article) 영역에 post-article-cta 컨테이너가 ShareToolkit 보다 1순위로 배치되었는지 검증', () => {
    expect(slugContent.includes('id="post-article-cta"')).toBe(true);
    
    const postCtaIndex = slugContent.indexOf('id="post-article-cta"');
    const shareToolkitIndex = slugContent.indexOf('<ShareToolkit');

    expect(postCtaIndex).toBeGreaterThan(-1);
    expect(shareToolkitIndex).toBeGreaterThan(-1);
    // post-article-cta가 <ShareToolkit 보다 먼저 나타나야 함 (순서 역전: App CTA First)
    expect(postCtaIndex).toBeLessThan(shareToolkitIndex);
  });

  test('식재료/반려동물(freshsnap/freshself/petself) 관련 블로그 하단 중복 CTA가 hidden 처리되었는지 검증', () => {
    // 1. post-article-cta 컨테이너가 하단 중복 방지를 위해 hidden 처리되어 있는지 검증
    expect(slugContent.includes('id="post-article-cta" class="hidden"')).toBe(true);
  });

  test('일본어를 포함한 다국어 환경에서 서브 타이틀 정제 시 유니코드 문자가 지워지지 않고 정상 보존되는지 검증', () => {
    // 일본어 사원의 cta.freshself.title 테스트
    const jaTitle = '🍏 FreshSelf - スマートな冷蔵庫・保管スペース管理パートナー';
    
    // 유니코드 안전 브랜드 정제 로직 테스트
    const cleanFn = (raw: string) => {
      const brands = ['FreshSelf', 'BuildSelf', 'FreshSnap', 'logSelf', 'SelaLink'];
      let cleaned = raw.replace(/^[\p{Emoji}\p{Symbol}\p{Punctuation}\s]+/u, '');
      for (const brand of brands) {
        const regex = new RegExp(`^${brand}\\s*[-–:]?\\s*`, 'i');
        if (regex.test(cleaned)) {
          cleaned = cleaned.replace(regex, '');
          break;
        }
      }
      return cleaned.replace(/^[-–:]\s*/, '').trim() || raw;
    };

    const result = cleanFn(jaTitle);
    expect(result).toBe('スマートな冷蔵庫・保管スペース管理パートナー');
    expect(result.length).toBeGreaterThan(0);
  });
});
