import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, 'content/blog');
const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id', 'ko'];

// 다국어 공통 UI 라벨 딕셔너리
const labelDict = {
  profileTitle: {
    ko: "핵심 프로필 (Profile)",
    en: "Core Profile",
    ja: "コアプロフィール",
    zh: "核心档案",
    es: "Perfil principal",
    fr: "Profil principal",
    de: "Rasseprofil",
    pt: "Perfil principal",
    id: "Profil Utama"
  },
  lifespanLabel: {
    ko: "평균 수명",
    en: "Lifespan",
    ja: "平均寿命",
    zh: "平均寿命",
    es: "Vida útil media",
    fr: "Espérance de vie",
    de: "Lebenserwartung",
    pt: "Vida útil média",
    id: "Rata-rata Umur"
  },
  sleepLabel: {
    ko: "수면 패턴",
    en: "Sleep Pattern",
    ja: "睡眠パターン",
    zh: "睡眠习惯",
    es: "Patrón de sueño",
    fr: "Mode de sommeil",
    de: "Schlafmuster",
    pt: "Padrão de sono",
    id: "Pola Tidur"
  },
  tempLabel: {
    ko: "성격 키워드",
    en: "Temperament",
    ja: "性格キーワード",
    zh: "性格特点",
    es: "Temperamento",
    fr: "Tempérament",
    de: "Temperament",
    pt: "Temperamento",
    id: "Temperamen"
  },
  meaningLabel: {
    ko: "의미",
    en: "Meaning",
    ja: "意味",
    zh: "意义",
    es: "Significado",
    fr: "Signification",
    de: "Bedeutung",
    pt: "Significado",
    id: "Arti"
  },
  responseLabel: {
    ko: "올바른 대처",
    en: "Correct Action",
    ja: "正しい対処",
    zh: "正确应对",
    es: "Acción correcta",
    fr: "Action correcte",
    de: "Richtige Reaktion",
    pt: "Ação correta",
    id: "Tindakan yang Benar"
  }
};

const petTranslationData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/blogs/pets.json'), 'utf-8')
);

