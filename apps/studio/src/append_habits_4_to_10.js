import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDataDir = path.join(__dirname, 'data/blogs/habits');
const koBlogDir = path.join(__dirname, 'content/blog/ko');

const today = "2026-07-22";

const habitEntries = [
  // 4. federer-sleep-recovery
  {
    slug: "federer-sleep-recovery",
    title: {
      ko: "20년간 정상의 기량을 지킨 비결? 로저 페더러의 12시간 수면 루틴",
      en: "The Secret Behind 20 Years of Top Performance? Roger Federer's 12-Hour Sleep Routine",
      ja: "20年間トップを維持した秘訣？ロジャー・フェデラーの12時間睡眠ルーティン",
      zh: "保持20年巅峰状态的秘密？罗杰·费德勒的12小时睡眠惯例",
      es: "¿El secreto tras 20 años de máximo nivel? La rutina de 12 horas de sueño de Roger Federer",
      fr: "Le secret de 20 ans au sommet ? La routine de 12 heures de sommeil de Roger Federer",
      de: "Das Geheimnis hinter 20 Jahren Spitzenleistung? Roger Federers 12-Stunden-Schlafroutine",
      pt: "O segredo de 20 anos no topo? A rotina de 12 horas de sono de Roger Federer",
      id: "Rahasia Performa Puncak 20 Tahun? Rutinitas Tidur 12 Jam Roger Federer"
    },
    description: {
      ko: "테니스 황제 로저 페더러. 10시간의 야간 수면과 경기 전 낮잠으로 신경계와 인지 순발력을 회복한 그의 뇌 리셋 법과 3단계 실천 가이드를 소개합니다.",
      en: "Tennis legend Roger Federer. Discover his 12-hour total sleep recovery routine for peak neurological performance, plus a 3-step modern guide.",
      ja: "テニスの皇帝フェデラー。10時間の夜間睡眠と昼寝で神経系を回復させた彼の脳リセット法と3ステップ実践法を紹介します。",
      zh: "网球天王费德勒。介绍他通过10小时夜间睡眠与午睡恢复神经系统的大脑重置法及三步实践指南。",
      es: "La leyenda del tenis Roger Federer. Descubra su rutina de 12 horas de sueño para la recuperación neurológica y una guía práctica de 3 pasos.",
      fr: "La légende du tennis Roger Federer. Découvrez sa routine de 12 heures de sommeil pour la récupération et un guide en 3 étapes.",
      de: "Tennislegende Roger Federer. Entdecken Sie seine 12-Stunden-Schlafroutine für neurologische Erholung und einen 3-Schritte-Leitfaden.",
      pt: "A lenda do tênis Roger Federer. Descubra sua rotina de 12 horas de sono para recuperação neurológica e um guia prático de 3 passos.",
      id: "Legenda tenis Roger Federer. Temukan rutinitas tidur 12 jamnya untuk pemulihan saraf dan panduan praktis 3 langkah."
    },
    authority: {
      ko: "Christopher Clarey 전기 'The Master' 및 Matthew Walker 저서 'Why We Sleep'",
      en: "Christopher Clarey's Biography 'The Master' & Matthew Walker's 'Why We Sleep'",
      ja: "クリストファー・クレアリー評伝「The Master」およびマシュー・ウォーカー著「Why We Sleep」",
      zh: "克里斯托弗·克莱瑞传记《The Master》与马修·沃克著作《Why We Sleep》",
      es: "Biografía de Christopher Clarey 'The Master' y obra 'Why We Sleep' de Matthew Walker",
      fr: "Biographie de Christopher Clarey 'The Master' & ouvrage 'Why We Sleep' de Matthew Walker",
      de: "Christopher Clareys Biografie 'The Master' & Matthew Walkers 'Why We Sleep'",
      pt: "Biografia de Christopher Clarey 'The Master' & obra 'Why We Sleep' de Matthew Walker",
      id: "Biografi Christopher Clarey 'The Master' & Karya Matthew Walker 'Why We Sleep'"
    },
    intro: {
      ko: "메이저 대회 20회 우승에 빛나는 테니스 황제, 로저 페더러. 서른을 넘겨서도 코트에서 신속한 순발력과 부상 없는 경기를 펼친 그의 회복 비결은 과연 무엇일까요? 🎾\n\n페더러는 '수면이야말로 가장 결정적인 내 무기'라고 공언했습니다. 그는 밤에 10시간을 자고 경기나 훈련 사이 1~2시간의 낮잠을 청하여 하루 총 11~12시간의 수면 회복을 철저히 사수했습니다. 이는 뇌의 신경 가소성을 보존하고 인지적 순발력을 최상으로 지켜주는 핵심 루틴이었습니다.\n\n오늘 BuildSelf에서는 페더러의 '충분한 수면 회복' 루틴의 과학적 작동 원리와 현대인을 위한 3단계 실천법을 공개합니다.",
      en: "Tennis legend Roger Federer, winner of 20 Grand Slams. What was his secret to long-lasting peak performance? 🎾\n\nFederer openly credited sleep as his greatest weapon. He slept 10 hours at night and took 1-2 hour naps, achieving 11-12 hours of total daily sleep. This restored neuroplasticity and preserved split-second cognitive reaction times.\n\nToday, BuildSelf reveals the science behind Federer's 'sleep recovery' routine.",
      ja: "テニスの皇帝ロジャー・フェデラー。長期にわたりトップを維持した回復の秘密は何でしょうか？ 🎾\n\nフェデラーは「睡眠こそが最大の武器」と語りました。夜10時間の睡眠と昼寝を組み合わせ、一日計11〜12時間の睡眠を死守しました。これにより神経可塑性と瞬発力を維持しました。\n\n今日のBuildSelfでは、フェデラーの「睡眠回復」ルーティンを紹介します。",
      zh: "夺得20次大满贯的网球天王罗杰·费德勒。他长期保持巅峰状态的恢复秘诀是什么？ 🎾\n\n费德勒公开表示“睡眠是我最重要的武器”。他每晚睡10小时，配合1-2小时午睡，确保每天11-12小时的总睡眠。这极大地恢复了神经可塑性与反应速度。\n\n今天，BuildSelf 将揭示费德勒“睡眠恢复”惯例的科学原理。",
      es: "Roger Federer, leyenda del tenis con 20 Grand Slams. ¿Cuál era su secreto de recuperación? 🎾\n\nFederer reconoció al sueño como su mayor arma. Dormía 10 horas de noche y 1-2 de siesta, sumando 11-12 horas diarias. Esto restauraba la neuroplasticidad y sus reflejos.\n\nHoy, BuildSelf revela la ciencia tras la rutina de 'recuperación por sueño' de Federer.",
      fr: "Roger Federer, légende du tennis. Quel était son secret de récupération ? 🎾\n\nFederer qualifiait le sommeil de sa plus grande arme. Il dormait 10 heures la nuit plus 1 à 2 heures de sieste. Cela préservait sa neuroplasticité et sa réactivité.\n\nAujourd'hui, BuildSelf révèle la science derrière la routine de 'récupération par le sommeil' de Federer.",
      de: "Tennislegende Roger Federer. Was war sein Erholungsgeheimnis? 🎾\n\nFederer nannte Schlaf seine wichtigste Waffe. Er schlief 10 Stunden nachts plus 1–2 Stunden Schläfchen, insgesamt 11–12 Stunden. Dies stellte die Neuroplastizität wieder her.\n\nHeute enthüllt BuildSelf die Wissenschaft hinter Federers 'Schlaferholungs'-Routine.",
      pt: "Roger Federer, lenda do tênis. Qual era seu segredo de recuperação? 🎾\n\nFederer considerava o sono sua maior arma. Ele dormia 10 horas à noite mais 1 a 2 horas de cochilo. Isso restaurava a neuroplasticidade e os reflexos.\n\nHoje, o BuildSelf revela a ciência por trás da rotina de 'recuperação pelo sono' de Federer.",
      id: "Legenda tenis Roger Federer. Apa rahasia pemulihannya? 🎾\n\nFederer menyebut tidur sebagai senjata terbesarnya. Ia tidur 10 jam di malam hari ditambah 1-2 jam tidur siang. Ini memulihkan neuroplastisitas dan kecepatan reaksi.\n\nHari ini, BuildSelf mengungkap sains di balik rutinitas 'pemulihan tidur' Federer."
    },
    whyTitle: {
      ko: "비렘 수면의 신체 재생과 렘 수면의 신경 가소성 회복",
      en: "Physical Regeneration in Non-REM and Neuroplasticity Recovery in REM Sleep",
      ja: "ノンレム睡眠による身体再生とレム睡眠による神経可塑性の回復",
      zh: "非快速眼动期的身体再生与快速眼动期的神经可塑性恢复",
      es: "Regeneración física en No-REM y recuperación de la neuroplasticidad en el sueño REM",
      fr: "Régénération physique en sommeil Non-REM et récupération neuroplastique en REM",
      de: "Körperliche Regeneration im Non-REM- und Neuroplastizität im REM-Schlaf",
      pt: "Regeneração física no sono Não-REM e recuperação da neuroplasticidade no REM",
      id: "Regenerasi Fisik dalam Non-REM dan Pemulihan Neuroplastisitas dalam Tidur REM"
    },
    whyDesc: {
      ko: "충분한 수면 동안 뇌는 축적된 미세 손상을 복구합니다. 깊은 <strong>비렘(Non-REM) 수면</strong>에서는 성장 호르몬이 분비되어 신체를 재정비하고, <strong>렘(REM) 수면</strong>에서는 낮 동안 수집된 인지 패턴과 감각 정보를 정교하게 재배선하여 집중력과 반응 속도를 최고 상태로 만듭니다.",
      en: "During deep sleep, the brain repairs micro-damage. <strong>Non-REM sleep</strong> releases growth hormones for physical repair, while <strong>REM sleep</strong> rewires cognitive patterns to optimize focus and reaction speed.",
      ja: "睡眠中、脳は損傷を修復します。深層の<strong>ノンレム睡眠</strong>で成長ホルモンが分泌され、<strong>レム睡眠</strong>で認知パターンが再配線されて反応速度が高まります。",
      zh: "充足睡眠期间大脑会修复损伤。深度<strong>非快速眼动期(Non-REM)</strong>分泌生长激素修复身体，而<strong>快速眼动期(REM)</strong>则重组认知模式，优化专注力与反应速度。",
      es: "Durante el sueño, el cerebro repara micro-daños. El <strong>sueño No-REM</strong> libera hormonas de crecimiento, mientras el <strong>sueño REM</strong> cablea la cognición para optimizar los reflejos.",
      fr: "Pendant le sommeil, le cerveau répare les lésions. Le <strong>sommeil Non-REM</strong> libère l'hormone de croissance, et le <strong>sommeil REM</strong> réorganise les schémas cognitifs.",
      de: "Im Schlaf repariert das Gehirn Schäden. <strong>Non-REM-Schlaf</strong> schüttet Wachstumshormone aus, während <strong>REM-Schlaf</strong> kognitive Muster neu verdrahtet.",
      pt: "Durante o sono, o cérebro repara microdanos. O <strong>sono Não-REM</strong> libera hormônios de crescimento, enquanto o <strong>sono REM</strong> reconecta a cognição para otimizar os reflexos.",
      id: "Saat tidur, otak memperbaiki kerusakan mikroskopis. Tidur <strong>Non-REM</strong> melepaskan hormon pertumbuhan, sementara tidur <strong>REM</strong> menyusun ulang pola kognitif."
    },
    steps: [
      {
        name: {
          ko: "8시간 수면 우선순위 확보",
          en: "Secure 8-Hour Sleep Priority",
          ja: "8時間睡眠の優先確保",
          zh: "优先保障8小时睡眠",
          es: "Priorizar 8 horas de sueño",
          fr: "Sécuriser 8h de sommeil en priorité",
          de: "8 Stunden Schlaf als Priorität",
          pt: "Priorizar 8 horas de sono",
          id: "Mengamankan Prioritas Tidur 8 Jam"
        },
        text: {
          ko: "하루 일정을 계획할 때 7~8시간 이상의 취면 시간을 고정된 최우선 일정으로 먼저 배정합니다.",
          en: "Block 7-8+ hours of sleep as an unnegotiable top priority when planning your daily schedule.",
          ja: "一日を計画する際、7〜8時間以上の睡眠時間を最優先スケジュールとして固定します。",
          zh: "在规划日程时，将7-8小时以上的睡眠时间作为不可动摇的最高优先级进行安排。",
          es: "Asigne de 7 a 8+ horas de sueño como prioridad no negociable al planificar su agenda.",
          fr: "Planifiez 7 à 8 heures de sommeil comme priorité absolue non négociable dans votre journée.",
          de: "Planen Sie 7–8+ Stunden Schlaf als unumstößliche Priorität in Ihren Tagesablauf ein.",
          pt: "Reserve de 7 a 8+ horas de sono como prioridade innegociável ao planejar seu dia.",
          id: "Tetapkan 7-8+ jam tidur sebagai prioritas utama yang tidak dapat diganggu gugat dalam jadwal Anda."
        }
      },
      {
        name: {
          ko: "블루라이트 차단 암전 환경",
          en: "Blue-Light Block & Dark Room",
          ja: "ブルーライト遮断と暗室環境",
          zh: "遮断蓝光与暗室环境",
          es: "Bloqueo de luz azul y cuarto oscuro",
          fr: "Blocage de lumière bleue et obscurité",
          de: "Blaulicht-Blockade & dunkles Zimmer",
          pt: "Bloqueio de luz azul e quarto escuro",
          id: "Blokir Cahaya Biru & Ruang Gelap"
        },
        text: {
          ko: "취침 1시간 전 스마트폰 사용을 멈추고 침실 온도를 서늘하게(18~20도) 유지하며 암막 커튼을 칩니다.",
          en: "Stop using screens 1 hour before bed, keep the bedroom cool (18-20°C), and use blackout curtains.",
          ja: "취침1時間前にスマホを止め、寝室を涼しく（18〜20度）保ち、遮光カーテンを引きます。",
          zh: "睡前1小时停止使用荧幕，将卧室温度保持在凉爽的18-20度，并拉上遮光窗帘。",
          es: "Apague pantallas 1 hora antes de dormir, mantenga el cuarto fresco (18-20°C) y use cortinas oscuras.",
          fr: "Éteignez les écrans 1 heure avant le coucher, gardez la chambre fraîche et utilisez des rideaux occultants.",
          de: "Schalten Sie 1 Stunde vor dem Schlafen Bildschirme aus, halten Sie das Zimmer kühl und dunkel.",
          pt: "Desligue as telas 1 hora antes de dormir, mantenha o quarto fresco (18-20°C) e use cortinas blackout.",
          id: "Matikan layar 1 jam sebelum tidur, jaga kamar tetap sejuk (18-20°C), dan gunakan tirai blackout."
        }
      },
      {
        name: {
          ko: "20분 오후 파워 냅",
          en: "20-Minute Afternoon Power Nap",
          ja: "20分間の午後パワーナップ",
          zh: "20分钟午后高效小睡",
          es: "Siesta corta de 20 minutos por la tarde",
          fr: "Power nap de 20 minutes l'après-midi",
          de: "20 Minuten Nachmittags-Power-Nap",
          pt: "Cochilo rápido de 20 minutos à tarde",
          id: "Power Nap Sore 20 Menit"
        },
        text: {
          ko: "오후 1~3시 사이 20분의 짧은 낮잠으로 수면 부채를 해소하고 뇌의 신경계를 즉각 리셋합니다.",
          en: "Take a short 20-minute nap between 1-3 PM to reduce sleep debt and reset neural fatigue.",
          ja: "午後1〜3時の間に20分間の短い昼寝をして睡眠負債を解消し、神経系をリセットします。",
          zh: "在下午1点至3点之间小睡20分钟，以还清睡眠债并即时重置大脑神经系统。",
          es: "Tome una siesta de 20 minutos entre la 1 y las 3 PM para reducir la fatiga neurológica.",
          fr: "Faites une sieste de 20 minutes entre 13h et 15h pour éliminer la fatigue veineuse.",
          de: "Machen Sie zwischen 13 und 15 Uhr ein 20-minütiges Schläfchen zur Erholung.",
          pt: "Tire um cochilo de 20 minutos entre 13h e 15h para reduzir o cansaço neural.",
          id: "Lakukan tidur siang singkat 20 menit antara jam 1-3 siang untuk mereset kelelahan saraf."
        }
      }
    ],
    cautionTitle: {
      ko: "카페인 과다 섭취로 인한 수면 파편화 주의",
      en: "Caution Against Sleep Fragmentation From Excessive Caffeine",
      ja: "カフェイン過多による睡眠の断片化に注意",
      zh: "切忌因摄入过多咖啡因导致睡眠碎片化",
      es: "Precaución con la fragmentación del sueño por exceso de cafeína",
      fr: "Attention à la fragmentation du sommeil liée à la caféine",
      de: "Vorsicht vor Schlafunterbrechungen durch zu viel Koffein",
      pt: "Cuidado com a fragmentação do sono por excesso de cafeína",
      id: "Waspada Fragmentasi Tidur Akibat Kafein Berlebihan"
    },
    cautionDesc: {
      ko: "오후 2시 이후 섭취한 카페인은 수면 반감기로 인해 깊은 비렘 수면 진입을 방해합니다. 수면의 양뿐 아니라 수면의 질을 확보하려면 오후 2시 이후에는 커피와 카페인 음료를 자제하세요.",
      en: "Caffeine consumed after 2 PM disrupts deep Non-REM sleep due to its half-life. Avoid caffeine after 2 PM to preserve sleep quality.",
      ja: "午後2時以降のカフェインは深いノンレム睡眠を妨げます。睡眠の質を守るため、午後2時以降のカフェインは控えましょう。",
      zh: "下午2点后摄入的咖啡因因半衰期会干扰深层非快速眼动期睡眠。为保障睡眠质量，下午2点后请节制咖啡因。",
      es: "La cafeína consumida después de las 2 PM altera el sueño profundo. Evite la cafeína después de las 2 PM.",
      fr: "La caféine après 14h perturbe le sommeil profond. Évitez la caféine après 14h pour préserver sa qualité.",
      de: "Koffein nach 14 Uhr stört den Tiefschlaf. Verzichten Sie nach 14 Uhr auf Koffein für gute Schlafqualität.",
      pt: "Café após as 14h prejudica o sono profundo. Evite cafeína após as 14h para garantir a qualidade do sono.",
      id: "Kafein setelah jam 2 siang mengganggu tidur nyenyak. Hindari kafein setelah jam 2 siang."
    },
    faqs: [
      {
        question: {
          ko: "바쁜 일정으로 8시간 수면을 채우지 못할 땐 어떻게 해야 하나요?",
          en: "What if my busy schedule makes 8 hours of sleep impossible?",
          ja: "忙しくて8時間睡眠が取れない場合はどうすればいいですか？",
          zh: "如果日程太忙无法睡满8小时怎么办？",
          es: "¿Qué hacer si mi agenda no me permite dormir 8 horas?",
          fr: "Que faire si mon emploi du temps m'empêche de dormir 8 heures ?",
          de: "Was tun, wenn ein voller Terminkalender 8 Stunden unmöglich macht?",
          pt: "O que fazer se a rotina não permitir dormir 8 horas?",
          id: "Bagaimana jika jadwal sibuk membuat tidur 8 jam tidak memungkinkan?"
        },
        answer: {
          ko: "수면 시간의 절대량이 부족할 때에는 20분의 낮잠과 암전 수면 환경으로 수면의 밀도(깊은 비렘 수면 비율)를 올리는 전략을 취하십시오.",
          en: "When absolute sleep time is lacking, use 20-minute power naps and a completely dark environment to maximize sleep density.",
          ja: "時間が不足している場合は、20分の昼寝と暗室環境で睡眠の密度（深層睡眠の割合）を高める戦略をとりましょう。",
          zh: "在绝对睡眠时间不足时，可通过20分钟午睡和暗室环境来提高睡眠密度（深层睡眠比例）。",
          es: "Si falta tiempo total, use siestas de 20 minutos y una habitación oscura para elevar la densidad del sueño profundo.",
          fr: "En cas de manque de temps, faites une sieste de 20 minutes et dormez dans l'obscurité totale pour maximiser la qualité.",
          de: "Wenn Gesamtzeit fehlt, nutzen Sie 20-Minuten-Naps und Dunkelheit, um die Tiefschlaf-Dichte zu erhöhen.",
          pt: "Se faltar tempo total, use cochilos de 20 minutos e quarto escuro para aumentar a densidade do sono profundo.",
          id: "Jika waktu tidur kurang, gunakan power nap 20 menit dan kamar gelap untuk meningkatkan kepadatan tidur."
        }
      },
      {
        question: {
          ko: "낮잠을 자고 나면 오히려 더 몽롱해지는데 괜찮나요?",
          en: "What if I feel groggy after taking a nap?",
          ja: "昼寝後に逆に頭がぼーっとする場合はどうすればいいですか？",
          zh: "如果午睡后反而感到更加昏沉怎么办？",
          es: "¿Qué hacer si me siento aturdido después de la siesta?",
          fr: "Que faire si je me sens confus après une sieste ?",
          de: "Was tun, wenn ich mich nach dem Nickerchen benommen fühle?",
          pt: "O que fazer se eu acordar tonto após o cochilo?",
          id: "Bagaimana jika saya merasa pening setelah tidur siang?"
        },
        answer: {
          ko: "낮잠 시간이 30분을 넘어가면 깊은 수면 단계로 들어가 기상 시 뇌 관성(Sleep Inertia)이 발생합니다. 낮잠은 반드시 20분 이내로 제한하세요.",
          en: "Napping over 30 minutes enters deep sleep, triggering sleep inertia. Keep naps strictly under 20 minutes.",
          ja: "昼寝が30分を超えると深層睡眠に入り脳慣性が起きます。昼寝は必ず20分以内に制限しましょう。",
          zh: "午睡超过30分钟会进入深层睡眠，引发睡眠惯性导致昏沉。请务必将午睡控制在20分钟以内。",
          es: "Si la siesta supera los 30 minutos, se entra en sueño profundo provocando inercia del sueño. Limítela a 20 minutos.",
          fr: "Une sieste de plus de 30 minutes plonge en sommeil profond, causant de l'inertie. Limitez-la strictement à 20 minutes.",
          de: "Nickerchen über 30 Minuten führen zu Schlafträgheit. Begrenzen Sie das Schläfchen strikt auf 20 Minuten.",
          pt: "Cochilar mais de 30 minutos causa inércia do sono. Limite o cochilo estritamente a no máximo 20 minutos.",
          id: "Tidur siang lebih dari 30 menit memicu inersia tidur. Batasi tidur siang secara ketat di bawah 20 menit."
        }
      }
    ]
  },

  // 5. zaha-hadid-fluid-sketching
  {
    slug: "zaha-hadid-fluid-sketching",
    title: {
      ko: "직선의 틀을 깬 건축 거장? 자하 하디드의 유기적 곡선 스케치 루틴",
      en: "The Architect Who Broke the Mold of Straight Lines? Zaha Hadid's Fluid Sketch Routine",
      ja: "直線の枠を破った建築の巨匠？ザハ・ハディドの有機的曲線スケッチルーティン",
      zh: "打破直线框框的建筑巨匠？扎哈·哈迪德的有机曲线素描惯例",
      es: "¿La arquitecta que rompió el molde de las líneas rectas? La rutina de boceto fluido de Zaha Hadid",
      fr: "L'architecte qui a brisé le moule des lignes droites ? La routine de croquis fluide de Zaha Hadid",
      de: "Die Architektin, die die Form gerader Linien brach? Zaha Hadids flüssige Skizzenroutine",
      pt: "A arquiteta que quebrou o molde das linhas retas? A rotina de esboço fluido de Zaha Hadid",
      id: "Arsitek yang Mendobrak Cetakan Garis Lurus? Rutinitas Sketsa Fluida Zaha Hadid"
    },
    description: {
      ko: "프리츠커상 수상 건축가 자하 하디드. 격자형 관념을 깨고 손으로 유기적 곡선을 자유롭게 그리며 3차원 공간을 구상한 그녀의 뇌 자극 법과 3단계 실천 가이드를 소개합니다.",
      en: "Pritzker Prize winner Zaha Hadid. Discover her freeform fluid sketching routine for 3D spatial visual imagery and a 3-step guide for creative spatial thinkers.",
      ja: "プリツカー賞受賞建築家ザハ・ハディド。格子状の観念を打ち破り、手で自由な曲線を描くことで空間を構想した彼女の脳刺激法と3ステップ実践ガイドを紹介します。",
      zh: "普利兹克奖得主扎哈·哈迪德。介绍她打破网格思维、用手自由绘制有机曲线构想空间的大脑重置法及三步实践指南。",
      es: "La ganadora del Premio Pritzker Zaha Hadid. Descubra su rutina de bocetos fluidos para la ideación espacial 3D y una guía práctica de 3 pasos.",
      fr: "Zaha Hadid, lauréate du prix Pritzker. Découvrez sa routine de croquis fluides pour la conception spatiale 3D et un guide en 3 étapes.",
      de: "Pritzker-Preisträgerin Zaha Hadid. Entdecken Sie ihre Routine für freie flüssige Skizzen zur 3D-Raumvorstellung und einen 3-Schritte-Leitfaden.",
      pt: "A vencedora do Prêmio Pritzker Zaha Hadid. Descubra sua rotina de esboços fluidos para concepção espacial 3D e um guia prático de 3 passos.",
      id: "Pemenang Pritzker Prize Zaha Hadid. Temukan rutinitas sketsa fluidanya untuk konseptualisasi ruang 3D dan panduan praktis 3 langkah."
    },
    authority: {
      ko: "Philip Jodidio 저서 'Zaha Hadid: Complete Works' 및 프리츠커 건축상 연설문",
      en: "Philip Jodidio's 'Zaha Hadid: Complete Works' & Pritzker Prize Address",
      ja: "フィリップ・ジョディディオ著「Zaha Hadid: Complete Works」およびプリツカー賞受賞スピーチ",
      zh: "菲利普·乔迪迪奥著作《Zaha Hadid: Complete Works》与普利兹克奖致辞",
      es: "Obra 'Zaha Hadid: Complete Works' de Philip Jodidio y discurso del Premio Pritzker",
      fr: "Ouvrage 'Zaha Hadid: Complete Works' de Philip Jodidio & discours du Prix Pritzker",
      de: "Philip Jodidios 'Zaha Hadid: Complete Works' & Pritzker-Preis-Rede",
      pt: "Obra 'Zaha Hadid: Complete Works' de Philip Jodidio & discurso do Prêmio Pritzker",
      id: "Karya Philip Jodidio 'Zaha Hadid: Complete Works' & Pidato Pritzker Prize"
    },
    intro: {
      ko: "여성 최초로 건축계의 노벨상이라 불리는 프리츠커상을 수상하며 세계 현대 건축의 패러다임을 바꾼 자하 하디드. 서울 동대문디자인플라자(DDP) 등 곡면으로 이뤄진 우주선 같은 그녀의 건축 기획은 어떻게 탄생했을까요? 🏛️\n\n하디드는 고정된 수평·수직 격자의 툴을 내려놓고 대형 무지 스케치북 위에 먹물과 펜으로 물결치듯 자유로운 곡선과 비정형 선들을 끊임없이 손으로 그렸습니다. 손의 유기적 움직임 속에 포착된 시공간 힌트들이 비선형적 공간 3차원 구상의 도파민 회로를 극적으로 자극했습니다.\n\n오늘 BuildSelf에서는 자하 하디드의 '자유 곡선 스케치' 루틴과 현대인을 위한 3단계 발상 실천법을 탐구합니다.",
      en: "Zaha Hadid, the first woman to win the Pritzker Architecture Prize. How were her futuristic buildings conceived? 🏛️\n\nHadid put down rigid grids and drew fluid curves and organic shapes with ink on large blank sketchbooks. Capturing spatial hints within freehand motion stimulated 3D visuospatial dopamine circuits.\n\nToday, BuildSelf explores Zaha Hadid's 'fluid sketching' routine.",
      ja: "女性として初めてプリツカー賞を受賞した建築家ザハ・ハディド。彼女の流線型建築はどう誕生したのでしょうか？ 🏛️\n\nハディドは格子枠を捨て、大きなスケッチブックに墨とペンで流れるような曲線を無限に手描しました。手の動きの中で掴んだ空間のヒントが、3次元構想の脳回路を刺激しました。\n\n今日のBuildSelfでは、ザハ・ハディドの「自由曲線スケッチ」ルーティンを紹介します。",
      zh: "首位获得普利兹克建筑奖的女性扎哈·哈迪德。她那未来感十足的流线型建筑是如何构想出来的？ 🏛️\n\n哈迪德放下网格规矩，在大本子上手绘流动曲线与非定型线条。在徒手线条的抓取中，刺激了三维空间构想的大脑回路。\n\n今天，BuildSelf 将带您探究扎哈·哈迪德“自由曲线素描”惯例。",
      es: "Zaha Hadid, primera mujer en ganar el Premio Pritzker. ¿Cómo concibió sus edificios futuristas? 🏛️\n\nHadid dejó las cuadrículas rígidas y dibujó curvas fluidas a tinta en blocs grandes. Capturar pistas espaciales en trazos libres estimuló sus circuitos 3D.\n\nHoy, BuildSelf explora la rutina de 'bocetos fluidos' de Zaha Hadid.",
      fr: "Zaha Hadid, première femme lauréate du Prix Pritzker. Comment concevait-elle ses édifices futuristes ? 🏛️\n\nHadid a délaissé la grille rigide pour tracer des courbes fluides à l'encre sur de grands carnets. Ces mouvements libres ont stimulé son imagination spatiale 3D.\n\nAujourd'hui, BuildSelf explore la routine de 'croquis fluide' de Zaha Hadid.",
      de: "Zaha Hadid, die erste Pritzker-Preisträgerin. Wie entstanden ihre futuristischen Bauten? 🏛️\n\nHadid legte starrre Raster ab und zeichnete flüssige Kurven mit Tinte auf große Blöcke. Die Handbewegung stimulierte das räumliche 3D-Denken im Gehirn.\n\nHeute untersucht BuildSelf Zaha Hadids 'flüssige Skizzen'-Routine.",
      pt: "Zaha Hadid, primeira mulher a vencer o Prêmio Pritzker. Como concebia seus edifícios futuristas? 🏛️\n\nHadid abandonou grades rígidas e desenhou curvas fluidas com tinta em blocos grandes. O traço livre estimulava a concepção espacial 3D.\n\nHoje, o BuildSelf explora a rotina de 'esboço fluido' de Zaha Hadid.",
      id: "Zaha Hadid, wanita pertama yang memenangkan Pritzker Architecture Prize. Bagaimana bangunan futuristiknya dirancang? 🏛️\n\nHadid melepaskan kisi kaku dan menggambar kurva fluida dengan tinta pada buku sketsa besar. Gerakan tangan bebas ini menstimulasi sirkuit spasial 3D nya.\n\nHari ini, BuildSelf menjelajahi rutinitas 'sketsa fluida' Zaha Hadid."
    },
    whyTitle: {
      ko: "우뇌적 시공간 처리 회로(Visuospatial Processing)의 자극",
      en: "Stimulation of Right-Brain Visuospatial Processing Circuits",
      ja: "右脳的視空間処理回路（Visuospatial Processing）の刺激",
      zh: "右脑视空间处理回路的刺激",
      es: "Estimulación de circuitos del procesamiento visuoespacial del hemisferio derecho",
      fr: "Stimulation des circuits de traitement visuo-spatial du cerveau droit",
      de: "Stimulation der rechtshemisphärischen visuellen Raumverarbeitung",
      pt: "Estimulação dos circuitos de processamento visoespacial do hemisfério direito",
      id: "Stimulasi Sirkuit Pemrosesan Visuospasial Otak Kanan"
    },
    whyDesc: {
      ko: "정형화된 가이드라인과 직선에 의존할 때 뇌의 좌뇌 논리 영역이 우위를 점하며 비틀린 고정관념을 강화합니다. 하디드처럼 제약 없는 <strong>유기적 손 스케치</strong>를 실행하면 우뇌의 시공간 처리 영역이 활성화되어 새로운 시각적 아이디어가 극대화됩니다.",
      en: "Relying on rigid lines causes left-brain logic to dominate and reinforce fixed assumptions. Freeform <strong>fluid sketching</strong> activates right-brain visuospatial areas to unlock spatial creativity.",
      ja: "直線に依存すると左脳の論理が優位になり、固定観念が強まります。自由な<strong>手描き曲線スケッチ</strong>を行うことで右脳が刺激され、新空間の発想が極大化されます。",
      zh: "过于依赖直线会导致左脑逻辑占主导并固化思维。进行不受限制的<strong>徒手曲线素描</strong>，能激活右脑视空间区域，释放空间创造力。",
      es: "Confiar en líneas rígidas hace que impere la lógica izquierda. El <strong>boceto fluido manual</strong> activa el lado derecho visuoespacial para liberar la creatividad.",
      fr: "S'appuyer sur des lignes rigides renforce les schémas fixes. Le <strong>croquis fluide manuel</strong> active le cerveau droit visuo-spatial pour débloquer la créativité.",
      de: "Rigide Linien verstärken starre Muster. Das <strong>freie flüssige Skizzieren</strong> aktiviert rechtshemisphärische Raumareale für neue Ideen.",
      pt: "Depender de linhas rígidas reforça padrões fixos. O <strong>esboço fluido livre</strong> ativa áreas visoespaciais do cérebro direito para destravar a criatividade.",
      id: "Mengandalkan garis kaku memperkuat asumsi tetap. <strong>Sketsa fluida bebas</strong> mengaktifkan area visuospasial otak kanan untuk memicu kreativitas."
    },
    steps: [
      {
        name: {
          ko: "무지 대형 스케치북 준비",
          en: "Large Blank Sketchbook Setup",
          ja: "無地大型スケッチブックの準備",
          zh: "准备大型空白素描本",
          es: "Preparación de bloc sin líneas grande",
          fr: "Préparation d'un grand carnet vierge",
          de: "Großes blanko Notizbuch bereitstellen",
          pt: "Preparação de bloco grande sem pauta",
          id: "Menyiapkan Buku Sketsa Polos Besar"
        },
        text: {
          ko: "격자나 줄이 없는 큰 무지 노트를 준비하고, 자나 컴퓨터 도구를 멀리 배치합니다.",
          en: "Prepare a large plain notebook without grid lines, and set rulers or digital tools aside.",
          ja: "グリッドや線のない大きな無地ノートを用意し、定規やPCツールを遠ざけます。",
          zh: "准备一本没有网格和横线的大型空白笔记本，将直尺或电脑工具移开。",
          es: "Prepare un bloc grande sin líneas y deje a un lado las reglas o herramientas digitales.",
          fr: "Préparez un grand carnet vierge sans lignes et éloignez les règles et logiciels.",
          de: "Bereiten Sie ein großes blanko Buch vor und legen Sie Lineale und PC-Tools beiseite.",
          pt: "Prepare um bloco grande sem linhas e afaste réguas ou ferramentas digitais.",
          id: "Siapkan buku catatan polos besar tanpa garis, dan jauhkan penggaris atau alat digital."
        }
      },
      {
        name: {
          ko: "손을 이용한 연속 유기적 드로잉",
          en: "Continuous Freehand Organic Drawing",
          ja: "手による連続有機的ドローイング",
          zh: "用手连续绘制有机线条",
          es: "Dibujo orgánico continuo a mano alzada",
          fr: "Dessin organique continu à main levée",
          de: "Fortlaufendes freies organisches Zeichnen",
          pt: "Desenho orgânico contínuo à mão livre",
          id: "Gambar Organik Bebas Berkelanjutan"
        },
        text: {
          ko: "의도적인 형태를 정하지 않고 물결, 바람, 곡선의 흐름을 손으로 5분간 끊임없이 묘사합니다.",
          en: "Without pre-planned shapes, continuously draw waves, curves, and fluid flows for 5 minutes.",
          ja: "意図的な形を決めず、波や風、曲線の流れを5分間絶え間なく描き描写します。",
          zh: "不设定预想形状，用手连续5分钟不停地话出水波、风声与自由曲线。",
          es: "Sin formas predefinidas, dibuje olas, curvas y fluidos de forma continua durante 5 minutos.",
          fr: "Sans forme préconçue, tracez des vagues, des courbes et des flux de manière continue pendant 5 minutes.",
          de: "Zeichnen Sie 5 Minuten lang ohne vorgegebene Form Wellen, Kurven und flüssige Linien.",
          pt: "Sem formas pré-definidas, desenhe ondas, curvas e fluxos de forma contínua por 5 minutos.",
          id: "Tanpa bentuk yang direncanakan, gambar gelombang dan kurva secara berkelanjutan selama 5 menit."
        }
      },
      {
        name: {
          ko: "곡선 간의 3차원 형상 포착",
          en: "3D Shape Capture Among Curves",
          ja: "曲線間の3次元形状の捕捉",
          zh: "捕捉线条交错出的3D形状",
          es: "Captura de formas 3D entre las curvas",
          fr: "Capture de formes 3D parmi les courbes",
          de: "Erfassen von 3D-Formen aus den Kurven",
          pt: "Captura de formas 3D entre as curvas",
          id: "Menangkap Bentuk 3D di Antara Kurva"
        },
        text: {
          ko: "겹쳐진 자유 곡선들 사이에서 느껴지는 공간감이나 구조적 음영을 발견해 아이디어로 옮깁니다.",
          en: "Discover spatial depth or shadow structures within overlapping freehand curves and translate them into ideas.",
          ja: "重なり合った曲線の間に感じられる空間感や影を発見し、アイデアへと展開します。",
          zh: "在重叠的自由线条中发现空间深度感或阴影结构，并将其转化为实际构想。",
          es: "Descubra profundidad espacial o estructuras entre las curvas superpuestas y conviértalas en ideas.",
          fr: "Découvrez des structures ou de la profondeur parmi les courbes et traduisez-les en idées.",
          de: "Entdecken Sie Tiefe oder Schattenstrukturen in den Kurven und verwandeln Sie sie in Ideen.",
          pt: "Descubra profundidade espacial ou estruturas entre as curvas e converta-as em ideias.",
          id: "Temukan kedalaman ruang atau struktur bayangan di antara kurva dan ubah menjadi ide."
        }
      }
    ],
    cautionTitle: {
      ko: "초반 완성도에 대한 정밀 집착 주의",
      en: "Caution Against Early Perfectionism Obsession",
      ja: "初期段階の完璧主義的執着に注意",
      zh: "切忌在初期阶段沉迷于完美主义",
      es: "Precaución con la obsesión por el perfeccionismo inicial",
      fr: "Attention à la recherche de perfection initiale",
      de: "Vorsicht vor frühem Perfektionismus",
      pt: "Cuidado com o perfeccionismo no início",
      id: "Waspada Obsesi Perfeksionisme di Awal"
    },
    cautionDesc: {
      ko: "스케치 초반에 '예쁜 그림을 그려야지' 하고 자를 대거나 비대칭을 수정하면 뇌의 자유 발상 회로가 닫힙니다. 처음 5분은 완성도가 아닌 자유로운 선의 흐름 자체에만 집중하세요.",
      en: "Fixating on neat drawings or using rulers early closes the brain's creative ideation circuits. Focus purely on line flow for the first 5 minutes.",
      ja: "初期に「綺麗に描こう」と定規を使うと、脳の発想回路が閉ざされます。最初の5分は綺麗な絵ではなく線の流れに集中しましょう。",
      zh: "若在初期沉迷“画得漂亮”而使用直尺修正，会封闭大脑的自由发散回路。前5分钟请只专注线条流淌本身。",
      es: "Buscar bocetos perfectos al inicio bloquea la creatividad. En los primeros 5 minutos, concéntrese solo en el flujo de trazos.",
      fr: "Chercher à faire de beaux croquis au début bloque l'inspiration. Concentrez-vous uniquement sur le flux de lignes pendant 5 minutes.",
      de: "Wer zu Beginn schön zeichnen will, blockiert kreative Pfade. Konzentrieren Sie sich 5 Minuten nur auf den Fluss.",
      pt: "Buscar desenhos perfeitos no início bloqueia a criatividade. Nos primeiros 5 minutos, foque apenas no fluxo das linhas.",
      id: "Perfeksionisme di awal menutup sirkuit ideasi kreatif. Fokuslah murni pada alur garis selama 5 menit pertama."
    },
    faqs: [
      {
        question: {
          ko: "그림 실력이 전혀 없어도 이 루틴을 쓸 수 있나요?",
          en: "Can I use this routine even if I have zero drawing skills?",
          ja: "絵の技術が全くなくてもこのルーティンは使えますか？",
          zh: "完全没有绘画基础也可以使用这个惯例吗？",
          es: "¿Se puede usar esta rutina sin saber dibujar?",
          fr: "Puis-je utiliser cette routine sans savoir dessiner ?",
          de: "Kann man diese Routine nutzen, ohne zeichnen zu können?",
          pt: "Posso usar essa rotina mesmo sem saber desenhar?",
          id: "Bisakah menggunakan rutinitas ini tanpa keahlian menggambar sama sekali?"
        },
        answer: {
          ko: "네, 예술 작품을 만드는 것이 목적이 아니라 '손의 움직임으로 우뇌 공간 회로를 자극'하는 인지 훈련이므로 낙서 수준의 선으로도 완벽한 효과가 납니다.",
          en: "Yes! The goal is cognitive stimulation through hand motion, not art. Simple doodles yield full cognitive benefits.",
          ja: "はい！目的はアート作成ではなく「手の動きによる脳の刺激」なので、落書き程度の線でも十分効果的です。",
          zh: "当然可以！目的在于通过手部运动刺激右脑，而非创作艺术品，即便是涂鸦级别的线条也能达到完整效果。",
          es: "¡Sí! El objetivo es estimular la mente con el movimiento de la mano, no el arte. Garabatos simples funcionan perfecto.",
          fr: "Oui ! Le but est la stimulation cognitive par le geste, pas l'art. De simples gribouillages suffisent.",
          de: "Ja! Ziel ist mentale Stimulation durch Handbewegung, nicht Kunst. Einfaches Kritzeln bringt vollen Effekt.",
          pt: "Sim! O objetivo é estimular a mente com o movimento da mão, não a arte. Rabiscos simples funcionam perfeitamente.",
          id: "Ya! Tujuannya adalah stimulasi otak melalui gerakan tangan, bukan seni. Coretan sederhana sudah cukup."
        }
      },
      {
        question: {
          ko: "태블릿 디지털 펜슬을 써도 효과가 똑같은가요?",
          en: "Is the effect the same when using digital tablet pens?",
          ja: "タブレットのデジタルペンを使っても効果は同じですか？",
          zh: "使用平板电脑数字画笔效果是一样的吗？",
          es: "¿El efecto es el mismo usando lápiz digital en tablet?",
          fr: "L'effet est-il le même avec un stylet sur tablette ?",
          de: "Ist der Effekt mit einem Tablet-Stift derselbe?",
          pt: "O efeito é o mesmo usando caneta digital no tablet?",
          id: "Apakah efeknya sama saat menggunakan pena digital tablet?"
        },
        answer: {
          ko: "가능합니다. 단, 화면 손떨림 보정이나 뒤로가기(Undo) 기능을 사용하면 뇌가 수정을 의식하게 되므로 보정 기능을 끄고 자유롭게 그리는 환경을 추천합니다.",
          en: "Yes, but turn off stroke stabilization and Undo functions to prevent your brain from pre-checking mistakes.",
          ja: "可能です。ただし手ブレ補正やUndo機能を使うと無意識の修正が入るため、補正をオフにして描くことをお勧めします。",
          zh: "可以。但建议关闭防抖或撤销(Undo)功能，以免大脑出于本能预先修正误笔，保持自由绘制环境。",
          es: "Sí, pero desactive la corrección de trazo y el botón Deshacer para evitar que el cerebro pre-corrija sus errores.",
          fr: "Oui, mais désactivez la correction de tracé et la fonction Annuler pour éviter d'inhiber le geste.",
          de: "Ja, aber schalten Sie Glättung und Rückgängig-Tasten aus, damit das Gehirn nicht vorher korrigiert.",
          pt: "Sim, mas desative a correção de traço e o desfazer para evitar que o cérebro corrija erros antecipadamente.",
          id: "Ya, tapi matikan penyeimbang garis dan fungsi Undo untuk mencegah otak mengoreksi kesalahan secara dini."
        }
      }
    ]
  }
];

