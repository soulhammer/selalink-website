import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const itemsDir = path.join(__dirname, 'data/apps/buildsnap/items');

// 1. 모든 위인 습관 JSON 로드
function loadHabits() {
  if (!fs.existsSync(itemsDir)) {
    console.error(`❌ [ERR] Habits directory does not exist: ${itemsDir}`);
    process.exit(1);
  }
  const files = fs.readdirSync(itemsDir).filter(f => f.endsWith('.json'));
  return files.map(file => {
    const filePath = path.join(itemsDir, file);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  });
}

// 2. buildsnapMatcher.ts 의 핵심 알고리즘 복제
const checkQ1 = (tagsStr, q1) => {
  if (q1 === 'focus') {
    return ['집중', '몰입', '생산성', '의지', '의지력', '동기부여', '자기계발', '학습', '성공습관', '계획', '시간 관리'].some(k => tagsStr.includes(k));
  }
  if (q1 === 'creative') {
    return ['창의', '아이디어', '글쓰기', '기록', '메모', '창의성', '창의력', '독서', '영감', '예술', '기획', '공부'].some(k => tagsStr.includes(k));
  }
  if (q1 === 'simplicity') {
    return ['단순', '의사결정', '단순화', '본질'].some(k => tagsStr.includes(k));
  }
  if (q1 === 'mind') {
    return ['휴식', '사색', '명상', '수면', '이완', '성찰', '안정', '마음', '스트레스 해소'].some(k => tagsStr.includes(k));
  }
  return false;
};

const checkQ2 = (tagsStr, q2) => {
  const isPhysical = ['신체', '운동', '산책', '행동', '수면', '냉수', '동작', '노동', '호흡', '스트레칭'].some(k => tagsStr.includes(k));
  return q2 === 'physical' ? isPhysical : !isPhysical;
};

const checkQ3 = (h, q3) => {
  const itemsLen = h.requiredItems ? h.requiredItems.length : 0;
  const isEasy = itemsLen <= 1 || (h.tags || []).includes('#쉬움');
  return q3 === 'easy' ? isEasy : !isEasy;
};

function matchHabitSimulate(habits, q1Val, q2Val, q3Val) {
  let matched = habits.filter(h => {
    const tagsStr = (h.tags || []).join(' ');
    return checkQ1(tagsStr, q1Val) && checkQ2(tagsStr, q2Val) && checkQ3(h, q3Val);
  });

  // Fallback Step 1
  if (matched.length === 0) {
    matched = habits.filter(h => {
      const tagsStr = (h.tags || []).join(' ');
      return checkQ1(tagsStr, q1Val) && checkQ3(h, q3Val);
    });
  }

  // Fallback Step 2
  if (matched.length === 0) {
    matched = habits.filter(h => {
      const tagsStr = (h.tags || []).join(' ');
      return checkQ1(tagsStr, q1Val);
    });
  }

  // Fallback Step 3
  if (matched.length === 0) {
    matched = habits;
  }

  return matched;
}

