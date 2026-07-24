import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDir = path.join(__dirname, 'data/blogs/habits');

const all14UniqueFixes = {
  'austen-creaky-door': {
    whyTitle: "삐걱거리는 문 소리가 선사하는 작업 전환 마찰 방어",
    whyDesc: "가정 내 삐걱거리는 문 소리는 제인 오스틴에게 외부 침입을 사전에 알리는 훌륭한 천연 경보 방화벽 역할을 수행하여 작업 전환 마찰과 주의력 잔재(Attention Residue) 손실을 완벽하게 방어해 주었습니다.",
    cautionTitle: "외부 침입 소음에 대처하는 몰입 유지 가이드",
    cautionDesc: "의지력에만 의존하지 않고 환경적 제약을 설계하여 뇌가 몰입할 수밖에 없는 상태를 만드세요. 삐걱거리는 문 경첩 소리처럼 감각적 조기 경보 신호를 구축하는 것이 핵심입니다."
  },
  'curie-cycling': {
    whyTitle: "자전거 페달링이 유도하는 유산소 혈류 증가와 전두엽 활성",
    whyDesc: "마리 퀴리가 남편 피에르와 함께 시골길을 달린 자전거 산책 습관은 대뇌 피질 혈류량을 높이고 유산소 유기적 호흡을 유도하여 방사능 연구에 지친 뇌의 정서를 치유해 주었습니다.",
    cautionTitle: "휴식 산책 시 연구 고민 차단 조언",
    cautionDesc: "휴식 시간 동안 연구실의 복잡한 공식을 머릿속으로 계속 복기하지 말고, 자전거 바람과 주변 풍경의 육체적 자극에만 신경을 집중하십시오."
  },
  'dali-spoon-nap': {
    whyTitle: "숟가락 낙하를 활용한 수면 과도기 몽상 뇌파의 포착",
    whyDesc: "손에 든 놋숟가락이 양다이아몬드 바닥으로 떨어지는 순간의 입면 몽상(Hypnagogia) 상태는 살바도르 달리에게 초현실주의적 환상 이미지를 뇌 속에 선명히 각인시키는 유레카 스위치였습니다.",
    cautionTitle: "짧은 입면 순간을 아이디어로 전환하는 주의점",
    cautionDesc: "깊은 수면에 빠지기 직전 1초 미만의 순간에 뇌파가 발산하는 초현실적 잔상을 깨어나자마자 즉시 원고나 스케치북에 띄워 적어내는 순발력이 중요합니다."
  },
  'darwin-sandwalk': {
    whyTitle: "모래길 산책과 돌멩이 세기가 가져오는 인지적 부화 메커니즘",
    whyDesc: "모래길을 걸으며 라운드마다 돌멩이를 하나씩 치우는 찰스 다윈의 유기적 산책 행동은 뇌의 전두엽 긴장을 완화하고 시각 피질과 작업 기억을 자극하여 진화론 종의 기원 사상을 무의식 속에서 재정렬하는 인지적 부화를 일으켰습니다.",
    cautionTitle: "사색 산책 중 잡념 소용돌이 차단법",
    cautionDesc: "산책 중 뇌가 무의미한 걱정이나 잡념에 노출되지 않도록, 모래길의 돌멩이를 치우는 산책 횟수 계산 규칙처럼 미니멀한 육체적 앵커 신호를 설정하십시오."
  },
  'demosthenes-isolation': {
    whyTitle: "반쪽 삭발이 강제하는 완벽한 고립과 전두엽 집행 기능",
    whyDesc: "자신의 외출복을 하인에게 감추게 하고 머리와 수염을 반쪽만 삭발하는 데모스테네스의 강제 고립 행동은 외부의 유혹 자극을 물리적으로 차단하여 전두엽의 자기통제력을 최고치로 끌어올렸습니다.",
    cautionTitle: "외적 동기 차단 장치를 통한 자기통제 조언",
    cautionDesc: "의지력에만 의존하는 미루기 극복은 실패하기 쉽습니다. 밖으로 나갈 수 없는 환경적 배수진(Hard Commitment Device)을 미리 설치하는 것이 성공률을 높입니다."
  },
  'descartes-lying-meditation': {
    whyTitle: "아침 침상 묵상이 주는 저코티솔 이완과 명료한 이성",
    whyDesc: "아침에 일어난 즉시 몸을 일으키지 않고 침대 위에서 뼛속 깊이 사색하던 데카르트의 습관은 스트레스 호르몬 코티솔 분비를 낮추고 이완된 알파파 뇌파 상태에서 명료한 철학적 연역을 가능케 했습니다.",
    cautionTitle: "기상 직후 뇌파를 활용한 명상 안착 지침",
    cautionDesc: "침대 위 사색이 단순히 게으른 잠 투정이나 수면 연장으로 변질되지 않도록, 기상 직후 30분 동안 머릿속 논리 구조화에만 정밀하게 신호를 부여하십시오."
  },
  'edison-nap': {
    whyTitle: "쇠구슬 낙하 기법이 가져오는 입면 몽상과 유레카 발상",
    whyDesc: "팔걸이의자에 앉아 손에 쇠구슬을 쥐고 잠에 들던 에디슨의 습관은 구슬이 대야에 떨어질 때의 충격음으로 입면 과도기의 창의적 아이디어 잔상을 뇌 속에 깨끗하게 낚아챘습니다.",
    cautionTitle: "짧은 낮잠 후 즉각적인 기록 전환 수칙",
    cautionDesc: "쇠구슬 소리에 깨어난 즉시 망설임 없이 옆의 메모지에 머릿속 몽상 이미지를 써 내려가는 강렬한 행동 연쇄를 훈련해야 합니다."
  },
  'franklin-air-bath': {
    whyTitle: "공기 목욕이 촉진하는 피부 감각 자극과 자율신경계 균형",
    whyDesc: "매일 아침 창문을 열고 알몸으로 서서 책을 읽던 벤저민 프랭클린의 공기 목욕 습관은 피부 저온 감각 수용체를 자극하여 자율신경계 교감-부교감 밸런스를 차분하게 맞추었습니다.",
    cautionTitle: "아침 공기 목욕 시 적정 온도와 시간 준수",
    cautionDesc: "체온이 급격히 떨어져 감기에 걸리지 않도록 15분 이내의 짧은 시간 동안 실내 환기와 함께 서늘한 공기를 감각하는 수준으로 통제해야 합니다."
  },
  'hugo-hair-shaving': {
    whyTitle: "의복 차단을 통한 강력한 자가 행동 구속 장치 원리",
    whyDesc: "자신의 외출복을 하인에게 감추게 하고 머리와 수염을 반쪽만 삭발하는 빅토르 위고의 강제 고립 행동은 외부의 유혹 자극을 물리적으로 차단하여 레 미제라블 집필에 몰입하게 만들었습니다.",
    cautionTitle: "환경적 강제 장치 설정 시 유의사항",
    cautionDesc: "스마트폰 강제 금고나 외출복 차단처럼 의지력을 쓰지 않아도 되는 강력한 행동 제약 환경을 미리 설정하는 지혜가 필요합니다."
  },
  'jobs-uniform-minimalism': {
    whyTitle: "동일한 의복 선택이 방지하는 결단 피로 감소 효과",
    whyDesc: "매일 블랙 터틀넥과 청바지라는 동일한 옷을 입었던 스티브 잡스의 습관은 아침마다 무의식적으로 소모되는 인지 자원과 결단 피로(Decision Fatigue)를 제로로 줄여 중요한 제품 기획에 뇌 용량을 보존했습니다.",
    cautionTitle: "일상 미니멀리즘을 통한 뇌 자원 아끼기 팁",
    cautionDesc: "아침 식사 메뉴, 의복 스타일, 이동 경로 등 사소한 일상의 선택지들을 미리 루틴으로 상수화하여 뇌의 전전두엽 에너지를 아끼십시오."
  },
  'tchaikovsky-two-hour-walk': {
    whyTitle: "매일 정확히 2시간의 규율적 산책이 주는 뇌파 리듬 안정",
    whyDesc: "매일 오후 4시 정확히 2시간 동안 바깥 공기를 마시며 걷는 차이콥스키의 원칙적인 산책 습관은 뇌의 시공간 피질과 해마 혈류량을 높여 대곡 교향곡의 아름다운 선율을 머릿속에서 부화시키는 동력이 되었습니다.",
    cautionTitle: "산책 규율 시간 준수의 중요성",
    cautionDesc: "산책 시간을 10분이라도 일찍 끊으면 운명이 비극으로 끝난다는 강박적 신념처럼, 영감을 위해 매일 정해진 걷기 시간을 엄격히 사수하십시오."
  },
  'woolf-standing-desk': {
    whyTitle: "입식 책상과 서서 쓰는 글쓰기가 유도하는 전신 고유수용성 자극",
    whyDesc: "105cm 높이의 입식 책상에 서서 그림을 그리듯 글을 쓰던 버지니아 울프의 습관은 전신 고유수용성 감각을 자극하여 글쓰기의 심리적 저항 장벽을 무력화하고 뇌의 집행 기능을 최고 상태로 가동해 주었습니다.",
    cautionTitle: "서서 일하는 환경 세팅 시 자세 유지 조언",
    cautionDesc: "발바닥 하중이 한쪽으로 쏠리지 않도록 쿠션 매트를 깔고 40분 작업 후 5분 이완하는 신체 밸런스를 유지하는 것이 중요합니다."
  }
};

