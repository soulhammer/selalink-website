import { describe, it, expect } from 'vitest';
import { generateBaseSchema } from '../src/utils/seoHelper';

describe('SEO 구조화 데이터(generateBaseSchema) 빌더 검증', () => {
  // 모의 번역 헬퍼 함수
  const mockTranslations: Record<string, string> = {
    'app.buildself.title': '빌드셀프 BuildSelf',
    'app.buildself.meta.features': 'Habit Tracker,Routine,Streaks',
    'app.buildself.meta.keywords': 'habit,self-improvement',
    'app.buildsnap.title': 'BuildSnap',
    'app.buildsnap.meta.features': 'Habit Analytics,Mentor Recommendations',
    'app.buildsnap.meta.keywords': 'mentor,habit matching',
    'app.freshself.title': '프레시셀프',
    'app.freshself.meta.features': 'Shelf Life,Ingredients Storage',
    'app.freshself.meta.keywords': 'fridge,food waste',
    'app.freshsnap.title': '프레시스냅',
    'app.freshsnap.meta.features': 'Storage Calendar,D-Day Calculator',
    'app.freshsnap.meta.keywords': 'freshness,d-day',
    'app.logself.title': '로그셀프',
    'app.logself.meta.features': 'Life Logging,Daily Journal',
    'app.logself.meta.keywords': 'diary,log',
    'meta.keywords': 'selalink,studio'
  };

  const t = (key: string) => mockTranslations[key] || '';

  it('BuildSelf 앱 스키마가 올바른 마켓 링크와 메타데이터를 포함하는가', () => {
    const result = generateBaseSchema({
      pathname: '/ko/apps/buildself',
      appId: 'buildself',
      ogType: 'software',
      description: 'Habit tracking app',
      urlHref: 'https://selalink.net/ko/apps/buildself',
      t
    });

    expect(result['@type']).toBe('SoftwareApplication');
    expect(result.name).toBe('BuildSelf');
    expect(result.url).toBe('https://selalink.net/ko/apps/buildself/');
    expect(result.description).toBe('Habit tracking app');
    expect(result.keywords).toBe('habit,self-improvement');
    expect(result.operatingSystem).toBe('iOS, Android');
    expect(result.applicationCategory).toBe('HealthApplication');
    expect(result.featureList).toEqual(['Habit Tracker', 'Routine', 'Streaks']);
    expect(result.sameAs).toContain('https://play.google.com/store/apps/details?id=com.selalink.buildself');
    expect(result.alternateName).toContain('빌드셀프 BuildSelf');
  });

  it('BuildSnap 앱 스키마가 올바른 카테고리와 대체어로 생성되는가', () => {
    const result = generateBaseSchema({
      pathname: '/en/apps/buildsnap/',
      appId: 'buildsnap',
      ogType: 'software',
      description: 'Find your perfect habits',
      urlHref: 'https://selalink.net/en/apps/buildsnap/',
      t
    });

    expect(result['@type']).toBe('SoftwareApplication');
    expect(result.name).toBe('BuildSnap');
    expect(result.applicationCategory).toBe('LifestyleApplication');
    expect(result.keywords).toBe('mentor,habit matching');
    expect(result.featureList).toEqual(['Habit Analytics', 'Mentor Recommendations']);
  });

  it('FreshSelf/FreshSnap 앱 스키마가 동일한 마켓 링크와 올바른 메타데이터를 갖는가', () => {
    // FreshSnap 테스트
    const resultSnap = generateBaseSchema({
      pathname: '/ko/apps/freshsnap',
      appId: 'freshsnap',
      ogType: 'software',
      description: 'Freshness keeper',
      urlHref: 'https://selalink.net/ko/apps/freshsnap',
      t
    });

    expect(resultSnap.name).toBe('FreshSnap');
    expect(resultSnap.applicationCategory).toBe('LifestyleApplication');
    expect(resultSnap.sameAs).toContain('https://play.google.com/store/apps/details?id=com.selalink.freshself');
    expect(resultSnap.alternateName).toContain('프레시스냅');

    // FreshSelf 테스트
    const resultSelf = generateBaseSchema({
      pathname: '/ko/apps/freshself',
      appId: 'freshself',
      ogType: 'software',
      description: 'Self fresh manager',
      urlHref: 'https://selalink.net/ko/apps/freshself',
      t
    });

    expect(resultSelf.name).toBe('FreshSelf');
    expect(resultSelf.sameAs).toContain('https://play.google.com/store/apps/details?id=com.selalink.freshself');
    expect(resultSelf.alternateName).toContain('프레시셀프');
  });

  it('LogSelf 앱 스키마 및 마켓 링크 검증', () => {
    const result = generateBaseSchema({
      pathname: '/ko/apps/logself',
      appId: 'logself',
      ogType: 'software',
      description: 'Simple logging',
      urlHref: 'https://selalink.net/ko/apps/logself',
      t
    });

    expect(result.name).toBe('logSelf');
    expect(result.sameAs).toContain('https://play.google.com/store/apps/details?id=com.selalink.logself');
  });

  it('일반 기관(Organization) 스키마 생성 시 적절한 유튜브 폴백 링크와 기본 키워드가 지정되는가', () => {
    const result = generateBaseSchema({
      pathname: '/ko',
      appId: 'studio',
      ogType: 'website',
      description: 'SelaLink Studio Portal',
      urlHref: 'https://selalink.net/ko',
      t
    });

    expect(result['@type']).toBe('Organization');
    expect(result.name).toBe('SelaLink Studio');
    expect(result.sameAs).toContain('https://www.youtube.com/channel/UChmmgdbcjP5PnVE-WGUspgA');
    expect(result.keywords).toBe('selalink,studio');
    expect(result.alternateName).toBeUndefined(); // appId가 매칭 안 되면 alternateName 없음
  });
});
