import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDir = path.join(__dirname, 'data/blogs/habits');

const last5UniqueFixes = {
  'austen-creaky-door': {
    whyTitle: "삐걱거리는 문 소리가 선사하는 작업 전환 마찰 방어",
    whyDesc: "19세기 공용 거실에서 글을 써야 했던 제인 오스틴에게 거실 문 경첩의 삐걱거리는 소리는 침입자를 미리 알려주는 천연 경보 방화벽이었습니다. 이 경보 신호는 뇌에 인지적 준비 시간을 부여하여 작업 전환 마찰과 주의력 잔재(Attention Residue) 손실을 완벽하게 방어해 주었습니다."
  },
  'darwin-sandwalk': {
    whyTitle: "모래길 산책과 돌멩이 세기가 가져오는 인지적 부화 메커니즘",
    whyDesc: "모래길을 걸으며 라운드마다 돌멩이를 하나씩 치우는 찰스 다윈의 유기적 산책 행동은 뇌의 전두엽 긴장을 완화하고 시각 피질과 작업 기억을 자극하여 진화론 종의 기원 사상을 무의식 속에서 재정렬하는 인지적 부화를 일으켰습니다."
  },
  'hugo-hair-shaving': {
    whyTitle: "반쪽 삭발이 강제하는 완벽한 고립과 행동 구속 장치",
    whyDesc: "자신의 외출복을 하인에게 감추게 하고 머리와 수염을 반쪽만 삭발하는 빅토르 위고의 강제 고립 행동은 외부의 유혹 자극을 물리적으로 차단하여 전두엽의 자기통제력을 최고치로 끌어올리고 레 미제라블 집필에 몰입하게 만들었습니다."
  },
  'tchaikovsky-two-hour-walk': {
    whyTitle: "매일 정확히 2시간의 규율적 산책이 주는 뇌파 리듬 안정",
    whyDesc: "매일 오후 4시 정확히 2시간 동안 바깥 공기를 마시며 걷는 차이콥스키의 원칙적인 산책 습관은 뇌의 시공간 피질과 해마 혈류량을 높여 불안과 우울감을 억제하고 대곡 교향곡의 아름다운 선율을 머릿속에서 부화시키는 핵심 동력이 되었습니다."
  },
  'woolf-standing-desk': {
    whyTitle: "입식 책상과 서서 쓰는 글쓰기가 유도하는 전신 고유수용성 자극",
    whyDesc: "화가인 언니 십보라 옆에서 105cm 높이의 입식 책상에 서서 글을 쓰던 버지니아 울프의 습관은 전신 고유수용성 감각을 자극하여 글쓰기의 심리적 저항 장벽을 무력화하고 뇌의 집행 기능을 최고 상태로 가동해 주었습니다."
  }
};

let count = 0;

if (fs.existsSync(habitsDir)) {
  const jsonFiles = fs.readdirSync(habitsDir).filter(f => f.endsWith('.json'));

  jsonFiles.forEach(file => {
    const jsonPath = path.join(habitsDir, file);
    const slug = file.replace('.json', '');
    const rawJson = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    const key = rawJson[slug] ? slug : Object.keys(rawJson)[0];
    const data = rawJson[key];

    if (!data) return;

    const fix = last5UniqueFixes[slug];
    if (fix) {
      if (!data.whyTitle) data.whyTitle = {};
      data.whyTitle.ko = fix.whyTitle;
      if (!data.whyDesc) data.whyDesc = {};
      data.whyDesc.ko = fix.whyDesc;

      fs.writeFileSync(jsonPath, JSON.stringify(rawJson, null, 2), 'utf-8');
      count++;
    }
  });
}

console.log(`✅ [마지막 5개 포스트 완전 고유화 수술 완료] 총 ${count}개 포스트의 whyTitle/whyDesc가 100% 고유하게 교정되었습니다!\n`);
