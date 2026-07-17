export interface RefrigeratorOptions {
  roomShelfGrid: HTMLElement | null;
  fridgeShelfGrid: HTMLElement | null;
  freezerShelfGrid: HTMLElement | null;
  wrapperItems: NodeListOf<HTMLElement>;
}

export function initRefrigeratorView(options: RefrigeratorOptions) {
  const { roomShelfGrid, fridgeShelfGrid, freezerShelfGrid, wrapperItems } = options;
  if (!roomShelfGrid || !fridgeShelfGrid || !freezerShelfGrid) return;
  
  roomShelfGrid.innerHTML = '';
  fridgeShelfGrid.innerHTML = '';
  freezerShelfGrid.innerHTML = '';

  wrapperItems.forEach((wrapper) => {
    const item = wrapper.querySelector('.ingredient-item') as HTMLElement;
    if (!item) return;

    const id = item.getAttribute('data-item-id') || '';
    const name = item.querySelector('h2')?.textContent?.trim() || '';
    const category = item.getAttribute('data-item-category') || '';
    const searchIndex = item.getAttribute('data-search-index') || '';
    const img = item.querySelector('img')?.getAttribute('src');
    const emoji = item.querySelector('span')?.textContent?.trim() || '🍱';
    const categoryLabel = item.querySelector('span.text-\\[10px\\]')?.textContent?.trim() || '';

    const hasRoom = item.getAttribute('data-has-room') === 'true';
    const hasFridge = item.getAttribute('data-has-fridge') === 'true';
    const hasFreezer = item.getAttribute('data-has-freezer') === 'true';

    const durRoom = item.getAttribute('data-duration-room') || '0';
    const durFridge = item.getAttribute('data-duration-fridge') || '0';
    const durFreezer = item.getAttribute('data-duration-freezer') || '0';

    const recommendedMethod = item.getAttribute('data-recommended-method') || '';
    const recommendedLabel = item.getAttribute('data-recommended-label') || '';

    const createMiniCardMarkup = (method: string, duration: string, badgeClass: string, label: string) => {
      const currentLang = document.documentElement.lang || 'ko';
      let numColorClass = '';
      if (method === 'room') numColorClass = 'text-amber-950 dark:text-amber-100';
      else if (method === 'fridge') numColorClass = 'text-emerald-950 dark:text-emerald-100';
      else if (method === 'freezer') numColorClass = 'text-blue-950 dark:text-blue-100';

      return `
        <a href="/${currentLang}/apps/freshsnap/${id}/" 
           class="fridge-mini-card p-3 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-center justify-between transition-all select-none hover:scale-102 hover:border-emerald-500/30"
           data-id="${id}" data-category="${category}" data-search-index="${searchIndex}">
          <div class="flex items-center gap-2">
            ${img ? `<img src="${img}" alt="${name}" class="w-8 h-8 object-contain block"/>` : `<span class="text-xl block w-fit">${emoji}</span>`}
            <div>
              <h4 class="text-xs font-black text-slate-800 dark:text-slate-200">${name}</h4>
              <span class="text-[8px] font-black text-slate-400 uppercase tracking-tighter">${categoryLabel}</span>
            </div>
          </div>
          <span class="mini-days-badge text-[9px] font-extrabold px-2 py-0.5 rounded-md ${badgeClass}" 
                data-base-duration="${duration}" data-shelf-method="${method}">
            ${label} <strong class="days-num font-black ${numColorClass}">${duration}</strong>일
          </span>
        </a>
      `;
    };

    if (recommendedMethod === 'room' && hasRoom && parseInt(durRoom) > 0) {
      roomShelfGrid.insertAdjacentHTML('beforeend', createMiniCardMarkup('room', durRoom, 'bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/40', `⭐ ${recommendedLabel}`));
    }
    if (recommendedMethod === 'fridge' && hasFridge && parseInt(durFridge) > 0) {
      fridgeShelfGrid.insertAdjacentHTML('beforeend', createMiniCardMarkup('fridge', durFridge, 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-amber-900/40', `⭐ ${recommendedLabel}`));
    }
    if (recommendedMethod === 'freezer' && hasFreezer && parseInt(durFreezer) > 0) {
      freezerShelfGrid.insertAdjacentHTML('beforeend', createMiniCardMarkup('freezer', durFreezer, 'bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40', `⭐ ${recommendedLabel}`));
    }
  });
}
