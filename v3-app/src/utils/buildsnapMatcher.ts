import type { Habit } from '../data/habits';

export function matchHabit(habits: Habit[], q1Val: string, q2Val: string, q3Val: string): Habit[] {
  let matched = habits.filter(h => {
    const tagsStr = (h.tags || []).join(' ');

    // Q1 Matching: 개선 목표
    let matchQ1 = false;
    if (q1Val === 'focus') matchQ1 = tagsStr.includes('집중') || tagsStr.includes('몰입') || tagsStr.includes('생산성');
    if (q1Val === 'creative') matchQ1 = tagsStr.includes('창의') || tagsStr.includes('아이디어') || tagsStr.includes('글쓰기') || tagsStr.includes('기록') || tagsStr.includes('메모');
    if (q1Val === 'simplicity') matchQ1 = tagsStr.includes('단순') || tagsStr.includes('의사결정');
    if (q1Val === 'mind') matchQ1 = tagsStr.includes('휴식') || tagsStr.includes('사색') || tagsStr.includes('명상') || tagsStr.includes('수면') || tagsStr.includes('이완');

    // Q2 Matching: 활동 유형
    let matchQ2 = false;
    const isPhysical = tagsStr.includes('신체') || tagsStr.includes('운동') || tagsStr.includes('산책') || tagsStr.includes('행동') || tagsStr.includes('수면') || tagsStr.includes('냉수') || tagsStr.includes('동작') || tagsStr.includes('노동') || tagsStr.includes('호흡');
    if (q2Val === 'physical') matchQ2 = isPhysical;
    if (q2Val === 'mental') matchQ2 = !isPhysical;

    // Q3 Matching: 준비 장벽
    let matchQ3 = false;
    const itemsLen = h.requiredItems ? h.requiredItems.length : 0;
    const isEasy = itemsLen <= 1 || (h.tags || []).includes('#쉬움');
    if (q3Val === 'easy') matchQ3 = isEasy;
    if (q3Val === 'hard') matchQ3 = !isEasy;

    return matchQ1 && matchQ2 && matchQ3;
  });

  // Fallback Step 1: 3가지 조건 동시 만족 위인이 없을 시, 개선 목표(Q1)와 준비 장벽(Q3) 필터만 적용
  if (matched.length === 0) {
    matched = habits.filter(h => {
      const tagsStr = (h.tags || []).join(' ');
      let matchQ1 = false;
      if (q1Val === 'focus') matchQ1 = tagsStr.includes('집중') || tagsStr.includes('몰입') || tagsStr.includes('생산성');
      if (q1Val === 'creative') matchQ1 = tagsStr.includes('창의') || tagsStr.includes('아이디어') || tagsStr.includes('글쓰기') || tagsStr.includes('기록') || tagsStr.includes('메모');
      if (q1Val === 'simplicity') matchQ1 = tagsStr.includes('단순') || tagsStr.includes('의사결정');
      if (q1Val === 'mind') matchQ1 = tagsStr.includes('휴식') || tagsStr.includes('사색') || tagsStr.includes('명상') || tagsStr.includes('수면') || tagsStr.includes('이완');

      let matchQ3 = false;
      const itemsLen = h.requiredItems ? h.requiredItems.length : 0;
      const isEasy = itemsLen <= 1 || (h.tags || []).includes('#쉬움');
      if (q3Val === 'easy') matchQ3 = isEasy;
      if (q3Val === 'hard') matchQ3 = !isEasy;

      return matchQ1 && matchQ3;
    });
  }

  // Fallback Step 2: 1단계 실패 시 핵심 목표(Q1) 카테고리만 매칭되는 위인 탐색
  if (matched.length === 0) {
    matched = habits.filter(h => {
      const tagsStr = (h.tags || []).join(' ');
      let matchQ1 = false;
      if (q1Val === 'focus') matchQ1 = tagsStr.includes('집중') || tagsStr.includes('몰입') || tagsStr.includes('생산성');
      if (q1Val === 'creative') matchQ1 = tagsStr.includes('창의') || tagsStr.includes('아이디어') || tagsStr.includes('글쓰기') || tagsStr.includes('기록') || tagsStr.includes('메모');
      if (q1Val === 'simplicity') matchQ1 = tagsStr.includes('단순') || tagsStr.includes('의사결정');
      if (q1Val === 'mind') matchQ1 = tagsStr.includes('휴식') || tagsStr.includes('사색') || tagsStr.includes('명상') || tagsStr.includes('수면') || tagsStr.includes('이완');
      return matchQ1;
    });
  }

  // Fallback Step 3: 최후 폴백 (전체 위인 무작위 추천)
  if (matched.length === 0) {
    matched = habits;
  }

  return matched;
}
