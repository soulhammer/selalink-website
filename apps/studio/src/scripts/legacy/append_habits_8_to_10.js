import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDataDir = path.join(__dirname, 'data/blogs/habits');
const koBlogDir = path.join(__dirname, 'content/blog/ko');

const today = "2026-07-22";

const habitEntries = [
  // 9. vivaldi-composition-walk
  {
    slug: "vivaldi-composition-walk",
    title: {
      ko: "<사계>를 작곡한 불멸의 거장? 안토니오 비발디의 새벽 운하 영감 루틴",
      en: "The Immortal Master Who Composed 'The Four Seasons'? Antonio Vivaldi's Canal Inspiration Routine",
      ja: "「四季」を作曲した不滅の巨匠？アンソニー・ヴィヴァルディの早朝運河ひらめきルーティン",
      zh: "创作《四季》的永恒巨匠？安东尼奥·维瓦尔第的晨间运河灵感惯例",
      es: "¿El inmortal maestro que compuso 'Las cuatro estaciones'? La rutina de inspiración en los canales de Antonio Vivaldi",
      fr: "Le maître immortel qui a composé 'Les Quatre Saisons' ? La routine d'inspiration au canal d'Antonio Vivaldi",
      de: "Der unsterbliche Meister, der 'Die vier Jahreszeiten' komponierte? Antonio Vivaldis Kanal-Inspirations-Routine",
      pt: "O imortal mestre que compôs 'As Quatro Estações'? A rotina de inspiração no canal de Antonio Vivaldi",
      id: "Master Abadi yang Menggubah 'The Four Seasons'? Rutinitas Inspirasi Kanal Antonio Vivaldi"
    },
    description: {
      ko: "바르크 음악의 거장 안토니오 비발디. 새벽 베네치아 운하 산책 후 즉시 악보에 오케스트라 스코어를 적어 내린 그의 영감 포착 법과 3단계 실천 가이드를 소개합니다.",
      en: "Baroque master Antonio Vivaldi. Discover his early morning canal walking routine for capturing sensory inspirations into full orchestral scores, plus a 3-step guide.",
      ja: "バロック音楽の巨匠ヴィヴァルディ。早朝のベネチア運河散歩の後、即座にオーケストラスコアを書き留めた彼のひらめき捕捉法と3ステップ実践ガイドを紹介します。",
      zh: "巴洛克音乐巨匠安东尼奥·维瓦尔第。介绍他通过清晨威尼斯运河散步捕捉自然感官灵感并即刻转化为管弦乐谱的大脑重置法及三步指南。",
      es: "El maestro barroco Antonio Vivaldi. Descubra su rutina de caminata matutina por los canales para plasmar inspiraciones sensoriales en partituras, y una guía de 3 pasos.",
      fr: "Le maître baroque Antonio Vivaldi. Découvrez sa routine de marche matinale le long des canaux pour capturer les inspirations, et un guide en 3 étapes.",
      de: "Barockmeister Antonio Vivaldi. Entdecken Sie seine morgendliche Kanalspaziergang-Routine zum Einfangen von Inspirationen in Orchesterpartituren.",
      pt: "O mestre barroco Antonio Vivaldi. Descubra sua rotina de caminhada matinal nos canais para transformar inspirações em partituras, e um guia de 3 passos.",
      id: "Master Barok Antonio Vivaldi. Temukan rutinitas jalan pagi di kanal untuk menangkap inspirasi sensorik dan panduan praktis 3 langkah."
    },
    authority: {
      ko: "H. C. Robbins Landon 저서 'Vivaldi: Voice of the Baroque' 및 Michael Talbot 전기",
      en: "H. C. Robbins Landon's 'Vivaldi: Voice of the Baroque' & Michael Talbot's Biography",
      ja: "H. C. ロビンズ・ランドン著「Vivaldi: Voice of the Baroque」およびマイケル・タルボット評伝",
      zh: "H. C. 罗宾斯·兰登著作《Vivaldi: Voice of the Baroque》与麦克·泰尔博特传记",
      es: "Obra 'Vivaldi: Voice of the Baroque' de H. C. Robbins Landon y biografía de Michael Talbot",
      fr: "Ouvrage 'Vivaldi: Voice of the Baroque' de H. C. Robbins Landon & biographie de Michael Talbot",
      de: "H. C. Robbins Landons 'Vivaldi: Voice of the Baroque' & Michael Talbots Biografie",
      pt: "Obra 'Vivaldi: Voice of the Baroque' de H. C. Robbins Landon & biografia de Michael Talbot",
      id: "Karya H. C. Robbins Landon 'Vivaldi: Voice of the Baroque' & Biografi Michael Talbot"
    },
    intro: {
      ko: "바이올린 협주곡 <사계>로 세기를 넘어 인류의 가슴을 울리는 베네치아의 위대한 작곡가, 안토니오 비발디. 500개가 넘는 협주곡을 번개처럼 빠른 속도로 작곡해 낸 그의 샘솟는 영감은 어디서 탄생했을까요? 🎻\n\n비발디는 매일 새벽 안개가 자욱한 베네치아의 운하와 다리 주변을 조용히 걸었습니다. 바람 소리, 물결 소리, 계절의 변화를 온몸의 감각으로 흡수한 직후 아틀리에로 돌아와 완성된 악상들을 지체 없이 오악보에 쏟아부었습니다. 감각 흡수 직후의 빠른 포착(Speed of Capture)이 그의 명곡들을 완성했습니다.\n\n오늘 BuildSelf에서는 비발디의 '새벽 감각 영감 기록' 루틴과 현대인을 위한 3단계 실천 가이드를 알아봅니다.",
      en: "Venetian composer Antonio Vivaldi, creator of 'The Four Seasons'. Where did his endless stream of inspirations come from? 🎻\n\nVivaldi walked the foggy canals of Venice every morning. Absorbing water sounds and seasonal shifts, he immediately returned to write complete scores without delay.\n\nToday, BuildSelf explores Vivaldi's 'morning canal inspiration' routine.",
      ja: "「四季」を生み出したベネチアの巨匠ヴィヴァルディ。彼のあふれ出るひらめきはどこから生まれたのでしょうか？ 🎻\n\nヴィヴァルディは毎朝霧のベネチア運河を歩きました。水音や季節の移ろいを感じ取った直後、譜面に一気に書き留めました。\n\n今日のBuildSelfでは、ヴィヴァルディの「朝の感覚ひらめき記録」ルーティンを紹介します。",
      zh: "创作出经典《四季》的威尼斯大作曲家维瓦尔第。他那源源不断的灵感来自何处？ 🎻\n\n维瓦尔第每天清晨都会在雾气弥漫的威尼斯运河旁散步。在吸收水声与季节变幻的感官信号后，他会立即回到书桌将乐思倾泻于五线谱上。\n\n今天，BuildSelf 将带您了解维瓦尔第“晨间感官灵感”惯例。",
      es: "El compositor Antonio Vivaldi, creador de 'Las cuatro estaciones'. ¿De dónde venía su inspiración? 🎻\n\nVivaldi caminaba por los brumosos canales de Venecia cada mañana. Tras absorber los sonidos del agua, escribía partituras completas de inmediato.\n\nHoy, BuildSelf explora la rutina de 'inspiración en canales' de Vivaldi.",
      fr: "Le compositeur Antonio Vivaldi, créateur des 'Quatre Saisons'. D'où venait son inspiration ? 🎻\n\nVivaldi arpentait les canaux de Venise chaque matin. Après avoir absorbé les sons de l'eau, il transcrivait immédiatement les notes.\n\nAujourd'hui, BuildSelf explore la routine d'inspiration au canal de Vivaldi.",
      de: "Antonio Vivaldi, Schöpfer der 'Vier Jahreszeiten'. Woher stammte seine Inspiration? 🎻\n\nVivaldi ging morgens an den Kanälen Venedigs spazieren. Nach dem Aufnehmen der Naturgeräusche schrieb er Partituren sofort auf.\n\nHeute untersucht BuildSelf Vivaldis 'Kanal-Inspirations'-Routine.",
      pt: "O compositor Antonio Vivaldi, criador de 'As Quatro Estações'. De onde vinha sua inspiração? 🎻\n\nVivaldi caminhava pelos canais de Veneza todas as manhãs. Após absorver os sons da água, escrevia as partituras imediatamente.\n\nHoje, o BuildSelf explora a rotina de 'inspiração no canal' de Vivaldi.",
      id: "Komponis Antonio Vivaldi, pencipta 'The Four Seasons'. Dari mana datangnya inspirasinya? 🎻\n\nVivaldi berjalan di kanal-kanal Venesia setiap pagi. Setelah menyerap suara air, ia segera mencatat partitur musik tanpa menunda.\n\nHari ini, BuildSelf menjelajahi rutinitas 'inspirasi kanal' Vivaldi."
    },
    whyTitle: {
      ko: "청각·감각 자극 입력과 쾌속 기록(Speed of Capture)의 시너지",
      en: "Synergy of Sensory Input and High-Speed Idea Capture",
      ja: "聴覚・感覚刺激入力と高速記録（Speed of Capture）のシナジー",
      zh: "听觉感官输入与快速记录的协同效应",
      es: "Sinergia entre la entrada sensorial y la captura de alta velocidad de ideas",
      fr: "Synergie entre stimulation sensorielle et vitesse de capture des idées",
      de: "Synergie aus sensorischem Input und schneller Aufzeichnung",
      pt: "Sinergia entre estímulo sensorial e captura rápida de ideias",
      id: "Sinergi Input Sensorik dan Kecepatan Penangkapan Ide"
    },
    whyDesc: {
      ko: "자연의 소리와 미세 풍경을 걷며 흡수하면 뇌의 인지 활성도가 유연해집니다. 비발디처럼 영감을 얻은 직후 <strong>지체 없이 수첩에 텍스트나 기호로 고정하는 속도</strong>가 창의적 아이디어의 휘발을 차단하고 작품의 밀도를 완성시킵니다.",
      en: "Absorbing natural sounds while walking enhances brain flexibility. The <strong>speed of capturing ideas immediately</strong> into notes prevents rapid creative evaporation and ensures high density.",
      ja: "自然の音を吸収すると脳の活性が柔軟になります。ひらめきを得た直後に<strong>即座にメモに固定するスピード</strong>がアイデアの蒸発を防ぎます。",
      zh: "在散步中吸收自然声音能提升大脑灵活性。像维瓦尔第一样在获得灵感后<strong>毫不延误地用文字捕捉的速度</strong>，能防止创意挥发并提升成果质量。",
      es: "Absorber sonidos naturales al caminar eleva la flexibilidad mental. La <strong>velocidad para capturar ideas de inmediato</strong> evita que se evaporen.",
      fr: "Absorber les sons de la nature stimule le cerveau. La <strong>vitesse de capture immédiate des idées</strong> empêche leur évaporation.",
      de: "Das Aufnehmen von Naturgeräuschen macht das Gehirn flexibel. Das <strong>sofortige Festhalten von Ideen</strong> schützt vor dem Verfliegen.",
      pt: "Absorver sons naturais aumenta a flexibilidade mental. A <strong>velocidade de capturar ideias imediatamente</strong> evita a evaporação criativa.",
      id: "Menyerap suara alam meningkatkan fleksibilitas otak. <strong>Kecepatan mencatat ide seketika</strong> mencegah penguapan ide-ide kreatif."
    },
    steps: [
      {
        name: {
          ko: "새벽 15분 자연 감각 산책",
          en: "15-Minute Morning Sensory Walk",
          ja: "朝15分間の自然感覚散歩",
          zh: "晨间15分钟自然感官散步",
          es: "Caminata sensorial matutina de 15 minutos",
          fr: "Marche sensorielle matinale de 15 minutes",
          de: "15-minütiger morgendlicher Sensorikspaziergang",
          pt: "Caminhada sensorial matinal de 15 minutos",
          id: "Jalan Pagi Sensorik 15 Menit"
        },
        text: {
          ko: "아침 일찍 공기, 물소리, 바람의 감각을 온전히 느끼며 15분간 야외를 느긋하게 걷습니다.",
          en: "Walk outside leisurely for 15 minutes early morning, fully sensing the air, wind, and ambient sounds.",
          ja: "早朝の空気や風、音の感覚を全身で感じながら15分間屋外をゆったり歩きます。",
          zh: "清晨在户外悠闲散步15分钟，全心感受空气、水声与微风的自然体验。",
          es: "Camine 15 minutos al aire libre temprano en la mañana, sintiendo el aire, el viento y los sonidos.",
          fr: "Marchez 15 minutes dehors tôt le matin, en ressentant l'air, le vent et les sons environnants.",
          de: "Gehen Sie morgens 15 Minuten durch die frische Luft und nehmen Sie Naturgeräusche wahr.",
          pt: "Caminhe 15 minutos ao ar livre de manhã cedo, sentindo o ar, o vento e os sons da natureza.",
          id: "Berjalanlah di luar ruangan selama 15 menit di pagi hari, rasakan udara, angin, dan suara alam."
        }
      },
      {
        name: {
          ko: "직후 10분 속도감 있는 영감 덤프",
          en: "Immediate 10-Minute High-Speed Brain Dump",
          ja: "直後10分間の高速ひらめきダンプ",
          zh: "归来后10分钟即时倾泻灵感",
          es: "Vuelco rápido de inspiración de 10 minutos al volver",
          fr: "Capture ultra-rapide des idées en 10 minutes",
          de: "Sofortiger 10-minütiger Ideen-Dump",
          pt: "Descarga rápida de inspiração de 10 minutos",
          id: "Tumpahan Inspirasi Cepat 10 Menit Seketika"
        },
        text: {
          ko: "산책에서 돌아온 직후 주저하지 않고 떠오른 기획이나 아이디어를 10분간 연속으로 메모합니다.",
          en: "Immediately after returning, write continuously for 10 minutes without hesitating to dump all ideas.",
          ja: "散歩から戻った直後、躊躇することなく頭に浮かんだアイデアを10分間連続でメモします。",
          zh: "散步归来后无需犹豫，连续10分钟不停地在笔记本上记下脑海中浮现的所有构想。",
          es: "Inmediatamente al volver, escriba sin dudar durante 10 minutos para plasmar todas las ideas.",
          fr: "Dès votre retour, écrivez sans hésitation pendant 10 minutes pour poser toutes vos idées.",
          de: "Schreiben Sie direkt nach der Rückkehr 10 Minuten lang ohne Zögern alle Ideen auf.",
          pt: "Logo após voltar, escreva continuamente por 10 minutos sem hesitar para capturar as ideias.",
          id: "Segera setelah kembali, tuliskan ide-ide Anda selama 10 menit tanpa ragu-ragu."
        }
      },
      {
        name: {
          ko: "오후 스코어 정교화 및 완성",
          en: "Afternoon Score Refinement",
          ja: "午後からのスコア精巧化と完成",
          zh: "下午打磨精炼成果",
          es: "Perfeccionamiento de la idea por la tarde",
          fr: "Peaufinage de la création l'après-midi",
          de: "Ausarbeitung und Verfeinerung am Nachmittag",
          pt: "Aprimoramento da ideia à tarde",
          id: "Penyempurnaan Karya di Sore Hari"
        },
        text: {
          ko: "초안으로 기록된 날것의 아이디어를 이성이 발달하는 오후 시간에 논리적으로 구조화합니다.",
          en: "Structure and refine the raw draft recorded in the morning during the afternoon when logic is sharp.",
          ja: "メモされた生のアイデアを、理性が働く午後の時間に論理的に構造化して完成させます。",
          zh: "在理性敏锐的下午，对早晨记录的原始想法进行逻辑结构化打磨。",
          es: "Eructure y perfeccione el borrador crudo de la mañana durante la tarde con lógica.",
          fr: "Structurez et peaufinez le brouillon de la matinée l'après-midi lorsque la logique est affûtée.",
          de: "Strukturieren Sie die rohen Morgennotizen am Nachmittag mit klarer Logik.",
          pt: "Estruture e aprimore o rascunho da manhã à tarde, quando a lógica está afiada.",
          id: "Strukturkan dan sempurnakan draf kasar pagi hari pada sore hari saat nalar tajam."
        }
      }
    ],
    cautionTitle: {
      ko: "영감 수집 후 메모 작성 지연 주의",
      en: "Caution Against Delaying Notes After Collecting Inspiration",
      ja: "ひらめき収集後のメモ遅延に注意",
      zh: "切忌在获得灵感后延迟记录",
      es: "Precaución con retrasar las notas tras captar la inspiración",
      fr: "Attention au retard dans la prise de note après l'inspiration",
      de: "Vorsicht vor Verzögerungen nach der Inspiration",
      pt: "Cuidado com o atraso no registro após a inspiração",
      id: "Waspada Menunda Catatan Setelah Mendapat Inspirasi"
    },
    cautionDesc: {
      ko: "산책 중 얻은 인지적 자극은 30분이 지나면 뇌의 일시적 작업 기억에서 소멸됩니다. 산책을 마친 즉시 노트에 텍스트로 고정하지 않으면 영감은 되살아나지 않습니다.",
      en: "Cognitive stimulation from a walk fades from working memory after 30 minutes. Secure them into text immediately upon return.",
      ja: "散歩で得た刺激は30分を過ぎると記憶から消滅します。戻ったら直ちにテキストとして固定しましょう。",
      zh: "散步中获得的感官灵感会在30分钟后从工作记忆中消逝。归来后请立即用文字将其固定在纸上。",
      es: "La estimulación de la caminata desaparece tras 30 minutos. Anótela en texto inmediatamente al regresar.",
      fr: "L'inspiration s'efface de la mémoire après 30 minutes. Fixez-la par écrit dès votre retour.",
      de: "Eindrücke verfliegen nach 30 Minuten. Halten Sie sie sofort nach der Rückkehr schriftlich fest.",
      pt: "A inspiração desvanece após 30 minutos. Fixe-a em texto imediatamente ao retornar.",
      id: "Stimulasi dari jalan pagi memudar setelah 30 menit. Catat ke dalam teks segera setelah kembali."
    },
    faqs: [
      {
        question: {
          ko: "음악이나 창작 분야가 아닌 일반 사무직에도 효과가 있나요?",
          en: "Does this routine work for general office workers, not just artists?",
          ja: "芸術系ではなく一般的な desk workの仕事にも効果がありますか？",
          zh: "非艺术创作者的一般职场办公人员也适用该惯例吗？",
          es: "¿Funciona esta rutina para trabajadores de oficina, no solo artistas?",
          fr: "Cette routine aide-t-elle les employés de bureau non artistes ?",
          de: "Hilft diese Routine auch Büroarbeitern ohne kreativen Beruf?",
          pt: "Essa rotina funciona para profissionais de escritório em geral?",
          id: "Apakah rutinitas ini bekerja untuk pekerja kantor biasa?"
        },
        answer: {
          ko: "네! 기획서 작성, 마케팅 아이디어, 새로운 문제 해결책을 찾는 모든 지식 노동자에게 훌륭한 뇌 리셋과 영감 포착 도구가 됩니다.",
          en: "Yes! It serves as a brilliant brain reset and idea-capture tool for all knowledge workers planning proposals or solving problems.",
          ja: "はい！企画書の作成やマーケティング、問題解決策を探すあらゆる知識労働者に素晴らしい効果をもたらします。",
          zh: "是的！对于撰写策划案、构思营销方案或寻找新突破口的知识型工作者来说，这是极其优秀的大脑重置工具。",
          es: "¡Sí! Es una gran herramienta de reinicio e ideas para cualquier profesional que elabore propuestas o resuelva problemas.",
          fr: "Oui ! C'est un excellent outil de réinitialisation pour quiconque conçoit des projets ou résout des problèmes.",
          de: "Ja! Sie ist ein hervorragendes Tool für alle Wissensarbeiter zur Ideenfindung und Problemlösung.",
          pt: "Sim! É uma ótima ferramenta de reinício para qualquer profissional que elabore propostas ou resolva problemas.",
          id: "Ya! Ini adalah alat reset otak yang luar biasa bagi semua pekerja pengetahuan yang menyusun proposal."
        }
      },
      {
        question: {
          ko: "아침 시간이 너무 바쁠 땐 몇 분이나 투자해야 하나요?",
          en: "How many minutes should I invest if morning time is tight?",
          ja: "朝の時間が忙しい場合は何分投資すれば十分ですか？",
          zh: "如果早晨时间非常紧迫，需要投入多少分钟？",
          es: "¿Cuántos minutos debo invertir si las mañanas son muy ajetreadas?",
          fr: "Combien de temps y consacrer si le matin est très chargé ?",
          de: "Wie viele Minuten reichen aus, wenn der Morgen knapp ist?",
          pt: "Quantos minutos investir se as manhãs forem muito corridas?",
          id: "Berapa menit yang harus diinvestasikan jika waktu pagi sangat singkat?"
        },
        answer: {
          ko: "단 5분의 빠른 야외 산책과 3분의 즉각적 키워드 메모만으로도 뇌파를 전환하는 80% 이상의 동일한 효과를 거둘 수 있습니다.",
          en: "Just 5 minutes of outdoor walking followed by 3 minutes of immediate keyword notes achieves 80%+ of the benefits.",
          ja: "たった5分間の屋外散歩と3分間の即座のキーワードメモだけでも、80%以上の同等の効果を得られます。",
          zh: "仅需5分钟的户外散步配合3分钟的即时关键词笔记，就能达到80%以上的同等大脑重置效果。",
          es: "Solo 5 minutos de caminata y 3 minutos de notas clave bastan para lograr más del 80% del efecto.",
          fr: "Seulement 5 minutes de marche et 3 minutes de notes suffisent pour obtenir 80% des bénéfices.",
          de: "Nur 5 Minuten Gehen und 3 Minuten Notizen reichen für über 80% des Effekts aus.",
          pt: "Apenas 5 minutos de caminhada e 3 minutos de notas bastam para obter 80%+ dos benefícios.",
          id: "Cukup 5 menit jalan di luar dan 3 menit catatan kata kunci untuk mendapatkan 80%+ manfaatnya."
        }
      }
    ]
  },

  // 10. klimt-gardening-nature-refresh
  {
    slug: "klimt-gardening-nature-refresh",
    title: {
      ko: "황금빛 화려함 속 정원을 걸은 거장? 구스타프 클림트의 아침 감각 회복 루틴",
      en: "The Golden Master Who Walked in Gardens? Gustav Klimt's Morning Sensory Refresh Routine",
      ja: "黄金の華やかさの中で庭を歩いた巨匠？グスタフ・クリムトの朝の感覚回復ルーティン",
      zh: "在金色华丽中漫步庭院的巨匠？古斯塔夫·克里姆特的晨间感官恢复惯例",
      es: "¿El maestro dorado que caminaba por jardines? La rutina de renovación sensorial de Gustav Klimt",
      fr: "Le maître de l'or qui arpentait les jardins ? La routine de régénération sensorielle de Gustav Klimt",
      de: "Der goldene Meister, der durch Gärten wandelte? Gustav Klimts morgendliche Frische-Routine",
      pt: "O mestre dourado que caminhava em jardins? A rotina de renovação sensorial de Gustav Klimt",
      id: "Master Keemasan yang Berjalan di Taman? Rutinitas Penyegaran Sensorik Gustav Klimt"
    },
    description: {
      ko: "<키스>의 작곡가 구스타프 클림트. 매일 아침 오스트리아 호숫가 정원을 거닐며 자연의 꽃과 빛을 관찰해 뇌 피로를 리셋한 그의 3단계 감각 회복 가이드를 소개합니다.",
      en: "Symbolist painter Gustav Klimt. Discover his morning garden walk routine for biophilic relaxation and sensory restoration, plus a 3-step modern guide.",
      ja: "「接吻」の巨匠グスタフ・クリムト。毎朝湖畔の庭園を歩き自然の光と花を観察して脳疲労をリセットした彼の3ステップ感覚回復法を紹介します。",
      zh: "画出名作《吻》的古斯塔夫·克里姆特。介绍他通过清晨漫步湖畔庭院观察花卉光影消除大脑疲劳的大脑重置法及三步指南。",
      es: "El pintor Gustav Klimt. Descubra su rutina de caminata matutina por el jardín para la relajación biofílica y una guía práctica de 3 pasos.",
      fr: "Le peintre Gustav Klimt. Découvrez sa routine de marche matinale dans le jardin pour se régénérer et un guide en 3 étapes.",
      de: "Maler Gustav Klimt. Entdecken Sie seine tägliche Gartenspaziergang-Routine zur Erholung und einen 3-Schritte-Leitfaden.",
      pt: "O pintor Gustav Klimt. Descubra sua rotina de caminhada matinal no jardim para renovação sensorial e um guia prático de 3 passos.",
      id: "Pelukis Gustav Klimt. Temukan rutinitas jalan pagi di tamannya untuk penyegaran biofilik dan panduan praktis 3 langkah."
    },
    authority: {
      ko: "Tobias G. Natter 저서 'Gustav Klimt: The Complete Paintings' 및 Alessandra Comini 전기",
      en: "Tobias G. Natter's 'Gustav Klimt: The Complete Paintings' & Alessandra Comini's Biography",
      ja: "トビアス・G・ナッター著「Gustav Klimt: The Complete Paintings」およびアレッサンドラ・コミニ評伝",
      zh: "托比亚斯·G·纳特著作《Gustav Klimt: The Complete Paintings》与阿莱桑德拉·科米尼传记",
      es: "Obra 'Gustav Klimt: The Complete Paintings' de Tobias G. Natter y biografía de Alessandra Comini",
      fr: "Ouvrage 'Gustav Klimt: The Complete Paintings' de Tobias G. Natter & biographie d'Alessandra Comini",
      de: "Tobias G. Natters 'Gustav Klimt: The Complete Paintings' & Alessandra Cominis Biografie",
      pt: "Obra 'Gustav Klimt: The Complete Paintings' de Tobias G. Natter & biografia de Alessandra Comini",
      id: "Karya Tobias G. Natter 'Gustav Klimt: The Complete Paintings' & Biografi Alessandra Comini"
    },
    intro: {
      ko: "<키스>와 <유디트> 등 화려한 황금빛 패턴과 독창적 인물화로 세계 미술사를 사로잡은 오스트리아의 화가, 구스타프 클림트. 치밀한 디테일과 압도적 패턴을 완성한 그의 청량한 집중력은 어디서 탄생했을까요? 🎨\n\n클림트는 매일 아침 오스트리아 아터제 호숫가의 정원에서 푸른 로브를 입고 장미와 온갖 꽃, 빛의 조화를 바라보며 조용히 걸었습니다. 복잡한 작업실로 들어가기 전 자연의 미세 구조를 감상하며 뇌의 인지적 피로를 완벽하게 회복한 루틴 덕분에 그는 위대한 마스터피스들을 완성해 낼 수 있었습니다.\n\n오늘 BuildSelf에서는 클림트의 '아침 정원 감각 회복' 루틴과 현대인을 위한 3단계 실천 가이드를 알아봅니다.",
      en: "Austrian painter Gustav Klimt, famous for 'The Kiss'. Where did his pristine focus come from? 🎨\n\nEvery morning, Klimt walked softly in blue robes around the garden near Lake Attersee, silently gazing at roses and light. This biophilic relaxation restored his attention fatigue before entering his studio.\n\nToday, BuildSelf explores Gustav Klimt's 'morning garden sensory refresh' routine.",
      ja: "「接吻」で知られる巨匠グスタフ・クリムト。彼の卓越した集中力はどこから生まれたのでしょうか？ 🎨\n\nクリムトは毎朝青いローブを羽織り、アッター湖畔の庭園でバラや光の調和を眺めながら静かに歩きました。アトリエに入る前に自然のミクロ構造を鑑賞し脳疲労をリセットしました。\n\n今日のBuildSelfでは、クリムトの「朝の庭園感覚回復」ルーティンを紹介します。",
      zh: "因创作名画《吻》而闻名于世的奥地利画家古斯塔夫·克里姆特。他那精湛的专注力源自何处？ 🎨\n\n克里姆特每天清晨都会身穿蓝色长袍，在湖畔花园中静静漫步，凝视玫瑰与光影。在进入画室前，这一消除大脑疲劳的生机性放松惯例使他得以创作出传世杰作。\n\n今天，BuildSelf 将带您探究克里姆特“晨间花园感官恢复”惯例。",
      es: "El pintor austriaco Gustav Klimt, famoso por 'El beso'. ¿De dónde venía su aguda concentración? 🎨\n\nCada mañana, Klimt caminaba en túnica azul por el jardín cerca del lago Attersee, observando rosas y luz. Esta relajación biofílica restauraba su atención antes de pintar.\n\nHoy, BuildSelf explora la rutina de 'renovación en el jardín' de Gustav Klimt.",
      fr: "Le peintre autrichien Gustav Klimt, célèbre pour 'Le Baiser'. D'où venait sa grande concentration ? 🎨\n\nChaque matin, Klimt arpentait le jardin du lac Attersee en robe bleue, contemplant les roses et la lumière. Cette relaxation biophilique restaurait son attention.\n\nAujourd'hui, BuildSelf explore la routine de 'régénération au jardin' de Gustav Klimt.",
      de: "Gustav Klimt, berühmt für 'Der Kuss'. Woher stammte seine Konzentration? 🎨\n\nJeden Morgen wandelte Klimt im blauen Kittel durch den Garten am Attersee und betrachtete Rosen und Licht. Diese Erholung stellte seine Aufmerksamkeit wieder her.\n\nHeute untersucht BuildSelf Gustav Klimts 'Gartenspaziergang'-Routine.",
      pt: "O pintor austríaco Gustav Klimt, famoso por 'O Beijo'. De onde vinha seu foco afiado? 🎨\n\nTodas as manhãs, Klimt caminhava no jardim do Lago Attersee, observando rosas e luz. Essa relaxamento biofílico restaurava sua atenção antes de pintar.\n\nHoje, o BuildSelf explora a rotina de 'renovação no jardim' de Gustav Klimt.",
      id: "Pelukis Austria Gustav Klimt, terkenal dengan 'The Kiss'. Dari mana fokus tajamnya berasal? 🎨\n\nSetiap pagi, Klimt berjalan di taman dekat Danau Attersee, menatap mawar dan cahaya. Relaksasi biofilik ini memulihkan kelelahan perhatiannya.\n\nHari ini, BuildSelf menjelajahi rutinitas 'penyegaran taman' Gustav Klimt."
    },
    whyTitle: {
      ko: "자연 프랙탈 관찰을 통한 인지 피로(Attention Fatigue) 회복",
      en: "Attention Fatigue Restoration via Natural Fractal Observation",
      ja: "自然のフラクタル観察による注意力疲労（Attention Fatigue）の回復",
      zh: "通过观察自然分形恢复注意力疲劳",
      es: "Restauración de la fatiga atencional observando fractales naturales",
      fr: "Restauration de la fatigue attentionnelle par l'observation des fractales",
      de: "Wiederherstellung bei Erschöpfung durch Natur-Fraktale",
      pt: "Restauração da fadiga atencional pela observação de fractais naturais",
      id: "Pemulihan Kelelahan Perhatian Melalui Pengamatan Fraktal Alam"
    },
    whyDesc: {
      ko: "복잡한 화면과 인공적 자극에 장시간 노출되면 뇌의 주의력 회로가 지칩니다. 클림트처럼 <strong>자연 식물의 꽃잎과 프랙탈 구조를 관찰</strong>하면 바이오필리아(Biophilia) 생태 반응이 일어나 주의력 피로가 즉각 복구됩니다.",
      en: "Long exposure to artificial screens exhausts attention circuits. Observing <strong>natural flower petals and fractal patterns</strong>, like Klimt, triggers biophilic relaxation to instantly restore cognitive focus.",
      ja: "人工的画面への長時間露出は注意力を枯渇させます。<strong>植物のペタルやフラクタル構造を観察</strong>することでバイオフィリア反応が起き、注意力疲労が回復します。",
      zh: "长时间暴露于人工荧幕会使注意力回路疲惫不堪。像克里姆特一样<strong>观察自然花瓣与分形结构</strong>，能引发生命亲和(Biophilia)反应，即刻恢复大脑专注力。",
      es: "La exposición a pantallas agota la atención. Observar <strong>pétalos de flores y patrones naturales</strong> desencadena una relajación biofílica que restaura la mente.",
      fr: "L'exposition aux écrans épuise l'attention. Observer <strong>les pétales de fleurs et motifs naturels</strong> déclenche une relaxation biophilique qui restaure l'esprit.",
      de: "Künstliche Bildschirme ermüden die Aufmerksamkeit. Das Betrachten von <strong>Blüten und Mustern</strong> löst Erholung aus und stellt den Fokus wieder her.",
      pt: "A exposição a telas esgota a atenção. Observar <strong>pétalas de flores e padrões naturais</strong> desperta um relaxamento biofílico que restaura a mente.",
      id: "Paparan layar buatan menguras perhatian. Mengamati <strong>kelopak bunga dan pola alam</strong> memicu relaksasi biofilik untuk memulihkan fokus."
    },
    steps: [
      {
        name: {
          ko: "아침 식물·정원 관찰 공간 방문",
          en: "Morning Garden or Plant Space Visit",
          ja: "朝の植物・庭園の観察場所訪問",
          zh: "晨间前往植物或庭院空间",
          es: "Visita matutina a un jardín o plantas",
          fr: "Visite matinale d'un jardin ou espace vert",
          de: "Morgendlicher Besuch im Garten",
          pt: "Visita matinal a um jardim ou plantas",
          id: "Kunjungan Pagi ke Taman atau Tanaman"
        },
        text: {
          ko: "아침 집 근처 공원, 베란다 화분, 혹은 정원으로 나가 자연 식물이 있는 곳에 섭니다.",
          en: "Step out to a nearby park, balcony plants, or garden early in the morning.",
          ja: "朝、近所の公園やベランダの鉢植え、庭へ出て植物のある場所に立ちます。",
          zh: "清晨前往家附近的公园、阳台盆栽或花园，置身于拥有自然植物的环境中。",
          es: "Salga a un parque cercano, a sus plantas del balcón o a un jardín temprano por la mañana.",
          fr: "Rendez-vous dans un parc proche, sur votre balcon ou dans un jardin tôt le matin.",
          de: "Gehen Sie morgens in einen Park, zu Balkonpflanzen oder in den Garten.",
          pt: "Vá a um parque próximo, às plantas da varanda ou ao jardim de manhã cedo.",
          id: "Pergilah ke taman terdekat, tanaman balkon, atau taman di pagi hari."
        }
      },
      {
        name: {
          ko: "5분 무생각 세부 결 관찰",
          en: "5-Minute Thoughtless Pattern Observation",
          ja: "5分間の無思考細部観察",
          zh: "5分钟放空大脑沉浸观察细节",
          es: "Observación de patrones de 5 minutos sin pensar",
          fr: "Observation de motifs pendant 5 minutes sans penser",
          de: "5 Minuten gedankenloses Betrachten von Mustern",
          pt: "Observação de padrões por 5 minutos sem pensar",
          id: "Pengamatan Pola 5 Menit Tanpa Berpikir"
        },
        text: {
          ko: "어떠한 판단이나 일 생각을 내려놓고 5분간 꽃잎의 결, 잎사귀의 모양, 빛의 반사를 멍하니 바라봅니다.",
          en: "Drop all work thoughts and gaze softly at flower petal patterns and light reflections for 5 minutes.",
          ja: "仕事の思考を手放し、5分間花びらの模様や光の反射をただぼんやりと眺めます。",
          zh: "放下工作思考，在5分钟内放空大脑，静静凝视花瓣脉络、叶片形状与光影斑驳。",
          es: "Deje los pensamientos de trabajo y mire suavemente los pétalos y la luz durante 5 minutos.",
          fr: "Mettez de côté vos pensées et contemplez les pétales et la lumière pendant 5 minutes.",
          de: "Lassen Sie Arbeitsgedanken los und betrachten Sie 5 Minuten lang Blüten und Licht.",
          pt: "Deixe de lado os pensamentos de trabalho e contemple as pétalas e a luz por 5 minutos.",
          id: "Lepaskan pikiran kerja dan tataplah kelopak bunga serta cahaya selama 5 menit."
        }
      },
      {
        name: {
          ko: "감각 리셋 후 본업 전환",
          en: "Transition to Work Post Sensory Refresh",
          ja: "感覚リセット後の本業への切り替え",
          zh: "感官重置后从容切换至工作",
          es: "Transición al trabajo tras la renovación",
          fr: "Passage au travail après la régénération",
          de: "Wechsel zur Arbeit nach der Frischepause",
          pt: "Transição para o trabalho após a renovação",
          id: "Transisi ke Pekerjaan Setelah Penyegaran"
        },
        text: {
          ko: "맑아진 정서와 청량해진 시각 상태를 안고 아틀리에나 사무실로 들어가 본업에 들어갑니다.",
          en: "Enter your workspace with a refreshed visual state and clear mind to begin your work.",
          ja: "清々しい視覚状態と心でアトリエやオフィスに入り、本業をスタートします。",
          zh: "带着焕然一新的视觉状态与清爽心情进入画室或办公室，开启本职工作。",
          es: "Entre a su espacio de trabajo con una mente despejada para iniciar sus labores.",
          fr: "Entrez dans votre espace de travail avec l'esprit serein pour commencer.",
          de: "Gehen Sie mit frischem Kopf an Ihren Arbeitsplatz und beginnen Sie Ihr Werk.",
          pt: "Entre no seu espaço de trabalho com a mente limpa para começar as tarefas.",
          id: "Masuklah ke ruang kerja dengan pikiran jernih untuk memulai pekerjaan."
        }
      }
    ],
    cautionTitle: {
      ko: "자연 관찰 중 스마트폰 촬영 집착 주의",
      en: "Caution Against Photograph Obsession During Nature Observation",
      ja: "自然観察中のスマホ撮影への執着に注意",
      zh: "切忌在观察自然时沉迷于手机拍照",
      es: "Precaución con la obsesión por tomar fotos",
      fr: "Attention à l'obsession de la photo",
      de: "Vorsicht vor Foto-Sucht beim Betrachten",
      pt: "Cuidado com a obsessão por tirar fotos",
      id: "Waspada Obsesi Mengambil Foto Saat Mengamati Alam"
    },
    cautionDesc: {
      ko: "꽃이나 정원을 관찰하면서 SNS용 사진을 찍는 데 골몰하면 뇌가 다시 자극적인 촬영 피로 회로로 전환됩니다. 스마트폰 렌즈가 아닌 내 육안으로 직접 감상하세요.",
      en: "Focusing on taking photos for social media switches your brain back to camera fatigue. Observe with your eyes, not through a lens.",
      ja: "SNS用の撮影に没頭すると、脳が再びカメラ疲労モードに移行します。レンズではなく自分の目で鑑賞しましょう。",
      zh: "若在漫步时忙于拍社交照片，大脑会再次切换回摄像疲劳回路。请用自己的肉眼而非手机镜头去赏花。",
      es: "Tomar fotos para redes sociales reactiva la fatiga visual. Observe con sus propios ojos, no con la cámara.",
      fr: "Prendre des photos pour les réseaux réactive la fatigue visuelle. Regardez avec vos yeux, pas un écran.",
      de: "Fotos für soziale Medien zu machen ermüdet das Gehirn wieder. Betrachten Sie Natur mit eigenen Augen.",
      pt: "Tirar fotos para redes sociais reativa a fadiga visual. Observe com os próprios olhos, não com a câmera.",
      id: "Mengambil foto untuk media sosial memicu kelelahan visual kembali. Amati dengan mata Anda sendiri."
    },
    faqs: [
      {
        question: {
          ko: "집에 정원이나 화분이 전혀 없으면 어떻게 하나요?",
          en: "What if I have no garden or plants at home?",
          ja: "家に庭や鉢植えが全くない場合はどうすればいいですか？",
          zh: "如果家中完全没有庭院或盆栽该怎么办？",
          es: "¿Qué hacer si no tengo jardín ni plantas en casa?",
          fr: "Que faire si je n'ai ni jardin ni plantes chez moi ?",
          de: "Was tun, wenn ich keinen Garten oder Pflanzen habe?",
          pt: "O que fazer se eu não tiver jardim nem plantas em casa?",
          id: "Bagaimana jika saya tidak memiliki taman atau tanaman di rumah?"
        },
        answer: {
          ko: "탁상용 1만원 이하의 작은 소형 화분 하나나, 창밖의 길가 가로수를 멍하니 바라는 보는 것으로도 동등한 시각 피로 회복 반응이 일어납니다.",
          en: "Even a tiny desk plant or simply staring at a street tree outside your window triggers the same visual recovery.",
          ja: "小さな鉢植え1つや、窓の外の街路樹をぼんやり眺めるだけでも同等の効果が得られます。",
          zh: "哪怕是一盆小巧的书桌绿植，或是凝视窗外的行道树，也能引发同等的注意力恢复反应。",
          es: "Incluso una pequeña planta de escritorio o mirar los árboles por la ventana produce el mismo efecto.",
          fr: "Même une petite plante de bureau ou regarder un arbre par la fenêtre procure le même effet.",
          de: "Schon eine kleine Tischpflanze oder der Blick auf Straßenbäume bewirkt dasselbe.",
          pt: "Uma pequena planta de mesa ou olhar as árvores pela janela gera o mesmo efeito.",
          id: "Bahkan satu tanaman meja kecil atau menatap pohon di luar jendela memberikan efek yang sama."
        }
      },
      {
        question: {
          ko: "비가 오거나 날씨가 나쁜 날에는 루틴을 쉬어야 하나요?",
          en: "Should I skip this routine on rainy or bad weather days?",
          ja: "雨や悪天候の日はこのルーティンを休むべきですか？",
          zh: "下雨或天气恶劣的日子需要暂停这个惯例吗？",
          es: "¿Debo saltarme la rutina si llueve o hace mal tiempo?",
          fr: "Faut-il sauter la routine les jours de pluie ?",
          de: "Sollte man die Routine bei Regen ausfallen lassen?",
          pt: "Devo pular a rotina em dias de chuva?",
          id: "Haruskah saya melewatkan rutinitas ini saat hujan?"
        },
        answer: {
          ko: "아닙니다. 창가에서 빗방울이 유리창에 맺히는 자연스러운 패턴이나 식물 잎에 물방울이 떨어진 모습을 관찰하는 것도 아주 훌륭한 시각 리셋 경험이 됩니다.",
          en: "No! Observing raindrops on a windowpane or water droplets on leaves indoors offers equally great visual refresh.",
          ja: "いいえ！窓ガラスの雨粒の模様や葉に落ちる水滴を観察することも、素晴らしい視覚リセットになります。",
          zh: "不需要！在窗前观察雨滴凝结在玻璃上的自然图案，或观察植物叶片上的水珠，也是极佳的视觉重置体验。",
          es: "¡No! Observar gotas de lluvia en la ventana o sobre las hojas ofrece una excelente renovación visual.",
          fr: "Non ! Observer les gouttes de pluie sur la vitre ou sur les feuilles offre une excellente régénération.",
          de: "Nein! Das Betrachten von Regentropfen am Fenster bietet ebenso hervorragende Erholung.",
          pt: "Não! Observar gotas de chuva na janela ou nas folhas oferece uma excelente renovação visual.",
          id: "Tidak! Mengamati tetesan air hujan di jendela atau di atas daun memberikan penyegaran visual yang luar biasa."
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
