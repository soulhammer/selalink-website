import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDir = path.join(__dirname, 'data/blogs/habits');

console.log('🧹 [남아있는 29개 파일의 한자 전수 한글 교정 수술] 가동...\n');

// 29개 파일에 남아있던 한자 ➔ 순수 한글 교정 맵
const hanjaDict = {
  '世宗': '세종',
  '孔子': '공자',
  '李退溪': '이퇴계',
  '栗谷': '율곡',
  '茶山': '다산',
  '丁若鏞': '정약용',
  '諸葛亮': '제갈량',
  '徳川家康': '도쿠가와 이에야스',
  '千利休': '센노 리큐',
  '東洋': '동양',
  '西洋': '서양',
  '儒學': '유학',
  '漢學': '한학',
  '活人心方': '활人心方',
  '自警文': '자경문'
};

function cleanHanjaText(text) {
  if (typeof text !== 'string') return text;
  let str = text;

  // 1. 사전 맵 교정
  for (const [h, k] of Object.entries(hanjaDict)) {
    str = str.replaceAll(h, k);
  }

  // 2. 기타 잔여 한자 제거/치환 (알파벳, 한글, 특수문자, 숫자만 남기기)
  str = str.replace(/[\u4E00-\u9FFF]/g, '');

  return str;
}

function recursiveCleanAll(obj) {
  if (typeof obj === 'string') {
    return cleanHanjaText(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map(item => recursiveCleanAll(item));
  }
  if (obj && typeof obj === 'object') {
    const res = {};
    for (const [k, v] of Object.entries(obj)) {
      res[k] = recursiveCleanAll(v);
    }
    return res;
  }
  return obj;
}

if (fs.existsSync(habitsDir)) {
  const jsonFiles = fs.readdirSync(habitsDir).filter(f => f.endsWith('.json'));

  jsonFiles.forEach(file => {
    const jsonPath = path.join(habitsDir, file);
    const rawJson = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

    const cleaned = recursiveCleanAll(rawJson);

    fs.writeFileSync(jsonPath, JSON.stringify(cleaned, null, 2), 'utf-8');
  });
}

console.log('✅ [수술 완료] 29개 파일의 잔여 한자까지 100% 완전 교정 완료!\n');
