import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 데이터 임포트
import { condimentIngredients } from './data/ingredients/condiment.ts';
import { dairyIngredients } from './data/ingredients/dairy.ts';
import { etcIngredients } from './data/ingredients/etc.ts';
import { fruitIngredients } from './data/ingredients/fruit.ts';
import { grainIngredients } from './data/ingredients/grain.ts';
import { meatIngredients } from './data/ingredients/meat.ts';
import { seafoodIngredients } from './data/ingredients/seafood.ts';
import { vegetableIngredients } from './data/ingredients/vegetable.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, 'content/blog');
const publicRoot = path.join(__dirname, '../public');
const transJsonPath = '/Users/soulhammer/.gemini/antigravity-ide/brain/77b027a6-2e4b-442f-b4b6-800970723a3b/scratch/blog_translations.json';

const allIngredients = [
  ...condimentIngredients, ...dairyIngredients, ...etcIngredients,
  ...fruitIngredients, ...grainIngredients, ...meatIngredients,
  ...seafoodIngredients, ...vegetableIngredients
];

const blogToIngMap = {
  'how-to-store-apples': 'apple',
  'how-to-store-avocado': 'avocado',
  'how-to-store-bananas': 'banana',
  'how-to-store-beef': 'beef',
  'how-to-store-bread': 'bread',
  'how-to-store-chicken': 'chicken',
  'how-to-store-eggs': 'egg',
  'how-to-store-garlic': 'garlic',
  'how-to-store-green-onions': 'green-onion',
  'how-to-store-milk': 'milk',
  'how-to-store-mushrooms': 'mushroom',
  'how-to-store-nuts': 'nuts',
  'how-to-store-olive-oil': 'olive-oil',
  'how-to-store-onions': 'onion',
  'how-to-store-perilla-oil': 'perilla-oil',
  'how-to-store-potatoes': 'potato',
  'how-to-store-salmon': 'salmon',
  'how-to-store-spinach': 'spinach',
  'how-to-store-squid': 'squid',
  'how-to-store-tofu': 'tofu',
  'how-to-store-tomatoes': 'tomato',
  'how-to-store-watermelon': 'watermelon'
};

const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id', 'ko'];

// 공용 템플릿 번역 사전
const l10n = {
  en: {
    title: 'How to Store [name] Fresh: Scientific Storage Guide',
    desc: 'Learn the best storage temperature, methods, and duration for [name] based on official safety guidelines.',
    whyTitle: 'Why store like this? Scientific facts',
    whyDesc: 'Understanding the unique characteristics of each ingredient and following the proper storage method is extremely important for maintaining freshness and hygiene.',
    guideTitle: 'Scientifically Proven Storage Guide',
    cautionTitle: 'Crucial Rules and Cautions',
    methodNames: { room: 'Room Temperature', fridge: 'Refrigerated Storage', freezer: 'Frozen Storage' },
    days: 'Days',
    step: 'STEP',
    authPrefix: 'This storage guide is verified based on official guidelines from the',
    authTitle: 'Verified Scientific Authority'
  },
  ja: {
    title: '[name]の鮮度を保つ保存方法：科学적保管ガイド',
    titleCorrected: '[name]の鮮度を保つ保存方法：科学的保管ガイド',
    desc: '公的安全基準に基づく[name]の最適な保存温度、保管方法、保存期間について解説します。',
    whyTitle: 'なぜこのように保存するのか？科学的な事実',
    whyDesc: '食材ごとの特性を理解し、正しい保存方法を実践することは、鮮度キープと衛生管理において非常に重要です。',
    whyDescCorrected: '食材ごとの特性を理解し、正しい保存方法を実践することは、鮮度キープと衛生管理において非常に重要입니다.',
    whyDescCorrectedCorrect: '食材ごとの特性を理解し、正しい保存方法を実践することは、鮮度キープと衛生管理において非常に重要です。',
    guideTitle: '科学的に検証された保存ガイド',
    cautionTitle: '保存時の注意点',
    methodNames: { room: '常温保存', fridge: '冷蔵保存', freezer: '冷凍保存' },
    days: '日間',
    step: 'ステップ',
    authPrefix: '本ガイドは、公認された食品衛生および保管ガイドラインを遵守して作成されました。',
    authTitle: '公認の科学的保管基準'
  },
  zh: {
    title: '如何保鲜储存[name]：科学储存指南',
    desc: '根据官方食品安全指南，了解[name]的最佳储存温度、方式和保鲜时长。',
    whyTitle: '为什么要这样储存？科学原理',
    whyDesc: '了解每种食材的独特特性并遵循正确的储存方法，对于保持新鲜度和卫生至关重要。',
    guideTitle: '科学验证的储存指南',
    cautionTitle: '储存注意事项',
    methodNames: { room: '常温储存', fridge: '冷藏储存', freezer: '冷冻储存' },
    days: '天',
    step: '步骤',
    authPrefix: '本指南严格遵守以下机构公认的食品安全与储存指南：',
    authTitle: '官方科学验证权威'
  },
  es: {
    title: 'Cómo almacenar [name] fresco: Guía científica de conservación',
    desc: 'Descubra la mejor temperatura, métodos y duración para conservar [name] según las directrices oficiales de seguridad.',
    whyTitle: '¿Por qué almacenarlo así? Datos científicos',
    whyDesc: 'Comprender las características únicas de cada ingrediente y seguir el método de almacenamiento adecuado es fundamental para mantener la frescura y la higiene.',
    guideTitle: 'Guía de almacenamiento científicamente probada',
    cautionTitle: 'Reglas cruciales y precauciones',
    methodNames: { room: 'Temperatura Ambiente', fridge: 'Almacenamiento Refrigerado', freezer: 'Almacenamiento Congelado' },
    days: 'Días',
    step: 'PASO',
    authPrefix: 'Esta guía de conservación cumple con las directrices oficiales de:',
    authTitle: 'Autoridad Científica Verificada'
  },
  fr: {
    title: 'Comment conserver [name] frais : Guide scientifique de conservation',
    desc: 'Découvrez la température, les méthodes et la durée optimales de conservation pour [name] selon les directives de sécurité officielles.',
    whyTitle: 'Pourquoi conserver ainsi ? Faits scientifiques',
    whyDesc: 'Il est essentiel de comprendre les caractéristiques uniques de chaque ingrédient et de suivre la bonne méthode de conservation pour préserver la fraîcheur et l’hygiène.',
    guideTitle: 'Guide de conservation scientifiquement prouvé',
    cautionTitle: 'Règles cruciales et précautions',
    methodNames: { room: 'Température Ambiante', fridge: 'Stockage Réfrigéré', freezer: 'Stockage Congelé' },
    days: 'Jours',
    step: 'ÉTAPE',
    authPrefix: 'Ce guide de conservation est basé sur les directives officielles de :',
    authTitle: 'Autorité Scientifique Vérifiée'
  },
  de: {
    title: 'Wie man [name] frisch lagert: Wissenschaftlicher Aufbewahrungsratgeber',
    desc: 'Erfahren Sie die beste Lagertemperatur, Methode und Haltbarkeit für [name] basierend auf offiziellen Sicherheitsrichtlinien.',
    whyTitle: 'Warum so lagern? Wissenschaftliche Fakten',
    whyDesc: 'Die einzigartigen Eigenschaften jedes Lebensmittels zu verstehen und die richtige Lagerungsmethode anzuwenden, ist entscheidend für Frische und Hygiene.',
    guideTitle: 'Wissenschaftlich geprüfter Lagerungsratgeber',
    cautionTitle: 'Wichtige Warnhinweise zur Lagerung',
    methodNames: { room: 'Raumtemperatur', fridge: 'Kühllagerung', freezer: 'Gefrierlagerung' },
    days: 'Tage',
    step: 'SCHRITT',
    authPrefix: 'Dieser Leitfaden entspricht den offiziellen Richtlinien von:',
    authTitle: 'Geprüfte wissenschaftliche Autorität'
  },
  pt: {
    title: 'Como armazenar [name] fresco: Guia científico de conservação',
    desc: 'Descubra la mejor temperatura, métodos y duración de armazenamento para [name] com base nas diretrizes oficiais de segurança.',
    whyTitle: 'Por que armazenar assim? Fatos científicos',
    whyDesc: 'Comprender as características únicas de cada ingrediente e seguir o método de armazenamento adequado é extremamente importante para manter o frescor e a higiene.',
    guideTitle: 'Guia de armazenamento comprovado cientificamente',
    cautionTitle: 'Reglas cruciales e precauções',
    methodNames: { room: 'Temperatura Ambiente', fridge: 'Armazenamento Refrigerado', freezer: 'Armazenamento Congelado' },
    days: 'Dias',
    step: 'PASO',
    authPrefix: 'Este guia de conservação segue as diretrizes oficiais de:',
    authTitle: 'Autoridade Científica Verificada'
  },
  id: {
    title: 'Cara Menyimpan [name] agar Tetap Segar: Panduan Penyimpanan Ilmiah',
    desc: 'Ketahui suhu, metode, dan masa simpan terbaik untuk [name] berdasarkan pedoman keselamatan resmi.',
    whyTitle: 'Mengapa disimpan seperti ini? Fakta ilmiah',
    whyDesc: 'Memahami karakteristik unik setiap bahan makanan dan mengikuti metode penyimpanan yang benar sangat penting untuk menjaga kesegaran dan kebersihan.',
    guideTitle: 'Panduan Penyimpanan yang Terbukti Secara Ilmiah',
    cautionTitle: 'Aturan Penting dan Peringatan',
    methodNames: { room: 'Suhu Ruang', fridge: 'Penyimpanan Dingin', freezer: 'Penyimpanan Beku' },
    days: 'Hari',
    step: 'LANGKAH',
    authPrefix: 'Panduan penyimpanan ini didasarkan pada pedoman keselamatan resmi dari:',
    authTitle: 'Otoritas Ilmiah Terverifikasi'
  },
  ko: {
    title: '[name] 신선하게 보관하는 법: 과학적 보관 가이드',
    desc: '공인된 안전 가이드라인에 따른 [name]의 최적 보관 온도, 방식 및 보관 기한을 확인하세요.',
    whyTitle: '왜 이렇게 보관해야 할까요? 과학적 팩트',
    whyDesc: '각 식재료의 고유한 특성을 이해하고 이에 맞는 올바른 보관법을 적용하는 것은 신선도 유지와 위생 관리에 있어 매우 중요합니다.',
    guideTitle: '과학적으로 검증된 보관 가이드',
    cautionTitle: '보관 시 필수 규칙 및 주의사항',
    methodNames: { room: '상온 보관', fridge: '냉장 보관', freezer: '냉동 보관' },
    days: '일',
    step: 'STEP',
    authPrefix: '본 보관 가이드는 다음 기관의 공인된 가이드라인에 기초하여 검증되었습니다:',
    authTitle: '검증된 과학적 보관 기준'
  }
};

