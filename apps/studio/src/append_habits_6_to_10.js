import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDataDir = path.join(__dirname, 'data/blogs/habits');
const koBlogDir = path.join(__dirname, 'content/blog/ko');

const today = "2026-07-22";

const habitEntries = [
  // 6. dirac-silent-walking-contemplation
  {
    slug: "dirac-silent-walking-contemplation",
    title: {
      ko: "말을 최소화하고 정적을 걸은 천재? 폴 디랙의 침묵 산책 루틴",
      en: "The Genius Who Minimised Words and Walked in Silence? Paul Dirac's Silent Walk Routine",
      ja: "言葉を最小限にし静寂を歩いた天才？ポール・ディラックの沈黙散歩ルーティン",
      zh: "极少言语、在静谧中散步的天才？保罗·狄拉克的沉默散步惯例",
      es: "¿El genio que minimizaba palabras y caminaba en silencio? La rutina de caminata silenciosa de Paul Dirac",
      fr: "Le génie qui réduisait les mots et marchait en silence ? La routine de marche silencieuse de Paul Dirac",
      de: "Das Genie, das Worte minimierte und in Stille ging? Paul Diracs Schweigespaziergang-Routine",
      pt: "O gênio que minimizava palavras e caminhava em silêncio? A rotina de caminhada silenciosa de Paul Dirac",
      id: "Sang Genius yang Meminimalkan Kata dan Berjalan dalam Keheningan? Rutinitas Jalan Hening Paul Dirac"
    },
    description: {
      ko: "노벨 물리학상 수상자 폴 디랙. 일요일의 침묵 산책으로 노이즈를 제거하고 디랙 방정식을 정제한 그의 사색 리셋 법과 3단계 실천 가이드를 소개합니다.",
      en: "Nobel laureate Paul Dirac. Discover his Sunday silent walking routine for clearing verbal noise and refining mathematical beauty, plus a 3-step guide.",
      ja: "ノーベル物理学賞受賞者ポール・ディラック。日曜の沈黙散歩で言語ノイズを取り除き数式を精製した彼の思考リセット法と3ステップ実践ガイドを紹介します。",
      zh: "诺贝尔物理学奖得主保罗·狄拉克。介绍他通过周日沉默散步消除语言噪音精炼方程的大脑重置法及三步实践指南。",
      es: "El premio Nobel Paul Dirac. Descubra su rutina de caminata silenciosa dominical para eliminar el ruido verbal y una guía práctica de 3 pasos.",
      fr: "Le prix Nobel Paul Dirac. Découvrez sa routine de marche silencieuse dominicale pour éliminer le bruit verbal et un guide en 3 étapes.",
      de: "Nobelpreisträger Paul Dirac. Entdecken Sie seine sonntägliche Schweigespaziergang-Routine zur Beseitigung sprachlichen Lärms und einen 3-Schritte-Leitfaden.",
      pt: "O prêmio Nobel Paul Dirac. Descubra sua rotina de caminhada silenciosa aos domingos para eliminar o ruído verbal e um guia prático de 3 passos.",
      id: "Pemenang Nobel Paul Dirac. Temukan rutinitas jalan hening hari Minggunya untuk menghilangkan kebisingan verbal dan panduan praktis 3 langkah."
    },
    authority: {
      ko: "Graham Farmelo 전기 'The Strangest Man' 및 Helge Kragh 저서 'Dirac'",
      en: "Graham Farmelo's Biography 'The Strangest Man' & Helge Kragh's 'Dirac'",
      ja: "グラハム・ファーメロ評伝「The Strangest Man」およびヘルゲ・クラグ著「Dirac」",
      zh: "格雷厄姆·法梅洛传记《The Strangest Man》与赫尔格·克拉赫著作《Dirac》",
      es: "Biografía de Graham Farmelo 'The Strangest Man' y obra 'Dirac' de Helge Kragh",
      fr: "Biographie de Graham Farmelo 'The Strangest Man' & ouvrage 'Dirac' de Helge Kragh",
      de: "Graham Farmelos Biografie 'The Strangest Man' & Helge Kraghs 'Dirac'",
      pt: "Biografia de Graham Farmelo 'The Strangest Man' & obra 'Dirac' de Helge Kragh",
      id: "Biografi Graham Farmelo 'The Strangest Man' & Karya Helge Kragh 'Dirac'"
    },
    intro: {
      ko: "양자역학의 수학적 기초를 다지고 반물질의 존재를 예측하여 노벨 물리학상을 수상한 영국의 천재 물리학자, 폴 디랙. 평소 언어를 극도로 아끼는 인물로 유명했던 그의 아름다운 수식은 어디서 탄생했을까요? 🌌\n\n디랙은 매주 일요일마다 말을 한마디도 하지 않은 채 홀로 케임브리지 주변의 숲길을 수 시간 동안 걸었습니다. 말과 텍스트가 가져오는 노이즈를 멈춘 채 걷는 동안, 머릿속 3차원 기하학 회로가 순수한 수식의 대칭성을 완성해 냈습니다.\n\n오늘 BuildSelf에서는 폴 디랙의 '침묵 속 정적 산책' 루틴과 현대인을 위한 3단계 몰입 가이드를 소개합니다.",
      en: "Nobel laureate Paul Dirac, who predicted antimatter. Where did his elegant equations come from? 🌌\n\nDirac walked silently in Cambridge forests every Sunday without uttering a word. Stopping verbal noise allowed his mind to hone mathematical symmetry.\n\nToday, BuildSelf introduces Paul Dirac's 'silent walk' routine.",
      ja: "反物質を予測したノーベル賞物理学者ポール・ディラック。彼の美しい数式はどこから生まれたのでしょうか？ 🌌\n\nディラックは毎週日曜日、一言も発さず森を何時間も歩きました。言語ノイズを止めることで数式の対称性を研ぎ澄ませました。\n\n今日のBuildSelfでは、ディラックの「沈黙散歩」ルーティンを紹介します。",
      zh: "预测反物质的诺奖物理学家保罗·狄拉克。他那优美的方程式源自何处？ 🌌\n\n狄拉克每周日都会一言不发地在森林里散步数小时。消除言语噪音让他的大脑得以磨炼方程式的对称美。\n\n今天，BuildSelf 将带您了解狄拉克“沉默散步”惯例。",
      es: "Paul Dirac, premio Nobel que predijo la antimateria. ¿De dónde surgieron sus ecuaciones? 🌌\n\nDirac caminaba en silencio por el bosque los domingos sin pronunciar palabra. Detener el ruido verbal pulió sus matemáticas.\n\nHoy, BuildSelf presenta la rutina de 'caminata silenciosa' de Paul Dirac.",
      fr: "Paul Dirac, prix Nobel ayant prédit l'antimatière. D'où venaient ses équations ? 🌌\n\nDirac marchait en silence en forêt le dimanche sans dire un mot. Arrêter le bruit verbal affinait ses mathématiques.\n\nAujourd'hui, BuildSelf présente la routine de 'marche silencieuse' de Paul Dirac.",
      de: "Nobelpreisträger Paul Dirac. Woher stammten seine eleganten Gleichungen? 🌌\n\nDirac ging sonntags ohne ein Wort durch den Wald. Das Stoppen sprachlichen Lärms schärfte seine Mathematik.\n\nHeute stellt BuildSelf Paul Diracs 'Schweigespaziergang'-Routine vor.",
      pt: "Paul Dirac, prêmio Nobel que previu a antimatéria. De onde vinham suas equações? 🌌\n\nDirac caminhava em silêncio na floresta aos domingos sem dizer uma palavra. Parar o ruído verbal lapidava sua matemática.\n\nHoj, o BuildSelf apresenta a rotina de 'caminhada silenciosa' de Paul Dirac.",
      id: "Pemenang Nobel Paul Dirac. Dari mana datangnya persamaan matematikanya? 🌌\n\nDirac berjalan hening di hutan hari Minggu tanpa mengucap sepatah kata pun. Menghentikan kebisingan verbal mengasah matematikanya.\n\nHari ini, BuildSelf menyajikan rutinitas 'jalan hening' Paul Dirac."
    },
    whyTitle: {
      ko: "언어적 노이즈 제거와 시공간 사색 회로 활성화",
      en: "Elimination of Verbal Noise and Activation of Spatial Contemplation Circuits",
      ja: "言語ノイズの除去と視空間思考回路の活性化",
      zh: "消除语言噪音与激活空间沉思回路",
      es: "Eliminación del ruido verbal y activación de circuitos de contemplación espacial",
      fr: "Élimination du bruit verbal et activation des circuits de contemplation",
      de: "Beseitigung sprachlichen Lärms und Aktivierung räumlichen Denkens",
      pt: "Eliminação do ruído verbal e ativação de circuitos de contemplação espacial",
      id: "Eliminasi Kebisingan Verbal dan Aktivasi Sirkuit Kontemplasi Spasial"
    },
    whyDesc: {
      ko: "언어적 대화와 끊임없는 텍스트 자극은 좌뇌의 언어 영역을 과부하 상태로 만듭니다. 디랙처럼 <strong>침묵을 유지하며 보행 운동</strong>을 수행하면 언어적 노이즈가 제거되고 뇌의 사색적 심상 포착 기능이 극대화됩니다.",
      en: "Continuous talking and texting overload the brain's verbal areas. Executing a <strong>silent walk</strong> clears verbal noise and activates deep contemplative imaging.",
      ja: "言語的刺激は脳を過負荷にします。<strong>沈黙を守り散歩</strong>を行うことで、言語ノイズが消え、深い思考機能が極大化されます。",
      zh: "不断的言语沟通会使大脑语言区超载。像狄拉克一样<strong>保持沉思散步</strong>，能消除言语杂音，最大化深层思维。",
      es: "El habla continua sobrecarga el cerebro. Realizar una <strong>caminata silenciosa</strong> elimina el ruido verbal e impulsa la contemplación profunda.",
      fr: "Le langage continu surcharge le cerveau. Pratiquer une <strong>marche silencieuse</strong> élimine le bruit verbal et active la contemplation.",
      de: "Ständiges Sprechen überlastet das Gehirn. Ein <strong>Schweigespaziergang</strong> beseitigt Sprachlärm und aktiviert vertieftes Denken.",
      pt: "Falar continuamente sobrecarrega o cérebro. Realizar uma <strong>caminhada silenciosa</strong> elimina o ruído verbal e ativa a contemplação profunda.",
      id: "Bicara terus-menerus membebani area verbal otak. Melakukan <strong>jalan hening</strong> menghilangkan kebisingan verbal dan mengaktifkan kontemplasi."
    },
    steps: [
      {
        name: {
          ko: "모든 디바이스 무음 전환",
          en: "Mute All Digital Devices",
          ja: "全デバイスの消音切り替え",
          zh: "所有设备静音与隔离",
          es: "Silenciar todos los dispositivos",
          fr: "Mettre tous les appareils en sourdine",
          de: "Stummschalten aller Geräte",
          pt: "Silenciar todos os dispositivos",
          id: "Bungkam Semua Perangkat Digital"
        },
        text: {
          ko: "산책을 시작하기 전 스마트폰을 무음으로 바꾸거나 가방 깊숙이 넣어 외부 연락을 차단합니다.",
          en: "Mute your phone or put it deep in your bag before walking to block external notifications.",
          ja: "散歩を始める前にスマホをマナーモードにするかバッグ奥深くにしまい、連絡を遮断します。",
          zh: "在开始散步前，将手机设为静音或放进包包深处，切断外部联系。",
          es: "Silencie su teléfono o guárdelo en su bolso antes de caminar para evitar interrupciones.",
          fr: "Mettez votre téléphone en sourdine ou rangez-le profondément dans votre sac avant de marcher.",
          de: "Schalten Sie Ihr Handy stumm oder stecken Sie es tief in die Tasche, um Störungen zu vermeiden.",
          pt: "Silencie seu celular ou guarde-o bem no fundo da bolsa antes de caminhar.",
          id: "Bungkam ponsel Anda atau simpan di dalam tas sebelum berjalan untuk memblokir gangguan."
        }
      },
      {
        name: {
          ko: "30분 침묵 보행",
          en: "30-Minute Silent Walk",
          ja: "30分間の沈黙歩行",
          zh: "30分钟完全沉默散步",
          es: "Caminata silenciosa de 30 minutos",
          fr: "Marche silencieuse de 30 minutes",
          de: "30-minütiger Schweigespaziergang",
          pt: "Caminhada silenciosa de 30 minutos",
          id: "Jalan Hening 30 Menit"
        },
        text: {
          ko: "혼잣말이나 팟캐스트 음악 감상을 멈추고 30분간 조용한 자연이나 길을 발걸음에 맞춰 걷습니다.",
          en: "Stop self-talk or listening to audio, and walk quietly in nature for 30 minutes.",
          ja: "独り言や音楽鑑賞を止め、30分間静かな自然や道を足音に合わせて歩きます。",
          zh: "停止自言自语或听音乐，在30分钟内伴随脚步声静静地在自然或小径中散步。",
          es: "Detenga la música o monólogos y camine en silencio por la naturaleza durante 30 minutos.",
          fr: "Arrêtez la musique ou les podcasts et marchez tranquillement en nature pendant 30 minutes.",
          de: "Verzichten Sie auf Musik und gehen Sie 30 Minuten lang ruhig durch die Natur.",
          pt: "Pare de ouvir música ou podcasts e caminhe tranquilamente na natureza por 30 minutos.",
          id: "Hentikan mendengarkan musik dan berjalanlah dengan tenang di alam selama 30 menit."
        }
      },
      {
        name: {
          ko: "단순화된 본질 수식 정제",
          en: "Refine Simplified Core Concept",
          ja: "単純化された本質概念の精製",
          zh: "精炼被简化的核心本质",
          es: "Purificación del concepto central simplificado",
          fr: "Purification du concept essentiel simplifié",
          de: "Schärfung des vereinfachten Kernkonzepts",
          pt: "Purificação do conceito essencial simplificado",
          id: "Penyempurnaan Konsep Inti Sederhana"
        },
        text: {
          ko: "걷는 동안 고민 중인 과제의 복잡함을 버리고 가장 단순한 1가지 핵심 뼈대만을 사색합니다.",
          en: "Discard complexity while walking and contemplate only the 1 simplest core skeleton of your problem.",
          ja: "歩きながら複雑さを捨て、最もシンプルな1つの核心骨組みだけを思考します。",
          zh: "散步时抛开杂乱，只沉思难题中最简单的一个核心骨架。",
          es: "Deseche la complejidad mientras camina y contemple solo la estructura más simple de su problema.",
          fr: "Laissez de côté la complexité et méditez uniquement sur la structure essentielle de votre problème.",
          de: "Lassen Sie Komplexität los und bedenken Sie nur das einfachste Grundgerüst Ihres Problems.",
          pt: "Descarte a complexidade e contemple apenas a estrutura mais simples do seu problema.",
          id: "Buang kompleksitas dan renungkan hanya 1 kerangka inti paling sederhana dari masalah Anda."
        }
      }
    ],
    cautionTitle: {
      ko: "산책 중 음향 미디어 청취 주의",
      en: "Caution Against Listening to Audio Media While Walking",
      ja: "散歩中の音声メディア聴取に注意",
      zh: "切忌在散步时听音频媒体",
      es: "Precaución con escuchar audio mientras camina",
      fr: "Attention à l'écoute de médias audio en me marchant",
      de: "Vorsicht vor Medienkonsum beim Gehen",
      pt: "Cuidado com o uso de áudio durante a caminhada",
      id: "Waspada Mendengarkan Media Audio Saat Berjalan"
    },
    cautionDesc: {
      ko: "산책을 하면서 팟캐스트, 오디오북, 뉴스 등의 언어 미디어를 들으면 뇌가 침묵의 사색 상태로 진입하지 못합니다. 침묵 산책 시간만큼은 귀와 입을 완전히 쉬게 하세요.",
      en: "Listening to podcasts or audiobooks while walking prevents the brain from entering contemplative silence. Give your ears and tongue total rest.",
      ja: "散歩中にポッドキャストなどを聴くと、脳が沈黙の思考状態に入れません。耳と口を完全に休ませましょう。",
      zh: "散步时听播客或音频书会导致大脑无法进入沉思状态。请在散步时间内让耳朵与嘴巴彻底休息。",
      es: "Escuchar podcasts mientras camina impide el silencio contemplativo del cerebro. Deje descansar oídos y voz.",
      fr: "Écouter des podcasts en marchant empêche le cerveau d'entrer en silence contemplatif. Reposez vos oreilles.",
      de: "Podcasts beim Gehen verhindern gedankliche Stille. Gönnen Sie Ohren und Mund völlige Ruhe.",
      pt: "Ouvir podcasts ao caminhar impede o silêncio contemplativo do cérebro. Dê descanso aos ouvidos.",
      id: "Mendengarkan podcast saat berjalan mencegah otak masuk ke keheningan kontemplatif. Istirahatkan telinga Anda."
    },
    faqs: [
      {
        question: {
          ko: "도시 한복판에서 산책해도 침묵 효과가 나나요?",
          en: "Does a silent walk work in the middle of a noisy city?",
          ja: "大都会の中心で散歩しても沈黙効果はありますか？",
          zh: "在喧闹的都市中心散步也能有沉思效果吗？",
          es: "¿Funciona una caminata silenciosa en medio de la ciudad?",
          fr: "La marche silencieuse marche-t-elle en pleine ville ?",
          de: "Funktioniert ein Schweigespaziergang in der Stadt?",
          pt: "A caminhada silenciosa funciona no centro da cidade?",
          id: "Apakah jalan hening berfungsi di tengah kota yang bising?"
        },
        answer: {
          ko: "가능합니다. 시끄러운 도심이라도 노이즈 캔슬링 이어폰으로 외부 소음을 줄이고 언어 활동(대화/텍스트)을 차단하면 훌륭한 침묵 산책이 됩니다.",
          en: "Yes! Using noise-cancelling headphones to reduce ambient noise while blocking verbal talk creates an effective silent walk.",
          ja: "可能です。ノイズキャンセリング機能で騒音を減らし、会話を遮断すれば十分な効果が得られます。",
          zh: "当然可以。利用降噪耳机减少喧嚣，同时屏蔽言语活动，同样能达到良好的静音散步效果。",
          es: "¡Sí! Use audífonos con cancelación de ruido para aislar el ambiente y no hable para lograr el efecto.",
          fr: "Oui ! Utilisez des écouteurs à réduction de bruit et évitez d'interagir pour créer cette bulle.",
          de: "Ja! Nutzen Sie Noise-Cancelling-Kopfhörer ohne Musik, um Sprachlärm auszublenden.",
          pt: "Sim! Use fones com cancelamento de ruído e evite conversas para obter o mesmo efeito.",
          id: "Ya! Gunakan headphone noise-cancelling tanpa musik untuk meredam bising dan hindari bicara."
        }
      },
      {
        question: {
          ko: "산책 도중 떠오른 생각을 바로 적어야 하나요?",
          en: "Should I write down thoughts immediately during the walk?",
          ja: "散歩中に浮かんだ考えはすぐに書くべきですか？",
          zh: "散步途中浮现的想法需要立即记下来吗？",
          es: "¿Debo anotar los pensamientos de inmediato durante la caminata?",
          fr: "Faut-il noter immédiatement ses idées pendant la marche ?",
          de: "Sollte man Gedanken während des Gehens sofort aufschreiben?",
          pt: "Devo anotar os pensamentos imediatamente durante a caminhada?",
          id: "Haruskah saya langsung mencatat pemikiran saat berjalan?"
        },
        answer: {
          ko: "산책 흐름을 깨지 않도록 간단한 1~2개 키워드만 메모하고, 보행 보폭과 침묵의 리듬을 30분간 유지한 뒤 끝난 후 정리하는 것이 좋습니다.",
          en: "Note just 1-2 keywords quickly so as not to break your walking flow, then organize fully after finishing 30 minutes.",
          ja: "歩行のリズムを崩さないよう1〜2単語のみメモし、30分間の散歩が終わった後に整理するのをお勧めします。",
          zh: "为不打断散步节奏，可极简记录1-2个关键词，保持30分钟步行与沉思节奏，结束后再整理。",
          es: "Anote solo 1-2 palabras clave rápidas para no romper el ritmo y organice las ideas al terminar los 30 minutos.",
          fr: "Notez seulement 1 ou 2 mots-clés rapides pour ne pas couper votre élan, puis structurez après 30 minutes.",
          de: "Notieren Sie nur 1–2 Stichwörter, um den Fluss nicht zu unterbrechen, und ordnen Sie danach.",
          pt: "Anote apenas 1 ou 2 palavras-chave para não quebrar o ritmo e organize tudo após os 30 minutos.",
          id: "Catat 1-2 kata kunci dengan cepat agar tidak memutus ritme jalan, lalu rapikan setelah 30 menit."
        }
      }
    ]
  },

  // 7. epictetus-dichotomy-control
  {
    slug: "epictetus-dichotomy-control",
    title: {
      ko: "노예에서 스토아 거장이 된 철학자? 에픽테토스의 통제 이분법 성찰 루틴",
      en: "The Philosopher Who Rose from Slave to Master Stoic? Epictetus's Dichotomy of Control Routine",
      ja: "奴隷からストア派の巨匠となった哲学者？エピクテトスの統制二分法省察ルーティン",
      zh: "从奴隶崛起为斯多葛巨匠的哲学家？爱比克泰德的控制二分法反思惯例",
      es: "¿El filósofo que pasó de esclavo a maestro estoico? La rutina de dicotomía del control de Epicteto",
      fr: "Le philosophe passé d'esclave à maître stoïcien ? La routine de dichotomie du contrôle d'Épictète",
      de: "Der Philosoph, der vom Sklaven zum stoischen Meister wurde? Epiktets Dichtomie-der-Kontrolle-Routine",
      pt: "O filósofo que foi de escravo a mestre estoico? A rotina de dicotomia do controle de Epicteto",
      id: "Filsuf yang Bangkit dari Budak Menjadi Master Stoik? Rutinitas Dikotomi Kontrol Epictetus"
    },
    description: {
      ko: "스토아 철학의 거장 에픽테토스. 내가 통제할 수 있는 것과 없는 것을 엄격히 나눔으로써 스트레스를 제거한 그의 마음 리셋 법과 3단계 실천 가이드를 소개합니다.",
      en: "Stoic philosopher Epictetus. Discover his daily Dichotomy of Control routine for stress elimination by separating controllable vs uncontrollable factors, plus a 3-step guide.",
      ja: "ストア派の巨匠エピクテトス。自分でコントロールできることとできないことを明確に分けストレスを消し去った彼の心のリセット法と3ステップ実践ガイドを紹介します。",
      zh: "斯多葛学派巨匠爱比克泰德。介绍他通过严格区分可控与不可控因素消除压力的大脑重置法及三步实践指南。",
      es: "El filósofo estoico Epicteto. Descubra su rutina de Dicotomía del Control para eliminar el estrés clasificando factores controlables e incontrolables, y una guía de 3 pasos.",
      fr: "Le philosophe stoïcien Épictète. Découvrez sa routine de Dichotomie du Contrôle pour éliminer le stress et un guide en 3 étapes.",
      de: "Stoischer Philosoph Epiktet. Entdecken Sie seine Dichtomie-der-Kontrolle-Routine zur Stressbeseitigung und einen 3-Schritte-Leitfaden.",
      pt: "O filósofo estoico Epicteto. Descubra sua rotina de Dicotomia do Controle para eliminar o estresse e um guia prático de 3 passos.",
      id: "Filsuf Stoik Epictetus. Temukan rutinitas Dikotomi Kontrolnya untuk menghilangkan stres dan panduan praktis 3 langkah."
    },
    authority: {
      ko: "에픽테토스 저서 'Enchiridion(수첩)' 및 'Discourses(담론집)'",
      en: "Epictetus's 'Enchiridion' & 'Discourses'",
      ja: "エピクテトス著「Enchiridion（要約）」および「Discourses（語録）」",
      zh: "爱比克泰德著作《Enchiridion（手札）》与《Discourses（语录）》",
      es: "Obras 'Enchiridion' y 'Discursos' de Epicteto",
      fr: "Ouvrages 'Enchiridion' et 'Entretiens' d'Épictète",
      de: "Epiktets 'Enchiridion' & 'Diskurse'",
      pt: "Obras 'Enchiridion' e 'Discursos' de Epicteto",
      id: "Karya Epictetus 'Enchiridion' & 'Discourses'"
    },
    intro: {
      ko: "로마 시대 노예의 신분으로 태어나 온갖 역경을 겪었음에도 굳건한 정신으로 스토아 철학을 확립한 에픽테토스. 흔들리지 않는 마음의 평정심은 어디서 나왔을까요? 🏛️\n\n에픽테토스는 매일 아침 자신을 괴롭히는 일들을 두 가지로 나눴습니다. '내가 조율 가능한 내 행동과 마음가짐' 그리고 '타인의 반응, 날씨, 결과처럼 내가 조율할 수 없는 외부 요인'. 통제 불가능한 요인을 완전히 수용하고 자신이 바꿀 수 있는 내적 선택에만 의지력을 집중하는 이 루틴이 그를 자유롭게 만들었습니다.\n\n오늘 BuildSelf에서는 에픽테토스의 '통제 이분법 성찰' 루틴과 현대인을 위한 3단계 실천법을 공개합니다.",
      en: "Epictetus, who rose from slavery to found Stoic wisdom. Where did his unshakeable peace come from? 🏛️\n\nEpictetus divided daily concerns into two: what he could control (his actions and mind) vs what he couldn't (others' reactions, external events). Focusing only on internal choices freed his mind.\n\nToday, BuildSelf reveals the science behind Epictetus's 'Dichotomy of Control' routine.",
      ja: "奴隷の身分からストア派の巨匠となったエピクテトス。揺るぎない心の平穏はどこから生まれたのでしょうか？ 🏛️\n\nエピクテトスは悩みを「自分でコントロールできること」と「できない外部要因」の2つに分けました。コントロールできる内面的な選択だけに集中することで精神的自由を得ました。\n\n今日のBuildSelfでは、エピクテトスの「統制二分法省察」ルーティンを紹介します。",
      zh: "从奴隶出身成长为斯多葛学派巨匠的爱比克泰德。他那坚定不移的内心平静源自何处？ 🏛️\n\n爱比克泰德每天把困扰分为两类：自己能掌控的（行为与心态）与无法掌控的（他人看法、结果）。只将精力集中在内部选择上，使他获得了灵魂的自由。\n\n今天，BuildSelf 将揭示爱比克泰德“控制二分法反思”惯例。",
      es: "Epicteto, de esclavo a maestro estoico. ¿De dónde surgía su paz mental? 🏛️\n\nEpicteto dividía los problemas en dos: lo que podía controlar (sus acciones) y lo que no (reacciones ajenas). Enfocarse solo en elecciones internas le dio libertad mental.\n\nHoy, BuildSelf revela la ciencia tras la rutina de 'Dicotomía del Control' de Epicteto.",
      fr: "Épictète, passé d'esclave à maître stoïcien. D'où lui venait sa sérénité ? 🏛️\n\nÉpictète séparait ses soucis en deux : ce qu'il pouvait contrôler et ce qu'il ne pouvait pas. Se concentrer sur ses choix intérieurs lui a apporté la liberté.\n\nAujourd'hui, BuildSelf révèle la routine de 'Dichotomie du Contrôle' d'Épictète.",
      de: "Epiktet, vom Sklaven zum stoischen Meister. Woher stammte sein innerer Frieden? 🏛️\n\nEpiktet teilte Sorgen in zwei Bereiche: was er kontrollieren konnte und was nicht. Die Ausrichtung auf eigene Entscheidungen schenkte ihm Freiheit.\n\nHeute enthüllt BuildSelf Epiktets 'Dichtomie der Kontrolle'-Routine.",
      pt: "Epicteto, de escravo a mestre estoico. De onde vinha sua paz interior? 🏛️\n\nEpicteto dividia preocupações em duas: o que podia controlar e o que não podia. Focar nas escolhas internas trouxe liberdade mental.\n\nHoje, o BuildSelf revela a rotina de 'Dicotomia do Controle' de Epicteto.",
      id: "Epictetus, dari budak menjadi filsuf Stoik. Dari mana datangnya kedamaian batinnya? 🏛️\n\nEpictetus membagi masalah menjadi dua: apa yang bisa ia kontrol dan apa yang tidak. Berfokus pada pilihan internal membebaskan pikirannya.\n\nHari ini, BuildSelf mengungkap rutinitas 'Dikotomi Kontrol' Epictetus."
    },
    whyTitle: {
      ko: "통제 위치(Locus of Control) 이동에 따른 코르티솔 감소",
      en: "Cortisol Reduction via Shift to Internal Locus of Control",
      ja: "統制の所在（Locus of Control）移動によるコルチゾール減少",
      zh: "控制点转移所带来的皮质醇降低",
      es: "Reducción de cortisol al cambiar al centro de control interno",
      fr: "Réduction du cortisol par transfert du lieu de contrôle vers l'interne",
      de: "Cortisol-Reduktion durch Verschiebung der Lokalisierung von Kontrolle",
      pt: "Redução de cortisol ao mudar para o centro de controle interno",
      id: "Penurunan Kortisol Melalui Pergeseran Locus of Control ke Internal"
    },
    whyDesc: {
      ko: "심리학의 '통제 위치' 이론에 따르면, 자기가 조율할 수 없는 외부 요인에执着하면 스트레스 호르몬 코르티솔이 치솟아 뇌가 무력감에 빠집니다. 에픽테토스처럼 <strong>통제 가능한 내적 선택에 집중</strong>하면 도파민과 안정감을 회복합니다.",
      en: "Obsessing over uncontrollable external factors spikes cortisol, triggering helplessness. Focusing on <strong>controllable internal choices</strong>, like Epictetus, restores dopamine and mental stability.",
      ja: "コントロール不可な外部要因に固執すると、ストレスホルモンのコルチゾールが急増します。<strong>可能な選択に集中</strong>することで、ドパミンと安定感が回復します。",
      zh: "固执于不可控的外部因素会导致皮质醇飙升引发无力感。像爱比克泰德一样<strong>专注于可控的内部选择</strong>，能恢复多巴胺与掌控感。",
      es: "Obsesionarse con lo incontrolable eleva el cortisol. Enfocarse en <strong>elecciones internas controlables</strong> restaura la dopamina y la calma.",
      fr: "S'obséder pour l'incontrôlable fait grimper le cortisol. Se concentrer sur des <strong>choix internes contrôlables</strong> restaure la sérénité.",
      de: "Fixierung auf Unkontrollierbares steigert Cortisol. Der Fokus auf <strong>kontrollierbare Entscheidungen</strong> bringt Stabilität zurück.",
      pt: "Focar no incontrolável eleva o cortisol. Focar em <strong>escolhas internas controláveis</strong> restaura a dopamina e a estabilidade.",
      id: "Berfokus pada hal yang tidak bisa dikontrol meningkatkan kortisol. Berfokus pada <strong>pilihan internal yang bisa dikontrol</strong> memulihkan kestabilan."
    },
    steps: [
      {
        name: {
          ko: "이분법 노트 작성",
          en: "Dichotomy Journaling",
          ja: "二分法ノートの作成",
          zh: "建立控制二分法笔记",
          es: "Redacción de diario de dicotomía",
          fr: "Rédaction d'un journal de dichotomie",
          de: "Erstellen eines Dichtomie-Notizblatts",
          pt: "Criação do diário de dicotomia",
          id: "Membuat Catatan Dikotomi"
        },
        text: {
          ko: "종이 중앙에 선을 그어 왼쪽에는 '통제 가능한 것', 오른쪽에는 '통제 불가능한 것'을 작성합니다.",
          en: "Draw a line down a page and write 'Controllable' on the left and 'Uncontrollable' on the right.",
          ja: "紙の中央に線を引き、左側に「コントロール可能」、右側に「コントロール不可」と書きます。",
          zh: "在纸中央划一条线，左侧写上“可控事项”，右侧写上“不可控事项”。",
          es: "Trace una línea en una hoja y escriba 'Controlable' a la izquierda e 'Incontrolable' a la derecha.",
          fr: "Tracez une ligne au milieu d'une page et écrivez 'Contrôlable' à gauche et 'Incontrôlable' à droite.",
          de: "Ziehen Sie eine Linie und schreiben Sie links 'Kontrollierbar' und rechts 'Unkontrollierbar'.",
          pt: "Desenhe uma linha no papel e escreva 'Controlável' à esquerda e 'Incontrolável' à direita.",
          id: "Tarik garis di tengah kertas dan tulis 'Dapat Dikontrol' di kiri dan 'Tidak Dapat Dikontrol' di kanan."
        }
      },
      {
        name: {
          ko: "고민의 객관적 분류",
          en: "Objective Concern Categorization",
          ja: "悩みの客観的分類",
          zh: "将当前烦恼客观归类",
          es: "Clasificación objetiva de preocupaciones",
          fr: "Classification objective des soucis",
          de: "Objektive Einordnung von Sorgen",
          pt: "Classificação objetiva das preocupações",
          id: "Kategorisasi Masalah Secara Objektif"
        },
        text: {
          ko: "지금 나를 괴롭히는 걱정거리를 두 칸 중 하나로 엄격하게 분류해 받아적습니다.",
          en: "Classify your current stressful worries strictly into one of the two columns.",
          ja: "今自分を悩ませている心配事を2つの枠のどちらかに厳格に分類して書き込みます。",
          zh: "将当下困扰自己的烦恼，严格划归到这两个栏目中的某一个下面。",
          es: "Clasifique sus preocupaciones actuales estrictamente en una de las dos columnas.",
          fr: "Classez vos soucis actuels de manière stricte dans l'une des deux colonnes.",
          de: "Ordnen Sie Ihre Sorgen strikt in eine der beiden Spalten ein.",
          pt: "Classifique suas preocupações atuais estritamente em uma das duas colunas.",
          id: "Kategorikan kekhawatiran Anda saat ini secara ketat ke dalam salah satu dari dua kolom."
        }
      },
      {
        name: {
          ko: "통제 가능 행동에만 에너지 집중",
          en: "Energy Focus Solely on Controllable Action",
          ja: "可能行動へのエネルギー集中",
          zh: "仅在可控行动上投入精力",
          es: "Foco de energía solo en la acción controlable",
          fr: "Focalisation de l'énergie sur l'action contrôlable",
          de: "Fokus auf kontrollierbare Handlungen",
          pt: "Foco de energia apenas na ação controlável",
          id: "Fokus Energi Hanya pada Tindakan yang Bisa Dikontrol"
        },
        text: {
          ko: "오른쪽(통제 불가) 항목은 수용하고 내려놓으며, 왼쪽(통제 가능)의 첫 실천 항목만 실행합니다.",
          en: "Accept and release items on the right, and execute only the first action on the left.",
          ja: "右側（不可）の項目は受け入れて手放し、左側（可能）の最初の行動だけを実行します。",
          zh: "接纳并放下右侧（不可控）的事项，全力去执行左侧（可控）列出的第一个具体行动。",
          es: "Acepte y suelte la columna derecha, y ejecute solo la primera acción de la columna izquierda.",
          fr: "Acceptez la colonne de droite et exécutez uniquement la première action de la colonne de gauche.",
          de: "Akzeptieren Sie die rechte Spalte und führen Sie nur die erste Handlung der linken Spalte aus.",
          pt: "Aceite a coluna da direita e execute apenas a primeira ação da coluna da esquerda.",
          id: "Terima dan lepaskan kolom kanan, dan jalankan hanya tindakan pertama dari kolom kiri."
        }
      }
    ],
    cautionTitle: {
      ko: "통제 불가능한 요인에 대한 에너지 소모 주의",
      en: "Caution Against Wasting Energy on Uncontrollables",
      ja: "コントロール不可な要因へのエネルギー浪費に注意",
      zh: "切忌在不可控因素上浪费精神能量",
      es: "Precaución con desperdiciar energía en lo incontrolable",
      fr: "Attention au gaspillage d'énergie sur l'incontrôlable",
      de: "Vorsicht vor Energieverschwendung an Unkontrollierbarem",
      pt: "Cuidado com o desperdício de energia no incontrolável",
      id: "Waspada Membuang Energi pada Hal yang Tidak Bisa Dikontrol"
    },
    cautionDesc: {
      ko: "타인의 평가나 날씨, 상사의 감정처럼 내가 바꿀 수 없는 결과를 바꾸려 고집하면 뇌의 인지 리소스가 소진됩니다. 내가 조율할 수 없는 영역은 있는 그대로 받아들이는 훈련이 필요합니다.",
      en: "Insisting on changing outcomes you cannot alter, like others' opinions, drains cognitive resources. Practice accepting uncontrollable areas as they are.",
      ja: "他人の評価や天気など変更できない結果を変えようと執着すると脳のエネルギーが枯渇します。不可な領域は受容しましょう。",
      zh: "若执着于改变他人评价、天气等无法改变的结果，会榨干大脑认知资源。需练习接纳不可控领域。",
      es: "Insistir en cambiar opiniones ajenas o el clima agota sus recursos mentales. Practique aceptar lo incontrolable.",
      fr: "Vouloir changer ce qui ne dépend pas de vous épuise vos ressources. Entraînez-vous à accepter l'incontrôlable.",
      de: "Einflusslos Dinge verändern zu wollen zehrt Energie. Üben Sie, Unkontrollierbares zu akzeptieren.",
      pt: "Tentar mudar opiniões alheias ou o clima esgota seus recursos. Pratique aceitar o incontrolável.",
      id: "Berusaha mengubah hasil yang tidak bisa Anda ubah menghabiskan sumber daya otak. Berlatihlah menerima hal itu."
    },
    faqs: [
      {
        question: {
          ko: "상황이 너무 감정적일 때도 이분법 노트가 효과가 있나요?",
          en: "Does dichotomy journaling work even during emotional distress?",
          ja: "感情的になっている時もこの二分法ノートは効果的ですか？",
          zh: "在情绪极为被动激荡时，控制二分法笔记也有效吗？",
          es: "¿Funciona el diario de dicotomía durante crisis emocionales?",
          fr: "Le journal de dichotomie marche-t-il pendant les crises ?",
          de: "Hilft das Dichtomie-Journal auch bei emotionalem Stress?",
          pt: "O diário de dicotomia funciona durante crises emocionais?",
          id: "Apakah catatan dikotomi berfungsi saat emosi sedang tinggi?"
        },
        answer: {
          ko: "네! 감정으로 복잡할 때 펜을 들고 분류하는 행동 자체가 뇌의 편도체(Amygdala) 가열을 즉각 식혀주는 최선의 이성 가동 장치입니다.",
          en: "Yes! The physical act of categorizing cools down the amygdala and reactivates rational processing.",
          ja: "はい！感情的な時に筆をとって分類する行為自体が、脳の扁桃体の過熱を冷ます最良の装置となります。",
          zh: "是的！在被情绪包围时动笔分类，这一行为本身就是冷却大脑杏仁核过热的最佳理性开关。",
          es: "¡Sí! El acto físico de clasificar enfría la amígdala y reactiva el procesamiento racional.",
          fr: "Oui ! Le fait de classer par écrit refroidit l'amygdale et réactive la raison.",
          de: "Ja! Das physische Einsortieren kühlt die Amygdala ab und aktiviert die Logik.",
          pt: "Sim! O ato físico de classificar acalma a amígdala e reativa o processamento racional.",
          id: "Ya! Tindakan fisik mengkategorikan meredakan amigdala dan mengaktifkan kembali nalar."
        }
      },
      {
        question: {
          ko: "통제 불가능한 요인을 수용한다는 것은 포기를 의미하나요?",
          en: "Does accepting uncontrollable factors mean passive giving up?",
          ja: "コントロール不可な要因を受け入れることは諦めを意味しますか？",
          zh: "接纳不可控因素意味着被动放弃吗？",
          es: "¿Aceptar lo incontrolable significa rendirse?",
          fr: "Accepter l'incontrôlable signifie-t-il renoncer ?",
          de: "Bedeutet das Akzeptieren von Unkontrollierbarem Aufgeben?",
          pt: "Aceitar o incontrolável significa desistir?",
          id: "Apakah menerima hal yang tidak bisa dikontrol berarti menyerah?"
        },
        answer: {
          ko: "절대 아닙니다. 불필요한 저항으로 낭비되던 에너지를 회수하여 '내가 통제 가능한 유일한 실천'에 100% 집중하겠다는 강력한 주도적 선택입니다.",
          en: "Not at all. It means reclaiming wasted energy to channel 100% into the single action you CAN control.",
          ja: "全く違います。無駄な抵抗に消えていたエネルギーを回収し、自分がコントロールできる行動に100%集中する強烈な選択です。",
          zh: "绝非如此。这是回收浪费在无用抵抗上的精力，并将100%的能量聚焦于“自己唯一能控制的行动”上的强有力选择。",
          es: "Para nada. Es recuperar energía desperdiciada para volcar el 100% en la única acción que SÍ puede controlar.",
          fr: "Absolument pas. C'est récupérer de l'énergie pour la concentrer à 100% sur l'action qui dépend de vous.",
          de: "Keineswegs. Es bedeutet, verschwendete Energie zurückzuholen und 100% in die eigenen Taten zu stecken.",
          pt: "De forma alguma. É recuperar a energia desperdiçada para focar 100% na única ação que você PODE controlar.",
          id: "Sama sekali tidak. Ini berarti mengambil kembali energi yang terbuang untuk dialirkan 100% ke tindakan yang BISA Anda kontrol."
        }
      }
    ]
  },

  // 8. ashoka-edict-inscribed-reflection
  {
    slug: "ashoka-edict-inscribed-reflection",
    title: {
      ko: "전쟁 군주에서 성군이 된 비밀? 아쇼카 대왕의 석각 칙령 성찰 루틴",
      en: "The Secret Behind Transforming from Conqueror to Saint King? Emperor Ashoka's Edict Reflection Routine",
      ja: "征服王から名君となった秘密？アショカ王の石刻勅令省察ルーティン",
      zh: "从征服君主蜕变为名君的秘密？阿育王石刻敕令反思惯例",
      es: "¿El secreto tras pasar de conquistador a rey sabio? La rutina de reflexión en edictos del emperador Ashoka",
      fr: "Le secret de la transformation de conquérant en roi sage ? La routine de réflexion sur édits de l'empereur Ashoka",
      de: "Das Geheimnis vom Eroberer zum weisen König? Kaiser Ashokas Edikt-Reflexionsroutine",
      pt: "O segredo por trás da transformação de conquistador em rei sábio? A rotina de reflexão em éditos do imperador Ashoka",
      id: "Rahasia Transformasi dari Penakluk Menjadi Raja Bijak? Rutinitas Refleksi Prasasti Raja Ashoka"
    },
    description: {
      ko: "인도를 최초 통일한 아쇼카 대왕. 바위에 스스로 새긴 법칙령 구절을 되새기며 윤리적 정체성을 점검한 그의 뇌 리셋 법과 3단계 실천 가이드를 소개합니다.",
      en: "Emperor Ashoka the Great. Discover his daily Edict Reflection routine of reciting inscribed core values for identity anchoring and a 3-step modern guide.",
      ja: "インドを初統一したアショカ王。岩に刻んだ勅令を日常的に反芻し倫理的アイデンティティを点検した彼の脳活用法と3ステップ実践ガイドを紹介します。",
      zh: "首次统一印度的阿育王。介绍他通过重温铭刻在岩石上的敕令检讨道德初心的大脑重置法及三步实践指南。",
      es: "El emperador Ashoka el Grande. Descubra su rutina de recitar edictos grabados para anclar su identidad moral y una guía práctica de 3 pasos.",
      fr: "L'empereur Ashoka le Grand. Découvrez sa routine de récitation d'édits gravés pour ancrer ses valeurs et un guide en 3 étapes.",
      de: "Kaiser Ashoka der Große. Entdecken Sie seine tägliche Edikt-Reflexionsroutine zur Verankerung von Werten und einen 3-Schritte-Leitfaden.",
      pt: "O imperador Ashoka, o Grande. Descubra sua rotina de recitar éditos gravados para ancorar seus valores e um guia prático de 3 passos.",
      id: "Kaisar Ashoka yang Agung. Temukan rutinitas refleksi prasasti hariannya untuk memperkuat nilai diri dan panduan praktis 3 langkah."
    },
    authority: {
      ko: "Romila Thapar 저서 'Asoka and the Decline of the Mauryas' 및 아쇼카 석각 칙령 번역문",
      en: "Romila Thapar's 'Asoka and the Decline of the Mauryas' & Ashoka Rock Edicts Translations",
      ja: "ロミラ・ターパル著「Asoka and the Decline of the Mauryas」およびアショカ王碑文翻訳",
      zh: "罗米拉·塔帕尔著作《Asoka and the Decline of the Mauryas》与阿育王摩崖敕令译文",
      es: "Obra 'Asoka and the Decline of the Mauryas' de Romila Thapar y edictos de Ashoka",
      fr: "Ouvrage 'Asoka and the Decline of the Mauryas' de Romila Thapar & Édits d'Ashoka",
      de: "Romila Thapars 'Asoka and the Decline of the Mauryas' & Ashokas Felsedikte",
      pt: "Obra 'Asoka and the Decline of the Mauryas' de Romila Thapar & Éditos de Ashoka",
      id: "Karya Romila Thapar 'Asoka and the Decline of the Mauryas' & Terjemahan Prasasti Ashoka"
    },
    intro: {
      ko: "인도 대륙 대부분을 최초로 통합하고 칼링가 전쟁 이후 자비와 비폭력의 정치를 펼친 마우리아 제국의 아쇼카 대왕. 잔혹한 정복자였던 그가 역사상 최고의 성군으로 거듭난 비결은 무엇일까요? 📜\n\n아쇼카 대왕은 전쟁의 비극을 깊이 뉘우치고 제국 전역의 커다란 바위와 석주에 비폭력, 성찰, 자비의 법칙령(Edicts of Ashoka)을 새겼습니다. 그는 매일 아침 석각에 새겨진 윤리 구절들을 복기하며 자신의 생각과 결정이 초심에 어긋나지 않는지 끊임없이 자기 점검을 수행했습니다.\n\n오늘 BuildSelf에서는 아쇼카 대왕의 '핵심 가치관 성찰' 루틴과 현대인을 위한 3단계 실천법을 알아봅니다.",
      en: "Emperor Ashoka the Great, who united ancient India. How did a ruthless conqueror transform into a saintly king? 📜\n\nRepenting war's tragedy, Ashoka inscribed edicts of non-violence and compassion on rocks. He recited these inscribed principles daily to audit his decisions against core values.\n\nToday, BuildSelf explores Emperor Ashoka's 'edict reflection' routine.",
      ja: "古代インドを統一したアショカ王。残忍な征服者が名君へと生まれ変わった秘密は何でしょうか？ 📜\n\nアショカ王は戦争の惨劇を反省し、岩に非暴力と慈悲の勅令を刻みました。毎日その刻印を反芻し、自身の決定を点検しました。\n\n今日のBuildSelfでは、アショカ王の「核心価値観省察」ルーティンを紹介します。",
      zh: "统一古代印度的阿育王。一位残酷的征服者是如何蜕变为史上名君的？ 📜\n\n阿育王深切反省战争悲剧，在岩石上刻下了包含慈悲与非暴力的敕令。他每天重温这些铭文，检讨自己的抉择是否符合初心。\n\n今天，BuildSelf 将带您了解阿育王“核心价值观反思”惯例。",
      es: "El emperador Ashoka el Grande. ¿Cómo pasó de conquistador cruel a rey sabio? 📜\n\nArrepentido por la guerra, grabó edictos de compasión en rocas. Recitaba estos principios a diario para auditar sus decisiones.\n\nHoy, BuildSelf explora la rutina de 'reflexión en edictos' de Ashoka.",
      fr: "L'empereur Ashoka le Grand. Comment est-il passé de conquérant à roi sage ? 📜\n\nRegrettant la guerre, il a gravé des édits de compassion sur des rochers. Il récitait ces préceptes chaque jour pour auditer ses choix.\n\nAujourd'hui, BuildSelf explore la routine de 'réflexion sur édits' d'Ashoka.",
      de: "Kaiser Ashoka der Große. Wie wurde aus einem Eroberer ein weiser König? 📜\n\nAus Reue über den Krieg meißelte er Edikte der Nächstenliebe in Felsen. Er rezitierte diese Grundsätze täglich zur Selbstprüfung.\n\nHeute untersucht BuildSelf Ashokas 'Edikt-Reflexions'-Routine.",
      pt: "O imperador Ashoka, o Grande. Como ele passou de conquistador a rei sábio? 📜\n\nArrependido da guerra, gravou éditos de compaixão em rochas. Recitava esses princípios diariamente para auditar suas decisões.\n\nHoje, o BuildSelf explora a rotina de 'reflexão em éditos' de Ashoka.",
      id: "Kaisar Ashoka yang Agung. Bagaimana seorang penakluk menjadi raja yang bijak? 📜\n\nMenyesali tragedi perang, ia memahat prasasti kasih sayang pada batu. Ia merapalkan prinsip-prinsip ini setiap hari untuk mengevaluasi keputusannya.\n\nHari ini, BuildSelf menjelajahi rutinitas 'refleksi prasasti' Ashoka."
    },
    whyTitle: {
      ko: "시각적 외부 구조화를 통한 자아 정체성 닻 내리기",
      en: "Self-Identity Anchoring via External Visual Structuring",
      ja: "視覚的外部構造化による自己アイデンティティのアンカー化",
      zh: "通过视觉外部结构化锚定自我身份",
      es: "Anclaje de la identidad propia mediante estructuración visual externa",
      fr: "Ancrage de l'identité par structuration visuelle externe",
      de: "Verankerung der Identität durch externe visuelle Strukturierung",
      pt: "Ancoragem da identidade própria por meio de estruturação visual externa",
      id: "Penjangkaran Identitas Diri Melalui Struktur Visual Eksternal"
    },
    whyDesc: {
      ko: "인간의 뇌는 권력, 감정, 바쁜 일상 속에서 당초의 가치관을 손쉽게 잊습니다. 아쇼카 대왕처럼 <strong>가치관을 눈에 보이는 물리적 문장으로 외부화</strong>하고 낭송하면 보상계와 뇌의 자기 참조 회로가 활성화되어 가치 중심의 의사결정을 유지하게 됩니다.",
      en: "The brain easily forgets values amid power or busy routines. <strong>Externalizing values into physical text</strong> and reciting them activates self-referential brain circuits to sustain value-based choices.",
      ja: "忙しい日常の中で脳は価値観を忘れがちです。<strong>価値観を目に見える文章に外部化</strong>して音読することで、価値中心の意思決定が維持されます。",
      zh: "在大脑面对琐事或权力时容易忘记初心。像阿育王一样将<strong>价值观外部化为可视化文字</strong>并朗读，能激活自省回路，维持基于价值观的决策。",
      es: "El cerebro olvida fácil sus valores con el ajetreo. <strong>Externalizar valores en texto físico</strong> y recitarlos activa circuitos de auto-referencia para mantener sus decisiones.",
      fr: "Le cerveau oublie facilement ses valeurs. <strong>Externaliser ses valeurs sous forme de texte</strong> et les réciter maintient des choix alignés.",
      de: "Das Gehirn vergisst Werte im Alltag leicht. Das <strong>Visualisieren und Rezitieren von Werten</strong> aktiviert Selbstreflexionspfade.",
      pt: "O cérebro esquece valores facilmente. <strong>Externalizar valores em texto físico</strong> e recitá-los ativa circuitos de auto-referência.",
      id: "Otak mudah melupakan nilai dalam kesibukan. <strong>Mengeksternalkan nilai ke dalam teks fisik</strong> dan merapalkannya menjaga keputusan berbasis nilai."
    },
    steps: [
      {
        name: {
          ko: "나만의 3대 법칙 칙령 문장 작성",
          en: "Draft Your 3 Core Edict Statements",
          ja: "自分だけの3大法則勅令の作成",
          zh: "起草属于自己的三大规则敕令",
          es: "Redacción de sus 3 edictos fundamentales",
          fr: "Rédaction de vos 3 principes majeurs",
          de: "Formulieren Ihrer 3 Kern-Edikte",
          pt: "Redação dos seus 3 éditos fundamentais",
          id: "Menyusun 3 Pernyataan Prasasti Inti"
        },
        text: {
          ko: "인생과 업무에서 타협할 수 없는 자신만의 3가지 핵심 윤리 법칙을 선명한 문장으로 적습니다.",
          en: "Write down your 3 uncompromisable core ethical laws for life and work in clear, bold sentences.",
          ja: "人生と仕事において妥協できない自分だけの3つの核心倫理法則を明確な文章で書き出します。",
          zh: "写下在生活与工作中不可妥协的3条个人核心原则，表达要清晰明确。",
          es: "Escriba sus 3 reglas éticas fundamentales e innegociables para la vida y el trabajo en frases claras.",
          fr: "Rédigez vos 3 règles éthiques fondamentales et non négociables en phrases claires.",
          de: "Schreiben Sie Ihre 3 unumstößlichen Werte für Leben und Arbeit in klaren Sätzen auf.",
          pt: "Escreva suas 3 regras éticas fundamentais e inegociáveis para a vida e o trabalho em frases claras.",
          id: "Tuliskan 3 hukum etika inti Anda yang tidak dapat dikompromikan dalam kalimat yang jelas."
        }
      },
      {
        name: {
          ko: "물리적 노출 공간 배치",
          en: "Physical Visibility Placement",
          ja: "物理的露出空間への配置",
          zh: "放置在物理可见空间",
          es: "Ubicación en un espacio de visibilidad física",
          fr: "Placement dans un espace visible",
          de: "Platzierung an gut sichtbarem Ort",
          pt: "Colocação em espaço de visibilidade física",
          id: "Penempatan di Ruang Visual Fisik"
        },
        text: {
          ko: "작성한 문장을 책상 앞, 모니터 옆, 혹은 스마트폰 첫 화면처럼 눈에 잘 띄는 곳에 붙여놓습니다.",
          en: "Post your core statements in a highly visible spot, such as next to your monitor or on your desk.",
          ja: "書き出した文章をデスクの前やモニターの横など、目につ는場所に貼ります。",
          zh: "将写好的句子贴在书桌前、电脑屏幕旁或手机主屏幕等显眼位置。",
          es: "Coloque sus frases en un lugar muy visible, como al lado del monitor o en su escritorio.",
          fr: "Affichez vos préceptes dans un endroit bien visible, comme à côté de votre écran.",
          de: "Kleben Sie die Sätze an einen gut sichtbaren Ort, z. B. neben den Monitor.",
          pt: "Fixe suas frases em um local bem visível, como ao lado do monitor ou na mesa.",
          id: "Tempelkan pernyataan inti Anda di tempat yang sangat terlihat, seperti di samping monitor."
        }
      },
      {
        name: {
          ko: "아침 낭송 및 일일 자기 점검",
          en: "Morning Recitation & Daily Self-Audit",
          ja: "朝の朗読と日々の自己点検",
          zh: "晨间朗读与每日自省",
          es: "Recitación matutina y auto-auditoría diaria",
          fr: "Récitation matinale et auto-contrôle quotidien",
          de: "Morgenrezitation & tägliche Selbstprüfung",
          pt: "Recitação matinal e autoauditoria diária",
          id: "Rapalan Pagi & Audit Diri Harian"
        },
        text: {
          ko: "매일 아침 일과를 시작할 때 소리 내어 읊고, 하루 마감 시 이 원칙에 들어맞았는지 되짚어 봅니다.",
          en: "Recite them aloud every morning before work, and audit your decisions against them at night.",
          ja: "毎朝の業務開始時に声に出して読み上げ、一日の終わりにも決定を振り返ります。",
          zh: "每天清晨开启工作前出声朗读，并在结束一天时检讨自己的决策是否符合原则。",
          es: "Recítelos en voz alta cada mañana antes de trabajar y audite sus decisiones por la noche.",
          fr: "Récitez-les à haute voix chaque matin et évaluez vos choix le soir venu.",
          de: "Rezitieren Sie sie jeden Morgen laut und prüfen Sie Ihre Entscheidungen am Abend.",
          pt: "Recite-os em voz alta todas as manhãs e audite suas decisões ao fim do dia.",
          id: "Rapalkan dengan lantang setiap pagi sebelum bekerja, dan evaluasi keputusan Anda di malam hari."
        }
      }
    ],
    cautionTitle: {
      ko: "형식적 문구 방치에 따른 마비 주의",
      en: "Caution Against Desensitization From Formalistic Phrases",
      ja: "形式的文言の放置による麻痺に注意",
      zh: "切忌因沦为形式主义标语而产生麻木感",
      es: "Precaución con la insensibilización por frases mere formalistas",
      fr: "Attention à l'insensibilisation face à des formules creuses",
      de: "Vorsicht vor Gewöhnung an reine Floskeln",
      pt: "Cuidado com a dessensibilização por frases meramente formais",
      id: "Waspada Desensitisasi dari Kalimat Formalitas"
    },
    cautionDesc: {
      ko: "문장을 붙여놓고 아무런 감흥 없이 지나치면 뇌는 이를 배경 요소로 인식하여 무감각해집니다. 최소한 아침에 나지막이 낭송하며 그 의미를 감각적으로 체화하는 과정이 반드시 동반되어야 합니다.",
      en: "Ignoring posted statements turns them into background noise. You must actively recite them aloud each morning to embody their meaning.",
      ja: "貼るだけで放置すると脳が背景として認識し無感覚になります。毎朝朗読して意味を体感しましょう。",
      zh: "若只是贴着而无感地 passing by，大脑会将其视为背景图层而麻木。必须伴随清晨朗读以感知其含义。",
      es: "Ignorar las frases las convierte en ruido de fondo. Recítelas en voz alta cada mañana para encarnar su significado.",
      fr: "Ne pas réciter les phrases les transforme en bruit de fond. Récitez-les chaque matin pour les incarner.",
      de: "Bilder ignorieren verwandelt sie in Hintergrundrauschen. Rezitieren Sie sie morgens laut.",
      pt: "Ignorar as frases as transforma em ruído de fundo. Recite-as em voz alta todas as manhãs.",
      id: "Mengabaikan pernyataan yang ditempel membuatnya jadi latar belakang. Rapalkan secara aktif setiap pagi."
    },
    faqs: [
      {
        question: {
          ko: "핵심 가치관 문장이 중간에 바뀌어도 괜찮나요?",
          en: "Is it okay if my core values change over time?",
          ja: "核心価値観の文章が途中で変わっても大丈夫ですか？",
          zh: "核心价值观句式在半途发生改变也可以吗？",
          es: "¿Pasa algo si mis valores fundamentales cambian con el tiempo?",
          fr: "Est-ce grave si mes valeurs évoluent avec le temps ?",
          de: "Ist es in Ordnung, wenn sich Kernwerte im Laufe der Zeit ändern?",
          pt: "Tem problema se meus valores mudarem com o tempo?",
          id: "Bolehkah jika nilai-nilai inti saya berubah seiring waktu?"
        },
        answer: {
          ko: "그럼요! 삶의 단계와 상황에 따라 가치관은 성장합니다. 분기나 연단위로 법칙령 문장을 수정·업데이트하는 과정 자체가 훌륭한 성찰입니다.",
          en: "Absolutely! Values grow as life changes. Updating your core statement quarterly or annually is itself great reflection.",
          ja: "もちろんです！人生の段階で価値観は成長します。定期的に文章を更新すること自体が素晴らしい省察です。",
          zh: "当然可以！人生不同阶段价值观会成长。按季度或年度更新调整法则句子，其本身就是极佳的自省过程。",
          es: "¡Por supuesto! Los valores evolucionan. Actualizar sus edictos cada trimestre o año es en sí una gran reflexión.",
          fr: "Absolument ! Les valeurs évoluent. Réviser ses principes régulièrement est une excellente démarche.",
          de: "Absolut! Werte entwickeln sich weiter. Das regelmäßige Anpassen der Sätze ist selbst wertvolle Reflexion.",
          pt: "Com certeza! Os valores mudam com a vida. Atualizar seus éditos periodicamente é uma excelente reflexão.",
          id: "Tentu saja! Nilai-nilai berkembang seiring perubahan hidup. Memperbarui pernyataan secara berkala adalah refleksi yang baik."
        }
      },
      {
        question: {
          ko: "혼자 구호를 외치는 것이 민망할 땐 어떻게 하나요?",
          en: "What if reciting aloud feels awkward or embarrassing?",
          ja: "一人で声を出すのが照れくさい場合はどうすればいいですか？",
          zh: "如果一个人出声朗读感到尴尬怎么办？",
          es: "¿Qué hacer si me da vergüenza recitar en voz alta?",
          fr: "Que faire si répéter à haute voix me me gêne ?",
          de: "Was tun, wenn mir lautes Rezitieren unangenehm ist?",
          pt: "O que fazer se recitar em voz alta parecer constrangedor?",
          id: "Bagaimana jika merapalkan dengan lantang terasa canggung?"
        },
        answer: {
          ko: "큰 소리로 외칠 필요 없습니다. 입술만 중얼거리듯 조용히 읊조리거나, 텍스트를 손가락으로 짚으며 머릿속으로 속삭이는 것만으로도 충분합니다.",
          en: "No need to shout. Subvocalizing quietly or tracing the words with your finger while whispering mentally works great.",
          ja: "大声を出す必要はありません。唇を微かに動かして呟いたり、指で文字を追いながら囁くだけで十分です。",
          zh: "无需大声喊叫。只需微微动唇默念，或用手指逐字抚过并在脑海中低语，就能达到充分效果。",
          es: "No necesita gritar. Susurrar suavemente o seguir el texto con el dedo mientras lo lee mentalmente es suficiente.",
          fr: "Inutile de crier. Murmurer doucement ou suivre le texte du doigt en le lisant dans sa tête suffit amplement.",
          de: "Sie müssen nicht schreien. Leises Murmeln oder mit dem Finger Folgen während des Lesens reicht völlig aus.",
          pt: "Não precisa gritar. Sussurrar suavemente ou seguir o texto com o dedo enquanto lê mentalmente é suficiente.",
          id: "Tidak perlu berteriak. Berbisik pelan atau menelusuri kata dengan jari sambil membacanya dalam hati sudah cukup."
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
