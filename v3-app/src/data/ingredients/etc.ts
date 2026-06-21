import type { Ingredient } from '../ingredients';

export const etcIngredients: Ingredient[] = [
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
        sources: ['USDA']
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
        sources: ['USDA']
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
        sources: ['USDA']
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
        sources: ['USDA']
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
        sources: ['USDA']
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
        sources: ['MFDS', 'CDC', 'WHO']
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
        sources: ['MFDS', 'CDC', 'WHO']
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
    id: 'ice-cream',
    category: 'etc',
    emoji: '🍦',
    isProcessed: true,
    searchKeywords: {
      ko: ['아이스크림', '하드', '디저트', '냉동화상', '성에예방'],
      en: ['ice cream', 'gelato', 'frozen dessert', 'freezer burn'],
      ja: ['アイスクリーム', 'アイス', 'シャーベット'],
      zh: ['冰淇淋', '雪糕', '冰菓']
    },
    names: {
      ko: '아이스크림',
      en: 'Ice Cream',
      ja: 'アイスクリーム',
      zh: '冰淇淋',
      es: 'Helado',
      fr: 'Glace / Crème glacée',
      de: 'Eiscreme / Eis',
      pt: 'Sorvete',
      id: 'Es krim'
    },
    storage: {
      freezer: {
        durationDays: 180,
        tips: {
          ko: '성에가 결로되어 맺히는 냉동화상(Freezer Burn)을 예방해야 합니다. 개봉 후 남은 윗면에 랩을 밀착 덮고 거꾸로 뒤집어 냉동실 가장 안쪽에 보관하세요. 녹은 제품은 절대 재냉동 금지입니다.',
          en: 'Prevent freezer burn. Press plastic wrap directly onto the surface of opened ice cream, close lid, and store upside down deep in the freezer. Never refreeze melted ice cream.',
          ja: '성에로 결정이 생기는 것을 막기 위해 남은 아이스크림 윗면에 랩을 직접 밀착해 덮어두고, 거꾸로 뒤집어 냉동실 가장 안쪽에 보관하세요. 녹은 것은 재냉동 금지입니다.',
          zh: '需防范起霜导致“冷冻烧”。开封后在暴露表面贴紧覆盖保鲜膜，盖紧盖子并倒置存放在冷冻室最深处。已融化的冰淇淋切勿重新冷冻。',
          es: 'Evite la quemadura por congelación. Presione film directamente sobre el helado abierto, tape y guarde boca abajo al fondo. Nunca recongele helado derretido.',
          fr: 'Évitiez les brûlures de congélation. Pressez du film sur la glace entamée, fermez et stockez tête en bas au fond. Ne recongelez jamais de la glace fondue.',
          de: 'Gefrierbrand vermeiden. Frischhaltefolie direkt auf die Oberfläche des geöffneten Eises drücken, Deckel schließen und umgedreht ganz hinten im Gefrierschrank lagern. Aufgetautes Eis nie wieder einfrieren.',
          pt: 'Evite a queima por congelamento. Pressione filme plástico sobre o sorvete aberto, feche e guarde de cabeça para baixo ao fundo. Nunca recongele sorvete derretido.',
          id: 'Cegah freezer burn. Tempel plastik wrap langsung di permukaan es krim, tutup, simpan terbalik di bagian dalam. Jangan bekukan lagi es cair.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'soda',
    category: 'etc',
    emoji: '🥤',
    isProcessed: true,
    searchKeywords: {
      ko: ['탄산음료', '콜라', '사이다', '김안빠지게', '이산화탄소'],
      en: ['soda', 'cola', 'soft drink', 'carbonated drink'],
      ja: ['炭酸飲料', 'コーラ', 'サイダー'],
      zh: ['碳酸饮料', '可乐', '汽水']
    },
    names: {
      ko: '탄산음료',
      en: 'Soda / Cola',
      ja: '炭酸飲料',
      zh: '碳酸饮料 / 可乐',
      es: 'Refresco / Cola',
      fr: 'Soda / Cola',
      de: 'Erfrischungsgetränk / Cola',
      pt: 'Refrigerante / Cola',
      id: 'Minuman bersoda'
    },
    storage: {
      fridge: {
        durationDays: 5,
        tips: {
          ko: '개봉 후 탄산 유실을 막으려면 페트병을 찌그러뜨려 빈 공간을 줄인 뒤 뚜껑을 꽉 닫으세요. 차가울수록 탄산 기체가 잘 녹아 보존됩니다.',
          en: 'To prevent loss of carbonation, squeeze the plastic bottle to minimize empty space and close tight. Keep cold; lower temperatures retain gas better.',
          ja: '김빠짐을 막기 위해 페트병을 살짝 찌그러뜨려 내부 공기를 뺀 다음 뚜껑을 세게 닫아 보관하세요. 차가울수록 탄산이 덜 빠집니다.',
          zh: '为防汽水跑气，请捏扁塑料瓶以减少内部虚空，然后拧紧盖子。温度越低，二氧化碳越易溶解保存。',
          es: 'Para evitar que se gasifique, presione la botella para reducir el espacio vacío y cierre fuerte. Mantenga frío para retener el gas.',
          fr: 'Pour garder le gaz, pressez la bouteille en plastique pour vider l’air et vissez fort. Stockez au frais (le gaz s’y dissout mieux).',
          de: 'Um Kohlensäureverlust zu vermeiden, die Plastikflasche zusammendrücken (Luftleerraum minimieren) und fest verschließen. Kalt lagern.',
          pt: 'Para não perder o gás, esprema a garrafa para reduzir o ar e feche bem. Mantenha gelado para reter o gás.',
          id: 'Cegah soda hilang. Remas botol plastik untuk meminimalkan ruang kosong lalu tutup rapat. Simpan dingin agar gas awet.'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'dumplings',
    category: 'etc',
    emoji: '🥟',
    isProcessed: true,
    searchKeywords: {
      ko: ['만두', '냉동만두', '교자', '손만두', '군만두'],
      en: ['dumplings', 'dumpling', 'frozen dumplings', 'gyoza', 'potstickers'],
      ja: ['餃子', 'ぎょうざ', 'ギョーザ', '冷凍餃子'],
      zh: ['饺子', '蒸饺', '冷冻饺子', '水饺']
    },
    names: {
      ko: '만두 / 냉동만두',
      en: 'Frozen Dumplings',
      ja: '餃子 / 冷凍餃子',
      zh: '饺子 / 冷冻饺子',
      es: 'Empanadillas / Dumplings',
      fr: 'Raviolis / Dumplings',
      de: 'Teigtaschen / Dumplings',
      pt: 'Guioza / Dumplings',
      id: 'Pangsit / Dumpling beku'
    },
    storage: {
      freezer: {
        durationDays: 180,
        tips: {
          ko: '밀봉 상태가 불량하면 냉동실 안의 건조한 냉기로 인해 피가 깨지고 마르는 냉동장해(Freezer burn)가 생깁니다. 클립이나 테이프로 입구를 완벽히 밀봉하세요.',
          en: 'Poor sealing leads to dry cold air cracking the skin, causing freezer burn. Seal the opening tightly with clips or tape.',
          ja: '密閉が不十分だと、冷凍庫内の冷気で皮が乾燥してひび割れる冷凍焼け（Freezer burn）が生じます。袋の口をクリップなどで完全に閉じてください。',
          zh: '密封不良会因冷冻室内的干燥冷风导致饺子皮干裂，产生冷冻灼伤（Freezer burn）。请用夹子或胶带将开口彻底密封。',
          es: 'Un mal sellado agrieta la masa por el aire frío y seco, causando quemaduras por congelación. Selle bien la apertura con clips o cinta.',
          fr: 'Un mauvais scellage assèche la pâte par le froid, créant des brûlures de congélation. Fermez hermétiquement avec un clip ou du ruban.',
          de: 'Schlechte Versiegelung führt dazu, dass die kalte Luft den Teig austrocknet (Gefrierbrand). Öffnung fest mit Clips verschließen.',
          pt: 'Vedação ruim faz com que o ar frio e seco rache a massa, causando queimadura de congelador. Feche bem a embalagem com clipes.',
          id: 'Segel tidak rapat membuat kulit pangsit retak karena udara dingin kering (freezer burn). Segel rapat dengan klip.'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'chocolate',
    category: 'etc',
    emoji: '🍫',
    isProcessed: true,
    searchKeywords: {
      ko: ['초콜릿', '초콜렛', '카카오', '가나초콜릿', '초콜릿보관'],
      en: ['chocolate', 'chocolates', 'dark chocolate', 'milk chocolate'],
      ja: ['チョコレート', 'チョコ'],
      zh: ['巧克力', '黑巧克力', '牛奶巧克力']
    },
    names: {
      ko: '초콜릿',
      en: 'Chocolate',
      ja: 'チョコレート',
      zh: '巧克力',
      es: 'Chocolate',
      fr: 'Chocolat',
      de: 'Schokolade',
      pt: 'Chocolate',
      id: 'Cokelat'
    },
    storage: {
      room: {
        durationDays: 180,
        tips: {
          ko: '가장 좋은 보관 온도는 15~18℃의 그늘진 상온입니다. 습하고 냄새가 잘 배는 냉장고는 가급적 피하고, 여름철에 냉장 보관할 경우 결로로 인한 블룸(하얀 가루)이 생기므로 밀봉하여 보관하세요.',
          en: 'Best stored in a dark room at 15–18°C. Avoid refrigeration as it absorbs odors and causes sugar bloom (white coating) due to condensation; if necessary, seal airtight.',
          ja: '最適な保管温度は15〜18℃の日陰の常温です。冷蔵庫は臭い移りや結露によるブルーム（表面の白い粉）が生じるため避け、夏場に冷蔵する場合は密閉してください。',
          zh: '最佳保存温度为15-18℃的阴凉避光常温。冷藏室易串味且易因结露导致起霜（表面变白），请尽量避免；夏季必须冷藏时请密封保存。',
          es: 'Ideal a 15–18 °C en lugar oscuro. Evite la nevera ya que absorbe olores y causa eflorescencia de azúcar (capa blanca) por condensación; si es necesario, selle bien.',
          fr: 'Idéal à l’abri de la lumière à 15–18 °C. Évitez le frais car il absorbe les odeurs et blanchit (efflorescence de sucre) par condensation ; si nécessaire, filmez étanche.',
          de: 'Am besten dunkel bei 15–18 °C lagern. Kühlen meiden, da Schokolade Gerüche annimmt und durch Kondensation Reif bildet; falls nötig, luftdicht einpacken.',
          pt: 'Melhor guardado em local escuro a 15-18 °C. Evite a geladeira pois absorve cheiros e causa esbranquiçamento (sugar bloom) por condensação; se necessário, sele bem.',
          id: 'Terbaik di ruang gelap suhu 15–18°C. Kulkas memicu serap bau and sugar bloom (putih di permukaan) karena kondensasi; segel rapat.'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  }
];
