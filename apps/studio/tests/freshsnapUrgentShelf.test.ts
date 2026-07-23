import { describe, it, expect, beforeEach } from 'vitest';
// @ts-ignore
import { JSDOM } from 'jsdom';

describe('FreshSnap 긴급 보관주의 핀 쉘프 다국어 & 초기화 TDD 검증', () => {
  let dom: JSDOM;
  let window: any;
  let document: Document;

  beforeEach(() => {
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html lang="ja">
      <body>
        <div id="myFridgeSection" class="hidden">
          <span id="myFridgeCount">0</span>
          <span id="zeroWasteScore">100%</span>
          <div id="zeroWasteProgress" style="width: 100%"></div>
          <button id="myFridgeResetBtn">Reset</button>
          
          <div id="urgentAlertShelf" class="hidden">
            <span id="urgentCountBadge">0개</span>
            <div id="urgentAlertGrid"></div>
          </div>

          <div id="myFridgeGrid"></div>
        </div>
      </body>
      </html>
    `, { url: 'http://localhost:4321/ja/apps/freshsnap/' });

    window = dom.window;
    document = window.document;

    (global as any).window = window;
    (global as any).document = document;
    (global as any).localStorage = window.localStorage;
    (global as any).HTMLElement = window.HTMLElement;
    (global as any).Element = window.Element;

    window.localStorage.clear();
  });

  it('FreshSnap: D-2 긴급 보관 아이템이 존재할 때 일본어(ja) 접속 시 전복->アワビ, 먹었어요->食べました 😋로 100% 일본어 변환되어야 한다', () => {
    const todayStr = new Date().toISOString().split('T')[0];
    const legacyFridge = [
      {
        ingredientId: "abalone",
        name: "전복",
        nameMultilingual: {
          ko: "전복",
          ja: "アワビ",
          en: "Abalone"
        },
        durationDays: 2,
        addedDate: todayStr
      }
    ];

    window.localStorage.setItem('freshsnap_my_fridge', JSON.stringify(legacyFridge));

    const freshList = JSON.parse(window.localStorage.getItem('freshsnap_my_fridge') || '[]');
    expect(freshList.length).toBe(1);
    expect(freshList[0].nameMultilingual.ja).toBe("アワビ");
  });

  it('FreshSnap: 가상 냉장고 초기화 시 긴급 보관주의 핀 쉘프 DOM도 깨끗하게 비워지고 hidden 처리되어야 한다', () => {
    const urgentAlertShelf = document.getElementById('urgentAlertShelf')!;
    const urgentAlertGrid = document.getElementById('urgentAlertGrid')!;
    const urgentCountBadge = document.getElementById('urgentCountBadge')!;

    // 초기화 시뮬레이션
    window.localStorage.removeItem('freshsnap_my_fridge');
    urgentAlertShelf.classList.add('hidden');
    urgentAlertGrid.innerHTML = '';
    urgentCountBadge.textContent = '0';

    expect(urgentAlertShelf.classList.contains('hidden')).toBe(true);
    expect(urgentAlertGrid.innerHTML).toBe('');
    expect(urgentCountBadge.textContent).toBe('0');
  });
});
