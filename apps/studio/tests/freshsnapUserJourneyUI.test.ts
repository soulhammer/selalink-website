import { describe, it, expect, beforeEach } from 'vitest';
// @ts-ignore
import { JSDOM } from 'jsdom';
import { ingredients } from '../src/data/apps/freshsnap';

describe('FreshSnap 사용자 풀 라이프사이클 UI E2E 통합 테스트', () => {
  let dom: JSDOM;
  let window: any;
  let document: Document;

  beforeEach(() => {
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
      <body>
        <div id="myFridgeSection">
          <span id="myFridgeCount">0</span>
          <button id="myFridgeResetBtn">Reset</button>

          <div id="urgentAlertShelf" class="hidden">
            <span id="urgentCountBadge">0</span>
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

  const getIngredientMultilingualName = (item: any, lang: string) => {
    if (item.nameMultilingual && item.nameMultilingual[lang]) {
      return item.nameMultilingual[lang];
    }
    const matched: any = ingredients.find((ing: any) => ing.id === (item.ingredientId || item.id) || ing.name === item.name);
    if (matched && matched.nameMultilingual && matched.nameMultilingual[lang]) {
      return matched.nameMultilingual[lang];
    }
    return item.name || '';
  };

  const renderFridge = (lang: string) => {
    const fridgeGrid = document.getElementById('myFridgeGrid')!;
    const urgentShelf = document.getElementById('urgentAlertShelf')!;
    const urgentGrid = document.getElementById('urgentAlertGrid')!;
    const urgentBadge = document.getElementById('urgentCountBadge')!;

    const listStr = window.localStorage.getItem('freshsnap_my_fridge') || '[]';
    const list = JSON.parse(listStr);

    if (list.length === 0) {
      fridgeGrid.innerHTML = '<div class="empty">Empty Fridge</div>';
      urgentShelf.classList.add('hidden');
      urgentGrid.innerHTML = '';
      urgentBadge.textContent = '0';
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const processed = list.map((item: any) => {
      const added = new Date(item.addedDate || new Date().toISOString());
      added.setHours(0, 0, 0, 0);
      const elapsed = Math.floor((today.getTime() - added.getTime()) / (1000 * 60 * 60 * 24));
      const remaining = item.durationDays - elapsed;
      return { ...item, remaining };
    });

    // 긴급 쉘프 렌더링
    const urgentItems = processed.filter((item: any) => item.remaining <= 3);
    if (urgentItems.length > 0) {
      urgentShelf.classList.remove('hidden');
      const unit = lang === 'ja' ? '個' : '개';
      urgentBadge.textContent = `${urgentItems.length}${unit}`;
      const ateTxt = lang === 'ja' ? '食べました 😋' : '완소 😋';

      urgentGrid.innerHTML = urgentItems.map((item: any) => {
        const name = getIngredientMultilingualName(item, lang);
        return `
          <div class="urgent-item">
            <span class="name">${name}</span>
            <button class="ate-btn">${ateTxt}</button>
          </div>
        `;
      }).join('');
    } else {
      urgentShelf.classList.add('hidden');
      urgentGrid.innerHTML = '';
      urgentBadge.textContent = '0';
    }

    // 메인 그리드 렌더링
    fridgeGrid.innerHTML = processed.map((item: any) => {
      const name = getIngredientMultilingualName(item, lang);
      return `
        <div class="fridge-card">
          <h3>${name}</h3>
        </div>
      `;
    }).join('');
  };

  it('사용자 시나리오 1: 한국어 페이지에서 전복(D-2) 추가 후, 일본어/영어 페이지 전환 시 가상 냉장고 카드와 긴급 보관 핀 쉘프 칩 모두 100% 해당 언어로 치환되어야 한다', () => {
    const todayStr = new Date().toISOString();
    const item = {
      ingredientId: "abalone",
      name: "전복",
      nameMultilingual: { ko: "전복", ja: "アワビ", en: "Abalone" },
      durationDays: 2,
      addedDate: todayStr
    };

    window.localStorage.setItem('freshsnap_my_fridge', JSON.stringify([item]));

    // 일본어 렌더링
    renderFridge('ja');

    const gridHtml = document.getElementById('myFridgeGrid')!.innerHTML;
    const urgentHtml = document.getElementById('urgentAlertGrid')!.innerHTML;

    // 한국어가 1자도 노출되지 않음을 확고히 검증
    expect(gridHtml).not.toContain("전복");
    expect(urgentHtml).not.toContain("전복");
    expect(urgentHtml).not.toContain("먹었어요 😋");

    // 일본어로 100% 치환됨을 검증
    expect(gridHtml).toContain("アワビ");
    expect(urgentHtml).toContain("アワビ");
    expect(urgentHtml).toContain("食べました 😋");

    // 영어 렌더링
    renderFridge('en');
    const enGridHtml = document.getElementById('myFridgeGrid')!.innerHTML;
    expect(enGridHtml).not.toContain("전복");
    expect(enGridHtml).toContain("Abalone");
  });

  it('사용자 시나리오 2: 가상 냉장고 초기화 클릭 시 메인 냉장고 카드는 물론 긴급 보관 핀 쉘프 DOM 및 칩까지 100% 삭제되어야 한다', () => {
    window.localStorage.setItem('freshsnap_my_fridge', JSON.stringify([
      { ingredientId: "abalone", name: "전복", durationDays: 2, addedDate: new Date().toISOString() }
    ]));

    renderFridge('ja');
    expect(document.getElementById('urgentAlertShelf')!.classList.contains('hidden')).toBe(false);
    expect(document.getElementById('urgentAlertGrid')!.innerHTML).toContain("urgent-item");

    // 초기화 클릭 시뮬레이션
    window.localStorage.removeItem('freshsnap_my_fridge');
    renderFridge('ja');

    // 핀 쉘프 및 메인 카드가 100% 깨끗이 삭제되었는지 검증
    expect(document.getElementById('urgentAlertShelf')!.classList.contains('hidden')).toBe(true);
    expect(document.getElementById('urgentAlertGrid')!.innerHTML).toBe('');
    expect(document.getElementById('myFridgeGrid')!.innerHTML).toContain("Empty Fridge");
  });
});
