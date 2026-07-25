import fs from 'fs';

export function parseMarkdownSteps(markdownContent) {
  const steps = [];
  const stepRegex = /<h4[^>]*>([\s\S]*?)<\/h4>\s*<\/div>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
  let match;
  const bodyParts = markdownContent.split('---').slice(2).join('---');
  while ((match = stepRegex.exec(bodyParts)) !== null) {
    steps.push({
      name: match[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(),
      text: match[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
    });
  }

  if (steps.length === 0) {
    throw new Error(`[빌드 실패] 마크다운 파일 본문에서 단계 카드를 단 하나도 파싱하지 못했습니다. HTML 태그 서식이나 정합성을 재검토하세요.`);
  }

  return steps;
}

export function cleanMarkdown(content) {
  if (!content) return '';
  let cleaned = content.replace(/\*\*/g, '');
  // 숫자 사이의 공백 없는 물결표(10~15)를 마크다운 취소선 오인 방지를 위해 (10 ~ 15)로 자동 변환
  cleaned = cleaned.replace(/(\d)~(\d)/g, '$1 ~ $2');
  // 문장 내 공백 없이 단어 사이에 사용된 물결표(단어~단어) 자동 정제
  cleaned = cleaned.replace(/([^\s~])~([^\s~])/g, '$1 ~ $2');
  return cleaned;
}

export function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}
