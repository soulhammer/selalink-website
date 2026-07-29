import { describe, it, expect } from 'vitest';
import { getCategoryGroup, getContextualPrevNext, getRelatedPosts, getCategoryMeta } from './blogNavigation';
import en from '../i18n/locales/en.json';
import ko from '../i18n/locales/ko.json';
import ja from '../i18n/locales/ja.json';
import zh from '../i18n/locales/zh.json';
import es from '../i18n/locales/es.json';
import fr from '../i18n/locales/fr.json';
import de from '../i18n/locales/de.json';
import pt from '../i18n/locales/pt.json';
import id from '../i18n/locales/id.json';

describe('blogNavigation - Category Grouping & Circular Navigation', () => {
  it('should map app types to correct category groups', () => {
    expect(getCategoryGroup('buildself')).toBe('buildself');
    expect(getCategoryGroup('petself')).toBe('petself');
    expect(getCategoryGroup('freshsnap')).toBe('freshsnap');
    expect(getCategoryGroup('freshself')).toBe('freshsnap');
    expect(getCategoryGroup('logself')).toBe('logself');
    expect(getCategoryGroup('general')).toBe('general');
  });

  it('should circularly navigate prev and next posts within the same category group (No Dead Ends)', () => {
    const mockPosts = [
      { id: 'ko/post-3-buildself', data: { app: 'buildself', pubDate: new Date('2026-07-20') } },
      { id: 'ko/post-2-petself', data: { app: 'petself', pubDate: new Date('2026-07-15') } },
      { id: 'ko/post-1-buildself', data: { app: 'buildself', pubDate: new Date('2026-07-10') } },
    ];

    // 최신 포스트(post-3-buildself)의 nextPost는 순환되어 가장 옛날 포스트(post-1-buildself)가 되어야 함
    const { prevPost, nextPost } = getContextualPrevNext(mockPosts as any, 'ko/post-3-buildself');

    expect(prevPost?.id).toBe('ko/post-1-buildself');
    expect(nextPost?.id).toBe('ko/post-1-buildself'); // 포스트가 2개인 경우 서로를 상호 연결/순환

    // 가장 옛날 포스트(post-1-buildself)의 prevPost는 순환되어 최신 포스트(post-3-buildself)가 되어야 함
    const navOldest = getContextualPrevNext(mockPosts as any, 'ko/post-1-buildself');
    expect(navOldest.prevPost?.id).toBe('ko/post-3-buildself');
    expect(navOldest.nextPost?.id).toBe('ko/post-3-buildself');
  });

  it('should return correct category visual metadata (icon, color, label key)', () => {
    const metaBuild = getCategoryMeta('buildself');
    expect(metaBuild.icon).toBe('🎯');
    expect(metaBuild.badgeClass).toContain('sky');

    const metaPet = getCategoryMeta('petself');
    expect(metaPet.icon).toBe('🐾');
    expect(metaPet.badgeClass).toContain('rose');

    const metaFresh = getCategoryMeta('freshsnap');
    expect(metaFresh.icon).toBe('🥬');
    expect(metaFresh.badgeClass).toContain('emerald');
  });

  it('should return related posts in the same category excluding the current post', () => {
    const mockPosts = [
      { id: 'ko/p-1', data: { app: 'petself', pubDate: new Date('2026-07-20') } },
      { id: 'ko/p-2', data: { app: 'petself', pubDate: new Date('2026-07-15') } },
      { id: 'ko/p-3', data: { app: 'petself', pubDate: new Date('2026-07-10') } },
      { id: 'ko/p-4', data: { app: 'buildself', pubDate: new Date('2026-07-05') } },
    ];

    const related = getRelatedPosts(mockPosts as any, 'ko/p-1', 3);
    expect(related.length).toBe(2);
    expect(related.map((p) => p.id)).toEqual(['ko/p-2', 'ko/p-3']);
  });
});

describe('blogNavigation - 9 Languages i18n Dictionary Integrity', () => {
  const locales = [
    { name: 'en', dict: en },
    { name: 'ko', dict: ko },
    { name: 'ja', dict: ja },
    { name: 'zh', dict: zh },
    { name: 'es', dict: es },
    { name: 'fr', dict: fr },
    { name: 'de', dict: de },
    { name: 'pt', dict: pt },
    { name: 'id', dict: id },
  ];

  const requiredKeys = [
    'blog.filter.all',
    'blog.filter.freshsnap',
    'blog.filter.buildself',
    'blog.filter.petself',
    'blog.prev',
    'blog.next',
    'blog.empty',
    'blog.related.title',
  ];

  locales.forEach(({ name, dict }) => {
    it(`should contain all required blog filter and navigation i18n keys for locale [${name}]`, () => {
      requiredKeys.forEach((key) => {
        expect((dict as any)[key], `Missing key "${key}" in locale [${name}]`).toBeDefined();
        expect(typeof (dict as any)[key]).toBe('string');
        expect((dict as any)[key].length).toBeGreaterThan(0);
      });
    });
  });
});
