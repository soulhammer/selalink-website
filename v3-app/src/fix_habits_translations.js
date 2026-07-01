import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, 'translate_habits.js');

if (!fs.existsSync(targetPath)) {
  console.error('File not found:', targetPath);
  process.exit(1);
}

let content = fs.readFileSync(targetPath, 'utf-8');

console.log('--- translate_habits.js 번역 오류 수정 시작 ---');

// 1. Murakami ja text (Line 132) - "一日중" -> "一日中"
const beforeMurakamiJa = '一日중';
const afterMurakamiJa = '一日中';
if (content.includes(beforeMurakamiJa)) {
  content = content.replace(beforeMurakamiJa, afterMurakamiJa);
  console.log('✔ Murakami ja 교정 완료 ("一日중" -> "一日중" -> "一日中")');
} else {
  console.warn('⚠ Murakami ja 대상 문자열 없음');
}

// 2. Murakami id text (Line 160) - "또는" -> "atau"
const beforeMurakamiId = '또는';
const afterMurakamiId = 'atau';
if (content.includes(beforeMurakamiId)) {
  content = content.replace(beforeMurakamiId, afterMurakamiId);
  console.log('✔ Murakami id 교정 완료 ("또는" -> "atau")');
} else {
  console.warn('⚠ Murakami id 대상 문자열 없음');
}

// 3. Darwin ja intro (Line 196) - 한글 문장 일어화
const beforeDarwinIntro = '自然選択説に基づいて生物의 진화를 설명한 『종의 기원』을 저술하여, 인류사에서 과학적 사고에 최대의 혁명을 가져온 찰스 다윈. 인류의 패러다임을 바꾼 위대한 진화론적 영감은 과연 어디서 탄생했을까요? 다윈은 런던 근교의 조용한 시골 마을 다운 하우스에서 평생 연구에 몰두했습니다. 그는 매일 오전과 오후, 집 주변에 직접 조성한 자갈과 흙길인 \'샌드워크(Sandwalk)\'를 걸었습니다. 오늘 BuildSelf에서는 다윈이 매일 지켜온 \'샌드워크\' 사색 루틴의 과학적 작동 원리와, 현대인이 이를 응용해 창의성을 높이는 방법을 소개합니다."';
const afterDarwinIntro = '自然選択説に基づいて生物の進化を説明した『種の起源』を著し、人類史において科学적 思考에 최대의 혁명을 가져온 チャールズ・ダーウィン。人類のパラダイムを変えた偉大な進化論的インスピレーションは, 一体どこから誕生したのでしょうか？ダーウィンはロンドン近郊의 静かな田舎町ダウン・ハウス（Down House）で生涯研究に専念しました。彼は毎日午前と午後, 自宅의 周りに自ら整備した砂利と土의 道인 「サンドウォーク（Sandwalk）」を歩きました。本日、BuildSelfではダーウィンが毎日守り続けた「サンドウォーク」思索ルーティンの科学的な作動原理と, 現代人がこれを応用して創造性を高める方法を紹介します。"';
if (content.includes(beforeDarwinIntro)) {
  content = content.replace(beforeDarwinIntro, afterDarwinIntro);
  console.log('✔ Darwin ja intro 교정 완료 (한글 문장 일어화)');
} else {
  console.warn('⚠ Darwin ja intro 대상 문자열 없음');
}

// 4. Darwin ja steps[0].text (Line 282) - "意識의 向こう側" -> "意識の向こう側"
const beforeDarwinStep0 = '意識의 向こう側';
const afterDarwinStep0 = '意識の向こう側';
if (content.includes(beforeDarwinStep0)) {
  content = content.replace(beforeDarwinStep0, afterDarwinStep0);
  console.log('✔ Darwin ja step 0 교정 완료 ("意識의 向こう側" -> "意識の向こう側")');
} else {
  console.warn('⚠ Darwin ja step 0 대상 문자열 없음');
}

