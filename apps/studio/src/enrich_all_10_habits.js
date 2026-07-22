import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDataDir = path.join(__dirname, 'data/blogs/habits');
const habitsItemDir = path.join(__dirname, 'data/habits/items');
const koBlogDir = path.join(__dirname, 'content/blog/ko');

const today = "2026-07-22";

// 습관 3~10번 보강 데이터
const additionalEnrichedHabits = [
  // 3. tim-cook-early-morning-routine
  {
    slug: "tim-cook-early-morning-routine",
    title: {
      ko: "새벽 3시 45분에 일어나 100통의 메일을 읽는 CEO? 팀 쿠크의 아침 제어 루틴",
      en: "The CEO Who Wakes Up at 3:45 AM to Read 100 Emails? Tim Cook's Morning Routine",
      ja: "午前3時45分に起き100通のメールを読むCEO？ティム・クックの朝のコントロール法",
      zh: "凌晨3点45分起床阅读100封邮件的CEO？蒂姆·库克的清晨掌控惯例",
      es: "¿El CEO que se levanta a las 3:45 AM a leer 100 correos? La rutina matutina de Tim Cook",
      fr: "Le PDG qui se lève à 3h45 pour lire 100 e-mails ? La routine matinale de Tim Cook",
      de: "Der CEO, der um 3:45 Uhr aufsteht und 100 E-Mails liest? Tim Cooks Morgenroutine",
      pt: "O CEO que acorda às 3:45 para ler 100 e-mails? A rotina matinal de Tim Cook",
      id: "CEO yang Bangun Jam 3:45 Pagi Membaca 100 Email? Rutinitas Pagi Tim Cook"
    },
    description: {
      ko: "세계 최대 IT 기업 애플(Apple)을 이끄는 수장 팀 쿠크. 매일 새벽 3시 45분에 기상해 사용자 피드백 메일을 읽고 5시에 운동하는 그의 주도권 확보 루틴과 3단계 실천법을 알아봅니다.",
      en: "Tim Cook, CEO of Apple. Discover his 3:45 AM wake-up routine for taking full control of the day before external noise interrupts.",
      ja: "Appleを率いるティム・クック。毎朝3時45分に起き、一日を完全にコントロールする彼の早起き習慣を紹介します。",
      zh: "苹果CEO蒂姆·库克。介绍他凌晨3:45起床在外界噪音前主导整天主导权的日常惯例。",
      es: "Tim Cook, CEO de Apple. Descubra su rutina de levantarse a las 3:45 AM para tomar el control de su día.",
      fr: "Tim Cook, PDG d'Apple. Découvrez sa routine de réveil à 3h45 pour prendre le contrôle de sa journée.",
      de: "Tim Cook, CEO von Apple. Entdecken Sie seine Routine um 3:45 Uhr morgens zur Übernahme der Kontrolle über den Tag.",
      pt: "Tim Cook, CEO da Apple. Descubra sua rotina às 3:45 da manhã para assumir o controle do seu dia.",
      id: "Tim Cook, CEO Apple. Temukan rutinitas bangun jam 3:45 pagi untuk memegang kendali atas harinya."
    },
    authority: {
      ko: "Time 커버스토리 인터뷰 및 Leander Kahney 전기 'Tim Cook: The Genius Who Took Apple to the Next Level'",
      en: "Time Magazine Cover Story & Leander Kahney's Biography 'Tim Cook'",
      ja: "Time誌カバーインタビューおよびリアンダー・ケーニー評伝「Tim Cook」",
      zh: "《时代周刊》封面采访及利安德·卡尼传记《蒂姆·库克传》",
      es: "Entrevista de portada de Time y biografía de Leander Kahney 'Tim Cook'",
      fr: "Interview de couverture de Time Magazine & biographie de Leander Kahney 'Tim Cook'",
      de: "Time Cover-Story & Leander Kahneys Biografie 'Tim Cook'",
      pt: "Entrevista da Time Magazine & biografia de Leander Kahney 'Tim Cook'",
      id: "Wawancara Sampul Time Magazine & Biografi Leander Kahney 'Tim Cook'"
    },
    intro: {
      ko: "글로벌 IT 제국 애플(Apple)의 CEO로서 매일 수억 명의 일상과 수조 달러의 의사결정을 지휘하는 세계 최고의 경영자, 팀 쿠크(Tim Cook). 세상의 모든 외부 소음과 메시지가 몰아치기 전, 그가 하루를 완전한 자신의 주도하에 두기 위해 고수한 최고의 아침 비밀은 무엇일까요? ⌚\n\n쿠크는 매일 새벽 3시 45분에 알람 없이 자연스럽게 눈을 뜹니다. 그는 기상 직후 1시간 동안 전 세계 사용자들이 보낸 70~100여 통의 솔직한 제품 피드백 이메일을 읽고 응답하며 현장의 목소리를 직접 확인합니다. 이어 새벽 5시에는 회사 밖 사설 헬스장으로 이동해 1시간 동안 고강도 웨이트 트레이닝과 유산소 운동에 전념합니다. 세상이 잠든 이 새벽 시간이야말로 타인의 업무 요구에 수동적으로 반응하지 않고, 자신의 에너지와 우선순위를 주도적으로 설계하는 '완전 통제의 시간'입니다.\n\n오늘 BuildSelf에서는 팀 쿠크의 '새벽 주도권 확보' 루틴의 뇌과학적 작동 원리와 현대 직장인들이 하루의 주도권을 장악하는 3단계 실천법을 공개합니다.",
      en: "Tim Cook, CEO of Apple, directing decisions for hundreds of millions of users daily. What is his secret to taking full control of the day before world noise intrudes? ⌚\n\nEvery day at 3:45 AM, Cook wakes up to spend an hour reading around 100 customer feedback emails to stay grounded in user reality. By 5:00 AM, he hits a private gym off-campus for a 1-hour intense workout. This early solitude is his uninterrupted zone for mastering priorities before reacting to demands.\n\nToday, BuildSelf reveals the science behind Tim Cook's 'morning control' routine and a 3-step action plan.",
      ja: "Appleを率いるCEOティム・クック。彼の意思決定の秘密は何でしょうか？ ⌚\n\nクックは毎朝3時45分に起き、1時間顧客メールを読んだ後、5時にジムで汗を流します。外部の邪魔が入らないこの時間こそ、一日の主導権を握るゾーンです。\n\n今日のBuildSelfでは、ティム・クックの「早起きコントロール」ルーティンを紹介します。",
      zh: "苹果CEO蒂姆·库克。在外界噪音进入之前，他掌控整天的秘诀是什么？ ⌚\n\n库克每天凌晨3:45起床，花一小时阅读用户反馈邮件，5点前去健身房锻炼。这段安静的时间是他主导一天优先事项的黄金时间。\n\n今天，BuildSelf 将带您探究蒂姆·库克“清晨掌控”惯例指南。",
      es: "Tim Cook, CEO de Apple. ¿Cuál es su secreto para controlar su día antes de que empiece el ruido externo? ⌚\n\nTodos los días a las 3:45 AM, Cook lee 100 correos de clientes y a las 5:00 AM entrena en el gimnasio. Esta soledad le da el control total.\n\nHoy, BuildSelf explora los principios de la rutina de control matutino de Tim Cook.",
      fr: "Tim Cook, PDG d'Apple. Quel est son secret pour prendre le contrôle de sa journée avant le bruit extérieur ? ⌚\n\nChaque jour à 3h45, Cook lit 100 e-mails clients et à 5h00 il s'entraîne en salle. Ce calme lui permet de maîtriser ses priorités.\n\nAujourd'hui, BuildSelf explore la routine matinale de contrôle de Tim Cook.",
      de: "Tim Cook, CEO von Apple. Was ist sein Geheimnis zur Übernahme der Kontrolle über den Tag? ⌚\n\nJeden Tag um 3:45 Uhr liest Cook Kunden-E-Mails und um 5:00 Uhr trainiert er im Fitnessstudio. Diese Ruhe gibt ihm volle Kontrolle.\n\nHeute untersucht BuildSelf die Prinzipien von Tim Cooks Morgenroutine.",
      pt: "Tim Cook, CEO da Apple. Qual é o seu segredo para assumir o controle do dia antes do ruído externo? ⌚\n\nTodos os dias às 3:45 da manhã, Cook lê e-mails de clientes e às 5:00 treina na academia. Essa quietude lhe dá controle total.\n\nHoje, o BuildSelf explora os princípios da rotina matinal de Tim Cook.",
      id: "Tim Cook, CEO Apple. Apa rahasianya memegang kendali penuh atas harinya sebelum gangguan luar datang? ⌚\n\nSetiap hari jam 3:45 pagi, Cook membaca email pelanggan dan jam 5:00 berolahraga. Waktu tenang ini memberinya kendali penuh.\n\nHari ini, BuildSelf menjelajahi prinsip di balik rutinitas pagi Tim Cook."
    },
    whyTitle: {
      ko: "전두엽 포도당 예산 보호와 자아 고갈 예방 메커니즘",
      en: "Mechanism: Prefrontal Glucose Budget Protection and Ego Depletion Prevention",
      ja: "前頭葉のブドウ糖保護と自我枯渇の予防メカニズム",
      zh: "前额叶葡萄糖预算保护与自我消耗预防机制",
      es: "Mecanismo: Protección del presupuesto de glucosa prefrontal y prevención del agotamiento del ego",
      fr: "Mécanisme : Protection du budget de glucose préfrontal et prévention de l'épuisement de l'ego",
      de: "Mechanismus: Schutz des präfrontalen Glukose-Budgets und Vermeidung von Ego-Erschöpfung",
      pt: "Mecanismo: Proteção do orçamento de glicose pré-frontal e prevenção da exaustão do ego",
      id: "Mekanisme: Perlindungan Anggaran Glukosa Prefrontal dan Pencegahan Ego Depletion"
    },
    whyDesc: {
      ko: "인간의 뇌, 특히 전두엽 피질(Prefrontal Cortex)이 의사결정 시 사용하는 에너지 자원은 유한합니다. 낮 동안 타인의 요청과 수동적 이메일에 치이다 보면, 정작 중요한 전략적 판단을 내릴 때 뇌는 <strong></strong> 상태에 빠지게 됩니다.\n\n새벽 3시 45분의 조용한 아침 자율성은 뇌의 포도당과 실행 통제력(Executive Control)을 100% 온전하게 보존하여, 하루 중 가장 맑은 뇌 상태에서 핵심 우선순위 결정과 신체 운동을 완수하도록 돕습니다.",
      en: "The decision-making capacity of the prefrontal cortex relies on finite glucose energy. Reacting to passive demands during normal office hours induces <strong></strong>.\n\nEarly morning autonomy preserves executive control at 100%, allowing key priority setting and physical exercise when the brain is freshest.",
      ja: "前頭葉の意志決定エネルギーは有限です。日中に受信的作業に追われると<strong></strong>に陥ります。\n\n早朝の自律的な時間は、最もクリアな脳の状態で最も重要な決定を下すことを可能にします。",
      zh: "大脑前额叶用于决策的能量是有限的。白天若一直被动响应请求会导致<strong></strong>。\n\n清晨的自主时间能完好保留执行控制力，让大脑在大脑最清醒时做出核心决策。",
      es: "La capacidad de decisión del cerebro es finita. Responder a demandas ajenas causa <strong></strong>.\n\nLa autonomía matutina preserva el control ejecutivo al 100% para tomar decisiones clave.",
      fr: "La capacité de décision du cerveau est limitée. Répondre aux demandes extérieures provoque <strong></strong>.\n\nL'autonomie matinale préserve le contrôle exécutif à 100% pour décider des priorités.",
      de: "Die Entscheidungskapazität des Gehirns ist begrenzt. Ständiges Reagieren führt zu <strong></strong>.\n\nDie Autonomie am frühen Morgen bewahrt die volle Kontrolle für wichtige Entscheide.",
      pt: "A capacidade de decisão do cérebro é finita. Responder a demandas externas causa <strong></strong>.\n\nA autonomia matinal preserva o controle executivo a 100% para decisões prioritárias.",
      id: "Kapasitas pengambilan keputusan otak bersifat terbatas. Bereaksi terhadap permintaan luar menyebabkan <strong></strong>.\n\nOtonomi pagi hari mempertahankan kendali eksekutif 100% untuk prioritas utama."
    },
    steps: [
      {
        name: {
          ko: "외부 소음 제로 타임블록 확보",
          en: "Securing a Zero-External-Noise Time Block",
          ja: "外部ノイズゼロのタイムブロック確保",
          zh: "锁定外部噪音为零的时间块",
          es: "Asegurar un bloque de tiempo sin ruido externo",
          fr: "Sécuriser un bloc de temps sans bruit extérieur",
          de: "Sichern eines zeitzonenfreien Ruheblocks",
          pt: "Garantir um bloco de tempo sem ruído externo",
          id: "Memastikan Blok Waktu Bebas Gangguan Luar"
        },
        text: {
          ko: "평소 기상 시각보다 30분~1시간 일찍 눈을 떠, 타인의 메시지나 SNS를 차단하고 나만의 주도권을 행사할 수 있는 맑은 시간을 확보합니다.",
          en: "Wake up 30-60 minutes earlier than usual to secure a clear time window for your own agenda before digital noise begins.",
          ja: "普段より30分早起きし、外部の連絡を遮断した自分だけの時間を確保します。",
          zh: "比平时早起30-60分钟，切断外界联系，锁定只属于自己的首要时间段。",
          es: "Levántese 30 minutos antes para asegurar un tiempo a su favor antes de que comience el ruido.",
          fr: "Réveillez-vous 30 minutes plus tôt pour sécuriser un temps d'avance sans distractions.",
          de: "Wachen Sie 30 Minuten früher auf, um eine ungestörte Zeit für Ihre Agenda zu haben.",
          pt: "Acorde 30 minutos mais cedo para garantir um tempo para suas próprias prioridades.",
          id: "Bangun 30-60 menit lebih awal untuk memegang kendali atas agenda Anda sebelum gangguan mulai."
        }
      },
      {
        name: {
          ko: "하루 최고 우선순위 1가지 즉시 실행",
          en: "Immediate Execution of the Day's Top Priority",
          ja: "一日最優先事項1つの 即時実行",
          zh: "立即执行当天第一优先事项",
          es: "Ejecución inmediata de la máxima prioridad del día",
          fr: "Exécution immédiate de la priorité absolue",
          de: "Sofortige Umsetzung der Höchstpriorität",
          pt: "Execução imediata da prioridade máxima do dia",
          id: "Eksekusi Seketika Prioritas Utama Hari Ini"
        },
        text: {
          ko: "기상 직후 가장 뇌가 맑은 상태에서 오늘 반드시 처리해야 할 1가지 핵심 과제(운동, 독서, 혹은 전략 기획)를 먼저 완수합니다.",
          en: "Use your freshest mental capacity right upon waking to complete your single most important task first.",
          ja: "一番頭が冴えている時間に、本日最も critical な課題一つを完了させます。",
          zh: "在大脑最清醒的时刻，首先完成今天最重要的一项核心任务。",
          es: "Complete la tarea más importante del día primero, cuando su mente está más fresca.",
          fr: "Accomplissez votre tâche la plus importante en premier, lorsque votre esprit est clair.",
          de: "Erledigen Sie die wichtigste Aufgabe zuerst, wenn Ihr Geist am frischesten ist.",
          pt: "Conclua a tarefa mais importante primeiro, quando sua mente estiver limpa.",
          id: "Selesaikan satu tugas paling penting terlebih dahulu saat pikiran Anda paling segar."
        }
      },
      {
        name: {
          ko: "동일 비율의 조기 취침 스케줄 동기화",
          en: "Synchronizing an Equivalent Early Bedtime",
          ja: "就寝時間の同等な前倒し同期",
          zh: "同步前移同等比例的早睡日程",
          es: "Sincronizar una hora de acostarse equivalente",
          fr: "Aligner une heure de coucher plus précoce",
          de: "Synchronisieren einer frühzeitigen Schlafenszeit",
          pt: "Sincronizar um horário de dormir antecipado",
          id: "Menyinkronkan Waktu Tidur Lebih Awal"
        },
        text: {
          ko: "무작정 수면 시간을 줄이지 말고, 일찍 일어난 만큼 밤 9시~10시 사이에 조기 취침하여 7시간 이상의 총 수면 양을 철저히 보존합니다.",
          en: "Do not sacrifice sleep duration; shift your bedtime earlier (e.g., 9:30 PM) to maintain at least 7 hours of total rest.",
          ja: "睡眠時間を削るのではなく、就寝時間を早めて7時間以上の睡眠を確保します。",
          zh: "切勿牺牲睡眠时长；通过提早入睡（如晚上9点-10点）来严格保证7小时以上 sleep。",
          es: "No reduzca las horas de sueño; acuéstese antes para mantener 7 horas de descanso.",
          fr: "Ne réduisez pas votre sommeil ; couchez-vous plus tôt pour garder 7 heures de repos.",
          de: "Opfern Sie keinen Schlaf; gehen Sie früher ins Bett für mindestens 7 Stunden Schlaf.",
          pt: "Não reduza o sono; vá para a cama mais cedo para garantir 7 horas de descanso.",
          id: "Jangan kurangi durasi tidur; tidurlah lebih awal untuk menjaga 7 jam istirahat."
        }
      }
    ],
    cautionTitle: {
      ko: "수면 시간 축소에 따른 뇌 피로 누적 주의",
      en: "Caution Against Sleep Deprivation and Chronic Fatigue",
      ja: "睡眠時間の減少による疲労蓄積に注意",
      zh: "切忌因压缩睡眠导致慢性疲劳与大脑受损",
      es: "Precaución con la privación de sueño y la fatiga crónica",
      fr: "Attention à la privation de sommeil et à la fatigue chronique",
      de: "Vorsicht vor Schlafmangel und chronischer Erschöpfung",
      pt: "Cuidado com a privação de sono e fadiga crônica",
      id: "Waspada Kekurangan Tidur dan Kelelahan Kronis"
    },
    cautionDesc: {
      ko: "팀 쿠크의 기상 루틴을 흉내 내기 위해 밤늦게 자면서 무리하게 새벽 일찍 일어나면 전두엽 세포에 만성 피로가 쌓여 판단력이 저하됩니다. 얼리 버드 루틴의 본질은 기상 시각 자체가 아니라 '일찍 자고 일찍 깨어 주도권을 쥐는 것'에 있음을 잊지 마세요.",
      en: "Imitating Cook's early wake-up without advancing your bedtime leads to chronic sleep deprivation and impaired judgment. The core of early rising is shifting the whole window early to master control, not cutting rest.",
      ja: "就寝時間を早めずに早起きだけを真似すると、脳に疲労が溜まります。早起きの本質は「睡眠時間を確保した上でのコントロール」です。",
      zh: "若不提前入睡而硬要早起，会导致前额叶慢性疲劳、判断力下降。早起习惯的本质在于提早入睡与掌握主动权。",
      es: "Madrugar sin acostarse antes causa fatiga crónica y resta juicio. El secreto es mover el horario entero, no dormir menos.",
      fr: "Se lever tôt sans se coucher plus tôt provoque de la fatigue. Le secret est de décaler tout son rythme, pas de moins dormir.",
      de: "Früh aufzustehen ohne früh einzuschlafen führt zu Erschöpfung. Der Kern ist das Verschieben des gesamten Fensters.",
      pt: "Madrugar sem dormir cedo causa fadiga crônica. O segredo é antecipar todo o ciclo, não dormir menos.",
      id: "Bangun awal tanpa tidur lebih awal menyebabkan kelelahan. Kuncinya adalah menggeser seluruh jadwal, bukan mengurangi tidur."
    },
    faqs: [
      {
        question: {
          ko: "저녁형 인간(야행성)도 이 새벽 루틴을 따라 하는 것이 좋은가요?",
          en: "Should night owls also force this early morning routine?",
          ja: "夜型人間もこの早朝ルーティンを真似すべきですか？",
          zh: "夜型人（习惯熬夜）也应该强行模仿这个清晨惯例吗？",
          es: "¿Deberían las personas nocturnas forzar esta rutina matutina?",
          fr: "Les personnes nocturnes doivent-elles appliquer cette routine ?",
          de: "Sollten auch Nachteulen diese Frühaufsteher-Routine erzwingen?",
          pt: "Pessoas noturnas devem forçar essa rotina matinal?",
          id: "Apakah orang tipe malam juga harus memaksakan rutinitas pagi ini?"
        },
        answer: {
          ko: "자신의 유전적 수면 위상(Chronotype)이 완전한 야행성이라면 무리해서 새벽 3-4시에 일어날 필요는 없습니다. 본 루틴의 핵심 시사점은 '하루 중 외부 방해가 제로인 나만의 주도적 1시간을 확보하는 것'이므로, 퇴근 후 1시간이나 심야 1시간으로 대체해도 동일한 효과를 거둘 수 있습니다.",
          en: "No. If your chronotype is naturally evening-oriented, do not force 3:45 AM. The true core is securing 1 uninterrupted hour for yourself, which can be done in the evening.",
          ja: "遺伝的な夜型の方は無理をする必要はありません。核心は「邪魔の入らない1時間を確保すること」です。",
          zh: "无需强求。关键在于“确保1小时不受干扰的自主时间”，夜型人也可在晚间安排属于自己的专有时间。",
          es: "No. Si su cronotipo es nocturno, busque su hora ininterrumpida por la noche. Lo importante es el control de la prioridad.",
          fr: "Non. Si votre chronotype est nocturne, sécurisez votre heure de calme le soir. L'important est la maîtrise du temps.",
          de: "Nein. Wenn Ihr Chronotyp abendlich ist, nutzen Sie eine ruhige Stunde am Abend. Es geht um ungestörte Kontrolle.",
          pt: "Não. Se o seu cronotipo for noturno, garanta sua hora ininterrupta à noite. O essencial é a autonomia.",
          id: "Tidak perlu. Jika kronotipe Anda malam hari, amankan 1 jam tenang di malam hari. Yang penting adalah otonomi."
        }
      },
      {
        question: {
          ko: "새벽에 일찍 일어나면 오후에 피곤해지는데 어떻게 극복하나요?",
          en: "How do I deal with afternoon fatigue after waking up early?",
          ja: "早起きすると午後に眠くなるのですが、どうすればいいですか？",
          zh: "早起后下午感到疲倦该如何 overcome？",
          es: "¿Cómo superar la fatiga por la tarde tras madrugar?",
          fr: "Comment surmonter la fatigue de l'après-midi ?",
          de: "Wie überwinde ich die Nachmittagsmüdigkeit nach dem Frühausstehen?",
          pt: "Como superar a fadiga à tarde após acordar cedo?",
          id: "Bagaimana mengatasi kelelahan sore hari setelah bangun pagi?"
        },
        answer: {
          ko: "오후 1시~3시 사이에 15~20분간 가벼운 파워 냅(Power Nap)을 취하거나, 카페인섭취를 오전 11시 이전에 끝내고 가벼운 스트레칭을 해주면 전두엽의 피로가 대폭 감소합니다.",
          en: "Take a 15-20 minute power nap between 1:00 PM and 3:00 PM, and cut off caffeine intake before 11:00 AM to refresh prefrontal energy.",
          ja: "午後1〜3時の間に15〜20分の軽い仮眠（パワーナップ）を取ることを勧めます。",
          zh: "建议在下午1点到3点之间进行15-20分钟的高效午休（Power Nap），在上午11点前结束咖啡因摄入。",
          es: "Tome una siesta corta de 15-20 minutos entre la 1:00 y las 3:00 PM y corte la cafeína antes de las 11:00 AM.",
          fr: "Faites une micro-sieste de 15-20 minutes entre 13h et 15h et arrêtez la caféine avant 11h.",
          de: "Halten Sie zwischen 13:00 und 15:00 Uhr ein 15-minütiges Schläfchen und meiden Sie späten Kaffee.",
          pt: "Tire um cochilo de 15-20 minutos entre 13h e 15h e evite cafeína após as 11h.",
          id: "Lakukan tidur siang singkat 15-20 menit antara jam 1-3 siang dan hentikan kafein sebelum jam 11 pagi."
        }
      }
    ]
  }
];