const storageFaqs = {
  en: [
    {
      question: "Should I wash ingredients with water before putting them in the refrigerator?",
      answer: "No, washing before storage traps excess moisture, promoting mold and bacterial growth. Wipe off dirt with a dry cloth and wash right before eating."
    },
    {
      question: "How should I handle and store bruised or damaged parts?",
      answer: "Damaged parts accelerate ethylene and moisture loss. Cut off the damaged parts immediately and eat them first. Leaving them with healthy ones will spoil the whole batch."
    }
  ],
  ko: [
    {
      question: "식재료를 냉장고에 넣기 전에 반드시 물로 씻어야 하나요?",
      answer: "아닙니다. 보관 전 물로 씻으면 과도한 습기가 갇혀 곰팡이나 세균 번식이 촉진됩니다. 흙과 먼지만 마른 천으로 가볍게 털어내 보관하고, 씻는 것은 먹기 직전에 하는 것이 정석입니다."
    },
    {
      question: "상처 나거나 짓무른 부위는 어떻게 처리하고 보관해야 하나요?",
      answer: "상처 난 부위는 에틸렌과 수분 손실을 촉진하므로 즉시 따로 칼로 도려내고 먼저 드셔야 합니다. 상처 난 과일이나 채소를 일반 식재료와 섞어 두면 전체가 빠르게 썩게 됩니다."
    }
  ],
  ja: [
    {
      question: "食材を冷蔵庫に入れる前に必ず水洗いすべきですか？",
      answer: "いいえ。保存前に水洗いすると過度な湿気が閉じ込められ、カビや細菌の繁殖を促進します。汚れは乾いた布で拭き取り、食べる直前に洗ってください。"
    },
    {
      question: "傷んだり潰れたりした部分はどのように処理して保存すべきですか？",
      answer: "傷んだ部分はエチレンや水分損失を促進するため、すぐに切り落として先に消費してください。健康な食材と一緒に置くと全体が早く傷みます。"
    }
  ],
  zh: [
    {
      question: "把食材放进冰箱前一定要用水洗吗？",
      answer: "不需要。保存前水洗会锁住过多水分，促进霉菌和细菌滋生。用干布擦去污垢，吃之前再洗即可。"
    },
    {
      question: "碰伤或腐烂的部分应该如何处理和保存？",
      answer: "受损部分会加速乙烯和水分流失，请立即切除并优先食用。如果与健康的食材混放，会导致整体快速腐烂。"
    }
  ],
  es: [
    {
      question: "¿Se deben lavar los alimentos antes de refrigerarlos?",
      answer: "No, lavarlos antes de guardarlos atrapa humedad, lo que favorece hongos y bacterias. Limpie el polvo en seco y lávelos justo antes de consumirlos."
    },
    {
      question: "¿Cómo tratar y almacenar partes golpeadas o dañadas?",
      answer: "Las partes dañadas aceleran el etileno y la pérdida de agua. Córtelas de inmediato y consúmalas primero. Dejarlas con el resto dañará todo el lote."
    }
  ],
  fr: [
    {
      question: "Faut-il laver les aliments avant de les mettre au réfrigérateur ?",
      answer: "Non, les laver favorise l'excès d'humidité, accélérant les moisissures. Essuyez la saleté à sec et lavez-les juste avant de les manger."
    },
    {
      question: "Comment gérer et conserver les parties abîmées ?",
      answer: "Les zones endommagées libèrent de l'éthylène. Coupez-les immédiatement et consommez-les en priorité pour éviter de gâter le reste du lot."
    }
  ],
  de: [
    {
      question: "Sollte man Lebensmittel vor dem Kühlen waschen?",
      answer: "Nein, Waschen vor der Lagerung speichert Feuchtigkeit und fördert Schimmel. Wischen Sie Schmutz trocken ab und waschen Sie erst vor dem Verzehr."
    },
    {
      question: "Wie lagert man beschädigte Stellen?",
      answer: "Beschädigte Stellen beschleunigen den Verderb. Schneiden Sie diese sofort ab und verbrauchen Sie sie zuerst, um andere Früchte zu schützen."
    }
  ],
  pt: [
    {
      question: "Deve-se lavar os alimentos com água antes de refrigerar?",
      answer: "Não, lavar antes de guardar retém humidade, o que estimula fungos. Limpe a sujeira a seco e lave apenas antes de comer."
    },
    {
      question: "Como tratar e guardar partes machucadas?",
      answer: "Partes danificadas aceleram a deterioração. Corte-as de imediato e consuma primeiro para evitar que estraguem o resto do lote."
    }
  ],
  id: [
    {
      question: "Haruskah mencuci bahan makanan sebelum dimasukkan ke kulkas?",
      answer: "Tidak, mencuci sebelum disimpan menjebak kelembapan berlebih dan memicu bakteri. Lap dengan kain kering dan cuci sebelum dimakan."
    },
    {
      question: "Bagaimana cara menangani dan menyimpan bagian yang memar?",
      answer: "Bagian yang rusak mempercepat pembusukan. Potong segera dan konsumsi terlebih dahulu agar tidak merusak bahan makanan lainnya."
    }
  ]
};