function runVerification() {
  console.log('🔎 \x1b[36m[BuildSnap 진단기 데이터 무결성 검증기]\x1b[0m 시뮬레이션을 시작합니다...\n');
  const habits = loadHabits();
  console.log(`📊 로드된 총 위인 습관 개수: \x1b[32m${habits.length}명\x1b[0m (116명 목표)`);

  if (habits.length !== 116) {
    console.warn(`⚠️ [WARN] 습관 데이터 개수가 116명이 아닙니다. 현재: ${habits.length}명`);
  }

  const q1Options = ['focus', 'creative', 'simplicity', 'mind'];
  const q2Options = ['physical', 'mental'];
  const q3Options = ['easy', 'hard'];

  // 각 위인별 hit 카운트 초기화
  const hitCounts = {};
  const firstMatchCounts = {}; // 최후 폴백이 아닌 1차/2차 단계에서 다이렉트 매칭된 카운트
  habits.forEach(h => {
    hitCounts[h.id] = 0;
    firstMatchCounts[h.id] = 0;
  });

  let totalSimulations = 0;

  console.log('--- 📋 16가지 진단 조건 조합별 매칭 인원수 통계 ---');
  console.log('Q1(목표) | Q2(스타일) | Q3(난이도) | 1차 매칭수 | 최종 매칭수(폴백포함)');
  console.log('------------------------------------------------------------');

  // 16가지 경우의 수 루프
  q1Options.forEach(q1 => {
    q2Options.forEach(q2 => {
      q3Options.forEach(q3 => {
        totalSimulations++;
        
        // 1. 순수 1차 다이렉트 매칭 (3개 조건 동시 충족)
        const directMatched = habits.filter(h => {
          const tagsStr = (h.tags || []).join(' ');
          return checkQ1(tagsStr, q1) && checkQ2(tagsStr, q2) && checkQ3(h, q3);
        });

        // 2. 프로덕션 실제 매칭 (Fallback 1, 2, 3 포함)
        const finalMatched = matchHabitSimulate(habits, q1, q2, q3);

        // 출력 가독성을 위한 레이블 변환
        const q1Label = q1 === 'focus' ? '집중력' : q1 === 'creative' ? '창의성' : q1 === 'simplicity' ? '단순화' : '휴식사색';
        const q2Label = q2 === 'physical' ? '신체활동' : '정신사색';
        const q3Label = q3 === 'easy' ? '맨몸쉬움' : '도구필요';

        console.log(`${q1Label.padEnd(5)} | ${q2Label.padEnd(5)} | ${q3Label.padEnd(5)} | ${directMatched.length.toString().padStart(5)}명 | ${finalMatched.length.toString().padStart(5)}명`);

        // Hit 카운팅 (폴백 미포함 순수 도달 가능성 검증을 위해, Step 2까지만 필터링한 결과로 hitCounts 측정)
        let verifyMatched = habits.filter(h => {
          const tagsStr = (h.tags || []).join(' ');
          return checkQ1(tagsStr, q1) && checkQ2(tagsStr, q2) && checkQ3(h, q3);
        });
        if (verifyMatched.length === 0) {
          verifyMatched = habits.filter(h => {
            const tagsStr = (h.tags || []).join(' ');
            return checkQ1(tagsStr, q1) && checkQ3(h, q3);
          });
        }
        if (verifyMatched.length === 0) {
          verifyMatched = habits.filter(h => {
            const tagsStr = (h.tags || []).join(' ');
            return checkQ1(tagsStr, q1);
          });
        }
        verifyMatched.forEach(h => {
          hitCounts[h.id]++;
        });
      });
    });
  });

  console.log(`🔄 총 ${totalSimulations}가지의 선택 조합 시뮬레이션 완료.`);

  const unreachable = [];
  const lowHits = [];

  habits.forEach(h => {
    const hits = hitCounts[h.id];
    if (hits === 0) {
      unreachable.push(h);
    } else if (hits <= 2) {
      lowHits.push({ id: h.id, name: h.name, hits, tags: h.tags });
    }
  });

  console.log('\n--- 🚨 도달 불가능(Unreachable / Hit = 0) 위인 목록 ---');
  if (unreachable.length === 0) {
    console.log('✅ \x1b[32m도달 불가능한 위인이 없습니다! 모든 위인이 매칭 풀에 최소 1회 이상 집입합니다.\x1b[0m');
  } else {
    unreachable.forEach(h => {
      console.log(`❌ ID: [${h.id}] | 이름: ${h.name} | 태그: [${(h.tags || []).join(', ')}]`);
    });
    console.error(`\n🚨 [ERR] 총 ${unreachable.length}명의 위인이 어떤 진단 선택지 조합에서도 매칭되지 않습니다.`);
  }

  console.log('\n--- ⚠️ 매칭 확률이 낮은(Hits <= 2) 위인 목록 ---');
  if (lowHits.length === 0) {
    console.log('최저 매칭 빈도 위인이 없습니다.');
  } else {
    lowHits.forEach(item => {
      console.log(`⚠️ ID: [${item.id}] | 이름: ${item.name} | 매칭 횟수: ${item.hits}회 | 태그: [${item.tags.join(', ')}]`);
    });
  }

  if (unreachable.length > 0) {
    process.exit(1);
  } else {
    console.log('\n🎉 \x1b[32m모든 위인 습관 데이터가 습관 진단기 필터에 완벽하게 부합합니다!\x1b[0m\n');
    process.exit(0);
  }
}

runVerification();