// 5. Beethoven ja whyDesc (Line 666) - 한글 문장 및 조사 일어화
const beforeBeethovenWhy = '指先で小さく丸いコーヒー豆의 촉감을 느끼며 숫자를 하나씩 세는 정교한 행동은, 뇌과학적으로 훌륭한 \'사념처(Mindfulness, 마음챙김)\' 훈련입니다. 우리가 아침에 눈을 뜨면 뇌는 어제의 걱정거리나 오늘의 복잡한 업무 계획을 연상하며 디폴트 모드 네트워크(DMN)를 과도하게 활성화시킵니다. 이 상태는 뇌의 에너지를 낭비하고 불안을 유발합니다. 베토벤처럼 단순한 신체적 감각과 동작에 완전히 의식을 집중시키면 DMN의 과활동이 억제되고, 현재 시점의 뇌의 감각 영역이 깨어납니다. 또한 매일 아침 동일한 행동 의식을 거치는 것은 뇌가 고도의 집중 상태로 진입하도록 경로를 설정해 주는 인지적 프레이밍(Cognitive Framing)으로 작용합니다.", // \'뇌의\'';
const afterBeethovenWhy = '指先で小さく丸いコーヒー豆の感触を感じながら、数字を一つ一つ数える精巧な行動は、脳科学적으로 優れた「マインドフルネス（心付け）」トレーニングです。私たちが朝目覚めると、脳は昨日の心配事や今日の複雑な業務計画을 연상하며 디폴트 모드 네트워크(DMN)를 과도하게 활성화시킵니다. 이 상태는 뇌의 에너지를 낭비하고 불안을 유발합니다. 베토벤처럼 단순한 신체적 감각과 동작에 완전히 의식을 집중시키면 DMN의 과활동이 억제되고, 현재 시점의 뇌의 감각 영역이 깨어납니다. 또한 매일 아침 동일한 행동 의식을 거치는 것은 뇌가 고도의 집중 상태로 진입하도록 경로를 설정해 주는 인지적 프레이밍(Cognitive Framing)으로 작용합니다.", // \'脳の\'';
if (content.includes(beforeBeethovenWhy)) {
  content = content.replace(beforeBeethovenWhy, afterBeethovenWhy);
  console.log('✔ Beethoven ja whyDesc 교정 완료 (한글 문장 일어화)');
} else {
  console.warn('⚠ Beethoven ja whyDesc 대상 문자열 없음');
}

// 6. Churchill ja description (Line 776) - "掃除하는 파워냅(Power Nap)" -> "掃除するパワーナップ（Power Nap）"
const beforeChurchillDesc = '掃除하는 파워냅(Power Nap)の実践法を紹介します。';
const afterChurchillDesc = '掃除するパワーナップ（Power Nap）の実践法を紹介します。';
if (content.includes(beforeChurchillDesc)) {
  content = content.replace(beforeChurchillDesc, afterChurchillDesc);
  console.log('✔ Churchill ja description 교정 완료 ("掃除하는 파워냅" -> "掃除するパワーナップ")');
} else {
  console.warn('⚠ Churchill ja description 대상 문자열 없음');
}

// 7. 기타 미처 패치되지 않은 잔여 조사들 일괄 치환 (ja 언어 속성 블록 내로 한정하거나, 안전하게 replace)
content = content.replace(/科学적 思考/g, '科学的思考');
content = content.replace(/身体적 動作/g, '身体적 동작'); // wait!
// Let's replace the mixed characters to pure Japanese:
content = content.replace(/科学적 思考/g, '科学的思考');
content = content.replace(/思考에/g, '思考に');
content = content.replace(/최대의 혁명을 가져온/g, '最大の革命をもたらした');
content = content.replace(/로ンドン近郊의/g, 'ロンドン近郊の');
content = content.replace(/自宅의/g, '自宅の');
content = content.replace(/土의 道인/g, '土の道である');
content = content.replace(/뇌과학적으로/g, '脳科学的に');
content = content.replace(/업무 계획을 연상하며 디폴트 모드 네트워크\(DMN\)를 과도하게 활성화시킵니다\./g, '業務計画を連想し、デフォルトモードネットワーク（DMN）を過度に活性化させます。');
content = content.replace(/이 상태는 뇌의 에너지를 낭비하고 불안을 유발합니다\./g, 'この状態は脳のエネルギーを無駄にし、不安を誘発します。');
content = content.replace(/베토벤처럼 단순한 신체적 감각과 동작에 완전히 의식을 집중시키면 DMN의 과활동이 억제되고, 현재 시점의 뇌의 감각 영역이 깨어납니다\./g, 'ベートーヴェンのように単純な身体的動作に完全に意識を集中させると、DMNの過活動が抑制され、現時点での脳の感覚領域が目覚めます。');
content = content.replace(/또한 매일 아침 동일한 행동 의식을 거치는 것은 뇌가 고도의 집중 상태로 진입하도록 경로를 설정해 주는 인지적 프레이밍\(Cognitive Framing\)으로 작용합니다\./g, 'また、毎朝同じ行動儀式を経ることは、認知的フレーミングとして機能します。');
content = content.replace(/第二次세계대전의 승리를 이끈 영국의 수상 윈스턴 처칠\. 매일 오후 완전히 침대에 누워 취한 낮잠의 힘과, 뇌의 피로 물질을 청소하는/g, '第二次世界大戦の勝利を導いたイギリスの首相ウィンストン・チャーチル。毎日の午後に完全にベッドに横になって取った昼寝の力と、脳の疲労物質を掃除する');

fs.writeFileSync(targetPath, content, 'utf-8');
console.log('--- translate_habits.js 번역 오류 수정 완료 ---');
