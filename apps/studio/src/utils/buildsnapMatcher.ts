import type { Habit } from '../data/habits';

export function matchHabit(habits: Habit[], q1Val: string, q2Val: string, q3Val: string): Habit[] {
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

  let matched = habits.filter(h => {
    const tagsStr = (h.tags || []).join(' ');
    return checkQ1(tagsStr, q1Val) && checkQ2(tagsStr, q2Val) && checkQ3(h, q3Val);
  });

  // Fallback Step 1: 3가지 조건 동시 만족 위인이 없을 시, 개선 목표(Q1)와 준비 장벽(Q3) 필터만 적용
  if (matched.length === 0) {
    matched = habits.filter(h => {
      const tagsStr = (h.tags || []).join(' ');
      return checkQ1(tagsStr, q1Val) && checkQ3(h, q3Val);
    });
  }

  // Fallback Step 2: 1단계 실패 시 핵심 목표(Q1) 카테고리만 매칭되는 위인 탐색
  if (matched.length === 0) {
    matched = habits.filter(h => {
      const tagsStr = (h.tags || []).join(' ');
      return checkQ1(tagsStr, q1Val);
    });
  }

  // Fallback Step 3: 최후 폴백 (전체 위인 무작위 추천)
  if (matched.length === 0) {
    matched = habits;
  }

  return matched;
}
