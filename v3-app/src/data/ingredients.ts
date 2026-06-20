export interface StorageGuide {
  durationDays: number;
  tips: Record<string, string>;
  sources?: string[];
}

export interface Ingredient {
  id: string;
  category: 'vegetable' | 'fruit' | 'dairy' | 'meat' | 'seafood' | 'grain' | 'condiment' | 'etc';
  emoji: string;
  names: Record<string, string>;
  isProcessed: boolean;
  iconImage?: string;
  searchKeywords?: Record<string, string[]>;
  storage: {
    room?: StorageGuide;
    fridge?: StorageGuide;
    freezer?: StorageGuide;
  };
}

export const ingredients: Ingredient[] = [
  {
    id: 'green-onion',
    iconImage: '/assets/images/apps/freshself/ingredients/green-onion.png',
    category: 'vegetable',
    emoji: '🎋',
    isProcessed: false,
    searchKeywords: {
      ko: ['파', '쪽파', '실파', '대파보관'],
      en: ['scallion', 'spring onion', 'scallions', 'shallot'],
      ja: ['ねぎ', 'ネギ', '青ねぎ', '白ねぎ'],
      zh: ['小葱', '大葱', '香葱', '青葱']
    },
    names: {
      ko: '대파',
      en: 'Green Onion',
      ja: 'ネギ',
      zh: '大葱',
      es: 'Cebollín',
      fr: 'Oignon vert',
      de: 'Frühlingszwiebel',
      pt: 'Cebolinha',
      id: 'Daun bawang'
    },
    storage: {
      room: {
        durationDays: 5,
        tips: {
          ko: '뿌리를 남기고 신문지에 싸서 그늘진 서늘한 곳에 보관하세요.',
          en: 'Wrap in newspaper with roots intact and keep in a cool, shady place.',
          ja: '根を残したまま新聞紙に包み、風通しの良い涼しい暗所で保管してください。',
          zh: '保留根部并用报纸包好，存放在阴凉通风处。',
          es: 'Envuélvalo en papel de periódico con las raíces intactas y guárdelo en un lugar fresco y sombreado.',
          fr: 'Enveloppez-le dans du papier journal avec ses racines et conservez-le dans un endroit frais et ombragé.',
          de: 'In Zeitungspapier einwickeln, Wurzeln intakt lassen und an einem kühlen, schattigen Ort aufbewahren.',
          pt: 'Embrulhe em jornal com as raízes intactas e guarde em local fresco e com sombra.',
          id: 'Bungkus dengan koran dengan akar utuh dan simpan di tempat yang sejuk dan teduh.'
        },
        sources: [
          'RDA'
        ]
      },
      fridge: {
        durationDays: 21,
        tips: {
          ko: '물기를 완전히 제거한 후, 용기 높이에 맞게 썰어 뿌리가 아래로 가도록 세워서 밀폐 보관하세요.',
          en: 'Dry completely, slice to container height, and store vertically with roots facing down in an airtight container.',
          ja: '水気を完全に拭き取り、容器の高さに合わせて切ってから、根を下にして立てて密閉保存してください。',
          zh: '彻底擦干水分，切成适合容器的高度，根部朝下竖立密封保存。',
          es: 'Seque por completo, córtelo a la altura del recipiente y guárdelo verticalmente con las raíces hacia abajo.',
          fr: 'Séchez complètement, coupez à la hauteur du récipient et stockez verticalement, racines vers le bas.',
          de: 'Vollständig trocknen, auf Behälterhöhe schneiden und senkrecht mit den Wurzeln nach unten aufbewahren.',
          pt: 'Seque completamente, corte na altura do recipiente e guarde verticalmente com as raízes para baixo.',
          id: 'Keringkan sepenuhnya, potong sesuai tinggi wadah, dan simpan secara vertikal dengan akar menghadap ke bawah.'
        },
        sources: [
          'RDA'
        ]
      },
      freezer: {
        durationDays: 180,
        tips: {
          ko: '송송 썰어서 밀폐용기나 지퍼백에 소분하여 급속 냉동하세요. 요리할 때 해동 없이 즉시 사용 가능합니다.',
          en: 'Chop, portion into airtight bags, and freeze. Use directly in cooking without thawing.',
          ja: '細かく刻んで密閉容器や保存袋に小分けにし、冷凍してください。凍ったまま調理に使えます。',
          zh: '切碎后分装在密封袋中冷冻。烹饪时无需解冻，直接使用即可。',
          es: 'Píquelo, divídalo en bolsas herméticas y congélelo. Úselo directamente al cocinar sin descongelar.',
          fr: 'Hachez-le, répartissez-le dans des sacs hermétiques et congelez-le. Utilisez-le directement en cuisine sans décongélation.',
          de: 'Hacken, in luftdichten Beuteln portionieren und einfrieren. Direkt gefroren beim Kochen verwenden.',
          pt: 'Pique, divida em sacos herméticos e congele. Use diretamente na cozinha sem descongelar.',
          id: 'Cincang, bagi ke dalam kantong kedap udara, lalu bekukan. Gunakan langsung dalam masakan tanpa mencairkannya.'
        },
        sources: [
          'RDA'
        ]
      }
    }
  },
  {
    id: 'onion',
    category: 'vegetable',
    emoji: '🧅',
    isProcessed: false,
    searchKeywords: {
      ko: ['자색양파', '붉은양파', '조미양파', '햇양파'],
      en: ['red onion', 'white onion', 'shallots', 'sweet onion'],
      ja: ['タマネギ', '玉ねぎ', '赤玉ねぎ'],
      zh: ['洋葱', '红洋葱', '白洋葱']
    },
    names: {
      ko: '양파',
      en: 'Onion',
      ja: '玉ねぎ',
      zh: '洋葱',
      es: 'Cebolla',
      fr: 'Oignon',
      de: 'Zwiebel',
      pt: 'Cebola',
      id: 'Bawang bombay'
    },
    storage: {
      room: {
        durationDays: 30,
        tips: {
          ko: '망에 넣어 서로 닿지 않게 매달거나, 신문지에 하나씩 싸서 서늘하고 바람이 잘 통하는 그늘에 보관하세요.',
          en: 'Hang in a net without touching each other, or wrap individually in newspaper in a cool, well-ventilated shade.',
          ja: 'ネットに入れて互いに触れないよう吊るすか、1つずつ新聞紙に包んで涼しく風通しの良い日陰で保管してください。',
          zh: '装入网袋中悬挂避免相互接触，或用报纸单独包裹，存放在凉爽通风的阴凉处。',
          es: 'Cuélguelas en una red sin que se toquen, o envuélvalas individualmente en papel de periódico en la sombra.',
          fr: 'Suspendez-les dans un filet sans qu’ils se touchent, ou enveloppez-les individuellement dans du papier journal au frais.',
          de: 'In einem Netz aufhängen, ohne dass sie sich berühren, oder einzeln in Zeitungspapier an einem kühlen Ort lagern.',
          pt: 'Pendure em uma rede sem que se toquem, ou embrulhe individualmente em jornal em local fresco e arejado.',
          id: 'Gantung dalam jaring tanpa bersentuhan, atau bungkus satu per satu dengan koran di tempat yang sejuk dan berventilasi.'
        },
        sources: [
          'RDA',
          'FSA'
        ]
      },
      fridge: {
        durationDays: 14,
        tips: {
          ko: '껍질을 깐 양파는 씻어서 물기를 닦은 후 랩으로 개별 밀봉하여 냉장 보관하세요.',
          en: 'Peel, wash, dry, wrap individually in plastic wrap, and refrigerate.',
          ja: '皮をむいた玉ねぎは洗い、水気を拭き取ってからラップで1つずつ密閉包みにして冷蔵庫で保管してください。',
          zh: '去皮洗净并擦干水分，用保鲜膜单独包裹后冷藏。',
          es: 'Pélelas, lávelas, séquelas, envuélvalas individualmente en film plástico y refrigérelas.',
          fr: 'Pelez, lavez, séchez, enveloppez individuellement dans du film étirable et réfrigérez.',
          de: 'Schälen, waschen, trocknen, einzeln in Frischhaltefolie einwickeln und im Kühlschrank lagern.',
          pt: 'Descasque, lave, seque, embrulhe individualmente em filme plástico e refrigere.',
          id: 'Kupas, cuci, keringkan, bungkus satu per satu dengan plastik wrap, lalu masukkan ke dalam lemari es.'
        },
        sources: [
          'RDA',
          'USDA',
          'FSA'
        ]
      }
    }
  },
  {
    id: 'potato',
    category: 'vegetable',
    emoji: '🥔',
    isProcessed: false,
    names: {
      ko: '감자',
      en: 'Potato',
      ja: 'じゃがいも',
      zh: '土豆',
      es: 'Patata',
      fr: 'Pomme de terre',
      de: 'Kartoffel',
      pt: 'Batata',
      id: 'Kentang'
    },
    storage: {
      room: {
        durationDays: 45,
        tips: {
          ko: '상자나 종이봉투에 담아 바람이 잘 통하는 그늘진 실온에 보관하세요. 사과를 한 개 같이 넣으면 싹 트는 것을 방지합니다.',
          en: 'Store in a box or paper bag in a well-ventilated, shady room. Adding an apple prevents sprouting.',
          ja: '箱や紙袋に入れ、風通しの良い日陰の常温で保管してください。りんごを1個一緒に入れると発芽を防げます。',
          zh: '装在纸箱或纸袋中，存放在通风阴凉的常温下。放入一个苹果可以防止发芽。',
          es: 'Almacenar en una caja o bolsa de papel en un lugar templado y ventilado. Añadir una manzana evita la germinación.',
          fr: 'Conserver dans une boîte ou un sac en papier dans une pièce ventilée et sombre. Ajouter une pomme empêche la germination.',
          de: 'In einer Kiste oder Papiertüte an einem gut belüfteten, schattigen Ort lagern. Ein Apfel verhindert das Keimen.',
          pt: 'Guarde em caixa ou saco de papel em local arejado e com sombra. Colocar uma maçã ajuda a evitar o brotamento.',
          id: 'Simpan dalam kotak atau kantong kertas di ruangan yang sejuk dan berventilasi. Menambahkan apel dapat mencegah bertunas.'
        },
        sources: [
          'MFDS',
          'RDA',
          'FSA'
        ]
      }
    }
  },
  {
    id: 'sweet-potato',
    category: 'vegetable',
    emoji: '🍠',
    isProcessed: false,
    names: {
      ko: '고구마',
      en: 'Sweet Potato',
      ja: 'さつまいも',
      zh: '红薯',
      es: 'Batata dulce',
      fr: 'Patate douce',
      de: 'Süßkartoffel',
      pt: 'Batata-doce',
      id: 'Ubi jalar'
    },
    storage: {
      room: {
        durationDays: 30,
        tips: {
          ko: '냉장고에 넣으면 냉해로 쉽게 썩습니다. 박스를 열어 수분을 말린 후, 신문지에 싸서 12~15℃의 서늘한 실온에 보관하세요.',
          en: 'Refrigeration causes cold injury and decay. Dry moisture, wrap in newspaper, and store at 12–15°C room temp.',
          ja: '冷蔵庫に入れると低温障害で傷みやすくなります。箱を開けて湿気を飛ばし、新聞紙に包んで12〜15℃의 涼しい室内で保管してください。',
          zh: '放入冰箱易因冷害腐烂。打开包装晾干水分，用报纸包好存放在12-15℃的阴凉常温下。',
          es: 'Refrigerarlo causa daños por frío. Séquelo, envuélvalo en papel de periódico y guárdelo a 12–15 °C.',
          fr: 'Le froid abîme la patate douce. Séchez-la, enveloppez-la dans du journal et stockez-la entre 12 et 15 °C.',
          de: 'Lagerung im Kühlschrank führt zu Kälteschäden. Feuchtigkeit trocknen, in Zeitungspapier wickeln und bei 12–15 °C lagern.',
          pt: 'A refrigeração causa danos pelo frio. Seque a umidade, embrulhe em jornal e guarde à temperatura ambiente (12–15 °C).',
          id: 'Memasukkannya ke lemari es dapat merusaknya karena dingin. Keringkan, bungkus koran, simpan di suhu 12–15°C.'
        },
        sources: [
          'RDA',
          'FSA'
        ]
      }
    }
  },
  {
    id: 'garlic',
    category: 'vegetable',
    emoji: '🧄',
    isProcessed: false,
    names: {
      ko: '마늘',
      en: 'Garlic',
      ja: 'にんにく',
      zh: '大蒜',
      es: 'Ajo',
      fr: 'Ail',
      de: 'Knoblauch',
      pt: 'Alho',
      id: 'Bawang putih'
    },
    storage: {
      room: {
        durationDays: 30,
        tips: {
          ko: '통마늘은 망에 넣어 바람이 잘 통하는 서늘한 곳에 매달아 보관하세요. 통풍이 제일 중요합니다.',
          en: 'Hang whole garlic in a net in a cool, well-ventilated place. Ventilation is key.',
          ja: '丸ごとのにんにくはネットに入れ、風通しの良い涼しい場所に吊るして保管してください。風通しが最も重要です。',
          zh: '整蒜装入网袋，挂在通风阴凉处。通风最关键。',
          es: 'Cuelgue el ajo entero en una red en un lugar fresco y bien ventilado. La ventilación es clave.',
          fr: 'Suspendez l’ail entier dans un filet dans un endroit frais et ventilé. La ventilation est la clé.',
          de: 'Ganzen Knoblauch in einem Netz an einem kühlen, gut belüfteten Ort aufhängen. Belüftung ist der Schlüssel.',
          pt: 'Pendure o alho inteiro em uma rede em local fresco e arejado. A ventilação é fundamental.',
          id: 'Gantung bawang putih utuh dalam jaring di tempat yang sejuk dan berventilasi. Ventilasi adalah kunci.'
        },
        sources: [
          'RDA'
        ]
      },
      fridge: {
        durationDays: 14,
        tips: {
          ko: '깐마늘은 씻은 후 물기를 완전히 말리고, 밀폐용기 바닥에 설탕을 깔고 키친타월을 얹은 뒤 올려두면 수분 흡수에 탁월합니다.',
          en: 'For peeled cloves, dry completely. Lay sugar at container bottom, cover with paper towel, and place garlic.',
          ja: 'むいたにんにくは洗い、水기를 완전히 건조합니다. 密閉容器の底に砂糖を敷き、キッチンペーパーをのせてから保管すると水分を吸収できます。',
          zh: '去皮蒜瓣洗净并彻底晾干。在密封容器底部撒糖，铺上厨房纸巾再放入大蒜，能吸附多余水分。',
          es: 'Para los dientes pelados, séquelos bien. Coloque azúcar al fondo del recipiente, cubra con papel de cocina y ponga el ajo.',
          fr: 'Pour l’ail pelé, séchez-le. Déposez du sucre au fond du récipient, couvrez de papier absorbant, puis posez l’ail.',
          de: 'Geschälte Zehen gut trocknen. Zucker auf den Boden des Behälters streuen, Küchenpapier darüber legen und Knoblauch darauflegen.',
          pt: 'Para dentes descascados, seque bem. Coloque açúcar no fundo do pote, cubra com papel-toalha e coloque o alho.',
          id: 'Untuk bawang kupas, keringkan. Taburkan gula di dasar wadah, alasi dengan tisu dapur, lalu taruh bawang.'
        },
        sources: [
          'RDA',
          'USDA'
        ]
      },
      freezer: {
        durationDays: 180,
        tips: {
          ko: '다진 마늘은 얼음틀이나 지퍼백에 얇게 편 뒤 얼려서 격자 모양으로 잘라 소분 보관하세요.',
          en: 'Freeze minced garlic in ice trays or flattened in bags, then cut into portions.',
          ja: '刻み・すりおろしにんにくは氷トレーや保存袋に薄く平らにして凍らせ、格子状に切って小分け保存してください。',
          zh: '将碎蒜泥装在冰格中或在袋子中压平冷冻，然后切成方块分装保存。',
          es: 'Congele el ajo picado en cubiteras o aplanado en bolsas, luego córtelo en porciones.',
          fr: 'Congelez l’ail haché dans des bacs à glaçons ou à plat dans des sacs, puis coupez-le en portions.',
          de: 'Gehackten Knoblauch in Eiswürfelformen oder flach in Beuteln einfrieren, dann in Portionen schneiden.',
          pt: 'Congele o alho picado em formas de gelo ou achatado em sacos, depois corte em porções.',
          id: 'Bekukan bawang putih cincang dalam cetakan es atau pipihkan dalam kantong, lalu potong-potong.'
        },
        sources: [
          'RDA'
        ]
      }
    }
  },
  {
    id: 'avocado',
    category: 'vegetable',
    emoji: '🥑',
    isProcessed: false,
    names: {
      ko: '아보카도',
      en: 'Avocado',
      ja: 'アボカド',
      zh: '牛油果',
      es: 'Aguacate',
      fr: 'Avocat',
      de: 'Avocado',
      pt: 'Abacate',
      id: 'Alpukat'
    },
    storage: {
      room: {
        durationDays: 5,
        tips: {
          ko: '초록색의 덜 익은 상태라면 바나나, 사과와 함께 종이봉투에 넣어 실온에서 후숙시키세요.',
          en: 'If unripe (green), place in a paper bag with bananas or apples and ripen at room temperature.',
          ja: '緑色の未熟な状態であれば、バナナやりんごと一緒に紙袋に入れ、常温で追熟させてください。',
          zh: '如果是未熟的绿色，与香蕉或苹果一起放入纸袋中，在常温下催熟。',
          es: 'Si está verde (inmaduro), póngalo en una bolsa de papel con plátanos o manzanas para madurar a temperatura ambiente.',
          fr: 'S’il est vert (pas mûr), mettez-le dans un sac en papier avec des bananes ou des pommes pour mûrir.',
          de: 'Wenn unreif (grün), in einer Papiertüte mit Bananen oder Äpfeln bei Raumtemperatur reifen lassen.',
          pt: 'Se estiver verde, coloque em um saco de papel com bananas ou maçãs e amadureça à temperatura ambiente.',
          id: 'Jika belum matang (hijau), taruh di kantong kertas bersama pisang atau apel dan matangkan di suhu ruang.'
        },
        sources: [
          'USDA'
        ]
      },
      fridge: {
        durationDays: 7,
        tips: {
          ko: '후숙이 완료되어 갈색빛을 띠고 누르면 말랑할 때 냉장고에 넣어야 상하는 것을 늦춥니다.',
          en: 'Refrigerate once ripe (brown skin and soft to touch) to slow down spoilage.',
          ja: '追熟が完了して皮が褐色になり、押すと柔らかくなった状態で冷蔵庫に入れると傷みを遅らせられます。',
          zh: '催熟至表皮呈褐色且触感变软后，再存入冰箱以减缓腐烂。',
          es: 'Refrigérelo una vez maduro (piel marrón y suave al tacto) para retrasar el deterioro.',
          fr: 'Réfrigérez-le une fois mûr (peau brune et texture souple) pour ralentir la dégradation.',
          de: 'Kühlen, sobald gereift (braune Schale und weich), um den Verderb zu verlangsamen.',
          pt: 'Refrigere assim que estiver maduro (casca marrom e macio ao toque) para retardar a deterioração.',
          id: 'Masukkan ke lemari es setelah matang (kulit cokelat dan empuk saat ditekan) untuk memperlambat pembusukan.'
        },
        sources: [
          'USDA'
        ]
      }
    }
  },
  {
    id: 'lettuce',
    iconImage: '/assets/images/apps/freshself/ingredients/lettuce.png',
    category: 'vegetable',
    emoji: '🥗',
    isProcessed: false,
    names: {
      ko: '상추',
      en: 'Lettuce',
      ja: 'レタス',
      zh: '生菜',
      es: 'Lechuga',
      fr: 'Laitue',
      de: 'Salat',
      pt: 'Alface',
      id: 'Selada'
    },
    storage: {
      fridge: {
        durationDays: 7,
        tips: {
          ko: '씻지 않은 상태에서 키친타월에 감싸 지퍼백에 넣어 밀봉 보관하세요. 씻었다면 물기를 완전히 빼야 짓무르지 않습니다.',
          en: 'Wrap unwashed lettuce in paper towels and seal in a bag. If washed, dry completely to prevent rotting.',
          ja: '洗わずにキッチンペーパーで包み、保存袋に入れて密閉保存します。洗った場合は水気を完全に拭き取ってください。',
          zh: '不洗的情况下用厨房纸包裹，放入密封袋中密封保存。如果洗过，必须彻底控干水分以防烂叶。',
          es: 'Envuelva la lechuga sin lavar en papel de cocina y séllela en una bolsa. Si la lava, séquela por completo.',
          fr: 'Enveloppez la laitue non lavée dans du papier absorbant et fermez le sac. Si lavée, séchez-la bien.',
          de: 'Ungewaschenen Salat in Küchenpapier wickeln und in einer Tüte verschließen. Nach dem Waschen gut trocknen.',
          pt: 'Embrulhe a alface sem lavar em papel-toalha e sele num saco. Se lavar, seque completamente para não murchar.',
          id: 'Bungkus selada yang belum dicuci dengan tisu dapur lalu segel. Jika dicuci, keringkan sepenuhnya.'
        },
        sources: [
          'MFDS',
          'RDA',
          'EFSA',
          'FSA'
        ]
      }
    }
  },
  {
    id: 'spinach',
    iconImage: '/assets/images/apps/freshself/ingredients/spinach.png',
    category: 'vegetable',
    emoji: '🌿',
    isProcessed: false,
    names: {
      ko: '시금치',
      en: 'Spinach',
      ja: 'ほうれん草',
      zh: '菠菜',
      es: 'Espinaca',
      fr: 'Épinards',
      de: 'Spinat',
      pt: 'Espinafre',
      id: 'Bayam'
    },
    storage: {
      fridge: {
        durationDays: 7,
        tips: {
          ko: '뿌리가 아래로 가도록 세워서 보관하면 수명이 늘어납니다. 신문지나 키친타월로 가볍게 싸서 비닐팩에 넣어 세워두세요.',
          en: 'Store standing upright to extend shelf life. Wrap gently in paper towel and put vertically in a plastic bag.',
          ja: '根を下にして立てて保存すると長持ちします。新聞紙やペーパーで軽く包み、袋に入れて立ててください。',
          zh: '立着存放可以延长保鲜期。用报纸或厨房纸轻轻包裹，放入塑料袋中竖立保存。',
          es: 'Guárdelas de pie para prolongar su vida útil. Envuélvalas en papel de cocina y póngalas verticales.',
          fr: 'Conservez-les debout pour prolonger leur durée de vie. Enveloppez-les de papier et placez-les verticalement.',
          de: 'Aufrecht lagern, um die Frische zu verlängern. Locker in Küchenpapier wickeln und senkrecht in eine Tüte stellen.',
          pt: 'Guarde em pé para prolongar a validade. Embrulhe em papel-toalha e coloque verticalmente em um saco.',
          id: 'Simpan berdiri tegak agar awet lebih lama. Bungkus dengan tisu dapur lalu taruh tegak di kantong plastik.'
        },
        sources: [
          'RDA',
          'EFSA',
          'FSA'
        ]
      }
    }
  },
  {
    id: 'cabbage',
    iconImage: '/assets/images/apps/freshself/ingredients/cabbage.png',
    category: 'vegetable',
    emoji: '🥬',
    isProcessed: false,
    names: {
      ko: '양배추',
      en: 'Cabbage',
      ja: 'キャベツ',
      zh: '卷心菜',
      es: 'Repollo',
      fr: 'Chou',
      de: 'Kohl',
      pt: 'Repolho',
      id: 'Kubis'
    },
    storage: {
      fridge: {
        durationDays: 21,
        tips: {
          ko: '칼로 자르면 절단면부터 갈변하고 상합니다. 겉잎을 떼어내 심지를 칼로 파내고, 젖은 키친타월을 채워 넣어 랩으로 감싸 보관하세요.',
          en: 'Cutting with a knife causes browning. Remove the core, plug it with a wet paper towel, and wrap in plastic wrap.',
          ja: 'カットすると断面から酸化します。芯をくり抜き、濡らしたペーパーを詰めてラップで丸ごと包んでください。',
          zh: '切开后切面会变褐腐烂。剥去外叶，挖掉菜芯，填入湿纸巾并用保鲜膜包裹保存。',
          es: 'Cortarlo con cuchillo acelera su oxidación. Retire el corazón, rellene con papel húmedo y envuelva en film.',
          fr: 'Le couper au couteau le fait noircir. Retirez le cœur, bouchez avec du papier humide et filmez le chou.',
          de: 'Schneiden führt zu Verfärbungen. Den Strunk herausheben, mit feuchtem Küchenpapier füllen und einwickeln.',
          pt: 'Cortar com faca causa escurecimento. Retire o miolo, preencha com papel-toalha úmido e embrulhe em filme.',
          id: 'Memotong dengan pisau memicu kecokelatan. Buang bagian tengahnya, sumbat dengan tisu basah, lalu bungkus.'
        },
        sources: [
          'RDA',
          'EFSA',
          'FSA'
        ]
      }
    }
  },
  {
    id: 'carrot',
    category: 'vegetable',
    emoji: '🥕',
    isProcessed: false,
    names: {
      ko: '당근',
      en: 'Carrot',
      ja: '人参',
      zh: '胡萝卜',
      es: 'Zanahoria',
      fr: 'Carotte',
      de: 'Karotte',
      pt: 'Cenoura',
      id: 'Wortel'
    },
    storage: {
      fridge: {
        durationDays: 21,
        tips: {
          ko: '표면의 물기를 완전히 제거하고 신문지나 랩으로 낱개로 싸서 세워 보관하세요. 물기가 있으면 금방 썩습니다.',
          en: 'Remove surface moisture completely, wrap individually in newspaper or plastic wrap, and store vertically.',
          ja: '表面の水分をしっかり拭き取り、新聞紙やラップで1本ずつ包んで立てて冷蔵保存してください。',
          zh: '彻底擦干表面水分，用报纸或保鲜膜单独包裹后竖立冷藏。有水分极易腐烂。',
          es: 'Seque bien la humedad, envuélvalas individualmente en papel de periódico o film, y guárdelas verticales.',
          fr: 'Séchez bien l’humidité, enveloppez individuellement de journal ou de film et conservez verticalement.',
          de: 'Oberflächenfeuchtigkeit komplett entfernen, einzeln in Zeitungspapier wickeln und aufrecht lagern.',
          pt: 'Seque a umidade superficial, embrulhe individualmente em jornal ou filme e guarde na vertical.',
          id: 'Keringkan kelembapan permukaan, bungkus satu per satu dengan koran atau plastik wrap, simpan tegak.'
        },
        sources: [
          'RDA',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'mushroom',
    category: 'vegetable',
    emoji: '🍄',
    isProcessed: false,
    names: {
      ko: '버섯',
      en: 'Mushroom',
      ja: 'キノコ',
      zh: '蘑菇',
      es: 'Champiñón',
      fr: 'Champignon',
      de: 'Pilz',
      pt: 'Cogumelo',
      id: 'Jamur'
    },
    storage: {
      fridge: {
        durationDays: 7,
        tips: {
          ko: '절대 물에 씻어서 보관하지 마세요. 수분을 잘 흡수하는 종이봉투나 키친타월로 감싸 밀폐용기에 담아 보관해야 쫄깃함이 유지됩니다.',
          en: 'Never wash with water before storing. Wrap in paper bags or paper towels to absorb moisture.',
          ja: '絶対に水洗いして保存しないでください。水分を吸う紙袋やキッチンペーパーで包み、密閉保存します。',
          zh: '绝不能用水洗后保存。用吸水性好的纸袋或厨房纸包裹，放入密封容器中保存以保持弹牙口感。',
          es: 'Nunca los lave con agua antes de guardar. Envuélvalos en bolsas de papel o toallas de papel.',
          fr: 'Ne les lavez jamais à l’eau avant stockage. Enveloppez-les dans un sac en papier ou du papier absorbant.',
          de: 'Vor der Lagerung niemals mit Wasser waschen. In Papiertüten oder Küchenpapier gewickelt luftdicht lagern.',
          pt: 'Nunca lave com água antes de guardar. Embrulhe em sacos de papel ou papel-toalha para reter a umidade.',
          id: 'Jangan pernah cuci sebelum disimpan. Bungkus dengan kantong kertas atau tisu dapur untuk menyerap air.'
        },
        sources: [
          'RDA',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'cucumber',
    category: 'vegetable',
    emoji: '🥒',
    isProcessed: false,
    names: {
      ko: '오이',
      en: 'Cucumber',
      ja: 'きゅうり',
      zh: '黄瓜',
      es: 'Pepino',
      fr: 'Concombre',
      de: 'Gurke',
      pt: 'Pepino',
      id: 'Timun'
    },
    storage: {
      fridge: {
        durationDays: 7,
        tips: {
          ko: '오이는 저온에 민감하므로 냉장고 야채칸에 보관하세요. 한 개씩 신문지로 싸서 꼭지가 위를 향하게 세워 보관하면 더 오래갑니다.',
          en: 'Sensitive to cold, store in the crisper drawer. Wrap individually in newspaper and stand upright.',
          ja: '低温に弱いので野菜室で保存します。1本ずつ新聞紙に包んでヘタを上にして立てるとさらに長持ちします。',
          zh: '对低温敏感，请存放在冰箱蔬菜室中。用报纸单独包裹，蒂朝上竖着存放可以保持更久。',
          es: 'Sensible al frío, guardar en el cajón de verduras. Envuelva individualmente y póngalo vertical.',
          fr: 'Sensible au froid, stockez dans le bac à légumes. Enveloppez-les individuellement de journal et debout.',
          de: 'Kälteempfindlich, im Gemüsefach lagern. Einzeln in Zeitungspapier wickeln und aufrecht hinstellen.',
          pt: 'Sensível ao frio, guarde na gaveta de vegetais. Embrulhe individualmente em jornal e mantenha em pé.',
          id: 'Sensitif dingin, simpan di laci sayur. Bungkus satu per satu dengan koran dan posisikan berdiri.'
        },
        sources: [
          'RDA'
        ]
      }
    }
  },
  {
    id: 'bell-pepper',
    category: 'vegetable',
    emoji: '🫑',
    isProcessed: false,
    names: {
      ko: '파프리카',
      en: 'Bell Pepper',
      ja: 'パプリカ',
      zh: '彩椒/甜椒',
      es: 'Pimiento',
      fr: 'Poivron',
      de: 'Paprika',
      pt: 'Pimentão',
      id: 'Paprika'
    },
    storage: {
      fridge: {
        durationDays: 10,
        tips: {
          ko: '물기를 완전히 말린 후 랩으로 하나씩 감싸 냉장 보관하세요. 꼭지 부분이 먼저 상하므로 꼭지 주위 물기 제거가 중요합니다.',
          en: 'Dry completely, wrap individually in plastic wrap, and refrigerate. Stems spoil first; ensure dry stems.',
          ja: '水気を完全に乾かし、1つずつラップで包んで冷蔵保存します。ヘタから傷みやすいので乾燥が重要です.',
          zh: '彻底晾干水分后用保鲜膜逐个包裹冷藏。果蒂部分极易先腐烂，因此擦干果蒂周围水分至关重要。',
          es: 'Seque por completo, envuelva en film y refrigere. Los tallos se dañan antes; séquelos bien.',
          fr: 'Séchez complètement, filmez individuellement et réfrigérez. La tige s’abîme en premier.',
          de: 'Vollständig trocknen, einzeln in Folie einwickeln und kühlen. Stiele verderben zuerst.',
          pt: 'Seque tudo, embrulhe em filme e refrigere. O pedúnculo mofa primeiro; garanta que esteja seco.',
          id: 'Keringkan, bungkus plastik wrap, dinginkan. Tangkai cepat busuk; pastikan tangkai kering.'
        },
        sources: [
          'RDA'
        ]
      }
    }
  },
  {
    id: 'broccoli',
    category: 'vegetable',
    emoji: '🥦',
    isProcessed: false,
    names: {
      ko: '브로콜리',
      en: 'Broccoli',
      ja: 'ブロッコリー',
      zh: '西兰花',
      es: 'Brócoli',
      fr: 'Brocoli',
      de: 'Brokkoli',
      pt: 'Brócolis',
      id: 'Brokoli'
    },
    storage: {
      fridge: {
        durationDays: 10,
        tips: {
          ko: '수분이 날아가지 않게 포장하되, 세워 두는 것이 좋습니다. 컵에 물을 약간 담고 꼭지(기둥) 부분을 꽂아 비닐을 씌우면 생화처럼 오래 갑니다.',
          en: 'Store standing upright. Place the stem in a cup with a little water and cover with plastic to keep fresh.',
          ja: '乾燥を防ぎながら立てて保管します。少量の水を入れたコップに茎を挿し、ビニールを被せると長持ちします。',
          zh: '尽量竖着存放以防流失水分。在杯子里倒入少许水，将茎部插在水里，套上塑料袋可显著延长保鲜期。',
          es: 'Almacenar de pie. Coloque el tallo en un vaso con un poco de agua y cubra con plástico para mantener fresco.',
          fr: 'Conservez debout. Placez la tige dans un verre d’eau et couvrez d’un sachet plastique pour le garder frais.',
          de: 'Aufrecht lagern. Den Strunk in ein Gefäß mit etwas Wasser stellen und eine Plastiktüte darüber stülpen.',
          pt: 'Guarde em pé. Coloque o talo em um copo com água e cubra com saco plástico para maior durabilidade.',
          id: 'Simpan berdiri. Masukkan batangnya ke gelas berisi sedikit air lalu tutup dengan plastik.'
        },
        sources: [
          'RDA',
          'USDA',
          'EFSA',
          'FSA'
        ]
      },
      freezer: {
        durationDays: 120,
        tips: {
          ko: '식초물에 세척한 뒤 소금물에 30초간 데치고, 찬물에 식혀 물기를 완전히 말려 얼려 두면 식감이 유지됩니다.',
          en: 'Blanch in salted boiling water for 30s after washing, cool in ice water, dry, and freeze.',
          ja: '酢水で洗った後、塩茹でで30秒下茹でし、冷水で冷まして水気を切ってから冷凍してください。',
          zh: '用醋水洗净，在盐水中焯水30秒，捞出放入冷水冷却后彻底控干水分再冷冻，可保持口感。',
          es: 'Blanquee en agua hirviendo con sal durante 30s, enfríe en agua con hielo, seque y congele.',
          fr: 'Blanchissez 30s à l’eau bouillante salée, refroidissez à l’eau glacée, séchez et congelez.',
          de: 'Nach dem Waschen 30 Sek. in Salzwasser blanchieren, in Eiswasser abschrecken, trocknen und gefrieren.',
          pt: 'Branqueie em água fervente com sal por 30s, esfrie em água gelada, seque e congele.',
          id: 'Rebus sebentar 30 detik di air garam, dinginkan di air es, keringkan, lalu bekukan.'
        },
        sources: [
          'RDA',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'chili-pepper',
    category: 'vegetable',
    emoji: '🌶️',
    isProcessed: false,
    names: {
      ko: '고추',
      en: 'Chili Pepper',
      ja: '唐辛子',
      zh: '辣椒',
      es: 'Chile/Pimiento picante',
      fr: 'Piment',
      de: 'Chili',
      pt: 'Pimenta',
      id: 'Cabai'
    },
    storage: {
      fridge: {
        durationDays: 14,
        tips: {
          ko: '씻지 않은 고추의 물기를 닦고 밀폐용기에 키친타월을 깔고 보관하세요. 꼭지는 떼지 않아야 수분 유출을 막을 수 있습니다.',
          en: 'Dry unwashed chilies and store in a paper-lined container. Keep stems attached to prevent moisture loss.',
          ja: '洗わずに水気を拭き取り、ペーパーを敷いた密閉容器に保管します。ヘタは取らない方が乾燥を防げます。',
          zh: '擦干未洗辣椒的水分，装入铺有厨房纸的密封容器中。不要摘掉辣椒蒂，以防流失水分。',
          es: 'Seque los chiles sin lavar y guarde con papel al fondo. No quite el tallo para evitar la deshidratación.',
          fr: 'Séchez les piments non lavés dans une boîte tapissée de papier. Gardez la queue pour éviter le dessèchement.',
          de: 'Ungewaschene Chilis trocknen und in einer mit Papier ausgelegten Dose lagern. Stiele nicht entfernen.',
          pt: 'Seque pimentas sem lavar e guarde em pote forrado. Mantenha os cabinhos para não desidratar.',
          id: 'Keringkan cabai yang belum dicuci di wadah beralas tisu. Jangan buang tangkai agar tidak layu.'
        },
        sources: [
          'RDA'
        ]
      },
      freezer: {
        durationDays: 180,
        tips: {
          ko: '송송 썰어서 밀폐 지퍼백에 소분하여 급속 냉동해 두면 요리할 때 즉시 다용도로 사용할 수 있습니다.',
          en: 'Chop and freeze in portioned bags. Convenient for adding directly to dishes while cooking.',
          ja: '細かく刻んで保存袋に小分けにして冷凍しておくと、料理の際すぐに使えて便利です。',
          zh: '切碎并分装在密封袋中急速冷冻，烹饪时可直接取出下锅，非常方便。',
          es: 'Píquelos y congélelos en bolsas. Ideal para añadir directamente a los platos al cocinar.',
          fr: 'Hachez-les et congelez-les en sachets. Pratique pour les jeter directement dans vos plats en cuisson.',
          de: 'Hacken und in Gefrierbeuteln portionieren. Praktisch, um sie beim Kochen direkt hinzuzufügen.',
          pt: 'Pique e congele em sacos herméticos. Muito prático para adicionar diretamente nos pratos ao cozinhar.',
          id: 'Cincang dan bekukan dalam kantong plastik. Praktis untuk langsung dimasukkan saat memasak.'
        },
        sources: [
          'RDA'
        ]
      }
    }
  },
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
        sources: [
          'USDA'
        ]
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
        sources: [
          'RDA',
          'USDA'
        ]
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
        sources: [
          'USDA',
          'USDA'
        ]
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
        sources: [
          'USDA',
          'USDA'
        ]
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
        sources: [
          'RDA',
          'USDA'
        ]
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
        sources: [
          'USDA'
        ]
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
        sources: [
          'USDA'
        ]
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
        sources: [
          'KCA',
          'MFDS'
        ]
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
        sources: [
          'USDA'
        ]
      }
    }
  },
  {
    id: 'milk',
    category: 'dairy',
    emoji: '🥛',
    isProcessed: true,
    searchKeywords: {
      ko: ['유제품', '생우유', '저지방우유', '멸균우유'],
      en: ['dairy', 'whole milk', 'raw milk', 'low fat milk'],
      ja: ['牛乳', 'ミルク', '低脂肪乳'],
      zh: ['牛奶', '鲜牛奶', '脱脂牛奶']
    },
    names: {
      ko: '우유',
      en: 'Milk',
      ja: '牛乳',
      zh: '牛奶',
      es: 'Leche',
      fr: 'Lait',
      de: 'Milch',
      pt: 'Leite',
      id: 'Susu'
    },
    storage: {
      fridge: {
        durationDays: 14,
        tips: {
          ko: '냉장고 문 쪽 보관 시 온도 변화가 심해 쉽게 상하므로 안쪽 선반에 두세요. 미개봉 상태에서 0~5℃ 냉장이 잘 유지되면 유통기한 만료 후 최대 45일까지 섭취 가능하나, 개봉 후에는 1주일 이내로 드시는 것이 안전합니다.',
          en: 'Do not store in the door as temperature fluctuates; place on an inner shelf. Unopened milk keeps up to 45 days past expiry if kept at 0–5°C, but consume within 1 week once opened.',
          ja: '冷蔵庫のドアポケットは温度変化が大きいため傷みやすくなります。棚の内側に保管し、未開封で0〜5℃の冷蔵が維持されれば賞味期限後最大45日まで摂取可能ですが、開封後は1週間以内にお召し上がりください。',
          zh: '冰箱门处温度变化剧烈易变质，建议存放在内侧搁板上。在0-5℃冷藏且未开封状态下，过期后最多可保存45天，但开封后请在1周内饮用完毕。',
          es: 'Las fluctuaciones en la puerta causan deterioro. Guárdela en un estante interior; consuma en 1 semana tras abrir.',
          fr: 'La porte subit des variations de température. Stockez sur une étagère intérieure ; buvez sous 1 semaine après ouverture.',
          de: 'Türfächer haben Temperaturschwankungen. Im inneren Regal lagern und nach dem Öffnen innerhalb einer Woche verbrauchen.',
          pt: 'As oscilações na porta aceleram a deterioração. Guarde nas prateleiras internas e consuma em até 1 semana após abrir.',
          id: 'Perubahan suhu di pintu kulkas mempercepat basi. Simpan di rak dalam; konsumsi dalam 1 minggu setelah dibuka.'
        },
        sources: [
          'MFDS',
          'EFSA'
        ]
      }
    }
  },
  {
    id: 'egg',
    category: 'dairy',
    emoji: '🥚',
    isProcessed: false,
    searchKeywords: {
      ko: ['달걀', '유정란', '무항생제란', '계란보관'],
      en: ['eggs', 'yolk', 'egg white', 'poultry'],
      ja: ['たまご', '卵', '玉子', '鶏卵'],
      zh: ['鸡蛋', '蛋黄', '蛋清']
    },
    names: {
      ko: '계란',
      en: 'Egg',
      ja: '卵',
      zh: '鸡蛋',
      es: 'Huevo',
      fr: 'Œuf',
      de: 'Ei',
      pt: 'Ovo',
      id: 'Telur'
    },
    storage: {
      fridge: {
        durationDays: 25,
        tips: {
          ko: '물로 씻으면 계란 표면의 보호막이 씻겨 내려가 껍질의 기공을 통해 세균이 유입됩니다. 씻지 말고, 뾰족한 쪽이 아래를 향하도록 보관하세요.',
          en: 'Washing eggs removes the protective barrier, letting bacteria in. Do not wash; store pointed end down.',
          ja: '水洗いすると卵の保護膜が消え気孔から雑菌が侵入します。洗わずに、尖った方を下にして保存してください。',
          zh: '水洗会冲掉鸡蛋表面的保护膜，导致细菌从气孔渗入。切勿清洗，大头朝上、小头朝下竖放保存。',
          es: 'Lavar los huevos elimina su capa protectora e introduce bacterias. No los lave; guárdelos con la punta hacia abajo.',
          fr: 'Laver les œufs détruit leur pellicule protectrice. Ne les lavez pas ; stockez-les la pointe vers le bas.',
          de: 'Eier nicht waschen, da die Schutzschicht entfernt wird. Mit dem spitzen Ende nach unten lagern.',
          pt: 'Lavar os ovos remove a película protetora, facilitando a entrada de bactérias. Não lave e guarde com a ponta para baixo.',
          id: 'Mencuci telur merusak lapisan pelindung, memudahkan bakteri masuk. Jangan dicuci; simpan ujung runcing di bawah.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'tofu',
    iconImage: '/assets/images/apps/freshself/ingredients/tofu.png',
    category: 'dairy',
    emoji: '⬜',
    isProcessed: true,
    names: {
      ko: '두부',
      en: 'Tofu',
      ja: '豆腐',
      zh: '豆腐',
      es: 'Tofu',
      fr: 'Tofu',
      de: 'Tofu',
      pt: 'Tofu',
      id: 'Tahu'
    },
    storage: {
      fridge: {
        durationDays: 5,
        tips: {
          ko: '사용 후 남은 두부는 밀폐용기에 담고 생수와 소금 한 꼬집을 넣어 두부가 완전히 잠기게 한 뒤 보관하세요. 매일 물을 갈아주어야 합니다.',
          en: 'Place leftover tofu in a container, cover fully with fresh water and a pinch of salt. Change water daily.',
          ja: '残った豆腐は密閉容器に入れ、きれいな水と塩をひとつまみ加えて完全に浸して保存します。水は毎日取り替えてください。',
          zh: '余下的豆腐放入密封容器，倒入纯净水并加少许盐以完全淹没豆腐。每天需要更换清水。',
          es: 'Ponga el tofu sobrante en un recipiente, cúbralo por completo con agua y una pizca de sal. Cambie el agua a diario.',
          fr: 'Mettez le tofu restant dans un récipient, couvrez-le d’eau avec une pincée de sel. Changez l’eau tous les jours.',
          de: 'Übriggehaltenen Tofu in Wasser mit einer Prise Salz legen, sodass er bedeckt ist. Wasser täglich wechseln.',
          pt: 'Coloque o tofu restante em pote, coubra totalmente com água filtrada e uma pitada de sal. Troque a água diariamente.',
          id: 'Taruh sisa tahu di wadah, rendam dalam air bersih dengan secubit garam. Ganti air setiap hari.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '두부를 팩 통째로 냉동하면 얼면서 내부 수분이 응축되어 노랗고 쫄깃한 얼린 두부(동두부)가 되어 찌개용으로 훌륭합니다.',
          en: 'Freezing tofu whole makes it sponge-like and chewy, which is excellent for stews and absorbing flavors.',
          ja: '豆腐をパックのまま冷凍すると水分が凍って凍み豆腐になり、高タンパクで弾力のある食感が鍋やスープに最適です。',
          zh: '将豆腐连同包装整盒冷冻，内部水分结冰后会变成蜂窝状、口感有弹性的冻豆腐，非常适合炖汤吸汁。',
          es: 'Congelar el tofu entero le da una textura esponjosa y masticable, excelente para guisos.',
          fr: 'Congeler le tofu entier lui donne une texture d’éponge idéale pour absorber le bouillon des ragoûts.',
          de: 'Ganzen Tofu einfrieren, wodurch er schwammartig wird und Saucen in Eintöpfen hervorragend aufnimmt.',
          pt: 'Congelar o tofu inteiro muda sua textura para uma esponja mastigável, excelente para ensopados absorverem sabor.',
          id: 'Membekukan tahu utuh membuatnya berongga seperti spons dan kenyal, sangat cocok untuk masakan berkuah.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'cheese',
    category: 'dairy',
    emoji: '🧀',
    isProcessed: true,
    names: {
      ko: '치즈',
      en: 'Cheese',
      ja: 'チーズ',
      zh: '奶酪/芝士',
      es: 'Queso',
      fr: 'Fromage',
      de: 'Käse',
      pt: 'Queijo',
      id: 'Keju'
    },
    storage: {
      fridge: {
        durationDays: 30,
        tips: {
          ko: '개봉 후에는 밀폐가 중요합니다. 슬라이스 치즈는 지퍼백에 밀봉하고, 모짜렐라는 소분하여 냉장실 안쪽 깊숙한 곳에 두세요.',
          en: 'Airtight sealing is crucial after opening. Seal sliced cheese in bags; portion and store mozzarella deep in the fridge.',
          ja: '開封後は密閉が極めて重要です。スライスチーズは袋に入れ、モッツァレラは小分けして冷蔵庫の奥で保存します。',
          zh: '开封后密封至关重要。片装奶酪封入口袋中；马苏里拉奶酪切块，存放在冰箱冷藏室最深处。',
          es: 'El sellado es clave tras abrir. Guarde las lonchas en bolsas; porcione y guarde la mozzarella al fondo.',
          fr: 'L’étanchéité est cruciale après ouverture. Fermez les tranches en sachet ; divisez la mozzarella au fond du frigo.',
          de: 'Nach dem Öffnen luftdicht verschließen. Scheibenkäse in Beutel verpacken, Mozzarella portionieren.',
          pt: 'Vedar bem é crucial após abrir. Guarde fatias em sacos herméticos e porcione a mussarela no fundo da geladeira.',
          id: 'Segel rapat setelah dibuka. Taruh keju lembaran dalam kantong; bagi mozzarella dan simpan di bagian dalam kulkas.'
        },
        sources: [
          'USDA',
          'USDA',
          'EFSA'
        ]
      }
    }
  },
  {
    id: 'butter',
    category: 'dairy',
    emoji: '🧈',
    isProcessed: true,
    names: {
      ko: '버터',
      en: 'Butter',
      ja: 'バター',
      zh: '黄油',
      es: 'Mantequilla',
      fr: 'Beurre',
      de: 'Butter',
      pt: 'Manteiga',
      id: 'Mentega'
    },
    storage: {
      fridge: {
        durationDays: 90,
        tips: {
          ko: '냄새를 쉽게 흡수하므로 랩으로 감싸 밀폐용기에 이중 보관하세요. 냉장실 문 쪽은 피하는 것이 좋습니다.',
          en: 'Butter absorbs odors easily. Wrap tightly and store in an airtight container away from the door.',
          ja: '臭いを吸着しやすいので、ラップで包んで密閉容器に二重保存します。ドアポケットは避けてください。',
          zh: '极其容易吸收异味。用保鲜膜包裹后放入密封容器中双重保存。建议避开冰箱门侧。',
          es: 'Absorbe olores con facilidad. Envuélvala bien y guárdela herméticamente lejos de la puerta.',
          fr: 'Le beurre absorbe les odeurs. Filmez-le et fermez-le en boîte étanche loin de la porte.',
          de: 'Butter nimmt leicht Gerüche an. Fest einwickeln und in einer Dose lagern. Türfächer vermeiden.',
          pt: 'Absorve odores facilmente. Embrulhe bem e guarde em pote hermético longe da porta da geladeira.',
          id: 'Mentega mudah menyerap bau. Bungkus rapat dan simpan di wadah kedap udara jauh dari pintu.'
        },
        sources: [
          'USDA',
          'EFSA'
        ]
      },
      freezer: {
        durationDays: 365,
        tips: {
          ko: '한 번에 쓸 크기로 잘라 종이 유산지에 올려 개별 랩핑한 뒤 냉동하세요. 요리할 때 하나씩 꺼내 쓰기 좋습니다.',
          en: 'Slice into single-use portions, wrap in parchment paper, and freeze in sealed containers.',
          ja: '1回分ずつのサイズに切り、クッキングシートにのせて個別にラップ包みにして冷凍してください。',
          zh: '切成单次用量的大小，放在防油纸上单独包装后冷冻。烹饪时取用非常方便。',
          es: 'Corte en porciones de un uso, envuélvalas en papel vegetal y congélelas en recipientes sellados.',
          fr: 'Coupez en portions individuelles, enveloppez de papier cuisson et congelez en boîte étanche.',
          de: 'In Portionsgröße schneiden, in Backpapier wickeln und gefrieren.',
          pt: 'Corte em porções, embrulhe em papel-manteiga e congele em pote vedado.',
          id: 'Potong dalam porsi sekali pakai, bungkus kertas roti, lalu bekukan.'
        },
        sources: [
          'USDA',
          'EFSA'
        ]
      }
    }
  },
  {
    id: 'yogurt',
    iconImage: '/assets/images/apps/freshself/ingredients/yogurt.png',
    category: 'dairy',
    emoji: '🥣',
    isProcessed: true,
    names: {
      ko: '요거트',
      en: 'Yogurt',
      ja: 'ヨーグルト',
      zh: '酸奶',
      es: 'Yogur',
      fr: 'Yaourt',
      de: 'Joghurt',
      pt: 'Iogurte',
      id: 'Yoghurt'
    },
    storage: {
      fridge: {
        durationDays: 14,
        tips: {
          ko: '미개봉 상태에서 온도가 잘 유지되면 유통기한 경과 후에도 최대 2주 가량 섭취 가능하나, 개봉했다면 내부에 침이나 균이 들어가 2~3일 내 다 드셔야 합니다.',
          en: 'Unopened yogurt stays safe up to 2 weeks past expiry under cold storage. Once opened, consume within 2-3 days.',
          ja: '未開封で適温保存されていれば期限後も約2週間持ちます。開封後は雑菌が入るため2〜3日中に消費してください。',
          zh: '未开封状态下若冷藏温度稳定，过期后最长2周仍可食用；开封后因混入杂菌，必须在2-3天内吃完。',
          es: 'Cerrado dura hasta 2 semanas tras expirar. Abierto, consuma en 2-3 días para evitar bacterias.',
          fr: 'Non ouvert, il reste propre 2 semaines après date. Ouvert, consommez sous 2-3 jours par sécurité.',
          de: 'Ungeöffnet bis zu 2 Wochen nach Ablauf haltbar. Nach dem Öffnen innerhalb von 2-3 Tagen verbrauchen.',
          pt: 'Fechado dura até 2 semanas após o vencimento. Aberto, consuma em 2-3 dias devido à saliva e fungos.',
          id: 'Kemasan utuh aman hingga 2 minggu setelah kedaluwarsa. Setelah dibuka, habiskan dalam 2-3 hari.'
        },
        sources: [
          'MFDS',
          'USDA',
          'EFSA'
        ]
      }
    }
  },
  {
    id: 'whipping-cream',
    iconImage: '/assets/images/apps/freshself/ingredients/whipping-cream.png',
    category: 'dairy',
    emoji: '🧁',
    isProcessed: true,
    names: {
      ko: '생크림',
      en: 'Whipping Cream',
      ja: '生クリーム',
      zh: '淡奶油/鲜奶油',
      es: 'Nata para montar',
      fr: 'Crème fouettée',
      de: 'Schlagsahne',
      pt: 'Creme de leite',
      id: 'Krim kocok'
    },
    storage: {
      fridge: {
        durationDays: 5,
        tips: {
          ko: '개봉 후 아주 빠르게 변질됩니다. 멸균팩 제품이라도 개봉했다면 입구를 단단히 밀봉하고 냉장실 안쪽에 두어 5일 내 드세요.',
          en: 'Spoils very quickly once opened. Seal the nozzle/flap tightly and store deep in the fridge. Consume within 5 days.',
          ja: '開封後は非常に傷みやすいです。開封口をきっちり密閉し、冷蔵庫の奥で保管して5日以内に消費してください。',
          zh: '开封后变质极快。即使是无菌包装开封后也请紧闭开口，存放在冷藏室最里侧，并在5天内用完。',
          es: 'Se daña muy rápido tras abrir. Selle la boquilla firmemente y consuma en 5 días.',
          fr: 'Tourne très vite après ouverture. Fermez hermétiquement la brique et consommez sous 5 jours.',
          de: 'Nach dem Öffnen extrem leicht verderblich. Gut verschließen, tief im Kühlschrank lagern und in 5 Tagen verbrauchen.',
          pt: 'Estraga muito rápido após abrir. Sele bem a abertura e consuma em até 5 dias.',
          id: 'Sangat cepat basi setelah dibuka. Segel rapat mulut kemasan dan habiskan dalam 5 hari.'
        },
        sources: [
          'MFDS'
        ]
      }
    }
  },
  {
    id: 'beef',
    category: 'meat',
    emoji: '🥩',
    isProcessed: false,
    names: {
      ko: '소고기',
      en: 'Beef',
      ja: '牛肉',
      zh: '牛肉',
      es: 'Carne de res',
      fr: 'Bœuf',
      de: 'Rindfleisch',
      pt: 'Carne bovina',
      id: 'Daging sapi'
    },
    storage: {
      fridge: {
        durationDays: 3,
        tips: {
          ko: '공기와의 접촉을 피하기 위해 랩으로 꽁꽁 감싸거나 밀폐 용기에 진공 포장하세요. 겉면에 올리브유를 얇게 바르면 코팅 효과가 있어 신선도가 오래 갑니다.',
          en: 'Wrap tightly in plastic wrap to avoid air, or vacuum seal. Coating the surface with olive oil helps preserve freshness.',
          ja: '空気との接触を防ぐためラップできっちり包むか、真空パックしてください。表面にオリーブオイルを薄く塗ると酸化を防げます。',
          zh: '用保鲜膜紧紧包裹避免接触空气，或进行真空密封。表面涂一层薄薄的橄榄油有涂层保护效果，保鲜更久。',
          es: 'Envuelva bien en film plástico o selle al vacío. Untar aceite de oliva en la superficie ayuda a conservar la frescura.',
          fr: 'Enveloppez hermétiquement de film ou scellez sous vide. Enduire la surface d’huile d’olive aide à la conserver.',
          de: 'Fest in Frischhaltefolie einwickeln oder vakuumieren. Eine dünne Schicht Olivenöl auf der Oberfläche verlängert die Frische.',
          pt: 'Embrulhe bem em filme plástico para evitar o ar ou sele a vácuo. Passar azeite na carne ajuda a vedar a umidade.',
          id: 'Bungkus rapat dengan plastik wrap atau segel vakum. Mengolesi permukaannya dengan minyak zaitun menjaga kesegaran.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      },
      freezer: {
        durationDays: 180,
        tips: {
          ko: '용도에 맞게 1회용으로 소분하여 랩핑한 뒤 지퍼백에 넣어 급속 냉동하세요. 냉동 상태에서도 최대 6개월 보관 가능합니다.',
          en: 'Portion into single-use sizes, wrap, and seal in freezer bags. Keeps for up to 6 months.',
          ja: '使いやすいよう1回分ずつ小分けにしてラップに包み、保存袋に入れて急速冷凍してください。最大6ヶ月持ちます。',
          zh: '按单次用量分装打包，包裹后放入密封袋中急速冷冻。在冷冻状态下最多可保存6个月。',
          es: 'Divida en raciones de un solo uso, envuélvalas y séllelas en bolsas de congelador. Dura hasta 6 meses.',
          fr: 'Répartissez en portions individuelles, enveloppez-les et placez-les au congélateur. Se conserve jusqu’à 6 mois.',
          de: 'In Einzelportionen teilen, einwickeln und in Gefrierbeuteln einfrieren. Hält bis zu 6 Monate.',
          pt: 'Divida em porções, embrulhe bem e guarde em sacos de congelador. Pode ser mantido por até 6 meses.',
          id: 'Bagi dalam porsi sekali masak, bungkus, dan segel dalam kantong pembeku. Awet hingga 6 bulan.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'pork',
    iconImage: '/assets/images/apps/freshself/ingredients/pork.png',
    category: 'meat',
    emoji: '🐖',
    isProcessed: false,
    names: {
      ko: '돼지고기',
      en: 'Pork',
      ja: '豚肉',
      zh: '猪肉',
      es: 'Carne de cerdo',
      fr: 'Porc',
      de: 'Schweinefleisch',
      pt: 'Carne suína',
      id: 'Daging babi'
    },
    storage: {
      fridge: {
        durationDays: 3,
        tips: {
          ko: '소고기보다 수분이 많아 더 빨리 상합니다. 랩 밀봉 전 겉면의 핏물을 키친타월로 확실히 닦아내세요.',
          en: 'Spoils faster than beef due to moisture. Pat dry with paper towels before wrapping tightly.',
          ja: '牛肉より水分が多く傷みやすいです。ラップで密閉する前に表面のドリップをしっかり拭き取ってください。',
          zh: '水分多于牛肉，更容易变质。用保鲜膜密封包裹前，务必用厨房纸吸净表面血水。',
          es: 'Se daña más rápido que la res por la humedad. Seque los jugos con papel antes de envolver herméticamente.',
          fr: 'Se gâte plus vite que le bœuf. Épongez le sang avec du papier absorbant avant de filmer serré.',
          de: 'Verdirbt durch Feuchtigkeit schneller als Rindfleisch. Vor dem Einwickeln mit Papier abtupfen.',
          pt: 'Estraga mais rápido que a bovina devido à umidade. Seque o sangue com papel-toalha antes de embalar.',
          id: 'Lebih cepat busuk daripada sapi karena basah. Keringkan sisa darah dengan tisu sebelum dibungkus.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      },
      freezer: {
        durationDays: 120,
        tips: {
          ko: '냉동 보관 시 고기 표면에 식용유를 아주 얇게 발라 랩핑하면 성에 및 고기 건조를 방지해 고기 질을 유지해 줍니다.',
          en: 'Brushing a thin layer of oil on the meat surface prevents freezer burn and keeps quality.',
          ja: '冷凍時にオリーブオイルを薄く塗ってラップすると、冷凍焼けや肉の乾燥を防ぎ品質を保てます。',
          zh: '冷冻保存时在肉表面涂一层薄薄的食用油再包裹，能有效防止结霜及肉质发干，保持口感。',
          es: 'Pintar una capa fina de aceite evita las quemaduras por congelación y conserva la calidad.',
          fr: 'Enduire d’une fine couche d’huile évite les brûlures de congélation et préserve la qualité.',
          de: 'Eine dünne Ölschicht verhindert Gefrierbrand und bewahrt die Fleischqualität beim Gefrieren.',
          pt: 'Passar uma fina camada de óleo na carne evita queimaduras pelo frio e conserva a qualidade.',
          id: 'Mengolesi tipis minyak pada permukaan daging mencegah freezer burn dan menjaga kualitas.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'chicken',
    category: 'meat',
    emoji: '🍗',
    isProcessed: false,
    names: {
      ko: '닭고기',
      en: 'Chicken',
      ja: '鶏肉',
      zh: '鸡肉',
      es: 'Pollo',
      fr: 'Poulet',
      de: 'Hähnchen',
      pt: 'Frango',
      id: 'Daging ayam'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '가장 부패하기 쉽습니다. 물로 씻으면 식중독 세균(캠필로박터)이 싱크대 주변에 튀어 전염되므로 씻지 말고 조리 전에만 물기를 닦으세요.',
          en: 'Highly perishable. Washing raw chicken splashes bacteria. Do not wash; wipe moisture right before cooking.',
          ja: '非常に傷みやすいです。生で水洗いすると食中毒菌がシンクに飛び散り危険です。洗わずに調理直前にペーパーで拭いてください。',
          zh: '极易变质。水洗会使致病菌（弯曲杆菌）溅洒污染洗手池周围，切勿水洗，在下锅烹饪前擦干即可。',
          es: 'Muy perecedero. Lavar el pollo crudo esparce bacterias. No lo lave; seque con papel justo antes de cocinar.',
          fr: 'Très périssable. Laver le poulet cru projette des bactéries. Ne le lavez pas ; essuyez-le avant cuisson.',
          de: 'Sehr leicht verderblich. Geflügel nicht waschen, um Keime im Spülbecken zu vermeiden. Vor dem Kochen abtupfen.',
          pt: 'Altamente perecível. Lavar o frango espalha bactérias na pia. Não lave, apenas seque antes de cozinhar.',
          id: 'Sangat mudah busuk. Mencuci ayam mentah menyebarkan bakteri. Jangan dicuci; lap kering sebelum dimasak.'
        },
        sources: [
          'CDC',
          'USDA',
          'WHO',
          'FSA'
        ]
      },
      freezer: {
        durationDays: 180,
        tips: {
          ko: '뼈가 있는 닭고기는 해동 시 뼈 주변 핏물이 먼저 상할 수 있으므로, 뼈를 미리 손질하고 살코기 위주로 얼려 보관하는 것이 안전합니다.',
          en: 'Bone-in chicken spoils faster near bones when thawing. Debone and freeze meat slices for safety.',
          ja: '骨付き肉は解凍時に骨の周りから傷むことがあります。骨を取り除き、身の部分だけを冷凍する方が安全です。',
          zh: '带骨鸡肉在解冻时，骨头周围可能先变质。为了安全，建议剔除骨头后只冷冻纯肉。',
          es: 'El pollo con hueso se daña antes al deshelar. Deshuese y congele solo la carne por seguridad.',
          fr: 'Le poulet avec os se gâte plus vite à la décongélation. Désossez-le et congelez la chair.',
          de: 'Geflügel mit Knochen verdirbt beim Auftauen am Knochen schneller. Ausbeinen und einfrieren.',
          pt: 'Frango com osso estraga mais rápido perto dos ossos ao degelar. Retire os ossos e congele a carne para segurança.',
          id: 'Ayam bertulang cepat busuk di sekitar tulang saat dicairkan. Buang tulang dan bekukan dagingnya.'
        },
        sources: [
          'CDC',
          'USDA',
          'WHO',
          'FSA'
        ]
      }
    }
  },
  {
    id: 'minced-meat',
    iconImage: '/assets/images/apps/freshself/ingredients/minced-meat.png',
    category: 'meat',
    emoji: '🥩',
    isProcessed: false,
    names: {
      ko: '다진 고기',
      en: 'Minced Meat',
      ja: 'ひき肉',
      zh: '肉馅/碎肉',
      es: 'Carne picada',
      fr: 'Viande hachée',
      de: 'Hackfleisch',
      pt: 'Carne moída',
      id: 'Daging cincang'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '표면적이 매우 넓어 일반 덩어리 고기보다 산소 노출과 세균 번식이 극도로 빠릅니다. 반드시 진공 랩 밀봉하여 2일 내 드세요.',
          en: 'High surface area allows rapid bacterial growth. Store vacuum sealed or wrapped tightly; use in 2 days.',
          ja: '表面積が広く雑菌が非常に繁殖しやすいです。空気が入らないようしっかりラップ密閉し、2日以内に使い切ってください。',
          zh: '表面积大极易与空气接触氧化和滋生细菌。务必真空密封包裹，并在2天内烹饪完毕。',
          es: 'Gran superficie de contacto permite rápido crecimiento bacterial. Use sellado al vacío y consuma en 2 días.',
          fr: 'La surface d’exposition favorise les bactéries. Conservez sous vide et consommez sous 2 jours.',
          de: 'Große Oberfläche begünstigt Keimwachstum. Luftdicht verpacken und innerhalb von 2 Tagen verbrauchen.',
          pt: 'A grande área de contato acelera a oxidação e fungos. Vede em vácuo e consuma em até 2 dias.',
          id: 'Luas permukaan memicu bakteri berkembang cepat. Bungkus rapat dan masak dalam 2 hari.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '두껍게 뭉쳐서 얼리면 나중에 해동이 어렵고 해동 중 상할 수 있습니다. 지퍼백에 넣고 얇고 편평하게 펴서 칸을 지어 얼리세요.',
          en: 'Do not freeze in thick clumps. Flatten meat inside bags and mark partition lines for easy break-off.',
          ja: '厚くまとめた状態で凍らせると解凍に時間がかかります。袋に薄く平らに伸ばし、格子状の筋を入れて冷凍してください。',
          zh: '成团冷冻会导致解冻困难且中途易坏。平摊装入密封袋中压成扁平薄片，用筷子压出网格线后再冷冻。',
          es: 'No congele en bolas gruesas. Aplánela en bolsas y marque líneas para dividir fácilmente.',
          fr: 'Ne la congelez pas en boule. Aplatissez-la dans des sachets et marquez des séparations pour casser des parts.',
          de: 'Nicht als Kugel einfrieren. Flach in Beutel streichen und Portionierungslinien eindrücken.',
          pt: 'Não congele em blocos grossos. Aplane a carne dentro do saco e marque divisórias para quebrar facilmente.',
          id: 'Jangan bekukan dalam gumpalan tebal. Pipihkan dalam kantong plastik dan beri sekat.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'bacon',
    category: 'meat',
    emoji: '🥓',
    isProcessed: true,
    names: {
      ko: '베이컨',
      en: 'Bacon',
      ja: 'ベーコン',
      zh: '培根',
      es: 'Bacon',
      fr: 'Bacon',
      de: 'Speck',
      pt: 'Bacon',
      id: 'Bacon'
    },
    storage: {
      fridge: {
        durationDays: 14,
        tips: {
          ko: '개봉 전에는 최대 2주가량 보관 가능하지만, 개봉하는 즉시 공기와 만나 부패하므로 남은 베이컨은 공기가 들어가지 않게 랩으로 이중 감싸 보관하세요.',
          en: 'Unopened bacon keeps 2 weeks. Once opened, wrap tightly in multiple layers of plastic wrap to keep air out.',
          ja: '未開封なら約2週間持ちますが、開封後は急速に劣化します。空気に触れないようラップで厳重に包んでください。',
          zh: '未开封可保存2周。开封后极易受潮变质，余下的培根建议用保鲜膜多层严密包裹防氧化。',
          es: 'Sin abrir dura 2 semanas. Abierto, envuelva firmemente en film transparente para evitar el aire.',
          fr: 'Se conserve 2 semaines fermé. Ouvert, filmez-le très serré pour bloquer l’air.',
          de: 'Ungeöffnet 2 Wochen haltbar. Nach dem Öffnen fest in Folie wickeln, um Luft auszuschließen.',
          pt: 'Fechado dura até 2 semanas. Após aberto, embrulhe bem com várias camadas de filme plástico.',
          id: 'Bacon utuh awet 2 minggu. Setelah dibuka, bungkus rapat berlapis dengan plastik wrap.'
        },
        sources: [
          'USDA',
          'USDA'
        ]
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '종이 유산지에 한 줄씩 올리고 돌돌 말아서 지퍼백에 담아 냉동하세요. 요리할 때 필요한 개수만큼 풀어서 사용하기 편리합니다.',
          en: 'Lay slices on parchment paper, roll them up individually, and freeze in airtight bags.',
          ja: 'クッキングシートに1枚ずつのせてクルクルと丸め、保存袋に入れて冷凍すると、使う分だけ取り出せて便利です。',
          zh: '在防油纸上平铺单片并卷起来，装入密封袋冷冻。烹饪时可以方便地只取用需要的片数。',
          es: 'Coloque las lonchas sobre papel vegetal, enróllelas individualmente y congélelas en bolsas.',
          fr: 'Disposez les tranches sur du papier cuisson, roulez-les une à une et congelez en sachet.',
          de: 'Scheiben auf Backpapier legen, einzeln aufrollen und in Beuteln gefrieren.',
          pt: 'Coloque as fatias sobre papel-manteiga, enrole individualmente e congele em sacos vedados.',
          id: 'Alasi bacon dengan kertas roti, gulung satu per satu, dan bekukan dalam kantong plastik.'
        },
        sources: [
          'USDA',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'sausage',
    iconImage: '/assets/images/apps/freshself/ingredients/sausage.png',
    category: 'meat',
    emoji: '🌭',
    isProcessed: true,
    names: {
      ko: '소시지',
      en: 'Sausage',
      ja: 'ソーセージ',
      zh: '香肠/热狗肠',
      es: 'Salchicha',
      fr: 'Saucisse',
      de: 'Würstchen',
      pt: 'Salsicha',
      id: 'Sosis'
    },
    storage: {
      fridge: {
        durationDays: 14,
        tips: {
          ko: '개봉 전에는 유통기한을 따르되 개봉 시 밀폐 지퍼백에 넣어 두세요. 요리용 칼집을 넣은 상태로 보관 시 단면을 통해 급격히 변질됩니다.',
          en: 'Follow package dates if unopened. Once opened, store in zip bags; do not slash or slice before storing.',
          ja: '未開封ならパッケージの期限に従い、開封後は保存袋へ。切れ目を入れた状態で保存すると傷みが早くなります。',
          zh: '未开封前遵循包装期限，开封后装入密封袋。千万不要切开或改刀后再保存，这会导致肉肠极速变质。',
          es: 'Siga las fechas del envase si no está abierto. Abierto, guarde en bolsas; no corte antes de almacenar.',
          fr: 'Suivez la date d’emballage si fermé. Ouvert, stockez en sachet hermétique ; ne les entaillez pas avant.',
          de: 'Ungeöffnet nach Packungsdatum lagern. Nach dem Öffnen in Beutel legen. Nicht vor der Lagerung einschneiden.',
          pt: 'Siga a data da embalagem se fechado. Após aberto, guarde em sacos vedados; não faça cortes antes.',
          id: 'Ikuti tanggal kemasan jika utuh. Setelah dibuka, simpan dalam kantong; jangan diiris sebelum disimpan.'
        },
        sources: [
          'USDA',
          'USDA'
        ]
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '요리에 바로 사용할 수 있게 소분하거나 어슷썰기하여 지퍼백에 넓게 펴서 얼리세요.',
          en: 'Slice or portion into cooking sizes and freeze flat in freezer bags.',
          ja: '調理にすぐ使えるよう好みのサイズに切ってから、保存袋に平らに広げて冷凍してください。',
          zh: '可切片或分装成每次烹饪的大小，在密封袋中摊平冷冻。',
          es: 'Corte en rodajas o porciones y congele planas en bolsas de congelación.',
          fr: 'Coupez-les en rondelles ou en portions et congelez à plat en sachet.',
          de: 'In Scheiben schneiden oder portionieren und flach in Gefrierbeuteln einfrieren.',
          pt: 'Fatie ou divida em porções e congele em sacos bem espalhados.',
          id: 'Potong-potong sesuai porsi masak dan bekukan mendatar dalam kantong.'
        },
        sources: [
          'USDA',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'shrimp',
    category: 'seafood',
    emoji: '🦐',
    isProcessed: false,
    names: {
      ko: '새우',
      en: 'Shrimp',
      ja: 'エビ',
      zh: '虾',
      es: 'Camarón/Gambas',
      fr: 'Crevette',
      de: 'Garnele',
      pt: 'Camarão',
      id: 'Udang'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '생새우는 머리와 껍질에 부패 세균이 많습니다. 보관 전 머리와 껍질, 내장을 손질하여 물기를 완전히 닦아내세요.',
          en: 'Raw shrimp spoils fast in heads and shells. Remove heads, shells, and veins; pat dry before storing.',
          ja: '生エビは頭や殻から傷み始めます。殻をむき、背ワタを取り除いてから水気を完全に拭き取ってください。',
          zh: '生虾的虾头和虾壳附带较多细菌极易腐烂。保存前请摘除虾头、剥壳并挑出虾线，彻底擦干水分。',
          es: 'Se daña rápido en cabezas y cáscaras. Quite cabezas, cáscaras y venas; seque antes de guardar.',
          fr: 'Tête et carapace se gâtent vite. Enlevez la tête, décortiquez, déveinez et séchez avant de stocker.',
          de: 'Garnelen verderben an Kopf und Schale schnell. Vor dem Lagern schälen, entdarmen und abtupfen.',
          pt: 'Camarão cru estraga rápido nas cabeças e cascas. Retire-as, remova a tripa e seque bem antes de guardar.',
          id: 'Udang mentah cepat busuk di kepala dan kulitnya. Bersihkan kepala, kulit, dan kotorannya lalu lap kering.'
        },
        sources: [
          'USDA',
          'MFDS'
        ]
      },
      freezer: {
        durationDays: 120,
        tips: {
          ko: '물기를 말린 생새우를 지퍼백에 겹치지 않게 펼쳐 얼려두면 조리 시 낱개로 꺼내 쓰기 좋습니다.',
          en: 'Dry cleaned shrimp, spread in a single layer in a bag, and freeze for easy individual portioning.',
          ja: '水気を拭いたエビを保存袋に重ならないよう平らに並べて冷凍すると、調理の際1つずつ取り出せます。',
          zh: '控干水分的生虾平铺在密封袋中冷冻，烹饪时方便单颗取出。',
          es: 'Seque los camarones limpios, extiéndalos en una sola capa en una bolsa y congele.',
          fr: 'Séchez-les, disposez-les en couche simple dans un sachet et congelez pour les trier facilement après.',
          de: 'Trockene Garnelen nebeneinander in einen Beutel legen und flach gefrieren für einfache Entnahme.',
          pt: 'Seque os camarões limpos, espalhe em camada única num saco e congele para retirar individualmente.',
          id: 'Keringkan udang bersih, ratakan satu lapis di kantong plastik, lalu bekukan.'
        },
        sources: [
          'USDA',
          'MFDS'
        ]
      }
    }
  },
  {
    id: 'squid',
    category: 'seafood',
    emoji: '🦑',
    isProcessed: false,
    names: {
      ko: '오징어',
      en: 'Squid',
      ja: 'イカ',
      zh: '乌贼/鱿鱼',
      es: 'Calamar',
      fr: 'Calamar',
      de: 'Tintenfisch',
      pt: 'Lula',
      id: 'Cumi-cumi'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '내장을 제거하지 않고 보관하면 내장이 먼저 녹아 살을 오염시키고 악취가 납니다. 반드시 내장과 눈, 빨판을 제거하고 세척 후 보관하세요.',
          en: 'Leaving guts inside causes decay and foul odor. Always clean guts, eyes, and suction cups before storing.',
          ja: '内臓を残したままだとそこから腐って悪臭を放ちます。内臓、目、吸盤を取り除き、洗ってから保存してください。',
          zh: '不去除内脏保存，内脏会腐烂污染肉质产生恶臭。必须挖除内脏、眼部和吸盘，洗净后冷藏。',
          es: 'Dejar las tripas causa mal olor y putrefacción. Limpie vísceras, ojos y ventosas antes de guardar.',
          fr: 'Laisser les viscères provoque odeurs et pourriture. Videz, enlevez yeux et ventouses avant de stocker.',
          de: 'Eingeweide führen zu Verderb und Geruch. Augen, Schnabel und Eingeweide vor dem Lagern entfernen.',
          pt: 'Manter as vísceras causa mau cheiro e decomposição. Limpe tudo, retire olhos e ventosas antes de guardar.',
          id: 'Membiarkan isi perutnya memicu kebusukan dan bau. Selalu bersihkan isi perut, mata, dan tentakelnya.'
        },
        sources: [
          'NIFS',
          'USDA'
        ]
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '껍질을 벗겨 격자 칼집을 낸 뒤 한 마리씩 랩으로 포장하여 냉동하면 요리할 때 즉석 해동하여 쓰기 수월합니다.',
          en: 'Skin, score with a grid pattern, wrap individually in wrap, and freeze for quick thawing and cooking.',
          ja: '皮をむいて格子状の切れ目を入れ、1杯ずつラップで包んで冷凍すると、使う時すぐ解凍できて便利です。',
          zh: '去皮打上花刀，按只用保鲜膜单独包裹冷冻，烹饪时极易快速解冻。',
          es: 'Pele, marque cuadriculado, envuelva individualmente y congele para un deshelado y cocinado rápidos.',
          fr: 'Pelez, quadrillez au couteau, filmez séparément et congelez pour décongeler et cuire plus vite.',
          de: 'Häuten, einschneiden, einzeln einwickeln und gefrieren für schnelles Auftauen.',
          pt: 'Retire a pele, faça cortes cruzados, embrulhe bem em filme e congele para descongelar rápido.',
          id: 'Kupas kulit, beri keratan silang, bungkus per ekor, bekukan agar cepat dicairkan saat akan dimasak.'
        },
        sources: [
          'NIFS',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'clam',
    category: 'seafood',
    emoji: '🦪',
    isProcessed: false,
    names: {
      ko: '조개',
      en: 'Clam / Oyster',
      ja: '貝/牡蠣',
      zh: '贝类/牡蛎',
      es: 'Almeja/Ostra',
      fr: 'Palourde/Huître',
      de: 'Muschel/Auster',
      pt: 'Molusco/Ostra',
      id: 'Kerang/Tiram'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '조개는 살아있는 상태로 보관해야 합니다. 해감(소금물에 담가 모래 빼기) 후, 밀폐용기에 담고 젖은 면포나 키친타월을 덮어 보관하세요. 밀봉하면 질식사합니다.',
          en: 'Clams must stay alive. Depurate in saltwater, place in an open container, and cover with a wet cloth. Do not seal.',
          ja: '貝は生きた状態で保存します。砂抜きした後、濡らした布などを被せて密閉せずに保存してください。窒息死を防ぎます。',
          zh: '贝类必须保持活体保存。吐沙（泡入盐水吐净泥沙）后，装入保鲜盒盖上湿棉布或湿纸巾。完全密封会使其窒息死亡。',
          es: 'Deben seguir vivas. Límpielas en agua salada, ponga en envase abierto y cubra con paño húmedo. No selle.',
          fr: 'Elles doivent rester vivantes. Dégorgez-les dans l’eau salée, gardez en boîte ouverte sous un linge humide.',
          de: 'Muscheln müssen am Leben bleiben. In Salzwasser entsanden, offen lagern und mit feuchtem Tuch bedecken. Nicht deckeln.',
          pt: 'Moluscos devem ser mantidos vivos. Faça a depuração em água salgada, coloque em pote aberto e cubra com pano úmido.',
          id: 'Kerang harus tetap hidup. Rendam air garam agar bersih, taruh wadah terbuka, tutup kain basah. Jangan segel.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '해감한 조개를 껍질째 끓여서 입이 벌어지면 살만 발라내고 육수와 함께 팩에 담아 얼리는 것이 가장 신선하게 오래갑니다.',
          en: 'Boil clams until shells open. Remove meat and freeze together with the strained broth in bags.',
          ja: '砂抜きした貝を殻のまま茹で、口が開いたら身だけを取り出して、茹で汁と一緒にパックして冷凍するのが最善です。',
          zh: '将吐沙后的贝类带壳煮至开口，剥出贝肉，连同过滤后的原汤一起装袋冷동，保鲜最久。',
          es: 'Hierva hasta abrir. Retire la carne y congele junto con el caldo colado en bolsas.',
          fr: 'Bouillez-les jusqu’à ouverture. Gardez la chair et congelez-la avec le jus de cuisson filtré.',
          de: 'Kochen, bis sie sich öffnen. Fleisch entnehmen und zusammen mit der gefilterten Brühe einfrieren.',
          pt: 'Ferva os moluscos até abrirem. Retire a carne e congele junto com o caldo coado em sacos.',
          id: 'Rebus kerang hingga cangkang terbuka. Ambil dagingnya, bekukan bersama air rebusannya.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'bread',
    category: 'grain',
    emoji: '🍞',
    isProcessed: true,
    names: {
      ko: '식빵',
      en: 'Bread',
      ja: '食パン',
      zh: '吐司/面包',
      es: 'Pan de molde',
      fr: 'Pain de mie',
      de: 'Brot',
      pt: 'Pão de forma',
      id: 'Roti tawar'
    },
    storage: {
      room: {
        durationDays: 3,
        tips: {
          ko: '고온다습한 날씨에는 쉽게 곰팡이가 핍니다. 실온에서는 밀봉하여 건조하고 서늘한 곳에 보관하고, 3일 이내에 드세요.',
          en: 'Molds easily in humid weather. Keep in a dry, cool place and consume within 3 days.',
          ja: '高温多湿の環境ではカビが生えやすいです。密閉して直射日光の当たらない涼しい場所で保存し、3日以内にお召し上がりください。',
          zh: '高温潮湿环境下易发霉。密封存放在干燥阴凉处，并于3天内食用完毕。',
          es: 'Se mohea fácilmente con humedad. Conservar sellado en un lugar seco y fresco; consumir en 3 días.',
          fr: 'Moisit facilement par temps humide. Conservez fermé dans un endroit sec et consommez sous 3 jours.',
          de: 'Schimmelt bei Feuchtigkeit schnell. Luftdicht an einem trockenen, kühlen Ort lagern und in 3 Tagen verzehren.',
          pt: 'Mofa facilmente em climas úmidos. Mantenha fechado em local seco e fresco, e consuma em 3 dias.',
          id: 'Mudah berjamur di cuaca lembap. Simpan tertutup di tempat yang kering dan sejuk; makan dalam 3 hari.'
        },
        sources: [
          'USDA'
        ]
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '냉장하면 빵 속 전분이 빠르게 노화되어 푸석하고 건조해집니다. 먹을 만큼 개별 랩핑하여 냉동 보관하고, 해동 시 토스터에 굽거나 자연해동하세요.',
          en: 'Refrigeration dehydrates and stales the bread. Wrap slices individually and freeze. Toast directly from frozen.',
          ja: '冷蔵するとパンのデンプンが老化しパサパサになります。1枚ずつラップに包んで冷凍し、食べる時は凍ったままトースターで焼いてください。',
          zh: '冷藏会导致面包中的淀粉老化，变得干硬无味。按每顿食量分装冷冻，吃时直接放入烤面包机或自然解冻。',
          es: 'Refrigerarlo deshidrata y envejece el pan. Envuelva las rodajas individualmente y congélelas. Tueste directamente.',
          fr: 'Le réfrigérateur assèche le pain. Filmez les tranches individuellement et congelez-les. Grillez-les directement.',
          de: 'Lagerung im Kühlschrank macht das Brot trocken. Scheiben einzeln einwickeln und einfrieren. Direkt gefroren toasten.',
          pt: 'A refrigeração resseca o pão e acelera o envelhecimento. Embrulhe as fatias individualmente e congele. Toste diretamente.',
          id: 'Mendinginkannya membuat roti kering dan keras. Bungkus per lembar lalu bekukan. Panggang langsung saat beku.'
        },
        sources: [
          'USDA'
        ]
      }
    }
  },
  {
    id: 'rice-cake',
    iconImage: '/assets/images/apps/freshself/ingredients/rice-cake.png',
    category: 'grain',
    emoji: '🍡',
    isProcessed: false,
    names: {
      ko: '떡',
      en: 'Rice Cake',
      ja: '餅',
      zh: '年糕/米糕',
      es: 'Pastel de arroz',
      fr: 'Gâteau de riz',
      de: 'Reiskuchen',
      pt: 'Bolo de arroz',
      id: 'Kue beras'
    },
    storage: {
      freezer: {
        durationDays: 90,
        tips: {
          ko: '말랑한 상태에서 즉시 지퍼백에 소분하여 급속 냉동하세요. 굳은 뒤 얼리면 해동 시 푸석해지고 찢어집니다.',
          en: 'Freeze immediately while soft in portioned freezer bags. Freezing after it stales ruins texture.',
          ja: '柔らかい状態のまま、すぐに保存袋に小分けにして急速冷凍してください。固くなってから冷凍すると解凍後に崩れます。',
          zh: '在柔软状态下立即分装入密封袋急速冷冻。如果变硬后再冷冻，解冻时会干硬开裂。',
          es: 'Congele inmediatamente mientras esté blando en bolsas de congelador. Congelar duro estropea la textura.',
          fr: 'Congelez immédiatement pendant qu’il est moelleux. Congeler un produit dur gâte la texture.',
          de: 'Sofort einfrieren, solange er weich ist. Gefrieren nach dem Aushärten zerstört die Konsistenz.',
          pt: 'Congele imediatamente enquanto estiver macio em sacos de congelador. Congelar depois de duro arruína a textura.',
          id: 'Bekukan segera selagi empuk dalam kantong pembeku. Membekukan setelah keras merusak teksturnya.'
        },
        sources: [
          'MFDS'
        ]
      }
    }
  },
  {
    id: 'rice',
    category: 'grain',
    emoji: '🍚',
    isProcessed: false,
    names: {
      ko: '쌀',
      en: 'Rice',
      ja: '米',
      zh: '大米',
      es: 'Arroz',
      fr: 'Riz',
      de: 'Reis',
      pt: 'Arroz',
      id: 'Beras'
    },
    storage: {
      room: {
        durationDays: 365,
        tips: {
          ko: '햇빛을 받으면 건조해져 쌀알이 갈라지고 영양이 소실됩니다. 밀폐하여 서늘하고 어두운 상온에 두거나, 생수용 페트병에 담아 김치냉장고에 넣으면 쌀벌레가 생기지 않습니다.',
          en: 'Sunlight dehydrates and cracks grains. Seal in dark containers at room temp, or pour into clean plastic bottles and refrigerate to prevent weevils.',
          ja: '直射日光にあたると米粒が割れて風味が落ちます。密閉して涼しい暗所に保管するか、空ペットボトルに入れて冷蔵庫で保管してください。虫除けになります。',
          zh: '受光照会发干开裂降低营养。密封存放在阴凉干燥避光处，或灌入干净的塑料饮料瓶内放入冷藏箱，可有效预防生虫。',
          es: 'El sol deshidrata el grano. Selle en contenedores oscuros a temperatura ambiente, o en botellas y refrigere para evitar gorgojos.',
          fr: 'Le soleil fend les grains. Conservez fermé à l’ombre ou versez dans des bouteilles au frigo pour éviter les charançons.',
          de: 'Sonnenlicht rissig macht. Luftdicht dunkel lagern oder in Plastikflaschen im Kühlschrank aufbewahren gegen Rüsselkäfer.',
          pt: 'A luz solar racha o grão. Vede em potes escuros ou guarde em garrafas plásticas limpas na geladeira para evitar caruncho.',
          id: 'Sinar matahari merusak beras. Segel di wadah gelap, atau masukkan botol plastik lalu dinginkan agar bebas kutu.'
        },
        sources: [
          'RDA',
          'WHO'
        ]
      }
    }
  },
  {
    id: 'canned-tuna',
    iconImage: '/assets/images/apps/freshself/ingredients/canned-tuna.png',
    category: 'condiment',
    emoji: '🥫',
    isProcessed: true,
    names: {
      ko: '참치통조림',
      en: 'Canned Tuna',
      ja: 'ツナ缶',
      zh: '金枪鱼罐头',
      es: 'Atún en lata',
      fr: 'Thon en boîte',
      de: 'Thunfischdose',
      pt: 'Atum em lata',
      id: 'Tuna kaleng'
    },
    storage: {
      room: {
        durationDays: 1095,
        tips: {
          ko: '개봉 전에는 서늘하고 건조한 상온에 보관하면 매우 오래 두고 드실 수 있습니다.',
          en: 'Unopened cans keep for years in a cool, dry pantry.',
          ja: '未開封の状態なら、直射日光を避けた涼しい常温で長期間保存できます。',
          zh: '未开封前存放在凉爽干燥的常温下，可保存非常久的时间。',
          es: 'Las latas sin abrir duran años en una despensa fresca y seca.',
          fr: 'Les boîtes non ouvertes se conservent des années dans un placard sec.',
          de: 'Ungeöffnete Dosen halten sich jahrelang an einem kühlen, trockenen Ort.',
          pt: 'Latas fechadas duram anos em local seco e fresco.',
          id: 'Kaleng yang belum dibuka awet bertahun-tahun di tempat yang sejuk dan kering.'
        },
        sources: [
          'MFDS',
          'USDA',
          'WHO'
        ]
      },
      fridge: {
        durationDays: 3,
        tips: {
          ko: '⚠️ 개봉 즉시 캔 내부 주석/쇳가루가 부식하기 시작해 매우 유해합니다. 남은 참치는 반드시 유리/밀폐용기에 덜어 기름과 함께 냉장 보관하고 3일 내 드세요.',
          en: '⚠️ Once opened, the can rusts rapidly. Transfer tuna and oil to an airtight glass or plastic container and refrigerate.',
          ja: '⚠️ 開封後は缶の内面が酸化・腐食しやすいため非常に危険です。中身を必ず別の密閉ガラスまたはプラスチック容器に移し替え、3日以内に使い切ってください。',
          zh: '⚠️ 开封后铁罐内壁会迅速腐蚀。余下的部分务必倒入玻璃或密封容器中，连同油脂冷藏保存，并在3天内食用完毕。',
          es: '⚠️ Tras abrir, la lata se oxida rápido. Transfiera el atún y el aceite a un contenedor hermético de vidrio o plástico.',
          fr: '⚠️ Une fois ouverte, la boîte s’oxyde vite. Transférez le thon et son huile dans un récipient en verre ou plastique.',
          de: '⚠️ Nach dem Öffnen oxidiert die Dose rasch. Thunfisch und Öl in einen luftdichten Glas- oder Kunststoffbehälter umfüllen.',
          pt: '⚠️ Após aberto, a lata oxida rápido. Transfira o atum e o óleo para um pote de vidro ou plástico e refrigere.',
          id: '⚠️ Setelah dibuka, kaleng cepat berkarat. Pindahkan tuna dan minyaknya ke wadah kaca atau plastik lalu dinginkan.'
        },
        sources: [
          'MFDS',
          'USDA',
          'WHO'
        ]
      }
    }
  },
  {
    id: 'mayonnaise',
    iconImage: '/assets/images/apps/freshself/ingredients/mayonnaise.png',
    category: 'condiment',
    emoji: '🫙',
    isProcessed: true,
    names: {
      ko: '마요네즈',
      en: 'Mayonnaise',
      ja: 'マヨネーズ',
      zh: '蛋黄酱/沙拉酱',
      es: 'Mayonesa',
      fr: 'Mayonnaise',
      de: 'Mayonnaise',
      pt: 'Maionese',
      id: 'Mayones'
    },
    storage: {
      fridge: {
        durationDays: 60,
        tips: {
          ko: '영하의 온도나 너무 차가운 곳(냉장실 깊숙이)에서는 기름이 분리되어 상해버립니다. 냉장고 문 쪽 등 비교적 온도가 높은 곳에 두세요.',
          en: 'Cold temperatures (deep in the fridge) cause oil to separate. Store in warmer zones like the refrigerator door.',
          ja: '0℃以下や冷えすぎる場所（冷蔵庫の奥）では油が分離して傷みます。比較的温度の高いドアポケット等で保管してください。',
          zh: '在零度以下或过冷处（如冰箱深处）会导致油脂分离变质。建议存放在温度相对较高的冰箱门架上。',
          es: 'Las bajas temperaturas separan el aceite. Guárdela en zonas menos frías como la puerta de la nevera.',
          fr: 'Le grand froid sépare l’huile. Conservez-la dans les zones moins froides comme la porte du réfrigérateur.',
          de: 'Zu kalte Lagerung (tief im Kühlschrank) trennt das Öl. In wärmeren Bereichen wie den Türfächern lagern.',
          pt: 'Temperaturas muito frias separam o óleo. Guarde em áreas mais quentes como a porta da geladeira.',
          id: 'Suhu terlalu dingin (bagian dalam kulkas) memisahkan minyak. Simpan di tempat hangat seperti pintu kulkas.'
        },
        sources: [
          'USDA'
        ]
      }
    }
  },
  {
    id: 'ketchup',
    iconImage: '/assets/images/apps/freshself/ingredients/ketchup.png',
    category: 'condiment',
    emoji: '🥫',
    isProcessed: true,
    names: {
      ko: '케첩',
      en: 'Ketchup',
      ja: 'ケチャップ',
      zh: '番茄酱',
      es: 'Kétchup',
      fr: 'Ketchup',
      de: 'Ketchup',
      pt: 'Ketchup',
      id: 'Saus tomat'
    },
    storage: {
      fridge: {
        durationDays: 180,
        tips: {
          ko: '식초 성분이 있어 실온에 두어도 상하지 않지만, 향과 맛을 유지하려면 개봉 후 반드시 냉장 보관하는 것이 좋습니다. 거꾸로 세워두면 깔끔하게 사용 가능합니다.',
          en: 'Can stay at room temp due to acidity, but refrigerate after opening to preserve flavor. Store upside down.',
          ja: '酢が入っているので常温でも傷みにくいですが、風味維持のため開封後は冷蔵保存し、逆さまに立てておくと便利です。',
          zh: '含有醋酸成分即便常温也不易腐败，但为了保持风味与色泽，开封后建议冷藏，倒扣放置更易挤出。',
          es: 'La acidez lo protege a temperatura ambiente, pero refrigere tras abrir para conservar sabor. Guarde boca abajo.',
          fr: 'L’acidité le préserve à température ambiante, mais réchauffez après ouverture pour garder le goût. Tête en bas.',
          de: 'Sauer genug für Raumtemp., aber nach dem Öffnen kühlen für besseren Geschmack. Auf den Kopf stellen.',
          pt: 'A acidez conserva, mas refrigere após abrir para manter o sabor. Guarde de cabeça para baixo.',
          id: 'Bisa di suhu ruang karena asam, tapi dinginkan setelah dibuka untuk menjaga rasa. Simpan terbalik.'
        },
        sources: [
          'USDA'
        ]
      }
    }
  },
  {
    id: 'honey',
    category: 'condiment',
    emoji: '🍯',
    isProcessed: true,
    names: {
      ko: '꿀',
      en: 'Honey',
      ja: '蜂蜜',
      zh: '蜂蜜',
      es: 'Miel',
      fr: 'Miel',
      de: 'Honig',
      pt: 'Mel',
      id: 'Madu'
    },
    storage: {
      room: {
        durationDays: 730,
        tips: {
          ko: '절대 냉장 보관하지 마세요. 하얗게 당분이 결정화되어 굳어집니다. 뚜껑을 꼭 닫아 건조하고 서늘한 실온에 두면 상하지 않고 영구적입니다.',
          en: 'Never refrigerate; cold causes sugar crystallization and hardening. Keep tightly sealed in a dry, room-temp pantry.',
          ja: '絶対に冷蔵庫に入れないでください。糖分が結晶化して白く固まります。ふたを密閉して常温で保存すれば傷みません。',
          zh: '切勿冷藏。低温会导致糖分结晶变白发硬。拧紧瓶盖，存放在干燥阴凉的常温下，可保存极久。',
          es: 'Nunca refrigere; el frío cristaliza el azúcar. Mantenga sellado en una despensa a temperatura ambiente.',
          fr: 'Ne réfrigérez jamais, le froid cristallise le sucre. Gardez fermé au sec à température ambiante.',
          de: 'Niemals kühlen; Kälte kristallisiert den Zucker. Fest verschlossen bei Raumtemperatur lagern.',
          pt: 'Nunca refrigere; o frio cristaliza o açúcar. Mantenha bem fechado em temperatura ambiente.',
          id: 'Jangan dinginkan; dingin membuat gula mengkristal dan mengeras. Simpan rapat di suhu ruang.'
        },
        sources: [
          'USDA',
          'RDA'
        ]
      }
    }
  },
  {
    id: 'pizza',
    category: 'etc',
    emoji: '🍕',
    isProcessed: true,
    names: {
      ko: '남은 피자',
      en: 'Leftover Pizza',
      ja: '残ったピザ',
      zh: '吃剩的披萨',
      es: 'Pizza sobrante',
      fr: 'Reste de pizza',
      de: 'Übriggebliebene Pizza',
      pt: 'Sobras de pizza',
      id: 'Sisa pizza'
    },
    storage: {
      fridge: {
        durationDays: 3,
        tips: {
          ko: '냉장고에 그냥 두면 도우의 수분이 다 빠져 딱딱해집니다. 지퍼백에 밀봉하여 넣고, 해동 시 물 한 컵과 함께 전자레인지에 데우세요.',
          en: 'Dries out if left open. Seal in bags and microwave with a cup of water to restore softness when reheating.',
          ja: 'そのまま冷蔵すると生地の水分が抜けて固くなります。保存袋で密閉し、解凍時は水一杯と一緒にレンジで温めてください。',
          zh: '直接冷藏会导致饼底水分流失变硬。密封在防潮袋中，重温时与一杯水一起微波加热可恢复松软。',
          es: 'Se reseca si se deja abierta. Séllela en bolsas y caliéntela en el microondas con un vaso de agua.',
          fr: 'S’assèche si laissée à l’air libre. Filmez-la et réchauffez-la au micro-ondes avec un verre d’eau.',
          de: 'Trocknet offen aus. In Beuteln verschließen. Zum Aufwärmen mit einer Tasse Wasser in die Mikrowelle stellen.',
          pt: 'Resseca se deixada aberta. Vede em sacos e aqueça no micro-ondas com um copo de água para reidratar.',
          id: 'Mengering jika dibiarkan terbuka. Segel dalam kantong plastik dan microwave dengan secangkir air.'
        },
        sources: [
          'USDA'
        ]
      },
      freezer: {
        durationDays: 60,
        tips: {
          ko: '한 조각씩 랩으로 감싸진 지퍼백에 넣어 냉동하세요. 에어프라이어 180도에 5분 돌리면 갓 구운 피자처럼 맛있어집니다.',
          en: 'Wrap slices individually in plastic wrap and freeze. Bake at 180°C for 5 minutes in an air fryer for a fresh taste.',
          ja: '1枚ずつラップで包み保存袋に入れて冷凍します。エアフライヤー180度で5分温めると焼きたてのように戻ります。',
          zh: '单片用保鲜膜包裹后装入密封袋中冷冻。用空气炸锅180度烤5分钟，口感能恢复如新烤好一般。',
          es: 'Envuelva las rodajas individualmente y congélelas. Hornee a 180 °C durante 5 minutos en freidora de aire.',
          fr: 'Filmez les tranches séparément et congelez-les. Passez-les 5 min à l’air fryer à 180 °C pour un goût frais.',
          de: 'Scheiben einzeln einwickeln und gefrieren. Für frischen Geschmack 5 Min. bei 180 °C in die Heißluftfritteuse geben.',
          pt: 'Embrulhe as fatias individualmente e congele. Aqueça na air fryer a 180°C por 5 minutos para dourar.',
          id: 'Bungkus potongan per lembar lalu bekukan. Panggang di air fryer 180°C selama 5 menit agar renyah.'
        },
        sources: [
          'USDA'
        ]
      }
    }
  },
  {
    id: 'coffee-beans',
    iconImage: '/assets/images/apps/freshself/ingredients/coffee-beans.png',
    category: 'etc',
    emoji: '☕',
    isProcessed: true,
    names: {
      ko: '커피 원두',
      en: 'Coffee Beans',
      ja: 'コーヒー豆',
      zh: '咖啡豆',
      es: 'Granos de café',
      fr: 'Grains de café',
      de: 'Kaffeebohnen',
      pt: 'Café em grãos',
      id: 'Biji kopi'
    },
    storage: {
      room: {
        durationDays: 30,
        tips: {
          ko: '빛과 산소에 취약해 산패되기 쉽습니다. 아로마 밸브가 달린 어두운 밀폐봉투에 담아 그늘진 실온에 보관하는 것이 정석입니다.',
          en: 'Vulnerable to light and oxygen. Store in a dark, airtight bag with an aroma valve at shady room temperature.',
          ja: '光と酸素に弱く酸化しやすいです。バルブ付きの遮光密閉袋に入れ、日陰の涼しい常温で保管してください。',
          zh: '对光线和氧气敏感极易氧化。务必存放在带排气阀的避光密封袋中，置于阴凉常温处。',
          es: 'Vulnerable a la luz y el oxígeno. Guardar en bolsa oscura y hermética con válvula a temperatura ambiente.',
          fr: 'Sensible à la lumière et l’oxygène. Stockez dans un sachet hermétique opaque avec valve à température ambiante.',
          de: 'Licht- und sauerstoffempfindlich. In einem dunklen, luftdichten Ventilbeutel bei Raumtemperatur lagern.',
          pt: 'Vulnerável à luz e oxigênio. Guarde em saco escuro hermético com válvula em temperatura ambiente.',
          id: 'Biji kopi rentan terhadap cahaya dan oksigen. Simpan di wadah kedap udara gelap dengan katup aroma di suhu ruang.'
        },
        sources: [
          'USDA'
        ]
      },
      freezer: {
        durationDays: 180,
        tips: {
          ko: '⚠️ 냄새를 매우 강력하게 흡수하므로 밀봉을 완벽하게(진공팩 추천) 하지 않으면 냉장고 냄새가 뱁니다. 소분 지퍼백 이중 밀봉 필수.',
          en: '⚠️ Coffee absorbs odors extremely well. Vacuum seal or double bag to prevent freezer odors from ruining the flavor.',
          ja: '⚠️ 周りの臭いを強力に吸収するため、密閉が不十分だと冷蔵庫の臭いが移ります。真空パックか二重密閉が必須です。',
          zh: '⚠️ 咖啡豆极易吸附异味。如果密封不完美（推荐真空包装），会吸附冰箱异味变质。必须进行双重复合密封。',
          es: '⚠️ El café absorbe olores fácilmente. Selle al vacío o use doble bolsa para evitar olores del congelador.',
          fr: '⚠️ Le café occupe beaucoup les odeurs. Scellez sous vide ou doublez le sachet pour éviter les odeurs du congélateur.',
          de: '⚠️ Kaffee nimmt Gerüche extrem auf. Vakuumieren oder doppelt verpacken, um Geruchsübertragung zu verhindern.',
          pt: '⚠️ O café absorve odores facilmente. Vede a vácuo ou use saco duplo para evitar odores do congelador.',
          id: '⚠️ Kopi sangat mudah menyerap bau. Segel vakum atau bungkus ganda agar bau freezer tidak merusak rasa.'
        },
        sources: [
          'USDA'
        ]
      }
    }
  },
  {
    id: 'chicken-leftover',
    iconImage: '/assets/images/apps/freshself/ingredients/chicken-leftover.png',
    category: 'etc',
    emoji: '🥡',
    isProcessed: true,
    names: {
      ko: '남은 치킨',
      en: 'Leftover Chicken',
      ja: '残ったチキン',
      zh: '剩炸鸡',
      es: 'Pollo frito sobrante',
      fr: 'Reste de poulet',
      de: 'Übriggebratenes Hühnchen',
      pt: 'Sobras de frango frito',
      id: 'Sisa ayam goreng'
    },
    storage: {
      fridge: {
        durationDays: 3,
        tips: {
          ko: '밀봉 지퍼백에 담아 보관하고, 3일 내 드세요. 다시 데울 때 전자레인지는 눅눅해지므로 에어프라이어 170도에서 5분가량 구우면 바삭함이 복구됩니다.',
          en: 'Store in bags and consume in 3 days. Microwave makes it soggy; reheat in an air fryer at 170°C for 5 minutes for crispiness.',
          ja: '袋に入れて密閉し3日以内に消費。レンジだとべたつきますが、フライヤー170度5分でカリカリに戻ります.',
          zh: '放入密封袋冷藏并在3天内吃完。微波炉加热会导致外皮变软，建议放入空气炸锅在170℃下烘烤5分钟即可复原酥脆口感。',
          es: 'Guarde en bolsas por 3 días. Calentar en freidora de aire a 170 °C por 5 min devuelve el crujiente.',
          fr: 'Conservez en sachet sous 3 jours. Le micro-ondes le ramollit ; réchauffez à l’air fryer à 170 °C pendant 5 min.',
          de: 'In Beuteln lagern und innerhalb von 3 Tagen essen. Heißluftfritteuse (170 °C, 5 Min.) stellt die Knusprigkeit wieder her.',
          pt: 'Guarde em sacos e coma em até 3 dias. Reaquecer na air fryer a 170°C por 5 minutos devolve a crocância.',
          id: 'Simpan dalam kantong plastik selama 3 hari. Panaskan dengan air fryer 170°C selama 5 menit agar renyah.'
        },
        sources: [
          'USDA'
        ]
      }
    }
  },
  {
    id: 'baby-food',
    iconImage: '/assets/images/apps/freshself/ingredients/baby-food.png',
    category: 'etc',
    emoji: '🍼',
    isProcessed: true,
    names: {
      ko: '이유식',
      en: 'Baby Food',
      ja: '離乳食',
      zh: '婴儿辅食',
      es: 'Comida para bebés',
      fr: 'Aliments pour bébés',
      de: 'Babynahrung',
      pt: 'Comida de bebê',
      id: 'Makanan bayi'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '⚠️ 아기의 면역력은 취약하므로 침이 닿았다면 즉시 버리고, 새 이유식이라도 냉장 보관 시 2일을 초과하지 않도록 각별히 유의하세요.',
          en: '⚠️ Baby immune systems are weak. Discard leftovers containing saliva. Do not store fresh portions past 2 days in the fridge.',
          ja: '⚠️ 赤ちゃんの免疫力は非常に弱いため、唾液の入った食べ残しは即座に廃棄し、新鮮なものでも冷蔵保存は2日を限度としてください。',
          zh: '⚠️ 婴儿免疫力弱。沾有口水的剩辅食必须丢弃；即使未碰过口水冷藏也绝不能超过2天。',
          es: '⚠️ Deseche sobras con saliva. Almacene porciones frescas en la nevera por un máximo de 2 días.',
          fr: '⚠️ Jetez les restes ayant touché la salive. Ne conservez pas au frigo plus de 2 jours.',
          de: '⚠️ Babys haben ein schwaches Immunsystem. Speichelkontaminierte Reste entsorgen. Frischportionen max. 2 Tage kühlen.',
          pt: '⚠️ O sistema imune do bebê é frágil. Descarte sobras com saliva. Não guarde porções frescas por mais de 2 dias.',
          id: '⚠️ Sistem imun bayi lemah. Buang sisa yang terkena ludah. Jangan simpan di kulkas lebih dari 2 hari.'
        },
        sources: [
          'MFDS',
          'CDC',
          'WHO'
        ]
      },
      freezer: {
        durationDays: 14,
        tips: {
          ko: '실리콘 큐브나 모유저장팩에 한 끼 분량씩 얇게 팩팅하여 급속 냉동하고, 2주 이내에 중탕 또는 전용 찜기로 해동하여 섭취하세요.',
          en: 'Freeze in single-meal portions in silicone cubes or bags. Thaw within 2 weeks using a warm water bath or steamer.',
          ja: 'シリコンケースや小分けパックに1回分ずつ冷凍し、2週間以内に湯煎または専用スチーマーで温めてください。',
          zh: '用硅胶辅食盒或储奶袋按每餐用量封好急速冷冻，并在2周内用温水隔水加热或专用蒸锅解冻食用。',
          es: 'Congele en raciones individuales en moldes de silicona. Deshiele en 2 semanas al baño maría.',
          fr: 'Congelez en portions individuelles dans des moules en silicone. Décongelez sous 2 semaines au bain-marie.',
          de: 'In Einzelportionen in Silikonformen einfrieren. Innerhalb von 2 Wochen im Wasserbad auftauen.',
          pt: 'Congele em porções em formas de silicone. Degele em até 2 semanas em banho-maria ou vaporizador.',
          id: 'Bekukan porsi sekali makan dalam cetakan silikon. Cairkan dalam 2 minggu dengan direndam air hangat.'
        },
        sources: [
          'MFDS',
          'CDC',
          'WHO'
        ]
      }
    }
  },
  {
    id: 'ginger',
    category: 'vegetable',
    emoji: '🫚',
    isProcessed: false,
    names: {
      ko: '생강',
      en: 'Ginger',
      ja: '生姜',
      zh: '生姜',
      es: 'Jengibre',
      fr: 'Gingembre',
      de: 'Ingwer',
      pt: 'Gengibre',
      id: 'Jahe'
    },
    storage: {
      room: {
        durationDays: 7,
        tips: {
          ko: '흙이 묻은 채로 신문지에 싸서 그늘지고 통풍이 잘되는 서늘한 곳에 보관하세요.',
          en: 'Wrap in newspaper with soil intact and keep in a cool, shady, well-ventilated place.',
          ja: '土が付いたまま新聞紙に包み, 風通しの良い涼しい日陰で保管してください。',
          zh: '带土用报纸包好, 存放在阴凉通风处。',
          es: 'Envuélvalo en papel de periódico con la tierra y guárdelo en un lugar fresco, sombreado y bien ventilado.',
          fr: 'Enveloppez-le dans du journal avec sa terre et conservez-le dans un endroit frais, ombragé et aéré.',
          de: 'In Zeitungspapier mit Erde einwickeln und an einem kühlen, schattigen und gut belüfteten Ort aufbewahren.',
          pt: 'Embrulhe em jornal com a terra intacta e guarde em local fresco, sombreado e ventilado.',
          id: 'Bungkus dengan koran beserta tanahnya dan simpan di tempat yang sejuk, teduh, dan berventilasi.'
        },
        sources: [
          'RDA'
        ]
      },
      fridge: {
        durationDays: 30,
        tips: {
          ko: '껍질을 벗겨 물에 담가 밀폐 용기에 보관하되, 물은 1~2일마다 정기적으로 갈아주어야 신선함이 오래 유지됩니다.',
          en: 'Peel, submerge in water in an airtight container, and change water every 1–2 days.',
          ja: '皮をむいて水に浸し, 密閉容器に入れて保管します。水は1〜2日お기に入れ替えてください。',
          zh: '去皮浸泡在水中, 放入密封容器保存。每隔1-2天换一次水以保持新鲜。',
          es: 'Pélelo, sumérjalo en agua en un recipiente hermético y cambie el agua cada 1-2 días.',
          fr: 'Pelez-le, plongez-le dans l’eau dans une boîte étanche et changez l’eau tous les 1 à 2 jours.',
          de: 'Schälen, in einem luftdichten Behälter in Wasser einlegen und das Wasser alle 1–2 Tage wechseln.',
          pt: 'Descasque, mergulhe em água em pote hermético e troque a água a cada 1 ou 2 dias.',
          id: 'Kupas, rendam dalam air dalam wadah kedap udara, dan ganti airnya setiap 1-2 hari sekali.'
        },
        sources: [
          'RDA'
        ]
      },
      freezer: {
        durationDays: 180,
        tips: {
          ko: '편으로 썰거나 다진 후 지퍼백에 얇게 펴서 소분 냉동해 두면 요리할 때 즉시 해동 없이 꺼내 쓰기 좋습니다.',
          en: 'Slice or mince, flatten in freezer bags, and freeze. Use directly while cooking.',
          ja: '薄切りにするかみじん切りにし, 保存袋에 薄く平らに伸ばして冷凍します。凍ったまま調理に使えます。',
          zh: '切片或切碎, 在密封袋中压平冷冻。烹饪时无需解冻, 直接使用即可。',
          es: 'Córtelo en rodajas o píquelo, aplánelo en bolsas de congelador y congélelo. Úselo directamente sin descongelar.',
          fr: 'Coupez-le en tranches ou hachez-le, étalez-le à plat en sachet et congelez. Utilisez-le directement.',
          de: 'In Scheiben schneiden oder hacken, flach in Beuteln gefrieren. Direkt gefroren verwenden.',
          pt: 'Fatie ou pique, aplane em sacos de congelador e congele. Use diretamente ao cozinhar.',
          id: 'Iris atau cincang, pipihkan dalam kantong plastik, lalu bekukan. Gunakan langsung saat memasak.'
        },
        sources: [
          'RDA'
        ]
      }
    }
  },
  {
    id: 'radish',
    iconImage: '/assets/images/apps/freshself/ingredients/radish.png',
    category: 'vegetable',
    emoji: '🥔',
    isProcessed: false,
    names: {
      ko: '무',
      en: 'Radish',
      ja: '大根',
      zh: '白萝卜',
      es: 'Rábano',
      fr: 'Radis',
      de: 'Rettich',
      pt: 'Rabanete',
      id: 'Lobak'
    },
    storage: {
      fridge: {
        durationDays: 14,
        tips: {
          ko: '무청(잎) 부분을 잘라내고(수분 손실 방지), 신문지로 꽁꽁 싸서 꼭지 부분이 위로 가도록 세워서 냉장 보관하세요.',
          en: 'Cut off green leaves to prevent moisture loss. Wrap tightly in newspaper and store upright.',
          ja: '葉の部分を切り落とし（水分減少防止）, 新聞紙できっちり包んで, 葉側を上にして立てて冷蔵保存してください。',
          zh: '切除萝卜叶（防止水分流失）, 用报纸紧紧包裹, 根部朝下竖立冷藏。',
          es: 'Corte las hojas para evitar deshidratación. Envuelva bien en periódico y guarde vertical en la nevera.',
          fr: 'Coupez les feuilles pour éviter la perte d’eau. Enveloppez de journal et stockez debout au frais.',
          de: 'Blätter abschneiden, um Feuchtigkeitsverlust zu vermeiden. Fest in Zeitungspapier wickeln und aufrecht kühlen.',
          pt: 'Corte as folhas para evitar perda de umidade. Embrulhe bem in jornal e guarde em pé na geladeira.',
          id: 'Potong daunnya untuk mencegah hilangnya air. Bungkus rapat dengan koran dan simpan berdiri di kulkas.'
        },
        sources: [
          'RDA'
        ]
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '용도에 맞게 썰어서 소금물에 가볍게 데친 후, 한 김 식혀 물기를 완전히 짜내고 소분하여 냉동 보관하세요.',
          en: 'Slice, blanch lightly in salted water, cool down, dry completely, and freeze in portions.',
          ja: '使いやすい大きさに切り, 塩水で軽く下茹でしてから, 冷まして水気をしっかり切って冷凍します。',
          zh: '切成适合的大小, 在盐水中轻微焯水, 捞出晾凉并控干水分, 分装冷冻。',
          es: 'Córtelo, blanquee en agua con sal, enfríe, seque por completo y congele en porciones.',
          fr: 'Coupez-le, blanchissez-le à l’eau salée, laissez refroidir, séchez bien et congelez par portions.',
          de: 'Schneiden, in Salzwasser kurz blanchieren, abkühlen lassen, gut trocknen und portionieren.',
          pt: 'Corte, branqueie em água com sal, esfrie, seque bem e congele em porções.',
          id: 'Potong, rebus sebentar di air garam, dinginkan, keringkan sepenuhnya, lalu bekukan dalam porsi.'
        },
        sources: [
          'RDA'
        ]
      }
    }
  },
  {
    id: 'bean-sprouts',
    iconImage: '/assets/images/apps/freshself/ingredients/bean-sprouts.png',
    category: 'vegetable',
    emoji: '🌱',
    isProcessed: false,
    names: {
      ko: '콩나물',
      en: 'Bean Sprouts',
      ja: 'もやし',
      zh: '豆芽',
      es: 'Brotes de soja',
      fr: 'Pousses de soja',
      de: 'Sojasprossen',
      pt: 'Broto de feijão',
      id: 'Toge'
    },
    storage: {
      fridge: {
        durationDays: 3,
        tips: {
          ko: '밀폐용기에 콩나물을 담고 찬물에 완전히 잠기게 한 뒤 냉장 보관하세요. 물을 매일 한 번씩 갈아주어야 아삭함이 유지됩니다.',
          en: 'Submerge fully in cold water in an airtight container. Change water daily to keep them crunchy.',
          ja: '密閉容器にもやしを入れ, 冷水に完全に浸した状態で冷蔵保存します. 水は毎日入れ替えてください。',
          zh: '将豆芽放入密封容器中, 用冷水完全淹没后冷藏. 每天换一次水以保持爽脆。',
          es: 'Sumerja por completo en agua fría en un recipiente hermético. Cambie el agua a diario para mantenerlos crujientes.',
          fr: 'Plongez complètement dans l’eau froide dans une boîte étanche. Changez l’eau tous les jours.',
          de: 'In einem luftdichten Behälter vollständig in kaltes Wasser einlegen. Wasser täglich wechseln.',
          pt: 'Mergulhe totalmente em água fria em pote hermético. Troque a água diariamente para manter a crocância.',
          id: 'Rendam seluruhnya dalam air dingin di wadah kedap udara. Ganti air setiap hari agar tetap renyah.'
        },
        sources: [
          'RDA'
        ]
      },
      freezer: {
        durationDays: 30,
        tips: {
          ko: '끓는 물에 소금을 넣고 30초간 아삭하게 데친 후, 찬물에 헹궈 물기를 단단히 짜낸 뒤 얼려서 국거리용으로 쓰세요.',
          en: 'Blanch in salted boiling water for 30s, rinse in cold water, squeeze out moisture, and freeze.',
          ja: '沸騰した塩水で30秒下茹でし, 冷水で冷ましてから水分をしっかり絞って冷凍します。スープの具などに適しています。',
          zh: '放入沸盐水中焯水30秒, 用冷水冲凉, 用力捏干水分后冷冻. 适合做汤底配料。',
          es: 'Blanquee en agua hirviendo con sal por 30s, enfríe, escurra bien y congele para caldos.',
          fr: 'Blanchissez 30s à l’eau bouillante salée, rincez à l’eau froide, essorez bien et congelez.',
          de: 'In kochendem Salzwasser 30 Sek. blanchieren, abschrecken, gut ausdrücken und für Suppen einfrieren.',
          pt: 'Branqueie em água fervente com sal por 30s, esfrie, esprema bem a água e congele para caldos.',
          id: 'Rebus di air garam mendidih selama 30 detik, bilas air dingin, peras airnya, lalu bekukan untuk sup.'
        },
        sources: [
          'RDA'
        ]
      }
    }
  },
  {
    id: 'soy-milk',
    iconImage: '/assets/images/apps/freshself/ingredients/soy-milk.png',
    category: 'dairy',
    emoji: '🥛',
    isProcessed: true,
    names: {
      ko: '두유',
      en: 'Soy Milk',
      ja: '豆乳',
      zh: '豆奶/豆浆',
      es: 'Leche de soja',
      fr: 'Lait de soja',
      de: 'Sojamilch',
      pt: 'Leite de soja',
      id: 'Susu kedelai'
    },
    storage: {
      room: {
        durationDays: 180,
        tips: {
          ko: '미개봉 상태의 멸균 제품은 실온의 그늘지고 서늘한 곳에 장기 보관이 가능합니다.',
          en: 'Unopened aseptic cartons can be stored in a cool, dry pantry for up to 6 months.',
          ja: '未開封の滅菌パック製品は, 直射日光를 피한 涼しい常温で長期間保存できます。',
          zh: '未开封灭菌包装产品可存放在阴凉干燥的常温下, 保存可达6个月。',
          es: 'Los envases herméticos sin abrir se conservan en una despensa fresca y seca.',
          fr: 'Les briques fermées se conservent dans un endroit sec et frais à température ambiante.',
          de: 'Ungeöffnete sterile Packungen können bis zu 6 Monate an einem kühlen, trockenen Ort gelagert werden.',
          pt: 'Caixas fechadas podem ser armazenadas em local seco e fresco à temperatura ambiente.',
          id: 'Kemasan karton steril yang belum dibuka dapat disimpan di tempat sejuk dan kering.'
        },
        sources: [
          'MFDS'
        ]
      },
      fridge: {
        durationDays: 7,
        tips: {
          ko: '개봉한 두유는 공기 노출로 부패하기 쉬우므로 즉시 냉장 보관하고 유통기한과 상관없이 7일 내로 소비하세요.',
          en: 'Once opened, refrigerate immediately and consume within 7 days regardless of expiration date.',
          ja: '開封後は傷みやすいため, すぐに冷蔵庫に入れ, 賞味期限にかかわらず7日以内に飲みきってください。',
          zh: '开封后极易腐坏, 请务必立即冷藏, 且无论保质期如何, 请在7天内饮用完毕。',
          es: 'Abierto, refrigere de inmediato y consuma en un plazo de 7 días sin importar la fecha de vencimiento.',
          fr: 'Après ouverture, réfrigérez immédiatement et consommez sous 7 jours maximum.',
          de: 'Nach dem Öffnen sofort kühlen und unabhängig vom Ablaufdatum innerhalb von 7 Tagen verbrauchen.',
          pt: 'Depois de aberto, refrigere imediatamente e consuma em até 7 dias, independente da data de validade.',
          id: 'Setelah dibuka, segera dinginkan dan konsumsi dalam 7 hari tanpa melihat tanggal kedaluwarsa.'
        },
        sources: [
          'MFDS'
        ]
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
        sources: [
          'RDA',
          'USDA'
        ]
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
        sources: [
          'RDA',
          'USDA'
        ]
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
        sources: [
          'RDA',
          'USDA'
        ]
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
        sources: [
          'RDA',
          'USDA'
        ]
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
        sources: [
          'RDA',
          'USDA'
        ]
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
        sources: [
          'RDA',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'salmon',
    iconImage: '/assets/images/apps/freshself/ingredients/salmon.png',
    category: 'seafood',
    emoji: '🍣',
    isProcessed: false,
    names: {
      ko: '연어',
      en: 'Salmon',
      ja: '鮭',
      zh: '三文鱼/鲑鱼',
      es: 'Salmón',
      fr: 'Saumon',
      de: 'Lachs',
      pt: 'Salmão',
      id: 'Salmon'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '겉면에 남은 드립(물기)을 키친타월로 확실히 닦아낸 후, 랩으로 완전히 진공 밀봉하여 보관하세요. 청주나 화이트와인을 살짝 뿌려두면 비린내를 잡고 살이 단단해집니다.',
          en: 'Wipe all moisture, vacuum wrap, and refrigerate. Sprinkling sake or white wine keeps the meat firm.',
          ja: '表面のドリップ（水気）をペーパーでしっかり拭き取り, ラップで完全に真空密閉して冷蔵します. 酒や白ワインを軽く振ると臭みが消えます。',
          zh: '用厨房纸彻底擦干表面血水, 用保鲜膜真空密封冷藏. 淋少许料酒或白葡萄酒可去腥并使鱼肉更紧致。',
          es: 'Seque bien los jugos, envuelva al vacío y refrigere. Rociar un poco de sake o vino blanco evita el olor.',
          fr: 'Épongez le liquide, filmez sous vide et réfrigérez. Vaporiser du saké ou du vin blanc évite les odeurs.',
          de: 'Feuchtigkeit gut abtupfen, vakuumieren und kühlen. Etwas Sake oder Weißwein verhindert Gerüche.',
          pt: 'Seque o líquido da carne, vede a vácuo e refrigere. Borrifar saquê ou vinho branco ajuda a eliminar odores.',
          id: 'Lap kering cairannya, bungkus vakum, dan dinginkan. Percikan sedikit sake atau anggur putih mengurangi bau amis.'
        },
        sources: [
          'NIFS',
          'USDA'
        ]
      },
      freezer: {
        durationDays: 60,
        tips: {
          ko: '1회분 크기로 썰어 소금을 살짝 뿌려 수분을 빼고, 올리브유를 발라 랩핑한 뒤 지퍼백에 밀봉하여 급속 냉동하세요.',
          en: 'Slice into single portions, salt lightly to draw out water, brush with olive oil, wrap, and freeze.',
          ja: '1回分のサイズに切り, 塩を軽く振って余分な水分를 빼고, 올리브유를 발라 랩으로 싸서 급속 냉동합니다.',
          zh: '切成单次用量的大小, 撒少许盐脱水, 涂抹橄榄油后包裹保鲜膜急速冷冻。',
          es: 'Corte en porciones, sale un poco para deshidratar, unte aceite de oliva, envuelva y congele.',
          fr: 'Coupez en portions, salez légèrement pour dégorger, badigeonnez d’huile d’olive, filmez et congelez.',
          de: 'In Portionsgröße schneiden, leicht salzen, mit Olivenöl bestreichen, einwickeln und gefrieren.',
          pt: 'Corte em porções, salgue levemente para drenar a água, pincele azeite, embrulhe em filme e congele.',
          id: 'Potong dalam porsi sekali makan, taburi sedikit garam, olesi minyak zaitun, bungkus, lalu bekukan.'
        },
        sources: [
          'NIFS',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'anchovy',
    iconImage: '/assets/images/apps/freshself/ingredients/anchovy.png',
    category: 'seafood',
    emoji: '🐟',
    isProcessed: false,
    names: {
      ko: '멸치',
      en: 'Anchovy',
      ja: '煮干し/カタクチイワシ',
      zh: '鳀鱼/小银鱼',
      es: 'Anchoa',
      fr: 'Anchois',
      de: 'Sardelle',
      pt: 'Anchova',
      id: 'Ikan teri'
    },
    storage: {
      room: {
        durationDays: 7,
        tips: {
          ko: '개봉한 마른 멸치를 고온다습한 실온에 두면 벌레가 생기거나 누룩 곰팡이가 피기 쉽습니다. 단기 보관 시에만 건조하고 서늘한 곳에 밀봉 보관하세요.',
          en: 'Molds and pests easily breed in humid climates. Keep in a dry, cool place for short term only.',
          ja: '開封済みの煮干しを高温多湿の常温に置くとカビや虫が付きやすいです. 短기 보관만, 건조하고 서늘한 곳에서 밀폐 보관해 주세요.',
          zh: '已开封的干银鱼在高温潮湿常温下极易生虫或发霉. 仅限短期保存时密封放在干燥凉爽处。',
          es: 'Los mohos y plagas crecen en climas húmedos. Guarde en un lugar fresco y seco solo a corto plazo.',
          fr: 'Moisissures et insectes adorent l’humidité. Conservez fermé au sec et au frais à court terme seulement.',
          de: 'Schimmel und Schädlinge vermehren sich bei Feuchtigkeit. Nur kurzfristig trocken und kühl lagern.',
          pt: 'Mofo e insetos proliferam em umidade. Guarde fechado em local seco e fresco apenas a curto prazo.',
          id: 'Jamur dan serangga mudah berkembang di cuaca lembap. Simpan kering dan sejuk untuk jangka pendek saja.'
        },
        sources: [
          'MFDS'
        ]
      },
      freezer: {
        durationDays: 365,
        tips: {
          ko: '멸치를 프라이팬에 기름 없이 가볍게 볶아 습기를 날린 후, 식혀서 지퍼백에 밀봉해 냉동 보관하면 비린내 없이 오래 유지됩니다.',
          en: 'Pan-fry without oil to remove moisture, cool, and freeze in sealed bags to keep crunchy and odor-free.',
          ja: '油를 두르지 않고 프라이팬에서 가볍게 볶아 습기를 날리고, 식혀서 지퍼백에 밀봉해 냉동 보관하면 오래 보관할 수 있습니다.',
          zh: '放入无油炒锅中轻炒以除去水分, 晾凉后装入密封袋冷冻, 可保持无腥味和爽脆口感。',
          es: 'Tueste ligeramente sin aceite para secar, enfríe y congele en bolsas herméticas para conservar la textura.',
          fr: 'Faites griller à sec à la poêle, laissez refroidir et congelez en sachet pour bloquer les odeurs.',
          de: 'Ohne Öl kurz in der Pfanne anrösten, abkühlen lassen und in Beuteln gefrieren gegen Gerüche.',
          pt: 'Toste levemente sem óleo na frigideira para secar, esfrie e congele em sacos herméticos para evitar odores.',
          id: 'Sangrai tanpa minyak untuk menghilangkan kelembapan, dinginkan, lalu bekukan dalam kantong plastik.'
        },
        sources: [
          'MFDS'
        ]
      }
    }
  },
  {
    id: 'soy-sauce',
    iconImage: '/assets/images/apps/freshself/ingredients/soy-sauce.png',
    category: 'condiment',
    emoji: '🫙',
    isProcessed: true,
    names: {
      ko: '간장',
      en: 'Soy Sauce',
      ja: '醤油',
      zh: '酱油',
      es: 'Salsa de soja',
      fr: 'Sauce soja',
      de: 'Sojasauce',
      pt: 'Molho de soja',
      id: 'Kecap asin'
    },
    storage: {
      room: {
        durationDays: 30,
        tips: {
          ko: '개봉 전에는 서늘하고 어두운 상온에 두면 무기한에 가깝게 보관할 수 있습니다.',
          en: 'Unopened soy sauce can be kept almost indefinitely in a cool, dark pantry.',
          ja: '未開封の状態なら, 直射日光の当たらない涼しい常温でほぼ半永久的に保存できます。',
          zh: '未开封前存放在凉爽避光的常温下, 几乎可以无限期保存。',
          es: 'Sin abrir se conserva casi indefinidamente en una despensa fresca y oscura.',
          fr: 'Non ouvert, il se conserve presque indéfiniment dans un placard frais et sombre.',
          de: 'Ungeöffnet fast unbegrenzt an einem kühlen, dunklen Ort lagerfähig.',
          pt: 'Fechado pode ser mantido quase indefinidamente em local fresco e escuro.',
          id: 'Sebelum dibuka dapat disimpan hampir tanpa batas di tempat yang sejuk dan gelap.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      },
      fridge: {
        durationDays: 365,
        tips: {
          ko: '개봉 후 실온에 두면 산화되어 맛과 색이 변합니다. 뚜껑을 단단히 닫아 반드시 냉장 보관해야 고유의 풍미가 보존됩니다.',
          en: 'Once opened, keep refrigerated with cap sealed tightly to prevent oxidation and preserve flavor.',
          ja: '開封後常温に置くと酸化して味や色が劣化します. ふたをしっかり閉めて必ず冷蔵庫で保管してください。',
          zh: '开封后若置于常温会氧化导致风味和颜色变差. 拧紧瓶盖务必冷藏保存以维持其原本风味。',
          es: 'Una vez abierto, guarde en la nevera con la tapa bien cerrada para evitar oxidación.',
          fr: 'Après ouverture, conservez au frais flacon bien fermé pour éviter l’oxydation.',
          de: 'Nach dem Öffnen gut verschlossen im Kühlschrank lagern, um Oxidation zu vermeiden.',
          pt: 'Após aberto, conserve na geladeira com a tampa bem fechada para evitar a oxidação e manter o aroma.',
          id: 'Setelah dibuka, simpan di kulkas dengan tutup rapat untuk mencegah oksidasi dan menjaga rasa.'
        },
        sources: [
          'MFDS',
          'USDA'
        ]
      }
    }
  },
  {
    id: 'kimchi',
    iconImage: '/assets/images/apps/freshself/ingredients/kimchi.png',
    category: 'condiment',
    emoji: '🌶️',
    isProcessed: true,
    names: {
      ko: '김치',
      en: 'Kimchi',
      ja: 'キムチ',
      zh: '泡菜',
      es: 'Kimchi',
      fr: 'Kimchi',
      de: 'Kimchi',
      pt: 'Kimchi',
      id: 'Kimchi'
    },
    storage: {
      fridge: {
        durationDays: 90,
        tips: {
          ko: '김치 표면이 공기에 노출되면 효모(하얀 군덕지)가 생기므로 꾹꾹 눌러 국물에 잠기게 하고 위를 위생비닐로 덮어 보관하세요. 김치냉장고(0~1℃) 보관 시 더 오래 유지됩니다.',
          en: 'Keep kimchi submerged under liquid and cover surface with plastic wrap to prevent white yeast film.',
          ja: 'キムチの表面が空気に触れると白い酵母（産膜酵母）が発生するため, しっかり押し込んで汁に浸し, 上をラップ等で覆って冷蔵します. 김치 냉장고(0~1℃) 보관 시 더 길게 유지됩니다.',
          zh: '金汁表层若暴露于空气会滋生白膜酵母. 请用力压实使其淹没在汤汁中, 并用保鲜膜盖住表层。',
          es: 'Mantenga el kimchi sumergido en el líquido y cubra la superficie con film para evitar levadura blanca.',
          fr: 'Gardez le kimchi immergé sous le jus et couvrez de film pour éviter la pellicule blanche de levure.',
          de: 'Kimchi unter der Flüssigkeit halten und die Oberfläche abdecken, um Kahmhaut zu vermeiden.',
          pt: 'Mantenha o kimchi mergulhado no caldo e cubra a superfície com plástico para evitar levedura branca.',
          id: 'Jaga kimchi terendam dalam airnya dan tutup permukaannya dengan plastik wrap untuk mencegah ragi putih.'
        }
      },
      freezer: {
        durationDays: 180,
        tips: {
          ko: '⚠️ 배추 김치를 얼리면 해동 시 섬유질이 손상되어 푸석하고 흐물거립니다. 생식용으로는 불가하며, 오직 찌개나 볶음 조리용으로 사용할 목적일 때만 냉동하세요.',
          en: '⚠️ Freezing ruins crunchy texture. Frozen kimchi becomes mushy and should only be used for cooked dishes like stews.',
          ja: '⚠️ 冷凍すると白菜の繊維質が壊れ, 解凍後に食感が崩れてグズグズになります. 加熱調理（鍋や炒め物）用としてのみ冷凍してください。',
          zh: '⚠️ 冰冻会破坏白菜纤维结构, 解冻后口感软烂. 不能生吃, 仅在打算做汤或炒菜使用时才可冷冻。',
          es: '⚠️ Congelarlo arruina la textura. Se vuelve blando y solo sirve para platos cocinados como guisos.',
          fr: '⚠️ La congélation gâte la texture. Il devient mou et ne doit servir que pour des plats cuits ou ragoûts.',
          de: '⚠️ Gefrieren zerstört die knackige Konsistenz. Gefrorener Kimchi wird matschig und eignet sich nur zum Kochen.',
          pt: '⚠️ Congelar danifica a textura da acelga, que fica mole. Use apenas para pratos cozidos como ensopados.',
          id: '⚠️ Membekukan merusak tekstur renyahnya. Kimchi beku menjadi lembek dan hanya cocok untuk masakan matang.'
        }
      }
    }
  },
  {
    id: 'olive-oil',
    iconImage: '/assets/images/apps/freshself/ingredients/olive-oil.png',
    category: 'condiment',
    emoji: '🫒',
    isProcessed: true,
    names: {
      ko: '식용유/올리브유',
      en: 'Cooking Oil / Olive Oil',
      ja: '食用油/オリーブオイル',
      zh: '食用油/橄榄油',
      es: 'Aceite de cocina / Oliva',
      fr: 'Huile de cuisson / Olive',
      de: 'Speiseöl / Olivenöl',
      pt: 'Óleo de cozinha / Azeite',
      id: 'Minyak goreng / Zaitun'
    },
    storage: {
      room: {
        durationDays: 730,
        tips: {
          ko: '빛과 공기에 닿으면 쉽게 산패하므로 어두운 병에 담아 화구 주변을 피해 15~25℃ 서늘한 상온에 보관하세요.',
          en: 'Vulnerable to light and heat. Store in dark bottles in a cool (15–25°C) pantry away from the stove.',
          ja: '光や熱에 약하고 酸化되기 쉬우므로, 차광병에 넣어 가스레인지 등 열원에서 피한 15~25℃ 서늘한 상온에 보관하십시오.',
          zh: '接触光线和空气极易酸败. 请用深色瓶装, 避开灶台等热源, 存放在15-25℃凉爽常温下。',
          es: 'Sencible a luz y calor. Guarde en botellas oscuras a temperatura ambiente (15-25°C) lejos de la estufa.',
          fr: 'Sensible à la lumière et chaleur. Conservez en bouteille opaque au sec (15-25°C) loin des plaques.',
          de: 'Licht- und hitzeempfindlich. In dunklen Flaschen kühl (15-25°C) und fern vom Herd lagern.',
          pt: 'Sensível à luz e calor. Guarde em garrafas escuras em local fresco (15-25°C) longe do fogão.',
          id: 'Rentan terhadap cahaya dan panas. Simpan di botol gelap pada suhu ruang (15-25°C) jauh dari kompor.'
        }
      },
      fridge: {
        durationDays: 0,
        tips: {
          ko: '⚠️ 절대 냉장 보관하지 마세요! 특히 엑스트라 버진 올리브유는 0~5℃ 이하에서 하얗게 굳어지고 결정이 생겨 품질이 손상됩니다.',
          en: '⚠️ Never refrigerate! Extra virgin olive oil solidifies, turns cloudy, and crystallizes at cold temperatures.',
          ja: '⚠️ 絶対に冷蔵庫に入れないでください！特にエキストラバージンオリーブオイルは0〜5℃以下で白く固まり品質が落ちます。',
          zh: '⚠️ 切勿冷藏！尤其是特级初榨橄榄油, 在0-5℃以下会凝固结晶变白, 损害其品质。',
          es: '⚠️ ¡Nunca refrigere! El aceite de oliva extra virgen se solidifica y cristaliza a bajas temperaturas.',
          fr: '⚠️ Ne réfrigérez jamais ! L’huile d’olive extra vierge se fige et cristallise à basse température.',
          de: '⚠️ Niemals kühlen! Natives Olivenöl extra verfestigt sich und kristallisiert im Kühlschrank.',
          pt: '⚠️ Nunca refrigere! O azeite de oliva extravirgem se solidifica e cristaliza sob baixas temperaturas.',
          id: '⚠️ Jangan pernah dinginkan! Minyak zaitun ekstra murni membeku dan mengkristal di suhu dingin.'
        }
      }
    }
  },
  {
    id: 'nuts',
    category: 'etc',
    emoji: '🥜',
    isProcessed: true,
    names: {
      ko: '견과류',
      en: 'Nuts',
      ja: 'ナッツ',
      zh: '坚果',
      es: 'Frutos secos',
      fr: 'Fruits secs',
      de: 'Nüsse',
      pt: 'Nozes',
      id: 'Kacang-kacangan'
    },
    storage: {
      room: {
        durationDays: 30,
        tips: {
          ko: '불포화지방산이 풍부해 산소와 접촉하면 쉽게 찌든 내(산패)가 납니다. 지퍼백에 산소흡수제와 함께 완전 밀봉하여 어두운 상온에 두세요.',
          en: 'High unsaturated fat causes rapid oxidation. Seal tightly with oxygen absorbers in a dark pantry.',
          ja: '不飽和脂肪酸が多く空気に触れるとすぐ油臭く（酸化）なります. 保存袋에 脫酸素劑와 함께 밀봉해 凉しい暗所に保管해 주세요.',
          zh: '富含不饱和脂肪酸, 接触空气极易变哈拉（酸败）. 请装入密封袋并放入脱氧剂置于避光常温处。',
          es: 'El alto contenido de grasas insaturadas oxida el producto. Selle herméticamente en un lugar oscuro.',
          fr: 'Les graisses insaturées s’oxydent vite. Fermez hermétiquement avec absorbeur d’oxygène à l’obscurité.',
          de: 'Ungesättigte Fettsäuren oxidieren schnell. Luftdicht mit Sauerstoffabsorber dunkel lagern.',
          pt: 'Gorduras insaturadas oxidam rapidamente. Vede bem com absorvedores de oxigênio em local escuro.',
          id: 'Lemak tak jenuh memicu oksidasi cepat. Segel rapat dengan penyerap oksigen di tempat gelap.'
        }
      },
      fridge: {
        durationDays: 180,
        tips: {
          ko: '여름철에는 실온 보관 시 곰팡이가 피어 아플라톡신(발암 독소)이 생길 수 있으므로 지퍼백에 꽉 밀봉하여 냉장 보관하는 것이 비교적 안전합니다.',
          en: 'Refrigerate in tightly sealed bags during hot weather to prevent toxic mold (aflatoxin) growth.',
          ja: '夏場など常温で置くとカビから発がん性毒素（アフラトキシン）が生じる恐れがあります. 袋に密閉して冷蔵してください。',
          zh: '夏季若在常温下保存极易发霉滋生黄曲霉毒素（致癌物）. 因此建议密封后冷藏保存。',
          es: 'Refrigere en bolsas herméticas con calor para evitar moho tóxico (aflatoxina).',
          fr: 'Réfrigérez en sachet bien fermé par temps chaud pour éviter les moisissures toxiques (aflatoxines).',
          de: 'Bei warmem Wetter im Kühlschrank in dicht geschlossenen Beuteln lagern, um Schimmelbildung (Aflatoxin) zu verhindern.',
          pt: 'Refrigere em sacos bem vedados sob clima quente para evitar o crescimento de mofo tóxico (aflatoxina).',
          id: 'Dinginkan dalam kantong tersegel rapat saat cuaca panas untuk mencegah jamur beracun (aflatoksin).'
        }
      },
      freezer: {
        durationDays: 365,
        tips: {
          ko: '수분과 산소를 차단하는 지퍼백에 넣어 이중 밀봉한 뒤 냉동 보관하는 것이 견과류의 고소함을 끝까지 지키는 가장 좋은 보관법입니다.',
          en: 'Double-bagging and freezing is the best way to prevent rancidity and preserve the nutty crunch.',
          ja: '湿気와 산소를 차단하는 지퍼백에 넣어 이중 밀폐해 냉동 보관하면, 견과류의 풍미와 아삭함을 오래 유지할 수 있습니다.',
          zh: '放入阻隔水分和空气的密封袋中进行双重包装后冷冻, 是保持坚果酥脆香浓的最佳方案。',
          es: 'Usar doble bolsa y congelar es el mejor método para evitar la rancidez y conservar la textura crujiente.',
          fr: 'Doubler le sachet et congeler est le meilleur moyen d’éviter le rance et de garder le croquant.',
          de: 'Doppelt verpackt einfrieren ist der beste Weg, um Ranzigkeit zu vermeiden und den Biss zu erhalten.',
          pt: 'Usar saco duplo e congelar é a melhor forma de evitar o ranço e manter a crocância típica.',
          id: 'Bungkus ganda dan bekukan adalah cara terbaik mencegah tengik dan menjaga kerenyahannya.'
        }
      }
    }
  },
  {
    id: 'ham',
    iconImage: '/assets/images/apps/freshself/ingredients/ham.png',
    category: 'meat',
    emoji: '🍖',
    isProcessed: true,
    names: {
      ko: '햄',
      en: 'Ham',
      ja: 'ハム',
      zh: '火腿',
      es: 'Jamón',
      fr: 'Jambon',
      de: 'Schinken',
      pt: 'Presunto',
      id: 'Daging ham'
    },
    storage: {
      fridge: {
        durationDays: 7,
        tips: {
          ko: '개봉 후 남은 슬라이스 햄은 단면이 빠르게 건조해지고 상합니다. 개별 랩핑하여 지퍼백에 완전히 진공 밀봉하여 냉장 보관하세요.',
          en: 'Once opened, wrap tightly and seal in bags to prevent edges from drying. Use within 7 days.',
          ja: '開封後のスライスハムは断面が乾いて傷みやすいです. 1枚ずつラップで包み, 袋に密閉して冷蔵保存してください。',
          zh: '开封后吃剩的片状火腿切面会迅速变干且变质. 请用保鲜膜单独裹紧装入密封袋冷藏。',
          es: 'Abierto, envuelva bien y selle en bolsas para evitar que se seque. Consuma en 7 días.',
          fr: 'Une fois ouvert, filmez serré en sachet pour éviter le dessèchement des bords. Consommez sous 7 jours.',
          de: 'Nach dem Öffnen gut einwickeln und in Beuteln lagern, um Austrocknen zu verhindern. In 7 Tagen verbrauchen.',
          pt: 'Após aberto, embrulhe bien e guarde em sacos vedados para não ressecar as bordas. Consuma em até 7 dias.',
          id: 'Setelah dibuka, bungkus rapat dan segel dalam kantong agar pinggirannya tidak kering. Gunakan dalam 7 hari.'
        }
      },
      freezer: {
        durationDays: 60,
        tips: {
          ko: '햄을 요리용 크기로 깍둑썰기하거나 소분하여 겹겹이 종이 호일을 끼우고 랩핑한 뒤 얼려두면 요리 시 즉시 넣기 수월합니다.',
          en: 'Dice or slice, separate layers with parchment paper, wrap, and freeze for easy cooking.',
          ja: '料理의 用途에 맞게 사각썰기 또는 소분하여, 크래프트 종이 호일을 끼워 랩으로 싸서 얼려두면 편리합니다.',
          zh: '切成丁状或分装, 中间夹防油纸, 包裹后冷冻, 以便在烹饪时直接取出下锅。',
          es: 'Corte en dados, separe las capas con papel vegetal, envuelva y congele para facilitar el cocinado.',
          fr: 'Coupez en dés ou tranches, séparez avec du papier cuisson, filmez et congelez pour cuisiner facile.',
          de: 'Würfeln, Schichten mit Backpapier trennen, einwickeln und einfrieren für schnelles Kochen.',
          pt: 'Corte em cubos ou fatias, separe as camadas com papel-manteiga, embrulhe e congele para facilitar.',
          id: 'Potong dadu atau iris, beri sekat kertas roti, bungkus, lalu bekukan untuk memudahkan memasak.'
        }
      }
    }
  },
  {
    id: 'eggplant',
    category: 'vegetable',
    emoji: '🍆',
    isProcessed: false,
    names: {
      ko: '가지',
      en: 'Eggplant',
      ja: 'ナス',
      zh: '茄子',
      es: 'Berenjena',
      fr: 'Aubergine',
      de: 'Aubergine',
      pt: 'Berinjela',
      id: 'Terong'
    },
    storage: {
      room: {
        durationDays: 5,
        tips: {
          ko: '가지는 저온 장애에 약하므로 절대 차가운 냉장실 깊숙이 오래 보관하지 마세요. 하나씩 신문지에 싸서 그늘지고 서늘한 상온에 보관하는 것이 최선입니다.',
          en: 'Very sensitive to cold. Wrap individually in newspaper and store in a cool, shady pantry.',
          ja: 'ナス는 低温 障害에 약하므로 냉장고 안쪽에 오래 보관하지 마십시오. 하나씩 신문지에 싸서 그늘진 서늘한 실온에 보관하십시오.',
          zh: '对低温极其敏感. 请勿长期放在冷藏室深处. 建议用报纸单独包裹, 存放在凉爽避光的常温下。',
          es: 'Sensible al frío. Envuelva individualmente en periódico y guarde en una despensa fresca y sombreada.',
          fr: 'Très sensible au froid. Enveloppez de journal et stockez dans un placard frais et ombragé.',
          de: 'Kälteempfindlich. Einzeln in Zeitung wickeln und an einem kühlen, schattigen Ort lagern.',
          pt: 'Sensível ao frio. Embrulhe individualmente em jornal e guarde em local fresco e com sombra.',
          id: 'Sangat sensitif terhadap dingin. Bungkus satu per satu dengan koran, simpan di tempat sejuk dan teduh.'
        },
        sources: [
          'RDA'
        ]
      },
      fridge: {
        durationDays: 3,
        tips: {
          ko: '냉장 보관이 필요할 때는 신문지에 감싸 야채칸(비교적 온도가 높은 곳)에 두고 2~3일 내로 신속히 드세요.',
          en: 'If you must refrigerate, wrap in newspaper and keep in the crisper drawer; use within 3 days.',
          ja: '冷蔵保存が必要な際は, 新聞紙に包んで野菜室（比較的温度の高い所）に入れ, 2〜3日中に消費してください。',
          zh: '若必须冷藏, 请用报纸包裹放入蔬菜室（温度相对较高处）, 并在2-3天内迅速用完。',
          es: 'Si debe refrigerar, envuelva en periódico y guarde en el cajón de verduras; consuma en 3 días.',
          fr: 'Si vous devez réfrigérer, enveloppez de journal au bac à légumes ; consommez sous 3 jours.',
          de: 'Falls Kühlung nötig, in Zeitung wickeln und ins Gemüsefach legen; innerhalb von 3 Tagen verbrauchen.',
          pt: 'Se precisar refrigerar, embrulhe em jornal e guarde na gaveta de vegetais; consuma em até 3 dias.',
          id: 'Jika harus didinginkan, bungkus koran dan taruh di laci sayur; gunakan dalam 3 hari.'
        },
        sources: [
          'RDA'
        ]
      }
    }
  },
  {
    id: 'pumpkin',
    iconImage: '/assets/images/apps/freshself/ingredients/pumpkin.png',
    category: 'vegetable',
    emoji: '🎃',
    isProcessed: false,
    names: {
      ko: '호박 / 단호박',
      en: 'Pumpkin / Squash',
      ja: 'カボチャ',
      zh: '南瓜',
      es: 'Calabaza',
      fr: 'Citrouille',
      de: 'Kürbis',
      pt: 'Abóbora',
      id: 'Labu'
    },
    storage: {
      room: {
        durationDays: 30,
        tips: {
          ko: '자르지 않은 통단호박은 그늘지고 서늘한 상온에 그냥 두어도 한 달 이상 거뜬히 보관 가능합니다.',
          en: 'Whole, uncut squash keeps for over a month in a cool, dark room-temperature pantry.',
          ja: '丸ごとのカボチャは, 直射光를 피한 涼しい常温에 두면 1개월 이상 보관할 수 있습니다.',
          zh: '未切开的整南瓜存放在避光凉爽的常温下, 可轻松保存一个月以上。',
          es: 'Las calabazas enteras duran más de un mes en una despensa fresca y oscura a temperatura ambiente.',
          fr: 'Les courges entières se conservent plus d’un mois dans un placard frais et sombre.',
          de: 'Ganze, ungeschnittene Kürbisse halten sich über einen Monat an einem kühlen, dunklen Ort.',
          pt: 'Abóboras inteiras e sem cortes duram mais de um mês em local fresco e escuro à temperatura ambiente.',
          id: 'Labu utuh yang belum dipotong awet lebih dari sebulan di ruangan sejuk dan gelap.'
        },
        sources: [
          'RDA'
        ]
      },
      fridge: {
        durationDays: 7,
        tips: {
          ko: '칼로 자른 단호박은 씨와 속을 완전히 파낸 뒤(이 부위부터 쉽게 썩음), 단면에 키친타월을 대고 랩으로 감싸 밀폐 보관하세요.',
          en: 'Scoop out seeds and pulp completely as they mold first. Cover cut surfaces with paper towels and wrap tightly.',
          ja: 'カットしたカボチャは種とワタ를 기레우레 くり抜き（여기서 상하기 때문）, 断面에 페이퍼를 대고 랩으로 감싸 밀봉합니다.',
          zh: '切开的南瓜必须挖净瓜瓤和瓜子（此部位极易发霉腐烂）, 用厨房纸贴住切面, 裹紧保鲜膜密封冷藏。',
          es: 'Quite semillas y pulpa por completo ya que se mohean primero. Cubra las zonas cortadas con papel y envuelva.',
          fr: 'Retirez graines et pulpe qui moisissent en premier. Couvrez les coupes de papier absorbant et filmez.',
          de: 'Kerne und Fruchtfleisch komplett entfernen, da sie zuerst schimmeln. Schnittstellen mit Papier abdecken und fest einwickeln.',
          pt: 'Retire as sementes e a polpa completamente, pois mofam primeiro. Cubra os cortes com papel-toalha e embrulhe.',
          id: 'Keruk biji dan serabutnya sampai bersih karena cepat berjamur. Alasi tisu pada potongan lalu bungkus rapat.'
        },
        sources: [
          'RDA'
        ]
      },
      freezer: {
        durationDays: 180,
        tips: {
          ko: '껍질을 벗겨 썰어서 살짝 찌거나 으깬 후, 1회분씩 지퍼백에 얇게 펴서 얼려두면 수프나 이유식 만들 때 편리합니다.',
          en: 'Peel, chop, and steam or puree. Freeze in single-use bags for easy soups or baby food.',
          ja: '껍질을 벗겨 썰어서 살짝 찌거나 으깬 후, 1회분씩 지퍼백에 얇게 펴서 얼려두면 수프나 이유식 만들 때 편리합니다.',
          zh: '去皮切块后蒸熟或捣成泥, 按单次用量装袋平摊冷冻, 方便制作浓汤或辅食。',
          es: 'Pele, pique y cocine al vapor o puré. Congele en porciones para sopas o purés.',
          fr: 'Pelez, coupez et cuisez à la vapeur ou en purée. Congelez en portions pour soupes ou purées.',
          de: 'Schälen, schneiden und dämpfen oder pürieren. In Portionsbeuteln für Suppen oder Brei einfrieren.',
          pt: 'Descasque, corte e cozinhe no vapor ou faça purê. Congele em sacos em porções para sopas ou papinhas.',
          id: 'Kupas, potong, kukus atau haluskan. Bekukan dalam kantong porsi sekali pakai untuk sup atau makanan bayi.'
        },
        sources: [
          'RDA'
        ]
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
        sources: [
          'USDA'
        ]
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
        sources: [
          'USDA'
        ]
      }
    }
  }
];
