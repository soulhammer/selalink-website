import { describe, it, expect } from 'vitest';
import { useTranslations, ui } from '../src/i18n/ui';

describe('다국어 번역 시스템 및 폴백(Fallback) 기능 검증', () => {
  it('존재하는 번역 키가 타겟 언어로 정확하게 노출되는가', () => {
    // 한국어 'app.buildself.title' 가져오기
    const tKo = useTranslations('ko');
    expect(tKo('app.buildself.title')).toBe('빌드셀프 BuildSelf');
    
    // 영어 'app.buildself.title' 가져오기
    const tEn = useTranslations('en');
    expect(tEn('app.buildself.title')).toBe('BuildSelf');
  });

  it('타겟 언어 사전에 없는 번역 키 호출 시 영어(en) 폴백 사전의 값을 제공하는가', () => {
    // 테스트용 임시 키를 영어(en) 사전에만 동적으로 주입
    (ui.en as any)['test.only.in.english'] = 'English Fallback Value';
    
    // 에스파냐어(es) 사전에는 해당 키가 없으므로 영어로 폴백되어야 함
    const tEs = useTranslations('es');
    expect(tEs('test.only.in.english' as any)).toBe('English Fallback Value');
    
    // 일본어(ja) 사전 역시 영어로 폴백되어야 함
    const tJa = useTranslations('ja');
    expect(tJa('test.only.in.english' as any)).toBe('English Fallback Value');
  });
});
