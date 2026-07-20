import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, 'content/blog');
const publicRoot = path.join(__dirname, '../public');



function run() {
  console.log('🔄 [개조 파이프라인] 기존 블로그 전수 진단 및 최신 규격 업그레이드 기동...');

  // 1. 구형 수동 위인 8종 데이터 마이그레이션 완료 (도구 제거됨)

  // 2. 전체 한국어 마크다운 파일을 읽고, 갭(결함)이 감지되는 포스트 목록을 100% 동적 추출
  console.log('\n2️⃣ [동적 갭 분석] 전체 마크다운 전수 무결성 스캔 및 진단...');
  const koDir = path.join(blogRoot, 'ko');
  if (!fs.existsSync(koDir)) {
    console.error('❌ [오류] 한국어 블로그 디렉토리가 존재하지 않습니다.');
    process.exit(1);
  }

  const allKoFiles = fs.readdirSync(koDir).filter(f => f.endsWith('.md'));
  
  const habitRetrofitTargets = [];
  const storageRetrofitTargets = [];
  const petRetrofitTargets = [];

  allKoFiles.forEach(file => {
    const slug = file.replace('.md', '');
    const isStorage = slug.startsWith('how-to-store-');
    const isPet = slug.endsWith('-care');
    const filePath = path.join(koDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // 결함 조건 판별: (1) formatVersion이 없거나 4보다 작음 또는 (2) FAQ 아코디언 UI 누락
    const versionMatch = content.match(/formatVersion:\s*(\d+)/);
    const version = versionMatch ? parseInt(versionMatch[1], 10) : 0;
    const isOutdated = version < 4;

    const hasFaqAccordion = content.includes('자주 묻는 질문') || content.includes('FAQ') || content.includes('details class="group"');

    if (isOutdated || !hasFaqAccordion) {
      if (isStorage) {
        storageRetrofitTargets.push(slug);
      } else if (isPet) {
        petRetrofitTargets.push(slug);
      } else {
        habitRetrofitTargets.push(slug);
      }
    }
  });

  console.log(`📊 [스캔 통계] 총 ${allKoFiles.length}개 포스트 검사 완료.`);
  console.log(`   - 갭(결함) 감지된 위인 습관 블로그 (${habitRetrofitTargets.length}개):`, habitRetrofitTargets);
  console.log(`   - 갭(결함) 감지된 식재료 보관 블로그 (${storageRetrofitTargets.length}개):`, storageRetrofitTargets);
  console.log(`   - 갭(결함) 감지된 반려동물 케어 블로그 (${petRetrofitTargets.length}개):`, petRetrofitTargets);

  // 3. 다국어 마크다운 빌더 동시 재기동 (모든 신형 껍데기 조립)
  console.log('\n3️⃣ [껍데기 업그레이드] 결함 식별 블로그 다국어 마크다운 일괄 재생성...');
  try {
    console.log('   - 위인 습관 다국어 빌드 기동...');
    execSync('node src/compile_habit_blogs.js', { cwd: path.join(__dirname, '..') });
    
    console.log('   - 식재료 보관법 다국어 빌드 기동...');
    execSync('node src/compile_storage_blogs.js', { cwd: path.join(__dirname, '..') });

    console.log('   - 반려동물 케어 다국어 빌드 기동...');
    execSync('node src/compile_pet_blogs.js', { cwd: path.join(__dirname, '..') });
    
    console.log('\n\x1b[32m✨ [성공] 개조 파이프라인의 데이터 동적 합성 공정이 완료되었습니다!\x1b[0m');
  } catch (err) {
    console.error('❌ [빌드 실패] 일괄 마크다운 재생성 오류:', err.message);
    process.exit(1);
  }
}

run();