function enrichRemaining() {
  additionalEnrichedHabits.forEach(item => {
    // 1. JSON 저장 (habits/items)
    const itemPath = path.join(habitsItemDir, `${item.slug}.json`);
    if (fs.existsSync(itemPath)) {
      const itemData = JSON.parse(fs.readFileSync(itemPath, 'utf-8'));
      itemData.historicalStory = item.intro.ko;
      itemData.sciencePrinciples = item.whyDesc.ko;
      fs.writeFileSync(itemPath, JSON.stringify(itemData, null, 2), 'utf-8');
      console.log(`[Item 업데이트] ${item.slug}.json`);
    }

    // 2. JSON 저장 (blogs/habits)
    const blogJsonPath = path.join(habitsDataDir, `${item.slug}.json`);
    const jsonObj = { [item.slug]: item };
    fs.writeFileSync(blogJsonPath, JSON.stringify(jsonObj, null, 2), 'utf-8');
    console.log(`[Blog JSON 업데이트] ${item.slug}.json`);

    // 3. KO 마크다운 작성
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

<div class="my-8 p-6 rounded-[2rem] border border-indigo-500/10 bg-indigo-500/5 dark:border-indigo-500/20 dark:bg-indigo-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-indigo-800 dark:text-indigo-300 m-0">
      역사적 & 학술적 근거
    </h5>
    <p class="text-xs text-indigo-700/80 dark:text-indigo-400/80 m-0 mt-1.5 leading-relaxed">
      본 콘텐츠는 <strong>${item.authority.ko}</strong>에 기록된 역사적 사실 및 최신 인지 뇌과학 연구를 바탕으로 작성되었습니다.
    </p>
  </div>
</div>

---

## 1. ${item.whyTitle.ko}

${item.whyDesc.ko}

---

## 2. 현대인을 위한 실천 가이드 3단계

${stepCardsHtml}

---

## 3. 성공적인 루틴을 위한 뇌과학적 한마디

<div class="my-6 p-5 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-start gap-4">
  <span class="text-xl">💡</span>
  <div>
    <strong class="text-slate-950 dark:text-white font-extrabold block mb-1">${item.cautionTitle.ko}</strong>
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
    console.log(`[KO 마크다운 업데이트] ${item.slug}.md`);
  });
}

enrichRemaining();
