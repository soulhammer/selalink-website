import { describe, it, expect } from 'vitest';
import { matchHabit } from '../src/utils/buildsnapMatcher';
import type { Habit } from '../src/data/habits';

const mockHabits: Habit[] = [
  {
    id: 'focus-physical-hard',
    name: '스피노자',
    tags: ['#몰입', '#신체노동'],
    requiredItems: ['렌즈', '숫돌'],
    gender: 'male', era: '근세', location: '네덜란드', lifespan: '', birthYear: 0, bio: '', habitName: '', timeOfDay: '', frequency: '', historicalStory: '', sciencePrinciples: '', quote: '', trigger: '', modernGuide: [], actionName: '', sources: []
  },
  {
    id: 'creative-mental-easy',
    name: '아인슈타인',
    tags: ['#창의', '#아이디어'],
    requiredItems: ['바이올린'],
    gender: 'male', era: '현대', location: '독일', lifespan: '', birthYear: 0, bio: '', habitName: '', timeOfDay: '', frequency: '', historicalStory: '', sciencePrinciples: '', quote: '', trigger: '', modernGuide: [], actionName: '', sources: []
  },
  {
    id: 'simplicity-physical-easy',
    name: '잡스',
    tags: ['#단순', '#산책'],
    requiredItems: [],
    gender: 'male', era: '현대', location: '미국', lifespan: '', birthYear: 0, bio: '', habitName: '', timeOfDay: '', frequency: '', historicalStory: '', sciencePrinciples: '', quote: '', trigger: '', modernGuide: [], actionName: '', sources: []
  },
  {
    id: 'mind-mental-hard',
    name: '세네카',
    tags: ['#휴식', '#사색'],
    requiredItems: ['일기장', '조용한방'],
    gender: 'male', era: '고대', location: '로마', lifespan: '', birthYear: 0, bio: '', habitName: '', timeOfDay: '', frequency: '', historicalStory: '', sciencePrinciples: '', quote: '', trigger: '', modernGuide: [], actionName: '', sources: []
  }
];

describe('BuildSnap 매칭 및 폴백 핵심 비즈니스 로직 테스트', () => {
  
  it('조건에 정확히 일치하는 위인이 존재하는 경우 - 완전 매칭 성공', () => {
    // Q1: focus (몰입), Q2: physical (신체노동), Q3: hard (도구 2개)
    const result = matchHabit(mockHabits, 'focus', 'physical', 'hard');
    expect(result.length).toBe(1);
    expect(result[0].id).toBe('focus-physical-hard');
  });

  it('1단계 Fallback 작동 검증 - Q1(목표) + Q3(장벽) 매칭 필터링 적용', () => {
    // Q1: focus (몰입), Q2: mental, Q3: hard (도구 2개)
    // mockHabits 중 focus-physical-hard는 focus이면서 hard이지만 physical이므로 Q2(mental)에 위배됨.
    // 따라서 1단계 Fallback이 작동하여 Q1(focus) + Q3(hard) 조건에 맞는 'focus-physical-hard'가 추천되어야 함.
    const result = matchHabit(mockHabits, 'focus', 'mental', 'hard');
    expect(result.length).toBe(1);
    expect(result[0].id).toBe('focus-physical-hard');
  });

  it('2단계 Fallback 작동 검증 - Q1(개선 목표) 카테고리만 충족하는 위인 전체 매칭', () => {
    // Q1: creative (창의), Q2: physical, Q3: hard
    // mockHabits 중 creative-mental-easy는 creative이지만 mental이며 easy임.
    // 3가지 조건 매칭 및 1단계 폴백(creative + hard) 모두 실패함.
    // 따라서 2단계 Fallback이 작동하여 Q1(creative)에 부합하는 'creative-mental-easy'가 최종 추천되어야 함.
    const result = matchHabit(mockHabits, 'creative', 'physical', 'hard');
    expect(result.length).toBe(1);
    expect(result[0].id).toBe('creative-mental-easy');
  });

  it('최종 Fallback 작동 검증 - 아무 매칭이 없는 무효값인 경우 전체 리스트 반환하여 에러 방지', () => {
    // Q1: 무효 카테고리
    const result = matchHabit(mockHabits, 'invalid_q1_val', 'mental', 'easy');
    // 모든 매칭과 폴백이 실패했으므로 전체 mockHabits를 반환해야 함.
    expect(result.length).toBe(mockHabits.length);
  });
});
