import type { Ingredient } from '../ingredients';

export const meatIngredients: Ingredient[] = [
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
        sources: ['MFDS', 'USDA']
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
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'pork',
    iconImage: '/assets/images/apps/freshself/ingredients/pork.png',
    category: 'meat',
    emoji: '',
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
        sources: ['MFDS', 'USDA']
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
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'chicken',
    iconImage: '/assets/images/apps/freshself/ingredients/chicken.png',
    category: 'meat',
    emoji: '',
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
        sources: ['CDC', 'USDA', 'WHO', 'FSA']
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
        sources: ['CDC', 'USDA', 'WHO', 'FSA']
      }
    }
  },
  {
    id: 'minced-meat',
    iconImage: '/assets/images/apps/freshself/ingredients/minced-meat.png',
    category: 'meat',
    emoji: '',
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
        sources: ['MFDS', 'USDA']
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
        sources: ['MFDS', 'USDA']
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
        durationDays: 7,
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
        sources: ['USDA', 'USDA']
      },
      freezer: {
        durationDays: 30,
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
        sources: ['USDA', 'USDA']
      }
    }
  },
  {
    id: 'sausage',
    iconImage: '/assets/images/apps/freshself/ingredients/sausage.png',
    category: 'meat',
    emoji: '',
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
        durationDays: 7,
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
        sources: ['USDA', 'USDA']
      },
      freezer: {
        durationDays: 60,
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
        sources: ['USDA', 'USDA']
      }
    }
  },
  {
    id: 'ham',
    iconImage: '/assets/images/apps/freshself/ingredients/ham.png',
    category: 'meat',
    emoji: '',
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
    id: 'duck',
    iconImage: '/assets/images/apps/freshself/ingredients/duck.png',
    category: 'meat',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['오리고기', '생오리', '오리훈제', '오리보관'],
      en: ['duck meat', 'duck', 'ducks'],
      ja: ['鴨肉', '合鴨', 'かも'],
      zh: ['鸭肉', '鸭子']
    },
    names: {
      ko: '오리고기',
      en: 'Duck Meat',
      ja: '鴨肉',
      zh: '鸭肉',
      es: 'Carne de pato',
      fr: 'Viande de canard',
      de: 'Entenfleisch',
      pt: 'Carne de pato',
      id: 'Daging bebek'
    },
    storage: {
      fridge: {
        durationDays: 2,
        tips: {
          ko: '표면의 물기를 키친타월로 닦아 핏물을 빼고 1회분씩 밀폐봉지에 담아 공기를 빼서 보관하세요. 2일 이내에 드시는 것이 안전합니다.',
          en: 'Dry surface moisture with paper towels. Portion in airtight bags, remove air, and consume within 2 days.',
          ja: '표면의 수분을 페이퍼로 닦고 1회분씩 밀폐 팩에 공기를 빼서 보관하세요. 2일 이내에 드시는 것이 안전합니다.',
          zh: '用厨房纸擦干表面水分以吸除血水，分装在密封袋中压出空气保存。在2天内食用完毕较为安全。',
          es: 'Seque la humedad superficial con toallas de papel. Porcione en bolsas herméticas, retire el aire y consuma en 2 days.',
          fr: 'Séchez l’humidité de surface. Portionnez dans des sacs hermétiques sans air et consommez sous 2 jours.',
          de: 'Feuchtigkeit auf der Oberfläche mit Küchenpapier abtrocknen. Luftdicht portionsweise verpacken und in 2 Tagen garen.',
          pt: 'Seque a umidade superficial com papel-toalha. Divida em sacos herméticos, retire o ar e consuma em até 2 dias.',
          id: 'Keringkan kelembapan permukaan dengan tisu. Bagi per wadah kedap, buang udara, dan konsumsi dalam 2 hari.'
        },
        sources: ['USDA', 'MFDS']
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '단면을 랩으로 빈틈없이 감싼 후 지퍼백에 넣어 이중 밀봉 냉동하면 산패와 냄새 배임을 방지하고 육즙 손실을 막아 줍니다.',
          en: 'Wrap tightly with plastic wrap and double seal in zipper bags to prevent rancidity, odors, and juice loss.',
          ja: '단면을 랩으로 빈틈없이 래핑한 뒤 지퍼백에 밀봉 냉동하면 산패와 냉동실 잡내 배임을 방지할 수 있습니다.',
          zh: '用保鲜膜紧密包裹切面，放入密封袋中双层密封冷冻，这可以防止氧化、异味以及肉汁流失。',
          es: 'Envuelva bien con film plástico y selle doble en bolsas para evitar la rancidez, olores y pérdida de jugos.',
          fr: 'Enveloppez hermétiquement de film et doublez le sachet pour éviter le rancissement, les odeurs et la perte de jus.',
          de: 'Fest in Frischhaltefolie wickeln und doppelt in Beutel einschließen, um Gefrierbrand, Gerüche und Saftverlust zu vermeiden.',
          pt: 'Embrulhe bem em filme plástico e coloque no saco hermético (selagem dupla) para evitar oxidação, cheiros e perda de suco.',
          id: 'Bungkus rapat plastik wrap lalu masukkan kantong segel ganda untuk cegah tengik, bau kulkas, and susut sari daging.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'canned-ham',
    iconImage: '/assets/images/apps/freshself/ingredients/canned-ham.png',
    category: 'meat',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['스팸', '통조림햄', '캔햄', '조미육통조림'],
      en: ['spam', 'canned ham', 'luncheon meat'],
      ja: ['スパム', '缶詰ハム', 'ランチョンミート'],
      zh: ['午餐肉', '罐头火腿', '世棒']
    },
    names: {
      ko: '스팸 / 통조림햄',
      en: 'Canned Ham / Spam',
      ja: 'スパム / 缶詰ハム',
      zh: '午餐肉 / 罐头火腿',
      es: 'Jamón en conserva / Spam',
      fr: 'Jambon en boîte / Spam',
      de: 'Dosenfleisch / Spam',
      pt: 'Presunto enlatado / Spam',
      id: 'Daging ham kaleng / Spam'
    },
    storage: {
      room: {
        durationDays: 730,
        tips: {
          ko: '미개봉 상태에서는 서늘하고 건조한 실온(팬트리)에 보관 시 2년 이상 보존이 가능합니다. 캔 용기가 찌그러지거나 녹슬지 않았는지 확인하세요.',
          en: 'Unopened, store in a cool, dry pantry for 2+ years. Ensure the can is not dented, bulged, or rusted.',
          ja: '未開封の状態では、涼しく乾燥した室温（パントリ）で2年以上保存できます。缶が凹んだり錆びたりしていないか確認してください。',
          zh: '未开封时，在阴凉干燥的常温下可保存2年以上。请检查罐体是否有凹陷、鼓包或生锈。',
          es: 'Cerrado, dura 2+ años en lugar fresco y seco. Verifique que la lata no esté abollada, oxidada o hinchada.',
          fr: 'Non ouvert, se conserve 2 ans et plus au sec. Vérifiez que la boîte n’est pas cabossée, rouillée ou gonflée.',
          de: 'Ungeöffnet kühl und trocken gelagert 2+ Jahre haltbar. Sicherstellen, dass die Dose keine Dellen, Beulen oder Rost hat.',
          pt: 'Fechado, dura mais de 2 anos em local fresco e seco. Verifique se a lata não está amassada, enferrujada ou estufada.',
          id: 'Sebelum dibuka, simpan di tempat kering suhu ruang sejuk awet 2+ tahun. Pastikan kaleng tidak penyok atau berkarat.'
        },
        sources: ['USDA', 'MFDS']
      },
      fridge: {
        durationDays: 5,
        tips: {
          ko: '개봉 후 남은 햄을 캔 그대로 냉장 보관 시 산소 접촉으로 산패 및 금속 용출이 일어납니다. 반드시 락앤락 등 별도 밀폐용기에 덜어 냉장하고 5일 이내 드세요.',
          en: 'Do not refrigerate in the open metal can; oxygen contact causes spoilage and metal leaching. Transfer to a sealed plastic/glass container and consume in 5 days.',
          ja: '開封後、缶に入れたまま冷蔵すると酸素との接触で酸化や金属の溶出が起こります。必ず密閉容器に移し替えて冷蔵し5日以内に使い切ってください。',
          zh: '开封后，若直接将罐头原样冷藏，会因接触氧气导致变质及重金属溶出。请务必移至独立的密封容器中冷藏并在5天内食用。',
          es: 'No refrigere en la lata abierta; el oxígeno causa deterioro y filtración de metal. Páselo a un envase hermético y consuma en 5 días.',
          fr: 'Ne conservez pas dans la boîte ouverte ; le contact avec l’oxygène gâte le produit et libère du métal. Transférez en boîte étanche et cuisez sous 5 jours.',
          de: 'Nicht in der geöffneten Metalldose kühlen; Sauerstoffkontakt führt zu Verderb und Metallabgabe. In eine Dose umfüllen und in 5 Tagen verbrauchen.',
          pt: 'Não guarde na lata aberta; o contato com o oxigênio causa oxidação e contaminação por metal. Transfira para um pote hermético e consuma em 5 dias.',
          id: 'Jangan masukkan kulkas langsung di kaleng terbuka; kontak oksigen memicu pembusukan dan zat besi. Pindahkan ke wadah kedap.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  }
];