// Markdown 생성 엔진
function generateMarkdown(slug, lang) {
  const data = petTranslationData[slug];
  if (!data) return '';

  const title = data.title[lang] || data.title['en'];
  const desc = data.description[lang] || data.description['en'];
  const auth = data.authority[lang] || data.authority['en'];
  const intro = data.intro[lang] || data.intro['en'];

  const pBreed = data.profile.breed[lang] || data.profile.breed['en'];
  const pLifespan = data.profile.lifespan[lang] || data.profile.lifespan['en'];
  const pSleep = data.profile.sleep_pattern[lang] || data.profile.sleep_pattern['en'];
  const pTemp = data.profile.temperament[lang] || data.profile.temperament['en'];

  const whyTitle = data.whyTitle[lang] || data.whyTitle['en'];
  const whyDesc = data.whyDesc[lang] || data.whyDesc['en'];

  const bodySignals = data.body_signals;
  const dailyRoutine = data.daily_routine;
  const faqs = data.faqs[lang] || data.faqs['en'];

  // 라벨 매핑
  const lProfile = labelDict.profileTitle[lang] || labelDict.profileTitle['en'];
  const lLifespan = labelDict.lifespanLabel[lang] || labelDict.lifespanLabel['en'];
  const lSleep = labelDict.sleepLabel[lang] || labelDict.sleepLabel['en'];
  const lTemp = labelDict.tempLabel[lang] || labelDict.tempLabel['en'];
  const lMeaning = labelDict.meaningLabel[lang] || labelDict.meaningLabel['en'];
  const lResponse = labelDict.responseLabel[lang] || labelDict.responseLabel['en'];

  // 헤더 다국어 딕셔너리
  const section2Title = {
    ko: "맞춤형 홈케어 루틴",
    en: "Custom Daily Care Routine",
    ja: "カスタマイズされたホームケアルーティン",
    zh: "定制化日常护理惯例",
    es: "Rutina de cuidado diario personalizada",
    fr: "Routine de soins quotidiens personnalisée",
    de: "Individuelle häusliche Pflegeroutine",
    pt: "Rotina de cuidados diários personalizada",
    id: "Rutinitas Perawatan Harian Kustom"
  };

  const section3Title = {
    ko: "요약 및 주의사항",
    en: "Summary and Precautions",
    ja: "要約と注意事項",
    zh: "总结与注意事项",
    es: "Resumen y precauciones",
    fr: "Résumé et précautions",
    de: "Zusammenfassung und Vorsichtsmaßnahmen",
    pt: "Resumo e precauções",
    id: "Ringkasan dan Tindakan Pencegahan"
  };

  const summaryTexts = {
    ko: "반려동물의 언어(카밍 시그널)를 세심하게 관찰하는 것만으로도 대부분의 행동 발달 및 스트레스성 질환을 사전에 예방할 수 있습니다. 수의학적 치료도 중요하지만, 집안 환경(안전 발판, 수직 공간 확보, 신선한 다각적 물 공급)을 안전하게 관리하는 것이 평생 동반자로서의 행복을 지탱하는 가장 강력한 보호막입니다.",
    en: "Simply observing your pet's calming signals can prevent major behavioral issues and stress-induced illnesses. While veterinary treatment is important, providing a safe environment (steps, vertical spaces, multiple water sources) is the strongest shield supporting their lifetime happiness.",
    ja: "ペットの合図（カーミングシグナル）を細かく観察するだけでも、ほとんどの行動問題やストレス性疾患を事前に予防できます。獣医学的な治療も重要ですが、家庭環境（滑り止めステップ、垂直空間の確保、新鮮な複数箇所での給水）を安全に管理することが、生涯の伴侶としての幸せを支える最も強力な盾となります。",
    zh: "仅仅通过仔细观察宠物的身体语言（安定信号），就可以预防大部分行为问题和压力引起的疾病。虽然兽医治疗很重要，但安全管理家庭环境（安全台阶、垂直空间保障、新鲜的多角度饮水）是保障它们一生幸福的最强护盾。",
    es: "El simple hecho de observar las señales de calma de su mascota puede prevenir problemas de comportamiento graves y enfermedades causadas por el estrés. Aunque el tratamiento veterinario es importante, proporcionar un entorno seguro (rampas, espacios verticales, múltiples fuentes de agua) es el escudo más fuerte para apoyar su felicidad de por vida.",
    fr: "Le simple fait d'observer les signaux d'apaisement de votre animal peut prévenir des problèmes de comportement majeurs et des maladies liées au stress. Bien que le traitement vétérinaire soit important, fournir un environnement sûr (rampes, espaces verticaux, sources d'eau multiples) est le bouclier le plus solide pour soutenir son bonheur tout au long de sa vie.",
    de: "Das einfache Beobachten der Beschwichtigungssignale Ihres Haustiers kann schwerwiegende Verhaltensprobleme und stressbedingte Krankheiten verhindern. Während eine tierärztliche Behandlung wichtig ist, ist eine sichere Umgebung (Treppen, vertikale Räume, mehrere Wasserstellen) der stärkste Schutz für ihr lebenslanges Glück.",
    pt: "Observar simplesmente os sinais de calma do seu animal de estimação pode prevenir grandes problemas comportamentais e doenças induzidas pelo estresse. Embora o tratamento veterinário seja importante, proporcionar um ambiente seguro (degraus, espaços verticais, múltiplas fontes de água) é o escudo mais forte para apoiar a sua felicidade ao longo da vida.",
    id: "Cukup dengan mengamati sinyal penenang hewan peliharaan Anda, Anda dapat mencegah masalah perilaku utama dan penyakit akibat stres. Meskipun perawatan medis penting, menyediakan lingkungan yang aman (tangga ramah hewan, ruang vertikal, beberapa sumber air) adalah pelindung terkuat untuk mendukung kebahagiaan seumur hidup mereka."
  };

  const faqHeader = {
    ko: "자주 묻는 질문 (FAQ)",
    en: "Frequently Asked Questions (FAQ)",
    ja: "よくある質問 (FAQ)",
    zh: "常见问题 (FAQ)",
    es: "Preguntas frecuentes (FAQ)",
    fr: "Foire aux questions (FAQ)",
    de: "Häufig gestellte Fragen (FAQ)",
    pt: "Perguntas frequentes (FAQ)",
    id: "Pertanyaan Sering Diajukan (FAQ)"
  };

  // Frontmatter 생성
  const petTags = {
    'maltese-care': {
      ko: ["말티즈", "슬개골 탈구", "눈물자국", "반려견 케어"],
      en: ["Maltese", "Patellar Luxation", "Tear Staining", "Dog Care"],
      ja: ["マルチーズ", "膝蓋骨脱臼", "涙やけ", "犬のケア"],
      zh: ["马尔济斯犬", "髌骨脱位", "泪痕", "犬类护理"],
      es: ["Maltés", "Luxación Patelar", "Manchas de Lágrimas", "Cuidado de Perros"],
      fr: ["Bichon maltais", "Luxation de la rotule", "Taches de larmes", "Soins des chiens"],
      de: ["Malteser", "Patellaluxation", "Tränenflecken", "Hundepflege"],
      pt: ["Maltês", "Luxação Patelar", "Manchas de Lágrimas", "Cuidado de Cães"],
      id: ["Maltese", "Luksasi Patela", "Noda Air Mata", "Perawatan Anjing"]
    },
    'koshort-care': {
      ko: ["코리안숏헤어", "특발성 방광염", "음수량 케어", "반려묘 케어"],
      en: ["Korean Shorthair", "FLUTD", "Hydration Care", "Cat Care"],
      ja: ["コリアンショートヘア", "特発性膀胱炎", "飲水量ケア", "猫のケア"],
      zh: ["科修特猫", "下泌尿道疾病", "饮水护理", "猫咪护理"],
      es: ["Común Coreano", "FLUTD", "Cuidado de Hidratación", "Cuidado de Gatos"],
      fr: ["Européen Coréen", "MBAUF", "Soins d'hydratation", "Soins des chats"],
      de: ["Koreanische Kurzhaarkatze", "FLUTD", "Trinkwasserpflege", "Katzenpflege"],
      pt: ["Pelo Curto Coreano", "FLUTD", "Cuidado de Hidratación", "Cuidado de Gatos"],
      id: ["Kucing Bulu Pendek Korea", "FLUTD", "Perawatan Hidrasi", "Perawatan Kucing"]
    },
    'golden-retriever-care': {
      ko: ["골든리트리버", "고관절 이형성증", "리트리빙", "대형견 케어"],
      en: ["Golden Retriever", "Hip Dysplasia", "Retrieving", "Large Dog Care"],
      ja: ["ゴールデンレトリバー", "股関節形成不全", "レトリービング", "大型犬のケア"],
      zh: ["金毛寻回犬", "髋关节发育不良", "寻回衔回", "大型犬护理"],
      es: ["Golden Retriever", "Displasia de Cadera", "Cobro", "Cuidado de Perros Grandes"],
      fr: ["Golden Retriever", "Dysplasie de la hanche", "Rapport", "Soins des grands chiens"],
      de: ["Golden Retriever", "Hüftdysplasie", "Apportieren", "Pflege großer Hunde"],
      pt: ["Golden Retriever", "Displasia de Quadril", "Busca", "Cuidado de Cães Grandes"],
      id: ["Golden Retriever", "Displasia Pinggul", "Mengambil Barang", "Perawatan Anjing Besar"]
    },
    'poodle-care': {
      ko: ["푸들", "지능형 놀이", "귀 관리", "반려견 홈케어"],
      en: ["Poodle", "Brain Games", "Ear Care", "Dog Home Care"],
      ja: ["プードル", "知能プレイ", "耳のケア", "犬のホームケア"],
      zh: ["贵宾犬", "智力游戏", "耳部护理", "犬类家庭护理"],
      es: ["Caniche", "Juegos Mentales", "Cuidado de Oídos", "Cuidado de Perros"],
      fr: ["Caniche", "Jeux Cérébraux", "Soin des Oreilles", "Soins Canins"],
      de: ["Pudel", "Denkspiele", "Ohrenpflege", "Hundepflege"],
      pt: ["Poodle", "Jogos Mentais", "Cuidado de Orelhas", "Cuidado de Cães"],
      id: ["Poodle", "Permainan Otak", "Perawatan Telinga", "Perawatan Anjing"]
    },
    'shiba-care': {
      ko: ["시바견", "이중모 관리", "스킨십 교육", "반려견 케어"],
      en: ["Shiba Inu", "Double Coat", "Socialization", "Dog Care"],
      ja: ["柴犬", "二重毛のケア", "スキンシップ教育", "犬のケア"],
      zh: ["柴犬", "双层毛护理", "触碰训练", "犬类护理"],
      es: ["Shiba Inu", "Manto Doble", "Socialización", "Cuidado de Perros"],
      fr: ["Shiba Inu", "Double Pelage", "Désensibilisation", "Soins des Chiens"],
      de: ["Shiba Inu", "Doppeltes Fell", "Desensibilisierung", "Hundepflege"],
      pt: ["Shiba Inu", "Pelagem Dupla", "Socialização", "Cuidado de Cães"],
      id: ["Shiba Inu", "Bulu Ganda", "Sosialisasi", "Perawatan Anjing"]
    },
    'pomeranian-care': {
      ko: ["포메라니안", "슬개골 예방", "기관지 협착증", "이중모 빗질"],
      en: ["Pomeranian", "Patellar Care", "Tracheal Collapse", "Double Coat Brushing"],
      ja: ["ポメラニアン", "膝蓋骨ケア", "気管虚脱", "二重毛のブラッシング"],
      zh: ["博美犬", "髌骨护理", "气管塌陷", "双层毛梳理"],
      es: ["Pomerania", "Cuidado de Rótula", "Colapso Traqueal", "Cepillado de Manto"],
      fr: ["Loulou de Poméranie", "Soin de Rotule", "Collapsus Trachéal", "Brossage Double Pelage"],
      de: ["Zwergspitz", "Kniescheibenpflege", "Trachealkollaps", "Fellbürsten"],
      pt: ["Spitz Alemão", "Cuidado Patelar", "Colapso Traqueal", "Escovação de Pelagem"],
      id: ["Pomeranian", "Perawatan Patela", "Kolaps Trakea", "Menyikat Bulu Ganda"]
    },
    'siamese-care': {
      ko: ["샴 고양이", "분리불안", "대화형 울음", "반려묘 놀이"],
      en: ["Siamese", "Separation Anxiety", "Vocal Cats", "Cat Playtime"],
      ja: ["シャム猫", "分離不安", "おしゃべりな猫", "猫の遊び"],
      zh: ["暹罗猫", "分离焦虑", "爱叫的猫", "猫咪游戏"],
      es: ["Siamés", "Ansiedad por Separación", "Gatos Vocales", "Juego de Gatos"],
      fr: ["Siamois", "Anxiété de Séparation", "Chats Vocaux", "Jeu Félin"],
      de: ["Siamese", "Trennungsangst", "Vokale Katzen", "Katzenspielzeit"],
      pt: ["Siamês", "Ansiedade de Separação", "Gatos Vocais", "Joguete de Gatos"],
      id: ["Siamese", "Kecemasan Perpisahan", "Kucing Vokal", "Waktu Bermain Kucing"]
    },
    'russian-blue-care': {
      ko: ["러시안블루", "소심한 성격", "은신처 확보", "반려묘 홈케어"],
      en: ["Russian Blue", "Shy Temperament", "Safe Hiding Spots", "Cat Home Care"],
      ja: ["ロシアンブルー", "人見知りな性格", "隠れ場所の確保", "猫のホームケア"],
      zh: ["俄罗斯蓝猫", "胆小性格", "安全隐蔽处", "猫咪家庭护理"],
      es: ["Azul Ruso", "Temperamento Tímido", "Escondites Seguros", "Cuidado de Gatos"],
      fr: ["Bleu Russe", "Caractère Timide", "Cachettes Sécurisées", "Soins Félins"],
      de: ["Russisch Blau", "Scheues Temperament", "Sichere Verstecke", "Katzenpflege"],
      pt: ["Azul Russo", "Temperamento Tímido", "Esconderijos Seguros", "Cuidado de Cães"],
      id: ["Russian Blue", "Temperamen Pemalu", "Tempat Sembunyi Aman", "Perawatan Kucing"]
    },
    'corgi-care': {
      ko: ["웰시코기", "슬개골 예방", "척추 디스크", "이중모 관리"],
      en: ["Welsh Corgi", "Patellar Care", "Spinal Health", "Double Coat"],
      ja: ["ウェルシュ・コーギー", "膝蓋骨ケア", "椎間板ヘルニア", "二重毛"],
      zh: ["威尔士柯基", "髌骨护理", "脊椎健康", "双层毛"],
      es: ["Welsh Corgi", "Cuidado Patelar", "Salud Espinal", "Manto Doble"],
      fr: ["Welsh Corgi", "Soin de Rotule", "Santé du Dos", "Double Pelage"],
      de: ["Welsh Corgi", "Kniescheibenpflege", "Rückengesundheit", "Doppeltes Fell"],
      pt: ["Welsh Corgi", "Cuidado Patelar", "Saúde Espinal", "Pelagem Dupla"],
      id: ["Welsh Corgi", "Perawatan Patela", "Kesehatan Tulang Belakang", "Bulu Ganda"]
    },
    'persian-care': {
      ko: ["페르시안 고양이", "장모종 빗질", "단두종 관리", "눈물자국"],
      en: ["Persian Cat", "Longhair Grooming", "Brachycephalic", "Tear Stains"],
      ja: ["ペルシアン猫", "長毛のブラッシング", "短頭種", "涙やけ"],
      zh: ["波斯猫", "长毛梳理", "扁脸猫", "泪痕"],
      es: ["Gato Persa", "Aseo de Pelo Largo", "Braquicéfalo", "Lágrimas"],
      fr: ["Chat Persan", "Brossage Poil Long", "Brachycéphale", "Larmes"],
      de: ["Perserkatze", "Langhaarpflege", "Kurzköpfig", "Tränenflecken"],
      pt: ["Gato Persa", "Escovação de Pelo Longo", "Braquicefálico", "Lágrimas"],
      id: ["Kucing Persia", "Perawatan Bulu Panjang", "Brakisefalik", "Noda Air Mata"]
    },
    'beagle-care': {
      ko: ["비글", "분리불안", "하울링", "외이염 예방"],
      en: ["Beagle", "Separation Anxiety", "Howling", "Ear Health"],
      ja: ["ビーグル", "分離不安", "遠吠え", "耳の健康"],
      zh: ["比格犬", "分离焦虑", "嚎叫", "耳朵健康"],
      es: ["Beagle", "Ansiedad por Separación", "Aullidos", "Oídos"],
      fr: ["Beagle", "Anxiété de Séparation", "Hurlements", "Oreilles"],
      de: ["Beagle", "Trennungsangst", "Jaulen", "Ohrengesundheit"],
      pt: ["Beagle", "Ansiedade de Separação", "Uivos", "Orelhas"],
      id: ["Beagle", "Kecemasan Perpisahan", "Melolong", "Kesehatan Telinga"]
    },
    'bichon-care': {
      ko: ["비숑 프리제", "비숑타임", "털 엉킴", "피부염 예방"],
      en: ["Bichon Frise", "Bichon Blitz", "Fur Matting", "Dermatitis"],
      ja: ["ビション・フリーゼ", "ビションタイム", "毛のもつれ", "皮膚炎"],
      zh: ["比熊犬", "比熊时间", "毛发缠结", "皮肤炎"],
      es: ["Bichón Frisé", "Bichon Blitz", "Nudos de Pelo", "Dermatitis"],
      fr: ["Bichon Frisé", "FRAPs", "Nœuds de Poils", "Dermatite"],
      de: ["Bichon Frise", "Bichon Blitz", "Fellverfilzung", "Hautentzündung"],
      pt: ["Bichon Frisé", "Bichon Blitz", "Pelagem Embaraçada", "Dermatite"],
      id: ["Bichon Frise", "Bichon Blitz", "Bulu Kusut", "Dermatitis"]
    },
    'bshorthair-care': {
      ko: ["브리티시 숏헤어", "비대성 심근증", "체중 조절", "비만 예방"],
      en: ["British Shorthair", "HCM Prevention", "Weight Control", "Obesity"],
      ja: ["ブリティッシュ・ショートヘア", "肥大性心筋症", "体重管理", "肥満"],
      zh: ["英国短毛猫", "肥大性心肌病", "体重管理", "肥胖"],
      es: ["British Shorthair", "Prevención de HCM", "Control de Peso", "Obesidad"],
      fr: ["British Shorthair", "Prévention de CMH", "Contrôle du Poids", "Obésité"],
      de: ["British Shorthair", "HCM-Prävention", "Gewichtskontrolle", "Adipositas"],
      pt: ["British Shorthair", "Prevenção de HCM", "Controle de Peso", "Obesidade"],
      id: ["British Shorthair", "Pencegahan HCM", "Kontrol Berat Badan", "Obesitas"]
    },
    'ragdoll-care': {
      ko: ["렉돌 고양이", "안아 올리기", "관절 케어", "반려묘 홈케어"],
      en: ["Ragdoll Cat", "Safe Holding", "Joint Care", "Cat Home Care"],
      ja: ["ラグドール", "抱き方", "関節ケア", "猫のホームケア"],
      zh: ["布偶猫", "抱姿训练", "关节护理", "猫咪家庭护理"],
      es: ["Ragdoll", "Sujeción Segura", "Cuidado Articular", "Cuidado de Gatos"],
      fr: ["Ragdoll", "Portage Sécurisé", "Soin Articulaire", "Soins Félins"],
      de: ["Ragdoll", "Sicheres Halten", "Gelenkpflege", "Katzenpflege"],
      pt: ["Ragdoll", "Colo Seguro", "Cuidado Articular", "Cuidado de Gatos"],
      id: ["Ragdoll", "Gendong Aman", "Perawatan Sendi", "Perawatan Kucing"]
    },
    'scottish-fold-care': {
      ko: ["스코티시폴드", "골연골이형성증", "귀 청소", "반려묘 관절"],
      en: ["Scottish Fold", "Osteochondrodysplasia", "Ear Cleaning", "Cat Joints"],
      ja: ["スコティッシュフォールド", "骨軟骨異形成症", "耳掃除", "猫の関節"],
      zh: ["苏格兰折耳猫", "骨软骨发育不良", "洗耳清洁", "猫咪关节"],
      es: ["Scottish Fold", "Osteocondrodiplasia", "Limpieza de Oídos", "Articulaciones"],
      fr: ["Scottish Fold", "Ostéochondrodysplasie", "Nettoyage des Oreilles", "Articulaciones"],
      de: ["Scottish Fold", "Osteochondrodysplasie", "Ohrenreinigung", "Gelenke"],
      pt: ["Scottish Fold", "Osteochondrodisplasia", "Limpieza de Orelhas", "Articulações"],
      id: ["Scottish Fold", "Osteochondrodysplasia", "Pembersihan Telinga", "Sendi Kucing"]
    },
    'maine-coon-care': {
      ko: ["메인쿤", "거대묘", "비대성 심근증", "이중모 빗질"],
      en: ["Maine Coon", "Giant Cat", "HCM Prevention", "Double Coat"],
      ja: ["メインクーン", "大型猫", "肥大性心筋症", "二重毛のケア"],
      zh: ["缅因猫", "巨型猫", "心肌病预防", "双层毛梳理"],
      es: ["Maine Coon", "Gato Gigante", "Prevención de HCM", "Manto Doble"],
      fr: ["Maine Coon", "Chat Géant", "Prévention de CMH", "Double Pelage"],
      de: ["Maine Coon", "Riesenkatze", "HCM-Prävention", "Doppeltes Fell"],
      pt: ["Maine Coon", "Gato Gigante", "Prevenção de HCM", "Pelagem Dupla"],
      id: ["Maine Coon", "Kucing Raksasa", "Pencegahan HCM", "Bulu Ganda"]
    },
    'chihuahua-care': {
      ko: ["치와와", "천문 보호", "저혈당 예방", "초소형견 케어"],
      en: ["Chihuahua", "Molera Protection", "Hypoglycemia", "Toy Breed Care"],
      ja: ["チワワ", "泉門保護", "低血糖予防", "超小型犬のケア"],
      zh: ["吉娃娃", "囟门保护", "低血糖预防", "超小型犬护理"],
      es: ["Chihuahua", "Protección de Molera", "Hipoglucemia", "Cuidado de Perros Toy"],
      fr: ["Chihuahua", "Protection Molera", "Hypoglycémie", "Soins Races Toy"],
      de: ["Chihuahua", "Molera-Schutz", "Hypoglykämie", "Zwergrassenpflege"],
      pt: ["Chihuahua", "Proteção de Moleira", "Hipoglicemia", "Cuidado de Cães Toy"],
      id: ["Chihuahua", "Perlindungan Molera", "Hipoglikemia", "Perawatan Ras Kecil"]
    },
    'husky-care': {
      ko: ["시베리안 허스키", "이중모 브러싱", "하울링 방지", "대형견 산책"],
      en: ["Siberian Husky", "Double Coat Brushing", "Howling Prevention", "Large Dog Walk"],
      ja: ["シベリアンハスキー", "二重毛のブラッシング", "遠吠え防止", "大型犬の散歩"],
      zh: ["西伯利亚哈士奇", "双层毛梳理", "防止嚎叫", "大型犬散步"],
      es: ["Husky Siberiano", "Cepillado de Manto", "Prevenir Aullidos", "Paseos de Perros Grandes"],
      fr: ["Husky Sibérien", "Brossage Double Pelage", "Prévenir Hurlements", "Promenade Grand Chien"],
      de: ["Sibirischer Husky", "Doppelfellbürsten", "Jaulprävention", "Spaziergang großer Hunde"],
      pt: ["Husky Siberiano", "Escovação de Pelagem", "Prevenir Uivos", "Passeios de Cães Grandes"],
      id: ["Siberian Husky", "Menyikat Bulu Ganda", "Pencegahan Melolong", "Jalan Anjing Besar"]
    }
  };

  const tags = petTags[slug]?.[lang] || petTags[slug]?.['en'] || [];
  const formattedTags = JSON.stringify(tags);
  const formattedFaqs = faqs.map(f => `  - question: "${f.question.replace(/"/g, '\\"')}"\n    answer: "${f.answer.replace(/"/g, '\\"')}"`).join('\n');
  
  // 반려동물 포스트별 발행 및 수정 날짜 매핑 (2026년 1월 ~ 7월 사이 랜덤 배치)
  const petDates = {
    'maltese-care': { pub: '2026-01-20', upd: '2026-01-22' },
    'koshort-care': { pub: '2026-03-15', upd: '2026-03-15' },
    'golden-retriever-care': { pub: '2026-05-28', upd: '2026-05-30' },
    'poodle-care': { pub: '2026-01-26', upd: '2026-01-26' },
    'shiba-care': { pub: '2026-01-29', upd: '2026-01-29' },
    'pomeranian-care': { pub: '2026-01-05', upd: '2026-01-05' },
    'siamese-care': { pub: '2026-02-19', upd: '2026-02-19' },
    'russian-blue-care': { pub: '2026-03-26', upd: '2026-03-26' },
    // 신규 추가 위인/펫 블로그 발행일 랜덤 섞기
    'corgi-care': { pub: '2026-04-12', upd: '2026-04-14' },
    'persian-care': { pub: '2026-06-05', upd: '2026-06-05' },
    'beagle-care': { pub: '2026-02-28', upd: '2026-03-01' },
    'bichon-care': { pub: '2026-05-10', upd: '2026-05-10' },
    'bshorthair-care': { pub: '2026-03-08', upd: '2026-03-09' },
    'ragdoll-care': { pub: '2026-06-18', upd: '2026-06-18' },
    'scottish-fold-care': { pub: '2026-02-10', upd: '2026-02-12' },
    'maine-coon-care': { pub: '2026-04-20', upd: '2026-04-20' },
    'chihuahua-care': { pub: '2026-07-01', upd: '2026-07-01' },
    'husky-care': { pub: '2026-03-29', upd: '2026-03-30' }
  };

  const pubDateStr = petDates[slug]?.pub || new Date().toISOString().split('T')[0];
  const updatedDateStr = petDates[slug]?.upd || pubDateStr;
  const heroImageSlug = slug.replace(/-/g, '_');

  let md = `---
layout: "../../../layouts/BlogPostLayout.astro"
title: "${title.replace(/"/g, '\\"')}"
description: "${desc.replace(/"/g, '\\"')}"
pubDate: "${pubDateStr}"
updatedDate: "${updatedDateStr}"
heroImage: "/images/blog/${heroImageSlug}.png"
authority: "${auth.replace(/"/g, '\\"')}"
app: "petself"
tags: ${formattedTags}
faqs:
${formattedFaqs}
---

${intro}

<div class="my-8 p-6 rounded-[2rem] border border-indigo-500/10 bg-indigo-500/5 dark:border-indigo-500/20 dark:bg-indigo-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-indigo-800 dark:text-indigo-300 m-0">
      ${lang === 'ko' ? '과학적 & 행동학적 근거' : lang === 'ja' ? '科学的＆行動学的根拠' : lang === 'zh' ? '科学与行为学依据' : lang === 'es' ? 'Fundamento Científico y Comportamental' : lang === 'fr' ? 'Fondement Scientifique & Comportemental' : lang === 'de' ? 'Wissenschaftlicher & Verhaltenstypischer Beleg' : lang === 'pt' ? 'Base Científica e Comportamental' : lang === 'id' ? 'Bukti Ilmiah & Perilaku' : 'Scientific & Behavioral Evidence'}
    </h5>
    <p class="text-xs text-indigo-700/80 dark:text-indigo-400/80 m-0 mt-1.5 leading-relaxed">
      ${lang === 'ko' ? `본 콘텐츠는 <strong>${auth}</strong>에 기반하고 있습니다.` : lang === 'ja' ? `本コンテンツは、<strong>${auth}</strong>に基づいています。` : lang === 'zh' ? `本内容基于 <strong>${auth}</strong>。` : lang === 'es' ? `Este contenido se basa en <strong>${auth}</strong>.` : lang === 'fr' ? `Ce contenu est basé sur <strong>${auth}</strong>.` : lang === 'de' ? `Dieser Inhalt basiert auf <strong>${auth}</strong>.` : lang === 'pt' ? `Este conteúdo baseia-se em <strong>${auth}</strong>.` : lang === 'id' ? `Konten ini didasarkan pada <strong>${auth}</strong>.` : `This content is based on <strong>${auth}</strong>.`}
    </p>
  </div>
</div>

<div class="my-6 p-6 rounded-[1.5rem] border border-slate-200/65 bg-slate-50/50 dark:border-white/5 dark:bg-slate-900/20">
  <h3 class="text-lg font-extrabold text-indigo-600 dark:text-indigo-400 mt-0 mb-4 flex items-center gap-2">
    🐾 ${pBreed} ${lProfile}
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="flex flex-col"><span class="text-xs text-slate-400">${lLifespan}</span><span class="font-bold text-slate-800 dark:text-slate-200">${pLifespan}</span></div>
    <div class="flex flex-col"><span class="text-xs text-slate-400">${lSleep}</span><span class="font-bold text-slate-800 dark:text-slate-200">${pSleep}</span></div>
    <div class="flex flex-col"><span class="text-xs text-slate-400">${lTemp}</span><span class="font-bold text-slate-800 dark:text-slate-200">${pTemp}</span></div>
  </div>
</div>

## 1. ${whyTitle}

${whyDesc}

`;

  // 행동 시그널 해독 카드 생성 (초록색 에메랄드 테마)
  bodySignals.forEach((sig, idx) => {
    const sName = sig.name[lang] || sig.name['en'];
    const sMean = sig.meaning[lang] || sig.meaning['en'];
    const sResp = sig.response[lang] || sig.response['en'];

    md += `<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20">SIGNAL ${idx + 1}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${sName}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    <strong>• ${lMeaning}:</strong> ${sMean}<br/>
    <strong>• ${lResponse}:</strong> ${sResp}
  </p>
</div>\n\n`;
  });

  md += `---

## 2. ${section2Title[lang] || section2Title['en']}

`;

  // 3단계 홈케어 루틴 카드 생성 (남색 인디고 테마)
  dailyRoutine.forEach((rt, idx) => {
    const rName = rt.name[lang] || rt.name['en'];
    const rText = rt.text[lang] || rt.text['en'];

    md += `<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20">ROUTINE ${idx + 1}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${rName}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${rText}
  </p>
</div>\n\n`;
  });

  md += `## 3. ${section3Title[lang] || section3Title['en']}
<div class="my-6 p-5 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-start gap-4">
  <span class="text-xl">💡</span>
  <div>
    <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
      ${summaryTexts[lang] || summaryTexts['en']}
    </p>
  </div>
</div>

---

<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0 mb-6 flex items-center gap-2">
    <span>📌</span> ${faqHeader[lang] || faqHeader['en']}
  </h3>
  
  <details class="group border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4 cursor-pointer" open>
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
      <span>${faqs[0].question}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${faqs[0].answer}
    </p>
  </details>

  <details class="group cursor-pointer">
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
      <span>${faqs[1].question}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${faqs[1].answer}
    </p>
  </details>
</div>
`;

  return md;
}

