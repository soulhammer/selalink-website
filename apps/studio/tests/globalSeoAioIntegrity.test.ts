import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { generateBaseSchema } from '../src/utils/seoHelper';

describe('Global SEO & AI Search Optimization (GEO/AIO) 무결성 검증', () => {

  const publicDir = path.join(__dirname, '../public');

  it('1. robots.txt 파일이 존재하고 주요 AI 크롤러 봇 정책 및 사이트맵 주소가 선언되어 있는가', () => {
    const robotsPath = path.join(publicDir, 'robots.txt');
    expect(fs.existsSync(robotsPath)).toBe(true);

    const content = fs.readFileSync(robotsPath, 'utf-8');

    // 필수 AI 봇 선언 검증
    const requiredBots = [
      'GPTBot',
      'ChatGPT-User',
      'OAI-SearchBot',
      'PerplexityBot',
      'ClaudeBot',
      'Google-Extended',
      'Applebot-Extended',
      'Bytespider'
    ];

    requiredBots.forEach(bot => {
      expect(content).toContain(`User-agent: ${bot}`);
    });

    // Sitemap 선언 검증
    expect(content).toContain('Sitemap: https://selalink.net/sitemap.xml');
    expect(content).toContain('Sitemap: https://selalink.net/sitemap-index.xml');
  });

  it('2. AI 검색 컨텍스트 표준 문서(llms.txt)가 유효한 포맷으로 존재하는가', () => {
    const llmsPath = path.join(publicDir, 'llms.txt');
    expect(fs.existsSync(llmsPath)).toBe(true);

    const content = fs.readFileSync(llmsPath, 'utf-8');
    expect(content).toContain('# SelaLink Studio');
    expect(content).toContain('https://selalink.net');
    expect(content).toContain('BuildSelf');
    expect(content).toContain('BuildSnap');
    expect(content).toContain('FreshSelf');
    expect(content).toContain('FreshSnap');
    expect(content).toContain('Multilingual Content Ecosystem');
  });

  it('3. generateBaseSchema가 9개 국어 다국어 키워드 및 올바른 Schema.org JSON-LD 데이터를 생성하는가', () => {
    const mockT = (key: string) => {
      const dict: Record<string, string> = {
        'app.buildself.title': 'BuildSelf',
        'app.buildself.meta.features': 'Habit Tracker,Routine,Privacy',
        'app.buildself.meta.keywords': 'habit tracker,mentor habits',
        'app.buildsnap.title': 'BuildSnap',
        'app.buildsnap.meta.features': 'Mentor Diagnosis,Analytics',
        'app.buildsnap.meta.keywords': 'mentor matching,habit analytics',
        'app.freshsnap.title': 'FreshSnap',
        'app.freshsnap.meta.features': 'Food Storage,Expiry Calculator',
        'app.freshsnap.meta.keywords': 'food preservation,shelf life'
      };
      return dict[key] || '';
    };

    const schema = generateBaseSchema({
      pathname: '/ko/apps/buildsnap/',
      appId: 'buildsnap',
      ogType: 'software',
      description: 'Habit Analytics',
      urlHref: 'https://selalink.net/ko/apps/buildsnap/',
      t: mockT
    });

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('SoftwareApplication');
    expect(schema.name).toBe('BuildSnap');
    expect(schema.url).toBe('https://selalink.net/ko/apps/buildsnap/');
    expect(schema.keywords).toBe('mentor matching,habit analytics');
  });
});
