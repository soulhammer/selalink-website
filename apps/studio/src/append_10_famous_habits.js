import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const todayStr = '2026-07-22';

const blogDataList = [
  // 1. 제갈량 (Zhuge Liang)
  {
    slug: 'zhuge-liang-guqin-strategy',
    item: {
      id: 'zhuge-liang-guqin-strategy',
      name: '제갈량',
      gender: 'male',
      era: '고대',
      location: '중국 (촉한)',
      lifespan: '181 - 234',
      birthYear: 181,
      bio: "삼국시대 촉한의 대승상이자 인류 역사상 최고의 지략가 및 전략가로 꼽히는 대문호입니다.",
      habitName: '새벽 구친(거문고) 연주와 야간 천문 관측을 통한 마음 다스림과 전략 구상',
      tags: ['#몰입', '#의사결정', '#사색', '#계획', '#창의'],
      timeOfDay: 'morning',
      requiredItems: ['구친(거문고)', '천문도 및 서적'],
      frequency: 'daily',
      historicalStory: "촉한의 승상 제갈량은 극심한 군사적·정치적 중책 속에서도 매일 새벽 맑은 고요 속에서 구친(古琴)을 켜며 정서적 평형을 찾았습니다. 또한 매일 밤 누각에 올라 야간 별자리의 미세한 이동과 기상을 관측하며 시각적 주시와 음악적 이완을 결합해 복잡한 대전략을 침착하게 구성해 냈습니다.",
      sciencePrinciples: "5음계 현악기 연주와 자연 관측의 결합은 뇌의 알파파(α-wave)를 활성화하고 교감신경의 과도한 긴장을 완화합니다. 이는 복잡한 의사결정 과부하(Decision Fatigue)를 줄이고 뇌의 실행 기능과 거시적 공간 전략 연산을 극대화합니다.",
      quote: "담박함이 없으면 뜻을 밝힐 수 없고, 정적함이 없으면 먼 곳에 이르지 못한다 (非淡泊無以明志, 非寧靜無以致遠).",
      trigger: "중요한 기획이나 복잡한 전략적 결정을 앞두고 마인드 컨트롤이 필요할 때",
      modernGuide: [
        "아침 업무 시작 전 10분간 스마트폰을 끄고 편안한 아쿠스틱 오케스트라나 현악 클래식을 청취합니다.",
        "음악을 들으며 마음을 정돈하고, 오늘 완수해야 할 가장 중대한 대전략 1가지를 노트 중앙에 기록합니다.",
        "저녁 퇴근길 조용한 밤하늘을 3분간 바라보며 하루 동안의 복잡한 잡념을 완전히 털어냅니다."
      ],
      actionName: "아침 현악 연주 이완 & 핵심 전략 1가지 기재 (제갈량 루틴)",
      sources: [
        "진수(陳壽), *삼국지(三國志) 촉서 제갈량전*",
        "제갈량, *계자서(戒子書)*"
      ]
    },
    translations: {
      title: {
        ko: "세기 최고의 지략가? 제갈량의 새벽 구친 연주와 천문 전략 루틴",
        en: "History's Greatest Strategist? Zhuge Liang's Dawn Guqin & Celestial Strategy Routine",
        ja: "歴史上最高の strategist？諸葛亮の朝の古琴演奏と天文戦略ルーティン",
        zh: "历史顶尖智囊？诸葛亮的清晨弹琴与夜观天象习惯",
        es: "¿El mejor estratega de la historia? La rutina de guqin al amanecer y estrategia celeste de Zhuge Liang",
        fr: "Le plus grand stratège ? La routine de guqin à l'aube et d'observation céleste de Zhuge Liang",
        de: "Der größte Stratege der Geschichte? Zhuge Liangs morgendliche Guqin- und Himmelsstrategie-Routine",
        pt: "O maior estrategista da história? A rotina de guqin ao amanhecer e estratégia celeste de Zhuge Liang",
        id: "Ahli Strategi Terbesar Sejarah? Rutinitas Guqin Fajar & Pengamatan Bintang Zhuge Liang"
      },
      description: {
        ko: "삼국시대 촉한의 승상 제갈량이 복잡한 정세 속에서 새벽 구친 연주와 야간 천문 관측으로 고도의 마인드 컨트롤을 이뤄낸 비밀과 실천 가이드.",
        en: "Discover how Zhuge Liang maintained ultimate clarity through morning guqin playing and star observation.",
        ja: "諸葛亮が過酷な情勢の中で朝の古琴演奏と夜の天文観測でマインドコントロールを成し遂げた秘密を紹介します。",
        zh: "介绍诸葛亮在复杂政局中通过清晨弹琴与夜观天象保持极度清醒与战略定力的习惯。",
        es: "Descubra cómo Zhuge Liang mantuvo la máxima claridad mediante el guqin matutino y la observación estelar.",
        fr: "Découvrez comment Zhuge Liang maintenait une clarté mentale absolue grâce au guqin et à l'astronomie.",
        de: "Erfahren Sie, wie Zhuge Liang durch morgendliches Guqin-Spiel und Sternenbeobachtung absolute Klarheit bewahrte.",
        pt: "Descubra como Zhuge Liang manteve clareza absoluta tocando guqin ao amanhecer e observando estrelas.",
        id: "Temukan bagaimana Zhuge Liang menjaga kejelasan mental melalui permainan guqin pagi dan pengamatan bintang."
      },
      authority: {
        ko: "사서 '삼국지(三國志) 촉서 제갈량전' 및 제갈량 친필 '계자서(戒子書)'",
        en: "Historical Records of the Three Kingdoms (Zhuge Liang Biography) & Commandment to My Son",
        ja: "史書「三国志 蜀書 諸葛亮伝」および「戒子書」",
        zh: "史书《三国志·蜀书·诸葛亮传》与《戒子书》",
        es: "Registros Históricos de los Tres Reinos (Biografía de Zhuge Liang) y Carta a mi hijo",
        fr: "Chroniques des Trois Royaume (Biographie de Zhuge Liang) & Carte à mon fils",
        de: "Chroniken der Drei Reiche (Zhuge Liang Biografie) & Brief an meinen Sohn",
        pt: "Registros Históricos dos Três Reinos (Biografia de Zhuge Liang) e Carta ao meu filho",
        id: "Catatan Sejarah Tiga Kerajaan (Biografi Zhuge Liang) & Surat untuk Putraku"
      },
      intro: {
        ko: "적벽대전과 수많은 군사 대치 속에서 촉한의 존망을 지켜낸 세기의 지략가, 제갈량. 수많은 변수와 목숨이 오가는 극심한 압박 속에서 그는 어떻게 언제나 고요하고 비범한 판단력을 유지했을까요? 🪕\n\n제갈량은 매일 새벽 맑은 공기 속에서 구친(古琴)을 켜며 뇌를 깊은 이완 상태로 이끌었습니다. 고요함 속에서 마음을 비우고, 밤에는 별자리의 움직임을 살피며 거시적 대세를 읽어냈습니다. 이는 긴박한 정세 속에서 정서적 과부하를 막는 강력한 마인드 컨트롤 습관이었습니다.\n\n오늘 BuildSelf에서는 제갈량의 구친 연주 루틴에 담긴 뇌파 조절과 의사결정 클리어링의 과학을 소개합니다.",
        en: "Zhuge Liang, the legendary strategist of the Three Kingdoms. How did he maintain absolute clarity under immense pressure? 🪕\n\nEvery dawn, he played the guqin to guide his brain into a relaxed state. By clearing his mind and observing star movements at night, he foresaw grand trends.\n\nToday, BuildSelf introduces the science of brainwave regulation behind Zhuge Liang's routine.",
        ja: "三国志の天才軍師、諸葛亮。極度のプレッシャーの中で彼はどのように冷静な判断力を維持したのでしょうか？ 🪕\n\n毎朝古琴を演奏して脳をリラックス状態へ導き、夜は星の動きを観察して大勢を読み解きました。\n\n今日のBuildSelfでは、諸葛亮のルーティンに隠された科学的原理を紹介します。",
        zh: "三国时代的传奇智囊诸葛亮。在巨大的战略压力下，他是如何保持非凡理智与决断力的？ 🪕\n\n每天清晨他弹奏古琴将大脑带入放松状态，夜间观星理清宏观大势。\n\n今天，BuildSelf 将为您介绍诸葛亮习惯背后的 brainwave 科学。",
        es: "Zhuge Liang, el legendario estratega de los Tres Reinos. ¿Cómo mantenía la claridad bajo tanta presión? 🪕\n\nCada amanecer tocaba el guqin para relajar su mente y observaba las estrellas de noche.\n\nHoy BuildSelf presenta la ciencia de regulación cerebral tras su rutina.",
        fr: "Zhuge Liang, le stratège de légende des Trois Royaumes. Comment gardait-il un esprit si clair ? 🪕\n\nChaque aube, il jouait du guqin pour détendre son cerveau et observait le ciel la nuit.\n\nAujourd'hui, BuildSelf vous dévoile la science de la régulation des ondes cérébrales.",
        de: "Zhuge Liang, der meisterhafte Stratege. Wie bewahrte er unter extremem Druck absolute Ruhe? 🪕\n\nJeden Morgen spielte er Guqin, um sein Gehirn zu entspannen, und beobachtete nachts die Sterne.\n\nHeute zeigt BuildSelf die Wissenschaft hinter seiner Routine.",
        pt: "Zhuge Liang, o lendário estrategista. Como ele mantinha a clareza sob intensa pressão? 🪕\n\nTodas as manhãs ele tocava guqin para relaxar a mente e observava as estrelas à noite.\n\nHoje o BuildSelf apresenta a ciência por trás de sua rotina.",
        id: "Zhuge Liang, ahli strategi legendaris Tiga Kerajaan. Bagaimana ia menjaga kejelasan mental di bawah tekanan? 🪕\n\nSetiap fajar ia memainkan guqin untuk merilekskan otak dan mengamati bintang di malam hari.\n\nHari ini BuildSelf menyajikan sains di balik rutinitasnya."
      },
      whyTitle: {
        ko: "알파 뇌파 유도를 통한 정서적 과부하 차단과 거시적 공간 판단력",
        en: "Emotional Overload Block & Strategic Clarity via Alpha Wave Induction",
        ja: "アルファ波誘導による感情的オーバーロード遮断とマクロ判断力",
        zh: "通过α脑电波诱导消除情绪过载与提升宏观决策力",
        es: "Bloqueo de Sobrecarga Emocional y Claridad Estratégica mediante Ondas Alfa",
        fr: "Blocage de la Surcharge Émotionnelle & Clarté Estratégique via Ondes Alpha",
        de: "Blockade emotionaler Überlastung & strategische Klarheit durch Alpha-Wellen",
        pt: "Bloqueio de Sobrecarga Emocional e Clareza Estratégica via Ondas Alfa",
        id: "Mencegah Kelebihan Emosional & Kejelasan Strategis Melalui Gelombang Alfa"
      },
      whyDesc: {
        ko: "중요한 과제나 불안감이 높을 때 뇌의 편도체(Amygdala)가 과활성화되어 시야가 좁아지고 우유부단해집니다.\n\n제갈량이 실천한 구친 연주와 고요한 별 관측은 뇌의 알파파(8-12Hz) 발생을 유도하는 강력한 <strong>'정서적 클리어링 시스템'</strong>입니다. 마음을 고요히 가라앉히면 불안이 차단되고 전전두엽 피질의 통찰 회로가 활성화되어 복잡한 선택지 속에서 가장 정답에 가까운 대전략을 도출할 수 있습니다.",
        en: "High-stakes pressure overactivates the amygdala, narrowing vision.\n\nPlaying string music and observing space induces alpha waves (8-12Hz), acting as an <strong>'emotional clearing system'</strong> that restores strategic foresight.",
        ja: "プレッシャーは偏桃体を過剰活性化させ視野を狭めます。\n\n弦楽器の演奏と静かな観測はアルファ波を誘導する<strong>「感情的クリアリングシステム」</strong>です。",
        zh: "高压环境下杏仁核过度激活会导致视野狭窄。\n\n弹奏弦乐与观星是引发α波的<strong>“情绪重置系统”</strong>，能恢复全局战略眼光。",
        es: "La presión hiperactiva la amígdala, reduciendo la visión.\n\nTocar música de cuerda induce ondas alfa, funcionando como un <strong>'sistema de limpieza emocional'</strong>.",
        fr: "La pression hyperactive l'amygdale, rétrécissant la vision.\n\nLa musique à cordes induit des ondes alpha, agissant comme un <strong>'système de nettoyage émotionnel'</strong>.",
        de: "Druck überaktiviert die Amygdala und verengt die Sicht.\n\nSaitenmusik erzeugt Alpha-Wellen als <strong>'emotionales Reinigungssystem'</strong>.",
        pt: "A pressão hiperativa a amígdala, estreitando a visão.\n\nMúsica de cordas induz ondas alfa como um <strong>'sistema de limpeza emocional'</strong>.",
        id: "Tekanan memicu hiperaktivitas amigdala dan menyempitkan pandangan.\n\nMusik petik memicu gelombang alfa sebagai <strong>'sistem pembersihan emosional'</strong>."
      },
      cautionTitle: {
        ko: "소음과 자극을 줄이고 내면의 정적 상태를 확보하세요",
        en: "Reduce Noise and Secure Inner Tranquility",
        ja: "騒音を減らし内面の静寂を確保しましょう",
        zh: "减少噪音刺激，确保内心宁静",
        es: "Reduzca el ruido y asegure la tranquilidad interior",
        fr: "Réduisez le bruit et sécurisez la tranquilidad intérieure",
        de: "Reduzieren Sie Lärm und sichern Sie innere Ruhe",
        pt: "Reduza o ruído e garanta a tranquilidade interior",
        id: "Kurangi kebisingan dan dapatkan ketenangan batin"
      },
      cautionDesc: {
        ko: "제갈량의 명언처럼 담박함과 고요함 없이는 멀리 내다볼 수 없습니다. 외부의 시끄러운 뉴스나 SNS 알림을 차단하고 10분간 의도적인 이완과 정적 시간을 확보하세요.",
        en: "Without tranquility, one cannot reach far. Turn off notifications and secure 10 minutes of intentional stillness.",
        ja: "静寂なしに遠くを見渡すことはできません。通知を切り10分間の静けさを確保してください。",
        zh: "非宁静无以致远。关闭消息推送，确保10分钟刻意留白的宁静时光。",
        es: "Sin tranquilidad no se llega lejos. Desactive notificaciones y asegure 10 minutos de calma.",
        fr: "Sans tranquillité, on ne va pas loin. Éteignez les notifications et gardez 10 min de calme.",
        de: "Ohne Ruhe kommt man nicht weit. Schalten Sie Benachrichtigungen aus und sichern Sie 10 Minuten Stille.",
        pt: "Sem tranquilidade não se vai longe. Desligue notificações e garanta 10 min de calma.",
        id: "Tanpa ketenangan, tak bisa melangkah jauh. Matikan notifikasi dan siapkan 10 menit ketenangan."
      },
      steps: [
        {
          name: {
            ko: "아침 현악 이완 음악 청취",
            en: "Morning String Music Relaxation",
            ja: "朝の弦楽リラックス音楽鑑賞",
            zh: "清晨弦乐放松聆听",
            es: "Escucha Matutina de Música de Cuerda",
            fr: "Écoute Matinale de Musique à Cordes",
            de: "Morgendliche Saitenmusik-Entspannung",
            pt: "Audição Matinal de Música de Cordas",
            id: "Mendengarkan Musik Petik Pagi"
          },
          text: {
            ko: "일어나서 5~10분간 가야금, 거문고, 혹은 클래식 현악 연주곡을 틀어놓고 심호흡하며 머리를 비웁니다.",
            en: "Listen to calm string music for 5-10 minutes upon waking while taking deep breaths.",
            ja: "起床後5〜10分間、和楽器やクラシックの弦楽演奏を聴きながら深呼吸して頭を空にします。",
            zh: "起床后听5-10分钟古琴或古典弦乐，配合深呼吸将大脑清空。",
            es: "Escuche música de cuerda relajante de 5 a 10 minutos al despertar mientras respira profundo.",
            fr: "Écoutez de la musique à cordes 5 à 10 minutes au réveil en respirant profondément.",
            de: "Lauschen Sie nach dem Aufstehen 5-10 Minuten Saitenmusik und atmen Sie tief durch.",
            pt: "Ouça música de cordas por 5 a 10 minutos ao acordar enquanto respira fundo.",
            id: "Dengarkan musik petik selama 5-10 menit saat bangun tidur sambil menarik napas dalam."
          }
        },
        {
          name: {
            ko: "오늘의 핵심 대전략 1가지 기재",
            en: "Write Down 1 Master Strategy for Today",
            ja: "今日の最も critical な戦略1つを記録",
            zh: "写下今天最重要的1个核心战略",
            es: "Escriba 1 Estrategia Principal para Hoy",
            fr: "Écrivez 1 Stratégie Principale pour la Journée",
            de: "Schreiben Sie 1 Hauptstrategie für heute auf",
            pt: "Escreva 1 Estratégia Principal para Hoje",
            id: "Tuliskan 1 Strategi Utama Hari Ini"
          },
          text: {
            ko: "마음이 완전히 침착해진 상태에서 오늘 수많은 할 일 중 승패를 가르는 가장 중요한 과제 1가지만을 노트에 작성합니다.",
            en: "In a completely calm state, record the single most pivotal task for today in your notebook.",
            ja: "色が落ち着いたら、今日最も重要な勝負どころとなるタスクを1つだけノートに書き出します。",
            zh: "在内心彻底平静的状态下，在笔记本上写下今天决定成败的最核心任务。",
            es: "Con la mente en calma, anote en su cuaderno la única tarea verdaderamente decisiva de hoy.",
            fr: "Calme, notez dans votre carnet la seule tâche véritablement décisive de la journée.",
            de: "Schreiben Sie in ruhigem Zustand die eine entscheidende Aufgabe des Tages auf.",
            pt: "Com a mente calma, anote no caderno a única tarefa verdadeiramente decisiva de hoje.",
            id: "Dengan pikiran tenang, catat 1 tugas paling menentukan untuk hari ini di buku catatan."
          }
        },
        {
          name: {
            ko: "야간 시야 확장 및 정적 리셋",
            en: "Nightly Perspective Expansion & Quiet Reset",
            ja: "夜の視野拡大と静寂リセット",
            zh: "夜间视角拓展与静心重置",
            es: "Expansión de Perspectiva Nocturna y Reinicio",
            fr: "Élargissement de la Perspective du Soir",
            de: "Nächtliche Perspektiverweiterung & Reset",
            pt: "Expansão de Perspectiva Noturna e Reinício",
            id: "Perluasan Perspektif Malam & Reset Tenang"
          },
          text: {
            ko: "밤 퇴근 후 3분간 창밖 밤하늘이나 조용한 공간을 바라보며 당일 지엽적인 스트레스를 날려 보냅니다.",
            en: "Gaze at the night sky or a quiet space for 3 minutes after work to release minor stresses.",
            ja: "夜、仕事が終わったら3分間夜空や静かな空間を見つめ、今日の細かい stress を 洗い流します。",
            zh: "下班后凝视夜空或安静空间3分钟，将全天琐碎的压力彻底释放。",
            es: "Mire el cielo nocturno durante 3 minutos después del trabajo para liberar el estrés.",
            fr: "Regardez le ciel nocturne 3 minutes après le travail pour libérer le stress.",
            de: "Blicken Sie abends 3 Minuten in den Nachthimmel, um Tagesstress loszulassen.",
            pt: "Olhe para o céu noturno por 3 minutos após o trabalho para liberar o estresse.",
            id: "Tatap langit malam selama 3 menit setelah bekerja untuk melepaskan stres seharian."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "악기를 직접 연주하지 못해도 효과가 있나요?",
            en: "Does it work if I can't play an instrument?",
            ja: "楽器を直接演奏できなくても効果はありますか？",
            zh: "不会演奏乐器也能生效吗？",
            es: "¿Funciona si no sé tocar ningún instrumento?",
            fr: "Est-ce efficace si je ne joue pas d'instrument ?",
            de: "Wirkt es auch, wenn ich kein Instrument spiele?",
            pt: "Funciona se eu não souber tocar um instrumento?",
            id: "Apakah tetap efektif jika saya tidak bisa bermain alat musik?"
          },
          answer: {
            ko: "네, 고유한 울림을 가진 오케스트라나 아쿠스틱 현악 음악을 집중해서 듣는 청각적 몰입만으로도 알파 뇌파 유도 효과는 동일하게 나타납니다.",
            en: "Yes, focused acoustic string music listening provides the exact same alpha wave induction benefits.",
            ja: "はい、アコースティックな弦楽を集中して聴く音響的没頭だけで、アルファ波誘導効果は同様に得られます。",
            zh: "是的，专注聆听富于共鸣的原声弦乐，在诱发α脑电波方面效果完全相同。",
            es: "Sí, escuchar atentamente música de cuerda acústica ofrece exactamente el mismo efecto de ondas alfa.",
            fr: "Oui, écouter attentivement de la musique à cordes acoustique offre exactement les mêmes bienfaits.",
            de: "Ja, das bewusste Anhören von Akustik-Saitenmusik hat denselben Alpha-Wellen-Effekt.",
            pt: "Sim, ouvir música de cordas acústica com foco oferece exatamente o mesmo efeito de ondas alfa.",
            id: "Ya, mendengarkan musik petik akustik secara fokus memberikan manfaat gelombang alfa yang sama."
          }
        },
        {
          question: {
            ko: "왜 수많은 할 일 중 1가지만 골라야 하나요?",
            en: "Why should I pick only 1 main task out of many?",
            ja: "なぜ多くのタスクから1つだけを選ぶべきなのですか？",
            zh: "为什么要在众多任务中只挑选1个？",
            es: "¿Por qué debo elegir solo 1 tarea principal entre muchas?",
            fr: "Pourquoi choisir 1 seule tâche principale parmi tant d'autres ?",
            de: "Warum sollte ich nur 1 Hauptaufgabe auswählen?",
            pt: "Por que devo escolher apenas 1 tarefa principal?",
            id: "Mengapa harus memilih 1 tugas utama saja dari sekian banyak?"
          },
          answer: {
            ko: "뇌는 여러 개의 동시다발 과제(Multitasking)를 수행할 때 과열됩니다. 1가지 결정적 핵심 과제에 에너지를 집중시키면 전전두엽의 자원이 효율적으로 배분됩니다.",
            en: "The brain overheats during multitasking. Focusing energy on 1 decisive task allocates prefrontal resources efficiently.",
            ja: "脳はマルチタスク時にオーバーヒートします。1つの決定的タスクに集中することで前頭前野の資源が効率的に分配されます。",
            zh: "大脑在多任务并行时极易过热。将精力集中于1项关键任务能最高效地分配前额叶资源。",
            es: "El cerebro se sobrecalienta con la multitarea. Concentrarse en 1 tarea clave asigna los recursos prefrontales eficientemente.",
            fr: "Le cerveau surchauffe en multitâche. Concentrer l'énergie sur 1 tâche alloue les ressources préfrontales efficacement.",
            de: "Multitasking überhitzt das Gehirn. Die Konzentration auf 1 Hauptaufgabe teilt die Ressourcen des präfrontalen Kortex optimal ein.",
            pt: "O cérebro superaquece no multitarefa. Focar em 1 tarefa chave aloca os recursos prefrontais com eficiência.",
            id: "Otak mengalami kelebihan beban saat multitasking. Fokus pada 1 tugas utama mengalokasikan sumber daya otak secara efisien."
          }
        }
      ]
    }
  },

  // 2. 에밀 졸라 (Émile Zola)
  {
    slug: 'zola-morning-writing-block',
    item: {
      id: 'zola-morning-writing-block',
      name: '에밀 졸라',
      gender: 'male',
      era: '근대',
      location: '프랑스',
      lifespan: '1840 - 1902',
      birthYear: 1840,
      bio: "'드레퓌스 사건'의 지성인이자 자연주의 문학을 대변하는 세기의 프랑스 대문호입니다.",
      habitName: '매일 아침 3시간 "Nulla dies sine linea" 엄격한 차단 글쓰기 루틴',
      tags: ['#몰입', '#글쓰기', '#생산성', '#의지력', '#계획'],
      timeOfDay: 'morning',
      requiredItems: ['서재 Desk', '만년필과 원고지'],
      frequency: 'daily',
      historicalStory: "프랑스의 대문호 에밀 졸라는 서재 책상에 'Nulla dies sine linea(하루도 한 줄의 글을 쓰지 않는 날이 없다)'라는 모토를 새겨 넣었습니다. 그는 매일 아침 9시부터 12시까지 외부 방해와 방문객을 철저히 차단하고 정해진 4쪽의 원고를 작성하는 철통 루틴을 30년 넘게 엄수했습니다.",
      sciencePrinciples: "시간 차단(Time Blocking)과 환경 차단은 뇌의 의지력 고갈을 방지합니다. 정해진 시간과 고정된 장소의 반복적 결합은 뇌의 기저핵(Basal Ganglia)에 습관 회로를 각인시켜 저항 없이 깊은 초몰입(Deep Work) 상태로 진입하게 만듭니다.",
      quote: "하루도 한 줄의 글을 쓰지 않는 날이 없게 하라 (Nulla dies sine linea).",
      trigger: "미루는 습관을 끊고 매일 일관된 생산성을 확보하고 싶을 때",
      modernGuide: [
        "매일 아침 동일한 시간(예: 9시~10시)을 딥 워크 차단 시간으로 지정합니다.",
        "해당 시간 동안 스마트폰 무음 설정 및 알림을 차단하고 작업에 몰입합니다.",
        "목표 분량(예: 글 1쪽 또는 코드 1모듈)을 완성할 때까지 유혹 요소를 거절합니다."
      ],
      actionName: "아침 1시간 디지털 차단 몰입 세션 (에밀 졸라 루틴)",
      sources: [
        "Henri Mitterand, *Émile Zola* (3 volumes, 1999-2002)",
        "Émile Zola, *Correspondence*"
      ]
    },
    translations: {
      title: {
        ko: "30년간 대작을 완성한 프랑스 거장? 에밀 졸라의 아침 3시간 몰입 루틴",
        en: "30 Years of Masterpieces? Émile Zola's Morning 3-Hour Deep Work Routine",
        ja: "30年間大作を書き続けた巨匠？エミール・ゾラの朝3時間超集中ルーティン",
        zh: "连续30年产出巨著？埃米尔·左拉的早晨3小时深度专注习惯",
        es: "¿30 años de obras maestras? La rutina de 3 horas de trabajo profundo de Émile Zola",
        fr: "30 ans de chefs-d'œuvre ? La routine de 3 heures de travail profond d'Émile Zola",
        de: "30 Jahre Meisterwerke? Émile Zolas morgendliche 3-Stunden-Deep-Work-Routine",
        pt: "30 anos de obras-primas? A rotina de 3 horas de trabalho profundo de Émile Zola",
        id: "30 Tahun Karya Besar? Rutinitas 3 Jam Kerja Mendalam Pagi Émile Zola"
      },
      description: {
        ko: "대문호 에밀 졸라가 30년 넘게 지켜온 'Nulla dies sine linea' 모토와 매일 아침 3시간 몰입 글쓰기 습관의 과학적 원리와 실천법.",
        en: "Learn the secrets behind Émile Zola's 30-year habit of morning 3-hour uninterrupted deep work.",
        ja: "エミール・ゾラが30年以上守ってきたモットーと毎朝3時間の集中執筆習慣を紹介します。",
        zh: "介绍左拉坚守30余年的“Nulla dies sine linea”格言与每天早晨3小时深度写作习惯。",
        es: "Conozca los secretos de la rutina de 3 horas de trabajo profundo de Émile Zola durante 30 años.",
        fr: "Découvrez les secrets de la routine de 3h de travail ininterrompu d'Émile Zola.",
        de: "Lernen Sie die Geheimnisse von Émile Zolas 30-jähriger Routine des 3-stündigen fokussierten Schreibens.",
        pt: "Conheça os segredos da rotina de 3 horas de trabalho profundo de Émile Zola durante 30 anos.",
        id: "Pelajari rahasia di balik rutinitas 3 jam kerja mendalam tanpa gangguan Émile Zola selama 30 tahun."
      },
      authority: {
        ko: "앙리 미테랑 전기 'Émile Zola' 및 에밀 졸라 서간집 사료",
        en: "Henri Mitterand Biography 'Émile Zola' & Émile Zola Correspondence",
        ja: "アンリ・ミトラン評伝「Émile Zola」および書簡集史料",
        zh: "亨利·米特朗传记《Émile Zola》与左拉书信集史料",
        es: "Biografía 'Émile Zola' de Henri Mitterand y Correspondencia de Zola",
        fr: "Biographie 'Émile Zola' par Henri Mitterand & Correspondance de Zola",
        de: "Henri Mitterand Biografie 'Émile Zola' & Briefwechsel von Zola",
        pt: "Biografia 'Émile Zola' de Henri Mitterand e Correspondência de Zola",
        id: "Biografi 'Émile Zola' oleh Henri Mitterand & Korespondensi Zola"
      },
      intro: {
        ko: "'목로주점', '나나' 등의 대작을 발표하고 '나는 고발한다!'로 지성의 양심을 증명한 프랑스의 대문호 에밀 졸라. 수십 년간 압도적인 양의 걸작을 흔들림 없이 써낼 수 있었던 비밀은 무엇이었을까요? ✍️\n\n졸라는 그의 서재 책상에 'Nulla dies sine linea(하루도 한 줄의 글을 쓰지 않는 날이 없다)'라는 문장을 새겨두었습니다. 그는 매일 아침 9시부터 12시까지 누구의 방문도 허용하지 않고 외부와 단절된 채 매일 4쪽의 원고를 작성했습니다. 기분이나 컨디션에 의존하지 않는 이 엄격한 차단 루틴이 세기의 문학 유산을 만들었습니다.\n\n오늘 BuildSelf에서는 에밀 졸라의 3시간 차단 몰입 루틴의 신경과학적 이점과 현대인을 위한 적용법을 공개합니다.",
        en: "Émile Zola, the titan of French literature. What was his secret to producing a vast legacy of masterpieces? ✍️\n\nZola engraved 'Nulla dies sine linea' on his desk. From 9 AM to 12 PM every morning, he blocked all visitors and wrote exactly 4 pages daily.\n\nToday, BuildSelf uncovers the neuroscience of Émile Zola's 3-hour deep work routine.",
        ja: "「居酒屋」「ナナ」などの大作を執筆したフランスの巨匠エミール・ゾラ。圧倒的な量の傑作を生み出し続けた秘密とは？ ✍️\n\nゾラはデスクに「一日一行も書かない日はない」と刻み、毎朝9時から12時まで外部を遮断して毎日4ページ執筆しました。\n\n今日のBuildSelfでは、エミール・ゾラの超集中ルーティンを紹介します。",
        zh: "创作出《小酒馆》《娜娜》等巨著的法国大文豪埃米尔·左拉。他几十年如一日产出丰硕巨著的秘诀何在？ ✍️\n\n左拉在书桌上刻下“一日不写整日无功”。每天早晨9点至12点，他拒绝一切拜访，坚持每天写满4页。\n\n今天，BuildSelf 将为您揭秘左拉3小时深度专注习惯的神经科学原理。",
        es: "Émile Zola, el titán de la literatura francesa. ¿Cuál era su secreto para crear tantas obras maestras? ✍️\n\nZola grabó 'Nulla dies sine linea' en su escritorio. De 9 a 12 cada mañana escribía 4 páginas sin interrupciones.\n\nHoy BuildSelf revela la neurociencia de la rutina de trabajo profundo de Zola.",
        fr: "Émile Zola, titan de la littérature française. Quel était son secret pour produire autant de chefs-d'œuvre ? ✍️\n\nZola a gravé 'Nulla dies sine linea' sur son bureau. De 9h à 12h chaque matin, il rédigeait 4 pages sans interruption.\n\nAujourd'hui BuildSelf vous dévoile la science de la routine d'Émile Zola.",
        de: "Émile Zola, der Titan der französischen Literatur. Was war sein Geheimnis für so viele Meisterwerke? ✍️\n\nZola gravierte 'Nulla dies sine linea' auf seinen Schreibtisch. Von 9 bis 12 Uhr schrieb er täglich 4 Seiten.\n\nHeute enthüllt BuildSelf die Neurowissenschaft hinter Zolas Deep-Work-Routine.",
        pt: "Émile Zola, o titã da literatura francesa. Qual era seu segredo para tantas obras-primas? ✍️\n\nZola gravou 'Nulla dies sine linea' em sua mesa. Das 9h às 12h todas as manhãs ele escrevia 4 páginas sem interrupções.\n\nHoje o BuildSelf revela a neurociência da rotina de Zola.",
        id: "Émile Zola, raksasa sastra Prancis. Apa rahasianya menghasilkan begitu banyak karya besar? ✍️\n\nZola mengukir 'Nulla dies sine linea' di mejanya. Dari jam 9 hingga 12 setiap pagi ia menulis 4 halaman tanpa gangguan.\n\nHari ini BuildSelf mengungkap sains di balik rutinitas kerja mendalam Zola."
      },
      whyTitle: {
        ko: "환경 차단을 통한 의지력 고갈 방지와 기저핵 자동화",
        en: "Willpower Conservation & Basal Ganglia Automation via Time Blocking",
        ja: "環境遮断による意志力枯渇防止と基底核自動化",
        zh: "通过环境隔绝防止意志力耗竭与激活基底核习惯自动化",
        es: "Conservación de Voluntad y Automatización Basal Mediante Bloqueo de Tiempo",
        fr: "Conservation de la Volonté & Automatisation via le Blocage du Temps",
        de: "Schonung der Willenskraft & Basalganglien-Automatisierung",
        pt: "Conservação da Vontade e Automatização via Bloqueio de Tempo",
        id: "Mencegah Kelelahan Keinginan & Otomatisasi Ganglia Basalis Melalui Blok Waktu"
      },
      whyDesc: {
        ko: "매번 '지금 일을 시작할까?' 고민하는 행위는 전전두엽의 포도당과 의지력을 낭비시킵니다.\n\n에밀 졸라처럼 정해진 시간과 차단된 장소에서 일관되게 행동하는 <strong>'시간 차단(Time Blocking)'</strong>은 선택에 드는 뇌너지를 제로로 만듭니다. 뇌의 기저핵(Basal Ganglia)이 작업 모드를 자동으로 인지하면 진입 장벽이 사라지고 초몰입 상태가 즉각 촉발됩니다.",
        en: "Deciding whether to work wastes prefrontal energy.\n\nConsistent <strong>'Time Blocking'</strong> in a distraction-free space reduces choice fatigue to zero. The basal ganglia automatically triggers deep focus.",
        ja: "作業を開始するか迷うだけで前頭前野のエネルギーが消費されます。\n\n決まった時間と場所での<strong>「タイムブロッキング」</strong>は選択の疲労をゼロにし、超集中状態を引き起こします。",
        zh: "犹豫“现在要不要开始工作”会白白消耗前额叶能量。\n\n在无干扰环境中进行<strong>“时间块(Time Blocking)”</strong>能将选择消耗降为零，直接由基底核触发深度专注。",
        es: "Decidir si trabajar consume energía prefrontal.\n\nEl <strong>'Bloqueo de Tiempo'</strong> constante reduce la fatiga de decisión a cero, activando el enfoque profundo automáticamente.",
        fr: "Hésiter à travailler épuise l'énergie préfrontale.\n\nLe <strong>'Blocage du Temps'</strong> réduit la fatigue décisionnelle à zéro et déclenche la concentration profonde.",
        de: "Die Entscheidung zum Arbeitsbeginn verbraucht Energie.\n\n<strong>'Time Blocking'</strong> reduziert Auswahlerfassung auf null und löst automatisch tiefen Fokus aus.",
        pt: "Decidir se vai trabalhar consome energia prefrontal.\n\nO <strong>'Bloqueio de Tempo'</strong> reduz a fadiga de decisão a zero, ativando o foco profundo automaticamente.",
        id: "Ragu untuk mulai bekerja membuang energi otak.\n\n<strong>'Blok Waktu'</strong> yang konsisten mengurangi kelelahan keputusan hingga nol dan memicu fokus mendalam."
      },
      cautionTitle: {
        ko: "분량보다 정해진 시간의 엄격한 차단에 집중하세요",
        en: "Focus on Strict Time Blocking Over Mere Output Quantity",
        ja: "量よりも定まった時間の厳格な遮断に集中しましょう",
        zh: "相比数量，更应专注于预定时间的严格隔绝",
        es: "Concéntrese en el bloqueo estricto del tiempo más que en la cantidad",
        fr: "Concentrez-vous sur le blocage temps plutôt que sur la quantité",
        de: "Konzentrieren Sie sich auf strikte Zeitblockade statt bloßer Menge",
        pt: "Concentre-se no bloqueio estrito de tempo mais do que na quantidade",
        id: "Fokuslah pada blok waktu ketat daripada sekadar jumlah hasil"
      },
      cautionDesc: {
        ko: "에밀 졸라의 모토 핵심은 '매일 거르지 않는 지속성'입니다. 완벽한 글을 쓰려 애쓰기보다 정해진 1시간 동안 외부 차단을 유지하는 습관 자체를 우선 확립하세요.",
        en: "The core of Zola's motto is consistency. Prioritize maintaining 1 hour of zero distraction over perfect output.",
        ja: "ゾラのモットーの核心は持続性です。完璧さを目指すより1時間の遮断習慣を確立してください。",
        zh: "左拉格言的核心在于无间断的持之以恒。相比追求完美，首要建立保持1小时零打扰的习惯。",
        es: "El núcleo del motto de Zola es la constancia. Priorice mantener 1 hora sin distracciones.",
        fr: "Le cœur du motto de Zola est la régularité. Priorisez 1 heure sans distraction.",
        de: "Zolas Motto basiert auf Kontinuität. Priorisieren Sie 1 Stunde ablenkungsfreie Zeit.",
        pt: "O foco de Zola é a consistência. Priorize manter 1 hora sem distrações.",
        id: "Inti moto Zola adalah konsistensi. Utamakan menjaga 1 jam tanpa gangguan."
      },
      steps: [
        {
          name: {
            ko: "아침 딥 워크 1시간 타임블록 설정",
            en: "Set Morning 1-Hour Deep Work Block",
            ja: "朝1時間のディープワークタイムブロック設定",
            zh: "设定清晨1小时深度工作时间块",
            es: "Establecer Bloque de Trabajo Profundo de 1 Hora",
            fr: "Régler un Bloc de Travail Profond d'Une Heure",
            de: "Einrichten eines 1-stündigen Deep-Work-Blocks",
            pt: "Definir Bloco de Trabalho Profundo de 1 Hora",
            id: "Atur Blok Kerja Mendalam 1 Jam Pagi"
          },
          text: {
            ko: "매일 아침 가장 맑은 시간대 중 1시간을 나만의 외부 방해 금지 타임블록으로 캘린더에 지정합니다.",
            en: "Designate 1 hour in your freshest morning window as an uninterrupted time block in your calendar.",
            ja: "毎朝最も頭が冴える時間帯の1時間を、外部邪魔禁止タイムブロックとしてカレンダーに設定します。",
            zh: "在每天早晨头脑最清醒的时间段内，在日历中划出1小时不受打扰的专属时间块。",
            es: "Reserve 1 hora en su horario matutino de mayor claridad como un bloque ininterrumpido.",
            fr: "Réservez 1 heure dans votre créneau matinal le plus frais comme un bloc ininterrompu.",
            de: "Tragen Sie 1 Stunde Ihrer klarsten Morgenzeit als ungestörten Block im Kalender ein.",
            pt: "Reserve 1 hora do seu período matinal mais produtivo como um bloco ininterrupto.",
            id: "Tentukan 1 jam di pagi hari saat pikiran paling segar sebagai blok waktu tanpa gangguan."
          }
        },
        {
          name: {
            ko: "디지털 방해 요소 완전 격리",
            en: "Total Isolation from Digital Distractions",
            ja: "デジタル邪魔要素の完全隔離",
            zh: "完全隔离数字干扰源",
            es: "Aislamiento Total de Distracciones Digitales",
            fr: "Isolation Totale des Distractions Numériques",
            de: "Vollständige Isolierung von digitalen Ablenkungen",
            pt: "Isolamento Total de Distrações Digitais",
            id: "Isolasi Total dari Gangguan Digital"
          },
          text: {
            ko: "타임블록 동안 스마트폰을 다른 방에 두거나 방해 금지 모드로 전환하고 웹 브라우저 탭을 모두 닫습니다.",
            en: "Put your phone in another room or turn on Do Not Disturb, and close unnecessary browser tabs.",
            ja: "タイムブロック中、スマホを別の部屋に置くかお休みモードにし、不要なタブを全て閉じます。",
            zh: "在时间块期间将手机放至隔壁房间或开启勿扰模式，关闭所有无关网页标签。",
            es: "Ponga el teléfono en otra habitación o active No molestar, y cierre las pestañas no esenciales.",
            fr: "Mettez votre téléphone dans une autre pièce et fermez les onglets inutiles.",
            de: "Legen Sie das Handy in einen anderen Raum und schließen Sie unnötige Tabs.",
            pt: "Coloque o celular em outro cômodo e feche as abas desnecessárias.",
            id: "Letakkan ponsel di ruangan lain atau aktifkan mode Jangan Ganggu, lalu tutup tab tak penting."
          }
        },
        {
          name: {
            ko: "하루도 빠짐없는 최소 일관성 기록",
            en: "Log Unbroken Daily Minimum Consistency",
            ja: "毎日欠かさない最小一貫性の記録",
            zh: "无间断记录每日最小一致性",
            es: "Registre la Consistencia Mínima Diaria",
            fr: "Consignez la Régularité Minimale Quotidienne",
            de: "Protokollieren Sie tägliche Mindestkontinuität",
            pt: "Registre a Consistência Mínima Diária",
            id: "Catat Konsistensi Minimal Tanpa Putus"
          },
          text: {
            ko: "작업 완료 직후 달력이나 체크리스트에 'Nulla dies sine linea' 완수 표시를 남기고 스스로를 격려합니다.",
            en: "Immediately mark your completed session on a calendar or habit tracker and encourage yourself.",
            ja: "作業直後、カレンダーやチェックリストに達成の印をつけて自分を褒めます。",
            zh: "工作完成后，立即在日历或打卡单上打钩完成标记，并给予自我肯定。",
            es: "Tras completar la sesión, marque el logro en su calendario y felicítese.",
            fr: "Après la session, marquez l'accomplissement sur votre calendrier et félicitez-vous.",
            de: "Markieren Sie die erledigte Session auf dem Kalender und loben Sie sich.",
            pt: "Após a sessão, marque a conquista no calendário e parabenize-se.",
            id: "Segera setelah selesai, beri tanda centang di kalender dan berikan apresiasi pada diri sendiri."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "아침에 급한 이메일이나 연락이 올까 봐 불안할 때는 어떻게 하나요?",
            en: "What if I feel anxious about missing urgent emails in the morning?",
            ja: "朝に急なメールや連絡が来るか不安な場合はどうすればいいですか？",
            zh: "担心早晨错过紧急邮件或联系怎么办？",
            es: "¿Qué hacer si me da ansiedad perder correos urgentes por la mañana?",
            fr: "Que faire si j'ai peur de manquer des e-mails urgents le matin ?",
            de: "Was tun bei Sorge wegen dringender E-Mails am Morgen?",
            pt: "O que fazer se tiver ansiedade por perder e-mails urgentes de manhã?",
            id: "Bagaimana jika khawatir melewatkan email mendesak di pagi hari?"
          },
          answer: {
            ko: "정말 긴급한 연락은 전화로 오게 되어 있습니다. 메일과 메시지 확인 시간을 아침 몰입 1시간 뒤로 미루는 것만으로도 작업 품질이 10배 올라갑니다.",
            en: "Truly urgent emergencies usually arrive via calls. Delaying email checks until after your 1 hour boosts quality 10x.",
            ja: "本当に緊急の連絡は電話で来ます。メールの確認を1時間遅らせるだけで作業品質が飛躍的に向上します。",
            zh: "真正的紧急事件往往会通过电话通知。将查收邮件延至专注1小时之后，工作质量能提升10倍。",
            es: "Las verdaderas urgencias llegan por llamada. Posponer la revisión de correos 1 hora aumenta la calidad 10 veces.",
            fr: "Les vraies urgences arrivent par téléphone. Reporter la vérification des e-mails d'une heure multiplie la qualité par 10.",
            de: "Echte Notfälle kommen per Anruf. Das Verschieben des E-Mail-Checks um 1 Stunde steigert die Qualität um das 10-fache.",
            pt: "Urgências reais chegam por ligação. Adiar a checagem de e-mails em 1 hora aumenta a qualidade em 10 vezes.",
            id: "Darurat sejati biasanya disampaikan lewat telepon. Menunda cek email 1 jam meningkatkan kualitas 10 kali lipat."
          }
        },
        {
          question: {
            ko: "3시간을 통째로 내기 힘든 직장인은 어떻게 적용해야 하나요?",
            en: "How should busy workers apply this if they can't afford 3 full hours?",
            ja: "3時間を確保するのが難しい会社員はどのように適用すればいいですか？",
            zh: "无法腾出整整3小时的上班族该如何应用？",
            es: "¿Cómo deben aplicarlo las personas ocupadas si no tienen 3 horas libres?",
            fr: "Comment l'appliquer quand on n'a pas 3 heures libres ?",
            de: "Wie können Berufstätige dies anwenden, wenn 3 Stunden fehlen?",
            pt: "Como pessoas ocupadas devem aplicar se não tiverem 3 horas livres?",
            id: "Bagaimana pekerja sibuk menerapkannya jika tidak punya waktu 3 jam penuh?"
          },
          answer: {
            ko: "3시간이라는 숫자보다 중요한 것은 '차단성'입니다. 출근 전 30분이나 퇴근 후 45분이라도 완전 차단된 상태로 딥 워크를 수행하면 충분합니다.",
            en: "Undistracted focus matters more than 3 hours. 30-45 minutes of total isolation before or after work is enough.",
            ja: "3時間という時間より大切なのは「遮断性」です。出勤前の30分や退勤後の45分でも完全遮断できれば十分です。",
            zh: "比起3小时这一数字，无打扰的纯粹性更为关键。即便只有上班前30分钟或下班后45分钟的完全隔离专注，也极为有效。",
            es: "El enfoque sin distracciones importa más que las 3 horas. 30 o 45 minutos de aislamiento total son suficientes.",
            fr: "L'isolation totale importe plus que 3 heures. 30 à 45 minutes de concentration absolue suffisent.",
            de: "Ungestörte Zeit zählt mehr als 3 Stunden. 30-45 Minuten absolute Isolierung reichen völlig aus.",
            pt: "O foco sem distrações importa mais do que 3 horas. 30 a 45 minutos de isolamento total são suficientes.",
            id: "Fokus tanpa gangguan lebih penting daripada 3 jam. 30-45 menit isolasi total sudah sangat cukup."
          }
        }
      ]
    }
  },

  // 3. 로잘린드 프랭클린 (Rosalind Franklin)
  {
    slug: 'rosalind-franklin-diffraction-focus',
    item: {
      id: 'rosalind-franklin-diffraction-focus',
      name: '로잘린드 프랭클린',
      gender: 'female',
      era: '현대',
      location: '영국',
      lifespan: '1920 - 1958',
      birthYear: 1920,
      bio: "DNA 이중구조 발견의 결정을 제공한 'Photo 51'의 주인공이자 세기의 물리학적 생물학자입니다.",
      habitName: '매일 0.1도 미세 오차 교정과 정량 데이터 수치 직접 검증 루틴',
      tags: ['#몰입', '#학습', '#집중', '#성공습관', '#생산성'],
      timeOfDay: 'afternoon',
      requiredItems: ['정밀 노트', '측정 도구 및 연필'],
      frequency: 'daily',
      historicalStory: "영국의 여성 과학자 로잘린드 프랭클린은 런던 킹스 콜리지 실험실에서 DNA 회절 사진을 촬영할 때 수분 함량과 X선 카메라 각도를 0.1도 단위로 정밀 조율했습니다. 그녀는 매일 수십 시간 동안 관측된 점들의 거리와 각도를 직접 수치 계산하며 타협 없는 치밀함으로 역사적 Photograph 51을 완성했습니다.",
      sciencePrinciples: "0.1 단위의 정밀 데이터 대조 및 시각-수치 검증 훈련은 뇌의 두정엽(Parietal Lobe) 공간 분석 회로와 좌뇌의 논리 검증 네트워크를 강화합니다. 이는 단순 느낌이나 추측에 의한 오류를 차단하고 확고한 객관적 정답을 도출하는 뇌 기반을 형성합니다.",
      quote: "과학과 일상생활은 분리될 수 없다. 과학은 나에게 진실에 대한 열정이다.",
      trigger: "작업의 정확도를 높이고 섬세한 치품질과 정밀함을 확보하고 싶을 때",
      modernGuide: [
        "핵심 프로젝트 완료 직전 10분간 '프랭클린 정밀 검수 세션'을 마련합니다.",
        "감이나 직관 대신 실제 수치, 지표, 철자, 오탈자를 1:1로 직접 대조 확인합니다.",
        "검증된 데이터 결과를 기록지에 서명하듯 남기고 다음 단계로 진행합니다."
      ],
      actionName: "오후 10분 정량 데이터 미세 검수 (프랭클린 루틴)",
      sources: [
        "Brenda Maddox, *Rosalind Franklin: The Dark Lady of DNA* (2002)",
        "King's College London Archives"
      ]
    },
    translations: {
      title: {
        ko: "DNA 구조 비밀을 밝힌 여성 과학자? 로잘린드 프랭클린의 0.1도 정밀 검수 루틴",
        en: "Scientist Behind DNA Secrets? Rosalind Franklin's 0.1-Degree Precision Routine",
        ja: "DNA構造の秘密を解き明かした科学者？ロザリンド・フランクリンの0.1度精密検証ルーティン",
        zh: "揭开DNA结构奥秘的女性科学家？罗莎琳德·富兰克林的0.1度精细核对习惯",
        es: "¿La científica tras los secretos del ADN? La rutina de precisión de 0.1 grados de Rosalind Franklin",
        fr: "La scientifique derrière les secrets de l'ADN ? La routine de précision à 0,1 degré de Rosalind Franklin",
        de: "Die Wissenschaftlerin hinter den DNA-Geheimnissen? Rosalind Franklins 0,1-Grad-Präzisionsroutine",
        pt: "A cientista por trás dos segredos do ADN? A rotina de precisão de 0,1 grau de Rosalind Franklin",
        id: "Ilmuwan di Balik Rahasia DNA? Rutinitas Presisi 0,1 Derajat Rosalind Franklin"
      },
      description: {
        ko: "DNA 이중나선 사진 'Photo 51'을 완성한 로잘린드 프랭클린의 타협 없는 0.1도 미세 오차 검수 습관과 현대인을 위한 정밀성 강화 가이드.",
        en: "Discover how Rosalind Franklin achieved groundbreaking accuracy through her 0.1-degree precision verification routine.",
        ja: "DNA二重らせん写真「Photo 51」を完成させたロザリンド・フランクリンの妥協なき精密検証習慣を紹介します。",
        zh: "介绍完成 DNA 双螺旋照片 Photo 51 的富兰克林通过0.1度精细核对达成史诗级精确度的习惯。",
        es: "Descubra cómo Rosalind Franklin logró una precisión revolucionaria con su rutina de verificación de 0.1 grados.",
        fr: "Découvrez comment Rosalind Franklin a atteint une précision historique grâce à sa routine de vérification.",
        de: "Erfahren Sie, wie Rosalind Franklin durch ihre 0,1-Grad-Präzisionsroutine weltverändernde Genauigkeit erzielte.",
        pt: "Descubra como Rosalind Franklin alcançou uma precisão histórica com sua rotina de verificação de 0,1 grau.",
        id: "Temukan bagaimana Rosalind Franklin mencapai akurasi bersejarah melalui rutinitas verifikasi presisi 0,1 derajat."
      },
      authority: {
        ko: "브렌다 매독스 전기 'Rosalind Franklin: The Dark Lady of DNA' 및 킹스 콜리지 아카이브",
        en: "Brenda Maddox Biography 'Rosalind Franklin' & King's College London Archives",
        ja: "ブレンダ・マドックス評伝「Rosalind Franklin」およびキングス・カレッジ・ロンドン史料",
        zh: "布伦达·马多克斯传记《Rosalind Franklin》与伦敦国王学院档案馆史料",
        es: "Biografía de Brenda Maddox 'Rosalind Franklin' y Archivos del King's College London",
        fr: "Biographie par Brenda Maddox 'Rosalind Franklin' & Archives du King's College London",
        de: "Brenda Maddox Biografie 'Rosalind Franklin' & Archive des King's College London",
        pt: "Biografia de Brenda Maddox 'Rosalind Franklin' e Arquivos do King's College London",
        id: "Biografi Brenda Maddox 'Rosalind Franklin' & Arsip King's College London"
      },
      intro: {
        ko: "생명과학 역사상 가장 위대한 발견인 DNA 이중나선 구조. 그 핵심적 결정 증거였던 사진 'Photograph 51'을 촬영해 낸 물리학적 생물학자, 로잘린드 프랭클린. 누구도 흉내 낼 수 없었던 그녀의 압도적 실험 정밀도는 어디서 비롯되었을까요? 🔬\n\n프랭클린은 킹스 콜리지의 차가운 실험실에서 X선 카메라의 각도와 습도를 0.1도, 0.1% 단위로 미세 조정했습니다. 눈앞에 나타난 회절 반사 점들의 수치를 감이나 직관에 의존하지 않고 매일 직접 계산하고 대조했습니다. 타협 없는 치밀함이 인류 역사를 바꾼 정답을 이끌어냈습니다.\n\n오늘 BuildSelf에서는 로잘린드 프랭클린의 정량 데이터 미세 검수 습관의 뇌과학적 원리와 적용 가이드를 소개합니다.",
        en: "Rosalind Franklin, the biophysicist who captured Photograph 51—the critical proof of DNA's double helix. Where did her peerless precision come from? 🔬\n\nShe adjusted X-ray cameras by 0.1-degree increments and manually cross-checked every diffraction parameter daily, refusing any guesswork.\n\nToday, BuildSelf presents the neuroscience behind Rosalind Franklin's precision checking routine.",
        ja: "DNA二重らせん構造の決定的証拠「Photograph 51」を撮影した生物物理学者、ロザリンド・フランクリン。彼女の圧倒的な実験の精密さはどこから生まれたのでしょうか？ 🔬\n\n彼女はX線線の角度を0.1度単位で微調整し、回折点の数値を取り妥協なく直接計算・照合しました。\n\n今日のBuildSelfでは、ロザリンド・フランクリンの精密検証習慣を紹介します。",
        zh: "捕获 DNA 双螺旋关键证据 Photograph 51 的生物物理学家罗莎琳德·富兰克林。她举世无双的实验精确度究竟来自何处？ 🔬\n\n她在实验室中以0.1度为单位微调X射线相机角度，坚持每天亲手计算并核对每一个衍射点的数据，绝不凭空猜测。\n\n今天 BuildSelf 将为您介绍富兰克林精细核对习惯背后的 neuroscience 原理。",
        es: "Rosalind Franklin, la biofísica que capturó la Fotografía 51, prueba crucial del ADN. ¿De dónde provenía su precisión incomparable? 🔬\n\nAjustaba las cámaras por incrementos de 0.1 grados y verificaba manualmente cada dato sin dar nada por sentado.\n\nHoy BuildSelf presenta la neurociencia tras la rutina de precisión de Franklin.",
        fr: "Rosalind Franklin, la biophysicienne qui a capturé la Photo 51. D'où lui venait cette précision sans égale ? 🔬\n\nElle ajustait les appareils à 0,1 degré près et vérifiait manuellement chaque donnée sans spéculer.\n\nAujourd'hui BuildSelf vous dévoile la science de cette routine de vérification.",
        de: "Rosalind Franklin, die Biophysikerin hinter Foto 51. Woher stammte ihre unvergleichliche Genauigkeit? 🔬\n\nSie justierte Röntgenkameras in 0,1-Grad-Schritten und prüfte alle Daten manuell ohne Vermutungen.\n\nHeute präsentiert BuildSelf die Wissenschaft hinter Franklins Präzisionsroutine.",
        pt: "Rosalind Franklin, a biofísica que capturou a Fotografia 51. De onde vinha sua precisão sem igual? 🔬\n\nEla ajustava as câmeras em incrementos de 0,1 grau e verificava manualmente cada dado sem adivinhações.\n\nHoje o BuildSelf apresenta a neurociência por trás da rotina de precisão de Franklin.",
        id: "Rosalind Franklin, biofisikawan pencipta Foto 51. Dari mana datangnya presisi tak tertandinginya? 🔬\n\nIa menyesuaikan kamera X-ray dengan pergeseran 0,1 derajat dan memverifikasi data secara manual tanpa menebak-nebak.\n\nHari ini BuildSelf menyajikan sains di balik rutinitas presisi Franklin."
      },
      whyTitle: {
        ko: "두정엽 공간 수치 대조를 통한 인지 오류 차단과 품질 극대화",
        en: "Parietal Lobe Data Verification & Error Prevention",
        ja: "頭頂葉空間数値照合による認知エラー遮断と品質極大化",
        zh: "通过顶叶数据对比消除认知偏差与提升品质",
        es: "Verificación de Datos en el Lóbulo Parietal y Prevención de Errores",
        fr: "Vérification des Données dans le Lobe Pariétal & Prévention des Erreurs",
        de: "Datenverifizierung im Parietallappen & Fehlervermeidung",
        pt: "Verificação de Dados no Lóbulo Parietal e Prevenção de Erros",
        id: "Verifikasi Data Lobus Parietal & Pencegahan Kesalahan"
      },
      whyDesc: {
        ko: "뇌는 익숙한 작업을 할 때 '대략 맞겠지'라는 휴리스틱(Heuristics) 착각에 빠져 치명적 오탈자나 수치 오류를 지나치기 쉽습니다.\n\n프랭클린처럼 실제 수치와 지표를 1:1로 손으로 직접 짚으며 검수하는 <strong>'정량 데이터 미세 대조'</strong>는 좌뇌 논리 회로와 두정엽 공간 인지를 동시 활성화합니다. 뇌의 섣부른 추측을 차단하고 완벽한 오차 제로 상태를 달성하게 만듭니다.",
        en: "The brain easily falls into heuristic shortcuts during familiar work, overlooking fatal errors.\n\nManual 1:1 <strong>'Precision Data Verification'</strong> activates left-brain logic and parietal spatial processing, stopping reckless assumptions.",
        ja: "脳は慣れた作業で思い込みに陥り、致命的なエラーを見落としがちです。\n\n数値と指標を1:1で照合する<strong>「精密データ検証」</strong>は脳の過剰な推測を遮断し、エラーゼロを達成します。",
        zh: "大脑在处理熟悉事务时极易掉入启发式直觉陷阱，忽略致命错误。\n\n手扣手 1:1 的<strong>“精细数据核对”</strong>能同时激活左脑逻辑与顶叶空间认知，杜绝凭空假设。",
        es: "El cerebro recurre a atajos heurísticos en tareas conocidas, pasando por alto errores fatales.\n\nLa <strong>'Verificación de Datos de Precisión'</strong> 1:1 frena suposiciones apresuradas.",
        fr: "Le cerveau utilise des raccourcis heuristiques, ignorant des erreurs fatales.\n\nLa <strong>'Vérification de Précision des Données'</strong> 1:1 bloque les suppositions hâtives.",
        de: "Das Gehirn nutzt bei vertrauten Aufgaben Heuristiken und übersieht Fehler.\n\nDie 1:1-<strong>'Präzisions-Datenprüfung'</strong> stoppt voreilige Annahmen.",
        pt: "O cérebro usa atalhos heurísticos em tarefas conhecidas, ignorando erros fatais.\n\nA <strong>'Verificação de Dados de Precisão'</strong> 1:1 interrompe suposições precipitadas.",
        id: "Otak sering menggunakan pintasan heuristik saat bekerja, mengabaikan kesalahan fatal.\n\n<strong>'Verifikasi Data Presisi'</strong> 1:1 menghentikan asumsi terburu-buru."
      },
      cautionTitle: {
        ko: "마무리 단계에서 속도보다 확실성을 우선하세요",
        en: "Prioritize Certainty Over Speed During Final Inspection",
        ja: "仕上げ段階で速度より確実性を優先しましょう",
        zh: "在收尾阶段，务必置确定性于速度之上",
        es: "Priorice la certeza sobre la velocidad en la revisión final",
        fr: "Priorisez la certitude sur la vitesse lors de la révision finale",
        de: "Priorisieren Sie Gewissheit vor Geschwindigkeit bei der Endprüfung",
        pt: "Priorize a certeza sobre a velocidade na revisão final",
        id: "Utamakan kepastian daripada kecepatan saat pemeriksaan akhir"
      },
      cautionDesc: {
        ko: "마지막 순간 서두르면 사소한 오탈자나 계산 실수가 전체 결과물의 신뢰도를 망칩니다. 검수 10분 동안만큼은 속도를 낮추고 꼼꼼함에 온전히 집중하세요.",
        en: "Rushing at the last moment ruins credibility through minor oversights. Slow down for 10 minutes.",
        ja: "最後の瞬間に焦ると些細なミスが全体の信頼性を損ないます。検証の10分間は速度を落として集中してください。",
        zh: "最后时刻赶进度极易因微小疏漏毁掉整体信任。在核对的10分钟内放慢速度，全神贯注。",
        es: "Apurarse al final arruina la credibilidad por descuidos. Baje el ritmo durante 10 minutos.",
        fr: "Se précipiter à la fin ruine la crédibilité par omission. Ralentissez pendant 10 minutes.",
        de: "Eile in letzter Minute ruiniert die Glaubwürdigkeit. Verlangsamen Sie für 10 Minuten das Tempo.",
        pt: "Apressar-se no final estraga a credibilidade por descuidos. Diminua o ritmo por 10 minutos.",
        id: "Terburu-buru di akhir merusak kredibilitas karena kelalaian kecil. Pelan-pelan selama 10 menit."
      },
      steps: [
        {
          name: {
            ko: "10분 정밀 검수 골든 타임 확보",
            en: "Secure 10-Minute Precision Inspection Window",
            ja: "10分間精密検証ゴールデンタイムの確保",
            zh: "锁定10分钟精细核对黄金时间",
            es: "Asegurar 10 Minutos de Revisión de Precisión",
            fr: "Réserver 10 Minutes de Révision de Précision",
            de: "Sichern von 10 Minuten Präzisionsprüfzeit",
            pt: "Reservar 10 Minutos de Revisão de Precisão",
            id: "Sediakan 10 menit Waktu Emas Verifikasi Presisi"
          },
          text: {
            ko: "보고서 제출, 코드 배포, 기획안 완결 직전 10분을 오직 오류 검수만을 위한 전용 시간으로 확보합니다.",
            en: "Reserve 10 minutes immediately before submitting reports or deploying code solely for error verification.",
            ja: "レポート提出やコードデプロイの直前10分を、エラー検証専用の時間として確保します。",
            zh: "在提交报告、发布代码或完成方案前的最后10分钟，划出专门用于核对错漏的专属时间。",
            es: "Reserve 10 minutos antes de entregar informes o publicar código exclusivamente para verificar errores.",
            fr: "Réservez 10 minutes avant de soumettre un rapport ou déployer du code uniquement pour vérifier.",
            de: "Reservieren Sie 10 Minuten vor der Abgabe von Berichten oder Code-Deployments nur für die Prüfung.",
            pt: "Reserve 10 minutos antes de entregar relatórios ou implantar código exclusivamente para verificação.",
            id: "Sediakan 10 menit tepat sebelum menyerahkan laporan atau rilis kode khusus untuk verifikasi kesalahan."
          }
        },
        {
          name: {
            ko: "지표 및 수치 1:1 오프라인 대조",
            en: "1:1 Manual Metric & Data Cross-Checking",
            ja: "指標および数値の1:1オフライン照合",
            zh: "数据与指标 1:1 手工精细比对",
            es: "Cruce Manual 1:1 de Datos y Métricas",
            fr: "Vérification Croisée Manuelle 1:1 des Données",
            de: "1:1 manueller Abgleich von Daten und Zahlen",
            pt: "Cruzamento Manual 1:1 de Dados e Métricas",
            id: "Pemeriksaan Silang Data & Metrik 1:1 Secara Manual"
          },
          text: {
            ko: "화면의 수치나 텍스트를 손가락이나 펜 끝으로 짚어가며 원본 출처 데이터와 1:1로 정밀 확인합니다.",
            en: "Point your finger or pen tip at values on screen and compare them 1:1 against raw source data.",
            ja: "画面の数値やテキストを指やペン先で指しながら、元データと1:1で精密に確認します。",
            zh: "用手指或笔尖指着屏幕上的数值与文本，与原始数据源逐一进行 1:1 精确比对。",
            es: "Señale los valores en pantalla con un bolígrafo y compárelos 1:1 con la fuente original.",
            fr: "Pointez les valeurs à l'écran avec un stylo et comparez-les 1:1 avec la source d'origine.",
            de: "Zeigen Sie mit dem Stift auf Werte am Bildschirm und vergleichen Sie sie 1:1 mit der Quelle.",
            pt: "Apontando os valores na tela com uma caneta, compare-os 1:1 com a fonte original.",
            id: "Tunjuk nilai di layar dengan pena dan bandingkan 1:1 dengan sumber data asli."
          }
        },
        {
          name: {
            ko: "검수 완료 사인 및 품질 확정",
            en: "Verification Sign-off & Quality Confirmation",
            ja: "検証完了サインと品質確定",
            zh: "核对签字与质量终审确认",
            es: "Firma de Verificación y Confirmación de Calidad",
            fr: "Validation de Révision & Confirmation Qualité",
            de: "Freigabe der Prüfung & Qualitätsbestätigung",
            pt: "Assinatura de Verificação e Confirmação de Qualidade",
            id: "Tanda Tangan Verifikasi & Konfirmasi Kualitas"
          },
          text: {
            ko: "검수를 마친 후 노트에 '오차 검수 완료' 표시나 서명을 남기고 완벽한 품질로 최종 작업을 마무리합니다.",
            en: "After checking, write 'Verification Complete' or initial your log, finishing with 100% confidence.",
            ja: "検証完了後、ノートに「検証完了」のサインを残し、完璧な品質で最終作業を締めくくります。",
            zh: "完成核对后，在记录本上写下“精细核对完毕”标记或签名，以完美品质结束工作。",
            es: "Tras revisar, escriba 'Verificación Completa' en su cuaderno y finalice con total confianza.",
            fr: "Après révision, inscrivez 'Vérification Terminée' et finalisez en toute confiance.",
            de: "Schreiben Sie nach der Prüfung 'Prüfung abgeschlossen' auf und schließen Sie die Arbeit ab.",
            pt: "Após revisar, escreva 'Verificação Concluída' e finalize com total confiança.",
            id: "Setelah memverifikasi, catat 'Verifikasi Selesai' dan selesaikan pekerjaan dengan percaya diri."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "매번 꼼꼼히 검수하는 데 시간이 너무 많이 걸리지 않나요?",
            en: "Doesn't detailed cross-checking take too much time every day?",
            ja: "毎回緻密に検証するのに時間がかかりすぎませんか？",
            zh: "每次都进行精细核对会不会太耗费时间？",
            es: "¿No se pierde mucho tiempo haciendo revisiones tan detalladas?",
            fr: "La vérification minutieuse ne prend-elle pas trop de temps ?",
            de: "Dauert das detaillierte Prüfen nicht zu lange?",
            pt: "Fazer revisões tão detalhadas não toma tempo demais?",
            id: "Apakah verifikasi mendalam tidak memakan terlalu banyak waktu?"
          },
          answer: {
            ko: "나중에 오타나 숫자가 틀려 수정하고 사과하고 재작업하는 데 드는 시간이 10배 더 큽니다. 사전 10분 검수가 결국 가장 빠른 길입니다.",
            en: "Fixing mistakes and redoing work later takes 10x more time. 10 minutes upfront is the fastest route.",
            ja: "後でエラーを修正してやり直す時間のほうが10倍大きいです。事前の10分検証が最も速い道です。",
            zh: "事后因错误而修改、重做和致歉所消耗的时间要多出10倍。前置10分钟核对才是最快的捷径。",
            es: "Corregir errores y rehacer trabajo después toma 10 veces más tiempo. 10 minutos antes es más rápido.",
            fr: "Corriger des erreurs et refaire le travail prend 10 fois plus de temps. 10 minutes en amont est la voie la plus rapide.",
            de: "Fehler nachträglich zu korrigieren dauert 10-mal länger. 10 Minuten vorab sparen Zeit.",
            pt: "Corrigir erros e refazer o trabalho depois toma 10 vezes mais tempo. 10 minutos antes é mais rápido.",
            id: "Memperbaiki kesalahan dan mengulang pekerjaan memakan waktu 10x lebih lama. 10 menit di awal adalah jalur tercepat."
          }
        },
        {
          question: {
            ko: "텍스트나 일반 직무에서도 정량 대조를 쓸 수 있나요?",
            en: "Can quantitative data checking be applied to text or general tasks?",
            ja: "テキストや一般的な業務でも定量照合を適用できますか？",
            zh: "文案或日常行政工作也能应用这一数据对比法吗？",
            es: "¿Se puede aplicar esta verificación de datos a textos o tareas generales?",
            fr: "Peut-on appliquer cette vérification de données aux textes ou tâches générales ?",
            de: "Kann man diese Datenprüfung auf Texte oder allgemeine Aufgaben anwenden?",
            pt: "Pode-se aplicar essa verificação de dados a textos ou tarefas gerais?",
            id: "Apakah verifikasi data ini bisa diterapkan pada teks atau tugas umum?"
          },
          answer: {
            ko: "네! 날짜, 맞춤법, 첨부파일 링크, 고객명 등 오류가 나기 쉬운 핵심 요소 3가지를 정량적 체크리스트로 만들어 동일하게 적용할 수 있습니다.",
            en: "Yes! Create a checklist for dates, names, links, and typos to apply the exact same precision model.",
            ja: "はい！日付、人名、リンク、誤字脱字などエラーになりやすい要素をリスト化して適用できます。",
            zh: "当然可以！将日期、人名、链接、错别字等易错要素制成量化清单，同样适用此精细比对法。",
            es: "¡Sí! Cree una lista de verificación para fechas, nombres, enlaces y faltas de ortografía.",
            fr: "Oui ! Créez une liste de contrôle pour les dates, noms, liens et fautes d'orthographe.",
            de: "Ja! Erstellen Sie eine Checkliste für Daten, Namen, Links und Rechtschreibung.",
            pt: "Sim! Crie uma lista de verificação para datas, nomes, links e erros de ortografia.",
            id: "Tentu! Buat daftar periksa untuk tanggal, nama, tautan, dan ejaan untuk menerapkannya."
          }
        }
      ]
    }
  },

  // 4. 오토 폰 비스마르크 (Otto von Bismarck)
  {
    slug: 'bismarck-morning-ride-priority',
    item: {
      id: 'bismarck-morning-ride-priority',
      name: '오토 폰 비스마르크',
      gender: 'male',
      era: '근대',
      location: '독일',
      lifespan: '1815 - 1898',
      birthYear: 1815,
      bio: "독일 통일을 완수하고 현대 복지 제도의 기틀을 마련한 세기의 '철혈수상'입니다.",
      habitName: '매일 아침 승마 후 국정 3대 핵심 우선순위 기재 루틴',
      tags: ['#의사결정', '#계획', '#생산성', '#몰입', '#단순화'],
      timeOfDay: 'morning',
      requiredItems: ['승마/신체 활동', '노트와 만년필'],
      frequency: 'daily',
      historicalStory: "독일의 재상 비스마르크는 매일 아침 베를린 근교나 바르친 숲에서 1시간 승마를 즐기며 신체 감각을 깨웠습니다. 산책과 승마를 마치고 서재로 돌아온 직후, 그는 하루 수십 건의 쏟아지는 외교 전보 중 가장 크고 중대한 우선순위 3가지만을 친필로 선별해 기록한 뒤 국정을 지휘했습니다.",
      sciencePrinciples: "아침 신체 활동(승마/유산소)은 뇌유래신경영양인자(BDNF)와 도파민 분비를 촉진하여 신경가소성을 높입니다. 운동 직후 핵심 과제를 3가지로 압축(Rule of 3)하는 행위는 선택 과부하(Decision Fatigue)를 막고 우선순위에 전전두엽 자원을 몰입시킵니다.",
      quote: "어리석은 자는 자신의 경험에서 배운다고 하지만, 나는 타인의 경험에서 배운다.",
      trigger: "해야 할 일이 너무 많아 마비 상태가 오거나 최고효율 의사결정이 필요할 때",
      modernGuide: [
        "아침 15~20분 가벼운 러닝, 산책, 스트레칭으로 몸에 열을 냅니다.",
        "샤워나 휴식 직후 책상에 앉아 오늘 할 일 중 가장 파급력이 큰 3가지만 선별합니다.",
        "선별된 3가지 과제를 완료하기 전까지 다른 잡다한 요청을 뒤로 미룹니다."
      ],
      actionName: "아침 신체 활성화 & TOP 3 우선순위 선별 (비스마르크 루틴)",
      sources: [
        "Otto von Bismarck, *Gedanken und Erinnerungen* (1898)",
        "A.J.P. Taylor, *Bismarck: The Man and the Statesman*"
      ]
    },
    translations: {
      title: {
        ko: "유럽 대륙의 판도를 바꾼 철혈수상? 비스마르크의 아침 승마 & TOP 3 우선순위 루틴",
        en: "The Iron Chancellor's Secret? Otto von Bismarck's Morning Ride & TOP 3 Priorities",
        ja: "欧州の版図を塗り替えた鉄血宰相？ビスマルクの朝の乗馬＆TOP3優先順位ルーティン",
        zh: "重塑欧洲格局的铁血宰相？俾斯麦的清晨骑马与TOP 3优先级习惯",
        es: "¿El Secreto del Canciller de Hierro? La rutina de equitación y TOP 3 prioridades de Bismarck",
        fr: "Le secret du Chancelier de Fer ? La routine d'équitation et TOP 3 priorités de Bismarck",
        de: "Das Geheimnis des Eisernen Kanzlers? Bismarcks Ausritt & TOP-3-Prioritäten-Routine",
        pt: "O Segredo do Chanceler de Ferro? A rotina de equitação e TOP 3 prioridades de Bismarck",
        id: "Rahasia Kanselir Besi? Rutinitas Berkuda Pagi & TOP 3 Prioritas Bismarck"
      },
      description: {
        ko: "독일 통일을 이끈 재상 비스마르크가 아침 운동 직후 수십 가지 과제 중 단 3가지 핵심만 뽑아낸 선택과 집중의 과학.",
        en: "Discover how Iron Chancellor Otto von Bismarck selected only 3 core priorities every morning after his ride.",
        ja: "ドイツ統一を率いた宰相ビスマルクが朝の運動直後に数十の課題から3つだけを抽出した選択と集中の科学を紹介します。",
        zh: "介绍统一德国的宰相俾斯麦在早晨运动后，从几十项事务中精选3项核心优先级的决策科学。",
        es: "Descubra cómo Bismarck seleccionaba solo 3 prioridades clave cada mañana tras su paseo a caballo.",
        fr: "Découvrez comment le Chancelier Bismarck sélectionnait 3 priorités clés chaque matin après son cheval.",
        de: "Erfahren Sie, wie Bismarck jeden Morgen nach dem Ausritt nur 3 Kernprioritäten auswählte.",
        pt: "Descubra como Bismarck selecionava apenas 3 prioridades chave todas as manhãs após cavalgar.",
        id: "Temukan bagaimana Bismarck memilih 3 prioritas utama setiap pagi setelah berkuda."
      },
      authority: {
        ko: "비스마르크 회고록 'Gedanken und Erinnerungen' 및 전기 사료",
        en: "Bismarck Memoirs 'Gedanken und Erinnerungen' & Historical Biographies",
        ja: "ビスマルク回顧録「Gedanken und Erinnerungen」および史料",
        zh: "俾斯麦回忆录《Gedanken und Erinnerungen》与历史传记史料",
        es: "Memorias de Bismarck 'Gedanken und Erinnerungen' y Biografías Históricas",
        fr: "Mémoires de Bismarck 'Gedanken und Erinnerungen' & Biographies Historiques",
        de: "Bismarcks Memoiren 'Gedanken und Erinnerungen' & Historische Biografien",
        pt: "Memórias de Bismarck 'Gedanken und Erinnerungen' e Biografias Históricas",
        id: "Memoar Bismarck 'Gedanken und Erinnerungen' & Biografi Sejarah"
      },
      intro: {
        ko: "19세기 유럽 복잡한 외교 판도를 지배하고 현대 복지 국가의 틀을 다진 독일의 철혈재상 오토 폰 비스마르크. 쏟아지는 당면 과제 속에서 그는 어떻게 마비에 빠지지 않고 정밀한 의사결정을 내렸을까요? 🐎\n\n비스마르크는 매일 아침 상쾌한 바람 속에서 1시간 동안 승마를 하며 신체 혈류를 끌어올렸습니다. 운동을 마친 후 서재 책상에 앉아 하루 수십 건의 보고서 중 가장 중대한 파급력을 가진 '단 3가지 우선순위'만을 기재하고 집중했습니다. 이 단순화가 강대국 독일의 통일을 달성한 원동력이었습니다.\n\n오늘 BuildSelf에서는 비스마르크의 신체 활성화와 TOP 3 선택 집중 루틴을 소개합니다.",
        en: "Otto von Bismarck, the Iron Chancellor who unified Germany and reshaped Europe. How did he handle mountains of tasks without decision fatigue? 🐎\n\nEvery morning, Bismarck rode his horse for an hour to stimulate blood flow. Right after, he chose only 3 top priorities out of dozens of cables.\n\nToday, BuildSelf reveals the science of Bismarck's physical activation and TOP 3 focus routine.",
        ja: "19世紀の欧州を動かした鉄血宰相オットー・フォン・ビスマルク。膨大な課題の中で彼はどのように精密な意思決定を下したのでしょうか？ 🐎\n\n毎朝1時間乗馬をして血流を高め、直後に数十の報告から最重要の「3つの優先順位」だけをノートに記録しました。\n\n今日のBuildSelfでは、ビスマルクのTOP 3選択集中ルーティンを紹介します。",
        zh: "统一德国并重塑欧洲格局的“铁血宰相”俾斯麦。面对源源不断的报表与电报，他是如何保持果断决策的？ 🐎\n\n每天早晨他骑马1小时促进血液循环，运动后坐在书桌前，仅挑选出最具决定力的“3项核心优先级”。\n\n今天 BuildSelf 将为您介绍俾斯麦身体激活与 TOP 3 专注习惯背后的科学。",
        es: "Otto von Bismarck, el Canciller de Hierro que unificó Alemania. ¿Cómo manejaba montañas de tareas sin fatiga mental? 🐎\n\nCada mañana montaba a caballo 1 hora. Justo después elegía solo 3 prioridades principales de entre docenas.\n\nHoy BuildSelf revela la ciencia tras la rutina de enfoque TOP 3 de Bismarck.",
        fr: "Otto von Bismarck, le Chancelier de Fer qui unifia l'Allemagne. Comment gérait-il des montagnes de tâches sans s'épuiser ? 🐎\n\nChaque matin, il montait à cheval 1 heure. Juste après, il choisissait 3 priorités parmi des dizaines.\n\nAujourd'hui BuildSelf vous dévoile la science de la routine TOP 3 de Bismarck.",
        de: "Otto von Bismarck, der Eisener Kanzler. Wie bewältigte er Aufgabenberge ohne Entscheidungsermüdung? 🐎\n\nJeden Morgen ritt er 1 Stunde. Direkt danach wählte er nur 3 Hauptprioritäten aus.\n\nHeute enthüllt BuildSelf die Wissenschaft hinter Bismarcks TOP-3-Fokus-Routine.",
        pt: "Otto von Bismarck, o Chanceler de Ferro. Como ele lidava com montanhas de tarefas sem fadiga mental? 🐎\n\nTodas as manhãs ele cavalgava por 1 hora. Logo após, escolhia apenas 3 prioridades principais entre dezenas.\n\nHoje o BuildSelf revela a ciência por trás da rotina TOP 3 de Bismarck.",
        id: "Otto von Bismarck, Kanselir Besi penyatu Jerman. Bagaimana ia mengelola tumpukan tugas tanpa kelelahan? 🐎\n\nSetiap pagi ia berkuda selama 1 jam. Tepat setelahnya, ia memilih 3 prioritas utama dari puluhan tugas.\n\nHari ini BuildSelf mengungkap sains di balik rutinitas fokus TOP 3 Bismarck."
      },
      whyTitle: {
        ko: "운동 후 도파민 활성화와 3의 법칙(Rule of 3)을 통한 의사결정 단순화",
        en: "Post-Exercise Dopamine Spike & Rule of 3 Decision Simplification",
        ja: "運動後のドパミン活性化と3の法則（Rule of 3）による意思決定単純化",
        zh: "运动后多巴胺激活与“3的法则”简化决策",
        es: "Spike de Dopamina Post-Ejercicio y Regla de 3 para Simplificar Decisiones",
        fr: "Pic de Dopamine Post-Exercice & Règle de 3 pour Simplifier les Décisions",
        de: "Post-Workout-Dopamin-Schub & Regel der 3 zur Entscheidungsvereinfachung",
        pt: "Pico de Dopamina Pós-Exercício e Regra de 3 para Simplificar Decisões",
        id: "Lonjakan Dopamin Pasca Olahraga & Aturan 3 untuk Menyederhanakan Keputusan"
      },
      whyDesc: {
        ko: "의사결정 과제 항목이 5개를 넘어가면 뇌의 선택 집행 회로에 병목 현상이 발생하여 과부하가 걸립니다.\n\n비스마르크처럼 아침 유산소 운동으로 BDNF와 도파민을 분비시킨 직후 <strong>'3의 법칙(Rule of 3)'</strong>에 따라 핵심 3가지에 몰입하면, 뇌는 불필요한 노이즈를 완전 제거하고 본질적인 과제 해결에 모든 에너지를 집약합니다.",
        en: "More than 5 choice items bottleneck executive processing in the brain.\n\nApplying the <strong>'Rule of 3'</strong> right after morning cardio concentrates energy on vital goals while filtering distraction.",
        ja: "タスクが5つを超えると脳の選択回路がボトルネックを起こします。\n\n朝の運動直後に<strong>「3の法則（Rule of 3）」</strong>で3つに絞ると、脳は不要なノイズを除去して本質に集中します。",
        zh: "待办事项超过5项会导致大脑决策回路发生堵塞过载。\n\n在早晨有氧运动后应用<strong>“3的法则(Rule of 3)”</strong>，能帮助大脑滤除噪音，将精力集中于最本质的任务。",
        es: "Más de 5 tareas colapsan el procesamiento ejecutivo del cerebro.\n\nAplicar la <strong>'Regla de 3'</strong> tras el ejercicio matutino enfoca toda la energía filtrando distracciones.",
        fr: "Plus de 5 tâches engorgent le traitement exécutif du cerveau.\n\nAppliquer la <strong>'Règle de 3'</strong> après le sport concentre l'énergie sur l'essentiel.",
        de: "Mehr als 5 Aufgaben überlasten die Ausführungsfunktion des Gehirns.\n\nDie <strong>'Regel der 3'</strong> nach dem Morgen-Workout bündelt die Energie auf Kernziele.",
        pt: "Mais de 5 tarefas sobrecarregam o processamento do cérebro.\n\nAplicar a <strong>'Regra de 3'</strong> após o exercício matinal concentra a energia filtrando distrações.",
        id: "Lebih dari 5 tugas menyumbat pemrosesan eksekutif otak.\n\nMenerapkan <strong>'Aturan 3'</strong> pasca olahraga fokus energi pada tujuan utama sambil memfilter gangguan."
      },
      cautionTitle: {
        ko: "우선순위 3가지가 끝나기 전에는 소소한 일에 손대지 마세요",
        en: "Do Not Touch Minor Tasks Until the TOP 3 Are Finished",
        ja: "TOP 3が終わるまでは細かい作業に手をつけないでください",
        zh: "在完成 TOP 3 之前，绝不插手琐碎细事",
        es: "No toque tareas menores hasta terminar las 3 principales",
        fr: "Ne touchez pas aux tâches secondaires avant d'avoir fini le TOP 3",
        de: "Fassen Sie keine kleineren Aufgaben an, bevor die TOP 3 erledigt sind",
        pt: "Não toque em tarefas menores até terminar as 3 principais",
        id: "Jangan sentuh tugas kecil sebelum TOP 3 selesai"
      },
      cautionDesc: {
        ko: "쉬워 보이는 잡무에 먼저 손을 대는 행위는 '가짜 성취감'을 주지만 핵심 과제를 미루게 만듭니다. 가장 중요한 3가지가 완료될 때까지 메일함이나 사소한 정리를 뒤로 미루세요.",
        en: "Starting with easy tasks gives fake satisfaction while delaying true progress. Delay minor tasks until TOP 3 are done.",
        ja: "簡単なタスクから始めると「偽の達成感」が得られますが、重要タスクが後回しになります。TOP 3完了まで我慢しましょう。",
        zh: "先做简单杂务会带来“假性成就感”，却会导致核心任务拖延。在完成 TOP 3 前，请置后琐碎事务。",
        es: "Empezar por tareas fáciles da una falsa satisfacción. Posponga lo secundario hasta completar el TOP 3.",
        fr: "Commencer par des tâches faciles donne une fausse satisfaction. Reportez le reste jusqu'à la fin du TOP 3.",
        de: "Einfache Aufgaben zuerst zu erledigen erzeugt ein falsches Erfolgsgefühl. Verschieben Sie Nebensächliches.",
        pt: "Começar por tarefas fáceis dá uma falsa satisfação. Adie o secundário até completar o TOP 3.",
        id: "Mulai dari tugas mudah memberikan kepuasan palsu. Tunda tugas kecil hingga TOP 3 selesai."
      },
      steps: [
        {
          name: {
            ko: "아침 15분 신체 유산소 활성화",
            en: "15-Minute Morning Cardio Activation",
            ja: "朝15分間の身体有酸素アクティベーション",
            zh: "清晨15分钟身体有氧激活",
            es: "Activación Cardio Matutina de 15 Minutos",
            fr: "Activation Cardio Matinale de 15 Minutes",
            de: "15-minütige morgendliche Ausdaueraktivierung",
            pt: "Ativação Cardio Matinal de 15 Minutos",
            id: "Aktivasi Kardio Pagi 15 Menit"
          },
          text: {
            ko: "아침 산책, 조깅, 실내 자전거, 혹 스트레칭으로 15분간 몸에 가볍게 열을 내고 혈류를 모읍니다.",
            en: "Walk, jog, cycle, or stretch for 15 minutes to raise your heart rate and boost brain blood flow.",
            ja: "朝の散歩やジョギング、ストレッチで15分間軽く体を温め血流を高めます。",
            zh: "通过早晨散步、慢跑、骑行或拉伸15分钟，让身体微微出汗，提升大脑供血。",
            es: "Camine, trote o estire durante 15 minutos para elevar el ritmo cardíaco y activar el cerebro.",
            fr: "Marchez, courez ou étirez-vous pendant 15 minutes pour élever le rythme cardiaque.",
            de: "Gehen, joggen oder dehnen Sie sich 15 Minuten lang, um den Herzschlag zu erhöhen.",
            pt: "Caminhe, corra ou se alonge por 15 minutos para elevar o ritmo cardíaco e ativar o cérebro.",
            id: "Berjalan, joging, atau peregangan selama 15 menit untuk meningkatkan detak jantung."
          }
        },
        {
          name: {
            ko: "TOP 3 우선순위 과제 선별 작성",
            en: "Select & Log TOP 3 Priority Tasks",
            ja: "TOP 3優先順位タスクの選定と記録",
            zh: "精选并记录 TOP 3 核心任务",
            es: "Seleccionar y Registrar las TOP 3 Tareas",
            fr: "Sélectionner & Noter les TOP 3 Tâches",
            de: "Auswählen & Aufschreiben der TOP-3-Aufgaben",
            pt: "Selecionar e Registrar as TOP 3 Tarefas",
            id: "Pilih & Catat Tugas TOP 3 Utama"
          },
          text: {
            ko: "운동 직후 맑아진 전전두엽으로 오늘 반드시 성취해야 할 가장 결정적인 3가지 과제만을 노트에 적습니다.",
            en: "Using your fresh brain right after exercise, write down the 3 most critical tasks to accomplish today.",
            ja: "運動直後の冴えた頭脳で、今日絶対に達成すべき最も重要な3つのタスクだけをノートに記録します。",
            zh: "利用运动后头脑清醒的黄金时刻，在笔记本上精选写下今天必须完成的3项核心任务。",
            es: "Con el cerebro activo tras el ejercicio, anote las 3 tareas verdaderamente cruciales de hoy.",
            fr: "Le cerveau frais après le sport, notez les 3 tâches vraiment cruciales aujourd'hui.",
            de: "Schreiben Sie mit frischem Kopf nach dem Workout die 3 wichtigsten Tagesaufgaben auf.",
            pt: "Com o cérebro ativo pós-exercício, anote as 3 tarefas verdadeiramente cruciais de hoje.",
            id: "Dengan otak segar pasca olahraga, catat 3 tugas paling krusial untuk diselesaikan hari ini."
          }
        },
        {
          name: {
            ko: "순차적 딥 워크 실행 및 사소한 일 거절",
            en: "Sequential Deep Execution & Deferring Noise",
            ja: "順次ディープワーク実行と雑務の拒絶",
            zh: "顺序进行深度工作并推迟杂务",
            es: "Ejecución Secuencial y Posposición de Ruido",
            fr: "Exécution Séquentielle & Report du Bruit",
            de: "Sequenzielle Abarbeitung & Aufschub von Lärm",
            pt: "Execução Sequencial e Adiamento de Ruído",
            id: "Eksekusi Berurutan & Menunda Gangguan"
          },
          text: {
            ko: "1번 과제부터 하나씩 몰입하여 완료하고, 3가지가 모두 끝날 때까지 수신함 확인이나 잡무를 미룹니다.",
            en: "Focus on task #1 until finished, then #2, then #3, holding off emails until all 3 are completed.",
            ja: "1番のタスクから順番に集中して完了させ、3つ全てが終わるまでメール確認などの雑務を後回しにします。",
            zh: "从第1项任务开始顺次专注完成，在3项任务全告竣工前，将推迟查收邮件等琐碎杂务。",
            es: "Concéntrese en la tarea #1 hasta terminar, luego #2 y #3, posponiendo correos hasta el final.",
            fr: "Concentrez-vous sur la tâche 1 jusqu'à la fin, puis 2 et 3, en reportant les e-mails.",
            de: "Arbeiten Sie Aufgabe 1 ab, dann 2 und 3. Verschieben Sie E-Mails, bis alle 3 fertig sind.",
            pt: "Concentre-se na tarefa #1 até terminar, depois #2 e #3, adiando e-mails até o final.",
            id: "Fokus pada tugas #1 hingga selesai, lalu #2 dan #3, menunda cek email hingga ketiganya selesai."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "만약 TOP 3 중 하나를 다 끝내지 못하면 어떻게 하나요?",
            en: "What if I can't finish one of the TOP 3 tasks today?",
            ja: "もしTOP 3のうち1つを今日終わらせられなかったらどうすればいいですか？",
            zh: "如果今天没能完成 TOP 3 中的某一项该怎么办？",
            es: "¿Qué pasa si hoy no logro terminar una de las 3 tareas principales?",
            fr: "Que faire si je ne finis pas l'une des TOP 3 tâches aujourd'hui ?",
            de: "Was ist, wenn ich eine der TOP-3-Aufgaben heute nicht schaffe?",
            pt: "E se eu não conseguir terminar uma das 3 tarefas principais hoje?",
            id: "Bagaimana jika tidak bisa menyelesaikan salah satu dari TOP 3 hari ini?"
          },
          answer: {
            ko: "괜찮습니다. 실패한 게 아니라 가장 파급력이 큰 대형 과제에 에너지를 쏟았다는 증거입니다. 미완성된 항목을 내일 아침 1번 과제로 재배치하세요.",
            en: "That's completely fine. It proves you tackled high-impact work. Carry it over as task #1 tomorrow.",
            ja: "問題ありません。難易度とインパクトが高い証拠です。未完了の項目は明日の朝のタスク1に再配置してください。",
            zh: "完全没有关系。这证明你把精力投入在了高影响力的重大事项上。将其直接移为明天早晨的第1项任务即可。",
            es: "Está bien. Demuestra que abordó algo de gran impacto. Trasládela como la tarea #1 de mañana.",
            fr: "C'est normal. Cela prouve que vous avez attaqué un gros morceau. Reportez-la en tâche 1 demain.",
            de: "Das ist völlig in Ordnung. Es zeigt, dass Sie Großes angepackt haben. Übernehmen Sie sie morgen als Aufgabe 1.",
            pt: "Tudo bem. Prova que você abordou algo de alto impacto. Transfira-a como a tarefa #1 de amanhã.",
            id: "Tidak masalah. Ini membuktikan Anda mengerjakan tugas berdampak besar. Jadikan tugas #1 besok."
          }
        },
        {
          question: {
            ko: "아침 승마 대신 할 수 있는 현대적 대체 운동은 무엇인가요?",
            en: "What modern exercises can replace morning horseback riding?",
            ja: "朝の乗馬の代わりにできる現代的な代替運動は何ですか？",
            zh: "有什么现代运动可以替代早晨骑马？",
            es: "¿Qué ejercicios modernos pueden reemplazar la equitación matutina?",
            fr: "Quels exercices modernes peuvent remplacer l'équitation ?",
            de: "Welcher moderne Sport kann den Ausritt am Morgen ersetzen?",
            pt: "Quais exercícios modernos podem substituir a equitação matutina?",
            id: "Olahraga modern apa yang bisa menggantikan berkuda di pagi hari?"
          },
          answer: {
            ko: "15분간의 케틀벨 스윙, 실내 사이클링, 타바타 스트레칭, 혹은 빠르게 걷기가 뇌 혈류를 올리는 동일한 생체 효과를 줍니다.",
            en: "15 minutes of kettlebell swings, stationary cycling, brisk walking, or Tabata stretching give identical brain benefits.",
            ja: "15分間のケトルベルスイング、エアロバイク、早歩き散歩が脳の血流を高める同じ効果をもたらします。",
            zh: "15分钟的壶铃摇摆、动感单车、快走或拉伸，能带来完全相同的提升大脑供血生物效应。",
            es: "15 minutos de kettlebell, bicicleta estática, caminata rápida o estiramientos dan los mismos beneficios.",
            fr: "15 minutes de kettlebell, vélo d'appartement, marche rapide ou étirements offrent les mêmes bienfaits.",
            de: "15 Minuten Kettlebell-Swings, Heimtrainer oder zügiges Gehen bringen denselben Effekt.",
            pt: "15 minutos de kettlebell, bicicleta ergométrica, caminhada rápida ou alongamentos dão os mesmos benefícios.",
            id: "15 menit ayunan kettlebell, sepeda statis, atau jalan cepat memberikan manfaat otak yang sama."
          }
        }
      ]
    }
  },

  // 5. 요하네스 페르메이르 (Johannes Vermeer)
  {
    slug: 'vermeer-camera-obscura-light',
    item: {
      id: 'vermeer-camera-obscura-light',
      name: '요하네스 페르메이르',
      gender: 'male',
      era: '근대',
      location: '네덜란드',
      lifespan: '1632 - 1675',
      birthYear: 1632,
      bio: "'진주 귀걸이를 한 소녀', '우유 짜는 하녀'로 빛의 오묘한 정적을 예술로 승화시킨 네덜란드 대표 거장 화가입니다.",
      habitName: '매일 창가 카메라 옵스큐라 빛 입자 정밀 관찰 및 심적 정적 관조 루틴',
      tags: ['#몰입', '#창의', '#예술', '#휴식', '#사색'],
      timeOfDay: 'morning',
      requiredItems: ['자연광 창문', '관찰 메모지 또는 렌즈'],
      frequency: 'daily',
      historicalStory: "네덜란드 델프트의 거장 화가 페르메이르는 매일 아침 햇살이 비추는 작업실 창가에 카메라 옵스큐라(Camera Obscura) 렌즈 장비를 세워두었습니다. 그는 렌즈를 통해 투영되는 빛의 미세한 반사 점(Pointillé)과 사물의 음영 변화를 장시간 정밀하게 관찰하며 고요한 심적 정적 속에서 최고의 미학을 화폭에 옮겨 담았습니다.",
      sciencePrinciples: "자연광과 빛의 정교한 음영 변화를 조용히 지속 관찰하는 행위는 시각 피질(Visual Cortex)의 대비 감도를 극대화하고 신경계를 이완시킵니다. 이는 뇌의 집행 제어 네트워크(Executive Control Network)를 활성화하여 시끄러운 시각적 소음 속에서 본질을 꿰뚫어 보는 통찰력을 제공합니다.",
      quote: "빛과 그늘이 닿는 모든 미세한 순간 속에 영원한 아름다움이 숨어있다.",
      trigger: "복잡한 세상을 한 걸음 물러나 고요한 통찰과 시각적 몰입을 얻고 싶을 때",
      modernGuide: [
        "아침 시간 창가에 앉아 모니터 없이 5분간 들어오는 자연 햇살과 그림자를 가만히 바라봅니다.",
        "빛에 따라 변화하는 사물의 색감과 미세한 입자 감각에 온전히 시선을 고정시킵니다.",
        "마음이 고요해지면 오늘 창의적으로 해결하고 싶은 디자인이나 핵심 아이디어를 정리합니다."
      ],
      actionName: "아침 5분 창가 빛 관찰 & 정적 관조 (페르메이르 루틴)",
      sources: [
        "Walter Liedtke, *Vermeer and the Delft School* (Metropolitan Museum of Art, 2001)",
        "Philip Steadman, *Vermeer's Camera: Uncovering the Truth Behind the Masterpieces*"
      ]
    },
    translations: {
      title: {
        ko: "'진주 귀걸이를 한 소녀'의 거장? 페르메이르의 아침 창가 빛 관찰 루틴",
        en: "Master of 'Girl with a Pearl Earring'? Vermeer's Morning Light Observation Routine",
        ja: "「真珠の耳飾りの少女」の巨匠？フェルメールの朝の窓辺の光観察ルーティン",
        zh: "《戴珍珠耳环的少女》的巨匠？维米尔的清晨窗前光影观照习惯",
        es: "¿El maestro de 'La joven de la perla'? La rutina de observación de luz matutina de Vermeer",
        fr: "Le maître de 'La Jeune Fille à la perle' ? La routine d'observation de la lumière de Vermeer",
        de: "Der Meister des 'Mädchens mit dem Perlenohrring'? Vermeers Lichtbeobachtungs-Routine",
        pt: "O mestre de 'Moça com Brinco de Pérola'? A rotina de observação de luz matinal de Vermeer",
        id: "Master 'Girl with a Pearl Earring'? Rutinitas Pengamatan Cahaya Jendela Pagi Vermeer"
      },
      description: {
        ko: "빛의 거장 요하네스 페르메이르가 카메라 옵스큐라로 빛의 음영을 정밀 관찰하며 정서적 고요와 입체적 영감을 얻었던 아침 빛 관조 습관.",
        en: "Discover how Johannes Vermeer achieved peaceful focus and artistic brilliance by observing morning light with a camera obscura.",
        ja: "光の巨匠ヨハネス・フェルメールがカメラ・オブスキュラで光の陰影を観察し、静寂とインスピレーションを得た習慣を紹介します。",
        zh: "介绍光影巨匠维米尔通过暗箱精细观察晨光与阴影，获取宁静专注与立体灵感的光影观照习惯。",
        es: "Descubra cómo Vermeer lograba serenidad e inspiración observando la luz matutina con una cámara oscura.",
        fr: "Découvrez comment Vermeer obtenait sérénité et inspiration en observant la lumière du matin.",
        de: "Erfahren Sie, wie Vermeer durch die Beobachtung des Morgenlichts mit der Camera Obscura Fokus und Ruhe fand.",
        pt: "Descubra como Vermeer alcançava serenidade e inspiração observando a luz matinal com uma câmera obscura.",
        id: "Temukan bagaimana Vermeer mencapai fokus tenang dan inspirasi dengan mengamati cahaya pagi."
      },
      authority: {
        ko: "메트로폴리탄 미술관 'Vermeer and the Delft School' 및 필립 스테드먼 연구서",
        en: "Metropolitan Museum of Art 'Vermeer and the Delft School' & Philip Steadman Research",
        ja: "メトロポリタン美術館「Vermeer and the Delft School」および研究書史料",
        zh: "大都会艺术博物馆《Vermeer and the Delft School》与菲利普·斯蒂德曼研究史料",
        es: "Metropolitan Museum of Art 'Vermeer and the Delft School' e Investigación de Philip Steadman",
        fr: "Metropolitan Museum of Art 'Vermeer and the Delft School' & Recherche de Philip Steadman",
        de: "Metropolitan Museum of Art 'Vermeer and the Delft School' & Philip Steadman Forschung",
        pt: "Metropolitan Museum of Art 'Vermeer and the Delft School' e Pesquisa de Philip Steadman",
        id: "Metropolitan Museum of Art 'Vermeer and the Delft School' & Riset Philip Steadman"
      },
      intro: {
        ko: "'진주 귀걸이를 한 소녀', '우유 짜는 하녀'로 오묘하고 정적에 차오르는 빛의 미학을 완성한 네덜란드의 거장 요하네스 페르메이르. 세월이 흘러도 바래지 않는 그의 그림 속 고요함과 빛의 오묘한 세련됨은 어떻게 탄생했을까요? 🎨\n\n페르메이르는 매일 아침 작업실 창가로 스며드는 빛의 자리에 카메라 옵스큐라(Camera Obscura) 렌즈 장비를 세워두었습니다. 렌즈에 맺히는 빛의 입자와 미세한 음영 반사 점을 수 시간 동안 조용히 관찰하며 마음을 깊이 몰입시켰습니다. 이 고요한 관조 습관이 불후의 걸작들을 탄생시켰습니다.\n\n오늘 BuildSelf에서는 페르메이르의 아침 빛 관찰 루틴에 담긴 시각 피질 이완과 고요한 몰입의 신경과학을 소개합니다.",
        en: "Johannes Vermeer, the Dutch master of light who painted 'Girl with a Pearl Earring'. How did he capture such serene depth? 🎨\n\nEvery morning, Vermeer set up his camera obscura by the window to observe subtle light particles and reflections for hours in absolute tranquility.\n\nToday, BuildSelf introduces the neuroscience of visual relaxation behind Vermeer's morning light routine.",
        ja: "「真珠の耳飾りの少女」を描いた光の巨匠ヨハネス・フェルメール。絵の中に宿る深い静寂と繊細な光はどのように生まれたのでしょうか？ 🎨\n\n毎朝アトリエの窓辺にカメラ・オブスキュラを設置し、レンズに映る光の粒子と微細な陰影を静かに観察しました。\n\n今日のBuildSelfでは、フェルメールの光観察ルーティンを紹介します。",
        zh: "创作出《戴珍珠耳环的少女》的光影巨匠维米尔。画作中那抹跨越时空的宁静与细腻光影究竟从何而来？ 🎨\n\n每天早晨，维米尔会在画室窗前架起暗箱，静静观察透镜中凝聚的微小光斑与阴影变化数小时，将全神沉浸于极静之中。\n\n今天 BuildSelf 将为您介绍维米尔光影观照习惯背后的视觉皮层放松科学。",
        es: "Johannes Vermeer, el maestro holandés de la luz. ¿Cómo lograba esa profundidad tan serena en sus pinturas? 🎨\n\nCada mañana colocaba su cámara oscura junto a la ventana para observar partículas de luz durante horas en calma total.\n\nHoy BuildSelf presenta la neurociencia de la rutina de luz matutina de Vermeer.",
        fr: "Johannes Vermeer, le maître néerlandais de la lumière. Comment capturait-il cette sérénité ? 🎨\n\nChaque matin, il installait sa chambre noire près de la fenêtre pour observer la lumière pendant des heures.\n\nAujourd'hui BuildSelf vous dévoile la science de la routine de lumière matinale de Vermeer.",
        de: "Johannes Vermeer, der holländische Meister des Lichts. Wie fing er diese gelassene Tiefe ein? 🎨\n\nJeden Morgen stellte er seine Camera Obscura ans Fenster, um Lichtpartikel stundenlang in Stille zu beobachten.\n\nHeute präsentiert BuildSelf die Wissenschaft hinter Vermeers Licht-Routine.",
        pt: "Johannes Vermeer, o mestre holandês da luz. Como ele capturava essa profundidade tão serena? 🎨\n\nTodas as manhãs ele posicionava sua câmera obscura junto à janela para observar a luz por horas em total calma.\n\nHoje o BuildSelf apresenta a neurociência da rotina de luz de Vermeer.",
        id: "Johannes Vermeer, master cahaya Belanda. Bagaimana ia menangkap kedalaman yang begitu tenang? 🎨\n\nSetiap pagi ia memasang kamera obskura di dekat jendela untuk mengamati partikel cahaya dalam ketenangan total.\n\nHari ini BuildSelf menyajikan sains di balik rutinitas pengamatan cahaya Vermeer."
      },
      whyTitle: {
        ko: "시각 대비 감도 향상과 자율신경계 정적이 선사하는 고차원 인지 회복",
        en: "Visual Contrast Sensitivity & Parasympathetic Calm for Cognitive Recovery",
        ja: "視覚コントラスト感度向上と自律神経の静寂がもたらす認知回復",
        zh: "视觉对比敏感度提升与自律神经宁静带来的认知恢复",
        es: "Sensibilidad al Contraste Visual y Calma Parasimpática para la Recuperación Cognitiva",
        fr: "Sensibilité au Constraste Visuel & Calme Parasympathique pour la Récupération",
        de: "Visuelle Kontrastempfindlichkeit & Parasympathische Ruhe zur kognitiven Erholung",
        pt: "Sensibilidade ao Contraste Visual e Calma Parassimpática para Recuperação Cognitiva",
        id: "Sensitivitas Kontras Visual & Ketenangan Parasimpatik untuk Pemulihan Kognitif"
      },
      whyDesc: {
        ko: "현대인의 눈과 뇌는 모니터의 번뜩이는 인공 자극과 빠른 프레임에 노출되어 지속적으로 화상을 입듯 지쳐 있습니다.\n\n페르메이르처럼 아침 자연 햇살과 사물의 오묘한 그림자를 가만히 관조하는 행위는 뇌의 시각 피질 대비 감도를 자극하면서 부교감 신경계를 활성화하는 <strong>'시각적 미니 명상'</strong>입니다. 시각적 소음이 차단되고 뇌의 인지 리셋이 이뤄져 본질적 형태와 영감을 알아채게 됩니다.",
        en: "Modern eyes are burned out by rapid artificial screen flickering and fast frames.\n\nGazing quietly at natural morning light and shadows acts as a <strong>'visual mini-meditation'</strong> that restores visual cortex sensitivity and resets the brain.",
        ja: "現代人の目は画面の人工的な刺激で絶えず疲労しています。\n\n朝の自然光と影を静かに観察することは、副交感神経を活性化させる<strong>「視覚的ミニ瞑想」</strong>です。視覚的ノイズが消え脳がリセットされます。",
        zh: "现代人的眼睛与大脑长期暴露于屏幕人工刺激中，处于持续的高压疲惫状态。\n\n像维米尔那样静静凝视晨光与阴影的变化，是一种激活副交感神经的<strong>“视觉微型冥想”</strong>，能重置大脑认知并捕捉本真灵感。",
        es: "Los ojos modernos están exhaustos por el parpadeo de las pantallas artificiales.\n\nObservar en silencio la luz natural matutina funciona como una <strong>'mini-meditación visual'</strong> que restaura la corteza visual.",
        fr: "Les yeux modernes sont épuisés par les écrans artificiels.\n\nObserver la lumière naturelle du matin agit comme une <strong>'mini-méditation visuelle'</strong> qui restaure le cortex visuel.",
        de: "Moderne Augen sind durch flackernde Bildschirme erschöpft.\n\nStilles Beobachten von natürlichem Morgenlicht wirkt als <strong>'visuelle Mini-Meditation'</strong>.",
        pt: "Os olhos modernos estão exaustos pelo brilho de telas artificiais.\n\nObservar em silêncio a luz natural matinal funciona como uma <strong>'mini-meditação visual'</strong> que restaura o córtex visual.",
        id: "Mata modern lelah akibat kilatan layar buatan.\n\nMengamati cahaya pagi alami berfungsi sebagai <strong>'meditasi visual mini'</strong> yang memulihkan korteks visual."
      },
      cautionTitle: {
        ko: "스마트폰을 치우고 손대지 않은 순수 조도를 관찰하세요",
        en: "Put Smartphones Away and Observe Pure Natural Illumination",
        ja: "スマホを遠ざけ純粋な自然の光を観察しましょう",
        zh: "远离手机，全神观察纯粹的自然光线",
        es: "Aleje el smartphone y observe la iluminación natural pura",
        fr: "Éloignez le smartphone et observez la lumière naturelle pure",
        de: "Legen Sie das Smartphone weg und beobachten Sie reine Beleuchtung",
        pt: "Afaste o smartphone e observe a iluminação natural pura",
        id: "Jauhkan ponsel dan amati pencahayaan alami murni"
      },
      cautionDesc: {
        ko: "카메라 옵스큐라의 핵심은 사물을 조급하게 해석하려 하지 않고 렌즈에 투영된 빛의 있는 그대로를 받아들이는 것입니다. 5분 동안 어떤 디지털 장비도 잡지 말고 빛의 입자를 있는 그대로 감상하세요.",
        en: "The core is accepting light as it is without rushing to analyze. Touch no digital screens for 5 minutes.",
        ja: "焦って分析しようとせず、光そのものを受け入れることが核心です。5分間デジタルに触れず鑑賞してください。",
        zh: "核心在于不急于主观去解析事物，而是包容接纳光的本貌。5分钟内切勿接触任何数字设备。",
        es: "El núcleo es aceptar la luz tal como es sin prisa por analizar. No toque pantallas durante 5 minutos.",
        fr: "Le cœur est d'accepter la lumière telle qu'elle est sans chercher à l'analyser. Évitez les écrans 5 minutes.",
        de: "Kern ist es, Licht so zu akzeptieren wie es ist. Fassen Sie 5 Minuten keine Bildschirme an.",
        pt: "O foco é aceitar a luz como ela é sem se apressar em analisar. Não toque em telas por 5 minutos.",
        id: "Intinya adalah menerima cahaya apa adanya tanpa terburu-buru menganalisis. Jangan sentuh layar selama 5 menit."
      },
      steps: [
        {
          name: {
            ko: "아침 창가 조용한 관조 스폿 마련",
            en: "Set Up Morning Window Quiet Observation Spot",
            ja: "朝の窓辺の静かな観察スポットの確保",
            zh: "布置清晨窗前宁静观照角",
            es: "Establecer un Rincón de Observación junto a la Ventana",
            fr: "Créer un Coin d'Observation près de la Fenêtre",
            de: "Einrichten eines ruhigen Beobachtungsplatzes am Fenster",
            pt: "Criar um Cantinho de Observação junto à Janela",
            id: "Siapkan Tempat Pengamatan Tenang di Dekat Jendela"
          },
          text: {
            ko: "아침에 일어나 집이나 사무실 창가 중 자연 햇빛이 잘 스며드는 자리에 편안한 의자를 놓아둡니다.",
            en: "Place a comfortable chair by a window at home or office where natural morning sunlight streams in.",
            ja: "朝起きたら、自宅や offices の窓辺の自然光が入る場所によく座る椅子を設置します。",
            zh: "清晨起床后，在家中或办公室采光良好、有自然光漫射的窗前摆放一把舒适的椅子。",
            es: "Coloque una silla cómoda junto a una ventana por donde entre luz natural por la mañana.",
            fr: "Placez une chaise confortable près d'une fenêtre baignée de lumière naturelle le matin.",
            de: "Stellen Sie einen bequemen Stuhl an ein Fenster mit natürlichem Morgenlicht.",
            pt: "Coloque uma cadeira confortável perto de uma janela com luz natural matinal.",
            id: "Letakkan kursi nyaman di dekat jendela yang tersiram sinar matahari pagi alami."
          }
        },
        {
          name: {
            ko: "5분간의 자연광 & 그림자 정적 몰입",
            en: "5-Minute Natural Light & Shadow Quiet Immersion",
            ja: "5分間の自然光＆影の静寂没頭",
            zh: "5分钟自然光影静心沉浸",
            es: "5 Minutos de Inmersión en Luz Natural y Sombras",
            fr: "5 Minutes d'Immersion dans la Lumière et les Ombres",
            de: "5-minütiges Eintauchen in Licht und Schatten",
            pt: "5 Minutos de Imersão em Luz Natural e Sombras",
            id: "5 Menit Penyerapan Tenang Cahaya Alami & Bayangan"
          },
          text: {
            ko: "화면을 끄고 5분간 창밖 햇살, 벽면의 그림자, 혹은 컵 표면에 맺히는 빛의 입자에 시선을 고정시킵니다.",
            en: "Turn off screens and gaze quietly for 5 minutes at morning light rays, wall shadows, or reflections.",
            ja: "画面を消し、5分間窓の外の光や壁の影、コップの表面に映る光の粒子に静かに視線を固定します。",
            zh: "关闭屏幕，将视线静静凝视在窗外晨光、墙面阴影或水杯表面的微小光斑上，持续5分钟。",
            es: "Apague pantallas y mire en silencio durante 5 minutos los rayos de luz, sombras o reflejos.",
            fr: "Éteignez les écrans et observez 5 minutes les rayons de lumière, les ombres ou les reflets.",
            de: "Schalten Sie Bildschirme aus und betrachten Sie 5 Minuten lang Sonnenstrahlen und Schatten.",
            pt: "Desligue telas e olhe em silêncio por 5 minutos para os raios de luz, sombras ou reflexos.",
            id: "Matikan layar dan tatap tenang selama 5 menit sinar matahari, bayangan dinding, atau pantulan cahaya."
          }
        },
        {
          name: {
            ko: "고요해진 마음으로 본질 아이디어 스케치",
            en: "Sketch Essential Ideas with a Calmed Mind",
            ja: "静まった心で本質アイデアのスケッチ",
            zh: "用凝定的大脑记录本质灵感",
            es: "Abocete Ideas Esenciales con la Mente Calmada",
            fr: "Esquissez des Idées Essentielles après le Calme",
            de: "Skizzieren Sie essenzielle Ideen mit ruhigem Geist",
            pt: "Esboce Ideias Essenciais com a Mente Calma",
            id: "Sketsa Ide Esensial dengan Pikiran yang Tenang"
          },
          text: {
            ko: "시각적 이완이 완료된 직후 머릿속이 맑아졌을 때 오늘 다룰 핵심 작업의 디자인이나 핵심 컨셉을 기록합니다.",
            en: "Right after visual relaxation when your mind is reset, roughly record the key design or concept for today.",
            ja: "視覚的リセットが完了して頭が冴えた直後、今日取り組むメインの design や概念を書き留めます。",
            zh: "在视觉极静与大脑被重置后，趁头脑无比清亮之际，记录下今天欲攻克的核心构思与设计。",
            es: "Justo después de la relajación visual, anote el concepto o diseño clave de hoy.",
            fr: "Juste après la relaxation visuelle, notez l'idée ou le concept clé de la journée.",
            de: "Halten Sie direkt nach der visuellen Entspannung das Kernkonzept des Tages fest.",
            pt: "Logo após o relaxamento visual, anote o conceito ou design chave de hoje.",
            id: "Segera setelah relaksasi visual saat pikiran segar, catat konsep atau desain utama hari ini."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "비가 오거나 흐린 날에는 이 루틴을 어떻게 하나요?",
            en: "How do I practice this routine on rainy or cloudy days?",
            ja: "雨の日や曇りの日にはこのルーティンをどうすればいいですか？",
            zh: "下雨天或阴天时该如何执行此习惯？",
            es: "¿Cómo practico esta rutina en días lluviosos o nublados?",
            fr: "Comment pratiquer cette routine les jours de pluie ou nuageux ?",
            de: "Wie praktiziere ich diese Routine an regnerischen Tagen?",
            pt: "Como praticar essa rotina em dias chuvosos ou nublados?",
            id: "Bagaimana menjalankan rutinitas ini saat hari hujan atau mendung?"
          },
          answer: {
            ko: "흐린 날의 은은하고 부드러운 유백색 빛조차 훌륭한 조도 감상 대상입니다. 빗방울이 유리창에 맺히는 빛의 굴절을 관찰해도 좋습니다.",
            en: "Overcast diffused light is equally amazing. Observe the soft light refractions through raindrops on the window glass.",
            ja: "曇りの日の柔らかい光も素晴らしい観察対象です。雨粒が窓ガラスに結ぶ光の屈折を観察するのも良いでしょう。",
            zh: "阴天柔和漫射的灰色光线同样是极佳的观照对象。观察雨滴在窗玻璃上折射的微光亦是非常棒的体验。",
            es: "La luz difusa de un día nublado es genial. Observe las refracciones a través de las gotas de lluvia en el cristal.",
            fr: "La lumière diffuse d'un jour nuageux est idéale. Observez les réfractions à travers les gouttes de pluie.",
            de: "Das diffuse Licht an bewölkten Tagen ist fantastisch. Beobachten Sie Lichtbrechungen in Regentropfen.",
            pt: "A luz difusa de um dia nublado é ótima. Observe as refrações da luz nas gotas de chuva na janela.",
            id: "Cahaya lembut terbaris saat mendung juga sangat baik. Amati pembiasan cahaya pada tetesan air hujan di kaca."
          }
        },
        {
          question: {
            ko: "실제로 페르메이르처럼 미술이나 디자인 일을 하지 않아도 효과가 있나요?",
            en: "Does this benefit non-artists or people not working in design?",
            ja: "美術やデザインの仕事をしていない人にも効果はありますか？",
            zh: "从事非艺术与设计相关职业的普通人也能获益吗？",
            es: "¿Tiene beneficios para personas que no trabajan en arte o diseño?",
            fr: "Est-ce utile pour les personnes qui ne travaillent pas dans l'art ?",
            de: "Nützt dies auch Menschen, die nicht im Kunstbereich arbeiten?",
            pt: "Isso traz benefícios para quem não trabalha com arte ou design?",
            id: "Apakah ada manfaatnya bagi yang tidak bekerja di bidang seni atau desain?"
          },
          answer: {
            ko: "네! 시각적 조도를 조용히 관찰하는 행위는 뇌의 복잡한 언어 수다(Mental Chatter)를 멈추는 가장 빠른 물리적 휴식 방법입니다.",
            en: "Yes! Quietly observing illumination is the fastest physical way to silence internal mental chatter for anyone.",
            ja: "はい！光を静かに観察する行為は、脳の雑念（Mental Chatter）を 멈추는 最速の物理的休息法です。",
            zh: "当然可以！静心观照光线与色彩，是停止大脑内部语言杂念（Mental Chatter）最快速有效的方法。",
            es: "¡Sí! Observar la luz en silencio es la forma más rápida de calmar el parloteo mental interno.",
            fr: "Oui ! Observer la lumière en silence est le moyen le plus rapide de calmer le bavardage mental.",
            de: "Ja! Stilles Beobachten von Licht ist der schnellste Weg, das Gedankenkarussell zu stoppen.",
            pt: "Sim! Observar a luz em silêncio é a forma mais rápida de acalmar o matracar mental interno.",
            id: "Tentu! Mengamati cahaya secara tenang adalah cara tercepat menghentikan kebisingan pikiran."
          }
        }
      ]
    }
  },

  // 6. 크리스토퍼 콜럼버스 (Christopher Columbus)
  {
    slug: 'columbus-nautical-log',
    item: {
      id: 'columbus-nautical-log',
      name: '크리스토퍼 콜럼버스',
      gender: 'male',
      era: '근대',
      location: '이탈리아, 스페인',
      lifespan: '1451 - 1506',
      birthYear: 1451,
      bio: "1492년 대서양을 건너 신대륙 항로를 개척하여 대항해 시대를 연 탐험가이자 탐험 선장입니다.",
      habitName: '매일 밤 항해 일지(Nautical Log) 작성과 별자리 위치 수치 대조 루틴',
      tags: ['#기록', '#의사결정', '#안정', '#계획', '#성공습관'],
      timeOfDay: 'night',
      requiredItems: ['항해 일기장', '사분의(Astrolabe) 또는 나침반'],
      frequency: 'daily',
      historicalStory: "1492년 미지의 대서양을 항해하던 선장 콜럼버스는 풍랑과 선원들의 반란 공포 속에서도 매일 밤 선장실 촛불 아래 앉아 항해 일지(Nautical Logbook)를 작성했습니다. 그는 바람의 방향, 위도, 사분의로 측정한 별의 각도를 수치로 기록하여 수평선 너머의 불안을 이성적 데이터로 제어했습니다.",
      sciencePrinciples: "불안과 미지의 공포 상황에서 정량적 데이터 측정 및 야간 일지 작성(Log writing)은 감정 조절 센터인 편도체(Amygdala)의 오버드라이브를 즉각 차단합니다. 뇌의 전전두엽 논리 회로를 재가동하여 심리적 안정감과 리더십 통제력을 유지하게 만듭니다.",
      quote: "바다를 건너려면 수평선 너머 시야에서 육지가 사라지는 것을 지켜볼 용기가 있어야 한다.",
      trigger: "불확실한 상황이나 거대한 도전을 앞두고 불안감이 덮쳐올 때",
      modernGuide: [
        "잠들기 전 오늘 있었던 주요 사건과 진행 지표를 3줄의 항해 일지로 노트에 적습니다.",
        "막연한 감정적 불안을 숫자로 측정 가능한 정량 지표(예: 완료율 80%)로 변환합니다.",
        "내일 항해할 방향(우선 과제)을 명확히 명시하고 편안히 취침에 듭니다."
      ],
      actionName: "밤 3줄 항해 일지 & 불안 정량화 (콜럼버스 루틴)",
      sources: [
        "Christopher Columbus, *The Journal of Christopher Columbus* (1492-1493)",
        "Samuel Eliot Morison, *Admiral of the Ocean Sea: A Life of Christopher Columbus*"
      ]
    },
    translations: {
      title: {
        ko: "대항해 시대를 연 선장? 콜럼버스의 야간 항해일지 & 별자리 수치 루틴",
        en: "Captain of the Age of Discovery? Columbus's Nightly Logbook & Celestial Routine",
        ja: "大航海時代を開いた船長？コロンブスの夜の航海日記＆天体数値照合ルーティン",
        zh: "开启大航海时代的船长？哥伦布的夜间航海日志与星象核对习惯",
        es: "¿El capitán de la Era de los Descubrimientos? La rutina de cuaderno de bitácora nocturno de Colón",
        fr: "Le capitaine de l'Âge des Découvertes ? La routine de journal de bord nocturne de Colomb",
        de: "Der Kapitän des Zeitalters der Entdeckungen? Kolumbus' nächtliche Logbuch-Routine",
        pt: "O capitão da Era dos Descobrimentos? A rotina de diário de bordo noturno de Colombo",
        id: "Kapten Era Penjelajahan? Rutinitas Logbook Malam & Pengukuran Bintang Columbus"
      },
      description: {
        ko: "미지의 대서양을 넘은 탐험가 콜럼버스가 폭풍과 공포 속에서도 매일 밤 항해 일지를 기록하며 극도의 이성적 안정을 유지했던 과학적 일지 습관.",
        en: "Discover how Christopher Columbus controlled fear and uncertainty by writing a nightly nautical logbook across the ocean.",
        ja: "未知の大西洋を渡ったコロンブスが暴風と恐怖の中で毎夜航海日記を記録し、冷静さを維持した習慣を紹介します。",
        zh: "介绍探险家哥伦布在跨越大西洋期间，通过每天夜晚记录航海日志克服未知恐慌与保持清醒镇定的习惯。",
        es: "Descubra cómo Cristóbal Colón controló el miedo y la incertidumbre escribiendo su diario de a bordo cada noche.",
        fr: "Découvrez comment Christophe Colomb contrôlait la peur en rédigeant son journal de bord chaque nuit.",
        de: "Erfahren Sie, wie Kolumbus Angst und Unsicherheit durch ein nächtliches Logbuch beherrschte.",
        pt: "Descubra como Cristóvão Colombo controlava o medo escrevendo seu diário de bordo todas as noites.",
        id: "Temukan bagaimana Columbus mengendalikan ketakutan dengan menulis logbook pelayaran setiap malam."
      },
      authority: {
        ko: "1492년 항해 사료 'The Journal of Christopher Columbus' 및 전기 역사서",
        en: "1492 Logbook 'The Journal of Christopher Columbus' & Historical Biographies",
        ja: "1492年航海史料「The Journal of Christopher Columbus」および史料",
        zh: "1492年航海史料《The Journal of Christopher Columbus》与历史传记",
        es: "Diario de Navegación de 1492 'The Journal of Christopher Columbus' y Biografías",
        fr: "Journal de bord de 1492 'The Journal of Christopher Colomb' & Biographies Historiques",
        de: "Logbuch von 1492 'The Journal of Christopher Columbus' & Historische Biografien",
        pt: "Diário de Navegação de 1492 'The Journal of Christopher Columbus' e Biografias",
        id: "Logbook Pelayaran 1492 'The Journal of Christopher Columbus' & Biografi Sejarah"
      },
      intro: {
        ko: "1492년 3척의 작은 목선으로 아무도 건너본 적 없는 대서양 한가운데를 가로지른 대탐험가 크리스토퍼 콜럼버스. 수평선 끝에 끝없이 펼쳐진 수심과 선원들의 공포 속에서 그는 어떻게 흔들리지 않는 지휘력을 유지했을까요? ⛵\n\n콜럼버스는 매일 밤 촛불 아래 앉아 구체적인 바람의 방향, 위도, 그리고 사분의로 읽어낸 별자리의 수치를 '항해 일지(Nautical Log)'에 꼼꼼히 기록했습니다. 감정적 공포를 정량적 수치와 일기 기록으로 변환시키는 습관이 그의 편도체 불안을 진정시키고 선단을 성공으로 이끌었습니다.\n\n오늘 BuildSelf에서는 콜럼버스의 야간 항해일지 작성 루틴에 담긴 불안 컨트롤의 과학을 소개합니다.",
        en: "Christopher Columbus, who crossed the Atlantic in 1492. How did he control anxiety amidst ocean storms and fear? ⛵\n\nEvery night by candlelight, he logged wind direction, latitude, and star positions in his nautical journal. Converting emotional dread into quantitative facts kept him grounded.\n\nToday, BuildSelf reveals the anxiety-control neuroscience behind Columbus's nightly logbook routine.",
        ja: "1492年、未知の大西洋を渡った探検家クリストファー・コロンブス。嵐と恐怖の中で彼はどのように揺るぎないリーダーシップを維持したのでしょうか？ ⛵\n\n毎夜ローソクの明かりの下で風向、緯度、星の角度を航海日記に記録しました。感情的な恐れを定量的な数値に変換する習慣が彼の冷静さを保ちました。\n\n今日のBuildSelfでは、コロンブスの航海日記ルーティンを紹介します。",
        zh: "1492年率领三艘木船跨越未知大西洋的伟探险家哥伦布。在茫茫无际的大海与船员叛变恐慌中，他是如何保持镇定的？ ⛵\n\n每天夜晚在烛光下，他都会在航海日志中详尽记录风向、纬度及测得的星象角度。将情绪恐慌转化为客观事实数据的习惯，助他掌控大局。\n\n今天 BuildSelf 将为您介绍哥伦布夜间日志习惯背后的焦虑控制科学。",
        es: "Cristóbal Colón, quien cruzó el Atlántico en 1492. ¿Cómo controlaba la ansiedad entre tormentas y miedo? ⛵\n\nCada noche anotaba la dirección del viento, latitud y estrellas en su bitácora. Convertir el temor en datos lo mantenia firme.\n\nHoy BuildSelf revela la neurociencia tras la rutina de bitácora nocturna de Colón.",
        fr: "Christophe Colomb, qui traversa l'Atlantique en 1492. Comment contrôlait-il l'anxiété au milieu des tempêtes ? ⛵\n\nChaque nuit, il notait la direction du vent, la latitude et les étoiles dans son journal. Convertir la peur en faits le gardait ancré.\n\nAujourd'hui BuildSelf vous dévoile la science de la routine de journal de bord de Colomb.",
        de: "Kolumbus, der 1492 den Atlantik überquerte. Wie beherrschte er die Angst auf stürmischer See? ⛵\n\nJeden Abend trug er Windrichtung, Breitengrad und Sterne in sein Logbuch ein. Ängste in Fakten umzuwandeln hielt ihn stabil.\n\nHeute enthüllt BuildSelf die Wissenschaft hinter Kolumbus' Logbuch-Routine.",
        pt: "Cristóvão Colombo, que cruzou o Atlântico em 1492. Como ele controlava a ansiedade entre tempestades e medo? ⛵\n\nTodas as manhãs ele anotava a direção do vento, latidão e estrelas em seu diário. Converter a percepção em fatos o mantinha firme.\n\nHoje o BuildSelf revela a neurociência por trás da rotina de diário de bordo de Colombo.",
        id: "Christopher Columbus, melintasi Atlantik pada 1492. Bagaimana ia mengendalikan kecemasan di tengah badai? ⛵\n\nSetiap malam ia mencatat arah angin, lintang, dan posisi bintang di logbook. Mengubah ketakutan menjadi data faktual menjaganya tetap tenang.\n\nHari ini BuildSelf mengungkap sains di balik rutinitas logbook malam Columbus."
      },
      whyTitle: {
        ko: "야간 정량 일지 작성을 통한 편도체(Amygdala) 안정 및 이성 회복",
        en: "Nightly Log Writing for Amygdala Calm & Rational Recovery",
        ja: "夜の定量日記作成による偏桃体安定と理性回復",
        zh: "通过夜间定量日志书写平息杏仁核恐慌与恢复理智",
        es: "Registro Nocturno de Datos para Calmar la Amígdala y Recuperar la Razón",
        fr: "Journal Nocturne pour Apaiser l'Amygdale & Récupérer la Raison",
        de: "Nächtliches Logbuch zur Beruhigung der Amygdala & rationaler Erholung",
        pt: "Diário Noturno de Dados para Acalmar a Amígdala e Recuperar a Razão",
        id: "Penulisan Logbook Malam untuk Menenangkan Amigdala & Memulihkan Akal"
      },
      whyDesc: {
        ko: "모호한 불안감은 뇌의 감정 센터인 편도체를 과활성화하여 심박수를 올리고 불면증과 파닉 상태를 유발합니다.\n\n콜럼버스처럼 있었던 사실과 정량적 데이터(수치/지표)를 글로 작성하는 <strong>'야간 항해 일지 기록'</strong>은 감정 뇌에서 이성 뇌인 전전두엽으로 주도권을 넘기는 최고의 신경학적 전환 스위치입니다. 불안의 실체가 직시되고 마음의 평정이 찾아옵니다.",
        en: "Vague anxiety overactivates the amygdala, driving up heart rate and causing insomnia.\n\nWriting down factual progress and metrics in a <strong>'Nightly Logbook'</strong> shifts brain control from emotion to the prefrontal cortex.",
        ja: "漠然とした不安は偏桃体を過剰活性化させ、心拍数を上げパニックを引き起こします。\n\n事実と計量を記録する<strong>「夜の航海日記」</strong>は、感情から前頭前野へ主導権を渡す最高の転換スイッチです。",
        zh: "模糊的焦虑会过度激活杏仁核，引发心率飙升与恐慌自失。\n\n像哥伦布那样将真实进展与量化指标写入<strong>“夜间航海日志”</strong>，是促成掌控权从情绪大脑转移至前额叶理智大脑的最强神经开关。",
        es: "La ansiedad vaga hiperactiva la amígdala, causando insomnio y pánico.\n\nEscribir hechos y métricas en un <strong>'Cuaderno de Bitácora Nocturno'</strong> traslada el control del cerebro emocional al prefrontal.",
        fr: "L'anxiété vague hyperactive l'amygdale, provoquant l'insomnie.\n\nÉcrire des faits dans un <strong>'Journal Nocturne'</strong> transfère le contrôle vers le cortex préfrontal.",
        de: "Vage Angst überaktiviert die Amygdala und führt zu Schlaflosigkeit.\n\nFakten in ein <strong>'Nächtliches Logbuch'</strong> einzutragen überträgt die Steuerung auf den präfrontalen Kortex.",
        pt: "A ansiedade vaga hiperativa a amígdala, causando insônia e pânico.\n\nEscrever fatos em um <strong>'Diário Noturno de Bordo'</strong> transfere o controle do cérebro emocional para o prefrontal.",
        id: "Kecemasan yang samar memicu hiperaktivitas amigdala dan insomnia.\n\nMenuliskan fakta dan metrik dalam <strong>'Logbook Malam'</strong> mengalihkan kendali otak ke korteks prefrontal."
      },
      cautionTitle: {
        ko: "감정적 푸념 대신 객관적 사실과 수치를 기재하세요",
        en: "Log Objective Facts and Numbers Rather Than Emotional Complaints",
        ja: "感情的な愚痴ではなく客観的な事実と数値を記録しましょう",
        zh: "记录客观事实与具体数值，而非发泄情绪抱怨",
        es: "Registre hechos objetivos y números en lugar de quejas emocionales",
        fr: "Inscrivez des faits objectifs et des chiffres plutôt que des plaintes",
        de: "Tragen Sie objektive Fakten und Zahlen ein statt emotionaler Klagen",
        pt: "Registre fatos objetivos e números em vez de lamentações emocionais",
        id: "Catat fakta objektif dan angka daripada keluhan emosional"
      },
      cautionDesc: {
        ko: "항해 일지의 본질은 객관화입니다. '오늘 힘들었다'보다는 '오늘 목표 분량 5쪽 중 4쪽 완료'처럼 수치화된 사실을 기록해야 편도체 진정 효과가 극대화됩니다.",
        en: "The essence of a log is objectivity. Record 'Completed 4 of 5 goal pages' instead of 'Today was tough'.",
        ja: "航海日記の本质は客観化です。「今日はつらかった」より「目標5ページ中4ページ完了」と数値で記録してください。",
        zh: "航海日志的本质在于客观化。相比“今天好累”，记录“设定5页目标已完成4页”更能最大化镇定杏仁核。",
        es: "La esencia de la bitácora es la objetividad. Anote 'Completé 4 de 5 páginas' en lugar de 'Hoy fue duro'.",
        fr: "L'essence du journal est l'objectivité. Notez 'Complété 4 pages sur 5' au lieu de 'Journée difficile'.",
        de: "Die Essenz eines Logbuchs ist Objektivität. Tragen Sie '4 von 5 Seiten erledigt' ein statt 'Heute war es schwer'.",
        pt: "A essência do diário é a objetividade. Anote 'Completei 4 de 5 páginas' em vez de 'Hoje foi difícil'.",
        id: "Inti logbook adalah objektivitas. Catat 'Selesai 4 dari 5 halaman' daripada 'Hari ini berat'."
      },
      steps: [
        {
          name: {
            ko: "취침 전 나만의 3줄 항해 일기 노트를 펴기",
            en: "Open Your 3-Line Nightly Log Notebook Before Bed",
            ja: "就寝前の3行航海日記ノートを開く",
            zh: "睡前打开专属3行航海日志本",
            es: "Abra su Cuaderno de Bitácora de 3 Líneas antes de Dormir",
            fr: "Ouvrez votre Carnet de Bord à 3 Lignes avant de Dormir",
            de: "Öffnen Sie Ihr 3-Zeilen-Logbuch vor dem Schlafen",
            pt: "Abra seu Diário de Bordo de 3 Linhas antes de Dormir",
            id: "Buka Buku Catatan Logbook 3 Baris Sebelum Tidur"
          },
          text: {
            ko: "매일 밤 침대 곁 조명 아래 일기장을 펼치고 당일 항해의 기록을 시작할 정적 상태를 갖춥니다.",
            en: "Open your logbook by the bed every night under warm lighting and prepare to record your day's journey.",
            ja: "毎夜ベッドサイドでノートを開き、今日の航海の記録を開始する静かな状態を整えます。",
            zh: "每天夜晚在床头温馨的灯光下翻开日志本，进入记录全天航程的宁静状态。",
            es: "Abra su libreta junto a la cama cada noche bajo luz cálida y prepárese para registrar su jornada.",
            fr: "Ouvrez votre carnet près du lit sous une lumière douce pour consigner le voyage du jour.",
            de: "Öffnen Sie Ihr Logbuch jeden Abend am Bett bei warmem Licht zur Aufzeichnung der Tagesreise.",
            pt: "Abra seu diário perto da cama todas as noites sob luz suave para registrar a jornada do dia.",
            id: "Buka buku catatan di dekat tempat tidur setiap malam dan siap mencatat perjalanan hari ini."
          }
        },
        {
          name: {
            ko: "팩트 기반 3줄 수치 기록 (완료/진행/지표)",
            en: "Record 3 Fact-Based Metrics (Done/Progress/Metric)",
            ja: "ファクトベースの3行数値記録（完了/進行/指標）",
            zh: "基于事实记录3行量化指标（完成/进展/数据）",
            es: "Registre 3 Datos Basados en Hechos (Hecho/Avance/Métrica)",
            fr: "Consignez 3 Lignes de Faits (Fait/Progrès/Chiffre)",
            de: "Tragen Sie 3 faktenbasierte Zeilen ein (Erledigt/Fortschritt/Zahl)",
            pt: "Registre 3 Dados Baseados em Fatos (Feito/Progresso/Métrica)",
            id: "Catat 3 Baris Berbasis Fakta (Selesai/Kemajuan/Metrik)"
          },
          text: {
            ko: "1) 오늘 완료한 수치 2) 진행 중인 과제 수치 3) 내일의 방향을 담은 3줄 팩트를 명확히 기재합니다.",
            en: "Clearly log: 1) What was completed today with numbers, 2) Ongoing metrics, 3) Tomorrow's target direction.",
            ja: "1) 今日完了した数値 2) 進行中の数値 3) 明日の方向性の3行のファクトを明確に記入します。",
            zh: "清晰记录：1) 今日已算量完成的具体事项 2) 推进中的数据 3) 明日确切航向。",
            es: "Anote claramente: 1) Lo completado hoy con cifras, 2) Avance actual, 3) Rumbo de mañana.",
            fr: "Consignez clairement : 1) Ce qui a été accompli en chiffres, 2) Avancement, 3) Cap pour demain.",
            de: "Tragen Sie klar ein: 1) Was heute zahlenmäßig erledigt wurde, 2) Fortschritt, 3) Kurs für morgen.",
            pt: "Anote claramente: 1) O que foi concluído hoje com números, 2) Avanço atual, 3) Rumo de amanhã.",
            id: "Catat dengan jelas: 1) Yang selesai hari ini dalam angka, 2) Metrik berjalan, 3) Arah besok."
          }
        },
        {
          name: {
            ko: "뇌의 통제권 회복 선언 및 숙면 이행",
            en: "Declare Brain Control Recovered & Transition to Sleep",
            ja: "脳の統制権回復宣言と熟睡への移行",
            zh: "宣告掌控权归位并安心步入深度睡眠",
            es: "Declare el Control Recuperado y Pase a Dormir",
            fr: "Déclarez le Contrôle Retrouvé & Passez au Sommeil",
            de: "Bestätigen Sie die Kontrolle & Gehen Sie Schlafen",
            pt: "Declare o Controle Recuperado e Vá Dormir",
            id: "Deklarasikan Kendali Otak Membaik & Siap Tidur Nyenyak"
          },
          text: {
            ko: "일기를 덮으며 '오늘의 항해는 안전하게 완료되었다'고 마음속으로 읊조린 뒤 편안하게 취침에 듭니다.",
            en: "Close the logbook, silently whisper 'Today's voyage is safely logged', and go to sleep peacefully.",
            ja: "ノートを閉じ「今日の航海は安全に完了した」と心で呟き、安心して眠りにつきます。",
            zh: "合上日志本，在心中默念“今天的航程已安全落案”，而后安心步入睡眠。",
            es: "Cierre la libreta, susurre 'El viaje de hoy está a salvo' y duerma con tranquilidad.",
            fr: "Fermez le carnet, murmurez 'Le voyage du jour est consigné' et dormez paisiblement.",
            de: "Schließen Sie das Buch, sagen Sie leise 'Die heutige Reise ist gesichert' und schlafen Sie ein.",
            pt: "Feche o diário, sussurre 'A viagem de hoje está segura' e dorma em paz.",
            id: "Tutup logbook, katakan 'Pelayaran hari ini telah tercatat aman', dan tidur dengan tenang."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "스마트폰 메모 앱에 작성해도 일지 효과가 같나요?",
            en: "Is writing in a phone notes app equally effective?",
            ja: "スマホのメモアプリに記録しても同じ効果がありますか？",
            zh: "用手机备忘录记录能获得相同的效果吗？",
            es: "¿Es igual de efectivo escribir en una app de notas en el móvil?",
            fr: "Est-ce aussi efficace d'écrire dans une application de notes ?",
            de: "Ist eine Notizen-App auf dem Handy genauso effektiv?",
            pt: "Escrever em um aplicativo de notas no celular é tão eficaz quanto?",
            id: "Apakah menulis di aplikasi catatan ponsel sama efektifnya?"
          },
          answer: {
            ko: "손으로 직접 종이에 기재하는 물리적 촉각 자극이 뇌의 운동 피질을 더 넓게 자극하여 편도체 진정 효과가 훨씬 탁월합니다. 수첩 사용을 추천합니다.",
            en: "Physical handwriting stimulates the motor cortex more deeply, achieving superior amygdala calming. Notebooks are recommended.",
            ja: "紙に手で書く触覚刺激のほうが脳の運動野を広く刺激し、偏桃体の安定効果が優れています。ノートをお勧めします。",
            zh: "在纸张上亲手书写的物理触觉刺激能更广泛地激发大脑运动皮层，达到远优于屏幕的镇静效果。强烈推荐手抄本。",
            es: "Escribir a mano en papel estimula más el córtex motor, logrando un mejor efecto en la amígdala. Se recomienda libreta.",
            fr: "Écrire à la main sur papier stimule mieux le cortex moteur, apaisant mieux l'amygdale. Le carnet est recommandé.",
            de: "Handschrift auf Papier stimuliert den motorischen Kortex stärker und beruhigt die Amygdala besser. Empfohlen.",
            pt: "Escrever à mão no papel estimula mais o córtex motor, acalmando melhor a amígdala. Recomenda-se diário físico.",
            id: "Menulis tangan di kertas merangsang korteks motorik lebih luas, menenangkan amigdala lebih baik. Pakailah buku catatan."
          }
        },
        {
          question: {
            ko: "너무 피곤해서 일기를 쓰지 못하고 잘 것 같은 날엔 어떻게 하나요?",
            en: "What if I'm too exhausted to write a full log entry before bed?",
            ja: "疲れすぎて日記を書けずに寝てしまいそうな日はどうすればいいですか？",
            zh: "如果太累无法完成完整日志该怎么办？",
            es: "¿Qué hacer si estoy demasiado agotado para escribir el diario?",
            fr: "Que faire si je suis trop fatigué pour écrire le journal ?",
            de: "Was tun, wenn ich zu müde für einen vollen Logbuch-Eintrag bin?",
            pt: "O que fazer se estiver exausto demais para escrever o diário?",
            id: "Bagaimana jika terlalu lelah untuk menulis logbook sebelum tidur?"
          },
          answer: {
            ko: "단 1줄, '오늘 완료: 과제 A' 하나만 적어도 괜찮습니다. 끊어지지 않는 기록의 연결 고리 자체가 뇌에 안도감을 제공합니다.",
            en: "Even writing a single line like 'Completed Task A' works. An unbroken streak gives your brain security.",
            ja: "たった1行「今日完了：タスクA」と書くだけでも大丈夫です。連続性が脳に安心感を与えます。",
            zh: "只需简短写下1行“今天完成：任务A”即可。无间断的记录连续性本身就能向大脑输送安全感。",
            es: "Incluso una sola línea como 'Completado: Tarea A' basta. Mantener la racha le da seguridad al cerebro.",
            fr: "Même 1 seule ligne comme 'Complété : Tâche A' suffit. La régularité rassure le cerveau.",
            de: "Eine einzige Zeile wie 'Heute erledigt: Aufgabe A' reicht. Die Kette gibt dem Gehirn Sicherheit.",
            pt: "Mesmo uma única linha como 'Concluído: Tarefa A' basta. Manter a sequência dá segurança ao cérebro.",
            id: "Cukup tulis 1 baris seperti 'Hari ini selesai: Tugas A'. Kontinuitas memberikan rasa aman pada otak."
          }
        }
      ]
    }
  },

  // 7. 비아트릭스 포터 (Beatrix Potter)
  {
    slug: 'potter-botanical-sketch',
    item: {
      id: 'potter-botanical-sketch',
      name: '비아트릭스 포터',
      gender: 'female',
      era: '근대',
      location: '영국',
      lifespan: '1866 - 1943',
      birthYear: 1866,
      bio: "'피터 래빗' 시리즈의 작가이자 영국 농촌 자연보호 및 세밀화 과학 관찰의 거장입니다.",
      habitName: '매일 아침 자연속 미시적 세밀 관찰과 스케치북 기록 루틴',
      tags: ['#창의', '#예술', '#아이디어', '#휴식', '#몰입'],
      timeOfDay: 'morning',
      requiredItems: ['스케치북과 연필', '돋보기 또는 야외 산책'],
      frequency: 'daily',
      historicalStory: "영국의 작가이자 균류 연구가였던 비아트릭스 포터는 레이크 디스트릭트 시골 농장에서 매일 아침 돋보기와 스케치북을 들고 수풀 속으로 나갔습니다. 그녀는 이끼, 버섯, 토끼의 미세 털과 식물 줄기의 세포 수준 세밀화를 그리며 자연의 극미시적 미학에 수 시간 동안 초집중했습니다.",
      sciencePrinciples: "미시적 대상에 고도의 시각적 초점을 맞추는 행위(Micro-focused visual attention)는 뇌의 상위 제어망인 집행 제어 네트워크(Executive Control Network)를 강력히 활성화합니다. 이는 뇌 속 잡다한 상념(Default Mode Network의 방황)을 수초 내에 완벽히 꺼버리고 청정한 영감을 주입합니다.",
      quote: "자연이 우리에게 보여주는 가장 미세한 비밀 속에 가장 위대한 이야기가 들어있다.",
      trigger: "시끄러운 소음 속에서 집중력을 단숨에 되살리고 맑은 영감이 필요할 때",
      modernGuide: [
        "아침 산책이나 휴식 시간에 나뭇잎, 꽃잎, 혹은 소품 하나를 유심히 돋보기 보듯 관찰합니다.",
        "미세한 결, 질감, 색상 변화를 3분간 유심히 주시하고 디테일을 감상합니다.",
        "느낀 점이나 세부 형태를 1줄 메모나 간단한 라인 스케치로 기록에 남깁니다."
      ],
      actionName: "아침 3분 사물 세밀 관찰 & 디테일 기록 (포터 루틴)",
      sources: [
        "Linda Lear, *Beatrix Potter: A Life in Nature* (2007)",
        "Victoria and Albert Museum Archives"
      ]
    },
    translations: {
      title: {
        ko: "'피터 래빗' 저자의 비밀? 비아트릭스 포터의 아침 미시적 자연 관찰 루틴",
        en: "Author of 'Peter Rabbit'? Beatrix Potter's Morning Botanical Observation Routine",
        ja: "「ピーターラビット」著者の秘密？ビアトリクス・ポターの朝の超微小自然観察ルーティン",
        zh: "《彼得兔》作者的秘密？比阿特丽克丝·波特的清晨植物微观观察习惯",
        es: "¿La autora de 'Peter Rabbit'? La rutina de observación botánica de Beatrix Potter",
        fr: "L'auteure de 'Pierre Lapin' ? La routine d'observation botanique de Beatrix Potter",
        de: "Die Autorin von 'Peter Hase'? Beatrix Potters morgendliche Botanik-Beobachtungs-Routine",
        pt: "A autora de 'Peter Rabbit'? A rotina de observação botânica de Beatrix Potter",
        id: "Penulis 'Peter Rabbit'? Rutinitas Pengamatan Botani Mikro Pagi Beatrix Potter"
      },
      description: {
        ko: "'피터 래빗'의 저자 비아트릭스 포터가 매일 아침 돋보기로 식물과 이끼의 미세 구조를 세밀 관찰하며 잡념을 끄고 예술적 영감을 키운 뇌과학 습관.",
        en: "Discover how Beatrix Potter boosted visual focus and creative genius through morning microscopic nature sketching.",
        ja: "「ピーターラビット」の作者ポターが毎朝植物や苔の微細構造を観察し、雑念を消しインスピレーションを育てた習慣を紹介します。",
        zh: "介绍《彼得兔》作者波特每天早晨用放大镜细致观察植物与苔藓微观结构、消除杂念并滋养艺术灵感的习惯。",
        es: "Descubra cómo Beatrix Potter impulsó su enfoque y genio creativo observando la naturaleza al detalle.",
        fr: "Découvrez comment Beatrix Potter a stimulé sa concentration et son génie créatif en observant la nature.",
        de: "Erfahren Sie, wie Beatrix Potter durch die Beobachtung mikroskopischer Naturstrukturen Fokus fand.",
        pt: "Descubra como Beatrix Potter impulsionou seu foco e genialidade criativa observando a natureza.",
        id: "Temukan bagaimana Beatrix Potter meningkatkan fokus dan jenius kreatifnya dengan mengamati alam mikro."
      },
      authority: {
        ko: "린다 리 전기 'Beatrix Potter: A Life in Nature' 및 빅토리아 알버트 박물관 사료",
        en: "Linda Lear Biography 'Beatrix Potter: A Life in Nature' & V&A Museum Archives",
        ja: "リンダ・リア評伝「Beatrix Potter: A Life in Nature」およびV&A博物館史料",
        zh: "琳达·里尔传记《Beatrix Potter: A Life in Nature》与V&A博物馆档案馆史料",
        es: "Biografía 'Beatrix Potter: A Life in Nature' de Linda Lear y Archivos del Museo V&A",
        fr: "Biographie 'Beatrix Potter: A Life in Nature' par Linda Lear & Archives du V&A Museum",
        de: "Linda Lear Biografie 'Beatrix Potter: A Life in Nature' & V&A Museum Archive",
        pt: "Biografia 'Beatrix Potter: A Life in Nature' de Linda Lear e Arquivos do Museu V&A",
        id: "Biografi Linda Lear 'Beatrix Potter: A Life in Nature' & Arsip Museum V&A"
      },
      intro: {
        ko: "전 세계 수억 명의 사랑을 받는 '피터 래빗'을 탄생시키고 우수한 균류학 학술 가치를 남긴 영국의 작가 비아트릭스 포터. 동화적 따뜻함과 압도적인 관찰 디테일의 비결은 무엇이었을까요? 🌿\n\n포터는 레이크 디스트릭트의 푸른 농장에서 매일 아침 돋보기와 스케치북을 들고 들판으로 나갔습니다. 이끼 표면의 미세한 결, 버섯의 포자 자루, 토끼 귀의 실핏줄 하나까지 현미경 수준으로 관찰하고 스케치했습니다. 사물의 아주 미시적인 부분에 집중하는 습관이 머릿속 온갖 번뇌를 차단하고 맑은 통찰을 가져다주었습니다.\n\n오늘 BuildSelf에서는 비아트릭스 포터의 아침 사물 세밀 관찰 루틴을 소개합니다.",
        en: "Beatrix Potter, creator of 'Peter Rabbit' and sharp mycological illustrator. Where did her magical observation detail come from? 🌿\n\nEvery morning, Potter took her magnifying glass and sketchbook into the fields to draw moss, mushrooms, and rabbits at microscopic scale.\n\nToday, BuildSelf presents the neuroscience behind Beatrix Potter's micro-focused observation routine.",
        ja: "世界中で愛される「ピーターラビット」を生み出した英国の作家ビアトリクス・ポター。圧倒的な観察のディテールの秘密とは？ 🌿\n\n毎朝虫眼鏡とスケッチブックを持って野原に出かけ、苔の表面やキノコ、ウサギの毛並みを顕微鏡レベルで観察・描写しました。\n\n今日のBuildSelfでは、ポターの細密観察ルーティンを紹介します。",
        zh: "创作出风靡全球的《彼得兔》并留下精湛真菌学插画的英国作家比阿特丽克丝·波特。她那如魔法般细腻的细节观察力究竟源自何处？ 🌿\n\n每天早晨，波特都会拿着放大镜与草稿本走进田野，以显微镜般的精细度观察描绘苔藓纹理、蘑菇孢子与兔子毛发。\n\n今天 BuildSelf 将为您介绍波特微观观察习惯背后的 Brain Science。",
        es: "Beatrix Potter, creadora de 'Peter Rabbit'. ¿De dónde provenía su mágico detalle de observación? 🌿\n\nCada mañana llevaba su lupa y libreta a los campos para dibujar musgo, hongos y conejos a escala microscópica.\n\nHoy BuildSelf presenta la neurociencia tras la rutina de observación de Beatrix Potter.",
        fr: "Beatrix Potter, créatrice de 'Pierre Lapin'. D'où venait son sens magique du détail ? 🌿\n\nChaque matin, elle emportait loupe et carnet aux champs pour dessiner mousse, champignons et lapins à l'échelle micro.\n\nAujourd'hui BuildSelf vous dévoile la science de la routine d'observation de Beatrix Potter.",
        de: "Beatrix Potter, Schöpferin von 'Peter Hase'. Woher stammte ihr magischer Sinn für Details? 🌿\n\nJeden Morgen ging sie mit Lupe und Skizzenbuch auf die Felder, um Moos und Pilze im Mikromaßstab zu zeichnen.\n\nHeute präsentiert BuildSelf die Wissenschaft hinter Potters Beobachtungs-Routine.",
        pt: "Beatrix Potter, criadora de 'Peter Rabbit'. De onde vinha seu mágico detalhamento de observação? 🌿\n\nTodas as manhãs ela levava sua lupa e diário aos campos para desenhar musgo, cogumelos e coelhos em escala micro.\n\nHoje o BuildSelf apresenta a neurociência da rotina de observação de Beatrix Potter.",
        id: "Beatrix Potter, pencipta 'Peter Rabbit'. Dari mana datangnya keahlian pengamatan detailnya? 🌿\n\nSetiap pagi ia membawa kaca pembesar dan buku sketsa ke ladang untuk menggambar lumut dan jamur secara mikro.\n\nHari ini BuildSelf menyajikan sains di balik rutinitas pengamatan mikro Beatrix Potter."
      },
      whyTitle: {
        ko: "미시적 초점 맞춤(Micro-focused attention)을 통한 DMN 방황 차단과 집행 제어",
        en: "Micro-Focused Attention for DMN Wandering Cut & Executive Control",
        ja: "超微小焦点合わせによるDMN迷走遮断と執行制御",
        zh: "通过微观专注力关停 DMN 大脑杂念与激活执行控制",
        es: "Enfoque Micro para Cortar la Mente Vagabunda y Activar el Control Ejecutivo",
        fr: "Attention Micro pour Couper le Vagabondage Mental & Activer le Contrôle",
        de: "Mikro-Fokussierung zur Abschaltung des Gedankenkarussells & Exekutivkontrolle",
        pt: "Foco Micro para Cortar a Mente Vagabunda e Activar o Controle Executivo",
        id: "Atensi Fokus Mikro untuk Menghentikan DMN & Mengaktifkan Kontrol Eksekutif"
      },
      whyDesc: {
        ko: "뇌가 과거의 후회나 미래의 걱정으로 산만해지는 것은 디폴트 모드 네트워크(DMN)가 과열되어 방황하기 때문입니다.\n\n포터처럼 사물의 미세한 패턴이나 결에 시선을 바짝 고정하는 <strong>'미시적 초점 훈련'</strong>은 시각적 신호를 집행 제어 네트워크(Executive Network)로 몰아줍니다. 잡념 회로를 온전히 차단하고 뇌를 즉각적인 맑은 평정 상태로 돌려놓습니다.",
        en: "Wandering thoughts occur when the Default Mode Network (DMN) overheats with regrets or worries.\n\nFixing vision on micro patterns via <strong>'Micro-Focused Attention'</strong> routes neural power to the Executive Network, silencing mental noise.",
        ja: "過去の後悔や未来の心配で頭が散らかるのは、DMN（デフォルト・モード・ネットワーク）が迷走しているためです。\n\n細部をじっと見つめる<strong>「超微小焦点訓練」</strong>は雑念回路を遮断し、脳を清澄な集中状態に戻します。",
        zh: "大脑沉浸于过去的反思或未来的焦虑中，是因为“默认模式网络(DMN)”发生了过热漂移。\n\n像波特那样将视线极其紧凑地聚焦于微观纹理与图案的<strong>“微观专注训练”</strong>，能瞬时将大脑控制权交还给执行控制网络，关停杂念。",
        es: "La mente vaga cuando la Red por Defecto (DMN) se sobrecalienta con preocupaciones.\n\nFijar la vista en micro patrones mediante el <strong>'Enfoque Micro'</strong> apaga el ruido mental.",
        fr: "L'esprit vagabonde lorsque le Réseau par Défaut (DMN) surchauffe.\n\nFixer des micro motifs via l'<strong>'Attention Micro'</strong> éteint le bruit mental.",
        de: "Gedanken wandernd wenn das Default Mode Network (DMN) überhitzt.\n\nDas Fixieren von Mikromustern durch <strong>'Mikro-Fokussierung'</strong> schaltet Lärm aus.",
        pt: "A mente vaga quando a Rede por Defeito (DMN) superaquece com preocupações.\n\nFixar a visão em micro padrões via <strong>'Foco Micro'</strong> silencia o ruído mental.",
        id: "Pikiran melayang saat Default Mode Network (DMN) mengalami kelebihan beban.\n\nMengarahkan pandangan pada pola mikro lewat <strong>'Atensi Fokus Mikro'</strong> menghentikan kebisingan pikiran."
      },
      cautionTitle: {
        ko: "멀리 보지 말고 눈앞 사물의 미세 결 하나에 몰입하세요",
        en: "Focus on One Micro Detail Right Before You Rather Than the Whole",
        ja: "全体ではなく目の前の物の1つの微細な模様に没頭しましょう",
        zh: "切勿好高骛远，专注于眼前事物的一处微观纹理",
        es: "Concéntrese en un micro detalle frente a usted más que en el todo",
        fr: "Concentrez-vous sur un micro détail juste devant vous plutôt que sur le tout",
        de: "Konzentrieren Sie sich auf ein Mikro-Detail direkt vor Ihnen",
        pt: "Concentre-se em um micro detalhe à sua frente em vez do todo",
        id: "Fokuslah pada satu detail mikro di depan Anda daripada keseluruhannya"
      },
      cautionDesc: {
        ko: "이 관찰 루틴의 핵심은 거창한 예술적 스케치가 아닙니다. 잎사귀 하나, 연필 끝 하나, 혹은 손등의 피부 결을 돋보기로 보듯 미시적으로 탐색하는 그 집중 과정 자체가 뇌를 치유합니다.",
        en: "The key is not artistic drawing perfection. It is the micro exploration of a leaf vein or skin texture that heals the brain.",
        ja: "目的は絵を上手に描くことではありません。葉脈や皮膚の模様をミクロに探索するプロセス自体が脳を癒やします。",
        zh: "本观照习惯的核心绝非绘制精美的图画，而是像拿放大镜般极其专注地探索一片树叶纹理或手背纹理的过程本身，即能疗愈大脑。",
        es: "La clave no es dibujar perfecto. Es la exploración micro de una vena de hoja o textura de piel lo que sana el cerebro.",
        fr: "La clé n'est pas le dessin parfait. C'est l'exploration d'une veine de feuille qui guérit le cerveau.",
        de: "Der Schlüssel ist nicht perfektes Zeichnen. Es ist das mikro-Erkunden einer Blattader, das heilend wirkt.",
        pt: "A chave não é desenhar perfeitamente. É a micro exploração de uma veia de folha que cura o cérebro.",
        id: "Kuncinya bukanlah hasil gambar yang sempurna. Ini adalah eksplorasi mikro urat daun yang menyembuhkan otak."
      },
      steps: [
        {
          name: {
            ko: "미시적 관찰 대상 사물 1개 선택",
            en: "Select 1 Micro Observation Object",
            ja: "超微小観察対象のオブジェクト1つの selected",
            zh: "挑选1件微观观照对象",
            es: "Seleccionar 1 Objeto para Observación Micro",
            fr: "Sélectionner 1 Objet d'Observation Micro",
            de: "Auswählen 1 Mikro-Beobachtungsobjekts",
            pt: "Selecionar 1 Objeto para Observação Micro",
            id: "Pilih 1 Objek Pengamatan Mikro"
          },
          text: {
            ko: "주변의 나뭇잎, 사과 표면, 나무 결, 혹은 커피 원두 등 디테일이 살아있는 사물 1개를 손에 쥡니다.",
            en: "Pick up a detailed object such as a leaf, apple surface, wood grain, or coffee bean in your hand.",
            ja: "身近な葉っぱや果物の表面、木目、コーヒー豆など、細部のあるオブジェクトを1つ手に取ります。",
            zh: "在身边随手拾起一件细节丰富的物体，如一片树叶、苹果表面、木材纹理或咖啡豆。",
            es: "Tome un objeto detallado como una hoja, la superficie de una manzana, grano de madera o café.",
            fr: "Prenez un objet détaillé comme une feuille, la peau d'une pomme, du grain de bois ou un grain de café.",
            de: "Nehmen Sie einen detaillierten Gegenstand wie ein Blatt, eine Apfelschale oder eine Kaffeebohne in die Hand.",
            pt: "Pegue um objeto detalhado como uma folha, a casca de uma maçã, fibra de madeira ou grão de café.",
            id: "Ambil satu objek berdetail seperti daun, permukaan apel, serat kayu, atau biji kopi."
          }
        },
        {
          name: {
            ko: "3분간의 돋보기 시각 초점 밀착 관찰",
            en: "3-Minute Magnifying Visual Focus Close-Up",
            ja: "3分間の虫眼鏡視覚焦点密着観察",
            zh: "3分钟放大镜式极端视线聚焦观照",
            es: "3 Minutos de Observación de Enfoque Visual de Cerca",
            fr: "3 Minutes d'Observation Visuelle Rapprochée",
            de: "3-minütige Nahbeobachtung mit Fokus",
            pt: "3 Minutos de Observação de Foco Visual de Perto",
            id: "3 Menit Pengamatan Dekat Fokus Visual Kaca Pembesar"
          },
          text: {
            ko: "돋보기를 대듯 눈을 사물 10cm 앞으로 가져가 미세한 선, 질감, 그늘의 변화에 온 신경을 밀착시킵니다.",
            en: "Bring your eyes 10cm away as if using a magnifying glass, focusing entirely on fine lines, textures, and subtle shades.",
            ja: "虫眼鏡をあてるように目をオブジェクト10cm前まで近づけ、細い線や質感、影の変化に集中します。",
            zh: "如拿放大镜般将视线拉近至距离物体10厘米处，将全副注意力粘合于微细线条、质感与阴影渐变上。",
            es: "Acerque los ojos a 10cm como con una lupa, concentrándose en líneas finas, texturas y sombras.",
            fr: "Approchez vos yeux à 10cm comme avec une loupe, en vous concentrant sur les lignes fines et textures.",
            de: "Halten Sie den Gegenstand 10cm vor Ihre Augen und fixieren Sie feine Linien und Texturen.",
            pt: "Aproxime os olhos a 10cm como com uma lupa, focando em linhas finas, texturas e sombras.",
            id: "Dekatkan mata hingga 10cm seolah pakai kaca pembesar, berfokus pada garis halus dan tekstur."
          }
        },
        {
          name: {
            ko: "발견한 디테일 1줄 메모 또는 라인 묘사",
            en: "Record 1 Detail Observation Note or Line Sketch",
            ja: "発見したディテール1行メモまたはライン描写",
            zh: "用1行文字或简单线条记录细微发现",
            es: "Registre 1 Nota de Detalle o Boceto de Líneas",
            fr: "Notez 1 Détail Observé ou Dessinez une Ligne",
            de: "Halten Sie 1 Detailnotiz oder Skizze fest",
            pt: "Registre 1 Nota de Detalhe ou Esboço de Linhas",
            id: "Catat 1 Detail Temuan atau Gambarkan Garis Sederhana"
          },
          text: {
            ko: "관찰 직후 '잎사귀 뒤편 미세 가시 패턴'처럼 새로 발견한 관찰 사실을 노트에 1줄로 기재합니다.",
            en: "Right after observing, record 1 new detail fact like 'Microspines on the leaf back' in your journal.",
            ja: "観察直後、「葉の裏の微細な棘のパターン」のように新しく発見した観察事実をノートに1行記録します。",
            zh: "观照结束后，在记录本上写下1行新发现的细节描述，如“叶片背面的微小绒毛排列结构”。",
            es: "Justo después de observar, anote 1 detalle descubierto como 'Patrón de microespinas en el envés de la hoja'.",
            fr: "Juste après l'observation, notez 1 détail découvert comme 'Motif de micro-épines sous la feuille'.",
            de: "Halten Sie direkt nach der Beobachtung 1 Detail fest wie 'Mikrodornen auf der Blattrückseite'.",
            pt: "Logo após observar, anote 1 detalhe descoberto como 'Padrão de microespinhas no verso da folha'.",
            id: "Segera setelah mengamati, catat 1 detail temuan baru seperti 'Pola duri mikro di belakang daun'."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "그림을 잘 그리지 못하는데도 스케치를 해야 하나요?",
            en: "Do I need to draw even if I can't sketch well?",
            ja: "絵を上手く描けなくてもスケッチをする必要がありますか？",
            zh: "画画不好也必须要进行线条描绘草图吗？",
            es: "¿Tengo que dibujar aunque no sepa abocetar bien?",
            fr: "Dois-je dessiner même si je ne sais pas dessiner ?",
            de: "Muss ich skizzieren, auch wenn ich nicht gut zeichnen kann?",
            pt: "Preciso desenhar mesmo se não souber esboçar bem?",
            id: "Apakah harus menggambar meskipun tidak pandai sketsa?"
          },
          answer: {
            ko: "아닙니다! 그림 대신 발견한 특징을 텍스트로 적어도 관찰에 뇌가 몰입되는 효과는 100% 동일합니다.",
            en: "No! Writing down discovered details as text provides the exact same 100% brain focus benefits.",
            ja: "いいえ！絵の代わりに発見した特徴をテキストで書き留めても、脳が没頭する効果は100%同じです。",
            zh: "完全不必！用文字写下观察到的特征，引发大脑深度专注与消除杂念的效果是 100% 相同的。",
            es: "¡No! Escribir los detalles descubiertos en texto ofrece exactamente los mismos beneficios de enfoque.",
            fr: "Non ! Écrire les détails observés sous forme de texte offre exactement les mêmes bienfaits.",
            de: "Nein! Das Aufschreiben entdeckter Details in Textform bringt genau denselben Fokus-Effekt.",
            pt: "Não! Escrever os detalhes descobertos em texto oferece exatamente os mesmos benefícios de foco.",
            id: "Tidak! Menuliskan detail temuan dalam teks memberikan manfaat fokus otak yang 100% sama."
          }
        },
        {
          question: {
            ko: "사무실이나 실내에서도 자연물 대신 적용할 수 있나요?",
            en: "Can I apply this indoors or in an office using non-natural objects?",
            ja: "オフィスや室内でも自然物の代わりに適用できますか？",
            zh: "在办公室或室内可以用非自然物品替代执行吗？",
            es: "¿Se puede aplicar en interiores u oficinas usando objetos no naturales?",
            fr: "Peut-on l'appliquer en intérieur ou au bureau avec des objets burocratiques ?",
            de: "Kann man dies im Büro mit nicht-natürlichen Gegenständen anwenden?",
            pt: "Pode-se aplicar em ambientes fechados usando objetos não naturais?",
            id: "Apakah bisa diterapkan di kantor menggunakan benda non-alami?"
          },
          answer: {
            ko: "네, 만년필 촉의 미세 홈, 종이 재질 결, 가죽 지갑의 재봉선 등 미세한 질감이 있는 모든 인공물에서도 뛰어난 몰입 효과를 얻을 수 있습니다.",
            en: "Yes! Fountain pen nibs, paper texture grain, or leather stitching provide excellent micro-focus.",
            ja: "はい、万年筆のペン先や紙の繊維、革製品の縫い目など微細な質感がある全ての人工物で効果が得られます。",
            zh: "当然可以！钢笔尖的微小缝隙、纸张纤维纹理或皮革包的皮缝线，凡具备微观质感的事物均有极佳效果。",
            es: "¡Sí! El plumín de una estilográfica, la textura del papel o las costuras de cuero funcionan de maravilla.",
            fr: "Oui ! La plume d'un stylo, le grain du papier ou les coutures d'un cuir offrent une excellente focalisation.",
            de: "Ja! Füllfederhalter-Federn, Papierfasern oder Ledernähte bieten hervorragende Mikro-Fokussierung.",
            pt: "Sim! A pena de uma caneta, a textura do papel ou as costuras de couro oferecem excelente foco.",
            id: "Tentu! Ujung pena, serat kertas, atau jahitan kulit memberikan fokus mikro yang sangat baik."
          }
        }
      ]
    }
  },

  // 8. 요하네스 구텐베르크 (Johannes Gutenberg)
  {
    slug: 'gutenberg-movable-type-inspection',
    item: {
      id: 'gutenberg-movable-type-inspection',
      name: '요하네스 구텐베르크',
      gender: 'male',
      era: '중세',
      location: '독일',
      lifespan: '1400 - 1468',
      birthYear: 1400,
      bio: "금속 활자와 인쇄기를 발명하여 지식의 대중화와 인류 정보 혁명을 일궈낸 세기의 발명가입니다.",
      habitName: '매일 아침 금속 활자 블록 수평 미세 정밀도 점검 및 오차 검수 루틴',
      tags: ['#성공습관', '#생산성', '#몰입', '#의사결정', '#계획'],
      timeOfDay: 'morning',
      requiredItems: ['인쇄판 및 활자 조각', '측정 도구'],
      frequency: 'daily',
      historicalStory: "독일 마인츠의 인쇄 혁명가 구텐베르크는 42줄 성경을 인쇄할 때 매일 아침 작업장에서 납-안티몬 합금 활자 조각 하나하나의 수평 정밀도와 행간 오차를 직접 눈과 손으로 검수했습니다. 오차 0.1mm도 허용치 않는 그의 매일 아침 활자 검수 습관이 구텐베르크 성경이라는 역사적 걸작을 만들었습니다.",
      sciencePrinciples: "반복적 정밀 미세 오차 검수 행위는 오류 감지 시 발생하는 뇌파인 ERN(Error-Related Negativity)의 반응성을 강화합니다. 이는 뇌의 보상계 도파민 루프를 정밀 과제 완성 쪽으로 고도화하여 업무 완성도와 품질 통제력을 극대화합니다.",
      quote: "인쇄기는 신의 가장 높은 선물이며 사람들에게 진리의 빛을 전달하는 엔진이다.",
      trigger: "시스템 오차를 제로화하고 프로젝트 완성 품질을 극대화하고 싶을 때",
      modernGuide: [
        "아침 업무 시작 직후 5분간 시스템, 코드, 디스플레이의 기본 오차를 체크하는 '구텐베르크 정밀 검수 시간'을 가집니다.",
        "수치, 정렬, 레이아웃의 균형 오차를 눈으로 직접 지목하며 확인합니다.",
        "오차 제로 상태를 확인한 후 비로소 대량 생산이나 본 작업에 착수합니다."
      ],
      actionName: "아침 5분 활자 오차 점검 & 수평 검수 (구텐베르크 루틴)",
      sources: [
        "Albert Kapr, *Johannes Gutenberg: The Man and His Invention* (1996)",
        "Gutenberg Museum Mainz Archives"
      ]
    },
    translations: {
      title: {
        ko: "인쇄 혁명의 거장? 구텐베르크의 아침 금속 활자 정밀 오차 검수 루틴",
        en: "Master of the Printing Revolution? Gutenberg's Morning Movable Type Inspection",
        ja: "印刷革命の巨匠？グーテンベルクの朝の金属活字精密誤差点検ルーティン",
        zh: "印刷术革命的巨匠？古腾堡的清晨活字精准校对习惯",
        es: "¿El maestro de la Revolución de la Imprenta? La rutina de inspección de tipos de Gutenberg",
        fr: "Le maître de la Révolution de l'Imprimerie ? La routine d'inspection de Gutenberg",
        de: "Der Meister der Druckrevolution? Gutenbergs morgendliche Lettern-Prüf-Routine",
        pt: "O mestre da Revolução da Imprensa? A rotina de inspeção de tipos móveis de Gutenberg",
        id: "Master Revolusi Percetakan? Rutinitas Inspeksi Presisi Cetak Gutenberg"
      },
      description: {
        ko: "금속 활자의 발명가 구텐베르크가 매일 아침 활자 수평 오차를 손과 눈으로 검수하며 시스템 표준과 품질을 지켜낸 뇌과학적 습관.",
        en: "Discover how Johannes Gutenberg achieved zero-error publishing through his morning movable type inspection habit.",
        ja: "金属活字の発明者グーテンベルクが毎朝活字の誤差を手と目で点検し、品質を守り抜いた脳科学的習慣を紹介します。",
        zh: "介绍金属活字发明家古腾堡每天早晨亲手校验活字对齐与水平误差、守护史诗级品质标准的决策习惯。",
        es: "Descubra cómo Gutenberg logró publicaciones sin errores revisando sus tipos móviles cada mañana.",
        fr: "Découvrez comment Gutenberg publiait sans erreur en inspectant ses caractères chaque matin.",
        de: "Erfahren Sie, wie Gutenberg durch seine morgendliche Prüfroutine fehlerfreie Drucke erzielte.",
        pt: "Descubra como Gutenberg alcançou publicações sem erros revisando seus tipos móveis todas as manhãs.",
        id: "Temukan bagaimana Gutenberg mencapai percetakan tanpa kesalahan dengan memverifikasi tipe cetak tiap pagi."
      },
      authority: {
        ko: "알베르트 카프 전기 'Johannes Gutenberg' 및 마인츠 구텐베르크 박물관 사료",
        en: "Albert Kapr Biography 'Johannes Gutenberg' & Gutenberg Museum Mainz Archives",
        ja: "アルバート・カプラ評伝「Johannes Gutenberg」およびマインツ・グーテンベルク博物館史料",
        zh: "阿尔伯特·卡普尔传记《Johannes Gutenberg》与美因茨古腾堡博物馆史料",
        es: "Biografía 'Johannes Gutenberg' de Albert Kapr y Archivos del Museo Gutenberg de Maguncia",
        fr: "Biographie par Albert Kapr 'Johannes Gutenberg' & Archives du Gutenberg Museum",
        de: "Albert Kapr Biografie 'Johannes Gutenberg' & Archive des Gutenberg-Museums Mainz",
        pt: "Biografia 'Johannes Gutenberg' de Albert Kapr e Arquivos do Museu Gutenberg",
        id: "Biografi Albert Kapr 'Johannes Gutenberg' & Arsip Museum Gutenberg Mainz"
      },
      intro: {
        ko: "15세기 금속 활자와 인쇄기를 발명하여 지식의 독점을 깨부수고 인류 정보 혁명을 촉발한 지식의 선구자 요하네스 구텐베르크. 세계 기록 유산인 '42줄 성경'의 완벽한 아름다움은 어떻게 유지되었을까요? 🖨️\n\n구텐베르크는 마인츠의 인쇄소에서 매일 아침 작업에 들어가기 전, 세팅된 활자 블록들의 수평과 오차를 직접 손가락으로 매만지고 눈으로 검수했습니다. 0.1mm의 오차도 넘기지 않는 매일의 시스템 오차 정밀 점검이 600년이 지나도 타의 추종을 불허하는 세계 최고 인쇄 품질을 만들어냈습니다.\n\n오늘 BuildSelf에서는 구텐베르크의 아침 활자 수평 오차 점검 습관의 신경과학적 메커니즘을 소개합니다.",
        en: "Johannes Gutenberg, inventor of movable metal type printing. How did he maintain absolute zero-error quality for the 42-Line Bible? 🖨️\n\nEvery morning before starting presses, he physically touched and visually inspected the alignment of type blocks to catch 0.1mm errors.\n\nToday, BuildSelf presents the neuroscience behind Gutenberg's morning type inspection routine.",
        ja: "15世紀、金属活字と印刷機を発明し知識の革命を引き起こした先駆者ヨハネス・グーテンベルク。世界遺産「42行聖書」の完璧な美しさはどう維持されたのでしょうか？ 🖨️\n\n毎朝作業に入る前に、セットされた活字ブロックの水平と誤差を指と目で直接点検しました。\n\n今日のBuildSelfでは、グーテンベルクの朝の活字誤差点検ルーティンを紹介します。",
        zh: "15世纪发明金属活字与印刷机、引发知识大普及与信息革命的先驱约翰内斯·古腾堡。世界文化遗产《42行圣经》的极致美感与品质是如何保持的？ 🖨️\n\n每天早晨开工前，古腾堡都会在美因茨的印刷工坊里，用手指摸索并目测校对活字版块的平整度与微小缝隙，绝不放过0.1毫米的偏差。\n\n今天 BuildSelf 将为您介绍古腾堡活字对齐校验习惯背后的 ERN 脑波机制。",
        es: "Johannes Gutenberg, inventor de la imprenta de tipos móviles. ¿Cómo mantenía una calidad sin errores en la Biblia de 42 líneas? 🖨️\n\nCada mañana inspeccionaba físicamente la alineación de los tipos para corregir desviaciones de 0.1mm.\n\nHoy BuildSelf presenta la neurociencia tras la rutina de inspección de tipos de Gutenberg.",
        fr: "Johannes Gutenberg, inventeur de l'imprimerie. Comment maintenait-il une qualité sans erreur pour la Bible à 42 lignes ? 🖨️\n\nChaque matin, il inspectait manuellement l'alignement des caractères pour corriger les erreurs de 0,1 mm.\n\nAujourd'hui BuildSelf vous dévoile la science de la routine d'inspection de Gutenberg.",
        de: "Johannes Gutenberg, Erfinder des Buchdrucks. Wie bewahrte er fehlerfreie Qualität beim Druck der 42-zeiligen Bibel? 🖨️\n\nJeden Morgen prüfte er manuell die Ausrichtung der Letternblöcke auf 0,1-mm-Fehler.\n\nHeute präsentiert BuildSelf die Wissenschaft hinter Gutenbergs Prüfroutine.",
        pt: "Johannes Gutenberg, inventor da imprensa de tipos móveis. Como mantinha qualidade sem erros na Bíblia de 42 linhas? 🖨️\n\nTodas as manhãs ele inspecionava a alinhamento dos tipos para corrigir desvios de 0,1mm.\n\nHoje o BuildSelf apresenta a neurociência da rotina de inspeção de Gutenberg.",
        id: "Johannes Gutenberg, penemu mesin cetak tipe logam. Bagaimana ia menjaga kualitas tanpa kesalahan pada Alkitab 42 Baris? 🖨️\n\nSetiap pagi ia memeriksa alur dan kerapatan balok tipe cetak untuk mengoreksi kesalahan 0,1mm.\n\nHari ini BuildSelf menyajikan sains di balik rutinitas inspeksi tipe cetak Gutenberg."
      },
      whyTitle: {
        ko: "ERN(오류 관련 음성 파형) 강화를 통한 품질 기준 고도화와 오차 자동 감지",
        en: "ERN Wave Enhancement for High Quality Standards & Error Detection",
        ja: "ERN（エラー関連陰性波形）強化による品質基準高度化とエラー自動検知",
        zh: "通过 ERN 脑波强化大幅提升品质标准与自动感知偏差",
        es: "Mejora de Ondas ERN para Altos Estándares de Calidad y Detección de Errores",
        fr: "Amélioration des Ondes ERN pour de Hauts Standards de Qualité",
        de: "ERN-Wellen-Verstärkung für hohe Qualitätsstandards & Fehlererkennung",
        pt: "Melhoria de Ondas ERN para Altos Padrões de Qualidade e Detecção de Erros",
        id: "Peningkatan Gelombang ERN untuk Standar Kualitas & Deteksi Kesalahan"
      },
      whyDesc: {
        ko: "작업 시스템에 조그마한 유격이나 미세 오류를 방치하면 미세한 실수가 누적되어 결국 전체 대형 시스템 부실로 이어집니다.\n\n구텐베르크처럼 작업 직전 5분간 시스템 정렬 수평을 점검하는 <strong>'오차 점검 루틴'</strong>은 뇌의 오류 감지 피질인 ERN(Error-Related Negativity)의 감도를 훈련시킵니다. 미세한 오차도 즉각 알아채고 정정하게 하여 결함 없는 최고 품질을 보장합니다.",
        en: "Leaving minor errors uncorrected causes system-wide breakdowns over time.\n\n5 minutes of <strong>'Alignment Inspection'</strong> before work trains ERN sensitivity, enabling your brain to instantly spot and fix mistakes.",
        ja: "作業システムの些細なズレを放置すると、最終的にシステム全体の欠陥に繋がります。\n\n作業直前の5分間の<strong>「誤差点検ルーティン」</strong>は脳のエラー検知皮質（ERN）の感度を訓練し、無欠陥の品質を保証します。",
        zh: "对工作系统中的微小偏差听之任之，微小疏漏将不断累积并导致最终整个大型系统的崩溃。\n\n在开工前花5分钟进行<strong>“对齐与误差点检”</strong>，能大幅训练大脑错误相关负波(ERN)的敏锐度，让偏差在萌芽期即被发现并纠正。",
        es: "Dejar pequeños errores sin corregir causa fallos a nivel de sistema con el tiempo.\n\n5 minutos de <strong>'Inspección de Alineación'</strong> entrenan la sensibilidad ERN para corregir fallos al instante.",
        fr: "Laisser de petites erreurs non corrigées entraîne des pannes globales.\n\n5 minutes d'<strong>'Inspection d'Alignement'</strong> entraînent la sensibilité ERN à corriger les erreurs.",
        de: "Kleine Fehler unkorrigiert zu lassen führt zu Systemausfällen.\n\n5 Minuten <strong>'Ausrichtungsprüfung'</strong> schulen die ERN-Empfindlichkeit zur sofortigen Korrektur.",
        pt: "Deixar pequenos erros sem correção causa falhas em todo o sistema.\n\n5 minutos de <strong>'Inspeção de Alinhamento'</strong> treinam a sensibilidade ERN para corrigir falhas.",
        id: "Membiarkan kesalahan kecil menyebabkan kegagalan sistemik secara bertahap.\n\n5 menit <strong>'Inspeksi Keselarasan'</strong> melatih sensitivitas ERN untuk mengoreksi kesalahan seketika."
      },
      cautionTitle: {
        ko: "습관화된 시스템 점검으로 감에 의한 방심을 막으세요",
        en: "Prevent Carelessness by Making Inspection Systematic",
        ja: "習慣化されたシステム点検で油断を防ぎましょう",
        zh: "通过常规系统校对杜绝凭经验掉以轻心",
        es: "Evite el descuido haciendo que la inspección sea sistemática",
        fr: "Évitez l'inattention en rendant l'inspection systématique",
        de: "Vermeiden Sie Nachlässigkeit durch systematische Prüfung",
        pt: "Evite a desatenção tornando a inspeção sistemática",
        id: "Cegah kelalaian dengan menjadikan inspeksi sebagai sistem"
      },
      cautionDesc: {
        ko: "'이 정도면 대충 맞겠지'라는 방심이 대형 인쇄 구김을 만듭니다. 매일 아침 5분간 시스템 정렬 수평을 눈과 손으로 직관 확인하는 프로세스를 규칙으로 굳히세요.",
        en: "Assuming 'This looks good enough' causes major publishing misprints. Solidify the 5-minute alignment check as a rule.",
        ja: "「これくらいで良いだろう」という油断が大きな印刷ミスを生みます。毎朝5分間の点検をルールとして固めてください。",
        zh: "“大概差不多就行”的掉以轻心是产生重大印制事故的根源。请将每天早晨5分钟的系统对齐点检固定为铁律。",
        es: "Asumir 'Esto parece suficientemente bueno' causa errores graves. Consolide la inspección de 5 minutos como regla.",
        fr: "Penser que 'C'est assez bien' cause des erreurs majeures. Consolidez l'inspection de 5 minutes comme règle.",
        de: "Zu glauben 'Das reicht schon' führt zu großen Fehlern. Festigen Sie den 5-Minuten-Check als Regel.",
        pt: "Achar que 'Está bom o suficiente' causa erros graves. Consolide a inspeção de 5 minutos como regra.",
        id: "Menganggap 'Ini sudah cukup baik' menyebabkan kesalahan fatal. Jadikan periksa 5 menit ini aturan wajib."
      },
      steps: [
        {
          name: {
            ko: "아침 작업 시스템 5분 정렬 점검 세션",
            en: "5-Minute Morning System Alignment Check",
            ja: "朝の作業システム5分間整列点検セッション",
            zh: "开启清晨5分钟工作系统对齐校验",
            es: "Sesión de 5 Minutos de Alineación del Sistema",
            fr: "Session de 5 Minutes d'Alignement du Système",
            de: "5-minütiger morgendlicher System-Ausrichtungs-Check",
            pt: "Sessão de 5 Minutos de Alinhamento do Sistema",
            id: "Sesi 5 Menit Periksa Keselarasan Sistem Pagi"
          },
          text: {
            ko: "본 작업 시작 직전, 코딩 린터 실행, 템플릿 서식 확인, 혹 정밀 도구의 수평 상태를 5분간 점검합니다.",
            en: "Right before main work, run your linters, check template layouts, or inspect precision tools for 5 minutes.",
            ja: "メイン作業の直前、リンターの実行やテンプレートのレイアウト確認、精密ツールの状態を5分間点検します。",
            zh: "在正式工作前，用5分钟时间运行代码检查工具、查验模板对齐版式或检视精细工具的状态。",
            es: "Justo antes del trabajo principal, ejecute linters, revise plantillas o inspecione herramientas durante 5 minutos.",
            fr: "Juste avant de commencer, vérifiez vos modèles, outils ou code pendant 5 minutes.",
            de: "Prüfen Sie direkt vor der Hauptarbeit 5 Minuten lang Ihre Vorlagen, Code-Linter oder Werkzeuge.",
            pt: "Logo antes do trabalho principal, verifique seus modelos, ferramentas ou código por 5 minutos.",
            id: "Tepat sebelum bekerja, jalankan periksa linter, cek tata letak templat selama 5 menit."
          }
        },
        {
          name: {
            ko: "눈과 손을 이용한 1:1 오차 직접 검수",
            en: "Direct 1:1 Visual & Tactile Error Inspection",
            ja: "目と手を使った1:1の直接誤差点検",
            zh: "结合眼观与手触进行 1:1 误差点检",
            es: "Inspección Directa 1:1 de Errores Visual y Táctil",
            fr: "Inspection Directe 1:1 Visuelle & Tactile",
            de: "Direkte 1:1 visuelle & taktile Fehlerprüfung",
            pt: "Inspeção Direta 1:1 de Erros Visual e Tátil",
            id: "Inspeksi Kesalahan Langsung 1:1 Secara Visual & Taktil"
          },
          text: {
            ko: "화면의 픽셀 수치, 오탈자, 주소 유효성 등 오류 발생 가능 지점 3곳을 직접 손가락으로 짚으며 확인합니다.",
            en: "Touch or point directly at 3 error-prone spots like pixel margins, typos, or link URLs.",
            ja: "画面のピクセル数値や誤字脱字、URLなどエラーが起きやすい3箇所を指で指しながら直接確認します。",
            zh: "用手指逐一指着像素数值、错别字或链接地址等3处最易出错的卡口点进行亲力核验。",
            es: "Señale con el dedo 3 puntos propensos a error como márgenes de píxeles, erratas o enlaces.",
            fr: "Pointez du doigt 3 points sensibles comme les marges, fautes de frappe ou liens.",
            de: "Zeigen Sie mit dem Finger auf 3 fehleranfällige Stellen wie Pixelränder oder URLs.",
            pt: "Apontando com o dedo 3 pontos propensos a erro como margens de pixels, erros ou links.",
            id: "Tunjuk langsung 3 titik rawan kesalahan seperti piksel, ejaan, atau URL."
          }
        },
        {
          name: {
            ko: "시스템 오차 제로 확정 및 인쇄/발행 개시",
            en: "Confirm Zero Error & Initiate Production/Publishing",
            ja: "システム誤差ゼロ確定と生産/発行開始",
            zh: "确认系统零误差并启动生产或发布",
            es: "Confirmar Cero Errores e Iniciar Producción",
            fr: "Confirmer Zéro Erreur & Lancer la Production",
            de: "Null-Fehler-Bestätigung & Produktionsstart",
            pt: "Confirmar Zero Erros e Iniciar Produção",
            id: "Konfirmasi Nol Kesalahan & Mulai Produksi/Rilis"
          },
          text: {
            ko: "정렬 및 시스템 오차 제로 상태가 확인되면 자신 있게 본 작업 버튼을 누르고 최고 품질로 출하합니다.",
            en: "Once alignment and zero errors are confirmed, confidently hit the execute button for top-quality output.",
            ja: "整列と系統誤差ゼロが確認されたら、自信を持ってメインの実行ボタンを押し最高の品質で出荷します。",
            zh: "在确认对齐精准且零误差后，充满自信地按下主工作或发布按钮，以极致品质产出。",
            es: "Una vez confirmada la alineación sin errores, pulse el botón de ejecución con total confianza.",
            fr: "Une fois l'alignement sans erreur confirmé, appuyez sereinement sur le bouton d'exécution.",
            de: "Nach der Null-Fehler-Bestätigung drücken Sie vertrauensvoll den Startknopf.",
            pt: "Assim que o alinhamento sem erros for confirmado, pressione o botão de execução com confiança.",
            id: "Setelah keselarasan tanpa kesalahan terkonfirmasi, tekan tombol rilis dengan percaya diri."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "소프트웨어 자동 테스트가 있는데 수동 점검을 왜 해야 하나요?",
            en: "Why do manual inspection if we have automated software testing?",
            ja: "ソフトウェアの自動テストがあるのに、なぜ手動点検をする必要がありますか？",
            zh: "既然已有软件自动化测试，为什么还需要人工手动点检？",
            es: "¿Por qué hacer una inspección manual si hay pruebas automatizadas?",
            fr: "Pourquoi inspecter manuellement quand il y a des tests automatisés ?",
            de: "Warum manuell prüfen, wenn es automatisierte Tests gibt?",
            pt: "Por que fazer inspeção manual se existem testes automatizados?",
            id: "Mengapa harus inspeksi manual jika sudah ada tes otomatis?"
          },
          answer: {
            ko: "자동 테스트는 로직 오류를 잡지만, 사람이 느끼는 레이아웃 어색함이나 시각적 미세 불균형은 잡지 못합니다. 5분 사람 눈 검수가 완벽함을 완성합니다.",
            en: "Automated tests catch logic bugs, but fail at human visual flow or layout awkwardness. Human eyes complete perfection.",
            ja: "自動テストはロジックエラーを捉えますが、人間が感じるレイアウトの違和感は捉えられません。人の目が完璧さを補完します。",
            zh: "自动化测试只能拦截逻辑 Bug，却无法捕捉人类体感上的视觉不和谐或布局扭曲。人工5分钟目测是走向完美的临门一脚。",
            es: "Las pruebas automáticas detectan fallos lógicos, pero no la desarmonía visual. El ojo humano completa la perfección.",
            fr: "Les tests automatiques attrapent les bugs logiques, pas la gène visuelle. L'œil humain parfait le tout.",
            de: "Automatisierte Tests finden Logikfehler, aber keine visuellen Unstimmigkeiten. Das menschliche Auge vollendet die Qualität.",
            pt: "Testes automáticos pegam erros de lógica, mas não o desalinhamento visual. O olho humano completa a perfeição.",
            id: "Tes otomatis menangkap bug logika, bukan kejanggalan visual manusia. Mata manusia menyempurnakan kualitas."
          }
        },
        {
          question: {
            ko: "매일 아침 점검하다가 시간이 지연되면 어떻게 하나요?",
            en: "What if daily morning inspection causes work delays?",
            ja: "毎朝の点検で作業時間が遅延したらどうすればいいですか？",
            zh: "如果每天早晨点检导致工作进度被推迟怎么办？",
            es: "¿Qué pasa si la inspección diaria retrasa el inicio del trabajo?",
            fr: "Que faire si l'inspection quotidienne retarde le travail ?",
            de: "Was tun, wenn die tägliche Prüfung zu Verzögerungen führt?",
            pt: "O que fazer se a inspeção diária atrasar o trabalho?",
            id: "Bagaimana jika inspeksi harian menyebabkan keterlambatan kerja?"
          },
          answer: {
            ko: "타이머를 딱 5분으로 한정하세요. 5분 동안 가장 치명적인 오차 지점 3곳만 확인해도 사고의 95% 이상을 미연에 방지할 수 있습니다.",
            en: "Cap the timer strictly at 5 minutes. Inspecting 3 high-risk spots in 5 minutes prevents over 95% of fatal errors.",
            ja: "タイマーを5分に限定してください。5分で最もリスクの高い3箇所を点検するだけで事故の95%を防げます。",
            zh: "严格将倒计时限定为5分钟。在5分钟内仅快速校验风险最高的3处核心卡口，即可消灭 95% 以上的大型偏差事故。",
            es: "Limite el temporizador a 5 minutos. Revisar 3 puntos críticos en 5 minutos previene más del 95% de errores.",
            fr: "Limitez le minuteur à 5 minutes. Inspecter 3 points clés en 5 minutes évite 95 % des erreurs.",
            de: "Begrenzen Sie den Timer auf 5 Minuten. 3 Risikostellen in 5 Minuten verhindern 95 % aller Fehler.",
            pt: "Limite o cronômetro a 5 minutos. Inspecionar 3 pontos críticos em 5 minutos previne mais de 95% dos erros.",
            id: "Batasi pengukur waktu 5 menit. Memeriksa 3 titik berisiko tinggi mencegah lebih dari 95% kesalahan."
          }
        }
      ]
    }
  },

  // 9. 소동파 (Su Shi / Su Dongpo)
  {
    slug: 'sushi-bamboo-walk-cooking',
    item: {
      id: 'sushi-bamboo-walk-cooking',
      name: '소동파',
      gender: 'male',
      era: '중세',
      location: '중국 (송나라)',
      lifespan: '1037 - 1101',
      birthYear: 1037,
      bio: "북송 시대 대문호이자 동파육의 창시자, 유배지의 비극을 초월적 낙천주의로 승화시킨 세기의 천재 문인입니다.",
      habitName: '매일 아침 대나무 숲 산책과 소박한 요리를 통한 정서 비우기 루틴',
      tags: ['#휴식', '#사색', '#이완', '#스트레스 해소', '#안정'],
      timeOfDay: 'morning',
      requiredItems: ['산책로 또는 대나무 숲', '소박한 요리 도구'],
      frequency: 'daily',
      historicalStory: "북송의 천재 시인이자 정치가였던 소동파는 억울한 정적의 모함으로 황무지 황주(黃州)와 혜주로 거듭 유배되었습니다. 극심한 좌절 속에서도 그는 매일 아침 대나무 숲길을 천천히 걸으며 시상을 다듬고, 뭉근한 불로 돼지고기를 고아내는 동파육(東坡肉)과 소박한 죽을 요리하는 과정에 온 마음을 몰입하여 삶의 비극을 정서적 회복탄력성으로 극복했습니다.",
      sciencePrinciples: "요리와 산책 같은 일상적 수공예 행동(Somatic routine)은 미그달라 감정 과열을 끄고 부교감 신경(Parasympathetic)을 강하게 자극합니다. 단순 물리적 조리 과정에 주의를 모으는 것은 심리적 억압감을 해소하고 뇌의 신경 회복탄력성(Resilience)을 증대시킵니다.",
      quote: "대나무 없이 살 수 있지만, 시를 잊고 살 수는 없다. 삶의 참맛은 소박함 속에 있다.",
      trigger: "억울함, 스트레스, 삶의 시련 속에서 정서적 회복탄력성을 찾고 싶을 때",
      modernGuide: [
        "아침 시간 가벼운 자연 산책이나 숲길 걸음으로 머릿속 번뇌를 털어냅니다.",
        "인스턴트 대신 간단한 재료로 손수 아침 식사나 차를 끓이는 소박한 수공예 조리에 10분간 몰입합니다.",
        "요리가 완성된 후 맛과 향에 온전히 집중하며 마음의 상처와 스트레스를 흘려보냅니다."
      ],
      actionName: "아침 대나무 산책 & 소박한 수공예 조리 (소동파 루틴)",
      sources: [
        "소동파, *동파전집(東坡全集)*",
        "임어당(林語堂), *소동파전(The Gay Genius: The Life and Times of Su Tungpo)*"
      ]
    },
    translations: {
      title: {
        ko: "유배지의 절망을 이겨낸 대문호? 소동파의 아침 대나무 산책 & 요리 이완 루틴",
        en: "Conquering Exile with Joy? Su Shi's Morning Bamboo Walk & Cooking Relaxation",
        ja: "流刑地の絶望を乗り越えた大文豪？蘇東坡の朝の竹林散歩＆料理リラックスルーティン",
        zh: "用豁达战胜贬谪逆境的文豪？苏东坡的清晨竹林散步与美食解压习惯",
        es: "¿Superando el exilio con alegría? La rutina de paseo en bambú y cocina de Su Shi",
        fr: "Vaincre l'exil par la joie ? La routine de marche dans le bambou et cuisine de Su Shi",
        de: "Das Exil mit Freude überwinden? Su Shis morgendliche Spaziergangs- und Kochroutine",
        pt: "Superando o exílio com alegria? A rotina de caminhada no bambu e culinária de Su Shi",
        id: "Menaklukkan Pengasingan dengan Sukacita? Rutinitas Jalan Bambu & Memasak Su Shi"
      },
      description: {
        ko: "북송의 천재 문인 소동파가 거듭된 유배지 시련 속에서도 아침 대나무 숲 산책과 요리로 마음을 비우고 세기의 낙천주의를 완성한 회복탄력성 습관.",
        en: "Discover how Su Shi overcame bitter exile and built mental resilience through morning bamboo walks and mindful cooking.",
        ja: "流刑の試練の中でも朝の竹林散歩と料理で心を空にし、楽天主義を完成させた蘇東坡のリジリエンス習慣を紹介します。",
        zh: "介绍北宋大文豪苏东坡在屡遭贬谪的逆境中，通过清晨竹林散步与专注烹饪涤荡心灵、重塑心理韧性的超然习惯。",
        es: "Descubra cómo Su Shi superó el exilio desarrollando resiliencia mental con paseos por el bambú y cocina consciente.",
        fr: "Découvrez comment Su Shi a surmonté l'exil grâce à des marches dans le bambou et une cuisine en pleine conscience.",
        de: "Erfahren Sie, wie Su Shi das bitterste Exil durch Bambusspaziergänge und achtsames Kochen überwand.",
        pt: "Descubra como Su Shi superou o exílio e construiu resiliência mental com caminhadas no bambu e culinária.",
        id: "Temukan bagaimana Su Shi mengatasi pengasingan pahit dan membangun ketahanan mental melalui jalan bambu dan memasak."
      },
      authority: {
        ko: "소동파 시문집 '동파전집(東坡全集)' 및 임어당 저 '소동파전'",
        en: "Su Shi Collected Works 'Dongpo Quanji' & Lin Yutang Biography 'The Gay Genius'",
        ja: "蘇東坡詩文集「東坡全集」および林語堂著「蘇東坡伝」史料",
        zh: "苏东坡诗文集《东坡全集》与林语堂著《苏东坡传》史料",
        es: "Obras Reunidas de Su Shi 'Dongpo Quanji' y Biografía de Lin Yutang 'The Gay Genius'",
        fr: "Œuvres Complètes de Su Shi 'Dongpo Quanji' & Biographie par Lin Yutang 'The Gay Genius'",
        de: "Su Shi Gesammelte Werke 'Dongpo Quanji' & Lin Yutang Biografie 'The Gay Genius'",
        pt: "Obras Reunidas de Su Shi 'Dongpo Quanji' e Biografia de Lin Yutang 'The Gay Genius'",
        id: "Karya Terkumpul Su Shi 'Dongpo Quanji' & Biografi Lin Yutang 'The Gay Genius'"
      },
      intro: {
        ko: "북송 시대의 시인이자 정치가, 그리고 명요리 동파육(東坡肉)을 탄생시킨 세기의 대문호 소동파. 정적들의 음모로 멀고 황량한 유배지를 전전하면서도 그는 어떻게 언제나 주위 사람들을 따뜻하게 품는 압도적 낙천주의를 유지했을까요? 🎋\n\n소동파는 유배지의 아침마다 청정한 대나무 숲길을 걸으며 억울함과 불안을 바람에 씻어 보냈습니다. 산책 후 소박한 향토 재료로 정성껏 죽과 동파육을 요리하는 불과 손의 수공예 감각에 온전히 몰입하며 마음의 상처를 치유했습니다.\n\n오늘 BuildSelf에서는 소동파의 아침 산책과 수공예 조리 루틴에 담긴 심리적 회복탄력성(Resilience)의 과학을 소개합니다.",
        en: "Su Shi, the Song Dynasty literary giant and creator of Dongpo Pork. How did he maintain legendary optimism despite bitter political exile? 🎋\n\nEvery morning in exile, Su Shi walked through bamboo groves to clear away resentment. Afterward, he immersed himself in cooking simple meals, finding solace in physical craft.\n\nToday, BuildSelf reveals the resilience neuroscience behind Su Shi's morning bamboo walk and cooking routine.",
        ja: "宋代の天才文人であり東坡肉の創始者、蘇東坡。過酷な流刑の中でも彼はどのように伝説的な楽天主義を維持したのでしょうか？ 🎋\n\n毎朝竹林を散歩して悔しさを洗い流し、その後に料理に没頭することで心傷を癒やしました。\n\n今日のBuildSelfでは、蘇東坡のリジリエンスルーティンを紹介します。",
        zh: "北宋一代文豪、美食“东坡肉”的创制者苏东坡。在屡次遭遇政敌构陷、连年贬谪至偏远黄州与海南的逆境中，他是如何始终保持豁达超然的？ 🎋\n\n每在贬所的清晨，东坡都会杖履步入青翠竹林，将满腹委屈随风涤荡。随后亲手以微火慢炖东坡肉与小粥，全神沉浸于食材与火候的手艺调和中，抚平心灵创伤。\n\n今天 BuildSelf 将为您介绍东坡竹林散步与烹饪解压习惯背后的心理韧性 Neuroscience 原理。",
        es: "Su Shi, el gigante literario de la Dinastía Song. ¿Cómo mantuvo su legendario optimismo a pesar del exilio político? 🎋\n\nCada mañana caminaba por bambusales para disipar el rencor y se sumergía en cocinar comidas sencillas.\n\nHoy BuildSelf revela la neurociencia de la resiliencia tras la rutina de Su Shi.",
        fr: "Su Shi, géant littéraire de la dynastie Song. Comment a-t-il maintenu son optimisme malgré l'exil ? 🎋\n\nChaque matin, il marchait dans les bambouseraies pour dissiper l'amertume et cuisinait des plats simples.\n\nAujourd'hui BuildSelf vous dévoile la science de la résilience derrière la routine de Su Shi.",
        de: "Su Shi, der literarische Gigant der Song-Dynastie. Wie bewahrte er seinen Optimismus trotz Exil? 🎋\n\nJeden Morgen ging er durch Bambushaine, um Groll abzubauen, und kochte einfache Mahlzeiten.\n\nHeute enthüllt BuildSelf die Resilienzwissenschaft hinter Su Shis Routine.",
        pt: "Su Shi, o gigante literário da Dinastia Song. Como ele manteve seu otimismo lendário apesar do exílio? 🎋\n\nTodas as manhãs ele caminhava por bambuzais para dissipar o ressentimento e cozinhava refeições simples.\n\nHoje o BuildSelf revela a neurociência da resiliência por trás da rotina de Su Shi.",
        id: "Su Shi, raksasa sastra Dinasti Song. Bagaimana ia menjaga optimisme legendarisnya di tengah pengasingan? 🎋\n\nSetiap pagi ia berjalan di hutan bambu untuk mengikis kejengkolan lalu memasak hidangan sederhana.\n\nHari ini BuildSelf mengungkap sains ketahanan mental di balik rutinitas Su Shi."
      },
      whyTitle: {
        ko: "수공예적 행동(Somatic Routine)이 활성화하는 부교감 신경과 신경 회복탄력성",
        en: "Parasympathetic Activation & Somatic Resilience via Physical Crafting",
        ja: "手仕事的行動（Somatic Routine）が活性化する副交感神経と神経リジリエンス",
        zh: "通过身体手艺行为(Somatic Routine)激活副交感神经与提升心理韧性",
        es: "Activación Parasimpática y Resiliencia Somática mediante Trabajos Manuales",
        fr: "Activation Parasympathique & Résilience Somatique via l'Artisanat Physique",
        de: "Parasympathische Aktivierung & somatische Resilienz durch handwerkliches Tun",
        pt: "Ativação Parassimpática e Resiliência Somática via Trabalhos Manuais",
        id: "Aktivasi Parasimpatik & Ketahanan Somatik Melalui Kerajinan Fisik"
      },
      whyDesc: {
        ko: "마음의 상처나 억울한 감정을 머리로만 억지로 잊으려 하면 뇌의 편도체 회로가 반복재생되어 괴로움이 배가됩니다.\n\n소동파처럼 불의 온도, 식재료의 냄새, 칼끝의 손맛을 느끼며 요리하는 <strong>'수공예 이완 행동(Somatic Routine)'</strong>은 감각 피질로 신호를 분산시켜 부교감 신경을 즉각 자극합니다. 정서적 마찰이 사르르 녹아내리고 강인한 심리적 회복탄력성이 채워집니다.",
        en: "Trying to mentally force away resentment repeatedly re-triggers the amygdala.\n\nEngaging in <strong>'Somatic Craft Routines'</strong> like cooking activates sensory cortices and parasympathetic nerves, dissolving emotional friction.",
        ja: "悔しさを頭だけで無理に忘れようとすると、偏桃体回路が反復再生されて苦しみが倍加されます。\n\n料理のような<strong>「手仕事リラックス行動」</strong>は感覚野に信号を分散させ、副交感神経を刺激して心を癒やします。",
        zh: "越是试着用头脑强行忘记委屈与负面情绪，杏仁核回路就越容易发生重复播放与痛苦加倍。\n\n像东坡那样体会食材香气、火候温差与手感操作的<strong>“身体手艺解压”</strong>，能有效地将神经信号分流至感觉皮层并强力激活副交感神经，让情绪摩擦悄然融化。",
        es: "Forzarse a olvidar rencores mentalmente activa la amígdala una y otra vez.\n\nLa <strong>'Rutina Somática Manual'</strong> al cocinar activa la corteza sensorial y el nervio parasimpático, disolviendo el dolor.",
        fr: "Essayer d'oublier la rancœur par la pensée réactive l'amygdale en boucle.\n\nLa <strong>'Routine Somatique Artisanale'</strong> en cuisinant active le cortex sensoriel et apaise l'esprit.",
        de: "Den Groll nur gedanklich zu verdrängen aktiviert die Amygdala immer wieder.\n\n<strong>'Somatische Kochen-Routinen'</strong> aktivieren sensorische Areale und beruhigen die Nerven.",
        pt: "Tentar esquecer ressentimentos mentalmente ativa a amígdala repetidamente.\n\nA <strong>'Rotina Somática Manual'</strong> ao cozinhar ativa o córtex sensorial e acalma a mente.",
        id: "Memaksa pikiran melupakan kekecewaan justru memicu pengulangan amigdala.\n\n<strong>'Rutinitas Somatik Fisik'</strong> saat memasak merangsang korteks sensorik dan saraf parasimpatik."
      },
      cautionTitle: {
        ko: "결과보다 조리 및 산책의 과정 자체에 집중하세요",
        en: "Focus on the Process of Walking and Cooking Over the Final Result",
        ja: "結果より調理と散歩のプロセス自体に集中しましょう",
        zh: "比起结果，请更专注于烹饪与散步的过程本身",
        es: "Concéntrese en el proceso de caminar y cocinar más que en el resultado",
        fr: "Concentrez-vous sur le processus de marche et cuisine plutôt que sur le résultat",
        de: "Konzentrieren Sie sich auf den Prozess des Gehens und Kochens",
        pt: "Concentre-se no processo de caminhar e cozinhar mais do que no resultado",
        id: "Fokuslah pada proses jalan dan memasak daripada hasil akhirnya"
      },
      cautionDesc: {
        ko: "소동파 요리의 정수는 화후(火候, 불조절)를 기다리는 고요한 마음입니다. 빨리 음식을 만들어 먹으려 서두르지 말고, 재료가 익어가는 시간 동안 손끝의 감각과 향에 정성을 다하세요.",
        en: "The essence of Su Shi's cooking is waiting with a serene mind. Savor the aromas and heat adjustments.",
        ja: "東坡料理の真髄は火加減を待つ静かな心です。急がず、食材が煮える時間と香りを味わってください。",
        zh: "东坡料理的真谛在于慢火微炖中等待火候的宁静心态。切勿急于做熟吃下，在食材缓缓入味的过程中品味手感与香气。",
        es: "La esencia de la cocina de Su Shi es esperar con serenidad. Saboree los aromas y el ritmo.",
        fr: "L'essence de la cuisine de Su Shi est d'attendre sereinement. Savourez les arômes et le temps.",
        de: "Die Essenz von Su Shis Kochen ist gelassenes Warten. Genießen Sie Düfte und die Zeit.",
        pt: "A essência da culinária de Su Shi é esperar com serenidade. Saboreie os aromas e o ritmo.",
        id: "Inti masakan Su Shi adalah menunggu dengan hati tenang. Nikmati aroma dan kehangatannya."
      },
      steps: [
        {
          name: {
            ko: "아침 10분 자연 리셋 산책",
            en: "10-Minute Morning Nature Reset Walk",
            ja: "朝10分間の自然リセット散歩",
            zh: "开启清晨10分钟自然心境重置散步",
            es: "Paseo Matutino de 15 Minutos para Reiniciar con la Naturaleza",
            fr: "Marche Matinale de 10 Minutes de Réinitialisation Nature",
            de: "10-minütiger morgendlicher Natur-Reset-Spaziergang",
            pt: "Caminhada Matinal de 10 Minutos de Reinício na Natureza",
            id: "Jalan 10 Menit Reset Alam Pagi"
          },
          text: {
            ko: "아침 시간 가까운 공원, 나무 길, 혹은 집 주변을 걸으며 머릿속의 복잡한 정서적 응어리를 바람에 날려 보냅니다.",
            en: "Walk through a nearby park, tree-lined path, or neighborhood to let the morning breeze sweep away mental clutter.",
            ja: "朝の時間、近くの公園や Namiki 道を歩きながら頭の中の複雑な感情のしこりを風に流します。",
            zh: "在清晨微风中漫步于公园或绿植小径，将大脑中沉淀的负面情绪郁结随风飘散。",
            es: "Camine por un parque o sendero arbolado cercano permitiendo que la brisa limpie su mente.",
            fr: "Marchez dans un parc ou une allée d'arbres pour laisser la brise balayer vos pensées.",
            de: "Gehen Sie durch einen nahegelegenen Park, um den Kopf durch die Morgenbrise frei zu bekommen.",
            pt: "Caminhe por um parque ou caminho arborizado permitindo que a brisa limpe sua mente.",
            id: "Berjalanlah di taman atau jalan pepohonan untuk membiarkan angin pagi menyegarkan pikiran."
          }
        },
        {
          name: {
            ko: "소박한 손수 아침 조리 10분 몰입",
            en: "10-Minute Mindful Craft Cooking Session",
            ja: "素朴な手作り朝調理10分没頭",
            zh: "沉浸于10分钟简单朴素的手工作膳",
            es: "Sesión de 10 Minutos de Cocina Consciente y Sencilla",
            fr: "Session de 10 Minutes de Cuisine Simple en Conscience",
            de: "10-minütige achtsame Zubereitung des Frühstücks",
            pt: "Sessão de 10 Minutos de Culinária Consciente e Simples",
            id: "Sesi 10 Menit Memasak Sederhana dengan Penuh Kesadaran"
          },
          text: {
            ko: "따뜻한 차를 끓이거나 간단한 죽, 토스트를 직접 만들며 불의 온기와 칼질의 손맛에 10분간 온전히 집중합니다.",
            en: "Brew warm tea or make simple oatmeal or toast, focusing 100% on the warmth, knife cuts, and aromas for 10 minutes.",
            ja: "温かいお茶を淹れたりトーストを作ったりしながら、火の温もりとナイフの感触に10分間集中します。",
            zh: "亲手沏一壶热茶，或烹煮简单小粥与烘焙面包，将100%的注意力放在微火温热与食材触感上。",
            es: "Prepare un té caliente o tostadas sencillas, concentrándose 100% en la calidez, los cortes y los aromas.",
            fr: "Préparez un thé chaud ou un toast simple, en vous concentrant à 100 % sur la chaleur et les odeurs.",
            de: "Kochen Sie Tee oder toasten Sie Brot und konzentrieren Sie sich 100 % auf Wärme und Düfte.",
            pt: "Prepare um chá quente ou torrada simples, focando 100% no calor, cortes e aromas por 10 minutos.",
            id: "Seduh teh hangat atau buat roti panggang sederhana, berfokus 100% pada kehangatan dan aromanya."
          }
        },
        {
          name: {
            ko: "맛과 향 수용 및 낙천주의 마음가짐 채우기",
            en: "Savor Flavors & Fill Mind with Optimism",
            ja: "味と香りの受容と楽天主義の心満たし",
            zh: "细品香气食味与赋予内心理性乐观",
            es: "Saboree Sabores y Llene su Mente de Optimismo",
            fr: "Savourez les Saveurs & Remplissez votre Esprit d'Optimisme",
            de: "Genießen Sie Aromen & Füllen Sie den Geist mit Optimismus",
            pt: "Saboreie Sabores e Encha sua Mente de Otimismo",
            id: "Nikmati Rasa & Isi Pikiran dengan Optimisme"
          },
          text: {
            ko: "완성된 음식을 입에 넣고 풍미를 천천히 음미하며 '어떤 시련도 나의 고요함을 해칠 수 없다'는 마음을 다집니다.",
            en: "Savor every bite slowly, reinforcing the mindset: 'No ordeal can ruin my inner peace.'",
            ja: "完成した料理の風味をゆっくり味わい、「どんな試練も私の静寂を害することはできない」と心を固めます。",
            zh: "缓嚼慢咽品味手作滋味，在心中筑牢“世间一切困顿皆不足以动摇我内心宁静”的通达与乐观。",
            es: "Saboree cada bocado despacio, reforzando la mente: 'Ninguna prueba destruirá mi paz interior'.",
            fr: "Savourez chaque bouchée lentement : 'Aucune épreuve ne peut détruire ma paix intérieure'.",
            de: "Genießen Sie jeden Bissen langsam: 'Keine Prüfung kann meinen inneren Frieden rauben.'",
            pt: "Saboreie cada mordida devagar: 'Nenhuma provação destruirá minha paz interior'.",
            id: "Nikmati setiap suapan perlahan, memperkuat pola pikir: 'Tak ada cobaan yang merusak kedamaianku'."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "요리를 전혀 못 하는 요알못도 적용 가능한가요?",
            en: "Can someone who can't cook at all apply this routine?",
            ja: "料理が全くできない人でも適用可能ですか？",
            zh: "完全不会做饭的“厨房小白”也能应用这一习惯吗？",
            es: "¿Puede aplicarlo alguien que no sepa cocinar en absoluto?",
            fr: "Quelqu'un qui ne sait pas cuisiner peut-il l'appliquer ?",
            de: "Kann dies jemand anwenden, der gar nicht kochen kann?",
            pt: "Alguém que não sabe cozinhar pode aplicar essa rotina?",
            id: "Apakah orang yang tidak bisa memasak sama sekali bisa menerapkannya?"
          },
          answer: {
            ko: "네! 복잡한 요리가 아닙니다. 따뜻한 드립 커피를 내리거나 계란 프라이 하나를 정성껏 굽는 미니 조리만으로도 충분합니다.",
            en: "Yes! Complex recipes aren't needed. Brewing drip coffee or frying an egg with care works perfectly.",
            ja: "はい！複雑な料理は不要です。ドリップコーヒーを淹れたり目玉焼きを慎重に焼くミニ調理で十分です。",
            zh: "当然可以！绝不需要复杂厨艺。精心冲煮一杯手冲咖啡，或极其专注地煎一颗荷包蛋即可达到完美效果。",
            es: "¡Sí! No necesita recetas complejas. Preparar un café de goteo o freír un huevo con esmero funciona genial.",
            fr: "Oui ! Pas besoin de recettes complexes. Préparer un café ou cuire un œuf soigneusement suffit.",
            de: "Ja! Sie brauchen keine komplexen Rezepte. Kaffee aufbrühen oder ein Ei braten reicht völlig.",
            pt: "Sim! Não precisa de receitas complexas. Coar um café ou fritar um ovo com cuidado funciona perfeitamente.",
            id: "Tentu! Tidak perlu resep rumit. Menyeduh kopi atau menggoreng telur dengan penuh perhatian sudah cukup."
          }
        },
        {
          question: {
            ko: "정말 손으로 요리하는 행위가 스트레스를 줄여주나요?",
            en: "Does physical cooking really reduce psychological stress?",
            ja: "本当に手で料理する行為がストレスを 減らしますか？",
            zh: "动手做饭真的能够舒缓心理压力吗？",
            es: "¿Realmente cocinar con las manos reduce el estrés psicológico?",
            fr: "Cuisiner réduit-il vraiment le stress psychologique ?",
            de: "Reduziert Kochen von Hand wirklich psychischen Stress?",
            pt: "Cozinhar com as mãos realmente reduz o estresse psicológico?",
            id: "Apakah kegiatan memasak fisik benar-benar mengurangi stres psikologis?"
          },
          answer: {
            ko: "작업치료학 연구에 따르면 손을 사용해 완성품을 만들어내는 식재료 다듬기는 우울감을 유도하는 뇌 신호를 억제하고 자존감을 회복시키는 효과가 검증되어 있습니다.",
            en: "Occupational therapy research proves hands-on meal prep depresses depressive neural circuits and builds self-efficacy.",
            ja: "作業療法学の研究によると、手を使って調理する行為は抑うつ脳信号を抑制し、自尊感情を回復させます。",
            zh: "作业治疗学研究证明，通过双手加工食材并获得完成品的手艺过程，能强力抑制引发抑郁的脑波信号并重建自我效能感。",
            es: "La investigación en terapia ocupacional demuestra que preparar comida a mano calma los circuitos depresivos y crea autoestima.",
            fr: "La recherche en ergothérapie prouve que cuisiner à la main apaise la dépression et renforce l'estime de soi.",
            de: "Ergotherapie-Forschung belegt: Manuelles Kochen dämpft depressive Areale und stärkt den Selbstwert.",
            pt: "Pesquisas em terapia ocupacional provam que cozinhar à mão acalma circuitos depressivos e desenvolve a autoestima.",
            id: "Riset terapi okupasi membuktikan persiapan makanan fisik menekan sirkuit depresi dan membangun harga diri."
          }
        }
      ]
    }
  },

  // 10. 에드워드 제너 (Edward Jenner)
  {
    slug: 'jenner-observation-tracking-log',
    item: {
      id: 'jenner-observation-tracking-log',
      name: '에드워드 제너',
      gender: 'male',
      era: '근대',
      location: '영국',
      lifespan: '1749 - 1823',
      birthYear: 1749,
      bio: "천연두 백신을 발명하여 인류를 참혹한 전염병으로부터 구원한 '백신의 아버지' 의사입니다.",
      habitName: '매일 현장 가구 방문 추적과 장기 관찰 기록(Observation Log) 작성 루틴',
      tags: ['#성공습관', '#학습', '#기록', '#생산성', '#몰입'],
      timeOfDay: 'afternoon',
      requiredItems: ['관찰 일지', '청진기 및 진료 도구'],
      frequency: 'daily',
      historicalStory: "영국의 시골 의사 에드워드 제너는 '소를 짜는 우유짜기 여인들은 천연두에 걸리지 않는다'는 시골의 전설을 듣고, 수년간 매일 오후 마을 농가들을 직접 방문했습니다. 그는 우두(Cowpox)에 감염된 환자들의 관찰 기록을 매일 일지에 축적하며 타협 없는 과학적 데이터로 마침내 세계 최초의 천연두 백신을 발명해 냈습니다.",
      sciencePrinciples: "현장 귀납적 추적과 장기 관찰 기록(Observation Tracking)은 전전두엽의 장기 계획 회로와 도파민 보상 시스템을 만성적으로 활성화합니다. 단기 성과에 일희일비하지 않고 가설을 기어코 증명해 내는 거대한 그릿(Grit)과 실행력을 제공합니다.",
      quote: "추측하지 말고 관찰하라. 그리고 끈기 있게 기록하라.",
      trigger: "장기 프로젝트에서 지치지 않고 확실한 증거 기반 성과를 내고 싶을 때",
      modernGuide: [
        "오후 업무 중 주요 고객, 지표, 현장 반응을 직접 살펴볼 10분 현장 추적 시간을 지정합니다.",
        "수집된 관찰 데이터를 '오늘의 현장 관찰 일지' 3줄로 기록지에 남아 누적합니다.",
        "누적된 관찰 기록에서 패턴을 찾아 다음 가설 수정에 적용합니다."
      ],
      actionName: "오후 10분 현장 데이터 관찰 & 기록 (제너 루틴)",
      sources: [
        "Richard Fisher, *Edward Jenner 1749-1823* (1977)",
        "The Royal Society Archives"
      ]
    },
    translations: {
      title: {
        ko: "천연두를 정복한 백신의 아버지? 에드워드 제너의 현장 관찰 기록 루틴",
        en: "Father of Vaccination? Edward Jenner's Field Observation Log Routine",
        ja: "天然痘を征服したワクチンの父？エドワード・ジェナーの現場観察記録ルーティン",
        zh: "消灭天花的“疫苗之父”？爱德华·詹纳的现场观察追踪习惯",
        es: "¿El Padre de la Vacunación? La rutina de registro de observación de campo de Edward Jenner",
        fr: "Le Père de la Vaccination ? La routine de journal d'observation de terrain d'Edward Jenner",
        de: "Der Vater der Impfung? Edward Jenners Feldbeobachtungs-Logbuch-Routine",
        pt: "O Pai da Vacinação? A rotina de diário de observação de campo de Edward Jenner",
        id: "Bapak Vaksinasi Dunia? Rutinitas Catatan Pengamatan Lapangan Edward Jenner"
      },
      description: {
        ko: "인류를 전염병에서 구한 의사 에드워드 제너가 매일 마을 가구를 직접 방문하며 우두 관찰 기록을 수년간 누적해 백신을 발명한 과학적 습관.",
        en: "Discover how Dr. Edward Jenner invented the smallpox vaccine through years of daily field observation tracking.",
        ja: "天然痘から人類を救ったジェナー博士が毎日の現場観察記録を蓄積し、ワクチンを発明した習慣を紹介します。",
        zh: "介绍拯救人类于天花灾难的大夫詹纳，通过几十年如一日积累现场观察追踪日志、成功发明疫苗的科学习惯。",
        es: "Descubra cómo el Dr. Edward Jenner inventó la vacuna de la viruela acumulando registros de observación diaria.",
        fr: "Découvrez comment le Dr Edward Jenner a inventé le vaccin contre la variole par un suivi de terrain quotidien.",
        de: "Erfahren Sie, wie Dr. Edward Jenner den Pockenimpfstoff durch jahrelange tägliche Feldbeobachtung erfand.",
        pt: "Descubra como o Dr. Edward Jenner inventou a vacina da varíola acumulando diários de observação de campo.",
        id: "Temukan bagaimana Dr. Edward Jenner menemukan vaksin cacar melalui catatan pengamatan harian."
      },
      authority: {
        ko: "리처드 피셔 전기 'Edward Jenner 1749-1823' 및 왕립학회 사료",
        en: "Richard Fisher Biography 'Edward Jenner' & The Royal Society Archives",
        ja: "リチャード・フィッシャー評伝「Edward Jenner」および王立協会史料",
        zh: "理查德·费舍尔传记《Edward Jenner》与英国皇家学会档案馆史料",
        es: "Biografía de Richard Fisher 'Edward Jenner' y Archivos de la Royal Society",
        fr: "Biographie par Richard Fisher 'Edward Jenner' & Archives de la Royal Society",
        de: "Richard Fisher Biografie 'Edward Jenner' & Archive der Royal Society",
        pt: "Biografia de Richard Fisher 'Edward Jenner' e Arquivos da Royal Society",
        id: "Biografi Richard Fisher 'Edward Jenner' & Arsip Royal Society"
      },
      intro: {
        ko: "인류 역사상 가장 지독했던 전염병 천연두를 지구상에서 몰아내고 세기의 백신을 발명한 영국의 시골 의사 에드워드 제너. 전 세계 의료사를 바꾼 그의 위대한 과학적 발견은 어떻게 시작되었을까요? 🩺\n\n제너는 글로스터셔의 농촌 마을에서 '소 전염병 우두를 앓은 우유짜기 여인들은 천연두에 안 걸린다'는 민간 요설을 흘려듣지 않았습니다. 그는 매일 오후 수년간 직접 마을 농가를 찾아 환자들의 증상 변화를 현장 관찰 일지(Observation Log)에 꼼꼼히 기록하고 추적했습니다.\n\n오늘 BuildSelf에서는 에드워드 제너 박사의 현장 추적 일지 루틴에 담긴 데이터 누적과 그릿(Grit)의 뇌과학을 소개합니다.",
        en: "Dr. Edward Jenner, who wiped smallpox off the earth by inventing the world's first vaccine. Where did his epoch-making discovery begin? 🩺\n\nHe didn't dismiss rural rumors. For years, every afternoon, he visited farmhouses and tracked cowpox cases in a detailed observation log.\n\nToday, BuildSelf uncovers the grit and data-tracking neuroscience behind Dr. Jenner's routine.",
        ja: "人類史上最も恐ろしい天然痘を地球上から駆逐した英国の医師エドワード・ジェナー。偉大な科学的発見はどう始まったのでしょうか？ 🩺\n\n彼は「牛痘にかかった牛乳絞りの女性は天然痘にならない」という噂を無視せず、数年間毎午後農家を訪れ観察記録を積み重ねました。\n\n今日のBuildSelfでは、ジェナー博士の現場観察記録ルーティンを紹介します。",
        zh: "将天花从地球上彻底终结、发明世界上第一支疫苗的英国乡村大夫爱德华·詹纳。改变人类医疗史的伟大突破究竟是如何发生的？ 🩺\n\n詹纳没有轻视“挤奶女工得牛痘后不会得天花”的民间传说。几年间每个下午，他都亲自走访农家，将患者的皮疹变化与免疫反应详尽记录在现场观察日志中。\n\n今天 BuildSelf 将为您介绍詹纳大夫现场观察追踪习惯背后的 Grit 脑科学。",
        es: "El Dr. Edward Jenner, quien erradicó la viruela inventando la primera vacuna. ¿Dónde comenzó su descubrimiento histórico? 🩺\n\nNo descartó los rumores de campo. Durante años visitó granjas cada tarde y registró casos en su libreta de observación.\n\nHoy BuildSelf revela la neurociencia de la constancia tras la rutina del Dr. Jenner.",
        fr: "Le Dr Edward Jenner, qui a éradiqué la variole en inventant le premier vaccin. Où a commencé sa découverte historique ? 🩺\n\nIl n'a pas rejeté les rumeurs. Pendant des années, chaque après-midi, il a visité des fermes et noté les cas.\n\nAujourd'hui BuildSelf vous dévoile la science de la persévérance derrière la routine du Dr Jenner.",
        de: "Dr. Edward Jenner, der die Pocken durch die erste Impfung ausrottete. Wo begann seine epochale Entdeckung? 🩺\n\nEr ignorierte Gerüchte nicht. Jahrelang besuchte er jeden Nachmittag Bauernhöfe und führte präzise Protokolle.\n\nHeute enthüllt BuildSelf die Wissenschaft hinter Dr. Jenners Beobachtungs-Routine.",
        pt: "O Dr. Edward Jenner, que erradicou a varíola inventando a primeira vacina. Onde começou sua descoberta histórica? 🩺\n\nEle não descartou os boatos do campo. Por anos visitou fazendas todas as tardes e registrou casos em seu diário.\n\nHojes o BuildSelf revela a neurociência por trás da rotina de observação do Dr. Jenner.",
        id: "Dr. Edward Jenner, membasmi cacar dengan menemukan vaksin pertama. Dari mana penemuan bersejarahnya dimulai? 🩺\n\nIa tidak mengabaikan desas-desus warga. Selama bertahun-tahun setiap sore ia mengunjungi peternakan dan mencatat kasusnya.\n\nHari ini BuildSelf mengungkap sains ketekunan di balik rutinitas Dr. Jenner."
      },
      whyTitle: {
        ko: "현장 귀납 데이터 누적을 통한 전전두엽 장기 계획과 지속적 도파민 보상",
        en: "Prefrontal Long-Term Planning & Sustained Dopamine via Field Log Accumulation",
        ja: "現場帰納データ蓄積による前頭前野長期計画と持続的ドパミン報酬",
        zh: "通过现场归纳数据积累激活前额叶长期规划与持续多巴胺回报",
        es: "Planificación a Largo Plazo y Dopamina Sostenida Mediante Datos de Campo",
        fr: "Planification à Long Terme & Dopamine Continue via le Suivi de Terrain",
        de: "Langfristige Planung & nachhaltiges Dopamin durch Feldbeobachtungsdaten",
        pt: "Planejamento a Longo Prazo e Dopamina Sustentada via Dados de Campo",
        id: "Perencanaan Jangka Panjang & Dopamin Berkelanjutan Melalui Logbook Lapangan"
      },
      whyDesc: {
        ko: "단기 결과에 목을 메면 가설이 조금만 안 맞아도 금방 포기하고 슬럼프에 빠집니다.\n\n제너처럼 매일 현장을 직접 관찰하고 데이터를 정직하게 기재하는 <strong>'장기 현장 관찰 일지'</strong>는 뇌의 도파민 보상축을 '결과'에서 '관찰과 기록 행위 자체'로 이동시킵니다. 끝까지 가설을 증명해 내는 압도적 그릿(Grit)과 확고한 성공 동력을 선사합니다.",
        en: "Chasing quick fixes causes easy surrender when early tests fail.\n\nConsistently logging field facts in a <strong>'Long-Term Field Log'</strong> shifts dopamine rewards to the act of recording itself, powering relentless grit.",
        ja: "短期的な結果ばかり追うと、仮説が少し外れただけで諦めてしまいます。\n\n毎日現場を観察して記録する<strong>「長期現場観察日記」</strong>はドパミン報酬を記録行為そのものに移行させ、粘り強いグリット（Grit）を与えます。",
        zh: "若急功近利只盯着短期成效，一旦早期试错受挫便极易放弃并陷入低谷。\n\n像詹纳那样每天亲临现场并诚实记录数据的<strong>“长效现场观察追踪”</strong>，能将大脑的多巴胺回报机制从“最终结果”转移至“观察与记录行为本身”，赋予你彻底证实假说的绝佳韧性(Grit)。",
        es: "Buscar resultados rápidos hace que se abandone al primer fallo.\n\nRegistrar hechos en un <strong>'Diario de Campo a Largo Plazo'</strong> traslada la recompensa de dopamina al acto de registrar, generando resiliencia.",
        fr: "Chercher des résultats immédiats pousse à l'abandon au premier échec.\n\nConsigner des faits dans un <strong>'Journal de Terrain à Long Terme'</strong> déplace la dopamine vers l'acte de noter, stimulant la persévérance.",
        de: "Das Jagen schneller Ergebnisse führt bei ersten Misserfolgen zum Aufgeben.\n\nDas Eintragen von Fakten in ein <strong>'Langzeit-Feldforschungs-Logbuch'</strong> verlagert Belohnungen auf das Aufzeichnen.",
        pt: "Buscar resultados rápidos faz com que se desista no primeiro erro.\n\nRegistrar fatos em um <strong>'Diário de Campo de Longo Prazo'</strong> transfere a recompensa de dopamina para o ato de registrar, gerando resiliência.",
        id: "Mengejar hasil cepat membuat orang mudah menyerah saat gagal di awal.\n\nMencatat fakta dalam <strong>'Logbook Lapangan Jangka Panjang'</strong> mengalihkan imbalan dopamin ke tindakan mencatat itu sendiri."
      },
      cautionTitle: {
        ko: "편견이나 추측을 배제하고 사실 그대로를 기록하세요",
        en: "Exclude Bias or Assumptions and Log Raw Ground Truth",
        ja: "偏見や推測を排除し、事実をそのまま記録しましょう",
        zh: "排除偏见与主观猜测，如实记录眼前事实真相",
        es: "Excluya sesgos o suposiciones y registre la verdad objetiva",
        fr: "Excluez les biais ou suppositions et inscrivez la vérité brute",
        de: "Schließen Sie Vorurteile aus und tragen Sie reine Fakten ein",
        pt: "Exclua viés ou suposições e registre a verdade objetiva",
        id: "Abaikan prasangka atau asumsi dan catat kebenaran faktual"
      },
      cautionDesc: {
        ko: "에드워드 제너의 위대함은 내 가설에 유리한 데이터만 모은 것이 아니라, 반대되는 예외 사례까지 솔직하게 일지에 담았다는 점입니다. 현장의 주관적 왜곡 없는 솔직한 데이터를 기록하세요.",
        en: "Jenner's greatness lay in recording raw exceptions alongside supporting data. Record honest facts without subjective spin.",
        ja: "ジェナーの偉大さは自分に都合の良いデータだけでなく、例外事例も正直に記録した点にあります。嘘のない事実を記録してください。",
        zh: "詹纳的伟大之处在于他不仅记录证实假设的数据，更如实保留反常与例外案例。请书写不带主观粉饰的真实现场数据。",
        es: "La grandeza de Jenner radicó en registrar excepciones reales sin manipular datos. Anote hechos honestos.",
        fr: "La grandeur de Jenner était de noter les exceptions réelles sans manipuler les faits. Inscrivez la vérité brute.",
        de: "Jenners Größe lag darin, auch Ausnahmen ehrlich aufzuzeichnen. Tragen Sie ehrliche Fakten ein.",
        pt: "A grandeza de Jenner esteve em registrar exceções reais sem manipular dados. Anote fatos honestos.",
        id: "Kehebatan Jenner terletak pada mencatat pengecualian nyata tanpa manipulasi. Catat fakta secara jujur."
      },
      steps: [
        {
          name: {
            ko: "오후 10분 현장 지표 & 고객 데이터 추적 세션",
            en: "10-Minute Afternoon Field & Data Tracking Session",
            ja: "午後10分間の現場指標＆顧客データ追跡セッション",
            zh: "锁定下午10分钟现场指标与真实反馈追踪",
            es: "Sesión de 10 Minutos por la Tarde de Seguimiento de Datos",
            fr: "Session de 10 Minutes l'Après-midi de Suivi des Données",
            de: "10-minütige nachmittägliche Datenverfolgungs-Session",
            pt: "Sessão de 10 Minutos à Tarde de Acompanhamento de Dados",
            id: "Sesi 10 Menit Pelacakan Data & Lapangan Sore"
          },
          text: {
            ko: "매일 오후 10분간 책상을 떠나 사용자 피드백, 시스템 통계 지표, 혹은 현장의 반응을 관찰합니다.",
            en: "Leave your desk for 10 minutes every afternoon to observe user feedback, metric dashboards, or field responses.",
            ja: "毎午後10分間デスクを離れ、ユーザーのフィードバックやシステムの統計指標、現場の反応を直接観察します。",
            zh: "每天下午抽出10分钟暂离开桌前，去直接查验用户反馈、系统指标大盘或现场真实反应。",
            es: "Deje su escritorio 10 minutos cada tarde para observar comentarios de usuarios, métricas o respuestas del campo.",
            fr: "Quittez votre bureau 10 minutes chaque après-midi pour observer les retours d'utilisateurs ou métriques.",
            de: "Verlassen Sie jeden Nachmittag 10 Minuten den Schreibtisch, um Nutzer-Feedback oder Metriken zu prüfen.",
            pt: "Deixe sua mesa por 10 minutos todas as tardes para observar comentários de usuários, métricas ou respostas.",
            id: "Tinggalkan meja selama 10 menit setiap sore untuk mengamati umpan balik pengguna atau metrik."
          }
        },
        {
          name: {
            ko: "현장 관찰 지표 3줄 타협 없는 기록",
            en: "Log 3 Uncompromising Ground Truth Observations",
            ja: "現場観察指標3行の妥協なき記録",
            zh: "妥协地记录3行现场真实观察指标",
            es: "Registre 3 Observaciones de la Verdad sin Concesiones",
            fr: "Inscrivez 3 Observations Brutes sans Concession",
            de: "Tragen Sie 3 kompromisslose Beobachtungsfakten ein",
            pt: "Registre 3 Observações da Verdade sem Concessões",
            id: "Catat 3 Pengamatan Lapangan Faktual Tanpa Kompromi"
          },
          text: {
            ko: "1) 관찰된 객관적 현상 2) 예상치 못한 예외 3) 누적된 지표 수치를 관찰 일지 노트에 3줄로 적습니다.",
            en: "Clearly write in your logbook: 1) Objective phenomena, 2) Unexpected exceptions, 3) Cumulative metrics.",
            ja: "1) 観察された客観的現象 2) 予想外の例外 3) 蓄積された数値の3行を観察ノートに記録します。",
            zh: "在日志本上无妥协地记录：1) 观察到的客观现象 2) 出乎意料的例外反例 3) 累计数据指标。",
            es: "Anote claramente en su cuaderno: 1) Fenómeno objetivo, 2) Excepciones inesperadas, 3) Métricas acumuladas.",
            fr: "Inscrivez clairement : 1) Phénomène objectif, 2) Exceptions inattendues, 3) Chiffres cumulés.",
            de: "Tragen Sie klar ein: 1) Objektives Phänomen, 2) Unerwartete Ausnahmen, 3) Kumulierte Zahlen.",
            pt: "Anote claramente no diário: 1) Fenômeno objetivo, 2) Exceções inesperadas, 3) Métricas acumuladas.",
            id: "Catat dengan jelas: 1) Fenomena objektif, 2) Pengecualian tak terduga, 3) Metrik kumulatif."
          }
        },
        {
          name: {
            ko: "누적 패턴 파악 및 가설 업그레이드",
            en: "Identify Cumulative Patterns & Upgrade Hypotheses",
            ja: "蓄積パターンの把握と仮説のアップグレード",
            zh: "分析积累模式与迭代优化工作假设",
            es: "Identifique Patrones Acumulados y Actualice Hipótesis",
            fr: "Identifiez les Motifs Cumulés & Améliorez les Hypothèses",
            de: "Identifizieren Sie Muster & Aktualisieren Sie Hypothesen",
            pt: "Identifique Padrões Acumulados e Atualize Hipóteses",
            id: "Identifikasi Pola Kumulatif & Tingkatkan Hipotesis"
          },
          text: {
            ko: "주말에 일주일간 축적된 관찰 기록을 모아보며 숨겨진 보물 같은 공통 패턴을 찾아 다음 가설에 적용합니다.",
            en: "Review your week of accumulated field logs on weekends to uncover hidden patterns and refine hypotheses.",
            ja: "週末に1週間蓄積された観察記録を見返し、隠された共通パターンを見つけて次の仮説に適用します。",
            zh: "每周周末翻阅一周积累的现场日志，从数据沉淀中掘金并发现隐秘的规律模式，据此升级迭代下一阶段假设。",
            es: "Revise sus registros de la semana los fines de semana para descubrir patrones y refinar hipótesis.",
            fr: "Révisez vos notes du week-end pour découvrir des motifs cachés et affiner vos hypothèses.",
            de: "Prüfen Sie am Wochenende Ihre Aufzeichnungen der Woche, um Muster zu entdecken und Hypothesen zu schärfen.",
            pt: "Revise seus diários da semana nos fins de semana para descobrir padrões e refinar hipóteses.",
            id: "Tinjau logbook harian seminggu di akhir pekan untuk menemukan pola dan memperbarui hipotesis."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "관찰 일지를 매일 적는데 의미 있는 패턴이 안 보이면 어떻게 하나요?",
            en: "What if I write daily field logs but fail to see meaningful patterns?",
            ja: "毎日観察日記を書いているのに意味のあるパターンが見えない場合はどうすればいいですか？",
            zh: "如果每天都写观察日志，却迟迟看不出有意义的规律模式怎么办？",
            es: "¿Qué hacer si escribo el diario de campo pero no veo patrones significativos?",
            fr: "Que faire si je ne vois pas de motifs dans mes notes de terrain ?",
            de: "Was tun, wenn ich täglich Felddaten aufzeichne, aber keine Muster sehe?",
            pt: "O que fazer se escrever o diário mas não ver padrões significativos?",
            id: "Bagaimana jika mencatat logbook harian tapi belum melihat pola yang bermakna?"
          },
          answer: {
            ko: "패턴이 당장 안 보이는 데이터조차 소중한 '노이즈 제거' 과정입니다. 1개월 이상 데이터가 축적되면 전전두엽이 스스로 패턴을 연결하게 됩니다.",
            en: "Even unseen patterns represent vital noise filtration. After 1 month of logging, your brain will naturally connect dots.",
            ja: "パターンがすぐに見えないデータも貴重な「ノイズ除去」プロセスです。1ヶ月以上蓄積されると脳が自然にパターンを繋ぎます。",
            zh: "即便当下看不出规律，这些真实记录本身也是至为宝贵的信息降噪过程。只要坚持积累1个月以上，前额叶便能自然而然将分散的点连接成线。",
            es: "Incluso los datos sin patrones aparentes filtran el ruido. Tras 1 mes de registro, su cerebro conectará los puntos.",
            fr: "Même des données sans motifs filtrent le bruit. Après 1 mois de notes, votre cerveau reliera les points.",
            de: "Auch Daten ohne Muster filtern Lärm. Nach 1 Monat Aufzeichnung verbindet das Gehirn die Punkte.",
            pt: "Mesmo dados sem padrões aparentes filtram o ruído. Após 1 mês de registro, seu cérebro conectará os pontos.",
            id: "Bahkan data tanpa pola tetap berharga sebagai penyaringan kebisingan. Setelah 1 bulan, otak akan menghubungkannya."
          }
        },
        {
          question: {
            ko: "제너처럼 시골 의사가 아닌 일반 현대 사무직도 현장 조사가 가능한가요?",
            en: "Can modern office workers perform field tracking like Jenner?",
            ja: "ジェナーのように地方の医師でない一般の事務職でも現場調査は可能ですか？",
            zh: "非临床与非外勤的普通办公室白领也能像詹纳一样做现场追踪吗？",
            es: "¿Los trabajadores de oficina pueden hacer seguimiento de campo como Jenner?",
            fr: "Les employés de bureau peuvent-ils faire du suivi de terrain comme Jenner ?",
            de: "Können Büroangestellte Feldbeobachtung wie Jenner durchführen?",
            pt: "Trabalhadores de escritório podem fazer acompanhamento de campo como Jenner?",
            id: "Apakah pekerja kantor biasa bisa melakukan pelacakan lapangan seperti Jenner?"
          },
          answer: {
            ko: "네! 사용자 후기, CS 문의 텍스트, Google Analytics 데이터, 혹은 사내 팀원들의 반응 관찰이 현대 사무직의 가장 위대한 '현장'입니다.",
            en: "Yes! User reviews, support tickets, Google Analytics, or coworker interactions are the ultimate modern fields.",
            ja: "はい！ユーザーレビューやCSのお問い合わせ、Google Analyticsのデータ、同僚の反応観察こそ現代の最も偉大な「現場」です。",
            zh: "当然可以！用户评价、客服咨询工单、Google Analytics 流量仪表盘，甚至是跨部门同事的真实反馈，就是现代白领最伟大的“现场”。",
            es: "¡Sí! Las reseñas de usuarios, tickets de soporte, métricas o la reacción de sus compañeros son el gran 'campo' moderno.",
            fr: "Oui ! Les avis d'utilisateurs, tickets de support, métriques ou réactions de collègues sont le 'terrain' moderne.",
            de: "Ja! Nutzerbewertungen, Support-Tickets, Analytics-Daten oder Reaktionen von Kollegen sind das moderne 'Feld'.",
            pt: "Sim! Avaliações de usuários, chamados de suporte, métricas ou reações de colegas são o 'campo' moderno.",
            id: "Tentu! Ulasan pengguna, tiket dukungan, analitik, atau reaksi rekan kerja adalah 'lapangan' modern terhebat."
          }
        }
      ]
    }
  }
];