// 빌드 프로세스 시작
const args = process.argv.slice(2);
const slugArg = args.find(a => a.startsWith('--slug='))?.split('=')[1];

const buildPetBlog = (slug) => {
  console.log(`🚀 [Pet 컴파일러] '${slug}' 다국어 블로그 생성 시작...`);
  languages.forEach(lang => {
    const langDir = path.join(blogRoot, lang);
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }

    let markdownContent = generateMarkdown(slug, lang);
    if (markdownContent) {
      markdownContent = markdownContent.replace(/\*\*/g, '');
      const destPath = path.join(langDir, `${slug}.md`);
      fs.writeFileSync(destPath, markdownContent, 'utf-8');
      console.log(`✅ [생성 완료] ${lang.toUpperCase()} -> ${destPath}`);
    }
  });
  console.log(`🎉 [컴파일 완료] '${slug}' 9개 국어 마크다운 빌드 성공.`);
};

if (slugArg) {
  if (!petTranslationData[slugArg]) {
    console.error(`❌ [ERR] 유효하지 않은 --slug 인자입니다: ${slugArg}`);
    process.exit(1);
  }
  buildPetBlog(slugArg);
} else {
  console.log(`🚀 [Pet 컴파일러] 인자가 없어 등록된 모든 반려동물 블로그를 일괄 생성합니다.`);
  Object.keys(petTranslationData).forEach(slug => {
    buildPetBlog(slug);
  });
}
