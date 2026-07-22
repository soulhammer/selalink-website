import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const todayStr = '2026-07-22';

const blogDataList = [
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
            ja: "指先の触覚刺激가どのように創造性を高めますか？",
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
        id: "Autobiografi 'Out of My Life and Thought' & Jurnal Journal of Music Therapy"
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
            ja: "感情の整理と簡単な夜のニ記作成",
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
            ko: "패턴 추출 및 가hypothesis 검증",
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
            zh: "从事实记录中找出重复出现出为模式或注意力下降点，从而得出改进方案。",
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
            ja: " green 自分の習慣を観察する時もこのルーティンを使えますか？",
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
  }
];

console.log(`총 ${blogDataList.length}개 블로그 데이터 처리 중...`);

blogDataList.forEach(data => {
  const { slug, item, translations } = data;

  // 1. src/data/habits/items/[slug].json
  const itemPath = path.join(__dirname, 'data/habits/items', `${slug}.json`);
  fs.writeFileSync(itemPath, JSON.stringify(item, null, 2), 'utf-8');
  console.log(`✅ [Item Generated] src/data/habits/items/${slug}.json`);

  // 2. src/data/blogs/habits/[slug].json
  const blogJsonPath = path.join(__dirname, 'data/blogs/habits', `${slug}.json`);
  const blogJsonObj = { [slug]: translations };
  fs.writeFileSync(blogJsonPath, JSON.stringify(blogJsonObj, null, 2), 'utf-8');
  console.log(`✅ [Blog Translation JSON Generated] src/data/blogs/habits/${slug}.json`);

  // 3. src/content/blog/ko/[slug].md
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

console.log('✨ 1-3번 스크립트 실행 완료!');