console.log(`🚀 총 ${blogDataList.length}개의 위인 습관 블로그 생성 시작...`);

let processedCount = 0;

blogDataList.forEach(({ slug, item, translations }) => {
  // 1. Item JSON (src/data/habits/items/${slug}.json)
  const itemJsonPath = path.join(__dirname, 'data/habits/items', `${slug}.json`);
  fs.writeFileSync(itemJsonPath, JSON.stringify(item, null, 2), 'utf-8');
  console.log(`✅ [Item Generated] src/data/habits/items/${slug}.json`);

  // 2. Translation JSON (src/data/blogs/habits/${slug}.json)
  const blogJsonPath = path.join(__dirname, 'data/blogs/habits', `${slug}.json`);
  const blogJsonObj = { [slug]: translations };
  fs.writeFileSync(blogJsonPath, JSON.stringify(blogJsonObj, null, 2), 'utf-8');
  console.log(`✅ [Blog Translation JSON Generated] src/data/blogs/habits/${slug}.json`);

  // 3. Korean Master MD (src/content/blog/ko/${slug}.md)
  const koMdPath = path.join(__dirname, 'content/blog/ko', `${slug}.md`);

  const stepsYaml = translations.steps.map(s => `  - name: "${s.name.ko.replace(/"/g, '\\"')}"\n    text: "${s.text.ko.replace(/"/g, '\\"')}"`).join('\n');
  const faqsYaml = translations.faqs.map(f => `  - question: "${f.question.ko.replace(/"/g, '\\"')}"\n    answer: "${f.answer.ko.replace(/"/g, '\\"')}"`).join('\n');

  const stepCardsKo = translations.steps.map((s, idx) => `
<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 tracking-wider">STEP ${idx + 1}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${s.name.ko}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${s.text.ko}
  </p>
</div>`).join('\n');

  const faqAccordionKo = `
<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0 mb-6 flex items-center gap-2">
    <span>📌</span> 자주 묻는 질문 (FAQ)
  </h3>
  
  <details class="group border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4 cursor-pointer" open>
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
      <span>${translations.faqs[0].question.ko}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${translations.faqs[0].answer.ko}
    </p>
  </details>

  <details class="group cursor-pointer">
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
      <span>${translations.faqs[1].question.ko}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${translations.faqs[1].answer.ko}
    </p>
  </details>
</div>`;

  const mdContent = `---
title: "${translations.title.ko.replace(/"/g, '\\"')}"
description: "${translations.description.ko.replace(/"/g, '\\"')}"
pubDate: "${todayStr}"
updatedDate: "${todayStr}"
category: "BuildSelf"
tags: ["위인 습관", "루틴", "생산성", "몰입"]
heroImage: "/images/blog/${slug.replace(/-/g, '_')}.png"
app: "buildself"
formatVersion: 4
authority: "${translations.authority.ko.replace(/"/g, '\\"')}"
steps:
${stepsYaml}
faqs:
${faqsYaml}
---

${translations.intro.ko}

<div class="my-8 p-6 rounded-[2rem] border border-indigo-500/10 bg-indigo-500/5 dark:border-indigo-500/20 dark:bg-indigo-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-indigo-800 dark:text-indigo-300 m-0">
      역사적 & 학술적 근거
    </h5>
    <p class="text-xs text-indigo-700/80 dark:text-indigo-400/80 m-0 mt-1.5 leading-relaxed">
      본 콘텐츠는 ${translations.authority.ko} 정보를 기반으로 작성되었습니다.
    </p>
  </div>
</div>

---

## 1. ${translations.whyTitle.ko}

${translations.whyDesc.ko}

---

## 2. 실천을 위한 3단계 세부 행동 가이드

${stepCardsKo}

---

## 3. ${translations.cautionTitle.ko}
<div class="my-6 p-5 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-start gap-4">
  <span class="text-xl">💡</span>
  <div>
    <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
      ${translations.cautionDesc.ko}
    </p>
  </div>
</div>
${faqAccordionKo}`;

  fs.writeFileSync(koMdPath, mdContent, 'utf-8');
  console.log(`✅ [KO Master MD Generated] src/content/blog/ko/${slug}.md`);

  processedCount++;
});

console.log(`🎉 10개 위인 습관 데이터 및 원천 파일 생성 완료! (${processedCount}개)`);
