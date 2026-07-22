import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const petsDir = path.join(__dirname, 'data/blogs/pets');
const itemsDir = path.join(__dirname, 'data/pets/items');
const koBlogDir = path.join(__dirname, 'content/blog/ko');

const TODAY = '2026-07-22';

const petBlogsData = {
  "cockatiel-care": {
    pubDate: TODAY,
    updatedDate: TODAY,
    locales: {
      ko: {
        title: "왕관앵무의 우관 표현과 나이트 파닉 예방을 위한 3단계 데일리 케어",
        description: "사교적이고 머리 벼슬(우관)이 매력적인 왕관앵무. 밤에 깜짝 놀라는 나이트 파닉(Night Fright) 예방과 깃털 긁기 시그널 해독, 맞춤형 3단계 데일리 케어 루틴을 소개합니다.",
        authority: "Association of Avian Veterinarians (AAV) & Avian Behavior Advisory Standards",
        profile: {
          breed: "왕관앵무 (Cockatiel)",
          lifespan: "15 ~ 20년",
          sleep_pattern: "10 ~ 12시간 (규칙적인 암막 조용 수면 필수)",
          temperament: "사교적임, 호기심 다분, 음률 애호, 예민함"
        },
        intro: "노란 뺨과 머리 위 우아한 벼슬(우관)이 특징인 왕관앵무(Cockatiel)는 전 세계 반려조류 집사들에게 가장 사랑받는 소형 앵무새 품종입니다. 사람과의 강한 유대감을 형성하고 멜로디 휘파람을 즐기지만, 야생에서의 천적 경계 본능이 남아있어 밤중에 작은 빛이나 소음에도 크게 놀라 새장 속에서 날뛰는 '나이트 파닉(Night Fright)'을 겪기 쉽습니다. 조류 수의사 협회(AAV)의 지침을 바탕으로, 왕관앵무의 감정 시그널을 읽고 건강한 조류 생활을 돕는 루틴을 안내합니다.",
        whyTitle: "왕관앵무의 기분 언어: 우관(벼슬)의 세밀한 신호와 긁기 표현",
        whyDesc: "왕관앵무 머리의 우관(Crest)은 기분과 경계 상태를 알려주는 안테나입니다. 우관이 머리에 바짝 붙어있을 때와 수직으로 곧게 섰을 때의 의미가 완전히 다르며, 머리를 푹 숙이고 목을 내밀 때는 깊은 신뢰의 표현입니다.",
        body_signals: [
          {
            name: "우관 바짝 세우기 & 수평 유지 (Fully Erect Crest)",
            meaning: "주변 환경에 강한 호기심을 느끼거나 새로운 소리/물체에 긴장하여 유심히 경계하고 있는 상태입니다.",
            response: "갑자기 손을 가져다 대지 말고 잔잔한 목소리로 대화하며 앵무새가 상황을 안전하게 파악하도록 기다려 줍니다."
          },
          {
            name: "머리 숙이고 목 내밀기 (Head Lowering for Scratches)",
            meaning: "보호자에게 깊은 친밀감을 느끼며 머리와 뺨 주변(우관 뿌리)을 부드럽게 긁어달라는 애정 표현입니다.",
            response: "손가락 끝으로 깃결의 반대 방향이나 뺨의 주황색 깃털 부위를 살살 다정하게 긁어줍니다."
          }
        ],
        daily_routine: [
          {
            name: "아침: 자연광 환기, 깃털 청결 점검 및 신선한 펠릿 급여",
            text: "아침 덮개를 개봉한 후 펠릿 사료와 깨끗한 물을 교체하고, 깃털 손상이나 눈곱이 없는지 비행 상태를 살핍니다."
          },
          {
            name: "낮: 새장 밖 자유 비행(방사) 및 아크릴 씹기 장난감 상호작용",
            text: "창문과 펜슬을 닫고 안전이 확보된 방에서 최소 1 - 2시간 자유 비행을 시키며 먹이 탐색 장난감(Foraging Toy)을 제공합니다."
          },
          {
            name: "저녁: 깃털 파우더 닦기 및 나이트 파닉 방지용 암막·미등 커버링",
            text: "새장 주변 깃털 파우더를 청소하고, 완전히 깜깜한 것보다는 은은한 수면 미등을 켜둔 뒤 암막 커튼을 씌워 숙면을 유도합니다."
          }
        ],
        faqs: [
          {
            question: "한밤중에 새장 안에서 비명을 지르며 날개를 펄럭이는데(나이트 파닉) 어떻게 해야 하나요?",
            answer: "즉시 방 조명을 켜고 다정한 목소리로 안심시킨 뒤, 날개나 부리에 상처가 없는지 확인하세요. 나이트 파닉 예방을 위해 새장 옆에 작은 야간 미등(Night light)을 항상 켜두는 것이 좋습니다."
          },
          {
            question: "왕관앵무 비듬(파우더)이 너무 많이 날리는데 정상인가요?",
            answer: "왕관앵무는 깃털 보호를 위한 파우더(Powder Down)가 자연스럽게 분비되는 종입니다. 공기청정기를 가동하고 일주일에 2 - 3회 부드러운 분무기 분사로 깃털 목욕을 시켜주면 파우더 날림을 줄일 수 있습니다."
          }
        ],
        tags: ["왕관앵무", "반려조류", "나이트파닉예방", "앵무새케어", "AAV지침"]
      },
      en: {
        title: "Cockatiel Crest Communication and 3-Step Care Routine to Prevent Night Frights",
        description: "Comprehensive care guide for the crested Cockatiel. Learn to decode crest body language, prevent nocturnal night frights, and master a 3-step daily routine recommended by AAV.",
        authority: "Association of Avian Veterinarians (AAV) & Avian Behavior Advisory Standards",
        profile: {
          breed: "Cockatiel",
          lifespan: "15 - 20 Years",
          sleep_pattern: "10 - 12 Hours (Requires Strict Dark & Quiet Sleep)",
          temperament: "Highly Social, Curious, Melodic, Environmentally Sensitive"
        },
        intro: "Characterized by bright orange cheeks and an elegant head crest, the Cockatiel is one of the most cherished companion birds globally. Cockatiels form deep emotional bonds with human caregivers and love whistling tunes, yet they retain wild prey instincts that make them highly susceptible to 'Night Frights'—sudden nocturnal panic attacks triggered by dim shadows or distant noises. Guided by Association of Avian Veterinarians (AAV) protocols, this guide breaks down their emotional body language and establishes a daily routine for optimal health.",
        whyTitle: "Cockatiel Communication Language: Deciphering Crest Movements and Head Bowing",
        whyDesc: "A Cockatiel's head crest acts as a sensitive emotional antenna revealing its inner state. A crest held flat against the skull versus one fully erect indicates completely different mindsets, while lowering the head is a profound gesture of trust.",
        body_signals: [
          {
            name: "Fully Erect Crest & Vertical Posture (Fully Erect Crest)",
            meaning: "Indicates intense curiosity or alert vigilance toward an unfamiliar noise, object, or sudden movement in the room.",
            response: "Avoid reaching in suddenly. Speak in low, comforting tones while allowing the bird to safely observe and assess the situation."
          },
          {
            name: "Head Lowered & Neck Extended Forward (Head Lowering for Scratches)",
            meaning: "A sign of deep trust and affection, explicitly requesting head and cheek (crest base) preening from the caregiver.",
            response: "Gently stroke the base of the crest and orange cheek feathers against the grain using your fingertip."
          }
        ],
        daily_routine: [
          {
            name: "Morning: Natural Ventilation, Feather Inspection & Fresh Pellet Feeding",
            text: "Uncover the cage, refresh high-quality pellet feed and clean water, and observe flight agility for any wing injury or eye discharge."
          },
          {
            name: "Afternoon: Supervised Free Flight & Foraging Toy Interaction",
            text: "Secure all windows and doors for 1 - 2 hours of supervised free flight in a bird-proof room while offering foraging toys to stimulate mental acuity."
          },
          {
            name: "Evening: Feather Powder Dander Wiping & Night Fright Cover Routine",
            text: "Wipe down cage powder dander, switch on a dim night-light nearby to prevent darkness panic, and drape a breathable dark cover."
          }
        ],
        faqs: [
          {
            question: "What immediate steps should I take during a midnight Night Fright episode?",
            answer: "Immediately switch on room lights, speak calmly to soothe the bird, and carefully check wings and beak for bleeding feathers. Keeping a permanent dim night-light next to the cage effectively prevents future episodes."
          },
          {
            question: "Is the heavy white powder dander from my Cockatiel normal?",
            answer: "Yes, Cockatiels naturally produce keratin powder down to waterproof and condition their feathers. Operating an HEPA air purifier and offering gentle water spray misting 2 - 3 times weekly will manage dander efficiently."
          }
        ],
        tags: ["Cockatiel", "Avian Care", "Night Fright Prevention", "Parrot Behavior", "AAV Standards"]
      },
      ja: {
        title: "オカメインコの冠羽サインとナイトフライト予防のための3ステップデイリーケア",
        description: "愛くるしい冠羽を持つオカメインコ。夜間のパニック（ナイトフライト）予防と冠羽の感情解読、AAV基準に準拠した3ステップルーチンを解説します。",
        authority: "鳥類獣医師協会 (AAV) および行動学アドバイザリー基準",
        profile: {
          breed: "オカメインコ (Cockatiel)",
          lifespan: "15 - 20年",
          sleep_pattern: "10 - 12時間 (暗く静かな規則正しい睡眠が必須)",
          temperament: "社交的、好奇心旺盛、メロディ好き、繊細"
        },
        intro: "鮮やかなオレンジ色のほっぺと頭の美しい冠羽が特徴のオカメインコは、世界中で最も愛されている小型インコです。飼い主と強い絆を結び、口笛を真似るのが大好きな反面、捕食される側の野生本能が残っているため、夜間の僅かな光や音に驚いてケージ内で暴れる「ナイトフライト（夜間パニック）」を起こしやすい一面があります。鳥類獣医師協会（AAV）のガイドラインに基づき、オカメインコの感情サインを読み解き、健康な鳥生をサポートするデイリーケアを解説します。",
        whyTitle: "オカメインコの感情表現：冠羽の動きとおねだりポーズの解読",
        whyDesc: "頭の冠羽（Crest）は感情や警戒状態をリアルタイムで伝えるアンテナです。頭にピッタリ伏せている時と垂直に立ち上がっている時では意味が全く異なり、頭を低く下げて首を差し出すのは深い信頼の証です。",
        body_signals: [
          {
            name: "冠羽をピンと垂直に立てる (Fully Erect Crest)",
            meaning: "周囲の新しい音や物体に強い好奇心を感じているか、緊張して警戒している状態を示します。",
            response: "急に手を伸びさず、優しく穏やかな声で話しかけ、インコ自身が状況を安全だと判断するのを待ちます。"
          },
          {
            name: "頭を低く下げて首を差し出す (Head Lowering for Scratches)",
            meaning: "飼い主を深く信頼しており、頭やほっぺの周り（冠羽の root）をカキカキしてほしいという愛情表現です。",
            response: "指先で毛並みと逆方向に、ほっぺのオレンジ色の羽周辺を優しく撫でてあげましょう。"
          }
        ],
        daily_routine: [
          {
            name: "朝：自然光での換気、羽の健康チェックと新鮮なペレット給餌",
            text: "朝のケージカバーを外し、ペレットと水を新鮮なものに交換し、羽の傷や目の輝き、飛行状態を確認します。"
          },
          {
            name: "昼：安全な室内での放鳥タイムとフォージングトイ体験",
            text: "窓やドアをしっかり閉めた部屋で1 - 2時間の自由飛行をさせ、フォージングトイ（おやつ探しおもちゃ）で頭を使わせます。"
          },
          {
            name: "夜：脂粉の清掃とナイトフライト防止用カバー＆常夜灯設定",
            text: "ケージ周囲の脂粉を拭き取り、完全な暗闇ではなく小さな常夜灯を点灯させた上で遮光カバーをかけ静かに休ませます。"
          }
        ],
        faqs: [
          {
            question: "夜中にケージの中で暴れ出した（ナイトフライト）時はどうすればいいですか？",
            answer: "すぐに部屋の電気をつけて優しい声で安心させ、羽やクチバシに怪我がないか確認してください。予防のためケージの横に小さな常夜灯を常に点灯させておくことが推奨されます。"
          },
          {
            question: "オカメインコの白い粉（脂粉）がたくさん飛ぶのは正常ですか？",
            answer: "はい、オカメインコは羽を保護するための脂粉（Powder Down）を自然に分泌する me 種です。空気清浄機を稼働させ、週に2 - 3回霧吹きで水浴びをさせてあげると脂粉の飛び散りを抑えられます。"
          }
        ],
        tags: ["オカメインコ", "鳥の飼い方", "ナイトフライト予防", "インコ行動学", "AAV基準"]
      },
      zh: {
        title: "玄凤鹦鹉冠羽情绪语言与预防夜惊 responses 3步日常护理",
        description: "全方位玄凤鹦鹉（Cockatiel）护理指南。解析冠羽肢体语言，科学预防夜间暴冲惊厥（Night Fright），建立AAV标准的3步日常流程。",
        authority: "国际鸟类兽医协会 (AAV) 行为护理标准",
        profile: {
          breed: "玄凤鹦鹉 (Cockatiel)",
          lifespan: "15 - 20年",
          sleep_pattern: "10 - 12小时 (需要定时遮光安静睡眠)",
          temperament: "社交性强、好歌唱、温和、环境敏感"
        },
        intro: "拥有鲜艳红腮和优雅头顶冠羽的玄凤鹦鹉（Cockatiel）是全球最受喜爱的伴侣鸟之一。它们能与主人建立深厚的情感联结并喜爱吹笛模仿歌曲，但野外被捕食者的本能使其在夜间极易因微弱光影或异响发生扑腾撞笼的‘夜惊’（Night Fright）。遵照AAV国际兽医标准，本文将详细拆解其情绪信号与日常护理 key。",
        whyTitle: "玄凤鹦鹉的情绪语言：冠羽形态与低头求摸解密",
        whyDesc: "玄凤鹦鹉头顶的冠羽是其心理状态的晴雨表。完全紧贴头骨与直立竖起代表着截然不同的情绪，而主动低头伸长脖子则是对主人表达极度信任的专属姿态。",
        body_signals: [
          {
            name: "冠羽高高竖起并保持垂直 (Fully Erect Crest)",
            meaning: "对新环境、未知的声音或新物体产生了强烈的好奇心或高度戒备状态。",
            response: "切勿突然伸出手抓握，请保持动作轻柔，用温柔的声音安抚，给其自行观察评估安全的时间。"
          },
          {
            name: "低头靠近并伸长脖子 (Head Lowering for Scratches)",
            meaning: "对主人表达极高的依赖与亲密，主动请求抚摸其头颈部与腮红羽毛。",
            response: "用手指顺着羽毛逆向轻轻挠抚其腮红与冠羽根部。"
          }
        ],
        daily_routine: [
          {
            name: "早晨：通风换气、羽毛检查与新鲜滋养丸喂食",
            text: "揭开鸟笼遮光布，更换新鲜滋养丸与净水，观察其晨间飞翔姿态与精神状况。"
          },
          {
            name: "下午：室内安全放飞与觅食玩具智力互动",
            text: "在关好门窗的安全房间内放飞1 - 2小时，并提供觅食玩具丰富其日间生活。"
          },
          {
            name: "夜晚：羽粉清理与微光小夜灯防夜惊盖笼",
            text: "清理鸟笼周围的羽粉，在笼旁保留一盏微弱小夜灯后盖上遮光布，确保优质睡眠。"
          }
        ],
        faqs: [
          {
            question: "深夜鹦鹉突然撞笼暴冲（夜惊）应该如何处理？",
            answer: "请立即打开房间大灯并用温柔的声音安抚，仔细检查翅膀羽毛是否有断裂出血。笼旁保留一盏微弱小夜灯是预防夜惊的最有效手段。"
          },
          {
            question: "玄凤鹦鹉掉落大量白色粉沫（羽粉）是正常的吗？",
            answer: "非常正常。玄凤鹦鹉会自然分泌羽粉（Powder Down）用于羽毛保养。开启HEPA空气净化器并每周进行2 - 3次温和喷雾水沐浴可有效管理羽粉。"
          }
        ],
        tags: ["玄凤鹦鹉", "伴侣鸟", "预防夜惊", "鸟类护理", "AAV标准"]
      },
      es: {
        title: "Comunicación de la Cresta de la Ninfa y Rutina de 3 Pasos para Prevenir Sustos Nocturnos",
        description: "Guía completa de cuidado para la ninfa (Cockatiel). Descifra su lenguaje corporal, previene sustos nocturnos y aplica la rutina diaria avalada por la AAV.",
        authority: "Asociación de Veterinarios de Aves (AAV) & Normas de Comportamiento Aviar",
        profile: {
          breed: "Ninfa / Carolina (Cockatiel)",
          lifespan: "15 - 20 años",
          sleep_pattern: "10 - 12 horas (Sueño estricto en oscuridad y silencio)",
          temperament: "Muy sociable, curiosa, melódica, sensible"
        },
        intro: "Conocida por sus mejillas anaranjadas y su elegante cresta, la ninfa (Cockatiel) es una de las aves de compañía más queridas. Aunque forman lazos afectivos profundos y disfrutan silbando melodías, conservan instintos de presa que las hacen propensas a 'sustos nocturnos' (Night Frights). Guiados por la AAV, explicamos su lenguaje y cuidados diarios.",
        whyTitle: "Lenguaje de la Ninfa: Significado de la Cresta y Cabeza Agachada",
        whyDesc: "La cresta de la ninfa actúa como una antena emocional. Una cresta completamente erguida transmite alerta o curiosidad, mientras que agachar la cabeza es una petición directa de caricias.",
        body_signals: [
          {
            name: "Cresta Totalmente Erguida (Fully Erect Crest)",
            meaning: "Alerta máxima o curiosidad intensa ante un sonido u objeto desconocido en la estancia.",
            response: "Evita movimientos bruscos. Háblale con voz suave y permite que evalúe su entorno con calma."
          },
          {
            name: "Cabeza Agachada y Cuello Extendido (Head Lowering)",
            meaning: "Muestra de gran confianza solicitando rascados en la nuca y las mejillas.",
            response: "Rasca suavemente la zona de la cresta y mejillas a contrapelo con la yema del dedo."
          }
        ],
        daily_routine: [
          {
            name: "Mañana: Ventilación, Inspección y Pienso Fresco",
            text: "Destapa la jaula, renueva el pienso extruido y el agua limpia, y observa su agilidad de vuelo."
          },
          {
            name: "Tarde: Vuelo Libre Seguro y Juguetes de Forrajeo",
            text: "Permite 1 - 2 horas de vuelo supervisado en una habitación segura con juguetes de búsqueda de comida."
          },
          {
            name: "Noche: Limpieza de Plumón y Luz Nocturna Anti-Sustos",
            text: "Limpia el polvo de plumas y deja una pequeña luz nocturna encendida antes de cubrir la jaula."
          }
        ],
        faqs: [
          {
            question: "¿Qué hacer ante un episodio de pánico nocturno (Night Fright)?",
            answer: "Enciende la luz de inmediato, háblale con calma y revisa sus alas por si hay plumas sangrantes. Dejar una luz de noche encendida previene nuevos sustos."
          },
          {
            question: "¿Es normal el polvo blanco que suelta la ninfa?",
            answer: "Sí, las ninfas producen plumón en polvo para proteger sus plumas. Usa un purificador de aire y ofrece baños de pulverización 2 - 3 veces por semana."
          }
        ],
        tags: ["Ninfa", "Carolina", "Cuidado de Aves", "Susto Nocturno", "Normas AAV"]
      },
      fr: {
        title: "Langage de la Huppe de la Calopsitte et Routine en 3 Étapes Anti-Frayeurs Nocturnes",
        description: "Guide complet pour la Calopsitte élégante. Décodez la huppe, prévenez les frayeurs nocturnes et suivez la routine recommandée par l'AAV.",
        authority: "Association of Avian Veterinarians (AAV) & Normes de Comportement Aviaire",
        profile: {
          breed: "Calopsitte Élégante (Cockatiel)",
          lifespan: "15 - 20 ans",
          sleep_pattern: "10 - 12 heures (Sommeil obscur et calme exige)",
          temperament: "Très sociable, curieuse, mélodieuse, sensible"
        },
        intro: "Reconnue pour ses joues oranges et sa huppe expressive, la Calopsitte est un oiseau de compagnie très affectueux. Elle développe un lien fort avec son humain mais reste sujette aux frayeurs nocturnes (Night Frights). Suivez les normes de l'AAV pour la décoder et la protéger.",
        whyTitle: "Communication de la Calopsitte: Signification de la Huppe et Demand de Gratouilles",
        whyDesc: "La huppe est une véritable antenne émotionnelle. Dressée verticalement, elle traduit l'alerte; penchée en avant avec la tête baissée, elle demande de l'affection.",
        body_signals: [
          {
            name: "Huppe Complètement Dressée (Fully Erect Crest)",
            meaning: "Vigilance accrue ou curiosité vive face à un bruit ou un objet nouveau.",
            response: "Parlez doucement et évitez les gestes brusques pour la rassurer."
          },
          {
            name: "Tête Baissée vers l'Avant (Head Lowering)",
            meaning: "Marque de confiance totale sollicitant des gratouilles sur les joues et la nappe de la huppe.",
            response: "Grattez doucement la base de la huppe à rebrousse-poil."
          }
        ],
        daily_routine: [
          {
            name: "Matin: Aération, Inspection du Plumage et Extrudés Frais",
            text: "Découvrez la cage, renouvelez l'eau et les granulés et vérifiez la vitalité de l'oiseau."
          },
          {
            name: "Après-midi: Vol Libre Sécurisé et Jouets de Recherche",
            text: "Offrez 1 - 2 heures de vol libre sécurisé avec des jouets de foraging pour stimuler son intellect."
          },
          {
            name: "Soir: Nettoyage de la Poudre de Plume et Veilleuse Anti-Panique",
            text: "Nettoyez la poudre de duvet et laissez une faible veilleuse allumée sous le drap de nuit."
          }
        ],
        faqs: [
          {
            question: "Comment réagir lors d'une panique nocturne (Night Fright) ?",
            answer: "Allumez immédiatement la lumière, rassurez l'oiseau avec une voix douce et vérifiez les ailes. Laissez toujours une veilleuse allumée."
          },
          {
            question: "La poudre blanche produite par la Calopsitte est-elle normale ?",
            answer: "Oui, c'est du duvet de poudre naturel. Utilisez un purificateur d'air HEPA et donnez des douches au vaporisateur 2 - 3 fois par semaine."
          }
        ],
        tags: ["Calopsitte", "Oiseaux de Compagnie", "Soins Aviaires", "Frayeur Nocturne", "Normes AAV"]
      },
      de: {
        title: "Nymphensittich-Haubensignale und 3-Schritte-Routine gegen nächtliche Panik",
        description: "Pflegeanleitung für Nymphensittiche. Haubensprache verstehen, Night Frights vermeiden und eine 3-Schritte-Routine nach AAV-Standards etablieren.",
        authority: "Association of Avian Veterinarians (AAV) & Verhaltensempfehlungen",
        profile: {
          breed: "Nymphensittich (Cockatiel)",
          lifespan: "15 - 20 Jahre",
          sleep_pattern: "10 - 12 Stunden (Dunkle und ruhige Nachtruhe)",
          temperament: "Gesellig, neugierig, melodisch, sensibel"
        },
        intro: "Der Nymphensittich mit seinen roten Bäckchen und der eleganten Haube gehört zu den beliebtesten Heimvögeln. Trotz ihrer Verschmustheit neigen sie wegen ihres Fluchtinstinkts zu nächtlicher Panik ('Night Frights'). Gemäß AAV-Standards lernen Sie hier ihre Sprache kennen.",
        whyTitle: "Kommunikation des Nymphensittichs: Die Sprache der Haube",
        whyDesc: "Die Haube verrät die Stimmung des Vogels. Steht sie steil aufgerichtet, ist er wachsam; neigt er den Kopf, fordert er Kraulneinheiten ein.",
        body_signals: [
          {
            name: "Steil Aufgerichtete Haube (Fully Erect Crest)",
            meaning: "Hohe Aufmerksamkeit, Neugier oder Skepsis gegenüber neuen Reizen im Raum.",
            response: "Ruhig sprechen und keine hastigen Bewegungen machen, bis sich der Vogel beruhigt hat."
          },
          {
            name: "Gesenkter Kopf und Vorgebeugter Nacken (Head Lowering)",
            meaning: "Großes Vertrauen und die Bitte um Kraulen an den Wangen und am Hinterkopf.",
            response: "Sanft entgegen der Federrichtung an den Wangenfedern kraulen."
          }
        ],
        daily_routine: [
          {
            name: "Morgen: Lüften, Gefiedercheck und Frisches Pelletergänzungsfutter",
            text: "Käfig abdecken, frisches Wasser und Pellets anbieten sowie das Flugverhalten beobachten."
          },
          {
            name: "Nachmittag: Gesicherter Freiflug und Beschäftigungsspielzeug",
            text: "1 - 2 Stunden Freiflug im gesicherten Raum ermöglichen und Futtersuch-Spielzeug bereitstellen."
          },
          {
            name: "Abend: Gefiederstaub entfernen und Nachtlicht aktivieren",
            text: "Staub wischen und ein schwaches Nachtlicht brennen lassen, um Panikattacken zu verhindern."
          }
        ],
        faqs: [
          {
            question: "Was tun bei nächtlichen Panikattacken (Night Frights)?",
            answer: "Schalten Sie sofort das Licht ein und beruhigen Sie den Vogel mit sanfter Stimme. Ein kleines Nachtlicht verhindert zukünftige Schreckeinheiten."
          },
          {
            question: "Ist der weiße Gefiederstaub beim Nymphensittich normal?",
            answer: "Ja, Nymphensittiche produzieren Puderdunen zur Gefiederpflege. Ein Luftreiniger und Duschen mit der Sprühflasche 2 - 3 Mal pro Woche helfen."
          }
        ],
        tags: ["Nymphensittich", "Vogelpflege", "Night Fright", "Vogelverhalten", "AAV-Standards"]
      },
      pt: {
        title: "Comunicação da Crista da Calopsita e Rotina em 3 Passos Contra Sustos Noturnos",
        description: "Guia completo de cuidados para Calopsita. Entenda a linguagem da crista, previna o pânico noturno e siga uma rotina recomendada pela AAV.",
        authority: "Associação de Veterinários de Aves (AAV) & Padrões Comportamentais",
        profile: {
          breed: "Calopsita (Cockatiel)",
          lifespan: "15 - 20 anos",
          sleep_pattern: "10 - 12 horas (Sono escuro e tranquilo obrigatório)",
          temperament: "Muito sociável, curiosa, melódica, sensível"
        },
        intro: "Famosa pelas bochechas laranjas e crista graciosa, a Calopsita é uma ave inteligente e afetuosa. Contudo, seu instinto de presa a torna propensa ao 'pânico noturno' (Night Frights). Com base nos padrões da AAV, aprenda a decodificar seus sinais.",
        whyTitle: "Comunicação da Calopsita: O Que a Crista e a Cabeça Abaixada Revelam",
        whyDesc: "A crista é uma antena emocional. Erguida verticalmente sinaliza alerta; a cabeça abaixada é um pedido explícito de carinho na nuca.",
        body_signals: [
          {
            name: "Crista Totalmente Erguida (Fully Erect Crest)",
            meaning: "Alerta máximo ou curiosidade intensa diante de um novo som ou objeto no ambiente.",
            response: "Fale com voz calma e evite aproximações bruscas com as mãos."
          },
          {
            name: "Cabeça Abaixada e Pescoço Estendido (Head Lowering)",
            meaning: "Demonstração de profunda confiança pedindo carinho nas bochechas e nuca.",
            response: "Coce suavemente as penas da bochecha e base da crista no sentido oposto às penas."
          }
        ],
        daily_routine: [
          {
            name: "Manhã: Ventilação, Inspeção e Ração Extrusada Fresca",
            text: "Descubra a gaiola, troque a água e a ração extrusada e observe a agilidade de voo."
          },
          {
            name: "Tarde: Voo Livre Seguro e Brinquedos de Forrageamento",
            text: "Ofereça 1 - 2 horas de voo em ambiente seguro com brinquedos de busca de alimento."
          },
          {
            name: "Noite: Limpeza de Pó e Luz Noturna Anti-Susto",
            text: "Limpe o pó de penas e mantenha uma luz noturna fraca acesa perto da gaiola."
          }
        ],
        faqs: [
          {
            question: "Como agir durante um episódio de pânico noturno (Night Fright)?",
            answer: "Acenda a luz imediatamente, acalme a ave com voz suave e verifique se há penas sangrando. Deixe sempre uma luz fraca acesa durante a noite."
          },
          {
            question: "É normal a Calopsita soltar um pó branco pelas penas?",
            answer: "Sim, elas produzem penas de pó (Powder Down) naturalmente. Use um purificador de ar HEPA e ofereça banhos de borrifador 2 - 3 vezes por semana."
          }
        ],
        tags: ["Calopsita", "Aves de Estimação", "Cuidados Avícolas", "Pânico Noturno", "Padrões AAV"]
      },
      id: {
        title: "Bahasa Jambul Cockatiel dan Rutinitas 3 Langkah Mencegah Night Fright",
        description: "Panduan lengkap merawat burung Cockatiel (Parkit Australia). Pahami bahasa tubuh jambul, cegah panik malam (Night Fright), dan terapkan rutinitas AAV.",
        authority: "Association of Avian Veterinarians (AAV) & Standar Perilaku Burung",
        profile: {
          breed: "Cockatiel (Parkit Australia)",
          lifespan: "15 - 20 Tahun",
          sleep_pattern: "10 - 12 Jam (Butuh Gelap & Tenang)",
          temperament: "Sangat Sosial, Ingin Tahu, Melodis, Sensitif"
        },
        intro: "Cockatiel terkenal dengan pipi oranye ikonik dan jambul indahnya. Burung sosial ini sangat menyukai siulan dan memiliki ikatan erat dengan pemiliknya, namun rentan mengalami panik malam (Night Fright) akibat bayangan atau suara mendadak. Berdasarkan panduan Association of Avian Veterinarians (AAV), berikut adalah panduan memahami bahasa tubuh dan rutinitas kesehatannya.",
        whyTitle: "Komunikasi Cockatiel: Arti Gerakan Jambul dan Menundukkan Kepala",
        whyDesc: "Jambul di kepala adalah antena emosi. Jambul tegak lurus menunjukkan kewaspadaan atau rasa ingin tahu tinggi, sementara menundukkan kepala adalah ekspresi kepercayaan mendalam.",
        body_signals: [
          {
            name: "Jambul Tegak Lurus & Postur Vertikal (Fully Erect Crest)",
            meaning: "Rasa ingin tahu tinggi atau kewaspadaan terhadap suara maupun benda baru di ruangan.",
            response: "Bicara dengan nada lembut dan hindari gerakan mendadak agar burung merasa aman."
          },
          {
            name: "Menundukkan Kepala & Menjulurkan Leher (Head Lowering)",
            meaning: "Tanda kepercayaan mendalam dan meminta elusan di area pipi serta pangkal jambul.",
            response: "Usap lembut bulu di sekitar pipi oranye dan pangkal jambul berlawanan arah bulu."
          }
        ],
        daily_routine: [
          {
            name: "Pagi: Ventilasi Udara, Inspeção Bulu & Pelet Segar",
            text: "Buka penutup kandang, ganti air bersih dan pelet nutrisi, lalu amati kelincahan terbangnya."
          },
          {
            name: "Siang: Terbang Bebas Aman & Mainan Foraging",
            text: "Beri waktu 1 - 2 jam terbang bebas di ruangan aman dengan mainan pencari makan (foraging toys)."
          },
          {
            name: "Malam: Pembersihan Debu Bulu & Lampu Tidur Anti-Panik",
            text: "Bersihkan debu bulu, nyalakan lampu tidur redup dekat kandang, dan pasang penutup penahan cahaya."
          }
        ],
        faqs: [
          {
            question: "Bagaimana cara menangani panik malam (Night Fright) saat tengah malam?",
            answer: "Nyalakan lampu ruangan segera, bicara lembut untuk menenangkan, dan periksa apakah ada bulu sayap yang patah. Pasang lampu malam redup di dekat kandang secara permanen."
          },
          {
            question: "Apakah debu putih (powder dander) pada Cockatiel itu normal?",
            answer: "Sangat normal. Cockatiel secara alami menghasilkan debu bedak untuk merawat bulunya. Gunakan pemurni udara HEPA dan beri mandi semprot halus 2 - 3 kali seminggu."
          }
        ],
        tags: ["Cockatiel", "Parkit Australia", "Perawatan Burung", "Night Fright", "Standar AAV"]
      }
    }
  },

  "leopard-gecko-care": {
    pubDate: TODAY,
    updatedDate: TODAY,
    locales: {
      ko: {
        title: "레오파드 게코의 꼬리 신호와 올바른 탈피를 돕는 3단계 데일리 케어",
        description: "입문용 반려 파충류 1위 레오파드 게코. 꼬리 흔들기 감정 신호와 은신처 습도 관리를 통한 완벽 탈피, 핫존/쿨존 온습도 3단계 케어를 정리합니다.",
        authority: "Association of Reptilian and Amphibian Veterinarians (ARAV) Care Guidelines",
        profile: {
          breed: "레오파드 게코 (Leopard Gecko)",
          lifespan: "15 ~ 20년",
          sleep_pattern: "12 ~ 14시간 (주간 사막 은신처 수면 / 야행성)",
          temperament: "온순함, 느긋함, 독자적, 보수적 환경 선호"
        },
        intro: "특유의 웃는 듯한 얼굴과 표범 무늬 꼬리를 가진 레오파드 게코(Leopard Gecko)는 온순하고 수명이 긴 대표적 파충류 반려동물입니다. 파충류 및 양서류 수의사회(ARAV)의 권고에 따르면, 레오파드 게코는 체온 조절을 외부 열원에 의존하는 변온동물이므로 사육장 내 핫존(Hot Zone 30°C ~ 32°C)과 쿨존(Cool Zone 24°C ~ 26°C)의 명확한 경계 및 탈피용 습성 은신처(Wet Cave) 유지가 생존의 핵심입니다.",
        whyTitle: "레오파드 게코의 신체 언어: 꼬리 흔들기와 탈피 전조 신호",
        whyDesc: "게코의 통통한 꼬리는 영양 저장소이자 감정의 표현 장치입니다. 천천히 꼬리를 파도치듯 흔드는 행동과 사냥 시 꼬리 끝을 기분 좋게 털어대는 시그널을 구분할 수 있어야 합니다.",
        body_signals: [
          {
            name: "꼬리를 높이 들고 천천히 좌우로 흔듦 (Slow Tail Waving)",
            meaning: "위협을 느끼거나 낯선 개체를 경계하며 '나도 공격할 수 있다'는 신호를 보내는 강한 경계 상태입니다.",
            response: "핸들링을 즉시 중단하고 손을 천천히 밖으로 빼며 게코가 안정을 찾을 때까지 자극하지 않습니다."
          },
          {
            name: "몸 색이 하얗게 뜨고 눈을 자주 비빔 (Pre-Shedding Signal)",
            meaning: "묵은 허물을 벗겨내기 위한 탈피(Shedding) 직전 단계로, 피부가 건조해지고 민감해진 상태입니다.",
            response: "습성 은신처의 습지를 촉촉하게 적셔주고 탈피 부전이 생기지 않도록 습도를 70% 이상 올려줍니다."
          }
        ],
        daily_routine: [
          {
            name: "아침: 핫존/쿨존 온도계 확인 및 습성 은신처 수분 분무",
            text: "하부 히팅 매트 온도(30°C ~ 32°C)를 점검하고 습성 은신처 내부 키친타월/수태에 온수를 촉촉하게 분무합니다."
          },
          {
            name: "낮: 정적 유지를 통한 주간 야행성 수면 환경 보장",
            text: "직사광선을 피하고 낮 동안 깊은 수면을 취할 수 있도록 조용하고 어두운 은신처 상태를 유지합니다."
          },
          {
            name: "저녁: 살아있는 곤충(귀뚜라미/밀웜) 칼슘 다스팅 급여 및 배설물 치우기",
            text: "칼슘제(D3 포함/미포함 교대)를 묻힌 먹이를 핀셋으로 급여하고 바닥재의 배설물을 즉시 치웁니다."
          }
        ],
        faqs: [
          {
            question: "발가락 끝에 흰 허물이 남아있는데 직접 떼어줘도 되나요?",
            answer: "발가락에 남은 탈피 껍질을 방치하면 괴사할 수 있습니다. 따뜻한 물(30°C)에 5분간 온수욕을 시킨 뒤 젖은 면봉으로 살살 문질러 제거해 주세요."
          },
          {
            question: "꼬리가 갑자기 얇아졌는데 질병인가요?",
            answer: "게코의 꼬리는 영양분과 지방의 저장소입니다. 꼬리가 급격히 얇아진다면 거식증, 거식 거품, 혹은 거대 파라사이트 감염일 수 있으니 수의사 진료가 필요합니다."
          }
        ],
        tags: ["레오파드게코", "파충류케어", "게코탈피", "ARAV지침", "파충류사육"]
      },
      en: {
        title: "Leopard Gecko Tail Communication and 3-Step Care Routine for Safe Shedding",
        description: "Comprehensive care guide for Leopard Geckos. Learn to decode tail-waving defensive signals, manage humid hides for shedding, and structure ARAV thermal zones.",
        authority: "Association of Reptilian and Amphibian Veterinarians (ARAV) Care Guidelines",
        profile: {
          breed: "Leopard Gecko",
          lifespan: "15 - 20 Years",
          sleep_pattern: "12 - 14 Hours (Nocturnal Desert Hide Sleep)",
          temperament: "Docile, Calm, Solitary, Sensitive to Environment"
        },
        intro: "With their smiling expressions and distinctive spotted tails, Leopard Geckos are the premier choice for reptile companion keepers. According to ARAV guidelines, as ectothermic creatures dependent on external heat sources, establishing a precise thermal gradient (Hot Zone 30°C ~ 32°C / Cool Zone 24°C ~ 26°C) and maintaining a humid hide (Wet Cave) is fundamental to their survival.",
        whyTitle: "Leopard Gecko Body Language: Deciphering Tail Movements and Pre-Shedding Clues",
        whyDesc: "A gecko's plump tail is both a vital fat reservoir and a primary communication instrument. Distinguishing between slow, defensive tail waving and joyful tail wiggles during feeding prevents unnecessary handling stress.",
        body_signals: [
          {
            name: "Tail Elevated & Waved Slowly in S-Curves (Slow Tail Waving)",
            meaning: "A high-alert defensive posture indicating the gecko feels threatened or startled by a predator signal.",
            response: "Immediately halt handling, withdraw your hand slowly, and allow the gecko to retreat into its shelter undisturbed."
          },
          {
            name: "Skin Becoming Dull White & Eye Rubbing (Pre-Shedding Signal)",
            meaning: "The imminent onset of shedding (ecdysis); old keratin layers are loosening and require high humidity.",
            response: "Generously mist moss or paper towels inside the humid hide with warm water to raise local humidity above 70%."
          }
        ],
        daily_routine: [
          {
            name: "Morning: Thermal Gradient Inspection & Humid Hide Warm Misting",
            text: "Verify under-tank heat mat temperatures (30°C ~ 32°C) and mist the humid hide substrate with warm water."
          },
          {
            name: "Afternoon: Daytime Quietness & Shielded Hide Darkness Maintenance",
            text: "Avoid direct sunlight and loud environmental vibrations to ensure deep, undisturbed nocturnal rest during daylight hours."
          },
          {
            name: "Evening: Tongs Feeding with Dusted Live Insects & Spot Cleaning",
            text: "Feed gut-loaded crickets or mealworms dusted with calcium (alternating D3 supplements) using tongs, and immediately remove waste from substrate."
          }
        ],
        faqs: [
          {
            question: "How should I safely handle stuck shed skin remaining on toe tips?",
            answer: "Retained toe shed can constrict blood circulation and lead to toe necrosis. Soak the feet in a shallow warm water bath (30°C) for 5 minutes, then roll off skin gently using a damp cotton swab."
          },
          {
            question: "What does it mean if my Leopard Gecko's tail suddenly thins out?",
            answer: "A gecko's tail stores nutrient fat reserves. Rapid tail thinning indicates anorexia, severe stress, or gastrointestinal parasite infection requiring immediate ARAV vet diagnosis."
          }
        ],
        tags: ["Leopard Gecko", "Reptile Care", "Shedding Guide", "ARAV Standards", "Terrarium Maintenance"]
      },
      ja: {
        title: "ヒョウモントカゲモドキの尾サインと脱皮不全を防ぐ3ステップデイリーケア",
        description: "人気のヒョウモントカゲモドキ(レオパ)。しっぽの警戒サイン解読、脱皮不全を防ぐ湿性シェルター管理、ARAV基準の温度勾配を解説します。",
        authority: "爬虫類・両生類獣医師協会 (ARAV) 飼育ガイドライン",
        profile: {
          breed: "ヒョウモントカゲモドキ (Leopard Gecko)",
          lifespan: "15 - 20年",
          sleep_pattern: "12 - 14時間 (夜行性・シェルター睡眠)",
          temperament: "温厚、マイペース、単独飼育向き、環境に繊細"
        },
        intro: "微笑んでいるような表情とヒョウ柄のしっぽが魅力のヒョウモントカゲモドキ（レオパ）は、最も親しまれているペット用爬虫類です。ARAV（爬虫類・両生類獣医師協会）の指針に従い、外部熱源に依存する変温動物として、ケージ内にホットゾーン（30°C ~ 32°C）とクールゾーン（24°C ~ 26°C）の温度勾配を作り、脱皮用の湿性シェルター（Wet Cave）を維持することが健康維持の根幹です。",
        whyTitle: "ヒョウモントカゲモドキのボディランゲージ：しっぽの動きと脱皮前兆の解読",
        whyDesc: "ぷっくりとした尾は栄養の貯蔵庫であり、感情を伝えるアンテナです。威嚇のためのゆっくりとした尾振りと、給餌時の喜びの振りを区別することが重要です。",
        body_signals: [
          {
            name: "尾を高く上げてゆっくり左右に振る (Slow Tail Waving)",
            meaning: "強い警戒を感じ、「攻撃するぞ」と相手を威嚇している緊急警戒状態です。",
            response: "ハンドリングを直ちに中止し、手をゆっくり引き、トカゲが落ち着くまで静かに見守ります。"
          },
          {
            name: "体色が白くくすみ目をこする (Pre-Shedding Signal)",
            meaning: "古い皮が剥がれ始める脱皮直前のサインで、皮膚が乾燥し非常に繊細になっています。",
            response: "湿性シェルター内の水苔やキッチンペーパーをぬるま湯で湿らせ、湿度を70%以上に高めます。"
          }
        ],
        daily_routine: [
          {
            name: "朝：温度勾配の確認と湿性シェルターの給水",
            text: "パネルヒーターの温度（30°C ~ 32°C）を確認し、湿性シェルターにぬるま湯をスプレーして湿度を保ちます。"
          },
          {
            name: "昼：静かな環境での昼間睡眠の確保",
            text: "直射日光を避け、暗く静かな環境を保ち、夜行性の睡眠を妨げないようにします。"
          },
          {
            name: "夜：カルシウムをまぶした給餌とフンの清掃",
            text: "カルシウムパウダーをまぶしたコオロギ等をピンセットで与え、床材の排泄物を速やかに清掃します。"
          }
        ],
        faqs: [
          {
            question: "指先に脱皮ガラが残っている時はどうすればいいですか？",
            answer: "指の皮が残ると血流が止まり壊死する恐れがあります。ぬるま湯(30°C)で5分温浴させ、濡らした綿棒で優しく取り除いてください。"
          },
          {
            question: "しっぽが急に細くなってきたのは病気ですか？",
            answer: "しっぽは脂肪の蓄積場所です。急激に細くなる場合は拒食、ストレス、寄生虫感染の可能性があるため獣医師の診察が必要です。"
          }
        ],
        tags: ["ヒョウモントカゲモドキ", "レオパ", "爬虫類の飼い方", "脱皮不全予防", "ARAV基準"]
      },
      zh: {
        title: "豹纹守宫尾部语言与辅助顺畅蜕皮 responses 3步日常护理",
        description: "首选伴侣爬宠豹纹守宫护理全攻略。解读摇尾警戒信号、湿藏避难所管理与ARAV标准的冷热温区建立。",
        authority: "国际两栖爬行动物兽医协会 (ARAV) 护理指南",
        profile: {
          breed: "豹纹守宫 (Leopard Gecko)",
          lifespan: "15 - 20年",
          sleep_pattern: "12 - 14小时 (夜行性、躲避穴睡眠)",
          temperament: "温顺、安静、喜独居、环境敏感"
        },
        intro: "豹纹守宫（Leopard Gecko）因其微笑般的面容和斑斓的尾巴而深受全球爬宠爱好者喜爱。遵照ARAV权威指南，作为依赖外部热源的变温动物，饲养缸内必须建立清晰的热区（30°C ~ 32°C）与冷区（24°C ~ 26°C），并提供湿躲避（Wet Cave）以防蜕皮不畅，这是保证其生存的关键。",
        whyTitle: "豹纹守宫的肢体语言：摇尾警戒与蜕皮前兆解密",
        whyDesc: "守宫肥硕的尾巴既是营养脂肪仓库也是重要的情绪表达器官。分清缓慢S型摇尾防卫与捕食时兴奋抖尾的区别，能有效避免应激。",
        body_signals: [
          {
            name: "尾巴高举并缓慢S型摆动 (Slow Tail Waving)",
            meaning: "感到受威胁或受惊，发出的防御性警告信号，表示‘我也具有攻击性’。",
            response: "立即停止上手，缓慢收回手部，让守宫自行回到躲避穴中恢复平静。"
          },
          {
            name: "全身体色发白发雾并频繁擦眼 (Pre-Shedding Signal)",
            meaning: "旧角质皮即脱落的蜕皮（Shedding）前兆，皮肤非常敏感干燥。",
            response: "向湿躲避内的水苔或湿纸巾喷洒温水，保持局部高湿度达70%以上。"
          }
        ],
        daily_routine: [
          {
            name: "早晨：温区检查与湿躲避喷雾加湿",
            text: "检查加热垫温度（30°C ~ 32°C），确保湿躲避内垫材湿润。"
          },
          {
            name: "下午：保持环境安静保障日间睡眠",
            text: "避免阳光直射与剧烈震动，确保其白天暗处安心休眠。"
          },
          {
            name: "夜晚：沾取钙粉活体喂食与清理排泄物",
            text: "用镊子夹取裹有钙粉的蟋蟀或面包虫喂食，并及时清理垫材上的粪便。"
          }
        ],
        faqs: [
          {
            question: "脚趾上残留旧皮应该如何安全处理？",
            answer: "脚趾残皮会导致血液循环受阻发生坏死。可用30°C温水浸泡5 - 10分钟，再用湿棉签轻轻滚擦剥离。"
          },
          {
            question: "豹纹守宫尾巴突然变细预示着什么？",
            answer: "守宫尾巴储存着营养脂肪。尾巴快速变细可能预示拒食、严重应激或肠道寄生虫感染，需立即请兽医诊治。"
          }
        ],
        tags: ["豹纹守宫", "爬宠护理", "蜕皮管理", "ARAV指南", "温区建立"]
      },
      es: {
        title: "Lenguaje de la Cola del Gecko Leopardo y Rutina de 3 Pasos para una Muda Sana",
        description: "Guía completa de cuidado para el Gecko Leopardo. Interpreta el movimiento defensivo de su cola, gestiona cuevas húmedas y ajusta las zonas térmicas ARAV.",
        authority: "Asociación de Veterinarios de Reptiles y Anfibios (ARAV) Guías de Cuidado",
        profile: {
          breed: "Gecko Leopardo (Leopard Gecko)",
          lifespan: "15 - 20 años",
          sleep_pattern: "12 - 14 horas (Nocturno, refugio en cueva)",
          temperament: "Dócil, tranquilo, solitario, sensible"
        },
        intro: "El Gecko Leopardo es el reptil doméstico más popular del mundo. Según la ARAV, al ser un animal ectotérmico que depende de fuentes externas de calor, mantener una gradación térmica correcta (Zona Caliente 30°C ~ 32°C / Zona Fría 24°C ~ 26°C) y una cueva húmeda para la muda es vital para su supervivencia.",
        whyTitle: "Lenguaje Corporal del Gecko: Movimientos de Cola y Muda de Piel",
        whyDesc: "Su cola regordeta es una reserva de grasa y una herramienta de comunicación. Diferenciar el balanceo lento defensivo de la agitación alegre durante la caza previene el estrés.",
        body_signals: [
          {
            name: "Balanceo Lento de Cola en Forma de 'S' (Slow Tail Waving)",
            meaning: "Señal de advertencia defensiva de alta alerta cuando se siente amenazado o asustado.",
            response: "Detén la manipulación de inmediato, retira la mano despacio y deja que se refugie."
          },
          {
            name: "Piel Pálida Blanquecina y Frotado de Ojos (Pre-Shedding Signal)",
            meaning: "Inicio del proceso de muda de piel; las capas viejas se desprenden y requieren alta humedad.",
            response: "Pulveriza agua tibia en la cueva húmeda para elevar la humedad por encima del 70%."
          }
        ],
        daily_routine: [
          {
            name: "Mañana: Control Térmico e Humidificación de Cueva",
            text: "Comprueba la temperatura de la manta térmica (30°C ~ 32°C) e humedece el sustrato de la cueva."
          },
          {
            name: "Tarde: Entorno Tranquilo para Descanso Diurno",
            text: "Evita luces directas y ruidos fuertes para respetar su ciclo de sueño nocturno."
          },
          {
            name: "Noche: Alimentación con Calcio e Higiene del Sustrato",
            text: "Alimenta con insectos espolvoreados con calcio mediante pinzas y limpia las heces."
          }
        ],
        faqs: [
          {
            question: "¿Qué hacer si queda piel retenida en las puntas de los dedos?",
            answer: "La piel retenida corta la circulación y causa necrosis. Báñalo en agua tibia (30°C) durante 5 minutos y retírala suavemente con un bastoncillo húmedo."
          },
          {
            question: "¿Por qué la cola de mi gecko se ha vuelto delgada de repente?",
            answer: "La cola almacena grasa nutriente. Su adelgazamiento rápido indica anorexia, estrés severo o parásitos intestinales que requieren atención veterinaria."
          }
        ],
        tags: ["Gecko Leopardo", "Reptiles", "Cuidados de Mascotas", "Muda de Piel", "Normas ARAV"]
      },
      fr: {
        title: "Signaux de Queue du Gecko Léopard et Routine en 3 Étapes pour une Mue Réussie",
        description: "Guide complet pour le Gecko Léopard. Décodez le mouvement défensif de la queue, gérez la cachette humide et organisez le gradient thermique ARAV.",
        authority: "Association of Reptilian and Amphibian Veterinarians (ARAV)",
        profile: {
          breed: "Gecko Léopard (Leopard Gecko)",
          lifespan: "15 - 20 ans",
          sleep_pattern: "12 - 14 heures (Nocturne, sommeil en cachette)",
          temperament: "Docile, calme, solitaire, sensible"
        },
        intro: "Le Gecko Léopard est le reptile préféré des passionnés. Suivant les normes ARAV, en tant qu'animal ectotherme, établir un gradient thermique strict (Point Chaud 30°C ~ 32°C / Point Frais 24°C ~ 26°C) et maintenir une boîte à mue humide (Wet Cave) est indispensable.",
        whyTitle: "Langage Corporel: Mouvement de Queue et Indices de Mue",
        whyDesc: "Sa queue charnue sert de réserve de graisse et d'organe de communication. Distinguer l'ondulation lente défensive du frétillement lors de la chasse évite le stress.",
        body_signals: [
          {
            name: "Ondulation Lente de la Queue en S (Slow Tail Waving)",
            meaning: "Avertissement défensif; le gecko se sent menacé ou surpris par un prédateur.",
            response: "Cessez toute manipulation, retirez la main lentement et laissez-le se cacher."
          },
          {
            name: "Peau Blanchâtre et Frottement des Yeux (Pre-Shedding Signal)",
            meaning: "Début du processus de mue (ecdysis); la peau a besoin d'une forte humidité.",
            response: "Vaporisez de l'eau tiède sur la mousse de la cachette humide pour dépasser 70% d'humidité."
          }
        ],
        daily_routine: [
          {
            name: "Matin: Contrôle de Température & Vaporisation Humide",
            text: "Contrôlez le point chaud (30°C ~ 32°C) et vaporisez la cachette humide."
          },
          {
            name: "Après-midi: Repos Diurne Calme dans l'Obscurité",
            text: "Garantissez l'obscurité et le calme pour respecter son sommeil nocturne."
          },
          {
            name: "Soir: Repas Enrichi en Calcium à la Pince & Nettoyage",
            text: "Donnez des insectes saupoudrés de calcium à la pince et retirez les déjections."
          }
        ],
        faqs: [
          {
            question: "Que faire en cas de reste de mue bloqué sur les doigts ?",
            answer: "Le reste de mue peut couper la circulation. Faites un bain d'eau tiède (30°C) de 5 minutes et retirez délicatement la peau avec un coton-tige mouillé."
          },
          {
            question: "Pourquoi la queue de mon gecko s'amincit-elle rapidement ?",
            answer: "La queue stocke les réserves de graisse. Un amincissement rapide indique une anorexie, un stress intense ou une maladie parasitaire nécessitant un vétérinaire."
          }
        ],
        tags: ["Gecko Léopard", "Reptiles", "Soins Terrario", "Mue", "Normes ARAV"]
      },
      de: {
        title: "Leopardgecko-Schwanzsignale und 3-Schritte-Routine für eine sichere Häutung",
        description: "Pflegeanleitung für Leopardgeckos. Schwanzbewegungen verstehen, Feuchthöhlen pflegen und ARAV-Temperaturzonen korrekt einstellen.",
        authority: "Association of Reptilian and Amphibian Veterinarians (ARAV)",
        profile: {
          breed: "Leopardgecko (Leopard Gecko)",
          lifespan: "15 - 20 Jahre",
          sleep_pattern: "12 - 14 Stunden (Nachtaktiv, Höhlenruhe)",
          temperament: "Friedlich, ruhig, einzelgängerisch, sensibel"
        },
        intro: "Der Leopardgecko ist das beliebteste Heimreptil. Gemäß ARAV-Richtlinien sind ein klares Temperaturgefälle (Warmzone 30°C ~ 32°C / Kaltzone 24°C ~ 26°C) und eine feuchte Häutungshöhle (Wet Cave) lebenswichtig für diese wechselwarmen Tiere.",
        whyTitle: "Körpersprache: Schwanzwedeln & Häutungssignale Verstehen",
        whyDesc: "Der dicke Schwanz dient als Fett-Speicher und Kommunikationsmittel. Unterscheiden Sie langsames Abwehr-Wedeln von freudigem Wackeln bei der Jagd.",
        body_signals: [
          {
            name: "Langsames S-förmiges Schwanzwedeln (Slow Tail Waving)",
            meaning: "Starke Abwehrreaktion bei Bedrohung oder Schreck vor Fressfeinden.",
            response: "Handhabung sofort stoppen, Hand langsam zurückziehen und den Gecko in Ruhe lassen."
          },
          {
            name: "Matte, weißliche Haut & Augenreiben (Pre-Shedding Signal)",
            meaning: "Bevorstehende Häutung; alte Hautschichten lösen sich und brauchen hohe Feuchtigkeit.",
            response: "Feuchthöhle gründlich mit warmem Wasser einsprühen, um über 70% Luftfeuchtigkeit zu erreichen."
          }
        ],
        daily_routine: [
          {
            name: "Morgen: Temperaturkontrolle & Höhle Befeuchten",
            text: "Wärmematte (30°C ~ 32°C) prüfen und das Substrat der Feuchthöhle besprühen."
          },
          {
            name: "Nachmittag: Ungestörte Tagruhe im Dunkeln Gewährleisten",
            text: "Direktes Sonnenlicht und Vibrationen vermeiden, um den Schlaf nicht zu stören."
          },
          {
            name: "Abend: Kalziumfütterung mit der Pinzette & Kot Entfernen",
            text: "Bestäubte Insekten per Pinzette füttern und Kotreste sofort aus dem Substrat entfernen."
          }
        ],
        faqs: [
          {
            question: "Was tun bei Häutungsresten an den Zehenspitzen?",
            answer: "Hautreste können die Blutzufuhr abschnüren und zum Absterben der Zehen führen. Ein 5-minütiges warmes Fußbad (30°C) machen und die Haut mit feuchtem Wattestäbchen abrollen."
          },
          {
            question: "Warum wird der Schwanz meines Leopardgeckos plötzlich dünn?",
            answer: "Der Schwanz speichert Fettreserven. Rascher Gewichtsverlust deutet auf Anorexie, Stress oder Parasitenbefall hin und erfordert einen Tierarztbesuch."
          }
        ],
        tags: ["Leopardgecko", "Reptilienpflege", "Häutung", "ARAV-Standards", "Terraristik"]
      },
      pt: {
        title: "Comunicação da Cauda do Gecko Leopardo e Rotina em 3 Passos Para Troca de Pele",
        description: "Guia completo de cuidados para o Gecko Leopardo. Interprete os movimentos defensivos da cauda, cuide da toca úmida e ajuste as zonas de temperatura ARAV.",
        authority: "Associação de Veterinários de Répteis e Anfíbios (ARAV)",
        profile: {
          breed: "Gecko Leopardo (Leopard Gecko)",
          lifespan: "15 - 20 anos",
          sleep_pattern: "12 - 14 horas (Noturno, sono na toca)",
          temperament: "Dócil, calmo, solitário, sensível"
        },
        intro: "O Gecko Leopardo é o réptil de estimação mais querido do mundo. Conforme a ARAV, por ser um animal ectotérmico, manter um gradiente térmico adequado (Zona Quente 30°C ~ 32°C / Zona Fria 24°C ~ 26°C) e umidade na toca de muda é essencial.",
        whyTitle: "Linguagem Corporal: Balanço da Cauda e Mudança de Pele",
        whyDesc: "Sua cauda armazena gordura e serve de comunicação. Diferenciar o balanço lento de defesa do balanço rápido de caça evita estresse.",
        body_signals: [
          {
            name: "Balanço Lento da Cauda em Formato de 'S' (Slow Tail Waving)",
            meaning: "Sinal de defesa quando se sente ameaçado ou assustado por algum perigo.",
            response: "Pare o manuseio imediatamente, retire a mão devagar e deixe-o recuar para a toca."
          },
          {
            name: "Pele Opaca Esbranquiçada e Fricção nos Olhos (Pre-Shedding Signal)",
            meaning: "Início do processo de troca de pele (muda); exige alta umidade local.",
            response: "Umedeça a toca úmida com água morna para elevar a umidade acima de 70%."
          }
        ],
        daily_routine: [
          {
            name: "Manhã: Checagem Térmica e Umedecer Toca",
            text: "Verifique a temperatura do aquecedor (30°C ~ 32°C) e borrife água na toca úmida."
          },
          {
            name: "Tarde: Ambiente Calmo e Escuro para Descanso",
            text: "Evite luzes fortes e ruídos à tarde para respeitar o sono noturno."
          },
          {
            name: "Noite: Alimentação com Cálcio via Pinça e Limpeza",
            text: "Alimente com insetos polvilhados com cálcio e limpe as fezes do substrato."
          }
        ],
        faqs: [
          {
            question: "O que fazer com pele presa nas pontas dos dedos?",
            answer: "A pele presa pode causar necrose dos dedos. Faça um banho morno (30°C) por 5 minutos e remova a pele com um cotonete úmido."
          },
          {
            question: "Por que a cauda do meu gecko emagreceu rapidamente?",
            answer: "A cauda armazena reservas de gordura. O emagrecimento rápido indica anorexia, estresse ou parasitas e exige veterinário ARAV."
          }
        ],
        tags: ["Gecko Leopardo", "Répteis", "Cuidados com Pet", "Troca de Pele", "Padrões ARAV"]
      },
      id: {
        title: "Bahasa Ekor Leopard Gecko dan Rutinitas 3 Langkah untuk Ganti Kulit Aman",
        description: "Panduan lengkap merawat Leopard Gecko. Pahami gerak ekor pertahanan, kelola tempat sembunyi lembap (Wet Cave), dan atur zona suhu terarium standar ARAV.",
        authority: "Association of Reptilian and Amphibian Veterinarians (ARAV) Care Guidelines",
        profile: {
          breed: "Leopard Gecko",
          lifespan: "15 - 20 Tahun",
          sleep_pattern: "12 - 14 Jam (Nocturnal, Tidur di Tempat Sembunyi)",
          temperament: "Jinak, Tenang, Soliter, Sensitif Lingkungan"
        },
        intro: "Dengan senyuman khas dan ekor bintik-bintik yang indah, Leopard Gecko adalah pilihan utama pencinta reptil. Berdasarkan panduan ARAV, sebagai hewan ektotermik yang bergantung pada suhu luar, menyediakan gradien suhu yang tepat (Zona Panas 30°C ~ 32°C / Zona Dingin 24°C ~ 26°C) serta tempat sembunyi lembap (Wet Cave) adalah kunci utama kelangsungan hidupnya.",
        whyTitle: "Bahasa Tubuh Gecko: Gerakan Ekor Pertahanan & Tanda Moulting",
        whyDesc: "Ekor gecko yang gemuk berfungsi sebagai cadangan lemak dan alat komunikasi. Membedakan gerakan ekor perlahan saat terancam dengan getaran gembira saat berburu sangat penting agar tidak menimbulkan stres.",
        body_signals: [
          {
            name: "Ekor Diangkat & Mengayun Perlahan Bentuk 'S' (Slow Tail Waving)",
            meaning: "Postur pertahanan kewaspadaan tinggi saat gecko merasa terancam atau kaget oleh potensi bahaya.",
            response: "Hentikan memegang gecko segera, tarik tangan perlahan, dan biarkan gecko bersembunyi tanpa gangguan."
          },
          {
            name: "Kulit Memucat Putih Kusam & Menggosok Mata (Pre-Shedding Signal)",
            meaning: "Tanda awal proses berganti kulit (moulting/ecdysis); lapisan kulit lama terlepas dan membutuhkan kelembapan tinggi.",
            response: "Semprotkan air hangat pada alas di dalam tempat sembunyi lembap untuk menaikkan kelembapan di atas 70%."
          }
        ],
        daily_routine: [
          {
            name: "Pagi: Cek Gradien Suhu Terarium & Semprot Tempat Sembunyi Lembap",
            text: "Cek suhu alas pemanas (30°C ~ 32°C) dan basahi alas tempat sembunyi lembap dengan air hangat."
          },
          {
            name: "Siang: Suasana Tenang & Tempat Sembunyi Gelap untuk Tidur Siang",
            text: "Jauhkan dari sinar matahari langsung dan kebisingan agar tidur nokturnalnya tidak terganggu."
          },
          {
            name: "Malam: Beri Pakan Serangga Ber-Kalsium dengan Pinset & Bersihkan Kotoran",
            text: "Beri makan jangkrik tabur kalsium menggunakan pinset dan bersihkan kotoran dari alas terarium."
          }
        ],
        faqs: [
          {
            question: "Bagaimana cara menangani sisa kulit ganti yang tersangkut di ujung jari kaki?",
            answer: "Sisa kulit di jari dapat menghentikan sirkulasi darah dan menyebabkan nekrosis (kematian jaringan jari). Rendam kaki gecko dalam air hangat (30°C) selama 5 menit lalu usap perlahan dengan cotton bud basah."
          },
          {
            question: "Mengapa ekor Leopard Gecko saya tiba-tiba mendadak mengecil dan kurus?",
            answer: "Ekor gecko menyimpan cadangan lemak nutrisi. Ekor yang mendadak kurus menandakan gejala anoreksia, stres berat, atau infeksi parasit pencernaan yang membutuhkan pemeriksaan dokter hewan ARAV."
          }
        ],
        tags: ["Leopard Gecko", "Reptil", "Perawatan Gecko", "Moulting Aman", "Standar ARAV"]
      }
    }
  },

  "betta-fish-care": {
    pubDate: TODAY,
    updatedDate: TODAY,
    locales: {
      ko: {
        title: "베타 피쉬의 플레어링 영역 신호와 화려한 지느러미 보존 3단계 루틴",
        description: "화려한 화관 지느러미를 가진 베타(Betta Fish). 플레어링(Flaring) 스트레스 표현과 수류 관리, 라비린스 기관 호흡을 고려한 3단계 케어 루틴.",
        authority: "World Small Animal Veterinary Association (WSAVA) Aquatic Animal Health Standards",
        profile: {
          breed: "베타 피쉬 (Betta Fish / 샴 싸움고기)",
          lifespan: "3 ~ 5년",
          sleep_pattern: "8 ~ 10시간 (수초/베타 침대 위 수면)",
          temperament: "영역 의식 강함, 화려함, 민감함, 호기심"
        },
        intro: "드레스처럼 펼쳐지는 지느러미와 우아한 헤엄을 자랑하는 베타(Betta)는 관상어 중 가장 강렬한 매력을 가진 보석 같은 물고기입니다. 세계소동물수의사회(WSAVA)의 관상어 복지 가이드에 따르면, 베타는 공기 중 산소를 직접 호흡하는 '라비린스(Labyrinth) 기관'을 갖고 있어 수면 근처에 휴식할 수 있는 수초나 베타 침대(Leaf bed)가 필수적이며, 약한 수류와 안정적 수온(24°C ~ 26°C)이 유지되어야 녹는 지느러미 병(Fin Rot)을 예방할 수 있습니다.",
        whyTitle: "베타의 의사소통: 아가미 펼침(Flaring)과 수면 휴식 행동",
        whyDesc: "베타가 아가미 덮개를 벌리고 지느러미를 쫙 펴는 '플레어링(Flaring)'은 강력한 경고이자 흥분 신호입니다. 적절한 일일 5분 플레어링은 운동이 되지만, 지속적 플레어링은 면역력을 약화시킵니다.",
        body_signals: [
          {
            name: "아가미 덮개를 벌리고 지느러미를 최대 팽창 (Flaring)",
            meaning: "영역 침범에 대한 경고 또는 자기 거울 모습에 대한 공격성·스트레스 표출입니다.",
            response: "거울이나 수조 옆 반사되는 물체를 치워주어 5분 이상 지속되지 않도록 조치합니다."
          },
          {
            name: "수면 근처 수초 잎 위에 가만히 누워있음 (Labyrinth Resting)",
            meaning: "라비린스 기관으로 호흡하며 지느러미 무게를 덜고 깊은 수면을 취하는 정상적 휴식입니다.",
            response: "아픈 것이 아니므로 조명을 어둡게 해주고 수류가 세게 불지 않도록 스펀지 여과기를 조율해 줍니다."
          }
        ],
        daily_routine: [
          {
            name: "아침: 수온(24°C ~ 26°C) 및 여과기 약한 수류 상태 확인",
            text: "수온계 모니터링 후 히터 작동 여부를 확인하고 베타가 헤엄치기 힘들어하는 강한 수류가 없는지 검사합니다."
          },
          {
            name: "낮: 베타 전용 펠릿 사료 분할 급여 및 수질 잔여물 수거",
            text: "고단백 베타 전용 펠릿을 3~4알씩 나누어 급여하고 먹지 않고 떨어진 사료는 5분 내 스포이트로 픽업합니다."
          },
          {
            name: "저녁: 거품집(Bubble Nest) 관찰 및 5분간의 활력 플레어링 훈련",
            text: "수면에 만들어진 거품집 상태를 살피고, 거울을 3~5분간 대어주어 지느러미 유착을 막는 운동을 시킵니다."
          }
        ],
        faqs: [
          {
            question: "지느러미 끝이 뜯긴 것처럼 갈라지고 검게 변하는데 왜 그런가요?",
            answer: "지느러미 썩음병(Fin Rot)의 전형적 증상으로 수질 오염(여과 부실)이나 스트레스가 원인입니다. 환수(20~30%)를 자주 해주고 필요시 수의사 처방 앰풀을 투여하세요."
          },
          {
            question: "여과기 없이 작은 어항에서 키워도 되나요?",
            answer: "베타는 산소 호흡이 가능하지만 여과기 없는 소형 어항은 여과 미생물이 생기지 않아 수질이 급격히 악화됩니다. 최소 15리터 이상의 어항과 저수류 스펀지 여과기가 권장됩니다."
          }
        ],
        tags: ["베타피쉬", "관상어케어", "플레어링", "WSAVA지침", "지느러미관리"]
      },
      en: {
        title: "Betta Fish Flaring Communication and 3-Step Routine for Fin Preservation",
        description: "Comprehensive care guide for Betta Fish. Understand flaring stress signals, labyrinth organ breathing needs, low current setup, and fin preservation under WSAVA standards.",
        authority: "World Small Animal Veterinary Association (WSAVA) Aquatic Animal Health Standards",
        profile: {
          breed: "Betta Fish (Siamese Fighting Fish)",
          lifespan: "3 - 5 Years",
          sleep_pattern: "8 - 10 Hours (Rests on Near-Surface Leaves/Betta Beds)",
          temperament: "Territorial, Elegant, Sensitive, Highly Curious"
        },
        intro: "Boasting magnificent flowing fins and regal elegance, Betta fish are jewel-like aquatic companions. According to WSAVA aquatic guidelines, Bettas possess a specialized 'labyrinth organ' allowing them to breathe atmospheric oxygen directly at the surface. Providing low water current, warm stable temperatures (24°C ~ 26°C), and resting leaf hammocks near the surface is essential to prevent debilitating Fin Rot.",
        whyTitle: "Betta Communication: Deciphering Gill Flaring & Surface Resting Behavior",
        whyDesc: "Flaring—expanding gill covers and fanning fins—is a territorial warning and excitement display. Controlled 5-minute daily flaring exercises fin muscles, but constant flaring leads to exhaustion and fin tearing.",
        body_signals: [
          {
            name: "Gill Covers Expanded & Fins Fully Fan-Out (Flaring)",
            meaning: "A territorial alert or aggressive stress response triggered by reflections or rival fish.",
            response: "Remove mirrors or reflective surfaces nearby to restrict flaring episodes to under 5 minutes daily."
          },
          {
            name: "Lying Still on Leaves Near Water Surface (Labyrinth Resting)",
            meaning: "Normal resting behavior easing fin weight while breathing atmospheric air via the labyrinth organ.",
            response: "Dim aquarium lights and adjust sponge filter output to ensure gentle flow without turbulence."
          }
        ],
        daily_routine: [
          {
            name: "Morning: Water Temperature (24°C ~ 26°C) & Low Current Flow Inspection",
            text: "Inspect water heater stability and verify that the sponge filter current is gentle enough for easy swimming."
          },
          {
            name: "Afternoon: High-Protein Pellet Feeding & Siphon Waste Removal",
            text: "Feed 3 - 4 high-protein Betta pellets and siphon out any uneaten food within 5 minutes."
          },
          {
            name: "Evening: Bubble Nest Observation & 5-Minute Flaring Exercise",
            text: "Inspect bubble nest construction on the surface and hold a small mirror for 3 - 5 minutes to exercise fin muscles."
          }
        ],
        faqs: [
          {
            question: "Why are the edges of my Betta's fins splitting and turning black?",
            answer: "This is a classic sign of Fin Rot caused by poor water quality or chronic stress. Perform a 25% water change with conditioned water and maintain good biological filtration."
          },
          {
            question: "Can I keep my Betta in a small bowl without a filter?",
            answer: "While Bettas can breathe surface air, unfiltered small bowls lack beneficial nitrifying bacteria and pollute rapidly. A tank of at least 15 liters with a low-flow sponge filter is strongly recommended."
          }
        ],
        tags: ["Betta Fish", "Aquatic Care", "Fin Rot Prevention", "WSAVA Standards", "Flaring Exercise"]
      },
      ja: {
        title: "ベタのフレアリングサインと美しいヒレを守る3ステップデイリーケア",
        description: "優雅なヒレを持つベタ（闘魚）。フレアリングのストレスサイン、ラビリンス器官に配慮した水流管理、WSAVA基準に準拠した3ステップケアを解説します。",
        authority: "世界小動物獣医師会 (WSAVA) 水生動物福祉基準",
        profile: {
          breed: "ベタ (Betta Fish / 闘魚)",
          lifespan: "3 - 5年",
          sleep_pattern: "8 - 10時間 (水草やベタベッドで睡眠)",
          temperament: "縄張り意識が強い、優雅、繊細、好奇心旺盛"
        },
        intro: "ドレスのように広がる美しさを誇るベタは、人気の観賞魚です。WSAVAの水生動物福祉基準に基づき、空気呼吸を行う「ラビリンス器官」に配慮した水面近くの休息場所と、適切な水温（24°C ~ 26°C）および弱い水流管理がヒレ溶け病（Fin Rot）を予防する鍵です。",
        whyTitle: "ベタのコミュニケーション：フレアリングと水面での休息行動",
        whyDesc: "エラを広げてヒレを大きく見せる「フレアリング」は縄張り主張と威嚇のサインです。適度な運動は必要ですが、持続的な刺激は免疫力を 低下させます。",
        body_signals: [
          {
            name: "エラを広げてヒレを最大拡張する (Flaring)",
            meaning: "縄張り侵入への警戒、または鏡に映った自分の姿に対する攻撃・ストレス反応です。",
            response: "鏡や反射するものを遮り、5分以上続かないように刺激を取り除きます。"
          },
          {
            name: "水面近くの葉の上に横たわる (Labyrinth Resting)",
            meaning: "ラビリンス器官で呼吸しながらヒレの重みを休める正常な睡眠行動です。",
            response: "病気ではないため、水流が強すぎないか確認し照明を落として静かに休ませます。"
          }
        ],
        daily_routine: [
          {
            name: "朝：水温（24°C ~ 26°C）と弱い水流の確認",
            text: "ヒーターの動作を確認し、ベタが泳ぎやすい弱い水流を維持します。"
          },
          {
            name: "昼：ベタ専用ペレットの給餌と残餌の回収",
            text: "高タンパクの専用フードを与え、食べ残しは5分以内にスポイトで回収します。"
          },
          {
            name: "夜：泡巣（Bubble Nest）の観察と5分間のフレアリング運動",
            text: "水面の泡巣を確認し、ヒレの癒着を防ぐため鏡を3 - 5分間見せて運動させます。"
          }
        ],
        faqs: [
          {
            question: "ヒレの先が黒く溶けてきたのですが病気ですか？",
            answer: "尾腐れ病(Fin Rot)の可能性があります。水質悪化が原因ですので、20 - 30%の水換えを行い水質を改善してください。"
          },
          {
            question: "フィルターなしの小さな金魚鉢で飼育してもいいですか？",
            answer: "ベタは空気呼吸ができますが、無ろ過の小さな容器は水質が急速に悪化します。15リットル以上の水槽と低水流のスポンジフィルターが推奨されます。"
          }
        ],
        tags: ["ベタ", "熱帯魚の飼い方", "フレアリング", "WSAVA基準", "尾腐れ病予防"]
      },
      zh: {
        title: "斗鱼展鳍语言与保护华丽鳍条 responses 3步日常护理",
        description: "观赏鱼斗鱼（Betta Fish）护理指南。解读展鳍（Flaring）压力信号、迷鳃呼吸需求与维持优美游姿 responses WSAVA 3步日常流程。",
        authority: "世界小动物兽医师协会 (WSAVA) 水生动物福利标准",
        profile: {
          breed: "斗鱼 (Betta Fish)",
          lifespan: "3 - 5年",
          sleep_pattern: "8 - 10小时 (水草/斗鱼床水面休眠)",
          temperament: "领地意识强、华丽、敏感、好奇"
        },
        intro: "拥有如礼服般飘逸鳍条的斗鱼（Betta Fish）是观赏鱼界的璀璨明珠。遵照WSAVA水生动物标准，斗鱼拥有可直接呼吸空气的‘迷鳃器官’，水面需提供休憩水草床，并保持微弱水流与稳定水温（24°C ~ 26°C）以预防烂鳍病（Fin Rot）。",
        whyTitle: "斗鱼的肢体语言：鳃盖张开与水草卧憩解密",
        whyDesc: "斗鱼张开鳃盖并完全展开鳍条的‘展鳍（Flaring）’是强烈的宣示领地行为。适度每日5分钟展鳍可锻炼鳍条肌肉，但过度刺激会导致严重衰竭与鳍条撕裂。",
        body_signals: [
          {
            name: "张开鳃盖并最大化展开鳍条 (Flaring)",
            meaning: "对侵入者或镜中反光表达的强烈领地防御与应激状态。",
            response: "移开镜子或缸旁反光物体，控制每日展鳍时间在5分钟以内。"
          },
          {
            name: "静静躺在靠近水面的水草叶片上 (Labyrinth Resting)",
            meaning: "利用迷鳃器官呼吸并减轻鳍条重量 responses 正常深度休眠。",
            response: "调暗灯光，确保水流极其微弱，切勿误以为其生病。"
          }
        ],
        daily_routine: [
          {
            name: "早晨：水温（24°C ~ 26°C）与微弱水流检查",
            text: "检查加热棒与水温计，确保水流不会阻碍其轻松游动。"
          },
          {
            name: "下午：斗鱼滋养颗粒定量喂食与残渣清理",
            text: "喂食3 - 4粒专用高蛋白颗粒，5分钟后吸出未吃完 responses 残渣。"
          },
          {
            name: "夜晚：泡泡巢观察与5分钟展鳍肌肉训练",
            text: "观察水面泡泡巢状况，手持小镜子照照3 - 5分钟以防止鳍条粘连。"
          }
        ],
        faqs: [
          {
            question: "斗鱼鳍条边缘发黑变烂应该如何处理？",
            answer: "这是水质恶化引起的烂鳍病（Fin Rot）。请立即换水25 - 30%，保持水质清洁并检查过滤棉。"
          },
          {
            question: "可以在没有过滤器的玻璃圆缸中饲养斗鱼吗？",
            answer: "虽然斗鱼可以呼吸水面空气，但无过滤的小缸缺乏有益硝化细菌，水质会急速恶化。强烈建议使用至少15升的水槽与低水流水绵过滤器。"
          }
        ],
        tags: ["斗鱼", "观赏鱼护理", "展鳍训练", "WSAVA标准", "烂鳍病预防"]
      },
      es: {
        title: "Señales de Flaring del Pez Betta y Rutina de 3 Pasos para Aletas Sanas",
        description: "Guía completa de cuidado para el Pez Betta. Entiende los despliegues de aletas (flaring), la respiración por laberinto y mantén la rutina WSAVA.",
        authority: "Asociación Mundial de Veterinarios de Pequeños Animales (WSAVA)",
        profile: {
          breed: "Pez Betta (Luchador de Siam)",
          lifespan: "3 - 5 años",
          sleep_pattern: "8 - 10 horas (Descansa en hojas cerca de la superficie)",
          temperament: "Territorial, elegante, sensible, curioso"
        },
        intro: "Con sus espectaculares aletas, el Betta es un pez fascinante. Según la WSAVA, su órgano laberinto le permite respirar aire de la superficie. Requiere agua tibia (24°C ~ 26°C), corriente suave y plantas flotantes para evitar la podredumbre de aletas.",
        whyTitle: "Comunicación del Betta: Despliegue de Branquias y Descanso",
        whyDesc: "El despliegue de aletas y agallas (Flaring) es una señal territorial. Un ejercicio diario corto es sano, pero el estrés continuo daña sus aletas.",
        body_signals: [
          {
            name: "Despliegue de Agallas y Aletas Expandidas (Flaring)",
            meaning: "Señal de territorialidad o agresión ante su propio reflejo en el cristal.",
            response: "Retira espejos o reflejos para evitar el estrés prolongado más de 5 minutos."
          },
          {
            name: "Tumbado sobre Hojas de Plantas en la Superficie (Labyrinth Resting)",
            meaning: "Descanso normal para respirar aire fácilmente mediante el órgano laberinto.",
            response: "Atenúa las luces y asegura que el filtro no genere fuerte corriente."
          }
        ],
        daily_routine: [
          {
            name: "Mañana: Control de Temperatura (24°C ~ 26°C) y Flujo Suave",
            text: "Comprueba el calentador y asegúrate de que el filtro tenga flujo suave."
          },
          {
            name: "Tarde: Alimentación con Pellets e Higiene del Agua",
            text: "Alimenta con 3 - 4 pellets específicos y retira restos no consumidos."
          },
          {
            name: "Noche: Observación del Nido de Burbujas y Ejercicio",
            text: "Revisa el nido de burbujas y muestra un espejo 3 - 5 minutos para ejercitar sus aletas."
          }
        ],
        faqs: [
          {
            question: "¿Por qué las puntas de sus aletas se ven deshilachadas o negras?",
            answer: "Es un síntoma de podredumbre de aletas (Fin Rot) causado por mala calidad del agua. Realiza cambios parciales de agua del 25%."
          },
          {
            question: "¿Puedo mantener a mi Betta en una pecera pequeña sin filtro?",
            answer: "Aunque respiran aire, las peceras pequeñas sin filtro acumulan amoníaco rápidamente. Se recomienda un acuario de al menos 15 litros con filtro de esponja."
          }
        ],
        tags: ["Pez Betta", "Peces de Acuario", "Cuidados de Peces", "Normas WSAVA"]
      },
      fr: {
        title: "Signaux de Flaring du Poisson Betta et Routine en 3 Étapes pour de Belles Nageoires",
        description: "Guide complet pour le Poisson Betta (Combattant). Décodez le parai (flaring), l'organe labyrinthe et appliquez la routine WSAVA.",
        authority: "World Small Animal Veterinary Association (WSAVA)",
        profile: {
          breed: "Poisson Betta (Combattant)",
          lifespan: "3 - 5 ans",
          sleep_pattern: "8 - 10 heures (Repos sur feuilles en surface)",
          temperament: "Territorial, élégant, sensible, curieux"
        },
        intro: "Prisé pour ses nageoires spectaculaires, le Betta possède un organe labyrinthe lui permettant de respirer en surface. Selon la WSAVA, un faible courant d'eau et une température constante (24°C ~ 26°C) sont requis pour prévenir la pourriture des nageoires.",
        whyTitle: "Communication du Betta: Parai de Nageoires et Repos en Surface",
        whyDesc: "Le parai (flaring) déploie ses ouïes pour défendre son territoire. 5 minutes par jour d'exercice sont bénéfiques pour stimuler la musculation.",
        body_signals: [
          {
            name: "Déploiement des Ouïes et Nageoires (Flaring)",
            meaning: "Réaction territoriale face à un miroir ou un rival dans le bac.",
            response: "Retirez les miroirs pour ne pas l'épuiser au-delà de 5 minutes."
          },
          {
            name: "Immobile sur une Feuille en Surface (Labyrinth Resting)",
            meaning: "Sommeil naturel permettant un accès facile à l'air atmosphérique.",
            response: "Baissez la lumière et réduisez le débit du filtre."
          }
        ],
        daily_routine: [
          {
            name: "Matin: Contrôle Température (24°C ~ 26°C) & Courant Faible",
            text: "Vérifiez que l'eau reste à 24°C ~ 26°C et sans fort courant."
          },
          {
            name: "Après-midi: Granulés Spécifiques & Aspiration des Restes",
            text: "Donnez 3 - 4 granulés pour Betta et aspirez les restes non consommés."
          },
          {
            name: "Soir: Nid de Bulles & 5 min de Miroir",
            text: "Présentez un miroir 3 - 5 min pour stimuler la tonicité de ses nageoires."
          }
        ],
        faqs: [
          {
            question: "Que faire en cas de pourriture des nageoires (Fin Rot) ?",
            answer: "Effectuez un changement d'eau de 25% et vérifiez les paramètres de filtration pour stopper la dégradation."
          },
          {
            question: "Peut-on élever un Betta dans un bocal sans filtre ?",
            answer: "Bien qu'il respire en surface, un bocal sans filtre s'empoisonne très vite. Un bac d'au moins 15L avec filtre éponge est vivement conseillé."
          }
        ],
        tags: ["Poisson Betta", "Combattant", "Soins Aquariophilie", "Normes WSAVA"]
      },
      de: {
        title: "Betta-Imponiersignale und 3-Schritte-Routine für gesunde Flossen",
        description: "Pflegeanleitung für Kampffische (Betta). Imponierverhalten (Flaring) verstehen, Labyrinthorgan berücksichtigen und Flossenfäule nach WSAVA vorbeugen.",
        authority: "World Small Animal Veterinary Association (WSAVA)",
        profile: {
          breed: "Siamesischer Kampffisch (Betta Fish)",
          lifespan: "3 - 5 Jahre",
          sleep_pattern: "8 - 10 Stunden (Ruht auf Blättern)",
          temperament: "Revierbildend, elegant, sensibel, neugierig"
        },
        intro: "Der Kampffisch ist für seine prachtvollen Flossen bekannt. Gemäß WSAVA benötigen Bettas wegen ihres Labyrinthorgans ruhiges Wasser, Pflanzen an der Oberfläche und Temperaturen von 24°C ~ 26°C.",
        whyTitle: "Kommunikation des Bettas: Kiemenabspreizen & Ruhephasen",
        whyDesc: "Das Kiemenabspreizen (Flaring) dient der Revierverteidigung. Kurze tägliche Übungen von 5 Minuten halten die Flossen elastisch.",
        body_signals: [
          {
            name: "Abspreizen der Kiemendeckel & Flossen (Flaring)",
            meaning: "Imponierverhalten gegenüber Spiegelbildern oder Konkurrenten.",
            response: "Spiegel nach 5 Minuten entfernen, um Dauerstress zu vermeiden."
          },
          {
            name: "Ruhiges Liegen auf pflanzlichen Blättern (Labyrinth Resting)",
            meaning: "Normales Schlafverhalten nahe der Wasseroberfläche.",
            response: "Licht dimmen und schwache Strömung sicherstellen."
          }
        ],
        daily_routine: [
          {
            name: "Morgen: Temperatur (24°C ~ 26°C) & Strömung prüfen",
            text: "Heizer kontrollieren und sanfte Filterströmung sichern."
          },
          {
            name: "Nachmittag: Spezielles Betta-Futter & Reinigung",
            text: "3 - 4 Betta-Pellets füttern und Futterreste absaugen."
          },
          {
            name: "Abend: Schaumnest-Check & Spiegeltraining",
            text: "3 - 5 Minuten einen Spiegel vorhalten für Flossentraining."
          }
        ],
        faqs: [
          {
            question: "Was tun bei fransigen, dunklen Flossenrändern (Flossenfäule)?",
            answer: "Sofort 25% Wasser wechseln und die Wasserwerte überprüfen, um das Fortschreiten zu stoppen."
          },
          {
            question: "Kann man Bettas in kleinen Kugelvasen ohne Filter halten?",
            answer: "Kugelvasen ohne Filter verschmutzen extrem schnell und vergiften den Fisch. Ein Becken ab 15 Litern mit Schwammfilter wird dringend empfohlen."
          }
        ],
        tags: ["Kampffisch", "Betta", "Aquaristik-Pflege", "WSAVA-Standards"]
      },
      pt: {
        title: "Sinais de Flaring do Peixe Betta e Rotina em 3 Passos Para Nadadeiras Saudáveis",
        description: "Guia completo de cuidados para o Peixe Betta. Entenda o comportamento de abertura de nadadeiras, respiração por labirinto e rotina WSAVA.",
        authority: "Associação Mundial de Veterinários de Pequenos Animais (WSAVA)",
        profile: {
          breed: "Peixe Betta (Lutador do Sião)",
          lifespan: "3 - 5 anos",
          sleep_pattern: "8 - 10 horas (Descansa em folhas na superfície)",
          temperament: "Territorial, elegante, sensível, curioso"
        },
        intro: "Famoso por suas nadadeiras exuberantes, o Betta possui um órgão labirinto para respirar ar atmosférico. Conforme a WSAVA, mantenha água morna (24°C ~ 26°C), fluxo suave e folhas de descanso.",
        whyTitle: "Comunicação do Betta: Flaring e Descanso na Superfície",
        whyDesc: "Abrir as guelras e nadadeiras (Flaring) é um sinal territorial. Exercícios diários curtos de 5 minutos ajudam a evitar a fusão das nadadeiras.",
        body_signals: [
          {
            name: "Abertura de Guelras e Nadadeiras (Flaring)",
            meaning: "Agressão ou defesa territorial diante do espelho no vidro.",
            response: "Remova espelhos para evitar estresse constante superior a 5 minutos."
          },
          {
            name: "Deitado em Folhas Perto da Superfície (Labyrinth Resting)",
            meaning: "Sono natural permitindo respirar ar facilmente.",
            response: "Diminua as luzes e garanta que o filtro tenha fluxo fraco."
          }
        ],
        daily_routine: [
          {
            name: "Manhã: Controle de Temperatura (24°C ~ 26°C) e Fluxo",
            text: "Verifique o aquecedor e a vazão suave do filtro de esponja."
          },
          {
            name: "Tarde: Ração Específica e Remoção de Sobras",
            text: "Alimente com 3 - 4 grãos de ração para Betta e retire as sobras."
          },
          {
            name: "Noite: Observação de Ninho de Bolhas e Exercício",
            text: "Mostre um espelho por 3 - 5 minutos para exercitar as nadadeiras."
          }
        ],
        faqs: [
          {
            question: "O que fazer se as pontas das nadadeiras estiverem rasgadas ou pretas?",
            answer: "Isso é sintoma de podridão das nadadeiras (Fin Rot). Faça trocas parciais de água de 25%."
          },
          {
            question: "Posso criar o Betta em um aquário pequeno sem filtro?",
            answer: "Embora respirem ar, aquários sem filtro acumulam amônia rapidamente. Recomenda-se um aquário de pelo menos 15 litros com filtro."
          }
        ],
        tags: ["Peixe Betta", "Aquarismo", "Cuidados com Peixes", "Padrões WSAVA"]
      },
      id: {
        title: "Bahasa Flaring Ikan Betta (Cupang) dan Rutinitas 3 Langkah untuk Sirip Indah",
        description: "Panduan lengkap merawat Ikan Betta (Cupang). Pahami ekspresi flaring sirip, kebutuhan organ labirin, dan pencegahan busuk sirip (Fin Rot) standar WSAVA.",
        authority: "World Small Animal Veterinary Association (WSAVA) Aquatic Health Standards",
        profile: {
          breed: "Ikan Betta / Cupang",
          lifespan: "3 - 5 Tahun",
          sleep_pattern: "8 - 10 Jam (Tidur di Daun Tanaman Dekat Permukaan)",
          temperament: "Teritorial, Anggun, Sensitif, Sangat Ingin Tahu"
        },
        intro: "Ikan Betta (Cupang) terkenal dengan sirip indahnya yang mengembang anggun. Menurut standar WSAVA, Cupang memiliki organ labirin khusus untuk bernapas udara langsung di permukaan. Menjaga suhu air (24°C ~ 26°C), arus tenang, dan menyediakan tempat istirahat daun sangat penting untuk mencegah penyakit busuk sirip (Fin Rot).",
        whyTitle: "Komunikasi Cupang: Mengembangkan Insang (Flaring) & Istirahat Permukaan",
        whyDesc: "Mengembangkan insang dan sirip (Flaring) adalah tanda pertahanan teritorial. Latihan singkat 5 menit sehari bagus untuk otot sirip, namun flaring terus-menerus cause stress berat.",
        body_signals: [
          {
            name: "Mengembangkan Insang & Sirip Mengembang Maksimal (Flaring)",
            meaning: "Peringatan teritorial atau respons stres agresif saat melihat cermin atau bayangan.",
            response: "Jauhkan cermin atau benda reflektif agar waktu flaring terbatas di bawah 5 menit."
          },
          {
            name: "Tidur Diam di Atas Daun Dekat Permukaan Air (Labyrinth Resting)",
            meaning: "Istirahat normal untuk meringankan beban sirip sambil bernapas lewat labirin.",
            response: "Redupkan lampu dan pastikan arus filter sponge tidak terlalu kencang."
          }
        ],
        daily_routine: [
          {
            name: "Pagi: Cek Suhu Air (24°C ~ 26°C) & Arus Filter Sponge",
            text: "Pastikan pemanas berfungsi dan arus air dari filter sponge sangat tenang."
          },
          {
            name: "Siang: Beri Pakan Pelet Khusus & Bersihkan Sisa Makanan",
            text: "Beri 3 - 4 butir pelet khusus Cupang dan angkat sisa makanan dalam 5 menit."
          },
          {
            name: "Malam: Cek Sarang Busa & Latihan Flaring 5 Menit",
            text: "Gunakan cermin kecil selama 3 - 5 menit untuk melatih otot sirip agar tidak lengket."
          }
        ],
        faqs: [
          {
            question: "Mengapa ujung sirip Cupang saya tampak mengikis dan menghitam?",
            answer: "Itu adalah gejala busuk sirip (Fin Rot) akibat kualitas air buruk. Lakukan penggantian air 25% secara rutin dengan air terkondisikan."
          },
          {
            question: "Bolehkah memelihara Cupang di toples kecil tanpa filter?",
            answer: "Meskipun bisa bernapas udara, toples kecil tanpa filter mengalami penumpukan amonia yang cepat beracun. Disarankan menggunakan akuarium minimal 15 liter dengan filter sponge."
          }
        ],
        tags: ["Ikan Betta", "Cupang", "Perawatan Ikan Hias", "Fin Rot Prevention", "Standar WSAVA"]
      }
    }
  },

  "axolotl-care": {
    pubDate: TODAY,
    updatedDate: TODAY,
    locales: {
      ko: {
        title: "우파루파의 깃털 아가미 신호와 수온 관리를 위한 3단계 데일리 케어",
        description: "신비로운 멕시코 도롱뇽 우파루파(Axolotl). 깃털 아가미(External Gills) 컬링 자극 신호와 저수온(16°C ~ 18°C) 유지, 피부 보호 3단계 케어.",
        authority: "International Amphibian Husbandry & Amphibian Ark Veterinary Care Protocol",
        profile: {
          breed: "우파루파 / 아홀로틀 (Axolotl)",
          lifespan: "10 ~ 15년",
          sleep_pattern: "10 ~ 12시간 (저수온 수중 은신처 휴식)",
          temperament: "온순함, 느긋함, 독자적, 환경 신중형"
        },
        intro: "웃는 표정과 분홍빛 깃털 아가미로 사랑받는 우파루파(Axolotl/아홀로틀)는 신체 재생 능력을 가진 희귀 양서류 반려동물입니다. 국제 양서류 보전 수의학 프로토콜(Amphibian Ark)에 따르면, 우파루파는 피부 흡입 호흡을 하며 20°C 이상의 고수온에 극도로 취약합니다. 수온을 16°C ~ 18°C로 서늘하게 유지하고, 입에 삼킬 수 있는 작은 자갈 바닥재를 배제하는 것이 건강 관리의 핵심입니다.",
        whyTitle: "우파루파의 신체 신호: 깃털 아가미 구부림과 입 오물거림",
        whyDesc: "우파루파의 붉은 깃털 아가미(External Gills)는 수질과 수온의 상태를 알려주는 청정 지표입니다. 아가미가 전방으로 꺾여 구부러지는 현상은 수질 악화나 고온 스트레스를 나타냅니다.",
        body_signals: [
          {
            name: "깃털 아가미가 전방으로 굽어지고 꼬리가 휘어짐 (Gill Curling Forward)",
            meaning: "수온 상승(20°C 이상)이나 암모니아 지수 상승으로 인한 유해 환경 스트레스 경고입니다.",
            response: "수온 냉각 팬을 가동하여 16°C ~ 18°C로 내리고 즉시 부분 환수(20%)를 실시합니다."
          },
          {
            name: "바닥재를 멍하니 바라보며 입을 오물거림 (Bottom Gaping)",
            meaning: "먹이를 탐색하거나 배고픔을 느끼는 자연스러운 섭식 탐색 시그널입니다.",
            response: "전용 생선 펠릿이나 핀셋으로 지렁이를 부드럽게 주둥이 앞에 가져다줍니다."
          }
        ],
        daily_routine: [
          {
            name: "아침: 수온계(16°C ~ 18°C 유지) 모니터링 및 냉각 장치 점검",
            text: "여름철 수온이 19°C를 넘지 않도록 냉각 팬 작동을 확인하고 어항 벽면 결로를 체크합니다."
          },
          {
            name: "낮: 잔여 배설물 사이펀 제거 및 직사광선 차단",
            text: "시력이 나쁜 우파루파를 위해 어두운 수조 환경을 유지하고 배설물은 긴 사이펀으로 픽업합니다."
          },
          {
            name: "저녁: 핀셋 수동 섭식 급여 및 아가미 색상 유동 상태 점검",
            text: "생선/새우 펠릿을 핀셋으로 정성껏 먹이고 아가미 깃털 혈류가 선홍색을 띠는지 살핍니다."
          }
        ],
        faqs: [
          {
            question: "어항 바닥에 자갈을 깔아줘도 되나요?",
            answer: "절대 안 됩니다! 우파루파는 먹이를 먹을 때 주변 물과 바닥재를 입으로 강력하게 흡입합니다. 작은 자갈을 삼키면 장폐색으로 사망할 수 있으므로 탱크항(맨바닥)이나 아주 커다란 바위만 사용하세요."
          },
          {
            question: "아가미 깃털이 점점 짧아지고 하얗게 변하는데 왜 그런가요?",
            answer: "수질 오염이나 높은 수온으로 인해 깃털 아가미가 손상되거나 곰팡이병(Saprolegnia)에 걸린 것입니다. 수온을 16°C로 낮추고 환수를 늘려주세요."
          }
        ],
        tags: ["우파루파", "아홀로틀", "양서류케어", "저수온관리", "AmphibianArk"]
      },
      en: {
        title: "Axolotl Gill Curling Communication and 3-Step Care Routine for Cool-Water Preservation",
        description: "Comprehensive care guide for the Mexican Axolotl. Decode gill curling stress signals, maintain cool temperatures (16°C ~ 18°C), avoid gravel impaction under Amphibian Ark protocols.",
        authority: "International Amphibian Husbandry & Amphibian Ark Veterinary Care Protocol",
        profile: {
          breed: "Axolotl (Mexican Walking Fish)",
          lifespan: "10 - 15 Years",
          sleep_pattern: "10 - 12 Hours (Rests in Dark Underwater Hides)",
          temperament: "Docile, Calm, Solitary, Highly Sensitive to Water Temperature"
        },
        intro: "Renowned for their smiling faces and feathery external gills, Axolotls are unique aquatic amphibians capable of incredible limb regeneration. According to Amphibian Ark veterinary standards, Axolotls breathe through cutaneous skin absorption and external gills, making them extremely vulnerable to temperatures above 20°C. Maintaining cool water (16°C ~ 18°C) and bare-bottom tank setups is mandatory.",
        whyTitle: "Axolotl Communication: Deciphering Gill Curling & Bottom Gaping Behavior",
        whyDesc: "An Axolotl's feathery red gills serve as direct water quality and temperature indicators. Forward gill curling signals severe environmental stress or ammonia spikes.",
        body_signals: [
          {
            name: "External Gills Curled Forward & Curved Tail Tip (Gill Curling Forward)",
            meaning: "A high-stress warning triggered by elevated temperatures (>20°C) or ammonia accumulation.",
            response: "Engage aquarium cooling fans immediately to lower temperature to 16°C ~ 18°C and execute a 20% water change."
          },
          {
            name: "Staring Downward & Mouth Gaping (Bottom Gaping)",
            meaning: "Natural foraging behavior indicating the Axolotl is actively hunting for food.",
            response: "Gently offer specialized sinking pellets or earthworms using long blunt tweezers near its snout."
          }
        ],
        daily_routine: [
          {
            name: "Morning: Cool Water Temperature (16°C ~ 18°C) & Chiller Check",
            text: "Verify water chiller or cooling fan status to ensure temperatures do not exceed 18°C."
          },
          {
            name: "Afternoon: Siphon Waste Spot-Cleaning & Dim Lighting Maintenance",
            text: "Axolotls lack eyelids and dislike bright lights; maintain a shaded tank environment and siphon out waste daily."
          },
          {
            name: "Evening: Tongs Feeding & Feathery Gill Circulation Check",
            text: "Feed sinking pellets via tongs and observe bright red blood flow in feathery gill filaments."
          }
        ],
        faqs: [
          {
            question: "Can I use small gravel substrate at the bottom of an Axolotl tank?",
            answer: "Absolutely not! Axolotls feed by powerful vacuum suction and will swallow gravel, causing fatal intestinal impaction. Use a bare-bottom tank or smooth river rocks larger than their head."
          },
          {
            question: "Why are my Axolotl's gill filaments shrinking or turning white?",
            answer: "This is a sign of gill damage from water pollution or fungal infection (Saprolegnia) due to high temperatures. Lower water temperature to 16°C and increase water changes."
          }
        ],
        tags: ["Axolotl", "Amphibian Care", "Cool Water Pet", "Amphibian Ark", "Gill Health"]
      },
      ja: {
        title: "ウーパールーパーのエラカールサインと水温管理の3ステップデイリーケア",
        description: "神秘的な両生類ウーパールーパー（アホロートル）。フサフサのエラが前方に曲がるストレスサイン、16°C ~ 18°Cの低温水温管理、Amphibian Ark基準のケアを解説します。",
        authority: "国際両生類飼育プロトコル (Amphibian Ark) 基準",
        profile: {
          breed: "ウーパールーパー (Axolotl / アホロートル)",
          lifespan: "10 - 15年",
          sleep_pattern: "10 - 12時間 (水中シェルターで休息)",
          temperament: "温厚、おっとり、マイペース、水温に繊細"
        },
        intro: "愛くるしい笑顔とピンク色のフサフサした外鰓（エラ）が特徴のウーパールーパーは、驚異的な再生能力を持つ両生類です。Amphibian Arkの基準に基づき、20°C以上の高水温を避け、16°C ~ 18°Cのサーマル環境を保ち、誤飲を引き起こす小砂利を排除することが飼育の鍵です。",
        whyTitle: "ウーパールーパーのシグナル：エラの曲がりとパクパク行動の解読",
        whyDesc: "赤い外鰓は水質と水温のバロメーターです。エラが前に大きく曲がる現象は水質悪化や高水温のストレスサインです。",
        body_signals: [
          {
            name: "外鰓が前に大きく曲がり尾先が丸まる (Gill Curling Forward)",
            meaning: "水温上昇(20°C以上)やアンモニア濃度上昇による強い環境ストレスサインです。",
            response: "冷却ファンを稼働させて水温を16°C ~ 18°Cに下げ、20%の換水を行います。"
          },
          {
            name: "底面をじっと見つめて口をパクパクさせる (Bottom Gaping)",
            meaning: "ご飯を探している正常な空腹・捕食サインです。",
            response: "ピンセットで専用ペレットや赤虫を口元に優しく運んであげましょう。"
          }
        ],
        daily_routine: [
          {
            name: "朝：水温計（16°C ~ 18°C維持）と冷却装置の確認",
            text: "高水温を防ぐため冷却ファンの動作と水温を確認します。"
          },
          {
            name: "昼：フンのスポイト除去と暗い水槽環境の維持",
            text: "光に敏感なため薄暗い環境を保ち、フンはスポイトですぐに取り除きます。"
          },
          {
            name: "夜：ピンセットでの給餌とエラの血流状態のチェック",
            text: "専用フードをピンセットで与え、エラの赤みが健康か観察します。"
          }
        ],
        faqs: [
          {
            question: "底砂に細かい砂利を敷いても大丈夫ですか？",
            answer: "絶対に使用しないでください！ウーパールーパーは powerful な吸い込みで餌を食べるため、砂利を誤飲して腸閉塞を起こす危険があります。ベアタンク（砂なし）が推奨されます。"
          },
          {
            question: "エラのフサフサが短くなり白くなってきたのはなぜですか？",
            answer: "高水温や水質悪化によるエラダメージ、または水カビ病(Saprolegnia)の可能性があります。水温を16°Cに下げて水換え頻度を増やしてください。"
          }
        ],
        tags: ["ウーパールーパー", "アホロートル", "両生類の飼い方", "低温飼育", "Amphibian Ark"]
      },
      zh: {
        title: "美西螈（六角恐龙）鳃羽弯曲信号与冷水护理3步日常",
        description: "神秘两栖宠物美西螈（Axolotl）护理指南。解读羽状外鳃前卷压力信号、维持16°C ~ 18°C冷水环境与Amphibian Ark裸缸管理。",
        authority: "国际两栖动物保育 (Amphibian Ark) 兽医护理协议",
        profile: {
          breed: "美西螈 / 六角恐龙 (Axolotl)",
          lifespan: "10 - 15年",
          sleep_pattern: "10 - 12小时 (水下隐蔽处休眠)",
          temperament: "温和、迟钝、喜独居、水温敏感"
        },
        intro: "拥有标志性微笑与粉色羽状外鳃的美西螈（六角恐龙）是极其独特的两栖宠物。遵照Amphibian Ark国际标准，美西螈通过皮肤与外鳃呼吸，对高于20°C的水温极度敏感。保持16°C ~ 18°C凉爽水温并采用无底砂裸缸是防止误食肠梗阻的关键。",
        whyTitle: "美西螈的肢体语言：外鳃前卷与捕食张嘴解密",
        whyDesc: "美西螈鲜红的羽状外鳃（External Gills）是水质与水温 responses 晴雨表。外鳃向前弯曲如钩状预示着严重的温湿度或氨氮压力。",
        body_signals: [
          {
            name: "外鳃向前严重弯曲且尾尖卷曲 (Gill Curling Forward)",
            meaning: "水温过高（>20°C）或水质恶化（氨氮超标）引发的高度应激警告。",
            response: "开启水族冷却风扇降温至16°C ~ 18°C，并立即换水20%。"
          },
          {
            name: "凝视缸底并时不时张嘴吞咽 (Bottom Gaping)",
            meaning: "正在搜寻食物的自然捕食信号。",
            response: "用长镊子夹取沉底肉食颗粒或红虫缓慢送至其嘴边。"
          }
        ],
        daily_routine: [
          {
            name: "早晨：水温计（保持16°C ~ 18°C）与制冷设备检查",
            text: "检查冷水机或风扇，确保水温绝不超过18°C。"
          },
          {
            name: "下午：粪便吸管清理与保持弱光暗缸",
            text: "美西螈无眼睑害怕强光，保持缸内遮阴并吸出排泄物。"
          },
          {
            name: "夜晚：镊子辅助喂食与外鳃鲜红充血观察",
            text: "用镊子喂食沉底颗粒，观察外鳃羽毛血流充盈状况。"
          }
        ],
        faqs: [
          {
            question: "缸底可以铺设小碎石或小砂砾吗？",
            answer: "绝对不行！美西螈通过负压吸食食物，小石子会被吞入体内导致致命 responses 肠梗阻。请使用裸缸或比其头部还大的光滑大鹅卵石。"
          },
          {
            question: "美西螈外鳃羽毛变短或变白是什么原因？",
            answer: "这是水温过高或水质恶化导致 responses 鳃部损伤或水霉病（Saprolegnia）。请降温至16°C并加大换水频率。"
          }
        ],
        tags: ["美西螈", "六角恐龙", "两栖动物护理", "冷水水族", "Amphibian Ark"]
      },
      es: {
        title: "Señales de las Branquias del Ajolote y Rutina de 3 Pasos para Agua Fría",
        description: "Guía completa de cuidado para el Ajolote (Axolotl). Interpreta la curvatura de las branquias, mantén agua fría (16°C ~ 18°C) y evita sustratos peligrosos según Amphibian Ark.",
        authority: "Protocolo Veterinario Internacional Amphibian Ark",
        profile: {
          breed: "Ajolote / Axolote (Axolotl)",
          lifespan: "10 - 15 años",
          sleep_pattern: "10 - 12 horas (Descansa en cueva acuática oscura)",
          temperament: "Tranquilo, apacible, solitario, sensible a la temperatura"
        },
        intro: "El ajolote es un anfibio acuático fascinante capaz de regenerar sus extremidades. Según la organización Amphibian Ark, es extremadamente sensible a temperaturas superiores a 20°C. El agua debe mantenerse entre 16°C ~ 18°C y se debe evitar la grava para impedir la obstrucción intestinal.",
        whyTitle: "Comunicación del Ajolote: Curvatura de Branquias y Bostezo de Fondo",
        whyDesc: "Las branquias plumosas rojas son indicadores de la calidad del agua. Si se curvan hacia adelante como anzuelos, el ajolote sufre estrés por temperatura o amoníaco.",
        body_signals: [
          {
            name: "Branquias Curvadas Hacia Adelante (Gill Curling Forward)",
            meaning: "Estrés ambiental severo por agua caliente (>20°C) o mala calidad del agua.",
            response: "Enciende ventiladores de acuario para bajar a 16°C ~ 18°C y haz un cambio de agua del 20%."
          },
          {
            name: "Mirada Hacia Abajo y Apertura de Boca (Bottom Gaping)",
            meaning: "Comportamiento natural de búsqueda de comida.",
            response: "Alimenta suavemente con pinzas cerca de su hocico."
          }
        ],
        daily_routine: [
          {
            name: "Mañana: Control de Temperatura (16°C ~ 18°C) y Refrigeración",
            text: "Comprueba que la temperatura no supere los 18°C."
          },
          {
            name: "Tarde: Limpieza de Desechos con Sifón y Luz Tenue",
            text: "Mantén el acuario en penumbra y aspira los desechos con sifón."
          },
          {
            name: "Noche: Alimentación con Pinzas y Examen de Branquias",
            text: "Ofrece pellets hundibles con pinzas y revisa el color rojo de sus branquias."
          }
        ],
        faqs: [
          {
            question: "¿Puedo poner grava pequeña en el fondo del acuario?",
            answer: "¡No! Los ajolotes tragan agua para comer y engullirán la grava, provocando una obstrucción intestinal mortal. Usa un acuario con fondo desnudo."
          },
          {
            question: "¿Por qué las branquias de mi ajolote se acortan o se vuelven blancas?",
            answer: "Indica daño por alta temperatura o infección por hongos (Saprolegnia). Reduce la temperatura a 16°C e incrementa los cambios de agua."
          }
        ],
        tags: ["Ajolote", "Axolotl", "Anfibios", "Cuidados de Agua Fría", "Amphibian Ark"]
      },
      fr: {
        title: "Signaux des Branchies de l'Axolotl et Routine en 3 Étapes en Eau Froide",
        description: "Guide complet pour l'Axolotl. Décodez la courbure des branchies, maintenez une eau fraîche (16°C ~ 18°C) et évitez le gravier dangereux selon Amphibian Ark.",
        authority: "Protocoles Vétérinaires Amphibian Ark",
        profile: {
          breed: "Axolotl (Salamandre Mexicaine)",
          lifespan: "10 - 15 ans",
          sleep_pattern: "10 - 12 heures (Repos aquatique en cachette)",
          temperament: "Paisible, calme, solitaire, sensible"
        },
        intro: "L'Axolotl est une salamandre aquatique fascinante dotée d'une capacité de régénération unique. Selon les normes d'Amphibian Ark, il exige une eau froide (16°C ~ 18°C) et l'absence totale de petit gravier pour éviter toute occlusion digestive mortelle.",
        whyTitle: "Communication de l'Axolotl: Courbure des Branchies et Ouverture de Bouche",
        whyDesc: "Les branchies plumeuses indiquent la qualité de l'eau. Courbées vers l'avant, elles signalent un stress thermique ou une montée d'ammoniaque.",
        body_signals: [
          {
            name: "Branchies Courbées vers l'Avant (Gill Curling Forward)",
            meaning: "Stress environnemental critique dû à une eau trop chaude (>20°C) ou polluée.",
            response: "Refroidissez l'eau à 16°C ~ 18°C et faites un changement d'eau de 20%."
          },
          {
            name: "Bouche Entrouverte vers le Sol (Bottom Gaping)",
            meaning: "Comportement naturel de recherche de nourriture au fond du bac.",
            response: "Présentez des granulés ou vers à la pince longue."
          }
        ],
        daily_routine: [
          {
            name: "Matin: Vérification Température Eau Froide (16°C ~ 18°C)",
            text: "Assurez-vous que l'eau reste bien en dessous de 18°C."
          },
          {
            name: "Après-midi: Aspiration des Déchets & Lumière Douce",
            text: "Évitez la lumière directe et aspirez les déjections au sifon."
          },
          {
            name: "Soir: Repas à la Pince & Contrôle des Branchies",
            text: "Nourrissez à la pince et observez la rougeur des branchies plumeuses."
          }
        ],
        faqs: [
          {
            question: "Peut-on mettre du gravier dans le fond du bac ?",
            answer: "Absolument pas. L'axolotl aspire ses proies et avalera le gravier, causant une occlusion intestinale mortelle. Préférez un fond nu."
          },
          {
            question: "Pourquoi les branchies de mon axolotl rétrécissent-elles ou blanchissent-elles ?",
            answer: "C'est le signe d'une dégradation due à la chaleur ou à des champignons (Saprolegnia). Abaissez l'eau à 16°C et multipliez les changements d'eau."
          }
        ],
        tags: ["Axolotl", "Amphibiens", "Soins Eau Froide", "Amphibian Ark"]
      },
      de: {
        title: "Axolotl-Kiemensignale und 3-Schritte-Routine für Kaltwasserpflege",
        description: "Pflegeanleitung für Axolotl. Kiemenkrümmung verstehen, Kaltwassertemperaturen (16°C ~ 18°C) sichern und Darmverschluss vermeiden.",
        authority: "Amphibian Ark Veterinary Care Protocols",
        profile: {
          breed: "Axolotl (Mexikanischer Schwanzlurch)",
          lifespan: "10 - 15 Jahre",
          sleep_pattern: "10 - 12 Stunden (Ruht in Höhlen)",
          temperament: "Friedlich, ruhig, einzelgängerisch, sensibel"
        },
        intro: "Der Axolotl ist ein einzigartiger Schwanzlurch mit erstaunlicher Regenerationsfähigkeit. Gemäß Amphibian Ark-Standards verträgt er keine Wassertemperaturen über 20°C. Kaltes Wasser (16°C ~ 18°C) und ein bodenfreies Aquarium sind Pflicht.",
        whyTitle: "Körpersprache des Axolotls: Kiemenkrümmung & Futtersuche",
        whyDesc: "Die feinen Kiemenäste zeigen Stress an. Nach vorne gekrümmte Kiemen weisen auf Hitzestress oder schlechte Wasserwerte hin.",
        body_signals: [
          {
            name: "Nach vorne gekrümmte Kiemenäste (Gill Curling Forward)",
            meaning: "Starker Stress durch zu hohes Wassertemperatur (>20°C) oder Ammoniak.",
            response: "Kühlung aktivieren (16°C ~ 18°C Ziel) und 20% Wasser wechseln."
          },
          {
            name: "Blick nach unten & Schnappen (Bottom Gaping)",
            meaning: "Natürliches Futter Suchverhalten am Beckenboden.",
            response: "Futter vorsichtig mit einer langen Pinzette vor das Maul legen."
          }
        ],
        daily_routine: [
          {
            name: "Morgen: Temperaturkontrolle (16°C ~ 18°C) & Kühlung",
            text: "Kühler prüfen, damit das Wasser nie über 18°C steigt."
          },
          {
            name: "Nachmittag: Kot absaugen & Schattendunkelheit",
            text: "Das Becken abgedunkelt halten und Abfälle absaugen."
          },
          {
            name: "Abend: Pinzettenfütterung & Kiemenblutfluss prüfen",
            text: "Sinkpellets füttern und die rote Farbe der Kiemen prüfen."
          }
        ],
        faqs: [
          {
            question: "Darf kleiner Kies als Bodengrund verwendet werden?",
            answer: "Nein! Axolotl saugen ihr Futter ein und verschlucken Kies, was zu tödlichem Darmverschluss führt. Ein fester Glasboden ist ideal."
          },
          {
            question: "Warum werden die Kiemen meines Axolotls kurz oder weiß?",
            answer: "Das deutet auf Kiemenschäden durch Hitze oder einen Pilzbefall (Saprolegnia) hin. Temperatur auf 16°C senken und Wasser wechseln."
          }
        ],
        tags: ["Axolotl", "Kaltwasseraquaristik", "Amphibienpflege", "Amphibian Ark"]
      },
      pt: {
        title: "Sinais das Brânquias do Axolote e Rotina em 3 Passos Para Água Fria",
        description: "Guia completo de cuidados para o Axolote (Axolotl). Entenda a curvatura das brânquias, mantenha água fria (16°C ~ 18°C) e evite substratos perigosos.",
        authority: "Protocolos Veterinários da Amphibian Ark",
        profile: {
          breed: "Axolote (Axolotl)",
          lifespan: "10 - 15 anos",
          sleep_pattern: "10 - 12 horas (Descanso aquático em toca)",
          temperament: "Pacífico, calmo, solitário, sensível"
        },
        intro: "O Axolote é um anfíbio aquático incrível com capacidade de regeneração. Conforme a Amphibian Ark, a água deve ser mantida fria (16°C ~ 18°C) e sem pedras pequenas no fundo para evitar engolimento fatal.",
        whyTitle: "Comunicação do Axolote: Curvatura das Brânquias e Abertura da Boca",
        whyDesc: "As brânquias ramificadas indicam a qualidade da água. Se curvadas para a frente, o axolote está estressado com a temperatura.",
        body_signals: [
          {
            name: "Brânquias Curvadas para a Frente (Gill Curling Forward)",
            meaning: "Estresse por água quente (>20°C) ou amônia elevada.",
            response: "Resfrie a água para 16°C ~ 18°C e troque 20% da água."
          },
          {
            name: "Boca Aberta Olhando para o Fundo (Bottom Gaping)",
            meaning: "Procura natural por comida no fundo do aquário.",
            response: "Alimente com pinça perto do focinho."
          }
        ],
        daily_routine: [
          {
            name: "Manhã: Controle de Temperatura (16°C ~ 18°C)",
            text: "Garanta que a água não passe de 18°C."
          },
          {
            name: "Tarde: Limpeza de Dejetos com Sifão e Luz Fraca",
            text: "Mantenha o aquário à sombra e remova os dejetos."
          },
          {
            name: "Noite: Alimentação com Pinça e Exame das Brânquias",
            text: "Ofereça ração com pinça e veja a cor vermelha das brânquias."
          }
        ],
        faqs: [
          {
            question: "Posso usar cascalho pequeno no fundo do aquário?",
            answer: "Não! O axolote engolirá o cascalho ao sucionar a comida, o que causa obstrução intestinal fatal. Use fundo pelado."
          },
          {
            question: "Por que as brânquias do meu axolote estão encolhendo ou brancas?",
            answer: "Indica danos por calor ou infecção fúngica (Saprolegnia). Baixe a temperatura para 16°C e aumente as trocas de água."
          }
        ],
        tags: ["Axolote", "Axolotl", "Anfíbios", "Cuidados em Água Fria", "Amphibian Ark"]
      },
      id: {
        title: "Bahasa Insang Axolotl dan Rutinitas 3 Langkah untuk Perawatan Air Dingin",
        description: "Panduan lengkap merawat Axolotl (Salamander Meksiko). Pahami arti insang melengkung, jaga suhu dingin (16°C ~ 18°C), dan cegah tersedak kerikil sesuai standar Amphibian Ark.",
        authority: "Amphibian Ark Veterinary Care Protocol & Standar Pemeliharaan",
        profile: {
          breed: "Axolotl (Salamander Meksiko)",
          lifespan: "10 - 15 Tahun",
          sleep_pattern: "10 - 12 Jam (Tidur di Tempat Sembunyi Gelap)",
          temperament: "Jinak, Tenang, Soliter, Sensitif Suhu Air"
        },
        intro: "Axolotl terkenal dengan wajah tersenyum dan insang bulunya yang unik. Salamander ini memiliki kemampuan regenerasi organ yang luar biasa. Menurut standar Amphibian Ark, Axolotl bernapas melalui kulit dan insang luar, membuatnya sangat sensitif terhadap suhu air di atas 20°C. Menjaga suhu dingin (16°C ~ 18°C) dan menggunakan akuarium polos tanpa kerikil adalah hal wajib.",
        whyTitle: "Komunikasi Axolotl: Insang Melengkung & Perilaku Menganga",
        whyDesc: "Insang bulu merah adalah indikator langsung kualitas air dan suhu. Insang yang melengkung ke depan menandakan stres berat akibat suhu panas atau amonia.",
        body_signals: [
          {
            name: "Insang Bulu Melengkung ke Depan (Gill Curling Forward)",
            meaning: "Stres lingkungan berat akibat suhu tinggi (>20°C) atau penumpukan amonia beracun.",
            response: "Nyalakan kipas pendingin hingga suhu 16°C ~ 18°C dan lakukan penggantian air 20% segera."
          },
          {
            name: "Menatap Dasar & Menganga (Bottom Gaping)",
            meaning: "Perilaku alami saat mencari makan di dasar akuarium.",
            response: "Beri makan pelet tenggelam khusus menggunakan pinset panjang di depan mulutnya."
          }
        ],
        daily_routine: [
          {
            name: "Pagi: Cek Suhu Air Dingin (16°C ~ 18°C) & Pendingin",
            text: "Pastikan suhu air berada di bawah 18°C dan pendingin bekerja baik."
          },
          {
            name: "Siang: Bersihkan Kotoran & Jaga Penerangan Redup",
            text: "Jaga akuarium tetap teduh tanpa cahaya silau dan sedot kotoran dengan sifon."
          },
          {
            name: "Malam: Beri Makan dengan Pinset & Cek Insang Bulu",
            text: "Beri makan pelet tenggelam dan amati warna merah segar insang bulunya."
          }
        ],
        faqs: [
          {
            question: "Bolehkah memakai kerikil kecil di dasar akuarium?",
            answer: "Sangat tidak boleh! Axolotl makan dengan cara menyedot air dan akan tertelan kerikil yang berakibat penyumbatan usus mematikan. Gunakan akuarium polos (bare-bottom)."
          },
          {
            question: "Mengapa bulu insang Axolotl saya memendek atau memutih?",
            answer: "Ini menandakan kerusakan insang akibat suhu panas atau infeksi jamur (Saprolegnia). Turunkan suhu air ke 16°C dan tingkatkan frekuensi ganti air."
          }
        ],
        tags: ["Axolotl", "Salamander", "Perawatan Air Dingin", "Standar Amphibian Ark"]
      }
    }
  },

  "holland-lop-care": {
    pubDate: TODAY,
    updatedDate: TODAY,
    locales: {
      ko: {
        title: "홀랜드 롭 토끼의 처진 귀 관리와 행복의 빙키 춤 3단계 데일리 루틴",
        description: "귀여운 처진 귀가 매력적인 홀랜드 롭(Holland Lop). 외이염 예방과 행복의 기쁨 표현 '빙키(Binky)' 춤 시그널, 티모시 무제한 급여 3단계 케어.",
        authority: "House Rabbit Society (HRS) & Association of Exotic Mammal Veterinarians (AEMV)",
        profile: {
          breed: "홀랜드 롭 토끼 (Holland Lop Rabbit)",
          lifespan: "8 ~ 12년",
          sleep_pattern: "8 ~ 10시간 (낮과 한밤중 분할 수면)",
          temperament: "애교 많음, 호기심, 온순함, 장난기"
        },
        intro: "둥근 얼굴과 아래로 길게 늘어진 처진 귀가 귀여운 홀랜드 롭(Holland Lop)은 세계적으로 큰 사랑을 받는 소형 반려토끼 품종입니다. 미국 토끼 수의사회(HRS)와 특수소동물 수의학회(AEMV)의 행동 지침에 따르면, 홀랜드 롭은 귓구멍이 아래로 막혀있어 귓병(외이염)에 취약하며, 섬유질이 풍부한 티모시 건초를 24시간 무제한 섭취해야 장정체(GI Stasis)를 예방할 수 있습니다.",
        whyTitle: "홀랜드 롭의 감정 표현: 빙키(Binky) 춤과 발 쿵쿵거리기(Thumping)",
        whyDesc: "토끼는 소리보다 온몸의 가벼운 동작으로 기분을 표현합니다. 공중으로 뛰어오르며 몸을 꼬는 '빙키 춤'은 최고조의 행복을 의미하며, 뒷발로 바닥을 강하게 치는 '쿵쿵이'는 경계 신호입니다.",
        body_signals: [
          {
            name: "공중으로 소용돌이치듯 뛰어오르며 몸 비틀기 (Binky Dance)",
            meaning: "현재 사육 환경과 보호자의 행동에 대해 극도의 기쁨과 행복감을 느낄 때 나타나는 최고의 기쁨 신호입니다.",
            response: "토끼가 신나게 달릴 수 있도록 미끄러지지 않는 안심 매트 공간을 넓혀주고 함께 기뻐해 줍니다."
          },
          {
            name: "뒷발로 바닥을 강하게 쿵쿵 소리 내어 치기 (Thumping)",
            meaning: "주변에 위협적인 소리나 낯선 냄새가 나거나, 원하는 간식을 주지 않아 강한 불만을 경고하는 신호입니다.",
            response: "무엇이 토끼를 놀라게 했는지 주변 환경(소음, 다른 동물)을 체크하고 낮고 부드러운 목소리로 달래줍니다."
          }
        ],
        daily_routine: [
          {
            name: "아침: 티모시 건초 무제한 채우기 및 신선한 식수 수액기 교체",
            text: "장운동을 지속하기 위해 신선한 1번 칼티모시 건초를 건초대에 가득 채우고 깨끗한 물을 제공합니다."
          },
          {
            name: "낮: 처진 귀 안쪽 통풍 통증 상태 확인 및 정적 유지",
            text: "늘어진 귀 내부를 부드럽게 젖혀 이물질이나 붉은 귓병 전조가 없는지 살피고 낮 수면을 보장합니다."
          },
          {
            name: "저녁: 터널 자율 운동 울타리 놀이 및 림프 순환 브러싱 케어",
            text: "안전하게 울타리를 열어 터널 놀이 운동을 시키고, 모구증(Hairball) 예방을 위해 빗질을 해줍니다."
          }
        ],
        faqs: [
          {
            question: "토끼가 갑자기 밥을 안 먹고 똥을 안 싸는데(장정체) 어떡하나요?",
            answer: "토끼에게 장정체(GI Stasis)는 12시간 이내에 목숨을 앗아갈 수 있는 응급 상황입니다. 배를 어루만져 주거나 억지로 먹이지 말고 즉시 토끼 전문 특수소동물 병원으로 이송하세요."
          },
          {
            question: "귀를 자주 털고 발로 귓가 주변을 긁는데 정상인가요?",
            answer: "홀랜드 롭은 귓구멍이 접혀 습기가 차기 쉬워 진드기나 외이염 곰팡이가 생기기 쉽습니다. 귓속에 검은 귓밥이 보이거나 긁는 증상이 심하면 수의사 진료를 받아야 합니다."
          }
        ],
        tags: ["홀랜드롭", "토끼케어", "빙키춤", "외이염예방", "HRS지침"]
      },
      en: {
        title: "Holland Lop Ear Care Communication and 3-Step Routine for Happy Binky Dances",
        description: "Comprehensive care guide for the floppy-eared Holland Lop Rabbit. Prevent ear infections (otitis), decode happy 'Binky' jumps, and ensure 24/7 Timothy hay under HRS standards.",
        authority: "House Rabbit Society (HRS) & Association of Exotic Mammal Veterinarians (AEMV)",
        profile: {
          breed: "Holland Lop Rabbit",
          lifespan: "8 - 12 Years",
          sleep_pattern: "8 - 10 Hours (Crepuscular / Split Daytime & Midnight Sleep)",
          temperament: "Highly Affectionate, Playful, Gentle, Curious"
        },
        intro: "Distinguished by their compact round heads and floppy ears, Holland Lops are among the most beloved rabbit breeds worldwide. According to House Rabbit Society (HRS) and AEMV veterinary standards, their folded ear anatomy makes them vulnerable to inner ear infections (otitis), while continuous 24/7 high-fiber Timothy hay ingestion is vital to prevent fatal Gastrointestinal (GI) Stasis.",
        whyTitle: "Holland Lop Communication: Deciphering the Binky Dance & Thumping Signals",
        whyDesc: "Rabbits express intense emotion through full-body movements rather than vocalization. The airborne twist jump known as a 'Binky' signals peak euphoria, whereas foot thumping is a defensive alarm.",
        body_signals: [
          {
            name: "Mid-Air Twist & Jump (Binky Dance)",
            meaning: "An expression of pure joy, high spirits, and deep contentment with their living environment.",
            response: "Provide non-slip mat areas so the rabbit can safely sprint and express its happiness without slipping."
          },
          {
            name: "Stomping Hard with Hind Legs (Thumping)",
            meaning: "A warning signal triggered by startling noises, unfamiliar predator scents, or extreme discontent.",
            response: "Identify environmental stress factors, speak in low comforting tones, and gently reassure the rabbit."
          }
        ],
        daily_routine: [
          {
            name: "Morning: Unlimited 1st-Cut Timothy Hay Refill & Fresh Water Change",
            text: "Fill hay racks generously with fresh 1st-cut Timothy hay to maintain continuous GI motility."
          },
          {
            name: "Afternoon: Floppy Ear Ventilation Inspection & Quiet Daytime Rest",
            text: "Gently lift floppy ears to inspect for redness or discharge, and ensure quiet daytime rest."
          },
          {
            name: "Evening: Pen Enclosure Tunnel Playtime & Hairball Brushing",
            text: "Open the exercise pen for tunnel exploration and brush fur gently to prevent hairball ingestion."
          }
        ],
        faqs: [
          {
            question: "What should I do if my rabbit suddenly stops eating and pooping?",
            answer: "This is GI Stasis, a critical medical emergency that can be fatal within 12 hours. Do not force feed; seek immediate emergency care at an exotic mammal veterinary hospital."
          },
          {
            question: "Is it normal for a Holland Lop to shake its head and scratch its ears frequently?",
            answer: "No. Floppy ears trap moisture, making them prone to ear mites and fungal otitis. If you see dark earwax or frequent scratching, take your rabbit to an exotic vet."
          }
        ],
        tags: ["Holland Lop", "Rabbit Care", "Binky Dance", "HRS Standards", "GI Stasis Prevention"]
      },
      ja: {
        title: "ホーランドロップの垂れ耳ケアとビンキーダンスを引き出す3ステップデイリーケア",
        description: "愛くるしい垂れ耳のホーランドロップ。外耳炎予防、最高潮の喜び表現「ビンキーダンス」、HRS基準に準拠したチモシー無制限給餌の3ステップケアを解説します。",
        authority: "House Rabbit Society (HRS) & 特殊小動物獣医師会 (AEMV)",
        profile: {
          breed: "ホーランドロップ (Holland Lop)",
          lifespan: "8 - 12年",
          sleep_pattern: "8 - 10時間 (薄明薄暮性・昼と夜中の分割睡眠)",
          temperament: "人懐っこい、遊び好き、温厚、甘えん坊"
        },
        intro: "丸い顔と垂れ耳が特徴のホーランドロップは、世界中で大人気の小型ウサギです。HRS（アメリカ家兎協会）およびAEMVのガイドラインに基づき、構造上外耳炎になりやすい垂れ耳の衛生管理と、致死的なうっ滞（GI Stasis）を防ぐ24時間チモシー無制限給餌が健康の根幹です。",
        whyTitle: "ホーランドロップの感情表現：ビンキーダンスと足ダンの解読",
        whyDesc: "ウサギは声よりも全身のしぐさで感情を表現します。空中へジャンプして体をひねる「ビンキー（Binky）」は最高潮の喜びの舞であり、後ろ足で床を叩く「足ダン（Thumping）」は警戒のサインです。",
        body_signals: [
          {
            name: "空中ジャンプして体をひねる (Binky Dance)",
            meaning: "環境と飼い主に心から安心し、最高の喜びを感じている幸運のサインです。",
            response: "滑らないラグやマットを敷いた広いスペースで楽しく走らせてあげましょう。"
          },
          {
            name: "後ろ足で床を強力に叩く (Thumping / 足ダン)",
            meaning: "大きな音や見慣れない匂いに警戒し、恐怖や不満を周囲に警告しています。",
            response: "何に驚いたか原因を確認し、優しく低い声で声をかけて落ち着かせます。"
          }
        ],
        daily_routine: [
          {
            name: "朝：新鮮なチモシーの無制限補給と給水器の水交換",
            text: "胃腸の動きを止めることのないよう、1番刈りチモシー牧草をたっぷりと補給します。"
          },
          {
            name: "昼：垂れ耳内部の通気チェックと昼間の静かな睡眠",
            text: "耳を優しくめくって赤みや汚れがないか確認し、静かに休ませます。"
          },
          {
            name: "夜：トンネル運動と毛球症予防のグルーミング",
            text: "サークルを広げてトンネル遊びをさせ、毛玉の誤飲を防ぐブラッシングを行います。"
          }
        ],
        faqs: [
          {
            question: "ウサギがご飯を食べずフンも出ない（うっ滞）時はどうすればいいですか？",
            answer: "うっ滞(GI Stasis)は12時間以内に命に関わる緊急事態です。無理に食べさせず、すぐにエキゾチックアニマル専門の獣医に見せてください。"
          },
          {
            question: "耳を頻繁に振ったり足で掻いたりするのは正常ですか？",
            answer: "垂れ耳は湿気がこもりやすく外耳炎やダニが発生しやすいです。黒い耳垢や頻繁なダニ掻きが見られたら獣医師の診察が必要です。"
          }
        ],
        tags: ["ホーランドロップ", "ウサギの飼い方", "ビンキーダンス", "うっ滞予防", "HRS基準"]
      },
      zh: {
        title: "荷兰垂耳兔耳朵护理与激发快乐Binky舞 responses 3步日常",
        description: "可爱垂耳兔子荷兰垂耳兔（Holland Lop）护理指南。外耳炎预防、极度喜悦‘Binky’跳跃解读 responses HRS 24小时无限量提摩西干草喂养。",
        authority: "美国家兔协会 (HRS) 与 特殊小动物兽医师学会 (AEMV)",
        profile: {
          breed: "荷兰垂耳兔 (Holland Lop Rabbit)",
          lifespan: "8 - 12年",
          sleep_pattern: "8 - 10小时 (晨昏性、分段睡眠)",
          temperament: "亲人、黏人、温顺、好动"
        },
        intro: "圆滚滚的面庞与垂落在两旁的大耳朵使荷兰垂耳兔备受全球喜好。遵照HRS与AEMV权威指导，垂耳结构使其耳道易积聚湿气引发外耳炎，保持24小时不限量提摩西干草供应是预防致命胃肠停滞（GI Stasis） responses 基础。",
        whyTitle: "荷兰垂耳兔的情绪语言：Binky快乐舞与跺脚警告解密",
        whyDesc: "兔子主要通过肢体动作表达情感。在空中腾空拧身跳跃的‘Binky舞’代表极致 responses 快乐，而用后脚猛烈跺脚（Thumping）则是警惕与表达不满。",
        body_signals: [
          {
            name: "空中腾空跃起并扭动身体 (Binky Dance)",
            meaning: "对当前环境与主人感到极度安全、兴奋与幸福 responses 最高级快乐表达。",
            response: "铺设防滑地毯，扩大活动范围，让其尽情奔跑欢跳。"
          },
          {
            name: "用后脚用力跺击地面 (Thumping / 跺脚)",
            meaning: "受到外界异常噪音、陌生气味惊吓，或表达强烈的警惕与抗议。",
            response: "排查环境中的惊吓源，用轻柔低沉 responses 声音抚慰兔子。"
          }
        ],
        daily_routine: [
          {
            name: "早晨：无限量提摩西干草补充与饮水器换水",
            text: "将干草架塞满新鲜1切提摩西干草，确保肠道24小时蠕动。"
          },
          {
            name: "下午：垂耳内部通气检查与日间睡眠保护",
            text: "轻轻掀起下垂 responses 耳朵检查耳道是否发红或有异味，保持环境安静。"
          },
          {
            name: "夜晚：隧道放风运动与防止毛球症梳毛护理",
            text: "打开围栏放风玩耍隧道，并用专用排梳梳理脱落浮毛。"
          }
        ],
        faqs: [
          {
            question: "兔子突然绝食且不排便（胃肠停滞）怎么办？",
            answer: "胃肠停滞（GI Stasis）是极为致命 responses 急症，12小时内可危及生命。请勿自行喂药，必须立即送往异宠/兔子专业医院急救。"
          },
          {
            question: "荷兰垂耳兔经常甩头抓耳朵是正常的吗？",
            answer: "不正常。垂耳结构容易积聚湿气导致耳螨或外耳炎。如果发现黑色耳垢或频繁抓挠，需立即就医。"
          }
        ],
        tags: ["荷兰垂耳兔", "兔子护理", "Binky舞", "胃肠停滞", "HRS标准"]
      },
      es: {
        title: "Cuidados de Orejas de Holland Lop y Rutina de 3 Pasos para el Baile 'Binky'",
        description: "Guía completa de cuidado para el conejo Holland Lop. Previene otitis, interpreta los saltos de felicidad 'Binky' y proporciona heno Timothy ilimitado 24/7.",
        authority: "House Rabbit Society (HRS) & AEMV Normas de Conejos",
        profile: {
          breed: "Conejo Holland Lop (Holland Lop)",
          lifespan: "8 - 12 años",
          sleep_pattern: "8 - 10 horas (Crepuscular / Sueño diurno divido)",
          temperament: "Afectuoso, juguetón, dócil, curioso"
        },
        intro: "El Holland Lop es una de las razas de conejos más queridas del mundo por su cara redonda y orejas caídas. Según la House Rabbit Society (HRS), su anatomía de orejas caídas requiere prevención de otitis e inspección constante, mientras que el heno Timothy ilimitado 24/7 es vital para prevenir la estasis gastrointestinal.",
        whyTitle: "Comunicación del Holland Lop: El Baile Binky y el Pisotón Trasero",
        whyDesc: "Los conejos expresan su alegría con el 'Binky' (salto giratorio en el aire). El pisotón fuerte con las patas traseras es una señal de alerta o descontento.",
        body_signals: [
          {
            name: "Salto y Giro en el Aire (Binky Dance)",
            meaning: "Expresión de pura alegría, entusiasmo y máxima seguridad en su entorno.",
            response: "Proporciona alfombras antideslizantes para que corra de forma segura sin resbalar."
          },
          {
            name: "Pisotón Fuerte con Pata Trasera (Thumping)",
            meaning: "Señal de advertencia ante ruidos extraños, olores de depredador o molestia.",
            response: "Identifica la fuente de susto y háblale con voz suave y grave."
          }
        ],
        daily_routine: [
          {
            name: "Mañana: Relleno Ilimitado de Heno Timothy y Agua Fresca",
            text: "Llena el henero con heno Timothy fresco de 1er corte para mantener la motilidad intestinal."
          },
          {
            name: "Tarde: Inspección de Orejas Caídas y Descanso Diurno",
            text: "Levanta suavemente las orejas para revisar si hay enrojecimiento o secreciones."
          },
          {
            name: "Noche: Ejercicio en Túneles y Cepillado de Pelaje",
            text: "Abre el parque de juegos para ejercicio y cepilla su pelaje para evitar bolas de pelo."
          }
        ],
        faqs: [
          {
            question: "¿Qué hacer si el conejo deja de comer y defecar de repente?",
            answer: "Es Estasis Gastrointestinal (GI Stasis), una urgencia veterinaria vital en 12 horas. Llévalo inmediatamente a un veterinario de animales exóticos."
          },
          {
            question: "¿Es normal que sacuda la cabeza y se rasque mucho las orejas?",
            answer: "No. Las orejas caídas acumulan humedad y son propensas a ácaros u otitis. Si notas cera oscura o rascado excesivo, requiere atención médica."
          }
        ],
        tags: ["Holland Lop", "Conejos", "Cuidados de Mascotas", "Estasis GI", "Normas HRS"]
      },
      fr: {
        title: "Soins des Oreilles du Holland Lop et Routine en 3 Étapes pour la Danse Binky",
        description: "Guide complet pour le lapin Holland Lop. Prévenez les otites, décodez les sauts de joie 'Binky' et fournissez du foin de fléole à volonté sous les normes HRS.",
        authority: "House Rabbit Society (HRS) & AEMV Normes NAC",
        profile: {
          breed: "Holland Lop (Lapin Bélier)",
          lifespan: "8 - 12 ans",
          sleep_pattern: "8 - 10 heures (Crépusculaire / Sommeil scindé)",
          temperament: "Très affectueux, joueur, doux, curieux"
        },
        intro: "Le Holland Lop est un lapin très populaire reconnaissable à sa tête ronde et ses oreilles tombantes. Suivant la House Rabbit Society (HRS), inspectez régulièrement ses oreilles pour éviter l'otite et fournissez du foin de fléole à volonté 24/7 contre la stase digestive mortelle.",
        whyTitle: "Communication du Holland Lop: Danse Binky et Taper du Pied",
        whyDesc: "Le 'Binky' (saut vrillé dans les airs) est l'expression ultime du bonheur. Taper fort du pied arrière indique la peur ou le mécontentement.",
        body_signals: [
          {
            name: "Saut Vrillé dans les Airs (Binky Dance)",
            meaning: "Signe de pure joie, de grande forme et de sécurité absolue dans son habitat.",
            response: "Offrez un espace sécurisé avec tapis antidérapant."
          },
          {
            name: "Tape du Pied Arrière (Thumping)",
            meaning: "Avertissement de danger face à un bruit suspect ou un mécontentement.",
            response: "Identifiez la cause et rassurez-le d'une voix douce."
          }
        ],
        daily_routine: [
          {
            name: "Matin: Foin de Fléole à Volonté & Eau Fraîche",
            text: "Remplissez le râtelier de foin de fléole frais de 1ère coupe pour stimuler le transit."
          },
          {
            name: "Après-midi: Inspection des Oreilles Tombantes & Repos",
            text: "Soulevez délicatement les oreilles pour vérifier l'absence d'inflammation."
          },
          {
            name: "Soir: Exercice dans les Tunnels & Brossage",
            text: "Laissez-le courir dans un parc sécurisé et brossez-le pour éviter l'ingestion de poils."
          }
        ],
        faqs: [
          {
            question: "Que faire si mon lapin ne mange plus et ne fait plus de crottes ?",
            answer: "C'est une stase gastro-intestinale (GI Stasis), une urgence vitale en 12h. Consultez immédiatement un vétérinaire NAC."
          },
          {
            question: "Est-il normal qu'il secoue la tête et se gratte souvent les oreilles ?",
            answer: "Non, ses oreilles tombantes retiennent l'humidité et favorisent les otites et gale d'oreille. Consultez un vétérinaire NAC."
          }
        ],
        tags: ["Holland Lop", "Lapin Bélier", "Soins NAC", "Stase Digestive", "Normes HRS"]
      },
      de: {
        title: "Holland-Lop-Ohrenpflege und 3-Schritte-Routine für glückliche Binky-Tänze",
        description: "Pflegeanleitung für Holland Lop Zwergwidder. Otitis vorbeugen, Binky-Freudensprünge verstehen und unbegrenzt Timotheegras nach HRS-Standards anbieten.",
        authority: "House Rabbit Society (HRS) & AEMV Standards",
        profile: {
          breed: "Holland Lop (Zwergwidder)",
          lifespan: "8 - 12 Jahre",
          sleep_pattern: "8 - 10 Stunden (Dämmerungsaktiv / Geteilter Schlaf)",
          temperament: "Anhänglich, verspielt, sanft, neugierig"
        },
        intro: "Der Holland Lop zeichnet sich durch seine Schlappohren aus. Gemäß HRS-Richtlinien müssen Schlappohren wegen Infektionsgefahr (Otitis) belüftet und rund um die Uhr unbegrenzt Heu zur Vermeidung von Magen-Darm-Stase gefüttert werden.",
        whyTitle: "Körpersprache: Binky-Tanz & Klopfen mit den Hinterläufen",
        whyDesc: "Der Binky-Sprung steht für pure Lebensfreude. Das Klopfen (Thumping) mit den Hinterbeinen signalisiert Warnung oder Unmut.",
        body_signals: [
          {
            name: "Freudensprung mit Drehung in der Luft (Binky Dance)",
            meaning: "Ausdruck von tiefer Freude, Energie und vollkommenem Wohlbefinden.",
            response: "Rutschfeste Teppiche für sicheres Auslaufen bereitstellen."
          },
          {
            name: "Klopfen mit den Hinterläufen (Thumping)",
            meaning: "Warnung vor Geräuschen, Raubtiergerüchen oder Unzufriedenheit.",
            response: "Ursache ermitteln und mit sanfter Stimme beruhigen."
          }
        ],
        daily_routine: [
          {
            name: "Morgen: Unbegrenzt Timothy-Heu & Frischwasser",
            text: "Heuraufe auffüllen, um die Magen-Darm-Motorik aufrechtzuerhalten."
          },
          {
            name: "Nachmittag: Schlappohren-Kontrolle & Ruhezeit",
            text: "Ohren sanft anheben und auf Rötungen oder Ausfluss prüfen."
          },
          {
            name: "Abend: Auslauf im Tunnel & Fellpflege",
            text: "Auslauf gewähren und Fell bürsten gegen Haarballenbildung."
          }
        ],
        faqs: [
          {
            question: "Was tun, wenn das Kaninchen nicht mehr frisst und keinen Kot absetzt?",
            answer: "Dies ist eine lebensgefährliche Magen-Darm-Stase (GI Stasis). Bringen Sie das Tier binnen 12 Stunden zum Heimtier-Tierarzt."
          },
          {
            question: "Ist es normal, wenn das Kaninchen oft den Kopf schüttelt und die Ohren kratzt?",
            answer: "Nein. Schlappohren neigen zu Milben und Pilzinfektionen. Bei dunklem Schmalz oder Kratzen ist ein Tierarztbesuch nötig."
          }
        ],
        tags: ["Holland Lop", "Zwergwidder", "Kaninchenpflege", "GI Stasis", "HRS-Standards"]
      },
      pt: {
        title: "Cuidados com Orelhas do Holland Lop e Rotina em 3 Passos Para a Dança Binky",
        description: "Guia completo de cuidados para o coelho Holland Lop. Previna otite, decodifique os saltos de alegria 'Binky' e ofereça feno Timothy ilimitado 24/7.",
        authority: "House Rabbit Society (HRS) & AEMV Normas de Coelhos",
        profile: {
          breed: "Coelho Holland Lop (Holland Lop)",
          lifespan: "8 - 12 anos",
          sleep_pattern: "8 - 10 horas (Crepuscular / Sono dividido)",
          temperament: "Afetuoso, brincalhão, dócil, curioso"
        },
        intro: "O Holland Lop é muito querido por suas orelhas caídas. Conforme a House Rabbit Society (HRS), suas orelhas necessitam de atenção para evitar otite e feno constante 24/7 contra estase intestinal vital.",
        whyTitle: "Comunicação do Holland Lop: A Dança Binky e as Batidas de Pata",
        whyDesc: "O 'Binky' (salto giratório no ar) é a expressão máxima de felicidade. Batidas fortes com as patas traseiras indicam alerta ou insatisfação.",
        body_signals: [
          {
            name: "Salto e Giro no Ar (Binky Dance)",
            meaning: "Expressão de pura alegria e segurança total no ambiente.",
            response: "Ofereça espaço com tapete antiderrapante."
          },
          {
            name: "Batida Forte com Pata Traseira (Thumping)",
            meaning: "Sinal de alerta diante de barulhos ou insatisfação.",
            response: "Acalme o coelho falando baixinho e suave."
          }
        ],
        daily_routine: [
          {
            name: "Manhã: Feno Timothy Ilimitado e Água Fresca",
            text: "Encha o porta-feno com feno Timothy fresco de 1º corte."
          },
          {
            name: "Tarde: Inspeção de Orelhas Caídas e Descanso",
            text: "Levante suavemente as orelhas para checar se há vermelhidão."
          },
          {
            name: "Noite: Exercício em Túneis e Escovação",
            text: "Deixe-o correr no recinto e escove a pelagem contra bolas de pelo."
          }
        ],
        faqs: [
          {
            question: "O que fazer se o coelho parar de comer e defecar?",
            answer: "Isso é Estase Gastrointestinal (GI Stasis), uma emergência médica vital em 12h. Leve imediatamente a um veterinário de exóticos."
          },
          {
            question: "É normal balançar a cabeça e coçar muito as orelhas?",
            answer: "Não. Orelhas caídas acumulam umidade e ácaros. Se houver cera escura ou coceira, consulte um veterinário."
          }
        ],
        tags: ["Holland Lop", "Coelhos", "Cuidados com Pets", "Estase Intestinal", "Padrões HRS"]
      },
      id: {
        title: "Perawatan Telinga Holland Lop dan Rutinitas 3 Langkah Tarian Binky yang Bahagia",
        description: "Panduan lengkap merawat Kelinci Holland Lop. Cegah infeksi telinga (otitis), pahami lompatan bahagia 'Binky', dan sediakan rumput Timothy 24/7 sesuai standar HRS.",
        authority: "House Rabbit Society (HRS) & Standar Dokter Hewan AEMV",
        profile: {
          breed: "Kelinci Holland Lop",
          lifespan: "8 - 12 Tahun",
          sleep_pattern: "8 - 10 Jam (Krepuskular / Tidur Terbagi)",
          temperament: "Manja, Lincah, Penurut, Sangat Ingin Tahu"
        },
        intro: "Holland Lop sangat disukai karena wajah bulat dan telinganya yang menggantung. Menurut standar House Rabbit Society (HRS), bentuk telinga menggantung butuh pemeriksaan rutin agar tidak infeksi otitis, serta rumput Timothy tak terbatas 24 jam untuk mencegah GI Stasis yang mematikan.",
        whyTitle: "Komunikasi Holland Lop: Tarian Binky & Menghentakkan Kaki Belakang",
        whyDesc: "Lompatan berputar di udara (Binky) adalah ungkapan kebahagiaan tertinggi. Menghentakkan kaki belakang (Thumping) menandakan kewaspadaan atau rasa tidak suka.",
        body_signals: [
          {
            name: "Lompatan Berputar di Udara (Binky Dance)",
            meaning: "Ungkapan rasa gembira, antusiasme, dan kenyamanan luar biasa pada lingkungannya.",
            response: "Sediakan karpet anti-licin agar kelinci dapat berlari aman tanpa terpeleset."
          },
          {
            name: "Menghentakkan Kaki Belakang (Thumping)",
            meaning: "Peringatan bahaya akibat suara asing, bau pemangsa, atau kekesalan.",
            response: "Cari tahu penyebab kaget dan tenangkan dengan suara lembut ber-nada rendah."
          }
        ],
        daily_routine: [
          {
            name: "Pagi: Isi Rumput Timothy Tanpa Batas & Ganti Air Minum",
            text: "Isi tempat rumput dengan rumput Timothy segar pemotongan pertama untuk usus."
          },
          {
            name: "Siang: Cek Kebersihan Telinga Menggantung & Tidur Siang",
            text: "Buka telinganya perlahan untuk mengecek kemerahan atau kotoran."
          },
          {
            name: "Malam: Bermain Terowongan & Menyikat Bulu",
            text: "Buka kandang untuk berlari dan sikat bulunya agar tidak tertelan (hairball)."
          }
        ],
        faqs: [
          {
            question: "Bagaimana jika kelinci tiba-tiba tidak mau makan dan buang air?",
            answer: "Ini adalah GI Stasis (Stasis Pencernaan), kondisi darurat yang mengancam jiwa dalam 12 jam. Segera bawa ke dokter hewan spesialis eksotis."
          },
          {
            question: "Apakah normal jika kelinci sering menggelengkan kepala dan menggaruk telinga?",
            answer: "Tidak normal. Telinga menggantung mudah lembap dan terinfeksi tungau atau jamur. Jika ada kotoran hitam atau garukan hebat, segera konsultasikan ke dokter hewan."
          }
        ],
        tags: ["Holland Lop", "Kelinci", "Perawatan Kelinci", "GI Stasis Prevention", "Standar HRS"]
      }
    }
  }
};