const specialFaqs = {
  'apple': {
    ko: [
      { question: "사과를 다른 과일과 함께 보관하면 안 되는 이유가 무엇인가요?", answer: "사과는 익으면서 에틸렌 가스를 많이 분출합니다. 이 가스가 주변의 다른 과일이나 채소의 숙성을 촉진시켜 쉽게 무르고 부패하게 만들기 때문에 지퍼백 등으로 따로 밀봉해 보관해야 합니다." },
      { question: "갈변을 방지하는 팁이 있나요?", answer: "자른 사과 표면에 묽은 소금물이나 설탕물을 살짝 바르거나 레몬즙을 발라두면, 산화 효소 작용이 억제되어 뽀얀 속살을 오래 유지할 수 있습니다." }
    ],
    en: [
      { question: "Why shouldn't I store apples with other fruits?", answer: "Apples emit high amounts of ethylene gas, which accelerates ripening and rot in nearby produce. Store them sealed in zip-lock bags to isolate them." },
      { question: "Is there a tip to prevent browning of cut apples?", answer: "Lightly brushing cut apples with salted water, sugar water, or lemon juice inhibits oxidizing enzymes, keeping them fresh longer." }
    ],
    ja: [
      { question: "リンゴを他の果物と一緒に保存してはいけない理由は何ですか？", answer: "リンゴは熟す過程でエチレンガスを多く放出します。このガスが周囲の他の果物や野菜の成熟を促し、傷みやすくするため、ジッパーバッグ等で個別に密封して保存する必要があります。" },
      { question: "変色を防ぐコツはありますか？", answer: "カットしたリンゴの表面に薄い塩水や砂糖水を塗るか、レモン汁をかけておくと、酸化酵素の働きが抑えられ、変色を防ぐことができます。" }
    ],
    zh: [
      { question: "为什么不能把苹果与其他水果一起存放？", answer: "苹果在成熟过程中会释放大量乙烯气体。这种气体会加速周围其他水果和蔬菜的成熟与腐烂，因此需要用保鲜袋等单独密封保存。" },
      { question: "有什么防止苹果切面变黑的窍门吗？", answer: "在切开的苹果表面涂上淡盐水、糖水或柠檬汁，可以抑制氧化酶 of 活性，从而防止变色。" }
    ]
  },
  'avocado': {
    ko: [
      { question: "설익은 아보카도를 냉장고에 넣으면 안 되나요?", answer: "네, 덜 익은 초록색 아보카도를 저온 냉장하면 숙성이 완전히 멈추고 냉해를 입어 속이 검게 변합니다. 반드시 상온에서 겉껍질이 갈색으로 변할 때까지 완숙한 후 냉장 보관하세요." },
      { question: "남은 아보카도를 보관하는 방법은?", answer: "자르고 남은 아보카도는 씨를 남겨둔 채 표면에 레몬즙이나 올리브 오일을 얇게 바르고 밀폐 용기에 넣어 냉장 보관하면 갈변을 최소화할 수 있습니다." }
    ],
    en: [
      { question: "Can I refrigerate unripe avocados?", answer: "No, putting hard green avocados in the fridge stops the ripening process and causes chilling injury, making the flesh turn black. Ripen at room temp until brown before chilling." },
      { question: "How do I store a cut avocado half?", answer: "Keep the seed in place, brush the cut surface with lemon juice or olive oil, and seal in an airtight container in the fridge to minimize browning." }
    ],
    ja: [
      { question: "未熟なアボカドを冷蔵庫に入れてもいいですか？", answer: "いいえ、青く硬いアボカドを低温冷蔵すると追熟が完全に止まり、低温障害を起こして中身が黒く変色します。必ず常温で皮が茶色くなるまで完熟させてから冷蔵してください。" },
      { question: "残ったアボカドの保存方法は？", answer: "カットして残ったアボカドは、種を残したまま断面にレモン汁やオリーブオイルを薄く塗り、密閉容器に入れて冷蔵すると変色を最小限に抑えられます。" }
    ],
    zh: [
      { question: "未成熟的牛油果可以放进冰箱吗？", answer: "不可以。将未成熟的绿色硬牛油果冷藏会完全停止其催熟过程，并导致冻伤使果肉变黑。请务必在室温下放至外皮变褐成熟后再冷藏。" },
      { question: "切开剩下的半个牛油果怎么保存？", answer: "保留果核，在切面上薄薄地涂一层柠檬汁或橄榄油，放入密封容器中冷藏，可以最大程度地减少氧化变色。" }
    ]
  },
  'banana': {
    ko: [
      { question: "바나나를 냉장 보관하면 껍질이 까맣게 변하는데 먹어도 되나요?", answer: "네, 껍질이 갈색이나 검은색으로 변하는 것은 저온 냉해 현상으로, 내부 과육은 여전히 신선하고 단맛이 더 강해집니다. 단, 냉장실에 넣기 전 완전히 익은 상태여야 합니다." },
      { question: "바나나 꼭지를 호일로 감싸는 이유는 무엇인가요?", answer: "바나나의 꼭지 부위는 에틸렌 가스를 가장 많이 방출하는 통로입니다. 이곳을 호일로 꽁꽁 싸두면 가스 방출이 억제되어 바나나가 무르는 속도를 크게 늦출 수 있습니다." }
    ],
    en: [
      { question: "My banana peel turned black in the fridge, is it safe to eat?", answer: "Yes, blackening is a chilling reaction of the peel, but the flesh inside remains sweet and safe to eat. Ensure they are fully ripe before refrigerating." },
      { question: "Why wrap banana stems in aluminum foil?", answer: "Banana stems release the most ethylene gas. Wrapping them tightly inhibits gas release, significantly delaying the softening of the fruit." }
    ],
    ja: [
      { question: "バナナを冷蔵保存すると皮が黒くなりますが、食べても大丈夫ですか？", answer: "はい、皮が黒くなるのは低温障害によるものですが、中の果肉は新鮮で甘みも増しています。ただし、冷蔵庫に入れる前に完全に熟した状態でなければなりません。" },
      { question: "バナナの茎をアルミホイルで包む理由は何ですか？", answer: "バナナの茎の部分はエチレンガスを最も多く放出する場所です。ここをホイルで包むことでガスの放出が抑えられ、傷む速度を大幅に遅らせることができます。" }
    ],
    zh: [
      { question: "香蕉放冰箱冷藏皮变黑了还能吃吗？", answer: "可以。外皮变黑是香蕉的低温冻伤反应，但内部果肉依然新鲜，且甜度会增加。不过，放入冰箱前香蕉必须是完全成熟的状态。" },
      { question: "为什么用铝箔纸包住香蕉根部？", answer: "香蕉的根部是释放乙烯气体最多的地方。用铝箔纸紧紧包住根部可以抑制气体释放，从而显著减缓香蕉变软的速度。" }
    ]
  },
  'beef': {
    ko: [
      { question: "밀봉된 소고기 안쪽이 갈색으로 변했는데 상한 건가요?", answer: "아닙니다. 소고기의 미오글로빈 성분이 산소와 차단되면 일시적으로 갈색(자갈색)으로 변합니다. 개봉 후 공기 중에 15~20분 두어 붉은 선홍색으로 돌아온다면 정상입니다." },
      { question: "냉동 소고기를 안전하게 해동하는 방법은?", answer: "가장 안전한 방법은 하루 전에 냉장실로 옮겨 서서히 천천히 해동하는 것입니다. 실온이나 뜨거운 물에 해동하면 세균이 폭발적으로 증식하므로 절대 피해야 합니다." }
    ],
    en: [
      { question: "The inside of my packaged beef turned brown. Is it spoiled?", answer: "No, meat pigment (myoglobin) turns brownish-red without oxygen. If it regains its bright red color after 15-20 minutes of exposure to air, it is perfectly fine." },
      { question: "What is the safest way to thaw frozen beef?", answer: "Thaw it slowly in the refrigerator overnight. Avoid thawing at room temperature or in hot water, as it promotes rapid bacterial growth." }
    ],
    ja: [
      { question: "密閉された牛肉の内側が褐色に変色していますが、傷んでいますか？", answer: "いいえ、牛肉のミオグロビン成分が酸素から遮断されると、一時的に褐色になります。開封して空気に 15〜20分触れさせ、赤い鮮紅色に戻れば問題ありません。" },
      { question: "冷凍牛肉を安全に解凍する方法は？", answer: "最も安全な方法は、前日に冷蔵庫に移してゆっくりと低温解凍することです。常温や熱湯での解凍は、細菌が爆発的に増殖するため避けてください。" }
    ],
    zh: [
      { question: "密封包装的牛肉内部变褐了，是变质了吗？", answer: "不是的。牛肉中的肌红蛋白在缺氧状态下会暂时呈现褐色。打开包装在空气中静置 15-20 分钟后，若恢复鲜红色即属于正常现象。" },
      { question: "冷冻牛肉最安全的解冻方法是什么？", answer: "最安全的方法是提前一天移入冷藏室，使其缓慢解冻。避免在室温或热水中解冻，因为这会导致细菌爆发性滋生。" }
    ]
  },
  'bread': {
    ko: [
      { question: "빵은 왜 냉장 보관하면 굳어지나요?", answer: "냉장 온도(2~5도)에서는 빵 속 전분의 수분이 빠져나가 노화가 가장 빠르게 일어납니다. 즉시 드실 빵만 실온에 두고 나머지는 밀봉하여 냉동 보관하세요." },
      { question: "냉동한 빵을 맛있게 드시는 방법은 무엇인가요?", answer: "실온에서 자연 해동한 뒤 토스터나 오븐에 살짝 구워내면 수분이 지켜져 겉은 바삭하고 속은 촉촉한 원래 식감으로 복원됩니다." }
    ],
    en: [
      { question: "Why does bread get stale when stored in the refrigerator?", answer: "At refrigeration temperatures (2-5°C), the starch in bread recrystallizes and loses moisture rapidly (retrogradation). Keep only immediate portions at room temp, and freeze the rest." },
      { question: "What is the best way to reheat frozen bread?", answer: "Thaw it naturally at room temperature, then toast it lightly in a toaster or oven. This restores the original 'crispy outside, soft inside' texture." }
    ],
    ja: [
      { question: "パンはなぜ冷蔵保存すると固くなるのですか？", answer: "冷蔵温度（2〜5度）ではパンの中のでんぷんの水分が抜け、劣化（老化）が最も早く起こります。すぐに食べるパンだけを常温に置き、残りは密封して冷凍保存してください。" },
      { question: "冷凍したパンを美味しく食べる方法は何ですか？", answer: "常温で自然解凍した後、トースターやオーブンで軽く焼くと水分が保たれ、外はカリッと中はモチッとした元の食感に戻ります。" }
    ],
    zh: [
      { question: "面包为什么冷藏保存会变硬？", answer: "在冷藏温度（2-5°C）下，面包中淀粉的水分流失最快，导致老化。建议只将近期食用的面包留在室温，其余密封冷冻保存。" },
      { question: "冷冻面包怎么加热最好吃？", answer: "在室温下自然解冻，然后用烤面包机或烤箱稍微烘烤。这样可以锁住水分，恢复原本外酥内软的口感。" }
    ]
  },
  'chicken': {
    ko: [
      { question: "생닭을 조리 전 물에 씻어야 할까요?", answer: "아닙니다. 생닭 표면의 캠필로박터 식중독균은 흐르는 물에 씻을 때 싱크대 주변 식기와 식재료로 튀어 심각한 교차 오염을 일으킵니다. 열을 가해 끓는 물에 소독 가열하여 균을 박멸하는 것이 정석입니다." },
      { question: "닭고기는 왜 보관 기간이 돼지고기보다 짧나요?", answer: "닭고기는 조직이 부드럽고 수분 함량이 매우 높아 균 증식이 아주 빠릅니다. 냉장 보관 시 반드시 2일 이내에 조리해 드시고 오래 둘 것은 즉시 냉동하세요." }
    ],
    en: [
      { question: "Should I wash raw chicken before cooking?", answer: "No, washing raw chicken spreads food poisoning bacteria (like Campylobacter) to utensils and surfaces through splashing water. Thorough cooking kills all bacteria safely." },
      { question: "Why is chicken's shelf life shorter than pork or beef?", answer: "Poultry has high moisture content and a delicate protein structure, making it highly susceptible to rapid bacterial growth. Keep chilled only for 2 days." }
    ],
    ja: [
      { question: "生鶏肉を調理前に水洗いすべきですか？", answer: "いいえ、生鶏肉の表面のカンピロバクター等の食中毒菌は、水洗い時にシンク周辺の食器や食材に飛び散り、深刻な二次汚染を引き起こします。加熱調理することで菌は死滅します。" },
      { question: "鶏肉はなぜ豚肉や牛肉より保存期間が短いのですか？", answer: "鶏肉は水分含有量が高く、組織が柔らかいため、細菌の増殖が非常に早いです。冷蔵保存時は必ず2日以内に調理し、長期保存は冷凍してください。" }
    ],
    zh: [
      { question: "生鸡肉在烹饪前需要用水洗吗？", answer: "不需要。生鸡肉表面的弯曲杆菌等食中毒菌在水洗时会随着溅起的水花扩散到水槽周围的餐具和食材上，造成严重的交叉污染。通过彻底加热烹饪即可杀灭细菌。" },
      { question: "为什么鸡肉的保质期比猪肉或牛肉短？", answer: "鸡肉的水分含量高且蛋白质结构细嫩，非常容易滋生细菌。冷藏时请务必在 2 天内食用完毕，需长期保存的应立即冷冻。" }
    ]
  },
  'egg': {
    ko: [
      { question: "계란을 세척한 후 보관하면 왜 안 되나요?", answer: "계란 표면에는 큐티클이라는 천연 보호막이 감싸고 있습니다. 물로 씻으면 이 막이 파괴되어 껍질 기공을 통해 살모넬라 등 외부 유해균이 내부로 유입됩니다. 오염물은 마른 천으로만 털어내세요." },
      { question: "계란을 뾰족한 곳이 아래로 가게 두는 이유는 무엇인가요?", answer: "계란의 둥근 부분에는 기실이라는 공기 주머니가 있어 숨을 쉽니다. 기실이 아래로 가면 노른자가 기실에 닿아 막이 찢어지거나 오염이 촉진되므로 둥근 쪽을 위로 해야 합니다." }
    ],
    en: [
      { question: "Why shouldn't I wash fresh eggs before storing them?", answer: "Washing strips away the natural protective cuticle coating. This allows Salmonella and other external bacteria to penetrate the porous eggshell." },
      { question: "Why store eggs with the pointed end down?", answer: "The blunt (rounded) end contains the air cell (air pocket). Keeping this end pointing up prevents the yolk from touching the air cell and spoiling." }
    ],
    ja: [
      { question: "卵を洗ってから保存してはいけないのはなぜですか？", answer: "卵の表面はクチクラ層という天然の 保護膜で覆われています。水洗いするとこの膜が破壊され、殻の気孔を通じてサルモネラ等の有害菌が内部に侵入しやすくなります。" },
      { question: "卵のとがった方を下にして保存するのはなぜですか？", answer: "卵の丸い側には気室という空気の部屋があり、呼吸をしています。丸い側を下に向けると黄身が気室に触れて傷みやすくなるため、とがった方を下にします。" }
    ],
    zh: [
      { question: "为什么不能洗完鸡蛋再保存？", answer: "鸡蛋表面有一层被称为角质层的天然保护膜。用水清洗会破坏这层膜，导致沙门氏菌等外部有害细菌通过蛋壳气孔渗入内部。脏污请只用干布擦拭。" },
      { question: "为什么要把鸡蛋尖头朝下摆放？", answer: "鸡蛋的圆头一端有被称为气室的空气囊。如果圆头朝下，蛋黄容易与气室接触导致变质，因此需要将圆头朝上、尖头朝下摆放。" }
    ]
  },
  'garlic': {
    ko: [
      { question: "깐 마늘에 수분이 닿으면 왜 쉽게 상하나요?", answer: "껍질을 벗긴 깐 마늘은 외벽이 노출되어 습도에 매우 민감합니다. 수분이 머물면 백색이나 회색 곰팡이가 급속도로 번식하므로 키친타월과 설탕을 이용해 철저히 건조 보관해야 합니다." },
      { question: "통마늘은 냉장실과 상온 중 어디에 보관하는 것이 좋나요?", answer: "껍질이 있는 통마늘은 냉장실에 넣으면 저온 다습한 환경 때문에 싹이 나거나 부패합니다. 망에 담아 통풍이 잘되는 서늘한 상온 그늘에 두는 것이 최선입니다." }
    ],
    en: [
      { question: "Why does peeled garlic spoil so quickly when exposed to moisture?", answer: "Peeled garlic lacks its protective skin, making it highly vulnerable to humidity. Excess moisture triggers rapid mold growth; keep them dry using sugar and paper towels." },
      { question: "Should whole garlic heads be stored in the fridge or at room temp?", answer: "Whole garlic heads sprout or rot quickly in the damp fridge. It is best to store them in a mesh bag in a cool, well-ventilated, shady area at room temperature." }
    ],
    ja: [
      { question: "むきにんにくに水分がつくと傷みやすいのはなぜですか？", answer: "皮をむいたにんにくは外壁が露出しており、湿度に非常に敏感です。水分があると白カビやグレーのカビが急速に繁殖するため、キッチンペーパー等で乾燥を保つ必要があります。" },
      { question: "丸ごとのにんにくは冷蔵庫と常温のどちらで保存すべきですか？", answer: "皮付きのにんにくは冷蔵庫に入れると、低温多湿な環境により芽が出たり腐敗しやすくなります。ネットに入れて通気性の良い涼しい常温の日陰で保存するのが最適です。" }
    ],
    zh: [
      { question: "剥好的大蒜接触水分为什么容易变质？", answer: "剥皮大蒜失去了保护外壳，对湿度非常敏感。如果有水分残留，白霉或灰霉会迅速滋生，因此需要使用厨房纸巾等工具保持彻底干燥。" },
      { question: "整头大蒜应该放冰箱还是常温保存？", answer: "带皮的整头大蒜如果放入冰箱，会因为低温潮湿的环境而发芽或腐烂。最好是装入网袋中，放在通风良好的凉爽常温避光处。" }
    ]
  },
  'green-onion': {
    ko: [
      { question: "대파를 뿌리째 신문지에 감싸 세워 두는 이유는?", answer: "식물은 수확 후에도 성장 본능을 기억합니다. 누워서 보관하면 대파가 스스로 일어서려고 에너지를 쓰며 금방 시들고 황화됩니다. 뿌리를 아래로 세우고 신문지로 수분을 지켜주는 것이 비결입니다." },
      { question: "대파 냉동 보관 시 진액이 나오는 것을 막으려면?", answer: "대파를 썰어서 바로 냉동하면 세포벽이 찢어져 끈적한 뮤신 진액이 흘러나옵니다. 대파를 썬 후 실온에서 표면 수분을 10분 정도 충분히 날린 뒤 얼리면 서로 엉겨 붙지 않고 깔끔합니다." }
    ],
    en: [
      { question: "Why wrap green onions in newspaper and store them upright?", answer: "Vegetables retain their growing instinct. If stored flat, they spend energy trying to bend upright, yellowing quickly. Keeping them vertical preserves energy." },
      { question: "How can I prevent slime when freezing chopped green onions?", answer: "Freezing immediately breaks cell walls, releasing sticky mucin. Let the chopped green onions air-dry for 10 minutes before freezing to keep them separate and slime-free." }
    ],
    ja: [
      { question: "長ネギを根を下にして新聞紙で包み、立てて保存する理由は何ですか？", answer: "植物は収穫後も成長しようとする本能があります。横にして保存すると、ネギが起き上がろうとしてエネルギーを消耗し、すぐに黄変します。立てて保存することで鮮度が保たれます。" },
      { question: "ネギを冷凍保存する際、粘り気が出るのを防ぐには？", answer: "ネギを切ってすぐに冷凍すると細胞壁が壊れ、ネバネバした粘液が出やすくなります。カットした後、常温で表面の水分を10分ほど乾かしてから冷凍すると、パラパラに保存できます。" }
    ],
    zh: [
      { question: "为什么大葱要连根用报纸包好竖着放？", answer: "蔬菜在收割后仍保留着生长的本能。如果横着放，大葱为了直立会消耗能量，导致迅速变黄。竖着摆放可以保存其养分。" },
      { question: "冷冻切好的大葱时如何防止出现黏液？", answer: "切完直接冷冻会破坏细胞壁，释放出黏性物质。切好后在室温下晾干表面水分约 10 分钟，然后再进行冷冻，这样大葱就不会粘连，保持清爽。" }
    ]
  },
  'milk': {
    ko: [
      { question: "우유를 냉동 보관해도 되나요?", answer: "우유를 얼리면 지방과 단백질이 분리되어 해동 시 덩어리가 지고 풍미가 저하됩니다. 가급적 얼리지 않고 냉장 보관하여 기한 내 드시는 것을 권장합니다." },
      { question: "개봉 전 우유는 유통기한이 지나도 마실 수 있나요?", answer: "미개봉 상태로 0~5도 냉장을 유지했다면 유통기한 경과 후 최대 45일까지는 맛과 냄새에 이상이 없을 시 섭취가 가능합니다." }
    ],
    en: [
      { question: "Can I freeze milk for storage?", answer: "Freezing milk separates fat and protein, causing clumps and loss of flavor upon thawing. It is best kept refrigerated and consumed within its date." },
      { question: "Can unopened milk be consumed after the expiration date?", answer: "If kept unopened and refrigerated at 0-5°C (32-41°F), it remains safe to consume for up to 45 days after the expiration date, provided there are no off-odors or taste changes." }
    ],
    ja: [
      { question: "牛乳を冷凍保存してもいいですか？", answer: "牛乳を凍らせると脂肪とタンパク質が分離し、解凍時に塊ができたり風味が損なわれたりします。極力凍らせず、冷蔵保存して期限内に消費することをお勧めします。" },
      { question: "未開封の牛乳は賞味期限が過ぎても飲めますか？", answer: "未開封で0〜5度の冷蔵を維持していた場合、賞味期限経過後最大45日までは、味や臭いに異常がなければ飲むことができます。" }
    ],
    zh: [
      { question: "牛奶可以冷冻保存吗？", answer: "冷冻牛奶会导致脂肪 and 蛋白质分离，解冻时会产生结块且风味下降。建议尽量不要冷冻，而是冷藏保存并及时饮用。" },
      { question: "未开封的牛奶过期了还可以喝吗？", answer: "如果保持未开封并在 0-5°C 下冷藏，只要味道和气味无异常，在保质期过后最长 45 天内仍可饮用。" }
    ]
  },
  'mushroom': {
    ko: [
      { question: "버섯을 보관 전에 절대 물로 씻으면 안 되는 이유는?", answer: "버섯은 스펀지처럼 주변 수분을 빠르게 흡수합니다. 물이 닿으면 갈변이 일어나고 쫄깃한 식감과 고유의 향이 소실되며 하루 만에 곰팡이가 슬어 썩어버립니다. 요리 직전에 가볍게 털어내세요." },
      { question: "버섯이 끈적거리고 신맛이 나는데 먹어도 되나요?", answer: "아닙니다. 표면이 미끈거리거나 시큼한 냄새, 신맛이 난다면 균류의 부패 작용이 일어난 상태이므로 식중독 예방을 위해 즉시 전량 폐기해야 합니다." }
    ],
    en: [
      { question: "Why should mushrooms never be washed before storage?", answer: "Mushrooms absorb water like a sponge. Washing them leads to rapid browning, loss of texture and aroma, and triggers mold within 24 hours." },
      { question: "My mushrooms are slimy and smell slightly sour. Are they safe?", answer: "No, slime, sour odors, or sour taste indicate bacterial spoilage. Consuming them causes food poisoning; discard the entire batch immediately." }
    ],
    ja: [
      { question: "キノコを保存前に絶対に水洗いしてはいけない理由は何ですか？", answer: "キノコはスポンジのように周囲の水分を急速に吸収します。水がつくと褐変が起こり、食感や香りが失われるだけでなく、カビが発生して腐ってしまいます。" },
      { question: "キノコがベタベタして酸っぱい味がしますが、食べてもいいですか？", answer: "いいえ、表面がぬめったり酸っぱい臭い・味がする場合は細菌が繁殖しています。食中毒防止のため、直ちに廃棄してください。" }
    ],
    zh: [
      { question: "为什么蘑菇在存放前绝对不能洗？", answer: "蘑菇像海绵一样会迅速吸收周围的水分。接触水会导致变褐，失去弹性和特有香气，且在一天内就会滋生霉菌腐烂。" },
      { question: "蘑菇表面发黏且有酸味还能吃吗？", answer: "不能。表面发黏、有酸味或异味表明已经发生变质，为了预防食物中毒，必须立即全部扔掉。" }
    ]
  },
  'nuts': {
    ko: [
      { question: "견과류에서 쩐내이자 기분 나쁜 기름 냄새가 나는데 그냥 먹어도 되나요?", answer: "절대 안 됩니다. 견과류의 불포화지방산이 산패되면 '아플라톡신'이라는 강력한 1급 발암물질(간암 유발)이 생성됩니다. 이 독소는 가열해도 파괴되지 않으므로 쩐내가 나는 즉시 버려야 합니다." },
      { question: "견과류는 상온에 두는 것이 신선한가요?", answer: "아닙니다. 견과류의 지방은 열, 산소, 습도에 매우 취약해 실온 방치 시 빠르게 상합니다. 지퍼백에 밀봉해 냉장고나 장기 보관 시 냉동 보관하는 것이 필수입니다." }
    ],
    en: [
      { question: "Is it okay to eat nuts that smell slightly rancid?", answer: "Absolutely not. Rancid fat in nuts develops 'aflatoxins', a powerful Class 1 carcinogen that causes liver damage. This toxin cannot be destroyed by heat." },
      { question: "Should nuts be kept in the pantry at room temperature?", answer: "No, lipids in nuts are highly sensitive to heat, air, and moisture. Storing at room temp accelerates rancidity. Always store sealed in the fridge or freezer." }
    ],
    ja: [
      { question: "ナッツ類から油臭いにおいがしますが、そのまま食べても大丈夫ですか？", answer: "絶対に避けてください。脂質の酸化が進むと、「アフラトキシン」という強力な発がん性物質が生成される可能性があります。加熱しても分解されないため、異臭がしたらすぐに廃棄してください。" },
      { question: "ナッツ類は常温で保管する方が新鮮ですか？", answer: "いいえ、ナッツの脂質は熱、酸素、湿度に非常に弱く、常温放置すると急速に劣化します。ジッパーバッグに密閉して冷蔵または冷凍で保存してください。" }
    ],
    zh: [
      { question: "坚坚果出现哈喇味还可以吃吗？", answer: "绝对不可以。坚果中的不饱和脂肪酸酸败后，会产生名为黄曲霉毒素的强效 1 类致癌物。这种毒素在加热时也无法被破坏，因此一旦出现哈喇味必须立即扔掉。" },
      { question: "坚果放在常温下保存好吗？", answer: "不好。坚果的脂肪对热量、氧气 and 湿度非常敏感，暴露在室温下会迅速变质。必须密封在保鲜袋中放进冰箱冷藏，长期保存需冷冻。" }
    ]
  },
  'olive-oil': {
    ko: [
      { question: "올리브 오일이 냉장고에서 하얗게 굳었는데 상한 건가요?", answer: "아닙니다. 엑스트라 버진 올리브 오일은 온도가 8~10도 이하로 떨어지면 굳어지는 자연스러운 응고 현상이 발생합니다. 상온에 두면 투명한 액체 상태로 정상 복귀되며 품질에도 전혀 지장이 없습니다." },
      { question: "올리브 오일은 꼭 어두운 병에 보관해야 하나요?", answer: "네, 올리브유는 빛(자외선)에 노출되면 산화가 빠르게 진행됩니다. 반드시 빛을 차단하는 어두운 유리병에 밀봉하여 서늘한 그늘에 두는 것이 좋습니다." }
    ],
    en: [
      { question: "My olive oil solidified and turned white in the fridge. Is it spoiled?", answer: "No, extra virgin olive oil naturally solidifies when the temperature drops below 8-10°C (46-50°F). It will return to a clear liquid state at room temperature with no impact on quality." },
      { question: "Should olive oil always be stored in dark bottles?", answer: "Yes, olive oil oxidizes rapidly when exposed to light (UV rays). It is highly recommended to store it in a dark glass bottle, sealed tightly, and placed in a cool, shaded area." }
    ],
    ja: [
      { question: "オリーブオイルが冷蔵庫で白く固まりましたが、傷んでいますか？", answer: "いいえ、エキストラバージンオリーブオイルは温度が8〜10度以下に下がると自然に固まる性質があります。常温に戻すと透明な液体状態に戻り、品質には全く問題ありません。" },
      { question: "オリーブオイルは必ず遮光瓶に保存すべきですか？", answer: "はい、オリーブオイルは光（紫外線）にさらされると酸化が急速に進みます。必ず光を遮る暗いガラス瓶に密閉し、涼しい日陰に保管してください。" }
    ],
    zh: [
      { question: "我的橄榄油在冰箱里凝固变白了，是变质了吗？", answer: "不是的。当温度降至 8-10°C 以下时，特级初榨橄榄油会自然凝固。将其放回室温下会恢复为清澈的液体状态，对品质完全没有影响。" },
      { question: "橄榄油一定要用深色瓶子装吗？", answer: "是的，橄榄油暴露在光线（紫外线）下会迅速氧化。强烈建议将其密封储存在避光的深色玻璃瓶中，并放置在阴凉处。" }
    ]
  },
  'onion': {
    ko: [
      { question: "양파를 감자와 함께 보관하면 왜 안 되나요?", answer: "양파와 감자를 같은 공간에 두면 양파의 수분과 에틸렌 가스가 감자의 싹을 틔우고 감자를 무르게 만듭니다. 반대로 감자의 수분도 양파를 썩게 하므로 물리적으로 철저히 격리해야 합니다." },
      { question: "깐 양파를 보관하는 가장 오래가는 요령은?", answer: "양파 껍질을 벗겼다면 물기를 완벽히 제거한 후 랩으로 개별 밀봉해 냉장 보관하세요. 공기와의 접촉을 원천 차단하면 2주 이상 무르지 않고 신선합니다." }
    ],
    en: [
      { question: "Why shouldn't I store onions with potatoes?", answer: "Storing onions and potatoes together causes onions to release moisture and ethylene gas, making potatoes sprout and soften rapidly. Keep them separated." },
      { question: "What is the best way to store peeled onions?", answer: "Ensure they are completely dry, wrap each onion tightly in plastic wrap, and store them in the fridge. Blocking air contact keeps them fresh for over 2 weeks." }
    ],
    ja: [
      { question: "玉ねぎをジャガイモと一緒に保存してはいけないのはなぜですか？", answer: "玉ねぎとジャガイモを同じ場所に置くと、玉ねぎの水分とエチレンガスがジャガイモの 芽を伸ばし、柔らかくしてしまいます。互いに影響し合うため、物理的に隔離する必要があります。" },
      { question: "皮をむいた玉ねぎを長持ちさせる保存のコツは？", answer: "水気を完全に拭き取った後、ラップで個別に密閉して冷蔵保存してください。空気との接触を遮断することで、2週間以上新鮮な状態を維持できます。" }
    ],
    zh: [
      { question: "为什么洋葱不能与土豆放一起？", answer: "洋葱和土豆放在同一个空间里，洋葱释放的水分和乙烯气体会促使土豆发芽变软。相反，土豆的水分也会导致洋葱腐烂，因此必须彻底物理隔离。" },
      { question: "剥皮洋葱最持久的保存窍门是什么？", answer: "剥皮后彻底擦干水分，用保鲜膜逐个包裹密封后冷藏保存。切断与空气的接触可保持新鲜 2 周以上。" }
    ]
  },
  'perilla-oil': {
    ko: [
      { question: "들기름과 참기름을 섞어서 보관하면 보관 기간이 늘어나나요?", answer: "네, 참기름에는 강력한 항산화 물질인 세사몰이 함유되어 있어, 산패되기 쉬운 들기름과 8:2 비율로 섞어서 보관하면 들기름의 보존 기간이 2배 이상 향상됩니다." },
      { question: "참기름도 냉장 보관을 해야 하나요?", answer: "아닙니다. 참기름은 항산화 성분이 풍부해 상온의 어두운 곳에 두는 것이 맛과 향을 지키는 최선입니다. 냉장 보관 시 침전물이 생기거나 향이 옅어질 수 있습니다." }
    ],
    en: [
      { question: "Does mixing perilla oil with sesame oil increase its shelf life?", answer: "Yes, sesame oil contains sesamol, a powerful antioxidant. Mixing perilla oil and sesame oil in an 8:2 ratio and storing it can double the preservation period of perilla oil." },
      { question: "Should sesame oil be refrigerated too?", answer: "No, sesame oil is rich in antioxidants, so storing it at room temperature in a dark place is best to protect its flavor. Refrigeration may cause sedimentation and weaken the aroma." }
    ],
    ja: [
      { question: "エゴマ油とごま油を混ぜて保存すると保存期間が延びますか？", answer: "はい、ごま油には強力な抗酸化物質であるセサモールが含まれています。エゴマ油とごま油を8:2の比率で混ぜて保存すると、エゴマ油の保存期間が2倍以上に延びます。" },
      { question: "ごま油も冷蔵保存すべきですか？", answer: "いいえ、ごま油は抗酸化成分が豊富であるため、常温の暗い場所に保管するのが風味を維持する最善の方法です。冷蔵すると沈殿物が生じたり香りが弱まったりすることがあります。" }
    ],
    zh: [
      { question: "将苏子油和芝麻油混合存放会延长保质期吗？", answer: "是的，芝麻油含有强效抗氧化剂芝麻酚。将苏子油与芝麻油按 8:2 的比例混合储存，可使苏子油的保质期延长两倍以上。" },
      { question: "芝麻油也需要冷藏吗？", answer: "不需要，芝麻油富含抗氧化成分，存放在室温避光处是保持其风味和香气的最佳方式。冷藏可能会产生沉淀物并减弱香气。" }
    ]
  },
  'potato': {
    ko: [
      { question: "감자 싹이나 푸른 부위를 그냥 도려내고 먹으면 안전한가요?", answer: "싹이나 초록색 부위에는 '솔라닌'이라는 신경 독소가 들어있습니다. 섭취 시 구토나 마비를 유발하므로 초록색 겉면을 두껍게 깎아내고 싹눈 부위를 완전히 깊게 파내어 요리해야 안전합니다." },
      { question: "감자를 냉장고에 넣으면 왜 안 되나요?", answer: "감자를 4도 이하 저온 냉장하면 감자 속 전분이 당분으로 변해 단맛은 나지만, 가열 조리 시 아크릴아마이드라는 발암성 물질을 생성하게 됩니다. 통풍이 잘되는 서늘한 상온 그늘이 최선입니다." }
    ],
    en: [
      { question: "Is it safe to eat potatoes after cutting off green patches or sprouts?", answer: "Sprouts and green skin contain solanine, a toxic glycolalkaloid. You must slice away green skin thickly and dig out sprout eyes deeply before cooking." },
      { question: "Why shouldn't raw potatoes be refrigerated?", answer: "Cold temperatures below 4°C convert potato starch into sugar. When cooked at high heat, this sugar reacts to form acrylamide, a potential carcinogen." }
    ],
    ja: [
      { question: "ジャガイモの芽や緑色の部分を取り除いて食べれば安全ですか？", answer: "芽や緑色の部分には「ソラニン」という神経毒が含まれています。摂取すると食中毒を引き起こすため、緑色の部分は厚く剥き、芽の根元は深くくり抜いて調理してください。" },
      { question: "ジャガイモを冷蔵庫に入れてはいけない理由は何ですか？", answer: "ジャガイモを4度以下の低温で冷蔵すると、でんぷんが糖分に分解されます。この状態で加熱調理すると、発がん性物質アクリルアミドが生成されやすくなります。" }
    ],
    zh: [
      { question: "挖掉土豆发芽或变绿的部分吃安全吗？", answer: "发芽或变绿的部位含有名为龙葵素的神经毒素。食用会引起呕吐或麻痹，因此必须将变绿的表皮厚厚削掉，并将发芽部位完全深挖干净后烹饪。" },
      { question: "为什么土豆不能放进冰箱冷藏？", answer: "土豆在 4°C 以下的低温冷藏会导致其淀粉转化为糖分，虽然甜度增加，但在高温烹饪时会产生致癌物质丙烯酰胺。通风凉爽的常温避光处是最佳选择。" }
    ]
  },
  'salmon': {
    ko: [
      { question: "연어의 표면 색상이 살짝 탁해졌는데 먹어도 되나요?", answer: "생연어의 색이 선홍빛을 잃고 칙칙한 회색빛이나 노랗게 변했다면 산화 및 균 번식이 시작된 조짐입니다. 만졌을 때 끈적거리거나 시큼한 향이 난다면 절대 드시지 마세요." },
      { question: "남은 생연어를 냉동 보관할 때 주의할 점은?", answer: "물기를 키친타월로 철저히 제거하고 표면에 식용유나 올리브 오일을 얇게 바른 뒤 밀착 랩핑해 얼리면 냉동실 성에와 건조 현상(프리저 번)을 예방할 수 있습니다." }
    ],
    en: [
      { question: "The color of my salmon turned slightly dull. Can I still eat it?", answer: "If raw salmon loses its pink hue and fades to gray or yellow, it is oxidising and spoiling. If it feels slimy or smells sour, discard it immediately." },
      { question: "What should I keep in mind when freezing leftover raw salmon?", answer: "Pat it dry, brush the surface with a thin layer of oil, and wrap it tightly in plastic wrap to prevent freezer burn and ice crystals." }
    ],
    ja: [
      { question: "サーモンの表面の色が少し濁っていますが、食べてもいいですか？", answer: "生サーモンが鮮やかなピンク色を失い、くすんだ灰色や黄色に変色している場合は、酸化や細菌繁殖の兆候です。触って粘りがあったり異臭がする場合は食べないでください。" },
      { question: "残った生のサーモンを冷凍保存する際の注意点は？", answer: "水気をキッチンペーパーで完全に取り除き、表面に少量の食用油やオリーブオイルを塗ってから空気が入らないようラップで密閉して冷凍すると、冷凍焼けを防げます。" }
    ],
    zh: [
      { question: "三文鱼表面颜色变暗淡了还可以吃吗？", answer: "如果生三文鱼失去鲜粉红色而变得灰暗或发黄，说明已经开始氧化和滋生细菌。如果手感发黏或有酸味，绝对不能食用。" },
      { question: "剩下的生三文鱼冷冻时有什么注意事项吗？", answer: "用厨房纸巾彻底擦干水分，表面薄薄涂一层食用油或橄榄油，紧贴包裹保鲜膜冷冻，可以防止冷冻干燥（冻伤）和结霜。" }
    ]
  },
  'spinach': {
    ko: [
      { question: "시금치를 씻어서 냉장 보관해도 되나요?", answer: "아닙니다. 시금치는 잎이 연해 수분이 닿은 채 밀봉되면 이틀 만에 까맣게 짓무르고 썩습니다. 흙이 묻은 채로 보관하고, 요리 직전에 씻어 드시는 것이 수명을 늘립니다." },
      { question: "시금치를 세워 보관해야 하는 이유가 무엇인가요?", answer: "시금치는 눕혀두면 스스로 일어서기 위해 식물성 호르몬을 분비하며 영양분을 소모하고 빠르게 누렇게 뜹니다. 대파처럼 세워서 세로로 냉장 보관하는 것이 좋습니다." }
    ],
    en: [
      { question: "Can I wash spinach before storing it in the fridge?", answer: "No, spinach leaves are highly delicate and rot within days if exposed to moisture. Keep them unwashed and dry, then wash right before cooking." },
      { question: "Why is it recommended to store spinach upright?", answer: "Spinach expends nutrients and turns yellow trying to bend upright if stored horizontally. Storing them vertically maintains freshness." }
    ],
    ja: [
      { question: "ほうれん草を洗ってから冷蔵保存してもいいですか？", answer: "いいえ、ほうれん草は葉が柔らかいため、水分がついたまま密閉するとすぐに傷んで黒く腐ってしまいます。土がついたまま保存し、調理直前に洗ってください。" },
      { question: "ほうれん草を立てて保存すべき理由は何ですか？", answer: "ほうれん草は横にしておくと、起き上がろうとして栄養分を消耗し、すぐに葉が黄色くなります。ネギのように立てて縦に保存するのが望ましいです。" }
    ],
    zh: [
      { question: "菠菜可以洗完再放冰箱冷藏吗？", answer: "不可以。菠菜叶片娇嫩，接触水分密封的话会在两天内变黑烂掉。带泥保存并在烹饪前清洗才能延长保鲜期。" },
      { question: "为什么菠菜要竖着放保存？", answer: "菠菜如果平放，会为了直立而释放植物激素消耗养分，迅速变黄。像大葱一样竖立着进行冷藏保存更好。" }
    ]
  },
  'squid': {
    ko: [
      { question: "생오징어 내장을 그대로 냉장 보관하면 안 되나요?", answer: "생오징어는 내장부터 급속 부패하며 냄새와 세균 번식을 일으킵니다. 구매 즉시 내장과 먹물 주머니를 제거하고 깨끗이 씻어 물기를 뺀 후 몸통과 다리를 분리해 냉장 보관하세요." },
      { question: "오징어를 해동할 때 비린내를 방지하려면?", answer: "오징어는 냉장실에서 서서히 해동하는 것이 수분 손실을 막아 질겨지는 것을 방지합니다. 해동 시 약간의 청주나 미림을 뿌려두면 해산물 특유의 잡내를 확실히 잡을 수 있습니다." }
    ],
    en: [
      { question: "Can I store raw squid in the fridge without cleaning the guts?", answer: "No, raw squid guts decompose extremely fast, causing severe odors and spoilage. Always clean, eviscerate, and wash the squid before chilling." },
      { question: "How can I prevent raw squid from smelling fishy when thawing?", answer: "Thaw it slowly in the fridge to maintain its tender texture. Sprinkling a dash of cooking rice wine (mirin) during thawing eliminates fishy odors." }
    ],
    ja: [
      { question: "生イカの内臓をそのまま冷蔵保存してもいいですか？", answer: "生イカは内臓から急速に腐敗し、臭いや雑菌の繁殖を引き起こします。購入後すぐに内臓を取り除いてきれいに洗い、水気を切ってから冷蔵してください。" },
      { question: "イカを解凍する際、生臭さを防ぐには？", answer: "冷蔵庫でゆっくり解凍することで、水分（ドリップ）の流出と身が硬くなるのを防ぎます。解凍時に少量の酒を振っておくと、生臭さを抑えられます。" }
    ],
    zh: [
      { question: "生乌贼可以带内脏直接冷藏保存吗？", answer: "不行。生乌贼会从内脏开始迅速腐烂，产生异味并滋生细菌。购买后请立即清除内脏 and 墨囊，洗净沥干水分，将身体与爪部分开后冷藏。" },
      { question: "乌贼解冻时如何防止腥味？", answer: "乌贼在冷藏室缓慢解冻可减少水分流失，防止肉质变硬。解冻时洒少许料酒或味醂可以有效去除海鲜特有的腥味。" }
    ]
  },
  'tofu': {
    ko: [
      { question: "남은 두부를 물 없이 그냥 넣어두어도 되나요?", answer: "아닙니다. 두부는 공기와 닿으면 세균이 증식해 바로 상합니다. 반드시 두부가 완전히 잠기도록 수돗물을 붓고, 소금을 살짝 한 꼬집 뿌려 밀폐 냉장 보관해야 오래갑니다." },
      { question: "두부를 얼려서 보관하면 질감이 변하나요?", answer: "네, 두부를 얼리면 수분이 얼음 결정으로 변하면서 두부 내부에 미세한 구멍이 가득 뚫린 스펀지 구조가 됩니다. 이 상태는 양념 소스를 훨씬 잘 흡수하게 됩니다." }
    ],
    en: [
      { question: "Can I store leftover tofu in a container as it is?", answer: "No, tofu spoils quickly if exposed to air. Always submerge it completely in clean water with a pinch of salt in a sealed container, and change water daily." },
      { question: "Does freezing tofu change its texture?", answer: "Yes, frozen tofu turns into a sponge-like structure with tiny pores. This unique texture absorbs soups and sauces incredibly well." }
    ],
    ja: [
      { question: "残った豆腐を水なしでそのまま入れておいてもいいですか？", answer: "いいえ、豆腐は空気に触れると細菌が繁殖してすぐに傷みます。必ず豆腐が完全に浸かるように水を注ぎ、塩をひとつまみ入れて密閉保存してください。" },
      { question: "豆腐を凍らせると質感が変わりますか？", answer: "はい、豆腐を凍らせると水分が氷の結晶になり、スポンジのような構造（凍り豆腐）になります。この状態は味が染み込みやすくなります。" }
    ],
    zh: [
      { question: "剩下的豆腐可以不加水直接放着吗？", answer: "不行。豆腐暴露在空气中会滋生细菌而迅速变质。必须倒入完全没过豆腐的水，并加入一小撮盐，密封冷藏保存才耐久。" },
      { question: "豆腐冷冻保存会改变口感吗？", answer: "会的。豆腐冷冻后水分会形成冰晶，使豆腐内部形成布满微孔的蜂窝状结构。这种冻豆腐能极好地吸收汤汁和调料。" }
    ]
  },
  'tomato': {
    ko: [
      { question: "토마토를 절대 냉장고에 넣지 말라는 이유가 무엇인가요?", answer: "토마토를 12도 이하 저온에 보관하면 고유의 향 성분을 내는 휘발성 물질 생성이 중단되고 세포막이 파괴되어 껍질이 퍼석거리고 당도가 급락합니다. 상온 그늘에 두는 것이 가장 맛있습니다." },
      { question: "완전히 익은 빨간 토마토도 상온에 두나요?", answer: "아닙니다. 완숙된 빨간 토마토는 상온에 두면 하루 만에 상합니다. 다 익은 토마토는 신문지 등으로 야채실에 보관하고 3일 내 드세요." }
    ],
    en: [
      { question: "Why is it recommended never to refrigerate raw tomatoes?", answer: "Refrigerating tomatoes stops volatile flavor compound production and damages cell membranes, making the flesh mealy and reducing sweetness. Keep at room temp." },
      { question: "Should fully ripe red tomatoes also be kept at room temperature?", answer: "No, fully ripe tomatoes rot quickly at room temp. Wrap each ripe tomato in paper towels, store them in the crisper drawer, and eat within 3 days." }
    ],
    ja: [
      { question: "トマトを絶対に冷蔵庫に入れてはいけない理由は何ですか？", answer: "トマトを12度以下の低温で保存すると、香り成分の 生成が止まり、細胞膜が破壊されて食感が悪くなり糖度も低下します。常温の日陰が最も適しています。" },
      { question: "完熟した赤いトマトも常温でいいですか？", answer: "いいえ、完熟したトマトは常温ではすぐに傷みます。完熟トマトは新聞紙等で包んで野菜室に入れ、3日以内に消費してください。" }
    ],
    zh: [
      { question: "为什么建议绝对不要把番茄放冰箱冷藏？", answer: "番茄在 12°C 以下的低温下保存会停止产生风味物质，且细胞膜受损导致果肉变粉、甜度骤降。存放在常温避光处最美味。" },
      { question: "完全成熟的红番茄也放在常温下吗？", answer: "不是的。熟透的红番茄在常温下过一天就会变质。熟番茄应包裹好放入冰箱冷藏蔬菜隔板中，并在 3 天内食用。" }
    ]
  },
  'watermelon': {
    ko: [
      { question: "수박을 반으로 잘라 랩만 씌워 냉장 보관하는 것은 위험한가요?", answer: "매우 위험합니다. 랩을 씌워 수박을 보관하면 일주일 만에 자른 단면의 세균 농도가 3천 배 이상 급증합니다. 반드시 껍질을 잘라내고 큐브 모양으로 썰어 밀폐용기에 보관해야 합니다." },
      { question: "수박을 통째로 냉장고 깊숙이 넣어도 되나요?", answer: "통수박은 냉장고 깊숙한 찬 공기에 노출되면 냉해를 입어 과육이 푸석거리고 당도가 내려갑니다. 보관 시 신문지나 타월로 감싸서 적당히 서늘한 온도 대에 보관하는 것이 좋습니다." }
    ],
    en: [
      { question: "Is it dangerous to store cut watermelon wrapped only in plastic wrap?", answer: "Very dangerous. Studies show wrapping cut watermelon increases bacterial levels by 3,000 times in a week. Cut the flesh into cubes and store in sealed containers." },
      { question: "Can I put a whole watermelon directly in the coldest part of the fridge?", answer: "Whole watermelon suffers chilling injury in direct cold air, making the flesh mealy. Wrap it in a thick towel and store it in a cool pantry or crisper." }
    ],
    ja: [
      { question: "スイカを半分に切ってラップだけをかけて冷蔵するのは危険ですか？", answer: "非常に危険です。ラップをかけて保存すると、カットした断面の細菌濃度が1週間で3千倍以上に急増します。皮を切り落とし、密閉容器に入れて保存してください。" },
      { question: "スイカを丸ごと冷蔵庫に入れてもいいですか？", answer: "丸ごとのスイカは直接冷気にさらされると低温障害を起こし、果肉が劣化して甘みが低下します。新聞紙等で包んで比較的冷えすぎない場所に保存してください。" }
    ],
    zh: [
      { question: "西瓜切半只裹保鲜膜冷藏很危险吗？", answer: "非常危险。研究显示，仅裹保鲜膜存放的西瓜，切面细菌浓度会在一周内暴增 3,000 倍以上。务必切除外皮并切成方块，装入密封容器中冷藏。" },
      { question: "整个西瓜可以直接塞进冰箱深处吗？", answer: "整个西瓜如果暴露在冰箱深处的极冷空气中会遭受冻伤，使果肉变粉、甜度下降。保存时建议用新闻纸或毛巾包裹，放在温度适中的冷藏层。" }
    ]
  }
};

