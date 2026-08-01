import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('블로그 콘텐츠 품질 및 문맥 정합성 자동화 린터 규칙', () => {
  const contentDir = path.join(process.cwd(), 'src/content/blog');
  const langs = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

  it('1. 모든 다국어 마크다운 포스트에 이스케이프되지 않은 Raw LaTeX 수식 문자($\\alpha$, $\\beta$)가 잔류하지 않아야 한다', () => {
    const rawLatexRegex = /\$\\[a-zA-Z]+\$/;
    const violations: string[] = [];

    langs.forEach(lang => {
      const langDir = path.join(contentDir, lang);
      if (!fs.existsSync(langDir)) return;
      const files = fs.readdirSync(langDir).filter(f => f.endsWith('.md'));

      files.forEach(file => {
        const content = fs.readFileSync(path.join(langDir, file), 'utf-8');
        if (rawLatexRegex.test(content)) {
          violations.push(`[${lang}] ${file}`);
        }
      });
    });

    expect(violations, `Raw LaTeX 문자가 노출된 포스트 감지: ${violations.join(', ')}`).toEqual([]);
  });

  it('2. 한국어(ko) 마크다운 포스트에 한자 기관명 오기(食品医薬品安全処, 食品醫藥品安全處) 등 부적절한 한자가 포함되지 않아야 한다', () => {
    const forbiddenKoHanzi = ['食品医薬品安全処', '食品醫藥品安全處', '19秒19', '桂冠詩人'];
    const violations: string[] = [];

    const koDir = path.join(contentDir, 'ko');
    const files = fs.readdirSync(koDir).filter(f => f.endsWith('.md'));

    files.forEach(file => {
      const content = fs.readFileSync(path.join(koDir, file), 'utf-8');
      forbiddenKoHanzi.forEach(badWord => {
        if (content.includes(badWord)) {
          violations.push(`${file} (${badWord})`);
        }
      });
    });

    expect(violations, `한국어 포스트 내 금지 한자 표기 감지: ${violations.join(', ')}`).toEqual([]);
  });
});
