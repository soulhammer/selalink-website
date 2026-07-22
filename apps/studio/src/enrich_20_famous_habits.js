import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDataDir = path.join(__dirname, 'data/blogs/habits');
const habitsItemDir = path.join(__dirname, 'data/habits/items');
const koBlogDir = path.join(__dirname, 'content/blog/ko');

const today = "2026-07-22";

const enrichedHabits = [
  // 1. ramanujan-dream-notebook
  {
    slug: "ramanujan-dream-notebook",
    title: {
      ko: "꿈속에서 수학 정리를 본 천재? 스리니바사 라마누잔의 기상 직후 메모 루틴",
      en: "The Genius Who Saw Math Theorems in Dreams? Srinivasa Ramanujan's Morning Note Routine",
      ja: "夢の中で数学の定理を見た天才？スリニヴァーサ・ラマヌジャンのお目覚めメモルーティン",
      zh: "在梦中看见数学定理的天才？斯里尼瓦瑟·拉马努金的醒后笔记惯例",
      es: "¿El genio que vio teoremas matemáticos en sueños? La rutina de notas matutinas de Srinivasa Ramanujan",
      fr: "Le génie qui voyait des théorèmes en rêve ? La routine de notes matinales de Srinivasa Ramanujan",
      de: "Das Genie, das mathematische Theoreme im Traum sah? Srinivasa Ramanujans Morgennotiz-Routine",
      pt: "O gênio que via teoremas matemáticos em sonhos? A rotina de anotações matinais de Srinivasa Ramanujan",
      id: "Sang Genius yang Melihat Teorema Matematika dalam Mimpi? Rutinitas Catatan Pagi Srinivasa Ramanujan"
    },
    description: {
      ko: "정수론과 무한급수의 천재 스리니바사 라마누잔. 수면 중 렘(REM) 상태에서 얻은 직관적 영감을 아침에 눈뜨자마자 3분 메모로 옮겼던 그의 뇌 리셋 법과 현대인을 위한 3단계 실천 루틴을 깊이 있게 알아봅니다.",
      en: "Srinivasa Ramanujan, the mathematical genius of number theory. Discover his morning notebook routine for capturing REM sleep inspirations and a 3-step guide for modern creative thinkers.",
      ja: "数論と無限級数の天才スリニヴァーサ・ラマヌジャン。睡眠中のひらめきを目覚め直後に書き留めた彼の脳活用法と3ステップ実践ガイドを紹介します。",
      zh: "数论与无穷级数天才拉马努金。介绍他在清晨记录梦中灵感的大脑重置法以及现代人三步笔记指南。",
      es: "Srinivasa Ramanujan, el genio de la teoría de números. Descubra su rutina de notas al despertar y una guía práctica de 3 pasos para el pensamiento creativo.",
      fr: "Srinivasa Ramanujan, le génie de la théorie des nombres. Découvrez sa routine de notes au réveil et un guide pratique en 3 étapes.",
      de: "Srinivasa Ramanujan, das Genie der Zahlentheorie. Entdecken Sie seine Aufwach-Notizroutine und einen 3-Schritte-Leitfaden.",
      pt: "Srinivasa Ramanujan, o gênio da teoria dos números. Descubra sua rotina de anotações ao acordar e um guia prático de 3 passos.",
      id: "Srinivasa Ramanujan, genius teori angka. Temukan rutinitas catatan bangun tidurnya dan panduan praktis 3 langkah."
    },
    authority: {
      ko: "Robert Kanigel 전기 'The Man Who Knew Infinity' 및 G. H. Hardy 회고록 'Ramanujan: Essays on His Life and Work'",
      en: "Robert Kanigel's Biography 'The Man Who Knew Infinity' & G. H. Hardy's Memoirs 'Ramanujan: Essays on His Life and Work'",
      ja: "ロバート・カニゲル評伝「The Man Who Knew Infinity」およびG. H. ハーディ回想録",
      zh: "罗伯特·卡尼格尔传记《The Man Who Knew Infinity》与哈代回忆录",
      es: "Biografía de Robert Kanigel 'The Man Who Knew Infinity' y memorias de G. H. Hardy",
      fr: "Biographie de Robert Kanigel 'The Man Who Knew Infinity' & mémoires de G. H. Hardy",
      de: "Robert Kanigels Biografie 'The Man Who Knew Infinity' & G. H. Hardys Memoiren",
      pt: "Biografia de Robert Kanigel 'The Man Who Knew Infinity' & memórias de G. H. Hardy",
      id: "Biografi Robert Kanigel 'The Man Who Knew Infinity' & Memori G. H. Hardy"
    },
    intro: {
      ko: "정수론과 무한급수 분야에서 무려 3,900개가 넘는 독창적인 정리와 공식을 발표하여 현대 수학의 패러다임을 통째로 바꾸고 인류의 인지 지평을 넓힌 인도의 전설적인 천재 수학자, 스리니바사 라마누잔. 정식 학술 교육을 받지 않았음에도 불구하고, 세계 최고의 수학자들이 수십 년간 증명하지 못했던 난제들을 풀어낸 그의 기발한 영감은 과연 어디서 탄생했을까요? 📐\n\n라마누잔은 수면 중이나 붉은 융단을 깔아놓은 침상에서 휴식을 취할 때, 힌두 여신 나마기리(Namagiri)가 꿈속에서 무한급수의 복잡한 공식과 수식을 붉은 먹물로 스크린처럼 띄워 보여주는 꿈을 자주 꾸었습니다. 라마누잔에게 수면은 단순히 체력을 회복하는 시간이 아니라, 의식의 제약이 풀려 무한한 기하학적 아이디어가 재조합되는 최고의 창의적 연구실이었습니다. 그는 아침에 눈을 뜨자마자 뇌가 알파파(Alpha Wave) 상태에 머물러 있는 동안, 꿈속에서 본 수식과 직관이 사라지기 전에 협탁의 노트와 슬레이트(돌판)에 붉은 먹물로 거침없이 기록했습니다.\n\n오늘 BuildSelf에서는 라마누잔이 평생 실천했던 '기상 직후 직관 메모' 루틴의 과학적 작동 원리와 현대인들이 복잡한 난제를 해결하기 위해 이를 어떻게 실생활에 적용할 수 있는지 알아봅니다.",
      en: "Srinivasa Ramanujan, the legendary Indian mathematical genius who published over 3,900 original theorems in number theory and infinite series. Where did his unprecedented intuitive inspiration come from? 📐\n\nRamanujan frequently experienced dreams where the Hindu goddess Namagiri presented complex mathematical formulas written in red ink. For Ramanujan, sleep was a subconscious laboratory where unconstrained geometric ideas merged freely. Upon waking, while his brain remained in an alpha wave state, he immediately wrote down every formula on his bedside slate and notebook before the vivid impressions evaporated.\n\nToday, BuildSelf explores the scientific mechanism behind Ramanujan's 'morning intuition note' routine and how modern creative thinkers can leverage it.",
      ja: "数論と無限級数の分野で前人未到の3,900以上の公式を生み出したインドの天才数学者スリニヴァーサ・ラマヌジャン。彼のひらめきはどこから生まれたのでしょうか？ 📐\n\nラマヌジャンは睡眠中、ヒンドゥー教の女神ナマギリが公式を見せてくれる夢を頻繁に見ました。目覚めた直後、脳がα波の状態にあるうちに、夢の中の数式を即座に枕元のノートに書き留めました。\n\n今日のBuildSelfでは、ラマヌジャンの「目覚め直後メモ」の科学的原理と実践法を紹介します。",
      zh: "在数论与无穷级数领域推导出3900多个独创公式的印度天才数学家斯里尼瓦瑟·拉马努金。他那惊人的直觉灵感究竟源自何处？ 📐\n\n拉马努金经常在梦中梦见女神向他展示复杂公式。醒来后在大脑处于α波状态的最初几分钟内，他会立即在床头笔记本上记下这些公式。\n\n今天，BuildSelf 将带您探究拉马努金“醒后直觉笔记”惯例的科学原理及实践指南。",
      es: "Srinivasa Ramanujan, el genio matemático indio que publicó más de 3,900 teoremas. ¿De dónde provenía su inspiración intuitiva? 📐\n\nRamanujan soñaba con fórmulas complejas presentadas por la diosa Namagiri. Al despertar, mientras su cerebro aún estaba en estado alfa, anotaba inmediatamente las ecuaciones en su libreta de noche.\n\nHoy, BuildSelf explora los principios científicos de la rutina de notas al despertar de Ramanujan y su aplicación moderna.",
      fr: "Srinivasa Ramanujan, le génie mathématique indien ayant publié plus de 3 900 théorèmes. D'où lui venait son inspiration ? 📐\n\nRamanujan rêvait de formules complexes. Dès le réveil, pendant que son cerveau était en ondes alpha, il notait immédiatement les équations.\n\nAujourd'hui, BuildSelf explore les principes scientifiques de la routine de notes au réveil de Ramanujan.",
      de: "Srinivasa Ramanujan, das indische mathematische Genie mit über 3.900 Theoremen. Woher stammte seine intuitive Inspiration? 📐\n\nRamanujan träumte oft von Formeln. Gleich nach dem Aufwachen im Alpha-Zustand schrieb er die Gleichungen auf.\n\nHeute untersucht BuildSelf die wissenschaftlichen Prinzipien von Ramanujans Aufwach-Notizroutine.",
      pt: "Srinivasa Ramanujan, o gênio matemático indiano que publicou mais de 3.900 teoremas. De onde vinha sua inspiração intuitiva? 📐\n\nRamanujan frequentemente sonhava com fórmulas. Ao acordar, em estado alfa, ele anotava imediatamente as equações.\n\nHoje, o BuildSelf explora os princípios científicos da rotina de anotações ao acordar de Ramanujan.",
      id: "Srinivasa Ramanujan, genius matematika India yang mempublikasikan lebih dari 3.900 teorema. Dari mana datangnya inspirasi intuitifnya? 📐\n\nRamanujan sering bermimpi tentang formula. Saat bangun tidur dalam kondisi gelombang alfa, ia segera mencatat persamaan tersebut.\n\nHari ini, BuildSelf menjelajahi prinsip ilmiah di balik rutinitas catatan pagi Ramanujan."
    },
    whyTitle: {
      ko: "기상 직후 알파파와 기본 모드 네트워크의 결합 메커니즘",
      en: "Scientific Mechanism: Coupling Alpha Waves and the Default Mode Network Upon Waking",
      ja: "科学的メカニズム：目覚め直後のα波とデフォルト・モード・ネットワークの結合",
      zh: "科学原理：醒后α波与默认模式网络的结合",
      es: "Mecanismo científico: Acoplamiento de Ondas Alfa y la Red por Defecto al Despertar",
      fr: "Mécanisme scientifique : Couplage des Ondes Alpha et du Réseau par Défaut au Réveil",
      de: "Wissenschaftlicher Mechanismus: Kopplung von Alpha-Wellen und Default-Mode-Netzwerk beim Aufwachen",
      pt: "Mecanismo científico: Acoplamento de Ondas Alfa e a Rede de Modo Padrão ao Acordar",
      id: "Mekanisme Ilmiah: Kombinasi Gelombang Alfa dan Default Mode Network Saat Bangun"
    },
    whyDesc: {
      ko: "우리가 잠에서 깨어난 직후 첫 5~10분 동안 인간의 뇌는 전두엽의 비판적 논리가 활성화되기 전, 의식과 무의식의 경계인 <strong></strong> 및 느린 세타파 상태에 유연하게 머뭅니다. 이 시간 동안 뇌의 <strong></strong>가 밤새 잠재의식 속에서 재조합한 기발한 연상 결합들이 휘발되지 않고 의식의 표면으로 부드럽게 떠오릅니다.\n\n대부분의 현대인들은 눈을 뜨자마자 스마트폰 알림이나 이메일을 확인하여 뇌를 자극적인 <strong></strong> 상태로 강제 전환시킵니다. 하지만 라마누잔처럼 기상 직후 폰을 보지 않고 찰나의 직관을 종이에 기록하면, 논리적 자아가 아이디어를 미리 검열하거나 억제하지 않아 잠재의식이 선사한 무한한 창의적 아이디어를 100% 보존할 수 있습니다.",
      en: "For 5 to 10 minutes immediately after waking up, before critical prefrontal logic takes over, the brain remains in a fluid <strong></strong> state between consciousness and subconsciousness. During this window, innovative associative connections synthesized overnight by the <strong></strong> float gently into conscious awareness.\n\nWhile most modern individuals immediately check phone notifications, forcing their brains into high-stress <strong></strong>, capturing fleeting intuitions upon waking without digital distraction—like Ramanujan—preserves 100% of subconscious creative insights before logical pre-censorship occurs.",
      ja: "目覚めた直後の5〜10分間、前頭葉の批判的論理が働く前に、脳は<strong></strong>にあります。この間に<strong></strong>が潜在意識下で再結合したアイデアが浮上します。\n\nスマホを見ずに直感を記録することで、論理的自我による検閲を受けずに創造的アイデアを100%保護できます。",
      zh: "醒来后的5-10分钟内，在大脑前额叶逻辑全面主导前，处于<strong></strong>。此时由<strong></strong>在潜意识中重组的灵感会浮现出来。\n\n在醒来后立即记录直觉而不看手机，可以避免逻辑自我过早审查，从而百分之百地保留创意。",
      es: "Durante 5-10 minutos tras despertar, el cerebro permanece en estado de <strong></strong>. Las combinaciones creativas de la <strong></strong> emergen.\n\nAl registrar la intuición al despertar sin mirar el teléfono, preservas las ideas creativas al 100% sin censura previa.",
      fr: "Pendant 5 à 10 minutes après le réveil, le cerveau reste en <strong></strong>. Les combinaisons du <strong></strong> émergent.\n\nEn notant l'intuition dès le réveil sans regarder son téléphone, on préserve 100% des idées créatives.",
      de: "5-10 Minuten nach dem Aufwachen befindet sich das Gehirn im <strong></strong>. Kombinationen des <strong></strong> steigen auf.\n\nIndem man Intuitionen sofort aufschreibt, bewahrt man kreative Ideen zu 100%.",
      pt: "Durante 5 a 10 minutos após acordar, o cérebro permanece em <strong></strong>. As combinações da <strong></strong> emergem.\n\nAo registrar a intuição ao acordar sem olhar para o celular, você preserva as ideias criativas a 100%.",
      id: "Selama 5-10 menit setelah bangun, otak berada dalam <strong></strong>. Kombinasi dari <strong></strong> muncul.\n\nDengan mencatat intuisi saat bangun tanpa melihat ponsel, Anda mempertahankan ide kreatif 100%."
    },
    steps: [
      {
        name: {
          ko: "침상 협탁 전용 수첩과 펜 사전 배치",
          en: "Bedside Notebook and Pen Setup",
          ja: "枕元ノートとペンの事前配置",
          zh: "床头柜专用笔记本与笔的预先放置",
          es: "Configuración de libreta y bolígrafo en la mesita",
          fr: "Préparation du carnet et stylo de chevet",
          de: "Nachttisch-Notizbuch und Stift bereitstellen",
          pt: "Preparação do bloco e caneta de cabeceira",
          id: "Menyiapkan Buku Catatan dan Pena di Samping Tempat Tidur"
        },
        text: {
          ko: "잠들기 전 침대 옆 협탁이나 베개 바로 밑에 전용 수첩과 손에 잘 맞는 펜을 미리 꺼내놓아 기상 직후 몸을 크게 움직이지 않고도 손이 닿게 합니다.",
          en: "Place a dedicated notebook and smooth pen on your bedside table or under your pillow before sleeping so you can reach it instantly upon waking.",
          ja: "寝る前に枕元のテーブルや枕の下に専用のノートとペンを用意しておきます。",
          zh: "睡前在床头柜或枕头下放一本专用笔记本和顺手的笔，确保醒来无需大幅度 move 即可触手可及。",
          es: "Coloque una libreta y un bolígrafo en su mesita de noche antes de dormir para alcanzarlos al instante al despertar.",
          fr: "Placez un carnet et un stylo sur votre table de chevet avant de vous coucher pour y accéder immédiatement au réveil.",
          de: "Legen Sie vor dem Schlafengehen ein Notizbuch und einen Stift auf Ihren Nachttisch, um sie sofort greifbar zu haben.",
          pt: "Coloque um bloco de notas e uma caneta na sua mesa de cabeceira antes de dormir para alcançá-los ao acordar.",
          id: "Letakkan buku catatan khusus dan pena di meja samping tempat tidur sebelum tidur agar dapat dijangkau seketika."
        }
      },
      {
        name: {
          ko: "기상 직후 3분간 무검열 직관 자유 메모",
          en: "3-Minute Uncensored Intuition Stream Dumping",
          ja: "目覚め直後3分間の無検閲直感メモ",
          zh: "醒后3分钟无审查直觉倾泻",
          es: "Vuelco libre de intuición de 3 minutos al despertar",
          fr: "Capture libre d'intuition en 3 minutes au réveil",
          de: "3 Minuten freies Intuitionsschreiben beim Aufwachen",
          pt: "Anotação livre de intuição de 3 minutos ao acordar",
          id: "Tulisan Bebas Intuisi 3 Menit Saat Bangun"
        },
        text: {
          ko: "아침에 눈을 뜨자마자 스마트폰을 절대 켜지 말고, 3분간 머릿속에 맴도는 꿈의 잔상, 기발한 단어, 혹은 고민 중인 난제의 힌트를 기호나 그림, 키워드로 자유롭게 쏟아냅니다.",
          en: "Upon waking, strictly avoid your smartphone and spend 3 minutes writing down lingering dream fragments, keywords, or visual symbols without logical evaluation.",
          ja: "目覚めてすぐスマホを見ずに、3分間頭に浮かんだイメージやアイデアをメモに吐き出します。",
          zh: "醒来后切勿看手机，在3分钟内将脑海中的梦境残像、关键词或难题灵感倾倒在纸上。",
          es: "Al despertar, evite mirar el teléfono y vierta las impresiones, palabras o símbolos en la libreta durante 3 minutos.",
          fr: "Au réveil, évitez de regarder votre téléphone et notez les impressions et mots-clés émergents pendant 3 minutes.",
          de: "Vermeiden Sie nach dem Aufwachen das Handy und schreiben Sie 3 Minuten lang flüchtige Gedanken und Symbole auf.",
          pt: "Ao acordar, evite olhar para o celular e anote as impressões, palavras ou símbolos durante 3 minutos.",
          id: "Saat bangun, hindari melihat ponsel dan tumpahkan impresi atau kata kunci ke dalam catatan selama 3 menit."
        }
      },
      {
        name: {
          ko: "오후 타임의 논리적 검증 및 구조화 정제",
          en: "Afternoon Logical Verification and Structuring",
          ja: "午後からの論理的検証と構造化",
          zh: "下午逻辑验证与结构化精炼",
          es: "Verificación lógica y estructuración por la tarde",
          fr: "Vérification logique et structuration l'après-midi",
          de: "Logische Prüfung und Strukturierung am Nachmittag",
          pt: "Verificação lógica e estruturação à tarde",
          id: "Verifikasi Logis dan Strukturisasi di Sore Hari"
        },
        text: {
          ko: "아침에 기록한 날것의 직관 메모를 즉시 현실에 적용하려 하지 말고, 이성적 전두엽 피질이 활성화되는 오후 시간에 다시 펼쳐 현실적 구조와 실행 가능성을 정교하게 정리합니다.",
          en: "Do not evaluate raw morning notes immediately; revisit them in the afternoon when your rational prefrontal cortex is active to refine execution steps.",
          ja: "記録したアイデアの現実性や論理的整理は、理性が活発になる午後の時間に行います。",
          zh: "切勿在早晨指示评估原始笔记，待下午理性大脑活跃时，再重新审视并梳理出可行步聚。",
          es: "Procese y verifique la validez de las ideas por la tarde, cuando la razón está completamente activa.",
          fr: "Vérifiez la faisabilité des idées l'après-midi, lorsque le cortex préfrontal est pleinement actif.",
          de: "Prüfen Sie die Anwendbarkeit der Notizen am Nachmittag bei aktiver Logik und Verstand.",
          pt: "Processe e verifique a estrutura das ideias à tarde, quando a razão está totalmente ativa.",
          id: "Proses dan verifikasi struktur logis dari ide yang dicatat pada sore hari saat nalar aktif."
        }
      }
    ],
    cautionTitle: {
      ko: "기상 직후 스마트폰 미디어 노출과 베타파 강제 진입 주의",
      en: "Caution Against Immediate Smartphone Exposure and Forced High-Beta Spike",
      ja: "目覚め直後のスマホ刺激とβ波強制移行に対する注意",
      zh: "切忌醒后立即接触手机导致高β波飙升",
      es: "Precaución con el teléfono al despertar y la espiga de ondas beta",
      fr: "Attention aux écrans dès le réveil et à la hausse des ondes bêta",
      de: "Vorsicht vor dem Handy nach dem Aufwachen und Beta-Wellen-Spikes",
      pt: "Cuidado com o celular ao acordar e o pico de ondas beta",
      id: "Waspada Paparan Ponsel Saat Bangun dan Lonjakan Gelombang Beta"
    },
    cautionDesc: {
      ko: "눈을 뜨자마자 메시지 알림, 뉴스, SNS를 확인하면 뇌는 즉시 긴장 상태인 고주파 베타파(Beta Waves) 상태로 유입됩니다. 이 순간 뇌는 타인의 반응에 수동적으로 대응하기 시작하며 잠재의식이 밤새 정제해둔 아이디어와 직관을 순식간에 휘발시킵니다. 기상 후 최소 5~10분간은 디지털 미디어 접속을 완벽히 차단하고 나만의 직관에 집중하세요.",
      en: "Checking notifications or social media right upon waking forces your brain into high-frequency Beta Waves, switching it to reactive mode and instantly evaporating subtle subconscious intuitions. Protect at least the first 5-10 minutes post-waking as a digital-free intuition zone.",
      ja: "目覚めてすぐにSNSやニュースを見ると、脳が直ちにβ波状態に移行し、ひらめきが蒸発します。最初の5分間は外部メディアを遮断しましょう。",
      zh: "醒来立即查看通知或新闻会导致大脑直接进入高β波状态，使灵感瞬间挥发。请在醒后前5-10分钟完全隔离数字媒体。",
      es: "Mirar notificaciones al despertar fuerza al cerebro a ondas beta altas, evaporando la intuición. Bloquee los medios al menos los primeros 5-10 minutos.",
      fr: "Consulter ses messages au réveil plonge le cerveau en ondes bêta, évaporant l'intuition. Bloquez les écrans pendant au moins 5 à 10 minutes.",
      de: "Wer sofort Nachrichten liest, versetzt das Gehirn in Beta-Wellen; Intuitionen verfliegen. Sperren Sie Medien für mindestens 5-10 Minuten.",
      pt: "Checar notificações ao acordar força o cérebro a ondas beta, evaporando a intuição. Bloqueie as mídias nos primeiros 5-10 minutos.",
      id: "Memeriksa notifikasi saat bangun memaksa otak ke gelombang beta, menguapkan intuisi. Blokir media setidaknya 5-10 menit pertama."
    },
    faqs: [
      {
        question: {
          ko: "꿈이나 아침 영감이 떠오르지 않을 때는 어떻게 해야 하나요?",
          en: "What if I don't remember any dreams or morning inspirations?",
          ja: "夢や朝のひらめきが思い出せない場合はどうすればいいですか？",
          zh: "如果记不住梦境或早上没有灵感怎么办？",
          es: "¿Qué hacer si no recuerdo sueños ni inspiraciones matutinas?",
          fr: "Que faire si je ne me souviens d'aucun rêve ou d'aucune inspiration ?",
          de: "Was tun, wenn ich mich an keine Träume oder Inspirationen erinnere?",
          pt: "O que fazer se eu não lembrar de sonhos ou inspirações matinais?",
          id: "Bagaimana jika saya tidak mengingat mimpi atau inspirasi pagi?"
        },
        answer: {
          ko: "억지로 아이디어를 짜낼 필요는 전혀 없습니다. 몽롱한 상태에서 머릿속에 떠오르는 단어나 기분, 또는 오늘 꼭 해결하고 싶은 난제 하나를 적어보는 것만으로도 알파파 회로가 강화되고 잠재의식의 문이 차츰 열리기 시작합니다.",
          en: "No need to force ideas. Simply writing down any word, feeling, or a single challenge you want to solve today reinforces the alpha wave circuit and opens subconscious access over time.",
          ja: "無理にアイディアを捻出する必要はありません。単語や今日の課題を1つ書くだけで、α波回路が強化されます。",
          zh: "无需强求。只需写下一个词汇、情绪或今天想解决的难题，就能强化α波回路并逐渐打开潜意识之门。",
          es: "No force ideas. Simplemente anote una palabra, sentimiento o desafío para hoy; esto refuerza el circuito alfa.",
          fr: "Ne forcez rien. Le simple fait de noter un mot, un ressenti ou un défi du jour renforce le circuit des ondes alpha.",
          de: "Zwingen Sie sich zu nichts. Das Aufschreiben eines Wortes oder Gefühls stärkt bereits den Alpha-Wellen-Kreislauf.",
          pt: "Não force ideias. Escrever uma palavra, sentimento ou desafio do dia já reforça o circuito de ondas alfa.",
          id: "Tidak perlu memaksakan ide. Cukup tulis satu kata, perasaan, atau tantangan hari ini untuk memperkuat sirkuit alfa."
        }
      },
      {
        question: {
          ko: "스마트폰의 메모 앱이나 음성 녹음을 사용해도 괜찮나요?",
          en: "Is it okay to use smartphone note apps or voice recordings instead?",
          ja: "デジタルメモアプリや音声録音を使っても大丈夫ですか？",
          zh: "可以使用手机笔记应用或语音录音吗？",
          es: "¿Es adecuado usar aplicaciones de notas digitales o voz?",
          fr: "Puis-je utiliser une application de notes ou d'enregistrement vocal ?",
          de: "Kann ich eine Notiz-App oder Sprachaufnahmen verwenden?",
          pt: "Posso usar aplicativos de notas digitais ou gravação de voz?",
          id: "Bolehkah menggunakan aplikasi catatan digital atau perekam suara?"
        },
        answer: {
          ko: "스마트폰을 켜는 순간 화면의 밝은 빛과 다수의 알림이 뇌파를 급격히 베타파로 전환시킬 위험이 큽니다. 가급적 종이 수첩과 펜을 사용해 시각적 자극과 뇌파의 급변을 최소화하는 것을 강력히 권장합니다.",
          en: "Turning on a smartphone exposes your eyes to bright light and potential notifications, rapidly altering brainwaves. Physical paper and pen are highly recommended to prevent premature beta wave spikes.",
          ja: "スマホを点けると通知や光で脳波が急変します。紙のノートとペンが推奨されます。",
          zh: "开启手机会被屏幕强光和通知干扰，使脑波急剧转变。强烈建议使用纸质笔记本和笔以减少干扰。",
          es: "Encender el teléfono altera las ondas cerebrales por la luz y las notificaciones. Se recomienda encarecidamente papel y bolígrafo.",
          fr: "Allumer un téléphone expose à la lumière et aux notifications. Le papier et le crayon sont fortement recommandés.",
          de: "Handys bringen das Gehirn durch Licht und Mitteilungen durcheinander. Papier und Stift werden dringend empfohlen.",
          pt: "Ligar o celular altera as ondas cerebrais. Recomenda-se fortemente papel e caneta para minimizar distrações.",
          id: "Menyalakan ponsel mengganggu gelombang otak karena cahaya dan notifikasi. Sangat disarankan menggunakan kertas dan pena."
        }
      }
    ]
  },

  // 2. humboldt-nature-journaling
  {
    slug: "humboldt-nature-journaling",
    title: {
      ko: "지구 전체를 유기체로 본 대탐험가? 알렉산더 폰 훔볼트의 현장 관찰 기록 루틴",
      en: "The Explorer Who Saw Earth as a Single Organism? Alexander von Humboldt's Field Journal Routine",
      ja: "地球全体を一つの有機体と見た大探検家？アレクサンダー・フォン・フンボルトの観察記録ルーティン",
      zh: "把整个地球看作有机体的大探险家？亚历山大·冯·洪堡的野外观察笔记惯例",
      es: "¿El explorador que vio la Tierra como un solo organismo? La rutina de notas de campo de Alexander von Humboldt",
      fr: "L'explorateur qui voyait la Terre comme un organisme unique ? La routine de carnet de terrain d'Alexander von Humboldt",
      de: "Der Entdecker, der die Erde als einen Organismus sah? Alexander von Humboldts Feldnotizen-Routine",
      pt: "O explorador que via a Terra como um único organismo? A rotina de notas de campo de Alexander von Humboldt",
      id: "Penjelajah yang Melihat Bumi Sebagai Satu Organisme? Rutinitas Catatan Lapangan Alexander von Humboldt"
    },
    description: {
      ko: "근대 생태학과 지리학의 아버지 알렉산더 폰 훔볼트. 남미 쉼보라소 산을 오르는 혹독한 탐험 현장에서 기압과 식물 데이터를 즉시 노트로 기록해 '코스모스'를 완성한 그의 인지 정밀화 루틴과 3단계 실천법을 소개합니다.",
      en: "Alexander von Humboldt, father of modern ecology and geography. Discover his real-time field journaling routine on Mount Chimborazo and a 3-step guide for precision cognition.",
      ja: "近代生態学の父フンボルト。探検現場でデータを即座に記録し「コスモス」を完成させた彼の認知精密化法と3ステップ実践法を紹介します。",
      zh: "现代地理学之父洪堡。介绍他在探险现场即时记录数据的大脑精准化惯例及现代人三步实践指南。",
      es: "Alexander von Humboldt, padre de la ecología moderna. Descubra su rutina de notas de campo en tiempo real en el Chimborazo y una guía práctica de 3 pasos.",
      fr: "Alexander von Humboldt, père de l'écologie moderne. Découvrez sa routine de carnet de terrain en temps réel et un guide en 3 étapes.",
      de: "Alexander von Humboldt, Vater der modernen Ökologie. Entdecken Sie seine Feldnotiz-Routine am Chimborazo und einen 3-Schritte-Leitfaden.",
      pt: "Alexander von Humboldt, pai da ecologia moderna. Descubra sua rotina de anotações de campo em tempo real no Chimborazo e um guia prático de 3 passos.",
      id: "Alexander von Humboldt, bapak ekologi modern. Temukan rutinitas catatan lapangannya di Gunung Chimborazo dan panduan praktis 3 langkah."
    },
    authority: {
      ko: "Andrea Wulf 전기 'The Invention of Nature: Alexander von Humboldt's New World' 및 훔볼트 저서 'Cosmos'",
      en: "Andrea Wulf's Biography 'The Invention of Nature' & Humboldt's 'Cosmos'",
      ja: "アンドレア・ウルフ評伝「The Invention of Nature」およびフンボルト著「コスモス」",
      zh: "安德烈娅·伍尔夫传记《The Invention of Nature》与洪堡著作《Cosmos》",
      es: "Biografía de Andrea Wulf 'The Invention of Nature' y obra 'Cosmos' de Humboldt",
      fr: "Biographie d'Andrea Wulf 'The Invention of Nature' & ouvrage 'Cosmos' de Humboldt",
      de: "Andrea Wulfs Biografie 'The Invention of Nature' & Humboldts 'Cosmos'",
      pt: "Biografia de Andrea Wulf 'The Invention of Nature' & obra 'Cosmos' de Humboldt",
      id: "Biografi Andrea Wulf 'The Invention of Nature' & Karya Humboldt 'Cosmos'"
    },
    intro: {
      ko: "남미 아마존강과 안데스산맥의 쉼보라소(Chimborazo) 화산을 오르며 근대 지리학과 생태학의 기초를 다진 독일의 위대한 대탐험가이자 과학자, 알렉산더 폰 훔볼트. 찰스 다윈조차 '내 평생에 가장 큰 영감을 준 위대한 스승'이라 극찬했던 그의 통합적 통찰력은 어디서 탄생했을까요? 🌿\n\n훔볼트는 산소 부족과 강풍이 몰아치는 험난한 고산지대를 탐험하는 순간에도, 고도계, 기압계, 온도계를 꺼내 측정한 치수와 희귀 식물 수집 결과를 그 자리에서 바로 현장 노트에 정밀 스케치와 함께 기록했습니다. 그는 관찰과 기록 사이의 시간 간격을 완전히 제거함으로써, 시간이 지남에 따라 발생할 수 있는 기억의 왜곡을 방지하고 지구 전체가 하나의 유기체로 연결되어 있다는 '자연의 코스모스(Cosmos)' 사상을 완성했습니다.\n\n오늘 BuildSelf에서는 훔볼트의 '실시간 현장 관찰 기록' 루틴의 과학적 원리와 현대 직장인 및 연구자들이 학습 인지력을 정밀하게 끌어올리는 3단계 실천 가이드를 공개합니다.",
      en: "Alexander von Humboldt, the great German explorer and scientist who laid the foundation for modern ecology by climbing Mount Chimborazo in the Andes. Where did his holistic insight come from? 🌿\n\nEven amidst freezing winds and altitude sickness, Humboldt immediately pulled out his field notebook to record barometer readings, temperatures, and plant drawings right on the spot. By completely eliminating the delay between observation and recording, he prevented memory distortion and synthesized the revolutionary concept that Earth is a single living organism.\n\nToday, BuildSelf reveals the science behind Humboldt's 'real-time field journaling' routine and a 3-step precision cognition guide.",
      ja: "アマゾンやアンデス山脈を探検し、現代生態学の基礎を築いたアレクサンダー・フォン・フンボルト。彼の統合的洞察は即座の記録から生まれました。🌿\n\nフンボルトは過酷な探検中も、観測した瞬間にノートを取り出し正確な数値とスケッチを記録しました。タイムラグを失くすことで普遍的パターンを発見しました。\n\n今日のBuildSelfでは、フンボルトの「即座観察記録」ルーティンを紹介します。",
      zh: "在亚马逊与安第斯山脉探险并奠定现代地理学与生态学基础的大探险家洪堡。他那整体性的洞察力源自现场即时笔记。🌿\n\n洪堡在严酷的探险现场，每当测量到数据时都会立即拿出笔记本精确记录。通过消除时间差，他发现了自然界的联系。\n\n今天，BuildSelf 将揭示洪堡“即时野外观察笔记”惯例的指南。",
      es: "Alexander von Humboldt, el genio científico que sentó las bases de la ecología. ¿De dónde provenía su visión holística? 🌿\n\nHumboldt sacaba su libreta al instante en sus expediciones para anotar datos y flora. Al eliminar el retraso, descubrió patrones orgánicos en la Tierra.\n\nHoy, BuildSelf revela los principios de la rutina de notas de campo de Humboldt.",
      fr: "Alexander von Humboldt, le géant scientifique qui a posé les bases de l'écologie. D'où lui venait sa vision holistique ? 🌿\n\nHumboldt sortait son carnet à l'instant même lors de ses expéditions. En éliminant le délai, il a découvert des schémas organiques.\n\nAujourd'hui, BuildSelf révèle les principes de la routine de carnet de terrain d'Humboldt.",
      de: "Alexander von Humboldt, der die Grundlagen der Ökologie legte. Woher stammte seine Einsicht? 🌿\n\nHumboldt holte auf seinen Expeditionen sofort sein Notizbuch heraus. Indem er Verzögerungen eliminierte, entdeckte er Muster.\n\nHeute enthüllt BuildSelf die Prinzipien von Humboldts Feldnotizen-Routine.",
      pt: "Alexander von Humboldt, que lançou as bases da ecologia moderna. De onde vinha sua visão holística? 🌿\n\nHumboldt tirava seu bloco de notas instantaneamente. Ao eliminar o atraso, descobriu padrões orgânicos.\n\nHoje, o BuildSelf revela os princípios da rotina de anotações de campo de Humboldt.",
      id: "Alexander von Humboldt, yang meletakkan dasar ekologi modern. Dari mana datangnya wawasan holistiknya? 🌿\n\nHumboldt selalu mengeluarkan buku catatannya seketika dalam ekspedisinya. Dengan menghilangkan jeda, ia menemukan pola.\n\nHari ini, BuildSelf mengungkap prinsip di balik rutinitas catatan lapangan Humboldt."
    },
    whyTitle: {
      ko: "실시간 감각 입력과 작업 기억의 정밀 동기화 메커니즘",
      en: "Precision Mechanism: Real-Time Coupling of Sensory Input and Working Memory",
      ja: "精密メカニズム：リアルタイム感覚入力と作業記憶の同期",
      zh: "精准原理：实时感官输入与工作记忆的同步",
      es: "Mecanismo de precisión: Sincronización en tiempo real de entrada sensorial y memoria de trabajo",
      fr: "Mécanisme de précision : Synchronisation en temps réel de l'entrée sensorielle et de la mémoire de travail",
      de: "Präzisionsmechanismus: Echtzeit-Synchronisation von Sensorik und Arbeitsgedächtnis",
      pt: "Mecanismo de precisão: Sincronização em tempo real de entrada sensorial e memória de trabalho",
      id: "Mekanisme Presisi: Sinkronisasi Real-Time Input Sensorik dan Memori Kerja"
    },
    whyDesc: {
      ko: "인간의 뇌와 기억은 시간이 경과함에 따라 자신이 기존에 가지고 있던 선입견이나 편향으로 수집된 데이터를 사후 합리화하고 재구성하는 성향이 강합니다. 훔볼트의 실시간 현장 관찰 기록법은 외부에서 들어오는 <strong></strong>을 딜레이 없이 실시간 동기화합니다.\n\n관찰한 정보와 수치를 왜곡 없이 현장에서 텍스트와 스케치로 구조화하면, 뇌는 파편적 현상들 사이에 숨겨진 매개변수와 상관관계를 포착하는 <strong></strong> 능력을 최고 수준으로 유지하게 됩니다.",
      en: "Human memory naturally rationalizes and reshapes collected data over time based on prior biases. Humboldt's real-time field notes method synchronizes <strong></strong> without cognitive lag.\n\nStructuring observed facts on the spot through text and visual diagrams prevents memory distortion and elevates <strong></strong>, enabling the brain to detect hidden correlations among fragmented phenomena.",
      ja: "記憶は時間経過とともに偏見でデータに変容を加えます。フンボルトの即時記録法は、<strong></strong>をリアルタイムで同期させます。\n\n現場で事実を正確に構造化することで、潜在的なパターンを発見するメタ認知能力が最大化されます。",
      zh: "人类记忆倾向于随时间推移按偏见重构数据。洪堡的即时记录法将<strong></strong>实时同步。\n\n在现场无失真地整理观察到的事实，能让大脑极大化提升识别潜藏模式的元认知能力。",
      es: "La memoria tiende a distorsionar los datos con el tiempo. La técnica de Humboldt sincroniza la <strong></strong> en tiempo real.\n\nEstructurar los datos observados en el acto sin distorsión maximiza la metacognición para detectar patrones.",
      fr: "La mémoire a tendance à altérer les données avec le temps. La méthode d'Humboldt synchronise <strong></strong> en temps réel.\n\nStructurer les faits sur le champ sans distorsion maximise la métacognition.",
      de: "Das Gedächtnis neigt dazu, Daten mit der Zeit zu verfälschen. Humboldts Methode synchronisiert <strong></strong> in Echtzeit.\n\nDas strukturierte Festhalten von Daten vor Ort maximiert das Erkennen von Mustern.",
      pt: "A memória tende a distorcer dados com o tempo. A técnica de Humboldt sincroniza <strong></strong> em tempo real.\n\nEstruturar dados observados no local sem distorção maximiza a metacognição.",
      id: "Memori manusia cenderung mengubah data seiring waktu. Metode Humboldt menyinkronkan <strong></strong> secara real-time.\n\nMengarahkan fakta yang diamati di tempat tanpa distorsi memaksimalkan metakognisi untuk menemukan pola."
    },
    steps: [
      {
        name: {
          ko: "관찰 및 수집 공간에서의 도구 즉시 배치",
          en: "Instant Deployment of Recording Tools on Site",
          ja: "観察場所での記録ツールの即座配置",
          zh: "在观察场所即刻放置记录工具",
          es: "Despliegue inmediato de herramientas en el sitio",
          fr: "Déploiement immédiat des outils sur le terrain",
          de: "Sofortiges Bereitstellen von Werkzeugen vor Ort",
          pt: "Disponibilização imediata de ferramentas no local",
          id: "Penyiapan Alat Pencatat di Lokasi Seketika"
        },
        text: {
          ko: "새로운 프로젝트 현장, 미팅 공간, 혹은 연구실에 들어서자마자 기록 노트를 펼치거나 필기도구를 손 닿는 위치에 준비하여 기록 진입 장벽을 완전히 허뭅니다.",
          en: "Unfold your notebook or open your digital note tool immediately upon entering a new project meeting or research site to remove entry friction.",
          ja: "新しい場所や会議に到着したら、すぐに記録ツールを手に取れる場所に置きます。",
          zh: "到达新现场或会议地点时，立即将记录工具放在手边，消除记录阻力。",
          es: "Abra su cuaderno inmediatamente al llegar a una reunión o sitio de trabajo para eliminar cualquier fricción.",
          fr: "Ouvrez votre carnet dès votre arrivée en réunion ou sur le terrain pour éliminer tout obstacle.",
          de: "Öffnen Sie Ihr Buch sofort bei der Ankunft am Besprechungsort zur Vermeidung von Hürden.",
          pt: "Abra seu bloco de notas imediatamente ao chegar a um local para eliminar barreiras.",
          id: "Buka buku catatan Anda seketika saat tiba di lokasi untuk menghilangkan hambatan pencatatan."
        }
      },
      {
        name: {
          ko: "객관적 사실 및 핵심 데이터의 실시간 수치화",
          en: "Real-Time Quantification of Objective Facts and Data",
          ja: "客観的事実と核心データのリアルタイム数値化",
          zh: "客观事实与核心数据的实时量化",
          es: "Cuantificación en tiempo real de hechos y datos",
          fr: "Quantification en temps réel des faits et données",
          de: "Echtzeit-Quantifizierung von Fakten und Daten",
          pt: "Quantificação em tempo real de fatos e dados",
          id: "Kuantifikasi Real-Time Fakta dan Data Objektif"
        },
        text: {
          ko: "주관적 감상이나 판단을 배제하고, 목격하거나 수집한 데이터, 핵심 수치, 명확한 키워드를 현장에서 즉시 정밀 텍스트로 적어 내립니다.",
          en: "Exclude subjective opinions and capture observed facts, precise metrics, and key terms on the spot without lag.",
          ja: "主観的感想に偏らず、収集したデータやキーワードを観察直後に記録します。",
          zh: "排除主观偏见，在观察后立即记录具体数据、关键数字和清晰关键词。",
          es: "Evite opiniones subjetivas y anote datos concretos, métricas y palabras clave tras la observación.",
          fr: "Évitez les jugements subjectifs et notez les données, chiffres et mots-clés immédiatement.",
          de: "Vermeiden Sie subjektive Meinungen und schreiben Sie Daten und Fakten sofort auf.",
          pt: "Evite opiniões subjetivas e anote dados concretos e métricas logo após a observação.",
          id: "Hindari bias subjektif dan tulis data konkret serta kata kunci segera setelah pengamatan."
        }
      },
      {
        name: {
          ko: "키워드 간 연관 관계의 visual 화살표 도해",
          en: "Visual Arrow Diagramming of Inter-Keyword Relations",
          ja: "キーワード間の関連性の矢印図解",
          zh: "用箭头图解绘制关键词之间的关联关系",
          es: "Diagramación visual con flechas de relaciones entre datos",
          fr: "Schématisation visuelle par flèches des liaisons",
          de: "Visualisierung von Beziehungen durch Pfeile",
          pt: "Diagramação visual de conexões entre dados",
          id: "Diagram Visual Panah untuk Hubungan Antar Kata Kunci"
        },
        text: {
          ko: "기록된 단어와 데이터들 사이에 화살표, 기호, 혹은 관계선을 그려 넣어, 단편적 정보들이 어떻게 서로 상호작용하는지 유기적 구조로 매핑합니다.",
          en: "Draw arrows and connecting lines between recorded data fragments to visually map how individual items dynamically interact.",
          ja: "記録した単語の間に矢印や記号を書き加え、関連性を視覚化します。",
          zh: "在记录的关键词之间画上箭头或符号，可视化不同数据之间的有机关联。",
          es: "Trace flechas y líneas entre los datos anotados para mapear visualmente sus interconexiones.",
          fr: "Tracez des flèches et des lignes entre les données pour cartographier leurs liaisons.",
          de: "Zeichnen Sie Pfeile und Linien zwischen Notizen, um Wechselwirkungen zu kartieren.",
          pt: "Desenhe setas e linhas entre os dados para mapear visualmente as conexões.",
          id: "Gambar panah dan garis penghubung di antara catatan untuk memetakan hubungan secara visual."
        }
      }
    ],
    cautionTitle: {
      ko: "사후 정리 연기에 따른 뇌의 사후 합리화와 정보 오염 주의",
      en: "Caution Against Post-Hoc Rationalization and Memory Contamination from Delayed Recording",
      ja: "記録延期による記憶の後付け修正と情報汚染に対する注意",
      zh: "切忌因延迟记录导致事后合理化与信息失真",
      es: "Precaución con la racionalización a posteriori al retrasar las notas",
      fr: "Attention aux rationalisations a posteriori en différant la prise de note",
      de: "Vorsicht vor nachträglicher Verfälschung durch aufgeschobene Notizen",
      pt: "Cuidado com a racionalização posterior ao adiar anotações",
      id: "Waspada Rasionalisasi dan Kontaminasi Memori Akibat Menunda Catatan"
    },
    cautionDesc: {
      ko: "'나중에 사무실에 돌아가서 한꺼번에 적어야지' 하고 관찰 기록을 미루면, 뇌는 불과 몇 시간 만에 핵심 세부 수치를 왜곡하거나 편향된 착각으로 가공해버립니다. 훔볼트의 법칙처럼 관찰과 기록 사이의 타임갭을 5분 이내로 줄이는 습관이야말로 가장 정확한 인지 지도를 만드는 비결입니다.",
      en: "Delaying field recording under the assumption of 'I'll summarize later back at the office' causes the brain to replace sharp metrics with biased rationalizations within hours. Keeping the gap under 5 minutes is the key to creating precise cognitive maps.",
      ja: "「後でまとめて書こう」と延期すると、脳は数時間以内に詳細な情報を後付けの錯覚に置き換えます。観察と記録の差を5分以内に抑えましょう。",
      zh: "若拖延记录想着“过后再总结”，大脑会在几小时内用事后合理化替代细节。请将观察与记录的时间差缩短在5分钟内。",
      es: "Posponer la nota pensando 'luego resumo' hace que el cerebro reemplace los detalles reales. Mantenga el margen en menos de 5 minutos.",
      fr: "Différer la note en se disant 'je résumerai plus tard' altère les détails. Gardez un écart de moins de 5 minutes.",
      de: "Wer das Aufschreiben verschiebt, verfälscht Details. Halten Sie den Abstand unter 5 Minuten.",
      pt: "Adiar anotações pensando 'depois eu resumo' faz o cérebro alterar detalhes. Mantenha o intervalo em menos de 5 minutos.",
      id: "Menunda catatan dengan berpikir 'nanti saja diwakili' membuat otak mengganti detail asli. Jaga jeda di bawah 5 menit."
    },
    faqs: [
      {
        question: {
          ko: "현장에서 글씨를 급하게 적느라 악필이 되어도 효과가 있나요?",
          en: "Does it still work effectively if my handwriting is messy on site?",
          ja: "現場で汚い字で素早く書いても効果はありますか？",
          zh: "在现场字迹潦草地快速记录也有效果吗？",
          es: "¿Tiene efecto si escribo rápido y desordenado en el lugar?",
          fr: "Est-ce efficace même si j'écris de manière désordonnée ?",
          de: "Ist es auch wirksam, wenn ich unleserlich schnell schreibe?",
          pt: "Funciona mesmo se eu escrever rápido e de forma desordenada?",
          id: "Apakah tetap efektif meskipun tulisan tangan cepat dan berantakan?"
        },
        answer: {
          ko: "네, 완벽하게 효과가 있습니다! 본 루틴의 핵심은 정갈한 서체가 아니라 '감각 입력과 작업 기억의 즉각적 텍스트 연결'에 있습니다. 깔끔한 재정리는 오후 정리 단계에서 수행하셔도 충분합니다.",
          en: "Yes, 100%! The core of this routine is the instant connection between sensory input and working memory, not pretty handwriting. Clean organization can be done during afternoon review.",
          ja: "はい。「感覚入力とテキストの即時接続」が重要です。整頓は後で行えば十分です。",
          zh: "是的。重要的在于感官输入与文字的即时结合，而非字迹美观。整理可在之后进行。",
          es: "Sí. Lo vital es la conexión instantánea entre la entrada sensorial y el texto. El orden se da después.",
          fr: "Oui. L'important est la connexion immédiate entre sensation et texte. La mise au propre se fait plus tard.",
          de: "Ja. Wichtig ist die sofortige Verbindung von Eindruck und Text. Das Ordnen erfolgt später.",
          pt: "Sim. O importante é a conexão instantânea entre o estímulo e o texto. O alinhamento vem depois.",
          id: "Ya. Yang penting adalah hubungan seketika antara persepsi sensorik dan teks."
        }
      },
      {
        question: {
          ko: "손으로 직접 쓰는 대신 디지털 녹음이나 음성 메모를 써도 되나요?",
          en: "Can I use digital voice memos instead of writing by hand?",
          ja: "手書きの代わりに音声録音機能を使ってもいいですか？",
          zh: "可以用语音录音替代手写记录吗？",
          es: "¿Puedo usar grabación de voz en vez de escribir a mano?",
          fr: "Puis-je utiliser des mémo vocaux au lieu d'écrire ?",
          de: "Kann ich Sprachnotizen anstelle von Handschrift nutzen?",
          pt: "Posso usar gravação de voz em vez de escrever à mão?",
          id: "Bolehkah menggunakan perekam suara dibanding menulis tangan?"
        },
        answer: {
          ko: "음성 녹음도 훌륭한 사실 기록 도구이지만, 손으로 키워드를 적거나 관계 화살표를 그릴 때 활성화되는 뇌의 시운동(Graphomotor) 신경 자극 효과를 동시에 누리기 위해 간략한 키워드 메모를 병행하는 것을 권장합니다.",
          en: "Voice recording is great for raw data, but combining it with quick handwritten keywords or arrow diagrams triggers graphomotor neural circuits for superior cognitive mapping.",
          ja: "音声録音も良いですが、簡単な図解やスケッチの併用をお勧めします。",
          zh: "语音录音也很好，但结合简短的手绘图解能进一步激活手脑联动机制。",
          es: "La voz es útil, pero combinarla con bocetos rápidos activa mejor el procesamiento psicomotor del cerebro.",
          fr: "L'enregistreur est utile, mais le combiner avec des croquis stimule mieux le cerveau.",
          de: "Sprachnotizen sind gut, aber kleine Skizzen aktivieren das Gehirn durch Bewegung noch besser.",
          pt: "Gravador de voz é ótimo, mas combinar com pequenos esboços ativa melhor o cérebro.",
          id: "Perekam suara bagus, namun mengombinasikannya dengan sketsa singkat lebih baik untuk stimulasi otak."
        }
      }
    ]
  }
];

