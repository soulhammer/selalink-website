import { describe, it, expect } from 'vitest';
import { hexToRgb } from '../src/utils/color';

describe('디자인 시스템 HEX-to-RGB 컬러 변환기 검증', () => {
  it('정상적인 6자리 HEX 코드가 올바르게 변환되는가', () => {
    // 해시 기호가 있는 경우
    expect(hexToRgb('#0D9488')).toBe('13, 148, 136');
    expect(hexToRgb('#FFFFFF')).toBe('255, 255, 255');
    expect(hexToRgb('#000000')).toBe('0, 0, 0');
    
    // 해시 기호가 없는 경우
    expect(hexToRgb('0D9488')).toBe('13, 148, 136');
    expect(hexToRgb('FFFFFF')).toBe('255, 255, 255');
  });

  it('3자리 축약형 HEX 코드가 올바르게 복원 후 변환되는가', () => {
    expect(hexToRgb('#fff')).toBe('255, 255, 255');
    expect(hexToRgb('000')).toBe('0, 0, 0');
    expect(hexToRgb('#f00')).toBe('255, 0, 0');
  });

  it('비정상적이거나 유실된 HEX 입력 시 Teal 폴백 컬러를 반환하는가', () => {
    // undefined, null, 빈 문자열 대안
    expect(hexToRgb('')).toBe('13, 148, 136');
    
    // 글자 수 불일치 포맷
    expect(hexToRgb('#FFFF')).toBe('13, 148, 136');
    expect(hexToRgb('GGGGGG')).toBe('13, 148, 136'); // 16진수 문자 오류
    expect(hexToRgb('1234567')).toBe('13, 148, 136');
  });
});
