import type { Ingredient } from '../ingredients';

export const fruitIngredients: Ingredient[] = [
  {
    id: 'banana',
    category: 'fruit',
    emoji: '🍌',
    isProcessed: false,
    names: {
      ko: '바나나',
      en: 'Banana',
      ja: 'バナナ',
      zh: '香蕉',
      es: 'Plátano',
      fr: 'Banane',
      de: 'Banane',
      pt: 'Banana',
      id: 'Pisang'
    },
    storage: {
      room: {
        durationDays: 7,
        tips: {
          ko: '옷걸이나 전용 거치대에 매달아 보관하고, 꼭지 부분을 랩으로 감싸두면 에틸렌 가스 방출을 막아 후숙 속도를 늦춰줍니다.',
          en: 'Hang on a stand, and wrap the stem tightly with plastic wrap to slow down ripening from ethylene gas.',
          ja: 'バナナスタンドなどに吊るして保管し、根本のコブをラップ으로 包むとエチレンガスの放出を抑えて長持ちします。',
          zh: '挂在架子上，用保鲜膜紧紧包裹香蕉根部，以阻断乙烯释放，延缓熟化。',
          es: 'Cuélguelo en un soporte y envuelva el tallo firmemente con film plástico para ralentizar la maduración.',
          fr: 'Suspendez-les sur un support et enveloppez la tige dans du film étirable pour ralentir le mûrissement.',
          de: 'An einem Ständer aufhängen und den Stiel fest mit Frischhaltefolie umwickeln, um die Reifung zu verlangsamen.',
          pt: 'Pendure em um suporte e embrulhe o pedúnculo firmemente com filme plástico para retardar o amadurecimento.',
          id: 'Gantung di gantungan pisang, dan bungkus batangnya rapat dengan plastik wrap untuk memperlambat kematangan.'
        },
        sources: ['USDA', 'MFDS']
      },
      fridge: {
        durationDays: 5,
        tips: {
          ko: '완전히 숙성되어 단맛이 오른 바나나는 낱개로 잘라 비닐백에 밀봉해 냉장 야채칸에 보관하세요. 껍질은 까맣게 갈변하지만 과육의 연화를 막아 며칠 더 신선하게 먹을 수 있습니다.',
          en: 'Once fully ripe and sweet, separate and seal individual bananas in plastic bags, then store in the crisper drawer. The skin will darken, but the flesh will remain firm and fresh for a few more days.',
          ja: '十分に熟して甘くなったバナナは、1本ずつ切り離してビニール袋に密閉し、冷蔵庫の野菜室で保存してください。皮は黒く変色しますが、果肉が柔らかくなるのを防ぎ、さらに数日間新鮮に保てます。',
          zh: '完全熟透且变甜的香蕉，请拆分成单个并密封在塑料袋中，然后存放在冷藏蔬菜抽屉中。虽然表皮会变黑，但果肉仍能保持紧实新鲜数日。',
          es: 'Una vez completamente maduro y dulce, separe y selle los plátanos individuales en bolsas de plástico, luego guárdelos en el cajón de verduras. La piel se oscurecerá, pero la pulpa se mantendrá firme y fresca por unos días más.',
          fr: 'Une fois bien mûres et sucrées, séparez les bananes et scellez-les individuellement dans des sacs en plastique, puis stockez-les dans le bac à légumes. La peau va noircir, mais la chair restera ferme et fraîche pendant quelques jours de plus.',
          de: 'Sobald sie vollreif und süß sind, trennen Sie die Bananen und verschließen Sie sie einzeln in Plastiktüten. Lagern Sie sie dann im Gemüsefach. Die Schale wird sich dunkel verfärben, aber das Fruchtfleisch bleibt noch einige Tage fest und frisch.',
          pt: 'Depois de maduras e doces, separe e embale as bananas individualmente em sacos plásticos, guardando na gaveta de vegetais. A casca escurecerá, mas a polpa continuará firme e fresca por mais alguns dias.',
          id: 'Setelah benar-benar matang dan manis, pisahkan dan segel pisang satu per satu dalam kantong plastik, lalu simpan di laci sayur kulkas. Kulitnya akan menghitam, tetapi daging buahnya tetap kencang dan segar selama beberapa hari lagi.'
        },
        sources: ['MFDS', 'FSA']
      }
    }
  },
  {
    id: 'apple',
    category: 'fruit',
    emoji: '🍎',
    isProcessed: false,
    names: {
      ko: '사과',
      en: 'Apple',
      ja: 'りんご',
      zh: '苹果',
      es: 'Manzana',
      fr: 'Pomme',
      de: 'Apfel',
      pt: 'Maçã',
      id: 'Apel'
    },
    storage: {
      fridge: {
        durationDays: 30,
        tips: {
          ko: '다른 과일/채소와 함께 보관하면 에틸렌 가스로 인해 동반 부패합니다. 지퍼백이나 랩으로 사과를 개별 밀봉하여 따로 두세요.',
          en: 'Apples release ethylene gas which spoils other produce. Wrap individually in plastic wrap or seal in bags.',
          ja: '他の野菜や果物と一緒に保管するとエチレンガスで傷みやすくなります。ラップで1つずつ密閉するか袋に入れて分けて保管してください。',
          zh: '苹果会释放乙烯气体，导致其他蔬果变质。用保鲜膜单独包裹或密封在袋子中分开放置。',
          es: 'Las manzanas liberan gas etileno que daña otros productos. Envuélvalas individualmente en film plástico.',
          fr: 'Les pommes dégagent de l’éthylène qui abîme les autres fruits. Enveloppez-les individuellement dans du film.',
          de: 'Äpfel geben Ethylengas ab, das andere Produkte verdirbt. Einzeln in Folie einwickeln oder in Beutel verpacken.',
          pt: 'As maçãs liberam gás etileno que estraga outros vegetais. Embrulhe individualmente em filme plástico.',
          id: 'Apel melepaskan gas etilen yang merusak sayuran lain. Bungkus satu per satu dengan plastik wrap.'
        },
        sources: ['RDA', 'USDA']
      }
    }
  },
  {
    id: 'tomato',
    category: 'fruit',
    emoji: '🍅',
    isProcessed: false,
    names: {
      ko: '토마토',
      en: 'Tomato',
      ja: 'トマト',
      zh: '西红柿',
      es: 'Tomate',
      fr: 'Tomate',
      de: 'Tomate',
      pt: 'Tomate',
      id: 'Tomat'
    },
    storage: {
      room: {
        durationDays: 7,
        tips: {
          ko: '꼭지를 아래로 가게 하여 겹치지 않게 바구니에 담아 실온 보관하세요. 덜 익은 파란 토마토는 냉장하면 당도가 저하되고 후숙이 멈춥니다.',
          en: 'Place stem-side down without overlapping in a basket. Refrigerating unripe tomatoes stops ripening and ruins flavor.',
          ja: 'ヘタを下にして重ならないようバスケットなどに入れ、常温保存します。未熟な緑のトマトは冷蔵すると追熟が止まり風味も落ちます。',
          zh: '蒂朝下放入篮子中，避免重叠，在常温下保存。未熟透的青色西红柿若冷藏会停止熟化且降低甜度。',
          es: 'Colóquelos con el tallo hacia abajo sin encabalgar en una cesta. Refrigerar tomates verdes frena su maduración.',
          fr: 'Placez la tige vers le bas sans les superposer. Réfrigérer des tomates vertes arrête leur mûrissement et altère le goût.',
          de: 'Mit dem Stiel nach unten und ohne Überlappung in einen Korb legen. Unreife Tomaten im Kühlschrank verlieren Geschmack.',
          pt: 'Coloque com o pedúnculo para baixo sem sobrepor em uma cesta. Refrigerar tomates verdes interrompe o amadurecimento.',
          id: 'Letakkan bagian tangkai di bawah tanpa bertumpuk di keranjang. Mendinginkan tomat mentah merusak rasanya.'
        },
        sources: ['USDA', 'RDA']
      },
      fridge: {
        durationDays: 10,
        tips: {
          ko: '붉게 완숙된 토마토는 씻어서 물기를 닦은 후 꼭지를 떼어내고(꼭지에 곰팡이가 피기 쉬움) 밀폐 보관하세요.',
          en: 'For fully ripe red tomatoes, wash, dry, remove stems (stems mold easily), and store in an airtight container.',
          ja: '赤く完熟したトマトは洗い、水気を拭き取ってからヘタを外して（ヘタにカビが生えやすいため）密閉保存します。',
          zh: '红透熟熟的西红柿清洗并擦干，摘掉果蒂（果蒂极易发霉），装入密封容器保存。',
          es: 'Para tomates maduros rojos, lávelos, séquelos, quite los tallos (se mohean con facilidad) y guárdelos herméticamente.',
          fr: 'Pour les tomates bien mûres, lavez, séchez, enlevez la tige (qui moisit vite) et fermez-les hermétiquement.',
          de: 'Reife rote Tomaten waschen, trocknen, Stiele entfernen (schimmeln schnell) und luftdicht lagern.',
          pt: 'Para tomates bem maduros, lave, seque, retire o pedúnculo (que mofa facilmente) e guarde em pote vedado.',
          id: 'Untuk tomat matang merah, cuci, keringkan, buang tangkainya (mudah berjamur), lalu simpan kedap udara.'
        },
        sources: ['USDA', 'RDA']
      }
    }
  },
  {
    id: 'strawberry',
    category: 'fruit',
    emoji: '🍓',
    isProcessed: false,
    names: {
      ko: '딸기',
      en: 'Strawberry',
      ja: 'イチゴ',
      zh: '草莓',
      es: 'Fresa',
      fr: 'Fraise',
      de: 'Erdbeere',
      pt: 'Morango',
      id: 'Stroberi'
    },
    storage: {
      fridge: {
        durationDays: 5,
        tips: {
          ko: '물이 닿으면 금방 물러집니다. 꼭지를 떼지 말고 씻지 않은 상태에서 밀폐용기 바닥에 키친타월을 깔고 겹치지 않게 담아 보관하세요.',
          en: 'Moisture ruins strawberries. Keep unwashed with stems on, line container with paper towel, and do not layer.',
          ja: '水気がつくとすぐ傷みます。ヘタを取らずに洗わないまま、容器の底にペーパーを敷いて重ならないよう並べてください。',
          zh: '碰到水极易软烂。不要摘掉果蒂，在不洗的状态下，于密封容器底部铺上厨房纸，避免重叠放入保存。',
          es: 'La humedad las daña. Guárdelas sin lavar y con tallo en un envase con papel de cocina, sin amontonar.',
          fr: 'L’humidité les gâte vite. Gardez-les non lavées avec la queue, sur du papier absorbant sans les superposer.',
          de: 'Feuchtigkeit verdirbt Erdbeeren. Ungewaschen mit Stiel lagern. Behälter mit Küchenpapier auslegen, nicht stapeln.',
          pt: 'A água amolece os morangos. Guarde-os secos com pedúnculo, em pote forrado com papel-toalha e sem sobrepor.',
          id: 'Air membuat stroberi cepat busuk. Jangan dicuci, biarkan tangkainya, alasi wadah dengan tisu dapur.'
        },
        sources: ['RDA', 'USDA']
      }
    }
  },
  {
    id: 'blueberry',
    category: 'fruit',
    emoji: '🫐',
    isProcessed: false,
    names: {
      ko: '블루베리',
      en: 'Blueberry',
      ja: 'ブルーベリー',
      zh: '蓝莓',
      es: 'Arándano',
      fr: 'Myrtille',
      de: 'Blaubeere',
      pt: 'Mirtilo',
      id: 'Murbai'
    },
    storage: {
      fridge: {
        durationDays: 10,
        tips: {
          ko: '겉면의 하얀 가루는 신선도를 유지해 주는 천연 보호막입니다. 씻지 않은 상태로 키친타월을 깐 밀폐용기에 담아 보관하세요.',
          en: 'The white bloom is a natural protective layer. Store unwashed in an airtight container lined with paper towel.',
          ja: '果粉（白い粉）は鮮度を保つ保護膜です。洗わずにペーパーを敷いた密閉容器に入れて保管してください。',
          zh: '白霜是保持新鲜度的天然保护层。在不清洗的状态下装入铺有厨房纸的密封容器中保存。',
          es: 'El polvo blanco es protector. Guárdelos sin lavar en un recipiente hermético forrado con papel de cocina.',
          fr: 'La pruine blanche est protectrice. Conservez-les non lavés dans un récipient fermé tapissé de papier.',
          de: 'Der weiße Reif ist eine Schutzschicht. Ungewaschen in einer luftdichten, mit Papier ausgelegten Dose lagern.',
          pt: 'O pó branco é uma proteção natural. Guarde sem lavar em pote hermético forrado com papel-toalha.',
          id: 'Lapisan putih adalah pelindung alami. Simpan tanpa dicuci di wadah kedap udara beralas tisu dapur.'
        },
        sources: ['USDA', 'MFDS']
      },
      freezer: {
        durationDays: 270,
        tips: {
          ko: '냉동 보관할 때는 물로 깨끗이 씻은 후 물기를 완벽히 건조하여 지퍼백에 넣어 얼려 두세요.',
          en: 'For freezing, wash thoroughly, dry completely, and freeze in sealed bags.',
          ja: '冷凍する場合は水できれいに洗い、水気を完全に乾かしてから保存袋に入れて凍らせてください。',
          zh: '冷冻保存时，请先用水洗净，彻底晾干水分后装入密封袋中冷冻。',
          es: 'Para congelar, lávelos bien, séquelos por completo y congélelos en bolsas herméticas.',
          fr: 'Pour congeler, lavez-les bien, séchez-les complètement et congelez-les dans des sacs hermétiques.',
          de: 'Zum Einfrieren gründlich waschen, vollständig trocknen und in Gefrierbeuteln einfrieren.',
          pt: 'Para congelar, lave bem, seque completamente e congele em sacos herméticos.',
          id: 'Untuk dibekukan, cuci bersih, keringkan sepenuhnya, lalu bekukan di kantong segel.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'watermelon',
    category: 'fruit',
    emoji: '🍉',
    isProcessed: false,
    names: {
      ko: '수박',
      en: 'Watermelon',
      ja: 'スイカ',
      zh: '西瓜',
      es: 'Sandía',
      fr: 'Pastèque',
      de: 'Wassermelone',
      pt: 'Melancia',
      id: 'Semangka'
    },
    storage: {
      fridge: {
        durationDays: 5,
        tips: {
          ko: '⚠️ 먹다 남은 수박을 반으로 잘라 랩만 씌워 냉장 보관 시 표면 세균이 3,000배 이상 증식해 배탈을 유발합니다. 껍질을 썰어내고 과육만 깍둑썰기하여 밀폐용기에 담아 보관하세요.',
          en: '⚠️ Wrapping halved watermelon with plastic wrap causes 3,000x bacterial growth. Cut rind off, cube the flesh, and store in airtight containers.',
          ja: '⚠️ 半分に切ってラップをしたまま冷蔵保存すると、細菌が3,000倍以上に増殖し危険です。皮を切り落とし、果肉だけを一口大に切って密閉容器に保存してください。',
          zh: '⚠️ 吃剩的西瓜直接包保鲜膜冷藏会导致表面细菌暴增3000倍以上。务必切掉外皮，将果肉切块装入密封容器中冷藏。',
          es: '⚠️ Envolver sandía cortada en film multiplica las bacterias 3,000 veces. Quite la cáscara, corte en cubos y guarde herméticamente.',
          fr: '⚠️ Emballer une moitié de pastèque dans du film multiplie les bactéries par 3 000. Coupez l’écorce, faites des dés et fermez en boîte.',
          de: '⚠️ Halbe Wassermelonen nur in Folie zu wickeln führt zu 3.000-facher Bakterienvermehrung. Schale entfernen, würfeln und in Dosen lagern.',
          pt: '⚠️ Cobrir metade da melancia com filme plástico multiplica bactérias em 3.000 vezes. Corte a casca, faça cubos e guarde em pote vedado.',
          id: '⚠️ Membungkus belahan semangka dengan plastik wrap memicu bakteri berkembang 3.000 kali. Kupas kulit, potong dadu.'
        },
        sources: ['KCA', 'MFDS']
      }
    }
  },
  {
    id: 'lemon',
    category: 'fruit',
    emoji: '🍋',
    isProcessed: false,
    names: {
      ko: '레몬',
      en: 'Lemon',
      ja: 'レモン',
      zh: '柠檬',
      es: 'Limón',
      fr: 'Citron',
      de: 'Zitrone',
      pt: 'Limão',
      id: 'Lemon'
    },
    storage: {
      fridge: {
        durationDays: 30,
        tips: {
          ko: '껍질째 보관 시 베이킹소다로 세척 후 물기를 말려 지퍼백에 넣어 야채칸에 두세요. 반 쓰고 남은 레몬은 단면이 위로 가게 랩핑하여 밀폐 보관하세요.',
          en: 'Wash with baking soda, dry, and place in bags in the vegetable drawer. Wrap cut lemons tightly with flat side up.',
          ja: '重曹で洗って水気を乾かし、袋に入れて野菜室へ。使いかけは断面にぴったりラップをして密閉保存します。',
          zh: '带皮保存时，用小苏打洗净并晾干水分，装入密封袋置于蔬菜室。用剩的半个切面朝上包裹保鲜膜密封保存。',
          es: 'Lave con bicarbonato, seque y guarde en bolsas. Para limones cortados, envuelva bien con el lado plano hacia arriba.',
          fr: 'Lavez au bicarbonate, séchez et ensachez au bac à légumes. Filmez le demi-citron entamé face plate vers le haut.',
          de: 'Mit Natron waschen, trocknen und im Gemüsefach lagern. Angeschnittene Zitronen mit der flachen Seite nach oben einwickeln.',
          pt: 'Lave com bicarbonato, seque e guarde em saco na gaveta de vegetais. Embulhe metade cortada com o lado plano para cima.',
          id: 'Cuci dengan soda kue, keringkan, simpan di laci sayur. Bungkus lemon potongan dengan bagian datar menghadap atas.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'grape',
    category: 'fruit',
    emoji: '🍇',
    isProcessed: false,
    names: {
      ko: '포도',
      en: 'Grape',
      ja: 'ぶどう',
      zh: '葡萄',
      es: 'Uva',
      fr: 'Raisin',
      de: 'Weintraube',
      pt: 'Uva',
      id: 'Anggur'
    },
    storage: {
      fridge: {
        durationDays: 14,
        tips: {
          ko: '물기가 있으면 쉽게 무르므로 씻지 말고 신문지나 한지에 싸서 팩에 담아 냉장 보관하세요. 먹기 직전에 베이킹소다나 식초로 씻어 드세요.',
          en: 'Moisture causes decay. Store unwashed wrapped in paper in the fridge. Wash right before eating.',
          ja: '水気があると傷みやすいため, 洗わずに新聞紙などで包んで冷蔵保存します. 食べる直前に洗ってください。',
          zh: '有水分极易发霉. 洗净前用纸包裹置于冰箱冷藏. 吃前再洗干净。',
          es: 'La humedad pudre las uvas. Guarde sin lavar envueltas en papel en la nevera. Lave justo antes de consumir.',
          fr: 'L’humidité fait pourrir. Conservez non lavé dans du papier au frais. Lavez juste avant de manger.',
          de: 'Feuchtigkeit begünstigt Fäulnis. Ungewaschen in Papier gewickelt im Kühlschrank lagern. Vor dem Verzehr waschen.',
          pt: 'A umidade apodrece as uvas. Guarde sem lavar embrulhadas em papel na geladeira. Lave antes de comer.',
          id: 'Air memicu pembusukan. Simpan tanpa dicuci dibungkus kertas di kulkas. Cuci sesaat sebelum dimakan.'
        },
        sources: ['RDA', 'USDA']
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '포도알을 송이에서 떼어내 깨끗이 씻은 후 물기를 완전히 제거하고, 지퍼백에 겹치지 않게 담아 얼려두면 샤베트처럼 맛있게 먹을 수 있습니다.',
          en: 'Remove grapes from stems, wash, dry completely, and freeze in a single layer in bags.',
          ja: '粒を枝から外し, きれいに洗って水気を完全に乾かしてから保存袋に重ならないよう平らに並べて冷凍します。',
          zh: '将葡萄剪下, 洗净并彻底晾干, 装入袋中平铺冷冻. 口感像雪酪一样美味。',
          es: 'Separe los granos, lávelos, séquelos bien y congélelos extendidos en bolsas herméticas.',
          fr: 'Détachez les grains, lavez, séchez bien et congelez à plat en sachet pour obtenir des glaçons fruités.',
          de: 'Beeren abzupfen, waschen, gut trocknen und nebeneinander in Beuteln gefrieren.',
          pt: 'Retire as uvas dos cabos, lave, seque bem e congele em camada única em sacos vedados.',
          id: 'Petik buahnya, cuci, keringkan sepenuhnya, lalu bekukan mendatar dalam kantong plastik.'
        },
        sources: ['RDA', 'USDA']
      }
    }
  },
  {
    id: 'peach',
    category: 'fruit',
    emoji: '🍑',
    isProcessed: false,
    names: {
      ko: '복숭아',
      en: 'Peach',
      ja: '桃',
      zh: '桃子',
      es: 'Melocotón',
      fr: 'Pêche',
      de: 'Pfirsich',
      pt: 'Pêssego',
      id: 'Persik'
    },
    storage: {
      room: {
        durationDays: 3,
        tips: {
          ko: '냉장고에 오래 두면 단맛이 완전히 날아갑니다. 종이에 싸서 그늘지고 바람이 통하는 실온에 후숙한 후, 살짝 말랑해졌을 때 먹는 것이 가장 맛있습니다.',
          en: 'Refrigeration destroys sweetness. Wrap in paper and ripen at room temperature in a breezy shade.',
          ja: '冷蔵庫에 길게 넣으면 甘み가 빠집니다. 紙에 싸서 風通し의 좋은 日陰의 常温에서 追熟시키고, 조금 부드러워지면 드십시오.',
          zh: '长期冷藏会流失甜味. 用纸包裹在通风避光的常温催熟, 变软后食用味道最佳。',
          es: 'La nevera quita el dulzor. Envuelva en papel y madure a temperatura ambiente en la sombra.',
          fr: 'Le frigo détruit le sucre. Enveloppez de papier et laissez mûrir à l’ombre à température ambiante.',
          de: 'Kühlschrank entzieht die Süße. In Papier gewickelt bei Raumtemperatur im schattigen Wind reifen lassen.',
          pt: 'A geladeira tira o sabor doce. Embrulhe em papel e amadureça à temperatura ambiente na sombra.',
          id: 'Mendinginkan merusak rasa manisnya. Bungkus kertas dan matangkan di suhu ruang yang teduh.'
        },
        sources: ['RDA', 'USDA']
      },
      fridge: {
        durationDays: 7,
        tips: {
          ko: '후숙된 복숭아는 씻지 않은 상태에서 개별 랩핑하거나 키친타월로 감싸 냉장고 야채칸에 보관하세요. 먹기 1시간 전에 꺼내두면 단맛이 되살아납니다.',
          en: 'Wrap individually in wrap or paper towels and keep in the crisper drawer. Take out 1 hour before eating to restore sweetness.',
          ja: '追熟後の桃は洗わずにラップやペーパーで1つずつ包み野菜室へ. 食べる1時間前に常温に戻すと甘みが戻ります。',
          zh: '已熟的桃子在不洗的状态下,单独裹保鲜膜或厨房纸置于蔬菜室. 吃前1小时拿出来常温放置能恢复甜味。',
          es: 'Envuelva en film o papel de cocina y guarde en el cajón de verduras. Sáquelo 1 hora antes de comer.',
          fr: 'Filmez ou enveloppez de papier absorbant au bac à légumes. Sortez-le 1h avant consommation.',
          de: 'Einzeln in Folie oder Küchenpapier wickeln und ins Gemüsefach legen. 1 Std. vor dem Verzehr herausnehmen.',
          pt: 'Embrulhe em filme ou papel-toalha e guarde na gaveta de vegetais. Retire 1 hora antes de comer.',
          id: 'Bungkus dengan plastik wrap atau tisu dapur dan taruh di laci sayur. Keluarkan 1 jam sebelum dimakan.'
        },
        sources: ['RDA', 'USDA']
      }
    }
  },
  {
    id: 'orange',
    category: 'fruit',
    emoji: '🍊',
    isProcessed: false,
    names: {
      ko: '오렌지/귤',
      en: 'Orange / Mandarin',
      ja: 'オレンジ/みかん',
      zh: '橙子/橘子',
      es: 'Naranja / Mandarina',
      fr: 'Orange / Mandarine',
      de: 'Orange / Mandarine',
      pt: 'Laranja / Tangarina',
      id: 'Jeruk'
    },
    storage: {
      room: {
        durationDays: 10,
        tips: {
          ko: '박스째 보관 시 상한 귤을 골라내지 않으면 에틸렌 가스로 동반 부패합니다. 신문지를 겹겹이 깔고 귤끼리 닿지 않게 통풍이 잘되는 서늘한 그늘에 보관하세요.',
          en: 'Discard spoiled ones immediately. Place layers of newspaper and space fruits in a cool, dark place.',
          ja: '箱의 상태로 保管할 때는 傷んだ 것을 골라내지 않으면 에틸렌 가스로 동반 부패합니다. 新聞紙를 깔고 귤끼리 닿지 않게 통풍이 잘되는涼しい日陰에서 보관해 주세요.',
          zh: '整箱保存时必须挑出坏掉的, 否则会因乙烯气体导致大面积变质. 铺上多层报纸, 互不接触, 存放在凉爽阴凉处。',
          es: 'Deseche las dañadas. Coloque capas de periódico y separe las frutas en un lugar fresco y oscuro.',
          fr: 'Triez les fruits gâtés. Étalez des couches de journal et séparez les agrumes au frais et à l’ombre.',
          de: 'Verdorbene sofort aussortieren. Zeitungspapier unterlegen und Früchte getrennt an einem kühlen, dunklen Ort lagern.',
          pt: 'Retire as estragadas. Coloque folhas de jornal e separe as frutas em local fresco e com sombra.',
          id: 'Buang yang busuk segera. Alasi koran berlapis dan beri jarak antaruah di tempat sejuk dan gelap.'
        },
        sources: ['RDA', 'USDA']
      },
      fridge: {
        durationDays: 21,
        tips: {
          ko: '장기 보관하려면 옅은 소금물에 가볍게 씻어 껍질의 곰팡이 포자를 제거하고, 물기를 말려 신문지에 개별 싸서 지퍼백에 밀봉 보관하세요.',
          en: 'Wash in diluted saltwater to remove mold spores, dry completely, wrap in newspaper, and seal in bags.',
          ja: '長期保存するなら薄い塩水で軽く洗い, カビ胞子を洗い流して乾かし, 新聞紙で1つずつ包んで冷蔵保存します。',
          zh: '如需长期保存, 请用淡盐水轻洗以去除表皮霉菌孢子, 擦干水分后用报纸单独包裹, 装入袋中冷藏。',
          es: 'Lave en agua con sal para eliminar esporas de moho, seque, envuelva en periódico y guarde en bolsas.',
          fr: 'Lavez à l’eau salée pour éliminer les spores, séchez, enveloppez de journal et ensachez au frais.',
          de: 'In leichtem Salzwasser waschen, um Schimmelsporen zu entfernen, trocknen, in Zeitung wickeln und kühlen.',
          pt: 'Lave em água salgada para retirar esporos de mofo, seque, embrulhe em jornal e guarde em sacos.',
          id: 'Cuci dengan air garam untuk membunuh spora jamur, keringkan, bungkus koran, lalu segel di kantong plastik.'
        },
        sources: ['RDA', 'USDA']
      }
    }
  },
  {
    id: 'kiwi',
    category: 'fruit',
    emoji: '🥝',
    isProcessed: false,
    names: {
      ko: '키위',
      en: 'Kiwi',
      ja: 'キウイ',
      zh: '猕猴桃/奇異果',
      es: 'Kiwi',
      fr: 'Kiwi',
      de: 'Kiwi',
      pt: 'Kiwi',
      id: 'Kiwi'
    },
    storage: {
      room: {
        durationDays: 5,
        tips: {
          ko: '만졌을 때 단단한 상태라면 실온 보관하여 후숙하세요. 바나나나 사과와 함께 비닐봉지에 넣어두면 후숙 가스(에틸렌)로 인해 2~3일 만에 말랑해집니다.',
          en: 'Ripen at room temperature if hard. Putting in a bag with bananas or apples speeds up ripening.',
          ja: '만져 보았을 때 단단한 상태라면 실온 보관하여 후숙하세요. 바나나나 사과와 함께 비닐봉지에 넣어두면 후숙 가스(에틸렌)로 인해 2~3일 만에 말랑해집니다.',
          zh: '手摸较硬时请在常温下催熟. 与香蕉或苹果一起装入塑料袋中, 能借由催熟气体（乙烯）在2-3天内变软。',
          es: 'Madure a temperatura ambiente si está duro. Poner en bolsa con plátanos o manzanas acelera el proceso.',
          fr: 'Laissez mûrir à température ambiante s’il est dur. L’ensacher avec des bananes ou pommes accélère le mûrissement.',
          de: 'Bei Raumtemperatur reifen lassen, wenn hart. Zusammen mit Bananen oder Äpfeln in eine Tüte legen beschleunigt dies.',
          pt: 'Amadureça em temperatura ambiente se estiver duro. Colocar em saco com bananas ou maçãs acelera o processo.',
          id: 'Matangkan di suhu ruang jika keras. Taruh dalam kantong bersama pisang atau apel mempercepat matang.'
        },
        sources: ['USDA', 'MFDS']
      },
      fridge: {
        durationDays: 14,
        tips: {
          ko: '후숙이 끝나 살짝 눌렀을 때 부드러우면 비닐팩에 담아 냉장 보관하세요. 신선함이 최대 2주까지 지속됩니다.',
          en: 'Once ripe and soft, place in a plastic bag and refrigerate to extend freshness up to 2 weeks.',
          ja: '후숙이 완료되어 살짝 눌렀을 때 부드러우면 비닐팩에 담아 냉장 보관하세요. 신선함이 최대 2주까지 지속됩니다.',
          zh: '催熟结束, 轻轻按压变软后, 请装入塑料袋中冷藏. 新鲜度可维持长达2周。',
          es: 'Una vez maduro y suave, póngalo en una bolsa de plástico y refrigere para extender la frescura hasta 2 semanas.',
          fr: 'Une fois mûr et souple, ensachez-le au frais pour prolonger sa fraîcheur jusqu’à 2 semaines.',
          de: 'Sobald reif und weich, in einer Plastiktüte im Kühlschrank lagern. Hält bis zu 2 Wochen.',
          pt: 'Uma vez maduro e macio, coloque em saco plástico e refrigere para prolongar por até 2 semanas.',
          id: 'Setelah matang dan empuk, masukkan ke kantong plastik dan dinginkan untuk memperpanjang awet hingga 2 minggu.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'pear',
    category: 'fruit',
    emoji: '🍐',
    isProcessed: false,
    searchKeywords: {
      ko: ['배', '신고배', '배보관', '에틸렌'],
      en: ['asian pear', 'pear', 'pears'],
      ja: ['梨', 'なし', 'ナシ'],
      zh: ['梨', '雪梨', '沙梨']
    },
    names: {
      ko: '배',
      en: 'Asian Pear',
      ja: '梨',
      zh: '梨',
      es: 'Pera asiática',
      fr: 'Poire asiatique',
      de: 'Nashi-Birne',
      pt: 'Pêra asiática',
      id: 'Pir'
    },
    storage: {
      fridge: {
        durationDays: 60,
        tips: {
          ko: '사과와 보관하면 에틸렌 가스로 인해 빨리 무르므로 반드시 분리하세요. 신문지로 개별 포장한 뒤 비닐팩에 넣어 김치냉장고(0~1℃)에 보관하는 것이 최선입니다.',
          en: 'Must separate from apples as ethylene gas spoils pears quickly. Wrap individually in newspaper and store in a plastic bag in a 0–1°C drawer.',
          ja: 'りんごと保存するとエチレンガスで早く傷むため、必ず分けてください。新聞紙で1つずつ包み、袋に入れてチルド室（0〜1℃）で保管するのが最適です。',
          zh: '与苹果一起存放会因乙烯气体而加速变质，请务必分开放置。用报纸单独包裹后放入塑料袋，存放在0-1℃의 냉장실中效果最佳。',
          es: 'Separe de las manzanas, el gas etileno las daña rápido. Envuélvalas en papel y guárdelas a 0-1 °C en el refrigerador.',
          fr: 'Séparez absolument des pommes à cause de l’éthylène. Enveloppez de journal et stockez à 0-1 °C au réfrigérateur.',
          de: 'Unbedingt von Äpfeln trennen, da Ethylengas Birnen schnell verdirbt. Einzeln in Zeitung wickeln und bei 0–1 °C lagern.',
          pt: 'Separe das maçãs, pois o gás etileno estraga pêras rapidamente. Embrulhe em jornal e guarde a 0-1 °C na geladeira.',
          id: 'Wajib dipisah dari apel karena gas etilen merusak pir dengan cepat. Bungkus koran, simpan di laci 0–1°C.'
        },
        sources: ['USDA', 'EFSA']
      }
    }
  },
  {
    id: 'korean-melon',
    iconImage: '/assets/images/apps/freshself/ingredients/korean-melon.png',
    category: 'fruit',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['참외', '노란참외', '참외보관', '저온장해'],
      en: ['korean melon', 'oriental melon', 'melon'],
      ja: ['マクワウリ', 'まくわうり', 'メロン'],
      zh: ['香瓜', '甜瓜', '东方蜜瓜']
    },
    names: {
      ko: '참외',
      en: 'Korean Melon',
      ja: 'マクワウリ',
      zh: '香瓜',
      es: 'Melón coreano',
      fr: 'Melon coréen',
      de: 'Korea-Melone',
      pt: 'Melão coreano',
      id: 'Melon korea'
    },
    storage: {
      fridge: {
        durationDays: 7,
        tips: {
          ko: '참외는 아열대 과채류로 4℃ 이하에서는 저온 장해(껍질 패임, 씨 갈변)가 생깁니다. 씻지 말고 신문지로 감싸 온도 변화가 적은 5~7℃ 야채칸에 보관하세요.',
          en: 'Subtropical fruit vulnerable to under 4°C (causes skin pitting and seed browning). Wrap unwashed in newspaper and store in 5–7°C crisper drawers.',
          ja: '참외는 아열대 과일로 4℃ 이하에서는 냉해(껍질 패임, 씨 갈변)가 생깁니다. 씻지 말고 신문지로 싸서 온도가 덜 차가운 야채칸에 보관하세요.',
          zh: '属于亚热带果蔬，低于4℃易受冷害（果皮凹陷、瓜籽变褐）。请勿淘洗，用报纸包裹存放在5-7℃의 蔬菜抽屉中。',
          es: 'Fruta subtropical sensible a menos de 4 °C. No la lave, envuélvala en papel y guárdela a 5–7 °C en el cajón de verduras.',
          fr: 'Fruit subtropical sensible sous 4 °C. Ne le lavez pas, enveloppez de journal et stockez à 5–7 °C dans le bac à légumes.',
          de: 'Subtropische Frucht, kälteempfindlich unter 4 °C. Ungewaschen in Zeitung wickeln und bei 5–7 °C im Gemüsefach lagern.',
          pt: 'Fruta subtropical sensível a menos de 4 °C. Não lave, embrulhe em jornal e guarde a 5–7 °C na gaveta de vegetais.',
          id: 'Buah subtropis rentan suhu di bawah 4°C. Jangan cuci, bungkus koran, lalu simpan di laci sayur suhu 5–7°C.'
        },
        sources: ['RDA', 'MFDS']
      }
    }
  },
  {
    id: 'persimmon',
    iconImage: '/assets/images/apps/freshself/ingredients/persimmon.png',
    category: 'fruit',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['단감', '감', '곶감', '단감보관', '연화'],
      en: ['persimmon', 'sweet persimmon', 'persimmons'],
      ja: ['柿', 'かき', 'カキ'],
      zh: ['柿子', '甜柿', '脆柿']
    },
    names: {
      ko: '단감 / 곶감',
      en: 'Persimmon',
      ja: '柿',
      zh: '柿子',
      es: 'Caqui',
      fr: 'Kaki',
      de: 'Kaki',
      pt: 'Caqui',
      id: 'Kesemek'
    },
    storage: {
      fridge: {
        durationDays: 30,
        tips: {
          ko: '0~-1℃ 저온과 고습도(90~95%)에서 가장 잘 보관됩니다. 물기를 닦고 꼭지가 바닥을 향하도록 세워 키친타월로 싸서 지퍼백에 밀봉해 보관하세요.',
          en: 'Best stored at 0 to -1°C and high humidity (90–95%). Dry surface, stand with stems facing down, wrap in paper towels, and seal in bags.',
          ja: '단감은 0~-1℃의 저온과 90~95%의 높은 습도에서 장기 보관이 잘 됩니다. 꼭지가 바닥으로 가도록 뒤집어 세운 후 키친타월에 싸서 지퍼백에 보관하세요.',
          zh: '最适存放在0至-1℃和高湿度（90-95%）下。擦干水分，果蒂朝下竖立，用厨房纸包裹，放入密封袋中保存。',
          es: 'Se conserva mejor a 0 o -1 °C y alta humedad (90–95%). Seque, coloque con tallos hacia abajo, envuelva en papel y selle.',
          fr: 'Idéal à 0 ou -1 °C et humidité élevée. Séchez, posez la queue vers le bas, enveloppez de papier absorbant et fermez hermétiquement.',
          de: 'Am besten bei 0 bis -1 °C und hoher Feuchte (90–95 %) lagern. Trocknen, Stiel nach unten, in Küchenpapier wickeln und eintüten.',
          pt: 'Melhor guardado a 0 ou -1 °C e alta umidade. Seque, coloque com o cabo para baixo, embrulhe em papel-toalha e sele.',
          id: 'Terbaik di suhu 0 hingga -1°C dan kelembapan 90–95%. Keringkan, posisikan tangkai di bawah, bungkus tisu, lalu segel.'
        },
        sources: ['RDA', 'MFDS']
      }
    }
  },
  {
    id: 'cherry',
    category: 'fruit',
    emoji: '🍒',
    isProcessed: false,
    searchKeywords: {
      ko: ['체리', '버찌', '수입체리', '과일보관', '체리보관'],
      en: ['cherry', 'cherries', 'sweet cherries'],
      ja: ['さくらんぼ', 'サクランボ', 'チェリー'],
      zh: ['樱桃', '车厘子']
    },
    names: {
      ko: '체리',
      en: 'Cherry',
      ja: 'さくらんぼ',
      zh: '樱桃',
      es: 'Cereza',
      fr: 'Cerise',
      de: 'Kirsche',
      pt: 'Cereja',
      id: 'Ceri'
    },
    storage: {
      fridge: {
        durationDays: 7,
        tips: {
          ko: '껍질이 얇고 상처 입기 쉬우며 물기에 취약하므로 절대 먹기 직전까지 씻지 마세요. 꼭지를 단 채 키친타월을 깐 밀폐지퍼백에 낱개로 담아 보관하세요.',
          en: 'Thin-skinned and vulnerable to moisture. Never wash until ready to eat. Keep stems attached, lay individually in paper-towel-lined bags, and refrigerate.',
          ja: '체리는 껍질이 얇고 습기에 극도로 취약합니다. 절대 씻지 않은 상태에서 꼭지가 달린 채로 키친타월을 깐 보관용기에 펼쳐 냉장 보관하세요.',
          zh: '果皮薄，易碰伤且怕湿。食用前切勿冲洗。保留果梗，单层平铺在垫有厨房纸的密封袋中冷藏。',
          es: 'Piel fina y sensible a la humedad. Nunca lave hasta consumir. Conserve con tallo, extienda sobre papel de cocina en bolsas y refrigere.',
          fr: 'Peau fine et sensible à l’humidité. Ne lavez qu’au moment de manger. Gardez la queue, étalez sur du papier absorbant dans un sachet au frais.',
          de: 'Dünnhäutig und feuchtigkeitsempfindlich. Erst vor dem Verzehr waschen. Stiele nicht entfernen, auf Küchenpapier flach in Beuteln kühlen.',
          pt: 'Casca fina e sensível a umidade. Lave apenas na hora de comer. Mantenha com cabo, espalhe sobre papel-toalha no saco e refrigere.',
          id: 'Kulit tipis dan sensitif air. Jangan cuci sebelum dimakan. Biarkan tangkai utuh, alas tisu di kantong plastik, taruh kulkas.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'mandarin',
    category: 'fruit',
    emoji: '🍊',
    isProcessed: false,
    searchKeywords: {
      ko: ['귤', '밀감', '감귤', '조생귤', '제주귤', '귤보관'],
      en: ['mandarin', 'tangerine', 'citrus', 'mandarins'],
      ja: ['みかん', '温州みかん', 'ミカン'],
      zh: ['橘子', '柑橘', '蜜橘']
    },
    names: {
      ko: '귤',
      en: 'Mandarin',
      ja: 'みかん',
      zh: '橘子',
      es: 'Mandarina',
      fr: 'Mandarine',
      de: 'Mandarine',
      pt: 'Mandarina / Mexerica',
      id: 'Jeruk mandarin'
    },
    storage: {
      room: {
        durationDays: 5,
        tips: {
          ko: '바람이 잘 통하는 서늘한 실온에 서로 닿지 않게 종이상자나 바구니에 담아 보관하세요. 귤끼리 닿으면 쉽게 곰팡이가 핍니다.',
          en: 'Store in a cool, ventilated room in a box or basket. Keep them separated; touching accelerates mold growth.',
          ja: '風通しの良い涼しい室温で、互いに触れないよう紙箱やカゴに入れて保管します。重なり合うとカビが発生しやすくなります。',
          zh: '存放在通风阴凉的常温下，放入纸箱或篮子中，避免相互接触。橘子堆叠接触极易发霉。',
          es: 'Guarde en lugar fresco y ventilado en caja o cesta. Manténgalas separadas; si se tocan, el moho se propaga rápido.',
          fr: 'Stockez dans une pièce fraîche et ventilée en cagette. Séparez-les bien ; le contact accélère l’apparition de moisissure.',
          de: 'Kühl und luftig in Kiste oder Korb lagern. Abstand halten, da Berührung die Schimmelbildung beschleunigt.',
          pt: 'Guarde em local fresco e ventilado em caixa ou cesta. Evite contato direto entre elas, pois acelera o aparecimento de mofo.',
          id: 'Simpan di suhu ruang sejuk dan berangin dalam wadah. Pisahkan jeruk; saling menempel mempercepat pertumbuhan jamur.'
        },
        sources: ['USDA', 'MFDS']
      },
      fridge: {
        durationDays: 7,
        tips: {
          ko: '냉장실 보관 시 신문지나 키친타월을 바닥에 깔고 보관하며, 온도가 너무 낮으면 단맛이 떨어지므로 야채칸(5~7℃)에 보관하세요.',
          en: 'Refrigerate in the crisper (5–7°C) with newspaper or paper towels at the bottom. Too cold temperatures reduce sweetness.',
          ja: '冷蔵室では新聞紙나ペーパーを敷いて並べ、温度が低すぎると甘みが抜けるため野菜室（5〜7℃）で保管します。',
          zh: '冷藏时在底部垫上报纸或厨房纸，因温度过低会降低甜度，请存放在蔬菜抽屉（5-7℃）中。',
          es: 'Refrigere en el cajón (5–7 °C) con papel en el fondo. Las temperaturas muy bajas reducen el dulzor.',
          fr: 'Réfrigérez dans le bac à légumes (5–7 °C) sur du papier. Une température trop froide altère le goût sucré.',
          de: 'Im Gemüsefach (5–7 °C) auf Zeitung oder Papier lagern. Zu kalte Temperaturen verringern die Süße.',
          pt: 'Refrigere na gaveta de vegetais (5-7 °C) com papel no fundo. Temperaturas muito baixas diminuem a doçura.',
          id: 'Masukkan kulkas di laci sayur (5-7°C) dengan alas kertas koran atau tisu. Suhu terlalu dingin mengurangi manis.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'mango',
    category: 'fruit',
    emoji: '🥭',
    isProcessed: false,
    searchKeywords: {
      ko: ['망고', '애플망고', '망고보관', '후숙과일'],
      en: ['mango', 'mangoes', 'apple mango'],
      ja: ['マンゴー', 'アップルマンゴー'],
      zh: ['芒果', '台农芒果', '贵妃芒']
    },
    names: {
      ko: '망고',
      en: 'Mango',
      ja: 'マンゴー',
      zh: '芒果',
      es: 'Mango',
      fr: 'Mangue',
      de: 'Mango',
      pt: 'Manga',
      id: 'Mangga'
    },
    storage: {
      room: {
        durationDays: 3,
        tips: {
          ko: '단단한 망고는 후숙이 필요하므로 실온(20℃ 안팎)에 두세요. 손으로 만졌을 때 살짝 말랑해지고 향이 진해지면 완숙된 것입니다.',
          en: 'Unripe mangoes need ripening at room temp (around 20°C). Ripe when slightly soft to the touch and highly aromatic.',
          ja: '固いマンゴーは追熟が必要なため室温（20℃前後）に置きます。手で触って少し柔らかくなり、香りが強くなれば完熟です。',
          zh: '较硬的芒果需在常温（20℃左右）下催熟。手摸上去感觉微软、香气浓郁时即为完全成熟。',
          es: 'Los mangos verdes maduran a temp. ambiente (unos 20 °C). Estará listo si se siente un poco blando al tacto y huele dulce.',
          fr: 'Les mangues vertes doivent mûrir à temp. ambiante (environ 20 °C). Elle est mûre quand elle est souple sous le doigt et parfumée.',
          de: 'Unreife Mangos bei Zimmertemperatur (ca. 20 °C) nachreifen lassen. Reif, wenn sie auf Druck leicht nachgeben und stark duften.',
          pt: 'Mangas verdes precisam maturar em temp. ambiente (cerca de 20 °C). Estará madura quando estiver macia ao toque e aromática.',
          id: 'Mangga keras perlu dimatangkan di suhu ruang (sekitar 20°C). Mangga matang jika terasa agak empuk saat ditekan dan wangi.'
        },
        sources: ['USDA', 'MFDS']
      },
      fridge: {
        durationDays: 4,
        tips: {
          ko: '후숙이 끝난 망고는 신문지에 감싸 냉장실 야채칸에 보관해 3~4일 이내에 드세요. 덜 익은 채 냉장하면 저온장해로 후숙되지 않고 썩습니다.',
          en: 'Once ripe, wrap in newspaper and store in the crisper drawer; consume in 3–4 days. Refrigerating unripe mangoes stops ripening and causes rot.',
          ja: '追熟が終わったものは新聞紙で包み野菜室に入れ、3〜4日以内に召し上がりください。未熟なまま冷蔵すると冷害で熟さず腐ります。',
          zh: '成熟后的芒果请用报纸包裹存放在蔬菜抽屉中，并在3-4天内食用。未成熟时冷藏会受冷害，导致无法成熟并腐烂。',
          es: 'Una vez maduro, envuelva en papel y ponga en el cajón; use en 3-4 días. Refrigerar verde causa daños por frío y se pudre sin madurar.',
          fr: 'Mûre, enveloppez de journal au bac à légumes ; consommez sous 3-4 jours. Mettre au frais verte bloque le mûrissement et la fait pourrir.',
          de: 'Reif in Zeitung gewickelt im Gemüsefach lagern; in 3-4 Tagen verzehren. Unreif kühlen führt zu Kälteschäden und Fäulnis ohne Reife.',
          pt: 'Uma vez madura, embrulhe em jornal e guarde na gaveta de vegetais; consuma em até 4 dias. Refrigerar verde causa danos por frio e apodrece.',
          id: 'Jika matang, bungkus koran dan taruh di laci sayur; konsumsi dalam 3-4 hari. Kulkas merusak mangga mentah sehingga busuk tanpa matang.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  }
];
