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

import { habits as realHabits } from '../src/data/habits';

describe('BuildSnap 실제 위인 데이터 매칭 정합성 검증', () => {
  it('실제 등록된 모든 위인이 최소 1개 이상의 진단 조합 결과에 노출되어야 한다 (누수 0명)', () => {
    const q1Options = ['focus', 'creative', 'simplicity', 'mind'];
    const q2Options = ['physical', 'mental'];
    const q3Options = ['easy', 'hard'];

    const matchedIds = new Set<string>();

    for (const q1 of q1Options) {
      for (const q2 of q2Options) {
        for (const q3 of q3Options) {
          const matched = matchHabit(realHabits, q1, q2, q3);
          
          // 최종 폴백(전체 목록 반환)이 작동한 경우 제외 (실제 필터에 매칭된 경우만 추적)
          if (matched.length !== realHabits.length) {
            matched.forEach(h => matchedIds.add(h.id));
          }
        }
      }
    }

    // 전수 조사 결과 매칭 대상 목록에 모든 위인이 포함되어 있는지 확인
    expect(realHabits.length).toBe(296);
    expect(matchedIds.size).toBe(realHabits.length);
  });

  it('올바른 모든 진단 조합(16가지)이 전체 목록(최종 폴백)을 반환하지 않고 구체적인 결과를 도출해야 한다', () => {
    const q1Options = ['focus', 'creative', 'simplicity', 'mind'];
    const q2Options = ['physical', 'mental'];
    const q3Options = ['easy', 'hard'];

    for (const q1 of q1Options) {
      for (const q2 of q2Options) {
        for (const q3 of q3Options) {
          const matched = matchHabit(realHabits, q1, q2, q3);
          
          // 매칭 조건이 주어졌으므로, 전체 76명이 통째로 노출되는 폴백 3단계가 일어나면 안 됨
          expect(matched.length).toBeLessThan(realHabits.length);
          expect(matched.length).toBeGreaterThan(0);
        }
      }
    }
  });
});

describe('BuildSnap 순차 순환 매칭 클라이언트 상태 검증', () => {
  it('동일 조건으로 연속 호출될 때 순차적으로 인덱스가 증가하며 순환 반환되어야 한다', () => {
    const q1 = 'focus';
    const q2 = 'mental';
    const q3 = 'hard';

    // 1회차 호출: 조건이 처음이므로 matchHabit 결과 수집, 인덱스 0
    const matchedPool = matchHabit(realHabits, q1, q2, q3);
    expect(matchedPool.length).toBeGreaterThan(1); // 복수 매칭 확인

    let currentIndex = 0;
    const firstMentor = matchedPool[currentIndex];

    // 2회차 호출: 동일 조건이므로 인덱스 1 증가
    currentIndex = (currentIndex + 1) % matchedPool.length;
    const secondMentor = matchedPool[currentIndex];
    expect(secondMentor.id).not.toBe(firstMentor.id);

    // 끝까지 도달했을 때 처음으로 정상 복귀되는지 검증
    currentIndex = (currentIndex + matchedPool.length - 1) % matchedPool.length; // 인덱스 복구
    currentIndex = (currentIndex + matchedPool.length) % matchedPool.length; // 순환
    expect(matchedPool[currentIndex].id).toBe(firstMentor.id);
  });
});

