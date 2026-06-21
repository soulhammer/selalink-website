import type { Ingredient } from '../ingredients';

export const grainIngredients: Ingredient[] = [
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
        sources: ['USDA', 'MFDS']
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
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'rice-cake',
    iconImage: '/assets/images/apps/freshself/ingredients/rice-cake.png',
    category: 'grain',
    emoji: '',
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
        sources: ['MFDS', 'USDA']
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
        sources: ['RDA', 'WHO']
      }
    }
  },
  {
    id: 'dried-noodles',
    iconImage: '/assets/images/apps/freshself/ingredients/dried-noodles.png',
    category: 'grain',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['국수', '파스타', '소면', '건면', '파스타보관', '국수보관'],
      en: ['dried noodles', 'pasta', 'spaghetti', 'ramen noodles'],
      ja: ['乾麺', 'パスタ', 'そうめん', 'スパゲッティ'],
      zh: ['干面', '意面', '挂面', '通心粉']
    },
    names: {
      ko: '국수 / 파스타 건면',
      en: 'Dried Noodles / Pasta',
      ja: '乾麺 / パスタ',
      zh: '干面 / 意面',
      es: 'Pasta / Fideos secos',
      fr: 'Pâtes / Nouilles sèches',
      de: 'Trockene Nudeln / Pasta',
      pt: 'Macarrão / Massa seca',
      id: 'Mie kering / Pasta'
    },
    storage: {
      room: {
        durationDays: 365,
        tips: {
          ko: '습기와 해충에 무척 약하므로 개봉 후에는 지퍼백이나 전용 밀폐용기에 담아 통풍이 잘 되는 서늘한 실온에 두세요. 냉장 보관 시 결로로 곰팡이가 필 수 있습니다.',
          en: 'Vulnerable to moisture and insects. After opening, store in a zipper bag or airtight container in a cool, dry room. Refrigeration causes condensation and mold.',
          ja: '습기와 해충에 무척 약하므로 개봉 후에는 지퍼백이나 밀폐 용기에 담아 서늘하고 건조한 실온에 보관하세요.',
          zh: '极易受潮和生虫。开封后请放入密封袋或专用密封容器中，存放在通风阴凉의 常温下。冷藏会因结露导致发霉。',
          es: 'Sensible a la humedad e insectos. Tras abrir, guarde en bolsa hermética en un lugar seco y fresco. Refrigerar causa condensación y moho.',
          fr: 'Sensible à l’humidité et aux insectes. Après ouverture, stockez sous sachet étanche dans une pièce fraîche. Évitez le frais (condensation et moisissure).',
          de: 'Feuchtigkeits- und schädlingsanfällig. Nach dem Öffnen in Beutel oder Dosen kühl und trocken lagern. Kühlen meiden (Kondenswasser und Schimmel).',
          pt: 'Sensível à umidade e insetos. Após aberto, guarde no saco hermético em local seco e fresco. Refrigerar causa condensação e mofo.',
          id: 'Rentan lembap dan kutu. Setelah dibuka, simpan di wadah kedap suhu ruang sejuk. Hindari kulkas (kondensasi dan jamur).'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'flour',
    iconImage: '/assets/images/apps/freshself/ingredients/flour.png',
    category: 'grain',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['밀가루', '강력분', '박력분', '부침가루', '밀가루벌레', '화랑곡나방'],
      en: ['flour', 'all-purpose flour', 'wheat flour', 'baking flour'],
      ja: ['小麦粉', '薄力粉', '強力粉'],
      zh: ['面粉', '小麦粉', '低筋面粉']
    },
    names: {
      ko: '밀가루',
      en: 'Flour',
      ja: '小麦粉',
      zh: '面粉',
      es: 'Harina',
      fr: 'Farine',
      de: 'Mehl',
      pt: 'Farinha de trigo',
      id: 'Tepung terigu'
    },
    storage: {
      room: {
        durationDays: 180,
        tips: {
          ko: '종이봉투는 해충(바구미 등)이 쉽게 뚫고 침입하므로 개봉 즉시 플라스틱이나 유리의 밀폐 용기에 옮겨 담아 어둡고 서늘한 곳에 두세요.',
          en: 'Paper packaging is easily penetrated by pests. Transfer to glass or plastic airtight containers immediately and store in a cool, dark pantry.',
          ja: '밀가루의 종이 패키지는 쌀벌레 등이 쉽게 뚫어 침입합니다. 개봉 후 즉시 단단한 밀폐 용기에 옮겨 보관하세요.',
          zh: '纸袋极易被海虫（象鼻虫等）咬破侵入。开封后请立即移入塑料或玻璃密封容器中，存放在阴凉避光处。',
          es: 'Las plagas perforan fácil el papel. Pase a recipientes herméticos de plástico o vidrio de inmediato y guarde en alacena fresca.',
          fr: 'Les insectes percent facilement le papier. Transférez immédiatement dans un pot en verre ou plastique étanche au frais.',
          de: 'Papier wird leicht von Schädlingen durchbohrt. Sofort in luftdichte Glas- oder Plastikbehälter umfüllen und kühl lagern.',
          pt: 'Insetos furam embalagens de papel facilmente. Transfira para pote hermético de vidro ou plástico e guarde em local fresco.',
          id: 'Kantong kertas mudah ditembus kutu. Segera pindahkan ke wadah kedap plastik atau kaca di tempat sejuk.'
        },
        sources: ['USDA', 'FSA']
      },
      freezer: {
        durationDays: 365,
        tips: {
          ko: '여름철이나 오랫동안 안 쓸 때는 밀폐하여 냉동 보관하면 해충 발생을 차단하고 유통기한을 1년까지 신선하게 연장할 수 있습니다.',
          en: 'During hot seasons or for long-term storage, seal and freeze. Freezing kills insect eggs and extends shelf life to 1 year.',
          ja: '여름이나 장기 보관이 필요할 때는 밀폐하여 냉동고에 보관하세요. 벌레 유입이 방지되고 신선도가 1년까지 지속됩니다.',
          zh: '夏季나 长期不用时,请密封冷冻。冷藏冷冻可杀死虫卵并延长新鲜期至1年。',
          es: 'En verano o si no se usa pronto, selle y congele. Congelar elimina huevos de insectos y alarga la frescura a 1 año.',
          fr: 'En été ou pour un stockage long, filmez et congelez. Le gel détruit les œufs de parasites et prolonge la fraîcheur à 1 an.',
          de: 'Im Sommer oder bei seltener Nutzung luftdicht einfrieren. Gefrieren tötet Schädlingseier ab und hält das Mehl 1 Jahr frisch.',
          pt: 'No verão ou se não for usar logo, feche bem e congele. Congelar elimina ovos de insetos e estende a validade para 1 ano.',
          id: 'Saat cuaca panas atau penyimpanan lama, segel dan bekukan. Membekukan mematikan telur kutu dan awet hingga 1 tahun.'
        },
        sources: ['USDA', 'FSA']
      }
    }
  },
  {
    id: 'tteok',
    iconImage: '/assets/images/apps/freshself/ingredients/tteok.png',
    category: 'grain',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['떡볶이떡', '떡국떡', '밀떡', '쌀떡', '떡보관', '아플라톡신'],
      en: ['rice cakes', 'tteok', 'tteokbokki rice cake'],
      ja: ['トッポギ餅', 'トッポギ', 'お餅'],
      zh: ['年糕', '年糕条', '年糕片']
    },
    names: {
      ko: '떡볶이 떡 / 떡국 떡',
      en: 'Rice Cakes / Tteok',
      ja: 'トッポギ餅 / 餅',
      zh: '年糕 / 年糕条',
      es: 'Pastel de arroz',
      fr: 'Galette de riz',
      de: 'Reiskuchen / Tteok',
      pt: 'Massa de arroz / Tteok',
      id: 'Kue beras / Tteok'
    },
    storage: {
      fridge: {
        durationDays: 3,
        tips: {
          ko: '떡은 냉장 보관 시 전분 노화로 쉽게 굳고 곰팡이가 잘 핍니다. 곰팡이 독소는 가열해도 남아 식중독을 일으키므로 핀 것은 전량 폐기해야 합니다.',
          en: 'Refrigeration causes starch aging (hardening) and mold. Mold toxins remain after cooking and cause food poisoning; discard fully if moldy.',
          ja: '떡은 냉장 보관하면 굳어지고 쉽게 곰팡이가 핍니다. 곰팡이가 핀 떡은 가열해도 독소(아플라톡신 등)가 그대로 남아 전량 폐기해야 합니다.',
          zh: '冷藏会因淀粉老化而发硬，极易发霉。霉菌毒素受热不分解，会引发食中毒。一旦发霉必须全部丢弃。',
          es: 'Refrigerar endurece el almidón y atrae moho. Las toxinas resisten la cocción y causan intoxicación; deseche todo si hay moho.',
          fr: 'Le frais fait durcir l’amidon et favorise les moisissures. Les toxines résistent à la cuisson ; jetez tout au moindre signe.',
          de: 'Kühlen härtet die Stärke aus und begünstigt Schimmel. Schimmelpilzgifte überstehen das Garen; verschimmelte Ware komplett wegwerfen.',
          pt: 'Refrigerar endurece o amido e favorece o mofo. Toxinas de mofo resistem ao cozimento e causam infecção; descarte tudo se mofar.',
          id: 'Kulkas mengeraskan pati dan memicu jamur. Racun jamur tidak hilang saat dimasak; wajib buang semuanya jika berjamur.'
        },
        sources: ['MFDS', 'WHO/FAO']
      },
      freezer: {
        durationDays: 180,
        tips: {
          ko: '남은 떡은 즉시 소분하여 지퍼백에 공기를 빼고 밀봉 냉동하고, 요리할 때는 차가운 물에 살짝 불렸다가 사용하면 식감이 쫄깃합니다.',
          en: 'Portion immediately, remove air from bags, and freeze. Soak in cold water before cooking to restore a chewy texture.',
          ja: '남은 떡은 즉시 소분하여 지퍼백에 밀봉 냉동하세요. 조리 전 찬물에 가볍게 불려 사용하면 아주 쫄깃해집니다.',
          zh: '剩余的年糕请立即分装，压出密封袋空气冷冻。烹饪前放入冷水中浸泡片刻，口感会恢复软糯。',
          es: 'Porcione de inmediato, retire el aire y congele. Remoje en agua fría antes de cocinar para recuperar textura elástica.',
          fr: 'Portionnez de suite, videz l’air du sachet et congelez. Trempez dans l’eau froide avant cuisson pour redonner du moelleux.',
          de: 'Reste sofort portionieren, Luft ausdrücken und einfrieren. Vor dem Kochen kurz in kaltem Wasser einweichen, damit sie zäh bleiben.',
          pt: 'Divida em porções, retire o ar e congele. Mergulhe em água fria antes de cozinhar para recuperar a maciez.',
          id: 'Bagi per porsi, buang udara dari kantong, lalu bekukan. Rendam air dingin sebelum dimasak agar kembali kenyal.'
        },
        sources: ['MFDS', 'WHO/FAO']
      }
    }
  },
  {
    id: 'brown-rice',
    iconImage: '/assets/images/apps/freshself/ingredients/brown-rice.png',
    category: 'grain',
    emoji: '',
    isProcessed: false,
    searchKeywords: {
      ko: ['현미', '곡물보관', '쌀벌레', '현미보관'],
      en: ['brown rice', 'grains', 'whole grain rice'],
      ja: ['玄米', 'げんまい', '穀物'],
      zh: ['玄米', '糙米', '粗粮']
    },
    names: {
      ko: '현미',
      en: 'Brown Rice',
      ja: '玄米',
      zh: '糙米',
      es: 'Arroz integral',
      fr: 'Riz complet',
      de: 'Naturreis',
      pt: 'Arroz integral',
      id: 'Beras merah'
    },
    storage: {
      fridge: {
        durationDays: 80,
        tips: {
          ko: '쌀겨와 배아에 지방 성분이 많아 실온에 두면 기름 쩐내가 나고 쌀벌레가 생깁니다. 밀폐 펫트병이나 용기에 담아 반드시 냉장 보관하는 것이 향을 지키는 비결입니다.',
          en: 'Bran and germ contain oils that go rancid and attract weevils at room temp. Store in airtight bottles or containers in the fridge to preserve quality.',
          ja: 'ぬかと胚芽に油分が多いため、常温放置すると脂質が酸化し米虫がわきます。密閉容器やペットボトルに入れ、必ず冷蔵保管するのが品質維持の秘訣です。',
          zh: '米糠和胚芽中含有较多油脂成分，常温放置易产生油哈味并生米虫。装在密封瓶或容器中并务必冷藏，这是保持风味的秘诀。',
          es: 'El salvado y germen contienen aceites que se rancean y atraen gorgojos a temp. ambiente. Guarde en envases herméticos en la nevera.',
          fr: 'Le son et le germe contiennent des graisses qui rancissent et attirent les charançons. Stockez en boîte étanche au frais pour garder la qualité.',
          de: 'Kleie und Keimling enthalten Fette, die bei Zimmertemperatur ranzig werden und Rüsselkäfer anziehen. Luftdicht gekühlt lagern.',
          pt: 'O farelo e o germe contêm óleos que oxidam e atraem carunchos em temp. ambiente. Guarde no pote hermético na geladeira.',
          id: 'Bekatul dan lembaga mengandung minyak yang bisa tengik dan mengundang kutu. Simpan di wadah kedap dalam kulkas.'
        },
        sources: ['USDA', 'FSA']
      },
      freezer: {
        durationDays: 180,
        tips: {
          ko: '지퍼백에 이중 밀봉해 얼려두면 수분 증발과 잡내 배임 없이 오랫동안 신선한 상태로 보존됩니다.',
          en: 'Double seal in zipper bags before freezing. This prevents moisture loss and absorbing other freezer odors.',
          ja: '保存袋に二重に入れて冷凍すると、水分の蒸発や冷凍庫の臭い移りを防ぎ、長期間新鮮に保てます。',
          zh: '装入密封袋双层密封后冷冻，可防止水分蒸发和串味，长期保持新鲜。',
          es: 'Selle doble en bolsas antes de congelar. Evita la pérdida de humedad y que absorba olores del congelador.',
          fr: 'Doublez le sachet étanche avant de congeler. Cela évite la perte d’humidité et le transfert d’odeurs du congélateur.',
          de: 'Doppelt in Beutel einschließen und gefrieren. Das verhindert Feuchtigkeitsverlust und die Aufnahme von Gefriergerüchen.',
          pt: 'Sele duplo em sacos antes de congelar. Evita perda de umidade e que o arroz pegue cheiro do congelador.',
          id: 'Segel ganda dalam kantong plastik sebelum dibekukan. Ini mencegah susut air dan bau kulkas.'
        },
        sources: ['USDA', 'FSA']
      }
    }
  }
];