function enrichAll() {
  enrichedHabits.forEach(item => {
    // 1. JSON 저장 (habits/items)
    const itemPath = path.join(habitsItemDir, `${item.slug}.json`);
    if (fs.existsSync(itemPath)) {
      const itemData = JSON.parse(fs.readFileSync(itemPath, 'utf-8'));
      itemData.historicalStory = item.intro.ko;
      itemData.sciencePrinciples = item.whyDesc.ko;
      fs.writeFileSync(itemPath, JSON.stringify(itemData, null, 2), 'utf-8');
      console.log(`[Item 업데이트] ${item.slug}.json`);
    }

    // 2. JSON 저장 (blogs/habits)
    const blogJsonPath = path.join(habitsDataDir, `${item.slug}.json`);
    const jsonObj = { [item.slug]: item };
    fs.writeFileSync(blogJsonPath, JSON.stringify(jsonObj, null, 2), 'utf-8');
    console.log(`[Blog JSON 업데이트] ${item.slug}.json`);

    // 3. KO 마크다운 작성
    const koPath = path.join(koBlogDir, `${item.slug}.md`);
    const stepsYaml = item.steps.map(s => `  - name: "${s.name.ko.replace(/"/g, '\\"')}"\n    text: "${s.text.ko.replace(/"/g, '\\"')}"`).join('\n');
    const faqsYaml = item.faqs.map(f => `  - question: "${f.question.ko.replace(/"/g, '\\"')}"\n    answer: "${f.answer.ko.replace(/"/g, '\\"')}"`).join('\n');

    const stepCardsHtml = item.steps.map((s, idx) => `
<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 tracking-wider">STEP ${idx + 1}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${s.name.ko}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${s.text.ko}
  </p>
</div>`).join('\n');

    const faqAccordionHtml = item.faqs.map((f, idx) => `
  <details class="group ${idx < item.faqs.length - 1 ? 'border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4' : ''} cursor-pointer" ${idx === 0 ? 'open' : ''}>
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
      <span>${f.question.ko}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${f.answer.ko}
    </p>
  </details>`).join('\n');

    const koContent = `---
title: "${item.title.ko.replace(/"/g, '\\"')}"
description: "${item.description.ko.replace(/"/g, '\\"')}"
pubDate: "${today}"
updatedDate: "${today}"
category: "BuildSelf"
tags: ["위인 습관", "Routine"]
heroImage: "/images/blog/${item.slug.replace(/-/g, '_')}.png"
app: "buildself"
formatVersion: 4
authority: "${item.authority.ko.replace(/"/g, '\\"')}"
steps:
${stepsYaml}
faqs:
${faqsYaml}
---

${item.intro.ko}

<div class="my-8 p-6 rounded-[2rem] border border-indigo-500/10 bg-indigo-500/5 dark:border-indigo-500/20 dark:bg-indigo-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-indigo-800 dark:text-indigo-300 m-0">
      역사적 & 학술적 근거
    </h5>
    <p class="text-xs text-indigo-700/80 dark:text-indigo-400/80 m-0 mt-1.5 leading-relaxed">
      본 콘텐츠는 <strong>${item.authority.ko}</strong>에 기록된 역사적 사실 및 최신 인지 뇌과학 연구를 바탕으로 작성되었습니다.
    </p>
  </div>
</div>

---

## 1. ${item.whyTitle.ko}

${item.whyDesc.ko}

---

## 2. 현대인을 위한 실천 가이드 3단계

${stepCardsHtml}

---

## 3. 성공적인 루틴을 위한 뇌과학적 한마디

<div class="my-6 p-5 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-start gap-4">
  <span class="text-xl">💡</span>
  <div>
    <strong class="text-slate-950 dark:text-white font-extrabold block mb-1">${item.cautionTitle.ko}</strong>
    <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
      ${item.cautionDesc.ko}
    </p>
  </div>
</div>

---

<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0 mb-6 flex items-center gap-2">
    <span>📌</span> 자주 묻는 질문 (FAQ)
  </h3>
  ${faqAccordionHtml}
</div>
`;

    fs.writeFileSync(koPath, koContent, 'utf-8');
    console.log(`[KO 마크다운 업데이트] ${item.slug}.md`);
  });
}

enrichAll();