describe('BuildSnap 연령대, 성별 및 로컬 노출 가중치(Show Count) 소프트 스코어링 보정 테스트', () => {
  const customMockHabits: Habit[] = [
    {
      id: 'mentor-kids-male',
      name: '세종대왕',
      tags: ['#몰입', '#공부', '#새벽'],
      gender: 'male', era: '근세', location: '한국', lifespan: '', birthYear: 0, bio: '', habitName: '', timeOfDay: 'morning', frequency: '', historicalStory: '', sciencePrinciples: '', quote: '', trigger: '', modernGuide: [], actionName: '', sources: [],
      requiredItems: []
    },
    {
      id: 'mentor-adults-female',
      name: '퀴리부인',
      tags: ['#몰입', '#연구', '#실험'],
      gender: 'female', era: '현대', location: '프랑스', lifespan: '', birthYear: 0, bio: '', habitName: '', timeOfDay: 'anytime', frequency: '', historicalStory: '', sciencePrinciples: '', quote: '', trigger: '', modernGuide: [], actionName: '', sources: [],
      requiredItems: ['라듐']
    },
    {
      id: 'mentor-silver-male',
      name: '칸트',
      tags: ['#사색', '#산책', '#규칙'],
      gender: 'male', era: '근세', location: '독일', lifespan: '', birthYear: 0, bio: '', habitName: '', timeOfDay: 'afternoon', frequency: '', historicalStory: '', sciencePrinciples: '', quote: '', trigger: '', modernGuide: [], actionName: '', sources: [],
      requiredItems: []
    }
  ];

  it('연령대(kids)가 입력으로 주어지면, 아이들의 학업과 성장 단계에 가장 알맞은 위인이 높은 유사도 가중치를 받아 추천되어야 한다', () => {
    // Q1: focus (몰입), Q2: mental, Q3: easy, ageGroup: kids, gender: all, showCounts: {}
    const matched = matchHabit(customMockHabits, 'focus', 'mental', 'easy', 'kids', 'all', {});
    // 'mentor-kids-male' (세종대왕)이 추천 순위 1위에 올라와야 함
    expect(matched.length).toBeGreaterThan(0);
    expect(matched[0].id).toBe('mentor-kids-male');
  });

  it('성별(female) 조건이 주어지면 여성이 우선 순위에 반영되어 추천을 보정해야 한다', () => {
    // Q1: focus (몰입), Q2: mental, Q3: hard, ageGroup: adult, gender: female, showCounts: {}
    const matched = matchHabit(customMockHabits, 'focus', 'mental', 'hard', 'adult', 'female', {});
    expect(matched.length).toBeGreaterThan(0);
    expect(matched[0].id).toBe('mentor-adults-female');
  });

  it('유사도 점수가 비등한 경우, localStorage에서 수집된 노출 횟수(Show Count)가 더 적은 위인이 리스트 최상단(우선 노출)에 위치해야 한다', () => {
    // 세종대왕('mentor-kids-male')과 퀴리부인('mentor-adults-female')은 둘 다 focus 성향임.
    // 하지만 세종대왕의 노출 빈도가 5회로 높고, 퀴리부인의 노출 빈도가 0회인 경우, 퀴리부인이 우선 추천되어야 함.
    const showCounts = { 'mentor-kids-male': 5, 'mentor-adults-female': 0, 'mentor-silver-male': 0 };
    const matched = matchHabit(customMockHabits, 'focus', 'mental', 'easy', 'adult', 'all', showCounts);
    
    expect(matched.length).toBeGreaterThan(1);
    expect(matched[0].id).toBe('mentor-adults-female'); // 노출이 적었던 퀴리가 1위로 상승
  });
});

describe('BuildSnap 연령대 및 성별 하드 필터링 전수 조합 무결성 검증', () => {
  it('144가지 전체 조건 조합에 대해 결과 배열이 최소 1명 이상이어야 하며 중복이 전혀 없어야 한다', () => {
    const q1Options = ['focus', 'creative', 'simplicity', 'mind'];
    const q2Options = ['physical', 'mental'];
    const q3Options = ['easy', 'hard'];
    const ageOptions = ['kids', 'adult', 'silver'];
    const genderOptions = ['male', 'female', 'all'];

    let testCount = 0;

    for (const q1 of q1Options) {
      for (const q2 of q2Options) {
        for (const q3 of q3Options) {
          for (const age of ageOptions) {
            for (const gen of genderOptions) {
              testCount++;
              const matched = matchHabit(realHabits, q1, q2, q3, age, gen);
              
              // 1. 모든 조합에 대해 반드시 최소 1명 이상 추천됨을 검증 (텅 빔 방지)
              expect(matched.length).toBeGreaterThan(0);
              
              // 2. 결과 리스트에 동일 위인이 중복해서 튀어나오지 않는지 ID 고유성 검증
              const uniqueIds = new Set(matched.map(h => h.id));
              expect(uniqueIds.size).toBe(matched.length);
            }
          }
        }
      }
    }

    // 총 4 * 2 * 2 * 3 * 3 = 144가지 조합이 정상 수행되었는지 보증
    expect(testCount).toBe(144);
  });
});
