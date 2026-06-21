import type { Ingredient } from '../ingredients';

export const seafoodIngredients: Ingredient[] = [
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
        sources: ['USDA', 'MFDS']
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
        sources: ['USDA', 'MFDS']
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
        sources: ['NIFS', 'USDA']
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
        sources: ['NIFS', 'USDA']
      }
    }
  },
  {
    id: 'clam',
    iconImage: '/assets/images/apps/freshself/ingredients/clam.png',
    category: 'seafood',
    emoji: '',
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
        sources: ['MFDS', 'USDA']
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
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'salmon',
    iconImage: '/assets/images/apps/freshself/ingredients/salmon.png',
    category: 'seafood',
    emoji: '',
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
        sources: ['NIFS', 'USDA']
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
        sources: ['NIFS', 'USDA']
      }
    }
  },
  {
    id: 'anchovy',
    iconImage: '/assets/images/apps/freshself/ingredients/anchovy.png',
    category: 'seafood',
    emoji: '',
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
        sources: ['MFDS', 'USDA']
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
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'fish-cake',
    iconImage: '/assets/images/apps/freshself/ingredients/fish-cake.png',
    category: 'seafood',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['어묵', '오뎅', '가공생선', '사각어묵', '어묵보관'],
      en: ['fish cake', 'fish cakes', 'odeng'],
      ja: ['練り물', 'かまぼこ', 'おでん'],
      zh: ['鱼饼', '鱼丸']
    },
    names: {
      ko: '어묵',
      en: 'Fish Cake',
      ja: '練り物',
      zh: '鱼饼',
      es: 'Pastel de pescado',
      fr: 'Gâteau de poisson',
      de: 'Fischkuchen',
      pt: 'Bolo de peixe',
      id: 'Bakso ikan'
    },
    storage: {
      fridge: {
        durationDays: 5,
        tips: {
          ko: '수분과 단백질이 많아 쉽게 상합니다. 개봉 전에는 7일 정도 가능하지만, 개봉 후에는 밀폐용기에 소분해 담아 2~3일 이내에 드세요.',
          en: 'High moisture and protein make it spoil easily. Can last 7 days unopened, but store in airtight containers and consume in 2–3 days once opened.',
          ja: '水分と蛋白質が多く傷みやすいため,開封前は7日ほど保ちますが,開封後は密폐容器に小分けにし2〜3日 yard にお召し上がりください。',
          zh: '高水分和高蛋白质极易腐烂。未开封时可保存7天，开封后请分装入密封容器中并在2-3天内食用完毕。',
          es: 'Se daña rápido por la humedad y proteína. Dura 7 days cerrado, pero una vez abierto consuma en 2-3 días en recipiente hermético.',
          fr: 'S’altère vite en raison de l’humidité et des protéines. Se conserve 7 jours fermé, mais consommez sous 2-3 jours après ouverture.',
          de: 'Verdirbt durch hohen Feuchtigkeits- und Proteingehalt schnell. Ungeöffnet 7 Tage haltbar, geöffnet luftdicht verpacken und in 2-3 Tagen verbrauchen.',
          pt: 'Estraga rápido devido à alta umidade e proteína. Dura até 7 dias fechado, mas consuma em até 3 dias após aberto.',
          id: 'Mudah busuk karena tinggi air dan protein. Awet 7 hari saat tertutup, tapi konsumsi dalam 2-3 hari di wadah kedap setelah dibuka.'
        },
        sources: ['MFDS', 'USDA']
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '지퍼백에 1회 조리 분량씩 소분하여 냉동하며, 조리할 때 끓는 물에 살짝 데치면 불순물이 제거되고 위생적입니다.',
          en: 'Portion into small bags and freeze. Blanching in boiling water before cooking removes oil and is more hygienic.',
          ja: '保存袋に1回分ずつ小分けにして冷凍し,調理する際に沸騰したお湯でさっと下茹ですると여분나油分が抜け衛生的です。',
          zh: '分装在密封袋中冷冻。烹饪前用沸水轻轻焯一下，可以去除多余油分且更加卫生。',
          es: 'Divida en bolsas y congele. Blanquear en agua hirviendo antes de cocinar elimina el exceso de grasa y es más higiénico.',
          fr: 'Répartissez en portions et congelez. Blanchir à l’eau bouillante avant cuisson élimine l’excès de gras et reste plus sain.',
          de: 'Portionsweise einfrieren. Kurzes Blanchieren in kochendem Wasser vor dem Kochen entfernt überschüssiges Fett und ist hygienischer.',
          pt: 'Divida em sacos e congele. Branquear em água fervente antes de preparar retira o excesso de óleo e é mais higiênico.',
          id: 'Bagi per porsi lalu bekukan. Rebus sebentar di air mendidih sebelum dimasak untuk menghilangkan lemak dan lebih higienis.'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'hairtail',
    iconImage: '/assets/images/apps/freshself/ingredients/hairtail.png',
    category: 'seafood',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['갈치', '생선', '은갈치', '생선보관'],
      en: ['hairtail', 'beltfish', 'largehead hairtail'],
      ja: ['太刀魚', 'タチウオ', 'たちうお'],
      zh: ['带鱼', '裙带鱼']
    },
    names: {
      ko: '갈치',
      en: 'Hairtail',
      ja: '太刀魚',
      zh: '带鱼',
      es: 'Pez sable',
      fr: 'Poisson-sabre',
      de: 'Haarschwanz',
      pt: 'Peixe-sabre',
      id: 'Ikan layur'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '내장을 제거해 씻은 뒤 물기를 키친타월로 완벽히 제거하고, 타월에 감싸 지퍼백에 담아 냉장실 안쪽에 두며 1~2일 내에 조리하세요.',
          en: 'Clean organs, wash, and dry completely with paper towels. Wrap in towels, place in a bag, and cook within 1–2 days.',
          ja: '内臓を取り除いて洗い,水기를 페이퍼로 완전히 닦아냅니다. 페이퍼로 감싸서 봉지에 넣어 냉장고 깊숙이 두고 1~2일 안에 조리하세요.',
          zh: '去内脏洗净，用厨房纸彻底擦干水分。用纸包好放入袋中，存放在冷藏室深处，并在1-2天내烹饪。',
          es: 'Limpie las vísceras, lávela y séquela con papel. Envuélvala en toallas de papel, póngala en una bolsa y cocine en 1-2 días.',
          fr: 'Videz-le, lavez-le et séchez-le bien avec du papier. Enveloppez de papier absorbant, filmez et cuisez sous 1 à 2 jours.',
          de: 'Innereien entfernen, waschen und trocken tupfen. In Küchenpapier gewickelt in Beutel legen und in 1-2 Tagen verbrauchen.',
          pt: 'Limpe as vísceras, lave e seque com papel. Embrulhe em papel-toalha, coloque no saco e prepare em até 2 days.',
          id: 'Buang isi perut, cuci, keringkan dengan tisu. Bungkus tisu, taruh di kantong, masak dalam 1-2 hari.'
        },
        sources: ['MFDS', 'USDA']
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '1회분씩 랩으로 포장하고 토막 사이에 종이호일을 넣어 두면 해동 시 하나씩 떼기 좋습니다. 지퍼백에 이중 밀봉해 얼리세요.',
          en: 'Wrap portions in plastic wrap and place parchment paper between slices for easy separation. Double seal in zipper bags.',
          ja: '1回분씩 랩으로 감싸고 토막 사이에 종이호일을 끼워두면 해동 시 하나씩 떼기 수월합니다. 지퍼백에 이중 밀봉해 냉동 보관하세요.',
          zh: '按每餐分量用保鲜膜包裹，并在鱼段之间垫上烘焙纸以防粘连。装在密封袋中双层密封冷冻。',
          es: 'Envuelva las porciones en film y coloque papel de horno entre rodajas para separarlas fácil. Selle doble en bolsas herméticas.',
          fr: 'Enveloppez les portions dans du film et placez du papier cuisson entre les tranches pour les décoller facilement. Doublez le sachet.',
          de: 'Portionen in Folie wickeln und Backpapier zwischen die Stücke legen, um sie leicht zu trennen. Doppelt in Beutel einschließen.',
          pt: 'Embrulhe as porções em filme e coloque papel-manteiga entre as fatias para facilitar a separação. Sele duplo em sacos.',
          id: 'Bungkus porsi dengan plastik wrap dan beri sekat kertas roti antar potongan agar mudah dilepas. Segel ganda.'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'yellow-croaker',
    iconImage: '/assets/images/apps/freshself/ingredients/yellow-croaker.png',
    category: 'seafood',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['조기', '굴비', '자반조기', '조기보관'],
      en: ['yellow croaker', 'croaker', 'gulbi'],
      ja: ['イシモチ', 'いしもち', '굴비'],
      zh: ['黄花鱼', '小黄鱼']
    },
    names: {
      ko: '조기 / 굴비',
      en: 'Yellow Croaker',
      ja: 'イシモチ',
      zh: '黄花鱼',
      es: 'Corvina amarilla',
      fr: 'Corbine jaune',
      de: 'Gelber Umberfisch',
      pt: 'Corvina amarela',
      id: 'Ikan croaker'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '비늘과 내장을 제거하고 씻어 뱃속 물기까지 완벽히 닦아내세요. 랩으로 1~2마리씩 밀착 감싼 후 지퍼백에 밀봉해 가장 차가운 신선칸에 둡니다.',
          en: 'Remove scales and organs, wash, and dry the inside completely. Wrap 1–2 fish tightly with plastic wrap and store in the coldest drawer.',
          ja: '비늘과 내장을 떼어내고 흐르는 물에 씻은 후 물기를 완벽히 제거하세요. 랩으로 1~2마리씩 싸서 지퍼백에 밀봉한 뒤 가장 차가운 신선칸에 보관합니다.',
          zh: '去鳞和内脏洗净，彻底擦干鱼腹内部水分。按1-2条用保鲜膜紧密包裹，装入密封袋放入冷藏室最冷处。',
          es: 'Retire escamas y vísceras, lave y seque bien por dentro. Envuelva 1-2 peces con film y guarde en la zona más fría.',
          fr: 'Écailler, vider et sécher l’intérieur. Enveloppez 1 à 2 poissons de film étirable et placez dans la zone la plus froide.',
          de: 'Schuppen und Innereien entfernen, abspülen und innen ganz trocken tupfen. 1-2 Fische fest einwickeln und im Kältefach lagern.',
          pt: 'Retire escamas e vísceras, lave e seque bem por dentro. Embrulhe 1-2 peixes com filme e guarde na gaveta mais fria.',
          id: 'Buang sisik dan isi perut, cuci, keringkan bagian dalam. Bungkus 1-2 ekor dengan plastik wrap, taruh di bagian paling dingin.'
        },
        sources: ['MFDS', 'USDA']
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '오래 둘 굴비는 랩으로 진공 밀봉하듯 포장하여 지퍼백에 이중 밀폐한 뒤, 온도 변화가 적은 냉동고 깊숙한 곳에 보관해 3달 이내에 드세요.',
          en: 'Wrap tightly as if vacuum-sealed, double seal in zipper bags, and store deep in the freezer. Consume within 3 months.',
          ja: '굴비는 냉동 보관 시 랩으로 꼼꼼히 감싼 후 지퍼백에 넣어 이중 밀폐하고 냉동실 안쪽에 보관하며 3개월 안에 조리해 드세요.',
          zh: '长期保存时,请用保鲜膜包装,装入密封袋中双层密封，存放在冷冻室深处。并在3个月内食用。',
          es: 'Para guardarla más tiempo, envuelva al vacío con film, selle doble en bolsas y ponga al fondo del congelador. Consuma en 3 meses.',
          fr: 'Pour un stockage long, filmez sous vide, doublez le sachet et placez au fond du congélateur. Consommez sous 3 mois.',
          de: 'Zur Langzeitlagerung wie vakuumiert fest einwickeln, doppelt eintüten und tief im Gefrierschrank lagern. In 3 Monaten verbrauchen.',
          pt: 'Para guardar por longo prazo, embrulhe a vácuo com filme, sele duplo em sacos e coloque ao fundo. Consuma em até 3 meses.',
          id: 'Untuk awet, bungkus rapat seperti divakum, segel ganda dalam kantong, lalu simpan di bagian dalam freezer. Konsumsi dalam 3 bulan.'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'dried-seaweed',
    iconImage: '/assets/images/apps/freshself/ingredients/dried-seaweed.png',
    category: 'seafood',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['미역', '건미역', '미역보관', '불린미역'],
      en: ['dried seaweed', 'seaweed', 'wakame'],
      ja: ['乾燥わかめ', 'わかめ', 'ワカメ'],
      zh: ['干海带', '裙带菜', '海带']
    },
    names: {
      ko: '미역 / 건미역',
      en: 'Dried Seaweed',
      ja: '乾燥わかめ',
      zh: '干海带',
      es: 'Alga seca',
      fr: 'Algue séchée',
      de: 'Trockene Algen',
      pt: 'Alga marinha seca',
      id: 'Rumput laut kering'
    },
    storage: {
      room: {
        durationDays: 180,
        tips: {
          ko: '건미역은 개봉 후 지퍼백에 담아 공기를 빼고 밀봉해 건조하고 그늘진 실온에 두세요. 변색이나 눅눅함을 방지하기 위해 실리카겔을 동봉하면 좋습니다.',
          en: 'For dry seaweed, seal in a bag, remove air, and store in a cool, dark room. Adding silica gel helps prevent dampness and discoloration.',
          ja: '건미역은 개봉 후 지퍼백에 담아 공기를 완전히 빼고 어둡고 서늘한 실온에 두세요. 눅눅함이나 변색 방지를 위해 실리카겔을 넣으면 좋습니다.',
          zh: '干海带开封后请放入密封袋中压出空气，存放在干燥阴凉의 常温下。放入干燥剂有助于防止受潮 and 变色。',
          es: 'Para el alga seca, selle en una bolsa sin aire y guarde en un lugar seco y oscuro. Añadir gel de sílice evita la humedad.',
          fr: 'Pour l’algue sèche, fermez sans air dans un sachet au sec et à l’abri de la lumière. Ajoutez du gel de silice contre l’humidité.',
          de: 'Trockene Algen nach dem Öffnen luftdicht verschließen, kühl und dunkel lagern. Silica-Gel schützt vor Feuchtigkeit.',
          pt: 'Para alga seca, guarde no saco sem ar em local seco e escuro. Colocar sílica-gel ajuda a evitar umidade e descoloração.',
          id: 'Segel dalam kantong plastik tanpa udara, simpan di tempat kering dan teduh. Beri silika gel untuk mencegah lembap.'
        },
        sources: ['USDA', 'MFDS']
      },
      fridge: {
        durationDays: 3,
        tips: {
          ko: '이미 불린 미역은 체에 받쳐 물기를 확실히 제거한 뒤 키친타월로 물기를 완전히 닦고 밀폐용기에 넣어 1~3일 이내에 조리하세요.',
          en: 'For soaked seaweed, drain and dry completely with paper towels. Store in airtight containers and use within 1–3 days.',
          ja: '이미 물에 불린 미역은 물기를 확실히 짜낸 후 밀폐용기나 지퍼백에 담아 1~3일 안에 조리해 드세요.',
          zh: '已泡发的海带请用筛网沥干，再用厨房纸彻底擦干水分。装入密封容器中并在1-3天内烹饪完毕。',
          es: 'Para el alga ya hidratada, escurra y seque bien con papel. Guarde en recipientes herméticos y cocine en 1-3 días.',
          fr: 'Pour l’algue réhydratée, égouttez et séchez bien au papier absorbant. Conservez en boîte étanche et cuisez sous 1 à 3 jours.',
          de: 'Bereits eingeweichte Algen abtropfen lassen und trocken tupfen. Luftdicht verpacken und in 1-3 Tagen verkochen.',
          pt: 'Para alga ya hidratada, escorra e seque bem com papel. Guarde no pote hermético e consuma em até 3 dias.',
          id: 'Untuk rumput laut yang sudah direndam, tiriskan lalu keringkan dengan tisu. Simpan di wadah kedap dan masak dalam 1-3 hari.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'abalone',
    iconImage: '/assets/images/apps/freshself/ingredients/abalone.png',
    category: 'seafood',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['전복', '활전복', '전복보관', '전복내장', '보양식'],
      en: ['abalone', 'abalones', 'seafood'],
      ja: ['アワビ', 'あわび', '鮑'],
      zh: ['鲍鱼', '鳆鱼']
    },
    names: {
      ko: '전복',
      en: 'Abalone',
      ja: 'アワビ',
      zh: '鲍鱼',
      es: 'Abulón',
      fr: 'Ormeau',
      de: 'Seeohr / Abalone',
      pt: 'Abalone',
      id: 'Kerang abalon'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '활전복은 씻지 말고 물에 적신 키친타월로 위를 덮고 뚜껑을 약간 틈을 주어 살짝 닫은 채 야채칸에 보관하며 2일 이내에 조리하세요. 손질해 살만 둔 경우 1~2일 내 드세요.',
          en: 'Do not wash live abalone. Cover with wet paper towels and store in the crisper drawer with the lid slightly ajar (for air circulation). Cook in 2 days. If shucked, use in 1–2 days.',
          ja: '활전복은 씻지 않고 젖은 종이타월을 덮어 뚜껑을 살짝 열어둔 채 냉장실 안쪽에 두며 2일 안에 조리해 드세요.',
          zh: '活鲍鱼切勿洗涤，盖上湿厨房纸，将盖子留出微缝存入蔬菜室中，在2天内烹饪。如果是去壳鲍鱼肉，请在1-2天内食用。',
          es: 'No lave el abulón vivo. Cubra con papel húmedo y guarde en el cajón con la tapa algo abierta. Cocine en 2 días. Si está pelado, use en 1-2 días.',
          fr: 'Ne lavez pas l’ormeau vivant. Couvrez de papier humide et stockez dans le bac à légumes, couvercle entrouvert. Cuisez sous 2 jours. Si décoquillé, consommez sous 1-2 jours.',
          de: 'Lebende Abalone nicht waschen. Mit feuchtem Küchenpapier bedecken und im Gemüsefach mit leicht geöffnetem Deckel lagern. In 2 Tagen garen. Ausgelöst in 1-2 Tagen verbrauchen.',
          pt: 'Não lave o abalone vivo. Cubra com papel-toalha úmido e guarde na gaveta com a tampa um pouco aberta. Prepare em até 2 dias. Se limpo, use em 1 a 2 dias.',
          id: 'Jangan cuci abalon hidup. Alas tisu basah dan simpan di laci sayur dengan penutup sedikit terbuka. Masak dalam 2 hari. Jika dikupas, habiskan dalam 1-2 hari.'
        },
        sources: ['MFDS', 'USDA']
      },
      freezer: {
        durationDays: 30,
        tips: {
          ko: '살과 내장을 숟가락으로 분리해 솔로 씻은 뒤 수분을 닦고 따로따로 1회분씩 랩으로 진공포장해 지퍼백에 이중 보관해 얼리세요. 내장은 2주 이내 소비 권장합니다.',
          en: 'Separate meat and organs with a spoon, scrub, pat dry, wrap individually in plastic wrap, and double bag. Organs go bad quickly; consume within 2 weeks.',
          ja: '껍질에서 살과 내장을 떼어 솔로 닦은 후 각각 따로 1회분씩 랩으로 진공포장해 냉동하세요. 내장은 가급적 2주 안에 소비하셔야 합니다.',
          zh: '用勺子分离鲍肉和内脏，刷洗干净并擦干水分，分别按分量用保鲜膜紧密包裹放入密封袋。内脏极易变质，建议在2周内食用完。',
          es: 'Separe carne e intestinos con cuchara, limpie, seque, envuelva individual con film y ponga en bolsa. Consuma intestinos en 2 semanas.',
          fr: 'Séparez la chair et les viscères à la cuillère, brossez, séchez, filmez individuellement et doublez le sachet. Viscères à consommer sous 2 semaines.',
          de: 'Fleisch und Innereien trennen, säubern, trocken tupfen, einzeln fest in Folie wickeln und doppelt eintüten. Innereien schnell (in 2 Wochen) verbrauchen.',
          pt: 'Separe a carne e as vísceras, limpe, seque, embrulhe separado em filme e guarde no saco. Consuma as vísceras em até 2 semanas.',
          id: 'Pisah daging dan jeroan dengan sendok, sikat, keringkan, bungkus rapat secara terpisah, lalu segel ganda. Konsumsi jeroan dalam 2 minggu.'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'octopus',
    category: 'seafood',
    emoji: '🐙',
    isProcessed: false,
    searchKeywords: {
      ko: ['낙지', '문어', '주꾸미', '데친낙지', '쫄깃한식감'],
      en: ['octopus', 'small octopus', 'seafood'],
      ja: ['テナガダコ', 'たこ', 'タコ'],
      zh: ['八爪鱼', '章鱼']
    },
    names: {
      ko: '낙지',
      en: 'Octopus',
      ja: 'テナガダコ',
      zh: '章鱼',
      es: 'Pulpo',
      fr: 'Poulpe',
      de: 'Krake / Oktopus',
      pt: 'Polvo',
      id: 'Gurita'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '신선도가 급격히 떨어지므로 가급적 당일 조리하시고, 냉장 시에는 밀가루로 이물질을 씻어 물기를 완전히 말려 밀폐 용기에 담아 2일 내로 드세요.',
          en: 'Spoils rapidly; cook on purchase day if possible. Otherwise, wash with flour, dry completely, and store in airtight containers for up to 2 days.',
          ja: '수산물 특성상 쉽게 상하므로 가능한 한 당일 드시고, 냉장 보관 시 밀가루로 씻어 물기를 닦아내 밀폐 보관 후 2일 안에 조리하세요.',
          zh: '新鲜度流失极快，建议当天烹饪。冷藏时请用面粉搓洗净，彻底擦干水分放入密封容器中，于2天内食用完。',
          es: 'Se daña rápido; cocine el mismo día. Para refrigerar, limpie con harina, seque bien y use en 2 days en envase hermético.',
          fr: 'S’altère vite ; cuisez le jour même. Pour réfrigérer, lavez à la farine, séchez bien et stockez hermétiquement 2 jours max.',
          de: 'Sehr leicht verderblich; am Kauftag garen. Zum Kühlen mit Mehl reinigen, gut trocknen und luftdicht max. 2 Tage lagern.',
          pt: 'Estraga muito rápido; prepare no dia da compra. Se refrigerar, limpe com farinha, seque bem e consuma em até 2 dias.',
          id: 'Cepat busuk; masak segera. Untuk kulkas, bersihkan dengan tepung, keringkan, simpan di wadah kedap maks 2 hari.'
        },
        sources: ['MFDS', 'USDA']
      },
      freezer: {
        durationDays: 30,
        tips: {
          ko: '생으로 얼리면 수분이 파괴되어 해동 시 질겨집니다. 끓는 물에 30초간 살짝 데친 후 식혀서 소분 밀봉 보관하면 부드러운 식감이 지켜집니다.',
          en: 'Freezing raw destroys cell walls, making it tough when thawed. Blanch in boiling water for 30s, cool, portion, and freeze to keep it tender.',
          ja: '생물 상태로 얼리면 해동했을 때 매우 질겨집니다. 끓는 물에 30초간 가볍게 데친 다음 소분 냉동 보관하면 쫄깃함이 유지됩니다.',
          zh: '生冻会破坏细胞水分,导致解冻后口感坚韧。在沸水中稍微焯水30秒,晾凉后分装密封冷冻，可保持肉质柔嫩。',
          es: 'Congelar crudo destruye las células, haciéndolo duro al descongelar. Blanquee 30s en agua hirviendo, enfríe y congele.',
          fr: 'Congeler cru détruit les cellules et le rend coriace après décongélation. Blanchissez 30s à l’eau bouillante pour garder la tendreté.',
          de: 'Roh Gefrieren zerstört die Struktur und macht den Krake zäh. Vor dem Einfrieren 30 Sek. blanchieren, abkühlen lassen.',
          pt: 'Congelar cru destrói as células, tornando-o duro. Branqueie por 30s em água fervente, esfrie e congele para ficar macio.',
          id: 'Membekukan mentah merusak air sel sehingga alot saat cair. Rebus 30 detik, dinginkan, lalu bekukan agar tetap empuk.'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'mackerel',
    iconImage: '/assets/images/apps/freshself/ingredients/mackerel.png',
    category: 'seafood',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['고등어', '생선', '자반고등어', '고등어보관'],
      en: ['mackerel', 'blue mackerel', 'fish'],
      ja: ['サバ', 'さば', '鯖'],
      zh: ['鲭鱼', '青花鱼']
    },
    names: {
      ko: '고등어',
      en: 'Mackerel',
      ja: 'サバ',
      zh: '鲭鱼',
      es: 'Caballa',
      fr: 'Maquereau',
      de: 'Makrele',
      pt: 'Cabala',
      id: 'Ikan kembung'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '씻은 후 키친타월로 안팎의 물기를 완벽히 제거하고, 밀폐 용기에 담아 냉장실 중 가장 차가운 신선칸에 두고 1~2일 내에 조리하세요.',
          en: 'Wash and pat completely dry inside and out with paper towels. Place in an airtight container in the coldest drawer and cook within 1–2 days.',
          ja: '洗った後、ペーパーで内外の水気を完全に拭き取ります。密閉容器に入れ、冷蔵室で最も冷たい場所に置いて1〜2日以内に調理してください。',
          zh: '冲洗后用厨房纸彻底擦干内外水分。装入密封容器中，存放在冷藏室最冷处，并在1-2天内烹饪。',
          es: 'Lave y seque por completo dentro y fuera con papel. Ponga en envase hermético en la zona más fría y cocine en 1-2 días.',
          fr: 'Lavez et séchez bien l’intérieur et l’extérieur au papier. Placez en boîte étanche dans la zone la plus froide ; cuisez sous 1 à 2 jours.',
          de: 'Abspülen und innen wie außen ganz trocken tupfen. Luftdicht verschlossen im Kältefach lagern und in 1-2 Tagen zubereiten.',
          pt: 'Lave e seque bem por dentro e por fora com papel-toalha. Guarde no pote hermético na gaveta mais fria e prepare em até 2 dias.',
          id: 'Cuci dan keringkan bagian dalam luar dengan tisu. Taruh wadah kedap di laci paling dingin, masak dalam 1-2 hari.'
        },
        sources: ['MFDS', 'USDA', 'WHO']
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '내장을 제거해 토막 낸 뒤 천일염과 레몬즙을 살짝 뿌려 수분을 한 번 더 빼고, 랩으로 진공하듯 밀착 감싸 지퍼백에 밀봉 냉동하세요.',
          en: 'Gut, slice, sprinkle salt and lemon juice to drain moisture. Wrap tightly in wrap as if vacuum-sealed and freeze in a zipper bag.',
          ja: '内臓を取り除いてぶつ切りにし、塩とレモン汁を軽く振って水分を抜き、ラップで空気が入らないよう密着包装して冷凍します。',
          zh: '去内脏并切块，撒上少许盐和柠檬汁以进一步析出水分，用保鲜膜真空般紧密包裹，装在密封袋中冷冻。',
          es: 'Limpie, trocee y añada sal y limón para extraer humedad. Envuelva bien con film como si fuera al vacío y congele en bolsa.',
          fr: 'Videz, tronçonnez, salez et citronnez pour rejeter l’humidité. Filmez hermétiquement (effet sous vide) et congelez sous sachet.',
          de: 'Innereien entfernen, zerteilen, mit Salz und Zitrone entwässern. Wie vakuumiert fest in Folie wickeln und im Beutel gefrieren.',
          pt: 'Retire as vísceras, corte em postas, tempere com sal e limão para desidratar. Embrulhe bem em filme e congele no saco.',
          id: 'Buang isi perut, potong, beri garam dan jeruk lemon untuk membuang air. Bungkus rapat plastik wrap lalu bekukan.'
        },
        sources: ['MFDS', 'USDA', 'WHO']
      }
    }
  },
  {
    id: 'oyster',
    category: 'seafood',
    emoji: '🦪',
    isProcessed: false,
    searchKeywords: {
      ko: ['굴', '석화', '생굴', '봉지굴', '굴보관'],
      en: ['oyster', 'oysters', 'raw oysters', 'shucked oysters'],
      ja: ['牡蠣', 'かき', 'カキ', '生牡蠣'],
      zh: ['牡蛎', '生蚝', '海蛎子']
    },
    names: {
      ko: '굴',
      en: 'Oyster',
      ja: '牡蠣',
      zh: '牡蛎',
      es: 'Ostra',
      fr: 'Huître',
      de: 'Auster',
      pt: 'Ostra',
      id: 'Tiram'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '식중독(노로바이러스)에 매우 취약하므로 구입 즉시 옅은 소금물에 씻어 물기를 빼고 밀폐용기에 담아 2일 이내에 완전히 익혀 드세요.',
          en: 'Highly vulnerable to food poisoning (Norovirus). Wash in light saltwater immediately, drain, seal in a container, and cook fully within 2 days.',
          ja: '食中毒（ノロウイルス）に非常に弱いため、購入後すぐに薄い塩水で洗い、水気を切って密閉容器に入れ、2日以内に完全に加熱して召し上がりください。',
          zh: '极易感染食源性病毒（诺如病毒）。购买后立即用淡盐水洗净沥干，装入密封容器中，并在2天内彻底煮熟食用。',
          es: 'Muy sensible a intoxicaciones (Norovirus). Lave en agua con sal, escurra, selle y consuma bien cocinado en 2 días.',
          fr: 'Très sensible aux intoxications (Norovirus). Lavez à l’eau salée, égouttez, fermez et cuisez à cœur sous 2 jours.',
          de: 'Sehr anfällig für Lebensmittelvergiftungen (Noroviren). Sofort in leichtem Salzwasser waschen, abtropfen lassen und in 2 Tagen komplett durchgaren.',
          pt: 'Muito vulnerável a intoxicação (Norovírus). Lave em água salgada, escorra, guarde no pote hermético e consuma bem cozido em até 2 dias.',
          id: 'Sangat rentan keracunan (Norovirus). Segera cuci air garam, tiriskan, taruh wadah kedap, masak matang dalam 2 hari.'
        },
        sources: ['MFDS', 'USDA', 'WHO']
      },
      freezer: {
        durationDays: 60,
        tips: {
          ko: '봉지굴은 소금물에 헹궈 물기를 빼고 소분 포장해 얼리며, 해동 후에는 찌개나 부침 등 가열 조리용으로만 사용해야 안전합니다.',
          en: 'Rinse in saltwater, drain, portion, and freeze. After thawing, use only for hot cooked dishes like stews or pancakes.',
          ja: '塩水で洗い水気を切ってから小分けにして冷凍します。解凍後はスープやチヂミなど、必ず加熱調理用としてのみご使用ください。',
          zh: '用盐水漂洗沥干，分装冷冻。解冻后为安全起见，请仅用于汤类或煎饼等加热烹饪的料理。',
          es: 'Enjuague en agua con sal, escurra, porcione y congele. Tras descongelar, use solo para guisos o platos cocinados calientes.',
          fr: 'Rincez à l’eau salée, égouttez, portionnez et congelez. Après décongélation, utilisez uniquement cuit (soupes, beignets).',
          de: 'In Salzwasser abspülen, abtropfen lassen, portionieren und gefrieren. Nach dem Auftauen nur für heiße Kochgerichte verwenden.',
          pt: 'Lave em água salgada, escorra, divida em porções e congele. Após descongelar, consuma apenas cozido ou frito.',
          id: 'Bilas air garam, tiriskan, bagi per porsi, lalu bekukan. Setelah dicairkan, hanya gunakan untuk masakan matang.'
        },
        sources: ['MFDS', 'USDA', 'WHO']
      }
    }
  },
  {
    id: 'crab',
    category: 'seafood',
    emoji: '🦀',
    isProcessed: false,
    searchKeywords: {
      ko: ['꽃게', '게', '대게', '홍게', '꽃게보관'],
      en: ['crab', 'crabs', 'blue crab', 'king crab'],
      ja: ['カニ', 'かに', '蟹', 'ワタリガニ'],
      zh: ['螃蟹', '梭子蟹', '大闸蟹']
    },
    names: {
      ko: '꽃게 / 게',
      en: 'Crab',
      ja: 'かに',
      zh: '螃蟹',
      es: 'Cangrejo',
      fr: 'Crabe',
      de: 'Krabbe',
      pt: 'Caranguejo',
      id: 'Kepiting'
    },
    storage: {
      fridge: {
        durationDays: 1,
        tips: {
          ko: '게는 죽으면 부패 속도가 매우 빠르고 식중독균이 증식합니다. 생물 상태일 때는 24시간 이내에 신속히 조리하는 것이 원칙입니다.',
          en: 'Spoils extremely fast and breeds pathogens once dead. Fresh live crab must be cooked within 24 hours.',
          ja: 'カニは死ぬと腐敗速度が非常に早く、食中毒菌が増殖します。生のままであれば24時間以内に速やかに調理してください。',
          zh: '螃蟹死亡后腐败极快，极易滋生食源性细菌。活蟹生鲜状态下，必须在24小时内迅速烹饪。',
          es: 'Se daña muy rápido y genera bacterias una vez muerto. El cangrejo fresco debe cocinarse dentro de las 24 horas.',
          fr: 'S’altère très vite et produit des bactéries dès sa mort. Le crabe frais doit être cuit sous 24 heures.',
          de: 'Verdirbt nach dem Tod extrem schnell und bildet Keime. Frische Krabben müssen zwingend in 24 Stunden gegart werden.',
          pt: 'Estraga muito rápido e cria bactérias após morrer. Caranguejo fresco deve ser cozido em até 24 horas.',
          id: 'Cepat busuk dan memicu bakteri jika mati. Kepiting segar wajib dimasak dalam waktu 24 jam.'
        },
        sources: ['USDA', 'MFDS']
      },
      freezer: {
        durationDays: 30,
        tips: {
          ko: '생으로 얼리면 게살의 단백질이 녹아내립니다. 반드시 끓는 물에 완전히 쪄낸 뒤 식혀 지퍼백에 담아 급속 냉동해야 살이 유지됩니다.',
          en: 'Freezing raw melts the crab meat. Steam completely first, cool down, and pack in zipper bags before freezing to retain the meat.',
          ja: '生のまま冷凍すると身が溶けて流れてしまいます。必ず沸騰したお湯で完全に蒸し上げ、冷ましてから袋に入れ冷凍してください。',
          zh: '生冻会导致蟹肉溶化流失。请务必用沸水彻底蒸熟，晾凉后装入密封袋中冷冻，以保持肉质紧实。',
          es: 'Congelar crudo disuelve la carne. Cuézalo al vapor por completo, enfríe y guarde en bolsas para conservar la consistencia.',
          fr: 'Congeler cru fait fondre la chair. Cuisez d’abord à la vapeur, laissez refroidir et filmez en sachet pour garder la chair.',
          de: 'Roh einfrieren verflüssigt das Fleisch. Erst komplett dämpfen, abkühlen lassen und in Beuteln einfrieren, um die Struktur zu erhalten.',
          pt: 'Congelar cru faz a carne derreter. Cozinhe no vapor primeiro, esfrie e congele no saco plástico para manter a carne intacta.',
          id: 'Membekukan mentah membuat daging menyusut. Kukus matang terlebih dahulu, dinginkan, lalu bekukan dalam kantong plastik.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  }
];
