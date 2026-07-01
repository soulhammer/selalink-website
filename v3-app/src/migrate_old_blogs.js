import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, 'content/blog');
const habitsRefPath = path.join(__dirname, 'data/habits_reference.md');
const translateHabitsPath = path.join(__dirname, 'translate_habits.js');

// 1. translate_habits.js 내에 이미 등록된 동적 위인 키셋 수집
const translateHabitsContent = fs.readFileSync(translateHabitsPath, 'utf-8');
const dynamicKeys = [];
const keyRegex = /^\s{2}'([a-z\-]+)':\s\{/gm;
let keyMatch;
while ((keyMatch = keyRegex.exec(translateHabitsContent)) !== null) {
  dynamicKeys.push(keyMatch[1]);
}
const dynamicKeysSet = new Set(dynamicKeys);

// 2. 한국어 마스터 디렉토리 스캔하여 등록되지 않은 구형 수동 위인 슬러그 동적 추출
const koFiles = fs.readdirSync(path.join(blogRoot, 'ko')).filter(f => f.endsWith('.md') && !f.startsWith('how-to-store-'));
const oldSlugs = koFiles.map(f => f.replace('.md', '')).filter(slug => !dynamicKeysSet.has(slug));

console.log('📊 [동적 마이그레이션 진단]');
console.log('   - 기 등록 동적 위인 수:', dynamicKeysSet.size);
console.log('   - 감지된 구형 수동 위인 수:', oldSlugs.length);
console.log('   - 마이그레이션 대상 목록:', oldSlugs);

const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id', 'ko'];

// 기존 9인 및 구형 8인 통합 다국어 FAQ 수동 매핑 사전 (학술 데이터 기반 설계)
const oldFaqsMapping = {
  // --- 구형 8종 수동 위인 FAQ ---
  'curie-cycling': [
    {
      question: {
        ko: "퀴리 부부는 왜 결혼식 선물로 자전거를 요청했나요?",
        en: "Why did the Curies request bicycles as wedding gifts?",
        ja: "キュリー夫妻はなぜ結婚祝いに自転車を求めたのですか？",
        zh: "居里夫妇为什么要求自行车作为婚礼礼物？",
        es: "¿Por qué los Curie pidieron bicicletas como regalo de bodas?",
        fr: "Pourquoi les Curie ont-ils demandé des vélos comme cadeaux de mariage ?",
        de: "Warum wünschten sich die Curies Fahrräder zur Hochzeit?",
        pt: "Porque é que os Curie pediram bicicletas como prenda de casamento?",
        id: "Mengapa keluarga Curie meminta sepeda sebagai hadiah pernikahan?"
      },
      answer: {
        ko: "화려한 결혼식 대신 자유롭고 건강하게 프랑스 시골길을 여행하며 사색하고, 일상의 번잡함을 피해 연구에 몰두할 수 있는 실용적인 도구를 원했기 때문입니다.",
        en: "Instead of a lavish wedding, they wanted a practical tool to travel through the French countryside, meditate, and focus on research away from daily distractions.",
        ja: "華やかな結婚式の代わりに、フランスの田舎道を旅して思索し、日常の喧騒から離れて研究に集中できる実用的な道具を望んだからです。",
        zh: "因为他们想要一个实用的工具来游览法国乡村、沉思，并远离日常琐事专注于研究，而不是举办奢华的婚礼。",
        es: "En lugar de una boda lujosa, querían una herramienta práctica para viajar por el campo francés, meditar y concentrarse en la investigación sin distracciones.",
        fr: "Plutôt qu'un mariage fastueux, ils voulaient un outil pratique pour voyager dans la campagne française, méditer et se concentrer sur leurs recherches.",
        de: "Anstelle einer wissenschaftlichen Hochzeit wollten sie ein praktisches Werkzeug, um die französische Landschaft zu bereisen und in Ruhe zu forschen.",
        pt: "Em vez de um casamento luxuoso, queriam uma ferramenta prática para viajar pelo campo francês, meditar e concentrar-se na investigação.",
        id: "Alih-alih pernikahan mewah, mereka menginginkan alat praktis untuk bepergian di pedesaan Prancis, bermeditasi, dan fokus pada penelitian."
      }
    }
  ],
  'demosthenes-isolation': [
    {
      question: {
        ko: "지하 독방에서 머리 반쪽을 깎은 이유는 무엇인가요?",
        en: "Why did Demosthenes shave half of his head?",
        ja: "なぜデモステネスは頭の半分を剃ったのですか？",
        zh: "德摩斯梯尼为什么要剃掉半边头发？",
        es: "¿Por qué Demóstenes se afeitó la mitad de la cabeza?",
        fr: "Pourquoi Démosthène s'est-il rasé la moitié de la tête ?",
        de: "Warum rasierte sich Demosthenes die Hälfte seines Kopfes?",
        pt: "Porque é que Demóstenes rapou metade da cabeça?",
        id: "Mengapa Demosthenes mencukur setengah kepalanya?"
      },
      answer: {
        ko: "외모가 우스꽝스러워져 사람들 앞에 나설 수 없게 함으로써, 유혹을 이겨내고 오직 연습실에만 갇혀 수련에 몰두하도록 강제하기 위한 장치였습니다.",
        en: "By making his appearance ridiculous, he prevented himself from going outside, forcing himself to overcome temptation and stay in his study to practice.",
        ja: "滑稽な姿になることで人前に出ることを防ぎ、誘惑に打ち勝って練習部屋にこもり、修練に集中せざるを得ないようにするための仕掛けでした。",
        zh: "通过让自己的外表变得滑稽，他阻止了自己外出，从而强迫自己战胜诱惑，留在书房里专心练习。",
        es: "Al ridiculizar su aspecto, se impidió salir a la calle, obligándose a superar la tentación y quedarse en su estudio para practicar la oratoria.",
        fr: "En se rendant ridicule, il s'est empêché de sortir, se forçant à surmonter la tentation et à rester dans son étude pour s'entraîner.",
        de: "Durch sein lächerliches Aussehen hinderte er sich selbst daran, nach draußen zu gehen, um sich auf das Redetraining zu konzentrieren.",
        pt: "Ao ridicularizar a sua aparência, impediu-se de sair à rua, forçando-se a superar a tentação e a ficar no seu estúdio a praticar.",
        id: "Dengan membuat penampilannya konyol, ia mencegah dirinya pergi ke luar, memaksa dirinya mengatasi godaan dan tetap berlatih."
      }
    }
  ],
  'descartes-lying-meditation': [
    {
      question: {
        ko: "아침 침대 위 명상이 정말 뇌과학적으로 효과가 있나요?",
        en: "Is morning meditation in bed really effective for the brain?",
        ja: "朝のベッドの上の瞑想は脳科学的に本当に効果がありますか？",
        zh: "清晨在床上的冥想真的对大脑有科学效果吗？",
        es: "¿Es la meditación matutina en la cama realmente eficaz para el cerebro?",
        fr: "La méditation matinale au lit est-elle vraiment efficace pour le cerveau ?",
        de: "Ist morgendliche Meditation im Bett wissenschaftlich wirksam?",
        pt: "A meditação matinal na cama é realmente eficaz para o cérebro?",
        id: "Apakah meditasi pagi di tempat tidur benar-benar efektif bagi otak?"
      },
      answer: {
        ko: "네, 각성 직후의 수평 자세는 뇌파를 알파(Alpha) 상태로 유도하여 자율신경계를 안정시키고, 창의성과 정서적 안정을 높여줍니다.",
        en: "Yes, a horizontal posture right after waking guides brainwaves into an alpha state, stabilizing the autonomic nervous system and boosting creativity and emotional stability.",
        ja: "はい、覚醒直後の水平な姿勢は脳波をアルファ波へと導き、自律神経系を安定させ、創造性と情緒의 안정성을 높입니다.",
        zh: "是的，醒来后的卧姿能引导脑波进入阿尔法（Alpha）状态，稳定自主神经系统，并提升创造力与情绪稳定性。",
        es: "Sí, la postura horizontal al despertar induce las ondas cerebrales al estado alfa, estabilizando el sistema nervioso autónomo y mejorando la creatividad.",
        fr: "Oui, la position allongée après le réveil guide les ondes cérébrales en état alpha, ce qui stabilise le système nerveux et stimule la créativité.",
        de: "Ja, die flache Haltung direkt nach dem Aufwachen führt zu Alpha-Wellen im Gehirn, was das Nervensystem beruhigt und die Kreativität steigert.",
        pt: "Sim, a postura horizontal ao acordar induz as ondas cerebrais ao estado alfa, estabilizando o sistema nervoso autónomo e melhorando a criatividade.",
        id: "Ya, posisi berbaring setelah bangun mengarahkan gelombang otak ke keadaan alfa, menstabilkan sistem saraf otonom."
      }
    }
  ],
  'edison-nap': [
    {
      question: {
        ko: "에디슨은 왜 손에 쇠구슬을 쥐고 낮잠을 잤나요?",
        en: "Why did Edison hold steel balls in his hands during naps?",
        ja: "なぜエジソンは昼寝中に鉄球を手にしたのですか？",
        zh: "爱迪生为什么要在昼寝时手里握着铁球？",
        es: "¿Por qué Edison sostenera bolas de acero en sus manos al dormir?",
        fr: "Pourquoi Edison tenait-il des billes d'acier pendant ses siestes ?",
        de: "Warum hielt Edison während des Schlafs Stahlkugeln in den Händen?",
        pt: "Porque é que Edison segurava bolas de aço nas mãos ao cochilar?",
        id: "Mengapa Edison memegang bola baja di tangannya saat tidur siang?"
      },
      answer: {
        ko: "잠에 드는 순간 근육이 풀려 구슬이 떨어질 때 나는 소리로 잠에서 깨어나, 꿈과 깨어남의 경계(반수면)에서 스친 아이디어를 즉시 기록하기 위함이었습니다.",
        en: "The moment he fell asleep and his muscles relaxed, the sound of dropping balls woke him up, allowing him to record ideas from the boundary of sleep and waking (hypnagogia) immediately.",
        ja: "眠りに入った瞬間に筋肉が弛緩し、鉄球が落ちる音で目覚めることで、夢と覚醒の境界（半睡眠）で閃いたアイデアを即座に書き留めるためでした。",
        zh: "在入睡肌肉放松、铁球落地的瞬间被声音唤醒，以便能够立即记录在梦境与醒来的边界（半醒状态）掠过的创意。",
        es: "Al quedarse dormido y relajarse sus músculos, el sound de las bolas al caer lo despertaba, permitiéndole anotar ideas del límite hipnagógico al instante.",
        fr: "Au moment où il s'endormait, ses muscles se relâchaient et le bruit de la chute des billes le réveillait, lui permettant de noter les idées hypnagogiques.",
        de: "Sobald er einschlief und die Muskeln locker ließen, weckte ihn das Geräusch der fallenden Kugeln, um Ideen aus dem Übergangszustand festzuhalten.",
        pt: "Ao adormecer e relaxar os músculos, o som das bolas a cair acordava-o, permitindo-lhe anotar ideias do limite hipnagógico instantaneamente.",
        id: "Saat ia tertidur dan ototnya rileks, suara bola yang jatuh membangunkannya, memungkinkannya mencatat ide dari batas hipnagogis."
      }
    }
  ],
  'franklin-air-bath': [
    {
      question: {
        ko: "공기욕(Air Bath)이 정말 감기 예방에 도움이 되나요?",
        en: "Does an Air Bath really help prevent colds?",
        ja: "空気浴（Air Bath）は本当に風邪の予防に効果がありますか？",
        zh: "空气浴（Air Bath）真的有助于预防感冒吗？",
        es: "¿Realmente ayuda el baño de aire (Air Bath) a prevenir resfriados?",
        fr: "Le bain d'air (Air Bath) aide-t-il vraiment à prevenir les rhumes ?",
        de: "Hilft ein Luftbad (Air Bath) wirklich, Erkältungen vorzubeugen?",
        pt: "O banho de ar (Air Bath) ajuda realmente a prevenir constipações?",
        id: "Apakah Mandi Udara (Air Bath) benar-benar membantu mencegah pilek?"
      },
      answer: {
        ko: "네, 피부를 차가운 공기에 가볍게 노출시키는 것은 온도 변화에 대한 신체 저항력을 높이고 면역력을 조절해 감기 예방에 긍정적인 영향을 줍니다.",
        en: "Yes, exposing the skin to cool air boosts the body's resistance to temperature changes and regulates immunity, helping prevent colds.",
        ja: "はい、皮膚を冷たい空気に軽くさらすことは、温度変化に対する身体의 저항력을 높이고, 면역력을 조정하여 감기 예방에 효과가 있습니다.",
        zh: "是的，让皮肤暴露在冷空气中可以增强身体对温度变化的抵抗力，并调节免疫力，从而有助于预防感冒。",
        es: "Sí, exponer la piel al aire fresco mejora la resistencia del cuerpo a los cambios de temperatura y estimula la inmunidad.",
        fr: "Oui, exposer la peau à l'air frais augmente la résistance aux changements de température et stimule l'immunité contre le rhume.",
        de: "Ja, die Haut kühler Luft auszusetzen, stärkt die Widerstandsfähigkeit gegen Temperaturschwankungen und reguliert das Immunsystem.",
        pt: "Sim, expor a pele ao ar fresco melhora a resistência do corpo a mudanças de temperatura e regula a imunidade.",
        id: "Ya, memaparkan kulit ke udara dingin meningkatkan resistensi tubuh terhadap perubahan suhu dan mengatur kekebalan tubuh."
      }
    }
  ],
  'jobs-uniform-minimalism': [
    {
      question: {
        ko: "스티브 잡스는 왜 매일 똑같은 옷만 고집했나요?",
        en: "Why did Steve Jobs wear the exact same clothes every day?",
        ja: "スティーブ・ジョブズはなぜ毎日同じ服ばかり着ていたのですか？",
        zh: "史蒂夫·乔布斯为什么每天都坚持穿完全相同的衣服？",
        es: "¿Por qué Steve Jobs vestía la misma ropa todos los días?",
        fr: "Pourquoi Steve Jobs portait-il toujours les mêmes vêtements ?",
        de: "Warum trug Steve Jobs jeden Tag die gleiche Kleidung?",
        pt: "Porque é que Steve Jobs usava a mesma roupa todos os dias?",
        id: "Mengapa Steve Jobs memakai pakaian yang sama setiap hari?"
      },
      answer: {
        ko: "아침마다 옷을 고르는 사소한 의사결정에서 소모되는 전두엽 에너지를 아껴, 애플 경영과 제품 혁신 등 본질적인 의사결정에 100% 집중하기 위함이었습니다.",
        en: "He wanted to save prefrontal brain energy consumed by minor fashion choices in the morning, focusing 100% of his power on critical business and product decisions.",
        ja: "朝の洋服選びという些細な意思決定で消費される前頭葉のエネルギーを節約し、アップルの経営や製品開発という本質的な決定に100％集中するためでした。",
        zh: "为了节省每天早晨选择衣服这种琐碎决策所消耗的前额叶脑力，从而将100%의 전력을 집중시킬 수 있었습니다.",
        es: "Para ahorrar la energía prefrontal consumida por elecciones triviales de ropa, enfocando el 100% de su capacidad en decisiones clave de negocio.",
        fr: "Pour préserver l'attention consommée par des choix triviaux le matin, afin de se concentrer à 100 % sur les choix stratégiques d'Apple.",
        de: "Um Energie zu sparen, die morgens durch triviale Kleidungsentscheidungen verbraucht wird, und sich voll auf kritische Geschäftsentscheidungen zu konzentrieren.",
        pt: "Para economizar a energia pré-frontal consumida por escolhas de roupa triviais de manhã, focando 100% da sua capacidade em decisões de negócios cruciais.",
        id: "Untuk menghemat energi otak prefrontal yang dikonsumsi oleh pilihan pakaian sepele, memfokuskan 100% kekuatannya pada keputusan bisnis."
      }
    }
  ],
  'kant-walk': [
    {
      question: {
        ko: "칸트는 왜 매일 오후 3시 30분에 산책을 나섰나요?",
        en: "Why did Immanuel Kant go for a walk at exactly 3:30 PM every day?",
        ja: "カントはなぜ毎日午後3時30분기っかりに散歩に出かけたのですか？",
        zh: "康德为什么每天下午3点30分准时出门散步？",
        es: "¿Por qué Immanuel Kant salía a pasear exactamente a las 3:30 PM todos los días?",
        fr: "Pourquoi Emmanuel Kant se promenait-il à 15h30 précises chaque jour ?",
        de: "Warum ging Immanuel Kant jeden Tag um Punkt 15:30 Uhr spazieren?",
        pt: "Porque é que Immanuel Kant ia passear exatamente às 15:30 todos os dias?",
        id: "Mengapa Immanuel Kant berjalan-jalan tepat jam 15.30 setiap hari?"
      },
      answer: {
        ko: "고도의 추상적 철학 연구를 장기간 지속하기 위해 신체의 생체 리듬을 철저히 시계처럼 규칙적으로 유지하여, 건강과 정신적 평온함을 지켜내기 위한 엄격한 리추얼이었습니다.",
        en: "It was a strict ritual to maintain his body's circadian rhythm to sustain high-level abstract philosophical research over decades, protecting his health and mental peace.",
        ja: "高度な哲学研究を長期にわたって維持するため、身体のバイオリズムを時計のように規則正しく管理し、健康と精神の平穏を守るための厳格な儀式でした。",
        zh: "这是一项严格的仪式，通过将身体의 생체시계를 유지하여 철학적 사유를 돕는 구조였습니다.",
        es: "Era un ritual estricto para mantener su ritmo circadiano y sostener la investigación filosófica abstracta durante décadas, protegiendo su salud.",
        fr: "C'était un rituel pour maintenir son rythme circadien afin de soutenir des recherches philosophiques abstraites, préservant sa santé.",
        de: "Es war ein strenges Ritual, um den biologischen Rhythmus aufrechtzuerhalten, um jahrzehntelang abstrakte philosophische Forschung zu betreiben.",
        pt: "Era um ritual rigoroso para manter o seu ritmo circadiano e sustentar a investigação filosófica abstrata por décadas, protegendo a saúde.",
        id: "Itu adalah ritual ketat untuk menjaga ritme sirkadian tubuhnya guna mempertahankan penelitian filsafat abstrak yang tinggi selama beberapa dekade."
      }
    }
  ],
  'tesla-toe-curling': [
    {
      question: {
        ko: "발가락을 꼼지락거리는 행위가 정말 뇌 활성화에 도움이 되나요?",
        en: "Does curling toes really help activate the brain?",
        ja: "足の指を動かす行為は本当に脳の活性化に効果がありますか？",
        zh: "活动脚趾真的有助于激活大脑吗？",
        es: "¿Realmente ayuda a activar el cerebro el movement de los dedos del pie?",
        fr: "Le fait de plier les orteils aide-t-il vraiment à activer le cerveau ?",
        de: "Hilft das Zehenkrümmen wirklich, das Gehirn zu aktivieren?",
        pt: "O movimento dos dedos do pé ajuda realmente a ativar o cérebro?",
        id: "Apakah meremas jari kaki benar-benar membantu mengaktifkan otak?"
      },
      answer: {
        ko: "네, 발가락 영역은 전두엽 피질의 신체 감각 지도상에서 뇌 중심부에 위치하고 있어, 발가락 미세 근육을 자극하는 것은 말초 신경을 통해 전두엽을 미세 자극하는 효과가 있습니다.",
        en: "Yes, the toe region is located in the somatosensory cortex mapping near the center of the brain. Stimulating toe micro-muscles sends electrical signals to active the prefrontal cortex.",
        ja: "はい、足の指の領域は脳の体性感覚野の中心部近くに位置しており、足의 발가락 미세 근육 자극은 전두엽 자극 효과를 줍니다.",
        zh: "是的，脚趾区域位于大脑皮层躯体感觉映射的中心附近。刺激脚趾微肌肉能通过外周神经微刺激前额叶皮层。",
        es: "Sí, la region de los dedos del pie está ubicada en la corteza somatosensorial cerca del centro cerebral. Estimular estos micromúsculos activa la corteza prefrontal.",
        fr: "Oui, la zone des orteils est située dans le cortex somatosensoriel près du centre du cerveau. Stimuler ces micro-muscles active le cortex préfrontal.",
        de: "Ja, die Zehenregion liegt im somatosensorischen Kortex nahe der Hirnmitte. Die Stimulierung der Muskeln sendet Signale zur Aktivierung des Gehirns.",
        pt: "Sim, a região dos dedos do pé está localizada no córtex somatossensorial perto do centro cerebral. Estimular esses micromúsculos ativa o córtex pré-frontal.",
        id: "Ya, area jari kaki terletak di korteks somatosensorik dekat pusat otak. Merangsang otot mikro mengirimkan sinyal ke otak."
      }
    }
  ],

  // --- 기존 9종 동적 위인 FAQ 추가 패치 데이터셋 ---
  'murakami-running': [
    {
      question: {
        ko: "하루키는 왜 매일 10km를 달리나요?",
        en: "Why does Murakami run 10km every day?",
        ja: "ハルキはなぜ毎日10km走るのですか？",
        zh: "村上春树为什么每天跑10公里？",
        es: "¿Por qué Murakami corre 10 km todos los días?",
        fr: "Pourquoi Murakami court-il 10 km chaque jour ?",
        de: "Warum läuft Murakami jeden Tag 10 km?",
        pt: "Porque é que Murakami corre 10 km todos os dias?",
        id: "Mengapa Murakami berlari 10 km setiap hari?"
      },
      answer: {
        ko: "소설 집필에 필요한 고도의 집중력과 지구력을 지탱하기 위해, 유산소 운동으로 뇌세포를 자극하고 물리적인 체력 기반을 구축하기 위함입니다.",
        en: "To sustain high concentration and endurance for writing, he stimulates brain cells with aerobic exercise and builds a solid physical base.",
        ja: "執筆に必要な高度な集中力と持久力を維持するため、有酸素運動で脳細胞を刺激し、頑丈な体力の土台を築くためです。",
        zh: "为了维持写作所需的高度专注力与持久力，他通过有酸素运动刺激脑细胞，并构建坚实的体力基础。",
        es: "Para mantener la alta concentración y resistencia para escribir, estimula las células cerebrales y construye una base física sólida.",
        fr: "Pour maintenir la concentration et l'endurance nécessaires à l'écriture, il stimule les cellules cérébrales par l'exercice aérobie.",
        de: "Um die Konzentration beim Schreiben aufrechtzuerhalten, stimuliert er die Gehirnzellen durch Ausdauersport.",
        pt: "Para manter a alta concentração e resistência para a escrita, estimula as células cerebrais com exercício aeróbico.",
        id: "Untuk mempertahankan konsentrasi dan daya tahan menulis, ia merangsang sel otak dengan olahraga aerobik."
      }
    }
  ],
  'darwin-sandwalk': [
    {
      question: {
        ko: "다윈의 샌드워크(Sandwalk)란 무엇인가요?",
        en: "What is Darwin's Sandwalk?",
        ja: "ダーウィンのサンドウォーク（Sandwalk）とは何ですか？",
        zh: "达林的沙로(Sandwalk)是指什么？",
        es: "¿Qué es el Sandwalk de Darwin?",
        fr: "Qu'est-ce que le Sandwalk de Darwin ?",
        de: "Was ist Darwins Sandwalk?",
        pt: "O que é o Sandwalk de Darwin?",
        id: "Apa itu Sandwalk Darwin?"
      },
      answer: {
        ko: "그가 매일 세 바퀴씩 걸으며 생각에 잠겼던 모래갈 길로, 가벼운 신체 활동을 통해 전두엽을 활성화하고 진화론 아이디어를 정리하던 생각의 산책로였습니다.",
        en: "It was a path where he walked three laps daily to activate the prefrontal cortex with light activity and organize evolution theory ideas.",
        ja: "彼が毎日3周歩いて思索に耽った砂利道で、軽い身体活動を通じて前頭葉を活性化し、進化論のアイデアを整理する思考の散歩道でした。",
        zh: "这是他每天散步三圈以通过轻度身体活动激活前额叶并整理进化论想法的思想步道。",
        es: "Era un sendero donde caminaba tres vueltas diarias para activar la corteza prefrontal y ordenar las ideas de la teoría de la evolución.",
        fr: "C'était un chemin où il marchait chaque jour pour stimuler son cortex préfrontal et ordonner ses idées sur l'évolution.",
        de: "Es war ein Pfad, den er täglich ging, um den präfrontalen Kortex zu aktivieren und die Evolutionstheorie zu ordnen.",
        pt: "Era um caminho onde caminhava três voltas diárias para ativar o córtex pré-frontal e ordenar as ideias da teoria da evolução.",
        id: "Itu adalah jalan tempat ia berjalan tiga putaran setiap hari untuk mengaktifkan korteks prefrontal."
      }
    }
  ],
  'woolf-standing-desk': [
    {
      question: {
        ko: "버지니아 울프는 왜 서서 글을 썼나요?",
        en: "Why did Virginia Woolf write standing up?",
        ja: "ヴァージニア・ウルフはなぜ立って執筆したのですか？",
        zh: "弗吉尼亚·伍尔夫为什么要站着写字？",
        es: "¿Por qué Virginia Woolf escribía de pie?",
        fr: "Pourquoi Virginia Woolf écrivait-elle debout ?",
        de: "Warum schrieb Virginia Woolf im Stehen?",
        pt: "Porque é que Virginia Woolf escrevia de pé?",
        id: "Mengapa Virginia Woolf menulis sambil berdiri?"
      },
      answer: {
        ko: "화가인 언니가 캔버스 앞에서 서서 그림을 그리는 것처럼, 자신 또한 예술적 대등함과 고도의 몰입 상태를 지키기 위한 육체적 의식으로 서서 쓰는 책상을 애용했습니다.",
        en: "Inspired by her painter sister working standing at a canvas, she used a standing desk as a physical ritual to keep artistic equality and focus.",
        ja: "画家の姉がキャンバスの前で立って絵を描く姿に刺激を受け、自身も芸術的な対等さと高度な没頭状態を維持するための儀式として立位デスクを愛用しました。",
        zh: "受到她那站立在画布前创作的画家姐姐的启发，她将立式书桌作为一项身体仪式，以保持艺术上的平等和专注。",
        es: "Inspirada por su hermana pintora, utilizaba un escritorio de pie como un ritual físico para mantener la igualdad artística y el enfoque.",
        fr: "Inspirée par sa sœur peintre debout devant son chevalet, elle utilisait un pupitre debout pour garder une égalité artistique.",
        de: "Inspiriert von ihrer malenden Schwester nutzte sie ein Stehpult, um sich künstlerisch auf Augenhöhe zu fühlen.",
        pt: "Inspirada pela irmã pintora, utilizava uma escrivaninha de pé como um ritual físico para manter a igualdade artística.",
        id: "Terinspirasi oleh saudaranya yang melukis sambil berdiri, ia menggunakan meja berdiri sebagai ritual fisik."
      }
    }
  ],
  'da-vinci-notepad': [
    {
      question: {
        ko: "다 빈치는 왜 항상 허리에 수첩을 찼나요?",
        en: "Why did Da Vinci always carry a notebook at his waist?",
        ja: "ダ・ヴィンチはなぜいつも腰に手帳を下げていたのですか？",
        zh: "达芬奇为什么总是把笔记本挂在腰间？",
        es: "¿Por qué Da Vinci siempre llevaba un cuaderno en la cintura?",
        fr: "Pourquoi De Vinci portait-il toujours un carnet à la taille ?",
        de: "Warum trug Da Vinci immer ein Notizbuch am Gürtel?",
        pt: "Porque é que Da Vinci sempre levava um caderno na cintura?",
        id: "Mengapa Da Vinci selalu membawa buku catatan di pinggangnya?"
      },
      answer: {
        ko: "머릿속을 스쳐가는 즉각적인 호기심과 관찰, 아이디어를 단 1초도 유실하지 않고 즉시 기록하여 두뇌 인지 에너지를 확보해 두기 위함이었습니다.",
        en: "To immediately record passing curiosity, observations, and ideas without losing them, keeping his cognitive energy free.",
        ja: "頭に浮かぶ瞬間的な好奇心や観察、アイデアを1秒たりとも逃さず即座に記録し、脳の認知エネルギーを解放しておくためでした。",
        zh: "为了在瞬间记录脑海中闪过的眼神、观察与创意，而不流失它们，从而保持大脑认知能量的自由。",
        es: "Para registrar al instante cualquier curiosidad u observación sin perderlas, manteniendo libre su energía cognitiva.",
        fr: "Pour noter immédiatement les curiosités et observations afin de libérer son attention de la charge mentale.",
        de: "Um flüchtige Ideen und Beobachtungen sofort festzuhalten und die kognitive Energie frei zu halten.",
        pt: "Para registrar instantaneamente qualquer curiosidade ou observação sem perdê-las, mantendo livre sua energia cognitiva.",
        id: "Untuk segera mencatat rasa ingin tahu dan pengamatan yang lewat tanpa kehilangannya."
      }
    }
  ],
  'beethoven-coffee-ritual': [
    {
      question: {
        ko: "베토벤은 왜 원두 60알을 고집했나요?",
        en: "Why did Beethoven insist on 60 coffee beans?",
        ja: "ベートーヴェンはなぜコーヒー豆60粒にこだわったのですか？",
        zh: "贝多芬为什么坚持只用60颗咖啡豆？",
        es: "¿Por qué Beethoven insistía en contar 60 granos de café?",
        fr: "Pourquoi Beethoven insistait-il sur 60 grains de café ?",
        de: "Warum bestand Beethoven auf 60 Kaffeebohnen?",
        pt: "Porque é que Beethoven insistia em contar 60 grãos de café?",
        id: "Mengapa Beethoven bersikeras menggunakan 60 biji kopi?"
      },
      answer: {
        ko: "작업 직전 아침 원두 60알을 직접 세는 단순 반복 행위를 통해 인지 에너지를 한곳으로 수렴하고 몰입의 트리거 신호로 삼기 위함이었습니다.",
        en: "Through the repetitive act of counting 60 beans, he gathered cognitive energy to use as a trigger signal for deep work.",
        ja: "作業の直前に60粒の豆を数える単純反復行為を通じて、認知エネルギーを1箇所に集約し、没頭へのトリガーとするためでした。",
        zh: "在开始工作前通过数60颗咖啡豆这种简单重复的行为，将认知能量汇聚于一点，作为进入深度专注的触发信号。",
        es: "A través del acto repetitivo de contar 60 granos, concentraba la energía cognitiva para usarla como disparador de concentración.",
        fr: "À travers l'action répétitive de compter 60 grains, il concentrait son attention pour en faire le déclencheur de son travail.",
        de: "Durch das Abzählen von 60 Bohnen sammelte er seine Energie als Signal für den Beginn tiefer Arbeit.",
        pt: "Através do ato repetitivo de contar 60 grãos, concentrava a energia cognitiva para usá-la como gatilho de concentração.",
        id: "Melalui tindakan berulang menghitung 60 biji kopi, ia mengumpulkan energi kognitif sebagai pemicu fokus."
      }
    }
  ],
  'churchill-afternoon-nap': [
    {
      question: {
        ko: "처칠의 전시 상황 낮잠 루틴의 효과는 무엇이었나요?",
        en: "What was the effect of Churchill's wartime nap routine?",
        ja: "チャーチルの戦時中の昼寝ルーティンの効果は何でしたか？",
        zh: "丘吉尔战时昼寝惯例的效果是什么？",
        es: "¿Cuál era el efecto de la siesta de Churchill en la guerra?",
        fr: "Quel était l'effet de la sieste de Churchill pendant la guerre ?",
        de: "Welcher Effekt hatte Churchills Mittagsschlaf im Krieg?",
        pt: "Qual era o efeito do cochilo de Churchill na guerra?",
        id: "Apa efek dari rutinitas tidur siang Churchill di masa perang?"
      },
      answer: {
        ko: "오후 1.5~2시간의 깊은 침대 낮잠을 통해, 하루의 일과를 2개의 독립적인 맑은 정신 주기로 나누어 24시간 가중한 의사결정 부하를 지탱했습니다.",
        en: "With a deep 1.5-2 hour nap, he divided his day into two independent alert periods to handle heavy decision-making loads.",
        ja: "午後1.5〜2時間の深い昼寝によって、1日の仕事を2つの独立した精神的サイクルに分割し、24時間重い意思決定の負荷を支えました。",
        zh: "通过午后1.5到2小时的深度睡眠，他将一天的工作划分为两个独立的清醒周期，以支撑24小时沉重的决策负荷。",
        es: "Con una siesta profunda de 1.5 a 2 horas, dividía su día en dos períodos independientes de alerta para manejar cargas de decisión.",
        fr: "Avec une sieste profonde, il divisait sa journée en deux périodes actives indépendantes pour supporter la charge des décisions.",
        de: "Mit einem tiefen Schlaf teilte er seinen Tag in zwei unabhängige Phasen auf, um schwere Entscheidungen zu treffen.",
        pt: "Com um cochilo profundo de 1.5 a 2 horas, dividia o dia em dois períodos independentes de alerta para lidar com as decisões.",
        id: "Dengan tidur siang yang nyenyak, ia membagi harinya menjadi dua periode aktif untuk menangani beban keputusan."
      }
    }
  ],
  'hemingway-word-count': [
    {
      question: {
        ko: "헤밍웨이는 왜 매일 단어 수를 차트에 기록했나요?",
        en: "Why did Hemingway record his word count daily?",
        ja: "ヘミングウェイはなぜ毎日単語数を記録したのですか？",
        zh: "海明威为什么每天都在图表上记录字数？",
        es: "¿Por qué Hemingway registraba su cantidad de palabras diario?",
        fr: "Pourquoi Hemingway notait-il son nombre de mots chaque jour ?",
        de: "Warum notierte Hemingway täglich seine Wortanzahl?",
        pt: "Porque é que Hemingway registrava a sua contagem de palavras diariamente?",
        id: "Mengapa Hemingway mencatat jumlah katanya setiap hari?"
      },
      answer: {
        ko: "스스로를 속이지 않고 집필 진행 상황을 객관적으로 시각화하여, 슬러프 방지 및 창작 생산성의 규칙적인 흐름을 강제하기 위함이었습니다.",
        en: "To objectively visualize writing progress, preventing slumps and forcing a regular flow of creative productivity without self-deception.",
        ja: "自分を欺くことなく執筆の進捗を客観的に可視化し、スランプを防止して創作活動の規則的な流れを保つためでした。",
        zh: "为了不欺骗自己地客观可视化写作进度，从而防止低谷并强迫创造性生产力的规律流动。",
        es: "Para visualizar el progreso de escritura, evitando bloqueos y forzando un flujo regular de productividad creativa.",
        fr: "Pour suivre objectivement sa progression, évitant les pannes d'inspiration et installant une régularité créative.",
        de: "Um den Schreibfortschritt objektiv zu visualisieren, Schreibblockaden vorzubeugen und die Produktivität zu fördern.",
        pt: "Para visualizar o progresso da escrita, evitando bloqueios e forçando um fluxo regular de produtividade criativa.",
        id: "Untuk memvisualisasikan kemajuan menulis secara objektif, mencegah kemacetan kreatif."
      }
    }
  ],
  'angelou-hotel-isolation': [
    {
      question: {
        ko: "엔젤루는 왜 호텔 방에 고립되어 글을 썼나요?",
        en: "Why did Angelou write isolated in a hotel room?",
        ja: "アンジェロウはなぜホテルの一室にこもって執筆したのですか？",
        zh: "安杰卢为什么要孤立在酒店房间里写字？",
        es: "¿Por qué Angelou escribía aislada en una habitación de hotel?",
        fr: "Pourquoi Angelou écrivait-elle isolée dans une chambre d'hôtel ?",
        de: "Warum schrieb Angelou isoliert in einem Hotelzimmer?",
        pt: "Porque é que Angelou escrevia isolada num quarto de hotel?",
        id: "Mengapa Angelou menulis dengan mengisolasi diri di kamar hotel?"
      },
      answer: {
        ko: "친숙한 가정과 일상의 오감 자극(그림, 가사 등)으로부터 두뇌를 원천 차단하여 극단적인 몰입 상태를 강제하기 위함이었습니다.",
        en: "To completely block her brain from familiar domestic sensory stimuli (paintings, chores), forcing an extreme state of focus.",
        ja: "親しみのある家庭や日常の刺激（絵画、家事など）から脳を完全に遮断し、極限の没頭状態を強制するためでした。",
        zh: "为了完全阻断大脑与熟悉的家庭日常感官刺激（画作、家务等）的联系，从而强迫自己进入极度的专注状态。",
        es: "Para bloquear por completo su mente de estímulos sensoriales domésticos, forzando un estado extremo de enfoque.",
        fr: "Pour couper son cerveau des distractions du quotidien (corvées, tableaux), s'obligeant à un niveau de concentration maximal.",
        de: "Um ihr Gehirn von Reizen zu Hause (Bilder, Hausarbeit) abzuschirmen und einen Zustand extremen Fokus zu erzwingen.",
        pt: "Para bloquear por completo a sua mente de estímulos sensoriais domésticos, forçando um estado extremo de foco.",
        id: "Untuk memblokir otaknya dari rangsangan sensorik rumah tangga (lukisan, pekerjaan rumah), memaksa fokus ekstrem."
      }
    }
  ],
  'tchaikovsky-two-hour-walk': [
    {
      question: {
        ko: "차이코프스키는 왜 2시간의 산책 시간을 엄수했나요?",
        en: "Why did Tchaikovsky strictly observe a 2-hour walk?",
        ja: "チャイコフスキーはなぜ2時間の散歩時間を厳守したのですか？",
        zh: "柴可夫斯基为什么要严格遵守2小时的散步时间？",
        es: "¿Por qué Tchaikovsky respetaba estrictamente una caminata de 2 horas?",
        fr: "Pourquoi Tchaïkovski respectait-il une promenade de 2 heures ?",
        de: "Warum hielt Tchaikovsky strikt an einem 2-stündigen Spaziergang fest?",
        pt: "Porque é que Tchaikovsky respeitava estritamente uma caminhada de 2 horas?",
        id: "Mengapa Tchaikovsky sangat mematuhi jalan-jalan selama 2 jam?"
      },
      answer: {
        ko: "미신적 강박에서 시작하였으나, 2시간의 보행이 실제 뇌 혈류량을 증가시키고 자율신경을 이완하여 명곡의 멜로디 영감을 뇌 속에 흐르게 도왔습니다.",
        en: "It started as a superstitious obsession, but 2 hours of walking increased brain blood flow and relaxed nerves, bringing musical inspiration.",
        ja: "迷信的な強迫観念から始まりましたが、2時間の歩行が実際に脳の血流量を増やし、自律神経を緩和して名曲のインスピレーションをもたらしました。",
        zh: "虽然始于迷信般的强迫，但2小时的步行确实增加了大脑血流量并放松了神经，从而带来了音乐灵感。",
        es: "Comenzó por obsesión, pero caminar 2 horas aumentaba el flujo de sangre cerebral y relajaba los nervios, trayendo inspiración.",
        fr: "Cela a commencé comme une superstition, mais 2 heures de marche augmentaient le flux sanguin cérébral, apportant l'inspiration.",
        de: "Es begann als Aberglaube, aber der 2-stündige Spaziergang steigerte die Hirndurchblutung und brachte musikalische Inspiration.",
        pt: "Começou por obsessão, mas caminhar 2 horas aumentava o fluxo de sangue cerebral e relaxava os nervos, trazendo inspiração.",
        id: "Dimulai sebagai obsesi, tetapi 2 jam berjalan meningkatkan aliran darah otak dan membawa inspirasi musik."
      }
    }
  ],
  'dali-spoon-nap': [
    {
      question: {
        ko: "달리는 왜 숟가락을 쥐고 낮잠을 잤나요?",
        en: "Why did Dali hold a spoon during naps?",
        ja: "なぜダリは昼寝中にスプーンを手にしたのですか？",
        zh: "达利为什么在午睡时手里拿着勺子？",
        es: "¿Por qué Dalí sostenía una cuchara durante las siestas?",
        fr: "Pourquoi Dali tenait-il une cuillère pendant ses siestes ?",
        de: "Warum hielt Dali während des Mittagsschlafs einen Löffel?",
        pt: "Porque é que Dali segurava uma colher durante os cochilos?",
        id: "Mengapa Dali memegang sendok saat tidur siang?"
      },
      answer: {
        ko: "잠에 드는 순간 근육이 이완되어 숟가락이 바닥의 접시에 부딪히는 소리로 잠에서 깨어나, 무의식(반수면) 상태의 기상천외한 환상적 영감을 즉시 낚아채기 위함이었습니다.",
        en: "The moment he fell asleep, muscles relaxed and the spoon hit a plate on the floor, waking him up to capture surreal inspirations from hypnagogia.",
        ja: "眠りに入った瞬間に筋肉が弛緩し、スプーンが床의 皿に当たる音で目覚めることで、無意識（半睡眠）状態の奇想天外なインスピレーションを即座に捉えるためでした。",
        zh: "入睡瞬间肌肉放松，勺子击中地上的盘子发出声音将其唤醒，以便能够立即捕捉在无意识（半醒状态）下产生的奇特创意。",
        es: "Al relajarse sus músculos al dormir, la cuchara caía sobre un plato, despertándolo para capturar de inmediato inspiraciones surrealistas.",
        fr: "Dès qu'il s'endormait, ses muscles se relâchaient et la cuillère tombait sur une assiette, le réveillant pour capturer des images surréalistes.",
        de: "Sobald er einschlief und die Muskeln locker ließen, fiel der Löffel auf einen Teller, um surreale Inspirationen festzuhalten.",
        pt: "Ao adormecer e relaxar os músculos, a colher caía sobre um prato, acordando-o para capturar imediatamente inspirações surrealistas.",
        id: "Saat ia tertidur dan ototnya rileks, sendok jatuh ke piring di lantai, membangunkannya untuk menangkap inspirasi surealis."
      }
    }
  ],
  'einstein-violin-thinking': [
    {
      question: {
        ko: "아인슈타인은 왜 연구 중 바이올린을 켰나요?",
        en: "Why did Einstein play the violin during research?",
        ja: "アインシュタインはなぜ研究中にバイオリンを弾いたのですか？",
        zh: "爱因斯坦为什么在研究中弹小提琴？",
        es: "¿Por qué Einstein tocaba el violín durante sus investigaciones?",
        fr: "Pourquoi Einstein jouait-il du violon pendant ses recherches ?",
        de: "Warum spielte Einstein während der Forschung Geige?",
        pt: "Porque é que Einstein tocava violino durante as investigações?",
        id: "Mengapa Einstein bermain biola saat melakukan penelitian?"
      },
      answer: {
        ko: "물리학 연구가 한계에 부딪혔을 때, 바이올린을 연주하여 좌뇌를 쉬게 하고 우뇌(창의성)를 시각·청각적으로 자극하여 새로운 아이디어를 얻기 위함이었습니다.",
        en: "When physics research hit a block, playing the violin allowed his left brain to rest and stimulated the right brain (creativity) to trigger new insights.",
        ja: "物理学の研究が壁にぶつかった時、バイオリンを弾くことで左脳を休ませ、右脳（創造性）を刺激して新しいアイデアを引き出すためでした。",
        zh: "当物理研究遇到瓶颈时，弹奏小提琴可以让他的左脑休息，并刺激右脑（创造力）以触发新的灵感。",
        es: "Cuando su investigación física se bloqueaba, tocar el violín le permitía descansar el hemisferio izquierdo y estimular el derecho para obtener ideas.",
        fr: "Quand ses recherches stagnaient, jouer du violon reposait son cerveau gauche et stimulait le droit pour susciter de nouvelles perspectives.",
        de: "Wenn die Forschung stockte, half das Geigenspiel, die linke Gehirnhälfte zu entlasten und die kognitive rechte Hälfte zu aktivieren.",
        pt: "Quando a sua investigação física bloqueava, tocar violino permitia descansar o hemisfério esquerdo e estimular o direito para obter ideias.",
        id: "Ketika penelitian fisika menemui jalan buntu, bermain biola mengistirahatkan otak kiri dan merangsang otak kanan."
      }
    }
  ]
};

function parseMarkdownFile(lang, slug) {
  const filePath = path.join(blogRoot, lang, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Frontmatter 파싱
  const parts = content.split('---');
  const frontmatter = parts[1];
  const body = parts.slice(2).join('---').trim();

  // Title, Description, PubDate 파싱
  const title = frontmatter.match(/title:\s*"([^"]+)"/)?.[1] || '';
  const description = frontmatter.match(/description:\s*"([^"]+)"/)?.[1] || '';
  const pubDate = frontmatter.match(/pubDate:\s*"([^"]+)"/)?.[1] || '';
  const updatedDate = frontmatter.match(/updatedDate:\s*"([^"]+)"/)?.[1] || '';
  const authority = frontmatter.match(/authority:\s*"([^"]+)"/)?.[1] || '';

  // 본문 인트로 파싱 (## 1. 전까지)
  const introMatch = body.match(/^([\s\S]*?)##\s+1\./);
  let intro = introMatch ? introMatch[1].trim() : body;
  
  // 역사 근거 박스 HTML 제거
  intro = intro.replace(/<div class="my-8 p-6 rounded-\[2rem\].*?<\/div>/s, '').trim();
  // 마크다운 문법 정리
  if (intro.endsWith('---')) intro = intro.substring(0, intro.length - 3).trim();

  // 3단계 스텝 파싱
  const stepCards = [];
  const cardRegex = /<div class="my-8 p-6 md:p-8 rounded-\[2rem\].*?<\/div>/gs;
  let match;
  while ((match = cardRegex.exec(body)) !== null) {
    const cardContent = match[0];
    const sName = cardContent.match(/<h4 class="text-xl font-extrabold[^>]*>(.*?)<\/h4>/)?.[1] || '';
    const sText = cardContent.match(/<p class="text-slate-700[^>]*>([\s\S]*?)<\/p>/)?.[1] || '';
    
    // HTML 주석 및 내부 크롭 이미지 태그 제거
    const cleanText = sText.replace(/<div class="mt-6 flex justify-center">.*?<\/div>/gs, '').trim();

    stepCards.push({
      name: sName.trim(),
      text: cleanText.trim()
    });
  }

  // 💡 Caution Box 파싱
  const cautionMatch = body.match(/<div class="my-6 p-5 rounded-2xl border-l-4 border-indigo-500.*?>[\s\S]*?<p class="text-slate-700[^>]*>([\s\S]*?)<\/p>/s);
  const cautionDesc = cautionMatch ? cautionMatch[1].trim() : '';

  return {
    title,
    description,
    pubDate,
    updatedDate,
    authority,
    intro,
    steps: stepCards,
    cautionDesc
  };
}

function run() {
  console.log('🔄 [마이그레이션] 구형 8종 수동 블로그 역공학 파싱 및 translate_habits.js 편입 시작...');

  // 마이그레이션이 필요한 구형 슬러그들만 골라서 돌림 (oldSlugs 리스트가 비어 있더라도, 기존 9종 FAQ 이식을 위해 실행 가능하게 유연화)
  // 단, oldSlugs가 비어있어도 translationData의 기존 위인들에 FAQ를 보강하기 위해 전수 순회 주입 로직 기동
  const allTargetSlugs = [...new Set([...oldSlugs, ...Object.keys(oldFaqsMapping)])];

  const parsedData = {};

  allTargetSlugs.forEach(slug => {
    // 1. translate_habits.js 에 기존 정의되어 있는 동적 데이터인지 검사
    const isAlreadyDynamic = dynamicKeysSet.has(slug);
    
    if (isAlreadyDynamic) {
      // 이미 동적 제어되고 있는 위인이라면, 기존 데이터 사전을 읽어서 'faqs'와 'stepImages' 정보만 추가 주입합니다.
      // translate_habits.js 의 translationData 소스 텍스트 수정으로 대응
      console.log(`💡 [FAQ/미디어 보강] 기존 동적 위인 발견: '${slug}' -> FAQ 데이터 주입 중...`);
      return;
    }

    parsedData[slug] = {
      title: {},
      description: {},
      authority: {},
      intro: {},
      whyTitle: {},
      whyDesc: {},
      cautionTitle: {},
      cautionDesc: {},
      steps: [
        { name: {}, text: {} },
        { name: {}, text: {} },
        { name: {}, text: {} }
      ],
      stepImages: ["", `/images/blog/${slug.replace(/-/g, '_')}_relax_detail.png`, ""],
      faqs: oldFaqsMapping[slug] || []
    };

    languages.forEach(lang => {
      const parsed = parseMarkdownFile(lang, slug);
      if (!parsed) return;

      // 공통 데이터 바인딩
      if (lang === 'ko') {
        parsedData[slug].pubDate = parsed.pubDate;
        parsedData[slug].updatedDate = parsed.updatedDate;
      }

      parsedData[slug].title[lang] = parsed.title;
      parsedData[slug].description[lang] = parsed.description;
      parsedData[slug].authority[lang] = parsed.authority || "BuildSelf Editorial";
      parsedData[slug].intro[lang] = parsed.intro;
      parsedData[slug].cautionDesc[lang] = parsed.cautionDesc;

      // 3단계 바인딩
      for (let i = 0; i < 3; i++) {
        if (parsed.steps[i]) {
          parsedData[slug].steps[i].name[lang] = parsed.steps[i].name;
          parsedData[slug].steps[i].text[lang] = parsed.steps[i].text;
        }
      }

      // whyTitle, whyDesc 및 cautionTitle은 대표언어(ko)의 헤더 및 💡 타이틀을 기준으로 가공
      const rawContent = fs.readFileSync(path.join(blogRoot, lang, `${slug}.md`), 'utf-8');
      const whyTitleMatch = rawContent.match(/##\s+1\.\s+([^\r\n]+)/);
      parsedData[slug].whyTitle[lang] = whyTitleMatch ? whyTitleMatch[1].trim() : 'The Science Behind';

      const whyDescMatch = rawContent.match(/##\s+1\..*?[\r\n]+([\s\S]*?)##\s+2\./);
      let whyDesc = whyDescMatch ? whyDescMatch[1].trim() : '';
      if (whyDesc.endsWith('---')) whyDesc = whyDesc.substring(0, whyDesc.length - 3).trim();
      parsedData[slug].whyDesc[lang] = whyDesc;

      const cautionTitleMatch = rawContent.match(/##\s+3\.\s+([^\r\n]+)/);
      parsedData[slug].cautionTitle[lang] = cautionTitleMatch ? cautionTitleMatch[1].trim() : 'Letting Go of Control';
    });
  });

  // translate_habits.js 파일 로드하여 translationData 의 닫는 부호 직전에 이식
  let sourceJs = fs.readFileSync(translateHabitsPath, 'utf-8');

  // 기존 동적 위인 9종에 대해 FAQ 데이터 강제 이식/치환 적용
  Object.keys(oldFaqsMapping).forEach(slug => {
    if (dynamicKeysSet.has(slug)) {
      // translate_habits.js 소스코드 상의 해당 위인 객체 내부에 faqs 주입
      const faqsString = `    faqs: ${JSON.stringify(oldFaqsMapping[slug], null, 6)}`;
      
      // 해당 위인의 블록(예: 'murakami-running': { ... })을 찾아서 기입
      const targetRegex = new RegExp(`'${slug}':\\s*\\{[\\s\\S]*?cautionDesc:\\s*\\{[\\s\\S]*?\\}\\s*\\}`, 'g');
      const match = sourceJs.match(targetRegex);
      if (match) {
        let blockText = match[0];
        if (!blockText.includes('faqs:')) {
          // 객체 끝 닫는 괄호 직전에 faqs 데이터 추가
          const lastBraceIndex = blockText.lastIndexOf('}');
          blockText = blockText.substring(0, lastBraceIndex) + `,\n${faqsString}\n  }`;
          sourceJs = sourceJs.replace(match[0], blockText);
        }
      }
    }
  });
  
  // 신규 수동 8종 마이그레이션 주입
  const newSlugsToInject = Object.keys(parsedData);
  if (newSlugsToInject.length > 0) {
    const serializedData = newSlugsToInject.map(slug => {
      return `  '${slug}': ${JSON.stringify(parsedData[slug], null, 2)}`;
    }).join(',\n');

    const targetSignature = "  }\n};";
    if (sourceJs.includes(targetSignature)) {
      const replacement = "  },\n" + serializedData + "\n};";
      sourceJs = sourceJs.replace(targetSignature, replacement);
    } else {
      const targetWinSignature = "  }\r\n};";
      if (sourceJs.includes(targetWinSignature)) {
        const replacement = "  },\r\n" + serializedData + "\r\n};";
        sourceJs = sourceJs.replace(targetWinSignature, replacement);
      }
    }
  }

  fs.writeFileSync(translateHabitsPath, sourceJs, 'utf-8');
  console.log('✅ [성공] 기존 동적 위인 9종 FAQ 보강 및 구형 8종 마이그레이션이 translate_habits.js 에 완료되었습니다!');
}

run();
