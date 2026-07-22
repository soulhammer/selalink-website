import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const todayStr = '2026-07-22';

const habits6to10 = [
  // 6. 알프레드 노벨 (Alfred Nobel)
  {
    slug: 'nobel-evening-reflection',
    item: {
      id: 'nobel-evening-reflection',
      name: '알프레드 노벨',
      gender: 'male',
      era: '근대',
      location: '스웨덴, 프랑스',
      lifespan: '1833 - 1896',
      birthYear: 1833,
      bio: "다이나마이트를 발명한 화학자이자 실업가, 노벨상을 창설하여 인류 발전에 기여한 위인입니다.",
      habitName: '실험 데이터 재검토와 저녁 5개국어 일지 서신 작성',
      tags: ['#기록', '#메모', '#사색', '#자기계발'],
      timeOfDay: 'night',
      requiredItems: ['실험 일지', '만년필'],
      frequency: 'daily',
      historicalStory: "알프레드 노벨은 355개의 특허를 보유한 치열한 발명가이자 사업가였습니다. 그는 낮 동안 화학 실험과 비즈니스 미팅을 마친 후, 매일 저녁 서재에서 자신이 직접 쓴 실험 기록을 재검토하고 스웨덴어, 영어, 프랑스어, 독일어, 러시아어 등 5개 국어로 저녁 일지와 편지를 썼습니다. 여러 언어로 일지를 재구성하는 저녁 사색 습관은 그에게 객관적 메타인지를 선물했습니다.",
      sciencePrinciples: "다국어 쓰기와 저녁 일과 재검토(Reflective Writing) 습관은 뇌의 해마(Hippocampus)와 전두엽 메타인지 회로를 강력하게 활성화하여 하루의 시행착오를 정제된 지식으로 재구성합니다.",
      quote: "나의 희망은 세계의 평화와 인류의 발전이다.",
      trigger: "복잡한 작업 후 성과와 오류를 객관적으로 정리하고 싶을 때",
      modernGuide: [
        "퇴근 전 혹은 저녁 시간 15분간 오늘 수행한 업무/실험의 결과 데이터를 훑어봅니다.",
        "하루 동안의 주요 배운 점과 문제 해결 과정을 자신의 말로 조율하여 5줄 요약 일지를 작성합니다.",
        "오늘의 실수를 비난하지 않고 개선점 중심의 팩트로 정리합니다."
      ],
      actionName: "저녁 15분 메타인지 저녁 일지 복기 (노벨 루틴)",
      sources: [
        "Ragnar Sohlman, *The Legacy of Alfred Nobel* (1983)",
        "Nobel Foundation Historical Archives"
      ]
    },
    translations: {
      title: {
        ko: "355개 특허 발명가의 정리법? 알프레드 노벨의 저녁 일지 복기 루틴",
        en: "355 Patents Inventor's Review Method? Alfred Nobel's Evening Reflection Routine",
        ja: "355の発明を生んだ天才の整理術？アルフレッド・ノーベルの夜の復習ルーティン",
        zh: "拥有355项专利的发明家的整理术？阿尔弗雷德·诺贝尔的晚间复盘日志",
        es: "¿El método de revisión del inventor de 355 patentes? La rutina de reflexión de Alfred Nobel",
        fr: "La méthode du génie aux 355 brevets ? La routine de réflexion du soir d'Alfred Nobel",
        de: "Die Rückschau-Methode eines Erfinders mit 355 Patenten? Alfred Nobels Abendroutine",
        pt: "O método do inventor de 355 patentes? A rotina de reflexão noturna de Alfred Nobel",
        id: "Metode Evaluasi Penemu 355 Paten? Rutinitas Refleksi Malam Alfred Nobel"
      },
      description: {
        ko: "노벨상 창설자 알프레드 노벨. 낮 동안의 실험을 밤마다 다국어 일지로 복기하며 355개 특허를 만들어낸 그의 저녁 메타인지 루틴과 실천법.",
        en: "Learn how Alfred Nobel reviewed his experiments nightly to produce 355 patents and found the Nobel Prize.",
        ja: "昼の実験を夜ごとに多言語の日記で復習し、355の特許を生み出したノーベルのリフレッシュ法。",
        zh: "介绍诺贝尔奖创始人阿尔弗雷德·诺贝尔在夜间复盘昼间实验、产出355项专利的元认知习惯。",
        es: "Descubra cómo Nobel revisaba sus experimentos cada noche para generar 355 patentes y los Premios Nobel.",
        fr: "Découvrez comment Nobel révisait ses expériences chaque soir pour déposer 355 brevets.",
        de: "Erfahren Sie, wie Nobel seine Experimente abends überprüfte, um 355 Patente zu erlangen.",
        pt: "Descubra como Nobel revisava seus experimentos todas as noites para registrar 355 patentes.",
        id: "Temukan cara Nobel mengevaluasi eksperimennya setiap malam untuk merumuskan 355 paten."
      },
      authority: {
        ko: "전기 'The Legacy of Alfred Nobel' 및 노벨 재단 역사 사료",
        en: "Biography 'The Legacy of Alfred Nobel' & Nobel Foundation Archives",
        ja: "評伝「The Legacy of Alfred Nobel」およびノーベル財団史料",
        zh: "传记《The Legacy of Alfred Nobel》与诺贝尔基金会史料",
        es: "Biografía 'The Legacy of Alfred Nobel' y archivos de la Fundación Nobel",
        fr: "Biographie 'The Legacy of Alfred Nobel' & archives de la Fondation Nobel",
        de: "Biografie 'The Legacy of Alfred Nobel' & Archive der Nobelstiftung",
        pt: "Biografia 'The Legacy of Alfred Nobel' e arquivos da Fundação Nobel",
        id: "Biografi 'The Legacy of Alfred Nobel' & Arsip Yayasan Nobel"
      },
      intro: {
        ko: "다이나마이트를 발명하고 인류의 평화와 학문적 위업을 칭송하는 노벨상을 창설한 위대한 발명가이자 사업가, 알프레드 노벨. 평생 355개의 특허를 획득했던 그의 압도적인 메타인지와 독창적 발명 직관은 어디서 탄생했을까요? 🧪\n\n노벨은 낮 동안의 위험천만한 화학 실험과 지친 비즈니스 회의가 끝나면, 매일 저녁 서재로 돌아와 당일의 실험 일지를 꼼꼼히 재검토했습니다. 그는 스웨덴어, 영어, 프랑스어, 독일어, 러시아어로 일지를 번갈아 쓰며 하루 동안 얻은 지식과 오류를 정교하게 재구성했습니다. 저녁 서재에서의 15분 일지 복기는 그에게 최고의 메타인지 훈련이었습니다.\n\n오늘 BuildSelf에서는 알프레드 노벨의 저녁 일지 복기 루틴과 메타인지 강화의 과학을 소개합니다.",
        en: "Alfred Nobel, the great chemist who invented dynamite and founded the Nobel Prize. Where did his 355 patents come from? 🧪\n\nAfter dangerous chemical experiments, Nobel returned to his study every evening to review his logs in 5 languages. This 15-minute evening reflection habit served as his ultimate metacognitive training.\n\nToday, BuildSelf introduces Nobel's evening reflection routine.",
        ja: "ダイナマイトを発明しノーベル賞を創設したノーベル。355の発明の秘密は何だったのでしょうか？ 🧪\n\n過酷な実験の後、ノーベルは毎夜書斎に戻り、多言語で実験記録を復習しました。これが彼の最高のメタ認知訓練でした。\n\n今日のBuildSelfではノーベルの夜の復習ルーティンを紹介します。",
        zh: "发明炸药、设立诺贝尔奖的阿弗雷德·诺贝尔。他拥有355项专利的秘诀是什么？ 🧪\n\n在白天的化学实验结束后，诺贝尔每晚都会回到书房，用5种语言复盘当天的日志。这成为了他提升元认知能力的最佳训练。\n\n今天，BuildSelf 将介绍诺贝尔的晚间复盘日志习惯。",
        es: "Alfred Nobel, el químico que inventó la dinamita. ¿De dónde vinieron sus 355 patentes? 🧪\n\nTras los experimentos, Nobel volvía a su estudio cada noche para revisar sus registros en 5 idiomas. Esta rutina era su mejor entrenamiento metacognitivo.\n\nHoy, BuildSelf presenta la rutina de reflexión nocturna de Nobel.",
        fr: "Alfred Nobel, le chimiste inventeur de la dynamite. D'où venaient ses 355 brevets ? 🧪\n\nAprès les expériences, Nobel rentrait dans son bureau chaque soir pour réviser ses notes en 5 langues.\n\nAujourd'hui, BuildSelf vous présente la routine de réflexion du soir de Nobel.",
        de: "Alfred Nobel, der Erfinder des Dynamits. Woher stammten seine 355 Patente? 🧪\n\nNach den Experimenten überprüfte Nobel jeden Abend seine Aufzeichnungen in 5 Sprachen.\n\nHeute stellt BuildSelf Nobels Abendroutine vor.",
        pt: "Alfred Nobel, o químico que inventou a dinamite. De onde vieram suas 355 patentes? 🧪\n\nApós os experimentos, Nobel voltava ao escritório todas as noites para revisar seus registros em 5 idiomas.\n\nHoje, o BuildSelf apresenta a rotina de reflexão noturna de Nobel.",
        id: "Alfred Nobel, kimiawan penemu dinamit. Dari mana 355 patennya berasal? 🧪\n\nSetiap malam, Nobel kembali ke ruang kerjanya untuk mengevaluasi catatannya dalam 5 bahasa.\n\nHari ini, BuildSelf menyajikan rutinitas refleksi malam Nobel."
      },
      whyTitle: {
        ko: "해마의 장기 기억 재압축과 메타인지 회로 자극",
        en: "Long-Term Memory Re-consolidation & Metacognitive Circuit Activation",
        ja: "海馬の長期記憶の再圧搾とメタ認知回路の刺激",
        zh: "海马体长期记忆重巩固与元认知回路激活",
        es: "Re-consolidación de Memoria a Largo Plazo y Circuito Metacognitivo",
        fr: "Re-consolidation de la Mémoire à Long Terme & Métacognition",
        de: "Rekonsolidierung des Langzeitgedächtnisses & Metakognition",
        pt: "Re-consolidação da Memória de Longo Prazo e Metacognição",
        id: "Rekonsolidasi Memori Jangka Panjang & Sirkuit Metakognitif"
      },
      whyDesc: {
        ko: "낮 동안 수집된 단기 정보는 정리되지 않으면 수면 중 소실되기 쉽습니다.\n\n노벨처럼 저녁 시간에 하루의 기록을 스스로 요약하고 재검토하는 저녁 일지 습관은 뇌 해마의 <strong>'장기 기억 재압축(Re-consolidation)'</strong>을 돕고 전두엽의 메타인지 영역을 강하게 자극합니다.",
        en: "Unorganized daytime information easily gets lost during sleep.\n\nReviewing daily logs in the evening helps hippocampal <strong>'memory re-consolidation'</strong> and stimulates metacognitive brain regions.",
        ja: "整理されない短期的情報は睡眠中に失われがちです。\n\n夜に1日の記録を要約する習慣は、海馬の<strong>「長期記憶の再統合」</strong>を助け、メタ認知を強化します。",
        zh: "若无整理，白天的短期信息易在睡眠中遗失。\n\n晚间总结与复盘日志有助于海马体的<strong>“长期记忆重巩固”</strong>，强效激活元认知区域。",
        es: "La información no organizada se pierde al dormir.\n\nRevisar los registros por la noche ayuda a la <strong>'re-consolidación de la memoria'</strong> en el hipocampo.",
        fr: "L'information non structurée se perd pendant le sommeil.\n\nRéviser ses notes le soir favorise la <strong>'re-consolidation mémorielle'</strong>.",
        de: "Unstrukturierte Informationen gehen im Schlaf verloren.\n\nAbendliche Rückschau hilft bei der <strong>'Gedächtnis-Rekonsolidierung'</strong> im Hippocampus.",
        pt: "Informações não organizadas se perdem no sono.\n\nRevisar os registros à noite ajuda na <strong>'re-consolidação da memória'</strong>.",
        id: "Informasi acak siang hari mudah hilang saat tidur.\n\nMengevaluasi catatan malam hari membantu <strong>'rekonsolidasi memori'</strong> di hipokampus."
      },
      cautionTitle: {
        ko: "감정적 반성이 아닌 팩트와 개선점 중심 복기",
        en: "Focus on facts and improvements, not emotional self-blame",
        ja: "感情的な反省ではなく、ファクトと改善点中心の復習を",
        zh: "以事实与改进点为中心，切勿情感化自责",
        es: "Enfóquese en hechos y mejoras, no en culpa emocional",
        fr: "Misez sur les faits et améliorations, pas sur la culpabilité",
        de: "Fokussieren Sie sich auf Fakten und Verbesserungen, nicht Schuld",
        pt: "Foque em fatos e melhorias, não em culpa emocional",
        id: "Fokus pada fakta dan perbaikan, bukan penyalahan diri"
      },
      cautionDesc: {
        ko: "하루 동안의 실패나 오답에 자책감을 가질 필요가 없습니다. 노벨의 발명 일지처럼 어떤 시도가 있었고 무엇을 고치면 될지 냉정한 데이터로 다루세요.",
        en: "Do not feel guilty about failures. Treat them as cool objective data to improve like Nobel did.",
        ja: "失敗に対して罪悪感を持つ必要はありません。ノーベルのように冷静なデータとして扱いましょう。",
        zh: "无需对当天的失误抱有罪恶感。像诺贝尔的实验日志那样，将其视为客观数据即可。",
        es: "No se sienta culpable por los errores. Trátelos como datos objetivos para mejorar.",
        fr: "Ne culpabilisez pas pour les erreurs. Traitez-les comme des données factuelles.",
        de: "Fühlen Sie sich wegen Fehlern nicht schuldig. Betrachten Sie sie als sachliche Daten.",
        pt: "Não se sinta culpado por erros. Trate-os como dados objetivos para melhorar.",
        id: "Jangan merasa bersalah atas kegagalan. Perlakukan sebagai data objektif untuk perbaikan."
      },
      steps: [
        {
          name: {
            ko: "하루 실행 기록 및 메타 데이터 모으기",
            en: "Gather Daily Execution Records",
            ja: "1日の実行記録の収集",
            zh: "收集全天执行记录",
            es: "Recopilar Registros del Día",
            fr: "Rassembler les Notes de la Journée",
            de: "Tagesprotokolle sammeln",
            pt: "Reunir Registros do Dia",
            id: "Kumpulkan Catatan Hari Ini"
          },
          text: {
            ko: "저녁 시간 책상에 앉아 오늘 작성한 메모, 프로젝트 진행 내역을 훑어봅니다.",
            en: "Sit at your desk in the evening and scan through today's memos and project logs.",
            ja: "夜、デスクに向かい今日作成したメモや作業ログを見返します。",
            zh: "晚间坐在书桌前，浏览今天记录的便签与项目进展。",
            es: "Siéntese en su escritorio por la noche y revise las notas del día.",
            fr: "Asseyez-vous à votre bureau le soir et relisez vos notes du jour.",
            de: "Setzen Sie sich abends an den Schreibtisch und gehen Sie die Notizen durch.",
            pt: "Sente-se à mesa à noite e passe os olhos pelas anotações do dia.",
            id: "Duduklah di meja di malam hari dan periksa catatan hari ini."
          }
        },
        {
          name: {
            ko: "5줄 요약 핵심 메타인지 일지 작성",
            en: "5-Line Core Metacognitive Journaling",
            ja: "5行要約のメタ認知日記作成",
            zh: "5行核心元认知日志撰写",
            es: "Diario Metacognitivo de 5 Líneas",
            fr: "Journal Métacognitif en 5 Lignes",
            de: "5-Zeilen-Metakognitions-Tagebuch",
            pt: "Diário Metacognitivo de 5 Linhas",
            id: "Jurnal Metakognitif 5 Baris"
          },
          text: {
            ko: "오늘 잘된 점 2가지, 막혔던 점 1가지, 내일의 수정 행동 2가지를 5줄로 명확히 적습니다.",
            en: "Write down 2 things done well, 1 bottleneck, and 2 action improvements for tomorrow.",
            ja: "今日上手くいったこと2つ、詰まったこと1つ、明日の改善行動2つを5行で記録します。",
            zh: "用5行清晰记录：今天做好的2件事、卡壳的1件事、明天的2项改进行动。",
            es: "Anote 2 cosas bien hechas, 1 obstáculo y 2 mejoras para mañana en 5 líneas.",
            fr: "Écrivez 2 réussites, 1 obstacle et 2 actions d'amélioration pour demain.",
            de: "Schreiben Sie 2 Erfolge, 1 Engpass und 2 Verbesserungen für morgen auf.",
            pt: "Anote 2 coisas bem-sucedidas, 1 obstáculo e 2 melhorias para amanhã.",
            id: "Tuliskan 2 keberhasilan, 1 hambatan, dan 2 perbaikan untuk besok."
          }
        },
        {
          name: {
            ko: "내일의 핵심 미션 선명화",
            en: "Clarify Tomorrow's Key Mission",
            ja: "明日の核心ミッションの明確化",
            zh: "明确明日核心任务",
            es: "Clarificar la Misión Clave de Mañana",
            fr: "Clarifier la Mission Clé de Demain",
            de: "Kernaussage für morgen klären",
            pt: "Clarificar a Missão Principal de Amanhã",
            id: "Memperjelas Misi Utama Besok"
          },
          text: {
            ko: "복기를 마친 후 내일 아침 제일 먼저 수행할 단 하나의 중요 과제를 적고 일지장을 덮습니다.",
            en: "After reviewing, write down the single most important task for tomorrow morning and close the journal.",
            ja: "復習後、明日朝一番に実行する最重要タスクを1つ書いてノートを閉じます。",
            zh: "复盘结束后，写下明天清晨第一件要执行的最重要任务，合上日记本。",
            es: "Tras revisar, anote la tarea más importante para mañana por la mañana y cierre el diario.",
            fr: "Après révision, notez la tâche prioritaire de demain matin et fermez le journal.",
            de: "Schreiben Sie die wichtigste Aufgabe für morgen auf und schließen Sie das Buch.",
            pt: "Após revisar, anote a tarefa mais importante para amanhã e feche o diário.",
            id: "Setelah evaluasi, tulis tugas paling penting untuk besok pagi dan tutup buku."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "반드시 5개 국어나 외국어로 써야 하나요?",
            en: "Do I have to write in foreign languages like Nobel?",
            ja: "ノーベルのように外国語で書く必要がありますか？",
            zh: "必须像诺贝尔那样用外语书写吗？",
            es: "¿Tengo que escribir en idiomas extranjeros como Nobel?",
            fr: "Faut-il écrire en langues étrangères comme Nobel ?",
            de: "Muss ich wie Nobel in Fremdsprachen schreiben?",
            pt: "Preciso escrever em línguas estrangeiras como Nobel?",
            id: "Haruskah menulis dalam bahasa asing seperti Nobel?"
          },
          answer: {
            ko: "아닙니다. 모국어로 작성하되 '자신의 언어로 표현을 다듬는 행위' 자체가 핵심입니다. 여유가 있다면 익히고 있는 외국어로 1줄 적어보는 것도 뇌 자극에 좋습니다.",
            en: "No. Writing in your mother tongue is fine; reframing concepts in your own words is the core.",
            ja: "いいえ、母国語で構いません。自分の言葉で表現を整理すること自体が本質です。",
            zh: "不需要。用母语书写即可，用自己的语言重构概念本身就是核心所在。",
            es: "No. Escribir en su lengua materna está bien; lo importante es expresar conceptos con sus palabras.",
            fr: "Non. Votre langue maternelle suffit ; reformuler les concepts avec vos mots est l'essentiel.",
            de: "Nein. Die eigene Muttersprache reicht völlig aus.",
            pt: "Não. Escrever em sua língua materna é suficiente; reformular conceitos é o essencial.",
            id: "Tidak. Menulis dalam bahasa ibu sudah cukup; merumuskan konsep dengan kata sendiri adalah intinya."
          }
        },
        {
          question: {
            ko: "매일 일지를 쓰다가 지치면 어떻게 해야 하나요?",
            en: "What if I get exhausted writing daily logs?",
            ja: "毎日日記を書いていて疲れた場合はどうすればいいですか？",
            zh: "如果每天写日志感到疲惫该怎么办？",
            es: "¿Qué hacer si me canso de escribir a diario?",
            fr: "Que faire si je me fatigue d'écrire tous les jours ?",
            de: "Was tun, wenn das tägliche Schreiben ermüdet?",
            pt: "O que fazer se me cansar de escrever diariamente?",
            id: "Bagaimana jika lelah menulis jurnal setiap hari?"
          },
          answer: {
            ko: "장문의 글 대신 3개의 핵심 키워드만 적는 '키워드 복기'로 불량을 최소화하여 부담을 줄이세요.",
            en: "Reduce the burden by writing just 3 key words instead of long paragraphs.",
            ja: "長文の代わりに3つのキーワードだけを書き留める「キーワード復習」に切り替えましょう。",
            zh: "用只需写下3个关键词的“关键词复盘”替代长文，降低负担。",
            es: "Reduzca la carga escribiendo solo 3 palabras clave en lugar de párrafos.",
            fr: "Allégez la tâche en écrivant juste 3 mots-clés au lieu de paragraphes.",
            de: "Schreiben Sie statt langer Texte einfach 3 Schlüsselwörter auf.",
            pt: "Reduza a carga escrevendo apenas 3 palavras-chave.",
            id: "Ringankan beban dengan cukup menulis 3 kata kunci."
          }
        }
      ]
    }
  },

  // 7. 루이 브라이유 (Louis Braille)
  {
    slug: 'braille-tactile-simplification',
    item: {
      id: 'braille-tactile-simplification',
      name: '루이 브라이유',
      gender: 'male',
      era: '근대',
      location: '프랑스',
      lifespan: '1809 - 1852',
      birthYear: 1809,
      bio: "전 세계 시각장애인을 위한 6점 점자 체계를 발명하여 인류 지식 접근성에 혁명을 일으킨 위인입니다.",
      habitName: '손끝 촉각 패턴 검증과 핵심 요소 단순화 구조화',
      tags: ['#몰입', '#생산성', '#아이디어', '#자기계발'],
      timeOfDay: 'anytime',
      requiredItems: ['점자 송곳 또는 종이'],
      frequency: 'daily',
      historicalStory: "루이 브라이유는 기존의 군용 야간 문자(12점 체계)가 너무 복잡하여 손가락 하나로 한 번에 읽기 어렵다는 사실을 발견했습니다. 그는 매일 손끝으로 점의 감촉을 검증하며, 손가락 끝 마디 하나에 완벽히 들어오는 '6점 점자 시스템'으로 과감히 단순화했습니다. 복잡성을 덜어내고 핵심 요소만을 남기는 그의 본질 단순화 습관은 세계적 표준을 만들었습니다.",
      sciencePrinciples: "뇌의 작업 기억(Working Memory) 용량 한계를 고려하여 정보를 최소 단위(Chunking)로 단순화하면 뇌의 인지 부하(Cognitive Load)가 획기적으로 줄어들어 처리 속도가 극대화됩니다.",
      quote: "지식에 대한 접근은 장애와 상관없이 모두에게 평등해야 한다.",
      trigger: "시스템이나 업무 프로세스가 너무 복잡하여 오류와 지연이 자주 발생할 때",
      modernGuide: [
        "현재 진행 중인 복잡한 작업이나 루틴에서 불필요한 단계를 찾아냅니다.",
        "한 번에 처리할 수 있는 최대 핵심 요소 3~5가지로 프로세스를 단순화합니다.",
        "단순화된 새 시스템을 즉시 적용하여 처리 속도와 명확성을 높입니다."
      ],
      actionName: "핵심 3단계 본질 단순화 검증 (브라이유 루틴)",
      sources: [
        "C. Michael Mellor, *Louis Braille: A Touch of Genius* (2006)",
        "UNESCO Braille Heritage Documents"
      ]
    },
    translations: {
      title: {
        ko: "점자 발명가의 본질 직관? 루이 브라이유의 6점 단순화 루틴",
        en: "Braille Inventor's Core Intuition? Louis Braille's 6-Dot Simplification Routine",
        ja: "点字の発明者の本質直感？ルイ・ブライユの6点シンプル化ルーティン",
        zh: "盲文发明家的本质直觉？路易·布莱叶的六点简化习惯",
        es: "¿La intuición esencial del inventor del Braille? La rutina de simplificación de 6 puntos de Louis Braille",
        fr: "L'intuition du créateur du Braille ? La routine de simplification à 6 points de Louis Braille",
        de: "Die Intuition des Braille-Erfinders? Louis Brailles 6-Punkt-Vereinfachungsroutine",
        pt: "A intuição do inventor do Braille? A rotina de simplificação de 6 pontos de Louis Braille",
        id: "Intuisi Utama Penemu Braille? Rutinitas Penyederhanaan 6 Titik Louis Braille"
      },
      description: {
        ko: "복잡했던 12점 군용 문자를 손가락 한 마디에 들어오는 6점 점자로 단순화하여 지식 혁명을 일으킨 루이 브라이유의 본질 단순화 기술.",
        en: "Discover how Louis Braille simplified complex 12-dot military codes into a 6-dot tactile system to revolutionize literacy.",
        ja: "複雑だった12点の軍用文字を指先一つに収まる6点点字にシンプル化し、知識の革命を起こしたブライユの思考法。",
        zh: "介绍路易·布莱叶将复杂的12点军用密码简化为指尖可查的6点盲文、引发知识革命的精简思考习惯。",
        es: "Descubra cómo Louis Braille simplificó los códigos militares de 12 puntos en un sistema de 6 puntos.",
        fr: "Découvrez comment Louis Braille a simplifié les codes à 12 points en un système à 6 points.",
        de: "Erfahren Sie, wie Louis Braille komplexe 12-Punkt-Codes in ein 6-Punkt-System vereinfachte.",
        pt: "Descubra como Louis Braille simplificou códigos militares de 12 pontos em um sistema de 6 pontos.",
        id: "Temukan cara Louis Braille menyederhanakan kode 12 titik menjadi sistem 6 titik yang revolusioner."
      },
      authority: {
        ko: "전기 'Louis Braille: A Touch of Genius' 및 유네스코 점자 유산 사료",
        en: "Biography 'Louis Braille: A Touch of Genius' & UNESCO Archives",
        ja: "評伝「Louis Braille: A Touch of Genius」およびユネスコ史料",
        zh: "传记《Louis Braille: A Touch of Genius》与联合国教科文组织史料",
        es: "Biografía 'Louis Braille: A Touch of Genius' y archivos de la UNESCO",
        fr: "Biographie 'Louis Braille: A Touch of Genius' & archives de l'UNESCO",
        de: "Biografie 'Louis Braille: A Touch of Genius' & UNESCO-Archive",
        pt: "Biografia 'Louis Braille: A Touch of Genius' e arquivos da UNESCO",
        id: "Biografi 'Louis Braille: A Touch of Genius' & Arsip UNESCO"
      },
      intro: {
        ko: "전 세계 시각장애인들에게 읽고 쓰는 자유를 선물하며 인류 지식 접근성에 일대 혁명을 일으킨 위대한 발명가, 루이 브라이유. 그가 기존의 복잡했던 점자 체계를 뛰어넘어 완벽한 6점 점자를 창안할 수 있었던 비결은 무엇일까요? ⠃\n\n브라이유는 군대에서 쓰이던 12점 야간 문자가 손가락 한 마디로 한 번에 감지하기에 너무 크고 복잡하다는 사실을 깨달았습니다. 그는 매일 손끝 감각을 시험하며, 손가락을 움직이지 않고 단번에 인지할 수 있는 최적의 크기인 '6점 체계'로 불필요한 점들을 제거해 나갔습니다. 핵심 본질만 남기는 단순화 습관은 그의 최고의 무기였습니다.\n\n오늘 BuildSelf에서는 루이 브라이유의 6점 단순화 루틴과 인지 부하 감소의 과학을 소개합니다.",
        en: "Louis Braille, the inventor who revolutionized literacy for the visually impaired. How did he create the 6-dot braille system? ⠃\n\nBraille realized the 12-dot military code was too large to read with one fingertip. Testing tactile sensations daily, he stripped away complexity until he reached the optimal 6-dot system. Removing clutter was his ultimate strength.\n\nToday, BuildSelf introduces Braille's 6-dot simplification routine.",
        ja: "視覚障害者に読み書きの自由を贈ったルイ・ブライユ。彼が6点点字を創안できた秘密は何でしょうか？ ⠃\n\nブライユは12点軍用文字が指先で一度に認識するには大きすぎることに気づきました。毎日触覚を検証し、最適な6点システムへとシンプル化しました。\n\n今日のBuildSelfではブライユの6点シンプル化ルーティンを紹介します。",
        zh: "给全球视障人士带来阅读与书写自由的路易·布莱叶。他能创制出完美六点盲文的秘诀是什么？ ⠃\n\n布莱叶发现12点军用文字太大，指尖无法一次感知。他每天测试触觉，将不必要的点砍掉，直至得出最完美的6点系统。\n\n今天，BuildSelf 将介绍布莱叶的六点简化习惯。",
        es: "Louis Braille, el inventor que revolucionó la alfabetización. ¿Cómo creó el sistema de 6 puntos? ⠃\n\nBraille se dio cuenta de que el código militar de 12 puntos era demasiado grande. Probando sensaciones a diario, simplificó al sistema ideal de 6 puntos.\n\nHoy, BuildSelf presenta la rutina de simplificación de Braille.",
        fr: "Louis Braille, l'inventeur qui a révolutionné la lecture pour tous. Comment a-t-il créé le système à 6 points ? ⠃\n\nBraille a compris que le code à 12 points était trop grand. En testant le toucher au quotidien, il a simplifié le système jusqu'à 6 points.\n\nAujourd'hui, BuildSelf vous présente la routine de simplification de Braille.",
        de: "Louis Braille, der Erfinder der Blinden-Punktschrift. Wie schuf er das 6-Punkt-System? ⠃\n\nBraille erkannte, dass der 12-Punkt-Militärcode zu groß war. Durch tägliches Testen reduzierte er ihn auf optimale 6 Punkte.\n\nHeute stellt BuildSelf Brailles 6-Punkt-Routine vor.",
        pt: "Louis Braille, o inventor que revolucionou a alfabetização. Como ele criou o sistema de 6 pontos? ⠃\n\nBraille percebeu que o código de 12 pontos era grande demais. Testando o tato diariamente, simplificou até o sistema de 6 pontos.\n\nHojo, o BuildSelf apresenta a rotina de simplificação de Braille.",
        id: "Louis Braille, penemu yang merevolusi melek huruf bagi tunanetra. Bagaimana ia menciptakan sistem 6 titik? ⠃\n\nBraille menyadari kode 12 titik terlalu besar untuk dibaca satu ujung jari. Dengan menguji sensasi harian, ia menyederhanakannya menjadi 6 titik.\n\nHari ini, BuildSelf menyajikan rutinitas penyederhanaan 6 titik Braille."
      },
      whyTitle: {
        ko: "작업 기억 청킹(Chunking)을 통한 인지 과부하 차단",
        en: "Preventing Cognitive Overload via Working Memory Chunking",
        ja: "ワーキングメモリのチャンキングによる認知過負荷の遮断",
        zh: "通过工作记忆块化（Chunking）阻断认知过载",
        es: "Prevención de Sobrecarga Cognitiva Mediante Agrupamiento",
        fr: "Prévention de la Surcharge par le Chunking en Mémoire de Travail",
        de: "Vermeidung kognitiver Überlastung durch Chunking",
        pt: "Prevenção de Sobrecarga Cognitiva via Agrupamento",
        id: "Mencegah Kelebihan Beban Kognitif Melalui Chunking Memori"
      },
      whyDesc: {
        ko: "인간의 작업 기억(Working Memory)은 한 번에 처리할 수 있는 정보의 양에 명확한 한계가 있습니다.\n\n브라이유 박사가 12점을 6점으로 절반이나 줄여 단번에 인지하게 만든 것처럼, 복잡한 업무 절차를 핵심 요소 3~5개 단위로 줄이는 <strong>'청킹(Chunking)'</strong> 작업은 뇌의 인지 부하를 줄이고 처리 속도를 극대화합니다.",
        en: "Human working memory has strict limits on information processed at once.\n\nJust as Braille cut 12 dots down to 6 for instant recognition, <strong>'chunking'</strong> complex processes into 3-5 core items eliminates cognitive load and boosts speed.",
        ja: "人間のワーキングメモリは一度に処理できる量に限界があります。\n\nブライユが12点を6点に減らして一瞬で認識可能にしたように、プロセスを3〜5個のコア要素にまとめる<strong>「チャンキング（Chunking）」</strong>は処理速度を極大化します。",
        zh: "人类的工作记忆在一次性处理信息量方面存在明确极限。\n\n正如布莱叶将12点砍掉一半缩至6点以便瞬间识别一样，将复杂流程缩减至3~5个核心要素的<strong>“块化（Chunking）”</strong>能大幅消除认知负荷。",
        es: "La memoria de trabajo tiene límites estrictos.\n\nAl igual que Braille redujo 12 puntos a 6, el <strong>'agrupamiento (chunking)'</strong> elimina sobrecargas y maximiza la velocidad.",
        fr: "La mémoire de travail a des limites strictes.\n\nTout comme Braille a réduit 12 points à 6, le <strong>'chunking'</strong> élimine la surcharge et accélère le traitement.",
        de: "Das Arbeitsgedächtnis hat strenge Grenzen.\n\nWie Braille 12 Punkte auf 6 reduzierte, eliminiert <strong>'Chunking'</strong> kognitive Überlastung.",
        pt: "A memória de trabalho tem limites estritos.\n\nAssim como Braille reduziu 12 pontos para 6, o <strong>'agrupamento'</strong> elimina sobrecargas e acelera o processamento.",
        id: "Memori kerja manusia memiliki batas ketat.\n\nSeperti Braille memotong 12 titik menjadi 6, <strong>'chunking'</strong> menghilangkan beban kognitif dan meningkatkan kecepatan."
      },
      cautionTitle: {
        ko: "중요하지 않은 부가 요소를 용기 있게 삭제하세요",
        en: "Courageously eliminate non-essential secondary elements",
        ja: "重要でない付加要素を勇気を持って削除しましょう",
        zh: "次要元素，勇于果断删减",
        es: "Elimine valientemente los elementos secundarios no esenciales",
        fr: "Éliminez avec courage les éléments secondaires non essentiels",
        de: "Mutiges Entfernen unwichtiger Sekundärelemente",
        pt: "Elimine com coragem elementos secundários não essenciais",
        id: "Beranikan diri menghapus elemen sekunder yang tidak penting"
      },
      cautionDesc: {
        ko: "'혹시 나중에 쓰일지 모른다'는 미련으로 단계를 남겨두면 프로세스는 다시 복잡해집니다. 손가락 마디 하나에 들어오는 6점처럼 단순화하세요.",
        en: "Keeping steps 'just in case' makes processes complex again. Simplify like 6 dots under one fingertip.",
        ja: "「念のため」とステップを残しておくと再び複雑になります。指先一つに収まる6点のようにシンプルにしましょう。",
        zh: "因“万一以后用到”而保留步骤会让流程再次变得复杂。像指尖一下的6点那样保持精简。",
        es: "Mantener pasos 'por si acaso' vuelve compleja la rutina. Simplifique a 6 puntos.",
        fr: "Garder des étapes 'au cas où' rend le processus complexe. Simplifiez jusqu'à 6 points.",
        de: "Schritte 'für alle Fälle' zu behalten, macht Prozesse kompliziert. Vereinfachen Sie auf 6 Punkte.",
        pt: "Manter etapas 'por via das dúvidas' torna o processo complexo. Simplifique até 6 pontos.",
        id: "Menyimpan langkah 'untuk jaga-jaga' membuat proses rumit lagi. Sederhanakan ke 6 titik."
      },
      steps: [
        {
          name: {
            ko: "복잡한 프로세스 요소 전수 진단",
            en: "Diagnose All Complex Process Elements",
            ja: "複雑なプロセス要素の全数診断",
            zh: "全盘诊断复杂流程要素",
            es: "Diagnosticar Elementos de Procesos Complejos",
            fr: "Diagnostiquer Tous les Éléments d'un Processus",
            de: "Komplexe Prozesselemente analysieren",
            pt: "Diagnosticar Elementos de Processos Complexos",
            id: "Diagnosis Semua Elemen Proses Rumit"
          },
          text: {
            ko: "현재 작성 중인 기획안이나 daily 업무 루틴의 모든 단계를 나열합니다.",
            en: "List all steps of your current project proposal or daily work routine.",
            ja: "現在作成中の企画書や毎日の作業ルーティンの全ステップを書き出します。",
            zh: "列出当前正在撰写的策划案或日常工作习惯的所有步骤。",
            es: "Enumere todos los pasos de su propuesta o rutina diaria actual.",
            fr: "Lister toutes les étapes de votre projet ou routine quotidienne.",
            de: "Listeten Sie alle Schritte Ihres Projekts oder Ihrer Routine auf.",
            pt: "Liste todas as etapas do seu projeto ou rotina diária.",
            id: "Daftarkan semua langkah dari proposal atau rutinitas harian Anda."
          }
        },
        {
          name: {
            ko: "핵심 3~5가지 요소 과감한 추출",
            en: "Extract Core 3-5 Essential Elements",
            ja: "核心3〜5個の要素の果敢な抽出",
            zh: "果断提取3~5个核心要素",
            es: "Extraer de 3 a 5 Elementos Esenciales",
            fr: "Extraire 3 à 5 Éléments Essentiels",
            de: "3-5 Kernelemente extrahieren",
            pt: "Extrair 3 a 5 Elementos Essenciais",
            id: "Ekstrak 3-5 Elemen Utama"
          },
          text: {
            ko: "결과에 80% 영향을 주는 핵심 3~5가지 필수 요소만 남기고 나머지를 과감히 삭제합니다.",
            en: "Keep only the core 3-5 essential items that drive 80% of results and cut the rest.",
            ja: "結果の80%に影響を与える核心の3〜5要素だけを残し、他を削ぎ落とします。",
            zh: "仅保留影响80%结果的3~5个核心要素，果断将其余部分删去。",
            es: "Conserve solo los 3-5 elementos clave que generan el 80% de los resultados.",
            fr: "Gardez seulement les 3 à 5 éléments clés générant 80 % des résultats.",
            de: "Behalten Sie nur die 3-5 Kernelemente, die 80 % der Ergebnisse bringen.",
            pt: "Conserve apenas os 3-5 elementos essenciais para 80% dos resultados.",
            id: "Simpan hanya 3-5 elemen kunci yang menghasilkan 80% hasil."
          }
        },
        {
          name: {
            ko: "단순화 체계 적용 및 원스톱 처리",
            en: "Apply Simplified System & One-Stop Process",
            ja: "シンプル化体系の適用とワンストップ処理",
            zh: "应用简化体系与一站式处理",
            es: "Aplicar Sistema Simplificado",
            fr: "Appliquer un Système Simplifié",
            de: "Vereinfachtes System anwenden",
            pt: "Aplicar Sistema Simplificado",
            id: "Terapkan Sistem المبسط"
          },
          text: {
            ko: "새로 정돈된 6점 스타일의 단순 시스템으로 업무를 즉시 한눈에 원스톱 처리합니다.",
            en: "Process your work at a glance using the newly streamlined 6-dot-style simple system.",
            ja: "新しく整えたシンプルなシステムで、作業を一目でワンストップ処理します。",
            zh: "用全新整理的精简体系，一目了然地高效一站式完成工作。",
            es: "Procese su trabajo de un vistazo usando el nuevo sistema simplificado.",
            fr: "Traitez votre travail en un coup d'œil avec le nouveau système.",
            de: "Erledigen Sie Ihre Arbeit auf einen Blick mit dem neuen System.",
            pt: "Processe seu trabalho num relance com o novo sistema simplificado.",
            id: "Proses pekerjaan Anda sekilas menggunakan sistem sederhana baru."
          }
        }
      ],
      faqs: [
        {
          question: {
            ko: "단순화하다가 중요한 내용을 빼먹을까 봐 두려울 땐 어떻게 하나요?",
            en: "What if I fear leaving out important details while simplifying?",
            ja: "シンプル化する中で重要な内容を落とすのが怖い場合はどうすればいいですか？",
            zh: "害怕在精简过程中遗漏重要细节该怎么办？",
            es: "¿Qué hacer si temo omitir detalles importantes al simplificar?",
            fr: "Que faire si j'ai peur d'omettre des détails importants ?",
            de: "Was tun, wenn ich angst habe, Wichtiges zu wegzulassen?",
            pt: "O que fazer se tiver medo de omitir detalhes importantes?",
            id: "Bagaimana jika takut melewatkan detail penting saat menyederhanakan?"
          },
          answer: {
            ko: "삭제된 부가 정보는 '부록'이나 별도 폴더에 백업해 두고, 본문 프로세스에서는 핵심 3~5개만 노출시키는 이중화 전략을 쓰면 불안감을 해소할 수 있습니다.",
            en: "Back up deleted secondary details into an appendix folder and expose only core items in the main process.",
            ja: "削除した情報は「付録」フォルダにバックアップし、メインプロセスではコア要素だけを表示する戦略をとりましょう。",
            zh: "将删去的辅助信息备份在“附录”文件夹中，主流程仅展示核心3~5个要素即可消除不安。",
            es: "Guarde los detalles secundarios en una carpeta de anexo y exponga solo lo esencial en el proceso principal.",
            fr: "Sauvegardez les détails secondaires dans un dossier annexe et ne gardez que l'essentiel.",
            de: "Sichern Sie Sekundärdetails im Anhang und zeigen Sie im Hauptprozess nur das Wesentliche.",
            pt: "Guarde detalhes num anexo e exponha apenas o essencial no processo principal.",
            id: "Cadangkan detail sekunder di folder lampiran dan tampilkan hanya yang utama di proses utama."
          }
        },
        {
          question: {
            ko: "팀 업무 프로세스에도 이 방식을 적용할 수 있나요?",
            en: "Can this method be applied to team work processes?",
            ja: " green チームの作業プロセスにもこの方法を適用できますか？",
            zh: "这种方法能应用于团队工作流程吗？",
            es: "¿Se puede aplicar este método a procesos de equipo?",
            fr: "Peut-on appliquer cette méthode aux processus d'équipe ?",
            de: "Kann diese Methode auf Teamprozesse angewendet werden?",
            pt: "Esse método pode ser aplicado a processos de equipe?",
            id: "Bisakah metode ini diterapkan pada proses kerja tim?"
          },
          answer: {
            ko: "네, 회의 안건이나 보고서 결재 라인을 3단계 이하로 축소하는 단순화 규칙을 도입하면 팀 전반의 소통 속도가 급격히 향상됩니다.",
            en: "Yes, reducing meeting agendas or approval lines to 3 steps or fewer dramatically speeds up team communication.",
            ja: "はい、会議のアジェンダや承認ラインを3ステップ以下に縮小することで、チーム全体の溝通速度が向上します。",
            zh: "当然可以。将会议议程或审批流程缩减至3步以内，能显著提升团队整体的沟通效率。",
            es: "Sí, reducir las agendas de reuniones o líneas de aprobación a 3 pasos acelera la comunicación.",
            fr: "Oui, réduire les ordres du jour ou validations à 3 étapes accélère la communication d'équipe.",
            de: "Ja, die Reduzierung von Besprechungsagenden auf 3 Schritte beschleunigt die Kommunikation.",
            pt: "Sim, reduzir pautas de reunião ou aprovações para 3 etapas acelera a comunicação.",
            id: "Ya, mengurangi agenda rapat atau alur persetujuan menjadi 3 langkah mempercepat komunikasi tim."
          }
        }
      ]
    }
  }
];