const sourceMapLang = {
  en: { 'USDA': 'USDA', 'FDA': 'FDA', 'WHO': 'WHO', 'MFDS': 'MFDS', 'RDA': 'RDA', 'NIFS': 'NIFS', 'KCA': 'KCA', 'CDC': 'CDC', 'FSA': 'FSA', 'EFSA': 'EFSA' },
  ja: { 'USDA': '米国農務省(USDA)', 'FDA': '米国食品医薬品局(FDA)', 'WHO': '世界保健機関(WHO)', 'MFDS': '食品医薬品安全処(MFDS)', 'RDA': '農村振興庁(RDA)', 'NIFS': '国立水産科学部(NIFS)', 'KCA': '韓国消費者院(KCA)', 'CDC': 'CDC', 'FSA': 'FSA', 'EFSA': 'EFSA' },
  zh: { 'USDA': '美国农务部(USDA)', 'FDA': '美国食品药品监督管理局(FDA)', 'WHO': '世界卫生组织(WHO)', 'MFDS': '韩国食品医药品安全处(MFDS)', 'RDA': '韩国农村振兴厅(RDA)', 'NIFS': '韩国国立水产科学部(NIFS)', 'KCA': '韩国消费者院(KCA)', 'CDC': 'CDC', 'FSA': 'FSA', 'EFSA': 'EFSA' }
};

