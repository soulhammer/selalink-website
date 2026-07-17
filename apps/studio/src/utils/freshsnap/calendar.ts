export interface CalendarOptions {
  currentLang: string;
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  buyDateTrigger: HTMLElement | null;
  customCalendarPopover: HTMLElement | null;
  prevMonthBtn: HTMLElement | null;
  nextMonthBtn: HTMLElement | null;
  currentMonthYear: HTMLElement | null;
  calendarDaysGrid: HTMLElement | null;
}

export class FreshSnapCalendar {
  private currentLang: string;
  public selectedDate: Date;
  private displayedYear: number;
  private displayedMonth: number;
  private onDateSelect: (date: Date) => void;

  private buyDateTrigger: HTMLElement | null;
  private customCalendarPopover: HTMLElement | null;
  private prevMonthBtn: HTMLElement | null;
  private nextMonthBtn: HTMLElement | null;
  private currentMonthYear: HTMLElement | null;
  private calendarDaysGrid: HTMLElement | null;

  private monthNames: Record<string, string[]> = {
    ko: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    ja: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    zh: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    pt: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    id: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  };

  constructor(options: CalendarOptions) {
    this.currentLang = options.currentLang;
    this.selectedDate = options.selectedDate;
    this.displayedYear = this.selectedDate.getFullYear();
    this.displayedMonth = this.selectedDate.getMonth();
    this.onDateSelect = options.onDateSelect;

    this.buyDateTrigger = options.buyDateTrigger;
    this.customCalendarPopover = options.customCalendarPopover;
    this.prevMonthBtn = options.prevMonthBtn;
    this.nextMonthBtn = options.nextMonthBtn;
    this.currentMonthYear = options.currentMonthYear;
    this.calendarDaysGrid = options.calendarDaysGrid;

    this.initEvents();
  }

  private initEvents() {
    this.buyDateTrigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleCalendarPopover();
    });

    this.prevMonthBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.displayedMonth--;
      if (this.displayedMonth < 0) {
        this.displayedMonth = 11;
        this.displayedYear--;
      }
      this.render();
    });

    this.nextMonthBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.displayedMonth++;
      if (this.displayedMonth > 11) {
        this.displayedMonth = 0;
        this.displayedYear++;
      }
      this.render();
    });

    // Close calendar when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target as Node;
      if (
        this.customCalendarPopover && 
        !this.customCalendarPopover.contains(target) && 
        this.buyDateTrigger && 
        !this.buyDateTrigger.contains(target)
      ) {
        this.closeCalendarPopover();
      }
    });
  }

  public setSelectedDate(date: Date) {
    this.selectedDate = date;
    this.displayedYear = date.getFullYear();
    this.displayedMonth = date.getMonth();
    this.render();
  }

  public toggleCalendarPopover() {
    if (!this.customCalendarPopover) return;
    const isOpen = this.customCalendarPopover.classList.contains('opacity-100');
    if (isOpen) {
      this.closeCalendarPopover();
    } else {
      this.openCalendarPopover();
    }
  }

  public openCalendarPopover() {
    if (!this.customCalendarPopover) return;
    this.displayedYear = this.selectedDate.getFullYear();
    this.displayedMonth = this.selectedDate.getMonth();
    this.render();
    this.customCalendarPopover.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    this.customCalendarPopover.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
  }

  public closeCalendarPopover() {
    if (!this.customCalendarPopover) return;
    this.customCalendarPopover.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
    this.customCalendarPopover.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
  }

  public render() {
    if (!this.calendarDaysGrid || !this.currentMonthYear) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Disable next month button if showing current/future month
    if (this.nextMonthBtn) {
      const isFutureMonth = 
        this.displayedYear > today.getFullYear() || 
        (this.displayedYear === today.getFullYear() && this.displayedMonth >= today.getMonth());
      if (isFutureMonth) {
        this.nextMonthBtn.classList.add('opacity-20', 'pointer-events-none');
      } else {
        this.nextMonthBtn.classList.remove('opacity-20', 'pointer-events-none');
      }
    }

    // Update Header Text
    const mList = this.monthNames[this.currentLang] || this.monthNames['en'];
    const monthStr = mList[this.displayedMonth];
    if (this.currentLang === 'ko' || this.currentLang === 'ja' || this.currentLang === 'zh') {
      const yearSuffix = this.currentLang === 'ko' ? '년' : '年';
      this.currentMonthYear.textContent = `${this.displayedYear}${yearSuffix} ${monthStr}`;
    } else {
      this.currentMonthYear.textContent = `${monthStr} ${this.displayedYear}`;
    }

    this.calendarDaysGrid.innerHTML = '';

    const firstDayIndex = new Date(this.displayedYear, this.displayedMonth, 1).getDay();
    const totalDays = new Date(this.displayedYear, this.displayedMonth + 1, 0).getDate();
    const prevTotalDays = new Date(this.displayedYear, this.displayedMonth, 0).getDate();

    // Render Prev Month Padding
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const dayNum = prevTotalDays - i;
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'w-8 h-8 flex items-center justify-center rounded-lg text-slate-300 dark:text-slate-600 font-medium select-none pointer-events-none opacity-40';
      cell.textContent = String(dayNum);
      this.calendarDaysGrid.appendChild(cell);
    }

    // Render Current Month Days
    for (let i = 1; i <= totalDays; i++) {
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'w-8 h-8 flex items-center justify-center rounded-xl font-semibold cursor-pointer transition-all active:scale-90 select-none ';

      const cellDate = new Date(this.displayedYear, this.displayedMonth, i);
      const isFuture = cellDate > today;
      const isToday = 
        today.getFullYear() === this.displayedYear && 
        today.getMonth() === this.displayedMonth && 
        today.getDate() === i;
      const isSelected = 
        this.selectedDate.getFullYear() === this.displayedYear && 
        this.selectedDate.getMonth() === this.displayedMonth && 
        this.selectedDate.getDate() === i;

      if (isFuture) {
        cell.className += 'text-slate-300 dark:text-slate-700 opacity-20 pointer-events-none cursor-not-allowed';
      } else if (isSelected) {
        cell.className += 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 hover:bg-emerald-500 scale-[1.05]';
      } else if (isToday) {
        cell.className += 'border border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800';
      } else {
        cell.className += 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800';
      }

      cell.textContent = String(i);
      
      if (!isFuture) {
        cell.addEventListener('click', () => {
          this.selectedDate = new Date(this.displayedYear, this.displayedMonth, i);
          this.onDateSelect(this.selectedDate);
          this.render();
          this.closeCalendarPopover();
        });
      }

      this.calendarDaysGrid.appendChild(cell);
    }

    // Render Next Month Padding to fill 42 cells (6 rows)
    const currentCellsCount = firstDayIndex + totalDays;
    const nextMonthPadding = 42 - currentCellsCount;
    for (let i = 1; i <= nextMonthPadding; i++) {
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'w-8 h-8 flex items-center justify-center rounded-lg text-slate-300 dark:text-slate-600 font-medium select-none pointer-events-none opacity-40';
      cell.textContent = String(i);
      this.calendarDaysGrid.appendChild(cell);
    }
  }
}
