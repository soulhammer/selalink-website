import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, 'content/blog');
const locales = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

// 인자 파싱
const args = process.argv.slice(2);
const slugArg = args.find(a => a.startsWith('--slug='))?.split('=')[1];

const todayStr = new Date().toISOString().split('T')[0];

function run() {
  console.log('\n📅 \x1b[36m[블로그 발행일 수동 안배 및 다국어 동기화기]\x1b[0m\n');

  if (!fs.existsSync(blogRoot)) {
    console.error(`❌ [ERR] 블로그 루트 디렉토리가 없습니다: ${blogRoot}`);
    process.exit(1);
  }

  const koDir = path.join(blogRoot, 'ko');
  if (!fs.existsSync(koDir)) {
    console.error(`❌ [ERR] 한국어 블로그 디렉토리가 없습니다: ${koDir}`);
    process.exit(1);
  }

  // 1. 과거 안배 대상 슬러그 선정
  let targetSlugs = [];

  if (slugArg) {
    const mdPath = path.join(koDir, `${slugArg}.md`);
    if (!fs.existsSync(mdPath)) {
      console.error(`❌ [ERR] 입력한 슬러그의 한국어 포스트 파일이 존재하지 않습니다: ${mdPath}`);
      process.exit(1);
    }
    targetSlugs.push(slugArg);
  } else {
    // 인자가 없으면 ko 디렉토리 전체를 검사하여 pubDate가 오늘 날짜(또는 지정되지 않은 것)인 포스트 수집
    const koFiles = fs.readdirSync(koDir).filter(f => f.endsWith('.md'));
    koFiles.forEach(file => {
      const fileContent = fs.readFileSync(path.join(koDir, file), 'utf-8');
      const pubDateMatch = fileContent.match(/pubDate:\s*"([^"]+)"/);
      
      // 오늘 생성된 글이거나 pubDate가 없는 글을 대상으로 삼음
      if (!pubDateMatch || pubDateMatch[1] === todayStr) {
        targetSlugs.push(file.replace('.md', ''));
      }
    });
  }

  if (targetSlugs.length === 0) {
    console.log('ℹ️ 날짜를 분산할 새로운 포스트가 검출되지 않았습니다. (지정된 날짜 보존)');
    process.exit(0);
  }

  console.log(`👉 수동 안배 대상 포스트: [ ${targetSlugs.join(', ')} ] (총 ${targetSlugs.length}개)\n`);

  // 2. 기존 발행되어 점유된 날짜들 수집 (단, 현재 과거 안배 대상 글들의 날짜는 배제)
  const occupiedDates = new Set();
  const allKoFiles = fs.readdirSync(koDir).filter(f => f.endsWith('.md'));
  
  allKoFiles.forEach(file => {
    const slug = file.replace('.md', '');
    if (targetSlugs.includes(slug)) return; // 분산 대상은 기존 점유 목록에서 제외

    const fileContent = fs.readFileSync(path.join(koDir, file), 'utf-8');
    const match = fileContent.match(/pubDate:\s*"([^"]+)"/);
    if (match) {
      occupiedDates.add(match[1]);
    }
  });

  // 3. 각 대상 슬러그별로 결정론적 과거 날짜 배정 및 9개 국어 동기화 진행
  targetSlugs.forEach(slug => {
    // 2026-01-01부터 오늘까지 점유되지 않은 날짜 추출
    const startDate = new Date('2026-01-01');
    const endDate = new Date();
    const availableDates = [];

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      if (!occupiedDates.has(dateStr)) {
        availableDates.push(dateStr);
      }
    }

    if (availableDates.length === 0) {
      console.warn(`⚠️ '${slug}': 빈 날짜 슬롯이 없어 안배하지 못하고 패스합니다.`);
      return;
    }

    // 슬러그 이름을 이용해 항상 고유한 과거 날짜로 매핑되도록 해시 유도
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = slug.charCodeAt(i) + ((hash << 5) - hash);
    }
    const selectedIndex = Math.abs(hash) % availableDates.length;
    const selectedDate = availableDates[selectedIndex];

    // 선택된 날짜를 점유 상태로 추가 (다음 슬러그에서 중복되지 않도록 방지)
    occupiedDates.add(selectedDate);

    console.log(`📝 [안배 확정] '${slug}' -> [${selectedDate}]`);

    // 9개 언어 전체 마크다운 파일에 동일한 날짜 적용 및 수정
    locales.forEach(lang => {
      const langPath = path.join(blogRoot, lang, `${slug}.md`);
      if (fs.existsSync(langPath)) {
        let content = fs.readFileSync(langPath, 'utf-8');
        
        // pubDate 업데이트 또는 삽입
        const pubDateMatch = content.match(/pubDate:\s*"([^"]+)"/);
        if (pubDateMatch) {
          content = content.replace(/pubDate:\s*"[^"]+"/, `pubDate: "${selectedDate}"`);
        } else {
          content = content.replace('---\n', `---\npubDate: "${selectedDate}"\n`);
        }

        // updatedDate 업데이트 또는 삽입
        const updatedDateMatch = content.match(/updatedDate:\s*"([^"]+)"/);
        if (updatedDateMatch) {
          content = content.replace(/updatedDate:\s*"[^"]+"/, `updatedDate: "${selectedDate}"`);
        } else {
          // authority 바로 위에 주입하거나 Frontmatter 끝에 주입
          if (content.includes('authority:')) {
            content = content.replace('authority:', `updatedDate: "${selectedDate}"\nauthority:`);
          } else {
            content = content.replace('---\n', `---\nupdatedDate: "${selectedDate}"\n`);
          }
        }

        fs.writeFileSync(langPath, content, 'utf-8');
        console.log(`  - [${lang.toUpperCase()}] 파일 날짜 동기화 완료`);
      }
    });
    console.log('');
  });

  console.log('✨ 모든 신규 블로그 포스트의 과거 날짜 안배 및 9개 국어 동기화가 성공적으로 끝났습니다!\n');
}

run();
