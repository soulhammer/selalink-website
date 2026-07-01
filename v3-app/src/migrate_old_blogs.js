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
console.log('   - 대상 목록:', oldSlugs);

const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id', 'ko'];

// 구형 블로그용 다국어 FAQ 수동 매핑 사전 (학술 데이터 기반 설계)
const oldFaqsMapping = {
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
        ja: "華やかな結婚式の代わりに、フランスの田舎道を旅して思索し、日常の喧騒から離れて研究に集中できる実用적인 道具を望んだからです。",
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
        ja: "はい、覚醒直後の水平な姿勢は脳波をアルファ波へと导き、自律神経系を安定させ、創造性と情緒の安定を高めます。",
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
        es: "Al quedarse dormido y relajarse sus músculos, el sonido de las bolas al caer lo despertaba, permitiéndole anotar ideas del límite hipnagógico al instante.",
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
        fr: "Le bain d'air (Air Bath) aide-t-il vraiment à prévenir les rhumes ?",
        de: "Hilft ein Luftbad (Air Bath) wirklich, Erkältungen vorzubeugen?",
        pt: "O banho de ar (Air Bath) ajuda realmente a prevenir constipações?",
        id: "Apakah Mandi Udara (Air Bath) benar-benar membantu mencegah pilek?"
      },
      answer: {
        ko: "네, 피부를 차가운 공기에 가볍게 노출시키는 것은 온도 변화에 대한 신체 저항력을 높이고 면역력을 조절해 감기 예방에 긍정적인 영향을 줍니다.",
        en: "Yes, exposing the skin to cool air boosts the body's resistance to temperature changes and regulates immunity, helping prevent colds.",
        ja: "はい、皮膚を冷たい空気に軽くさらすことは、温度変化に対する身体의 抵抗力を高め、免疫力を調整して風邪の予防に効果があります。",
        zh: "是的，让皮肤暴露在冷空气中可以增强身体对温度变化的抵抗力，并调节免疫力，从而有助于预防感冒。",
        es: "Sí, exponer la piel al aire fresco mejora la resistance del cuerpo a los cambios de temperatura y estimula la inmunidad.",
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
        ja: "스티브・ジョブズはなぜ毎日同じ服ばかり着ていたのですか？",
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
        zh: "为了节省每天早晨选择衣服这种琐碎决策所消耗的前额叶脑力，从而将100%의 精力集中在关键的商业和产品决策上。",
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
        ja: "カントはなぜ毎日午後3時30분きっかりに散歩に出かけたのですか？",
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
        zh: "这是一项严格的仪式，通过将身体의 生物钟维持得像时钟一样规律，以支持数十年来高度抽象的哲学研究，从而保护健康与心理平静。",
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
        ja: "はい、足の指の領域は脳の体性感覚野の中心部近くに位置しており、足의 指의 微細な筋肉を刺激することは、末梢神経を通じて前頭葉を刺激する効果があります。",
        zh: "是的，脚趾区域位于大脑皮层躯体感觉映射的中心附近。刺激脚趾微肌肉能通过外周神经微刺激前额叶皮层。",
        es: "Sí, la región de los dedos del pie está ubicada en la corteza somatosensorial cerca del centro cerebral. Estimular estos micromúsculos activa la corteza prefrontal.",
        fr: "Oui, la zone des orteils est située dans le cortex somatosensoriel près du centre du cerveau. Stimuler ces micro-muscles active le cortex préfrontal.",
        de: "Ja, die Zehenregion liegt im somatosensorischen Kortex nahe der Hirnmitte. Die Stimulierung der Muskeln sendet Signale zur Aktivierung des Gehirns.",
        pt: "Sim, a região dos dedos do pé está localizada no córtex somatossensorial perto do centro cerebral. Estimular esses micromúsculos ativa o córtex pré-frontal.",
        id: "Ya, area jari kaki terletak di korteks somatosensorik dekat pusat otak. Merangsang otot mikro mengirimkan sinyal ke otak."
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

  if (oldSlugs.length === 0) {
    console.log('ℹ️ 마이그레이션할 구형 수동 블로그가 감지되지 않았습니다. 패스합니다.');
    return;
  }

  const parsedData = {};

  oldSlugs.forEach(slug => {
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
  
  // 데이터 오브젝트 텍스트 변환
  const serializedData = Object.keys(parsedData).map(slug => {
    return `  '${slug}': ${JSON.stringify(parsedData[slug], null, 2)}`;
  }).join(',\n');

  const targetSignature = "  }\n};";
  if (sourceJs.includes(targetSignature)) {
    const replacement = "  },\n" + serializedData + "\n};";
    sourceJs = sourceJs.replace(targetSignature, replacement);
    fs.writeFileSync(translateHabitsPath, sourceJs, 'utf-8');
    console.log('✅ [성공] 구형 8종 번역 데이터가 translate_habits.js 에 성공적으로 합병되었습니다!');
  } else {
    // 윈도우 스타일 줄바꿈 대응
    const targetWinSignature = "  }\r\n};";
    if (sourceJs.includes(targetWinSignature)) {
      const replacement = "  },\r\n" + serializedData + "\r\n};";
      sourceJs = sourceJs.replace(targetWinSignature, replacement);
      fs.writeFileSync(translateHabitsPath, sourceJs, 'utf-8');
      console.log('✅ [성공] 구형 8종 번역 데이터가 translate_habits.js 에 성공적으로 합병되었습니다! (Windows LineEnding)');
    } else {
      console.error('❌ [오류] translate_habits.js 파일의 닫는 서명을 찾지 못했습니다.');
      process.exit(1);
    }
  }
}

run();
