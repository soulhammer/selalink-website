import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDataDir = path.join(__dirname, 'data/blogs/habits');
const habitsItemDir = path.join(__dirname, 'data/habits/items');
const koBlogDir = path.join(__dirname, 'content/blog/ko');

const today = "2026-07-22";

const enrichedHabits7to10 = [
  // 7. epictetus-dichotomy-control
  {
    slug: "epictetus-dichotomy-control",
    title: {
      ko: "내 통제 밖의 일은 신경을 끄라 한 노예 출신 철학자? 에픽테토스의 통제 이분법 성찰 루틴",
      en: "The Slave-Turned-Philosopher Who Said Ignore What You Cannot Control? Epictetus' Dichotomy of Control Routine",
      ja: "コントロール外のことは無視せよと言った奴隷出身の哲学者？エピクテトスの統制二分法リフレクション",
      zh: "主张彻底忽视无法掌控之事的奴隶出身哲学家？爱比克泰德的掌控二分法反思惯例",
      es: "¿El filósofo ex-esclavo que enseñó a ignorar lo incontrolable? La rutina de dicotomía del control de Epicteto",
      fr: "Le philosophe ex-esclave qui disait d'ignorer l'incontrôlable ? La routine de dichotomie du contrôle d'Épictète",
      de: "Der Sklave und Philosoph, der lehrte, das Unkontrollierbare zu ignorieren? Epiktets Dychotomie-Routine",
      pt: "O filósofo ex-escravo que ensinou a ignorar o incontrolável? A rotina de dicotomia do controle de Epicteto",
      id: "Filsuf Mantan Budak yang Mengajarkan Abaikan yang Tak Bisa Dikendalikan? Rutinitas Dikotomi Kontrol Epictetus"
    },
    description: {
      ko: "고대 로마 스토아 철학의 거장 에픽테토스. 내 권한 안의 일과 밖의 일을 엄격히 분리해 일상의 불안을 제로로 만든 통제 이분법 저녁 기록 루틴과 3단계 실천법을 깊이 있게 알아봅니다.",
      en: "Epictetus, Stoic master. Discover his evening journaling routine for separating what is in your control from what is not to eliminate anxiety.",
      ja: "古代ローマのストア派哲学者エピクテトス。統制の二分法による夜の振り返り習慣と3ステップ実践法を紹介します。",
      zh: "古罗马斯多葛派大师爱比克泰德。介绍他通过掌控二分法区分权力内外事务消除焦虑的晚间反思惯例与三步指南。",
      es: "Epicteto, maestro estoico. Descubra su rutina nocturna para separar lo que está bajo su control de lo que no.",
      fr: "Épictète, maître stoïcien. Découvrez sa routine du soir pour séparer ce qui dépend de nous de ce qui n'en dépend pas.",
      de: "Epiktet, stoischer Meister. Entdecken Sie seine Abendroutine zur Trennung von Kontrollierbarem und Unkontrollierbarem.",
      pt: "Epicteto, mestre estoico. Descubra sua rotina noturna para separar o que está sob seu controle do que não está.",
      id: "Epictetus, master Stoik. Temukan rutinitas refleksi malamnya untuk memisahkan apa yang bisa dikendalikan dan yang tidak."
    },
    authority: {
      ko: "Epictetus 어록집 'Enchiridion' (행동 지침서) 및 'Discourses' (담론)",
      en: "Epictetus' 'Enchiridion' & 'Discourses'",
      ja: "エピクテトス著「語録（Enchiridion）」および「提要」",
      zh: "爱比克泰德语录《手册》(Enchiridion)与《论道集》",
      es: "Obras 'Enquiridión' y 'Discursos' de Epicteto",
      fr: "Ouvrages 'Enchiridion' et 'Entretiens' d'Épictète",
      de: "Epiktets 'Handbüchlein' (Enchiridion) & 'Gespräche'",
      pt: "Obras 'Enquirídio' e 'Discursos' de Epicteto",
      id: "Karya Epictetus 'Enchiridion' & 'Discourses'"
    },
    intro: {
      ko: "노예라는 가장 비참한 신분으로 태어났음에도 불굴의 이성으로 마음의 자유를 얻고, 훗날 로마 황제 마르쿠스 아우렐리우스에게 가장 깊은 사상적 영감을 준 스토아 철학의 거장, 에픽테토스(Epictetus). 신체적 불구와 참혹한 외부 환경 속에서도 그가 평생 완벽한 마음의 평정심(Ataraxia)을 유지할 수 있었던 비결은 무엇일까요? 📜\n\n에픽테토스는 매일 저녁 자신이 겪은 하루의 사건들을 두 가지 범주로 엄격하게 분류하는 사색을 진행했습니다. 첫째는 '나의 생각, 의지, 행동처럼 내 권한 안에 있는 일(Up to Us)', 둘째는 '타인의 평가, 결과, 날씨, 과거처럼 내 권한 밖에 있는 일(Not Up to Us)'이었습니다. 그는 자신의 권한 밖에 있는 외부 결과에 마음을 쓰는 순간 불필요한 고통이 시작됨을 알아차리고, 자신이 제어할 수 있는 내면의 선택에만 모든 에너지를 집중했습니다.\n\n오늘 BuildSelf에서는 에픽테토스의 '통제 이분법 저녁 성찰' 루틴의 뇌과학적 원리와 현대인들이 불필요한 무력감과 불안을 제거하는 3단계 실천 가이드를 공개합니다.",
      en: "Epictetus, born a slave, achieved absolute mental freedom through Stoic reasoning. What was his key to unwavering tranquility? 📜\n\nEvery evening, Epictetus strictly divided events into two categories: things within his control (internal choices and reactions) versus things outside his control (outcomes and other people's opinions). By relinquishing anxiety over the uncontrollable, he focused 100% of his energy on internal choices.\n\nToday, BuildSelf reveals the science behind Epictetus' 'Dichotomy of Control' evening routine and a 3-step action guide.",
      ja: "奴隷の身分から完璧な心の calm を得たストア派の巨匠エピクテトス。彼の心の平穏の秘密は何でしょうか？ 📜\n\nエピクテトスは毎日夜、出来事を「自分の権限内（自分の意志）」と「権限外（他人の評価や結果）」の2つに厳格に分類しました。権限外の心配を捨てることで、内面の選択に集中しました。\n\n今日のBuildSelfでは、エピクテトスの「統制二分法リフレクション」を紹介します。",
      zh: "出身奴隶却凭借理智获得内心绝对自由的斯多葛派大师爱比克泰德。他在残酷环境中保持内心安宁的秘诀是什么？ 📜\n\n爱比克泰德每天晚上都会将遭遇的事件划分为两个类别：属于自己掌控的事（内在意志）与不属于自己掌控的事（外部结果与他人评价）。放弃对不可控事物的焦虑，将100%精力投入内在选择。\n\n今天，BuildSelf 将带您探究爱比克泰德“掌控二分法反思”惯例指南。",
      es: "Epicteto, maestro estoico nacido esclavo. ¿Cuál fue su clave para la tranquilidad inquebrantable? 📜\n\nCada noche, Epicteto dividía los sucesos en lo que dependía de él (sus elecciones) y lo que no (los resultados). Al soltar lo incontrolable, halló la paz.\n\nHoy, BuildSelf explora la rutina de dicotomía del control de Epicteto.",
      fr: "Épictète, maître stoïcien né esclave. Quel était son secret pour une sérénité inébranlable ? 📜\n\nChaque soir, Épictète séparait les événements en deux : ce qui dépend de lui et ce qui n'en dépend pas. En lâchant l'incontrôlable, il restait libre.\n\nAujourd'hui, BuildSelf explore la routine de dichotomie du contrôle d'Épictète.",
      de: "Epiktet, stoischer Meister und ehemaliger Sklave. Was war sein Schlüssel zu innerem Frieden? 📜\n\nJeden Abend teilte Epiktet die Dinge in zwei Kategorien: was in seiner Macht lag und was nicht. Durch Loslassen fand er Ruhe.\n\nHeute untersucht BuildSelf Epiktets Dychotomie-Routine.",
      pt: "Epicteto, mestre estoico nascido escravo. Qual era o seu segredo para a tranquilidade inabalável? 📜\n\nTodas as noites, Epicteto dividia os fatos entre o que dependia dele e o que não dependia. Ao soltar o incontrolável, encontrava paz.\n\nHoje, o BuildSelf explora a rotina de dicotomia do controle de Epicteto.",
      id: "Epictetus, master Stoik mantan budak. Apa kuncinya mencapai ketenangan sejati? 📜\n\nSetiap malam, Epictetus memisahkan hal-hal menjadi dua: yang ada dalam kendalinya dan yang di luar kendalinya. Dengan melepaskan yang tak bisa dikendalikan, ia menemukan kedamaian.\n\nHari ini, BuildSelf menjelajahi rutinitas dikotomi kontrol Epictetus."
    },
    whyTitle: {
      ko: "통제 위치(Locus of Control) 내재화와 편도체 코르티솔 저감 메커니즘",
      en: "Mechanism: Internal Locus of Control Shift and Amygdala Cortisol Reduction",
      ja: "統制の所在（Locus of Control）の内在化と扁桃体コルチゾール低減メカニズム",
      zh: "掌控所在(Locus of Control)内在化与杏仁核皮质醇降低机制",
      es: "Mecanismo: Interiorización del locus de control y reducción de cortisol en la amígdala",
      fr: "Mecanisme : Internalisation du lieu de contrôle et réduction du cortisol dans l'amygdale",
      de: "Mechanismus: Verinnerlichung der Kontrollüberzeugung und Reduktion von Cortisol in der Amygdala",
      pt: "Mecanismo: Internalização do locus de controle e redução de cortisol na amígdala",
      id: "Mekanisme: Internalisasi Locus of Control dan Penurunan Kortisol Amigdala"
    },
    whyDesc: {
      ko: "인간이 만성 스트레스와 불안에 시달리는 가장 큰 이유는 뇌가 자신이 통제할 수 없는 외부 결과(타인의 반응, 경제 상황, 지나간 과거)에 집착할 때 생기는 무력감입니다. 에픽테토스의 통제 이분법 기록은 <strong></strong>를 외부에서 내면으로 명확히 이동시킵니다.\n\n통제 불가능한 요소를 공식적으로 인지하고 내려놓을 때, 뇌의 공포 감정 센터인 <strong></strong>의 과활성화가 가라앉고 스트레스 호르몬인 코르티솔 수치가 대폭 감소하여 정서적 안정감이 회복됩니다.",
      en: "Chronic anxiety arises when the brain fixates on uncontrollable external outcomes. Epictetus' method shifts the cognitive <strong></strong> strictly from external factors to internal agency.\n\nFormally acknowledging and releasing uncontrollable variables calms the <strong></strong>, significantly lowering cortisol levels and restoring emotional equilibrium.",
      ja: "慢性的不安はコントロールできない外部結果に執着することで発生します。この記録法は<strong></strong>を内面へ移動させます。\n\n不可解な要素を手放すことで、<strong></strong>の過剰反応が収まり、コルチゾールが低下します。",
      zh: "慢性焦虑源于大脑执念于无法掌控的外部结果。爱比克泰德的二分法记录将<strong></strong>明确从外部转向内在。\n\n正式确认并放下不可控变量，能够平息大脑<strong></strong>的过度激活，大幅降低皮质醇水平并恢复情绪稳定。",
      es: "La ansiedad surge al fijarse en lo incontrolable. Esta técnica cambia el <strong></strong> al interior.\n\nSoltar lo incontrolable calma la <strong></strong> y reduce drásticamente el cortisol.",
      fr: "L'anxiété vient de l'obsession de ce qu'on ne contrôle pas. Cette méthode déplace le <strong></strong> vers l'intérieur.\n\nLâcher l'incontrôlable calme <strong></strong> et réduit le cortisol.",
      de: "Angst entsteht durch Fixierung auf Unkontrollierbares. Epiktets Methode verlagert die <strong></strong> nach innen.\n\nDas Loslassen beruhigt die <strong></strong> und senkt Cortisol.",
      pt: "A ansiedade surge ao focar no incontrolável. Esta técnica muda o <strong></strong> para o interior.\n\nSoltar o incontrolável acalma a <strong></strong> e reduz o cortisol.",
      id: "Kecemasan kronis timbul dari obsesi pada hal tak terkendali. Metode ini menggeser <strong></strong> ke dalam diri.\n\nMelepaskan yang tak terkendali menenangkan <strong></strong> dan menurunkan kortisol."
    },
    steps: [
      {
        name: {
          ko: "하루 발생 사건 T-차트 2분할 노트 작성",
          en: "Creating a Two-Column T-Chart for Daily Events",
          ja: "一日の出来事の Tチャート2分割ノート作成",
          zh: "绘制当天的T型双栏事件表",
          es: "Crear una tabla T de dos columnas para sucesos del día",
          fr: "Créer un tableau T en deux colonnes pour les événements du jour",
          de: "Erstellen eines T-Diagramms mit zwei Spalten für Tagesereignisse",
          pt: "Criar uma tabela T de duas colunas para eventos do dia",
          id: "Membuat Tabel T Dua Kolom untuk Kejadian Hari Ini"
        },
        text: {
          ko: "저녁 노트 중간에 선을 그어 좌측에는 '내 권한 안의 일(내 반응/태도)', 우측에는 '내 권한 밖의 일(타인 평가/결과)'로 컬럼을 만듭니다.",
          en: "Draw a line down the middle of your evening notebook, labeling the left column 'In My Control' and the right 'Outside My Control'.",
          ja: "ノートに線を引き、左側に「自分の権限内（自分の態度）」、右側に「権限外（結果・他人の評価）」と書き出します。",
          zh: "在晚间笔记本中间划一条线，左栏标为“我掌控的事（我的态度与行动）”，右栏标为“我无法掌控的事（他人评价与结果）”。",
          es: "Trace una línea en su cuaderno: a la izquierda 'Bajo mi control' y a la derecha 'Fuera de mi control'.",
          fr: "Tracez une ligne dans votre carnet : à gauche 'Sous mon contrôle', à droite 'Hors de mon contrôle'.",
          de: "Zeichnen Sie eine Linie ins Notizbuch: links 'In meiner Macht', rechts 'Außerhalb meiner Macht'.",
          pt: "Desenhe uma linha em seu bloco: à esquerda 'Sob meu controle', à direita 'Fora do meu controle'.",
          id: "Buat garis di tengah buku catatan: kiri 'Dalam Kendaliku', kanan 'Di Luar Kendaliku'."
        }
      },
      {
        name: {
          ko: "권한 밖 항목의 공식적 수용 및 의식적 수용 선언",
          en: "Formally Accepting and Relinquishing Uncontrollable Items",
          ja: "権限外項目の公式的手放しと受け入れ宣言",
          zh: "正式确认并主动放手不可控事项",
          es: "Aceptar y soltar formalmente los elementos incontrolables",
          fr: "Accepter et lâcher formellement les éléments incontrôlables",
          de: "Formelles Akzeptieren und Loslassen unkontrollierbarer Punkte",
          pt: "Aceitar e soltar formalmente os itens incontroláveis",
          id: "Menerima dan Melepaskan Hal di Luar Kendali Secara Resmi"
        },
        text: {
          ko: "우측 컬럼에 적힌 항목들을 보며 '이 결과는 나의 몫이 아니다'라고 속으로 되뇌이고 마음에서 정서적 고리를 공식 끊어냅니다.",
          en: "Review items in the right column and mentally state, 'This outcome is not mine to carry,' cutting the emotional attachment.",
          ja: "右側の項目を見ながら「この結果は自分の責任範囲外である」と心でつぶやき、執着を手放します。",
          zh: "看着右栏事项，在内心默默告诉自己：“这一结果并非我能决定”，正式切断情感执念。",
          es: "Revise la columna derecha y diga internamente: 'Esto no está en mis manos', cortando el apego.",
          fr: "Lisez la colonne de droite et dites-vous : 'Ceci ne dépend pas de moi', en coupant l'attachement.",
          de: "Betrachten Sie die rechte Spalte und sagen Sie sich: 'Das liegt nicht bei mir', um loszulassen.",
          pt: "Revise a coluna direita e diga internamente: 'Isso não está nas minhas mãos', cortando o apego.",
          id: "Lihat kolom kanan dan katakan pada diri sendiri: 'Ini di luar kendaliku', lalu lepaskan kemelekatan."
        }
      },
      {
        name: {
          ko: "권한 안 태도 및 내일의 단 한 가지 행동 집중",
          en: "Focusing on Internal Attitude and Tomorrow's Single Action",
          ja: "権限内の態度と明日のたった一つの行動への集中",
          zh: "聚焦于内在本分态度与明天唯一的可控行动",
          es: "Enfocarse en la actitud interna y una sola acción para mañana",
          fr: "Se concentrer sur l'attitude interne et une action pour demain",
          de: "Fokussieren auf innere Haltung und eine Aktion für morgen",
          pt: "Focar na atitude interna e em uma única ação para amanhã",
          id: "Fokus pada Sikap Internal dan Satu Tindakan untuk Besok"
        },
        text: {
          ko: "좌측 컬럼의 '내 행동' 영역에만 집중하여, 내일 내가 제어할 수 있는 올바른 태도와 행동 하나를 정의하고 이를 실행하기로 다짐합니다.",
          en: "Refocus entirely on the left column, defining one single proactive action within your direct control to execute tomorrow.",
          ja: "左側の「自分の行動」だけに集中し、明日コントロールできる正しい態度を一つ決めて実行します。",
          zh: "将专注全额转回左栏，明确一项明天自身完全可控的正向行动并下定决心执行。",
          es: "Concéntrese solo en la columna izquierda y defina una acción bajo su control para ejecutar mañana.",
          fr: "Concentrez-vous sur la colonne de gauche et définissez une action sous votre contrôle pour demain.",
          de: "Konzentrieren Sie sich auf die linke Spalte und legen Sie eine Handlung für morgen fest.",
          pt: "Concentre-se na coluna esquerda e defina uma ação sob seu controle para amanhã.",
          id: "Fokuslah pada kolom kiri dan tentukan satu tindakan dalam kendali Anda untuk besok."
        }
      }
    ],
    cautionTitle: {
      ko: "외부 결과에 대한 과도한 책임감과 결과 집착 주의",
      en: "Caution Against Excessive Responsibility and Attachment to External Outcomes",
      ja: "外部結果に対する過度な責任感と執着に対する注意",
      zh: "切忌对外部结果承担过度责任与执念",
      es: "Precaución con la responsabilidad excesiva y el apego a resultados externos",
      fr: "Attention à la responsabilité excessive et à l'attachement aux résultats",
      de: "Vorsicht vor übertriebener Verantwortung für externe Ergebnisse",
      pt: "Cuidado com a responsabilidade excessiva e apego a resultados externos",
      id: "Waspada Tanggung Jawab Berlebihan dan Kemelekatan Hasil Luar"
    },
    cautionDesc: {
      ko: "내가 내가 최선을 다했음에도 타인의 반응이나 시장 결과가 좋지 않을 때 스스로를 자책하는 것은 뇌를 극심한 자아 고갈과 우울로 밀어 넣습니다. 당신의 몫은 '최선의 행동'까지이며, 그 이후의 결과는 우주의 영역임을 받아들이세요.",
      en: "Blaming yourself when external results fail despite your best efforts induces deep depression and burnout. Your responsibility ends at your best action; the outcome belongs to the world.",
      ja: " 最善を尽くしたにもかかわらず 他人の評価が悪かった時に自分を責めるのは、脳をうつ状態に追い込みます。あなたの役割は「最善の行動」までです。",
      zh: "在尽心尽力后仍因他人评价或不理想的结果责备自己，会使大脑陷入抑郁与消耗。你的本分止于“尽力行动”，之后的结果交由自然。",
      es: "Culparse cuando los resultados fallan a pesar del esfuerzo causa depresión. Su deber termina en la acción; el resultado no le pertenece.",
      fr: "Se blâmer lorsque le résultat échoue malgré les efforts mène à l'épuisement. Votre devoir s'arrête à l'action.",
      de: "Sich bei schlechten Ergebnissen trotz Anstrengung zu beschuldigen führt zu Burnout. Ihre Pflicht endet bei der Handlung.",
      pt: "Culpador-se quando os resultados falham apesar do esforço causa exaustão. Seu dever termina na ação.",
      id: "Menyalahkan diri saat hasil luar tidak sesuai walau sudah berusaha memicu depresi. Tugas Anda berhenti pada tindakan."
    },
    faqs: [
      {
        question: {
          ko: "타인의 태도나 반응도 정말 내가 전혀 통제할 수 없나요?",
          en: "Are other people's attitudes and reactions really out of my control?",
          ja: "他人の態度や反応も本当に完全にコントロール不能ですか？",
          zh: "他人的态度与反应真的完全不在我的掌控之中吗？",
          es: "¿De verdad no puedo controlar la actitud ni las reacciones de los demás?",
          fr: "Est-ce que l'attitude des autres échappe vraiment à mon contrôle ?",
          de: "Kann ich das Verhalten anderer wirklich überhaupt nicht kontrollieren?",
          pt: "Realmente não posso controlar a atitude ou reação dos outros?",
          id: "Apakah sikap dan reaksi orang lain benar-benar di luar kendali saya?"
        },
        answer: {
          ko: "네, 그렇습니다. 내가 할 수 있는 것은 '영향을 주려는 나의 진정성 있는 행동'까지이며, 그것을 받아들이는 상대방의 감정과 반응은 100% 상대방 권한 영역입니다. 이를 구분하는 순간 인간관계의 스트레스가 사라집니다.",
          en: "Yes. You can influence others through your actions, but their final reaction belongs 100% to them. Recognizing this boundary instantly eliminates relationship stress.",
          ja: "はい。できるのは「自分の誠実な行動」までであり、相手の受け止め方は相手の領域です。",
          zh: "是的。你能做的止于“自己真诚的行动”，而对方如何接纳与反应则100%属于对方的权责领域。理清这一点能瞬间消除人际压力。",
          es: "Sí. Puede influir con sus acciones, pero la reacción final es 100% de la otra persona. Reconocer esto elimina el estrés.",
          fr: "Oui. Vous pouvez influencer par vos actes, mais la réaction finale appartient à l'autre. Le comprendre libère du stress.",
          de: "Ja. Sie können durch Ihr Handeln einwirken, aber die Reaktion liegt beim anderen. Das zu erkennen befreit von Stress.",
          pt: "Sim. Você pode influenciar pelas suas ações, mas a reação final é 100% do outro. Reconhecer isso elimina o estresse.",
          id: "Ya. Anda dapat memengaruhi lewat tindakan Anda, namun reaksi akhir 100% milik mereka. Memahami ini menghilangkan stres."
        }
      },
      {
        question: {
          ko: "결과를 신경 쓰지 않으면 열정이나 동기부여가 떨어지지 않나요?",
          en: "Does ignoring outcomes lower passion and motivation?",
          ja: "結果を気にしないと熱意やモチベーションが下がらないですか？",
          zh: "如果不去在乎结果，会不会导致热情与动力下降？",
          es: "¿Ignorar los resultados no disminuye la pasión y motivación?",
          fr: "Ignorer les résultats ne diminue-t-il pas la motivation ?",
          de: "Verringert das Ignorieren von Ergebnissen nicht die Motivation?",
          pt: "Ignorar resultados não diminui a paixão e a motivação?",
          id: "Apakah mengabaikan hasil tidak menurunkan semangat dan motivasi?"
        },
        answer: {
          ko: "전혀 그렇지 않습니다! 오히려 결과에 대한 두려움과 불안이 사라지면서, 현재 내가 실행하는 행동 그 자체에 100% 순수한 몰입과 에너지를 쏟아부을 수 있게 됩니다.",
          en: "On the contrary! Removing fear of external outcomes frees 100% of your mental energy to flow into pure focus on the immediate task.",
          ja: "逆です。結果への恐れが消えることで、現在の行動そのものに100%没頭できるようになります。",
          zh: "恰恰相反！移除了对结果的恐惧与不安，反而能让你把100%的能量无损地投入到当下正在执行的行动本身。",
          es: "¡Al contrario! Eliminar el miedo al resultado libera el 100% de su energía para concentrarse en la tarea actual.",
          fr: "Au contraire ! Éliminer la peur du résultat libère 100% de votre énergie pour la tâche présente.",
          de: "Im Gegenteil! Die Befreiung von der Angst vor Ergebnissen setzt 100% der Energie für die Aufgabe frei.",
          pt: "Pelo contrário! Eliminar o medo do resultado liberta 100% da sua energia para a tarefa presente.",
          id: "Malahan sebaliknya! Melepaskan ketakutan akan hasil membebaskan 100% energi untuk fokus pada tindakan."
        }
      }
    ]
  },

  // 8. ashoka-edict-inscribed-reflection
  {
    slug: "ashoka-edict-inscribed-reflection",
    title: {
      ko: "바위에 칙령을 새기고 성찰한 정복왕? 아쇼카 대왕의 일일 윤리 성찰 루틴",
      en: "The Conqueror Who Inscribed Edicts on Rocks for Daily Reflection? King Ashoka's Moral Reflection Routine",
      ja: "岩に勅令を刻み自省した征服王？アショカ王の倫理的リフレクション",
      zh: "在岩石上刻下敕令以日日反省的征服王？阿育王的大脑道德反思惯例",
      es: "¿El conquistador que inscribió edictos en rocas para reflexionar? La rutina de reflexión moral del Rey Ashoka",
      fr: "Le conquérant qui gravait des édits sur roche pour méditer ? La routine de réflexion morale du Roi Ashoka",
      de: "Der Eroberer, der Edikte in Felsen meißelte zur Selbstreflexion? König Ashokas Ethik-Routine",
      pt: "O conquistador que inscreveu éditos em rochas para refletir? A rotina de reflexão moral do Rei Ashoka",
      id: "Raja Penakluk yang Mengukir Titah di Batu untuk Refleksi? Rutinitas Refleksi Moral Raja Ashoka"
    },
    description: {
      ko: "인도 마우리아 제국의 아쇼카 대왕. 칼링가 전쟁의 참상을 반성하고 석주 칙령을 세워 매일 윤리적 자아를 성찰했던 그의 외부 닻 내리기 루틴과 3단계 실천법을 알아봅니다.",
      en: "King Ashoka of India's Maurya Empire. Discover his pillar edict routine for daily ethical self-reflection and a 3-step action guide.",
      ja: "インド・マウリヤ朝のアショカ王。石柱勅令を建て毎日倫理的自我を振り返った彼の自省習慣を紹介します。",
      zh: "印度孔雀王朝阿育王。介绍他建立石柱敕令进行每日道德自省的大脑定位惯例与三步指南。",
      es: "El Rey Ashoka del Imperio Maurya. Descubra su rutina de edictos en pilares para la autorreflexión ética diaria.",
      fr: "Le Roi Ashoka de l'Empire Maurya. Découvrez sa routine d'édits gravés pour l'autoréflexion éthique quotidienne.",
      de: "König Ashoka des Maurya-Reiches. Entdecken Sie seine Felsenedikt-Routine zur täglichen ethischen Selbstreflexion.",
      pt: "O Rei Ashoka do Império Maurya. Descubra sua rotina de éditos em pilares para a autorreflexão ética diária.",
      id: "Raja Ashoka dari Kekaisaran Maurya. Temukan rutinitas ukiran batunya untuk refleksi diri moral harian."
    },
    authority: {
      ko: "Romila Thapar 역사서 'Asoka and the Decline of the Mauryas' 및 아쇼카 석주 칙령(Ashoka Edicts) 비문",
      en: "Romila Thapar's 'Asoka and the Decline of the Mauryas' & Ashoka Edicts Inscriptions",
      ja: "ロミラ・ターパル著「Asoka and the Decline of the Mauryas」およびアショカ王勅令碑文",
      zh: "罗米拉·塔帕尔历史著作《Asoka and the Decline of the Mauryas》与阿育王石刻敕令",
      es: "Obra de Romila Thapar 'Asoka and the Decline of the Mauryas' e inscripciones de edictos de Ashoka",
      fr: "Ouvrage de Romila Thapar 'Asoka and the Decline of the Mauryas' & inscriptions des édits d'Ashoka",
      de: "Romila Thapars Historie 'Asoka and the Decline of the Mauryas' & Ashokas Felsenedikte",
      pt: "Obra de Romila Thapar 'Asoka and the Decline of the Mauryas' & inscrições dos éditos de Ashoka",
      id: "Karya Romila Thapar 'Asoka and the Decline of the Mauryas' & Prasasti Titah Ashoka"
    },
    intro: {
      ko: "고대 인도 대륙 대부분을 통일하고 마우리아 제국의 태평성대를 연 성왕이자, 잔혹한 정복 군주에서 비폭력과 평화의 수호자로 거듭난 아쇼카 대왕(Ashoka the Great). 정복 전쟁이었던 칼링가(Kalinga) 전투의 참혹한 비극을 목도한 후, 그가 평생 자신의 권력과 욕망을 통제하며 올바른 윤리적 리더십을 고수할 수 있었던 비결은 무엇일까요? 🏛️\n\n아쇼카 대왕은 자신의 죄책감과 성찰, 그리고 제국이 지켜야 할 평화와 도덕적 가치(Dharma)를 거대한 바위와 석주에 새겨 제국 전역의 영토 길목에 세웠습니다. 그는 단순히 백성들을 가르치기 위함이 아니라, 왕인 자기 자신도 매일 석주에 새겨진 비문을 되새기며 자신의 행동이 가치관에 부합하는지 점검했습니다. 굳건한 바위에 새겨진 비문은 변덕스러운 인간의 감정에 흔들리지 않는 강력한 시각적 닻(Visual Anchor) 역할을 해주었습니다.\n\n오늘 BuildSelf에서는 아쇼카 대왕의 '가치관 비문 되새김' 루틴의 뇌과학적 작동 원리와 현대인들이 자신의 핵심 가치를 일상에서 복원하는 3단계 실천 가이드를 공개합니다.",
      en: "King Ashoka, who unified India and transformed from a ruthless conqueror into a champion of peace after the tragic Kalinga War. What was his secret to ethical self-governance? 🏛️\n\nAshoka engraved his core moral values (Dharma) onto giant rock pillars across his empire. Beyond instructing his subjects, he used these inscriptions to daily audit his own choices against his values. These unyielding stone edicts served as powerful visual anchors for his brain.\n\nToday, BuildSelf reveals the science behind King Ashoka's 'value inscription reflection' routine and a 3-step action guide.",
      ja: "古代インドを統一したアショカ王。カリンガ戦争の惨状を反省し、平和の守護者となった彼の自省の秘密は何でしょうか？ 🏛️\n\nアショカ王は自身の倫理的価値観を巨大な石柱に刻み、毎日その碑文を振り返りました。変わらない石に刻まれた言葉が、感情に流されない視覚的アンカーとなりました。\n\n今日のBuildSelfでは、アショカ王の「価値観碑文リフレクション」を紹介します。",
      zh: "统一古印度半岛、并在看见卡林加战争惨状后自省成为和平守护者的阿育王。他在余生中恪守道德自治的秘诀是什么？ 🏛️\n\n阿育王将自己的道德价值观刻在巨型石柱上。除了诏告臣民，他每天也用这些碑文审视自己的决定。坚硬石柱上的文字成为了防范情绪动摇的视觉锚点。\n\n今天，BuildSelf 将带您探究阿育王“价值观铭文反思”惯例指南。",
      es: "El Rey Ashoka, quien unificó India y se transformó en un gobernante de paz tras la guerra de Kalinga. ¿Su secreto? 🏛️\n\nAshoka inscribió sus valores morales en pilares de piedra por su imperio, revisando a diario sus acciones frente a ellos como anclas visuales.\n\nHoy, BuildSelf explora la rutina de reflexión en edictos del Rey Ashoka.",
      fr: "Le Roi Ashoka, qui a unifié l'Inde et s'est transformé en souverain de paix après la guerre du Kalinga. Son secret ? 🏛️\n\nAshoka a gravé ses valeurs morales sur des piliers en roche pour évaluer chaque jour ses actions comme des ancres visuelles.\n\nAujourd'hui, BuildSelf explore la routine de réflexion gravée du Roi Ashoka.",
      de: "König Ashoka, der Indien einte und sich nach dem Kalinga-Krieg dem Frieden verschrieb. Sein Geheimnis? 🏛️\n\nAshoka meißelte seine Werte in Felsen und nutzte sie täglich als visuelle Anker zur Überprüfung seines Strebens.\n\nHeute untersucht BuildSelf König Ashokas Ethik-Routine.",
      pt: "O Rei Ashoka, que unificou a Índia e se tornou um governante de paz após a guerra de Kalinga. Seu segredo? 🏛️\n\nAshoka inscreveu seus valores em pilares de pedra para avaliar diariamente suas ações como âncoras visuais.\n\nHoje, o BuildSelf explora a rotina de reflexão em éditos do Rei Ashoka.",
      id: "Raja Ashoka, yang menyatukan India dan berubah menjadi raja perdamaian pasca Perang Kalinga. Rahasianya? 🏛️\n\nAshoka mengukir nilai-nilai moralnya di pilar batu sebagai jangkar visual harian untuk mengevaluasi tindakannya.\n\nHari ini, BuildSelf menjelajahi rutinitas refleksi ukiran batu Raja Ashoka."
    },
    whyTitle: {
      ko: "외부 가치관 닻(Visual Anchor)과 전전두엽 자아 정체성 강화 메커니즘",
      en: "Mechanism: External Visual Anchoring and Prefrontal Self-Identity Reinforcement",
      ja: "視覚的アンカー（Visual Anchor）による前頭葉の自我同一性強化メカニズム",
      zh: "外部视觉锚点(Visual Anchor)与前额叶自我同一性强化机制",
      es: "Mecanismo: Anclaje visual externo y refuerzo de la identidad en el córtex prefrontal",
      fr: "Mécanisme : Ancrage visuel externe et renforcement de l'identité préfrontale",
      de: "Mechanismus: Externe visuelle Verankerung und präfrontale Festigung der Identität",
      pt: "Mecanismo: Ancoragem visual externa e reforço da identidade pré-frontal",
      id: "Mekanisme: Jangkar Visual Eksternal dan Penguatan Identitas Diri Prefrontal"
    },
    whyDesc: {
      ko: "사람의 감정과 순간적 욕망은 뇌의 시상하부와 변연계의 영향을 받아 수시로 변덕을 부립니다. 아쇼카 대왕처럼 자신의 핵심 신념을 눈에 보이는 물리적 구조물로 외재화(Externalization)하면, 뇌는 물리적 텍스트를 인식하는 즉시 <strong></strong> 효과를 발동시킵니다.\n\n매일 정해진 시각에 자신의 핵심 가치를 눈으로 보고 읽는 행위는 전전두엽 피질의 <strong></strong>를 강하게 자극하여, 순간적 유혹이나 피로 속에서도 자신이 지켜야 할 올바른 행동을 선제적으로 선택하도록 돕습니다.",
      en: "Emotions and fleeting desires fluctuate under limbic influence. Externalizing core principles into visible physical formats creates a <strong></strong> for the brain.\n\nReading your core values daily activates the prefrontal <strong></strong>, steering decision-making toward long-term alignment over short-term temptation.",
      ja: "感情や欲望は変易的です。自身の核心的信念を視覚的な構造物として外在化すると、<strong></strong>が働きます。\n\n毎日価値観を目にすることで、前頭葉の<strong></strong>が刺激され、正しい選択を助けます。",
      zh: "人类的情绪与瞬间欲望受边缘系统影响极其易变。像阿育王一样将核心信念外在化(Externalization)为肉眼可见的结构，能触发大脑的<strong></strong>。\n\n每天阅读核心价值观能强烈刺激前额叶的<strong></strong>，确保在面对诱惑时做出符合长远价值观的决定。",
      es: "Las emociones varían bajo la influencia límbica. Externalizar principios crea un <strong></strong> que activa la identidad prefrontal.\n\nLeer sus valores a diario le guía hacia decisiones alineadas con sus metas a largo plazo.",
      fr: "Les émotions varient sans cesse. Externaliser ses principes crée une <strong></strong> qui active l'identité préfrontale.\n\nLire ses valeurs au quotidien guide les choix vers un alignement à long terme.",
      de: "Emotionen schwanken leicht. Das Aufschreiben von Werten schafft einen <strong></strong> im präfrontalen Kortex.\n\nTägliches Lesen stärkt das Selbstbild und schützt vor Versuchungen.",
      pt: "As emoções oscilam facilmente. Externalizar princípios cria uma <strong></strong> que ativa a identidade pré-frontal.\n\nLer seus valores diariamente guia decisões alinhadas a longo prazo.",
      id: "Emosi dan hasrat mudah berubah. Mengidentifikasi nilai inti secara fisik menciptakan <strong></strong> di otak.\n\nMembaca nilai-nilai Anda setiap hari menguatkan sirkuit identitas diri prefrontal untuk memilih hal yang benar."
    },
    steps: [
      {
        name: {
          ko: "나만의 핵심 가치관 3가지 단어 선언",
          en: "Declaring 3 Core Value Words",
          ja: "自分だけの核心的価値観3つの宣言",
          zh: "确立并宣示个人核心价值观3大关键词",
          es: "Declarar 3 palabras con sus valores fundamentales",
          fr: "Déclarer 3 mots représentatifs de vos valeurs",
          de: "Festlegen von 3 Wörtern für Ihre Kernwerte",
          pt: "Declarar 3 palavras para seus valores fundamentais",
          id: "Menyatakan 3 Kata Nilai Inti Pribadi"
        },
        text: {
          ko: "자신이 일상에서 결코 타협하고 싶지 않은 최우선 인격적 가치(예: 정직, 지속성, 몰입) 3가지를 단어로 명확히 정의합니다.",
          en: "Define 3 core non-negotiable personal values (e.g., Integrity, Consistency, Focus) that guide your life decisions.",
          ja: "自分が妥協したくない人生の最優先価値観（例：誠実、継続、没頭）を3つ定義します。",
          zh: "明确界定自己在生活中绝不妥协的3项最优先人格价值观（如：言行一致、持续性、极度专注）。",
          es: "Defina 3 valores personales innegociables (ej. Integridad, Constancia, Enfoque) que guíen sus decisiones.",
          fr: "Définissez 3 valeurs personnelles essentielles (ex. Intégrité, Constance, Focus) pour guider vos choix.",
          de: "Definieren Sie 3 unumstößliche Werte (z. B. Ehrlichkeit, Ausdauer, Fokus) für Ihr Handeln.",
          pt: "Defina 3 valores pessoais inegociáveis (ex. Integridade, Constância, Foco) para guiar suas escolhas.",
          id: "Tentukan 3 nilai pribadi tak terbantahkan (misal: Integritas, Konsistensi, Fokus) sebagai panduan."
        }
      },
      {
        name: {
          ko: "시각적 닻(Visual Anchor) 카드 작성 및 정면 배치",
          en: "Creating and Placing a Visual Anchor Card",
          ja: "視覚的アンカー（Visual Anchor）カードの作成と 配置",
          zh: "制作视觉锚点卡片并放置于常视正前方",
          es: "Crear y colocar una tarjeta de anclaje visual",
          fr: "Créer et placer une carte d'ancrage visuel",
          de: "Erstellen und Platzieren einer visuellen Ankerkarte",
          pt: "Criar e posicionar um cartão de ancoragem visual",
          id: "Membuat dan Meletakkan Kartu Jangkar Visual"
        },
        text: {
          ko: "선정한 3가지 가치관을 카드나 인덱스 노트에 적어 모니터 옆, 책상 앞, 혹은 스마트폰 잠금화면 등 매일 수십 번 시선이 닿는 곳에 붙여둡니다.",
          en: "Write these 3 values on a card and place it next to your monitor or desk where your eyes hit dozens of times daily.",
          ja: "書いたカードをデスクの前やモニターの横など、目につく場所に貼ります。",
          zh: "将选出的3项价值观写在卡片上，贴在电脑显示器旁、书桌前等每天眼神数十次扫过的地方。",
          es: "Escriba sus 3 valores en una tarjeta y péguela junto a su monitor o escritorio para verla a diario.",
          fr: "Écrivez vos 3 valeurs sur une carte et collez-la à côté de votre écran pour la voir tous les jours.",
          de: "Schreiben Sie die 3 Werte auf eine Karte und kleben Sie sie gut sichtbar an Ihren Monitor.",
          pt: "Escreva seus 3 valores em um cartão e cole-o ao lado do monitor para vê-lo diariamente.",
          id: "Tuliskan 3 nilai tersebut di kartu dan tempel di samping monitor agar terlihat puluhan kali sehari."
        }
      },
      {
        name: {
          ko: "하루 마감 시 가치관 부합 여부 1분 낭송 및 점검",
          en: "1-Minute Daily Recitation and Alignment Audit",
          ja: "一日の終わりに価値観との一致度を1分間確認",
          zh: "一天结束时用1分钟朗读并对照自省",
          es: "Recitación y auditoría de 1 minuto al final del día",
          fr: "Récitation et vérification d'une minute en fin de journée",
          de: "1-minütiges Aufsagen und Prüfen am Tagesende",
          pt: "Recitação e auditoria de 1 minuto no fim do dia",
          id: "Pembacaan dan Evaluasi Keselarasan 1 Menit di Akhir Hari"
        },
        text: {
          ko: "하루를 마감하며 카드의 가치관 단어를 입으로 나지막이 읽고, '오늘 나의 결정이 이 가치와 일치했는가?'를 1분간 성찰합니다.",
          en: "At day's end, quietly recite the words on the card and audit for 1 minute: 'Did my choices today reflect these values?'",
          ja: "一日の終わりにカードの言葉を声に出して読み、「今日の行動は一致していたか」を1分間振り返ります。",
          zh: "在一天结束之际，低声朗读卡片上的关键词，用1分钟默想反思：“我今天的决定与这些价值观相符吗？”",
          es: "Al final del día, lea los valores en voz alta y reflexione 1 minuto si sus acciones coincidieron con ellos.",
          fr: "En fin de journée, lisez les valeurs à voix haute et vérifiez pendant 1 minute l'alignement de vos actes.",
          de: "Lesen Sie am Tagesende die Werte laut vor und prüfen Sie 1 Minute lang Ihre Entscheidungen.",
          pt: "No fim do dia, leia os valores em voz alta e avalie por 1 minuto se suas ações foram coerentes.",
          id: "Di akhir hari, bacakan kata-kata tersebut dan evaluasi selama 1 menit keselarasan tindakan Anda."
        }
      }
    ],
    cautionTitle: {
      ko: "가치관 선언의 일회성 이벤트화 및 형식주의 주의",
      en: "Caution Against One-Time Eventism and Empty Formalism",
      ja: "価値観宣言の一回性イベント化に対する注意",
      zh: "切忌将价值观宣示变成一次性形式主义",
      es: "Precaución con convertir la declaración en un acto formal único",
      fr: "Attention à ne pas transformer cette déclaration en simple formalité",
      de: "Vorsicht vor einmaliger Formalität ohne tägliche Praxis",
      pt: "Cuidado ao transformar a declaração em mero formalismo",
      id: "Waspada Menjadikan Pernyataan Nilai Sekadar Formalitas Sekali Jadi"
    },
    cautionDesc: {
      ko: "가치관 카드를 예쁘게 적어 붙여놓고 다시는 읽지 않는다면 아무런 뇌과학적 닻 효과가 일어나지 않습니다. 아쇼카 대왕이 석주 비문을 매일 되새긴 것처럼, 핵심은 '매일 눈으로 확인하고 낭송하는 일상적 반복'에 있습니다.",
      en: "Writing a nice card and ignoring it yields zero anchoring effect. Like Ashoka, the power lies in the daily active habit of looking at and reciting your values.",
      ja: "カードを貼っただけで満足して読まなければ効果はありません。アショカ王のように毎日声に出して確認することが重要です。",
      zh: "若精美地制作卡片贴上后便不再阅读，不会产生任何大脑锚点效果。如同阿育王每日重温铭文一样，关键在于“每日目视与朗读”的日常重复。",
      es: "Pegar una tarjeta y no leerla no produce ningún efecto ancla. La clave es la repetición diaria de mirarla y leerla.",
      fr: "Coller une carte sans la relire n'a aucun effet. La clé réside dans la répétition quotidienne de sa lecture.",
      de: "Eine Karte aufzukleben ohne sie zu lesen bringt nichts. Der Schlüssel ist das tägliche laute Relevieren.",
      pt: "Colar um cartão e não ler não produz efeito âncora. A chave está na repetição diária de olhar e recitar.",
      id: "Menempel kartu tanpa membacanya tidak memberi efek jangkar. Kuncinya ada pada kebiasaan harian melihat dan membacanya."
    },
    faqs: [
      {
        question: {
          ko: "가치관 단어가 3개보다 많아도 괜찮나요?",
          en: "Can I have more than 3 core value words?",
          ja: "核心的価値観の単語が3つ以上あってもいいですか？",
          zh: "核心价值观的关键词可以多于3个吗？",
          es: "¿Puedo tener más de 3 palabras de valores fundamentales?",
          fr: "Puis-je avoir plus de 3 mots de valeurs fondamentales ?",
          de: "Kann ich mehr als 3 Kernwerte festlegen?",
          pt: "Posso ter mais de 3 palavras de valores fundamentais?",
          id: "Bolehkah memiliki lebih dari 3 kata nilai inti?"
        },
        answer: {
          ko: "가급적 3개 이내로 제한하는 것을 강력히 권장합니다. 가치관 숫자가 5개 이상으로 늘어나면 작업 기억(Working Memory)에 부하가 걸려 닻 내리기 효과가 급격히 약화됩니다.",
          en: "We strongly recommend keeping it to 3 maximum. Having 5 or more overloads working memory, diluting the visual anchor effect.",
          ja: "3つ以内に絞ることを強くお勧めします。多すぎると脳の作業記憶に負荷がかかり、効果が薄れます。",
          zh: "强烈建议控制在3个以内。一旦数量超过5个，会给工作记忆带来过载，使锚定效果大幅削弱。",
          es: "Se recomienda un máximo de 3. Tener 5 o más sobrecarga la memoria de trabajo y diluye el efecto ancla.",
          fr: "Nous recommandons 3 maximum. En avoir 5 ou plus surcharge la mémoire et dilue l'effet d'ancrage.",
          de: "Wir empfehlen maximal 3. Bei 5 oder mehr wird das Arbeitsgedächtnis überfordert und der Effekt verblasst.",
          pt: "Recomendamos no máximo 3. Ter 5 ou mais sobrecarrega a memória de trabalho e dilui o efeito âncora.",
          id: "Sangat disarankan membatasi maksimal 3. Memiliki 5 atau lebih membebani memori kerja dan mengaburkan efek jangkar."
        }
      },
      {
        question: {
          ko: "시간이 지나 가치관 단어를 바꿔도 되나요?",
          en: "Is it okay to change my value words over time?",
          ja: "時間が経ってから価値観の単語を変更してもいいですか？",
          zh: "随着时间推移可以更换价值观关键词吗？",
          es: "¿Es adecuado cambiar las palabras de valores con el tiempo?",
          fr: "Puis-je changer mes mots de valeurs au fil du temps ?",
          de: "Darf ich meine Kernwerte im Laufe der Zeit anpassen?",
          pt: "Posso mudar as palavras de valores com o tempo?",
          id: "Bolehkah mengubah kata nilai inti seiring berjalannya waktu?"
        },
        answer: {
          ko: "네, 물론입니다! 분기별(3개월)로 자신의 삶의 단계와 목표 변화에 맞춰 가치관 카드를 재정의하고 갱신하는 것은 전전두엽에 새로운 자극을 주는 매우 좋은 습관입니다.",
          en: "Yes, absolutely! Auditing and updating your value card quarterly (every 3 months) aligns with evolving life stages and refreshes prefrontal focus.",
          ja: "はい。3ヶ月ごとに見直し、現在の目標に合致するよう更新するのは 脳に良い刺激となります。",
          zh: "当然可以！每季度（3个月）根据生活阶段与目标的变化重新审视并更新价值观卡片，能向前额叶提供极佳的新鲜刺激。",
          es: "¡Sí! Revisar y actualizar la tarjeta cada trimestre adapta sus valores a sus metas y renueva el enfoque.",
          fr: "Absolument ! Réévaluer votre carte chaque trimestre l'aligne sur vos objectifs et stimule le cerveau.",
          de: "Ja! Eine vierteljährliche Überprüfung passt die Werte an neue Ziele an und erfrischt den Fokus.",
          pt: "Com certeza! Revisar seu cartão a cada trimestre alinha seus valores às suas metas e renova o foco.",
          id: "Tentu saja! Mengevaluasi dan memperbarui kartu nilai secara triwulanan memberi stimulasi segar bagi otak."
        }
      }
    ]
  },

  // 9. vivaldi-composition-walk
  {
    slug: "vivaldi-composition-walk",
    title: {
      ko: "새벽 운하를 걸으며 오케스트라 스코어를 적은 천재? 안토니오 비발디의 악상 기록 루틴",
      en: "The Genius Who Wrote Orchestral Scores While Walking Dawn Canals? Antonio Vivaldi's Capture Routine",
      ja: "早朝の運河を歩きオーケストラスコアを書き留めた天才？ヴィヴァルディの楽想記録ルーティン",
      zh: "在清晨运河边散步并急速记录管弦乐总谱的天才？维瓦尔第的极速灵感捕获惯例",
      es: "¿El genio que escribía partituras al caminar por los canales? La rutina de captura de Antonio Vivaldi",
      fr: "Le génie qui composait des partitions en marchant au bord des canaux ? La routine d'Antonio Vivaldi",
      de: "Das Genie, das beim morgendlichen Kanalseite-Gehen Partituren schrieb? Antonio Vivaldis Notation-Routine",
      pt: "O gênio que escrevia partituras ao caminhar pelos canais? A rotina de captura de Antonio Vivaldi",
      id: "Genius yang Menulis Skor Orkestra Saat Berjalan di Kanal Pagi? Rutinitas Pencatatan Antonio Vivaldi"
    },
    description: {
      ko: "바로크 음악의 거장 안토니오 비발디. '사계' 등 500개가 넘는 협주곡을 탄생시킨 새벽 운하 산책 후 악상 쾌속 기록 루틴과 3단계 실천법을 알아봅니다.",
      en: "Baroque master Antonio Vivaldi. Discover his early morning canal walking and rapid score-capturing routine for 'The Four Seasons' and a 3-step action guide.",
      ja: "バロック音楽の巨匠ヴィヴァルディ。「四季」などを生み出した早朝散歩と速攻譜面記録習慣を紹介します。",
      zh: "巴洛克音乐大师维瓦尔第。介绍他以创作《四季》闻名的清晨运河散步与极速总谱记录惯例及三步指南。",
      es: "Antonio Vivaldi, maestro del Barroco. Descubra su rutina de caminata matutina por canales y rápida anotación para 'Las Cuatro Estaciones'.",
      fr: "Antonio Vivaldi, maître baroque. Découvrez sa routine de marche matinale le long des canaux et de notation rapide pour 'Les Quatre Saisons'.",
      de: "Barockmeister Antonio Vivaldi. Entdecken Sie seine Routine des morgendlichen Kanal-Spaziergangs und schnellen Notierens.",
      pt: "Antonio Vivaldi, mestre barroco. Descubra sua rotina de caminhada matinal pelos canais e rápida anotação para 'As Quatro Estações'.",
      id: "Antonio Vivaldi, master Barok. Temukan rutinitas jalan pagi di kanal dan pencatatan musik cepatnya untuk 'The Four Seasons'."
    },
    authority: {
      ko: "H.C. Robbins Landon 전기 'Vivaldi: Voice of the Baroque' 및 바로크 자필 악보 자필본 해제",
      en: "H.C. Robbins Landon's 'Vivaldi: Voice of the Baroque' & Autograph Score Analysis",
      ja: "H.C.ロビンズ・ランドン著「Vivaldi: Voice of the Baroque」および直筆楽譜解題",
      zh: "H.C.罗宾斯·兰登著作《Vivaldi: Voice of the Baroque》与维瓦尔第手稿分析",
      es: "Obra de H.C. Robbins Landon 'Vivaldi: Voice of the Baroque' y análisis de manuscritos",
      fr: "Ouvrage de H.C. Robbins Landon 'Vivaldi: Voice of the Baroque' & analyse de manuscrits",
      de: "H.C. Robbins Landons 'Vivaldi: Voice of the Baroque' & Manuskriptanalyse",
      pt: "Obra de H.C. Robbins Landon 'Vivaldi: Voice of the Baroque' & análise de manuscritos",
      id: "Karya H.C. Robbins Landon 'Vivaldi: Voice of the Baroque' & Analisis Naskah Asli"
    },
    intro: {
      ko: "불후의 명곡 '사계(The Four Seasons)'를 비롯해 무려 500곡이 넘는 웅장한 협주곡과 40여 개가 넘는 오페라를 창작하며 바로크 음악의 피크를 이끈 이탈리아의 천재 작곡가, 안토니오 비발디(Antonio Vivaldi). 그가 평생 마르지 않는 샘물처럼 폭발적인 음악적 영감을 끊임없이 지면에 옮길 수 있었던 비밀은 무엇일까요? 🎻\n\n비발디는 매일 새벽 안개가 자욱하게 깔린 베네치아의 운하 다리와 골목길을 홀로 걸었습니다. 물소리와 바람 소리, 새벽의 조용한 공기가 선사하는 감각적 자극 속에서 머릿속에 오케스트라의 웅장한 바이올린 선율이 떠오르면, 그는 작업실로 돌아오자마자 펜과 오케스트라 악보지를 펼치고 영감이 사라지기 전에 번개 같은 속도로 악보를 적어 내렸습니다. 그는 '내 머릿속에 이미 완성된 곡을 악보로 옮기는 속도가 다른 사람이 악보를 복사하는 속도보다 빠르다'고 말할 정도로 즉각적인 쾌속 외재화(Speed of Capture)를 실천했습니다.\n\n오늘 BuildSelf에서는 비발디의 '새벽 산책 후 악상 쾌속 기록' 루틴의 뇌과학적 원리와 현대 크리에이터들이 찰나의 아이디어를 100% 포착하는 3단계 실천 가이드를 공개합니다.",
      en: "Antonio Vivaldi, the Italian Baroque master who composed over 500 concertos including 'The Four Seasons'. What was his secret to an endless wellspring of musical creation? 🎻\n\nEvery dawn, Vivaldi walked through the misty canal bridges of Venice. Sensory stimuli from water and morning air triggered orchestral melodies in his head. Returning to his desk, he captured these complete arrangements onto score paper at lightning speed before the inspiration evaporated.\n\nToday, BuildSelf reveals the science behind Vivaldi's 'rapid capture' routine and a 3-step action guide.",
      ja: "「四季」など500以上の協奏曲を生み出したバロック音楽の巨匠ヴィヴァルディ。彼の無限のひらめきの秘密は何でしょうか？ 🎻\n\nヴィヴァルディは毎朝、ヴェネツィアの運ハを歩き、水音や風の刺激から浮かんだメロディを、作業場に戻るやいなや電光石火のスピードで楽譜に書き留めました。\n\n今日のBuildSelfでは、ヴィヴァルディの「楽想即座記録」ルーティンを紹介します。",
      zh: "创作了名曲《四季》等500多首协奏曲的巴洛克音乐大师维瓦尔第。他那源源不断的音乐灵感究竟是如何在纸上迅速呈现的？ 🎻\n\n维瓦尔第每天清晨独自漫步在威尼斯大雾弥漫的运河桥上。水声与清晨空气带来的感觉刺激在大脑中激发管弦乐旋律，回到案前他便以闪电般的速度将音乐抄写在总谱纸上。\n\n今天，BuildSelf 将带您探究维瓦尔第“极速灵感捕获”惯例指南。",
      es: "Antonio Vivaldi, maestro del Barroco italiano que compuso más de 500 conciertos. ¿Su secreto? 🎻\n\nCada amanecer, Vivaldi caminaba por los puentes de los canales de Venecia. El estímulo del agua inspiraba melodías que anotaba a velocidad del rayo al volver.\n\nHoy, BuildSelf explora la rutina de captura rápida de Vivaldi.",
      fr: "Antonio Vivaldi, maître baroque italien auteur de plus de 500 concertos. Son secret ? 🎻\n\nChaque matin, Vivaldi marchait sur les ponts de Venise. Les sensations de l'eau lui inspiraient des mélodies qu'il notait à la vitesse de l'éclair.\n\nAujourd'hui, BuildSelf explore la routine de capture rapide de Vivaldi.",
      de: "Antonio Vivaldi, italienischer Barockmeister von über 500 Konzerten. Sein Geheimnis? 🎻\n\nJeden Morgen ging Vivaldi über die Kanalbrücken Venedigs. Die Reize des Wassers inspirierten Melodien, die er blitzschnell niederschrieb.\n\nHeute untersucht BuildSelf Vivaldis Notation-Routine.",
      pt: "Antonio Vivaldi, mestre barroco italiano autor de mais de 500 concertos. Seu segredo? 🎻\n\nA cada amanhecer, Vivaldi caminhava pelas pontes de Veneza. Os estímulos da água inspiravam melodias que anotava a velocidade da luz.\n\nHoje, o BuildSelf explora a rotina de captura rápida de Vivaldi.",
      id: "Antonio Vivaldi, master Barok Italia pengubah lebih dari 500 konserto. Rahasianya? 🎻\n\nSetiap pagi, Vivaldi berjalan di jembatan kanal Venesia. Udara pagi dan suara air memicu melodi orkestra yang ia catat secepat kilat.\n\nHari ini, BuildSelf menjelajahi rutinitas pencatatan cepat Vivaldi."
    },
    whyTitle: {
      ko: "감각 자극 유입과 찰나 아이디어의 쾌속 외재화(Speed of Capture) 메커니즘",
      en: "Mechanism: Sensory Input Triggering and Speed-of-Capture Externalization",
      ja: "感覚刺激の流入と直感的アイデアの速攻外在化（Speed of Capture）メカニズム",
      zh: "感官刺激涌入与刹那灵感极速外在化(Speed of Capture)机制",
      es: "Mecanismo: Entrada sensorial y externalización ultrarrápida de ideas",
      fr: "Mécanisme : Entrée sensorielle et externalisation ultra-rapide des idées",
      de: "Mechanismus: Sensorischer Reiz und blitzschnelle Auslagerung flüchtiger Ideen",
      pt: "Mecanismo: Entrada sensorial e externalização ultrarrápida de ideias",
      id: "Mekanisme: Input Sensorik dan Eksternalisasi Kilat (Speed of Capture)"
    },
    whyDesc: {
      ko: "새로운 산책로나 새벽 공기가 제공하는 풍부한 물리적 자극은 뇌의 청각 및 시각 피질을 상쾌하게 깨워 작업 기억 속에 잠자던 연상 결합을 촉발합니다. 그러나 찰나의 창의적 아이디어는 전두엽의 기억 보존 시간이 매우 짧아 불과 1~2분 만에 손실되는 특성을 지닙니다.\n\n비발디의 쾌속 기록 루틴은 아이디어가 떠오른 직후 머뭇거림이나 완벽주의 검열 없이 <strong></strong>함으로써, 영감의 휘발을 100% 막아내는 뇌과학적 메커니즘을 완성합니다.",
      en: "Sensory stimuli from fresh morning air activate visual and auditory cortices, unlocking associative connections. However, fleeting creative sparks degrade within 1-2 minutes if not recorded.\n\nVivaldi's rapid capture method externalizes raw ideas into physical format without hesitation or analytical pre-censorship, preserving 100% of intuitive sparks.",
      ja: "早朝の空気などの感覚刺激は脳の知覚野を覚醒させます。しかし直感的なひらめきは1〜2分で蒸発する性質があります。\n\nビバルディの速攻記録法は、躊躇せず即座に可視化することで、ひらめきの揮発を完全に防ぎます。",
      zh: "清晨新鲜空气带来的丰富感官刺激能极佳地唤醒大脑知觉皮层。然而，刹那间的创意灵感衰减极快，若不记录会在1-2分钟内蒸发殆尽。\n\n维瓦尔第的极速捕获惯例在灵感浮现后毫不犹豫地将其<strong></strong>为文字或符号，防止灵感挥发。",
      es: "El aire matutino estimula la corteza cerebral. Sin embargo, las ideas creativas se evaporan en 1-2 minutos si no se anotan.\n\nLa técnica de Vivaldi externaliza la idea de inmediato sin censura analítica.",
      fr: "L'air du matin stimule le cortex. Cependant, les idées s'évaporent en 1-2 minutes sans prise de note.\n\nLa méthode de Vivaldi externalise l'idée immédiatement sans censure.",
      de: "Frische Morgenluft stimuliert das Gehirn. Flüchtige Ideen verfliegen jedoch in 1-2 Minuten.\n\nVivaldis Methode lagert Ideen sofort ohne Zögern aus.",
      pt: "O ar matinal estimula o córtex. No entanto, ideias criativas se evaporam em 1-2 minutos sem registro.\n\nA técnica de Vivaldi externaliza a ideia imediatamente sem censura.",
      id: "Udara pagi menyegarkan korteks otak. Namun, ide kreatif menguap dalam 1-2 menit jika tidak dicatat.\n\nMetode Vivaldi mengeksternalisasikan ide seketika tanpa ragu."
    },
    steps: [
      {
        name: {
          ko: "새벽/야외 오감 자극 산책 수행",
          en: "Early Morning Outdoor Sensory Walking",
          ja: "早朝・野外の五感刺激散歩の実行",
          zh: "执行清晨/户外的五感刺激散步",
          es: "Realizar una caminata al aire libre al amanecer",
          fr: "Faire une marche matinale stimulante en plein air",
          de: "Morgendlicher Spaziergang zur Aktivierung der Sinne",
          pt: "Realizar uma caminhada ao ar livre ao amanhecer",
          id: "Melakukan Jalan Pagi Terbuka untuk Stimulasi Sensorik"
        },
        text: {
          ko: "아침 시간 15~20분간 외부의 바람, 자연 소리, 조용한 풍경을 오감으로 느끼며 머릿속 상상력을 가볍게 깨웁니다.",
          en: "Spend 15-20 minutes walking outdoors at dawn, engaging your senses with fresh air and ambient sounds to wake your imagination.",
          ja: "朝の15〜20分間、風や音を五感で感じながら散歩し、脳の想像力を目覚めさせます。",
          zh: "在清晨花15-20分钟在户外散步，用五感去感受风声、自然声音与景色，轻松唤醒大脑想象力。",
          es: "Camine 15-20 minutos al amanecer, sintiendo el aire y sonidos para despertar su imaginación.",
          fr: "Marchez 15-20 minutes au réveil en stimulant vos sens pour réveiller votre imagination.",
          de: "Gehen Sie morgens 15-20 Minuten spazieren und aktivieren Sie Ihre Sinne.",
          pt: "Caminhe 15-20 minutos ao amanhecer, sentindo o ar para despertar sua imaginação.",
          id: "Berjalanlah 15-20 menit di pagi hari, rasakan udara dan suara sekitar untuk membangunkan imajinasi."
        }
      },
      {
        name: {
          ko: "아이디어 도착 직후 번개 같은 메모 캡처",
          en: "Lightning-Fast Capture Upon Idea Arrival",
          ja: "アイデア到来直後の電光石火メモキャプチャ",
          zh: "灵感浮现后闪电般的极速捕获",
          es: "Captura ultrarrápida al surgir la idea",
          fr: "Capture ultra-rapide dès l'apparition de l'idée",
          de: "Blitzschnelles Notieren bei Idee-Eingebung",
          pt: "Captura ultrarrápida ao surgir a ideia",
          id: "Pencatatan Seketika Saat Ide Muncul"
        },
        text: {
          ko: "산책 중 혹은 복귀 직후 아이디어가 스칠 때, 미루지 말고 음성 메모나 펜으로 핵심 뼈대 선율과 키워드를 초스피드로 기록합니다.",
          en: "The moment a spark hits, immediately open a voice memo or pen to capture core keywords before they fade.",
          ja: "ひらめきがあった瞬間、躊躇せず音声メモやペンでキーワードを即座に記録します。",
          zh: "在散步中或刚返回时灵感闪现的瞬间，切勿拖延，立即用语音备忘录或手写笔极速记录下核心骨架与关键词。",
          es: "Al instante en que surja una idea, grabe una nota de voz o escriba palabras clave sin dudar.",
          fr: "Dès qu'une idée surgit, enregistrez un mémo vocal ou notez des mots-clés sans attendre.",
          de: "Sobald eine Idee auftaucht, halten Sie sofort Stichworte fest.",
          pt: "No momento em que surgir uma ideia, grave uma nota de voz ou anote palavras-chave.",
          id: "Saat ide muncul, segera gunakan perekam suara atau pena untuk mencatat kata kunci utama."
        }
      },
      {
        name: {
          ko: "날것의 캡처본 1차 정제 및 초안 즉시 완성",
          en: "Immediate Draft Refinement of Raw Captures",
          ja: "生データの一次精製と草案の即座完成",
          zh: "对原始捕获内容进行即时一次精炼与初稿完成",
          es: "Pulido inmediato de capturas y borrador",
          fr: "Polissage immédiat de la capture en premier jet",
          de: "Sofortiges Ausarbeiten der Roh-Notiz zum Entwurf",
          pt: "Lapidação imediata da captura em rascunho",
          id: "Penyempurnaan Seketika Catatan Mentah Menjadi Draf"
        },
        text: {
          ko: "기록 직후 곧바로 10분간 머릿속 감각이 남아있는 동안 날것의 기록을 하나의 완성된 초안 문장이나 개요 구조로 정제합니다.",
          en: "Spend 10 minutes right after capture developing the raw note into a structured draft while the sensory impression remains fresh.",
          ja: "記録直後の10分間、感覚が残っているうちにメモを一つのまとまった Guiding 概要として精製します。",
          zh: "在记录完成后的10分钟内，趁着脑海中感官余温未散，将原始笔记精炼为一份完整的初稿句子或大纲结构。",
          es: "Dedique 10 minutos justo después para convertir esa nota en un borrador esquemático.",
          fr: "Consacrez 10 minutes juste après pour transformer la note en un premier jet structuré.",
          de: "Verwandeln Sie die Roh-Notiz direkt in den folgenden 10 Minuten in einen Entwurf.",
          pt: "Dedique 10 minutos logo após para transformar a anotação em um rascunho estruturado.",
          id: "Luangkan 10 menit setelah mencatat untuk mengubahnya menjadi draf terstruktur."
        }
      }
    ],
    cautionTitle: {
      ko: "아이디어 캡처 시 완벽주의 검열과 지연 행동 주의",
      en: "Caution Against Perfectionist Censorship and Delayed Capture",
      ja: "アイデアキャプチャ時の完璧主義と記録遅延に対する注意",
      zh: "切忌在捕获灵感时陷入完美主义审查与拖延",
      es: "Precaución con el perfeccionismo y la demora al capturar ideas",
      fr: "Attention au perfectionnisme et au retard lors de la capture",
      de: "Vorsicht vor Perfektionismus und Aufschub beim Notieren",
      pt: "Cuidado com o perfeccionismo e demora ao capturar ideias",
      id: "Waspada Perfeksionisme dan Penundaan Saat Mencatat Ide"
    },
    cautionDesc: {
      ko: "'이 아이디어가 정말 쓸만한가?' 하고 이성적으로 검열하며 기록을 주저하는 순간, 뇌는 영감을 잊어버립니다. 비발디처럼 초기 캡처 단계는 정답을 따지지 말고 유치한 아이디어라도 무조건 100% 지면에 쏟아내세요.",
      en: "Hesitating to record while rationally evaluating 'Is this idea good enough?' causes rapid forgetting. Capture raw ideas 100% first without analytical judgment.",
      ja: "「このアイデアは使えるか」と検閲して記録を躊躇すると、ひらめきは消えます。まずは100%吐き出しましょう。",
      zh: "如果在记录时犹豫去理性审查“这灵感真的有用吗？”，大脑会极其迅速地忘却它。请像维瓦尔第一样，在初期捕获阶段无条件100%倾倒出来。",
      es: "Dudar al anotar pensando '¿es buena esta idea?' provoca el olvido. Anote el 100% del trazo crudo primero.",
      fr: "Hésiter en se demandant si l'idée est bonne provoque l'oubli. Notez d'abord 100% de l'idée brute.",
      de: "Zögern beim Notieren durch Hinterfragen löscht die Idee. Schreiben Sie die Idee zuerst zu 100% auf.",
      pt: "Hesitar ao anotar pensando se a ideia é boa causa o esquecimento. Anote 100% da ideia bruta primeiro.",
      id: "Ragu saat mencatat karena menilai ide menyebabkan ide lupa. Catat 100% ide mentah terlebih dahulu."
    },
    faqs: [
      {
        question: {
          ko: "길을 걷다 급하게 적은 메모가 나중에 보면 무슨 뜻인지 모를 때가 많은데 어쩌나요?",
          en: "What if I can't understand my own rushed notes later?",
          ja: "急いで書いたメモが後から見返して意味が分からない時はどうすればいいですか？",
          zh: "匆忙记下的笔记事后看不懂含义该怎么办？",
          es: "¿Qué hacer si luego no entiendo mis notas rápidas?",
          fr: "Que faire si je ne comprends plus mes notes rapides plus tard ?",
          de: "Was tun, wenn ich meine schnellen Notizen später nicht verstehe?",
          pt: "O que fazer se eu não entender minhas notas rápidas depois?",
          id: "Bagaimana jika saya tidak memahami catatan cepat saya di kemudian hari?"
        },
        answer: {
          ko: "캡처 후 1~2시간 이내에 바로 복기하여 개요 문장으로 보완하는 습관이 중요합니다. 기록과 정제 사이의 시간을 최대한 단축하여 감각 잔상을 보존하세요.",
          en: "Elaborate on raw notes within 1-2 hours while memory traces remain active. Keep the time gap between capture and refinement as short as possible.",
          ja: "メモ後1〜2時間以内に見直し、文章として補完する習慣をつけることが重要です。",
          zh: "关键在于捕获后1-2小时内立即复盘并补充完整句。缩短捕获与精炼的时间差以保留感官残像。",
          es: "Repase sus notas 1-2 horas después para completar las frases mientras la memoria esté fresca.",
          fr: "Relisez vos notes dans les 1-2 heures pour compléter les phrases tant que le souvenir est frais.",
          de: "Arbeiten Sie die Notizen innerhalb von 1-2 Stunden aus, solange die Erinnerung frisch ist.",
          pt: "Revise suas notas em 1-2 horas para completar as frases enquanto a memória estiver fresca.",
          id: "Uraikan catatan dalam 1-2 jam setelah mencatat agar kenangan sensorik masih segar."
        }
      },
      {
        question: {
          ko: "음성 메모 앱을 쓸 때 주변 사람들의 시선이 부담스러운데 좋은 팁이 있나요?",
          en: "Any tips if recording voice memos in public feels awkward?",
          ja: "人前で音声メモを録音するのが恥ずかしい場合のコツはありますか？",
          zh: "在公共场所使用语音备忘录感觉尴尬有什么好建议吗？",
          es: "¿Algún consejo si da vergüenza usar notas de voz en público?",
          fr: "Des conseils si enregistrer un mémo vocal en public est gênant ?",
          de: "Tipps, wenn Sprachnotizen in der Öffentlichkeit unangenehm sind?",
          pt: "Alguma dica se gravar notas de voz em público for constrangedor?",
          id: "Ada saran jika merekam suara di tempat umum terasa canggung?"
        },
        answer: {
          ko: "이어폰을 낀 채 마치 누군가와 전화 통화를 하는 것처럼 자연스럽게 읊조리듯 녹음하면 주변 시선을 전혀 받지 않고 편안하게 영감을 캡처할 수 있습니다.",
          en: "Put in earphones and speak as if you are on a phone call. This removes public awkwardness entirely.",
          ja: "イヤホンを装着し、電話で通話しているようにささやいて録音するのがお勧めです。",
          zh: "戴上耳机，装作正在与人打电话一样自然低声念出，就能完全规避他人目光并轻松捕获灵感。",
          es: "Póngase auriculares e intente hablar como si estuviera en una llamada telefónica para disimular.",
          fr: "Mettez des écouteurs et parlez comme si vous étiez au téléphone pour enregistrer discrètement.",
          de: "Nutzen Sie Kopfhörer und sprechen Sie wie bei einem Telefonat, um unauffällig zu bleiben.",
          pt: "Coloque fones e fale como se estivesse em uma ligação telefônica para disfarçar.",
          id: "Gunakan headphone dan berbicaralah seolah sedang menelepon agar tidak menjadi perhatian."
        }
      }
    ]
  },

  // 10. klimt-gardening-nature-refresh
  {
    slug: "klimt-gardening-nature-refresh",
    title: {
      ko: "푸른 로브를 입고 아침 장미를 관찰한 화가? 구스타프 클림트의 정원 산책 루틴",
      en: "The Painter Who Observed Morning Roses in a Blue Robe? Gustav Klimt's Garden Refresh Routine",
      ja: "青いローブを着て朝のバラを観察した画家？グスタフ・クリムトの庭園散歩ルーティン",
      zh: "穿着蓝色罩衫在晨光中观察玫瑰的大画家？古斯塔夫·克里姆特的花园焕新惯例",
      es: "¿El pintor que observaba rosas matutinas con túnica azul? La rutina de jardín de Gustav Klimt",
      fr: "Le peintre qui observait les roses le matin en robe bleue ? La routine de jardin de Gustav Klimt",
      de: "Der Maler, der im blauen Kittel Rosen beobachtete? Gustav Klimts Garten-Routine",
      pt: "O pintor que observava rosas matinais com túnica azul? A rotina de jardim de Gustav Klimt",
      id: "Pelukis yang Mengamati Mawar Pagi Menggunakan Jubah Biru? Rutinitas Taman Gustav Klimt"
    },
    description: {
      ko: "황금빛 화풍의 거장 구스타프 클림트. 매일 아침 오스트리아 아터제 호숫가 정원을 산책하며 꽃과 자연의 프랙탈 문양을 관찰했던 주의력 회복 루틴과 3단계 실천 가이드를 알아봅니다.",
      en: "Gustav Klimt, Golden Phase master. Discover his morning garden walk at Lake Attersee for observing natural patterns and a 3-step action guide.",
      ja: "黄金の画風の巨匠クリムト。アッター湖畔の庭園散歩で自然のパターンを観察した彼の覚醒習慣を紹介します。",
      zh: "黄金时期绘画大师克里姆特。介绍他在阿特湖畔花园散步观察自然花卉图案的大脑焕新惯例与三步指南。",
      es: "Gustav Klimt, maestro de la Fase Dorada. Descubra su rutina de caminata matutina por el jardín junto al lago Attersee.",
      fr: "Gustav Klimt, maître de la Période Dorée. Découvrez sa routine de marche matinale dans les jardins du lac Attersee.",
      de: "Gustav Klimt, Meister der Goldene Phase. Entdecken Sie seine Garten-Routine am Attersee.",
      pt: "Gustav Klimt, mestre da Fase Dourada. Descubra sua rotina de caminhada matinal pelos jardins do lago Attersee.",
      id: "Gustav Klimt, master Golden Phase. Temukan rutinitas jalan pagi di taman Danau Attersee untuk mereset perhatian."
    },
    authority: {
      ko: "Tobias G. Natter 저서 'Gustav Klimt: The Complete Paintings' 및 클림트 아터제 서간집",
      en: "Tobias G. Natter's 'Gustav Klimt: The Complete Paintings' & Attersee Letters",
      ja: "トビアス・G・ナッター著「Gustav Klimt: The Complete Paintings」およびアッター湖書簡集",
      zh: "托比亚斯·G·纳特著作《Gustav Klimt: The Complete Paintings》与阿特湖信件",
      es: "Obra de Tobias G. Natter 'Gustav Klimt: The Complete Paintings' y cartas de Attersee",
      fr: "Ouvrage de Tobias G. Natter 'Gustav Klimt: The Complete Paintings' & lettres d'Attersee",
      de: "Tobias G. Natters 'Gustav Klimt: The Complete Paintings' & Attersee-Briefe",
      pt: "Obra de Tobias G. Natter 'Gustav Klimt: The Complete Paintings' & cartas de Attersee",
      id: "Karya Tobias G. Natter 'Gustav Klimt: The Complete Paintings' & Surat-surat Attersee"
    },
    intro: {
      ko: "'키스(The Kiss)', '유디트(Judith)' 등 찬란한 금박과 정교한 유기적 패턴으로 관능과 황금빛 예술의 정점을 구축한 오스트리아의 상징주의 대화가, 구스타프 클림트(Gustav Klimt). 시대를 앞서간 그의 화려하고 정교한 시각적 패턴과 압도적인 창작 에너지는 과연 어디서 충전되었을까요? 🎨\n\n클림트는 매일 아침 화가 전용의 헐렁한 푸른 로브(Smock)를 입고 오스트리아 아터제(Attersee) 호숫가의 붉은 장미와 야생화가 만발한 정원을 조용히 걸었습니다. 그는 돋보기나 뷰파인더를 들고 장미 꽃잎의 유기적 프랙탈 구조, 수면에 반사되는 아침 햇살의 기하학적 입자들을 깊은 시선으로 묵묵히 관찰했습니다. 도시 스튜디오의 찌든 피로와 집착에서 벗어나 자연의 순수한 형상과 색채에 몰입하는 이 아침 정원 루틴은 고갈된 시각적 주의력(Attention Fatigue)을 완벽하게 리셋하는 치유의 시간이었습니다.\n\n오늘 BuildSelf에서는 클림트의 '아침 정원 자연 관찰' 루틴의 뇌과학적 원리와 현대 뇌 피로에 시달리는 현대인들이 주의력을 회복하는 3단계 실천 가이드를 공개합니다.",
      en: "Gustav Klimt, the Austrian symbolist master known for 'The Kiss' and golden patterns. How did he replenish his intense visual and creative energy? 🎨\n\nEvery morning, Klimt donned his signature blue artist's smock and strolled through blooming rose gardens along Lake Attersee. Observing organic fractal patterns in flower petals and morning lake reflections refreshed his brain from urban studio exhaustion.\n\nToday, BuildSelf reveals the science behind Klimt's 'garden nature refresh' routine and a 3-step action guide for restoring attention.",
      ja: "「接吻」などで知られるウィーン分離派の巨匠グスタフ・クリムト。彼の燦然たる視覚的エネルギーの補給源は何でしょうか？ 🎨\n\nクリムトは毎朝、青いローブを着てアッター湖畔のバラが咲き誇る庭園を静かに歩きました。花びらのパターンや光の反射を深く観察することで、脳の疲労を完全にリセットしました。\n\n今日のBuildSelfでは、クリムトの「朝の庭園観察」ルーティンを紹介します。",
      zh: "以《吻》与金箔画风闻名于世的奥地利象征主义大师古斯塔夫·克里姆特。他那源源不断的视觉创意与艺术能量究竟从何而来？ 🎨\n\n克里姆特每天早晨都会穿上标志性的蓝色画家罩衫，独自漫步在阿特湖畔玫瑰盛开的花园中。深入观察花瓣的有机分形结构与湖面晨光的几何微粒，彻底重置在都市画室中积累的大脑疲劳。\n\n今天，BuildSelf 将带您探究克里姆特“清晨花园自然焕新”惯例指南。",
      es: "Gustav Klimt, maestro austriaco del simbolismo famoso por 'El Beso'. ¿Cómo recargaba su intensa energía visual? 🎨\n\nCada mañana, Klimt vestía su túnica azul de pintor y paseaba por los jardines de rosas del lago Attersee. Observar los patrones naturales renovaba su atención.\n\nHoy, BuildSelf explora la rutina de jardín de Gustav Klimt.",
      fr: "Gustav Klimt, maître symboliste autrichien célèbre pour 'Le Baiser'. Comment rechargeait-il son énergie visuelle ? 🎨\n\nChaque matin, Klimt vêtissait sa robe bleue de peintre et se promenait dans les roseraies du lac Attersee. Observer la nature réinitialisait son attention.\n\nAujourd'hui, BuildSelf explore la routine de jardin de Gustav Klimt.",
      de: "Gustav Klimt, österreichischer Symbolist und Schöpfer von 'Der Kuss'. Wie lud er seine visuelle Energie auf? 🎨\n\nJeden Morgen trug Klimt seinen blauen Kittel und spazierte durch die Rosengärten am Attersee. Das Beobachten der Natur erholte sein Gehirn.\n\nHeute untersucht BuildSelf Klimts Garten-Routine.",
      pt: "Gustav Klimt, mestre simbolista austríaco famoso por 'O Beijo'. Como recarregava sua intensa energia visual? 🎨\n\nTodas as manhãs, Klimt vestia sua túnica azul de pintor e passeava pelos jardins de rosas do lago Attersee. Observar a natureza renovava sua atenção.\n\nHoje, o BuildSelf explora a rotina de jardim de Gustav Klimt.",
      id: "Gustav Klimt, master simbolis Austria perancang 'The Kiss'. Bagaimana ia mengisi ulang energi visualnya? 🎨\n\nSetiap pagi, Klimt mengenakan jubah biru senimannya dan berjalan di taman mawar Danau Attersee. Mengamati pola alam memulihkan perhatian otaknya.\n\nHari ini, BuildSelf menjelajahi rutinitas taman Gustav Klimt."
    },
    whyTitle: {
      ko: "자연 프랙탈 관찰과 주의력 회복 이론(Attention Restoration Theory) 메커니즘",
      en: "Mechanism: Natural Fractal Observation and Attention Restoration Theory (ART)",
      ja: "自然のフラクタル観察と注意回復理論（Attention Restoration Theory）メカニズム",
      zh: "自然分形观察与注意力恢复理论(ART)机制",
      es: "Mecanismo: Observación de fractales naturales y Teoría de Restauración de la Atención (ART)",
      fr: "Mécanisme : Observation de fractales naturelles et Théorie de Restauration de l'Attention (ART)",
      de: "Mechanismus: Beobachtung natürlicher Fraktale und Aufmerksamkeitserholungstheorie (ART)",
      pt: "Mecanismo: Observação de fractais naturais e Teoria de Restauração da Atenção (ART)",
      id: "Mekanisme: Pengamatan Fraktal Alam dan Attention Restoration Theory (ART)"
    },
    whyDesc: {
      ko: "복잡한 모니터 화면과 인공 구조물에 둘러싸여 일할 때, 뇌의 전두엽은 특정 대상에 억지로 집중하느라 <strong></strong>을 소모하여 극심한 피로를 느낍니다. 환경 심리학의 <strong></strong>에 따르면, 꽃잎이나 나뭇잎 같은 자연의 프랙탈(Fractal) 구조는 뇌의 억제적 에너지를 요구하지 않는 '부드러운 매료(Soft Fascination)' 상태를 유발합니다.\n\n클림트처럼 아침 정원의 자연 형상과 빛을 묵묵히 관찰하면, 고갈되었던 전전두엽 주의력 자원이 즉각 복원되고 창의적 감각 재충전이 완성됩니다.",
      en: "Working under artificial screens consumes prefrontal <strong></strong>, causing severe fatigue. According to <strong></strong>, natural organic fractal patterns induce 'Soft Fascination' without demanding effortful cognitive energy.\n\nObserving natural flowers and morning light—like Klimt—instantly restores depleted prefrontal attention capacity and refreshes creative visual senses.",
      ja: "人工物や画面への集中は<strong></strong>を 消耗させます。<strong></strong>によると、花などの自然のフラクタル構造は脳を労せず癒す「ソフトな魅了」を引き起こします。\n\n自然を観察することで、消耗した注意力が復元し、創造的感覚が充電されます。",
      zh: "长久面对人工屏幕会耗尽前额叶的<strong></strong>导致疲劳。根据环境心理学<strong></strong>，花瓣等自然分形(Fractal)结构能引发不耗费脑力的“柔和吸引(Soft Fascination)”状态。\n\n如克里姆特般默然观察早晨花园的自然形态与日光，能立即修复衰竭的前额叶注意力资源并重置创意感官。",
      es: "El trabajo con pantallas agota la <strong></strong> prefrontal. La <strong></strong> demuestra que los fractales naturales provocan 'Fascinación Suave'.\n\nObservar la naturaleza restaura de inmediato la capacidad de atención agotada.",
      fr: "Travailler sur écran épuise <strong></strong>. La <strong></strong> montre que les fractales naturelles créent une 'Fascination Douce'.\n\nObserver la nature restaure immédiatement l'attention épuisée.",
      de: "Bildschirmarbeit verbraucht die <strong></strong>. Die <strong></strong> belegt, dass Fraktale 'weiche Faszination' erzeugen.\n\nNaturbeobachtung stellt die präfrontale Aufmerksamkeitskapazität sofort wieder her.",
      pt: "O trabalho com telas esgota a <strong></strong>. A <strong></strong> mostra que fractais naturais geram 'Fascinação Suave'.\n\nObservar a natureza restaura imediatamente a atenção esgotada.",
      id: "Bekerja di depan layar menguras <strong></strong> prefrontal. <strong></strong> membuktikan fraktal alam memicu 'Soft Fascination'.\n\nMengamati alam memulihkan kapasitas atensi prefrontal yang terkelupas seketika."
    },
    steps: [
      {
        name: {
          ko: "아침 야외 정원/공원 10분 관찰 산책",
          en: "10-Minute Morning Garden/Park Observation Walk",
          ja: "朝の野外庭園・公園10分間観察散歩",
          zh: "执行清晨户外花园/公园10分钟观察散步",
          es: "Caminata de observación de 10 minutos por un jardín",
          fr: "Marche d'observation de 10 minutes dans un jardin",
          de: "10-minütiger Beobachtungsspaziergang im Garten",
          pt: "Caminhada de observação de 10 minutos por um jardim",
          id: "10 Menit Jalan Pengamatan Pagi di Taman"
        },
        text: {
          ko: "아침 기상 후 10~15분간 근처 정원, 공원, 혹은 베란다 화초가 있는 곳으로 이동하여 자연 속에 조용히 섭니다.",
          en: "Spend 10-15 minutes after waking stepping into a nearby garden, park, or houseplant area in quiet contemplation.",
          ja: "起床後10〜15分間、近くの庭や公園、観葉植物のある場所に移動し、静かに佇みます。",
          zh: "清晨起床后花10-15分钟前往附近的花园、公园或有植物的阳台，静静地立于自然之中。",
          es: "Camine 10-15 minutos por un jardín, parque o zona verde cerca de casa al despertar.",
          fr: "Consacrez 10-15 minutes après le réveil à marcher dans un jardin ou un parc.",
          de: "Gehen Sie nach dem Aufstehen 10-15 Minuten in einen Garten oder Park.",
          pt: "Caminhe 10-15 minutos por um jardim ou parque próximo de casa ao acordar.",
          id: "Luangkan 10-15 menit setelah bangun untuk berjalan ke taman atau area tanaman."
        }
      },
      {
        name: {
          ko: "식물/꽃잎의 미세 프랙탈 패턴 집중 조망",
          en: "Focusing on Fine Organic Patterns in Leaves and Petals",
          ja: "植物や花びらの微細なフラクタルパターンの観察",
          zh: "极度聚焦观察植物/花瓣的微观分形图案",
          es: "Enfocarse en patrones orgánicos de hojas y pétalos",
          fr: "Observer les motifs organiques des feuilles et pétales",
          de: "Fokussieren auf Muster in Blättern und Blüten",
          pt: "Focar em padrões orgânicos de folhas e pétalas",
          id: "Fokus Mengamati Pola Organik pada Daun dan Kelopak Bunga"
        },
        text: {
          ko: "하나의 꽃잎이나 나뭇잎을 가까이 들여다보며, 줄기의 실핏줄 잎맥, 색상의 미세한 그러데이션, 유기적 프랙탈 문양에 3분간 시선을 고정합니다.",
          en: "Gaze closely at a single petal or leaf for 3 minutes, observing its vein patterns, color gradients, and fractal geometry.",
          ja: "一つの花びらや葉を近くで観察し、葉脈のパターンやグラデーションに3分間見入ります。",
          zh: "凑近细致凝视某一片花瓣或树叶，将目光专注在叶脉纹理、微细渐变色彩与分形图案上保持3分钟。",
          es: "Observe de cerca un pétalo o hoja durante 3 minutos, analizando sus venas y degradados de color.",
          fr: "Observez de près un pétale ou une feuille pendant 3 minutes, en analysant ses nervures et dégradés.",
          de: "Betrachten Sie 3 Minuten lang ein Blüteblatt oder Blatt aus der Nähe.",
          pt: "Observe de perto uma pétala ou folha por 3 minutos, analisando suas veias e degradês.",
          id: "Amati satu kelopak atau daun secara dekat selama 3 menit, perhatikan pola urat dan gradasi warnanya."
        }
      },
      {
        name: {
          ko: "시각적 미감의 내면 리프레시 및 몰입 전환",
          en: "Refreshing Internal Visual Senses and Transitioning to Work",
          ja: "視覚的感性の内面リフレッシュと仕事への移行",
          zh: "感官内面焕新与高效工作状态切换",
          es: "Renovar los sentidos visuales y pasar al trabajo",
          fr: "Renouveler les sens visuels et passer au travail",
          de: "Auffrischen der visuellen Sinne und Übergang zur Arbeit",
          pt: "Renovar os sentidos visuais e passar ao trabalho",
          id: "Penyegaran Indra Visual dan Transisi ke Pekerjaan"
        },
        text: {
          ko: "자연이 주는 시각적 피로 회복을 만끽한 후, 맑아진 눈과 전두엽 상태로 책상에 앉아 오늘 가장 창의적인 프로젝트를 시작합니다.",
          en: "With refreshed visual senses and a restored prefrontal cortex, sit down at your desk to start your most creative project.",
          ja: "リフレッシュした目の状態でデスクに向かい、最も創造的なプロジェクトを開始します。",
          zh: "在享受到自然带来的视觉疲劳修复后，带上一张恢复清凉的双眼与前额叶回到案前，开启今天最具创意的项目。",
          es: "Con la atención renovada, siéntese a su escritorio para comenzar su proyecto más creativo.",
          fr: "L'esprit reposé, installez-vous à votre bureau pour commencer votre projet le plus créatif.",
          de: "Mit erfrischter Aufmerksamkeit setzen Sie sich an Ihre kreativste Aufgabe.",
          pt: "Com a atenção renovada, sente-se à mesa para iniciar seu projeto mais criativo.",
          id: "Dengan perhatian yang segar, duduklah di meja Anda untuk memulai proyek paling kreatif."
        }
      }
    ],
    cautionTitle: {
      ko: "자연 관찰 시 스마트폰 카메라 촬영 및 SNS 공유 집착 주의",
      en: "Caution Against Photographing and Social Media Sharing During Nature Refresh",
      ja: "自然観察時のスマホ撮影やSNS共有への執着に対する注意",
      zh: "切忌在自然焕新时执念于手机拍照与SNS分享",
      es: "Precaución con fotografiar y compartir en redes durante el paseo",
      fr: "Attention aux photos et réseaux sociaux pendant la marche",
      de: "Vorsicht vor Fotografieren und Social Media beim Spaziergang",
      pt: "Cuidado com tirar fotos e postar em redes durante o passeio",
      id: "Waspada Mengambil Foto dan Membagikan ke Sosmed Saat di Taman"
    },
    cautionDesc: {
      ko: "정원을 산책하며 '인스타그램에 올릴 사진을 잘 찍어야지' 하고 스마트폰 카메라를 들이대는 순간, 뇌는 다시 타인의 평가와 시각적 프레임에 갇혀 주의력 회복 효과를 놓치게 됩니다. 클림트처럼 카메라 렌즈가 아닌 자신의 육안으로 자연의 깊이를 온전히 누리세요.",
      en: "Snapping photos for social media destroys the Attention Restoration effect by switching the brain back into evaluative mode. Observe nature directly through your naked eyes, not a screen lens.",
      ja: "「SNS用の写真を撮ろう」とカメラを向けると、脳は再び評価に縛られます。自分の目で見つめましょう。",
      zh: "若在散步时想着“得拍张照片发社交平台”，大脑会瞬间重回他者评价与框定模式，丧失注意力修复效果。请用肉眼而非镜头去体会自然。",
      es: "Sacar fotos para redes sociales destruye la restauración de la atención al volver al modo evaluativo. Observe con sus propios ojos.",
      fr: "Prendre des photos pour les réseaux détruit la restauration de l'attention. Observez la nature directement.",
      de: "Fotos für Social Media zu machen zerstört die Erholung. Betrachten Sie die Natur mit eigenen Augen.",
      pt: "Tirar fotos para redes sociais destrói a restauração da atenção. Observe a natureza com seus próprios olhos.",
      id: "Mengambil foto untuk medsos menghancurkan pemulihan atensi. Amati alam secara langsung dengan mata telanjang."
    },
    faqs: [
      {
        question: {
          ko: "주변에 정원이나 공원이 없을 때는 어떻게 이 루틴을 적용하나요?",
          en: "How do I apply this routine if there are no gardens or parks nearby?",
          ja: "近くに庭や公園がない場合はどうすればいいですか？",
          zh: "如果周边没有花园或公园，该如何应用此惯例？",
          es: "¿Cómo aplico esta rutina si no tengo jardines o parques cerca?",
          fr: "Comment appliquer cette routine sans jardin ni parc à proximité ?",
          de: "Wie wende ich die Routine ohne Garten oder Park in der Nähe an?",
          pt: "Como aplicar essa rotina se não houver jardins ou parques perto?",
          id: "Bagaimana menerapkan rutinitas ini jika tidak ada taman di dekat rumah?"
        },
        answer: {
          ko: "실내에 있는 반려식물, 관엽식물 화분, 혹은 창밖의 가로수나 하늘 구름을 3분간 가까이 들여다보는 것만으로도 동일한 주의력 회복(ART) 효과를 누릴 수 있습니다.",
          en: "Gazing closely at indoor houseplants, window trees, or sky clouds for 3 minutes triggers identical Attention Restoration (ART) benefits.",
          ja: "室内の観葉植物や窓から見える街路樹、空の雲を3分間見つめるだけで同様の効果が得られます。",
          zh: "仅需凝视室内的观叶植物盆栽、窗外的行道树或天空中的云朵3分钟，同样能享受注意力恢复(ART)效果。",
          es: "Mirar plantas de interior, árboles desde la ventana o nubes durante 3 minutos produce el mismo beneficio.",
          fr: "Observer des plantes d'intérieur, des arbres par la fenêtre ou des nuages pendant 3 minutes suffit.",
          de: "Betrachten Sie Zimmerpflanzen, Bäume vor dem Fenster oder Wolken 3 Minuten lang für den gleichen Effekt.",
          pt: "Olhar para plantas de interior, árvores pela janela ou nuvens por 3 minutos produz o mesmo benefício.",
          id: "Mengamati tanaman hias dalam ruangan, pepohonan di luar jendela, atau awan selama 3 menit memberikan manfaat yang sama."
        }
      },
      {
        question: {
          ko: "비가 오거나 날씨가 나쁜 날에는 정원 산책을 어떻게 대체하나요?",
          en: "How to adapt this routine on rainy or bad weather days?",
          ja: "雨の日や悪天候の日はどう代替すればいいですか？",
          zh: "遇到下雨天或恶劣天气时该如何替代花园散步？",
          es: "¿Cómo adaptar esta rutina en días de lluvia o mal tiempo?",
          fr: "Comment adapter cette routine les jours de pluie ?",
          de: "Wie passe ich die Routine an Regentagen an?",
          pt: "Como adaptar essa rotina em dias chuvosos ou de tempo ruim?",
          id: "Bagaimana menyesuaikan rutinitas ini saat hujan atau cuaca buruk?"
        },
        answer: {
          ko: "창가에 서서 빗방울이 유리창에 맺히는 모양이나 빗줄기가 그리는 라인을 묵묵히 관찰하세요. 액체 물방울의 유기적 패턴 역시 훌륭한 부드러운 매료 자극이 됩니다.",
          en: "Stand by a window and observe raindrops forming organic patterns on the glass. Water fluid dynamics also induce Soft Fascination.",
          ja: "窓辺に立ち、雨粒が glass につくるパターンを観察してください。水の流動的パターンも脳を癒します。",
          zh: "站在窗前默然观察雨滴在玻璃窗上凝结的图案或雨丝落下的轨迹。流体水滴的有机分形图案同样是极佳的柔和吸引刺激。",
          es: "Observe las gotas de lluvia en la ventana. La dinámica de fluidos del agua también provoca fascinación suave.",
          fr: "Observez les gouttes de pluie sur la vitre. Les motifs de l'eau provoquent aussi une fascination douce.",
          de: "Betrachten Sie Regentropfen am Fenster. Flüssigkeitsmuster erzeugen ebenfalls Erholung für das Gehirn.",
          pt: "Observe as gotas de chuva na janela. Os padrões da água também provocam fascinação suave.",
          id: "Berdirilah di dekat jendela dan amati tetesan hujan di kaca. Pola air juga memicu keheningan yang menyegarkan."
        }
      }
    ]
  }
];

function enrich5to10Complete() {
  enrichedHabits7to10.forEach(item => {
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

enrich5to10Complete();
