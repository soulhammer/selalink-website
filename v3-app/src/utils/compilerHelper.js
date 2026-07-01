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
  return koSteps;
}

export function cleanMarkdown(content) {
  return content.replace(/\*\*/g, '');
}

export function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}
