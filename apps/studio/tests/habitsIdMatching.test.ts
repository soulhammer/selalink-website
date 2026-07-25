import { describe, it, expect } from 'vitest';
import { habits } from '../src/data/apps/buildsnap';
import habitsTranslations from '../src/i18n/habitsTranslations.json';

describe('habits.ts 및 habitsTranslations.json 9개 다국어 지원 100% 치환 TDD 검증', () => {
  const targetLangs = ['ja', 'en', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

  const getTranslatedHabitField = (
    targetId: string | undefined,
    heroNameFallback: string,
    field: 'name' | 'habitName' | 'actionName',
    lang: string
  ) => {
    let id = targetId;
    if (!id && heroNameFallback) {
      const matched = habits.find(
        (h: any) => h.name === heroNameFallback || (h.name && heroNameFallback && (h.name.includes(heroNameFallback) || heroNameFallback.includes(h.name)))
      );
      if (matched) id = matched.id;
    }

    let transObj = id ? (habitsTranslations as any)?.[id] : null;

    if (!transObj && heroNameFallback) {
      const entries = Object.entries(habitsTranslations as any);
      for (const [, obj] of entries) {
        const itemObj: any = obj;
        if (
          itemObj?.ko?.name === heroNameFallback ||
          itemObj?.en?.name === heroNameFallback ||
          (itemObj?.ko?.name && heroNameFallback.includes(itemObj.ko.name)) ||
          (itemObj?.en?.name && heroNameFallback.includes(itemObj.en.name))
        ) {
          transObj = itemObj;
          break;
        }
      }
    }

    if (transObj && transObj[lang]) {
      const langObj = transObj[lang];
      let res = '';
      if (field === 'name' && langObj.name) res = langObj.name;
      else if (field === 'habitName' && langObj.habitName) res = langObj.habitName;
      else if (field === 'actionName') res = langObj.actionName || langObj.quote || langObj.description || '';

      if (res && (lang === 'ko' || !/[\uAC00-\uD7A3]/.test(res))) {
        return res;
      }
    }

    if (transObj && transObj.en) {
      const enObj = transObj.en;
      let enRes = '';
      if (field === 'name' && enObj.name) enRes = enObj.name;
      else if (field === 'habitName' && enObj.habitName) enRes = enObj.habitName;
      else if (field === 'actionName') enRes = enObj.actionName || enObj.quote || enObj.description || '';

      if (enRes && !/[\uAC00-\uD7A3]/.test(enRes)) {
        return enRes;
      }
    }

    return heroNameFallback;
  };

  it('앙리 카르티에 브레송, 에픽테토스 등 ID 명명이 미세하게 다르더라도 heroName 기반 하이브리드 리졸버를 통해 9개 언어로 100% 치환되어야 한다', () => {
    const bressonJa = getTranslatedHabitField('bresson-decisive-moment', '앙리 카르티에 브레송', 'name', 'ja');
    expect(bressonJa).not.toBe('앙리 카르티에 브레송');
    expect(/[\uAC00-\uD7A3]/.test(bressonJa)).toBe(false);

    const epictetusJa = getTranslatedHabitField('epictetus-dichotomy-control', '에픽테토스', 'name', 'ja');
    expect(epictetusJa).not.toBe('에픽테토스');
    expect(/[\uAC00-\uD7A3]/.test(epictetusJa)).toBe(false);
  });

  it('habits.ts에 등록된 전체 위인 아이템은 8개 비한국어 지원 언어(ja, en, zh, es, fr, de, pt, id)에서 name, habitName, actionName 3개 필드 모두 한글 1자도 유출되지 않고 100% 치환되어야 한다', () => {
    const failedTranslationItems: { id: string; name: string; field: string; lang: string; result: string }[] = [];

    habits.forEach((habit: any) => {
      targetLangs.forEach((lang) => {
        const transName = getTranslatedHabitField(habit.id, habit.name, 'name', lang);
        const transHabitName = getTranslatedHabitField(habit.id, habit.name, 'habitName', lang);
        const transActionName = getTranslatedHabitField(habit.id, habit.name, 'actionName', lang);

        if (/[\uAC00-\uD7A3]/.test(transName)) {
          failedTranslationItems.push({ id: habit.id, name: habit.name, field: 'name', lang, result: transName });
        }
        if (/[\uAC00-\uD7A3]/.test(transHabitName)) {
          failedTranslationItems.push({ id: habit.id, name: habit.name, field: 'habitName', lang, result: transHabitName });
        }
        if (/[\uAC00-\uD7A3]/.test(transActionName)) {
          failedTranslationItems.push({ id: habit.id, name: habit.name, field: 'actionName', lang, result: transActionName });
        }
      });
    });

    if (failedTranslationItems.length > 0) {
      console.error('❌ [번역 미적용 필드 발견]:', failedTranslationItems);
    }

    expect(
      failedTranslationItems.length,
      `오류: ${failedTranslationItems.length}개 번역 필드가 다국어 페이지에서 한국어로 남아있거나 유출되었습니다.`
    ).toBe(0);
  });

  it('한국어 모드에서 캔버스에 저장된 습관 아이템(루이자 메이 올콧, 샤를 드 골, 토머스 제퍼슨, 미켈란젤로 등)이 언어 전환 시 해당 언어 텍스트로 동적 치환되어야 한다', () => {
    const sampleSavedCanvasItems = [
      { habitId: 'alcott-mood-ribbon', heroName: '루이자 메이 올콧', habitTitle: '집중 신호용 무드 리본', actionName: '방해 금지 시각 신호 설정' },
      { habitId: 'degaulle-solitaire-refresh', heroName: '샤를 드 골', habitTitle: '의사결정 피로 경감 솔리테어', actionName: '솔리테어 수행' },
      { habitId: 'jefferson-cold-foot-bath', heroName: '토머스 제퍼슨', habitTitle: '아침 냉수 족욕', actionName: '냉수 족욕하기' },
      { habitId: 'michelangelo-flow', heroName: '미켈란젤로', habitTitle: '쪽잠 초몰입', actionName: '작업 장화 신은 쪽잠' },
      { habitId: 'peter-early-labor', heroName: '피터 드러커', habitTitle: '새벽 육체 노동', actionName: '기술 훈련' },
      { habitId: 'rockefeller-red-notebook', heroName: '존 D. 록펠러', habitTitle: '붉은 수첩 필기', actionName: '1센트 단위 기록' },
      { habitId: 'shaw-rotating-hut-focus', heroName: '조지 버나드 쇼', habitTitle: '회전식 오두막 집필', actionName: '고립 몰입' },
      { habitId: 'soseki-forced-writing', heroName: '나쓰메 소세키', habitTitle: '아침 집필 루틴', actionName: '타이머 30분 쓰기' }
    ];

    targetLangs.forEach((lang) => {
      sampleSavedCanvasItems.forEach((item) => {
        const heroName = getTranslatedHabitField(item.habitId, item.heroName, 'name', lang);
        const habitTitle = getTranslatedHabitField(item.habitId, item.heroName, 'habitName', lang);
        const actionName = getTranslatedHabitField(item.habitId, item.heroName, 'actionName', lang);

        expect(/[\uAC00-\uD7A3]/.test(heroName), `캔버스 ${item.habitId} name [${lang}] 번역 실패: ${heroName}`).toBe(false);
        expect(/[\uAC00-\uD7A3]/.test(habitTitle), `캔버스 ${item.habitId} habitTitle [${lang}] 번역 실패: ${habitTitle}`).toBe(false);
        expect(/[\uAC00-\uD7A3]/.test(actionName), `캔버스 ${item.habitId} actionName [${lang}] 번역 실패: ${actionName}`).toBe(false);
      });
    });
  });
});
