import type { Habit } from '../data/apps/buildsnap';

export function matchHabit(
  habits: Habit[],
  q1Val: string,
  q2Val: string,
  q3Val: string,
  ageGroup: string = 'all',
  gender: string = 'all',
  showCounts: Record<string, number> = {}
): Habit[] {
  const checkQ1 = (tagsStr: string, q1: string): boolean => {
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

  const checkQ2 = (tagsStr: string, q2: string): boolean => {
    const isPhysical = ['신체', '운동', '산책', '행동', '수면', '냉수', '동작', '노동', '호흡', '스트레칭'].some(k => tagsStr.includes(k));
    return q2 === 'physical' ? isPhysical : !isPhysical;
  };

  const checkQ3 = (h: Habit, q3: string): boolean => {
    const itemsLen = h.requiredItems ? h.requiredItems.length : 0;
    const isEasy = itemsLen <= 1 || (h.tags || []).includes('#쉬움');
    return q3 === 'easy' ? isEasy : !isEasy;
  };

  const checkAge = (tagsStr: string, age: string): boolean => {
    if (age === 'all') return true;
    if (age === 'kids') {
      return ['공부', '학습', '독서', '메모', '집중', '학교', '어린이', '청소년'].some(k => tagsStr.includes(k));
    }
    if (age === 'silver') {
      return ['산책', '사색', '휴식', '성찰', '명상', '수면', '안정'].some(k => tagsStr.includes(k));
    }
    return true; // adult는 기본적으로 전체 풀 수용
  };

  const checkGender = (h: Habit, g: string): boolean => {
    if (g === 'all') return true;
    return h.gender === g;
  };

  // Step 1: 5가지 조건 완전 일치 필터링
  let matched = habits.filter(h => {
    const tagsStr = (h.tags || []).join(' ');
    return checkQ1(tagsStr, q1Val) && 
           checkQ2(tagsStr, q2Val) && 
           checkQ3(h, q3Val) &&
           checkAge(tagsStr, ageGroup) &&
           checkGender(h, gender);
  });

  // Step 2 Fallback: 성별 조건 완화
  if (matched.length === 0) {
    matched = habits.filter(h => {
      const tagsStr = (h.tags || []).join(' ');
      return checkQ1(tagsStr, q1Val) && 
             checkQ2(tagsStr, q2Val) && 
             checkQ3(h, q3Val) &&
             checkAge(tagsStr, ageGroup);
    });
  }

  // Step 3 Fallback: 연령대 조건 완화 (기존 3조건 매칭 상태)
  if (matched.length === 0) {
    matched = habits.filter(h => {
      const tagsStr = (h.tags || []).join(' ');
      return checkQ1(tagsStr, q1Val) && 
             checkQ2(tagsStr, q2Val) && 
             checkQ3(h, q3Val);
    });
  }

  // Step 4 Fallback: Q2 스타일 조건 완화
  if (matched.length === 0) {
    matched = habits.filter(h => {
      const tagsStr = (h.tags || []).join(' ');
      return checkQ1(tagsStr, q1Val) && checkQ3(h, q3Val);
    });
  }

  // Step 5 Fallback: Q3 장벽 조건 완화
  if (matched.length === 0) {
    matched = habits.filter(h => {
      const tagsStr = (h.tags || []).join(' ');
      return checkQ1(tagsStr, q1Val);
    });
  }

  // Step 6 Fallback: 최후 보장 (전체 위인 반환)
  if (matched.length === 0) {
    matched = habits;
  }

  // 2단계: 필터링되어 걸러진 위인 후보군들(matched) 안에서 소프트 스코어링을 통해 최종 노출 순서를 정렬함
  const scoredHabits = matched.map(h => {
    const tagsStr = (h.tags || []).join(' ');
    let score = 0;

    // A. 연령대(Age Group) 보정 가중치
    if (ageGroup === 'kids') {
      // 어린이를 위한 학업, 공부, 집중, 독서, 메모 등 명확한 아동/청소년 성향 매칭
      const isKidsFriendly = ['공부', '학습', '독서', '메모', '집중', '학교', '어린이', '청소년'].some(k => tagsStr.includes(k));
      if (isKidsFriendly) score += 10;
    } else if (ageGroup === 'silver') {
      // 실버 세대를 위한 부드러운 산책, 사색, 휴식, 성찰, 명상
      const isSilverFriendly = ['산책', '사색', '휴식', '성찰', '명상', '수면', '안정'].some(k => tagsStr.includes(k));
      if (isSilverFriendly) score += 10;
    } else {
      score += 10;
    }


    // B. 성별(Gender) 보정 가중치
    if (gender !== 'all' && h.gender === gender) {
      score += 10;
    }

    // C. 로컬 노출 가중치 (Show Count) 보정 연산
    const showCount = showCounts[h.id] || 0;
    const exposureBonus = (1 / (showCount + 1)) * 5; // 최대 5점 가산
    score += exposureBonus;

    return { habit: h, score };
  });

  // 점수 내림차순 정렬 (동점 시 ID 정렬 유지)
  scoredHabits.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.habit.id.localeCompare(b.habit.id);
  });

  return scoredHabits.map(sh => sh.habit);
}