function generateFiles() {
  habitEntries.forEach(item => {
    // 1. JSON 생성
    const jsonPath = path.join(habitsDataDir, `${item.slug}.json`);
    const jsonObj = { [item.slug]: item };
    fs.writeFileSync(jsonPath, JSON.stringify(jsonObj, null, 2), 'utf-8');
    console.log(`[생성] 번역 JSON: ${item.slug}.json`);

    // 2. KO 마크다운 생성
    const koPath = path.join(koBlogDir, `${item.slug}.md`);
    const stepsYaml = item.steps.map(s => `  - name: "${s.name.ko.replace(/"/g, '\\"')}"\n    text: "${s.text.ko.replace(/"/g, '\\"')}"`).join('\n');
    const faqsYaml = item.faqs.map(f => `  - question: "${f.question.ko.replace(/"/g, '\\"')}"\n    answer: "${f.answer.ko.replace(/"/g, '\\"')}"`).join('\n');

    const stepCardsHtml = item.steps.map((s, idx) => `
<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 tracking-wider">STEP ${idx + 1}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${s.name.ko}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${s.text.ko}
  </p>
</div>`).join('\n');

    const faqAccordionHtml = item.faqs.map((f, idx) => `
  <details class="group ${idx < item.faqs.length - 1 ? 'border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4' : ''} cursor-pointer" ${idx === 0 ? 'open' : ''}>
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
      <span>${f.question.ko}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${f.answer.ko}
    </p>
  </details>`).join('\n');

    const koContent = `---
title: "${item.title.ko.replace(/"/g, '\\"')}"
description: "${item.description.ko.replace(/"/g, '\\"')}"
pubDate: "${today}"
updatedDate: "${today}"
category: "BuildSelf"
tags: ["위인 습관", "Routine"]
heroImage: "/images/blog/${item.slug.replace(/-/g, '_')}.png"
app: "buildself"
formatVersion: 4
authority: "${item.authority.ko.replace(/"/g, '\\"')}"
steps:
${stepsYaml}
faqs:
${faqsYaml}
---

${item.intro.ko}

<div class="my-6 p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-center gap-4">
  <span class="text-2xl">📜</span>
  <div>
    <h4 class="text-sm font-bold text-indigo-600 dark:text-indigo-400 m-0">역사적 근거 및 문헌 자료</h4>
    <p class="text-slate-600 dark:text-slate-300 text-xs m-0 mt-1">${item.authority.ko}</p>
  </div>
</div>

---

## 1. ${item.whyTitle.ko}

${item.whyDesc.ko}

---

## 2. 세부 실천 가이드

${stepCardsHtml}

---

## 3. ${item.cautionTitle.ko}
<div class="my-6 p-5 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-start gap-4">
  <span class="text-xl">💡</span>
  <div>
    <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
      ${item.cautionDesc.ko}
    </p>
  </div>
</div>

---

<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0 mb-6 flex items-center gap-2">
    <span>📌</span> 자주 묻는 질문 (FAQ)
  </h3>
  ${faqAccordionHtml}
</div>
`;

    fs.writeFileSync(koPath, koContent, 'utf-8');
    console.log(`[생성] KO 마크다운: ${item.slug}.md`);
  });
}

generateFiles();
