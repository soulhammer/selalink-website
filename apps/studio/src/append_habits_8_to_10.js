import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const todayStr = '2026-07-22';

const habits8to10 = [
  // 8. 어네스트 러더퍼드 (Ernest Rutherford)
  {
    slug: 'rutherford-tea-debate',
    item: {
      id: 'rutherford-tea-debate',
      name: '어네스트 러더퍼드',
      gender: 'male',
      era: '근대',
      location: '뉴질랜드, 영국',
      lifespan: '1871 - 1937',
      birthYear: 1871,
      bio: "원자핵을 발견하여 노벨 화학상을 수상하고 '핵물리학의 아버지'라 불리는 세기의 물리학자입니다.",
      habitName: '오후 4시 연구실 비공식 티 타임과 소크라테스식 자유 토론',
      tags: ['#소통', '#아이디어', '#창의', '#몰입'],
      timeOfDay: 'afternoon',
      requiredItems: ['홍차 한 잔', '동료 또는 노트'],
      frequency: 'daily',
      historicalStory: "카벤디시 연구소의 소장이었던 러더퍼드는 매일 오후 4시가 되면 모든 연구원들과 함께 연구실 중앙에 모여 홍차와 비스킷을 나누는 '티 타임'을 가졌습니다. 이 자리에서는 직급이나 계급에 상관없이 아이디어를 자유롭게 공격하고 비판하며 토론했습니다. 그는 편안하고 자유로운 티 타임을 통해 알파 입자 산란 실험과 알파 입자 인공 변환이라는 인류사적 대발견의 영감을 얻었습니다.",
      sciencePrinciples: "수평적 분위기에서의 비공식적 대화는 심리적 안전감(Psychological Safety)을 형성하여 뇌의 인지적 방어 기제를 낮추고 집단 지성과 집단 창의성(Collective Creativity)을 극대화합니다.",
      quote: "우리가 돈이 없다는 것은 생각을 더 많이 해야 한다는 뜻이다.",
      trigger: "혼자 고민해도 아이디어가 나오지 않거나 연구가 정체되었을 때",
      modernGuide: [
        "오후 4시경 15분간 따뜻한 차나 음료를 준비하고 동료나 친구와 가벼운 비공식 미팅을 갖습니다.",
        "정해진 보고 형식을 없애고 피드백에 대한 어떤 감정적 방어도 하지 않은 채 자유롭게 아이디어를 주고받습니다.",
        "토론 중 나온 새로운 시각이나 인지적 자극을 키워드로 기록합니다."
      ],
      actionName: "오후 4시 15분 소크라테스 티 타임 (러더퍼드 루틴)",
      sources: [
        "A.S. Eve, *Rutherford: Being the Life and Letters of the Rt. Hon. Lord Rutherford* (1939)",
        "Cavendish Laboratory Historical Archives"
      ]
    },
    translations: {
      title: {
        ko: "원자핵 발견자의 창의성 비결? 어네스트 러더퍼드의 오후 4시 티 타임 루틴",
        en: "Father of Nuclear Physics' Secret? Ernest Rutherford's 4 PM Tea Debate Routine",
        ja: "原子核の発見者の創造性の秘密？アーネスト・ラザフォードの午後4時ティータイム",
        zh: "原子核发现者的创造力秘诀？欧内斯特·卢瑟福的下午4点茶会讨论习惯",
        es: "¿El secreto del padre de la física nuclear? La rutina de té a las 4 PM de Ernest Rutherford",
        fr: "Le secret du père de la physique nucléaire ? La routine du thé de 16h d'Ernest Rutherford",
        de: "Das Geheimnis des Vaters der Kernphysik? Ernest Rutherfords 16-Uhr-Tee-Routine",
        pt: "O segredo do pai da física nuclear? A rotina de chá às 16h de Ernest Rutherford",
        id: "Rahasia Bapak Fisika Nuklir? Rutinitas Diskusi Teh Jam 4 Sore Ernest Rutherford"
      },
      description: {
        ko: "핵물리학의 아버지 러더퍼드. 매일 오후 4시 동료들과 홍차를 마시며 격식 없는 토론을 나눠 인류 최초의 원자핵을 발견한 소통 루틴.",
        en: "Discover how Rutherford held 4 PM tea debates to foster psychological safety and split the atom.",
        ja: "毎日午後4時に紅茶を飲みながら自由な討論を行い、原子核を発見したラザフォードの習慣。",
        zh: "介绍“核物理之父”卢瑟福每天下午4点同同事饮茶自由讨论、建立心理安全感并发现原子核的沟通习惯。",
        es: "Descubra cómo Rutherford mantenía debates a las 4 PM con té para fomentar la seguridad psicológica.",
        fr: "Découvrez comment Rutherford organisait des débats à 16h autour d'un thé pour fendre l'atome.",
        de: "Erfahren Sie, wie Rutherford um 16 Uhr Tee-Debatten führte, um den Atomkern zu entdecken.",
        pt: "Descubra como Rutherford realizava debates às 16h tomando chá para promover a criatividade.",
        id: "Temukan cara Rutherford menggelar diskusi teh jam 4 sore untuk merangsang kreativitas tim."
      },
      authority: {
        ko: "전기 'Rutherford: Being the Life and Letters' 및 카벤디시 연구소 보관 사료",
        en: "Biography 'Rutherford: Life and Letters' & Cavendish Laboratory Archives",
        ja: "評伝「Rutherford: Life and Letters」およびキャベンディッシュ研究所史料",
        zh: "传记《Rutherford: Life and Letters》与卡文迪许实验室史料",
        es: "Biografía 'Rutherford: Life and Letters' y archivos del Laboratorio Cavendish",
        fr: "Biographie 'Rutherford: Life and Letters' & archives du Laboratoire Cavendish",
        de: "Biografie 'Rutherford: Life and Letters' & Archive des Cavendish-Laboratoriums",
        pt: "Biografia 'Rutherford: Life and Letters' e arquivos do Laboratório Cavendish",
        id: "Biografi 'Rutherford: Life and Letters' & Arsip Laboratorium Cavendish"
      },
      intro: {
        ko: "원자핵의 존재를 최초로 밝혀내 노벨 화학상을 수상하고 '핵물리학의 아버지'라 불리는 현대 물리학의 거장, 어네스트 러더퍼드. 집단 창의성을 이끌어내어 수많은 위대한 대발견을 일궈낸 그의 연구소 분위기의 비결은 무엇이었을까요? ☕\n\n러더퍼드는 카벤디시 연구소 소장 시절 매일 오후 4시가 되면 연구원들과 함께 연구실 중앙에 મો여 홍차와 비스킷을 나누며 비공식적인 티 타임을 가졌습니다. 이 자리에서는 직급이나 나이에 상관없이 누구나 자유롭게 논쟁하고 아이디어를 제안했습니다. 격식 없는 수평적 토론 루틴은 러더퍼드와 그의 팀이 원자핵을 발견하는 결정적 영감을 선사했습니다.\n\n오늘 BuildSelf에서는 어네스트 러더퍼드의 오후 4시 소크라테스 티 타임 루틴과 심리적 안전감의 과학을 소개합니다.",
        en: "Ernest Rutherford, the father of nuclear physics who discovered the atomic nucleus. Where did his team's breakthroughs come from? ☕\n\nEvery afternoon at 4 PM, Rutherford gathered his researchers for tea and biscuits. In this informal setting, anyone could freely challenge ideas regardless of rank. This horizontal debate routine paved the way for splitting the atom.\n\nToday, BuildSelf introduces Rutherford's 4 PM tea debate routine.",
        ja: "原子核を発見した現代物理学の巨匠、アーネ스트・ラザフォード。偉大な発見を生み出した秘密は何だったのでしょうか？ ☕\n\nラザフォードは毎日午後4時になると、研究者たちと紅茶を飲みながら非公式なティータイムを持ちました。誰でも自由な意見交換ができる水平的な討論のルーティンが偉大な発見を生み出しました。\n\n今日のBuildSelfではラザフォードのティータイム習慣を紹介します。",
        zh: "首次揭示原子核存在、获得诺贝尔化学奖的物理学巨匠欧内斯特·卢瑟福。他带领团队做出重大发现的秘诀是什么？ ☕\n\n每天下午4点，卢瑟福都会同研究人员聚在一起享用红茶与饼干。在这种非正式场合，人人皆可自由辩论。这种打破阶级的自由讨论习惯孕育了伟大的发现。\n\n今天，BuildSelf 将介绍卢瑟福的下午4点茶会讨论习惯。",
        es: "Ernest Rutherford, el padre de la física nuclear. ¿De dónde venían los descubrimientos de su equipo? ☕\n\nCada tarde a las 4 PM, Rutherford se reunía con sus investigadores para tomar té. Esta rutina informal fomentó la creatividad grupal.\n\nHoy, BuildSelf presenta la rutina de té a las 4 PM de Rutherford.",
        fr: "Ernest Rutherford, le père de la physique nucléaire. D'où venaient les percées de son équipe ? ☕\n\nChaque après-midi à 16h, Rutherford réunissait ses chercheurs autour d'un thé. Ce cadre informel a favorisé les plus grandes découvertes.\n\nAujourd'hui, BuildSelf vous présente sa routine du thé de 16h.",
        de: "Ernest Rutherford, der Vater der Kernphysik. Woher stammten die Durchbrüche seines Teams? ☕\n\nJeden Nachmittag um 16 Uhr traf sich Rutherford mit seinen Forschern zum Tee. Diese informelle Routine förderte die Gruppenkreativität.\n\nHeute stellt BuildSelf Rutherfords 16-Uhr-Tee-Routine vor.",
        pt: "Ernest Rutherford, o pai da física nuclear. De onde vinham as descobertas de sua equipe? ☕\n\nTodas as tardes às 16h, Rutherford se reunia com pesquisadores para tomar chá. Essa rotina informal promoveu grandes descobertas.\n\nHoje, o BuildSelf apresenta a rotina de chá às 16h de Rutherford.",
        id: "Ernest Rutherford, bapak fisika nuklir. Dari mana datangnya penemuan timnya? ☕\n\nSetiap jam 4 sore, Rutherford berkumpul dengan para peneliti untuk minum teh. Rutinitas informal ini memicu penemuan ilmiah besar.\n\nHari ini, BuildSelf menyajikan rutinitas diskusi teh jam 4 sore Rutherford."
      },
      whyTitle: {
        ko: "심리적 안전감이 유도하는 집단 창의성과 억제 해제",
        en: "Collective Creativity & Inhibition Release via Psychological Safety",
        ja: "心理的安全性 sa が誘導する集団的創造性と抑制解除",
        zh: "心理安全感引发的集体创造力与解除抑制",
        es: "Creatividad Colectiva e Inhibición Mediante Seguridad Psicológica",
        fr: "Créativité Collective et Libération des Inhibitions via la Sécurité",
        de: "Kollektive Kreativität durch psychologische Sicherheit",
        pt: "Criatividade Coletiva via Segurança Psicológica",
        id: "Kreativitas Kolektif Melalui Rasa Aman Psikologis"
      },
      whyDesc: {
        ko: "격식 있는 직장이나 엄격한 평가 환경에서는 실패에 대한 두려움으로 인해 뇌의 인지적 방어 기제가 발동하여 창의적 아이디어를 억압합니다.\n\n러더퍼드가 조성한 4시 티 타임처럼 수평적이고 따뜻한 환경은 뇌의 <strong>'심리적 안전감(Psychological Safety)'</strong>을 극대화합니다. 평가의 압박이 사라질 때 편도체의 경계 신호가 꺼지고 확산적 사고(Divergent Thinking) 회로가 활성화되어 파격적인 아이디어가 발현됩니다.",
        en: "Strict evaluation environments trigger cognitive defenses, suppressing creative ideas.\n\nInformal tea-time environments maximize <strong>'psychological safety'</strong>. When pressure drops, divergent thinking circuits activate, surfacing bold ideas.",
        ja: "厳格な評価環境では失敗への恐れから脳が防衛モードに入り、アイデアが抑圧されます。\n\nティータイムのような水平的環境は<strong>「心理的安全性」</strong>を高め、拡散的思考（Divergent Thinking）を活性化させます。",
        zh: "在严格的评估环境中，对失败的恐惧会触发大脑的防御机制、抑制创造性想法。\n\n卢瑟福营造的非正式茶会极大地提高了大脑的<strong>“心理安全感”</strong>，激活发散性思维（Divergent Thinking）。",
        es: "Los entornos de evaluación estricta reprimen las ideas creativas.\n\nUn entorno informal de té maximiza la <strong>'seguridad psicológica'</strong>, activando el pensamiento divergente.",
        fr: "Les environnements stricts étouffent la créativité.\n\nUn cadre informel maximise la <strong>'sécurité psychologique'</strong>, activant la pensée divergente.",
        de: "Strenge Bewertungsumgebungen unterdrücken kreative Ideen.\n\nEine Tee-Routine maximiert die <strong>'psychologische Sicherheit'</strong> und aktiviert explosives Denken.",
        pt: "Ambientes estritos de avaliação reprimem ideias criativas.\n\nUm ambiente informal de chá maximiza a <strong>'segurança psicológica'</strong> e ativa o pensamento divergente.",
        id: "Lingkungan evaluasi yang ketat menekan ide kreatif.\n\nSuasana teh informal memaksimalkan <strong>'rasa aman psikologis'</strong> untuk memicu pemikiran divergen."
      },
      cautionTitle: {
        ko: "계급과 격식을 내려놓고 따뜻한 차 한 잔으로 시작하세요",
        en: "Set aside rank and start with a warm cup of tea",
        ja: "階級や形式を捨て、温かい茶一杯から始めましょう",
        zh: "放下身份与形式，从一杯温茶开始",
        es: "Deje de lado los rangos y comience con una taza de té",
        fr: "Mettez de côté la hiérarchie et commencez par un thé chaud",
        de: "Legen Sie Hierarchien ab und beginnen Sie mit Tee",
        pt: "Deixe a hierarquia de lado e comece com um chá quente",
        id: "Tanggalkan posisi dan mulailah dengan secangkir teh hangat"
      },
      cautionDesc: {
        ko: "티 타임의 목적은 업무보고나 지시가 아닙니다. 어떤 황당한 아이디어도 웃으며 논의할 수 있는 열린 유연성을 유지하는 것이 핵심입니다.",
        en: "The purpose is not work reporting. Maintaining open flexibility to laugh and discuss absurd ideas is key.",
        ja: "目的は報告ではありません。どんな突飛なアイデアも笑って議論できる柔軟性がキーです。",
        zh: "茶会的目的绝非汇报工作。保持能笑着讨论任何荒谬想法的开放与灵活才是关键。",
        es: "El objetivo no es informar. Mantener la flexibilidad para discutir cualquier idea es la clave.",
        fr: "Le but n'est pas de faire un rapport. Discuter d'idées folles avec souplesse est essentiel.",
        de: "Es geht nicht um Berichterstattung. Offenheit für verrückte Ideen ist der Schlüssel.",
        pt: "O objetivo não é relatar. Manter flexibilidade para discutir qualquer ideia é a chave.",
        id: "Tujuannya bukan laporan kerja. Menjaga fleksibilitas untuk mendiskusikan ide adalah kuncinya."
      },
      steps: [
        {
          name: {
            ko: "오후 4시 15분 차 시간 고정 설정",
            en: "Set Fixed 4 PM 15-Minute Tea Time",
            ja: "午後4時15分のティータイム設定",
            zh: "固定下午4点15分钟茶会时间",
            es: "Fijar Tiempo de Té de 15 Minutos a las 4 PM",
            fr: "Fixer un Pause Thé de 15 Min à 16h",
            de: "16 Uhr Teezeit auf 15 Min festlegen",
            pt: "Definir Pausa de Chá de 15 Minutos às 16h",
            id: "Tetapkan 15 Menit Jam 4 Sore untuk Teh"
          },
          text: {
            ko: "오후 4시 알람을 맞추고 따뜻한 차 한 잔을 가지러 이동하여 뇌의 휴식 신호를 켭니다.",
            en: "Set an alarm for 4 PM, grab a cup of tea, and switch your brain to rest mode.",
            ja: "午後4時にアラームをセットし、温かいお茶を淹れて脳の休息信号を入れます。",
            zh: "设定下午4点闹钟，沏一杯热茶，开启大脑放松信号。",
            es: "Ponga una alarma a las 4 PM, sirva una taza de té y cambie al modo de descanso.",
            fr: "Réglez une alarme à 16h, prenez un thé et basculez le cerveau en mode pause.",
            de: "Stellen Sie einen Wecker auf 16 Uhr, holen Sie sich Tee und schalten Sie um.",
            pt: "Defina um alarme para as 16h, pegue um chá e mude para o modo de descanso.",
            id: "Pasang alarm jam 4 sore, ambil secangkir teh, dan alihkan otak ke mode istirahat."
          }
        },
        {
          name: {
            ko: "격식 없는 수평적 브레인스토밍",
            en: "Informal Horizontal Brainstorming",
            ja: "形式のない水平的ブレインストーミング",
            zh: "非正式水平均衡头脑风暴",
            es: "Lluvia de Ideas Informal y Horizontal",
            fr: "Remue-Méninges Informel et Horizontal",
            de: "Informelles horizontales Brainstorming",
            pt: "Brainstorming Informal e Horizontal",
            id: "Brainstorming Informal Horizontal"
          },
          text: {
            ko: "동료와 차를 마시며 '오늘 가장 뜻밖이었던 일'이나 재미있는 아이디어를 가볍게 주고받습니다.",
            en: "Sip tea with colleagues and lightly exchange thoughts on 'the most surprising event today'.",
            ja: "同僚とお茶を飲みながら「今日最も意外だったこと」などを軽く語り合います。",
            zh: "同同事饮茶，轻松交流“今天最出乎意料的事”或有趣的构想。",
            es: "Tome té con colegas e intercambie opiniones sobre 'lo más sorprendente de hoy'.",
            fr: "Buvez un thé entre collègues et échangez sur 'la surprise de la journée'.",
            de: "Trinken Sie Tee mit Kollegen und tauschen Sie sich über 'das Übliche hinaus' aus.",
            pt: "Tome chá com colegas e troque ideias sobre 'o evento mais surpreendente de hoje'.",
            id: "Nikmati teh bersama rekan kerja dan tukar pikiran tentang hal menarik hari ini."
          }
        },
        {
          name: {
            ko: "영감 키워드 1줄 수집",
            en: "Collect 1-Line Inspiration Keyword",
            ja: "インスピレーションの1行キーワード収集",
            zh: "收集1行灵感关键词",
            es: "Recopilar 1 Línea de Palabras Clave de Inspiración",
            fr: "Capturer 1 Ligne de Mots-Clés d'Inspiration",
            de: "1 Zeile Inspiration festhalten",
            pt: "Coletar 1 Linha de Palavras-Chave de Inspiração",
            id: "Kumpulkan 1 Baris Kata Kunci Inspirasi"
          },
          text: {
            ko: "대화 중 가슴을 때리거나 새롭게 다가온 아이디어를 미팅 종료 직후 메모장에 1줄 기록합니다.",
            en: "Record a striking idea from the chat into your memo in a single line right after.",
            ja: "会話の中で得た新鮮なアイデアを、終了後ノートに1行記録します。",
            zh: "交谈结束后，将启发新思路的观点在便签上记录1行。",
            es: "Anote una idea impactante de la conversación en una sola línea justo después.",
            fr: "Notez une idée marquante de la discussion en une seule ligne juste après.",
            de: "Halten Sie eine packende Idee aus dem Gespräch in einer Zeile fest.",
            pt: "Anote uma ideia marcante da conversa em uma única linha logo após.",
            id: "Catat 1 baris ide paling berkesan di buku catatan segera setelah selesai."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "혼자 일하는 프리랜서도 이 루틴을 적용할 수 있나요?",
            en: "Can freelancers working alone apply this routine?",
            ja: "一人で working フリーランスもこのルーティンを適用できますか？",
            zh: "自由职业者一个人工作也能应用这个习惯吗？",
            es: "¿Pueden los trabajadores independientes aplicar esta rutina?",
            fr: "Les freelances travaillant seuls peuvent-ils utiliser cette routine ?",
            de: "Können Freiberufler diese Routine anwenden?",
            pt: "Freelancers trabalhando sozinhos podem aplicar esta rotina?",
            id: "Bisakah pekerja lepas mandiri menerapkan rutinitas ini?"
          },
          answer: {
            ko: "네, 오후 4시 차 한 잔을 마시며 온라인 동료 커뮤니티나 음성 통화로 10분간 아이디어를 나누거나, 노트에 스스로에게 비판적 질문을 던지는 자가 토론으로 적용할 수 있습니다.",
            en: "Yes, you can have a 10-minute voice call or online chat with peers, or write self-questioning notes.",
            ja: "はい、午後4時にお茶を飲みながらオンラインの仲間に電話したり、ノートに自問自答を書き出すことで代用できます。",
            zh: "当然可以。下午4点饮茶时，可通过语音通话与同人轻聊10分钟，或在便签上自问自答进行自我探讨。",
            es: "Sí, puede hacer una llamada de 10 minutos con colegas en línea o escribir notas de autocuestionamiento.",
            fr: "Oui, en faisant un appel de 10 minutes ou en écrivant un autodiagnostic sur un carnet.",
            de: "Ja, durch einen 10-minütigen Anruf mit Kollegen oder Selbstfragen auf einem Zettel.",
            pt: "Sim, você pode fazer uma chamada de 10 minutos com colegas ou escrever autoquestionamentos.",
            id: "Ya, Anda bisa menelepon rekan online selama 10 menit atau menulis tanya-jawab mandiri di catatan."
          }
        },
        {
          question: {
            ko: "티 타임에 수다만 떨다가 시간이 낭비될까 봐 염려됩니다.",
            en: "I'm worried time will be wasted on mere small talk.",
            ja: "雑談ばかりで時間が無駄になるのが心配です。",
            zh: "担心茶会只顾闲聊导致浪费时间怎么办？",
            es: "Me preocupa perder el tiempo en charlar sin sentido.",
            fr: "J'ai peur de perdre mon temps en bavardages.",
            de: "Ich fürchte, Zeit mit Schwatzen zu verschwenden.",
            pt: "Preocupo-me em perder tempo apenas conversando.",
            id: "Saya khawatir waktu terbuang hanya untuk mengobrol."
          },
          answer: {
            ko: "타이머를 정확히 15분으로 설정하여 시간 제한을 두면 감정적 낭비 없이 뇌에 효과적인 산소 공급과 아이디어 자극만 남길 수 있습니다.",
            en: "Setting a strict 15-minute timer ensures oxygen supply and idea stimulation without time waste.",
            ja: "タイマーを正確に15分に設定することで、時間の無駄を防ぎ効果的な刺激だけを残せます。",
            zh: "精确设定15分钟定时器，限定时间即可在不浪费时间的前提下，为大脑充氧并激发灵感。",
            es: "Poner un temporizador estricto de 15 minutos evita la pérdida de tiempo.",
            fr: "Régler un minuteur strict de 15 minutes évite toute perte de temps.",
            de: "Ein Timer auf 15 Minuten verhindert Zeitverschwendung.",
            pt: "Definir um timer estrito de 15 minutos evita perda de tempo.",
            id: "Mengeset pengatur waktu 15 menit mencegah waktu terbuang sia-sia."
          }
        }
      ]
    }
  },

  // 9. 기 드 모파상 (Guy de Maupassant)
  {
    slug: 'maupassant-rowing-reset',
    item: {
      id: 'maupassant-rowing-reset',
      name: '기 드 모파상',
      gender: 'male',
      era: '근대',
      location: '프랑스',
      lifespan: '1850 - 1893',
      birthYear: 1850,
      bio: "'비계 덩어리', '여자의 일생'을 써내어 단편 소설의 거장이라 불리는 프랑스 문학가입니다.",
      habitName: '집중적 집필 후 센강 노젓기 운동과 육체적 수영 리셋',
      tags: ['#운동', '#리셋', '#휴식', '#몰입'],
      timeOfDay: 'afternoon',
      requiredItems: ['운동화 또는 노/수영 장비'],
      frequency: 'daily',
      historicalStory: "기 드 모파상은 정교하고 섬세한 단편 소설을 쓰기 위해 지독한 정신적 고통을 겪었습니다. 그는 집중적 글쓰기를 마친 오후가 되면 강박적 정신 피로에서 벗어나기 위해 센강(Seine River)으로 나가 배를 타고 노를 젓거나 강물에 들어가 수영을 즐겼습니다. 격렬한 강도 높은 전신 유산소 운동은 그에게 문학적 열정과 스트레스 완화를 선물했습니다.",
      sciencePrinciples: "고강도 격렬한 유산소 운동(Rowing, Swimming)은 뇌유래신경영양인자(BDNF)를 급격히 분비시키고 신체에 누적된 인지적 피로와 정신적 고통을 빠르게 씻어내는 '운동 유발성 리셋' 효과를 발휘합니다.",
      quote: "노를 저어 강물을 헤쳐 나갈 때 내 뇌는 비로소 소설의 굴레에서 벗어나 완전한 자유를 느낀다.",
      trigger: "집중적인 지적 작업 후 신경계가 상기되고 머리가 지끈거릴 때",
      modernGuide: [
        "지적 업무를 마친 오후 30분간 전신을 사용하는 고강도 운동(로잉 머신, 수영, 조깅)을 진행합니다.",
        "운동 중에는 문학적 고민이나 일을 완전히 잊고 호흡과 근육의 펌핑 감각에 집중합니다.",
        "운동 후 땀을 씻어내며 신경계가 산뜻하게 리셋되는 쾌감을 느낍니다."
      ],
      actionName: "오후 30분 전신 노젓기/수영 유산소 리셋 (모파상 루틴)",
      sources: [
        "Pol Neveux, *Guy de Maupassant: Étude Scientifique* (1908)",
        "*Journal of Applied Physiology* (고강도 운동과 BDNF 분비 연구)"
      ]
    },
    translations: {
      title: {
        ko: "단편소설 거장의 머리 식히기? 기 드 모파상의 노젓기 수영 운동 루틴",
        en: "Master of Short Stories' Brain Reset? Guy de Maupassant's Rowing & Swimming Routine",
        ja: "短編小説の巨匠の脳のリセット？ギ・ド・モーパッサンのボート漕ぎ・水泳ルーティン",
        zh: "短篇小说巨匠的大脑清空法？莫泊桑的划船与游泳运动习惯",
        es: "¿El reinicio mental del maestro del relato corto? La rutina de remo y natación de Maupassant",
        fr: "Le réinitialisation du maître de la nouvelle ? La routine d'aviron et de natation de Maupassant",
        de: "Der geistige Reset des Meisters der Kurzgeschichte? Guy de Maupassants Ruder-Routine",
        pt: "O reinício mental do mestre dos contos? A rotina de remo e natação de Guy de Maupassant",
        id: "Reset Otak Maestro Cerpen? Rutinitas Mendayung & Berenang Guy de Maupassant"
      },
      description: {
        ko: "프랑스 단편 소설의 거장 기 드 모파상. 글쓰기로 지친 뇌를 센강 노젓기와 수영 운동으로 완벽하게 리셋한 강렬한 운동 루틴.",
        en: "Learn how Guy de Maupassant rowed boats on the Seine River to flush out mental fatigue and boost BDNF.",
        ja: "執筆で疲れた脳をセーヌ川のボート漕ぎや水泳で完全にリセットしたモーパッサンの運動習慣。",
        zh: "介绍短篇小说巨匠莫泊桑在写作后通过塞纳河划船与游泳彻底清空大脑、刺激BDNF分泌的强效运动习惯。",
        es: "Descubra cómo Maupassant remaba en el Sena para eliminar la fatiga mental y liberar BDNF.",
        fr: "Découvrez comment Maupassant ramait sur la Seine pour éliminer la fatigue mentale.",
        de: "Erfahren Sie, wie Maupassant auf der Seine ruderte, um kognitive Ermüdung wegzuspülen.",
        pt: "Descubra como Maupassant remava no Sena para eliminar a fadiga mental e elevar o BDNF.",
        id: "Temukan cara Maupassant mendayung perahu di Sungai Seine untuk membuang lelah mental."
      },
      authority: {
        ko: "전기 'Guy de Maupassant: Étude Scientifique' 및 Journal of Applied Physiology 학술지",
        en: "Biography 'Guy de Maupassant: Étude Scientifique' & Journal of Applied Physiology",
        ja: "評伝「Guy de Maupassant: Étude Scientifique」および Journal of Applied Physiology 学術誌",
        zh: "传记《Guy de Maupassant: Étude Scientifique》与 Journal of Applied Physiology 学术期刊",
        es: "Biografía 'Guy de Maupassant: Étude Scientifique' y Journal of Applied Physiology",
        fr: "Biographie 'Guy de Maupassant: Étude Scientifique' & Journal of Applied Physiology",
        de: "Biografie 'Guy de Maupassant: Étude Scientifique' & Journal of Applied Physiology",
        pt: "Biografia 'Guy de Maupassant: Étude Scientifique' e Journal of Applied Physiology",
        id: "Biografi 'Guy de Maupassant: Étude Scientifique' & Jurnal Journal of Applied Physiology"
      },
      intro: {
        ko: "'비계 덩어리', '여자의 일생' 등 인간 심리의 정곡을 찌르는 마스터피스를 작성하여 프랑스 단편 소설의 최고 거장으로 추앙받는 기 드 모파상. 극도의 섬세함과 영감을 요구하는 집필 작업 뒤에 찾아오는 지독한 정신적 피로와 편두통을 그는 어떻게 극복했을까요? 🚣\n\n모파상은 맹렬하게 소설을 써 내려간 후 오후가 되면 망설임 없이 센강(Seine River)으로 나가 노를 저어 배를 몰거나 강물 속에 몸을 던져 수영을 했습니다. 전신 근육을 격렬하게 움직이는 노젓기 운동은 머리에 쏠려 있던 과도한 혈류를 온몸으로 분산시키고 뇌를 완벽히 리셋해 주었습니다.\n\n오늘 BuildSelf에서는 기 드 모파상의 노젓기 유산소 루틴과 BDNF(뇌유래신경영양인자) 분비의 과학을 소개합니다.",
        en: "Guy de Maupassant, the French master of short stories. How did he overcome extreme mental fatigue after intense writing sessions? 🚣\n\nAfter intense writing sessions, Maupassant headed to the Seine River without hesitation to row boats or swim. Engaging his entire body in rowing flushed out cognitive fatigue and perfectly reset his brain.\n\nToday, BuildSelf introduces Maupassant's rowing reset routine.",
        ja: "フランス短編小説の巨匠、ギ・ド・モーパッサン。執筆作業の後に訪れる激しい精神的疲労を、彼はどう克服したのでしょうか？ 🚣\n\n小説を執筆した後、モーパッサンはセーヌ川へ出かけ、ボートを漕ぎ水泳を楽しみました。全身を動かすボート漕ぎは脳を完璧にリセットしました。\n\n今日のBuildSelfではモーパッサンのボート漕ぎリセットルーティンを紹介します。",
        zh: "被称为法国短篇小说最高巨匠的莫泊桑。在要求极度精细与灵感的创作之后，他是如何克服极其剧烈的大脑疲劳的？ 🚣\n\n在酣畅淋漓地写作后，莫泊桑在下午会毫不犹豫地走到塞纳河旁划船或游泳。动用全身肌肉的划船运动将充斥在大脑中的血液分散至全身，使大脑得到完全重置。\n\n今天，BuildSelf 将介绍莫泊桑的划船有氧重置习惯。",
        es: "Guy de Maupassant, el maestro francés del relato corto. ¿Cómo superaba la fatiga mental tras escribir? 🚣\n\nTras intensas sesiones de escritura, Maupassant iba al río Sena a remar o nadar. Mover todo el cuerpo remando reiniciaba su cerebro por completo.\n\nHoy, BuildSelf presenta la rutina de remo de Maupassant.",
        fr: "Guy de Maupassant, le maître français de la nouvelle. Comment surmontait-il la fatigue mentale ? 🚣\n\nAprès avoir écrit, Maupassant s'en allait sur la Seine pour ramer ou nager. Mobiliser tout son corps réinitialisait son cerveau.\n\nAujourd'hui, BuildSelf vous présente sa routine d'aviron réinitialisante.",
        de: "Guy de Maupassant, der Meister der Kurzgeschichte. Wie überwand er kognitive Erschöpfung? 🚣\n\nNach dem Schreiben ging Maupassant an die Seine, um zu rudern oder zu schwimmen. Die Ganzkörperbewegung setzte sein Gehirn zurück.\n\nHeute stellt BuildSelf Maupassants Ruder-Routine vor.",
        pt: "Guy de Maupassant, o mestre dos contos. Como ele superava a extrema fadiga mental? 🚣\n\nApós escrever, Maupassant ia ao rio Sena para remar ou nadar. Mover todo o corpo remando reiniciava seu cérebro por completo.\n\nHoje, o BuildSelf apresenta a rotina de remo de Maupassant.",
        id: "Guy de Maupassant, maestro cerpen Prancis. Bagaimana ia mengatasi kelelahan mental setelah menulis? 🚣\n\nSetelah menulis, Maupassant pergi ke Sungai Seine untuk mendayung perahu atau berenang. Mendorong seluruh tubuh mereset otaknya secara sempurna.\n\nHari ini, BuildSelf menyajikan rutinitas mendayung Maupassant."
      },
      whyTitle: {
        ko: "전신 유산소 운동이 유도하는 BDNF 분비와 뇌 혈류 분산",
        en: "BDNF Secretion & Brain Blood Flow Redistribution via Cardio",
        ja: "全身有酸素運動が誘導するBDNF分泌と脳血流の分散",
        zh: "全身有氧运动引发的BDNF分泌与大脑血流分散",
        es: "Secreción de BDNF y Redistribución del Flujo Sanguíneo por Cardio",
        fr: "Sécrétion de BDNF et Redistribution du Flux Sanguin par le Cardio",
        de: "BDNF-Ausschüttung & Blutflussverteilung durch Kardio",
        pt: "Secreção de BDNF e Redistribuição do Fluxo Sanguíneo por Cardio",
        id: "Sekresi BDNF & Redistribusi Aliran Darah Otak Melalui Kardio"
      },
      whyDesc: {
        ko: "집중적인 뇌 활동이 지속되면 전두엽 혈류 집중으로 오버히트와 신경계 상기 현상이 나타납니다.\n\n모파상의 노젓기처럼 전신 대근육을 사용하는 고강도 유산소 운동은 뇌유래신경영양인자(BDNF)를 촉진하고 뇌에 몰린 혈류를 신체로 분산시키는 <strong>'물리적 신경계 샤워'</strong> 역할을 합니다.",
        en: "Prolonged brain activity overheats the prefrontal cortex.\n\nFull-body intense cardio like rowing boosts <strong>BDNF (Brain-Derived Neurotrophic Factor)</strong> and redistributes brain blood flow to muscles as a physical nerve shower.",
        ja: "集中した脳 lethal 活動が続くと前頭葉がオーバーヒートします。\n\n全身を使う高強度有酸素運動は<strong>BDNF（脳由来神経栄養因子）</strong>の分泌を促し、脳の血流を全身へ分散させます。",
        zh: "持续的高强度用脑会导致前额叶充血过热、产生神经紧绷感。\n\n像莫泊桑划船那样动用全身大肌肉群的高强度有氧运动，能强效促进<strong>BDNF（脑源性神经营养因子）</strong>分泌，充当将血液分散至全身的“物理神经洗礼”。",
        es: "La actividad cerebral prolongada sobrecalienta la corteza prefrontal.\n\nEl cardio de cuerpo entero aumenta el <strong>BDNF</strong> y redistribuye el flujo sanguíneo a los músculos.",
        fr: "L'activité cérébrale prolongée surchauffe le cortex préfrontal.\n\nLe cardio intense stimule le <strong>BDNF</strong> et redistribue le flux sanguin vers les muscles.",
        de: "Lange Gehirnaktivität überhitzt den präfrontalen Kortex.\n\nGanzkörperkardio fördert <strong>BDNF</strong> und verteilt den Blutfluss in den Körper.",
        pt: "A atividade mental prolongada superaquece o córtex pré-frontal.\n\nO cardio de corpo inteiro estimula o <strong>BDNF</strong> e redistribui o fluxo sanguíneo para os músculos.",
        id: "Aktivitas otak terus-menerus memicu panas berlebih di korteks prafrontal.\n\nKardio seluruh tubuh mendorong <strong>BDNF</strong> dan meredistribusi aliran darah ke otot."
      },
      cautionTitle: {
        ko: "운동 중에는 업무 생각을 끄고 호흡과 동작에만 몰입하세요",
        en: "Turn off work thoughts during exercise and focus on rhythm",
        ja: "運動中は仕事の思考をオフにし、呼吸と動作に集中しましょう",
        zh: "运动期间切断工作思考，全身心融入呼吸与动作",
        es: "Apague los pensamientos de trabajo y concéntrese en el ritmo",
        fr: "Coupez les pensées de travail et concentrez-vous sur le mouvement",
        de: "Schalten Sie Arbeitsgedanken aus und fokussieren Sie die Bewegung",
        pt: "Desligue os pensamentos de trabalho e foque no movimento",
        id: "Matikan pikiran kerja saat berolahraga dan fokus pada irama"
      },
      cautionDesc: {
        ko: "운동하면서도 오늘 해야 할 일이나 번민을 곱씹으면 뇌 혈류 분산 효과가 반감됩니다. 근육의 수축과 호흡의 박자에만 인지를 두세요.",
        en: "Ruminating on tasks while exercising reduces blood flow distribution benefits. Focus purely on muscle contraction and breathing.",
        ja: "運動中もタスクに悩むと血流分散効果が半減します。筋肉の収縮と呼吸のペースだけに集中してください。",
        zh: "若在运动时依然反复琢磨工作，血液分散效果将大打折扣。请将注意力完全放在肌肉收缩与呼吸节奏上。",
        es: "Cavilar sobre tareas durante el ejercicio reduce los beneficios. Concéntrese en la respiración.",
        fr: "Rassasser les tâches pendant l'exercice réduit l'effet. Concentrez-vous sur le souffle.",
        de: "Grübeln während des Sports verringert den Effekt. Konzentrieren Sie sich auf die Atmung.",
        pt: "Ruminar sobre tarefas durante o exercício reduz o benefício. Foque na respiração.",
        id: "Merenungkan tugas saat berolahraga mengurangi manfaatnya. Fokuslah pada pernapasan."
      },
      steps: [
        {
          name: {
            ko: "30분 전신 유산소 운동 환경 전환",
            en: "Shift to 30-Minute Full-Body Cardio",
            ja: "30分間の全身有酸素運動環境の切り替え",
            zh: "切换至30分钟全身有氧运动环境",
            es: "Cambiar a 30 Minutos de Cardio de Cuerpo Entero",
            fr: "Passer à 30 Min de Cardio de Corps Entier",
            de: "Wechsel zu 30 Min Ganzkörperkardio",
            pt: "Mudar para 30 Minutos de Cardio de Corpo Inteiro",
            id: "Beralih ke 30 Menit Kardio Seluruh Tubuh"
          },
          text: {
            ko: "오후 집필/작업 완료 후 로잉 머신, 수영장, 혹은 한적한 야외 트랙으로 이동합니다.",
            en: "After afternoon work, move to a rowing machine, pool, or outdoor track.",
            ja: "作業終了後、ローイングマシン、プール、または屋外のコースへ移動します。",
            zh: "下午工作完成后，前往划船机、游泳池或室外跑道。",
            es: "Tras el trabajo, vaya a una máquina de remo, piscina o pista exterior.",
            fr: "Après le travail, allez au rameur, à la piscine ou sur une piste.",
            de: "Gehen Sie nach der Arbeit zum Rudergerät, Pool oder auf die Laufbahn.",
            pt: "Após o trabalho, vá para um remo ergométrico, piscina ou pista.",
            id: "Setelah bekerja, pergi ke mesin rowing, kolam renang, atau trek outdoor."
          }
        },
        {
          name: {
            ko: "리드미컬 고강도 노젓기/수영 실행",
            en: "Execute Rhythmic High-Intensity Cardio",
            ja: "リズム感のある高強度ボート漕ぎ・水泳の実行",
            zh: "执行具节奏感的高强度划船/游泳",
            es: "Ejecutar Cardio Rítmico de Alta Intensidad",
            fr: "Exécuter un Cardio Rythmé à Haute Intensité",
            de: "Rhythmisches hochintensives Kardio ausführen",
            pt: "Executar Cardio Rítmico de Alta Intensidade",
            id: "Lakukan Kardio Berirama Intensitas Tinggi"
          },
          text: {
            ko: "심박수가 올라갈 때까지 규칙적인 리듬에 맞춰 20-30분간 강렬한 유산소 운동을 수행합니다.",
            en: "Engage in intense cardio for 20-30 minutes matching a regular rhythm until heart rate rises.",
            ja: "心拍数が上がるまで規則的なリズムに合わせて20〜30分間運動を行います。",
            zh: "以规律的节奏持续进行20-30分钟高强度有氧运动，直至心率上升。",
            es: "Realice cardio intenso durante 20-30 minutos con ritmo constante.",
            fr: "Faites un cardio intense pendant 20 à 30 minutes à rythme régulier.",
            de: "Treiben Sie 20-30 Min intensiven Sport im gleichmäßigen Rhythmus.",
            pt: "Pratique cardio intenso por 20-30 minutos em ritmo constante.",
            id: "Lakukan kardio intensif selama 20-30 menit dengan irama teratur."
          }
        },
        {
          name: {
            ko: "샤워 후 산뜻한 뇌 상태 복귀",
            en: "Post-Shower Fresh Brain Recovery",
            ja: "シャワー後の爽快な脳状態の復帰",
            zh: "沐浴后爽朗大脑状态回归",
            es: "Recuperación Mental Tras la Ducha",
            fr: "Retour à l'État Frais Après la Douche",
            de: "Frischer Kopf nach der Dusche",
            pt: "Mente Renovada Após o Banho",
            id: "Kesegaran Otak Setelah Mandi"
          },
          text: {
            ko: "운동 후 따뜻한 물로 땀을 씻어내며 신경계가 산뜻하게 샤워된 쾌적함을 즐깁니다.",
            en: "Wash off sweat after exercising and enjoy the refreshed state of your reset nervous system.",
            ja: "運動後シャワーで汗を流し、神経系がリセットされた快適さを味わいます。",
            zh: "运动后温水冲洗汗水，享受神经系统如同洗礼般沉静爽朗的清爽感。",
            es: "Lávese el sudor después del ejercicio y disfrute del estado renovado de su cerebro.",
            fr: "Douchez-vous et profitez du calme retrouvé de votre système nerveux.",
            de: "Duschen Sie und genießen Sie den erfrischten Zustand Ihres Nervensystems.",
            pt: "Tome um banho e aproveite o estado renovado de seu cérebro.",
            id: "Mandi air hangat setelah berolahraga dan nikmati kesegaran sistem saraf Anda."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "노젓기나 수영을 하지 못할 경우 어떤 운동으로 대체 가능한가요?",
            en: "What exercises can replace rowing or swimming?",
            ja: "ボート漕ぎや水泳ができない場合、どんな運動で代用できますか？",
            zh: "无法划船或游泳时可以用什么运动替代？",
            es: "¿Qué ejercicios pueden reemplazar el remo o la natación?",
            fr: "Par quels exercices remplacer l'aviron ou la natation ?",
            de: "Welcher Sport kann Rudern oder Schwimmen ersetzen?",
            pt: "Quais exercícios podem substituir o remo ou natação?",
            id: "Olahraga apa yang bisa menggantikan mendayung atau berenang?"
          },
          answer: {
            ko: "상체와 하체를 동시에 쓰는 로잉 머신, 사이클 엘립티컬, 인터벌 조깅, 버피 테스트 등 전신 대근육 유산소 운동이라면 똑같은 신경계 샤워 효과를 얻을 수 있습니다.",
            en: "Elliptical machines, interval jogging, burpees, or any full-body cardio offer the same nervous system shower effect.",
            ja: "全身を使うローイングマシン、クロストレーナー、ランニング、バーピーなどでも同等の効果が得られます。",
            zh: "椭圆机、间歇慢跑、波比跳等任何动用全身大肌肉群的有氧运动都能达到同样的神经重置效果。",
            es: "Máquinas elípticas, footing por intervalos o burpees ofrecen el mismo efecto de limpieza mental.",
            fr: "Le vélo elliptique, le footing par intervalles ou les burpees offrent le même effet.",
            de: "Ellipsentrainer, Intervall-Jogging oder Burpees bieten denselben Effekt.",
            pt: "Elíptico, corrida com intervalos ou burpees oferecem o mesmo efeito de limpeza mental.",
            id: "Mesin eliptis, jogging interval, atau burpee memberikan efek pembersihan saraf yang sama."
          }
        },
        {
          question: {
            ko: "매일 고강도 운동을 하면 몸에 무리가 가지 않나요?",
            en: "Won't daily intense exercise strain the body?",
            ja: "毎日高強度の運動をすると身体に負担がかかりませんか？",
            zh: "每天进行高强度运动会不会对身体造成负担？",
            es: "¿No dañará el cuerpo el ejercicio intenso diario?",
            fr: "L'exercice quotidien intense ne va-t-il pas épuiser le corps ?",
            de: "Schadet täglicher intensiver Sport nicht dem Körper?",
            pt: "O exercício diário intenso não vai sobrecarregar o corpo?",
            id: "Apakah olahraga intensif harian tidak membebani tubuh?"
          },
          answer: {
            ko: "주 3회 고강도 유산소를 진행하고, 나머지 날에는 가벼운 산책이나 스트레칭으로 유연하게 조절하여 부상을 방지하세요.",
            en: "Do intense cardio 3 times a week, and adjust flexibly with light walks on remaining days.",
            ja: "週3回は高強度で行い、残りの日は軽い散歩やストレッチに調整してください。",
            zh: "可保持每周3次高强度有氧，其余日子调整为轻度散步或拉伸，避免运动损伤。",
            es: "Haga cardio intenso 3 veces por semana y ajuste con paseos ligeros los demás días.",
            fr: "Faites du cardio 3 fois par semaine et marchez les autres jours pour équilibrer.",
            de: "Treiben Sie 3 Mal pro Woche intensiven Sport und gehen Sie an den anderen Tagen spazieren.",
            pt: "Faça cardio intenso 3 vezes por semana e alterne com caminhadas leves.",
            id: "Lakukan kardio 3 kali seminggu, dan selingi dengan jalan santai di hari sisanya."
          }
        }
      ]
    }
  },

  // 10. 마르코 폴로 (Marco Polo)
  {
    slug: 'marco-polo-travel-journal',
    item: {
      id: 'marco-polo-travel-journal',
      name: '마르코 폴로',
      gender: 'male',
      era: '중세',
      location: '이탈리아, 베네치아',
      lifespan: '1254 - 1324',
      birthYear: 1254,
      bio: "동방견문록(동방의 서)을 집필하여 유럽에 아시아 대륙의 문화를 최초로 생생하게 알린 탐험가이자 상인입니다.",
      habitName: '실크로드 탐험 현장 감각 메모와 밤마다 일기 서술',
      tags: ['#기록', '#메모', '#창의', '#자기계발'],
      timeOfDay: 'night',
      requiredItems: ['탐험 수첩', '양피지/펜'],
      frequency: 'daily',
      historicalStory: "마르코 폴로는 베네치아를 떠나 24년간 아시아 대륙을 탐험하며 몽골 제국과 동방의 상상을 초월하는 이색 문화를 접했습니다. 그는 거친 낯선 환경 속에서도 매일 밤 촛불 아래 그날 만난 사람들의 언어, 거래품, 미식, 풍경을 상세하게 노트에 기록했습니다. 그의 현장 감각 메모 습관은 훗날 감옥에서 '동방견문록'이라는 인류 역사상 최고의 세계 탐험 문학을 탄생시켰습니다.",
      sciencePrinciples: "낯선 환경의 생생한 감각 정보(Sensory Nuances)를 일기 형태로 세밀하게 기술하면 뇌의 해마(Hippocampus)와 에피소드 기억(Episodic Memory) 신경 회로가 두꺼워져 차원 높은 에피소드 저장 능력이 구축됩니다.",
      quote: "내가 본 것의 절반도 미처 다 말하지 못했다.",
      trigger: "새로운 프로젝트를 시작하거나 낯선 환경에서 대량의 경험 지식을 내 것으로 만들고 싶을 때",
      modernGuide: [
        "외출이나 미팅, 낯선 경험이 있었던 날 밤 10분간 수첩이나 메모 앱을 엽니다.",
        "그날 경험한 낯선 장면, 독특한 인상, 오감(시각, 청각, 미각 등) 정보를 3줄로 상세히 기록합니다.",
        "기록된 에피소드를 자신의 프로젝트나 미래 아이디어의 자산으로 정돈합니다."
      ],
      actionName: "밤 10분 낯선 감각 에피소드 일기 (마르코폴로 루틴)",
      sources: [
        "Marco Polo, *The Travels of Marco Polo* (Latham translation)",
        "Laurence Bergreen, *Marco Polo: From Venice to Xanadu* (2007)"
      ]
    },
    translations: {
      title: {
        ko: "동방견문록 탐험가의 메모법? 마르코 폴로의 야간 현장 감각 일지",
        en: "Explorer's Note Secret? Marco Polo's Night Field Sensory Log Routine",
        ja: "東方見聞録の探検家のメモ術？マルコ・ポーロの夜の現場感覚日記",
        zh: "《东方见闻录》探险家的记录术？马可·波罗的夜间现场感官日志",
        es: "¿El secreto de notas del explorador? La rutina de diario sensorial de Marco Polo",
        fr: "Le secret de notes de l'explorateur ? La routine de journal de terrain de Marco Polo",
        de: "Das Notizgeheimnis des Entdeckers? Marco Polos nächtliche Sensorik-Tagebuchroutine",
        pt: "O segredo de anotações do explorador? A rotina de diário sensorial de Marco Polo",
        id: "Rahasia Catatan Penjelajah? Rutinitas Jurnal Sensorik Lapangan Malam Marco Polo"
      },
      description: {
        ko: "동방견문록의 저자 마르코 폴로. 24년간의 실크로드 탐험 속에서 밤마다 낯선 오감 감각을 기록해 인류 최고의 여행기를 남긴 현장 일지 루틴.",
        en: "Learn how Marco Polo recorded exotic sensory details nightly during 24 years of Silk Road travels to produce his timeless book.",
        ja: "24年間のシルクロード旅で、夜ごとに異国の五感を記録し歴史的名著を遺したマルコ・ポーロの習慣。",
        zh: "介绍《东方见闻录》作者马可·波罗在24年丝绸之路探险中、每晚记录异域五感细节并留下不朽名著的现场日志习惯。",
        es: "Descubra cómo Marco Polo registraba los detalles sensoriales cada noche durante sus 24 años por la Ruta de la Seda.",
        fr: "Découvrez comment Marco Polo consignait les détails sensoriels chaque soir pendant 24 ans d'exploration.",
        de: "Erfahren Sie, wie Marco Polo 24 Jahre lang jeden Abend sensorische Details auf der Seidenstraße festhielt.",
        pt: "Descubra como Marco Polo registrava os detalhes sensoriais todas as noites durante seus 24 anos de viagens.",
        id: "Temukan cara Marco Polo mencatat detail sensorik eksotis setiap malam selama 24 tahun menjelajahi Jalur Sutra."
      },
      authority: {
        ko: "고전 'The Travels of Marco Polo' 및 전기 'Marco Polo: From Venice to Xanadu'",
        en: "Classic 'The Travels of Marco Polo' & Biography 'Marco Polo: From Venice to Xanadu'",
        ja: "古典「The Travels of Marco Polo」および評伝「Marco Polo: From Venice to Xanadu」",
        zh: "名著《The Travels of Marco Polo》与传记《Marco Polo: From Venice to Xanadu》",
        es: "Clásico 'The Travels of Marco Polo' y biografía 'Marco Polo: From Venice to Xanadu'",
        fr: "Classique 'The Travels of Marco Polo' & biographie 'Marco Polo: From Venice to Xanadu'",
        de: "Klassiker 'The Travels of Marco Polo' & Biografie 'Marco Polo: From Venice to Xanadu'",
        pt: "Clássico 'The Travels of Marco Polo' e biografia 'Marco Polo: From Venice to Xanadu'",
        id: "Karya Klasik 'The Travels of Marco Polo' & Biografi 'Marco Polo: From Venice to Xanadu'"
      },
      intro: {
        ko: " 베네치아를 떠나 24년간 아시아 전역을 누비며 인류 역사상 가장 위대한 탐험 문학인 '동방견문록'을 남긴 이탈리아의 탐험가, 마르코 폴로. 몽골 제국의 황제 쿠빌라이 칸을 사로잡고 수십 년 뒤에도 동방의 미식, 지리, 문화를 마치 눈앞에서 보듯 생생하게 증언해 낸 그의 비결은 무엇이었을까요? 🐪\n\n마르코 폴로는 매일 밤 낯선 거친 탐험지에서도 양피지와 수첩을 펼쳐 그날 목격한 생소한 풍경, 낯선 향향과 언어, 시장의 거래품과 대화들을 상세히 기록했습니다. 오감의 미세한 감각 정보를 매일 밤 꼼꼼히 채록하는 습관은 그에게 압도적인 인지적 에피소드 기억 보관소를 구축해 주었습니다.\n\n오늘 BuildSelf에서는 마르코 폴로의 야간 감각 일지 루틴과 에피소드 기억의 과학을 소개합니다.",
        en: "Marco Polo, the Venetian explorer who spent 24 years traveling across Asia to produce 'The Travels of Marco Polo'. What was the secret behind his vivid memories decades later? 🐪\n\nEvery night during his journeys, Marco Polo unfolded his notebook to record exotic sights, smells, items, and languages. This nightly habit created an overwhelming repository of episodic memory.\n\nToday, BuildSelf introduces Marco Polo's night field sensory log routine.",
        ja: "24年間にわたりアジア全域を旅し「東方見聞録」を遺したマルコ・ポーロ。彼の生々しい記憶の秘密は何だったのでしょうか？ 🐪\n\n毎夜、異国の地でもメモ帳を広げ、目撃した景色や匂いを細かく記録しました。この習慣が圧倒的な記憶の保管庫を構築しました。\n\n今日のBuildSelfではマルコ・ポーロの夜の感覚日記ルーティンを紹介します。",
        zh: "离开威尼斯、历时24年游历亚洲全境并留下《东方见闻录》的探险家马可·波罗。他在数十年后仍能如数家珍般生动回忆异域细节的秘诀是什么？ 🐪\n\n即使在艰苦的探险途中，马可·波罗每晚都会展开便签，详细记录当天目睹的异域风光、风味与语言。每晚记录五感细节的习惯为他构建了强大的情景记忆库。\n\n今天，BuildSelf 将介绍马可·波罗的夜间现场感官日志习惯。",
        es: "Marco Polo, el explorador veneciano que viajó 24 años por Asia. ¿Cuál era el secreto tras sus vívidos recuerdos? 🐪\n\nCada noche durante sus viajes, desdoblaba su libreta para registrar paisajes y olores exóticos. Esta rutina creó un almacén de memoria episódica.\n\nHoy, BuildSelf presenta la rutina de diario sensorial de Marco Polo.",
        fr: "Marco Polo, l'explorateur vénitien ayant voyagé 24 ans en Asie. Quel était le secret de ses souvenirs vivaces ? 🐪\n\nChaque nuit, il ouvrait son carnet pour consigner paysages et odeurs exotiques. Cette habitude a créé un réservoir de mémoire épisodique.\n\nAujourd'hui, BuildSelf vous présente sa routine de journal de terrain.",
        de: "Marco Polo, der venezianische Entdecker. Was war das Geheimnis seiner lebendigen Erinnerungen? 🐪\n\nJeden Abend schlug er sein Notizbuch auf, um exotische Anblicke und Gerüche festzuhalten.\n\nHeute stellt BuildSelf Marco Polos nächtliche Sensorik-Tagebuchroutine vor.",
        pt: "Marco Polo, o explorador veneziano que viajou 24 anos pela Ásia. Qual era o segredo de suas memórias vívidas? 🐪\n\nTodas as noites, ele abria seu caderno para registrar paisagens e odores exóticos.\n\nHojo, o BuildSelf apresenta a rotina de diário sensorial de Marco Polo.",
        id: "Marco Polo, penjelajah Venesia yang menjelajahi Asia selama 24 tahun. Apa rahasia kenangan hidupnya? 🐪\n\nSetiap malam, ia membuka catatannya untuk merekam pemandangan dan aroma eksotis.\n\nHari ini, BuildSelf menyajikan rutinitas jurnal sensorik malam Marco Polo."
      },
      whyTitle: {
        ko: "에피소드 기억 신경 회로를 강화하는 오감 미세 채록",
        en: "Enhancing Episodic Memory Circuits via Fine Sensory Logging",
        ja: "エピソード記憶神経回路を強化する五感の微細採録",
        zh: "通过五感微观记录强化情景记忆神经回路",
        es: "Fortalecimiento de la Memoria Episódica Mediante Registro Sensorial",
        fr: "Renforcement de la Mémoire Épisodique par Prise de Notes Sensorielles",
        de: "Stärkung des episodischen Gedächtnisses durch Sensorik-Notizen",
        pt: "Fortalecimento da Memória Episódica via Registro Sensorial",
        id: "Penguatan Sirkuit Memori Episodik Melalui Pencatatan Sensorik Halus"
      },
      whyDesc: {
        ko: "일상적인 매너리즘 속에서 뇌는 익숙한 정보를 덤덤히 지워버립니다.\n\n마르코 폴로처럼 밤마다 하루 동안 겪은 낯선 장소의 시각, 청각, 미각적 세부 사항을 구체적으로 채록하는 습관은 뇌 해마의 <strong>'에피소드 기억(Episodic Memory)'</strong> 회로를 비약적으로 강화하고 인생의 경험 자산을 확장합니다.",
        en: "In daily monotony, the brain routinely erases familiar information.\n\nRecording specific sensory details of exotic places nightly dramatically strengthens <strong>episodic memory</strong> circuits in the hippocampus.",
        ja: "マンネリの中で脳は馴染みのある情報を消去してしまいます。\n\n夜に新しい場所の五感の細部を具体的に記録する習慣は、脳の<strong>「エピソード記憶」</strong>回路を飛躍的に強化します。",
        zh: "在日常的日复一日中，大脑倾向于默默擦除熟悉的信息。\n\n像马可·波罗那样每晚详细记录新异场所的视听味觉细节，能飞跃式增强大脑海马体的<strong>“情景记忆（Episodic Memory）”</strong>回路。",
        es: "La monotonía hace que el cerebro borre información familiar.\n\nRegistrar detalles sensoriales de lugares nuevos fortalece la <strong>memoria episódica</strong> en el hipocampo.",
        fr: "La monotonie pousse le cerveau à effacer l'information familière.\n\nConsigner les détails sensoriels de nouveaux lieux renforce la <strong>mémoire épisodique</strong>.",
        de: "Monotonie führt dazu, dass das Gehirn Vertrautes löscht.\n\nDas Festhalten sensorischer Details neuer Orte stärkt das <strong>episodische Gedächtnis</strong>.",
        pt: "A monotonia faz o cérebro apagar informações familiares.\n\nRegistrar detalhes sensoriais de locais novos fortalece a <strong>memória episódica</strong>.",
        id: "Monotoni harian membuat otak menghapus informasi biasa.\n\nMencatat detail sensorik tempat baru memperkuat sirkuit <strong>memori episodik</strong>."
      },
      cautionTitle: {
        ko: "추상적인 평가 대신 구체적 오감 묘사를 기록하세요",
        en: "Record concrete sensory descriptions instead of abstract evaluations",
        ja: "抽象的な評価ではなく具体的な五感の描写を記録しましょう",
        zh: "用具体五感描绘替代抽象评价",
        es: "Registre descripciones sensoriales concretas en lugar de evaluaciones",
        fr: "Consignez des descriptions sensorielles concrètes au lieu de jugements",
        de: "Notieren Sie konkrete Beschreibungen statt abstrakter Bewertungen",
        pt: "Registre descrições sensoriais concretas em vez de avaliações",
        id: "Catat deskripsi sensorik konkret daripada evaluasi abstrak"
      },
      cautionDesc: {
        ko: "'좋았다/신기했다' 대신 '향신료의 알싸한 향과 붉은 양피지의 서걱거림'처럼 감각적 묘사를 구체적으로 적어야 뇌의 해마가 생생하게 반응합니다.",
        en: "Instead of 'it was nice', write 'spicy aroma and red parchment texture' so the hippocampus responds vividly.",
        ja: "「良かった」ではなく「スパイスの香りと赤の紙の感触」のように具体的に書くことで海馬が反応します。",
        zh: "用“香料的刺鼻香味与红色羊皮纸的触感”替代“很棒/奇妙”，大脑海马体才会做出鲜活反应。",
        es: "En lugar de 'fue agradable', escriba 'aroma picante y textura de pergamino' para que el hipocampo responda.",
        fr: "Au lieu de 'c'était bien', écrivez 'arôme épicé et texture du parchemin' pour stimuler l'hippocampe.",
        de: "Statt 'es war schön' schreiben Sie 'würziger Duft und Pergamenttextur', um das Gehirn zu aktivieren.",
        pt: "Em vez de 'foi bom', anote 'aroma picante e textura de pergaminho' para atuar no hipocampo.",
        id: "Daripada 'itu menyenangkan', tulis 'aroma rempah dan tekstur perkamen' agar hipokampus merespons."
      },
      steps: [
        {
          name: {
            ko: "밤 10분 감각 일지 작성 환경 마련",
            en: "Prepare Night 10-Minute Sensory Journal Setup",
            ja: "夜10分間の感覚日記作成環境の用意",
            zh: "准备夜间10分钟感官日志环境",
            es: "Preparar Diario Sensorial Nocturno de 10 Minutos",
            fr: "Préparer un Journal Sensori-Temporel de 10 Min",
            de: "10-Minuten-Sensorik-Tagebuch vorbereiten",
            pt: "Preparar Diário Sensorial Noturno de 10 Minutos",
            id: "Siapkan Jurnal Sensorik Malam 10 Menit"
          },
          text: {
            ko: "하루를 마무리하는 밤 10분, 전자기기를 끄고 노트를 펼칩니다.",
            en: "10 minutes before bed, turn off electronic devices and open your notebook.",
            ja: "1日を締めくくる夜の10分間、電子機器を消してノートを開きます。",
            zh: "在临睡前的10分钟，关闭电子设备，打开便签本。",
            es: "10 minutos antes de dormir, apague dispositivos y abra su libreta.",
            fr: "10 minutes avant de dormir, éteignez les appareils et ouvrez votre carnet.",
            de: "10 Minuten vor dem Schlafen Geräte ausschalten und Buch öffnen.",
            pt: "10 minutos antes de dormir, desligue aparelhos e abra seu caderno.",
            id: "10 menit sebelum tidur, matikan perangkat dan buka buku catatan."
          }
        },
        {
          name: {
            ko: "3줄 오감 세부 에피소드 디테일 묘사",
            en: "Describe 3-Line Detailed Sensory Episodes",
            ja: "3行の五感詳細エピソード描写",
            zh: "3行五感详细细节描绘",
            es: "Describir Episodios Sensoriales en 3 Líneas",
            fr: "Décrire des Épisodes Sensoriels en 3 Lignes",
            de: "Detaillierte Sensorik-Episoden in 3 Zeilen",
            pt: "Descrever Episódios Sensoriais em 3 Linhas",
            id: "Uraikan Episode Sensorik Detail dalam 3 Baris"
          },
          text: {
            ko: "오늘 만난 낯선 사람, 특이한 장소, 미식의 오감 감각 디테일을 3줄로 적습니다.",
            en: "Write down 3 lines detailing sensory sights, sounds, or tastes from unfamiliar encounters today.",
            ja: "今日出会った場所、食べたもの、聴いた音の五感の詳細を3行で記録します。",
            zh: "用3行记录今天遇到的新奇场所、独特美食或声音的五感细节。",
            es: "Anote 3 líneas detallando vistas, sonidos o sabores de encuentros nuevos hoy.",
            fr: "Écrivez 3 lignes détaillant vues, sons ou goûts de vos découvertes du jour.",
            de: "Schreiben Sie 3 Zeilen mit Details zu Anblicken, Tönen oder Geschmack.",
            pt: "Anote 3 linhas detalhando visões, sons ou sabores de descobertas de hoje.",
            id: "Tuliskan 3 baris yang menguraikan pemandangan, suara, atau rasa hari ini."
          }
        },
        {
          name: {
            ko: "미래 아이디어 자산화 연결",
            en: "Link to Future Idea Assets",
            ja: "未来のアイデア資産への連結",
            zh: "关联未来灵感资产",
            es: "Vincular a Activos de Ideas Futuras",
            fr: "Lier aux Actifs d'Idées Futures",
            de: "Mit zukünftigen Ideen verknüpfen",
            pt: "Vincular a Ativos de Ideias Futuras",
            id: "Hubungkan ke Aset Ide Masa Depan"
          },
          text: {
            ko: "기록한 생생한 에피소드 감각을 자신이 추진 중인 프로젝트나 미래 경험의 자산으로 연결합니다.",
            en: "Connect the vivid episode details to your ongoing projects or future creative endeavors.",
            ja: "記録した生々しいエピソードを進行中のプロジェクトや未来のアイデアに連結します。",
            zh: "将记录的鲜活感官细节同正在推进的项目或未来的灵感资产关联起来。",
            es: "Conecte los detalles con sus proyectos actuales o futuras ideas creativas.",
            fr: "Reliez ces détails à vos projets en cours ou futures idées.",
            de: "Verknüpfen Sie die Details mit laufenden Projekten oder Ideen.",
            pt: "Conecte os detalhes aos seus projetos atuais ou futuras ideias.",
            id: "Hubungkan detail tersebut dengan proyek atau ide masa depan Anda."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "매일 똑같은 집-회사 일상인데 낯선 감각을 어떻게 찾나요?",
            en: "How can I find exotic sensations in a monotonous daily commute?",
            ja: "毎日同じ家と会社の 往復ですが、どうやって新しい感覚を見つけますか？",
            zh: "每天在“家-公司”两点一线中，该如何寻找新鲜感官？",
            es: "¿Cómo encontrar sensaciones nuevas en una rutina diaria monótona?",
            fr: "Comment trouver des sensations nouvelles dans une routine monotone ?",
            de: "Wie finde ich neue Sensorikeindrücke im gewohnten Alltag?",
            pt: "Como encontrar sensações novas numa rotina monótona?",
            id: "Bagaimana menemukan sensasi baru dalam rutinitas harian yang monoton?"
          },
          answer: {
            ko: "퇴근길 경로를 골목 하나 바꿔 걷기, 새로운 식재료 맛보기, 길가 계절 꽃의 향기에 5초간 집중하기 등 작은 미세 변주로도 충분의 낯선 오감 자극을 만들 수 있습니다.",
            en: "Change your walking route by one alley, try a new food, or smell a roadside flower for 5 seconds.",
            ja: "帰り道を一本変える、新しい食材を味わう、街 bumper の花のかおりに集中するなど、小さな変化で十分です。",
            zh: "下班时换一条小巷走、品尝一种未吃过的食材、专注闻一闻路边花朵的香味5秒等，微小的改变就能制造新奇感官。",
            es: "Cambie su ruta de regreso por un callejón, pruebe una comida nueva o huela una flor por 5 segundos.",
            fr: "Changez d'itinéraire d'une ruelle, goûtez un nouveau plat ou sentez une fleur pendant 5 secondes.",
            de: "Ändern Sie Ihren Weg um eine Gasse, probieren Sie neues Essen oder riechen Sie an einer Blume.",
            pt: "Mude sua rota de volta por uma rua diferente, provando uma comida nova ou sentindo o aroma de uma flor.",
            id: "Ubah rute jalan Anda, coba makanan baru, atau hirup aroma bunga tepi jalan selama 5 detik."
          }
        },
        {
          question: {
            ko: "일기를 쓰다 보면 글이 길어지는데 시간을 줄이는 팁이 있나요?",
            en: "What is a tip to save time when my journal entries get too long?",
            ja: "日記を書いていると文章が長くなりますが、時間を 단축するコツはありますか？",
            zh: "写日志时字数越来越长，有什么节约时间的技巧吗？",
            es: "¿Algún consejo para ahorrar tiempo si mis entradas son muy largas?",
            fr: "Un conseil pour gagner du temps si mes notes deviennent trop longues ?",
            de: "Ein Tipp zur Zeitersparnis, wenn Notizen zu lang werden?",
            pt: "Alguma dica para economizar tempo se minhas anotações ficarem longas?",
            id: "Adakah tips menghemat waktu jika tulisan jurnal terlalu panjang?"
          },
          answer: {
            ko: "문장 완성에 연연하지 말고 '시각: 붉은 노을 빛깔', '청각: 자갈 깔리는 소리'처럼 키워드 나열 방식으로 기재하면 3분 안에 완벽히 기록할 수 있습니다.",
            en: "List keywords like 'Sight: crimson sunset color', 'Sound: gravel crunching' instead of full sentences.",
            ja: "「視覚：赤い夕焼けの color」「聴覚：砂利の音」のようにキーワードを羅列すれば3分で記録できます。",
            zh: "不必拘泥于写出完整句子，按“视觉：绯红晚霞”、“听觉：碎石沙沙”等关键词列举即可在3分钟内搞定。",
            es: "Enumere palabras clave como 'Vista: atardecer carmesí' en lugar de oraciones completas.",
            fr: "Lisez des mots-clés comme 'Vue : coucher de soleil pourpre' plutôt que des phrases.",
            de: "Schreiben Sie Stichwörter wie 'Sehen: rotes Abendrot' statt ganzer Sätze.",
            pt: "Liste palavras-chave como 'Visão: pôr do sol rubro' em vez de frases completas.",
            id: "Tuliskan kata kunci seperti 'Penglihatan: senja kemerahan' daripada kalimat lengkap."
          }
        }
      ]
    }
  }
];

console.log(`8-10번 추가 실행...`);

habits8to10.forEach(data => {
  const { slug, item, translations } = data;

  const itemPath = path.join(__dirname, 'data/habits/items', `${slug}.json`);
  fs.writeFileSync(itemPath, JSON.stringify(item, null, 2), 'utf-8');
  console.log(`✅ [Item Generated] src/data/habits/items/${slug}.json`);

  const blogJsonPath = path.join(__dirname, 'data/blogs/habits', `${slug}.json`);
  const blogJsonObj = { [slug]: translations };
  fs.writeFileSync(blogJsonPath, JSON.stringify(blogJsonObj, null, 2), 'utf-8');
  console.log(`✅ [Blog Translation JSON Generated] src/data/blogs/habits/${slug}.json`);

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
});

console.log('✨ 8-10번 데이터 생성 완벽 완료!');
