import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const todayStr = '2026-07-22';

const remainingHabits = [
  // 4. 로버트 오펜하이머 (J. Robert Oppenheimer)
  {
    slug: 'oppenheimer-poetry-balance',
    item: {
      id: 'oppenheimer-poetry-balance',
      name: '로버트 오펜하이머',
      gender: 'male',
      era: '근대',
      location: '미국',
      lifespan: '1904 - 1967',
      birthYear: 1904,
      bio: "맨해튼 프로젝트의 총괄 과학자이자 이론 물리학자, 고전문학에 깊은 학식을 지닌 천재 물리학자입니다.",
      habitName: '복잡한 물리학 연구 후 산스크리트어 시 독서와 뇌 이완',
      tags: ['#휴식', '#사색', '#독서', '#인지전환'],
      timeOfDay: 'night',
      requiredItems: ['고전 시집 또는 인문학 서적'],
      frequency: 'daily',
      historicalStory: "오펜하이머는 맨해튼 프로젝트라는 인류 역사상 가장 막중한 압박감 속에서도 저녁이 되면 수식과 물리학 논문을 내려놓고 산스크리트어 고전 시집이나 시집을 읽었습니다. 그는 원어를 직접 읽기 위해 산스크리트어를 독학했으며, 인문학적 독서를 통해 과학적 집착에서 벗어나 감정의 균형과 뇌의 이완을 얻었습니다.",
      sciencePrinciples: "치열한 수리 인지 영역(좌뇌 중심) 연구 후 인문학·문학 독서(우뇌 및 감성 회로)를 수행하면 뇌의 특정 과부하 회로를 이완시키는 '이질적 인지 전환(Heterogeneous Cognitive Shift)'이 일어나 스트레스 수준을 줄입니다.",
      quote: "바가바드 기타의 구절들은 내 영혼의 안식처였다.",
      trigger: "숫자나 수식, 극심한 업무 압박으로 머리가 복잡할 때",
      modernGuide: [
        "치열한 작업이 끝난 저녁 시간 15분간 업무 관련 기기와 문서에서 완전히 이탈합니다.",
        "시집, 에세이, 서정적인 인문학 책을 펴고 서두르지 않고 문장의 감성에 온전히 몰입합니다.",
        "수치적 사고에서 벗어나 시적 이미지와 언어의 아름다움에 집중하며 뇌를 이완시킵니다."
      ],
      actionName: "야간 인문학 시 독서 이완 (오펜하이머 루틴)",
      sources: [
        "Kai Bird & Martin J. Sherwin, *American Prometheus* (2005)",
        "J. Robert Oppenheimer Papers at the Library of Congress"
      ]
    },
    translations: {
      title: {
        ko: "양자물리학자의 스트레스 해소법? 로버트 오펜하이머의 야간 시 독서 루틴",
        en: "Quantum Physicist's Stress Relief? J. Robert Oppenheimer's Night Poetry Routine",
        ja: "量子物理学者のストレス解消法？オッペンハイマーの夜の詩読書ルーティン",
        zh: "量子物理学家的解压秘诀？奥本海默的夜间诗歌阅读习惯",
        es: "¿El alivio de estrés de un físico cuántico? La rutina nocturna de poesía de Oppenheimer",
        fr: "Le soulagement du stress d'un physicien ? La routine nocturne de poésie d'Oppenheimer",
        de: "Die Stressbewältigung eines Quantenphysikers? Oppenheimers nächtliche Lyrik-Routine",
        pt: "O alívio de estresse de um físico quântico? A rotina noturna de poesia de Oppenheimer",
        id: "Cara Relaksasi Fisikawan Kuantum? Rutinitas Membaca Puisi Malam Oppenheimer"
      },
      description: {
        ko: "맨해튼 프로젝트의 수장 오펜하이머. 극심한 중압감 속에서 산스크리트어 고전시를 읽으며 뇌의 균형을 찾은 인지 이완 루틴과 실천법.",
        en: "Discover how Oppenheimer relieved extreme pressure by reading Sanskrit poetry to balance his brain.",
        ja: "極度の重圧の中でサンスクリットの古典詩を読み、脳のバランスを保ったオッペンハイマーのリセット法。",
        zh: "介绍奥本海默在极大压力下通过阅读梵文古典诗歌保持大脑平衡的认知放松习惯。",
        es: "Descubra cómo Oppenheimer aliviaba la presión leyendo poesía en sánscrito para equilibrar su cerebro.",
        fr: "Découvrez comment Oppenheimer soulageait la pression en lisant de la poésie pour équilibrer son cerveau.",
        de: "Erfahren Sie, wie Oppenheimer extremen Druck durch das Lesen von Poesie ausglich.",
        pt: "Descubra como Oppenheimer aliviava a pressão lendo poesia em sânscrito para equilibrar a mente.",
        id: "Temukan cara Oppenheimer meredakan tekanan ekstrem dengan membaca puisi Sanskerta."
      },
      authority: {
        ko: "전기 'American Prometheus' 및 미 의회도서관 사료",
        en: "Biography 'American Prometheus' & Library of Congress Archives",
        ja: "評伝「American Prometheus」および米議会図書館史料",
        zh: "传记《American Prometheus》与美国国会图书馆史料",
        es: "Biografía 'American Prometheus' y archivos de la Biblioteca del Congreso",
        fr: "Biographie 'American Prometheus' & archives de la Bibliothèque du Congrès",
        de: "Biografie 'American Prometheus' & Archive der Library of Congress",
        pt: "Biografia 'American Prometheus' e arquivos da Biblioteca do Congresso",
        id: "Biografi 'American Prometheus' & Arsip Library of Congress"
      },
      intro: {
        ko: "맨해튼 프로젝트를 이끌며 세상을 바꾼 이론 물리학자, J. 로버트 오펜하이머. 인류 역사의 거대한 기로에서 오는 극심한 중압감과 스트레스를 그는 어떻게 이겨냈을까요? 📜\n\n오펜하이머는 밤이 되면 치열한 물리학 방정식 연구를 멈추고 고전 시집이나 산스크리트어 시를 직접 원어로 읽었습니다. 수치적 계산과 이론물리학의 고도의 좌뇌 집착에서 벗어나 시적 아날로그 언어에 몰입하는 시간은 그에게 가장 완벽한 '인지적 균형 스위치'였습니다.\n\n오늘 BuildSelf에서는 오펜하이머의 야간 시 독서 루틴과 뇌 이완의 과학을 소개합니다.",
        en: "J. Robert Oppenheimer, the theoretical physicist who led the Manhattan Project. How did he handle extreme pressure? 📜\n\nEvery night, Oppenheimer stepped away from complex physics equations and read Sanskrit poetry in its original language. Immersing himself in poetic analog language served as his ultimate 'cognitive balance switch'.\n\nToday, BuildSelf introduces Oppenheimer's poetry routine.",
        ja: "マンハッタン計画を率いた理論物理学者オッペンハイマー。極度の重圧を彼はどう乗り越えたのでしょうか？ 📜\n\n夜になるとオッペンハイマーは数式から離れ、サンスクリット語の古典詩を読みました。詩的な言語に没頭する時間は彼の「認知バランススイッチ」でした。\n\n今日のBuildSelfではオッペンハイマーの詩読書ルーティンを紹介します。",
        zh: "领导曼哈顿计划的理论物理学家奥本海默。他是如何应对极大压力的？ 📜\n\n每到夜晚，奥本海默都会放下复杂的物理公式，阅读梵文诗歌。沉浸在诗意语言中是他重获平衡的“认知开关”。\n\n今天，BuildSelf 将介绍奥本海默的夜间诗歌阅读习惯。",
        es: "J. Robert Oppenheimer, el físico teórico del Proyecto Manhattan. ¿Cómo manejó la presión? 📜\n\nCada noche, Oppenheimer leía poesía en sánscrito. Sumergirse en el lenguaje poético era su 'interruptor de equilibrio cognitivo'.\n\nHoy, BuildSelf presenta la rutina de poesía de Oppenheimer.",
        fr: "J. Robert Oppenheimer, le physicien du Projet Manhattan. Comment gérait-il la pression ? 📜\n\nChaque nuit, Oppenheimer lisait de la poésie en sanskrit. S'immerger dans le langage poétique était son interrupteur d'équilibre.\n\nAujourd'hui, BuildSelf vous présente la routine de poésie d'Oppenheimer.",
        de: "J. Robert Oppenheimer, der Physiker des Manhattan-Projekts. Wie ging er mit Druck um? 📜\n\nJeden Abend las Oppenheimer Poesie auf Sanskrit. Das Eintauchen in die Poesie war sein 'kognitiver Gleichgewichtsschalter'.\n\nHeute stellt BuildSelf Oppenheimers Lyrik-Routine vor.",
        pt: "J. Robert Oppenheimer, o físico do Projeto Manhattan. Como ele lidava com a pressão? 📜\n\nTodas as noites, Oppenheimer lia poesia em sânscrito. Imergir na linguagem poética era seu 'interruptor de equilíbrio'.\n\nHoje, o BuildSelf apresenta a rotina de poesia de Oppenheimer.",
        id: "J. Robert Oppenheimer, fisikawan Proyek Manhattan. Bagaimana ia mengatasi tekanan? 📜\n\nSetiap malam, Oppenheimer membaca puisi Sanskerta. Membenamkan diri dalam bahasa puitis adalah 'sakelar keseimbangan kognitif' baginya.\n\nHari ini, BuildSelf menyajikan rutinitas puisi Oppenheimer."
      },
      whyTitle: {
        ko: "치열한 수리 인지 후 우뇌 감성 회로를 깨우는 이질적 전환",
        en: "Heterogeneous Shift Awaking Right-Brain Emotional Circuits",
        ja: "過酷な数理認知の後に右脳の感性回路を呼び覚ます異質切り替え",
        zh: "激烈的数理认知后唤醒右脑感性回路的异质转移",
        es: "Cambio Heterogéneo para Activar Circuitos Emocionales del Cerebro",
        fr: "Basculement Hétérogène Éveillant les Circuits Émotionnels",
        de: "Heterogener Wechsel zur Aktivierung emotionaler Gehirnschaltkreise",
        pt: "Mudança Heterogênea Ativando Circuitos Emocionais da Mente",
        id: "Pergeseran Heterogen Membangkitkan Sirkuit Emosional Otak"
      },
      whyDesc: {
        ko: "숫자와 알고리즘에 오랫동안 노출되면 좌뇌의 과부하로 인지 유연성이 크게 저하됩니다.\n\n오펜하이머처럼 완전히 다른 성격의 문학이나 시를 읽으면 뇌는 <strong>'이질적 인지 전환'</strong>을 경험합니다. 수리 피질의 과부하가 멈추고 우뇌 감성 피질이 활성화되면서 스트레스 호르몬 수치가 낮아집니다.",
        en: "Prolonged exposure to numbers degrades cognitive flexibility due to left-brain overload.\n\nReading poetry triggers a <strong>'heterogeneous cognitive shift'</strong>, relaxing mathematical cortex overload and lowering stress hormones.",
        ja: "数字や数式への長時間露出は、左脳の過負荷を引き起こします。\n\n詩を読むことは<strong>「異質的認知の切り替え」</strong>を引き起こし、脳のストレスを軽減します。",
        zh: "长时间接触数字会导致左脑超载、降低认知灵活性。\n\n阅读诗歌能引发<strong>“异质认知转移”</strong>，缓解数理皮层超载并降低压力。",
        es: "La exposición a números degrada la flexibilidad cognitiva por sobrecarga del cerebro izquierdo.\n\nLeer poesía desencadena un <strong>'cambio cognitivo heterogéneo'</strong> que alivia la sobrecarga.",
        fr: "L'exposition prolongée aux chiffres dégrade la flexibilité cognitive.\n\nLire de la poésie déclenche un <strong>'basculement cognitif hétérogène'</strong> soulageant la surcharge.",
        de: "Dauerhafte Beschäftigung mit Zahlen führt zu kognitiver Überlastung.\n\nDas Lesen von Poesie löst einen <strong>'heterogenen kognitiven Wechsel'</strong> aus.",
        pt: "A exposição prolongada a números degrada a flexibilidade mental.\n\nLer poesia dispara uma <strong>'mudança cognitiva heterogênea'</strong> que alivia a sobrecarga.",
        id: "Paparan terus-menerus pada angka merusak fleksibilitas kognitif.\n\nMembaca puisi memicu <strong>'pergeseran kognitif heterogen'</strong> yang meredakan stres."
      },
      cautionTitle: {
        ko: "분석하려 하지 말고 문장의 시적 감성에 몸을 맡기세요",
        en: "Do not analyze; let yourself drift in poetic rhythm",
        ja: "分析しようとせず、詩的な感性に身を委ねましょう",
        zh: "切勿试图分析，全身心融入诗意韵律",
        es: "No intente analizar; déjese llevar por el ritmo poético",
        fr: "N'analysez pas ; laissez-vous porter par le rythme poétique",
        de: "Analysieren Sie nicht; lassen Sie sich vom Rhythmus tragen",
        pt: "Não tente analisar; deixe-se levar pelo ritmo poético",
        id: "Jangan menganalisis; biarkan diri Anda larut dalam irama puitis"
      },
      cautionDesc: {
        ko: "문장의 문법이나 논리를 분석하려 들면 뇌는 다시 분석 모드로 들어갑니다. 이미지와 운율을 조용히 느껴보세요.",
        en: "Trying to analyze grammar or logic puts the brain back into analytical mode. Simply feel the images and rhythm.",
        ja: "文法や論理を分析しようとすると脳は再び分析モードに入ります。イメージと韻律を感じてみてください。",
        zh: "如果试图分析语法或逻辑，大脑会再次进入分析模式。安静感受意象与韵律即可。",
        es: "Intentar analizar la lógica vuelve a activar el modo analítico. Simplemente sienta las imágenes.",
        fr: "Chercher à analyser la logique réactive le mode analytique. Ressentez simplement les images.",
        de: "Der Versuch, Logik zu analysieren, aktiviert den Analysemodus erneut. Fühlen Sie einfach die Bilder.",
        pt: "Tentar analisar a lógica reativa o modo analítico. Apenas sinta as imagens e o ritmo.",
        id: "Mencoba menganalisis logika mengembalikan otak ke mode analitis. Cukup rasakan gambaran dan iramanya."
      },
      steps: [
        {
          name: {
            ko: "수리/업무 장비 전원 끄기",
            en: "Power Off Work Devices",
            ja: "作業機器の電源オフ",
            zh: "关闭工作设备",
            es: "Apagar Dispositivos de Trabajo",
            fr: "Éteindre les Équipements de Travail",
            de: "Arbeitsgeräte ausschalten",
            pt: "Desligar Dispositivos de Trabalho",
            id: "Matikan Perangkat Kerja"
          },
          text: {
            ko: "저녁 업무 완료 후 모니터와 엑셀, 수치 서류를 치우고 책상 환경을 전환합니다.",
            en: "After evening work, clear away monitors and spreadsheets to shift your space.",
            ja: "作業終了後、モニターや書類を片付けデスク環境を切り替えます。",
            zh: "晚间工作结束后，收起显示器与表格，切换书桌环境。",
            es: "Tras el trabajo, retire monitores y hojas de cálculo para cambiar el espacio.",
            fr: "Après le travail, rangez les écrans et documents pour changer d'espace.",
            de: "Räumen Sie nach der Arbeit Bildschirme und Unterlagen weg.",
            pt: "Após o trabalho, limpe monitores e documentos para mudar o espaço.",
            id: "Setelah bekerja, rapikan layar dan dokumen untuk mengubah suasana."
          }
        },
        {
          name: {
            ko: "15분간의 시/고전 문학 음미 독서",
            en: "15-Minute Poetic/Classic Reading",
            ja: "15分間の詩・古典文学の読書",
            zh: "15分钟诗歌/古典文学品读",
            es: "15 Minutos de Lectura Poética",
            fr: "15 Min de Lecture Poétique",
            de: "15-minütiges Lesen von Poesie",
            pt: "15 Minutos de Leitura Poética",
            id: "15 Menit Membaca Puisi/Sastra Klasik"
          },
          text: {
            ko: "시집이나 서정적 문학 책을 펴고 천천히 속으로 읊조리듯 한 문장씩 독서합니다.",
            en: "Open a poetry book and read sentence by sentence slowly as if reciting in your mind.",
            ja: "詩集を開き、ゆっくり心の中でつぶやくように1文ずつ読み進めます。",
            zh: "翻开诗集，慢条斯理、在心中朗诵般逐句阅读。",
            es: "Abra un libro de poesía y lea oración por oración lentamente.",
            fr: "Ouvrez un recueil de poésie et lisez lentement phrase par phrase.",
            de: "Öffnen Sie ein Gedichtbuch und lesen Sie langsam Satz für Satz.",
            pt: "Abra um livro de poesia e leia frase por frase lentamente.",
            id: "Buka buku puisi dan baca kalimat demi kalimat secara perlahan."
          }
        },
        {
          name: {
            ko: "여운 느끼기와 조용한 침상 이완",
            en: "Feeling Reverberation & Bedtime Relaxation",
            ja: "余韻の味わいとベッドタイムのリラックス",
            zh: "品味余韵与安静入睡",
            es: "Sensación de Resonancia y Relajación Nocturna",
            fr: "Ressenti des Échos & Relaxation au Lit",
            de: "Nachklang spüren & Nachruhe",
            pt: "Sentir a Ressonância e Relaxar para Dormir",
            id: "Merasakan Resonansi & Relaksasi Tidur"
          },
          text: {
            ko: "책을 덮은 뒤 마음에 남는 한 구절의 이미지를 떠올리며 편안하게 편안한 수면 상태로 넘어갑니다.",
            en: "After closing the book, recall a memorable image and transition into sleep comfortably.",
            ja: "本を閉じた後、心に残ったフレーズのイメージを思い浮かべながら眠りに入ります。",
            zh: "合上书本后，回味令你印象深刻的一句意象，轻松步入梦乡。",
            es: "Al cerrar el libro, recuerde una imagen memorable y pase al sueño cómodamente.",
            fr: "Après avoir fermé le livre, remémorez-vous une phrase et endormez-vous.",
            de: "Rufen Sie sich nach dem Schließen des Buches ein Bild in Erinnerung und schlafen Sie ein.",
            pt: "Ao fechar o livro, lembre-se de uma frase marcante e vá dormir com tranquilidade.",
            id: "Setelah menutup buku, ingat kembali gambaran yang berkesan dan tidurlah dengan tenang."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "시 대신 소설이나 에세이를 읽어도 똑같은 효과가 있나요?",
            en: "Does reading novels or essays have the same effect as poetry?",
            ja: "詩の代わりに小説やエッセイを読んでも同じ効果がありますか？",
            zh: "用小说或随笔替代诗歌也有同样的效果吗？",
            es: "¿Leer novelas o ensayos tiene el mismo efecto?",
            fr: "Lire des romans ou essais a-t-il le même effet ?",
            de: "Hat das Lesen von Romanen denselben Effekt?",
            pt: "Ler romances ou ensaios tem o mesmo efeito?",
            id: "Apakah membaca novel atau esai memiliki efek yang sama?"
          },
          answer: {
            ko: "네, 줄거리에 치우친 긴 소설보다는 서정성이 강한 짧은 단편이나 시, 에세이가 수치 인지 피로를 이완시키는 데 훨씬 효과적입니다.",
            en: "Yes, short lyrical poems or essays work much better for releasing numerical fatigue than long plot-heavy novels.",
            ja: "はい、筋追いに 집중する長編より、情緒豊かな短い詩やエッセイの方が効果的です。",
            zh: "是的，比起情节复杂的长篇小说，抒情色彩浓厚的短诗或随笔在缓解数理疲劳方面要有效得多。",
            es: "Sí, las poesías cortas o ensayos líricos funcionan mejor que las novelas largas.",
            fr: "Oui, la poésie courte ou les essais lyriques fonctionnent mieux que de longs romans.",
            de: "Ja, kurze lyrische Gedichte wirken besser als lange Romane mit komplexer Handlung.",
            pt: "Sim, poesias curtas ou ensaios líricos funcionam melhor do que romances longos.",
            id: "Ya, puisi pendek atau esai lirik bekerja jauh lebih baik daripada novel panjang."
          }
        },
        {
          question: {
            ko: "전자책(e-book)으로 읽는 것도 상관없나요?",
            en: "Is reading on an e-book reader fine?",
            ja: "電子書籍で読んでも問題ありませんか？",
            zh: "用电子书阅读也可以吗？",
            es: "¿Está bien leer en un libro electrónico?",
            fr: "Est-ce bon de lire sur liseuse ?",
            de: "Ist das Lesen auf einem E-Reader in Ordnung?",
            pt: "Tudo bem ler em um e-reader?",
            id: "Bolehkah membaca di e-book reader?"
          },
          answer: {
            ko: "종이책이 가장 좋지만, 프론트라이트 타입의 전자잉크 리더기라면 수면 방해 블루라이트가 적어 활용해도 좋습니다.",
            en: "Paper books are best, but front-lit e-ink readers are good alternatives as they emit less blue light.",
            ja: "紙の本がベストですが、ブルーライトの 적いE-inkリーダーであれば活用しても良いでしょう。",
            zh: "纸质书最好，但如果是发光柔和的电子墨水屏阅读器，蓝光较少也可以使用。",
            es: "Los libros de papel son mejores, pero los lectores de tinta electrónica con luz frontal son buenas alternativas.",
            fr: "Le papier est idéal, mais une liseuse à encre électronique convient très bien.",
            de: "Papierbücher sind am besten, aber E-Ink-Reader sind gute Alternativen.",
            pt: "Livros em papel são melhores, mas e-readers de tinta eletrônica são boas alternativas.",
            id: "Buku kertas paling baik, namun e-ink reader juga merupakan alternatif yang bagus."
          }
        }
      ]
    }
  },

  // 5. 클로드 드뷔시 (Claude Debussy)
  {
    slug: 'debussy-nature-listening',
    item: {
      id: 'debussy-nature-listening',
      name: '클로드 드뷔시',
      gender: 'male',
      era: '근대',
      location: '프랑스',
      lifespan: '1862 - 1918',
      birthYear: 1862,
      bio: "'달빛', '바다'를 작곡하여 인상주의 음악의 창시자로 불리는 위대한 프랑스 작곡가입니다.",
      habitName: '새벽 자연의 소리와 바람 모티프 귀 기울이기',
      tags: ['#창의', '#자연', '#휴식', '#예술'],
      timeOfDay: 'morning',
      requiredItems: ['조용한 산책 공간'],
      frequency: 'daily',
      historicalStory: "드뷔시는 악상이나 멜로디가 막힐 때 실내에 갇혀 고민하기보다 새벽녘 일찍 일어나 정원이나 숲으로 나갔습니다. 그는 나뭇잎을 스치는 바람 소리, 물방울 떨어지는 소리, 새 소리 등 자연의 미세한 음향 모티프에 온 감각을 기울였습니다. 그는 '음악은 자연이 우리에게 들려주는 비밀을 묘사하는 것'이라 믿고 자연 소리에서 인상주의 화성을 창조했습니다.",
      sciencePrinciples: "자연의 핑크 노이즈(Pink Noise)와 미세한 소리 자극은 뇌파를 알파파(Alpha waves) 상태로 전환하여 심리적 안정을 유도하고, 청각 피질의 미세 감각 인지를 다채롭게 활성화합니다.",
      quote: "바람이 스치는 소리, 하늘의 색조 변화야말로 가장 뛰어난 음악이다.",
      trigger: "창의적 표현이나 인지적 아이디어가 고갈되고 청각/시각적 감각이 무뎌졌을 때",
      modernGuide: [
        "아침 일찍 혹은 한적한 시간에 이어폰을 꼽지 않고 야외로 나갑니다.",
        "눈을 감고 5분간 바람 소리, 발걸음 소리, 멀리서 들리는 자연의 미세 음향 3가지를 구분해 듣습니다.",
        "포착한 음향적 인상을 짧은 단어나 감상으로 노트에 적습니다."
      ],
      actionName: "아침 숲/자연 소리 핑크노이즈 리스닝 (드뷔시 루틴)",
      sources: [
        "Edward Lockspeiser, *Debussy: His Life and Mind* (1962)",
        "*Nature Scientific Reports* (자연음 감상이 뇌 Alpha파와 창의 인지에 미치는 영향)"
      ]
    },
    translations: {
      title: {
        ko: "'달빛' 작곡가의 영감 비결? 클로드 드뷔시의 새벽 자연 소리 리스닝",
        en: "Composer of 'Clair de Lune'? Claude Debussy's Dawn Nature Listening Routine",
        ja: "「月の光」の作曲家のインスピレーション？ドビュッシーの早朝自然音リスニング",
        zh: "《月光》作曲家的灵感来源？克洛德·德彪西的黎明自然之声聆听习惯",
        es: "¿El secreto del compositor de 'Clair de Lune'? La rutina de escucha de la naturaleza de Debussy",
        fr: "Le secret du compositeur de 'Clair de Lune' ? La routine d'écoute de la nature de Debussy",
        de: "Das Geheimnis des Komponisten von 'Clair de Lune'? Debussys Natur-Hörroutine",
        pt: "O segredo do compositor de 'Clair de Lune'? A rotina de escuta da natureza de Debussy",
        id: "Rahasia Komposis 'Clair de Lune'? Rutinitas Mendengar Alam Fajar Claude Debussy"
      },
      description: {
        ko: "인상주의 음악의 거장 드뷔시. 새벽 숲의 바람 소리와 물소리에 귀 기울여 인류 역사상 가장 아름다운 멜로디를 만든 청각 센서리 루틴.",
        en: "Discover how Debussy listened to dawn forest sounds to create timeless impressionist music.",
        ja: "黎明の森の風の音や水の音に耳を澄ませ、美しい旋律を生み出したドビュッシーのリフレッシュ術。",
        zh: "介绍德彪西在清晨倾听森林风声与水流声、创作出流芳百世的印象派音乐的感官习惯。",
        es: "Descubra cómo Debussy escuchaba los sonidos del bosque al amanecer para crear música deslumbrante.",
        fr: "Découvrez comment Debussy écoutait les sons de la forêt à l'aube pour créer sa musique.",
        de: "Erfahren Sie, wie Debussy frühmorgens Naturgeräuschen lauschte, um Musik zu erschaffen.",
        pt: "Descubra como Debussy ouvia os sons da floresta ao amanhecer para criar músicas imortais.",
        id: "Temukan cara Debussy mendengarkan suara hutan fajar untuk menciptakan musik impresionis."
      },
      authority: {
        ko: "전기 'Debussy: His Life and Mind' 및 Nature Scientific Reports 학술지",
        en: "Biography 'Debussy: His Life and Mind' & Nature Scientific Reports",
        ja: "評伝「Debussy: His Life and Mind」および Nature Scientific Reports 学術誌",
        zh: "传记《Debussy: His Life and Mind》与 Nature Scientific Reports 学术期刊",
        es: "Biografía 'Debussy: His Life and Mind' y Nature Scientific Reports",
        fr: "Biographie 'Debussy: His Life and Mind' & Nature Scientific Reports",
        de: "Biografie 'Debussy: His Life and Mind' & Nature Scientific Reports",
        pt: "Biografia 'Debussy: His Life and Mind' e Nature Scientific Reports",
        id: "Biografi 'Debussy: His Life and Mind' & Jurnal Nature Scientific Reports"
      },
      intro: {
        ko: "'달빛', '바다'를 작곡하여 기존의 딱딱한 형식을 깨고 꿈꾸는 듯한 인상주의 음악의 시대를 연 프랑스의 거장, 클로드 드뷔시. 세상을 감동시킨 그의 독창적 화성과 멜로디는 어디서 불어왔을까요? 🌊\n\n드뷔시는 영감이 막힐 때마다 방 안에서 악보와 씨름하는 대신 새벽녘 조용히 정원이나 숲으로 나갔습니다. 그는 이어폰이나 인공적 소음이 없는 자연 속에서 나뭇잎 스치는 바람 소리, 새소리, 물방울 소리에 고요히 귀를 기울였습니다. 자연의 핑크 노이즈와 미세 음향을 경청하는 습관은 그에게 최고의 멜로디 모티프를 선물했습니다.\n\n오늘 BuildSelf에서는 드뷔시의 자연 리스닝 루틴과 청각 이완의 과학을 소개합니다.",
        en: "Claude Debussy, the French master who created 'Clair de Lune'. Where did his impressionist harmonies come from? 🌊\n\nWhenever he was blocked, Debussy walked into nature at dawn without artificial noise. Listening quietly to wind, birds, and water drop sounds was his ultimate 'sensory listening routine'.\n\nToday, BuildSelf introduces Debussy's nature listening routine.",
        ja: "「月の光」を作曲したドビュッシー。彼の独創的な和音はどこから来たのでしょうか？ 🌊\n\nアイデアが行き詰まると、ドビュッシーは早朝の自然の中へ出かけました。風の音や鳥の声に静かに耳を傾けることが彼のセンサリールーティンでした。\n\n今日のBuildSelfではドビュッシーの自然音リスニングルーティンを紹介します。",
        zh: "创作出《月光》的法国音乐巨匠德彪西。他独创的和声源于何处？ 🌊\n\n每当缺乏灵感时，德彪西都会在清晨走向自然。在没有人工噪音的自然中静静倾听风声与鸟鸣是他最好的“感官倾听习惯”。\n\n今天，BuildSelf 将介绍德彪西的自然之声聆听习惯。",
        es: "Claude Debussy, el maestro francés creador de 'Clair de Lune'. ¿De dónde venían sus armonías? 🌊\n\nCuando se bloqueaba, Debussy caminaba por la naturaleza al amanecer. Escuchar el viento y las aves era su rutina sensorial.\n\nHoy, BuildSelf presenta la rutina de escucha de la naturaleza de Debussy.",
        fr: "Claude Debussy, le maître français créateur de 'Clair de Lune'. D'où venaient ses harmonies ? 🌊\n\nQuand il bloquait, Debussy s'en allait dans la nature à l'aube pour éteindre le bruit et écouter le vent.\n\nAujourd'hui, BuildSelf vous présente la routine d'écoute de Debussy.",
        de: "Claude Debussy, der Schöpfer von 'Clair de Lune'. Woher stammten seine Harmonien? 🌊\n\nBei Denkblockaden ging Debussy im Morgengrauen in die Natur. Das Lauschen auf Wind und Wasser war seine Routine.\n\nHeute stellt BuildSelf Debussys Natur-Hörroutine vor.",
        pt: "Claude Debussy, o mestre francês criador de 'Clair de Lune'. De onde vinham suas harmonias? 🌊\n\nQuando travava, Debussy ia para a natureza ao amanhecer para ouvir o vento e os pássaros.\n\nHoje, o BuildSelf apresenta a rotina de escuta da natureza de Debussy.",
        id: "Claude Debussy, maestro Prancis pencipta 'Clair de Lune'. Dari mana harmoni indahnya berasal? 🌊\n\nSetiap kali buntu, Debussy berjalan ke alam di saat fajar untuk mendengarkan angin dan burung.\n\nHari ini, BuildSelf menyajikan rutinitas mendengar alam Debussy."
      },
      whyTitle: {
        ko: "자연의 핑크 노이즈가 유도하는 뇌파 알파(Alpha)파 전환",
        en: "Brainwave Alpha-Wave Conversion Induced by Pink Noise",
        ja: "自然のピンクノイズが誘導する脳波α波の切り替え",
        zh: "自然粉红噪音引发的大脑α波转换",
        es: "Conversión a Ondas Alfa Cerebrales Mediante Ruido Rosa Natural",
        fr: "Conversion vers les Ondes Alpha par le Bruit Rose Naturel",
        de: "Alpha-Wellen-Umwandlung des Gehirns durch Rosa Rauschen",
        pt: "Conversão para Ondas Alfa Cerebrais pelo Ruído Rosa Natural",
        id: "Konversi Gelombang Otak Alfa Melalui Pink Noise Alam"
      },
      whyDesc: {
        ko: "도시의 인공적 복잡음은 청각 신경을 피로하게 만들고 신체 긴장도를 높입니다.\n\n바람 소리, 물소리 같은 자연의 핑크 노이즈(Pink Noise)에 집중하면 뇌파가 긴장 상태의 베타파에서 편안한 <strong>'알파파(Alpha Wave)'</strong> 상태로 유도되어 직관적 유연성과 창의적 연상 능력이 크게 강화됩니다.",
        en: "Artificial urban noise fatigues auditory nerves and raises physical tension.\n\nFocusing on natural pink noise shifts brainwaves into relaxed <strong>'Alpha waves'</strong>, boosting intuitive flexibility.",
        ja: "都市の人工音は聴覚を疲弊させます。\n\n風や水の自然音（ピンクノイズ）に集中すると、脳波がリラックスした<strong>「α波」</strong>へ移行し、直感力が強化されます。",
        zh: "城市的嘈杂噪音会让听觉神经疲惫不堪。\n\n专注自然界的粉红噪音能使脑波转换为放松的<strong>“α波”</strong>，大幅增强直觉与创造力。",
        es: "El ruido urbano fatiga los nervios auditivos.\n\nEl ruido rosa natural convierte las ondas cerebrales en <strong>'ondas Alfa'</strong> relajadas, potenciando la intuición.",
        fr: "Le bruit urbain fatigue les nerfs auditifs.\n\nLe bruit rose naturel induit des <strong>'ondes Alpha'</strong> apaisantes, renforçant l'intuition.",
        de: "Städtischer Lärm ermüdet das Gehör.\n\nNaturgeräusche wandeln Gehirnwellen in <strong>'Alpha-Wellen'</strong> um und steigern die Intuition.",
        pt: "O ruído urbano fatiga os nervos auditivos.\n\nO ruído rosa natural induz <strong>'ondas Alfa'</strong> relaxantes, aumentando a intuição.",
        id: "Kebisingan kota melelahkan saraf pendengaran.\n\nFokus pada pink noise alam mengubah gelombang otak ke <strong>'Gelombang Alfa'</strong> yang santai."
      },
      cautionTitle: {
        ko: "이어폰을 빼고 자연의 미세 소리를 미분하듯 들어보세요",
        en: "Unplug earphones and listen to subtle natural sounds",
        ja: "イヤホンを外し、自然の微小な音に耳を傾けましょう",
        zh: "摘下耳机，细心微分般倾听自然的细微声音",
        es: "Desconecte los auriculares y escuche los sonidos naturales",
        fr: "Débranchez vos écouteurs et écoutez les sons subtils",
        de: "Nehmen Sie die Kopfhörer ab und lauschen Sie Naturgeräuschen",
        pt: "Tire os fones e ouça os sons sutis da natureza",
        id: "Lepas headphone dan dengarkan suara alam yang halus"
      },
      cautionDesc: {
        ko: "음악이나 팟캐스트를 듣는 대신 5분간 아무 소리도 재생하지 말고 내 주변 자연 소리 3가지를 찾아내는 감각 훈련을 진행하세요.",
        en: "Instead of playing music or podcasts, play no sound for 5 minutes and practice identifying 3 distinct natural sounds.",
        ja: "音楽を聴く代わりに5分間音を流さず、周囲の自然の音を3つ見つける訓練を行いましょう。",
        zh: "与其听音乐，不如保持5分钟沉寂，进行找出周围3种自然声音的感官训练。",
        es: "En lugar de podcasts, no reproduzca sonido durante 5 minutos e identifique 3 sonidos naturales.",
        fr: "Au lieu de podcasts, n'écoutez aucun son pendant 5 min et identifiez 3 sons de la nature.",
        de: "Spielen Sie 5 Minuten keinen Ton ab und identifizieren Sie 3 Naturgeräusche.",
        pt: "Em vez de podcasts, não toque som por 5 minutos e identifique 3 sons naturais.",
        id: "Daripada mendengarkan musik, diamlah 5 menit dan identifikasi 3 suara alam di sekitar."
      },
      steps: [
        {
          name: {
            ko: "이어폰 차단 및 자연 공간 이동",
            en: "Remove Earphones & Move Outdoors",
            ja: "イヤホンの取り外しと屋外移動",
            zh: "摘下耳机并前往户外",
            es: "Quitar Auriculares y Salir al Aire Libre",
            fr: "Retirer les Écouteurs & Sortir Dehors",
            de: "Kopfhörer abnehmen & ins Freie gehen",
            pt: "Tirar Fones e Ir para ao Ar Livre",
            id: "Lepas Headphone & Keluar Ruangan"
          },
          text: {
            ko: "아침 시간 이어폰을 벗어두고 공원이나 나무가 있는 장소로 이동합니다.",
            en: "In the morning, take off earphones and walk to a park or tree-lined space.",
            ja: "朝の時間、イヤホンを外して公園や木のある場所へ移動します。",
            zh: "清晨摘下耳机，走到公园或树木繁茂的地方。",
            es: "Por la mañana, quítese los auriculares y vaya a un parque.",
            fr: "Le matin, ôtez vos écouteurs et marchez vers un parc.",
            de: "Nehmen Sie morgens die Kopfhörer ab und gehen Sie in einen Park.",
            pt: "De manhã, tire os fones e vá a um parque ou praça.",
            id: "Di pagi hari, lepas headphone dan berjalanlah ke taman."
          }
        },
        {
          name: {
            ko: "5분간의 미세 청각 핑크노이즈 탐색",
            en: "5-Minute Auditory Sound Scanning",
            ja: "5分間の微小聴覚の音探索",
            zh: "5分钟微观听觉扫描",
            es: "5 Minutos de Exploración Auditiva",
            fr: "5 Min d'Exploration Auditive Subtile",
            de: "5-minütiges Auslauscnen der Natur",
            pt: "5 Minutos de Varredura Auditiva",
            id: "5 Menit Pemindaian Suara Pendengaran"
          },
          text: {
            ko: "눈을 감고 바람 소리, 나뭇잎 서걱거림, 멀리서 들리는 소리 3가지를 분리해 들어봅니다.",
            en: "Close your eyes and isolate 3 distinct sounds like wind, rustling leaves, or distant birds.",
            ja: "目を閉じ、風の音、葉の擦れ合う音など3つの音を分離して聴きます。",
            zh: "闭上眼睛，区分辨听风声、树叶沙沙声等3种声音。",
            es: "Cierre los ojos e aísle 3 sonidos distintos como el viento o las hojas.",
            fr: "Fermez les yeux et isolez 3 sons distincts comme le vent ou les feuilles.",
            de: "Schließen Sie die Augen und isolieren Sie 3 Geräusche wie Wind oder Blätter.",
            pt: "Feche os olhos e isole 3 sons distintos como o vento ou folhas.",
            id: "Pejamkan mata dan pisahkan 3 suara seperti angin atau dedaunan."
          }
        },
        {
          name: {
            ko: "청각적 영감 키워드 메모",
            en: "Auditory Inspiration Keyword Note",
            ja: "聴覚的インスピレーションのメモ",
            zh: "听觉灵感关键词记录",
            es: "Notas de Palabras Clave de Inspiración Auditiva",
            fr: "Notes de Mots-Clés d'Inspiration Auditive",
            de: "Notieren von Hörinhalte-Schlüsselwörtern",
            pt: "Anotar Palavras-Chave de Inspiração Auditiva",
            id: "Catatan Kata Kunci Inspirasi Pendengaran"
          },
          text: {
            ko: "자연 소리를 들으며 느껴진 청량함이나 떠오른 새로운 시상을 단어로 적습니다.",
            en: "Note down short words capturing the freshness or ideas felt while listening to natural sounds.",
            ja: "自然の音を聴いて感じた爽やかさやアイデアを言葉で書き留めます。",
            zh: "将倾听自然声音时感受到的清爽感或浮现的新构思记在便签上。",
            es: "Anote palabras cortas que capturen la frescura o ideas sentidas.",
            fr: "Notez quelques mots capturant la fraîcheur et les idées ressenties.",
            de: "Notieren Sie kurze Wörter, die Frische oder Ideen festhalten.",
            pt: "Anote palavras curtas que capturem o frescor e as ideias.",
            id: "Catat kata-kata singkat yang menggambarkan kesegaran atau ide."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "도심 한복판이라 자연 소리를 들을 공원이 없다면 어쩌죠?",
            en: "What if I live in a city center without parks?",
            ja: "公園がない都心に住んでいる場合はどうすればいいですか？",
            zh: "如果身处没有公园的市中心该怎么办？",
            es: "¿Qué hacer si vivo en una ciudad sin parques?",
            fr: "Que faire si je vis en centre-ville sans parc ?",
            de: "Was tun, wenn ich in einer Stadt ohne Park lebe?",
            pt: "O que fazer se moro no centro sem parques?",
            id: "Bagaimana jika tinggal di pusat kota tanpa taman?"
          },
          answer: {
            ko: "실제 야외가 어렵다면 창문을 열고 바람 소리에 집중하거나, 유튜브/앱의 고품질 화이트/핑크 노이즈 자연음을 5분간 집중 감상하는 것으로 대안을 삼을 수 있습니다.",
            en: "Open a window to listen to the wind or play high-quality natural pink noise audio for 5 minutes as an alternative.",
            ja: "窓を開けて風の音に集中するか、アプリで高品質な自然音（ピンクノイズ）を5分間聴くことでも代用できます。",
            zh: "开窗专注倾听风声，或在 App 中集中倾听5分钟高质量自然粉红噪音音频也是很好的替代方案。",
            es: "Abra una ventana para escuchar el viento o reproduzca audio de ruido rosa natural durante 5 minutos.",
            fr: "Ouvrez une fenêtre pour écouer le vent ou écoutez un audio de bruit rose naturel pendant 5 minutes.",
            de: "Öffnen Sie ein Fenster oder spielen Sie 5 Minuten lang hochwertiges Rosa Rauschen ab.",
            pt: "Abra uma janela para ouvir o vento ou toque um áudio de ruído rosa natural por 5 minutos.",
            id: "Buka jendela untuk mendengar angin atau putar audio pink noise alam selama 5 menit."
          }
        },
        {
          question: {
            ko: "새벽 시간이 아닌 낮에 실천해도 유효한가요?",
            en: "Is it valid to practice during the day instead of dawn?",
            ja: "早朝ではなく日中に実践しても効果がありますか？",
            zh: "在白天而不是清晨实践也有效果吗？",
            es: "¿Es válido practicarlo durante el día en lugar del amanecer?",
            fr: "Est-ce valable de le faire en journée plutôt qu'à l'aube ?",
            de: "Ist es auch tagsüber statt morgens wirksam?",
            pt: "É válido praticar durante o dia em vez do amanhecer?",
            id: "Apakah efektif dilakukan siang hari daripada fajar?"
          },
          answer: {
            ko: "네, 업무 중 청각적 과부하가 느껴질 때 5분간 외부 소음에 주의를 기울여 정적을 모티프화하는 훈련은 언제든 유효합니다.",
            en: "Yes, practicing 5 minutes of mindful listening whenever you feel auditory overload during work is always effective.",
            ja: "はい、作業中に聴覚の過負荷を感じた際、5分間意識を傾ける訓練はいつでも有効です。",
            zh: "是的，在工作中感到听觉过载时，抽出5分钟专注倾听都是非常有效的。",
            es: "Sí, practicar 5 minutos de escucha atenta cuando sienta sobrecarga durante el trabajo es siempre efectivo.",
            fr: "Oui, pratiquer 5 minutes d'écoute attentive lors d'une surcharge au travail est toujours efficace.",
            de: "Ja, 5 Minuten achtsames Lauschen bei Hörüberlastung ist jederzeit wirksam.",
            pt: "Sim, praticar 5 minutos de escuta atenta durante o trabalho é sempre eficaz.",
            id: "Ya, berlatih 5 menit mendengarkan dengan penuh kesadaran kapan pun lelah pendengaran sangat efektif."
          }
        }
      ]
    }
  }
];

console.log(`추가 ${remainingHabits.length}개 데이터 생성 중...`);

remainingHabits.forEach(data => {
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

console.log('✨ 4-5번 추가 스크립트 실행 완료!');