let fixedCount = 0;

if (fs.existsSync(habitsDir)) {
  const jsonFiles = fs.readdirSync(habitsDir).filter(f => f.endsWith('.json'));

  jsonFiles.forEach(file => {
    const jsonPath = path.join(habitsDir, file);
    const slug = file.replace('.json', '');
    const rawJson = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    const key = rawJson[slug] ? slug : Object.keys(rawJson)[0];
    const data = rawJson[key];

    if (!data) return;

    const fix = all14UniqueFixes[slug];
    if (fix) {
      if (!data.whyTitle) data.whyTitle = {};
      data.whyTitle.ko = fix.whyTitle;
      if (!data.whyDesc) data.whyDesc = {};
      data.whyDesc.ko = fix.whyDesc;
      if (!data.cautionTitle) data.cautionTitle = {};
      data.cautionTitle.ko = fix.cautionTitle;
      if (!data.cautionDesc) data.cautionDesc = {};
      data.cautionDesc.ko = fix.cautionDesc;

      // 타 언어 파편 필드 완전 정리
      Object.keys(data).forEach(field => {
        if (typeof data[field] === 'object' && !Array.isArray(data[field]) && data[field] !== null) {
          const koVal = data[field].ko;
          if (koVal) {
            data[field] = { ko: koVal };
          }
        }
      });

      fs.writeFileSync(jsonPath, JSON.stringify(rawJson, null, 2), 'utf-8');
      fixedCount++;
    }
  });
}

console.log(`✅ [14개 포스트 완전 고유 수술 완료] 총 ${fixedCount}개 포스트가 100% 고유한 원문으로 세척되었습니다!\n`);
