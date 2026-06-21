import type { Ingredient } from '../ingredients';

export const vegetableIngredients: Ingredient[] = [
  {
    id: 'green-onion',
    iconImage: '/assets/images/apps/freshself/ingredients/green-onion.png',
    category: 'vegetable',
    emoji: '',
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
        sources: ['RDA']
      },
      fridge: {
        durationDays: 14,
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
        sources: ['RDA']
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
        sources: ['RDA']
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
        sources: ['RDA', 'FSA']
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
        sources: ['RDA', 'USDA', 'FSA']
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
        sources: ['MFDS', 'RDA', 'FSA']
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
        sources: ['RDA', 'FSA']
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
        sources: ['RDA']
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
        sources: ['RDA', 'USDA']
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
        sources: ['RDA']
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
        sources: ['USDA']
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
        sources: ['USDA']
      }
    }
  },
  {
    id: 'lettuce',
    iconImage: '/assets/images/apps/freshself/ingredients/lettuce.png',
    category: 'vegetable',
    emoji: '',
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
        sources: ['MFDS', 'RDA', 'EFSA', 'FSA']
      }
    }
  },
  {
    id: 'spinach',
    iconImage: '/assets/images/apps/freshself/ingredients/spinach.png',
    category: 'vegetable',
    emoji: '',
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
        sources: ['RDA', 'EFSA', 'FSA']
      }
    }
  },
  {
    id: 'cabbage',
    iconImage: '/assets/images/apps/freshself/ingredients/cabbage.png',
    category: 'vegetable',
    emoji: '',
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
        sources: ['RDA', 'EFSA', 'FSA']
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
        sources: ['RDA', 'USDA']
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
        sources: ['RDA', 'USDA']
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
        sources: ['RDA']
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
        sources: ['RDA']
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
        sources: ['RDA', 'USDA', 'EFSA', 'FSA']
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
        sources: ['RDA', 'USDA']
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
        sources: ['RDA']
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
        sources: ['RDA']
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
        sources: ['RDA']
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
        sources: ['RDA']
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
        sources: ['RDA']
      }
    }
  },
  {
    id: 'radish',
    iconImage: '/assets/images/apps/freshself/ingredients/radish.png',
    category: 'vegetable',
    emoji: '',
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
        sources: ['RDA']
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
        sources: ['RDA']
      }
    }
  },
  {
    id: 'bean-sprouts',
    iconImage: '/assets/images/apps/freshself/ingredients/bean-sprouts.png',
    category: 'vegetable',
    emoji: '',
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
        sources: ['RDA']
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
        sources: ['RDA']
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
        sources: ['RDA']
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
        sources: ['RDA']
      }
    }
  },
  {
    id: 'pumpkin',
    iconImage: '/assets/images/apps/freshself/ingredients/pumpkin.png',
    category: 'vegetable',
    emoji: '',
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
        sources: ['RDA']
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
        sources: ['RDA']
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
        sources: ['RDA']
      }
    }
  },
  {
    id: 'corn',
    category: 'vegetable',
    emoji: '🌽',
    isProcessed: false,
    searchKeywords: {
      ko: ['옥수수', '찰옥수수', '초당옥수수', '옥수수보관'],
      en: ['corn', 'sweet corn', 'corn on the cob'],
      ja: ['トウモロコシ', 'とうもろこし'],
      zh: ['玉米', '苞米']
    },
    names: {
      ko: '옥수수',
      en: 'Corn',
      ja: 'トウモロコシ',
      zh: '玉米',
      es: 'Maíz',
      fr: 'Maïs',
      de: 'Mais',
      pt: 'Milho',
      id: 'Jagung'
    },
    storage: {
      fridge: {
        durationDays: 3,
        tips: {
          ko: '껍질을 벗기지 않은 상태로 신문지로 싸서 지퍼백에 밀봉 보관하되, 당도가 빠르게 떨어지므로 3일 이내에 드세요.',
          en: 'Store unpeeled, wrap in newspaper, and seal in zipper bags. Sugars drop quickly; consume within 3 days.',
          ja: '껍질을 벗기지 않은 채 신문지에 싸서 지퍼백에 밀봉한 후 냉장 보관하되 3일 안에 다 드셔야 본연의 단맛을 즐길 수 있습니다.',
          zh: '保留外皮，用报纸包裹并密封在密封袋中冷藏。因糖分流失快，请在3天内食用。',
          es: 'Guarde con cáscara wrapped en papel y selle en bolsas. El dulce baja rápido; consuma en 3 días.',
          fr: 'Conservez avec les feuilles enveloppé de journal dans un sachet. Le sucre baisse vite, consommez sous 3 jours.',
          de: 'Ungeschält in Zeitung wickeln und in Beuteln versiegeln. Der Zuckergehalt sinkt schnell; in 3 Tagen verzehren.',
          pt: 'Guarde com casca embrulhado in jornal e selado no saco. O açúcar diminui rápido; consuma em até 3 dias.',
          id: 'Simpan tanpa dikupas, bungkus koran, segel dalam kantong. Manis cepat hilang; konsumsi dalam 3 hari.'
        },
        sources: ['USDA', 'MFDS']
      },
      freezer: {
        durationDays: 365,
        tips: {
          ko: '구매 즉시 삶거나 찐 후 충분히 식혀서 1개씩 랩으로 밀착 포장해 냉동하세요. 해동 없이 그대로 쪄내면 처음 식감 그대로 드실 수 있습니다.',
          en: 'Steam or boil immediately after purchase, cool completely, wrap individually in wrap, and freeze. Re-steam directly without thawing.',
          ja: '수확/구매 당일에 즉시 삶거나 찐 후 완전히 식혀 1개씩 랩으로 포장해 냉동하세요. 해동 없이 찜통에 바로 쪄내면 식감이 쫄깃합니다.',
          zh: '购买后立即煮熟或蒸熟，彻底晾凉，逐个用保鲜膜裹紧冷冻。食用时无需解冻，直接重新蒸一下即可恢复原口感。',
          es: 'Hierva o cueza al vapor tras comprar, enfríe bien, envuelva individual con film y congele. Vuelva a cocer al vapor sin descongelar.',
          fr: 'Cuisez à la vapeur ou à l’eau après achat, refroidissez bien, filmez individuellement et congelez. Recuisez sans décongeler.',
          de: 'Nach dem Kauf direkt garen, komplett abkühlen lassen, einzeln einwickeln und gefrieren. Ohne Auftauen direkt wieder aufdämpfen.',
          pt: 'Cozinhe ou asse logo após comprar, esfrie bem, embrulhe individual em filme e congele. Cozinhe de novo sem descongelar.',
          id: 'Segera rebus setelah dibeli, dinginkan, bungkus rapat, lalu bekukan. Kukus kembali tanpa dicairkan untuk rasa awal.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'celery',
    iconImage: '/assets/images/apps/freshself/ingredients/celery.png',
    category: 'vegetable',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['샐러리', '셀러리', '야채보관', '샐러리보관', '침수보관'],
      en: ['celery', 'celery stalks', 'celery sticks'],
      ja: ['セロリ', 'せろり'],
      zh: ['芹菜', '西芹']
    },
    names: {
      ko: '샐러리',
      en: 'Celery',
      ja: 'セロリ',
      zh: '芹菜',
      es: 'Apio',
      fr: 'Céleri',
      de: 'Sellerie',
      pt: 'Aipo / Salsão',
      id: 'Seledri'
    },
    storage: {
      fridge: {
        durationDays: 14,
        tips: {
          ko: '수분 보존이 핵심입니다. 줄기를 잘라 밀폐용기에 담고 찬물을 부어 푹 잠기게 냉장고 채소칸에 보관하면 2주 동안 아삭함이 유지됩니다. 물은 2~3일에 한 번씩 갈아주세요.',
          en: 'Moisture retention is key. Cut stalks, submerge fully in cold water in an airtight container, and store in the crisper drawer. Keeps crisp for 2 weeks. Change water every 2–3 days.',
          ja: '줄기를 썰어 밀폐용기에 찬물과 함께 푹 잠기게 담아 채소칸에 보관하면 아삭함이 오래 유지됩니다. 물은 2~3일마다 한 번씩 교체하세요.',
          zh: '保水是关键。将芹菜切段，完全浸泡在装有冷水的密封容器中，存放在蔬菜室。可保持爽脆2周。每2-3天换一次水。',
          es: 'Mantener la humedad es clave. Trocee, sumerja en agua fría en envase hermético y guarde en el cajón. Sigue crujiente 2 semanas. Cambie agua cada 2-3 días.',
          fr: 'L’humidité est la clé. Coupez les branches, immergez-les dans l’eau froide en boîte étanche au bac à légumes. Reste croquant 2 semaines. Changez l’eau tous les 2-3 jours.',
          de: 'Feuchtigkeitserhalt ist entscheidend. Stangen schneiden, komplett in kaltes Wasser gelegt in Dosen im Gemüsefach lagern. Bleibt 2 Wochen knackig. Wasser alle 2–3 Tage wechseln.',
          pt: 'Manter a umidade é fundamental. Corte os talos, submerja em água fria em pote fechado e guarde na gaveta. Fica crocante por 2 semanas. Troque a água a cada 2-3 dias.',
          id: 'Menjaga air adalah kunci. Potong seledri, rendam air dingin di wadah kedap, taruh laci sayur. Renyah 2 minggu. Ganti air tiap 2-3 hari.'
        },
        sources: ['USDA']
      }
    }
  },
  {
    id: 'korean-zucchini',
    iconImage: '/assets/images/apps/freshself/ingredients/korean-zucchini.png',
    category: 'vegetable',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['애호박', '풋호박', '호박보관', '조각호박'],
      en: ['korean zucchini', 'zucchini', 'squash'],
      ja: ['ズッキーニ', 'エホバク', 'かぼちゃ'],
      zh: ['西葫芦', '角瓜']
    },
    names: {
      ko: '애호박',
      en: 'Korean Zucchini',
      ja: 'ズッキーニ / エホバク',
      zh: '西葫芦',
      es: 'Calabacín coreano',
      fr: 'Courgette coréenne',
      de: 'Koreanische Zucchini',
      pt: 'Abobrinha coreana',
      id: 'Zucchini korea'
    },
    storage: {
      fridge: {
        durationDays: 5,
        tips: {
          ko: '사용 후 남은 조각 애호박은 자른 단면 물기를 닦고 키친타월을 밀착시켜 감싼 뒤 랩으로 완전 진공 밀봉하여 보관해야 3~5일간 물러지지 않습니다.',
          en: 'Dry cut surface, wrap tightly with a paper towel, and seal completely with plastic wrap. Keeps fresh for 3–5 days without rotting.',
          ja: '남은 애호박 조각은 자른 단면의 물기를 닦고 키친타월을 대어 랩으로 완전히 감싸 밀폐 보관해야 물러짐을 늦출 수 있습니다.',
          zh: '用剩的西葫芦块，需擦干切面水分并用厨房纸贴紧包裹，用保鲜膜真空密封般裹好，可防止3-5天内腐烂。',
          es: 'Seque la superficie de corte, envuelva con papel de cocina y selle con film hermético. Evita daños en 3–5 días.',
          fr: 'Séchez la coupe, enveloppez de papier essuie-tout et filmez hermétiquement sans air. Se conserve 3 à 5 jours.',
          de: 'Schnittfläche trocken tupfen, Küchenpapier andrücken und fest in Folie wickeln. Bleibt 3–5 Tage frisch.',
          pt: 'Seque a área de corte, cubra com papel-toalha e envolva em filme plástico a vácuo. Mantém por até 5 dias.',
          id: 'Keringkan bekas potongan, alas tisu, lalu bungkus plastik wrap rapat. Awet 3-5 hari tanpa membusuk.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'enoki-mushroom',
    iconImage: '/assets/images/apps/freshself/ingredients/enoki-mushroom.png',
    category: 'vegetable',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['팽이버섯', '팽이', '버섯보관', '영양소농축', '키토산'],
      en: ['enoki mushroom', 'golden needle mushroom', 'enoki'],
      ja: ['えのき茸', 'エノキ', 'えのき'],
      zh: ['金针菇', '构菌']
    },
    names: {
      ko: '팽이버섯',
      en: 'Enoki Mushroom',
      ja: 'えのき茸 / エノキ',
      zh: '金针菇',
      es: 'Seta enoki',
      fr: 'Enoki',
      de: 'Enoki-Pilz',
      pt: 'Cogumelo enoki',
      id: 'Jamur enoki'
    },
    storage: {
      fridge: {
        durationDays: 4,
        tips: {
          ko: '씻지 말고 포장 봉지 그대로 겉을 키친타월로 가볍게 싸서 채소실에 세워 보관하며 3~4일 내에 드세요. 물기가 닿으면 금방 물러집니다.',
          en: 'Do not wash. Keep in original bag, wrap in paper towels, and store upright in the crisper drawer. Use in 3–4 days.',
          ja: '씻지 않은 채로 포장 비닐째 키친타월로 감싸 채소칸에 세워서 보관하며 3~4일 안에 다 드셔야 신선합니다.',
          zh: '请勿清洗。保留原袋，用厨房纸包在外面，竖立存放在蔬菜室中。在3-4天内食用完。极怕潮湿。',
          es: 'No lave. Conserve en su bolsa, envuelva en papel de cocina y guarde de pie en el cajón. Use en 3-4 días.',
          fr: 'Ne lavez pas. Laissez dans le sachet, enveloppez de papier absorbant et stockez debout. Consommez sous 3-4 jours.',
          de: 'Nicht waschen. In Originalverpackung belassen, Küchenpapier drumwickeln und aufrecht kühlen. In 3-4 Tagen verbrauchen.',
          pt: 'Não lave. Mantenha no saco, envolva em papel-toalha e guarde em pé na gaveta. Consuma em até 4 dias.',
          id: 'Jangan cuci. Biarkan di kemasan, alas tisu, lalu taruh tegak di laci sayur. Gunakan dalam 3-4 hari.'
        },
        sources: ['USDA', 'MFDS']
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '밑동을 잘라 찢어 지퍼백에 냉동 보관하면 감칠맛(구아닐산)이 올라갑니다. 요리할 때 해동 없이 즉시 넣으면 식감이 아삭합니다.',
          en: 'Cut roots, shred, and freeze in bags. Freezing boosts flavor (guanylic acid). Add directly to dishes while cooking without thawing.',
          ja: '밑동을 잘라내 찢어서 냉동 보관하면 감칠맛(구아닐산)이 훨씬 우러납니다. 요리할 때 해동 없이 바로 국에 넣으면 아삭합니다.',
          zh: '切除根部并撕开,放入密封袋中冷冻,可提升甘甜口感（鸟苷酸）。烹饪时无需解冻，直接加入可保持爽脆。',
          es: 'Corte raíces, deshebre y congele. Congelar resalta el sabor (ácido guanílico). Añada directo al cocinar sin descongelar.',
          fr: 'Coupez les pieds, effeuillez et congelez. Cela libère plus de saveurs. Jetez-les directement congelés dans vos cuissons.',
          de: 'Strunck abschneiden, zerteilen und einfrieren. Gefrieren steigert das Aroma (Guanylsäure). Direkt gefroren verwenden.',
          pt: 'Corte a base, desfie e congele. Congelar realça o sabor (ácido guanílico). Adicione direto nas receitas sem descongelar.',
          id: 'Potong pangkal, suwir, lalu bekukan. Bekukan meningkatkan rasa (asam guanilat). Langsung masak tanpa dicairkan.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'bok-choy',
    iconImage: '/assets/images/apps/freshself/ingredients/bok-choy.png',
    category: 'vegetable',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['청경채', '샤브샤브', '청경채보관', '마라탕야채'],
      en: ['bok choy', 'pak choi', 'chinese cabbage'],
      ja: ['チンゲンサイ', '青梗菜'],
      zh: ['青梗菜', '上海青', '油菜']
    },
    names: {
      ko: '청경채',
      en: 'Bok Choy',
      ja: 'チンゲンサイ',
      zh: '青梗菜',
      es: 'Col china pak choi',
      fr: 'Pak choï',
      de: 'Pak Choi',
      pt: 'Acelga-chinesa',
      id: 'Sawi sendok'
    },
    storage: {
      fridge: {
        durationDays: 7,
        tips: {
          ko: '씻지 말고 이물질만 털어 신문지에 싸서 지퍼백에 담아 통기 구멍을 내세요. 뿌리 밑동이 아래로 향하게 세워 보관해야 오래 갑니다.',
          en: 'Do not wash. Shake off dirt, wrap in newspaper, place in a bag, and poke air holes. Store standing upright with roots down.',
          ja: '씻지 않고 흙을 턴 뒤 신문지에 싸서 비닐팩에 구멍을 뚫어 보관하세요. 뿌리가 아래를 향하게 수직으로 세워 보관해야 합니다.',
          zh: '请勿清洗。仅抖落杂质，用报纸包裹放入袋中并戳出通风孔。将根部朝下竖立存放能保持更久。',
          es: 'No lave. Sacuda la tierra, envuelva en papel, ponga en bolsa con agujeros. Guarde de pie con raíces hacia abajo.',
          fr: 'Ne lavez pas. Secouez la terre, enveloppez de journal, mettez en sachet percé. Stockez debout, racines vers le bas.',
          de: 'Nicht waschen. Erde abklopfen, in Zeitung wickeln, in gelöcherte Beutel legen. Aufrecht mit dem Strunk nach unten lagern.',
          pt: 'Não lave. Sacuda a sujeira, embrulhe em jornal e coloque no saco com furos. Guarde em pé com as raízes para baixo.',
          id: 'Jangan cuci. Bersihkan tanah, bungkus koran, masukkan kantong berlubang. Simpan tegak dengan akar di bawah.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'perilla-leaf',
    iconImage: '/assets/images/apps/freshself/ingredients/perilla-leaf.png',
    category: 'vegetable',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['깻잎', '깻잎보관', '들깨잎', '쌈채소'],
      en: ['perilla leaf', 'perilla leaves', 'shiso', 'sesame leaf'],
      ja: ['エゴマの葉', 'えごまの葉', 'エゴマ'],
      zh: ['苏子叶', '芝麻叶', '紫苏叶']
    },
    names: {
      ko: '깻잎',
      en: 'Perilla Leaf',
      ja: 'エゴマの葉',
      zh: '苏子叶',
      es: 'Hoja de perilla',
      fr: 'Feuille de pérille',
      de: 'Perillablatt',
      pt: 'Folha de perila',
      id: 'Daun perila'
    },
    storage: {
      fridge: {
        durationDays: 14,
        tips: {
          ko: '물기를 닦고 꼭지 부분을 아래로 하여 키친타월로 감싸 지퍼백에 세워 냉장 보관하세요. 건조를 막아 2주간 신선합니다.',
          en: 'Dry surface moisture, wrap stems down in paper towels, and store upright in a zipper bag. Stays fresh for 2 weeks.',
          ja: '水気を拭き取り、茎を下にしてキッチンペーパーで包み、保存袋に立てて冷蔵保管します。2週間新鮮に保てます。',
          zh: '擦干水分，将叶柄朝下用厨房纸包裹，放入密封袋中竖立冷藏。可防止干燥并保持2周新鲜。',
          es: 'Seque la humedad, envuelva los tallos hacia abajo en papel y guárdelos verticalmente en una bolsa. Dura fresco 2 semanas.',
          fr: 'Séchez l’humidité, enveloppez les tiges vers le bas dans du papier et stockez debout. Reste frais 2 semaines.',
          de: 'Feuchtigkeit abtrocknen, Stiele nach unten in Küchenpapier wickeln und aufrecht im Beutel lagern. Bleibt 2 Wochen frisch.',
          pt: 'Seque a umidade, embrulhe os cabos para baixo em papel-toalha e guarde em pé. Mantém-se fresco por 2 semanas.',
          id: 'Keringkan air, bungkus tangkai di bawah dengan tisu, lalu simpan tegak di kantong. Segar selama 2 minggu.'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'garlic-chives',
    iconImage: '/assets/images/apps/freshself/ingredients/garlic-chives.png',
    category: 'vegetable',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['부추', '솔부추', '영양부추', '부추보관'],
      en: ['garlic chives', 'chives', 'chinese chives'],
      ja: ['ニラ', 'にら', '韮'],
      zh: ['韭菜', '洋韭菜']
    },
    names: {
      ko: '부추',
      en: 'Garlic Chives',
      ja: 'ニラ',
      zh: '韭菜',
      es: 'Cebollino de ajo',
      fr: 'Ciboulette chinoise',
      de: 'Knoblauch-Schnittlauch',
      pt: 'Nirá',
      id: 'Kucai'
    },
    storage: {
      fridge: {
        durationDays: 7,
        tips: {
          ko: '수분에 매우 약하므로 씻지 말고 키친타월로 감싸 지퍼백에 세워서 보관하세요. 눕혀두면 자체 무게로 쉽게 짓무릅니다.',
          en: 'Very sensitive to moisture. Wrap unwashed in paper towels and store upright in a bag. Lying flat causes bruising under its own weight.',
          ja: '水分に非常に弱いため、洗わずにペーパーで包み、袋に立てて保管します。横にすると自重で傷みやすくなります。',
          zh: '极易受潮。请勿冲洗，用厨房纸包裹并竖立存放在袋中。平放会因自身重量而压烂。',
          es: 'Sensible a la humedad. No lave, envuelva en papel y guarde vertical en bolsa. Acostado se daña fácil por su propio peso.',
          fr: 'Très sensible à l’humidité. Ne lavez pas, enveloppez de papier et stockez debout. À plat, il s’écrase sous son propre poids.',
          de: 'Sehr feuchtigkeitsempfindlich. Ungewaschen in Küchenpapier wickeln und aufrecht lagern. Liegend zerdrückt es sich leicht.',
          pt: 'Muito sensível à umidade. Não lave, embrulhe em papel-toalha e guarde em pé. Deitar as folhas faz com que amassem e estraguem.',
          id: 'Sangat sensitif lembap. Jangan cuci, bungkus tisu, simpan tegak di kantong. Menyimpan mendatar membuatnya mudah busuk.'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'napa-cabbage',
    category: 'vegetable',
    emoji: '🥬',
    isProcessed: false,
    searchKeywords: {
      ko: ['배추', '통배추', '쌈배추', '알배기배추', '배추보관'],
      en: ['napa cabbage', 'chinese cabbage', 'cabbage'],
      ja: ['白菜', 'はくさい', 'ハクサイ'],
      zh: ['大白菜', '白菜', '黄芽菜']
    },
    names: {
      ko: '배추',
      en: 'Napa Cabbage',
      ja: '白菜',
      zh: '白菜',
      es: 'Col china',
      fr: 'Chou chinois',
      de: 'Chinakohl',
      pt: 'Acelga',
      id: 'Sawi putih'
    },
    storage: {
      fridge: {
        durationDays: 30,
        tips: {
          ko: '씻지 않은 상태에서 신문지에 포장한 뒤 뿌리가 아래로 향하도록 세워 야채칸에 보관하세요. 손질한 배추는 밀봉 후 7일 이내에 드세요.',
          en: 'Wrap unwashed cabbage in newspaper and store upright with roots down in the crisper. Cut cabbage should be sealed and consumed in 7 days.',
          ja: '洗わずに新聞紙で包み、根を下にして野菜室に立てて保管します。カットした白菜は密閉して7日以内に召し上がりください。',
          zh: '请勿淘洗，用报纸包裹并将根部朝下竖立在蔬菜抽屉中。切开的白菜请密封并在7天内食用。',
          es: 'Envuelva sin lavar en papel y guarde vertical con la raíz hacia abajo. Una vez cortada, selle y consuma en 7 días.',
          fr: 'Enveloppez sans laver de journal et stockez debout, racine vers le bas. Coupé, fermez hermétiquement et consommez sous 7 jours.',
          de: 'Ungewaschen in Zeitung wickeln und mit dem Strunk nach unten aufrecht lagern. Geschnittener Kohl luftdicht verpacken und in 7 Tagen verbrauchen.',
          pt: 'Embrulhe sem lavar em jornal e guarde em pé com a raiz para baixo. Se cortada, sele e consuma em até 7 dias.',
          id: 'Bungkus tanpa dicuci dengan koran, simpan tegak dengan akar di bawah di laci sayur. Sawi potong harus disegel dan digunakan dalam 7 hari.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'iceberg-lettuce',
    iconImage: '/assets/images/apps/freshself/ingredients/iceberg-lettuce.png',
    category: 'vegetable',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['양상추', '샐러드채소', '양상추보관'],
      en: ['iceberg lettuce', 'lettuce', 'salad greens'],
      ja: ['レタス', 'たまレタス'],
      zh: ['生菜', '结球生菜', '卷心生菜']
    },
    names: {
      ko: '양상추',
      en: 'Iceberg Lettuce',
      ja: 'レタス',
      zh: '生菜',
      es: 'Lechuga iceberg',
      fr: 'Laitue iceberg',
      de: 'Eisbergsalat',
      pt: 'Alface americana',
      id: 'Selada iceberg'
    },
    storage: {
      fridge: {
        durationDays: 10,
        tips: {
          ko: '씻지 말고 심지 부분에 젖은 키친타월을 댄 뒤 통째로 랩으로 팽팽하게 감싸 보관하세요. 칼이 닿으면 단면이 갈변하므로 손으로 뜯어 조리하세요.',
          en: 'Do not wash. Cover the stem core with a damp paper towel and wrap tightly in plastic wrap. Hand-tear to prevent browning caused by metal knives.',
          ja: '洗わずに芯の部分に濡らしたペーパーをあて、丸ごとラップで包んで保管します。刃物が触れると切り口が変色するため手でちぎってください。',
          zh: '请勿冲洗。在根茎切口处贴上湿厨房纸，然后用保鲜膜将整颗紧紧包裹。用手撕开可防止因金属刀切导致的断面变褐。',
          es: 'No lave. Cubra el tallo con papel húmedo y envuelva firme con film. Corte con la mano, el metal del cuchillo la oxida.',
          fr: 'Ne lavez pas. Placez du papier humide sur le trognon et filmez serré. Déchirez à la main pour éviter l’oxydation due au couteau.',
          de: 'Ungewaschen den Strunk mit feuchtem Papier bedecken und fest in Folie wickeln. Von Hand zupfen, da Metallmesser braune Ränder verursachen.',
          pt: 'Não lave. Cubra o talo com papel-toalha úmido e embrulhe firme em filme plástico. Rasgue com as mãos para evitar que escureça com faca.',
          id: 'Jangan cuci. Tutup bagian batang dengan tisu basah, lalu bungkus rapat plastik wrap. Robek dengan tangan agar tidak cokelat karena pisau.'
        },
        sources: ['USDA']
      }
    }
  },
  {
    id: 'asparagus',
    iconImage: '/assets/images/apps/freshself/ingredients/asparagus.png',
    category: 'vegetable',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['아스파라거스', '그린아스파라거스', '아스파라거스보관'],
      en: ['asparagus', 'green asparagus'],
      ja: ['アスパラガス', 'アスパラ'],
      zh: ['芦笋', '绿芦笋']
    },
    names: {
      ko: '아스파라거스',
      en: 'Asparagus',
      ja: 'アスパラガス',
      zh: '芦笋',
      es: 'Espárrago',
      fr: 'Asperge',
      de: 'Spargel',
      pt: 'Aspargo',
      id: 'Aparagus'
    },
    storage: {
      fridge: {
        durationDays: 4,
        tips: {
          ko: '밑동을 살짝 자르고 찬물을 조금 담은 컵에 세워 꽂은 후 비닐봉지를 씌워 냉장 보관하세요. 수분 유지가 핵심입니다.',
          en: 'Trim ends slightly, stand upright in a glass with a little cold water, cover with a plastic bag, and refrigerate. Moisture retention is key.',
          ja: '根元を少し切り落とし、冷水を少し入れたコップに立てて入れ、袋をかぶせて冷蔵保管します。水分の維持が鍵です。',
          zh: '切除根部末端，竖立放入装有少许冷水的分装杯中，罩上塑料袋冷藏。保持水分是关键。',
          es: 'Corte un poco la base, colóquelos de pie en un vaso con agua fría, cubra con una bolsa y refrigere. Mantener la humedad es clave.',
          fr: 'Coupez légèrement la base, placez debout dans un verre d’eau froide, couvrez d’un sachet et réfrigérez. Garder l’humidité est essentiel.',
          de: 'Enden leicht abschneiden, aufrecht in ein Glas mit etwas kaltem Wasser stellen, Plastikbeutel darüberstülpen und kühlen. Feuchtigkeitserhalt ist wichtig.',
          pt: 'Corte a base levemente, coloque em pé em um copo com água fria, cubra com um saco plástico e refrigere. Manter a umidade é a chave.',
          id: 'Potong sedikit bagian bawah, berdirikan di gelas berisi sedikit air dingin, tutup kantong plastik, lalu masukkan kulkas. Lembap adalah kunci.'
        },
        sources: ['USDA', 'FSA']
      },
      freezer: {
        durationDays: 150,
        tips: {
          ko: '끓는 물에 30초~1분간 데친 후 찬물에 식혀 물기를 완전히 말립니다. 지퍼백에 평평하게 담아 급속 냉동하세요.',
          en: 'Blanch in boiling water for 30–60s, cool in ice water, dry completely, lay flat in a bag, and freeze.',
          ja: '沸騰したお湯で30秒〜1分下茹でし、冷水で冷まして水気を完全に拭き取ります。袋に平らに入れて冷凍します。',
          zh: '在沸水中焯水30-60秒，用冰水冷却，彻底擦干水分。平整地放入密封袋中冷冻。',
          es: 'Blanquee en agua hirviendo 30-60s, enfríe en agua helada, seque bien, coloque plano en una bolsa y congele.',
          fr: 'Blanchissez 30 à 60s à l’eau bouillante, refroidissez à l’eau glacée, séchez bien, étalez à plat dans un sachet et congelez.',
          de: '30–60 Sek. in kochendem Wasser blanchieren, in Eiswasser abschrecken, komplett trocknen, flach in Beutel legen und gefrieren.',
          pt: 'Branqueie em água fervente por 30-60s, resfrie em água gelada, seque bem, coloque plano no saco e congele.',
          id: 'Rebus 30-60 detik, dinginkan di air es, keringkan airnya, susun rata di kantong plastik, lalu bekukan.'
        },
        sources: ['USDA', 'FSA']
      }
    }
  },
  {
    id: 'mung-bean-sprouts',
    iconImage: '/assets/images/apps/freshself/ingredients/mung-bean-sprouts.png',
    category: 'vegetable',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['숙주나물', '숙주', '녹두나물', '나물보관'],
      en: ['mung bean sprouts', 'bean sprouts', 'sprouts'],
      ja: ['もやし', '緑豆もやし', 'モヤシ'],
      zh: ['绿豆芽', '豆芽', '牙菜']
    },
    names: {
      ko: '숙주나물',
      en: 'Mung Bean Sprouts',
      ja: 'もやし',
      zh: '绿豆芽',
      es: 'Brotes de soja verde',
      fr: 'Pousses de haricot mungo',
      de: 'Mungbohnensprossen',
      pt: 'Broto de feijão',
      id: 'Toge kacang hijau'
    },
    storage: {
      fridge: {
        durationDays: 3,
        tips: {
          ko: '밀폐용기에 숙주가 완전히 잠기도록 찬물을 부어 보관하고 물은 매일 갈아주세요. 공기 접촉을 차단해야 갈변과 무름을 막을 수 있습니다.',
          en: 'Submerge sprouts fully in cold water in an airtight container and change water daily. Blocking air contact prevents browning and rot.',
          ja: '密閉容器にもやしが完全に浸るよう冷水を注いで保管し、水は毎日交換します。空気に触れさせないことで変色と傷みを防ぎます。',
          zh: '将豆芽完全浸泡在装有冷水的密封容器中，每天换水。隔绝空气接触可防止变褐和发烂。',
          es: 'Sumerja por completo en agua fría en un recipiente hermético y cambie el agua a diario. Evitar el aire previene que se oxiden y pudran.',
          fr: 'Immergez complètement dans de l’eau froide en boîte étanche et changez l’eau chaque jour. Éviter l’air empêche le brunissement.',
          de: 'Sprossen komplett in kaltes Wasser in einer Dose einlegen, Wasser täglich wechseln. Luftkontakt meiden, um Fäulnis zu verhindern.',
          pt: 'Submirja os brotos totalmente em água fria em um pote hermético e troque a água diariamente. Evitar o ar previne o escurecimento.',
          id: 'Rendam toge sepenuhnya dalam air dingin di wadah kedap, ganti air setiap hari. Mencegah kontak udara menjaga warna tetap putih.'
        },
        sources: ['USDA', 'MFDS', 'WHO']
      }
    }
  }
];
