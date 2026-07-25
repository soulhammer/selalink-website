import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('SelaLink 브랜드 라인업 대표 색상 정합성 전수 검증 (TDD Test)', () => {
  const studioSrc = path.resolve(__dirname, '../src');

  it('BuildSelf 컴포넌트 및 모달에 잔재하는 구 Teal(#0D9488) 하드코딩이 제거되고 Sky Blue(#0284C7)로 전환되었는가', () => {
    const shortsGallery = fs.readFileSync(path.join(studioSrc, 'components/ShortsGallery.astro'), 'utf-8');
    const shortsModal = fs.readFileSync(path.join(studioSrc, 'components/ShortsPlayerModal.astro'), 'utf-8');
    const calendarFile = fs.readFileSync(path.join(studioSrc, 'components/buildself/BuildSelfCalendar.astro'), 'utf-8');

    // ShortsGallery: buildself 테마에 teal이 남아있지 않아야 함
    expect(shortsGallery).not.toContain("tagBg: 'bg-teal-50");
    expect(shortsGallery).not.toContain("tagText: 'text-teal-600");

    // ShortsPlayerModal: BuildSelf CTA 버튼에 teal이 없어야 함
    expect(shortsModal).not.toContain("from-teal-500 to-teal-600");

    // BuildSelfCalendar: 캘린더에 teal 클래스가 제거되고 sky로 전환되어야 함
    expect(calendarFile).not.toContain("bg-teal-500");
    expect(calendarFile).not.toContain("text-teal-400");
  });

  it('FreshSelf 컴포넌트에 FreshSnap 초록색(emerald) 혼용 없이 퍼플(purple)로 통일되었는가', () => {
    const impactFile = fs.readFileSync(path.join(studioSrc, 'components/freshself/FreshSelfImpact.astro'), 'utf-8');
    const featuresFile = fs.readFileSync(path.join(studioSrc, 'components/freshself/FreshSelfFeatures.astro'), 'utf-8');
    const pushFile = fs.readFileSync(path.join(studioSrc, 'components/freshself/FreshSelfPush.astro'), 'utf-8');

    expect(impactFile).not.toContain("text-emerald-600");
    expect(featuresFile).not.toContain("text-emerald-600");
    expect(pushFile).not.toContain("border-l-emerald-500");
  });

  it('logSelf 컴포넌트에 초록색(emerald) 대신 인디고(indigo)가 사용되었는가', () => {
    const heroFile = fs.readFileSync(path.join(studioSrc, 'components/logself/LogSelfHero.astro'), 'utf-8');
    expect(heroFile).not.toContain("text-emerald-600");
  });

  it('블로그 상세페이지 [slug].astro 또는 themeHelper.ts 내 buildself 포스트 본문 테마가 sky blue로 설정되었는가', () => {
    const slugFile = fs.readFileSync(path.join(studioSrc, 'pages/[lang]/blog/[slug].astro'), 'utf-8');
    const themeHelper = fs.readFileSync(path.join(studioSrc, 'utils/themeHelper.ts'), 'utf-8');
    const combined = slugFile + themeHelper;
    expect(combined).not.toContain("buildself: 'prose-a:text-indigo-600");
    expect(combined).toContain("buildself: 'prose-a:text-sky-600");
  });

  it('메인 홈페이지 index.astro 및 LineupBadge.astro에 하드코딩 오적용(violet, teal)이 제거되고 대표색상으로 통합되었는가', () => {
    const indexFile = fs.readFileSync(path.join(studioSrc, 'pages/[lang]/index.astro'), 'utf-8');
    const badgeFile = fs.readFileSync(path.join(studioSrc, 'components/LineupBadge.astro'), 'utf-8');

    // index.astro 내 BuildSnap 카드의 violet 하드코딩 및 블로그 링크의 옛 teal 변수가 없어야 함
    expect(indexFile).not.toContain("group-hover:text-violet-600");
    expect(indexFile).not.toContain("bg-violet-600");
    expect(indexFile).not.toContain("var(--theme-accent,#0D9488)");

    // BuildSnap 카드가 logSelf(indigo)와 중복되지 않고 Sky Blue(sky)를 사용하는가
    expect(indexFile).not.toContain("rgba(99,102,241,0.25)");
    expect(indexFile).toContain("group-hover:text-sky-600 dark:group-hover:text-sky-400");

    // FreshSelf 카드 내부 서브 뱃지에 emerald 잔재 없이 purple이 들어있는가
    expect(indexFile).toContain("text-purple-700 dark:text-purple-300 bg-purple-50/80 dark:bg-purple-950/60 px-3 py-1.5 rounded-full border border-purple-200 dark:border-purple-500/40 backdrop-blur-md shadow-sm leading-none");

    // LineupBadge: self 뱃지가 파란색/인디고 계열로, snap 뱃지가 emerald 계열로 정확히 매핑되어야 함
    expect(badgeFile).toContain("bg-sky-100");
  });
});