// Items data structure (for apps/studio/src/data/pets/items/[slug].json)
const petItemsData = {
  "cockatiel-care": {
    id: "cockatiel-care",
    title: "왕관앵무 우관 신호 해독 및 나이트 파닉 예방 홈케어",
    species: "bird",
    breed: "왕관앵무 (Cockatiel)",
    lifespan: "15 ~ 20년",
    sleepPattern: "10 ~ 12시간의 정적 수면이 필요하며, 수면 시 암막 커버와 미등을 활용해 나이트 파닉을 예방합니다.",
    likes: [
      "머리와 뺨의 주황색 깃털 부위를 깃결 반대로 부드럽게 긁어주기",
      "먹이 탐색 장난감(Foraging toy)을 파헤치며 펠릿 보상 찾기"
    ],
    dislikes: [
      "한밤중 깜깜한 새장 근처에서 갑자기 발생하는 큰 소음과 수면 방해",
      "갑작스럽게 위에서 손을 뻗어 날개를 억지로 잡으려 하는 핸들링 행동"
    ],
    bodyLanguage: [
      {
        signal: "우관 바짝 세우기 (Fully Erect Crest)",
        meaning: "새로운 소리나 낯선 물체에 호기심을 느끼거나 긴장하여 유심히 경계하고 있는 상태입니다."
      },
      {
        signal: "머리 숙이고 목 내밀기 (Head Lowering)",
        meaning: "보호자에게 깊은 친밀감을 느끼며 머리와 뺨 주변을 긁어달라는 애정 표현입니다."
      }
    ],
    dailyRoutine: {
      step1: "아침에는 새장 커버를 개봉하고 신선한 펠릿 사료와 깨끗한 수액 용수를 교체해 줍니다.",
      step2: "낮에는 안전한 방 안에서 1 - 2시간 자유 비행을 시키며 먹이 탐색 활동을 유도합니다.",
      step3: "저녁에는 새장 주변 깃털 파우더를 닦아내고 미등을 켠 후 암막 덮개를 씌워 숙면을 돕습니다."
    },
    heroImage: "/images/blog/cockatiel_care.png",
    sources: [
      "Association of Avian Veterinarians (AAV) Care Standards",
      "Avian Behavior Advisory Guidelines"
    ]
  },

  "leopard-gecko-care": {
    id: "leopard-gecko-care",
    title: "레오파드 게코 꼬리 경계 신호 및 탈피 보조 케어",
    species: "reptile",
    breed: "레오파드 게코 (Leopard Gecko)",
    lifespan: "15 ~ 20년",
    sleepPattern: "12 ~ 14시간 동안 은신처 내부에서 쉼을 취하는 야행성 수면 패턴을 보입니다.",
    likes: [
      "30°C ~ 32°C의 바닥 따뜻한 핫존 매트 위에 배를 대고 체온 높이기",
      "습성 은신처(Wet cave)의 촉촉하게 젖은 수태 속에서 탈피 허물 벗기"
    ],
    dislikes: [
      "사육장 전반의 습도가 너무 낮아 발가락 끝 탈피 껍질이 굳어 괴사하는 상황",
      "자고 있는 낮 동안 갑자기 밝은 조명을 비추거나 꼬리를 잡아채는 행동"
    ],
    bodyLanguage: [
      {
        signal: "꼬리를 높이고 천천히 흔듦 (Slow Tail Waving)",
        meaning: "위협을 느끼고 경계하며 '공격할 수 있다'는 신호를 보내는 강한 경계 상태입니다."
      },
      {
        signal: "몸 색이 하얗게 뜨고 눈 비빔 (Pre-Shedding)",
        meaning: "묵은 허물을 벗겨내기 위한 탈피 직전 단계로 습도 조절이 필요합니다."
      }
    ],
    dailyRoutine: {
      step1: "아침에는 핫존/쿨존 온도계 수치를 점검하고 습성 은신처 내부 키친타월에 온수를 분무합니다.",
      step2: "낮 동안에는 은신처가 어둡고 조용하도록 유지하여 야행성 주간 수면을 보장합니다.",
      step3: "저녁에는 칼슘제를 다스팅한 곤충을 핀셋 급여하고 바닥재 배설물을 즉시 치웁니다."
    },
    heroImage: "/images/blog/leopard_gecko_care.png",
    sources: [
      "ARAV (Association of Reptilian and Amphibian Veterinarians) Guidelines",
      "Herpetological Medicine Standards"
    ]
  },

  "betta-fish-care": {
    id: "betta-fish-care",
    title: "베타 피쉬 아가미 플레어링 관리 및 화관 지느러미 보존",
    species: "fish",
    breed: "베타 피쉬 (Betta Fish)",
    lifespan: "3 ~ 5년",
    sleepPattern: "8 ~ 10시간 수면 근처 수초나 베타 침대 잎 위에 누워 얕은 수면을 취합니다.",
    likes: [
      "수면 근처 수초 침대에 지느러미를 얹고 라비린스 공기 호흡하기",
      "하루 3 - 5분간 거울을 보고 플레어링하여 지느러미 유착 방지 운동하기"
    ],
    dislikes: [
      "여과기의 강한 수류로 인해 드레스 지느러미가 밀려 헤엄치기 힘든 환경",
      "수질 오염으로 인해 지느러미 끝이 검게 녹아내리는 지느러미 썩음병(Fin Rot)"
    ],
    bodyLanguage: [
      {
        signal: "아가미 덮개 확장 및 지느러미 팽창 (Flaring)",
        meaning: "영역 침범에 대한 경고 또는 거울 반사에 대한 공격성 및 스트레스 표출입니다."
      },
      {
        signal: "수초 잎 위에 가만히 누워있음 (Labyrinth Resting)",
        meaning: "라비린스 기관으로 호흡하며 휴식을 취하는 정체적 자연 수면입니다."
      }
    ],
    dailyRoutine: {
      step1: "아침에는 수온(24°C ~ 26°C)과 스펀지 여과기의 잔잔한 수류 상태를 점검합니다.",
      step2: "낮에는 베타 전용 펠릿 사료를 3 - 4알 급여하고 떨어진 잔여물은 스포이트로 치웁니다.",
      step3: "저녁에는 거품집 유무를 관찰하고 3 - 5분간 거울 훈련으로 활력을 증진시킵니다."
    },
    heroImage: "/images/blog/betta_fish_care.png",
    sources: [
      "WSAVA Aquatic Animal Welfare Guidelines",
      "Anabantoid Fish Medicine Standards"
    ]
  },

  "axolotl-care": {
    id: "axolotl-care",
    title: "우파루파 깃털 아가미 컬링 신호 감지와 저수온 피부 케어",
    species: "amphibian",
    breed: "우파루파 (Axolotl / 아홀로틀)",
    lifespan: "10 ~ 15년",
    sleepPattern: "10 ~ 12시간 저수온의 어두운 수중 은신처 안에서 가만히 휴식을 취합니다.",
    likes: [
      "16°C ~ 18°C의 서늘하고 맑은 물속에서 느긋하게 부유하기",
      "긴 핀셋으로 부드럽게 건네주는 생선 펠릿이나 생지렁이 받아먹기"
    ],
    dislikes: [
      "20°C 이상의 뜨거운 수온과 암모니아 수치 상승으로 아가미가 손상되는 상태",
      "바닥에 깐 작은 자갈을 먹이와 함께 삼켜 장폐색이 생기는 위험한 상황"
    ],
    bodyLanguage: [
      {
        signal: "깃털 아가미 전방 구부러짐 (Gill Curling)",
        meaning: "수온 상승(20°C 이상)이나 수질 악화로 인한 유해 환경 스트레스 경고 신호입니다."
      },
      {
        signal: "바닥을 보며 입을 오물거림 (Feeding Gape)",
        meaning: "먹이를 탐색하거나 배고픔을 느끼는 자연스러운 섭식 탐색 시그널입니다."
      }
    ],
    dailyRoutine: {
      step1: "아침에는 냉각 장치를 확인하여 수온이 16°C ~ 18°C로 서늘하게 유지되는지 모니터링합니다.",
      step2: "낮에는 배설물을 긴 사이펀으로 즉시 치우고 조명을 어둡게 유지합니다.",
      step3: "저녁에는 핀셋으로 펠릿을 먹이고 붉은 깃털 아가미의 혈류 상태를 체크합니다."
    },
    heroImage: "/images/blog/axolotl_care.png",
    sources: [
      "Amphibian Ark Veterinary Care Protocol",
      "International Amphibian Husbandry Standards"
    ]
  },

  "holland-lop-care": {
    id: "holland-lop-care",
    title: "홀랜드 롭 처진 귀 외이염 예방과 빙키 춤 감정 해독",
    species: "rabbit",
    breed: "홀랜드 롭 토끼 (Holland Lop Rabbit)",
    lifespan: "8 ~ 12년",
    sleepPattern: "8 ~ 10시간 낮과 한밤중에 분할하여 수면을 취하는 크레푸스큘러(Crepuscular) 패턴입니다.",
    likes: [
      "공중으로 뛰어오르며 몸을 비틀어 최고의 행복을 표출하는 빙키 춤(Binky)",
      "24시간 가득 채워진 바삭한 1번 칼 티모시 건초를 무제한으로 갉아먹기"
    ],
    dislikes: [
      "건초 섭취 부진으로 인해 장운동이 멈추어 생명이 위험해지는 장정체(GI Stasis)",
      "접힌 처진 귀 내부에 습기가 차서 외이염 진드기나 곰팡이가 가려움을 유발하는 상태"
    ],
    bodyLanguage: [
      {
        signal: "공중으로 뛰어오르며 몸 비틀기 (Binky Dance)",
        meaning: "현재 사육 환경과 보호자에 대해 극도의 기쁨과 행복감을 느낄 때 나타나는 표현입니다."
      },
      {
        signal: "뒷발로 바닥 쿵쿵 치기 (Thumping)",
        meaning: "주변의 위협적인 소리나 낯선 냄새에 경계하거나 강한 불만을 표현하는 신호입니다."
      }
    ],
    dailyRoutine: {
      step1: "아침에는 신선한 1번 칼 티모시 건초를 무제한으로 채우고 깨끗한 식수를 공급합니다.",
      step2: "낮에는 처진 귀 안쪽을 살짝 뒤집어 붉은 이물질이 없는지 검사하고 수면을 돕습니다.",
      step3: "저녁에는 방풍 울타리 터널 운동을 시키고 모구증 예방 빗질 브러싱을 진행합니다."
    },
    heroImage: "/images/blog/holland_lop_care.png",
    sources: [
      "House Rabbit Society (HRS) Care Guidelines",
      "Association of Exotic Mammal Veterinarians (AEMV)"
    ]
  }
};

// Ensure directories
if (!fs.existsSync(petsDir)) fs.mkdirSync(petsDir, { recursive: true });
if (!fs.existsSync(itemsDir)) fs.mkdirSync(itemsDir, { recursive: true });
if (!fs.existsSync(koBlogDir)) fs.mkdirSync(koBlogDir, { recursive: true });

// 1. Save master JSON to data/blogs/pets/[slug].json
Object.keys(petBlogsData).forEach(slug => {
  const filePath = path.join(petsDir, `${slug}.json`);
  const dataToSave = {
    [slug]: petBlogsData[slug]
  };
  fs.writeFileSync(filePath, JSON.stringify(dataToSave, null, 2), 'utf-8');
  console.log(`✅ [JSON 마스터 정밀 구축 완료] -> ${filePath}`);
});

// 2. Save items JSON to data/pets/items/[slug].json
Object.keys(petItemsData).forEach(slug => {
  const filePath = path.join(itemsDir, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(petItemsData[slug], null, 2), 'utf-8');
  console.log(`✅ [Items JSON 정밀 구축 완료] -> ${filePath}`);
});

console.log('🎉 5개 반려동물 포스트 9개 언어 원천 데이터 고품질 업데이트 완료.');
