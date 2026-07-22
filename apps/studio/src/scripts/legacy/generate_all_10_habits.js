import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const todayStr = '2026-07-22';

const all10Habits = [
  // 1. 오귀스트 로댕 (Auguste Rodin)
  {
    slug: 'rodin-sculpting-walk',
    item: {
      id: 'rodin-sculpting-walk',
      name: '오귀스트 로댕',
      gender: 'male',
      era: '근대',
      location: '프랑스',
      lifespan: '1840 - 1917',
      birthYear: 1840,
      bio: "'생각하는 사람', '지옥의 문'을 조각하여 근대 조각의 새로운 지평을 연 세기의 조각 거장입니다.",
      habitName: '매일 아침 찰흙 감각 훈련과 촉각적 형상화 산책',
      tags: ['#창의', '#아이디어', '#몰입', '#예술'],
      timeOfDay: 'morning',
      requiredItems: ['찰흙 덩어리', '산책로'],
      frequency: 'daily',
      historicalStory: "오귀스트 로댕은 매일 아침 작업실 근처 뫼동(Meudon)의 자연 속을 산책하며 주머니에 작은 찰흙 덩어리를 넣고 다녔습니다. 그는 걸으면서 시각적 관찰과 손가락의 촉각을 동시에 활용하여 찰흙을 주무르고 인체와 자연의 미세한 곡선을 형상화했습니다. 그는 시각만으로는 파악할 수 없는 입체적 입체감을 촉각의 몰입을 통해 완성했습니다.",
      sciencePrinciples: "손가락 끝의 미세한 운동 자극은 뇌의 운동 피질(Motor Cortex)과 체감각 피질(Somatosensory Cortex)을 강력하게 자극합니다. 시각적 유입을 미세하게 전환하고 촉각적 촉감에 집중하는 행위는 뇌의 인지적 유연성과 입체적 공간 영감을 극대화합니다.",
      quote: "자연을 깊이 관찰하라. 자연 속에 모든 해답과 예술의 본질이 들어있다.",
      trigger: "새로운 형태나 디자인, 입체적 아이디어가 필요할 때",
      modernGuide: [
        "아침 산책이나 휴식 시간에 손에 쥘 수 있는 작은 스트레스 볼이나 찰흙, 촉각 자극 도구를 준비합니다.",
        "화면을 보지 않고 걸으면서 손가락 끝의 촉각에 온전히 집중하며 자유롭게 도구를 주무릅니다.",
        "떠오르는 감각적 형태나 아이디어를 산책 직후 스케치북이나 메모에 바로 작성합니다."
      ],
      actionName: "아침 촉각 찰흙 주무르기 산책 (로댕 루틴)",
      sources: [
        "Ruth Butler, *Auguste Rodin: Art and Life* (1993)",
        "Musée Rodin Paris Archives"
      ]
    },
    translations: {
      title: {
        ko: "'생각하는 사람'의 거장? 오귀스트 로댕의 아침 찰흙 감각 산책 루틴",
        en: "Master of 'The Thinker'? Auguste Rodin's Morning Clay Tactile Walking Routine",
        ja: "「考える人」の巨匠？オーギュスト・ロダンの朝の粘土感覚散歩ルーティン",
        zh: "《思考者》的巨匠？罗丹的早晨黏土触觉散步习惯",
        es: "¿El maestro de 'El Pensador'? La rutina de caminata táctil con arcilla de Auguste Rodin",
        fr: "Le maître du 'Penseur' ? La routine de marche tactile à l'argile d'Auguste Rodin",
        de: "Der Meister des 'Denkers'? Auguste Rodins morgendliche Ton-Tast-Spaziergang-Routine",
        pt: "O mestre de 'O Pensador'? A rotina de caminhada tátil com argila de Auguste Rodin",
        id: "Master 'The Thinker'? Rutinitas Jalan Pagi & Takwil Tanah Liat Auguste Rodin"
      },
      description: {
        ko: "근대 조각의 거장 오귀스트 로댕. 매일 아침 손에 찰흙을 쥐고 걸으며 촉각적 영감을 깨웠던 그의 독창적 센서리 루틴과 3단계 실천법을 공개합니다.",
        en: "Auguste Rodin, the master of modern sculpture. Discover his sensory tactile routine of walking with clay every morning and 3 actionable steps.",
        ja: "近代彫刻の巨匠オーギュスト・ロダン。毎朝手に粘土を握って歩き、触覚的インスピレーションを呼び覚ました彼のセンサリールーティンを紹介します。",
        zh: "现代雕塑巨匠奥古斯特·罗丹。介绍他每天早晨手握黏土散步、唤醒触觉灵感的独创感官习惯及三步实践法。",
        es: "Auguste Rodin, el maestro de la escultura moderna. Descubra su rutina sensorial de caminar con arcilla cada mañana y 3 pasos prácticos.",
        fr: "Auguste Rodin, le maître de la sculpture moderne. Découvrez sa routine tactile du matin et ses 3 étapes d'application.",
        de: "Auguste Rodin, der Meister der modernen Plastik. Entdecken Sie seine morgendliche Tast-Routine mit Ton und 3 praktische Schritte.",
        pt: "Auguste Rodin, o mestre da escultura moderna. Descubra sua rotina tátil matinal com argila e 3 passos práticos.",
        id: "Auguste Rodin, master patung modern. Temukan rutinitas sensorik taktil pagi harinya dengan tanah liat dan 3 langkah praktisnya."
      },
      authority: {
        ko: "전기 'Auguste Rodin: Art and Life' 및 로댕 미술관(Musée Rodin) 보관 사료",
        en: "Biography 'Auguste Rodin: Art and Life' & Musée Rodin Archives",
        ja: "評伝「Auguste Rodin: Art and Life」およびロダン美術館（Musée Rodin）所蔵史料",
        zh: "传记《Auguste Rodin: Art and Life》与罗丹博物馆（Musée Rodin）馆藏史料",
        es: "Biografía 'Auguste Rodin: Art and Life' y archivos del Musée Rodin",
        fr: "Biographie 'Auguste Rodin: Art and Life' & archives du Musée Rodin",
        de: "Biografie 'Auguste Rodin: Art and Life' & Archive des Musée Rodin",
        pt: "Biografia 'Auguste Rodin: Art and Life' e arquivos do Musée Rodin",
        id: "Biografi 'Auguste Rodin: Art and Life' & Arsip Musée Rodin"
      },
      intro: {
        ko: "'생각하는 사람', '지옥의 문'을 창작하여 단단하고 차가운 돌과 청동에 타오르는 생명력과 우수의 감정을 불어넣은 근대 조각의 거장, 오귀스트 로댕. 인류 예술사에 획을 그은 그의 압도적 입체감과 영감은 어디서 유래했을까요? 🗿\n\n로댕은 매일 아침 작업실 주변 자연 속을 산책할 때 주머니 속에 언제나 작은 찰흙 덩어리를 가지고 나갔습니다. 그는 걸으면서 시각적 주시에만 의존하지 않고, 손가락으로 찰흙을 지긋이 주무르며 손끝의 촉각으로 자연의 인체 곡선과 미세한 질감을 형상화했습니다. 그는 시각적 착시를 넘어 촉각적 몰입을 통해 생명체의 본질적인 구조를 두뇌 속 깊이 각인했습니다.\n\n오늘 BuildSelf에서는 로댕이 실천했던 '촉각 찰흙 산책' 루틴의 감각 신경 과학적 원리와 현대인들이 창의적 영감을 깨우기 위해 이를 어떻게 활용할 수 있는지 소개합니다.",
        en: "Auguste Rodin, the master of modern sculpture who created 'The Thinker' and 'The Gates of Hell'. Where did his overwhelming 3D spatial intuition come from? 🗿\n\nEvery morning during his walks in nature near his studio, Rodin carried a small piece of clay in his pocket. Instead of relying solely on visual observation, he pressed and shaped the clay with his fingers, forming subtle textures through pure tactile immersion.\n\nToday, BuildSelf introduces the neuroscience behind Rodin's 'tactile clay walk' routine and how modern creatives can apply it.",
        ja: "「考える人」「地獄の門」を創作した近代彫刻の巨匠、オーギュスト・ロダン。彼の圧倒的な立体感とインスピレーションはどこから生まれたのでしょうか？ 🗿\n\nロダンは毎朝のアトリエ周辺の散歩の際、ポケットにいつも小さな粘土の塊を入れて出かけました。視覚だけに頼るのではなく、指先で粘土をこねながら、触覚を通じて自然の微妙な質感や曲線を形作りました。\n\n今日のBuildSelfでは、ロダンが実践した「触覚粘土散歩」ルーティンの科学的原理を紹介します。",
        zh: "创作出《思考者》《地狱之门》的现代雕塑巨匠奥古斯特·罗丹。他无与伦比的空间直觉与灵感究竟源自何处？ 🗿\n\n每天早晨散步时，罗丹口袋里总放着一小块黏土。他不仅仅依赖视觉，而是在行走时用手指按压捏捏黏土，通过触觉去感知自然的曲线与纹理。\n\n今天，BuildSelf 将介绍罗丹“触觉黏土散步”习惯背后的神经科学原理。",
        es: "Auguste Rodin, el maestro de la escultura moderna que creó 'El Pensador'. ¿De dónde provenía su abrumadora intuición espacial? 🗿\n\nCada mañana durante sus paseos por la naturaleza, Rodin llevaba un trozo de arcilla en el bolsillo. En lugar de depender solo de la vista, amasaba la arcilla con sus dedos, formando curvas a través del tacto puro.\n\nHoy, BuildSelf presenta la neurociencia detrás de la 'caminata táctil' de Rodin.",
        fr: "Auguste Rodin, le maître de la sculpture moderne créateur du 'Penseur'. D'où lui venait cette intuition spatiale ? 🗿\n\nChaque matin lors de ses marches, Rodin gardait un morceau d'argile en poche. Il le pétrissait sous ses doigts pour ressentir les formes et les textures.\n\nAujourd'hui, BuildSelf vous présente les principes neuroscientifiques de cette routine tactile.",
        de: "Auguste Rodin, der Meister der modernen Plastik, der 'Der Denker' schuf. Woher stammte seine gewaltige räumliche Intuition? 🗿\n\nJeden Morgen auf seinen Spaziergängen trug Rodin ein Stück Ton in der Tasche. Er knetete es mit den Fingern und formte die Natur nach.\n\nHeute stellt BuildSelf die Neurowissenschaft hinter Rodins Ton-Tast-Spaziergang vor.",
        pt: "Auguste Rodin, o mestre da escultura moderna criador de 'O Pensador'. De onde vinha sua incrível intuição espacial? 🗿\n\nTodas as manhãs em suas caminhadas, Rodin levava um pedaço de argila no bolso. Ele a moldava com os dedos, sentindo curvas e texturas pelo tato.\n\nHoje, o BuildSelf apresenta a neurociência por trás da caminhada tátil de Rodin.",
        id: "Auguste Rodin, master patung modern pencipta 'The Thinker'. Dari mana datangnya intuisi spasialnya? 🗿\n\nSetiap pagi saat berjalan-jalan, Rodin membawa sebongkah tanah liat di saku. Ia meremas dan membentuknya dengan jari, merasakan tekstur secara taktil.\n\nHari ini, BuildSelf menyajikan sains di balik rutinitas jalan taktil Rodin."
      },
      whyTitle: {
        ko: "체감각 피질 자극을 통한 뇌의 촉각적 입체 활성화",
        en: "Tactile Spatial Activation via Somatosensory Cortex Stimulation",
        ja: "体性感覚野刺激による脳の触覚的立体活性化",
        zh: "通过体感皮层刺激激活大脑触觉空间",
        es: "Activación Espacial Táctil Mediante Estimulación de la Corteza Somatosensorial",
        fr: "Activation Spatiale Tactile via la Stimulation du Cortex Somatosensoriel",
        de: "Taktile Raumaktivierung durch Stimulation des somatosensorischen Kortex",
        pt: "Ativação Espacial Tátil via Estimulação do Córtex Somatossensorial",
        id: "Aktivasi Spasial Taktil Melalui Stimulasi Korteks Somatosensorik"
      },
      whyDesc: {
        ko: "현대인들은 정보의 90% 이상을 모니터나 스마트폰 화면 같은 평면적 시각 자극에만 의존합니다. 그 결과 뇌의 입체적 공간 감각과 정교한 인지 유연성이 손상되기 쉽습니다.\n\n로댕이 실천한 촉각 찰흙 주무르기는 손가락의 촘촘한 신경망을 통해 뇌의 체감각 피질(Somatosensory Cortex)과 운동 피질을 직접 자극하는 강렬한 <strong>'촉각적 인지 자극'</strong>입니다. 손가락 끝의 감각에 온전히 몰입하는 동안 시각적 피로감이 해소되며, 뇌는 직관적이고 새로운 입체적 영감을 연결하는 Default Mode Network에 도달합니다.",
        en: "Modern humans rely heavily on flat visual stimuli like screens for over 90% of information. As a result, spatial intuition tends to atrophy.\n\nRodin's clay molding is an intense <strong>'tactile cognitive stimulation'</strong> that directly stimulates the somatosensory cortex and motor cortex. Focusing on tactile sensation relieves visual fatigue and enables the brain's Default Mode Network to link new spatial inspirations.",
        ja: "現代人は情報の90%以上を画面などの平面的な視覚刺激だけに頼っています。\n\nロダンが実践した粘土捏ねは、指先の緻密な神経網を通じて体性感覚野と運動野を直接刺激する強力な<strong>「触覚的認知刺激」</strong>です。触覚に没頭することで視覚的疲労が解消され、新しいインスピレーションが生まれます。",
        zh: "现代人超90%的信息依赖于屏幕等扁平视觉刺激，导致空间直觉退化。\n\n罗丹捏揉黏土的做法是一种强烈的<strong>“触觉认知刺激”</strong>，直接刺激大脑体感皮层与运动皮层。专注触觉能消除视觉疲劳，联结新的立体灵感。",
        es: "Los humanos modernos dependen en más del 90% de estímulos visuales planos. Como resultado, la intuición espacial se atrofia.\n\nEl amasado de arcilla de Rodin es una <strong>'estimulación cognitiva táctil'</strong> que estimula la corteza somatosensorial, aliviando la fatiga visual y conectando nuevas inspiraciones.",
        fr: "Les hommes modernes dépendent à plus de 90 % d'écrans plats, ce qui érode l'intuition spatiale.\n\nLe pétrissage d'argile de Rodin est une <strong>'stimulation cognitive tactile'</strong> qui stimule le cortex somatosensoriel, apaisant la fatigue visuelle.",
        de: "Moderne Menschen verlassen sich zu über 90 % auf flache visuelle Bildschirmreize.\n\nRodins Tonkneten ist eine <strong>'taktile kognitive Stimulation'</strong>, die den somatosensorischen Kortex stimuliert, visuelle Ermüdung lindert und neue Inspirationen verknüpft.",
        pt: "As pessoas modernas dependem excessivamente de telas planas, atrofiando a intuição espacial.\n\nA moldagem de argila de Rodin é uma <strong>'estimulação cognitiva tátil'</strong> que ativa o córtex somatossensorial, aliviando a fadiga visual.",
        id: "Manusia modern mengandalkan lebih dari 90% stimulasi visual layar datar.\n\nRemasan tanah liat Rodin adalah <strong>'stimulasi kognitif taktil'</strong> yang merangsang korteks somatosensorik, meredakan lelah visual dan memicu inspirasi baru."
      },
      cautionTitle: {
        ko: "시각을 끄고 손끝의 주관적 촉각에 몰입하세요",
        en: "Turn off vision and immerse in finger tactile sensations",
        ja: "視覚をオフにし、指先の手触りに集中しましょう",
        zh: "关闭视觉，沉浸于指尖的触觉感受",
        es: "Apague la vista y sumérjase en las sensaciones táctiles",
        fr: "Éteignez le visuel et immergez-vous dans le toucher",
        de: "Schalten Sie das Visuelle aus und tauchen Sie ins Taktile ein",
        pt: "Desligue o visual e mergulhe nas sensações táticas",
        id: "Matikan penglihatan dan benamkan diri pada sensasi taktil"
      },
      cautionDesc: {
        ko: "로댕에게 찰흙은 완성품을 만드는 재료이기 전에 손끝의 미세한 감각을 일깨우는 안테나였습니다. 모양을 정교하게 다듬으려 애쓰지 말고, 손끝에 느껴지는 질감과 탄성에 온전히 주의를 집중하세요.",
        en: "For Rodin, clay was an antenna to awaken subtle finger sensations before it was a crafting material. Focus on texture and elasticity.",
        ja: "ロダンにとって粘土は感覚を呼び覚ますアンテナでした。完璧な形を作ろうとせず、指先に伝わる質感と弾力に集中してください。",
        zh: "对罗丹而言，黏土首先是唤醒指尖感官的天线。不必刻意雕琢形状，将注意力完全放在纹理与弹性上即可。",
        es: "Para Rodin, la arcilla era una antena para despertar sensaciones. Concéntrese en la textura y elasticidad.",
        fr: "Pour Rodin, l'argile était une antenne réveillant les sens. Concentrez-vous sur la texture et l'élasticité.",
        de: "Für Rodin war Ton eine Antenne zur Erweckung der Sinne. Konzentrieren Sie sich auf Textur und Elastizität.",
        pt: "Para Rodin, a argila era uma antena para despertar sensações. Foque na textura e elasticidade sob os dedos.",
        id: "Bagi Rodin, tanah liat adalah antena untuk membangkitkan indra. Fokuslah pada tekstur dan elastisitasnya."
      },
      steps: [
        {
          name: {
            ko: "손 안의 촉각 도구 준비 및 디지털 차단",
            en: "Prepare Tactile Tool & Digital Detachment",
            ja: "触覚ツールの準備とデジタル遮断",
            zh: "准备手部触觉工具并断开数字连接",
            es: "Preparar Herramienta Táctil y Desconexión Digital",
            fr: "Préparer un Outil Tactile & Déconnexion Numérique",
            de: "Vorbereitung des Tastwerkzeugs & Digitale Pause",
            pt: "Preparar Ferramenta Tátil e Desconexão Digital",
            id: "Siapkan Alat Taktil & Lepas Koneksi Digital"
          },
          text: {
            ko: "손에 쏙 들어오는 소형 찰흙, 스트레스 볼, 혹은 탄성 있는 오브제를 준비합니다. 휴식 시 화면을 끄고 손에 도구를 쥡니다.",
            en: "Prepare a small piece of clay, stress ball, or tactile object that fits in your hand. Turn off screens and hold it.",
            ja: "手に収まる小さな粘土やストレスボールを用意します。休憩時に画面を消して手にとります。",
            zh: "准备小块黏土、解压球或便于抓握的触觉物体。休息时关闭屏幕并握住它。",
            es: "Prepare un trozo de arcilla o pelota antiestrés. Apague las pantallas y sosténgalo durante el descanso.",
            fr: "Préparez une petite boule d'argile ou anti-stress. Éteignez les écrans et tenez-la en main.",
            de: "Bereiten Sie ein Stück Ton oder einen Stressball vor. Schalten Sie Bildschirme aus und halten Sie es.",
            pt: "Prepare um pedaço de argila ou bola antiestresse. Desligue as telas e segure-o durante a pausa.",
            id: "Siapkan bola stres atau tanah liat kecil. Matikan layar dan pegang alat tersebut saat beristirahat."
          }
        },
        {
          name: {
            ko: "5분간의 리드미컬 촉각 롤링 산책",
            en: "5-Minute Rhythmic Tactile Rolling Walk",
            ja: "5分間のリズム触覚ローリング散歩",
            zh: "5分钟节奏触觉揉捏散步",
            es: "Paseo Rítmico de 5 Minutos Amasando",
            fr: "Marche Rythmée de 5 Min de Pétrissage",
            de: "5-minütiger Spaziergang mit taktilem Kneten",
            pt: "Caminhada Rítmica de 5 Minutos Amassando",
            id: "Jalan 5 Menit Berirama Meremas Taktil"
          },
          text: {
            ko: "천천히 걸으며 손가락 끝으로 도구를 지긋이 누르고 쥐었다 펴는 동작을 반복합니다. 촉각적 압력과 반응에 집중합니다.",
            en: "Walk slowly while repeatedly pressing and rolling the object with your fingertips, focusing on tactile pressure.",
            ja: "ゆっくり歩きながら指先でツールをこねる動作を繰り返し、触覚の me 圧と反応に集中します。",
            zh: "缓慢行走，重复用指尖按压揉捏物体，专注于触觉的压力与反弹感。",
            es: "Camine despacio presionando y amasando el objeto con los dedos, concentrándose en la presión.",
            fr: "Marchez lentement en pressant l'objet sous vos doigts, en vous concentrant sur la pression tactile.",
            de: "Gehen Sie langsam und kneten Sie das Objekt mit den Fingern, während Sie sich auf den Druck konzentrieren.",
            pt: "Caminhe devagar pressionando o objeto com as pontas dos dedos, focando na pressão tátil.",
            id: "Berjalanlah perlahan sambil meremas objek dengan ujung jari, berfokus pada tekanan taktilnya."
          }
        },
        {
          name: {
            ko: "직관적 입체 영감 스케치",
            en: "Intuitive Spatial Inspiration Sketching",
            ja: "直感的立体インスピレーションのスケッチ",
            zh: "直觉立体灵感草记",
            es: "Boceto Intuitivo de Inspiración Espacial",
            fr: "Croquis d'Inspiration Intuitif",
            de: "Intuitives Skizzieren räumlicher Ideen",
            pt: "Esboço Intuitivo de Inspiração Espacial",
            id: "Sketsa Inspirasi Spasial Intuitif"
          },
          text: {
            ko: "산책 직후 손에 남은 감각과 함께 머릿속에 떠오른 새로운 구조나 아이디어를 거칠게 메모지에 기록합니다.",
            en: "Right after the walk, roughly record new ideas or structural images that came to mind alongside the tactile residue.",
            ja: "散歩の直後、手に残った感覚とともに頭に浮かんだ新しい構造やアイデアをノートに書き留めます。",
            zh: "散步结束后，结合手部留存的感官记忆，在便签上粗略记录脑海中浮现的新构思。",
            es: "Justo después del paseo, anote de forma rápida las nuevas ideas o estructuras que surjan en su mente.",
            fr: "Juste après la marche, notez rapidement sur papier les idées et structures apparues dans votre esprit.",
            de: "Halten Sie direkt nach dem Spaziergang neue Ideen oder Strukturen grob auf einem Zettel fest.",
            pt: "Logo após a caminhada, anote rapidamente as novas ideias ou estruturas que surgirem na mente.",
            id: "Segera setelah berjalan, catat secara kasar struktur atau ide baru yang muncul di pikiran Anda."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "찰흙 대신 사용할 수 있는 현대적 오브제는 무엇인가요?",
            en: "What modern objects can be used instead of clay?",
            ja: "粘土の代わりに使用できる現代的なオブジェクトは何ですか？",
            zh: "有什么现代替代品可以取代黏土？",
            es: "¿Qué objetos modernos se pueden usar en lugar de arcilla?",
            fr: "Quels objets modernes utiliser à la place de l'argile ?",
            de: "Welche modernen Objekte kann man anstelle von Ton verwenden?",
            pt: "Quais objetos modernos podem ser usados em vez de argila?",
            id: "Objek modern apa yang bisa digunakan sebagai pengganti tanah liat?"
          },
          answer: {
            ko: "실리콘 스트레스 볼, 핑거 피젯 큐브, 미니 칼림바, 혹은 부드러운 원목 매끄러운 돌맹이 등 촉각 자극이 풍부한 모든 소품이 훌륭한 대안입니다.",
            en: "Silicone stress balls, finger fidget cubes, smooth wooden stones, or tactile tools work as great alternatives.",
            ja: "シリコンストレスボール、フィジェットキューブ、滑らかな木製の石など、触覚刺激の豊かなものが優れた代替品になります。",
            zh: "硅胶解压球、指尖魔方、光滑的木质或石质小物件等富含触觉刺激的物品都是极佳选择。",
            es: "Pelotas de silicona antiestrés, cubos fidget o piedras de madera pulida son excelentes alternativas.",
            fr: "Balles anti-stress en silicone, fidget cubes ou pierres en bois lisses sont d'excellentes alternatives.",
            de: "Silikon-Stressbälle, Fidget Cubes oder glatte Holzsteine sind hervorragende Alternativen.",
            pt: "Bolas antiestresse de silicone, fidget cubes ou pedras de madeira lisas são ótimas alternativas.",
            id: "Bola stres silikon, fidget cube, atau batu kayu halus adalah alternatif yang sangat baik."
          }
        },
        {
          question: {
            ko: "손가락 촉각 자극이 어떻게 창의성을 높이나요?",
            en: "How does finger tactile stimulation boost creativity?",
            ja: "指先の触覚刺激がどのように創造性を高めますか？",
            zh: "手指触觉刺激如何提升创造力？",
            es: "¿Cómo aumenta la creatividad la estimulación táctil de los dedos?",
            fr: "Comment le toucher des doigts stimule-t-il la créativité ?",
            de: "Wie steigert taktile Fingerstimulation die Kreativität?",
            pt: "Como a estimulação tátil dos dedos aumenta a criatividade?",
            id: "Bagaimana stimulasi taktil jari meningkatkan kreativitas?"
          },
          answer: {
            ko: "손은 뇌의 운동/감각 피질에서 가장 넓은 면적을 차지합니다. 손가락을 정교하게 자극하면 평소 쓰지 않던 뇌 신경 회로가 활성화되어 아이디어 연상이 촉진됩니다.",
            en: "The hands occupy the largest area in the brain's sensory cortex. Fine finger stimulation activates unused neural pathways and fosters associations.",
            ja: "手は脳の感覚野で最も広い面積を占めています。指先を繊細に刺激することで、普段使われていない神経回路が活性化され連想が促されます。",
            zh: "双手在大脑感觉皮层中占有最大面积。精细刺激手指能激活未常用的神经回路，促进灵感联想。",
            es: "Las manos ocupan la mayor área en la corteza sensorial. Estimular los dedos activa vías neuronales no usadas y fomenta la asociación.",
            fr: "Les mains occupent la plus grande surface du cortex sensoriel. Les stimuler active des réseaux neuronaux inexploités et stimule l'association.",
            de: "Die Hände belegen das größte Areal im somatosensorischen Kortex. Ihre Stimulation aktiviert ungenutzte Bahnen und fördert Ideen.",
            pt: "As mãos ocupam a maior área no córtex sensorial. Estimular os dedos ativa vias neuronais não usadas e promove associações.",
            id: "Tangan menempati area terluas di korteks sensorik otak. Merangsang jari mengaktifkan jalur saraf baru dan memicu asosiasi ide."
          }
        }
      ]
    }
  },

  // 2. 알베르트 슈바이처 (Albert Schweitzer)
  {
    slug: 'schweitzer-night-organ',
    item: {
      id: 'schweitzer-night-organ',
      name: '알베르트 슈바이처',
      gender: 'male',
      era: '근대',
      location: '독일, 가봉',
      lifespan: '1875 - 1965',
      birthYear: 1875,
      bio: "노벨 평화상을 수상한 의사이자 철학자, 바흐 연구의 권위자이자 오르가니스트입니다.",
      habitName: '매일 밤 바흐 오르간 연주를 통한 정서적 리셋과 의료일지 정리',
      tags: ['#휴식', '#사색', '#안정', '#스트레스 해소', '#이완'],
      timeOfDay: 'night',
      requiredItems: ['건반 악기 또는 악보', '일기장'],
      frequency: 'daily',
      historicalStory: "알베르트 슈바이처 박사는 아프리카 람바레네의 덥고 열악한 밀림 병원에서 온종일 환자를 진료한 후, 매일 밤 피곤함 속에서도 특수 제작된 페달 피아노에 앉아 바흐의 곡을 연주했습니다. 그는 오르간 멜로디에 몰입하여 심신을 안정시키고 의료 일지를 정리하며 고도의 정신적 리셋을 이루었습니다.",
      sciencePrinciples: "음악 치료학 연구에 따르면 60-80BPM의 구조화된 클래식 멜로디 연주는 부교감 신경계를 활성화하여 스트레스 호르몬인 코르티솔 부하를 낮추고 심박 변이도(HRV)를 개선하여 심신 리셋을 유도합니다.",
      quote: "삶의 번민에서 벗어나는 두 가지 안식처가 있다. 음악과 고양이다.",
      trigger: "하루의 업무를 마치고 누적된 피로와 스트레스를 정돈하고 싶을 때",
      modernGuide: [
        "취침 1시간 전 스마트폰과 모니터를 차단합니다.",
        "잔잔한 오르간이나 클래식 연주 음악을 듣거나 건반 악기를 15분간 가볍게 연주합니다.",
        "마음이 편안해진 상태에서 오늘 하루의 일과와 감사한 점을 간단히 기록합니다."
      ],
      actionName: "밤 15분 연주 음악 감상 & 일지 리셋 (슈바이처 루틴)",
      sources: [
        "Albert Schweitzer, *Out of My Life and Thought* (1933)",
        "*Journal of Music Therapy* (음악 연주가 자율신경계 안정에 미치는 영향)"
      ]
    },
    translations: {
      title: {
        ko: "노벨 평화상 수상자의 야간 리셋? 알베르트 슈바이처의 밤 오르간 루틴",
        en: "Nobel Peace Prize Winner's Nightly Reset? Albert Schweitzer's Night Organ Routine",
        ja: "ノーベル平和賞受賞者の夜のリセット？アルベルト・シュヴァイツァーの夜のオルガンルーティン",
        zh: "诺贝尔和平奖得主的夜间重置？阿尔贝特·施韦泽的夜间风琴习惯",
        es: "¿El reinicio nocturno de un Premio Nobel de la Paz? La rutina de órgano nocturno de Albert Schweitzer",
        fr: "Le réinitialisation nocturne d'un Prix Nobel ? La routine d'orgue nocturne d'Albert Schweitzer",
        de: "Der nächtliche Reset eines Friedensnobelpreisträgers? Albert Schweitzers Orgel-Routine",
        pt: "O reinício noturno de um Prêmio Nobel da Paz? A rotina de órgão noturno de Albert Schweitzer",
        id: "Reset Malam Peraih Nobel Perdamaian? Rutinitas Organ Malam Albert Schweitzer"
      },
      description: {
        ko: "아프리카 밀림 병원에서 매일 밤 바흐의 오르간을 연주하며 극심한 피로를 극복한 알베르트 슈바이처 박사의 자율신경계 리셋 습관과 실천 가이드.",
        en: "Discover how Dr. Albert Schweitzer played Bach's organ nightly in the African jungle to reset his nervous system.",
        ja: "アフリカのジャングル病院で毎夜バッハのオルガンを演奏し、極度の疲労を克服したシュヴァイツァー博士のリセット習慣。",
        zh: "介绍施韦泽博士在非洲丛林医院每天夜晚弹奏巴赫风琴、克服极度疲劳的大脑重置习惯。",
        es: "Descubra cómo el Dr. Schweitzer tocaba el órgano de Bach cada noche en la selva para reiniciar su sistema nervioso.",
        fr: "Découvrez comment le Dr Schweitzer jouait de l'orgue chaque nuit dans la jungle pour réinitialiser son système nerveux.",
        de: "Erfahren Sie, wie Dr. Schweitzer jeden Abend im Dschungel Bachs Orgel spielte, um sein Nervensystem zurückzusetzen.",
        pt: "Descubra como o Dr. Schweitzer tocava órgão todas as noites na selva para reiniciar seu sistema nervoso.",
        id: "Temukan bagaimana Dr. Schweitzer memainkan organ Bach setiap malam di hutan Afrika untuk mereset sistem sarafnya."
      },
      authority: {
        ko: "슈바이처 자서전 'Out of My Life and Thought' 및 Journal of Music Therapy 학술지",
        en: "Autobiography 'Out of My Life and Thought' & Journal of Music Therapy",
        ja: "自伝「Out of My Life and Thought」およびJournal of Music Therapy学術誌",
        zh: "自传《Out of My Life and Thought》与 Journal of Music Therapy 学术期刊",
        es: "Autobiografía 'Out of My Life and Thought' y Journal of Music Therapy",
        fr: "Autobiographie 'Out of My Life and Thought' & Journal of Music Therapy",
        de: "Autobiografie 'Out of My Life and Thought' & Journal of Music Therapy",
        pt: "Autobiografia 'Out of My Life and Thought' e Journal of Music Therapy",
        id: "Biografi 'Out of My Life and Thought' & Jurnal Journal of Music Therapy"
      },
      intro: {
        ko: "노벨 평화상 수상자이자 헌신적인 의사, 철학자, 그리고 바흐 연구의 세계적 권위자였던 알베르트 슈바이처 박사. 아프리카 람바레네의 고온 다습한 밀림 속에서 환자들을 돌보며 직면했던 극심한 육체적, 정신적 피로를 그는 어떻게 매일 이겨냈을까요? 🎹\n\n슈바이처 박사는 헌신적인 진료를 마친 고단한 밤마다 밀림 속에 마련된 페달 피아노에 앉아 바흐의 곡을 조용히 연주했습니다. 웅장하고 질서 정연한 바흐의 음악 선율에 몰입하는 시간은 그에게 지친 심신을 안정시키고 감정적 고갈을 방지하는 최고의 '신경계 리셋 루틴'이었습니다.\n\n오늘 BuildSelf에서는 슈바이처 박사의 밤 오르간 연주 루틴에 담긴 자율신경계 이완의 과학을 소개합니다.",
        en: "Dr. Albert Schweitzer, Nobel Peace Prize winner, devoted physician, philosopher, and Bach scholar. How did he overcome extreme physical fatigue in the humid African jungle? 🎹\n\nEvery night, Dr. Schweitzer sat at a pedal piano built for the tropics and played Bach's music. Immersing himself in orderly melodies served as his ultimate 'nervous system reset routine'.\n\nToday, BuildSelf presents the science of autonomic nervous system relaxation behind Dr. Schweitzer's organ routine.",
        ja: "ノーベル平和賞受賞者であり医師、哲学者であったアルベルト・シュヴァイツァー博士。熱帯のジャングルで直面した極度の疲労を、彼はどのように克服したのでしょうか？ 🎹\n\n診療を終えた夜、シュヴァイツァー博士はペダルピアノに向かい、バッハの曲を演奏しました。秩序ある旋律に没頭する時間は、疲れた心身を安定させる「神経系リセットルーティン」でした。\n\n今日のBuildSelfでは、シュヴァイツァー博士の夜のオルガン演奏ルーティンを紹介します。",
        zh: "诺贝尔和平奖得主、大夫、哲学家阿尔贝特·施韦泽博士。在非洲炎热的丛林中，他是如何克服极度疲劳的？ 🎹\n\n每当工作结束后，施韦泽博士都会坐在弹奏巴赫的乐曲。沉浸在秩序井然的旋律中，成为了他稳定身心的“神经系统重置习惯”。\n\n今天，BuildSelf 将为您介绍施韦泽博士夜间风琴习惯背后的科学。",
        es: "El Dr. Albert Schweitzer, Premio Nobel de la Paz, médico y filósofo. ¿Cómo superó el agotamiento físico en la selva africana? 🎹\n\nCada noche, el Dr. Schweitzer se sentaba al piano y tocaba a Bach. Sumergirse en esas melodías era su rutina de 'reinicio del sistema nervioso'.\n\nHoy, BuildSelf presenta la ciencia tras la rutina del Dr. Schweitzer.",
        fr: "Le Dr Albert Schweitzer, Prix Nobel de la Paix et médecin. Comment surmontait-il l'épuisement dans la jungle africaine ? 🎹\n\nChaque nuit, le Dr Schweitzer jouait du Bach au piano. Cette immersion était sa routine ultime de réinitialisation nerveuse.\n\nAujourd'hui, BuildSelf vous dévoile la science de cette relaxation nocturne.",
        de: "Dr. Albert Schweitzer, Friedensnobelpreisträger und Arzt. Wie überwand er die extreme Erschöpfung im afrikanischen Dschungel? 🎹\n\nJeden Abend setzte sich Dr. Schweitzer ans Klavier und spielte Bach. Diese Melodien dienten ihm als 'Nervensystem-Reset'.\n\nHeute zeigt BuildSelf die Wissenschaft hinter Dr. Schweitzers nächtlicher Routine.",
        pt: "O Dr. Albert Schweitzer, Prêmio Nobel da Paz e médico. Como ele superou a extrema fadiga na selva africana? 🎹\n\nTodas as noites, o Dr. Schweitzer tocava Bach no piano. Essa imersão era sua rotina de 'reinicio do sistema nervoso'.\n\nHoje, o BuildSelf apresenta a ciência por trás da rotina do Dr. Schweitzer.",
        id: "Dr. Albert Schweitzer, peraih Nobel Perdamaian dan dokter. Bagaimana ia mengatasi kelelahan ekstrem di hutan Afrika? 🎹\n\nSetiap malam, Dr. Schweitzer memainkan musik Bach di piano. Membenamkan diri dalam melodi adalah rutinitas 'reset sistem saraf'.\n\nHari ini, BuildSelf menyajikan sains relaksasi di balik rutinitas Dr. Schweitzer."
      },
      whyTitle: {
        ko: "구조화된 클래식 음률이 유도하는 부교감 신경 활성화",
        en: "Parasympathetic Activation Induced by Structured Classical Harmonies",
        ja: "構造化されたクラシック音律が誘導する副交感神経活性化",
        zh: "结构化古典音律引发的副交感神经激活",
        es: "Activación Parasimpática Inducida por Armonías Clásicas Estructuradas",
        fr: "Activation Parasympathique Induite par des Harmonies Classiques",
        de: "Parasympathische Aktivierung durch strukturierte klassische Harmonien",
        pt: "Ativação Parassimpática Induzida por Harmonias Clássicas Estruturadas",
        id: "Aktivasi Parasimpatik Melalui Harmoni Klasik Terstruktur"
      },
      whyDesc: {
        ko: "낮 동안의 과도한 스트레스는 교감 신경(Sympathetic Nervous System)을 지속적으로 과활성화하여 코르티솔 수치를 높이고 자율신경계 균형을 무너뜨립니다.\n\n슈바이처 박사가 연주한 바흐의 음악처럼 60~80BPM의 박자를 가진 구조화된 클래식 멜로디는 부교감 신경(Parasympathetic Nervous System)을 즉각 활성화하는 <strong>'자율신경계 이완 스위치'</strong>입니다. 악기를 연주하거나 음악에 집중하면 심박수가 안정되고 심박 변이도(HRV)가 개선되어 하루 동안 누적된 정신적 피로가 빠르게 회복됩니다.",
        en: "Daytime stress hyperactivates the sympathetic nervous system, raising cortisol.\n\nStructured classical melodies around 60-80 BPM act as a <strong>'parasympathetic relaxation switch'</strong>. Engaging with music stabilizes heart rate and improves heart rate variability (HRV).",
        ja: "昼間の過度なストレスは交感神経を過剰に活性化させます。\n\nバッハの音楽のように60〜80BPMの構造化されたクラシック旋律は、副交感神経を活性化する<strong>「自律神経リラックススイッチ」</strong>です。心拍数が安定し疲労が回復します。",
        zh: "白天的过度压力会导致交感神经持续过度激活。\n\n60~80BPM的结构化古典旋律是激活副交感神经的<strong>“自律神经放松开关”</strong>。专注音乐能稳定心率，快速恢复累积的疲劳。",
        es: "El estrés diurno hiperactiva el sistema simpático.\n\nLas melodías clásicas estructuradas de 60-80 BPM actúan como un <strong>'interruptor de relajación parasimpática'</strong>, estabilizando el ritmo cardíaco.",
        fr: "Le stress diurne hyperactive le système sympathique.\n\nLes mélodies classiques structurées à 60-80 BPM agissent comme un <strong>'interrupteur de relaxation parasympathique'</strong>.",
        de: "Tagesstress überaktiviert das Sympathikusnervensystem.\n\nStrukturierte klassische Melodien mit 60-80 BPM wirken als <strong>'parasympathischer Entspannungsschalter'</strong>.",
        pt: "O estresse diurno hiperativa o sistema simpático.\n\nMelodias clássicas estruturadas de 60-80 BPM funcionam como um <strong>'interruptor de relaxamento parassimpático'</strong>.",
        id: "Stres siang hari memicu hiperaktivitas sistem simpatik.\n\nMelodi klasik terstruktur 60-80 BPM berfungsi sebagai <strong>'sakelar relaksasi parasimpatik'</strong>, menstabilkan detak jantung."
      },
      cautionTitle: {
        ko: "취침 전 격렬한 스크린 대신 이완 음악을 선택하세요",
        en: "Choose relaxing music over intense screens before sleep",
        ja: "就寝前の刺激的な画面の代わりにリラックス音楽を選びましょう",
        zh: "睡前用放松音乐替代刺激性屏幕",
        es: "Elija música relajante en lugar de pantallas antes de dormir",
        fr: "Choisissez une musique relaxante au lieu des écrans avant de dormir",
        de: "Wählen Sie vor dem Schlafen entspannende Musik statt Bildschirme",
        pt: "Escolha música relaxante em vez de telas antes de dormir",
        id: "Pilih musik relaksasi daripada layar sebelum tidur"
      },
      cautionDesc: {
        ko: "밤 늦게까지 자극적인 영상이나 텍스트를 소비하면 뇌는 휴식 모드로 전환되지 못합니다. 슈바이처 박사처럼 조용한 음악적 몰입을 통해 뇌에 자율신경계 이완 신호를 보내세요.",
        en: "Consuming stimulating videos late at night prevents rest mode. Send your brain a relaxation signal through quiet music.",
        ja: "夜遅くまで刺激的な動画を消費すると、脳が休息モードに切り替わりません。静かな音楽に没頭しリラックス信号を送りましょう。",
        zh: "深夜刷刺激性视频会让大脑无法切换至休息模式。通过安静的音乐沉浸向大脑发出放松信号。",
        es: "Consumir contenido estimulante por la noche impide el descanso. Envíe una señal de relajación con música tranquila.",
        fr: "Consommer du contenu stimulant tard le soir empêche le repos. Envoyez au cerveau un signal de relaxation par la musique.",
        de: "Der Konsum stimulierender Medien verhindert den Ruhemodus. Senden Sie Ihrem Gehirn ein Entspannungssignal durch Musik.",
        pt: "Consumir conteúdo estimulante à noite impede o descanso. Envie um sinal de relaxamento com música calma.",
        id: "Menonton video yang merangsang di malam hari mencegah mode istirahat. Kirimkan sinyal relaksasi lewat musik tenang."
      },
      steps: [
        {
          name: {
            ko: "취침 1시간 전 디지털 오프 상태 만들기",
            en: "1-Hour Pre-Sleep Digital Off",
            ja: "就寝1時間前のデジタルオフ",
            zh: "睡前1小时断开数字设备",
            es: "Desconexión Digital 1 Hora Antes de Dormir",
            fr: "Déconnexion Numérique 1 Heure Avant de Dormir",
            de: "Digitale Pause 1 Stunde vor dem Schlafen",
            pt: "Desconexão Digital 1 Hora Antes de Dormir",
            id: "Matikan Digital 1 Jam Sebelum Tidur"
          },
          text: {
            ko: "잠들기 1시간 전 스마트폰, 블루라이트 모니터를 끄고 방 안의 조명을 따뜻하고 아늑한 톤으로 낮춥니다.",
            en: "Turn off smartphones and monitors 1 hour before sleeping, and dim the room lighting to a warm tone.",
            ja: "就寝1時間前にスマートフォンの画面を消し、部屋の照明を温かみのあるトーンに落とします。",
            zh: "睡前1小时关闭手机与显示器，将房间灯光调暗至温馨调",
            es: "Apague smartphones y pantallas 1 hora antes de dormir y atenúe las luces a un tono cálido.",
            fr: "Éteignez smartphones et écrans 1 heure avant de dormir et tamisez la lumière.",
            de: "Schalten Sie 1 Stunde vor dem Schlafen Smartphones aus und dimmen Sie das Licht.",
            pt: "Desligue celulares e telas 1 hora antes de dormir e diminua a luz.",
            id: "Matikan ponsel dan layar 1 jam sebelum tidur, serta redupkan lampu ruang ke nada hangat."
          }
        },
        {
          name: {
            ko: "15분간의 조용한 클래식 연주 음악 감상",
            en: "15-Minute Quiet Classical Music Listening",
            ja: "15分間の静かなクラシック音楽鑑賞",
            zh: "15分钟安静古典乐聆听",
            es: "15 Minutos de Escucha de Música Clásica Tranquila",
            fr: "15 Min d'Écoute de Musique Classique Calme",
            de: "15-minütiges Anhören ruhiger klassischer Musik",
            pt: "15 Minutos de Audição de Música Clássica Calma",
            id: "15 Menit Mendengarkan Musik Klasik Tenang"
          },
          text: {
            ko: "바흐의 오르간 곡이나 느린 BPM의 클래식 연주곡을 틀어놓고 편안히 누워 멜로디에 온 신경을 맡깁니다.",
            en: "Play Bach's organ works or slow classical music, lie down comfortably, and focus entirely on the melody.",
            ja: "バッハの曲やゆったりとしたクラシック曲を流し、リラックスして旋律に意識を委ねます。",
            zh: "播放巴赫的管风琴曲或慢节奏古典乐，舒适地躺下，将全部注意力交给旋律。",
            es: "Reproduzca obras de órgano de Bach o música clásica lenta, recuéstese y concéntrese en la melodía.",
            fr: "Écoutez de l'orgue de Bach ou du classique lent, allongez-vous et concentrez-vous sur la mélodie.",
            de: "Spielen Sie Bachs Orgelwerke oder langsame Klassik ab, legen Sie sich hin und lauschen Sie der Melodie.",
            pt: "Ouça obras de órgão de Bach ou música clássica lenta, deite-se e concentre-se na melodia.",
            id: "Putar karya organ Bach atau musik klasik lambat, berbaringlah dengan nyaman dan fokus pada melodi."
          }
        },
        {
          name: {
            ko: "감정 정리 및 간단한 저녁 일지 작성",
            en: "Emotional Decluttering & Brief Evening Journaling",
            ja: "感情の整理と簡単な夜の日記作成",
            zh: "情绪梳理与简短夜记",
            es: "Orden Emocional y Breve Diario Nocturno",
            fr: "Rangement Émotionnel & Court Journal du Soir",
            de: "Emotionale Ordnung & kurzes Abendtagebuch",
            pt: "Organização Emocional e Breve Diário Noturno",
            id: "Merapikan Emosi & Catatan Malam Singkat"
          },
          text: {
            ko: "음악 감상 후 마음이 편안해진 상태에서 오늘 잘한 일이나 감사한 점 1-2가지를 일기장에 적고 잠자리에 듭니다.",
            en: "After listening to music, write down 1-2 things you are grateful for or did well today, then go to sleep.",
            ja: "音楽鑑賞後、色が落ち着いた状態で今日感謝したことや良かったことを1〜2点ノートに書いて眠りにつきます。",
            zh: "听完音乐后，在心情平静的状态下，在日记本上写下1-2件今天做好的事或表达感谢的事，然后入睡。",
            es: "Tras la música, anote 1-2 cosas por las que esté agradecido o haya hecho bien hoy, y luego duerma.",
            fr: "Après la musique, notez 1 ou 2 choses positives de la journée puis endormez-vous.",
            de: "Schreiben Sie nach der Musik 1-2 Dinge auf, für die Sie dankbar sind, und gehen Sie schlafen.",
            pt: "Após a música, anote 1-2 coisas pelas quais é grato hoje e vá dormir.",
            id: "Setelah mendengarkan musik, catat 1-2 hal yang Anda syukuri hari ini, lalu beristirahatlah."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "클래식 음악 대신 가사가 있는 발라드를 들어도 되나요?",
            en: "Can I listen to pop ballads with lyrics instead of classical music?",
            ja: "クラシック音楽の代わりに歌詞のあるバラードを聴いてもいいですか？",
            zh: "可以用有歌词的抒情歌曲替代古典乐吗？",
            es: "¿Puedo escuchar baladas con letra en lugar de música clásica?",
            fr: "Puis-je écouter des ballades avec paroles au lieu du classique ?",
            de: "Kann ich anstelle klassischer Musik auch Balladen mit Text hören?",
            pt: "Posso ouvir baladas com letra em vez de música clássica?",
            id: "Bolehkah mendengarkan lagu pop berlirik daripada musik klasik?"
          },
          answer: {
            ko: "가사가 있는 음악은 뇌의 언어 처리 영역(언어 피질)을 재가동하므로 완전한 휴식을 방해합니다. 가사 없는 순수 연주곡(클래식, 재즈, 로파이)이 자율신경계 이완에 훨씬 효과적입니다.",
            en: "Music with lyrics reactivates language processing brain areas, interfering with deep rest. Instrumental music works much better.",
            ja: "歌詞のある音楽は脳の言語処理領域を再稼働させるため、完全な休息を妨げます。歌詞のない純粋な演奏曲が効果的です。",
            zh: "有歌词的音乐会重新激活大脑的语言处理区域，干扰完全休息。无歌词的纯演奏曲更利于放松。",
            es: "La música con letra reactiva las áreas del lenguaje impidiendo el descanso. La música instrumental es más efectiva.",
            fr: "Les paroles réactivent les zones du langage. La musique instrumentale est bien plus efficace.",
            de: "Musik mit Text aktiviert das Sprachzentrum erneut. Instrumentalmusik ist für die Entspannung viel effektiver.",
            pt: "Músicas com letra reativam áreas da linguagem do cérebro. Música instrumental é muito mais eficaz.",
            id: "Musik berlirik mengaktifkan kembali area bahasa di otak. Musik instrumental jauh lebih efektif."
          }
        },
        {
          question: {
            ko: "음악을 들으며 자는 것도 도움이 되나요?",
            en: "Is sleeping while playing music helpful?",
            ja: "音楽を聴きながら寝ることも効果がありますか？",
            zh: "听着音乐入睡也有帮助吗？",
            es: "¿Es útil dormir escuchando música?",
            fr: "Dormir en écoutant de la musique est-il utile ?",
            de: "Hilft es, mit Musik einzuschlafen?",
            pt: "Dormir ouvindo música ajuda?",
            id: "Apakah tidur sambil mendengarkan musik membantu?"
          },
          answer: {
            ko: "잠들기 직전 15-30분간 타이머를 설정해 감상하는 것이 좋습니다. 밤새 음악이 켜져 있으면 수면 단계 중 뇌의 청각 피질이 완전히 휴식하지 못할 수 있습니다.",
            en: "Setting a 15-30 minute timer is recommended so the auditory cortex can rest deeply overnight.",
            ja: "入眠直前15〜30分のタイマーを設定して聴くのが好ましいです。",
            zh: "建议在睡前设置15-30分钟定时关闭，以便听觉皮层充分休息。",
            es: "Se recomienda programar un temporizador de 15-30 minutos para un descanso completo.",
            fr: "Réglez un minuteur de 15 à 30 minutes pour permettre au cerveau de se reposer.",
            de: "Es wird empfohlen, einen Timer auf 15-30 Minuten zu stellen.",
            pt: "Recomenda-se definir um timer de 15-30 minutos para descanso profundo.",
            id: "Disarankan mengeset pengatur waktu 15-30 menit agar pendengaran dapat beristirahat."
          }
        }
      ]
    }
  },

  // 3. 마리아 몽테소리 (Maria Montessori)
  {
    slug: 'montessori-observation-log',
    item: {
      id: 'montessori-observation-log',
      name: '마리아 몽테소리',
      gender: 'female',
      era: '근대',
      location: '이탈리아',
      lifespan: '1870 - 1952',
      birthYear: 1870,
      bio: "이탈리아 최초의 여성 의사이자 몽테소리 교육법을 창시하여 현대 유아 교육의 혁명을 일으킨 교육학자입니다.",
      habitName: '선입견 없는 아동 행동 관찰과 객관적 반응 일지 기록',
      tags: ['#관찰', '#자기계발', '#집중', '#기록'],
      timeOfDay: 'anytime',
      requiredItems: ['관찰 노트', '펜'],
      frequency: 'daily',
      historicalStory: "마리아 몽테소리는 '어린이의 집(Casa dei Bambini)'에서 아이들을 관찰할 때, 자신의 어떠한 주관적 편견이나 선입견도 배제하고 철저히 과학적 의학 관찰자의 태도를 유지했습니다. 그녀는 아이가 교구에 몰입하는 시간, 자발적 선택 패턴을 정밀하게 기록함으로써 아이들의 내적 집중력 법칙을 발견해냈습니다.",
      sciencePrinciples: "주관적 판단을 배제한 '객관적 관찰(Objective Observation)' 습관은 뇌의 전두엽 인지 통제 영역을 활성화하고 확증 편향(Confirmation Bias)을 막아 문제 상황의 본질을 명확히 파악하게 돕습니다.",
      quote: "우리의 임무는 아이를 조종하는 것이 아니라, 아이 안에서 스스로 자라나는 생명을 관찰하고 돕는 것이다.",
      trigger: "상대방의 행동이나 복잡한 업무 상황에서 오류의 원인을 정밀하게 파악하고 싶을 때",
      modernGuide: [
        "관찰 대상(동료, 아이, 혹은 본인의 작업 행동)을 정하고 10분간 어떤 판단도 내리지 않은 채 현상을 관찰합니다.",
        "'좋다/나쁘다' 같은 주관적 감정 형용사를 빼고 factual한 사실만 노트에 기록합니다.",
        "기록된 사실을 통해 행동의 숨겨진 원인과 패턴을 분석합니다."
      ],
      actionName: "10분 편견 없는 객관적 관찰 일지 (몽테소리 루틴)",
      sources: [
        "Maria Montessori, *The Discovery of the Child* (1948)",
        "E.M. Standing, *Maria Montessori: Her Life and Work* (1957)"
      ]
    },
    translations: {
      title: {
        ko: "현대 유아교육 혁명가? 마리아 몽테소리의 객관적 관찰 일지 루틴",
        en: "Pioneer of Child Education? Maria Montessori's Objective Observation Routine",
        ja: "幼児教育の革命家？マリア・モンテッソーリの客観的観察日記ルーティン",
        zh: "儿童教育革命家？玛丽亚·蒙台梭利的客观观察日志习惯",
        es: "¿Revolucionaria de la educación infantil? La rutina de observación objetiva de Maria Montessori",
        fr: "Révolutionnaire de l'éducation ? La routine d'observation objective de Maria Montessori",
        de: "Pionierin der Pädagogik? Maria Montessoris objektive Beobachtungsroutine",
        pt: "Revolucionária da educação infantil? A rotina de observação objetiva de Maria Montessori",
        id: "Pionir Pendidikan Anak? Rutinitas Jurnal Observasi Objektif Maria Montessori"
      },
      description: {
        ko: "이탈리아 최초의 여성 의사이자 교육학자 마리아 몽테소리. 주관적 편견을 차단하고 본질을 파악했던 그녀의 객관적 관찰 기술과 3단계 가이드.",
        en: "Learn how Dr. Maria Montessori used bias-free objective observation logs to unveil human potential.",
        ja: "偏見を排除し本質を見抜いたモンテッソーリ博士の客観的観察術と実践ガイド。",
        zh: "介绍蒙台梭利博士去除主观偏见、洞察事物本质的客观观察记录习惯及三步指南。",
        es: "Descubra la técnica de observación objetiva libre de prejuicios de la Dra. Maria Montessori.",
        fr: "Découvrez la méthode d'observation objective sans parti pris du Dr Maria Montessori.",
        de: "Erfahren Sie mehr über Dr. Maria Montessoris objektive Beobachtungstechnik ohne Vorurteile.",
        pt: "Descubra a técnica de observação objetiva isenta de pré-julgamentos da Dra. Maria Montessori.",
        id: "Pelajari teknik observasi objektif bebas prasangka dari Dr. Maria Montessori."
      },
      authority: {
        ko: "몽테소리 저서 'The Discovery of the Child' 및 전기 사료",
        en: "Maria Montessori's Book 'The Discovery of the Child' & Historical Archives",
        ja: "モンテッソーリ著「The Discovery of the Child」および評伝史料",
        zh: "蒙台梭利著作《The Discovery of the Child》与历史文献",
        es: "Libro de Maria Montessori 'The Discovery of the Child' y archivos históricos",
        fr: "Livre 'The Discovery of the Child' & archives historiques",
        de: "Buch 'The Discovery of the Child' & historische Archive",
        pt: "Livro de Maria Montessori 'The Discovery of the Child' e arquivos históricos",
        id: "Buku Maria Montessori 'The Discovery of the Child' & Arsip Sejarah"
      },
      intro: {
        ko: "이탈리아 최초의 여성 의사이자 관습에 굴하지 않고 몽테소리 교육법을 설립하여 인류 유아 교육의 패러다임을 바꾼 마리아 몽테소리. 그녀가 아이들의 숨겨진 잠재력과 집중력의 법칙을 세상을 바꾼 통찰로 바꿔낸 비결은 무엇일까요? 📝\n\n몽테소리는 '어린이의 집'에서 아이들을 관찰할 때 어떠한 감정적 편견이나 성인 중심의 평가를 완벽히 배제했습니다. 그녀는 의학 관찰자의 시선으로 아이가 언제 집중하고 어떤 환경에서 호기심을 느끼는지 사실만을 엄밀하게 기록했습니다. 주관을 뺀 객관적 관찰 기록 습관은 복잡한 문제의 진정한 원인을 발견하는 가장 완벽한 인지 도구였습니다.\n\n오늘 BuildSelf에서는 마리아 몽테소리의 객관적 관찰 루틴과 현대인을 위한 확증편향 차단 실천법을 소개합니다.",
        en: "Dr. Maria Montessori, Italy's first female physician and founder of the Montessori method. How did she discover human potential? 📝\n\nMontessori was completely free from emotional bias when observing children. She strictly recorded facts—when they focused and what triggered curiosity—acting as an objective medical observer. This objective logging habit was her ultimate cognitive tool.\n\nToday, BuildSelf introduces Dr. Montessori's objective observation routine.",
        ja: "イタリア初の女性医師であり、モンテッソーリ教育法を確立したマリア・モンテッソーリ。彼女の洞察の秘密は何だったのでしょうか？ 📝\n\nモンテッソーリは子どもたちを観察する際、感情的な偏見を徹底的に排除しました。医学的観察者として事実だけを厳密に記録したのです。\n\n今日のBuildSelfでは、マリア・モンテッソーリの客観的観察ルーティンを紹介します。",
        zh: "意大利首位女性医师、蒙台梭利教育法创始人玛丽亚·蒙台梭利。她洞察力的秘诀是什么？ 📝\n\n蒙台梭利在观察儿童时彻底排除了主观偏见。她以医学观察者的视角只记录客观事实，这成了她发现事物本质的认知工具。\n\n今天，BuildSelf 将介绍蒙台梭利博士的客观观察习惯。",
        es: "La Dra. Maria Montessori, la primera médica de Italia. ¿Cómo descubrió el potencial humano? 📝\n\nMontessori observaba a los niños libre de prejuicios emocionales, registrando estrictamente hechos como observadora médica.\n\nHoy, BuildSelf presenta la rutina de observación objetiva de la Dra. Montessori.",
        fr: "Le Dr Maria Montessori, première femme médecin d'Italie. Comment a-t-elle découvert le potentiel humain ? 📝\n\nMontessori observait les enfants sans aucun préjugé, consignant rigoureusement les faits.\n\nAujourd'hui, BuildSelf vous présente sa routine d'observation objective.",
        de: "Dr. Maria Montessori, Italiens erste Ärztin. Wie entdeckte sie das menschliche Potenzial? 📝\n\nMontessori beobachtete Kinder frei von emotionalen Vorurteilen und hielt streng Fakten fest.\n\nHeute stellt BuildSelf Dr. Montessoris objektive Beobachtungsroutine vor.",
        pt: "A Dra. Maria Montessori, primeira médica da Itália. Como ela descobriu o potencial humano? 📝\n\nMontessori observava as crianças livre de pré-julgamentos, registrando fatos com precisão.\n\nHoje, o BuildSelf apresenta a rotina de observação objetiva da Dra. Montessori.",
        id: "Dr. Maria Montessori, dokter wanita pertama di Italia. Bagaimana ia menemukan potensi manusia? 📝\n\nMontessori mengamati anak-anak secara objektif tanpa prasangka, mencatat fakta secara ketat.\n\nHari ini, BuildSelf menyajikan rutinitas observasi objektif Dr. Montessori."
      },
      whyTitle: {
        ko: "확증 편향을 극복하고 본질을 직시하는 인지적 객관화",
        en: "Cognitive Objectification Overcoming Confirmation Bias",
        ja: "確証バイアスを克服し本質を直視する認知の客観化",
        zh: "克服确认偏误、直视本质的认知客观化",
        es: "Objetivación Cognitiva Superando el Sesgo de Confirmación",
        fr: "Objectivation Cognitive Surmontant le Biais de Confirmation",
        de: "Kognitive Objektivierung zur Überwindung von Bestätigungsfehlern",
        pt: "Objetivação Cognitiva Superando o Vício de Confirmação",
        id: "Objektifikasi Kognitif Mengatasi Bias Konfirmasi"
      },
      whyDesc: {
        ko: "우리는 종종 자신의 경험이나 감정에 기반한 주관적 억측으로 문제의 원인을 단정 짓는 '확증 편향'에 빠집니다.\n\n몽테소리 박사의 관찰 습관은 뇌의 전두엽 인지 통제 영역을 강화하여 감정적 판단을 일시 중지하는 <strong>'인지적 괄호 치기'</strong> 효과를 제공합니다. 상황을 감정이 아닌 팩트로 분리해 기록하면 오해와 오류의 진정한 원인이 선명하게 드러납니다.",
        en: "We often fall into confirmation bias, jumping to conclusions based on emotions.\n\nMontessori's habit acts as a <strong>'cognitive bracketing'</strong> that pauses emotional judgments. Separating facts from emotions clearly reveals the true causes of problems.",
        ja: "私たちはしばしば感情に基づいた確証バイアスに陥り、問題の原因を決めつけてしまいます。\n\nモンテッソーリ博士の観察習慣は、感情的判断を一時停止する<strong>「心理的ブラケット（括弧くくり）」</strong>効果を提供します。ファクトを記録することで問題の真因が明確になります。",
        zh: "我们常陷入基于情绪的确认偏误，武断下结论。\n\n蒙台梭利博士的习惯起到了搁置情绪判断的<strong>“认知括号”</strong>作用。将事实与情绪分离记录，能清晰揭示问题的真正原因。",
        es: "A menudo caemos en el sesgo de confirmación basado en emociones.\n\nLa rutina de Montessori actúa como un <strong>'paréntesis cognitivo'</strong> que pausa los juicios emocionales, revelando causas reales.",
        fr: "Nous tombons souvent dans le biais de confirmation par émotion.\n\nLa routine de Montessori agit comme une <strong>'mise entre parenthèses cognitive'</strong> pour isoler les faits des émotions.",
        de: "Wir verfallen oft in emotionalen Bestätigungsfehler.\n\nMontessoris Gewohnheit wirkt wie eine <strong>'kognitive Einklammerung'</strong>, die emotionale Urteile aussetzt und Fakten offenlegt.",
        pt: "Frequentemente caímos no vício de confirmação por emoção.\n\nA rotina de Montessori funciona como um <strong>'parêntese cognitivo'</strong> que pausa julgamentos e revela fatos.",
        id: "Kita sering terjebak bias konfirmasi akibat emosi.\n\nRutinitas Montessori berfungsi sebagai <strong>'tanda kurung kognitif'</strong> yang menunda prasangka emosional dan mengungkap fakta."
      },
      cautionTitle: {
        ko: "평가나 감정 형용사 없이 오직 사실만 기록하세요",
        en: "Record only facts without evaluations or emotional adjectives",
        ja: "評価や感情表現を排除し、事実だけを記録しましょう",
        zh: "摒弃评价与形容词，仅记录事实",
        es: "Registre solo hechos sin evaluaciones ni adjetivos emocionales",
        fr: "Consignez uniquement les faits sans jugement ni adjectif",
        de: "Halten Sie nur Fakten ohne Bewertungen oder Adjektive fest",
        pt: "Registre apenas fatos sem avaliações ou adjetivos emocionais",
        id: "Catat hanya fakta tanpa penilaian atau kata sifat emosional"
      },
      cautionDesc: {
        ko: "'피곤해 보인다' 대신 '10분 동안 눈을 30회 감았다'처럼 주관적 해석을 빼고 감각적으로 관찰된 사실 자체만을 기술하는 것이 몽테소리 관찰의 핵심입니다.",
        en: "Instead of 'looks tired', record 'closed eyes 30 times in 10 minutes'. Describing sensorially observed facts is key.",
        ja: "「疲れて見える」ではなく「10分間に30回目を閉じた」のように、主観的解釈を抜いて観察された事実だけを記述することが鍵です。",
        zh: "用“10分钟内眨眼30次”代替“看起来很累”。剥离主观解释、描述感官事实是关键所在。",
        es: "En lugar de 'parece cansado', anote 'cerró los ojos 30 veces en 10 min'. Describir hechos observados es la clave.",
        fr: "Au lieu de 'semble fatigué', notez 'a fermé les yeux 30 fois en 10 min'. Décrire les faits bruts est essentiel.",
        de: "Statt 'sieht müde aus' schreiben Sie 'schloss in 10 Min 30 Mal die Augen'. Das Festhalten von Fakten ist der Schlüssel.",
        pt: "Em vez de 'parece cansado', anote 'fechou os olhos 30 vezes em 10 min'. Descrever fatos brutos é essencial.",
        id: "Daripada 'tampak lelah', catat 'memejamkan mata 30 kali dalam 10 menit'. Menguraikan fakta sensorik adalah kuncinya."
      },
      steps: [
        {
          name: {
            ko: "10분 관찰 타겟 설정 및 몰입",
            en: "10-Minute Observation Target Setup",
            ja: "10分間観察ターゲットの設定と没頭",
            zh: "设定10分钟观察目标与沉浸",
            es: "Establecer Objetivo de Observación de 10 Minutos",
            fr: "Fixer une Cible d'Observation de 10 Min",
            de: "Festlegung des 10-Minuten-Beobachtungsziels",
            pt: "Definir Alvo de Observação de 10 Minutos",
            id: "Tetapkan Target Observasi 10 Menit"
          },
          text: {
            ko: "분석하고자 하는 대상(본인의 작업 습관, 특정 프로젝트 흐름)을 정하고 10분간 말을 아끼며 시각적 변화에 몰입합니다.",
            en: "Select a target to analyze (e.g., your own work habit) and focus quietly for 10 minutes on visual changes.",
            ja: "分析したい対象（自分の作業習慣など）を決め、10分間静かに観察します。",
            zh: "设定要分析的目标（如自己的工作习惯），静心观察10分钟的变化。",
            es: "Elija un objetivo para analizar y concéntrese en silencio durante 10 minutos.",
            fr: "Choisissez une cible à analyser et observez en silence pendant 10 minutes.",
            de: "Wählen Sie ein Ziel und beobachten Sie 10 Minuten lang still.",
            pt: "Escolha um alvo e observe em silêncio por 10 minutos.",
            id: "Pilih target yang ingin dianalisis dan amati secara diam selama 10 menit."
          }
        },
        {
          name: {
            ko: "팩트 중심의 명사·동사 관찰 노트 작성",
            en: "Fact-Based Noun & Verb Observation Logging",
            ja: "ファクト中心の名詞・動詞観察ノート作成",
            zh: "基于事实的名词与动词观察记录",
            es: "Registro de Observación Basado en Hechos",
            fr: "Prise de Notes Factuelle Basée sur Verbes & Noms",
            de: "Faktenbasiertes Beobachtungsprotokoll",
            pt: "Registro de Observação Baseado em Fatos",
            id: "Catatan Observasi Berbasis Fakta Kata Benda & Kerja"
          },
          text: {
            ko: "관찰된 물리적 행동과 소리, 행동 시간을 감정 형용사 없이 명사와 동사 위주로 기록합니다.",
            en: "Record physical actions, sounds, and timestamps using mostly nouns and verbs without emotional adjectives.",
            ja: "観察された行動や時間を、感情的表現を除いて名詞と動詞を中心に記録します。",
            zh: "摒弃情绪形容词，主要用名词和动词记录观察到的物理行为与时间点。",
            es: "Anote acciones físicas y horas usando principalmente sustantivos y verbos sin adjetivos.",
            fr: "Consignez actions et horaires en utilisant des noms et verbes sans adjectifs.",
            de: "Notieren Sie Aktionen und Zeiten hauptsächlich mit Nomen und Verben.",
            pt: "Anote ações físicas e horários usando substantivos e verbos sem adjetivos.",
            id: "Catat tindakan fisik dan waktu menggunakan kata benda dan kerja tanpa kata sifat."
          }
        },
        {
          name: {
            ko: "패턴 추출 및 가설 검증",
            en: "Pattern Extraction & Hypothesis Verification",
            ja: "パターン抽出と仮説検証",
            zh: "模式提取与假设验证",
            es: "Extracción de Patrones y Verificación de Hipótesis",
            fr: "Extraction de Motifs & Vérification d'Hypothèse",
            de: "Mustertextraktion & Hypothesenprüfung",
            pt: "Extração de Padrões e Verificação de Hipóteses",
            id: "Ekstraksi Pola & Verifikasi Hipotesis"
          },
          text: {
            ko: "작성된 팩트 노트에서 반복되는 행동 패턴이나 집중 저하 시점을 찾아내어 개선책을 도출합니다.",
            en: "Identify recurring action patterns or focus drops from the fact log to derive improvements.",
            ja: "ファクトノートから繰り返される行動パターンや集中低下のタイミングを見つけ出し、改善策を導きます。",
            zh: "从事实记录中找出重复出为模式或注意力下降点，从而得出改进方案。",
            es: "Identifique patrones de acción recurrentes o caídas de enfoque para derivar mejoras.",
            fr: "Identifiez les schémas d'action récurrents pour en déduire des améliorations.",
            de: "Identifizieren Sie wiederkehrende Muster für Verbesserungen.",
            pt: "Identifique padrões recorrentes para derivar melhorias.",
            id: "Temukan pola tindakan yang berulang untuk merumuskan perbaikan."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "자기 자신의 습관을 관찰할 때도 이 루틴을 쓸 수 있나요?",
            en: "Can I use this routine to observe my own habits?",
            ja: "自分の習慣を観察する時もこのルーティンを使えますか？",
            zh: "可以用这个习惯观察自己的习惯吗？",
            es: "¿Puedo usar esta rutina para observar mis propios hábitos?",
            fr: "Puis-je utiliser cette routine pour observer mes propres habitudes ?",
            de: "Kann ich diese Routine nutzen, um meine eigenen Gewohnheiten zu beobachten?",
            pt: "Posso usar esta rotina para observar meus próprios hábitos?",
            id: "Bisakah rutinitas ini digunakan untuk mengamati kebiasaan sendiri?"
          },
          answer: {
            ko: "네, 셀프 타임 트래킹이나 업무 일지를 쓸 때 '자책 감정'을 빼고 시간대별 실제 작업한 팩트만 기재하는 방식으로 완벽히 적용할 수 있습니다.",
            en: "Yes, when time-tracking or journaling, record factual tasks per hour without self-blame.",
            ja: "はい、タイムトラッキング時に自分を責める感情を抜き、時間ごとの事実だけを記録することで応用できます。",
            zh: "当然可以。在进行时间追踪时剔除自责情绪、按时段仅记录实际完成的事实即可。",
            es: "Sí, al registrar su tiempo, anote las tareas reales por hora sin culpa.",
            fr: "Oui, en consignant vos tâches heure par heure sans culpabilité.",
            de: "Ja, indem Sie Ihre Aufgaben stündlich ohne Schuldgefühle aufschreiben.",
            pt: "Sim, ao registrar seu tempo, anote as tarefas reais sem culpa.",
            id: "Ya, saat mencatat waktu, catat tugas nyata per jam tanpa menyalahkan diri."
          }
        },
        {
          question: {
            ko: "주관적 감정과 객관적 팩트를 구분하기가 어렵다면 어떻게 해야 하나요?",
            en: "What if it's hard to distinguish subjective emotions from objective facts?",
            ja: "主観的感情と客観的ファクトの区別が難しい場合はどうすればいいですか？",
            zh: "如果很难区分主观情绪与客观事实该怎么办？",
            es: "¿Qué hacer si es difícil distinguir emociones de hechos?",
            fr: "Que faire s'il est difficile de séparer émotions et faits ?",
            de: "Was tun, wenn es schwer ist, Emotionen von Fakten zu trennen?",
            pt: "O que fazer se for difícil distinguir emoções de fatos?",
            id: "Bagaimana jika sulit membedakan emosi subjektif dan fakta?"
          },
          answer: {
            ko: "'카메라에 촬영되는 수치와 행동인가?'라는 기준을 적용해 보세요. 카메라 렌즈에 담기지 않는 생각이나 평가 표현은 모두 제외하면 됩니다.",
            en: "Ask 'Is this measurable or capturable by a camera?' Exclude thoughts not visible on camera.",
            ja: "「カメラの映像に映る数値や行動か？」という基準を適用してみてください。",
            zh: "问问自己：“这是摄像机能拍到的数值或行为吗？”剔除镜头无法拍到的思想与评价即可。",
            es: "Pregúntese: '¿Es esto capturable por una cámara?' Excluya pensamientos no visibles.",
            fr: "Demandez-vous : 'Est-ce capturable par une caméra ?' Excluez ce qui ne l'est pas.",
            de: "Fragen Sie sich: 'Ist das von einer Kamera erfassbar?' Schließen Sie Gedanken aus.",
            pt: "Pergunte-se: 'Isso é capturável por uma câmera?' Exclua pensamentos não visíveis.",
            id: "Tanyakan 'Apakah ini dapat ditangkap kamera?' Keluarkan pemikiran yang tak terlihat."
          }
        }
      ]
    }
  },

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
        de: "Erfahren Sie, wie Oppenheimer extremen Druck durch das Lesen von Poesie ausgleich.",
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
            ja: "はい、ストーリーを追う長編より、情緒豊かな短い詩やエッセイの方が効果的です。",
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
            ja: "紙の本がベストですが、ブルーライトの少ないE-inkリーダーであれば活用しても良いでしょう。",
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
  },

  // 6. 알프레드 노벨 (Alfred Nobel)
  {
    slug: 'nobel-evening-reflection',
    item: {
      id: 'nobel-evening-reflection',
      name: '알프레드 노벨',
      gender: 'male',
      era: '근대',
      location: '스웨덴, 프랑스',
      lifespan: '1833 - 1896',
      birthYear: 1833,
      bio: "다이나마이트를 발명한 화학자이자 실업가, 노벨상을 창설하여 인류 발전에 기여한 위인입니다.",
      habitName: '실험 데이터 재검토와 저녁 5개국어 일지 서신 작성',
      tags: ['#기록', '#메모', '#사색', '#자기계발'],
      timeOfDay: 'night',
      requiredItems: ['실험 일지', '만년필'],
      frequency: 'daily',
      historicalStory: "알프레드 노벨은 355개의 특허를 보유한 치열한 발명가이자 사업가였습니다. 그는 낮 동안 화학 실험과 비즈니스 미팅을 마친 후, 매일 저녁 서재에서 자신이 직접 쓴 실험 기록을 재검토하고 스웨덴어, 영어, 프랑스어, 독일어, 러시아어 등 5개 국어로 저녁 일지와 편지를 썼습니다. 여러 언어로 일지를 재구성하는 저녁 사색 습관은 그에게 객관적 메타인지를 선물했습니다.",
      sciencePrinciples: "다국어 쓰기와 저녁 일과 재검토(Reflective Writing) 습관은 뇌의 해마(Hippocampus)와 전두엽 메타인지 회로를 강력하게 활성화하여 하루의 시행착오를 정제된 지식으로 재구성합니다.",
      quote: "나의 희망은 세계의 평화와 인류의 발전이다.",
      trigger: "복잡한 작업 후 성과와 오류를 객관적으로 정리하고 싶을 때",
      modernGuide: [
        "퇴근 전 혹은 저녁 시간 15분간 오늘 수행한 업무/실험의 결과 데이터를 훑어봅니다.",
        "하루 동안의 주요 배운 점과 문제 해결 과정을 자신의 말로 조율하여 5줄 요약 일지를 작성합니다.",
        "오늘의 실수를 비난하지 않고 개선점 중심의 팩트로 정리합니다."
      ],
      actionName: "저녁 15분 메타인지 저녁 일지 복기 (노벨 루틴)",
      sources: [
        "Ragnar Sohlman, *The Legacy of Alfred Nobel* (1983)",
        "Nobel Foundation Historical Archives"
      ]
    },
    translations: {
      title: {
        ko: "355개 특허 발명가의 정리법? 알프레드 노벨의 저녁 일지 복기 루틴",
        en: "355 Patents Inventor's Review Method? Alfred Nobel's Evening Reflection Routine",
        ja: "355の発明を生んだ天才の整理術？アルフレッド・ノーベルの夜の復習ルーティン",
        zh: "拥有355项专利的发明家的整理术？阿尔弗雷德·诺贝尔的晚间复盘日志",
        es: "¿El método de revisión del inventor de 355 patentes? La rutina de reflexión de Alfred Nobel",
        fr: "La méthode du génie aux 355 brevets ? La routine de réflexion du soir d'Alfred Nobel",
        de: "Die Rückschau-Methode eines Erfinders mit 355 Patenten? Alfred Nobels Abendroutine",
        pt: "O método do inventor de 355 patentes? A rotina de reflexão noturna de Alfred Nobel",
        id: "Metode Evaluasi Penemu 355 Paten? Rutinitas Refleksi Malam Alfred Nobel"
      },
      description: {
        ko: "노벨상 창설자 알프레드 노벨. 낮 동안의 실험을 밤마다 다국어 일지로 복기하며 355개 특허를 만들어낸 그의 저녁 메타인지 루틴과 실천법.",
        en: "Learn how Alfred Nobel reviewed his experiments nightly to produce 355 patents and found the Nobel Prize.",
        ja: "昼の実験を夜ごとに多言語の日記で復習し、355の特許を生み出したノーベルのリフレッシュ法。",
        zh: "介绍诺贝尔奖创始人阿尔弗雷德·诺贝尔在夜间复盘昼间实验、产出355项专利的元认知习惯。",
        es: "Descubra cómo Nobel revisaba sus experimentos cada noche para generar 355 patentes y los Premios Nobel.",
        fr: "Découvrez comment Nobel révisait ses expériences chaque soir pour déposer 355 brevets.",
        de: "Erfahren Sie, wie Nobel seine Experimente abends überprüfte, um 355 Patente zu erlangen.",
        pt: "Descubra como Nobel revisava seus experimentos todas as noites para registrar 355 patentes.",
        id: "Temukan cara Nobel mengevaluasi eksperimennya setiap malam untuk merumuskan 355 paten."
      },
      authority: {
        ko: "전기 'The Legacy of Alfred Nobel' 및 노벨 재단 역사 사료",
        en: "Biography 'The Legacy of Alfred Nobel' & Nobel Foundation Archives",
        ja: "評伝「The Legacy of Alfred Nobel」およびノーベル財団史料",
        zh: "传记《The Legacy of Alfred Nobel》与诺贝尔基金会史料",
        es: "Biografía 'The Legacy of Alfred Nobel' y archivos de la Fundación Nobel",
        fr: "Biographie 'The Legacy of Alfred Nobel' & archives de la Fondation Nobel",
        de: "Biografie 'The Legacy of Alfred Nobel' & Archive der Nobelstiftung",
        pt: "Biografia 'The Legacy of Alfred Nobel' e arquivos da Fundação Nobel",
        id: "Biografi 'The Legacy of Alfred Nobel' & Arsip Yayasan Nobel"
      },
      intro: {
        ko: "다이나마이트를 발명하고 인류의 평화와 학문적 위업을 칭송하는 노벨상을 창설한 위대한 발명가이자 사업가, 알프레드 노벨. 평생 355개의 특허를 획득했던 그의 압도적인 메타인지와 독창적 발명 직관은 어디서 탄생했을까요? 🧪\n\n노벨은 낮 동안의 위험천만한 화학 실험과 지친 비즈니스 회의가 끝나면, 매일 저녁 서재로 돌아와 당일의 실험 일지를 꼼꼼히 재검토했습니다. 그는 스웨덴어, 영어, 프랑스어, 독일어, 러시아어로 일지를 번갈아 쓰며 하루 동안 얻은 지식과 오류를 정교하게 재구성했습니다. 저녁 서재에서의 15분 일지 복기는 그에게 최고의 메타인지 훈련이었습니다.\n\n오늘 BuildSelf에서는 알프레드 노벨의 저녁 일지 복기 루틴과 메타인지 강화의 과학을 소개합니다.",
        en: "Alfred Nobel, the great chemist who invented dynamite and founded the Nobel Prize. Where did his 355 patents come from? 🧪\n\nAfter dangerous chemical experiments, Nobel returned to his study every evening to review his logs in 5 languages. This 15-minute evening reflection habit served as his ultimate metacognitive training.\n\nToday, BuildSelf introduces Nobel's evening reflection routine.",
        ja: "ダイナマイトを発明しノーベル賞を創設したノーベル。355の発明の秘密は何だったのでしょうか？ 🧪\n\n過酷な実験の後、ノーベルは毎夜書斎に戻り、多言語で実験記録を復習しました。これが彼の最高のメタ認知訓練でした。\n\n今日のBuildSelfではノーベルの夜の復習ルーティンを紹介します。",
        zh: "发明炸药、设立诺贝尔奖的阿弗雷德·诺贝尔。他拥有355项专利的秘诀是什么？ 🧪\n\n在白天的化学实验结束后，诺贝尔每晚都会回到书房，用5种语言复盘当天的日志。这成为了他提升元认知能力的最佳训练。\n\n今天，BuildSelf 将介绍诺贝尔的晚间复盘日志习惯。",
        es: "Alfred Nobel, el químico que inventó la dinamita. ¿De dónde vinieron sus 355 patentes? 🧪\n\nTras los experimentos, Nobel volvía a su estudio cada noche para revisar sus registros en 5 idiomas. Esta rutina era su mejor entrenamiento metacognitivo.\n\nHoy, BuildSelf presenta la rutina de reflexión nocturna de Nobel.",
        fr: "Alfred Nobel, le chimiste inventeur de la dynamite. D'où venaient ses 355 brevets ? 🧪\n\nAprès les expériences, Nobel rentrait dans son bureau chaque soir pour réviser ses notes en 5 langues.\n\nAujourd'hui, BuildSelf vous présente la routine de réflexion du soir de Nobel.",
        de: "Alfred Nobel, der Erfinder des Dynamits. Woher stammten seine 355 Patente? 🧪\n\nNach den Experimenten überprüfte Nobel jeden Abend seine Aufzeichnungen in 5 Sprachen.\n\nHeute stellt BuildSelf Nobels Abendroutine vor.",
        pt: "Alfred Nobel, o químico que inventou a dinamite. De onde vieram suas 355 patentes? 🧪\n\nApós os experimentos, Nobel voltava ao escritório todas as noites para revisar seus registros em 5 idiomas.\n\nHoje, o BuildSelf apresenta a rotina de reflexão noturna de Nobel.",
        id: "Alfred Nobel, kimiawan penemu dinamit. Dari mana 355 patennya berasal? 🧪\n\nSetiap malam, Nobel kembali ke ruang kerjanya untuk mengevaluasi catatannya dalam 5 bahasa.\n\nHari ini, BuildSelf menyajikan rutinitas refleksi malam Nobel."
      },
      whyTitle: {
        ko: "해마의 장기 기억 재압축과 메타인지 회로 자극",
        en: "Long-Term Memory Re-consolidation & Metacognitive Circuit Activation",
        ja: "海馬の長期記憶の再圧搾とメタ認知回路の刺激",
        zh: "海马体长期记忆重巩固与元认知回路激活",
        es: "Re-consolidación de Memoria a Largo Plazo y Circuito Metacognitivo",
        fr: "Re-consolidation de la Mémoire à Long Terme & Métacognition",
        de: "Rekonsolidierung des Langzeitgedächtnisses & Metakognition",
        pt: "Re-consolidação da Memória de Longo Prazo e Metacognição",
        id: "Rekonsolidasi Memori Jangka Panjang & Sirkuit Metakognitif"
      },
      whyDesc: {
        ko: "낮 동안 수집된 단기 정보는 정리되지 않으면 수면 중 소실되기 쉽습니다.\n\n노벨처럼 저녁 시간에 하루의 기록을 스스로 요약하고 재검토하는 저녁 일지 습관은 뇌 해마의 <strong>'장기 기억 재압축(Re-consolidation)'</strong>을 돕고 전두엽의 메타인지 영역을 강하게 자극합니다.",
        en: "Unorganized daytime information easily gets lost during sleep.\n\nReviewing daily logs in the evening helps hippocampal <strong>'memory re-consolidation'</strong> and stimulates metacognitive brain regions.",
        ja: "整理されない短期的情報は睡眠中に失われがちです。\n\n夜に1日の記録を要約する習慣は、海馬の<strong>「長期記憶の再統合」</strong>を助け、メタ認知を強化します。",
        zh: "若无整理，白天的短期信息易在睡眠中遗失。\n\n晚间总结与复盘日志有助于海马体的<strong>“长期记忆重巩固”</strong>，强效激活元认知区域。",
        es: "La información no organizada se pierde al dormir.\n\nRevisar los registros por la noche ayuda a la <strong>'re-consolidación de la memoria'</strong> en el hipocampo.",
        fr: "L'information non structurée se perd pendant le sommeil.\n\nRéviser ses notes le soir favorise la <strong>'re-consolidation mémorielle'</strong>.",
        de: "Unstrukturierte Informationen gehen im Schlaf verloren.\n\nAbendliche Rückschau hilft bei der <strong>'Gedächtnis-Rekonsolidierung'</strong> im Hippocampus.",
        pt: "Informações não organizadas se perdem no sono.\n\nRevisar os registros à noite ajuda na <strong>'re-consolidação da memória'</strong>.",
        id: "Informasi acak siang hari mudah hilang saat tidur.\n\nMengevaluasi catatan malam hari membantu <strong>'rekonsolidasi memori'</strong> di hipokampus."
      },
      cautionTitle: {
        ko: "감정적 반성이 아닌 팩트와 개선점 중심 복기",
        en: "Focus on facts and improvements, not emotional self-blame",
        ja: "感情的な反省ではなく、ファクトと改善点中心の復習を",
        zh: "以事实与改进点为中心，切勿情感化自责",
        es: "Enfóquese en hechos y mejoras, no en culpa emocional",
        fr: "Misez sur les faits et améliorations, pas sur la culpabilité",
        de: "Fokussieren Sie sich auf Fakten und Verbesserungen, nicht Schuld",
        pt: "Foque em fatos e melhorias, não em culpa emocional",
        id: "Fokus pada fakta dan perbaikan, bukan penyalahan diri"
      },
      cautionDesc: {
        ko: "하루 동안의 실패나 오답에 자책감을 가질 필요가 없습니다. 노벨의 발명 일지처럼 어떤 시도가 있었고 무엇을 고치면 될지 냉정한 데이터로 다루세요.",
        en: "Do not feel guilty about failures. Treat them as cool objective data to improve like Nobel did.",
        ja: "失敗に対して罪悪感を持つ必要はありません。ノーベルのように冷静なデータとして扱いましょう。",
        zh: "无需对当天的失误抱有罪恶感。像诺贝尔的实验日志那样，将其视为客观数据即可。",
        es: "No se sienta culpable por los errores. Trátelos como datos objetivos para mejorar.",
        fr: "Ne culpabilisez pas pour les erreurs. Traitez-les comme des données factuelles.",
        de: "Fühlen Sie sich wegen Fehlern nicht schuldig. Betrachten Sie sie als sachliche Daten.",
        pt: "Não se sinta culpado por erros. Trate-os como dados objetivos para melhorar.",
        id: "Jangan merasa bersalah atas kegagalan. Perlakukan sebagai data objektif untuk perbaikan."
      },
      steps: [
        {
          name: {
            ko: "하루 실행 기록 및 메타 데이터 모으기",
            en: "Gather Daily Execution Records",
            ja: "1日の実行記録の収集",
            zh: "收集全天执行记录",
            es: "Recopilar Registros del Día",
            fr: "Rassembler les Notes de la Journée",
            de: "Tagesprotokolle sammeln",
            pt: "Reunir Registros do Dia",
            id: "Kumpulkan Catatan Hari Ini"
          },
          text: {
            ko: "저녁 시간 책상에 앉아 오늘 작성한 메모, 프로젝트 진행 내역을 훑어봅니다.",
            en: "Sit at your desk in the evening and scan through today's memos and project logs.",
            ja: "夜、デスクに向かい今日作成したメモや作業ログを見返します。",
            zh: "晚间坐在书桌前，浏览今天记录的便签与项目进展。",
            es: "Siéntese en su escritorio por la noche y revise las notas del día.",
            fr: "Asseyez-vous à votre bureau le soir et relisez vos notes du jour.",
            de: "Setzen Sie sich abends an den Schreibtisch und gehen Sie die Notizen durch.",
            pt: "Sente-se à mesa à noite e passe os olhos pelas anotações do dia.",
            id: "Duduklah di meja di malam hari dan periksa catatan hari ini."
          }
        },
        {
          name: {
            ko: "5줄 요약 핵심 메타인지 일지 작성",
            en: "5-Line Core Metacognitive Journaling",
            ja: "5行要約のメタ認知日記作成",
            zh: "5行核心元认知日志撰写",
            es: "Diario Metacognitivo de 5 Líneas",
            fr: "Journal Métacognitif en 5 Lignes",
            de: "5-Zeilen-Metakognitions-Tagebuch",
            pt: "Diário Metacognitivo de 5 Linhas",
            id: "Jurnal Metakognitif 5 Baris"
          },
          text: {
            ko: "오늘 잘된 점 2가지, 막혔던 점 1가지, 내일의 수정 행동 2가지를 5줄로 명확히 적습니다.",
            en: "Write down 2 things done well, 1 bottleneck, and 2 action improvements for tomorrow.",
            ja: "今日上手くいったこと2つ、詰まったこと1つ、明日の改善行動2つを5行で記録します。",
            zh: "用5行清晰记录：今天做好的2件事、卡壳的1件事、明天的2项改进行动。",
            es: "Anote 2 cosas bien hechas, 1 obstáculo y 2 mejoras para mañana en 5 líneas.",
            fr: "Écrivez 2 réussites, 1 obstacle et 2 actions d'amélioration pour demain.",
            de: "Schreiben Sie 2 Erfolge, 1 Engpass und 2 Verbesserungen für morgen auf.",
            pt: "Anote 2 coisas bem-sucedidas, 1 obstáculo e 2 melhorias para amanhã.",
            id: "Tuliskan 2 keberhasilan, 1 hambatan, dan 2 perbaikan untuk besok."
          }
        },
        {
          name: {
            ko: "내일의 핵심 미션 선명화",
            en: "Clarify Tomorrow's Key Mission",
            ja: "明日の核心ミッションの明確化",
            zh: "明确明日核心任务",
            es: "Clarificar la Misión Clave de Mañana",
            fr: "Clarifier la Mission Clé de Demain",
            de: "Kernaussage für morgen klären",
            pt: "Clarificar a Missão Principal de Amanhã",
            id: "Memperjelas Misi Utama Besok"
          },
          text: {
            ko: "복기를 마친 후 내일 아침 제일 먼저 수행할 단 하나의 중요 과제를 적고 일지장을 덮습니다.",
            en: "After reviewing, write down the single most important task for tomorrow morning and close the journal.",
            ja: "復習後、明日朝一番に実行する最重要タスクを1つ書いてノートを閉じます。",
            zh: "复盘结束后，写下明天清晨第一件要执行的最重要任务，合上日记本。",
            es: "Tras revisar, anote la tarea más importante para mañana por la mañana y cierre el diario.",
            fr: "Après révision, notez la tâche prioritaire de demain matin et fermez le journal.",
            de: "Schreiben Sie die wichtigste Aufgabe für morgen auf und schließen Sie das Buch.",
            pt: "Após revisar, anote a tarefa mais importante para amanhã e feche o diário.",
            id: "Setelah evaluasi, tulis tugas paling penting untuk besok pagi dan tutup buku."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "반드시 5개 국어나 외국어로 써야 하나요?",
            en: "Do I have to write in foreign languages like Nobel?",
            ja: "ノーベルのように外国語で書く必要がありますか？",
            zh: "必须像诺贝尔那样用外语书写吗？",
            es: "¿Tengo que escribir en idiomas extranjeros como Nobel?",
            fr: "Faut-il écrire en langues étrangères comme Nobel ?",
            de: "Muss ich wie Nobel in Fremdsprachen schreiben?",
            pt: "Preciso escrever em línguas estrangeiras como Nobel?",
            id: "Haruskah menulis dalam bahasa asing seperti Nobel?"
          },
          answer: {
            ko: "아닙니다. 모국어로 작성하되 '자신의 언어로 표현을 다듬는 행위' 자체가 핵심입니다. 여유가 있다면 익히고 있는 외국어로 1줄 적어보는 것도 뇌 자극에 좋습니다.",
            en: "No. Writing in your mother tongue is fine; reframing concepts in your own words is the core.",
            ja: "いいえ、母国語で構いません。自分の言葉で表現を整理すること自体が本質です。",
            zh: "不需要。用母语书写即可，用自己的语言重构概念本身就是核心所在。",
            es: "No. Escribir en su lengua materna está bien; lo importante es expresar conceptos con sus palabras.",
            fr: "Non. Votre langue maternelle suffit ; reformuler les concepts avec vos mots est l'essentiel.",
            de: "Nein. Die eigene Muttersprache reicht völlig aus.",
            pt: "Não. Escrever em sua língua materna é suficiente; reformular conceitos é o essencial.",
            id: "Tidak. Menulis dalam bahasa ibu sudah cukup; merumuskan konsep dengan kata sendiri adalah intinya."
          }
        },
        {
          question: {
            ko: "매일 일지를 쓰다가 지치면 어떻게 해야 하나요?",
            en: "What if I get exhausted writing daily logs?",
            ja: "毎日日記を書いていて疲れた場合はどうすればいいですか？",
            zh: "如果每天写日志感到疲惫该怎么办？",
            es: "¿Qué hacer si me canso de escribir a diario?",
            fr: "Que faire si je me fatigue d'écrire tous les jours ?",
            de: "Was tun, wenn das tägliche Schreiben ermüdet?",
            pt: "O que fazer se me cansar de escrever diariamente?",
            id: "Bagaimana jika lelah menulis jurnal setiap hari?"
          },
          answer: {
            ko: "장문의 글 대신 3개의 핵심 키워드만 적는 '키워드 복기'로 불량을 최소화하여 부담을 줄이세요.",
            en: "Reduce the burden by writing just 3 key words instead of long paragraphs.",
            ja: "長文の代わりに3つのキーワードだけを書き留める「キーワード復習」に切り替えましょう。",
            zh: "用只需写下3个关键词的“关键词复盘”替代长文，降低负担。",
            es: "Reduzca la carga escribiendo solo 3 palabras clave en lugar de párrafos.",
            fr: "Allégez la tâche en écrivant juste 3 mots-clés au lieu de paragraphes.",
            de: "Schreiben Sie statt langer Texte einfach 3 Schlüsselwörter auf.",
            pt: "Reduza a carga escrevendo apenas 3 palavras-chave.",
            id: "Ringankan beban dengan cukup menulis 3 kata kunci."
          }
        }
      ]
    }
  },

  // 7. 루이 브라이유 (Louis Braille)
  {
    slug: 'braille-tactile-simplification',
    item: {
      id: 'braille-tactile-simplification',
      name: '루이 브라이유',
      gender: 'male',
      era: '근대',
      location: '프랑스',
      lifespan: '1809 - 1852',
      birthYear: 1809,
      bio: "전 세계 시각장애인을 위한 6점 점자 체계를 발명하여 인류 지식 접근성에 혁명을 일으킨 위인입니다.",
      habitName: '손끝 촉각 패턴 검증과 핵심 요소 단순화 구조화',
      tags: ['#몰입', '#생산성', '#아이디어', '#자기계발'],
      timeOfDay: 'anytime',
      requiredItems: ['점자 송곳 또는 종이'],
      frequency: 'daily',
      historicalStory: "루이 브라이유는 기존의 군용 야간 문자(12점 체계)가 너무 복잡하여 손가락 하나로 한 번에 읽기 어렵다는 사실을 발견했습니다. 그는 매일 손끝으로 점의 감촉을 검증하며, 손가락 끝 마디 하나에 완벽히 들어오는 '6점 점자 시스템'으로 과감히 단순화했습니다. 복잡성을 덜어내고 핵심 요소만을 남기는 그의 본질 단순화 습관은 세계적 표준을 만들었습니다.",
      sciencePrinciples: "뇌의 작업 기억(Working Memory) 용량 한계를 고려하여 정보를 최소 단위(Chunking)로 단순화하면 뇌의 인지 부하(Cognitive Load)가 획기적으로 줄어들어 처리 속도가 극대화됩니다.",
      quote: "지식에 대한 접근은 장애와 상관없이 모두에게 평등해야 한다.",
      trigger: "시스템이나 업무 프로세스가 너무 복잡하여 오류와 지연이 자주 발생할 때",
      modernGuide: [
        "현재 진행 중인 복잡한 작업이나 루틴에서 불필요한 단계를 찾아냅니다.",
        "한 번에 처리할 수 있는 최대 핵심 요소 3~5가지로 프로세스를 단순화합니다.",
        "단순화된 새 시스템을 즉시 적용하여 처리 속도와 명확성을 높입니다."
      ],
      actionName: "핵심 3단계 본질 단순화 검증 (브라이유 루틴)",
      sources: [
        "C. Michael Mellor, *Louis Braille: A Touch of Genius* (2006)",
        "UNESCO Braille Heritage Documents"
      ]
    },
    translations: {
      title: {
        ko: "점자 발명가의 본질 직관? 루이 브라이유의 6점 단순화 루틴",
        en: "Braille Inventor's Core Intuition? Louis Braille's 6-Dot Simplification Routine",
        ja: "点字の発明者の本質直感？ルイ・ブライユの6点シンプル化ルーティン",
        zh: "盲文发明家的本质直觉？路易·布莱叶的六点简化习惯",
        es: "¿La intuición esencial del inventor del Braille? La rutina de simplificación de 6 puntos de Louis Braille",
        fr: "L'intuition du créateur du Braille ? La routine de simplification à 6 points de Louis Braille",
        de: "Die Intuition des Braille-Erfinders? Louis Brailles 6-Punkt-Vereinfachungsroutine",
        pt: "A intuição do inventor do Braille? A rotina de simplificação de 6 pontos de Louis Braille",
        id: "Intuisi Utama Penemu Braille? Rutinitas Penyederhanaan 6 Titik Louis Braille"
      },
      description: {
        ko: "복잡했던 12점 군용 문자를 손가락 한 마디에 들어오는 6점 점자로 단순화하여 지식 혁명을 일으킨 루이 브라이유의 본질 단순화 기술.",
        en: "Discover how Louis Braille simplified complex 12-dot military codes into a 6-dot tactile system to revolutionize literacy.",
        ja: "複雑だった12点の軍用文字を指先一つに収まる6点点字にシンプル化し、知識の革命を起こしたブライユの思考法。",
        zh: "介绍路易·布莱叶将复杂的12点军用密码简化为指尖可查的6点盲文、引发知识革命的精简思考习惯。",
        es: "Descubra cómo Louis Braille simplificó los códigos militares de 12 puntos en un sistema de 6 puntos.",
        fr: "Découvrez comment Louis Braille a simplifié les codes à 12 points en un système à 6 points.",
        de: "Erfahren Sie, wie Louis Braille komplexe 12-Punkt-Codes in ein 6-Punkt-System vereinfachte.",
        pt: "Descubra como Louis Braille simplificou códigos militares de 12 pontos em um sistema de 6 pontos.",
        id: "Temukan cara Louis Braille menyederhanakan kode 12 titik menjadi sistem 6 titik yang revolusioner."
      },
      authority: {
        ko: "전기 'Louis Braille: A Touch of Genius' 및 유네스코 점자 유산 사료",
        en: "Biography 'Louis Braille: A Touch of Genius' & UNESCO Archives",
        ja: "評伝「Louis Braille: A Touch of Genius」およびユネスコ史料",
        zh: "传记《Louis Braille: A Touch of Genius》与联合国教科文组织史料",
        es: "Biografía 'Louis Braille: A Touch of Genius' y archivos de la UNESCO",
        fr: "Biographie 'Louis Braille: A Touch of Genius' & archives de l'UNESCO",
        de: "Biografie 'Louis Braille: A Touch of Genius' & UNESCO-Archive",
        pt: "Biografia 'Louis Braille: A Touch of Genius' e arquivos da UNESCO",
        id: "Biografi 'Louis Braille: A Touch of Genius' & Arsip UNESCO"
      },
      intro: {
        ko: "전 세계 시각장애인들에게 읽고 쓰는 자유를 선물하며 인류 지식 접근성에 일대 혁명을 일으킨 위대한 발명가, 루이 브라이유. 그가 기존의 복잡했던 점자 체계를 뛰어넘어 완벽한 6점 점자를 창안할 수 있었던 비결은 무엇일까요? ⠃\n\n브라이유는 군대에서 쓰이던 12점 야간 문자가 손가락 한 마디로 한 번에 감지하기에 너무 크고 복잡하다는 사실을 깨달았습니다. 그는 매일 손끝 감각을 시험하며, 손가락을 움직이지 않고 단번에 인지할 수 있는 최적의 크기인 '6점 체계'로 불필요한 점들을 제거해 나갔습니다. 핵심 본질만 남기는 단순화 습관은 그의 최고의 무기였습니다.\n\n오늘 BuildSelf에서는 루이 브라이유의 6점 단순화 루틴과 인지 부하 감소의 과학을 소개합니다.",
        en: "Louis Braille, the inventor who revolutionized literacy for the visually impaired. How did he create the 6-dot braille system? ⠃\n\nBraille realized the 12-dot military code was too large to read with one fingertip. Testing tactile sensations daily, he stripped away complexity until he reached the optimal 6-dot system. Removing clutter was his ultimate strength.\n\nToday, BuildSelf introduces Braille's 6-dot simplification routine.",
        ja: "視覚障害者に読み書きの自由を贈ったルイ・ブライユ。彼が6点点字を創案できた秘密は何でしょうか？ ⠃\n\nブライユは12点軍用文字が指先で一度に認識するには大きすぎることに気づきました。毎日触覚を検証し、最適な6点システムへとシンプル化しました。\n\n今日のBuildSelfではブライユの6点シンプル化ルーティンを紹介します。",
        zh: "给全球视障人士带来阅读与书写自由的路易·布莱叶。他能创制出完美六点盲文的秘诀是什么？ ⠃\n\n布莱叶发现12点军用文字太大，指尖无法一次感知。他每天测试触觉，将不必要的点砍掉，直至得出最完美的6点系统。\n\n今天，BuildSelf 将介绍布莱叶的六点简化习惯。",
        es: "Louis Braille, el inventor que revolucionó la alfabetización. ¿Cómo creó el sistema de 6 puntos? ⠃\n\nBraille se dio cuenta de que el código militar de 12 puntos era demasiado grande. Probando sensaciones a diario, simplificó al sistema ideal de 6 puntos.\n\nHoy, BuildSelf presenta la rutina de simplificación de Braille.",
        fr: "Louis Braille, l'inventeur qui a révolutionné la lecture pour tous. Comment a-t-il créé le système à 6 points ? ⠃\n\nBraille a compris que le code à 12 points était trop grand. En testant le toucher au quotidien, il a simplifié le système jusqu'à 6 points.\n\nAujourd'hui, BuildSelf vous présente la routine de simplification de Braille.",
        de: "Louis Braille, der Erfinder der Blinden-Punktschrift. Wie schuf er das 6-Punkt-System? ⠃\n\nBraille erkannte, dass der 12-Punkt-Militärcode zu groß war. Durch tägliches Testen reduzierte er ihn auf optimale 6 Punkte.\n\nHeute stellt BuildSelf Brailles 6-Punkt-Routine vor.",
        pt: "Louis Braille, o inventor que revolucionou a alfabetização. Como ele criou o sistema de 6 pontos? ⠃\n\nBraille percebeu que o código de 12 pontos era grande demais. Testando o tato diariamente, simplificou até o sistema de 6 pontos.\n\nHojo, o BuildSelf apresenta a rotina de simplificação de Braille.",
        id: "Louis Braille, penemu yang merevolusi melek huruf bagi tunanetra. Bagaimana ia menciptakan sistem 6 titik? ⠃\n\nBraille menyadari kode 12 titik terlalu besar untuk dibaca satu ujung jari. Dengan menguji sensasi harian, ia menyederhanakannya menjadi 6 titik.\n\nHari ini, BuildSelf menyajikan rutinitas penyederhanaan 6 titik Braille."
      },
      whyTitle: {
        ko: "작업 기억 청킹(Chunking)을 통한 인지 과부하 차단",
        en: "Preventing Cognitive Overload via Working Memory Chunking",
        ja: "ワーキングメモリのチャンキングによる認知過負荷の遮断",
        zh: "通过工作记忆块化（Chunking）阻断认知过载",
        es: "Prevención de Sobrecarga Cognitiva Mediante Agrupamiento",
        fr: "Prévention de la Surcharge par le Chunking en Mémoire de Travail",
        de: "Vermeidung kognitiver Überlastung durch Chunking",
        pt: "Prevenção de Sobrecarga Cognitiva via Agrupamento",
        id: "Mencegah Kelebihan Beban Kognitif Melalui Chunking Memori"
      },
      whyDesc: {
        ko: "인간의 작업 기억(Working Memory)은 한 번에 처리할 수 있는 정보의 양에 명확한 한계가 있습니다.\n\n브라이유 박사가 12점을 6점으로 절반이나 줄여 단번에 인지하게 만든 것처럼, 복잡한 업무 절차를 핵심 요소 3~5개 단위로 줄이는 <strong>'청킹(Chunking)'</strong> 작업은 뇌의 인지 부하를 줄이고 처리 속도를 극대화합니다.",
        en: "Human working memory has strict limits on information processed at once.\n\nJust as Braille cut 12 dots down to 6 for instant recognition, <strong>'chunking'</strong> complex processes into 3-5 core items eliminates cognitive load and boosts speed.",
        ja: "人間のワーキングメモリは一度に処理できる量に限界があります。\n\nブライユが12点を6点に減らして一瞬で認識可能にしたように、プロセスを3〜5個のコア要素にまとめる<strong>「チャンキング（Chunking）」</strong>は処理速度を極大化します。",
        zh: "人类的工作记忆在一次性处理信息量方面存在明确极限。\n\n正如布莱叶将12点砍掉一半缩至6点以便瞬间识别一样，将复杂流程缩减至3~5个核心要素的<strong>“块化（Chunking）”</strong>能大幅消除认知负荷。",
        es: "La memoria de trabajo tiene límites estrictos.\n\nAl igual que Braille redujo 12 puntos a 6, el <strong>'agrupamiento (chunking)'</strong> elimina sobrecargas y maximiza la velocidad.",
        fr: "La mémoire de travail a des limites strictes.\n\nTout comme Braille a réduit 12 points à 6, le <strong>'chunking'</strong> élimine la surcharge et accélère le traitement.",
        de: "Das Arbeitsgedächtnis hat strenge Grenzen.\n\nWie Braille 12 Punkte auf 6 reduzierte, eliminiert <strong>'Chunking'</strong> kognitive Überlastung.",
        pt: "A memória de trabalho tem limites estritos.\n\nAssim como Braille reduziu 12 pontos para 6, o <strong>'agrupamento'</strong> elimina sobrecargas e acelera o processamento.",
        id: "Memori kerja manusia memiliki batas ketat.\n\nSeperti Braille memotong 12 titik menjadi 6, <strong>'chunking'</strong> menghilangkan beban kognitif dan meningkatkan kecepatan."
      },
      cautionTitle: {
        ko: "중요하지 않은 부가 요소를 용기 있게 삭제하세요",
        en: "Courageously eliminate non-essential secondary elements",
        ja: "重要でない付加要素を勇気を持って削除しましょう",
        zh: "次要元素，勇于果断删减",
        es: "Elimine valientemente los elementos secundarios no esenciales",
        fr: "Éliminez avec courage les éléments secondaires non essentiels",
        de: "Mutiges Entfernen unwichtiger Sekundärelemente",
        pt: "Elimine com coragem elementos secundários não essenciais",
        id: "Beranikan diri menghapus elemen sekunder yang tidak penting"
      },
      cautionDesc: {
        ko: "'혹시 나중에 쓰일지 모른다'는 미련으로 단계를 남겨두면 프로세스는 다시 복잡해집니다. 손가락 마디 하나에 들어오는 6점처럼 단순화하세요.",
        en: "Keeping steps 'just in case' makes processes complex again. Simplify like 6 dots under one fingertip.",
        ja: "「念のため」とステップを残しておくと再び複雑になります。指先一つに収まる6点のようにシンプルにしましょう。",
        zh: "因“万一以后用到”而保留步骤会让流程再次变得复杂。像指尖一下的6点那样保持精简。",
        es: "Mantener pasos 'por si acaso' vuelve compleja la rutina. Simplifique a 6 puntos.",
        fr: "Garder des étapes 'au cas où' rend le processus complexe. Simplifiez jusqu'à 6 points.",
        de: "Schritte 'für alle Fälle' zu behalten, macht Prozesse kompliziert. Vereinfachen Sie auf 6 Punkte.",
        pt: "Manter etapas 'por via das dúvidas' torna o processo complexo. Simplifique até 6 pontos.",
        id: "Menyimpan langkah 'untuk jaga-jaga' membuat proses rumit lagi. Sederhanakan ke 6 titik."
      },
      steps: [
        {
          name: {
            ko: "복잡한 프로세스 요소 전수 진단",
            en: "Diagnose All Complex Process Elements",
            ja: "複雑なプロセス要素の全数診断",
            zh: "全盘诊断复杂流程要素",
            es: "Diagnosticar Elementos de Procesos Complejos",
            fr: "Diagnostiquer Tous les Éléments d'un Processus",
            de: "Komplexe Prozesselemente analysieren",
            pt: "Diagnosticar Elementos de Processos Complexos",
            id: "Diagnosis Semua Elemen Proses Rumit"
          },
          text: {
            ko: "현재 작성 중인 기획안이나 daily 업무 루틴의 모든 단계를 나열합니다.",
            en: "List all steps of your current project proposal or daily work routine.",
            ja: "現在作成中の企画書や毎日の作業ルーティンの全ステップを書き出します。",
            zh: "列出当前正在撰写的策划案或日常工作习惯的所有步骤。",
            es: "Enumere todos los pasos de su propuesta o rutina diaria actual.",
            fr: "Lister toutes les étapes de votre projet ou routine quotidienne.",
            de: "Listeten Sie alle Schritte Ihres Projekts oder Ihrer Routine auf.",
            pt: "Liste todas as etapas do seu projeto ou rotina diária.",
            id: "Daftarkan semua langkah dari proposal atau rutinitas harian Anda."
          }
        },
        {
          name: {
            ko: "핵심 3~5가지 요소 과감한 추출",
            en: "Extract Core 3-5 Essential Elements",
            ja: "核心3〜5個の要素の果敢な抽出",
            zh: "果断提取3~5个核心要素",
            es: "Extraer de 3 a 5 Elementos Esenciales",
            fr: "Extraire 3 à 5 Éléments Essentiels",
            de: "3-5 Kernelemente extrahieren",
            pt: "Extrair 3 a 5 Elementos Essenciais",
            id: "Ekstrak 3-5 Elemen Utama"
          },
          text: {
            ko: "결과에 80% 영향을 주는 핵심 3~5가지 필수 요소만 남기고 나머지를 과감히 삭제합니다.",
            en: "Keep only the core 3-5 essential items that drive 80% of results and cut the rest.",
            ja: "結果の80%に影響を与える核心の3〜5要素だけを残し、他を削ぎ落とします。",
            zh: "仅保留影响80%结果的3~5个核心要素，果断将其余部分删去。",
            es: "Conserve solo los 3-5 elementos clave que generan el 80% de los resultados.",
            fr: "Gardez seulement les 3 à 5 éléments clés générant 80 % des résultats.",
            de: "Behalten Sie nur die 3-5 Kernelemente, die 80 % der Ergebnisse bringen.",
            pt: "Conserve apenas os 3-5 elementos essenciais para 80% dos resultados.",
            id: "Simpan hanya 3-5 elemen kunci yang menghasilkan 80% hasil."
          }
        },
        {
          name: {
            ko: "단순화 체계 적용 및 원스톱 처리",
            en: "Apply Simplified System & One-Stop Process",
            ja: "シンプル化体系の適用とワンストップ処理",
            zh: "应用简化体系与一站式处理",
            es: "Aplicar Sistema Simplificado",
            fr: "Appliquer un Système Simplifié",
            de: "Vereinfachtes System anwenden",
            pt: "Aplicar Sistema Simplificado",
            id: "Terapkan Sistem المبسط"
          },
          text: {
            ko: "새로 정돈된 6점 스타일의 단순 시스템으로 업무를 즉시 한눈에 원스톱 처리합니다.",
            en: "Process your work at a glance using the newly streamlined 6-dot-style simple system.",
            ja: "新しく整えたシンプルなシステムで、作業を一目でワンストップ処理します。",
            zh: "用全新整理的精简体系，一目了然地高效一站式完成工作。",
            es: "Procese su trabajo de un vistazo usando el nuevo sistema simplificado.",
            fr: "Traitez votre travail en un coup d'œil avec le nouveau système.",
            de: "Erledigen Sie Ihre Arbeit auf einen Blick mit dem neuen System.",
            pt: "Processe seu trabalho num relance com o novo sistema simplificado.",
            id: "Proses pekerjaan Anda sekilas menggunakan sistem sederhana baru."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "단순화하다가 중요한 내용을 빼먹을까 봐 두려울 땐 어떻게 하나요?",
            en: "What if I fear leaving out important details while simplifying?",
            ja: "シンプル化する中で重要な内容を落とすのが怖い場合はどうすればいいですか？",
            zh: "害怕在精简过程中遗漏重要细节该怎么办？",
            es: "¿Qué hacer si temo omitir detalles importantes al simplificar?",
            fr: "Que faire si j'ai peur d'omettre des détails importants ?",
            de: "Was tun, wenn ich angst habe, Wichtiges zu wegzulassen?",
            pt: "O que fazer se tiver medo de omitir detalhes importantes?",
            id: "Bagaimana jika takut melewatkan detail penting saat menyederhanakan?"
          },
          answer: {
            ko: "삭제된 부가 정보는 '부록'이나 별도 폴더에 백업해 두고, 본문 프로세스에서는 핵심 3~5개만 노출시키는 이중화 전략을 쓰면 불안감을 해소할 수 있습니다.",
            en: "Back up deleted secondary details into an appendix folder and expose only core items in the main process.",
            ja: "削除した情報は「付録」フォルダにバックアップし、メインプロセスではコア要素だけを表示する戦略をとりましょう。",
            zh: "将删去的辅助信息备份在“附录”文件夹中，主流程仅展示核心3~5个要素即可消除不安。",
            es: "Guarde los detalles secundarios en una carpeta de anexo y exponga solo lo esencial en el proceso principal.",
            fr: "Sauvegardez les détails secondaires dans un dossier annexe et ne gardez que l'essentiel.",
            de: "Sichern Sie Sekundärdetails im Anhang und zeigen Sie im Hauptprozess nur das Wesentliche.",
            pt: "Guarde detalhes num anexo e exponha apenas o essencial no processo principal.",
            id: "Cadangkan detail sekunder di folder lampiran dan tampilkan hanya yang utama di proses utama."
          }
        },
        {
          question: {
            ko: "팀 업무 프로세스에도 이 방식을 적용할 수 있나요?",
            en: "Can this method be applied to team work processes?",
            ja: "チームの作業プロセスにもこの方法を適用できますか？",
            zh: "这种方法能应用于团队工作流程吗？",
            es: "¿Se puede aplicar este método a procesos de equipo?",
            fr: "Peut-on appliquer cette méthode aux processus d'équipe ?",
            de: "Kann diese Methode auf Teamprozesse angewendet werden?",
            pt: "Esse método pode ser aplicado a processos de equipe?",
            id: "Bisakah metode ini diterapkan pada proses kerja tim?"
          },
          answer: {
            ko: "네, 회의 안건이나 보고서 결재 라인을 3단계 이하로 축소하는 단순화 규칙을 도입하면 팀 전반의 소통 속도가 급격히 향상됩니다.",
            en: "Yes, reducing meeting agendas or approval lines to 3 steps or fewer dramatically speeds up team communication.",
            ja: "はい、会議のアジェンダや承認ラインを3ステップ以下に縮小することで、チーム全体の溝通速度が向上します。",
            zh: "当然可以。将会议议程或审批流程缩减至3步以内，能显著提升团队整体的沟通效率。",
            es: "Sí, reducir las agendas de reuniones o líneas de aprobación a 3 pasos acelera la comunicación.",
            fr: "Oui, réduire les ordres du jour ou validations à 3 étapes accélère la communication d'équipe.",
            de: "Ja, die Reduzierung von Besprechungsagenden auf 3 Schritte beschleunigt die Kommunikation.",
            pt: "Sim, reduzir pautas de reunião ou aprovações para 3 etapas acelera a comunicação.",
            id: "Ya, mengurangi agenda rapat atau alur persetujuan menjadi 3 langkah mempercepat komunikasi tim."
          }
        }
      ]
    }
  },

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
        ja: "原子核を発見した現代物理学の巨匠、アーネスト・ラザフォードの午後4時ティータイム",
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
        ko: "원자핵의 존재를 최초로 밝혀내 노벨 화학상을 수상하고 '핵물리학의 아버지'라 불리는 현대 물리학의 거장, 어네스트 러더퍼드. 집단 창의성을 이끌어내어 수많은 위대한 대발견을 일궈낸 그의 연구소 분위기의 비결은 무엇이었을까요? ☕\n\n러더퍼드는 카벤디시 연구소 소장 시절 매일 오후 4시가 되면 연구원들과 함께 연구실 중앙에 모여 홍차와 비스킷을 나누며 비공식적인 티 타임을 가졌습니다. 이 자리에서는 직급이나 나이에 상관없이 누구나 자유롭게 논쟁하고 아이디어를 제안했습니다. 격식 없는 수평적 토론 루틴은 러더퍼드와 그의 팀이 원자핵을 발견하는 결정적 영감을 선사했습니다.\n\n오늘 BuildSelf에서는 어네스트 러더퍼드의 오후 4시 소크라테스 티 타임 루틴과 심리적 안전감의 과학을 소개합니다.",
        en: "Ernest Rutherford, the father of nuclear physics who discovered the atomic nucleus. Where did his team's breakthroughs come from? ☕\n\nEvery afternoon at 4 PM, Rutherford gathered his researchers for tea and biscuits. In this informal setting, anyone could freely challenge ideas regardless of rank. This horizontal debate routine paved the way for splitting the atom.\n\nToday, BuildSelf introduces Rutherford's 4 PM tea debate routine.",
        ja: "原子核を発見した現代物理学の巨匠、アーネスト・ラザフォード。偉大な発見を生み出した秘密は何だったのでしょうか？ ☕\n\nラザフォードは毎日午後4時になると、研究者たちと紅茶を飲みながら非公式なティータイムを持ちました。誰でも自由な意見交換ができる水平的な討論のルーティンが偉大な発見を生み出しました。\n\n今日のBuildSelfではラザフォードのティータイム習慣を紹介します。",
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
        ja: "心理的安全性が誘導する集団的創造性と抑制解除",
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
            ja: "一人で活動するフリーランスもこのルーティンを適用できますか？",
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
        ja: "集中した脳活動が続くと前頭葉がオーバーヒートします。\n\n全身を使う高強度有酸素運動は<strong>BDNF（脳由来神経栄養因子）</strong>の分泌を促し、脳の血流を全身へ分散させます。",
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
        ko: "베네치아를 떠나 24년간 아시아 전역을 누비며 인류 역사상 가장 위대한 탐험 문학인 '동방견문록'을 남긴 이탈리아의 탐험가, 마르코 폴로. 몽골 제국의 황제 쿠빌라이 칸을 사로잡고 수십 년 뒤에도 동방의 미식, 지리, 문화를 마치 눈앞에서 보듯 생생하게 증언해 낸 그의 비결은 무엇이었을까요? 🐪\n\n마르코 폴로는 매일 밤 낯선 거친 탐험지에서도 양피지와 수첩을 펼쳐 그날 목격한 생소한 풍경, 낯선 향기와 언어, 시장의 거래품과 대화들을 상세히 기록했습니다. 오감의 미세한 감각 정보를 매일 밤 꼼꼼히 채록하는 습관은 그에게 압도적인 인지적 에피소드 기억 보관소를 구축해 주었습니다.\n\n오늘 BuildSelf에서는 마르코 폴로의 야간 감각 일지 루틴과 에피소드 기억의 과학을 소개합니다.",
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
            ja: "毎日同じ家と会社の往復ですが、どうやって新しい感覚を見つけますか？",
            zh: "每天在“家-公司”两点一线中，该如何寻找新鲜感官？",
            es: "¿Cómo encontrar sensaciones nuevas en una rutina diaria monótona?",
            fr: "Comment trouver des sensations nouvelles dans une routine monotone ?",
            de: "Wie finde ich neue Sensorikeindrücke im gewohnten Alltag?",
            pt: "Como encontrar sensações novas numa rotina monótona?",
            id: "Bagaimana menemukan sensasi baru dalam rutinitas harian yang monoton?"
          },
          answer: {
            ko: "퇴근길 경로를 골목 하나 바꿔 걷기, 새로운 식재료 맛보기, 길가 계절 꽃의 향기에 5초간 집중하기 등 작은 미세 변주로도 충분히 낯선 오감 자극을 만들 수 있습니다.",
            en: "Change your walking route by one alley, try a new food, or smell a roadside flower for 5 seconds.",
            ja: "帰り道を一本変える、新しい食材を味わう、街の花のかおりに集中するなど、小さな変化で十分です。",
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
            ja: "日記を書いていると文章が長くなりますが、時間を短縮するコツはありますか？",
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
            ja: "「視覚：赤い夕焼けの色」「聴覚：砂利の音」のようにキーワードを羅列すれば3分で記録できます。",
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

console.log(`🚀 총 ${all10Habits.length}개 전체 위인 데이터 처리 시작...`);

all10Habits.forEach(data => {
  const { slug, item, translations } = data;

  // 1. Item JSON
  const itemPath = path.join(__dirname, 'data/habits/items', `${slug}.json`);
  fs.writeFileSync(itemPath, JSON.stringify(item, null, 2), 'utf-8');
  console.log(`✅ [Item Generated] src/data/habits/items/${slug}.json`);

  // 2. Translation JSON
  const blogJsonPath = path.join(__dirname, 'data/blogs/habits', `${slug}.json`);
  const blogJsonObj = { [slug]: translations };
  fs.writeFileSync(blogJsonPath, JSON.stringify(blogJsonObj, null, 2), 'utf-8');
  console.log(`✅ [Blog Translation JSON Generated] src/data/blogs/habits/${slug}.json`);

  // 3. Korean Master MD
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

console.log('✨ 10개 전체 위인 습관 데이터 생성 완료!');