console.log(`6-7번 추가 실행...`);

habits6to10.forEach(data => {
  const { slug, item, translations } = data;

  const itemPath = path.join(__dirname, 'data/habits/items', `${slug}.json`);
  fs.writeFileSync(itemPath, JSON.stringify(item, null, 2), 'utf-8');
  console.log(`✅ [Item Generated] src/data/habits/items/${slug}.json`);

  const blogJsonPath = path.join(__dirname, 'data/blogs/habits', `${slug}.json`);
  const blogJsonObj = { [slug]: translations };
  fs.writeFileSync(blogJsonPath, JSON.stringify(blogJsonObj, null, 2), 'utf-8');
  console.log(`✅ [Blog Translation JSON Generated] src/data/blogs/habits/${slug}.json`);

  const koMdPath = path.join(__dirname, 'content/blog/ko', `${slug}.md`);

  const stepsYaml = translations.steps.map(s => `  - name: "${s.name.ko.replace(/"/g, '\\"')}"\n    text: "${s.text.ko.replace(/"/g, '\\"')}"`).join('\n');
  const faqsYaml = translations.faqs.map(f => `  - question: "${f.question.ko.replace(/"/g, '\\"')}"\n    answer: "${f.answer.ko.replace(/"/g, '\\"')}"`).join('\n');

  const stepCardsKo = translations.steps.map((s, idx) => `
<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 tracking-wider">STEP ${idx + 1}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${s.name.ko}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${s.text.ko}
  </p>
</div>`).join('\n');

  const faqAccordionKo = `
<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0 mb-6 flex items-center gap-2">
    <span>📌</span> 자주 묻는 질문 (FAQ)
  </h3>
  
  <details class="group border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4 cursor-pointer" open>
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
      <span>${translations.faqs[0].question.ko}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${translations.faqs[0].answer.ko}
    </p>
  </details>

  <details class="group cursor-pointer">
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
      <span>${translations.faqs[1].question.ko}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${translations.faqs[1].answer.ko}
    </p>
  </details>
</div>`;

  const mdContent = `---
title: "${translations.title.ko.replace(/"/g, '\\"')}"
description: "${translations.description.ko.replace(/"/g, '\\"')}"
pubDate: "${todayStr}"
updatedDate: "${todayStr}"
category: "BuildSelf"
tags: ["위인 습관", "루틴", "생산성", "몰입"]
heroImage: "/images/blog/${slug.replace(/-/g, '_')}.png"
app: "buildself"
formatVersion: 4
authority: "${translations.authority.ko.replace(/"/g, '\\"')}"
steps:
${stepsYaml}
faqs:
${faqsYaml}
---

${translations.intro.ko}

<div class="my-8 p-6 rounded-[2rem] border border-indigo-500/10 bg-indigo-500/5 dark:border-indigo-500/20 dark:bg-indigo-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-indigo-800 dark:text-indigo-300 m-0">
      역사적 & 학술적 근거
    </h5>
    <p class="text-xs text-indigo-700/80 dark:text-indigo-400/80 m-0 mt-1.5 leading-relaxed">
      본 콘텐츠는 ${translations.authority.ko} 정보를 기반으로 작성되었습니다.
    </p>
  </div>
</div>

---

## 1. ${translations.whyTitle.ko}

${translations.whyDesc.ko}

---

## 2. 실천을 위한 3단계 세부 행동 가이드

${stepCardsKo}

---

## 3. ${translations.cautionTitle.ko}
<div class="my-6 p-5 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-start gap-4">
  <span class="text-xl">💡</span>
  <div>
    <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
      ${translations.cautionDesc.ko}
    </p>
  </div>
</div>
${faqAccordionKo}`;

  fs.writeFileSync(koMdPath, mdContent, 'utf-8');
  console.log(`✅ [KO Master MD Generated] src/content/blog/ko/${slug}.md`);
});

console.log('✨ 6-7번 완료!');
