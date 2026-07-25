import fs from 'fs';

export function parseKoSteps(koContent) {
  const koSteps = [];
  const stepRegex = /<h4[^>]*>([\s\S]*?)<\/h4>\s*<\/div>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
  let koMatch;
  const koBodyParts = koContent.split('---').slice(2).join('---');
  while ((koMatch = stepRegex.exec(koBodyParts)) !== null) {
    koSteps.push({
      name: koMatch[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(),
      text: koMatch[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
    });
  }

  // 한글 마스터 본문 파싱 실패로 인한 사일런트 배포 사고 차단
  if (koSteps.length === 0) {
    throw new Error(`[빌드 실패] 한글 마스터 파일 본문에서 단계 카드를 단 하나도 파싱하지 못했습니다. HTML 태그 서식이나 정합성을 재검토하세요.`);
  }

  return koSteps;
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
