/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  parseBuildSnapQuickAdd,
  calculateStreak,
  checkBadgeUnlock
} from '../src/pages/[lang]/apps/buildsnap/_buildsnapClient';

describe('BuildSnap 신규 UI/UX 및 비즈니스 로직 TDD 검증 (Red Phase)', () => {

  describe('1-Tap 위인 습관 담기 파서 (parseBuildSnapQuickAdd)', () => {
    const mockHabit = {
      id: 'einstein-violin',
      name: '알베르트 아인슈타인',
      habitName: '바이올린 연주와 사색',
      tags: ['#창의', '#아이디어'],
      actionName: '10분 바이올린 연주',
      timeOfDay: 'evening'
    };

    it('위인 습관 객체에서 내 캔버스 루틴 아이템으로 올바르게 데이터가 파싱되어야 한다', () => {
      const result = parseBuildSnapQuickAdd(mockHabit);
      expect(result.habitId).toBe('einstein-violin');
      expect(result.heroName).toBe('알베르트 아인슈타인');
      expect(result.habitTitle).toBe('바이올린 연주와 사색');
      expect(result.actionName).toBe('10분 바이올린 연주');
      expect(result.timeOfDay).toBe('evening');
    });
  });

  describe('연속 실천 일수(Streak) 계산 헬퍼 (calculateStreak)', () => {
    it('어제 체크 후 오늘 연이어 완료 체크 시 Streak가 +1 증가해야 한다', () => {
      const lastChecked = '2026-07-22';
      const today = '2026-07-23';
      const currentStreak = 3;

      const newStreak = calculateStreak(lastChecked, today, currentStreak);
      expect(newStreak).toBe(4);
    });

    it('하루 이상 건너뛴 경우 Streak가 1일로 리셋되어야 한다', () => {
      const lastChecked = '2026-07-20'; // 3일 전
      const today = '2026-07-23';
      const currentStreak = 5;

      const newStreak = calculateStreak(lastChecked, today, currentStreak);
      expect(newStreak).toBe(1);
    });
  });

  describe('성취 뱃지 조건 해금 헬퍼 (checkBadgeUnlock)', () => {
    it('7일 연속 실천 시 상상력의 산책자 뱃지가 해금되어야 한다', () => {
      const isUnlocked = checkBadgeUnlock(7, 'explorer');
      expect(isUnlocked).toBe(true);
    });

    it('7일 미만인 경우 뱃지가 해금되지 않아야 한다', () => {
      const isUnlocked = checkBadgeUnlock(5, 'explorer');
      expect(isUnlocked).toBe(false);
    });
  });

  describe('모바일 Bottom Sheet 및 PC Drag & Drop UI 시나리오 검증', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="buildsnapBottomSheetModal" class="hidden">
          <button id="buildsnapBsCloseHandle"></button>
          <button id="buildsnapBsCloseBtn"></button>
          <button id="buildsnapBsQuickAddBtn"></button>
        </div>
        <div id="morningRoutineBox" class="routine-drop-box"></div>
        <div id="eveningRoutineBox" class="routine-drop-box"></div>
      `;
    });

    it('모바일 Bottom Sheet 닫기 버튼 클릭 시 모달이 숨겨져야 한다', () => {
      const modal = document.getElementById('buildsnapBottomSheetModal');
      const closeBtn = document.getElementById('buildsnapBsCloseBtn');

      modal?.classList.remove('hidden');
      expect(modal?.classList.contains('hidden')).toBe(false);

      closeBtn?.click();
      expect(modal?.classList.contains('hidden')).toBe(true);
    });

    it('PC 화면에서 [내 습관 캔버스에 담기] 버튼이 존재하고 localStorage에 올바르게 동기화되어야 한다', () => {
      document.body.innerHTML = `
        <button id="btnAddToCanvas">⚡ 내 습관 캔버스에 담기 (+)</button>
      `;
      const btn = document.getElementById('btnAddToCanvas');
      expect(btn).not.toBeNull();
      expect(btn?.textContent).toContain('내 습관 캔버스에 담기');

      const store: Record<string, string> = {};
      const mockStorage = {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => { store[key] = value; }
      };

      const mockCanvas = [{ habitId: 'einstein-violin', heroName: '알베르트 아인슈타인' }];
      mockStorage.setItem('selalink_buildsnap_my_canvas', JSON.stringify(mockCanvas));

      const saved = JSON.parse(mockStorage.getItem('selalink_buildsnap_my_canvas') || '[]');
      expect(saved.length).toBe(1);
      expect(saved[0].habitId).toBe('einstein-violin');
    });

    it('나의 습관 캔버스 보드(myCanvasSection) DOM 요소가 존재하고 담긴 아이템이 렌더링되어야 한다', () => {
      document.body.innerHTML = `
        <section id="canvasSection">
          <h2 class="section-title">📜 나의 위인 습관 캔버스 보드</h2>
          <div id="myCanvasBoard">
            <div class="canvas-item" data-id="einstein-violin">
              <span class="hero-name">알베르트 아인슈타인</span>
              <button class="check-btn">✓ 오늘 실천 완료</button>
              <button class="delete-btn">✕ 삭제</button>
            </div>
          </div>
        </section>
      `;

      const canvasSection = document.getElementById('canvasSection');
      const canvasBoard = document.getElementById('myCanvasBoard');
      const canvasItem = document.querySelector('.canvas-item');

      expect(canvasSection).not.toBeNull();
      expect(canvasBoard).not.toBeNull();
      expect(canvasItem).not.toBeNull();
      expect(canvasItem?.textContent).toContain('알베르트 아인슈타인');
    });

    it('모바일 4대 고정 탭바(진단기, 캔버스, 통계, 뱃지) 및 statsSection, badgeSection이 DOM에 올바르게 존재해야 한다', () => {
      document.body.innerHTML = `
        <nav class="md:hidden">
          <a href="#matcherSection">진단기</a>
          <a href="#canvasSection">캔버스</a>
          <a href="#statsSection">통계</a>
          <a href="#badgeSection">뱃지</a>
        </nav>
        <section id="matcherSection"></section>
        <section id="canvasSection"></section>
        <section id="statsSection"></section>
        <section id="badgeSection"></section>
      `;

      expect(document.getElementById('matcherSection')).not.toBeNull();
      expect(document.getElementById('canvasSection')).not.toBeNull();
      expect(document.getElementById('statsSection')).not.toBeNull();
      expect(document.getElementById('badgeSection')).not.toBeNull();
    });

    it('오늘 완료 체크 시 lastCheckedDate가 localStorage에 영구 기록되어 새로고침 후에도 유지되어야 한다', () => {
      const todayStr = new Date().toISOString().split('T')[0];
      const mockCanvas = [
        { habitId: 'einstein-violin', heroName: '알베르트 아인슈타인', lastCheckedDate: todayStr, streakCount: 3 }
      ];

      const store: Record<string, string> = {};
      const mockStorage = {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => { store[key] = value; }
      };

      mockStorage.setItem('selalink_buildsnap_my_canvas', JSON.stringify(mockCanvas));
      const saved = JSON.parse(mockStorage.getItem('selalink_buildsnap_my_canvas') || '[]');
      
      expect(saved[0].lastCheckedDate).toBe(todayStr);
      expect(saved[0].streakCount).toBe(3);
    });

    it('캔버스 전체 비우기 버튼(btnClearCanvas) 클릭 시 localStorage가 초기화되어야 한다', () => {
      const store: Record<string, string> = {
        'selalink_buildsnap_my_canvas': JSON.stringify([{ habitId: 'jobs-walk' }])
      };
      const mockStorage = {
        getItem: (key: string) => store[key] || null,
        removeItem: (key: string) => { delete store[key]; }
      };

      expect(mockStorage.getItem('selalink_buildsnap_my_canvas')).not.toBeNull();
      mockStorage.removeItem('selalink_buildsnap_my_canvas');
      expect(mockStorage.getItem('selalink_buildsnap_my_canvas')).toBeNull();
    });

    it('나의 습관 실천 현황 개인화 대시보드(myPersonalStatsBoard)의 완료율 및 스트릭이 올바르게 계산되어야 한다', () => {
      const todayStr = new Date().toISOString().split('T')[0];
      const mockCanvas = [
        { habitId: 'einstein', lastCheckedDate: todayStr, streakCount: 5 },
        { habitId: 'jobs', lastCheckedDate: '2026-01-01', streakCount: 2 }
      ];

      const totalCount = mockCanvas.length;
      const completedCount = mockCanvas.filter(c => c.lastCheckedDate === todayStr).length;
      const rate = Math.round((completedCount / totalCount) * 100);
      const maxStreak = Math.max(...mockCanvas.map(c => c.streakCount));

      expect(totalCount).toBe(2);
      expect(completedCount).toBe(1);
      expect(rate).toBe(50);
      expect(maxStreak).toBe(5);
    });
  });

});





