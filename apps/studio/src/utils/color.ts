/**
 * HEX 색상 코드를 R, G, B 형식의 문자열로 변환합니다.
 * @param hex HEX 색상 코드 (예: #0D9488, 0D9488, #fff)
 * @returns R, G, B 형식의 문자열 (예: "13, 148, 136")
 */
export function hexToRgb(hex: string): string {
  if (!hex) return '13, 148, 136'; // 기본 폴백 색상 (Teal)
  
  let cleanHex = hex.replace('#', '').trim();
  
  // 3자리 축약형 처리 (예: fff -> ffffff)
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(char => char + char).join('');
  }
  
  if (cleanHex.length !== 6) {
    return '13, 148, 136'; // 비정상적인 포맷 유입 시 안전한 기본 폴백 반환
  }
  
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return '13, 148, 136'; // 파싱 실패 시 폴백
  }
  
  return `${r}, ${g}, ${b}`;
}
