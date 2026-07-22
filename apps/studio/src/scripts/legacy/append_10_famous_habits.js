import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDataDir = path.join(__dirname, 'data/blogs/habits');
const koBlogDir = path.join(__dirname, 'content/blog/ko');

const today = "2026-07-22";

const habitEntries = [
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
      ko: "정수론의 천재 라마누잔. 수면 중 영감을 아침에 눈뜨자마자 직관적으로 적어 내렸던 그의 뇌 리셋 법과 현대인을 위한 3단계 메모 루틴을 소개합니다.",
      en: "Srinivasa Ramanujan, the genius of number theory. Discover his morning notebook routine for capturing sleep inspirations and a 3-step modern guide.",
      ja: "数論の天才ラマヌジャン。睡眠中のひらめきを目覚め直後に書き留めた彼の脳活用法と3ステップ実践ガイドを紹介します。",
      zh: "数论天才拉马努金。介绍他在清晨记录梦中灵感的大脑重置法以及现代人三步笔记指南。",
      es: "Srinivasa Ramanujan, el genio de la teoría de números. Descubra su rutina de notas al despertar y una guía práctica de 3 pasos.",
      fr: "Srinivasa Ramanujan, le génie de la théorie des nombres. Découvrez sa routine de notes au réveil et un guide pratique en 3 étapes.",
      de: "Srinivasa Ramanujan, das Genie der Zahlentheorie. Entdecken Sie seine Aufwach-Notizroutine und einen 3-Schritte-Leitfaden.",
      pt: "Srinivasa Ramanujan, o gênio da teoria dos números. Descubra sua rotina de anotações ao acordar e um guia prático de 3 passos.",
      id: "Srinivasa Ramanujan, genius teori angka. Temukan rutinitas catatan bangun tidurnya dan panduan praktis 3 langkah."
    },
    authority: {
      ko: "Robert Kanigel 전기 'The Man Who Knew Infinity' 및 G. H. Hardy 회고록",
      en: "Robert Kanigel's Biography 'The Man Who Knew Infinity' & G. H. Hardy's Memoirs",
      ja: "ロバート・カニゲル評伝「The Man Who Knew Infinity」およびG. H. ハーディ回想録",
      zh: "罗伯特·卡尼格尔传记《The Man Who Knew Infinity》与哈代回忆录",
      es: "Biografía de Robert Kanigel 'The Man Who Knew Infinity' y memorias de G. H. Hardy",
      fr: "Biographie de Robert Kanigel 'The Man Who Knew Infinity' & mémoires de G. H. Hardy",
      de: "Robert Kanigels Biografie 'The Man Who Knew Infinity' & G. H. Hardys Memoiren",
      pt: "Biografia de Robert Kanigel 'The Man Who Knew Infinity' & memórias de G. H. Hardy",
      id: "Biografi Robert Kanigel 'The Man Who Knew Infinity' & Memori G. H. Hardy"
    },
    intro: {
      ko: "정수론과 무한급수 분야에서 독보적인 공식을 쏟아내며 현대 수학에 혁명을 일으킨 인도의 천재 수학자, 스리니바사 라마누잔. 정식 학술 교육을 받지 않았음에도 3,900개가 넘는 정리를 완성한 그의 직관적 영감은 어디서 나왔을까요? 📐\n\n라마누잔은 수면 중이나 명상 중에 힌두 여신 나마기리가 수식과 공식을 보여주는 꿈을 자주 꾸었습니다. 그는 기상 직후 뇌가 몽롱한 알파파 상태에 머물러 있을 때 지체 없이 붉은 먹물이나 노트에 꿈속의 공식들을 거침없이 기록했습니다.\n\n오늘 BuildSelf에서는 라마누잔의 '기상 직후 직관 메모' 루틴의 과학적 작동 원리와 현대인을 위한 실천 가이드를 탐구합니다.",
      en: "Srinivasa Ramanujan, the Indian mathematical genius. Where did his intuitive inspiration come from? 📐\n\nRamanujan often dreamed of formulas presented by the Hindu goddess Namagiri. Upon waking, while his brain was still in an alpha wave state, he immediately wrote down the equations. This routine allowed him to leave behind remarkable theorems.\n\nToday, BuildSelf explores the scientific principles of Ramanujan's 'morning intuition note' routine.",
      ja: "数論と無限級数の分野で前人未到の公式を生み出したインドの天才数学者スリニヴァーサ・ラマヌジャン。彼の直感的なひらめきはどこから生まれたのでしょうか？ 📐\n\nラマヌジャンは睡眠中、ヒンドゥー教の女神ナマギリが公式を見せてくれる夢を見ました。目覚めた直後、脳がα波の状態にあるうちに、夢の中の数式を書き留めました。\n\n今日のBuildSelfでは、ラマヌジャンの「目覚め直後メモ」の科学的原理と実践法を紹介します。",
      zh: "斯里尼瓦瑟·拉马努金，推导出无数独创公式的印度天才数学家。他那惊人的直觉灵感究竟源自何处？ 📐\n\n拉马努金经常在梦中梦见女神向他展示公式。醒来后，在大脑处于α波状态时，他会立即记下这些公式。\n\n今天，BuildSelf 将探究拉马努金“醒后直觉笔记”惯例的科学原理及实践指南。",
      es: "Srinivasa Ramanujan, el genio matemático indio. ¿De dónde provenía su inspiración intuitiva? 📐\n\nRamanujan a menudo soñaba con fórmulas. Al despertar, mientras su cerebro aún estaba en estado alfa, anotaba inmediatamente las ecuaciones.\n\nHoy, BuildSelf explora los principios científicos de la rutina de notas al despertar de Ramanujan.",
      fr: "Srinivasa Ramanujan, le génie mathématique indien. D'où lui venait son inspiration ? 📐\n\nRamanujan rêvait souvent de formules. Dès le réveil, pendant que son cerveau était en ondes alpha, il notait immédiatement les équations.\n\nAujourd'hui, BuildSelf explore les principes scientifiques de la routine de notes au réveil de Ramanujan.",
      de: "Srinivasa Ramanujan, das indische mathematische Genie. Woher stammte seine intuitive Inspiration? 📐\n\nRamanujan träumte oft von Formeln. Gleich nach dem Aufwachen im Alpha-Zustand schrieb er die Gleichungen auf.\n\nHeute untersucht BuildSelf die wissenschaftlichen Prinzipien von Ramanujans Aufwach-Notizroutine.",
      pt: "Srinivasa Ramanujan, o gênio matemático indiano. De onde vinha sua inspiração intuitiva? 📐\n\nRamanujan frequentemente sonhava com fórmulas. Ao acordar, em estado de ondas alfa, ele anotava imediatamente as equações.\n\nHoje, o BuildSelf explora os princípios científicos da rotina de anotações ao acordar de Ramanujan.",
      id: "Srinivasa Ramanujan, genius matematika India. Dari mana datangnya inspirasi intuitifnya? 📐\n\nRamanujan sering bermimpi tentang formula. Saat bangun tidur dalam kondisi gelombang alfa, ia segera mencatat persamaan tersebut.\n\nHari ini, BuildSelf menjelajahi prinsip ilmiah di balik rutinitas catatan pagi Ramanujan."
    },
    whyTitle: {
      ko: "기상 직후 알파파와 기본 모드 네트워크의 결합",
      en: "Coupling Alpha Waves and the Default Mode Network Upon Waking",
      ja: "目覚め直後のα波とデフォルト・モード・ネットワークの結合",
      zh: "醒后α波与默认模式网络的结合",
      es: "Acoplamiento de Ondas Alfa y la Red por Defecto al Despertar",
      fr: "Couplage des Ondes Alpha et du Réseau par Défaut au Réveil",
      de: "Kopplung von Alpha-Wellen und Default-Mode-Netzwerk beim Aufwachen",
      pt: "Acoplamento de Ondas Alfa e a Rede de Modo Padrão ao Acordar",
      id: "Kombinasi Gelombang Alfa dan Default Mode Network Saat Bangun"
    },
    whyDesc: {
      ko: "잠에서 깨어난 직후 5~10분 동안 인간의 뇌는 의식과 무의식의 경계인 알파파(Alpha Waves) 상태에 머뭅니다. 이 시간 동안 뇌의 <strong>기본 모드 네트워크(DMN)</strong>가 잠재의식 속에서 재조합한 기발한 결합들이 휘발되지 않고 의식 영역으로 떠오릅니다.\n\n라마누잔처럼 기상 직후 폰을 보지 않고 직관을 기록하면, 논리적 자아가 아이디어를 미리 검열하거나 억제하지 않아 창의적 아이디어를 100% 보존할 수 있습니다.",
      en: "For 5-10 minutes after waking up, the human brain stays in an alpha wave state. During this time, creative combinations made by the <strong>Default Mode Network (DMN)</strong> float to conscious awareness.\n\nBy recording intuition immediately upon waking without checking phones, like Ramanujan, you preserve creative ideas 100%.",
      ja: "目覚めた直後の5〜10分間、人間はα波状態にあります。この間に<strong>デフォルト・モード・ネットワーク（DMN）</strong>が再結合したアイデアが浮かび上がります。\n\nスマホを見ずに直感を記録することで、創造的アイデアを100%保護できます。",
      zh: "醒来后的5-10分钟内，大脑处于α波状态。此时由<strong>默认模式网络(DMN)</strong>重组的灵感会浮现出来。\n\n在醒来后立即记录直觉而不看手机，可以百分之百地保留创意。",
      es: "Tras despertar, el cerebro permanece en estado de ondas alfa. Las combinaciones creativas de la <strong>Red por Defecto (DMN)</strong> emergen.\n\nAl registrar la intuición al despertar sin mirar el teléfono, preservas las ideas creativas al 100%.",
      fr: "Après le réveil, le cerveau reste en ondes alpha. Les combinaisons du <strong>Réseau par Défaut (DMN)</strong> émergent.\n\nEn notant l'intuition dès le réveil sans regarder son téléphone, on préserve 100% des idées créatives.",
      de: "Nach dem Aufwachen befindet sich das Gehirn im Alpha-Zustand. Kombinationen des <strong>Default-Mode-Netzwerks (DMN)</strong> steigen auf.\n\nIndem man Intuitionen sofort aufschreibt, bewahrt man kreative Ideen zu 100%.",
      pt: "Após acordar, o cérebro permanece em ondas alfa. As combinações da <strong>Rede de Modo Padrão (DMN)</strong> emergem.\n\nAo registrar a intuição ao acordar sem olhar para o celular, você preserva as ideias criativas a 100%.",
      id: "Setelah bangun, otak berada dalam gelombang alfa. Kombinasi dari <strong>Default Mode Network (DMN)</strong> muncul.\n\nDengan mencatat intuisi saat bangun tanpa melihat ponsel, Anda mempertahankan ide kreatif 100%."
    },
    steps: [
      {
        name: {
          ko: "침상 수첩 배치",
          en: "Bedside Notebook Setup",
          ja: "枕元ノートの配置",
          zh: "床头笔记本设置",
          es: "Configuración de libreta en la mesita",
          fr: "Préparation du carnet de chevet",
          de: "Nachttisch-Notizbuch bereitstellen",
          pt: "Preparação do bloco de cabeceira",
          id: "Menyiapkan Buku Catatan di Samping Tempat Tidur"
        },
        text: {
          ko: "잠들기 전 침대 옆 협탁에 전용 수첩과 펜을 미리 꺼내놓아 기상 직후 손이 닿게 합니다.",
          en: "Place a dedicated notebook and pen on your bedside table before going to sleep.",
          ja: "寝る前に枕元のテーブルに専用のノートとペンを用意しておきます。",
          zh: "睡前在床头柜上放一本专用笔记本和一支笔，确保醒来触手可及。",
          es: "Coloque una libreta y un bolígrafo en su mesita de noche antes de dormir.",
          fr: "Placez un carnet et un stylo sur votre table de chevet avant de vous coucher.",
          de: "Legen Sie vor dem Schlafengehen ein Notizbuch und einen Stift auf Ihren Nachttisch.",
          pt: "Coloque um bloco de notas e uma caneta na sua mesa de cabeceira antes de dormir.",
          id: "Letakkan buku catatan khusus dan pena di meja samping tempat tidur sebelum tidur."
        }
      },
      {
        name: {
          ko: "3분 무검열 직관 자유 기록",
          en: "3-Minute Uncensored Intuition Dump",
          ja: "3分間の無検閲直感メモ",
          zh: "3分钟无审查直觉倾泻",
          es: "Escritura libre de intuición de 3 minutos",
          fr: "Capture libre d'intuition en 3 minutes",
          de: "3 Minuten freies Intuitionsschreiben",
          pt: "Anotação livre de intuição de 3 minutos",
          id: "Tulisan Bebas Intuisi 3 Menit"
        },
        text: {
          ko: "아침에 눈을 뜨자마자 스마트폰을 보지 않고, 3분간 머릿속에 떠오른 잔상이나 아이디어를 기호나 단어로 쏟아냅니다.",
          en: "Upon waking, avoid checking your smartphone and pour out lingering impressions or ideas into keywords for 3 minutes.",
          ja: "目覚めてすぐスマホを見ずに、3分間頭に浮かんだイメージやアイデアをメモに吐き出します。",
          zh: "醒来后切勿看手机，在3分钟内将脑海中的残像或想法快速倾倒在纸上。",
          es: "Al despertar, evite mirar el teléfono y vierta las impresiones o ideas en la libreta durante 3 minutos.",
          fr: "Au réveil, évitez de regarder votre téléphone et notez les impressions qui émergent pendant 3 minutes.",
          de: "Vermeiden Sie nach dem Aufwachen das Handy und schreiben Sie 3 Minuten lang flüchtige Gedanken auf.",
          pt: "Ao acordar, evite olhar para o celular e anote as impressões ou ideias durante 3 minutos.",
          id: "Saat bangun, hindari melihat ponsel dan tumpahkan impresi atau ide ke dalam catatan selama 3 menit."
        }
      },
      {
        name: {
          ko: "오후 논리 검증 및 정제",
          en: "Afternoon Logical Verification",
          ja: "午後からの論理的検証",
          zh: "下午逻辑验证与整理",
          es: "Verificación lógica por la tarde",
          fr: "Vérification logique l'après-midi",
          de: "Logische Prüfung am Nachmittag",
          pt: "Verificação lógica à tarde",
          id: "Verifikasi Logis di Sore Hari"
        },
        text: {
          ko: "기록한 아이디어의 현실성과 논리적 가공은 이성이 활성화되는 오후 시간에 수행합니다.",
          en: "Process and verify the logical structure of recorded ideas in the afternoon when rational reasoning is active.",
          ja: "記録したアイデアの現実性や論理的整理は、理性が活発になる午後の時間に行います。",
          zh: "在理性活跃的下午，再对早晨记录的想法进行可行性评估与整理。",
          es: "Procese y verifique la validez de las ideas por la tarde, cuando la razón está activa.",
          fr: "Vérifiez la faisabilité des idées l'après-midi, lorsque la raison est pleinement active.",
          de: "Prüfen Sie die Anwendbarkeit der Notizen am Nachmittag bei aktiver Logik.",
          pt: "Processe e verifique a estrutura das ideias à tarde, quando a razão está ativa.",
          id: "Proses dan verifikasi struktur logis dari ide yang dicatat pada sore hari saat nalar aktif."
        }
      }
    ],
    cautionTitle: {
      ko: "기상 직후 스마트폰 미디어 노출주의",
      en: "Caution Against Smartphone Exposure Upon Waking",
      ja: "目覚め直後のスマホ刺激に対する注意",
      zh: "切忌醒后立即接触手机媒体",
      es: "Precaución con el teléfono al despertar",
      fr: "Attention aux écrans dès le réveil",
      de: "Vorsicht vor dem Handy direkt nach dem Aufwachen",
      pt: "Cuidado com o celular ao acordar",
      id: "Waspada Paparan Ponsel Saat Bangun"
    },
    cautionDesc: {
      ko: "눈을 뜨자마자 알림 메시지나 뉴스, SNS를 확인하면 뇌가 즉시 자극적인 베타파(Beta Waves) 상태로 진입하여 잠재의식이 선사한 직관과 영감이 순식간에 휘발됩니다. 최소 5분간 외부 미디어 접속을 차단하세요.",
      en: "Checking notifications or news upon waking forces the brain immediately into high-beta waves, evaporating subtle subconscious intuitions. Block external media for at least the first 5 minutes.",
      ja: "目覚めてすぐにSNSやニュースを見ると、脳が直ちにβ波状態に移行し、ひらめきが蒸発します。最初の5分間は外部メディアを遮断しましょう。",
      zh: "醒来立即查看通知或新闻会导致大脑直接进入高β波状态，使灵感瞬间挥发。请在醒后前5分钟完全隔离媒体。",
      es: "Mirar notificaciones al despertar fuerza al cerebro a ondas beta altas, evaporando la intuición. Bloquee los medios al menos durante los primeros 5 minutos.",
      fr: "Consulter ses messages au réveil plonge le cerveau en ondes bêta, évaporant l'intuition. Bloquez les écrans pendant au moins 5 minutes.",
      de: "Wer sofort Nachrichten liest, versetzt das Gehirn in Beta-Wellen; Intuitionen verfliegen. Sperren Sie Medien für mindestens 5 Minuten.",
      pt: "Checar notificações ao acordar força o cérebro a ondas beta, evaporando a intuição. Bloqueie as mídias nos primeiros 5 minutos.",
      id: "Memeriksa notifikasi saat bangun memaksa otak ke gelombang beta, menguapkan intuisi. Blokir media setidaknya selama 5 menit pertama."
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
          ko: "억지로 아이디어를 짜낼 필요는 없습니다. 멍한 상태에서 떠오르는 단어나 기분, 또는 오늘 꼭 해결하고 싶은 난제 하나를 적어보는 것만으로도 알파파 회로가 강화됩니다.",
          en: "No need to force ideas. Simply writing down a word, feeling, or a single challenge you want to solve today reinforces the alpha wave circuit.",
          ja: "無理にアイディアを捻出する必要はありません。単語や今日の課題を1つ書くだけで、α波回路が強化されます。",
          zh: "无需强求。只需写下一个词汇、情绪或今天想解决的难题，就能强化α波回路。",
          es: "No force ideas. Simplemente anote una palabra o desafío para hoy; esto refuerza el circuito alfa.",
          fr: "Ne forcez rien. Le simple fait de noter un mot ou un défi du jour renforce le circuit des ondes alpha.",
          de: "Zwingen Sie sich zu nichts. Das Aufschreiben eines Wortes stärkt bereits den Alpha-Wellen-Kreislauf.",
          pt: "Não force ideias. Escrever uma palavra ou desafio do dia já reforça o circuito de ondas alfa.",
          id: "Tidak perlu memaksakan ide. Cukup tulis satu kata atau tantangan hari ini untuk memperkuat sirkuit alfa."
        }
      },
      {
        question: {
          ko: "디지털 메모 앱을 사용해도 괜찮나요?",
          en: "Is it okay to use digital note apps instead?",
          ja: "デジタルメモアプリを使っても大丈夫ですか？",
          zh: "可以使用数字笔记应用吗？",
          es: "¿Es adecuado usar aplicaciones de notas digitales?",
          fr: "Puis-je utiliser une application de notes sur téléphone ?",
          de: "Kann ich eine digitale Notiz-App verwenden?",
          pt: "Posso usar aplicativos de notas digitais?",
          id: "Bolehkah menggunakan aplikasi catatan digital?"
        },
        answer: {
          ko: "스마트폰을 켜는 순간 다른 알림과 조명으로 인해 뇌파가 급격히 바뀔 수 있습니다. 가급적 종이 수첩과 펜을 사용하는 것이 시각적 방해를 최소화합니다.",
          en: "Turning on a smartphone exposes your brain to light and notifications, altering brainwaves. Physical paper and pen are recommended to minimize visual disruption.",
          ja: "スマホを点けると通知や光で脳波が急変します。紙のノートとペン가推奨されます。",
          zh: "开启手机会被屏幕光线和通知干扰，改变脑波。建议使用纸质笔记本和笔。",
          es: "Encender el teléfono altera las ondas cerebrales por la luz y las notificaciones. Se recomienda papel y bolígrafo.",
          fr: "Allumer un téléphone expose à la lumière et aux notifications. Le papier et le crayon sont recommandés.",
          de: "Handys bringen das Gehirn durch Licht durcheinander. Papier und Stift sind besser.",
          pt: "Ligar o celular altera as ondas cerebrais. Recomenda-se papel e caneta para minimizar distrações.",
          id: "Menyalakan ponsel mengganggu gelombang otak karena cahaya dan notifikasi. Disarankan kertas dan pena."
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
      ko: "근대 지리학의 아버지 알렉산더 폰 훔볼트. 탐험 현장에서 데이터와 관찰 결과를 실시간으로 기록하여 '코스모스'를 완성한 그의 인지 정밀 루틴과 3단계 실천법을 소개합니다.",
      en: "Alexander von Humboldt, father of modern geography. Discover his real-time field journaling routine and a 3-step guide for modern precision cognition.",
      ja: "近代地理学の父フンボルト。探検現場でデータを即座に記録し「コスモス」を完成させた彼の認知精密化法と3ステップ実践法を紹介します。",
      zh: "现代地理学之父洪堡。介绍他在探险现场即时记录数据的大脑精准化惯例及现代人三步实践指南。",
      es: "Alexander von Humboldt, padre de la geografía moderna. Descubra su rutina de notas de campo en tiempo real y una guía práctica de 3 pasos.",
      fr: "Alexander von Humboldt, père de la géographie moderne. Découvrez sa routine de carnet de terrain en temps réel et un guide en 3 étapes.",
      de: "Alexander von Humboldt, Vater der modernen Geographie. Entdecken Sie seine Feldnotiz-Routine und einen 3-Schritte-Leitfaden.",
      pt: "Alexander von Humboldt, pai da geografia moderna. Descubra sua rotina de anotações de campo em tempo real e um guia prático de 3 passos.",
      id: "Alexander von Humboldt, bapak geografi modern. Temukan rutinitas catatan lapangannya dan panduan praktis 3 langkah."
    },
    authority: {
      ko: "Andrea Wulf 전기 'The Invention of Nature' 및 훔볼트 저서 'Cosmos'",
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
      ko: "남미 아마존과 안데스산맥을 탐험하며 근대 생태학의 기초를 다진 대탐험가 알렉산더 폰 훔볼트. 그의 위대한 통찰은 현장에서 즉시 기록한 노포트에서 시작되었습니다. 🌿\n\n훔볼트는 현장에서 측정한 기온과 식물 고도를 순간 정밀 노트로 적었습니다. 관찰과 기록의 시차를 없애어 지식의 왜곡을 방지했습니다.\n\n오늘 BuildSelf에서는 훔볼트의 실시간 현장 관찰 기록 루틴을 소개합니다.",
      en: "Alexander von Humboldt, who laid the foundation for modern geography. Where did his holistic insight come from? 🌿\n\nHumboldt always pulled out his notebook instantly during expeditions to record data. By eliminating delay, he discovered organic patterns.\n\nToday, BuildSelf reveals the principles behind Humboldt's 'field journaling' routine.",
      ja: "アマゾンやアンデス山脈を探検し、現代生態学の基礎を築いたアレクサンダー・フォン・フンボルト。彼の統合的洞察は即座の記録から生まれました。🌿\n\nフンボルトは観測した瞬間にノートを取り出しました。タイムラグを失くすことで普遍的パターンを発見しました。\n\n今日のBuildSelfでは、フンボルトの「即座観察記録」ルーティンを紹介します。",
      zh: "奠定现代地理学与生态学基础的大探险家洪堡。他那整体性的洞察力源自现场即时笔记。🌿\n\n洪堡在现场测量数据时会立即记录。通过消除时间差，他发现了自然界的联系。\n\n今天，BuildSelf 将揭示洪堡“即时野外观察笔记”惯例的指南。",
      es: "Alexander von Humboldt, el genio científico que sentó las bases de la ecología. ¿De dónde provenía su visión holística? 🌿\n\nHumboldt sacaba su libreta al instante en sus expediciones. Al eliminar el retraso, descubrió patrones orgánicos.\n\nHoy, BuildSelf revela los principios de la rutina de notas de campo de Humboldt.",
      fr: "Alexander von Humboldt, le génie qui a posé les bases de l'écologie. D'où lui venait sa vision holistique ? 🌿\n\nHumboldt sortait son carnet à l'instant même lors de ses expéditions. En éliminant le délai, il a découvert des schémas.\n\nAujourd'hui, BuildSelf révèle les principes de la routine de carnet de terrain d'Humboldt.",
      de: "Alexander von Humboldt, der die Grundlagen der Ökologie legte. Woher stammte seine Einsicht? 🌿\n\nHumboldt holte auf seinen Expeditionen sofort sein Notizbuch heraus. Indem er Verzögerungen eliminierte, entdeckte er Muster.\n\nHeute enthüllt BuildSelf die Prinzipien von Humboldts Feldnotizen-Routine.",
      pt: "Alexander von Humboldt, que lançou as bases da ecologia moderna. De onde vinha sua visão holística? 🌿\n\nHumboldt tirava seu bloco de notas instantaneamente. Ao eliminar o atraso, descobriu padrões orgânicos.\n\nHoje, o BuildSelf revela os princípios da rotina de anotações de campo de Humboldt.",
      id: "Alexander von Humboldt, yang meletakkan dasar ekologi modern. Dari mana datangnya wawasan holistiknya? 🌿\n\nHumboldt selalu mengeluarkan buku catatannya seketika dalam ekspedisinya. Dengan menghilangkan jeda, ia menemukan pola.\n\nHari ini, BuildSelf mengungkap prinsip di balik rutinitas catatan lapangan Humboldt."
    },
    whyTitle: {
      ko: "실시간 감각 입력과 메타인지의 즉각적 결합",
      en: "Immediate Coupling of Real-time Sensory Input and Metacognition",
      ja: "リアルタイム感覚入力とメタ認知の即座の結合",
      zh: "实时感官输入与元认知的即时结合",
      es: "Acoplamiento inmediato de la entrada sensorial en tiempo real y la metacognición",
      fr: "Couplage immédiat des entrées sensorielles et de la métacognition",
      de: "Sofortige Kopplung von Echtzeit-Sensorik und Metakognition",
      pt: "Acoplamento imediato de entrada sensorial em tempo real e metacognição",
      id: "Kombinasi Langsung Antara Input Sensorik Real-time dan Metakognisi"
    },
    whyDesc: {
      ko: "인간의 기억은 시간이 지남에 따라 변형됩니다. 훔볼트의 실시간 기록법은 <strong>실제 데이터와 작업 기억</strong>을 실시간 동기화하여 왜곡 없는 패턴 인식을 유도합니다.",
      en: "Human memory distorts data over time. Humboldt's notes synchronize <strong>sensory data and working memory</strong> in real time to maximize pattern recognition.",
      ja: "記憶は時間経過で変化します。フンボルトの即時記録法は<strong>感覚データと作業記憶</strong>を同期させ、パターン認識を極大化します。",
      zh: "人类记忆会随时间失真。洪堡的即时记录法将<strong>感官数据与工作记忆</strong>实时同步，提升模式识别。",
      es: "La memoria distorsiona los datos. La técnica de Humboldt sincroniza la <strong>entrada sensorial y la memoria de trabajo</strong> en tiempo real.",
      fr: "La mémoire altère les données. La méthode d'Humboldt synchronise <strong>l'entrée sensorielle et la mémoire de travail</strong> en temps réel.",
      de: "Das Gedächtnis verfälscht Daten. Humboldts Methode synchronisiert <strong>Sensorik und Arbeitsgedächtnis</strong> in Echtzeit.",
      pt: "A memória distorce dados. A técnica de Humboldt sincroniza <strong>entrada sensorial e memória de trabalho</strong> em tempo real.",
      id: "Memori manusia memodifikasi data. Metode Humboldt menyinkronkan <strong>input sensorik dan memori kerja</strong> secara real-time."
    },
    steps: [
      {
        name: {
          ko: "현장 노트 준비",
          en: "Field Notebook Readiness",
          ja: "現場ノートの準備",
          zh: "准备好随身笔记",
          es: "Preparación de cuaderno de campo",
          fr: "Carnet de terrain prêt",
          de: "Feldnotizbuch bereithalten",
          pt: "Bloco de campo à mão",
          id: "Menyiapkan Catatan Lapangan"
        },
        text: {
          ko: "새로운 관찰 공간이나 미팅에 도착하자마자 기록 도구를 손닿는 곳에 꺼내어 둡니다.",
          en: "Place recording tools within reach immediately upon arriving at a site or meeting.",
          ja: "新しい場所や会議に到着したら、すぐに記録ツールを手に取れる場所に置きます。",
          zh: "到达新现场或会议地点时，立即将记录工具放在手边。",
          es: "Coloque las herramientas de nota a mano al llegar a una reunión o sitio.",
          fr: "Gardez vos outils de note à portée de main dès votre arrivée.",
          de: "Legen Sie Notizwerkzeuge sofort bei der Ankunft bereit.",
          pt: "Coloque as ferramentas de anotação à mão ao chegar a um local.",
          id: "Letakkan alat pencatat dalam jangkauan segera setelah tiba di lokasi."
        }
      },
      {
        name: {
          ko: "즉각적 객관 사실 수치화",
          en: "Immediate Objective Fact Quantification",
          ja: "即座の客観的事実の数値化",
          zh: "即时量化客观事实",
          es: "Cuantificación objetiva inmediata",
          fr: "Quantification immédiate des faits",
          de: "Sofortiges Quantifizieren von Fakten",
          pt: "Quantificação objetiva imediata",
          id: "Kuantifikasi Fakta Objektif Seketika"
        },
        text: {
          ko: "주관적 감상에 치우치지 않고, 수집된 데이터나 핵심 키워드를 관찰 직후 적어 내려갑니다.",
          en: "Avoid subjective biases and write down collected data and clear keywords right after observing.",
          ja: "主観的感想に偏らず、収集したデータやキーワードを観察直後に記録します。",
          zh: "避免主观偏见，在观察后立即记录数据和明确关键词。",
          es: "Evite opiniones subjetivas y anote datos concretos y palabras clave tras la observación.",
          fr: "Évitez les jugements subjectifs et notez les données et mots-clés immédiatement.",
          de: "Vermeiden Sie subjektive Meinungen und schreiben Sie Daten sofort auf.",
          pt: "Evite opiniões subjetivas e anote dados concretos logo após a observação.",
          id: "Hindari bias subjektif dan tulis data konkret segera setelah pengamatan."
        }
      },
      {
        name: {
          ko: "유기적 패턴 연결 도해",
          en: "Organic Pattern Connection Diagramming",
          ja: "有機的パターンの連結図解",
          zh: "画图连接有机模式",
          es: "Diagramación de patrones orgánicos",
          fr: "Schématisation des liaisons organiques",
          de: "Diagrammatisches Verbinden von Mustern",
          pt: "Diagramação de conexões orgânicas",
          id: "Diagram Hubungan Pola Organik"
        },
        text: {
          ko: "기록한 키워드들 사이에 화살표나 기호를 그려 넣으며 데이터 간의 연관 관계를 시각화합니다.",
          en: "Draw arrows or symbols between recorded fragments to visualize relationships among data.",
          ja: "記録した単語の間に矢印や記号を書き加え、関連性を視覚化します。",
          zh: "在记录的关键词之间画上箭头或符号，可视化关联关系。",
          es: "Trace flechas o símbolos entre los datos anotados para visualizar sus conexiones.",
          fr: "Tracez des flèches ou des symboles entre les mots-clés pour visualiser les liens.",
          de: "Zeichnen Sie Pfeile oder Symbole zwischen Notizen, um Beziehungen zu visualisieren.",
          pt: "Desenhe setas ou símbolos entre os dados anotados para visualizar as conexões.",
          id: "Gambar panah atau simbol di antara catatan untuk memvisualisasikan hubungan."
        }
      }
    ],
    cautionTitle: {
      ko: "사후 기록 연기에 따른 정보 왜곡 주의",
      en: "Caution Against Memory Distortion From Delayed Recording",
      ja: "記録の先延ばしによる記憶の歪みに注意",
      zh: "切忌因拖延记录而导致信息失真",
      es: "Precaución con la distorsión al posponer notas",
      fr: "Attention à l'altération des souvenirs en différant",
      de: "Vorsicht vor Gedächtnislücken durch Aufschieben",
      pt: "Cuidado com a distorção ao adiar anotações",
      id: "Waspada Distorsi Informasi Akibat Menunda Catatan"
    },
    cautionDesc: {
      ko: "'나중에 적어야지' 하고 관찰 기록을 미루면 뇌는 세부 정보를 사후 합리화로 대체합니다. 관찰과 기록의 시간 간격을 5분 이내로 줄이세요.",
      en: "If you delay recording, thinking 'I'll summarize later,' the brain replaces details with post-hoc rationalizations. Keep the gap under 5 minutes.",
      ja: "「後で書こう」と延期すると、脳は詳細な情報を後付けの錯覚に置き換えます。差を5分以内に抑えましょう。",
      zh: "若拖延记录想着“过后再总结”，大脑会用事后合理化替代细节。请将时间差缩短在5分钟内。",
      es: "Posponer la nota hace que el cerebro reemplace los detalles reales. Mantenga el margen en menos de 5 minutos.",
      fr: "Différer la note altère les détails. Gardez un écart de moins de 5 minutes.",
      de: "Wer das Aufschreiben verschiebt, verfälscht Details. Halten Sie den Abstand unter 5 Minuten.",
      pt: "Adiar anotações faz o cérebro alterar detalhes. Mantenha o intervalo em menos de 5 minutos.",
      id: "Menunda catatan membuat otak mengganti detail asli. Jaga jeda di bawah 5 menit."
    },
    faqs: [
      {
        question: {
          ko: "현장에서 빠르게 적어도 효과가 있나요?",
          en: "Does it work even if I write quickly on the spot?",
          ja: "素早く書いても効果はありますか？",
          zh: "快速记录也有效果吗？",
          es: "¿Tiene efecto si escribo rápido?",
          fr: "Est-ce efficace si j'écris vite ?",
          de: "Ist es wirksam, wenn ich schnell schreibe?",
          pt: "Funciona se eu escrever rápido?",
          id: "Apakah tetap efektif meskipun ditulis cepat?"
        },
        answer: {
          ko: "네, 중요한 것은 감각 입력과 텍스트의 즉각적 연결입니다. 정리 작업은 나중에 진행하면 됩니다.",
          en: "Yes. What matters is the instant connection between sensory input and text, not handwriting. Neatening can be done later.",
          ja: "はい。「感覚入力とテキストの即時接続」が重要です。整頓は後で行えば十分です。",
          zh: "是的。重要的在于感官输入与文字的即时结合。整理可在之后进行。",
          es: "Sí. Lo vital es la conexión instantánea entre la entrada sensorial y el texto. El orden se da después.",
          fr: "Oui. L'important est la connexion immédiate entre sensation et texte. La mise au propre se fait plus tard.",
          de: "Ja. Wichtig ist die sofortige Verbindung von Eindruck und Text. Das Ordnen erfolgt später.",
          pt: "Sim. O importante é a conexão instantânea entre o estímulo e o texto. O alinhamento vem depois.",
          id: "Ya. Yang penting adalah hubungan seketika antara persepsi sensorik dan teks."
        }
      },
      {
        question: {
          ko: "디지털 기기의 녹음 기능을 써도 되나요?",
          en: "Can I use voice recording on digital devices instead?",
          ja: "音声録音機能を使ってもいいですか？",
          zh: "可以使用语音录音功能吗？",
          es: "¿Puedo usar la grabación de voz?",
          fr: "Puis-je utiliser l'enregistreur vocal ?",
          de: "Kann ich die Diktierfunktion nutzen?",
          pt: "Posso usar a gravação de voz?",
          id: "Bolehkah menggunakan perekam suara?"
        },
        answer: {
          ko: "녹음도 좋지만, 간단한 손 스케치를 병행할 때 뇌 자극 효과가 더욱 향상됩니다.",
          en: "Voice recording is great, but combining it with quick visual sketches retains brain activation benefits.",
          ja: "音声録音も良いですが、簡単な図解やスケッチの併用をお勧めします。",
          zh: "语音录音也很好，但结合简短的手绘图解能进一步激活脑部。",
          es: "La voz es útil, pero combinarla con bocetos rápidos activa mejor el cerebro.",
          fr: "L'enregistreur est utile, mais le combiner avec des croquis stimule mieux le cerveau.",
          de: "Sprachnotizen sind gut, aber kleine Skizzen aktivieren das Gehirn noch besser.",
          pt: "Gravador de voz é ótimo, mas combinar com pequenos esboços ativa melhor o cérebro.",
          id: "Perekam suara bagus, namun mengombinasikannya dengan sketsa singkat lebih baik."
        }
      }
    ]
  },

  // 3. tim-cook-early-morning-routine
  {
    slug: "tim-cook-early-morning-routine",
    title: {
      ko: "매일 새벽 3시 45분에 일어나는 CEO? 팀 쿠크의 아침 주도권 루틴",
      en: "The CEO Who Wakes Up at 3:45 AM Every Day? Tim Cook's Morning Control Routine",
      ja: "毎日午前3時45分に起きるCEO？ティム・クックの朝の主導権ルーティン",
      zh: "每天凌晨3:45起床的CEO？蒂姆·库克的清晨主导权惯例",
      es: "¿El CEO que se despierta a las 3:45 AM todos los días? La rutina de control matutino de Tim Cook",
      fr: "Le PDG qui se lève à 3h45 tous les jours ? La routine de prise de contrôle matinale de Tim Cook",
      de: "Der CEO, der jeden Tag um 3:45 Uhr aufsteht? Tim Cooks Morgensteuerungs-Routine",
      pt: "O CEO que acorda às 3:45 da manhã todos os dias? A rotina de controle matinal de Tim Cook",
      id: "CEO yang Bangun Jam 3:45 Pagi Setiap Hari? Rutinitas Kontrol Pagi Tim Cook"
    },
    description: {
      ko: "애플 CEO 팀 쿠크. 남들보다 빠른 새벽 시간 기상과 운동으로 하루의 주도권을 완전 통제하는 그의 아침 리셋 법과 현대인을 위한 3단계 실천법을 소개합니다.",
      en: "Apple CEO Tim Cook. Discover his early morning routine of email review and workout for total day control, plus a 3-step guide for modern professionals.",
      ja: "AppleのCEOティム・クック。超早朝の起床と運動で一日の主導権を完全コントロールする彼の朝のリセット法と3ステップ実践法を紹介します。",
      zh: "苹果CEO蒂姆·库克。介绍他通过清晨超早起床与锻炼完全掌控一天主导权的大脑重置法及三步实践指南。",
      es: "Tim Cook, CEO de Apple. Descubra su rutina matutina a las 3:45 AM para el control total del día y una guía práctica de 3 pasos.",
      fr: "Tim Cook, PDG d'Apple. Découvrez sa routine matinale à 3h45 pour contrôler sa journée et un guide en 3 étapes.",
      de: "Apple-CEO Tim Cook. Entdecken Sie seine Morgenroutine um 3:45 Uhr für die vollständige Tageskontrolle und einen 3-Schritte-Leitfaden.",
      pt: "Tim Cook, CEO da Apple. Descubra sua rotina matinal às 3:45 da manhã para o controle total do dia e um guia prático de 3 passos.",
      id: "CEO Apple Tim Cook. Temukan rutinitas pagi jam 3:45 nya untuk mengontrol hari secara penuh dan panduan praktis 3 langkah."
    },
    authority: {
      ko: "Leander Kahney 전기 'Tim Cook' 및 Time Magazine 커버스토리 인터뷰",
      en: "Leander Kahney's Biography 'Tim Cook' & Time Magazine Cover Story Interview",
      ja: "リアンダー・カーニー評伝「Tim Cook」およびTime Magazineインタビュー",
      zh: "利安德·卡尼传记《Tim Cook》与《时代周刊》封面故事采访",
      es: "Biografía de Leander Kahney 'Tim Cook' y entrevista en la revista Time",
      fr: "Biographie de Leander Kahney 'Tim Cook' & interview dans Time Magazine",
      de: "Leander Kahneys Biografie 'Tim Cook' & Time Magazine Interview",
      pt: "Biografia de Leander Kahney 'Tim Cook' & entrevista na revista Time",
      id: "Biografi Leander Kahney 'Tim Cook' & Wawancara Sampul Majalah Time"
    },
    intro: {
      ko: "세계 IT 산업을 주도하는 애플(Apple)을 이끌며 사상 최고의 가치를 창출한 CEO, 팀 쿠크. 그가 복잡한 거대 기업의 의사결정을 흔들림 없이 처리할 수 있는 비결은 과연 무엇일까요? ⌚\n\n팀 쿠크는 매일 새벽 3시 45분에 일어납니다. 외부의 소음이나 업무 전화가 전혀 없는 이 시간에 그는 고객 이메일을 점검하고 하루의 핵심 과제를 정리한 뒤, 5시에 운동을 시작합니다. 방해 없는 새벽 시간 확보를 통해 그는 하루의 통제권을 타인이 아닌 스스로가 완전히 쥐게 됩니다.\n\n오늘 BuildSelf에서는 팀 쿠크의 '새벽 주도권 확보' 루틴과 현대인을 위한 3단계 실천법을 알아봅니다.",
      en: "Apple CEO Tim Cook, who leads the tech giant. What is the secret behind his decision-making? ⌚\n\nTim Cook wakes up at 3:45 AM every day. In this quiet hour without external noise, he reviews emails, outlines core priorities, and exercises at 5 AM. By securing uninterrupted early hours, he takes total control of his day.\n\nToday, BuildSelf explores Tim Cook's 'morning control' routine.",
      ja: "Appleを 이끄는 CEOティム・クック。彼の意思決定の秘密は何でしょうか？ ⌚\n\nティム・クックは毎日午前3時45分に起きます。静かな時間帯にメールを確認し、最優先事項を整理して5時に運動を始めます。これにより、一日の主導権を自分で完全に握ります。\n\n今日のBuildSelfでは、ティム・クックの「朝の主導権確保」ルーティンを紹介します。",
      zh: "领导苹果公司的CEO蒂姆·库克。他高效决策的秘密是什么？ ⌚\n\n蒂姆·库克每天凌晨3:45起床。在这段没有干扰的时间里，他审查邮件、梳理核心事项，并在5点开始锻炼。通过掌握这段时间，他完全掌控了一天的节奏。\n\n今天，BuildSelf 将带您了解蒂姆·库克“清晨主导权”惯例。",
      es: "Tim Cook, CEO de Apple. ¿Cuál es el secreto de sus decisiones? ⌚\n\nTim Cook se despierta a las 3:45 AM todos los días. En esa hora tranquila revisa correos, define prioridades y entrena a las 5 AM. Así toma el control total de su día.\n\nHoy, BuildSelf explora la rutina de 'control matutino' de Tim Cook.",
      fr: "Tim Cook, PDG d'Apple. Quel est le secret de ses décisions ? ⌚\n\nTim Cook se lève à 3h45 chaque jour. Pendant cette heure calme, il consulte ses e-mails, fixe ses priorités et fait du sport à 5h. Il prend ainsi le contrôle de sa journée.\n\nAujourd'hui, BuildSelf explore la routine de 'prise de contrôle matinale' de Tim Cook.",
      de: "Apple-CEO Tim Cook. Was ist das Geheimnis seiner Entscheidungen? ⌚\n\nTim Cook steht jeden Tag um 3:45 Uhr auf. In dieser ruhigen Stunde liest er E-Mails, ordnet Prioritäten und trainiert um 5 Uhr. So übernimmt er die Kontrolle über seinen Tag.\n\nHeute untersucht BuildSelf Tim Cooks 'Morgensteuerungs'-Routine.",
      pt: "Tim Cook, CEO da Apple. Qual é o segredo de suas decisões? ⌚\n\nTim Cook acorda às 3:45 da manhã todos os dias. Naquela hora tranquila, ele revisa e-mails, define prioridades e se exercita às 5 da manhã. Assim ele assume o controle do dia.\n\nHoje, o BuildSelf explora a rotina de 'controle matinal' de Tim Cook.",
      id: "CEO Apple Tim Cook. Apa rahasia di balik keputusan-keputusannya? ⌚\n\nTim Cook bangun jam 3:45 pagi setiap hari. Di jam yang tenang ini, ia memeriksa email, menyusun prioritas, dan berolahraga jam 5 pagi. Ia mengambil alih kontrol atas harinya.\n\nHari ini, BuildSelf menjelajahi rutinitas 'kontrol pagi' Tim Cook."
    },
    whyTitle: {
      ko: "전두엽이 깨어나는 방해 없는 프라임 타임 활용",
      en: "Utilizing Uninterrupted Prime Time When the Prefrontal Cortex Awakens",
      ja: "前頭葉が覚醒する無邪魔なプライムタイムの活用",
      zh: "利用前额叶觉醒的无干扰黄金时间",
      es: "Uso del tiempo de máxima audiencia sin interrupciones cuando despierta la corteza prefrontal",
      fr: "Utilisation du temps prime sans interruption lorsque le cortex préfrontal s'éveille",
      de: "Nutzung ungestörter Prime Time bei der Aktivierung des präfrontalen Kortex",
      pt: "Uso do tempo nobre sem interrupções quando o córtex pré-frontal desperta",
      id: "Memanfaatkan Prime Time Tanpa Gangguan Saat Korteks Prefrontal Bangun"
    },
    whyDesc: {
      ko: "새벽 시간에는 타인의 연락이나 업무 알림이 차단되어 뇌의 <strong>전두엽(Prefrontal Cortex)</strong>이 외부 방해 없이 최고 수준의 집중력을 발휘합니다.\n\n가장 중요한 우선순위를 아침 일찍 처리하고 신체 운동을 병행하면 자기 효능감과 도파민이 분비되어 하루 전체를 주도적인 기분으로 끌고 갈 수 있습니다.",
      en: "During early morning hours, notifications are absent, allowing the <strong>Prefrontal Cortex</strong> to achieve peak focus.\n\nCompleting core priorities and exercising early boosts self-efficacy and dopamine, driving a proactive mindset for the entire day.",
      ja: "早朝は外部からの連絡が遮断され、<strong>前頭葉</strong>が最高の集中力を発揮します。\n\n最優先事項を処理して運動を行うことで、自己効力感とドパミンが分泌され、一日を主導的に過ごせます。",
      zh: "凌晨时段没有外部干扰，大脑<strong>前额叶皮层</strong>能发挥最高水平的专注力。\n\n早早完成核心任务并结合运动，能提升自我效能感与多巴胺，让整天保持主动态度。",
      es: "En las madrugadas sin notificaciones, la <strong>corteza prefrontal</strong> logra su máxima concentración.\n\nCompletar tareas clave y hacer ejercicio temprano eleva la dopamina y la autoeficacia para todo el día.",
      fr: "Tôt le matin sans notifications, le <strong>cortex préfrontal</strong> atteint une concentration maximale.\n\nTraiter les priorités et faire du sport tôt stimule la dopamine et l'auto-efficacité pour la journée.",
      de: "Frühmorgens ohne Störungen erreicht der <strong>präfrontale Kortex</strong> die höchste Konzentration.\n\nDas frühe Erledigen von Prioritäten und Sport steigert Dopamin und Selbstwirksamkeit.",
      pt: "De manhã cedo sem notificações, o <strong>córtex pré-frontal</strong> atinge foco máximo.\n\nConcluir prioridades e exercitar-se cedo aumenta a dopamina e a autoeficácia para o dia todo.",
      id: "Di pagi hari tanpa gangguan, <strong>korteks prefrontal</strong> mencapai fokus puncak.\n\nMenyelesaikan prioritas dan berolahraga lebih awal meningkatkan dopamin dan efikasi diri sepanjang hari."
    },
    steps: [
      {
        name: {
          ko: "30분 조기 기상 설정",
          en: "30-Minute Early Wake-up",
          ja: "30分前の早期起床",
          zh: "设定提前30分钟起床",
          es: "Despertar 30 minutos antes",
          fr: "Réveil avancé de 30 minutes",
          de: "30 Minuten früher aufstehen",
          pt: "Acordar 30 minutos mais cedo",
          id: "Bangun 30 Menit Lebih Awal"
        },
        text: {
          ko: "무리한 기상보다 평소보다 30분~1시간 일찍 일어나는 것부터 시작해 나만의 시간을 확보합니다.",
          en: "Start by waking up 30-60 minutes earlier than usual to secure your own personal time.",
          ja: "普段より30分〜1時間早く起きることから始め、自分だけの時間を確保します。",
          zh: "从比平时早起30分钟到1小时开始，确保属于自己的个人时间。",
          es: "Comience despertándose de 30 a 60 minutos antes de lo habitual para asegurar tiempo personal.",
          fr: "Commencez par vous lever 30 à 60 minutes plus tôt que d'habitude pour sécuriser du temps pour vous.",
          de: "Beginnen Sie damit, 30–60 Minuten früher als sonst aufzustehen, um eigene Zeit zu gewinnen.",
          pt: "Comece acordando 30 a 60 minutos mais cedo do que o habitual para garantir tempo pessoal.",
          id: "Mulailah dengan bangun 30-60 menit lebih awal untuk mengamankan waktu pribadi."
        }
      },
      {
        name: {
          ko: "핵심 과제 사전 점검",
          en: "Core Task Pre-Check",
          ja: "最優先課題の事前確認",
          zh: "核心任务预先检查",
          es: "Revisión previa de tareas clave",
          fr: "Vérification préalable des tâches clés",
          de: "Vorab-Prüfung von Kernaufgaben",
          pt: "Pré-checagem de tarefas principais",
          id: "Pemeriksaan Awal Tugas Utama"
        },
        text: {
          ko: "외부 방해가 없는 아침 첫 30분 동안 오늘 가장 중요한 목표와 일정을 점검합니다.",
          en: "Review today's most important goals and schedule during the quiet first 30 minutes.",
          ja: "邪魔のない最初の30分間に、今日最も重要な目標とスケジュールを確認します。",
          zh: "在不受干扰的前30分钟内，检查今天最重要的目标与日程安排。",
          es: "Revise sus objetivos y agenda más importantes durante los primeros 30 minutos sin interrupciones.",
          fr: "Examinez vos objectifs les plus importants pendant les 30 premières minutes sans distraction.",
          de: "Überprüfen Sie in den ersten ungestörten 30 Minuten die wichtigsten Tagesziele.",
          pt: "Revise seus objetivos mais importantes durante os primeiros 30 minutos sem distrações.",
          id: "Tinjau tujuan dan jadwal terpenting hari ini dalam 30 menit pertama yang tenang."
        }
      },
      {
        name: {
          ko: "신체 활성화 운동",
          en: "Physical Activation Workout",
          ja: "身体活性化の運動",
          zh: "身体激活运动",
          es: "Ejercicio de activación física",
          fr: "Exercice d'activation physique",
          de: "Körperliches Aktivierungs-Workout",
          pt: "Exercício de ativação física",
          id: "Olahraga Aktivasi Fisik"
        },
        text: {
          ko: "가벼운 스쿼트, 헬스, 혹은 20분 산책으로 뇌혈류량을 늘려 활력 있게 하루를 엽니다.",
          en: "Increase brain blood flow and vitality through light squats, gym, or a 20-minute walk.",
          ja: "軽いスクワットや20分の散歩で脳の血流を増やし、活き活きと一日をスタートします。",
          zh: "通过轻度深蹲、健身或20分钟散步增加脑部血流量，活力满满地开启一天。",
          es: "Aumente el flujo sanguíneo cerebral con sentadillas ligeras, gimnasio o caminata de 20 minutos.",
          fr: "Augmentez le flux sanguin cérébral par du sport ou une marche de 20 minutes.",
          de: "Steigern Sie die Gehirndurchblutung durch kurze Übungen oder einen 20-minütigen Spaziergang.",
          pt: "Aumente o fluxo sanguíneo cerebral com agachamentos leves, academia ou caminhada de 20 minutos.",
          id: "Tingkatkan aliran darah otak dengan squat ringan, gym, atau jalan kaki 20 menit."
        }
      }
    ],
    cautionTitle: {
      ko: "수면 시간 감소에 따른 피로 누적 주의",
      en: "Caution Against Fatigue Cumulative From Sleep Reduction",
      ja: "취면 시간의 감소による疲労蓄積に注意",
      zh: "切忌因牺牲睡眠时间导致疲劳堆积",
      es: "Precaución con el cansancio acumulado por reducir horas de sueño",
      fr: "Attention à la fatigue cumulée par réduction du sommeil",
      de: "Vorsicht vor Kumulierung von Müdigkeit durch Schlafmangel",
      pt: "Cuidado com o cansaço acumulado ao reduzir o sono",
      id: "Waspada Penumpukan Kelelahan Akibat Kurang Tidur"
    },
    cautionDesc: {
      ko: "무작정 취면 시간을 줄이고 일찍 일어나면 뇌에 피로물질이 쌓여 낮 집중력이 떨어집니다. 새벽 일찍 일어나려면 취침 시간도 그만큼 일찍 당겨 7시간 이상의 총 수면 시간을 유지해야 합니다.",
      en: "Simply reducing sleep to wake early accumulates brain fatigue. To rise early, advance your bedtime to maintain at least 7 hours of total sleep.",
      ja: "睡眠時間を 줄여서 早く起きると脳に疲労が溜まります。早起きするには就寝時間も早め、7時間以上の睡眠を確保しましょう。",
      zh: "盲目减少睡眠而早起会导致大脑疲劳堆积。若要早起，需相应提前入睡，以维持7小时以上的总睡眠。",
      es: "Reducir el sueño para madrugar acumula fatiga. Para madrugar, adelante su hora de dormir y mantenga 7 horas de sueño.",
      fr: "Réduire son sommeil pour se lever tôt accumule la fatigue. Avancez votre coucher pour garder 7 heures de sommeil.",
      de: "Einfach weniger schlafen um früh aufzustehen erzeugt Müdigkeit. Gehen Sie früher ins Bett für 7 Stunden Schlaf.",
      pt: "Reduzir o sono para acordar cedo acumula cansaço. Adiantar a hora de dormir garante as 7 horas de sono necessárias.",
      id: "Mengurangi tidur untuk bangun pagi menumpuk kelelahan. Majukan waktu tidur untuk menjaga 7 jam tidur."
    },
    faqs: [
      {
        question: {
          ko: "밤형 인간(저녁형 인간)도 새벽 루틴을 해야 하나요?",
          en: "Should night owls also follow an early morning routine?",
          ja: "夜型人間も早朝ルーティンを行うべきですか？",
          zh: "夜型人（习惯晚睡者）也需要进行清晨惯例吗？",
          es: "¿Las personas nocturnas también deben seguir esta rutina?",
          fr: "Les couche-tard doivent-ils aussi suivre cette routine ?",
          de: "Sollten auch Eulen (Nachtmenschen) diese Routine nutzen?",
          pt: "Pessoas noturnas também devem seguir essa rotina?",
          id: "Apakah tipe orang malam juga harus mengikuti rutinitas pagi?"
        },
        answer: {
          ko: "핵심은 '새벽 3시 45분'이라는 시간 자체가 아니라 '남에게 방해받지 않는 온전한 나만의 첫 1시간'을 확보하는 것입니다. 저녁 시간대에 방해 없는 집중 시간을 확보하셔도 좋습니다.",
          en: "The key is securing '1 uninterrupted hour of your own,' not necessarily 3:45 AM. Securing distraction-free time in the evening works just as well.",
          ja: "重要なのは「3時45分」ではなく「誰にも邪魔されない自分だけの最初の1時間」の確保です。夜に集中時間を確保しても構いません。",
          zh: "核心在于“掌控不受干扰的个人1小时”，而非必须3:45。在晚间安排不受打扰的专注时间同样有效。",
          es: "La clave es asegurar '1 hora ininterrumpida propia', no la hora exactas. Tener un espacio tranquilo por la noche funciona igual.",
          fr: "L'important est d'avoir '1 heure à soi sans distraction', pas l'heure exacte. Un moment calme le soir marche aussi.",
          de: "Schlüssel ist '1 ungestörte eigene Stunde', nicht die genaue Uhrzeit. Ungestörte Zeit am Abend funktioniert ebenso.",
          pt: "O segredo é garantir '1 hora ininterrupta para você', não o horário exato. Um momento calmo à noite funciona igual.",
          id: "Kuncinya adalah mengamankan '1 jam tanpa gangguan untuk diri sendiri', bukan jamnya. Jam tenang di malam hari juga efektif."
        }
      },
      {
        question: {
          ko: "주말에도 똑같은 기상 시각을 유지해야 하나요?",
          en: "Should I maintain the same wake-up time on weekends?",
          ja: "週末も同じ時間に起きるべきですか？",
          zh: "周末也需要保持相同的起床时间吗？",
          es: "¿Debo mantener la misma hora al despertar los fines de semana?",
          fr: "Faut-il garder le même horaire le week-end ?",
          de: "Sollte man am Wochenende zur selben Zeit aufstehen?",
          pt: "Devo manter o mesmo horário no fim de semana?",
          id: "Apakah harus mempertahankan jam bangun yang sama di akhir pekan?"
        },
        answer: {
          ko: "생체 시계(Circadian Rhythm)의 오차를 최소화하려면 주말에도 기상 시각 차이를 1시간 이내로 유지하는 것이 월요일 피로를 막는 길입니다.",
          en: "To minimize circadian rhythm disruption, keep weekend wake-up times within 1 hour of your weekday schedule.",
          ja: "体内時計の乱れを防ぐため、週末も平日との差を1時間以内に抑えることが月曜の疲労を防ぎます。",
          zh: "为减少生物钟紊乱，建议周末与工作日的起床时间差异保持在1小时以内。",
          es: "Para no alterar el ritmo circadiano, mantenga la hora del fin de semana a no más de 1 hora de diferencia.",
          fr: "Pour préserver le rythme circadien, gardez l'horaire du week-end à 1 heure près.",
          de: "Um den Rhythmus nicht zu stören, sollte die Abweichung am Wochenende unter 1 Stunde liegen.",
          pt: "Para não desregular o ritmo circadiano, mantenha a variação no fim de semana em até 1 hora.",
          id: "Untuk menjaga ritme sirkadian, jaga perbedaan jam bangun akhir pekan dalam kisaran 1 jam."
        }
      }
    ]
  }
];

function generateFiles() {
  habitEntries.forEach(item => {
    // 1. JSON 생성
    const jsonPath = path.join(habitsDataDir, `${item.slug}.json`);
    const jsonObj = { [item.slug]: item };
    fs.writeFileSync(jsonPath, JSON.stringify(jsonObj, null, 2), 'utf-8');
    console.log(`[생성] 번역 JSON: ${item.slug}.json`);

    // 2. KO 마크다운 생성
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

<div class="my-6 p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-center gap-4">
  <span class="text-2xl">📜</span>
  <div>
    <h4 class="text-sm font-bold text-indigo-600 dark:text-indigo-400 m-0">역사적 근거 및 문헌 자료</h4>
    <p class="text-slate-600 dark:text-slate-300 text-xs m-0 mt-1">${item.authority.ko}</p>
  </div>
</div>

---

## 1. ${item.whyTitle.ko}

${item.whyDesc.ko}

---

## 2. 세부 실천 가이드

${stepCardsHtml}

---

## 3. ${item.cautionTitle.ko}
<div class="my-6 p-5 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-start gap-4">
  <span class="text-xl">💡</span>
  <div>
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
    console.log(`[생성] KO 마크다운: ${item.slug}.md`);
  });
}

generateFiles();
