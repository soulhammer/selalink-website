import type { Ingredient } from '../ingredients';

export const condimentIngredients: Ingredient[] = [
  {
    id: 'canned-tuna',
    iconImage: '/assets/images/apps/freshself/ingredients/canned-tuna.png',
    category: 'condiment',
    emoji: '',
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
        sources: ['MFDS', 'USDA', 'WHO']
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
        sources: ['MFDS', 'USDA', 'WHO']
      }
    }
  },
  {
    id: 'mayonnaise',
    iconImage: '/assets/images/apps/freshself/ingredients/mayonnaise.png',
    category: 'condiment',
    emoji: '',
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
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'ketchup',
    iconImage: '/assets/images/apps/freshself/ingredients/ketchup.png',
    category: 'condiment',
    emoji: '',
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
        sources: ['USDA', 'MFDS']
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
        sources: ['USDA', 'RDA']
      }
    }
  },
  {
    id: 'soy-sauce',
    iconImage: '/assets/images/apps/freshself/ingredients/soy-sauce.png',
    category: 'condiment',
    emoji: '',
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
        sources: ['MFDS', 'USDA']
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
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'kimchi',
    iconImage: '/assets/images/apps/freshself/ingredients/kimchi.png',
    category: 'condiment',
    emoji: '',
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
        },
        sources: ['MFDS']
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
        },
        sources: ['MFDS']
      }
    }
  },
  {
    id: 'olive-oil',
    iconImage: '/assets/images/apps/freshself/ingredients/olive-oil.png',
    category: 'condiment',
    emoji: '',
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
        },
        sources: ['USDA', 'MFDS']
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
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'vinegar',
    iconImage: '/assets/images/apps/freshself/ingredients/vinegar.png',
    category: 'condiment',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['식초', '사과식초', '양조식초', '조미료', '식초보관'],
      en: ['vinegar', 'apple cider vinegar', 'white vinegar'],
      ja: ['酢', 'お酢', '米酢'],
      zh: ['醋', '米醋', '白醋']
    },
    names: {
      ko: '식초',
      en: 'Vinegar',
      ja: '酢',
      zh: '醋',
      es: 'Vinagre',
      fr: 'Vinaigre',
      de: 'Essig',
      pt: 'Vinagre',
      id: 'Cuka'
    },
    storage: {
      room: {
        durationDays: 730,
        tips: {
          ko: '식초는 산도가 매우 높아 미생물이 자라지 못하는 자기보존 식품입니다. 뚜껑을 꼭 닫아 그늘지고 서늘한 상온에 보관하면 거의 영구히 보존됩니다. 흰 침전물은 자연스러운 현상입니다.',
          en: 'Vinegar is self-preserving due to high acidity. Tighten lid and store in a cool, dark room. It will last almost indefinitely. Cloudiness/sediment is natural and safe.',
          ja: '식초는 자체 보존력이 높아 실온 보관 시 거의 영구적으로 품질이 유지됩니다. 뚜껑을 꽉 닫아 어두운 상온에 두세요. 흰 침전물이 생겨도 자연적인 현상입니다.',
          zh: '醋的酸度极高，属于自保鲜食品。盖紧盖子存放在阴凉避光的常温下可近乎永久保存。出现白色沉淀物是自然现象，不影响食用。',
          es: 'El vinagre se autoconserva por su alta acidez. Tape bien y guarde en lugar fresco y oscuro. Dura casi indefinidamente. El sedimento es natural y seguro.',
          fr: 'Le vinagre s’autoconserve grâce à sa forte acidité. Fermez bien et stockez au frais et au sec. Durée de vie quasi illimitée. Le dépôt blanc est naturel.',
          de: 'Essig ist durch den hohen Säuregehalt selbstkonservierend. Deckel fest verschließen und kühl und dunkel lagern. Nahezu unbegrenzt haltbar. Trübungen sind natürlich.',
          pt: 'O vinagre se autoconserva pela alta acidez. Feche bem e guarde em local fresco e escuro. Validade quase indeterminada. Sedimento branco é natural.',
          id: 'Cuka mengawetkan dirinya sendiri karena sangat asam. Tutup rapat dan simpan di suhu ruang gelap. Awet selamanya. Endapan putih aman dikonsumsi.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'curry-powder',
    iconImage: '/assets/images/apps/freshself/ingredients/curry-powder.png',
    category: 'condiment',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['카레가루', '카레', '향신료', '카레보관', '카레보관법'],
      en: ['curry powder', 'curry spice', 'spices'],
      ja: ['カレー粉', 'カレーパウダー', '香辛料'],
      zh: ['咖喱粉', '香料']
    },
    names: {
      ko: '카레 가루',
      en: 'Curry Powder',
      ja: 'カレー粉',
      zh: '咖喱粉',
      es: 'Curry en polvo',
      fr: 'Curry en poudre',
      de: 'Currypulver',
      pt: 'Curry em pó',
      id: 'Bubuk kari'
    },
    storage: {
      room: {
        durationDays: 365,
        tips: {
          ko: '미개봉 상태일 경우 직사광선이 닿지 않고 습도가 낮은 서늘한 그늘(팬트리)에 보관하세요.',
          en: 'If unopened, store in a cool, dry, and dark pantry away from direct sunlight.',
          ja: '개봉하지 않은 것은 직사광선이 없고 습도가 적은 서늘한 그늘(팬트리)에 보관하세요.',
          zh: '未开封时，请存放在避免阳光直射、湿度低的阴凉避光处（食品储藏室）。',
          es: 'Unopened, store in a cool, dry, dark place (pantry) away from direct sunlight.',
          fr: 'Non ouvert, stockez dans un endroit frais, sec et sombre, à l’abri du soleil.',
          de: 'Ungeöffnet an einem kühlen, trockenen, dunklen Ort (Speisekammer) ohne direkte Sonne lagern.',
          pt: 'Se fechado, guarde em local fresco, seco e escuro, longe da luz solar direta.',
          id: 'Sebelum dibuka, simpan di tempat sejuk, kering, dan gelap terhindar dari sinar matahari.'
        },
        sources: ['USDA', 'FSA']
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '개봉 후 실온에 방치하면 습기로 뭉치고 향이 다 날아갑니다. 지퍼백에 밀봉해 공기를 완전히 뺀 후 냉동 보관하면 풍미가 오랫동안 유지됩니다.',
          en: 'Leaving opened powder at room temp causes clumping and flavor loss. Seal tightly in a zipper bag, remove all air, and store in the freezer to preserve flavor.',
          ja: '개봉 후 실온에 그냥 두면 굳어지고 특유의 향이 날아갑니다. 지퍼백에 밀봉해 공기를 완전히 짜낸 뒤 냉동 보관해 풍미를 지키세요.',
          zh: '开封后如果放在常温下，会因受潮结块且风味散失。请装入密封袋中密闭并彻底排出空气，放入冷冻室保存能长期保持风味。',
          es: 'Dejarlo abierto a temp. ambiente causa grumos y pérdida de sabor. Selle bien en bolsas sin aire y congele para conservar el sabor.',
          fr: 'Laisser le sachet entamé à l’air libre crée des grumos et altère l’arôme. Fermez bien sans air et congelez pour préserver le goût.',
          de: 'Nach dem Öffnen feuchtigkeits- und aromaverlustgefährdet. Luftdicht in Beuteln verschließen, Luft komplett herausdrücken und im Gefrierschrank lagern.',
          pt: 'Deixar aberto à temp. ambiente causa pelotas e perda de sabor. Feche bem no saco, retire o ar e guarde no freezer para reter aroma.',
          id: 'Setelah dibuka, suhu ruang membuat bubuk menggumpal dan rasa hilang. Segel rapat di kantong plastik tanpa udara, simpan di freezer.'
        },
        sources: ['USDA', 'FSA']
      }
    }
  },
  {
    id: 'oyster-sauce',
    iconImage: '/assets/images/apps/freshself/ingredients/oyster-sauce.png',
    category: 'condiment',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['굴소스', '이금기', '조미료', '양념보관', '굴소스보관'],
      en: ['oyster sauce', 'asian sauce', 'seasoning'],
      ja: ['オイスターソース', '中華調味料'],
      zh: ['蚝油', '蚝汁']
    },
    names: {
      ko: '굴소스',
      en: 'Oyster Sauce',
      ja: 'オイスターソース',
      zh: '蚝油',
      es: 'Salsa de ostras',
      fr: 'Sauce d’huître',
      de: 'Austernsauce',
      pt: 'Molho de ostra',
      id: 'Saus tiram'
    },
    storage: {
      room: {
        durationDays: 540,
        tips: {
          ko: '개봉 전에는 햇빛이 닿지 않고 온도 변화가 없는 서늘한 실온(팬트리)에 최대 1년 반 이상 보관 가능합니다.',
          en: 'Unopened lasts 18–24 months in a cool, dark pantry away from sunlight.',
          ja: '개봉하기 전에는 직사광선이 닿지 않고 선선한 실온(팬트리)에 1년 반 이상 보관할 수 있습니다.',
          zh: '开封前，可在避光且无温度变化的阴凉常温下（食品储藏室）保存1年半以上。',
          es: 'Antes de abrir, dura 18–24 meses en alacena fresca y oscura.',
          fr: 'Non ouvert, se conserve 18 à 24 mois au frais et à l’abri de la lumière.',
          de: 'Ungeöffnet bis zu 18–24 Monate kühl und dunkel (Speisekammer) haltbar.',
          pt: 'Fechado dura de 18 a 24 meses em local fresco e escuro.',
          id: 'Sebelum dibuka awet 18-24 bulan di lemari makanan yang sejuk dan gelap.'
        },
        sources: ['USDA', 'MFDS']
      },
      fridge: {
        durationDays: 90,
        tips: {
          ko: '개봉 후 실온에 두면 곰팡이가 필 확률이 대단히 높으므로 반드시 입구를 닦아 냉장 보관하고, 3~6개월 내에 드세요.',
          en: 'Highly prone to mold at room temp once opened. Wipe opening clean, keep refrigerated, and consume within 3–6 months.',
          ja: '개봉한 뒤 실온에 두면 입구 부분에 곰팡이가 피기 쉽습니다. 반드시 입구를 닦아 냉장 보관하고 3~6개월 내로 사용하세요.',
          zh: '开封后若置于常温，极易发霉。请务必擦净瓶口并冷藏保存，在3-6个月内用完。',
          es: 'Muy sensible al moho en alacena tras abrir. Limpie el borde, refrigere y consuma en 3-6 meses.',
          fr: 'Très sensible aux moisissures à température ambiante. Essuyez le goulot, réfrigérez et consommez sous 3 à 6 mois.',
          de: 'Geöffnet bei Raumtemperatur sehr schimmelgefährdet. Flaschenhals säubern, kühlen und in 3–6 Monaten verbrauchen.',
          pt: 'Muito propenso a mofo se aberto fora da geladeira. Limpe a tampa, refrigere e use em 3 a 6 meses.',
          id: 'Sangat mudah berjamur di suhu ruang setelah dibuka. Lap mulut botol, dinginkan, dan habiskan dalam 3-6 bulan.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'sesame-seeds',
    iconImage: '/assets/images/apps/freshself/ingredients/sesame-seeds.png',
    category: 'condiment',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['참깨', '볶은깨', '깨소금', '참깨보관', '산패'],
      en: ['sesame seeds', 'roasted sesame seeds', 'sesame'],
      ja: ['ごま', '炒りごま', '胡麻'],
      zh: ['芝麻', '炒芝麻', '熟芝麻']
    },
    names: {
      ko: '참깨 / 깨',
      en: 'Sesame Seeds',
      ja: 'ごま / 胡麻',
      zh: '芝麻',
      es: 'Semillas de sésamo',
      fr: 'Graines de sésame',
      de: 'Sesamsamen',
      pt: 'Sementes de gergelim',
      id: 'Biji wijen'
    },
    storage: {
      room: {
        durationDays: 180,
        tips: {
          ko: '볶은 깨는 오일 성분이 함유되어 공기 노출 시 찌든 내(산패)가 납니다. 투명 병을 피해 어두운 밀폐 용기에 담아 서늘한 곳에 두세요.',
          en: 'Contains oil which becomes rancid when exposed to air. Store in dark, airtight containers in a cool pantry.',
          ja: '볶은 깨는 유지분으로 인해 공기 중 산패하여 쩐내가 나기 쉽습니다. 불투명한 밀폐 용기에 담아 서늘하고 건조한 상온에 보관하세요.',
          zh: '熟芝麻含有油分，暴露于空气中会产生哈喇味（氧化）。请避开透明瓶，放入深色密封容器中存放在凉爽处。',
          es: 'Contiene aceite que se rancia al aire. Guarde en recipientes oscuros y herméticos en un lugar fresco.',
          fr: 'Contiennent de l’huile et rancissent à l’air. Stockez dans un bocal opaque et étanche dans un endroit frais.',
          de: 'Enthält Öl, das an der Luft ranzig wird. In lichtgeschützten, luftdichten Dosen an einem kühlen Ort lagern.',
          pt: 'Contém óleo que rança com o ar. Guarde em pote escuro e hermético em local fresco.',
          id: 'Mengandung minyak yang bisa tengik oleh udara. Simpan di wadah kedap cahaya di tempat sejuk.'
        },
        sources: ['USDA', 'FSA']
      },
      freezer: {
        durationDays: 365,
        tips: {
          ko: '1년 이상 오래 두고 쓸 때는 지퍼백에 꽉 밀봉해 냉동 보관하면 산패가 완전히 억제되어 쩐내 없이 고소함을 끝까지 지킬 수 있습니다.',
          en: 'For storage over 1 year, seal tightly in bags and freeze. This stops rancidity completely and preserves the nutty flavor.',
          ja: '1년 이상 보관할 때는 지퍼백에 공기를 빼서 밀봉 냉동하세요. 기름 쩐내가 전혀 나지 않고 풍미가 고스란히 보존됩니다.',
          zh: '需保存1年以上时,请在密封袋中密封冷冻。这能彻底阻断氧化，使其持久保持香浓风味。',
          es: 'Para conservar más de 1 año, selle bien en bolsas y congele. Esto detiene el rancio y mantiene el aroma tostado.',
          fr: 'Pour un stockage de plus d’un an, fermez bien et congelez. Cela stoppe le rancissement et garde l’odeur de grillé.',
          de: 'Zur Lagerung über 1 Jahr luftdicht eintüten und einfrieren. Das verhindert Ranzigkeit komplett und erhält das Aroma.',
          pt: 'Para guardar por mais de 1 ano, feche bem e congele. Isso impede o ranço e preserva o sabor tostado.',
          id: 'Untuk simpan lebih dari 1 tahun, segel rapat lalu bekukan. Ini mencegah tengik dan menjaga rasa gurih.'
        },
        sources: ['USDA', 'FSA']
      }
    }
  },
  {
    id: 'perilla-oil',
    iconImage: '/assets/images/apps/freshself/ingredients/perilla-oil.png',
    category: 'condiment',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['들기름', '식용유', '기름보관', '오메가3'],
      en: ['perilla oil', 'vegetable oil', 'oil'],
      ja: ['エゴマ油', 'えごま油', 'コールドプレス'],
      zh: ['苏子油', '紫苏油']
    },
    names: {
      ko: '들기름',
      en: 'Perilla Oil',
      ja: 'エゴマ油',
      zh: '苏子油',
      es: 'Aceite de perilla',
      fr: 'Huile de pérille',
      de: 'Perillaöl',
      pt: 'Óleo de perila',
      id: 'Minyak perila'
    },
    storage: {
      fridge: {
        durationDays: 30,
        tips: {
          ko: '산패되기 쉬운 오메가-3가 60% 이상 들어 있어 실온에 두면 금방 상합니다. 반드시 뚜껑을 꼭 닫아 냉장 보관하며, 참기름을 2:8 비율로 섞어두면 보존 기간이 2배로 늘어납니다.',
          en: 'Contains 60%+ omega-3 which oxidizes very quickly at room temp. Must refrigerate with lid tight. Mixing it with sesame oil (2:8 ratio) doubles shelf life.',
          ja: '酸化しやすいオメガ3が60%以上含まれているため、室温に置くと傷みやすいです。必ずフタを閉め冷蔵保管し、ごま油を2:8で混ぜると日持ちが2倍になります。',
          zh: '含有60%以上极易氧化的欧米伽-3，置于常温下极易变质。必须盖紧盖子冷藏保存。与参油按2:8比例混合存放，保质期可延长2倍。',
          es: 'Contiene 60%+ de omega-3 que se oxida rápido a temp. ambiente. Guarde en nevera bien cerrado. Mezclar con aceite de sésamo (2:8) duplica su duración.',
          fr: 'Contient 60 % d’oméga-3 sensibles à l’oxydation. Conservez au réfrigérateur bien fermé. Mélanger à l’huile de sésame (2:8) double sa durée de conservation.',
          de: 'Enthält 60 %+ Omega-3-Fettsäuren, die schnell oxidieren. Luftdicht im Kühlschrank lagern. Mischen mit Sesamöl (2:8-Verhältnis) verdoppelt die Haltbarkeit.',
          pt: 'Contém mais de 60% de ômega-3, que oxida rápido em temp. ambiente. Guarde na geladeira bem fechado. Misturar com óleo de gergelim (2:8) dobra a durabilidade.',
          id: 'Mengandung 60%+ omega-3 yang cepat teroksidasi di suhu ruang. Wajib taruh kulkas. Campur minyak wijen (2:8) memperpanjang awet 2x lipat.'
        },
        sources: ['USDA', 'EFSA']
      }
    }
  },
  {
    id: 'sesame-oil',
    iconImage: '/assets/images/apps/freshself/ingredients/sesame-oil.png',
    category: 'condiment',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['참기름', '조미유', '기름보관', '리그난'],
      en: ['sesame oil', 'toasted sesame oil'],
      ja: ['ごま油', 'ゴマ油', '胡麻油'],
      zh: ['香油', '芝麻油', '参油']
    },
    names: {
      ko: '참기름',
      en: 'Sesame Oil',
      ja: 'ごま油',
      zh: '芝麻油',
      es: 'Aceite de sésamo',
      fr: 'Huile de sésame',
      de: 'Sesamöl',
      pt: 'Óleo de gergelim',
      id: 'Minyak wijen'
    },
    storage: {
      room: {
        durationDays: 180,
        tips: {
          ko: '참기름 속 강력한 항산화 성분(리그난) 덕분에 실온 보관 시 가장 안전하며 오래 보존됩니다. 냉장 보관 시 침전물이 얼거나 풍미가 빠르게 파괴되므로 반드시 서늘하고 어두운 상온에 두세요.',
          en: 'Strong antioxidants (lignans) make it self-preserving and long-lasting at room temp. Refrigeration spoils the flavor and causes solidification; store in a cool, dark pantry.',
          ja: 'ごま油に含まれる強力な抗酸化成分（リグナン）のおかげで、室温保管が最も安全で長持ちします。冷蔵すると風味が落ち固まるため、必ず日陰の涼しい常温に置きます。',
          zh: '得益于其含有的强效抗氧化成分（芝麻素），常温保存最安全且时间最长。冷藏会结晶或使风味流失，请务必存放在阴凉避光的常温下。',
          es: 'Sus antioxidantes (lignanos) la conservan mejor a temp. ambiente. Refrigerar daña el sabor y la solidifica; guarde en lugar fresco, seco y oscuro.',
          fr: 'Les antioxydants (lignanes) la protègent naturellement à temp. ambiante. Le froid altère l’arôme et la fige ; stockez à l’abri de la lumière au sec.',
          de: 'Starke Antioxidantien (Lignane) machen es bei Zimmertemperatur lange haltbar. Kühlen mindert das Aroma und führt zu Trübungen; dunkel und kühl lagern.',
          pt: 'Graças aos antioxidantes (lignanas), conserva-se melhor em temp. ambiente. Refrigerar altera o sabor e solidifica o óleo; guarde em local escuro e seco.',
          id: 'Antioksidan alami (lignan) menjaga minyak wijen awet di suhu ruang. Kulkas merusak rasa dan memicu kristalisasi; simpan di ruang gelap.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'chili-powder',
    iconImage: '/assets/images/apps/freshself/ingredients/chili-powder.png',
    category: 'condiment',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['고춧가루', '태양초', '양념가루', '고춧가루보관'],
      en: ['chili powder', 'chili flakes', 'gochugaru', 'red pepper powder'],
      ja: ['唐辛子粉', '唐辛子の粉', '韓国唐辛子粉'],
      zh: ['辣椒粉', '粗辣椒粉', '细辣椒粉']
    },
    names: {
      ko: '고춧가루',
      en: 'Chili Powder',
      ja: '唐辛子粉',
      zh: '辣椒粉',
      es: 'Chile en polvo',
      fr: 'Piment en poudre',
      de: 'Chilipulver',
      pt: 'Pimenta em pó',
      id: 'Bubuk cabai'
    },
    storage: {
      fridge: {
        durationDays: 90,
        tips: {
          ko: '습기와 상온 노출에 매우 취약하며 아스페르길루스 곰팡이(오크라톡신 A 발암 물질)가 자라기 쉽습니다. 소분하여 지퍼백에 밀봉한 후 반드시 10℃ 이하 냉장 보관하고 장기 보관 시 냉동하세요.',
          en: 'Extremely vulnerable to moisture and warmth, easily breeding Aspergillus mold (Ochratoxin A cancer pathogen). Seal in small bags and store below 10°C; freeze for long term.',
          ja: '湿気と室温放置に非常に弱く、カビ（発がん性物質オクラトキシンA）が発生しやすいです。小分けにし密閉して必ず10℃以下で冷蔵し、長期は冷凍します。',
          zh: '极易受潮和受常温影响，易滋生黄曲霉菌（产生致癌物赭曲霉毒素A）。请分装密封在袋中，务必在10℃以下冷藏，长期保存请冷冻。',
          es: 'Muy sensible a la humedad y calor; favorece el hongo Aspergillus (sustancia cancerígena Ocratoxina A). Selle en porciones por debajo de 10 °C y congele a largo plazo.',
          fr: 'Très sensible à l’humidité et à la chaleur, propice aux moisissures Aspergillus (produisant de l’ochratoxine A cancérigène). Fermez en portions sous 10 °C ; congelez à long terme.',
          de: 'Sehr feuchtigkeits- und wärmeempfindlich; bildet leicht Aspergillus-Schimmel (krebserregendes Ochratoxin A). Portionieren, luftdicht unter 10 °C lagern; für Langzeit einfrieren.',
          pt: 'Muito sensível a umidade e calor, facilitando o fungo Aspergillus (carcinógeno Ocratoxina A). Divida, sele em sacos e guarde abaixo de 10 °C; congele para longo prazo.',
          id: 'Sangat rentan lembap dan suhu ruang, mudah berjamur Aspergillus (zat karsinogenik Ochratoxin A). Segel di kantong porsi, simpan di bawah 10°C.'
        },
        sources: ['MFDS', 'USDA', 'WHO']
      }
    }
  },
  {
    id: 'gochujang',
    iconImage: '/assets/images/apps/freshself/ingredients/gochujang.png',
    category: 'condiment',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['고추장', '전통장', '고추장보관법'],
      en: ['gochujang', 'korean chili paste', 'red pepper paste'],
      ja: ['コチュジャン', '韓国唐辛子みそ'],
      zh: ['辣椒酱', '韩式辣酱', '苦椒酱']
    },
    names: {
      ko: '고추장',
      en: 'Gochujang (Chili Paste)',
      ja: 'コチュジャン',
      zh: '辣酱',
      es: 'Gochujang',
      fr: 'Gochujang',
      de: 'Gochujang',
      pt: 'Gochujang',
      id: 'Gochujang'
    },
    storage: {
      fridge: {
        durationDays: 60,
        tips: {
          ko: '전통 발효 장류이지만 시판 고추장은 전분과 감미료 함량이 높아 개봉 후 실온에 두면 곰팡이가 핍니다. 개봉 후에는 표면을 밀착 밀폐하여 반드시 냉장 보관하세요.',
          en: 'Store-bought chili paste has sugar/starches that mold easily at room temp once opened. Seal surface tightly with wrap and keep refrigerated after opening.',
          ja: '市販のコチュジャンは澱粉や甘味料が多く、開封後に常温放置するとカビます。開封後は表面を密着させてラップなどで密閉し、必ず冷蔵保管してください。',
          zh: '市售辣酱含有较高淀粉和甜味剂，开封后放常温易发霉。开封后请用保鲜膜紧贴酱面密封，并务必冷藏保存。',
          es: 'El gochujang comercial tiene azúcar y almidón que crían moho si se abre y deja a temp. ambiente. Selle la superficie con film y refrigere tras abrir.',
          fr: 'Le gochujang industriel contient des sucres et fécules qui moisissent à temp. ambiante après ouverture. Filmez au contact et gardez au frais.',
          de: 'Gekauftes Gochujang enthält Stärke und Zucker, die geöffnet bei Zimmertemperatur schimmeln. Oberfläche fest mit Folie abdecken und kühl lagern.',
          pt: 'O Gochujang industrializado contém açúcar e amido que mofam facilmente em temp. ambiente após aberto. Sele a superfície com filme e guarde na geladeira.',
          id: 'Gochujang kemasan mengandung pati/pemanis yang mudah berjamur di suhu ruang setelah dibuka. Tutup rapat permukaan dan taruh kulkas.'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'doenjang',
    iconImage: '/assets/images/apps/freshself/ingredients/doenjang.png',
    category: 'condiment',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['된장', '재래된장', '된장보관법'],
      en: ['doenjang', 'soybean paste', 'korean soybean paste'],
      ja: ['テンジャン', '韓国味噌'],
      zh: ['大酱', '韩式大酱', '黄豆酱']
    },
    names: {
      ko: '된장',
      en: 'Doenjang (Soybean Paste)',
      ja: 'テンジャン',
      zh: '大酱',
      es: 'Doenjang',
      fr: 'Doenjang',
      de: 'Doenjang',
      pt: 'Doenjang',
      id: 'Doenjang'
    },
    storage: {
      fridge: {
        durationDays: 60,
        tips: {
          ko: '개봉 후 실온 방치 시 하얀 산막효모(곰팡이의 일종)와 유해 곰팡이가 증식합니다. 밀폐 보관하되, 된장 표면에 종이호일을 깔고 그 위에 천일염을 도톰하게 덮어두면 습기를 잡고 상하지 않습니다.',
          en: 'Leaving it at room temp breeds white film yeast (mold) and pathogenetic molds. Seal and place parchment paper on surface, then sprinkle sea salt on top to block moisture.',
          ja: '開封後に常温放置すると、白い産膜酵母（カビの一種）や有害なカビが増殖します。密閉し、表面にクッキングシートを敷いて粗塩をのせると水分を防ぎ傷みません。',
          zh: '开封后放常温易生白膜酵母（霉菌的一种）和有害霉菌。密封保存，可在表面垫上烘焙纸并撒上一层厚厚的粗盐以防潮防变质。',
          es: 'Dejarlo a temp. ambiente cría levaduras blancas (tipo de moho) y mohos dañinos. Selle, coloque papel de horno y cubra con sal gruesa para evitar humedad.',
          fr: 'Laisser à temp. ambiante crée des levures (voile blanc) et moisissures. Fermez bien, posez du papier cuisson au contact et couvrez de gros sel pour sécher.',
          de: 'Zimmertemperatur begünstigt Kahmhefe (weißer Belag) und Schimmel. Luftdicht lagern; Backpapier auflegen und grobes Salz aufstreuen, um Feuchtigkeit zu binden.',
          pt: 'Deixar em temp. ambiente cria leveduras brancas (tipo de mofo) e fungos prejudiciais. Cubra a superfície com papel-manteiga e sal grosso para evitar umidade.',
          id: 'Suhu ruang memicu ragi film putih (jamur) dan bakteri jahat. Lapisi kertas roti di permukaan, taburi garam kasar untuk menyerap air.'
        },
        sources: ['MFDS', 'USDA']
      }
    }
  },
  {
    id: 'jam',
    iconImage: '/assets/images/apps/freshself/ingredients/jam.png',
    category: 'condiment',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['잼', '딸기잼', '사과잼', '스프레드', '잼보관법'],
      en: ['jam', 'fruit jam', 'strawberry jam', 'spread', 'fruit preserves'],
      ja: ['ジャム', 'イチゴジャム', '果物ジャム'],
      zh: ['果酱', '草莓酱', '苹果酱']
    },
    names: {
      ko: '잼 (딸기잼 등)',
      en: 'Jam',
      ja: 'ジャム',
      zh: '果酱',
      es: 'Mermelada',
      fr: 'Confiture',
      de: 'Marmelade',
      pt: 'Geleia',
      id: 'Selai'
    },
    storage: {
      fridge: {
        durationDays: 180,
        tips: {
          ko: '당도가 높아 미개봉 시 상온 보관이 되나 개봉 후에는 산소 접촉과 수분 유입으로 곰팡이가 쉽게 핍니다. 반드시 냉장 보관하고, 침과 이물질이 묻은 숟가락은 절대 사용하지 마세요.',
          en: 'High sugar preserves it unopened, but oxygen and moisture after opening cause mold. Keep refrigerated and never use a spoon with saliva or crumbs.',
          ja: '糖度が高いため未開封では常温保存できますが、開封後は酸素と水分でカビが発生します。必ず冷蔵保管し、唾液や異物のついたスプーンは使わないでください。',
          zh: '含糖量高，未开封时可常温保存，但开封后会因接触氧气和水分而发霉。必须冷藏保存，绝对不要使用沾有唾液或食物残渣的勺子。',
          es: 'Su alto azúcar la conserva sin abrir, pero el aire y humedad tras abrir crían moho. Refrigere y no use cucharas con saliva o restos de comida.',
          fr: 'Le sucre conserve le pot fermé, mais l’oxygène et l’humidité l’abîment après ouverture. Gardez au frais ; n’y trempez jamais de cuillère sale.',
          de: 'Ungeöffnet durch Zuckergehalt haltbar; geöffnet führen Sauerstoff und Feuchtigkeit zu Schimmel. Kühlen und nie Löffel mit Speichel oder Krümeln nutzen.',
          pt: 'O alto teor de açúcar conserva o pote fechado, mas o contato com ar e umidade após aberto cria mofo. Refrigere e não use colheres sujas ou com saliva.',
          id: 'Tinggi gula mengawetkan saat tertutup, tapi oksigen dan air memicu jamur setelah dibuka. Simpan di kulkas, jangan gunakan sendok kotor.'
        },
        sources: ['USDA', 'MFDS']
      }
    }
  },
  {
    id: 'pasta-sauce',
    iconImage: '/assets/images/apps/freshself/ingredients/pasta-sauce.png',
    category: 'condiment',
    emoji: '',
    isProcessed: true,
    searchKeywords: {
      ko: ['파스타소스', '토마토소스', '크림소스', '바질페스토', '소스보관'],
      en: ['pasta sauce', 'tomato sauce', 'spaghetti sauce', 'marinara'],
      ja: ['パスタソース', 'トマトソース', 'スパゲッティソース'],
      zh: ['意面酱', '番茄沙司', '意大利面酱']
    },
    names: {
      ko: '토마토 / 파스타 소스',
      en: 'Pasta Sauce',
      ja: 'パスタソース',
      zh: '意面酱',
      es: 'Salsa para pasta',
      fr: 'Sauce pour pâtes',
      de: 'Nudelsauce',
      pt: 'Molho de tomate / massa',
      id: 'Saus pasta / Tomat'
    },
    storage: {
      fridge: {
        durationDays: 4,
        tips: {
          ko: '잼과 달리 당도가 낮고 수분이 매우 많아 개봉 후 3~4일 이내에 먹지 않으면 흰 곰팡이가 생깁니다. 개봉한 소스는 유리병 등 밀폐 용기에 덜어 신속히 드세요.',
          en: 'Unlike jam, low sugar and high moisture cause white mold quickly. Transfer opened sauce to an airtight container and consume within 4 days.',
          ja: 'ジャムと違い糖度が低く水分が多いため、開封後3〜4日以内に消費しないと白カビが生えます。開封後は密閉容器に移し早めにお召し上がりください。',
          zh: '与果酱不同，意面酱含糖量低且水分极高，开封后若不3-4天内食用会产生白霉。开封后请转移到密封容器中并迅速食用。',
          es: 'A diferencia de la mermelada, tiene poco azúcar y mucha agua; cría moho rápido. Pásela a un envase hermético y consuma en 4 días.',
          fr: 'À l’inverse de la confiture, sa faible teneur en sucre et sa forte humidité font moisir vite. Transférez en boîte étanche et consommez sous 4 jours.',
          de: 'Anders als Marmelade zuckerarm und wasserreich; schimmelt geöffnet schnell. Geöffnete Sauce in Dosen füllen und in 4 Tagen aufbrauchen.',
          pt: 'Ao contrário da geleia, tem baixo teor de açúcar e muita umidade, mofando rápido. Transfira para um pote hermético e consuma em até 4 dias.',
          id: 'Berbeda dengan selai, saus pasta rendah gula dan tinggi air sehingga cepat berjamur. Pindahkan ke wadah kedap dan habiskan dalam 4 hari.'
        },
        sources: ['USDA', 'FSA']
      },
      freezer: {
        durationDays: 90,
        tips: {
          ko: '한 번에 쓸 분량만큼 지퍼백이나 실리콘 용기에 소분하여 납작하게 얼려두면 조리할 때 해동하기 매우 편리합니다.',
          en: 'Portion into freezer bags or containers and freeze flat. This makes thawing for quick cooking very easy.',
          ja: '1回分ずつ袋や容器に小分けにし、平らにして冷凍しておくと、調理の際の解凍が非常に便利です。',
          zh: '按单次用量分装在密封袋或硅胶容器中平铺冷冻，烹饪时解冻非常方便。',
          es: 'Porcione en bolsas o recipientes y congele plano. Facilita la descongelación rápida al cocinar.',
          fr: 'Portionnez dans des sachets ou boîtes et congelez à plat. Cela facilite grandement la décongélation rapide.',
          de: 'Portionsweise in Beutel oder Dosen füllen und flach einfrieren. Das erleichtert das schnelle Auftauen zum Kochen.',
          pt: 'Divida em porções em sacos ou potes e congele plano. Facilita o descongelamento rápido na hora de cozinhar.',
          id: 'Bagi per porsi dalam kantong plastik atau wadah lalu bekukan mendatar. Ini memudahkan pencairan saat dimasak.'
        },
        sources: ['USDA', 'FSA']
      }
    }
  }
];