function run() {
  if (!fs.existsSync(transJsonPath)) {
    console.error(`[오류] 번역 JSON 파일이 존재하지 않습니다: ${transJsonPath}`);
    return;
  }

  const transMap = JSON.parse(fs.readFileSync(transJsonPath, 'utf-8'));
  const stepsTransJsonPath = '/Users/soulhammer/.gemini/antigravity-ide/brain/77b027a6-2e4b-442f-b4b6-800970723a3b/scratch/blog_steps_translations.json';
  const stepsTransMap = JSON.parse(fs.readFileSync(stepsTransJsonPath, 'utf-8'));
  let compiledCount = 0;

  Object.entries(blogToIngMap).forEach(([blogSlug, ingId]) => {
    // 1. ko 마스터 파일 로드
    const koPath = path.join(blogRoot, 'ko', `${blogSlug}.md`);
    if (!fs.existsSync(koPath)) {
      console.warn(`[경고] ko 마스터 파일 없음: ${blogSlug}.md`);
      return;
    }

    const koContent = fs.readFileSync(koPath, 'utf-8');
    
    // koContent에서 pubDate 파싱
    const pubDateMatch = koContent.match(/pubDate:\s*"([^"]+)"/);
    const koPubDate = pubDateMatch ? pubDateMatch[1] : '2026-06-22';

    const ing = allIngredients.find(i => i.id === ingId);
    if (!ing) {
      console.warn(`[경고] 식재료 ID 없음: ${ingId}`);
      return;
    }

    // 한국어 마스터 블로그로부터 STEP 수집 (h4와 p 태그 이용)
    const koSteps = [];
    const stepRegex = /<h4[^>]*>([\s\S]*?)<\/h4>\s*<\/div>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
    let koMatch;
    const koBodyParts = koContent.split('---').slice(2).join('---');
    while ((koMatch = stepRegex.exec(koBodyParts)) !== null) {
      koSteps.push({
        name: koMatch[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(),
        text: koMatch[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
      });
    }

    // 2. 다국어 폴더에 컴파일 적용
    languages.forEach(lang => {
      const targetDir = path.join(blogRoot, lang);
      const targetPath = path.join(targetDir, `${blogSlug}.md`);

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      if (blogSlug === 'how-to-store-apples') {
        if (fs.existsSync(targetPath)) {
          // 기존 파일의 steps 메타데이터만 ko 스키마 및 각 언어 번역에 맞추어 보존/주입
          let originalContent = fs.readFileSync(targetPath, 'utf-8');
          const originalParts = originalContent.split('---');
          
          if (originalParts.length >= 3) {
            let originalFrontmatter = originalParts[1];
            const originalBody = originalParts.slice(2).join('---');

            // steps 데이터 조립
            const steps = [];
            const ingStepsTrans = stepsTransMap[ingId] || [];
            
            koSteps.forEach((koStep, idx) => {
              const stepTrans = ingStepsTrans[idx];
              let translatedName = koStep.name;
              let translatedText = koStep.text;
              
              if (stepTrans) {
                translatedName = stepTrans.name[lang] || stepTrans.name['en'] || koStep.name;
                translatedText = stepTrans.text[lang] || stepTrans.text['en'] || koStep.text;
              }
              steps.push({ name: translatedName, text: translatedText });
            });

            const stepsYaml = steps.map(s => `  - name: "${s.name.replace(/"/g, '\\"')}"\n    text: "${s.text.replace(/"/g, '\\"')}"`).join('\n');
            
            // 기존 steps 필드가 있으면 교체, 없으면 주입
            if (originalFrontmatter.includes('steps:')) {
              originalFrontmatter = originalFrontmatter.replace(/steps:[\s\S]*/, `steps:\n${stepsYaml}\n`);
            } else {
              originalFrontmatter += `\nsteps:\n${stepsYaml}\n`;
            }

            // pubDate 동적 반영
            if (originalFrontmatter.includes('pubDate:')) {
              originalFrontmatter = originalFrontmatter.replace(/pubDate:\s*"[^"]*"/, `pubDate: "${koPubDate}"`);
            } else {
              originalFrontmatter += `\npubDate: "${koPubDate}"\n`;
            }

            const finalContent = `---${originalFrontmatter}---${originalBody}`;
            fs.writeFileSync(targetPath, finalContent, 'utf-8');
            console.log(`[보존 및 갱신] ${lang}/${blogSlug}.md 고품질 수동 번역 보존 완료.`);
            compiledCount++;
            return;
          }
        }
      }

      // 그 외 20개 식재료 파일은 ko 구조를 바탕으로 완벽히 다국어 번역 조립
      const dict = l10n[lang];
      const name = ing.names[lang] || ing.names['en'] || ingId;

      const title = dict.titleCorrected 
        ? dict.titleCorrected.replaceAll('[name]', name) 
        : dict.title.replaceAll('[name]', name);

      const description = dict.desc.replaceAll('[name]', name);
      const tags = JSON.stringify([name, dict.guideTitle, ing.category]);

      // 3. steps 및 카드 HTML 번역 수집
      const steps = [];
      const stepCards = [];
      const ingStepsTrans = stepsTransMap[ingId] || [];

      koSteps.forEach((koStep, idx) => {
        const stepIdx = idx + 1;
        const stepTrans = ingStepsTrans[idx];
        
        let translatedName = koStep.name;
        let translatedText = koStep.text;
        
        if (stepTrans) {
          translatedName = stepTrans.name[lang] || stepTrans.name['en'] || koStep.name;
          translatedText = stepTrans.text[lang] || stepTrans.text['en'] || koStep.text;
        } else {
          console.warn(`[경고] 번역 맵에 단계 누락: ${ingId} STEP ${stepIdx}`);
        }

        steps.push({ name: translatedName, text: translatedText });

        let imageHtml = '';
        if (stepIdx === 1) {
          const detailNames = [
            `${ingId.replace(/-/g, '_')}_storage_detail.png`,
            `${ingId}_storage_detail.png`,
            `${blogSlug.replace('how-to-store-', '').replace(/-/g, '_')}_storage_detail.png`,
            `${blogSlug.replace('how-to-store-', '')}_storage_detail.png`
          ];
          const foundName = detailNames.find(name => {
            const checkPath = path.join(publicRoot, 'images', 'blog', name);
            return fs.existsSync(checkPath);
          });
          if (foundName) {
            const detailImgPath = `/images/blog/${foundName}`;
            imageHtml = `\n  <div class="mt-6 flex justify-center">\n    <img src="${detailImgPath}" alt="${translatedName}" class="rounded-2xl max-w-full h-auto border border-slate-200/50 dark:border-slate-800/50 shadow-sm" />\n  </div>`;
          }
        }

        stepCards.push(`<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20 tracking-wider">${dict.step} ${stepIdx}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${translatedName}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${translatedText}
  </p>${imageHtml}
</div>`);
      });

      const stepsYaml = steps.map(s => `  - name: "${s.name.replace(/"/g, '\\"')}"\n    text: "${s.text.replace(/"/g, '\\"')}"`).join('\n');

      // 4. 신뢰기관 HTML 조립
      const rawSources = [];
      ['room', 'fridge', 'freezer'].forEach(method => {
        const storage = ing.storage[method];
        if (storage && storage.sources) {
          storage.sources.forEach(s => {
            if (!rawSources.includes(s)) rawSources.push(s);
          });
        }
      });
      if (rawSources.length === 0) rawSources.push('USDA', 'MFDS');

      const transSources = rawSources.map(s => {
        const lMap = sourceMapLang[lang] || sourceMapLang['en'];
        return lMap[s] || s;
      });
      const authorityHtml = `<strong>${transSources.join(' & ')}</strong>`;

      // 5. 번역 맵에서 인트로 및 주의사항 가져오기
      const ingTrans = transMap[ingId];
      let intro = '';
      if (lang === 'ko') {
        const koParts = koContent.split('---');
        const koBody = koParts.slice(2).join('---').trim();
        const koIntroMatch = koBody.match(/^([\s\S]*?)##\s+1\./);
        intro = koIntroMatch ? koIntroMatch[1].trim() : koBody;
        intro = intro.replace(/<div class="my-8 p-6 rounded-\[2rem\].*?<\/div>/s, '').trim();
        intro = intro.replace(/<div[\s\S]*?<\/div>/g, '').trim();
        intro = intro.replace(/<\/div>/g, '').trim();
        intro = intro.replace(/<div[^>]*>/g, '').trim();
        if (intro.endsWith('---')) intro = intro.substring(0, intro.length - 3).trim();
      } else {
        intro = ingTrans && ingTrans.intro[lang] 
          ? ingTrans.intro[lang] 
          : dict.title.replaceAll('[name]', name); // 대체값
      }

      const cautionHtmls = [];
      if (ingTrans && ingTrans.cautions) {
        ingTrans.cautions.forEach((c, idx) => {
          const cTitle = c.title[lang] || c.title['en'] || "";
          const cDesc = c.desc[lang] || c.desc['en'] || "";
          const colorClass = idx === 0 ? 'border-rose-500 bg-rose-500/5' : 'border-amber-500 bg-amber-500/5';
          cautionHtmls.push(`<div class="my-6 p-5 rounded-2xl border-l-4 ${colorClass} flex items-start gap-4">
  <span class="text-xl">⚠️</span>
  <div>
    <strong class="text-slate-950 dark:text-white font-extrabold block mb-1">${cTitle}</strong>
    <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
      ${cDesc}
    </p>
  </div>
</div>`);
        });
      }

      // 6. FAQ Yaml 및 HTML 조립
      const faqList = (specialFaqs[ingId] && specialFaqs[ingId][lang])
        ? specialFaqs[ingId][lang]
        : (specialFaqs[ingId] && specialFaqs[ingId]['en'])
          ? specialFaqs[ingId]['en']
          : (storageFaqs[lang] || storageFaqs['en']);
      const faqsYaml = 'faqs:\n' + faqList.map(faq => `  - question: "${faq.question.replace(/"/g, '\\"')}"\n    answer: "${faq.answer.replace(/"/g, '\\"')}"`).join('\n') + '\n';

      const faqTitle = lang === 'ja' ? 'よくある質問 (FAQ)'
        : lang === 'zh' ? '常见问题 (FAQ)'
        : lang === 'es' ? 'Preguntas Frecuentes (FAQ)'
        : lang === 'fr' ? 'Foire Aux Questions (FAQ)'
        : lang === 'de' ? 'Häufig gestellte Fragen (FAQ)'
        : lang === 'pt' ? 'Perguntas Frequentes (FAQ)'
        : lang === 'id' ? 'Pertanyaan Sering Diajukan (FAQ)'
        : 'Frequently Asked Questions (FAQ)';

      const faqItems = faqList.map((faq, faqIdx) => {
        const borderClass = faqIdx < faqList.length - 1 ? ' border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4' : '';
        const isOpen = faqIdx === 0 ? ' open' : '';
        return `  <details class="group${borderClass} cursor-pointer"${isOpen}>
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
      <span>${faq.question}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${faq.answer}
    </p>
  </details>`;
      }).join('\n\n');

      const faqSection = `\n---\n\n<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0 mb-6 flex items-center gap-2">
    <span>📍</span> ${faqTitle}
  </h3>
  
${faqItems}
</div>\n`;

      // 최종 마크다운 조립
      const newContent = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
pubDate: "${koPubDate}"
category: "StoreSelf"
tags: ${tags}
heroImage: "/images/blog/${ingId.replace(/-/g, '_')}_storage_hack.png"
app: "storeself"
authority: "${authorityHtml.replace(/"/g, '\\"')}"
steps:
${stepsYaml}
${faqsYaml}---

${intro}

<div class="my-8 p-6 rounded-[2rem] border border-emerald-500/10 bg-emerald-500/5 dark:border-emerald-500/20 dark:bg-emerald-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-emerald-800 dark:text-emerald-300 m-0">
      ${dict.authTitle}
    </h5>
    <p class="text-xs text-emerald-700/80 dark:text-emerald-400/80 m-0 mt-1.5 leading-relaxed">
      ${dict.authPrefix} ${authorityHtml}.
    </p>
  </div>
</div>

---

## 1. ${dict.whyTitle}

${dict.whyDescCorrectedCorrect ? dict.whyDescCorrectedCorrect : (dict.whyDescCorrected ? dict.whyDescCorrected : dict.whyDesc)}

---

## 2. ${dict.guideTitle}

${stepCards.join('\n\n')}

---

## 3. ${dict.cautionTitle}

${cautionHtmls.join('\n\n')}
${faqSection}`;

      fs.writeFileSync(targetPath, newContent, 'utf-8');
      compiledCount++;
    });
  });

  console.log(`[완료] 총 ${compiledCount}개의 다국어 마크다운 블로그 파일이 완벽하게 2단계 동기화 컴파일 완료되었습니다!`);
}

run();
