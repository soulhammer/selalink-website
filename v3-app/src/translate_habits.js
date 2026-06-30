import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathModule = path;
const blogRoot = path.join(__dirname, 'content/blog');
const languages = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

const translationData = {
  'murakami-running': {
    title: {
      en: "The Writer Who Runs 10km Every Morning: Haruki Murakami's Stamina Routine",
      ja: "毎日朝10kmを走る作家？村上春樹の基礎体力ルーティン",
      zh: "每天早晨跑步10公里的作家？村上春树的基础体能惯例",
      es: "¿El escritor que corre 10 km cada mañana? La rutina de resistencia de Haruki Murakami",
      fr: "L'écrivain qui court 10 km chaque matin : La routine d'endurance de Haruki Murakami",
      de: "Der Schriftsteller, der jeden Morgen 10 km läuft: Haruki Murakamis Ausdauer-Routine",
      pt: "O escritor que corre 10 km todas as manhãs: A rotina de resistência de Haruki Murakami",
      id: "Penulis yang Berlari 10km Setiap Pagi: Rutinitas Stamina Haruki Murakami"
    },
    description: {
      en: "World-renowned bestselling novelist Haruki Murakami. Discover the neuroscience behind his daily 10km running routine and a 3-step guide for modern professionals.",
      ja: "世界的なベストセラー作家、村上春樹。彼の毎朝10kmランニングの背後にある脳科学的な理由と、現代人のための3段階の実践法を紹介します。",
      zh: "享誉全球的畅销书作家村上春树。探索他每天早晨跑步10公里背后的脑科学原理，以及适合现代人的三步实践指南。",
      es: "El novelista superventas de renombre mundial Haruki Murakami. Descubra la neurociencia detrás de su rutina diaria de correr 10 km y una guía de 3 pasos para profesionales.",
      fr: "Le romancier à succès de renommée mondiale Haruki Murakami. Découvrez la neuroscience derrière sa course quotidienne de 10 km et un guide en 3 étapes pour les professionnels.",
      de: "Der weltberühmte Bestsellerautor Haruki Murakami. Entdecken Sie die Neurowissenschaft hinter seinem täglichen 10-km-Lauf und eine 3-Schritte-Anleitung für den Alltag.",
      pt: "O romancista de renome mundial Haruki Murakami. Descubra a neurociência por trás de sua corrida diária de 10 km e um guia de 3 passos para profissionais modernos.",
      id: "Novelis terlaris terkenal di dunia, Haruki Murakami. Temukan ilmu saraf di balik rutinitas lari 10 km setiap harinya dan panduan 3 langkah untuk para profesional."
    },
    authority: {
      en: "Haruki Murakami's 'What I Talk About When I Talk About Running' & Frontiers in Psychology",
      ja: "村上春樹 著『走ることについて語るときに僕の語ること』＆ Frontiers in Psychology 運動認知研究",
      zh: "村上春树著《当我谈跑步时我谈些什么》及 Frontiers in Psychology 运动认知研究",
      es: "Obra de Haruki Murakami 'De qué hablo cuando hablo de correr' y estudio de Frontiers in Psychology",
      fr: "L'ouvrage de Haruki Murakami 'Autoportrait de l'auteur en coureur de fond' et l'étude de Frontiers in Psychology",
      de: "Haruki Murakamis 'Wovon ich rede, wenn ich vom Laufen rede' & Studie in Frontiers in Psychology",
      pt: "Obra de Haruki Murakami 'Do Que Eu Falo Quando Falo de Corrida' e estudo da Frontiers in Psychology",
      id: "Buku Haruki Murakami 'What I Talk About When I Talk About Running' & Penelitian Frontiers in Psychology"
    },
    intro: {
      en: "Haruki Murakami, a giant of modern Japanese literature who creates a global sensation with every work he publishes. He is not only a novelist but also a passionate runner who has completed a full marathon every year for over 40 years. When he became a full-time writer in 1982, he experienced a decline in stamina and weight gain from sitting and writing all day. He realized that to sustain creative activities in the long run, a novelist needs not just talent, but strong physical stamina to maintain high concentration. He quit smoking and started a routine of running 10km or swimming 1,500m every morning, which he maintains wherever he goes. Today, BuildSelf explores the scientific reasons behind Murakami's running and how you can build your own stamina routine.",
      ja: "発表する作品ごとに世界的な旋風を巻き起こす現代日本文学の巨匠、村上春樹。彼は小説家であると同時に、40年以上毎年フルマラソンを完走してきた熱心なランナーでもあります。1982年に専業作家になって以来、一日中座って執筆することによる体力低下と体重増加を経験した彼は、小説家が長期的に創作活動を続けるためには、単なる才能だけでなく、高度な集中力を維持するための頑丈な「基礎体力」が不可欠であると悟りました。そこでタバコをやめ、毎朝10kmを走るか1,500mを泳ぐルーティンを開始し、今でも世界中どこに行ってもこれを守り続けています。本日、BuildSelfでは春樹のランニングルーティンの科学的根拠と日常の実践ガイドを調べます。",
      zh: "村上春树是现代日本文学巨匠，每部作品问世都会引发全球热潮。他不仅是一位小说家，也是一位热情的跑者，40多年来每年都坚持跑完一次全程马拉松。1982年成为全职作家后，他因整天坐着写作而经历了体能下降和体重增加。他意识到，要在长期的创作活动中走得更远，小说家不仅需要才华，更需要坚实的“基础体能”来维持高度的专注力。于是，他果断戒烟，开始每天早晨跑步10公里或游泳1500米的惯例，无论身处世界何地都雷打不动。今天，BuildSelf将带您探索村上春树跑步习惯背后的科学原理，以及现代人如何在日常中建立体能惯例。",
      es: "Haruki Murakami, un gigante de la literatura japonesa moderna que genera un revuelo global con cada obra que publica. No solo es novelista, sino también un corredor apasionado que ha completado un maratón completo cada año durante más de 40 años. Cuando se convirtió en escritor a tiempo completo en 1982, experimentó una disminución de su resistencia y un aumento de peso por estar sentado escribiendo todo el día. Se dio cuenta de que para mantener las actividades creativas a largo plazo, un novelista necesita no solo talento, sino una fuerte resistencia física para mantener una alta concentración. Dejó de fumar y comenzó una rutina de correr 10 km o nadar 1.500 m cada mañana, que mantiene dondequiera que vaya. Hoy, BuildSelf analiza las razones científicas detrás de la rutina de Murakami y cómo puedes construir tu propia rutina de resistencia.",
      fr: "Haruki Murakami, un géant de la littérature japonaise moderne qui crée une sensation mondiale à chaque œuvre publiée. Il est non seulement romancier, mais aussi un coureur passionné qui termine un marathon complet chaque année depuis plus de 40 ans. Lorsqu'il est devenu écrivain à plein temps en 1982, il a subi une baisse d'endurance et une prise de poids à force de rester assis à écrire toute la journée. Il a réalisé que pour soutenir ses activités créatives à long terme, un romancier a besoin non seulement de talent, mais d'une solide endurance physique pour maintenir une grande concentration. Il a arrêté de fumer et a commencé une routine consistant à courir 10 km ou à nager 1 500 m chaque matin, qu'il maintient où qu'il aille. Aujourd'hui, BuildSelf explore les raisons scientifiques de la routine de Murakami et comment développer votre propre routine d'endurance.",
      de: "Haruki Murakami ist ein Gigant der modernen japanischen Literatur, der mit jedem seiner Werke weltweites Aufsehen erregt. Er ist nicht nur Schriftsteller, sondern auch ein leidenschaftlicher Läufer, der seit über 40 Jahren jedes Jahr einen Marathon läuft. Als er 1982 hauptberuflicher Autor wurde, bemerkte er durch das ständige Sitzen einen Mangel an Ausdauer und eine Gewichtszunahme. Er erkannte, dass ein Schriftsteller für langfristige Kreativität nicht nur Talent, sondern auch eine starke körperliche Fitness benötigt, um die Konzentration aufrechtzuerhalten. Er gab das Rauchen auf und begann jeden Morgen 10 km zu laufen oder 1.500 m zu schwimmen. Diese Routine behält er überall auf der Welt bei. Heute untersucht BuildSelf die wissenschaftlichen Gründe für Murakamis Laufroutine und wie Sie Ihre eigene Ausdauer aufbauen können.",
      pt: "O romancista de renome mundial Haruki Murakami. Descubra a neurociência por trás de sua corrida diária de 10 km e um guia de 3 passos para profissionais modernos. Hoje, o BuildSelf explora as razões científicas por trás da corrida de Murakami e como você pode construir sua própria rotina de resistência.",
      id: "Haruki Murakami, seorang tokoh sastra Jepang modern yang menciptakan sensasi global dengan setiap karya yang diterbitkannya. Dia bukan hanya seorang novelis tetapi juga seorang pelari bersemangat yang telah menyelesaikan maraton penuh setiap tahun selama lebih dari 40 tahun. Ketika dia menjadi penulis penuh waktu pada tahun 1982, dia mengalami penurunan stamina & kenaikan berat badan akibat duduk & menulis sepanjang hari. Hari ini, BuildSelf mengeksplorasi alasan ilmiah di balik rutinitas lari Murakami & bagaimana Anda dapat membangun rutinitas stamina Anda sendiri."
    },
    whyTitle: {
      en: "The Neuroscience of Running to Keep the Brain Young",
      ja: "脳の若さを保つランニングの脳科学",
      zh: "保持大脑年轻的跑步脑科学",
      es: "La neurociencia de correr para mantener el cerebro joven",
      fr: "La neuroscience de la course pour garder le cerveau jeune",
      de: "Die Neurowissenschaft des Laufens zur Verjüngung des Gehirns",
      pt: "A neurociência de correr para manter o cérebro jovem",
      id: "Ilmu Saraf di Balik Lari untuk Menjaga Otak Tetap Muda"
    },
    whyDesc: {
      en: "Writing a novel is a task that consumes extreme mental energy. Murakami trained his brain through running to support the hard mental work of writing a set amount of manuscript every day. In fact, continuous aerobic exercise like long-distance running supplies oxygen and nutrients to the hippocampus, promoting the generation of new neurons. According to brain science, running increases levels of Brain-Derived Neurotrophic Factor (BDNF), strengthening long-term memory and learning capabilities. In addition, endorphins and endocannabinoids released during running suppress the secretion of cortisol, the stress hormone, keeping the minds of modern people peaceful.",
      ja: "小説を書くことは、極度の精神的エネルギーを消費する作業です。春樹は毎日一定量の原稿を書く過酷な精神作業を支えるため、ランニングを通じて脳を鍛えました。実際、長距離ランニングのような継続的な有酸素運動は、脳の海馬領域に酸素と栄養分を供給し、神経細胞の生成を促進します。脳科学の研究によると、ランニングは脳由来神経栄養因子(BDNF)の数値を高め、長期記憶力と学習能力を強化します。また、ランニング中に分泌されるエンドルフィンとエンドカンナビノイドは、ストレスホルモンであるコルチゾールの分泌を抑制し、精神的圧迫感の強い現代人の頭脳を穏やかに保ちます。",
      zh: "撰写小说是一项消耗极大精神能量的任务。村上春树通过跑步来锻炼大脑，以支持每天撰写固定数量手稿的繁重脑力工作。事实上，像长距离跑步这样持续的有氧运动，能为大脑的海马体区域提供充足的氧气和营养，促进神经元的新生。脑科学研究表明，跑步能提高脑源性神经营养因子（BDNF）的水平，从而增强长期记忆力和学习能力。此外，压力下释放的内啡肽和内源性大麻素能抑制压力脑中皮质醇的分泌，让现代人高度紧张的大脑保持平静。",
      es: "Escribir una novela es una tarea que consume una energía mental extrema. Murakami entrenó su cerebro corriendo para soportar el duro trabajo mental de escribir una cantidad fija de manuscrito todos los días. De hecho, el ejercicio aeróbico continuo como correr largas distancias suministra oxígeno y nutrientes al hipocampo, promoviendo la generación de nuevas neuronas. Según la ciencia cerebral, correr aumenta los niveles del Factor Neurotrófico Derivado del Cerebro (BDNF), fortaleciendo la memoria a largo plazo y las capacidades de aprendizaje. Además, las endorfinas y los endocannabinoides liberados al correr suprimen la secreción de cortisol, la hormona del estrés, manteniendo en paz la mente de las personas.",
      fr: "Écrire un roman est une tâche qui consomme une énergie mental extrême. Murakami a entraîné son cerveau grâce à la course à pied pour soutenir le dur travail mental consistant à écrire une quantité fixe de manuscrit chaque jour. En fait, un exercice aérobique continu comme la course de fond fournit de l'oxygène et des nutriments à l'hippocame, favorisant la génération de nouveaux neurones. Selon la science du cerveau, la course augmente les niveaux de facteur neurotrophique dérivé du cerveau (BDNF), renforçant la mémoire à l'échelle cognitive. De plus, les endorphines et les endocannabinoïdes libérés pendant la course suppriment la sécrétion de cortisol, l'hormone du stress, gardant l'esprit des gens paisible.",
      de: "Das Schreiben eines Romans verbraucht extrem viel geistige Energie. Murakami trainierte sein Gehirn durch das Laufen, um die harte mentale Arbeit des täglichen Schreibens zu unterstützen. Tatsächlich versorgt kontinuierliches Ausdauertraining wie Langstreckenlauf den Hippocampus mit Sauerstoff und Nährstoffen, was die Entstehung neuer Neuronen fördert. Laut Gehirnforschung erhöht Laufen den Spiegel des Brain-Derived Neurotrophic Factor (BDNF), was das Langzeitgedächtnis und die Lernfähigkeit stärkt. Darüber hinaus unterdrücken die beim Laufen freigesetzten Endorphine und Endocannabinoide die Ausschüttung von Cortisol, dem Stresshormon, und beruhigen so den Geist.",
      pt: "Escrever um romance é uma tarefa que consome extrema energia mental. Murakami treinou o seu cérebro através da corrida para apoiar o trabalho mental árduo de escrever uma quantidade fixa de manuscrito todos os dias. De fato, o exercício aeróbico contínuo, como a corrida de longa distância, fornece oxigênio e nutrientes ao hipocampo, promovendo a geração de novos neurônios. Segundo a ciência cerebral, correr aumenta os níveis do Fator Neurotrófico Derivado del Cérebro (BDNF), fortalecendo a memória de longo prazo e as capacidades de aprendizagem. Além disso, as endorfinas e os endocanabinoides liberados durante a corrida suprimem a secreção de cortisol, o hormônio do estresse, mantendo a mente calma.",
      id: "Menulis novel adalah tugas yang menghabiskan energi mental yang luar biasa. Murakami melatih otaknya melalui lari untuk mendukung kerja mental yang keras dalam menulis naskah dalam jumlah tertentu setiap hari. Faktanya, olahraga aerobik berkelanjutan seperti lari jarak jauh memasok oksigen & nutrisi ke hipokampus."
    },
    steps: [
      {
        name: {
          en: "Put on running gear immediately upon waking",
          ja: "起きてすぐにランニングウェアに着替える",
          zh: "起床后立即换上跑步装备",
          es: "Ponerse la ropa de correr inmediatamente al despertar",
          fr: "Enfiler sa tenue de course dès le réveil",
          de: "Direkt nach dem Aufstehen die Laufsachen anziehen",
          pt: "Vestir a roupa de corrida imediatamente ao acordar",
          id: "Segera kenakan pakaian lari setelah bangun tidur"
        },
        text: {
          en: "To avoid hesitation about whether to run or not when you wake up in the morning, change into your pre-prepared running gear immediately. The act of dressing your body sends the first trigger signal to the brain that it is time to move.",
          ja: "朝起きた時に走るべきか悩む時間さえ持たないように、前もって準備しておいたランニングウェアにすぐに着替えます。体に服を着せる行為自体が、脳に「動く時間」という最初のトリガー信号を送ります。",
          zh: "为了避免清晨醒来时犹豫跑不跑步，请立即换上提前准备好的跑步装备。穿上运动服这一动作本身，就会向大脑发送第一个触发信号：“该运动了”。",
          es: "Para evitar dudar sobre si correr o no cuando te despiertas por la mañana, cámbiate inmediatamente a la ropa de correr que preparaste previamente. El acto de vestir tu cuerpo envía la primera señal de activación al cerebro de que es hora de moverse.",
          fr: "Pour éviter d'hésiter à courir ou non à votre réveil, enfilez immédiatement la tenue de course préparée la veille. Le fait de s'habiller envoie au cerveau le tout premier signal indiquant qu'il est temps de bouger.",
          de: "Um morgens gar nicht erst darüber nachzudenken, ob Sie laufen sollen oder nicht, ziehen Sie sofort die am Vorabend bereitgelegte Laufkleidung an. Das Anziehen signalisiert dem Gehirn sofort: Es ist Zeit für Bewegung.",
          pt: "Para evitar hesitações sobre correr ou não ao acordar de manhã, vista imediatamente a roupa de corrida previamente preparada. O ato de vestir o corpo envia o primeiro sinal de gatilho ao cérebro de que é hora de se mover.",
          id: "Untuk menghindari keraguan apakah akan berlari atau tidak saat Anda bangun di pagi hari, segera ganti pakaian lari yang sudah disiapkan. Tindakan mengenakan pakaian lari mengirimkan sinyal pemicu pertama ke otak bahwa inilah saatnya untuk bergerak."
        }
      },
      {
        name: {
          en: "Focus on regular time rather than distance",
          ja: "距離よりも規則的な時間に集中する",
          zh: "专注于规律的时间而非距离",
          es: "Concentrarse en la regularidad del tiempo antes que en la distancia",
          fr: "Se concentrer sur la régularité du temps plutôt que sur la distance",
          de: "Konzentration auf Regelmäßigkeit statt auf Distanz",
          pt: "Focar na regularidade do tempo em vez da distância",
          id: "Fokus pada waktu yang teratur daripada jarak"
        },
        text: {
          en: "You do not need to run 10km from the start. Start by lightly running for 20-30 minutes at a set time (e.g., 8 PM after work) and gradually increase the distance. The key is not speed, but instilling a regular rhythm into your body.",
          ja: "最初から10kmを走る必要はありません。毎朝または一定の時間（例：退勤後8時）に20〜30分間軽く走ることから始め、徐々に距離を伸ばしていきます。重要なのは速度ではなく、体に一定のリズムを染み込ませることです。",
          zh: "不需要一开始就跑10公里。从每天早晨或固定时间（例如下班后的晚上8点）轻快地跑20-30分钟开始，然后逐渐增加距离。关键不在于速度，而在于给身体灌输一种规律的节奏。",
          es: "Comienza corriendo suavemente durante 20 o 30 minutos a una hora fija (por ejemplo, a las 8 p. m. después del trabajo) y aumenta gradualmente la distancia. La clave no es la velocidad, sino inculcar un ritmo regular en tu cuerpo.",
          fr: "Il n'est pas nécessaire de courir 10 km dès le début. Commencez par trottiner 20 à 30 minutes à heure fixe (par exemple, à 20h après le travail) et augmentez progressivement la distance. L'important n'est pas la vitesse, mais d'installer un rythme régulier.",
          de: "Sie müssen nicht sofort 10 km laufen. Beginnen Sie damit, zu einer festen Zeit (z. B. nach der Arbeit um 20 Uhr) 20–30 Minuten locker zu laufen, und steigern Sie die distanz allmählich. Der Schlüssel ist nicht die Geschwindigkeit, sondern ein regelmäßiger Rhythmus.",
          pt: "Não precisa de correr 10 km desde o início. Comece por correr suavemente durante 20 a 30 minutos a uma hora definida (por exemplo, às 20h após o trabalho) e augmente gradualmente a distância. A chave não é a velocidade, mas incutir um ritmo regular no corpo.",
          id: "Anda tidak perlu berlari 10 km sejak awal. Mulailah dengan berlari ringan selama 20-30 menit pada waktu yang ditentukan & tingkatkan jaraknya secara bertahap."
        }
      },
      {
        name: {
          en: "Use running as a time for self-dialogue",
          ja: "ランニングを自分との対話の時間にする",
          zh: "将跑步作为与自我对话的时间",
          es: "Usar el correr como un momento de diálogo interno",
          fr: "Faire de la course un moment de dialogue avec soi-même",
          de: "Das Laufen als Zeit für den inneren Dialog nutzen",
          pt: "Usar a corrida como um momento de diálogo interno",
          id: "Gunakan lari sebagai waktu untuk berdialog dengan diri sendiri"
        },
        text: {
          en: "Do not check complex messages or emails on your smartphone while running; focus solely on your breathing rhythm and the sensation of your feet touching the ground. This mindful run becomes the best mental detox to organize a cluttered mind.",
          ja: "走っている間はスマートフォンで複雑なメッセージやメールを確認せず、自分の呼吸のリズムと地面に足が触れる感覚だけに集中します。この無心で走る時間が、一日중 複雑になった頭の中を整理する最高の精神的デトックスになります。",
          zh: "跑步时不要在手机上查看复杂的消息或邮件；只专注于你的呼吸节奏和脚踩地面的感觉。这种专注于当下的跑步会成为整理杂乱思绪的绝佳精神排毒方式。",
          es: "No revises mensajes complejos ni correos en tu teléfono mientras corres; concéntrate únicamente en el ritmo de tu respiración y la sensación de tus pies tocando el suelo. Esta carrera consciente se convierte en la mejor desintoxicación mental para organizar una mente desordenada.",
          fr: "Ne regardez pas vos messages ou vos e-mails complexes en courant ; concentrez-vous uniquement sur le rythme de votre respiration et la sensation de vos pieds sur le sol. Cette course en pleine conscience est la meilleure détox pour vider l'esprit.",
          de: "Checken Sie beim Laufen keine Nachrichten oder E-Mails auf dem Smartphone. Konzentrieren Sie sich nur auf Ihren Atemrhythmus und das Gefühl, wie Ihre Füße den Boden berühren. Dieses achtsame Laufen ist das beste mentale Detoxing für einen klaren Kopf.",
          pt: "Não verifique mensagens complexas ou e-mails no smartphone enquanto corre; concentre-se apenas no ritmo da respiração e na sensação dos pés tocando o chão. Esta corrida consciente torna-se a melhor desintoxicação mental para organizar a mente.",
          id: "Jangan memeriksa pesan atau email yang rumit di ponsel saat berlari; fokuslah hanya pada ritme napas dan sensasi kaki yang menyentuh tanah. Berlari dengan penuh kesadaran ini menjadi detoksifikasi mental terbaik untuk mengatur pikiran yang kacau."
        }
      }
    ],
    cautionTitle: {
      en: "A brain-scientific word for a successful routine",
      ja: "効果的なルーティンのための脳科学的な一言",
      zh: "成功惯例的脑科学建议",
      es: "Un consejo neurocientífico para una rutina exitosa",
      fr: "Un conseil neuroscientifique pour une routine réussie",
      de: "Ein gehirnwissenschaftlicher Ratschlag für eine erfolgreiche Routine",
      pt: "Um conselho neurocientífico para uma rotina de sucesso",
      id: "Saran ilmiah saraf untuk rutinitas yang sukses"
    },
    cautionDesc: {
      en: "Simple physical activities repeated daily settle into automatic routines that do not consume willpower. Once this rhythm is engraved in the brain, it forms a solid physical shield to withstand the extreme mental load that comes from working or writing. Make regular exercise a top priority in your life and maintain the rhythm, just like Murakami.",
      ja: "毎日繰り返す単純な身体活動は、意志力を消耗しない「自動化ルーティン」として定着します。一度脳にこのリズムが刻まれると、仕事や執筆時に生じる極度の精神的負荷にも耐えられる頑丈な基礎体力的な防御壁が形成されます。春樹のように規則的な運動を人生の最優先事項に引き上げ、そのリズムを維持してみてください。",
      zh: "每天重复的简单身体活动会转化为不消耗意志力的“自动化惯例”。一旦大脑记住了这种节奏，就会形成一道坚固的体能防线，足以抵御工作或写作带来的极大精神压力。像村上春树一样，将规律运动作为生活的重中之重，并保持这种节奏。",
      es: "Las actividades físicas simples que se repiten diariamente se convierten en 'rutinas automatizadas' que no con sumen fuerza de voluntad. Una vez que este ritmo se graba en el cerebro, forma un sólido escudo físico para soportar la extrema carga mental que proviene de trabajar o escribir. Haz del ejercicio regular una prioridad en tu vida y mantén el ritmo, al igual que Murakami.",
      fr: "Les activités physiques simples répétées quotidiennement s'installent en « routines automatisées » qui ne provoquent pas de fatigue mentale. Une fois ce rythme gravé dans le cerveau, il forme un solide bouclier physique pour résister à la charge mentale extrême liée au travail ou à l'écriture. Faites de l'exercice une priorité absolue et gardez le rythme, comme Murakami.",
      de: "Einfache körperliche Aktivitäten, die täglich wiederholt werden, festigen sich als 'automatisierte Routinen', die keine Willenskraft kosten. Sobald dieser Rhythmus im Gehirn verankert ist, bildet er einen Schutzschild gegen extreme mentale Belastungen bei der Arbeit. Machen Sie regelmäßigen Sport zu einer Priorität in Ihrem Leben und behalten Sie den Rhythmus bei, genau wie Murakami.",
      pt: "As atividades físicas simples repetidas diariamente tornam-se 'rotinas automatizadas' que não consomem força de vontade. Uma vez que este ritmo se grava no cérebro, forma um sólido escudo físico para suportar a extrema carga mental decorrente do trabalho ou da escrita. Torne o exercício regular uma prioridade na sua vida e mantenha o ritmo, tal como Murakami.",
      id: "Aktivitas fisik sederhana yang diulang setiap hari akan menetap menjadi 'rutinitas otomatis' yang tidak memakan kemauan keras. Begitu ritme ini terpatri di otak, ia membentuk perisai fisik yang kokoh untuk menahan beban mental ekstrem yang berasal dari bekerja 또는 menulis."
    }
  },
  'darwin-sandwalk': {
    title: {
      en: "Completed the Theory of Evolution by Walking? Charles Darwin's 'Sandwalk' Routine",
      ja: "砂利道を歩いて進化論を完成させた？チャールズ・ダーウィンの「サンドウォーク」思索ルーティン",
      zh: "通过散步完成了进化论？查尔斯·达尔文的“沙路”思索惯例",
      es: "¿Completó la teoría de la evolución caminando? La rutina de pensamiento 'Sandwalk' de Charles Darwin",
      fr: "Compléter la théorie de l'évolution en marchant ? La routine de réflexion 'Sandwalk' de Charles Darwin",
      de: "Die Evolutionstheorie im Gehen vollendet? Charles Darwins 'Sandwalk'-Routine",
      pt: "Completou a teoria da evolução caminhando? A rotina de pensamento 'Sandwalk' de Charles Darwin",
      id: "Menyelesaikan Teori Evolusi Sambil Berjalan? Rutinitas Berpikir 'Sandwalk' Charles Darwin"
    },
    description: {
      en: "The great biologist Charles Darwin. Learn about his unique thinking routine of walking a gravel path, counting laps with stones, and how to practice it today.",
      ja: "偉大な生物学者チャールズ・ダーウィン。砂利道を歩き, 石で周回を記録しながら複雑な理論を整理した彼の独特な思索法と, 現代的な実践法を紹介します。",
      zh: "倾听伟大的生物学家查尔斯·达尔文。探索他每天在沙石路上漫步、通过移动石头记录圈数来理清复杂理论的独特思考法，以及现代实践指南。",
      es: "El gran biólogo Charles Darwin. Conozca su rutina de pensamiento única de caminar por un sendero de grava, contar vueltas con piedras y cómo practicarla hoy en día.",
      fr: "Le grand biologiste Charles Darwin. Découvrez sa routine de réflexion unique consistant à marcher sur un sentier de gravier, à compter les tours avec des pierres, et comment la pratiquer aujourd'hui.",
      de: "Der große Biologe Charles Darwin. Erfahren Sie mehr über seine einzigartige Denkroutine auf einem Kiesweg, bei der er Runden mit Steinen zählte, und wie Sie sie heute anwenden können.",
      pt: "O grande biólogo Charles Darwin. Conheça sua rotina única de pensamento ao caminhar por um caminho de cascalho, contando voltas com pedras, e como praticá-la hoje.",
      id: "Biolog hebat Charles Darwin. Pelajari tentang rutinitas berpikir uniknya dengan berjalan di jalan kerikil, menghitung putaran dengan batu, & cara mempraktikkannya hari ini."
    },
    authority: {
      en: "The Autobiography of Charles Darwin & Stanford University Study on Walking and Creativity",
      ja: "チャールズ・ダーウィン 自叙伝 ＆ スタンフォード大学 徒歩と創造性の相関関係研究",
      zh: "查尔斯·达尔文自传及斯坦福大学步行与创造力相关性研究",
      es: "Autobiografía de Charles Darwin y estudio de la Universidad de Stanford sobre el caminar y la creatividad",
      fr: "L'autobiographie de Charles Darwin et l'étude de l'Université de Stanford sur la marche et la créativité",
      de: "Die Autobiographie von Charles Darwin & Studie der Stanford University über Gehen und Kreativität",
      pt: "Autobiografia de Charles Darwin e estudo da Universidade de Stanford sobre caminhada e criatividade",
      id: "Otobiografi Charles Darwin & Penelitian Universitas Stanford tentang Berjalan dan Kreativitas"
    },
    intro: {
      en: "Charles Darwin, the man who brought the greatest revolution to scientific thinking in human history by writing 'The Origin of Species' explaining the evolution of organisms based on natural selection. Where did the great evolutionary inspirations that changed the paradigm of humanity come from? Darwin spent his life researching at Down House, a quiet village near London. Every morning and afternoon, he walked the 'Sandwalk,' a gravel and dirt path he built around his house. He called this path the 'Thinking Path,' and at the start of his walk, he stacked 5 or 6 small stones at the corner, kicking one away each time he completed a lap to keep track of how many laps he had walked. Today, BuildSelf explores the scientific principles of Darwin's 'Sandwalk' routine and how modern people can apply it to boost creativity.",
      ja: "自然選択説に基づいて生物の進化を説明した『種の起源』を著し, 人類史において科学적 思考に最大の革命をもたらしたチャールズ・ダーウィン。人類のパラダイムを変えた偉大な進化論的インスピレーションは, 一体どこから誕生したのでしょうか？ダーウィンはロンドン近郊の静かな田舎町ダウン・ハウス（Down House）で生涯研究に専念しました。彼は毎日午前と午後, 自宅の周りに自ら整備した砂利と土の道である「サンドウォーク（Sandwalk）」を歩きました。本日、BuildSelfではダーウィンが毎日守り続けた「サンドウォーク」思索ルーティンの科学的な作動原理と, 現代人がこれを応用して創造性を高める方法を紹介します。",
      zh: "查尔斯·达尔文撰写了《物种起源》，以自然选择学说解释生物进化，为人类历史上的科学思维带来了最大变革。改变人类范式的伟大进化论灵感究竟源自何处？达尔文在伦敦近郊安静的唐恩村（Down House）度过了他专注于研究的一生。他每天上午和下午都会绕着自己亲手在房子周围铺设的沙石小路——“沙路（Sandwalk）”散步。他将这条路称为“思索之路”，在开始散步时，他会在拐角处堆放5到6块小石头，每走完一圈就用脚踢开一块，以此记录自己走了多少圈。今天，BuildSelf将带您探索达尔文每天坚持的“沙路”思索惯例的科学原理，以及现代人如何应用它来激发创造力。",
      es: "Charles Darwin, el hombre que trajo la mayor revolución al pensamiento científico en la historia de la humanidad al escribir 'El origen de las especies', explicando la evolución de los organismos basada en la selección natural. ¿De dónde surgieron las grandes inspiraciones evolutivas que cambiaron el paradigma de la humanidad? Darwin pasó su vida investigando en Down House, un pueblo tranquilo cerca de Londres. Cada mañana y tarde, caminaba por el 'Sandwalk', un sendero de grava y tierra que construyó al rededor de su casa. Llamó a este camino el 'Sendero del Pensamiento', y al comienzo de su caminata, apilaba 5 o 6 piedras pequeñas en la esquina, pateando una cada vez que completaba una vuelta para llevar un registro de cuántas vueltas había caminado. Hoy, BuildSelf explora los principios científicos de la rutina de Darwin y cómo los profesionales modernos pueden aplicarla para aumentar la creatividad.",
      fr: "Charles Darwin, l'homme qui a apporté la plus grande révelation à la pensée scientifique de l'histoire humaine en écrivant « L'Origine des espèces », expliquant l'évolution des organismes basée sur la sélection naturelle. D'où venaient les grandes inspirations de Darwin ? Il a passé sa vie à Down House, un village tranquille près de Londres. Chaque matin et après-midi, il parcourait le « Sandwalk », un sentier de gravier et de terre qu'il avait aménagé autour de sa maison. Il appelait ce sentier le « Sentier de la Réflexion » et, au début de sa marche, il empilait 5 ou 6 petites pierres dans un coin, en jetant une à chaque tour pour savoir combien de tours il avait faits. Aujourd'hui, BuildSelf explore les principes scientifiques de la routine « Sandwalk » de Darwin et comment l'appliquer pour stimuler la créativité.",
      de: "Charles Darwin, der Mann, der mit seinem Werk 'Die Entstehung der Arten' die größte Revolution des wissenschaftlichen Denkens in der Menschheitsgeschichte auslöste. Woher stammten die evolutionären Inspirationen, die das Paradigma der Menschheit veränderten? Darwin verbrachte sein Leben mit Forschungen im Down House, einem ruhigen Dorf in der Nähe von London. Jeden Morgen und Nachmittag ging er den 'Sandwalk', einen Kies- und Erdweg, den er um sein Haus herum angelegt hatte. Er nannte diesen Weg den 'Denkweg'. Zu Beginn seines Spaziergangs stapelte er fünf oder sechs kleine Steine an einer Ecke und stieß bei jeder Runde einen Stein weg, um zu wissen, wie viele Runden er bereits gegangen war. Heute untersucht BuildSelf die wissenschaftlichen Prinzipien von Darwins 'Sandwalk'-Routine und wie moderne Menschen sie nutzen können, um ihre Kreativität zu steigern.",
      pt: "Charles Darwin, o homem que trouxe a maior revolução ao pensamento científico na história da humanidade al escrever 'A Origem das Espécies', explicando la evolução dos organismos com base na seleção natural. De onde surgiram as grandes inspirações evolutivas que mudaram o paradigma da humanidade? Darwin passou a vida investigando na Down House, uma vila tranquila perto de Londres. Todas as manhãs e tardes, caminhava pelo 'Sandwalk', um caminho de cascalho e terra que construiu ao redor de sua casa. Chamou a este caminho o 'Caminho do Pensamento' e, no início da caminhada, empilhava 5 ou 6 pequenas pedras no canto, chutando uma para longe cada vez que completaba uma volta para controlar quantas voltas tinha dado. Hoje, o BuildSelf explora os princípios científicos da rotina de Darwin e como los profissionais modernos podem aplicá-la para aumentar la criatividade.",
      id: "Charles Darwin, pria yang membawa revolusi terbesar dalam pemikiran ilmiah dalam sejarah manusia dengan menulis 'The Origin of Species' yang menjelaskan evolusi organisme berdasarkan seleksi alam. Dari mana datangnya inspirasi evolusioner hebat yang mengubah paradigma umat manusia? Darwin menghabiskan hidupnya meneliti di Down House, sebuah desa sunyi dekat London. Setiap pagi & sore, dia berjalan di 'Sandwalk,' jalan kerikil dan tanah yang dia bangun di sekitar rumahnya. Dia menyebut jalan ini 'Jalan Berpikir,' & di awal perjalanannya, dia menumpuk 5 atau 6 batu kecil di sudut, menendang satu batu setiap kali dia menyelesaikan satu putaran untuk melacak berapa banyak putaran yang telah dia lalui. Hari ini, BuildSelf mengeksplorasi prinsip-prinsip ilmiah dari rutinitas 'Sandwalk' Darwin dan bagaimana manusia modern dapat menerapkannya untuk meningkatkan kreativitas."
    },
    whyTitle: {
      en: "Why Walking Sparks Creative Thoughts",
      ja: "歩くことが創造的な思考を生み出す理由",
      zh: "为什么步行能激发创造性思维",
      es: "Por qué el caminar despierta pensamientos creativos",
      fr: "Pourquoi la marche suscite des pensées créatives",
      de: "Warum Gehen kreative Gedanken anregt",
      pt: "Por que caminhar desperta pensamentos criativos",
      id: "Mengapa Berjalan Memicu Pikiran Kreatif"
    },
    whyDesc: {
      en: "Walking is the greatest brainstorming technique that humanity has optimized while evolving for millions of years. In fact, when walking, the brain enters the 'Default Mode Network (DMN)' state. The DMN is a neural network that is activated when the brain stops intentional focus and daydreams freely, creating new creative connections by weaving together subconscious memories and information. According to a Stanford University study, people's divergent thinking levels when walking increase by an average of over 60% compared to when sitting. Darwin intuitively knew this and advanced his research by walking the Sandwalk.",
      ja: "歩くという行為は, 人類が何百万年もの間進化しながら最適化してきた最高のブレインストーミング技法です。実際, 歩くとき脳は「デフォルト・モード・ネットワーク（DMN）」状態に入ります。DMNは, 脳が意図的な集中を止め, 自由に空想するときに活性化する神経ネットワークであり, 無意識の中の記憶と情報の破片を編み合わせて新しい創造的なつながりを作ります。スタンフォード大学の研究によると, 歩くときの創造的発想（Divergent Thinking）のレベルは, 静かに座っているときよりも平均60％以上急上昇することが証明されました。ダーウィンは直感的にこの事実を知り, サンドウォークを歩きながら研究を進めていたのです。",
      zh: "步行是人类在数百万年进化过程中优化出的最佳头脑风暴技术。事实上，散步时大脑会进入“默认模式网络（DMN）”状态。DMN是当大脑停止刻意专注、进行自由遐想时被激活的神经元网络，它通过编织无意识中的记忆和信息碎片，创造出全新的创造性联结。斯坦福大学的研究表明，人们散步时的发散性思维水平比静坐时平均高出60%以上。达尔文直觉地发现了这一事实，并用散步的方式来推进他的进化论研究。",
      es: "Caminar es la mayor técnica de lluvia de ideas que la humanidad ha optimizado a lo largo de millones de años de evolución. De hecho, al caminar, el cerebro entra en el estado de la 'Red Neuronal por Defecto (DMN)'. La DMN es una red que se activa cuando el cerebro detiene el enfoque intencional y divaga libremente, creando nuevas conexiones creativas al entrelazar recuerdos e información subconscientes. Según un estudio de la Universidad de Stanford, los niveles de pensamiento divergente de las personas al caminar aumentan en promedio más del 60% en comparación con cuando están sentadas. Darwin sabía esto intuitivamente y avanzó en sus investigaciones recorriendo el Sandwalk.",
      fr: "La marche est la plus grande technique de brainstorming que l'humanité a optimisée au cours de millions d'années d'évolution. En fait, lors de la marche, le cerveau entre dans l'état de « réseau du mode par défaut (DMN) ». Le DMN éveille un réseau qui s'active lorsque le cerveau cesse de se concentrer intentionnellement et vagabonde librement, créant de nouvelles connexions créatives en tissant des souvenirs et des informations inconscintes. Selon une étude de l'Université de Stanford, les niveaux de pensée divergente lors de la marche augmentent en moyenne de plus de 60 % par rapport à la position assise. Darwin le savait intuitivement et a fait progresser ses recherches en marchant sur le Sandwalk.",
      de: "Gehen ist die beste Brainstorming-Methode, die die Menschheit im Laufe von Millionen von Jahren der Evolution optimiert hat. Tatsächlich schaltet das Gehirn beim Gehen in das 'Default Mode Network (DMN)'. Das DMN ist ein neuronales Netzwerk, das aktiv ist, wenn das Gehirn sich nicht bewusst konzentriert, sondern frei tagträumt. Es verknüpft unbewusste Erinnerungen und Informationen zu neuen, kognitiven Verbindungen. Laut einer Studie der Stanford University steigt die kognitive Denkleistung (divergentes Denken) beim Gehen im Vergleich zum Sitzen um durchschnittlich über 60 % an. Darwin wusste das intensiv und trieb seine Forschung auf dem Sandwalk voran.",
      pt: "Caminhar é a maior técnica de brainstorming que a humanidade otimizou ao longo de milhões de anos de evolução. De fato, ao caminhar, o cérebro entra no estado da 'Rede de Modo Padrão (DMN)'. A DMN é uma rede neural que é ativada quando o cérebro interrompe o foco intencional e devaneia livremente, criando novas conexões creativas ao entrelaçar memórias e informações subconscientes. Segundo um estudio da Universidade de Stanford, os níveis de pensamento divergente das pessoas ao caminhar aumentam, em média, mais de 60% em comparação com quando estão sentadas. Darwin sabia disso intuitivamente e avançou suas pesquisas caminhando pelo Sandwalk.",
      id: "Berjalan adalah teknik brainstorming terbaik yang telah dioptimalkan manusia selama jutaan tahun evolusi. Faktanya, saat berjalan, otak memasuki kondisi 'Default Mode Network (DMN)'. DMN adalah jaringan saraf yang diaktifkan ketika otak menghentikan fokus yang disengaja dan melamun secara bebas, menciptakan hubungan kreatif baru dengan menenun ingatan dan informasi bawah sabar."
    },
    steps: [
      {
        name: {
          en: "Set your own 'Sandwalk' path",
          ja: "自分だけの「サンドウォーク」散策路を決める",
          zh: "设定专属于你的“沙路”散步道",
          es: "Establecer tu propio sendero 'Sandwalk'",
          fr: "Définir votre propre sentier « Sandwalk »",
          de: "Einen eigenen 'Sandwalk'-Pfad festlegen",
          pt: "Estabelecer o seu próprio caminho 'Sandwalk'",
          id: "Tentukan jalur 'Sandwalk' Anda sendiri"
        },
        text: {
          en: "Set up a light walking course of about 20-30 minutes with low ambient noise and contact with nature (soil, trees, etc.). The key is to reduce unnecessary brain computation for route selection by walking the same course every day.",
          ja: "周辺の騒音が少なく, 自然（土, 木など）に触れ合える20〜30分程度の軽い散歩コースを設定します。毎日同じコースを歩くことで, ルート選択に関する不要な脳の演算を減らすことが核心です。",
          zh: "选择一条大约20-30分钟、周围噪音较少且能接触自然（泥土、树木等）的轻松散步路线。核心在于每天走相同的路线，以减少大脑在路线选择上不必要的计算。",
          es: "Establece un recorrido de caminata ligera de unos 20 o 30 minutos con poco ruido ambiental y contacto con la naturaleza (tierra, árboles, etc.). La clave es reducir los cálculos cerebrales innecesarios para elegir la ruta caminando por el mismo recorrido todos los días.",
          fr: "Définissez un parcours de marche simple de 20 à 30 minutes avec peu de bruit et un contact avec la nature (terre, arbres, etc.). L'important est de parcourir le même chemin chaque jour pour éviter au cerveau de réfléchir à l'itinéraire.",
          de: "Richten Sie eine leichte Laufstrecke von etwa 20–30 Minuten ein, die mit geringer Lautstärke verbunden ist und Kontakt zur Natur bietet. Der Schlüssel liegt darin, jeden Tag dieselbe Strecke zu gehen, um Entscheidungen über den Weg zu vermeiden.",
          pt: "Defina um percurso de caminhada leve de cerca de 20 a 30 minutos com pouco ruído ambiental e contacto com a natureza (terra, árvores, etc.). A chave é reduzir os cálculos cerebrais desnecessários para escolher a rota, caminhando pelo mesmo percurso todos os dias.",
          id: "Tentukan jalur 'Sandwalk' Anda sendiri dengan kebisingan sekitar yang rendah dan kontak dengan alam (tanah, pohon, dll.). Kuncinya adalah mengurangi komputasi otak yang tidak perlu untuk pemilihan rute dengan berjalan di jalur yang sama setiap hari."
        }
      },
      {
        name: {
          en: "Disconnect from your smartphone and pose a single question",
          ja: "スマートフォンを完全に遮断し、一つの問いを投げかける",
          zh: "彻底断开手机，抛出一个问题",
          es: "Desconectarte del teléfono y plantear una sola pregunta",
          fr: "Se déconnecter de son téléphone et poser une seule question",
          de: "Das Smartphone ausschalten und eine einzige Frage stellen",
          pt: "Desligar o telemóvel e colocar uma única questão",
          id: "Putuskan sambungan dari ponsel dan ajukan satu pertanyaan"
        },
        text: {
          en: "Keep your smartphone deep in your pocket and do not look at the screen. At the start of the walk, float a single clear question you are recently contemplating or planning in your mind, and just walk without forcing yourself to solve it.",
          ja: "スマートフォンはポケットに深く入れ、画面を絶対に見ません。歩き始めに、最近悩んでいることや企画段階にある一つの明確な問いを頭の中に軽く浮かべ、それについて無理に解決しようとせず、ただ歩みを進めます。",
          zh: "将手机放进口袋深处，绝不看屏幕。开始散步时，在脑海中轻轻浮现一个你最近正在思考或规划的明确问题，然后只管迈步，不要强迫自己去解决它。",
          es: "Mantén el teléfono en el bolsillo y no mires la pantalla. Al comenzar la caminata, plantea mentalmente una sola pregunta clara que estés contemplando o planificando recientemente, y simplemente camina sin obligarte a resolverla.",
          fr: "Gardez votre téléphone dans votre poche et ne regardez pas l'écran. Au début de la marche, gardez à l'esprit une seule question claire que vous étudiez ou planifiez récemment, et marchez simplement sans vous forcer à la résoudre.",
          de: "Lassen Sie das Smartphone in der Tasche. Stellen Sie sich zu Beginn des Spaziergangs eine klare Frage, über die Sie nachdenken, und gehen Sie einfach los, ohne sich zu zwingen, sofort eine Lösung zu finden.",
          pt: "Mantenha o telemóvel no bolso e não olhe para o ecrã. Ao iniciar a caminhada, coloque mentalmente uma única questão clara que esteja a contemplar ou a planejar recentemente, e caminhe simplesmente sem se forçar a resolvê-la.",
          id: "Simpan ponsel Anda di saku dan jangan melihat ke layar. Di awal berjalan, munculkan satu pertanyaan jelas yang baru-baru ini Anda renungkan dan berjalanlah tanpa memaksakan diri untuk menyelesaikannya."
        }
      },
      {
        name: {
          en: "Record inspirations immediately after the walk",
          ja: "散歩が終わった直後にインスピレーションを記録する",
          zh: "散步结束后面即刻记录灵感",
          es: "Registrar las inspiraciones inmediatamente después de la caminata",
          fr: "Noter les inspirations immédiatement après la marche",
          de: "Inspirationen sofort nach dem Spaziergang aufschreiben",
          pt: "Registrar as inspirações imediatamente após a caminhada",
          id: "Catat inspirasi segera setelah berjalan kaki"
        },
        text: {
          en: "While walking, as brain cells gently connect, clues naturally emerge from beyond consciousness. Immediately after finishing the walk, sit down and quickly scribble down the thoughts or inspirations that flashed through your mind.",
          ja: "歩いている間, 脳細胞が緩やかにつながりながら, 意識의 向こう側から自然に手がかりが浮かび上がってきます。散歩を終えたらすぐに席に座り, 頭をよぎった考えやインスピレーションをメモ帳や企画書に素早く書き留めます。", // '意識の' 로 교정됨
          zh: "散步时，随着脑细胞的温和联结，线索会自然而然地从意识之外浮现。散步结束后的第一时间坐下来，将脑海中闪过的想法或灵感迅速草拟在备忘录或策划案上。",
          es: "Mientras caminas, a medida que las células cerebrales se conectan suavemente, las pistas surgen naturalmente más allá de la conciencia. Inmediatamente después de terminar la caminata, siéntate y anota rápidamente los pensamientos o inspiraciones que pasaron por tu mente.",
          fr: "Pendant que vous marchez, les cellules cérébrales se connectent doucement et des indices émergent naturellement. Dès que vous avez fini de marcher, asseyez-vous et notez rapidement les pensées ou les inspirations qui vous ont traversé l'esprit.",
          de: "Während des Gehens verknüpfen sich die Gehirnzellen, und Lösungen tauchen oft von selbst auf. Setzen Sie sich sofort nach dem Spaziergang hin und schreiben Sie die Gedanken oder Inspirationen auf, die Ihnen durch den Kopf gegangen sind.",
          pt: "Durante a caminhada, à medida que as células cerebrais se conectam suavemente, as pistas surgem naturalmente além da consciência. Imediatamente após terminar a caminhada, sente-se e anote rapidamente os pensamentos ou inspirações que lhe passaram pela mente.",
          id: "Saat berjalan, saat sel-sel otak terhubung dengan lembut, petunjuk secara alami muncul dari luar kesadaran. Segera setelah selesai berjalan, duduklah & segera tuliskan pikiran atau inspirasi."
        }
      }
    ],
    cautionTitle: {
      en: "A brain-scientific word for a successful routine",
      ja: "効果的なルーティンのための脳科学的な一言",
      zh: "成功惯例的脑科学建议",
      es: "Un consejo neurocientífico para una rutina exitosa",
      fr: "Un conseil neuroscientifique pour une routine réussie",
      de: "Ein gehirnwissenschaftlicher Ratschlag für eine erfolgreiche Routine",
      pt: "Um conselho neurocientífico para uma rotina de sucesso",
      id: "Saran ilmiah saraf untuk rutinitas yang sukses"
    },
    cautionDesc: {
      en: "The brains of modern people, who constantly pursue and calculate goals at every moment, accumulate fatigue substances like adenosine, making creative judgments difficult. Just like Darwin, turn off your smartphone for about 20 minutes a day, walk the same path mindlessly, and gift your brain the time and space to connect the answers on its own.",
      ja: "毎瞬間目標を追求し演算する現代人の脳は, アデノシンのような疲労物質が蓄積され, いざという時に創造的な判断を下すことを困難にします。ダーウィンのように一日20分ほどスマートフォンをオフにし, 同じ道を無心で散歩しながら, 脳が自ら答えをつなぎ合わせられる時間的・空間的なゆとりをプレゼントしてみてください。",
      zh: "现代人的大脑在每一刻都在追求和计算目标，这会导致腺苷等疲劳物质的积累，使我们在关键时刻难以做出创造性的判断。像达尔文一样，每天关掉手机大约20分钟，心无旁骛地走在同一条路上，给大脑提供时间和空间，让它自己联结出答案。",
      es: "El cerebro de las personas modernas, que constantemente persiguen y calculan objetivos en cada momento, acumula sustancias de fatiga como la adenosina, lo que dificulta los juicios creativos. Al igual que Darwin, apaga tu teléfono durante unos 20 minutos al día, camina por el mismo sendero sin pensar y regálale a tu cerebro el tiempo y el espacio para conectar las respuestas por sí mismo.",
      fr: "Le cerveau des personnes modernes, qui poursuivent et calculent constamment des objectifs à chaque instant, accumule des substances de fatigue comme l'adénosine, ce qui rend les jugements créatifs difficiles. Comme Darwin, éteignez votre téléphone environ 20 minutes par jour, marchez sur le même chemin sans réfléchir et offrez à votre cerveau le temps et l'espace nécessaires pour connecter les réponses par lui-même.",
      de: "Das Gehirn moderner Menschen, die ständig Ziele verfolgen und Berechnungen anstellen, reichert müdigkeitsfördernde Stoffe wie Adenosin an, was kreatives Denken erschwert. Schalten Sie wie Darwin das Smartphone für 20 Minuten am Tag aus, gehen Sie denselben Weg ohne Ziel und geben Sie Ihrem Gehirn Raum, um Antworten von selbst zu finden.",
      pt: "O cérebro das pessoas modernas, que constantemente perseguem e calculam objetivos a cada momento, acumula substâncias de fadiga como a adenosina, dificultando os julgamentos criativos. Tal como Darwin, desligue o telemóvel durante cerca de 20 minutos por dia, caminhe pelo mesmo percurso sem pensar e ofereça ao seu cérebro o tempo e o espaço para ligar as respostas por si próprio.",
      id: "Otak manusia modern, yang terus-menerus mengejar dan menghitung tujuan di setiap saat, menumpuk zat kelelahan seperti adenosin, membuat penilaian kreatif menjadi sulit. Sama seperti Darwin, matikan ponsel Anda selama sekitar 20 menit sehari, berjalanlah di jalur yang sama tanpa berpikir, & berikan otak Anda waktu & ruang."
    }
  },
  'woolf-standing-desk': {
    title: {
      en: "The Novelist Who Wrote Standing Every Morning? Virginia Woolf's Deep Focus Habit",
      ja: "毎朝立って執筆した小説家？ヴァージニア・ウルフの高度集中習慣",
      zh: "每天早晨站着写作的小说家？弗吉尼亚·伍尔夫的高效专注习惯",
      es: "¿La novelista que escribía de pie cada mañana? El hábito de concentración profunda de Virginia Woolf",
      fr: "La romancière qui écrivait debout chaque matin ? L'habitude de concentration intense de Virginia Woolf",
      de: "Die Schriftstellerin, die jeden Morgen im Stehen schrieb? Virginia Woolfs Routine für tiefe Konzentration",
      pt: "A romancista que escrevia de pé todas as manhãs? O hábito de concentração profunda de Virginia Woolf",
      id: "Novelis yang Menulis Sambil Berdiri Setiap Pagi? Kebiasaan Fokus Mendalam Virginia Woolf"
    },
    description: {
      en: "The 20th-century literary giant Virginia Woolf. Explore the science of concentration she gained from writing standing up, inspired by her sister's easel, and her standing routine.",
      ja: "20世紀英文学の巨匠ヴァージニア・ウルフ。画家の妹のイーゼルからインスピレーションを受け, 立って執筆することで得た集中の科学と, 現代的な起立ルーティンを紹介します。",
      zh: "20世纪文学巨匠弗吉尼亚·伍尔夫。受画家妹妹画架的启发，探索她站立写作所获得的专注科学，以及现代站立惯例。",
      es: "La gran figura literaria del siglo XX Virginia Woolf. Conozca la ciencia de la concentración que obtuvo al escribir de pie, inspirada en el caballete de su hermana, y su rutina de pie.",
      fr: "La figure littéraire du XXe siècle Virginia Woolf. Découvrez la science de la concentration qu'elle a acquise en écrivant debout, inspirée par le chevalet de sa sœur, et sa routine debout.",
      de: "Die literarische Größe des 20. Jahrhunderts, Virginia Woolf. Erfahren Sie mehr über die Wissenschaft der Konzentration, die sie durch das Schreiben im Stehen erlangte, und ihre Steh-Routine.",
      pt: "A grande figura literária do siglo XX Virginia Woolf. Conheça a ciência da concentração que obteve ao escrever de pé, inspirada no cavalete de sua irmã, e sua rotina de pé.",
      id: "Tokoh sastra abad ke-20 Virginia Woolf. Jelajahi ilmu konsentrasi yang diperolehnya dari menulis sambil berdiri, terinspirasi oleh papan lukis kakaknya, dan rutinitas berdirinya."
    },
    authority: {
      en: "A Writer's Diary & Applied Ergonomics Study on Standing Desks",
      ja: "ヴァージニア・ウルフ 日記 ＆ 人間工学専門学術誌 Applied Ergonomics 起立作業研究",
      zh: "弗吉尼亚·伍尔夫日记及人类工学学术期刊 Applied Ergonomics 站立工作研究",
      es: "Diario de Virginia Woolf y estudio de Applied Ergonomics sobre escritorios de pie",
      fr: "Le Journal de Virginia Woolf et l'étude d'Applied Ergonomics sur les bureaux debout",
      de: "Virginia Woolfs Tagebuch & Studie in Applied Ergonomics über Stehpulte",
      pt: "Diário de Virginia Woolf e estudo da Applied Ergonomics sobre secretárias de pé",
      id: "Buku Harian Virginia Woolf & Penelitian Applied Ergonomics tentang Meja Berdiri"
    },
    intro: {
      en: "Virginia Woolf, evaluated as a pioneer of 20th-century modernist literature, leaving behind masterpieces such as 'Mrs. Dalloway' and 'To the Lighthouse.' How was she able to realize such intimate inner worlds and complex psychology with such persistent and sophisticated sentences? Behind her amazing concentration was a very unique working habit. Every morning, Woolf stood in front of a tilted standing desk over a meter high to write. This writing routine was inspired by the working method of her sister, Vanessa Bell, an outstanding painter. Fascinated by the way her sister stood in front of the easel, using her whole body to paint, Woolf thought that she too had to stand to write in order to perceive the sentences and the overall structure of the novel in a three-dimensional and balanced way. Today, BuildSelf shares the scientific benefits of Woolf's standing writing routine and concentration-boosting practices.",
      ja: "『ダロウェイ夫人』や『灯台へ』などの傑作を残し、20世紀モダニズム文学の先駆者と評価される小説家ヴァージニア・ウルフ。彼女の驚くべき集中力の裏には、非常に独特な作業習慣がありました。ウルフは毎朝、高さが1メートルを超える傾斜したスタンディングデスクの前に立って、小説の原稿を執筆しました。本日BuildSelfでは、ウルフの立位執筆ルーティンの科学的根拠と集中力を高める実践法をお伝えします。",
      zh: "弗吉尼亚·伍尔夫创作了《达洛维夫人》、《到灯塔去》等载入英美文学史的杰作，被誉为20世纪现代主义文学的先驱。她是如何用如此细腻而洗练的文字，展现人物隐秘的内心世界和复杂的心理活动呢？在她惊人的专注力背后，有着一种非常独特的创作习惯。伍尔夫每天早晨都会站在一张高度超过1米、倾斜的站立式书桌前挥毫泼墨。这种站立写作的惯例，灵感源自她当时身为杰出画家的妹妹瓦妮莎·贝尔（Vanessa Bell）的工作方式。今天，BuildSelf将为您介绍伍尔夫站立写作习惯背后的科学益处，以及适合现代人的专注力提升方法。",
      es: "Virginia Woolf, considerada una pionera de la literatura modernista del siglo XX, que dejó obras maestras como 'La señora Dalloway' y 'Al faro'. ¿Cómo fue capaz de plasmar mundos internos tan íntimos y psicologías tan complejas con oraciones tan persistentes y sofisticadas? Detrás de su asombrosa concentración había un hábito de trabajo muy singular. Cada mañana, Woolf se paraba frente a un escritorio de pie inclinado de más de un metro de altura para escribir. Esta rutina de escritura se inspiró en el método de trabajo de su hermana, Vanessa Bell, una destacada pintora. Fascinada por la forma en que su hermana se paraba frente al caballete, usando todo su cuerpo para pintar, Woolf pensé que ella también tenía que pararse para escribir. Hoy, BuildSelf comparte los beneficios científicos de la rutina de escritura de pie de Woolf y prácticas para aumentar la concentración.",
      fr: "Virginia Woolf, considérée comme une pionnière de la littérature moderniste du XXe siècle, laissant derrière elle des chefs-d'œuvre tels que « Mrs Dalloway » et « La Promenade au phare ». Comment a-t-elle pu dépeindre des mondes intérieurs si intimes et des psychologies si complexes avec des phrases si denses et sophistiquées ? Derrière son incroyable concentration se cachait une habitude de travail très singulière. Chaque matin, Woolf se tenait debout devant un pupitre incliné de plus d'un mètre de haut pour écrire. Cette routine d'écriture a été inspirée par la méthode de travail de sa sœur, Vanessa Bell, une peintre accomplie. Fascinée par la façon dont sa sœur se tenait devant son chevalet, utilisant tout son corps pour peindre, Woolf a pensé qu'elle devait elle aussi se tenir debout pour écrire. Aujourd'hui, BuildSelf partage les avantages scientifiques de la routine d'écriture debout de Woolf.",
      de: "Virginia Woolf gilt als Pioneerin der modernistischen Literatur des 20. Jahrhunderts und hinterließ Meisterwerke wie 'Mrs. Dalloway' und 'Zum Leuchtturm'. Wie gelang es ihr, die inneren Welten und komplexen Seelenzustände ihrer Figuren in so raffinierten Sätzen darzustellen? Hinter ihrer erstaunlichen Konzentration steckte eine einzigartige Arbeitsgewohnheit. Jeden Morgen stand Woolf vor einem über einen meter hehen, geneigten Stehpult, um zu schreiben. Diese Schreibroutine war von der Arbeitsweise ihrer Schwester Vanessa Bell inspiriert, einer hervorragenden Malerin. Fasziniert davon, wie ihre Schwester vor der Staffelei stand und ihren ganzen Körper zum Malen einsetzte, dachte Woolf, dass auch sie im Stehen schreiben müsse. Heute stellt BuildSelf die wissenschaftlichen Vorteile von Woolfs Steh-Routine vor.",
      pt: "Virginia Woolf, considerada uma pioneira da literatura modernista do século XX, deixando obras-primas como 'Mrs. Dalloway' e 'Ao Farol'. Como foi ela capaz de retratar mundos interiores tão íntimos e psicologias tão complexas com frases tão persistentes e sofisticadas? Por trás da sua incrível concentração estava um hábito de trabalho muito singular. Todas as manhãs, Woolf escrevia de pé em frente a uma secretária inclinada com mais de um metro de altura. Esta rotina de escrita foi inspirada no método de trabalho da sua irmã, Vanessa Bell, uma pintora notável. Faszinala pela forma como a irmã se colocava em frente ao cavalete, usando todo o corpo para pintar, Woolf pensou que ela também tinha de escrever de pé. Hoje, o BuildSelf partilha os benefícios científicos da rotina de escrita de pé de Woolf.",
      id: "Virginia Woolf, yang dinilai sebagai pelopor sastra modernis abad ke-20, meninggalkan mahakarya seperti 'Mrs. Dalloway' & 'To the Lighthouse.' Bagaimana dia bisa mewujudkan dunia batin yang begitu intim & psikologi yang kompleks dengan kalimat yang gigih & canggih?"
    },
    whyTitle: {
      en: "The Brain's Focus Circuit Activated When Standing",
      ja: "立って仕事をする時に活性化する脳の集中回路",
      zh: "站立工作时激活的大脑专注回路",
      es: "El circuito de enfoque del cerebro activado al estar de pie",
      fr: "Le circuit de concentration du cerveau activé en position debout",
      de: "Der Konzentrationsschaltkreis des Gehirns im Stehen",
      pt: "O circuito de foco do cérebro ativado ao ficar de pé",
      id: "Sirkuit Fokus Otak yang Diaktifkan Saat Berdiri"
    },
    whyDesc: {
      en: "The habit of sitting and working for long hours slowly drains not only the health of modern people but also their concentration. Standing induces constant micro-contractions of the leg and gluteal muscles, improving blood circulation. This facilitates blood flow and oxygen supply to the brain, preventing sleepiness or brain fog commonly felt when sitting. According to neuroscience research, standing activates the secretion of dopamine and norepinephrine, neurotransmitters responsible for attention, doubling work immersion in the morning. It also aligns the pelvis and spine, reducing fatigue accumulation from poor posture.",
      ja: "立位姿勢は脚の筋肉の持続的な収縮を誘導して血行を改善し、代謝を促進します。これにより脳に供給される血流量と酸素量が増え、座っているときよりも眠気を防ぎ、注意集中力を司る神経伝達物質であるドーパミンやノルアドレナリンの分泌を活発にします。また、脊椎の自然な整列を助け、猫背による疲労の蓄積を軽減します。",
      zh: "长期坐着工作的习惯，不仅会慢慢吞噬现代人的健康，还会卷食专注力。站姿能不断诱发腿部和臀部肌肉的微收缩，从而改善全身的血液循环。这促使心脏向大脑输送充足的血流量和氧气，预防坐着时常有的食后困倦或脑雾（Brain Fog）。神经科学研究表明，站姿能激活掌管注意力的神经递质——多巴胺和去甲肾上腺素的分泌，使早晨的工作投入度倍增。此外，它还能让骨盆和脊椎自然排列，减少因不良姿势造成的疲労。",
      es: "El hábito de sentarse y trabajar durante largas horas agota lentamente no solo la salud de las personas modernas sino también su concentración. Estar de pie induce microcontracciones constantes en las piernas y los glúteos, mejorando la circulación sanguínea. Esto facilita el flujo de sangre y el suministro de oxígeno al cerebro, previniendo la somnolencia o la neblina mental (Brain Fog) que se sienten al estar sentado. Según la investigación en neurociencia, estar de pie activa la secreción de dopamina y norepinefrina, neurotransmisores responsables de la atención, duplicando la inmersión en el trabajo por la mañana. También alinea la pelvis y la columna, reduciendo la fatiga.",
      fr: "L'habitude de rester assis de longues heures épuise lentement la santé mais aussi la concentration. La position debout induit des micro-contractions constantes des jambes et des fessiers, améliorant la circulation. Cela facilite le flux sanguin et l'apport d'oxygène au cerveau, prévenant la somnolence ou le brouillard mental (Brain Fog) ressentis en position assise. Selon les neurosciences, se tenir debout active la dopamine et la noradrénaline, des neurotransmetteurs de l'attention, doublant l'immersion de travail le matin. Cela aligne également le bassin et la colonne vertébrale, réduisant la fatigue accumulée.",
      de: "Langes Sitzen schadet nicht nur der Gesundheit, sondern schwächt auch die Konzentration. Das Stehen führt zu ständigen Mikrokontraktionen der Beine und des Gesäßes, was die Durchblutung verbessert. Dies fördert den Blutfluss und die Sauerstoffversorgung des Gehirns und beugt Müdigkeit oder Gehirnnebel (Brain Fog) vor, die beim Sitzen häufig auftreten. Laut neurowissenschaftlichen Untersuchungen aktiviert das Stehen die Ausschüttung von Dopamin und Noradrenalin, was die Konzentration am Morgen verdoppelt. Zudem entlastet die aufrechte Haltung von Becken und Wirbelsäule den Körper.",
      pt: "O hábito de sentar e trabalhar por longas horas esgota lentamente não apenas a saúde, mas também a concentração. Ficar de pé induz microcontrações constantes nas pernas e glúteos, melhorando la circulação sanguínea. Isso facilita o fluxo de sangue e o fornecimento de oxigênio ao cérebro, prevenindo la sonolência ou nevoeiro mental (Brain Fog) sentidos ao sentar. Segundo a pesquisa em neurociência, ficar de pé activa a secreção de dopamina e norepinefrina, neurotransmissores da atenção, duplicando a imersão no trabalho pela manhã. Também alinha a bacia e a coluna, reduzindo a fadiga.",
      id: "Kebiasaan duduk dan bekerja dalam waktu lama perlahan-lahn menguras tidak hanya kesehatan manusia modern tetapi juga konsentrasi mereka. Berdiri memicu kontraksi mikro konstan pada otot kaki dan bokong, meningkatkan sirkulasi darah. Hal ini memperlancar aliran darah dan pasokan osigen ke otak, mencegah rasa kantuk atau kabut otak (Brain Fog) yang biasa dirasakan saat duduk. Menurut penelitian ilmu saraf, berdiri mengaktifkan sekresi dopamin & norepinefrin."
    },
    steps: [
      {
        name: {
          en: "Start the first 30 minutes of morning work standing",
          ja: "午前最初の仕事30分は立って始める",
          zh: "站立开启早晨的前30分钟工作",
          es: "Comenzar los primeiros 30 minutos del trabalho matutino de pie",
          fr: "Commencer les 30 premières minutes de travail debout",
          de: "Die ersten 30 Minuten der Arbeit im Stehen beginnen",
          pt: "Começar os primeiros 30 minutos de trabalho matinal de pé",
          id: "Mulailah 30 menit pertama kerja pagi sambil berdiri"
        },
        text: {
          en: "During the first hour of the morning, when cognitive energy is clearest, set the height of your standing desk in advance. If you do not have a standing desk, utilize a high shelf or cabinet to start standing for 30 minutes.",
          ja: "朝の最初の30分から1時間は、立って仕事をする高さに設定します。（立位デスクがなければ、高い本棚やキッチンのカウンターなどを活用します。）",
          zh: "在一天的认知能量最清醒、最需要专注的早晨第一个小时，提前将站立式书桌的高度调整到适合站立办公的高度。如果没有站立式书桌，可以利用较高的搁架或收纳柜，尝试站立工作30分钟。",
          es: "Durante la primera hora de la mañana, cuando la energía cognitiva es más clara, ajusta de antemano la altura de tu escritorio de pie. Si no tienes uno, utiliza un estante alto o un mueble para comenzar a trabajar de pie durante 30 minutos.",
          fr: "Pendant la première heure de la matinée, lorsque l'énergie cognitive est la plus claire, réglez la hauteur de votre bureau debout à l'avance. Si vous n'en avez pas, utilisez une étagère haute ou un meuble pour travailler debout pendant 30 minutes.",
          de: "Stellen Sie Ihr Stehpult in der ersten Stunde des Morgens, wenn die Konzentration am höchsten ist, auf die richtige Höhe ein. Wenn Sie kein Stehpult haben, nutzen Sie ein hohes Regal oder einen Schrank, um 30 Minuten lang im Stehen zu arbeiten.",
          pt: "Durante a primeira hora da manhã, quando a energía cognitiva é mais clara, ajuste previamente a altura da sua secretária de pé. Se não tiver uma, utilize uma prateleira alta ou um móvel para começar a trabalhar de pé durante 30 minutos.",
          id: "Selama jam pertama di pagi hari, saat energi kognitif paling jernih, atur ketinggian meja berdiri Anda terlebih dahulu. Jika Anda tidak memiliki meja berdiri, gunakan rak atau kabinet tinggi untuk mulai berdiri selama 30 menit."
        }
      },
      {
        name: {
          en: "Arrange the heaviest and most creative core tasks",
          ja: "最も重く、かつ創造的な核心の作業を配置する",
          zh: "安排最繁重且最具创造力的核心任务",
          es: "Organizar las tareas principales más difíciles y creativas",
          fr: "Planifier les tâches principales les plus complexes et créatives",
          de: "Die anspruchsvollsten und kreativsten Aufgaben einplanen",
          pt: "Organizar as tarefas principais mais difíceis e criativas",
          id: "Atur tugas inti yang paling berat & kreatif"
        },
        text: {
          en: "While standing, perform deep work that requires the highest level of logic and concentration, such as writing complex proposals, translating documents, or writing, rather than light email checks. The light tension of the body boosts the brain's processing speed.",
          ja: "肩を開き、視線が正面を向くようにモニターの高さを調節した後、最も集中を必要とする核心的な企画や執筆業務を開始します。",
          zh: "在站立状态下，不要做简单的邮件检查，而是进行需要最高逻辑思维和专注力的深度工作（Deep Work），如撰写复杂的策划案、翻译文件、创作等。身体的微轻紧张感会提升大脑的运算速度。",
          es: "Mientras estás de pie, realiza un trabajo profundo que requiera el más alto nivel de lógica y concentración, como escribir propuestas complejas, traducir documentos o redactar, en lugar de revisar correos. La ligera tensión del cuerpo aumenta la velocidad del cerebro.",
          fr: "En position debout, effectuez un travail de fond qui demande le plus haut niveau de logique et de concentration, comme rédiger des propositions complexes, traduire des documents ou écrire, plutôt que de vérifier vos e-mails. La légère tension stimule le cerveau.",
          de: "Erledigen Sie im Stehen anspruchsvolle Aufgaben, die höchste Logik und Konzentration erfordern, wie das Schreiben von Konzepten oder Berichten, anstatt nur E-Mails zu checken. Die leichte körperliche Spannung erhöht die Verarbeitungsgeschwindigkeit des Gehirns.",
          pt: "Enquanto estiver de pé, realize um trabalho profundo que exija o mais alto nivel de lógica e concentração, como escrever propostas complexas, traduzir documentos ou redigir, em vez de verificar e-mails. A leve tensão do corpo aumenta a velocidade del cérebro.",
          id: "Saat berdiri, lakukan pekerjaan mendalam yang membutuhkan tingkat logika dan konsentrasi tertinggi, seperti menulis proposal yang rumit, menerjemahkan dokumen, atau menulis, daripada sekadar memeriksa email. Ketegangan ringan pada tubuh meningkatkan kecepatan pemrosesan otak."
        }
      },
      {
        name: {
          en: "Distribute weight evenly and maintain good posture",
          ja: "体が緊張状態を記憶するように姿勢を維持する",
          zh: "均匀分布体重并保持良好体态",
          es: "Distribuir el peso uniformemente y mantener una buena postura",
          fr: "Répartir le poids uniformément et maintenir une bonne posture",
          de: "Das Gewicht gleichmäßig verteilen und auf eine gute Haltung achten",
          pt: "Distribuir o peso uniformemente e manter uma boa postura",
          id: "Distribusikan berat badan secara merata & pertahankan postur tubuh yang baik"
        },
        text: {
          en: "Avoid standing on one leg and distribute weight evenly on both feet. Keep your shoulders and chest open, adjust the monitor height to align with your gaze, and alternate with sitting or stretching for 10 minutes after 30-50 minutes of focus.",
          ja: "体が適度な緊張状態を記憶し、乱れることなく没頭できるように、30分間集中した後に徐々に座る姿勢へと移行します。",
          zh: "避免将体重只压在一只脚上的“稍息”站姿，双脚要均匀用力。舒展肩膀和胸部，将显示器顶端与视线对齐，以分散压力。专注30-50分钟后，坐下休息或做10分钟拉伸。",
          es: "Evita apoyarte en una sola pierna y distribuye el peso por igual en ambos pies. Mantén los hombros y el pecho abiertos, ajusta el monitor para alinear lo con tu mirada y alterna con sentarte o estirarte durante 10 minutos después de 30-50 minutos de enfoque.",
          fr: "Évitiez de vous tenir sur une seule jambe et répartissez le poids sur vos deux pieds. Gardez les épaules et le buste ouverts, réglez l'écran à hauteur de regard, et alternez avec la position assise ou des étirements de 10 minutes après 30 à 50 minutes d'effort.",
          de: "Vermeiden Sie es, das Gewicht nur auf ein Bein zu verlagern. Stehen Sie gleichmäßig auf beiden Füßen. Halten Sie Schultern und Brust geöffnet, stellen Sie den Monitor auf Augenhöhe ein und machen Sie nach 30–50 Minuten Fokus 10 Minuten Pause im Sitzen.",
          pt: "Evite apoiar-se numa só perna e distribua o peso igualmente por ambos os pés. Mantenha os ombros e o peito abertos, ajuste o monitor para o alinhar com o olhar e alterne com sentar-se ou alongar-se durante 10 minutos após 30 a 50 minutos de foco.",
          id: "Hindari berdiri dengan satu kaki dan distribusikan berat badan secara merata pada kedua kaki. Jaga agar bahu dan dada tetap terbuka, sesuaikan tinggi monitor agar sejajar dengan pandangan Anda, dan bergantian dengan duduk atau peregangan."
        }
      }
    ],
    cautionTitle: {
      en: "A brain-scientific word for a successful routine",
      ja: "効果的なルーティンのための脳科学的な一言",
      zh: "成功惯例的脑科学建议",
      es: "Un consejo neurocientífico para una rutina exitosa",
      fr: "Un conseil neuroscientifique pour une routine réussie",
      de: "Ein gehirnwissenschaftlicher Ratschlag für eine erfolgreiche Routine",
      pt: "Um conselho neurocientífico para uma rotina de sucesso",
      id: "Saran ilmiah saraf untuk rutinitas yang sukses"
    },
    cautionDesc: {
      en: "Modern people spend most of their workday sitting. The moment you sit down at your desk in the morning, the brain easily mistakes it for static rest. If you take a 30-minute standing immersion routine in the morning like Virginia Woolf, you can immediately activate your cardiorespiratory function and brain. Consciously expand your standing time every day.",
      ja: "現代人は一日の大半を椅子に座って過ごします。朝、デスクに向かって座った瞬間、脳はそれを静的な休息と勘違いしがちです。ヴァージニア・ウルフのように、朝に30分間の立位没頭ルーティンを取り入れれば、心肺機能と脳を即座に活性化させることができます。毎日意識的に立って仕事をする時間を広げてみてください。",
      zh: "现代人一天中的大部分时间都是坐在椅子上度过的。清晨上班坐下的一瞬间，大脑很容易误以为进入了静态休息模式。如果像弗吉尼亚·伍尔夫一样，在早晨进行30分钟的站立专注惯例，就能立即激活心肺功能和大脑。每天有意识地延长站立工作的时间吧。",
      es: "Las personas modernas pasan la mayor parte de su jornada laboral sentadas. En el momento en que te sientas a tu escritorio por la mañana, el cerebro lo confunde fácilmente con un descanso. Si realizas una rutina de inmersión de pie de 30 minutos por la mañana como Virginia Woolf, puedes activar la función cardiorrespiratoria y el cerebro. Amplía conscientemente tu tiempo de pie cada día.",
      fr: "Les personnes modernes passent la majeure partie de la journée assises. Dès que vous vous asseyez au bureau le matin, le cerveau l'assimile à du repos. Si vous adoptez une routine de 30 minutes debout le matin comme Virginia Woolf, vous activez immédiatement vos fonctions cardiorespiratoires et cérébrales. Augmentez consciemment ce temps chaque jour.",
      de: "Moderne Menschen verbringen den größten Teil ihres Arbeitstages im Sitzen. Sobald Sie sich morgens an den Schreibtisch setzen, verwechselt das Gehirn dies leicht mit einer Ruhephase. Wenn Sie morgens wie Virginia Woolf eine 30-minütige Steh-Routine einführen, können Sie Herz-Kreislauf-System und Gehirn sofort aktivieren. Steigern Sie Ihre Stehzeit jeden Tag.",
      pt: "As pessoas modernas passam a maior parte do dia de trabalho sentadas. No momento em que se senta à secretária de manhã, o cérebro confunde-o facilmente com um descanso estático. Se adotar uma rotina de 30 minutos de pé de manhã como Virginia Woolf, pode activar imediatamente as funções cardiorrespiratórias e cerebrais. Aumente conscientemente o seu tempo de pé todos os dias.",
      id: "Manusia modern menghabiskan sebagian besar hari kerja mereka dengan duduk. Saat Anda duduk di meja di pagi hari, otak dengan mudah salah mengira itu sebagai istarahat statis. Jika Anda melakukan rutinitas berdiri selama 30 menit di pagi hari seperti Virginia Woolf, Anda dapat segera mengaktifkan fungsi kardiorespirasi & otak Anda."
    }
  },
  'da-vinci-notepad': {
    title: {
      en: "The Genius Who Kept a Notebook on His Belt? Leonardo da Vinci's Immediate Note-taking Habit",
      ja: "常に腰に手帳をぶら下げていた天才？レオナルド・ダ・ヴィンチの即時メモ習慣",
      zh: "腰间悬挂手账的天才？达芬奇的即时记事习惯",
      es: "¿El genio que llevaba un cuaderno en el cinturón? El hábito de anotación inmediata de Leonardo da Vinci",
      fr: "Le génie qui portait un carnet à la ceinture ? L'habitude de note immédiate de Léonard de Vinci",
      de: "Der Genießer mit dem Notizbuch am Gürtel? Leonardo da Vincis Gewohnheit der sofortigen Notiz",
      pt: "O génio que trazia um caderno no cinto? O hábito de anotação imediata de Leonardo da Vinci",
      id: "Jenius yang Menggantungkan Buku Catatan di Ikat Pinggangnya? Kebiasaan Mencatat Segera Leonardo da Vinci"
    },
    description: {
      en: "The most versatile genius in history, Leonardo da Vinci. Discover his habit of writing down ideas immediately, the neuroscience behind it, and a 3-step guide for modern professionals.",
      ja: "歴史上最も多才な天才レオナルド・ダ・ヴィンチ。常に手帳を持ち歩き、浮かんだ考えを即座に記録した彼のメモ習慣と脳科学的な原理、現代人のための3段階の実践法を紹介します。",
      zh: "历史多才天才达芬奇。探索他即时记事的习惯、脑科学原理，以及适合现代人的三步实践指南。",
      es: "El genio más polifacético de la historia, Leonardo da Vinci. Descubra su hábito de anotar ideas de inmediato, la neurociencia detrás de él y una guía de 3 pasos.",
      fr: "Le génie le plus polyvalent de l'historie, Léonard de Vinci. Découvrez son habitude de noter les idées immédiatement, la neuroscience derrière cela et un guide en 3 étapes.",
      de: "Das vielseitigste Genie der Geschichte, Leonardo da Vinci. Entdecken Sie seine Gewohnheit, Ideen sofort zu notieren, die Wissenschaft dahinter und eine 3-Schritte-Anleitung.",
      pt: "O génio mais polivalente da história, Leonardo da Vinci. Descubra o seu hábito de anotar ideias de imediato, la neurociência por trás disso e um guia de 3 passos.",
      id: "Jenius paling serbabisa dalam sejarah, Leonardo da Vinci. Temukan kebiasaannya mencatat ide dengan segera, ilmu saraf di baliknya, & panduan 3 langkah."
    },
    authority: {
      en: "Walter Isaacson's 'Leonardo da Vinci' & Journal of Educational Psychology",
      ja: "ウォルター・アイザックソン 著『レオナルド・ダ・ヴィンチ』＆ 教育心理学術誌(JEP) メモ効果研究",
      zh: "沃尔特·艾萨克森著《达芬奇传》及教育心理学期刊(JEP)笔记研究",
      es: "Obra de Walter Isaacson 'Leonardo da Vinci' y estudio del Journal of Educational Psychology",
      fr: "L'ouvrage de Walter Isaacson 'Léonard de Vinci' et l'étude du Journal of Educational Psychology",
      de: "Walter Isaacsons 'Leonardo da Vinci' & Studie im Journal of Educational Psychology",
      pt: "Obra de Walter Isaacson 'Leonardo da Vinci' e estudio do Journal of Educational Psychology",
      id: "Buku Walter Isaacson 'Leonardo da Vinci' & Penelitian Journal of Educational Psychology"
    },
    intro: {
      en: "Leonardo da Vinci, the ultimate Renaissance master who left behind unprecedented superhuman achievements in art, science, anatomy, music, and civil engineering. What was the source of his genius creativity and ability to synthesize knowledge? The secret lies in a very simple but powerful habit he maintained throughout his life. Da Vinci carried a small leather-bound notebook tied to his belt at all times so that he could record inspiration whenever and wherever it struck. When he met a person with a unique face or expression on the street, he persistently followed them until they disappeared from sight to sketch a caricature in his notebook. When he observed the flow of water, he sketched the rules of the swirl on the spot. These doodles and notes later developed into thousands of pages of the 'Leonardo da Vinci Codex,' which remains a treasure of humanity. Today, BuildSelf shares the neuroscientific secrets of Da Vinci's notebook habit and how modern people can practice immediate note-taking.",
      ja: "美術、科学、解剖学、幾何学、音楽、土木工学など多方面で、人類史上類を見ない超人的な業績を残したルネサンスの絶対的巨匠、レオナルド・ダ・ヴィンチ。彼はいつでもどこでもインスピレーションが浮かんだら即座に記録できるよう、一生革で製本された小さな手帳をベルトに結びつけて持ち歩きました。この落書きとメモが、後世の絵画、飛行体設計、解剖学的発見の基礎となった数千枚の「ダ・ヴィンチ・コデックス（手稿）」へと発展しました。本日、BuildSelfではダ・ヴィンチのメモ習慣の中に隠された脳科学的秘密と、現代人が日常生活でアイデアを逃さない即時メモ実践法を紹介します。",
      zh: "列奥纳多·达·芬奇是文艺复兴时期的终极大师，在艺术、科学、解剖学、音乐和土木工程等领域留下了空前的超人成就。他天才般的创造力和融合知识的能力源自何处？秘密在于他终生保持的一个非常简单但强大的习惯。达·芬奇随身携带一本系在腰带上的皮革面小手账，以便随时随地记录灵感。他在街上遇到面容或表情独特的人时，会执着地跟随直到对方消失，在手账中画下漫画。观察水流时，他会当场画下漩涡的规律。这些涂鸦和笔记后来发展成了数千页的《达·指奇手稿》，至今仍是人类的宝藏。今天，BuildSelf为您分享达·芬奇手账习惯背后的脑科学奥秘，以及现代人如何实践即时记事。",
      es: "Leonardo da Vinci, el gran maestro del Renacimiento que dejó logros sobrehumanos sin precedentes en el arte, la ciencia, la anatomía, la música y la ingeniería civil. ¿Cuál era la fuente de su genial creatividad y capacidad para sintetizar el conocimiento? El secreto reside en un hábito muy simple pero poderoso que mantuvo durante toda su vida. Da Vinci llevaba un pequeño cuaderno encuadernado en cuero atado al cinturón en todo momento para poder registrar la inspiración donde y cuando surgiera. Cuando se encontraba con alguien con un rostro o expresión singular en la calle, lo seguía persistentemente hasta perderlo de vista para dibujarlo. Cuando observaba el flujo de agua, dibujaba las reglas del remolino en el acto. Estos bocetos y notas se convirtieron más tarde en miles de páginas del 'Códice Leonardo da Vinci', que sigue siendo un tesoro de la humanidad. Hoy, BuildSelf comparte los secretos neurocientíficos de la rutina de Da Vinci y cómo los profesionales modernos pueden practicar la anotación inmediata.",
      fr: "Léonard de Vinci, le maître absolu de la Renaissance qui a laissé des réalisations surhumaines sans précédent dans l'art, la science, l'anatomie, la musique et le génie civil. Quelle était la source de son génie créatif et de sa capacité à synthétiser les connaissances ? Le secret réside dans une habitude très simple mais puissante qu'il a conservée tout au long de sa vie. De Vinci portait en permanence un petit carnet relié en cuir attaché à sa ceinture afin de pouvoir enregistrer l'inspiration où et quand elle se présentait. Lorsqu'il rencontrait dans la rue une personne au visage ou à l'expression singulière, il la suivait avec insistance jusqu'à ce qu'elle disparaisse de sa vue pour en faire un croquis. Lorsqu'il observait l'écoulement de l'eau, il dessinait sur-le-champ les règles du tourbillon. Ces croquis et notes sont devenus plus tard les milliers de pages du « Codex Léonard de Vinci », qui reste un trésor de l'humanité. Aujourd'hui, BuildSelf partage les secrets neuroscientifiques de la routine de De Vinci.",
      de: "Leonardo da Vinci, das ultimative Genie der Renaissance, das beispiellose übermenschliche Leistungen in Kunst, Wissenschaft, Anatomie, Musik und Ingenieurwesen hinterließ. Was war die Quelle seiner genialen Kreativität und seiner Fähigkeit, Wissen zu wissenschaftlichen Themen zu synthetisieren? Das Geheimnis liegt in einer sehr einfachen, aber wirkungsvollen Gewohnheit, die er sein Leben lang beibehielt. Da Vinci trug stets ein kleines, in Leder gebundenes Notizbuch am Gürtel, um Inspirationen sofort festhalten zu können. Wenn er auf der Straße jemanden mit einem markanten Gesicht traf, folgte er ihm beharrlich, um ein Porträt in sein Notizbuch zu skizzieren. Wenn er den Fluss des Wassers beobachtete, zeichnete er die Bewegung der Wirbel an Ort und Stelle auf. Skizzen und Notizen entwickelten sich später zu den Tausenden von Seiten des 'Codex Leonardo da Vinci', der bis heute ein Schatz der Menschheit ist. Heute stellt BuildSelf die wissenschaftlichen Geheimnisse von Da Vincis Notizbuch-Routine vor.",
      pt: "Leonardo da Vinci, o mestre supremo do Renascimento que deixou conquistas sobre-humanas sem precedentes na arte, na ciência, na anatomia, na música e na engenharia civil. Qual era a fonte de sua genial criatividade e capacidade de sintetizar o conhecimento? O segredo reside num hábito muito simples mas poderoso que manteve durante toda a vida. Da Vinci trazia sempre um pequeno caderno encadernado em couro atado ao cinto para poder registar a inspiração onde e quando ela surgisse. Quando encontrava na rua alguém com um rosto ou expressão singular, seguiu-o persistentemente até o perder de vista para fazer um esboço no seu caderno. Quando observava o fluxo da água, desenhava no local as regras do redemoinho. Estes esboços e notas tornaram-se mais tarde as milhares de páginas do 'Códice Leonardo da Vinci', que continua a ser um tesouro da humanidade. Hoje, o BuildSelf partilha os segredos neurocientíficos da rotina de Da Vinci.",
      id: "Leonardo da Vinci, maestro Renaisans sejati yang meninggalkan pencapaian luar biasa yang belum pernah ada sebelumnya dalam seni, sains, anatomi, musik, dan teknik sipil. Apa sumber kreativitas jenius dan kemampuannya untuk mensintesis pengetahuan? Rahasianya terletak pada kebiasaan yang sangat sederhana namun kuat yang dia pertahankan sepanjang hidupnya. Da Vinci selalu membawa buku catatan kecil bersampul kulit yang diikatkan pada ikat pinggangnya sehingga dia dapat mencatat inspirasi kapan pun dan di mana pun inspirasi itu muncul. Ketika dia bertemu seseorang dengan wajah atau ekspresi unik di jalan, dia terus mengikutinya sampai mereka menghilang dari pandangan untuk membuat sketsa karikatur di buku catatannya. Ketika dia mengamati aliran water, dia membuat sketsa aturan pusaran."
    },
    whyTitle: {
      en: "The Externalization Effect: Freeing the Brain's RAM",
      ja: "脳の外在化効果：ワーキングメモリ（RAM）を空ける",
      zh: "释放大脑内存的外化效应",
      es: "El efecto de externalización: Liberar la memoria RAM del cerebro",
      fr: "L'effet d'externalisation : Libérer la mémoire vive (RAM) du cerveau",
      de: "Der Externalisierungseffekt: Den Arbeitsspeicher des Gehirns entlasten",
      pt: "O efeito de externalização: Libertar a memória RAM do cérebro",
      id: "Efek Eksternalisasi: Membebaskan RAM Otak"
    },
    whyDesc: {
      en: "Our brain is closer to a CPU (central processing unit) that processes and associates information, rather than a warehouse that stores ideas. According to cognitive psychology, human working memory capacity is extremely limited, so if you keep newly emerged inspirations in your head without recording them, you will continuously consume immense cognitive energy (cognitive load) to maintain them. If you go through the process of 'externalization'—transferring inspirations immediately onto paper like Da Vinci—the brain is freed from the duty of maintaining information, clearing the working memory (RAM). The cleared brain can then finally engage in new associations and high-level creative thinking.",
      ja: "私たちの脳は、情報を処理して連想するCPU（中央処理装置）に近いです。認知心理学によると、人間のワーキングメモリ（作動記憶）の容量は極めて限られており、新しく浮かんだインスピレーションや情報を記録せずに頭の中に閉じ込めておくと、それを維持するために膨大な認知負荷（Cognitive Load）を継続的に消費することになります。ダ・ヴィンチのようにインスピレーションを手帳に即座に書いて物理的に移し替える「外在化（Externalization）」の過程を経ると、脳は情報の維持義務から解放され、ワーキングメモリ（RAM）をきれいに空けることができます。",
      zh: "我们的大脑更接近于处理和联结信息的CPU（中央处理器），而不是存储点子的仓库。认知心理学表明，人类的工作记忆（Working Memory）容量极其有限，如果你把新产生的灵感只留在脑子里而不记录下来，你就会持续消耗额外的认知能量（认知负荷）来维持它们。如果经历像达・芬奇那样将灵感即时转移到纸上的“外化（Externalization）”过程，大脑就会从维持信息的负担中解脱出来，清空工作记忆（RAM）。清空后的大脑才能最终进行新的联结和高水平的创造性思考。",
      es: "Nuestro cerebro está más cerca de una CPU (unidad central de procesamiento) que procesa y asocia información, en lugar de un almacén que guarda ideas. Según la psicología cognitiva, la capacidad de la memoria de trabajo humana es extremadamente limitada, por lo que si guardas las inspiraciones recién surgidas en tu cabeza sin registrarlas, consumirás continuamente una inmensa energía cognitiva (carga cognitiva) para mantenerlas. Si pasas por el proceso de 'externalización'—transfiriendo las inspiraciones inmediatamente al papel como Da Vinci—el cerebro se libera del deber de mantener la información, limpiando la memoria de trabajo (RAM). El cerebro liberado puede finalmente dedicarse a nuevas asociaciones y a un pensamiento creativo de alto nivel.",
      fr: "Notre cerveau est plus proche d'un processeur (CPU) qui traite et associe des informations, plutôt que d'un entrepôt qui stocke des idées. Selon la psychologie cognitive, la capacité de la mémoire de travail humaine est extrêmement limitée. Si vous gardez les inspirations naissantes dans votre tête sans les noter, vous consommerez continuellement une énergie cognitive immense (charge cognitive) pour les maintenir. Si vous passez par le processus d'« externalisation » — en transférant immédiatement les inspirations sur le papier comme De Vinci — le cerveau est libéré du devoir de maintenir l'information, libérant la mémoire de travail (RAM). Le cerveau libéré peut alors enfin s'engager dans de nouvelles associations et une pensée créative de haut niveau.",
      de: "Unser Gehirn ähnelt eher einem Prozessor (CPU), der Informationen verarbeitet und verknüpft, als einem Lagerhaus, das Ideen speichert. Laut Kognitionspsychologie ist die Kapazität des menschlichen Arbeitsgedächtnisses äußerst begrenzt. Wenn Sie neu entstandene Inspirationen im Kopf behalten, ohne sie aufschreiben, verbrauchen Sie ständig enorme kognitive Energie (kognitive Belastung), um sie aufrechtzuerhalten. Wenn Sie den Prozess der 'Externalisierung' durchlaufen – also Inspirationen wie Da Vinci sofort auf Papier übertragen –, wird das Gehirn von der Pflicht befreit, Informationen aufrechtzuerhalten, und der Arbeitsspeicher (RAM) wird entlastet. Das freie Gehirn kann sich dann schließlich neuen Verknüpfungen und kreativem Denken auf hohem Niveau widmen.",
      pt: "O nosso cérebro está mais próximo de uma CPU (unidade central de processamento) que processa e associa informações, do que de um armazém que guarda ideias. Segundo a psicologia cognitiva, la capacidade da memória de trabalho humana é extremamente limitada, por isso, se guardar as inspirações recém-surgidas na cabeça sem as registar, consumirá continuamente uma imensa energia cognitiva (carga cognitiva) para as manter. Se passar pelo processo de 'externalização' — transferindo as inspirações imediatamente para o papel como Da Vinci — o cérebro liberta-se do dever de manter a informação, limpando a memória de trabalho (RAM). O cérebro limpo pode, então, finalmente dedicar-se a novas associações e a um pensamento criativo de alto nível.",
      id: "Otak kita lebih dekat ke CPU (central processing unit) yang memproses dan mengasosiasikan informasi, daripada gudang yang menyimpan ide. Menurut psikologi kognitif, kapasitas memori kerja manusia sangat terbatas, jadi jika Anda menyimpan inspirasi que baru muncul di kepala tanpa mencatatnya, Anda akan terus mengonsumsi energi kognitif yang sangat besar (beban kognitif) untuk mempertahankannya. Jika Anda melalui proses 'eksternalisasi'—memindahkan inspirasi segera ke kertas seperti Da Vinci—otak dibebaskan dari tugas mempertahankan informasi, membersihkan memori kerja (RAM). Otak yang bersih kemudian akhirnya dapat underdog dalam associações novas & pemikiran kreatif tingkat tinggi."
    },
    steps: [
      {
        name: {
          en: "Keep a notebook handy or place a memo widget on the home screen",
          ja: "手帳を常時携帯するか、メモウィジェットをホーム画面に配置する",
          zh: "随身携带手账或在主屏幕放置便签组件",
          es: "Llevar un cuaderno a mano o colocar un widget de notas en la pantalla de inicio",
          fr: "Garder un carnet à portée de main ou placer un widget de note sur l'écran d'accueil",
          de: "Ein Notizbuch griffbereit halten oder ein Memo-Widget auf dem Startbildschirm platzieren",
          pt: "Manter um caderno à mão ou colocar um widget de notas no ecrã inicial",
          id: "Siapkan buku catatan atau tempatkan widget memo di layar beranda"
        },
        text: {
          en: "Always carry a small, easily accessible notebook and pen in your bag or pocket. If you prefer digital tools, place a quick text or voice memo widget on your smartphone's home screen that can be accessed without unlocking.",
          ja: "バッグや服のポケットに、いつでも簡単に取り出せる小さな手帳とペンを常時携帯します。デジタルツールが便利なら、スマートフォンのホーム画面に、ロック解除なしですぐに入力できるテキストメモウィジェットや音声メモウィジェットを配置しておきます。",
          zh: "在包里或口袋里随身携带一本小巧、易拿取的手账和笔。如果喜欢数字化工具，请在智能手机的主屏幕上放置一个快速文本或语音备忘录组件，以便无需解锁即可直接输入。",
          es: "Lleva siempre un cuaderno pequeño y un bolígrafo de fácil acceso en tu bolso o bolsillo. Si prefieres las herramientas digitales, coloca un widget de notas de texto o de voz en la pantalla de inicio de tu teléfono para acceder a él sin desbloquearlo.",
          fr: "Portez toujours sur vous un petit carnet facile d'accès et un stylo. Si vous préférez le numérique, placez un widget de note texte ou vocale sur l'écran d'accueil de votre smartphone, accessible sans déverrouillage.",
          de: "Tragen Sie immer ein kleines, leicht zugängliches Notizbuch und einen Stift bei sich. Wenn Sie digitale Werkzeuge bevorzugen, platzieren Sie ein Text- oder Sprachmemo-Widget auf dem Startbildschirm Ihres Smartphones, auf das Sie ohne Entsperren zugreifen können.",
          pt: "Traga sempre um pequeno caderno e uma caneta de fácil acesso na sua mala ou bolso. Se preferir ferramentas digitais, coloque um widget de notas de texto ou de voz no ecrã inicial do seu smartphone que possa ser acedido sem desbloquear.",
          id: "Selalu bawa buku catatan kecil dan pena yang mudah diakses di tas atau saku Anda. Jika Anda lebih menyukai alat digital, tempatkan widget memo teks atau suara cepat di layar beranda ponsel cerdas Anda yang dapat diakses tanpa membuka kunci."
        }
      },
      {
        name: {
          en: "Record key points within 5 seconds of an idea flashing",
          ja: "アイデアがひらめいた5秒以内に要点だけを記録する",
          zh: "在灵感闪现的5秒内记录关键点",
          es: "Registrar puntos clave dentro de los 5 segundos de surgir la idea",
          fr: "Noter les points clés dans les 5 secondes suivant l'apparition de l'idée",
          de: "Schlüsselpunkte innerhalb von 5 Sekunden nach dem Aufblitzen einer Idee notieren",
          pt: "Registar pontos-chave dentro de 5 segundos após a ideia surgir",
          id: "Catat poin-poin penting dalam waktu 5 detik setelah ide muncul"
        },
        text: {
          en: "The promise to 'write it down later when I think of it' leads to immediate forgetfulness. The moment an interesting idea, observation, or impressive sentence flashes while walking or talking, quickly jot it down on paper within 5 seconds as a few words or a rough sentence.",
          ja: "歩いているときや会話中に、興味深い企画アイデア、観察結果、印象深い文章などが浮かんだら、5秒以内にためらわずに、いくつかの単語やラフな一言で素早く紙の上に書き出します。「後で思い出したら書こう」という決意は、即座の忘却につながります。",
          zh: "“等我想起来再写下来”的承诺往往会导致转头就忘。在散步或交谈时，只要脑海中闪过有趣的创意、观察或令人印象深刻的话语，请在5秒内迅速用几个词或一句话粗略地写在纸上。",
          es: "La promesa de 'lo escribiré más tarde cuando lo piense' conduce al olvido inmediato. En el momento en que surja una idea interesante, observación o frase impresionante mientras caminas o hablas, escríbela rápidamente en papel en 5 segundos como unas pocas palabras o una oración rápida.",
          fr: "Se promettre de « l'écrire plus tard » conduit à l'oubli immédiat. Dès qu'une idée intéressante, une observation ou une phrase marquante apparaît en marchant ou en parlant, notez-la rapidement sur le papier en 5 secondes, sous forme de quelques mots ou d'une phrase rapide.",
          de: "Das Versprechen, 'es später aufzuschreiben, wenn ich Zeit habe', führt zu sofortigem Vergessen. In dem Moment, in dem Ihnen beim Gehen oder Sprechen eine interessante Idee, eine Beobachtung oder ein beeindruckender Satz durch den Kopf geht, schreiben Sie ihn innerhalb von 5 Sekunden in wenigen Worten auf.",
          pt: "A promessa de 'escrever mais tarde quando me lembrar' leva ao esquecimento imediato. No momento em que surgir uma ideia interessante, observação ou frase impressionante enquanto caminha ou fala, escreva-a rapidamente no papel em 5 segundos, como algumas palavras ou uma frase rápida.",
          id: "Janji untuk 'menuliskannya nanti ketika saya memikirkannya' mengarah pada kelupaan segera. Saat ide menarik, pengamatan, atau kalimat mengesankan muncul saat berjalan atau berbicara, segera catat di kertas dalam waktu 5 detik sebagai beberapa kata atau kalimat kasar."
        }
      },
      {
        name: {
          en: "Have a 5-minute memo review time at the end of the day",
          ja: "一日の終わりに5分間のメモレビュー時間を持つ",
          zh: "在一天结束时留出5分钟的笔记回顾时间",
          es: "Tener un tiempo de revisión de notas de 5 minutos al final del día",
          fr: "Consacrer 5 minutes à la révision des notes en fin de journée",
          de: "Am Ende des Tages 5 Minuten Zeit zur Durchsicht der Notizen nehmen",
          pt: "Ter um tempo de revisão de notas de 5 minutos no final do dia",
          id: "Sediakan waktu 5 menit untuk meninjau memo di akhir hari"
        },
        text: {
          en: "Every night before going to bed or at the end of the day, review the raw notes you took today. Just reviewing them helps consolidate the fragmented memories captured during the day into a solid knowledge system in the brain, and valuable thoughts can be organized separately in a proposal or diary.",
          ja: "毎晩寝る前や一日の終わりに、今日書き留めたありのままのメモに目を通します。目を通す行為だけで、日中に捉えた断片的な記憶が脳の中で強固な知識体系として長期記憶化され、価値のある考えは企画書や日記帳に別途整理します。",
          zh: "每天晚上睡觉前或在一天结束时，回顾一下你今天记录的原始笔记。仅仅是浏览这些内容，就能帮助将白天捕捉到的零散记忆整合成大脑中牢固的知识体系，有价值的想法可以单独整理到策划案或日记中。",
          es: "Cada noche antes de acostarte o al final del día, revisa las notas que tomaste hoy. El simple hecho de revisarlas ayuda a consolidar los recuerdos fragmentados del día en un sistema de conocimiento sólido en el cerebro, y los pensamientos valiosos pueden organizarse por separado.",
          fr: "Chaque soir avant de vous coucher ou en fin de journée, passez en revue les notes brutes prises aujourd'hui. Cette simple révision aide à consolider les souvenirs fragmentés de la journée dans un système de connaissances solide, et les pensées précieuses peuvent être classées à part.",
          de: "Gehen Sie jeden Abend vor dem Schlafengehen oder am Ende des Tages die Notizen durch, die Sie heute gemacht haben. Allein das Durchsehen hilft, die tagsüber gesammelten Bruchstücke im Gehirn zu einem soliden Wissenssystem zu festigen, und wertvolle Gedanken können strukturiert werden.",
          pt: "Todas as noites, antes de ir para a cama ou no final do dia, reveja as notas que tirou hoje. O simples ato de as rever ajuda a consolidar as memórias fragmentadas do dia num sistema de conhecimento sólido no cérebro, e os pensamentos valiosos podem ser organizados separadamente.",
          id: "Setiap malam sebelum tidur atau di akhir hari, tinjau catatan kasar yang Anda ambil hari ini. Meninjaunya saja membantu mengonsolidasikan ingatan terfragmentasi yang ditangkap di siang hari menjadi sistem pengetahuan yang solid di otak, & pemikiran berharga."
        }
      }
    ],
    cautionTitle: {
      en: "A brain-scientific word for a successful routine",
      ja: "効果的なルーティンのための脳科学的な一言",
      zh: "成功惯例的脑科学建议",
      es: "Un consejo neurocientífico para una rutina exitosa",
      fr: "Un conseil neuroscientifique pour une routine réussie",
      de: "Ein gehirnwissenschaftlicher Ratschlag für eine erfolgreiche Routine",
      pt: "Um conselho neurocientífico para uma rotina de sucesso",
      id: "Saran ilmiah saraf untuk rutinitas yang sukses"
    },
    cautionDesc: {
      en: "The act of trying to remember things itself accumulates subtle stress and fatigue in the brain. If you develop the habit of transferring inspiration to an external space immediately, like Da Vinci, your brain can devote 100% of its energy to its original role of thinking and creating. Start the habit of lightly recording even the smallest thoughts in your daily life the moment they arise.",
      ja: "記憶しておこうと努める行為自体が、脳に微細なストレスと疲労を蓄積させます。ダ・ヴィンチのようにインスピレーションを即座に外部の空間に移し替える習慣をつければ、脳は完全に「考えて創造する本来の役割」に100％のエネルギーを注ぐことができます。日常生活での些細な考えでも、浮かんだ瞬間に軽く記録しておく習慣を今日から始めてみてください。",
      zh: "试图记住事情这一行为本身就会在大脑中累积微妙的压力和疲劳。如果你养成像达・芬奇那样立即将灵感转移到外部空间的习惯，你的大脑就可以将100%的能量投入到思考和创造的本职工作上。从今天开始，养成在日常生活中产生想法的瞬间就轻轻记录下来的习惯吧。",
      es: "El acto de intentar recordar las cosas acumula estrés y fatiga sutiles en el cerebro. Si desarrollas el hábito de transferir la inspiración a un espacio externo de inmediato, como Da Vinci, tu cerebro podrá dedicar el 100% de su energía a su función original de pensar y crear. Comienza hoy mismo el hábito de registrar ligeramente incluso los pensamientos más pequeños.",
      fr: "Le fait d'essayer de se souvenir des choses accumule un stress et une fatigue subtils dans le cerveau. Si vous prenez l'habitude de transférer immédiatement l'inspiration vers un espace externe, comme De Vinci, votre cerveau pourra consacrer 100 % de son énergie à son rôle d'origine. Prenez cette habitude dès aujourd'hui.",
      de: "Der Versuch, sich Dinge krampfhaft zu merken, führt zu Stress und Müdigkeit im Gehirn. Wenn Sie sich wie Da Vinci angewöhnen, Inspirationen sofort schriftlich festzuhalten, kann sich Ihr Gehirn zu 100 % seiner eigentlichen Aufgabe widmen: dem Denken und Erschaffen. Beginnen Sie noch heute damit.",
      pt: "O ato de tentar lembrar-se das coisas acumula stress e fadiga subtis no cérebro. Se desenvolver o hábito de transferir a inspiração para um espaço externo imediatamente, como Da Vinci, o seu cérebro poderá dedicar 100% da sua energia à sua função original de pensar e criar. Comece hoje mesmo esse hábito.",
      id: "Tindakan mencoba mengingat sesuatu itu sendiri menumpuk stres dan kelelahan halus di otak. Jika Anda mengembangkan kebiasaan memindahkan inspirasi ke ruang eksternal segera, seperti Da Vinci, otak Anda dapat mencurahkan 100% energinya untuk peran aslinya."
    }
  },
  'beethoven-coffee-ritual': {
    title: {
      en: "The Composer Who Counted 60 Coffee Beans Every Morning? Beethoven's Concentration Ritual",
      ja: "毎朝コーヒー豆を60粒数えて淹れた作曲家？ベートーヴェンの集中力儀式",
      zh: "每天清晨数出60颗咖啡豆的作曲家？贝多芬的专注力仪式",
      es: "El compositor que contaba 60 granos de café cada mañana? El ritual de concentración de Beethoven",
      fr: "Le compositeur qui comptait 60 grains de café chaque matin ? Le rituel de concentration de Beethoven",
      de: "Der Komponist, der jeden Morgen 60 Kaffeebohnen abzählte? Beethovens Konzentrationsritual",
      pt: "O compositor que contava 60 grãos de café todas as manhãs? O ritual de concentração de Beethoven",
      id: "Komposer yang Menghitung 60 Biji Kopi Setiap Pagi? Ritual Konsentrasi Beethoven"
    },
    description: {
      en: "The timeless great composer Ludwig van Beethoven. Explore his unique routine of counting exactly 60 coffee beans every morning to calm his mind, and how to practice mindfulness today.",
      ja: "時代を超越した偉大な作曲家ルートヴィヒ・ヴァン・ベートーヴェン。毎朝正確に60粒の豆を数えながら心を整えた彼の独特なルーティンと, 脳を目覚めさせるマインドフルネス実践法を紹介します。",
      zh: "跨越时代的伟大作曲家路德维希·凡·贝多芬。探索他每天早晨精确数出60颗咖啡豆以使心灵平静的独特惯例，以及引导大脑觉醒的正念实践方法。",
      es: "El gran compositor de todos los tiempos Ludwig van Beethoven. Conozca su rutina única de contar exactamente 60 granos de café cada mañana para calmar su mente, y cómo practicarla hoy en día.",
      fr: "Le grand compositeur de tous les temps Ludwig van Beethoven. Découvrez sa routine unique consistant à compter exactement 60 grains de café chaque matin pour calmer son esprit, et comment la pratiquer aujourd'hui.",
      de: "Der zeitlose große Komponist Ludwig van Beethoven. Erfahren Sie mehr über seine einzigartige Routine, jeden Morgen genau 60 Kaffeebohnen abzuzählen, um den Geist zu beruhigen, und wie Sie Achtsamkeit praktizieren können.",
      pt: "O grande compositor de todos os tempos Ludwig van Beethoven. Conheça a sua rotina única de contar exatamente 60 grãos de café todas as manhãs para acalmar a mente, e como praticá-la hoje.",
      id: "Komposer hebat sepanjang masa Ludwig van Beethoven. Pelajari tentang rutinitas uniknya menghitung tepat 60 biji kopi setiap pagi untuk menenangkan pikirannya, dan cara melatih perhatian penuh hari ini."
    },
    authority: {
      en: "Anton Schindler's 'Beethoven as I Knew Him' & Cognition and Emotion",
      ja: "アントン・シンドラー 著『私が知るベートーヴェン』＆ 認知感情学術誌(Cognition and Emotion)",
      zh: "安东·辛德勒著《我所知道的贝多芬》及认知与情感学术期刊(Cognition and Emotion)",
      es: "Obra de Anton Schindler 'Beethoven as I Knew Him' y estudio de Cognition and Emotion",
      fr: "L'ouvrage d'Anton Schindler 'Beethoven tel que je l'ai connu' et l'étude de Cognition and Emotion",
      de: "Anton Schindlers 'Beethoven, wie ich ihn hatte' & Studie in Cognition and Emotion",
      pt: "Obra de Anton Schindler 'Beethoven as I Knew Him' e estudo da Cognition and Emotion",
      id: "Buku Anton Schindler 'Beethoven as I Knew Him' & Penelitian Cognition and Emotion"
    },
    intro: {
      en: "Ludwig van Beethoven, one of the greatest composers in Western music history who overcame the fatal ordeal of hearing loss and created the greatest melodies in human history such as the 'Fate Symphony' and the 'Choral Symphony.' Did you know the unique ritual he performed every morning before starting to compose? It was a precise coffee ritual of counting exactly '60 beans.' Beethoven was very sensitive to the taste and aroma of coffee and insisted on the perfect ratio. He used a glass siphon to extract coffee, counting exactly 60 raw beans by hand every morning. Even when guests visited, he strictly adhered to this rule. Counting these 60 beans was a sacred morning entryway for him to shut out distracting external noises and quietly enter his inner musical world. Today, BuildSelf shares the scientific secrets of Beethoven's coffee ritual and how to design a morning ritual to maximize your focus.",
      ja: "音楽家として致命的な試練である聴覚障害を克服し、交響曲第5番《運命》や第9番《合唱》など、人類史上最も偉大な旋律を誕生させた作曲家、ルートヴィヒ・ヴァン・ベートーヴェン。彼が毎朝執筆を始める前、非常に静かに、そして厳格に行っていた奇妙な行動をご存知でしょうか？それは、コーヒー豆を正確に「60粒」数えて淹れる朝のコーヒー儀式でした。ベートーヴェンはコーヒーの味と香りに非常に敏感で、完璧な比率にこだわりました。この60粒の豆を数える時間は、彼にとって単なる飲み物の準備ではなく、雑多な外部の騒音から心を閉ざし、静かに自分自身の内なる音楽の世界へと入る神聖な朝の入り口でした。本日BuildSelfでは、朝のリチュアル設計法を紹介します。",
      zh: "路德维希·凡·贝多芬克服了听力受损这一对音乐家来说致命的考验，创作出了《命运交响曲》、《合唱交响曲》等人类历史上最伟大的旋律。您知道他在每天早晨开始创作之前，会进行一项非常独特且严格的奇妙仪式吗？那就是精确地数出“60颗咖啡豆”来冲泡咖啡。贝多芬对咖啡的口感和香气非常敏感，坚持追求完美的比例。他每天早晨都会亲手精确地数出60颗生咖啡豆。即使有客人来访，他也严格遵守每杯精确60颗的比例。数这60颗豆子对他来说不仅仅是准备饮物，而是一个神圣的清晨入口，让他把嘈杂的外部噪音关在门外，静静地进入内心的音乐世界。今天，BuildSelf为您分享贝多芬咖啡仪式背后的科学奥秘，以及如何设计清晨惯例以最大化您的专注力。",
      es: "Ludwig van Beethoven, uno de los más grandes compositores de la historia de la música occidental, que superó la prueba mortal de la pérdida auditiva y creó las melodías más grandiosas de la historia, como la 'Sinfonía del Destino' y la 'Sinfonía Coral'. ¿Sabías que realizaba un ritual matutino antes de empezar a componer? Era el ritual de contar exactamente '60 granos' de café. Beethoven era muy sensible al sabor y aroma del café e insistía en la proporción perfecta. Contar estos 60 granos era una entrada sagrada para aislar los ruidos externos y entrar en su mundo musical. Hoy, BuildSelf comparte los secretos científicos del ritual de Beethoven y cómo diseñar una rutina matutina para maximizar tu enfoque.",
      fr: "Ludwig van Beethoven, l'un des plus grands compositeurs de l'histoire de la musique occidentale, qui a surmonté l'épreuve mortelle de la perte auditive pour créer les mélodies les plus grandioses, telles que la « Symphonie du Destin » et la « Symphonie chorale ». Saviez-vous qu'il accomplissait un rituel matutinal avant de commencer à composer ? C'était le rituel consistant à compter exactement « 60 grains » de café. Beethoven était très sensible au goût et à l'arôme du café et exigeait une proportion parfaite. Compter ces 60 grains était un prélude sacré pour s'isoler des bruits extérieurs et entrer dans son monde musical. Aujourd'hui, BuildSelf partage les secrets scientifiques du rituel de Beethoven.",
      de: "Ludwig van Beethoven, einer der größten Komponisten der westlichen Musikgeschichte, der trotz seiner fortschreitenden Ertaubung Meisterwerke wie die 'Schicksalssinfonie' und die '9. Sinfonie' schuf. Wussten Sie, dass er jeden Morgen vor dem Komponieren ein strenges Ritual befolgte? Es war das Abzählen von exakt '60 Kaffeebohnen'. Beethoven war äußerst wählerisch, was den Geschmack seines Kaffees anging. Das Abzählen dieser 60 Bohnen war für ihn der Übergang von der lauten Außenwelt in seine innere wissenschaftliche Welt. Heute untersucht BuildSelf die wissenschaftlichen Geheimnisse von Beethovens Kaffee-Ritual.",
      pt: "Ludwig van Beethoven, um dos maiores compositores da história da música ocidental, que superou a provação mortal da perda auditiva e criou as melodias mais grandiosas da história, como a 'Sinfonia do Destino' e a 'Sinfonia Coral'. Sabia que ele realizava um ritual matinal antes de começar a compor? Era o ritual de contar exatamente '60 grãos' de café. Beethoven era muito sensível ao sabor e aroma del café e insistia na proporção perfeita. Contar estes 60 grãos era uma entrada sagrada para isolar os ruídos externos e entrar no seu mundo musical. Hoje, o BuildSelf partilha os segredos científicos del ritual de Beethoven.",
      id: "Ludwig van Beethoven, salah satu komposer terbesar dalam sejarah musik Barat yang mengatasi cobaan mematikan berupa kehilangan pendengaran dan menciptakan melodi terbesar dalam sejarah manusia seperti 'Simfoni Takdir' dan 'Simfoni Paduan Suara.' Tahukah Anda ritual unik yang dilakukannya setiap pagi sebelum mulai menggubah lagu? Itu adalah ritual kopi yang tepat dengan menghitung tepat '60 biji.' Beethoven sangat sensitif terhadap rasa & aroma kopi."
    },
    whyTitle: {
      en: "Mindfulness and 'Cognitive Framing' That Wake the Prefrontal Cortex",
      ja: "前頭葉を目覚めさせるマインドフルネスと「認知的フレーミング」",
      zh: "唤醒前额叶皮层的正念与“认知框架”",
      es: "Atención plena y 'encuadre cognitivo' que despiertan la corteza prefrontal",
      fr: "Pleine conscience et « cadrage cognitif » qui éveillent le cortex préfrontal",
      de: "Achtsamkeit und 'kognitives Framing' zur Aktivierung des präfrontalen Cortex",
      pt: "Atenção plena e 'enquadramento cognitivo' que despertam o córtex pré-frontal",
      id: "Perhatian Penuh dan 'Pembingkaian Kognitif' yang Membangunkan Korteks Prefrontal"
    },
    whyDesc: {
      en: "Focusing on precise physical actions like counting small coffee beans is an excellent 'Mindfulness' training in neuroscience. When we wake up in the morning, the brain often overactivates the Default Mode Network (DMN) by thinking about unfinished worries or complex work plans. This state wastes brain energy and causes anxiety. Focusing on simple physical sensations and actions like Beethoven's bean counting suppresses DMN overactivation and awakens the sensory areas of the brain. Also, going through the same behavioral ritual every morning acts as a cognitive trigger that frames the brain to enter a state of high concentration.",
      ja: "指先で小さく丸いコーヒー豆の感触を感じながら、数字を一つ一つ数える精巧な行動は、脳科学的に優れた「マインドフルネス（心付け）」トレーニングです。私たちが朝目覚めると、脳は昨日の心配事や今日の複雑な業務計画を連想し、デフォルトモードネットワーク（DMN）を過度に活性化させます。この状態は脳의 エレジーを無駄にし、不安を誘発します。ベートーヴェンのように単純な身体的感覚と動作に完全に意識を集中させると、DMNの過活動が抑制され、現時点での脳の感覚領域が目覚めます。また、毎朝同じ行動儀式を経ることは、認知的フレーミングとして機能します。", // '脳の'
      zh: "指尖感受着咖啡豆细小圆润的触觉，将数字一颗一颗数出来的精细动作，在脑科学上是极佳的“正念（Mindfulness）”训练。早晨醒来时，大脑往往会通过联想昨天没完没了的烦恼或今天的复杂工作计划，过度激活默认模式网络（DMN）。这种状态会浪费大脑能量并诱发焦虑。像贝多芬那样将意识完全集中在简单的身体感觉和动作上，能抑制DMN的过度激活，唤醒当下的大脑感官区域。此外，每天早晨经历相同的行为仪式，可以作为认知的触发器，为大脑框定进入高度专注状态的路径。",
      es: "Concentrarse en acciones físicas precisas como contar granos de café es un excelente entrenamiento de 'Atención Plena' en neurociencia. Cuando nos despertamos por la mañana, el cerebro a menudo sobreactiva la Red Neuronal por Defecto (DMN) pensando en preocupaciones pendientes o planes de trabajo complejos. Este estado desperdicia energía y causa ansiedad. Centrarse en sensaciones físicas simples como el recuento de granos de Beethoven suprime la sobreactivación de la DMN y despierta las áreas sensoriales del cerebro. Además, pasar por el mismo ritual actúa como un disparador cognitivo que encuadra al cerebro para entrar en un estado de alta concentración.",
      fr: "Se concentrer sur des actions physiques précises comme compter des grains de café est un excellent entraînement de « Pleine conscience ». Au réveil, le cerveau suractive souvent le réseau du mode par défaut (DMN) en pensant aux soucis ou aux projets complexes. Cet état gaspille de l'énergie et génère de l'anxiété. Se concentrer sur des sensations physiques simples comme le comptage de grains de Beethoven supprime cette suractivation et éveille les zones sensorielles. De plus, accomplir le même rituel chaque matin agit comme un déclencheur cognitif qui prépare le cerveau à entrer en concentration.",
      de: "Sich auf präzise körperliche Handlungen wie das Zählen kleiner Kaffeebohnen zu konzentrieren, ist ein hervorragendes Achtsamkeitstraining. Wenn wir morgens aufwachen, aktiviert das Gehirn oft das DMN übermäßig, indem es an unerledigte Sorgen oder komplexe Pläne denkt. Dieser Zustand verschwendet Energie und erzeugt Angst. Die Konzentration auf einfache kognitiven Empfindungen.",
      pt: "Focar em ações físicas precisas, como contar grãos de café, é um excelente treino de 'Atenção Plena'. Quando acordamos de manhã, o cérebro muitas vezes sobreativa a Rede de Modo Padrão (DMN) ao pensar em preocupações pendentes ou planos de trabalho complexos. Este estado desperdiça energia e causa ansiedade. Centrar-se em sensações físicas simples, como a contagem de grãos de Beethoven, suprime a sobreativação da DMN e desperta as áreas sensoriais del cérebro. Além disso, passar pelo mesmo ritual atua como um gatilho cognitivo que enquadra o cérebro para entrar num estado de alta concentração.",
      id: "Fokus pada tindakan fisik yang tepat seperti menghitung biji kopi kecil adalah pelatihan 'Perhatian Penuh' yang sangat baik dalam ilmu saraf. Ketika kita bangun di pagi hari, otak sering kali mengaktifkan Default Mode Network (DMN) secara berlebihan dengan memikirkan kekhawatiran yang belum selesai atau rencana kerja yang rumit. Kondisi ini membuang-buang energi otak dan menimbulkan kecemasan. Berfokus pada sensasi & tindakan fisik sederhana."
    },
    steps: [
      {
        name: {
          en: "Set your own precise morning ritual item",
          ja: "自分だけの精巧な朝の儀式アイテムを設定する",
          zh: "设定专属于你的精细晨间仪式项目",
          es: "Establecer tu propio artículo de ritual matutino preciso",
          fr: "Définir votre propre objet de rituel matinal",
          de: "Ein eigenes präzises Morgenritual-Element festlegen",
          pt: "Definir o seu próprio item de ritual matinal preciso",
          id: "Tentukan item ritual pagi Anda yang tepat"
        },
        text: {
          en: "Instead of instant coffee or a machine, choose a morning tool that requires you to move your hands. A hand drip tool for grinding coffee beans or a tea set are excellent alternatives.",
          ja: "インスタントコーヒーやボタン一つの機械の代わりに、手を直接動かす朝の道具を決めます。コーヒー豆をハンドミルで直接挽いて淹れるハンドドリップ器具や、茶葉を急須に丁寧に分ける茶道セットなどが非常に優れた代替案です。",
          zh: "选择一种需要你动手操作的清晨工具，而不是速溶咖啡或一键启动的机器。手动磨豆机冲泡手冲咖啡，或者将茶叶精心放入茶壶的茶具，都是极好的替代选择。",
          es: "En lugar de café instantáneo o una máquina, elige una herramienta matutina que requiera mover las manos. Una herramienta de goteo manual para moler granos de café o un juego de té son excelentes alternativas.",
          fr: "Au lieu d'un café instantané ou d'une machine, choisissez un outil matinal qui demande de bouger les mains. Un moulin manuel pour moudre les grains ou un service à thé sont d'excellentes alternatives.",
          de: "Wählen Sie anstelle von Instantkaffee oder einer Maschine ein morgendliches Werkzeug, bei dem Sie Ihre Hände bewegen müssen. Ein Handfilter zum Mahlen von Kaffeebohnen oder ein Teeset sind hervorragende Alternativen.",
          pt: "Em vez de café instantâneo ou de uma máquina, escolha uma ferramenta matinal que exija mover as mãos. Uma ferramenta de goteamento manual para moer grãos de café ou um jogo de chá são excelentes alternativas.",
          id: "Alih-alih kopi instan atau mesin, pilihlah alat pagi hari que mengharuskan Anda menggerakkan tangan. Alat tetes tangan untuk menggiling biji kopi atau satu set teh adalah alternatif yang sangat baik."
        }
      },
      {
        name: {
          en: "Completely block external stimuli for 5 minutes of preparation",
          ja: "準備する5分間、外部刺激を完全に遮断する",
          zh: "在准备的5分钟内彻底阻断外部刺激",
          es: "Bloquear completamente los estímulos externos durante 5 minutos de preparación",
          fr: "Bloquer complètement les stimuli externes pendant 5 minutes de préparation",
          de: "Während der 5-minütigen Zubereitung äußere Reize komplett ausblenden",
          pt: "Bloquear completamente os estímulos externos durante 5 minutes de preparação",
          id: "Blokir rangsangan luar sepenuhnya selama 5 menit persiapan"
        },
        text: {
          en: "During the 5 minutes of preparing tea or counting beans, do not look at your smartphone screen and block verbal stimuli like news or conversation. Focus solely on physical sensations: the touch of the beans, the vibration of grinding, the sound of boiling water, and the aroma.",
          ja: "豆を数えたりお茶を淹れたりする5分間は、スマートフォンの画面を絶対に見ず、ニュースや会話などの言語的刺激を遮断します。ただ指先の感覚、コーヒーの香り、お湯の落ちる音だけに極度に集中します。",
          zh: "在数咖啡豆或泡茶的5分钟内，绝对不要看手机屏幕，阻断新闻或谈话等言语刺激。只专注于手指尖 of 触觉、转动磨豆机时传到手心的振动、水开的声音以及散发出来的茶香/咖啡香。",
          es: "Durante los 5 minutos de preparar el té o contar los granos, no mires la pantalla de tu teléfono y bloquea los estímulos verbales como las noticias o la conversación. Concéntrate únicamente en las sensaciones físicas.",
          fr: "Pendant les 5 minutes de préparation, ne regardez pas votre écran de smartphone et bloquez les stimuli verbaux (actualités, conversations). Concentrez-vous uniquement sur les sensations physiques.",
          de: "Schauen Sie während der 5 Minuten der Zubereitung nicht auf Ihr Smartphone und vermeiden Sie sprachliche Reize wie Nachrichten oder Gespräche. Konzentrieren Sie sich nur auf die kognitiven Empfindungen.",
          pt: "Durante os 5 minutos de preparação do chá ou contagem dos grãos, não olhe para o ecrã do telemóvel e bloqueie estímulos verbais como notícias ou conversas. Concentre-se unicamente nas sensações físicas.",
          id: "Selama 5 menit menyiapkan teh atau menghitung biji kopi, jangan melihat layar ponsel Anda dan blokir rangsangan luar seperti berita atau percakapan. Fokus semata-mata pada sensasi fisik."
        }
      },
      {
        name: {
          en: "Start focus mode while drinking slowly",
          ja: "落ち着いて一杯を飲みながら没頭モードを開始する",
          zh: "静心品记/饮咖啡，开启专注模式",
          es: "Iniciar el modo de enfoque mientras bebes lentamente",
          fr: "Lancer le mode concentration tout en buvant lentement",
          de: "Den Fokusmodus beim langsamen Trinken starten",
          pt: "Iniciar o modo de foco enquanto bebe lentamente",
          id: "Mulai mode fokus sambil minum perlahan"
        },
        text: {
          en: "Savor the prepared coffee or tea slowly. Maintain this calm brain state and immediately enter your first important task. Repeating this ritual at the same time every morning conditions the brain to recognize the coffee taste as a focus trigger.",
          ja: "丁寧に淹れたコーヒーやお茶を席に座ってゆっくり味わいます。この落ち着いて整えられた脳の状態を維持し、最初の重要な業務にすぐに突入します。繰り返すことで、集中モードの作動信号として条件付けます。",
          zh: "坐在位子上，慢慢品味精心冲泡的咖啡或茶。保持这种平静而整顿的大脑状态，立即投入到第一项重要工作中。每天早晨在同一时间重复这一仪式，大脑就会形成条件反射，将咖啡的味道视为“专注模式启动信号”。",
          es: "Saborea el café o té preparado lentamente. Mantén este estado cerebral tranquilo e ingresa inmediatamente a tu primera tarea importante. Repetir este ritual por la mañana condiciona al cerebro a reconocer el sabor como un disparador.",
          fr: "Savourez lentement le café ou le thé préparé. Maintenez cet état cérébral calme et attaquez immédiatement votre première tâche importante. Répéter ce rituel conditionne le cerveau à associer ce goût à la concentration.",
          de: "Genießen Sie den Kaffee oder Tee langsam. Nutzen Sie diesen ruhigen Zustand, um sofort mit Ihrer ersten wichtigen Aufgabe zu beginnen. Die tägliche Wiederholung konditioniert das Gehirn, den Geschmack als Startsignal zu erkennen.",
          pt: "Saboreie o café ou chá preparado lentamente. Mantenha este estado cerebral calmo e entre imediatamente na sua primeira tarefa importante. Repetir este ritual de manhã condiciona o cérebro a reconhecer o sabor como um gatilho.",
          id: "Nikmati kopi atau teh yang disiapkan secara perlahan. Pertahankan kondisi otak yang tenang ini & segera lakukan tugas penting pertama Anda."
        }
      }
    ],
    cautionTitle: {
      en: "A brain-scientific word for a successful routine",
      ja: "効果的なルーティンのための脳科学的な一言",
      zh: "成功惯例的脑科学建议",
      es: "Un consejo neurocientífico para una rutina exitosa",
      fr: "Un conseil neuroscientifique pour une routine réussie",
      de: "Ein gehirnwissenschaftlicher Ratschlag für eine erfolgreiche Routine",
      pt: "Um conselho neurocientífico para uma rotina de sucesso",
      id: "Saran ilmiah saraf untuk rutinitas yang sukses"
    },
    cautionDesc: {
      en: "If you rush to get ready in the morning, your brain remains cluttered throughout the day. Like Beethoven, stick to a precise morning ritual of focusing on your senses for just 5 minutes. A day started with a calm, synchronized brain has a completely different depth of concentration.",
      ja: "忙しい朝の時間にバタバタと準備して出勤すると、一日中脳は雑然とした状態から抜け出せません。ベートーヴェンのように、たった5分だけでも自分のために温かい感覚に集中する精巧な朝のリチュアルを守ってみてください。脳を落ち着かせて同期化し、整えておいた状態で始める一日は、集中力の深さ自体がまったく異なります。",
      zh: "如果在忙碌的早晨手忙脚乱地准备出门，大脑一整天都会处于杂乱的状态。像贝多芬一样，坚持用仅仅5分钟的时间，专注于自我感官的精细清晨仪式吧。在平静、同步的大脑状态下开启的一天，其专注力的深度是完全不同的。",
      es: "Si te apresuras a prepararte por la mañana, tu cerebro permanecerá desordenado durante todo el día. Al igual que Beethoven, mantén un ritual matutino preciso de concentrarte en tus sentidos durante solo 5 minutos. Un día que comienza con un cerebro tranquilo tiene una profundidad de concentración diferente.",
      fr: "Si vous vous pressez le matin, votre cerveau restera encombré toute la journée. Comme Beethoven, tenez-vous à un rituel matinal précis consistant à vous concentrer sur vos sens pendant seulement 5 minutes. Une journée commencée avec un cerveau calme offre une concentration bien plus profonde.",
      de: "Wenn Sie sich morgens beeilen, bleibt Ihr Gehirn den ganzen Tag über unruhig. Nehmen Sie sich wie Beethoven 5 Minuten Zeit für ein präzises Morgenritual, um sich auf Ihre Sinne zu konzentrieren. Ein so begonnener Tag ermöglicht eine ganz andere Tiefe der Konzentration.",
      pt: "Se se apressar a preparar-se de manhã, o seu cérebro permanecerá desordenado durante todo o dia. Tal como Beethoven, mantenha um ritual matinal preciso de se concentrar nos seus sentidos durante apenas 5 minutos. Um dia começado com um cérebro calmo tem uma profundidade de concentração diferente.",
      id: "Jika Anda terburu-buru bersiap-siap di pagi hari, otak Anda akan tetap kacau sepanjang hari. Seperti Beethoven, patuhi ritual pagi yang tepat untuk fokus pada indra Anda selama 5 menit saja. Hari yang dimulai dengan otak yang tenang memiliki kedalaman konsentrasi yang sangat berbeda."
    }
  },
  'churchill-afternoon-nap': {
    title: {
      en: "The Prime Minister Who Split the Day in Two? Winston Churchill's Afternoon Nap Routine",
      ja: "一日を二つに分割して使った首相？ウィンストン・チャーチルの午後昼寝ルーティン",
      zh: "把一天一分为二的首相？温斯顿·丘吉尔的午睡惯例",
      es: "¿El primer ministro que dividió el día en dos? La rutina de siesta por la tarde de Winston Churchill",
      fr: "Le Premier ministre qui a divisé la journée en deux ? La routine de sieste de Winston Churchill",
      de: "Der Premierminister, der den Tag in zwei Hälften teilte? Winston Churchills Mittagschlaf-Routine",
      pt: "O primeiro-ministro que dividiu o dia em dois? A rotina de sesta à tarde de Winston Churchill",
      id: "Perdana Menteri yang Membagi Hari Menjadi Dua? Rutinitas Tidur Siang Winston Churchill"
    },
    description: {
      en: "The British Prime Minister who led the victory in WWII, Winston Churchill. Learn about the power of the nap he took fully in bed every afternoon, and the Power Nap practice to clean the brain's fatigue.",
      ja: "第二次世界大戦の勝利を導いたイギリスの首相ウィンストン・チャーチル。毎日の午後に完全にベッドに横になって取った昼寝の力と、脳の疲労物質を掃除하는 파워냅(Power Nap)の実践法を紹介します。", // '掃除する'
      zh: "引领二战胜利的英国首相温斯顿·丘吉尔。了解他每天下午完全躺在床上度过的午睡力量，以及清除大脑疲劳物质的“强效午睡（Power Nap）”实践方法。",
      es: "El primer ministro británico que lideró la victoria en la Segunda Guerra Mundial, Winston Churchill. Conozca el poder de la siesta que tomaba en la cama cada tarde y la práctica de la siesta reparadora.",
      fr: "Le Premier ministre britannique qui a mené à la victoire lors de la Seconde Guerre mondiale, Winston Churchill. Découvrez le pouvoir de la sieste qu'il faisait chaque après-midi et la sieste reparatrice.",
      de: "Der britische Premierminister, der den Sieg im Zweiten Weltkrieg herbeiführte, Winston Churchill. Erfahren Sie mehr über die Kraft des täglichen Mittagschlafs und die Praxis des Power Naps zur Erholung.",
      pt: "O primeiro-ministro britânico que liderou a vitória na Segunda Guerra Mundial, Winston Churchill. Conheça o poder da sesta que tirava na cama todas as tardes e a prática da sesta reparadora.",
      id: "Perdana Menteri Inggris yang memimpin kemenangan dalam Perang Dunia II, Winston Churchill. Pelajari tentang kekuatan tidur siang yang dilakukannya di tempat tidur setiap sore, & latihan Power Nap."
    },
    authority: {
      en: "Winston Churchill's 'The Second World War' & NASA Astronaut Power Nap Study",
      ja: "ウィンストン・チャーチル 著『第二次世界大戦回顧録』＆ NASA 宇宙飛行士パワーナップ注意回復研究",
      zh: "温斯顿·丘吉尔著《第二次世界大战回忆录》及美国国家航空航天局(NASA)宇航员强效午睡注意力研究",
      es: "Obra de Winston Churchill 'The Second World War' y estudio de la NASA sobre la siesta reparadora de los astronautas",
      fr: "L'ouvrage de Winston Churchill 'La Deuxième Guerre mondiale' et l'étude de la NASA sur la sieste des astronautes",
      de: "Winston Churchills 'Der Zweite Weltkrieg' & NASA-Studie über Power Naps bei Astronauten",
      pt: "Obra de Winston Churchill 'The Second World War' e estudo da NASA sobre a sesta dos astronautas",
      id: "Buku Winston Churchill 'The Second World War' & Penelitian Power Nap Astronot NASA"
    },
    intro: {
      en: "Winston Churchill, the British Prime Minister during World War II who led the strong fight against Germany to secure the final victory of the Allies, and at the same time a historian and writer who won the Nobel Prize in Literature. How was he able to maintain his peak mental alertness without getting exhausted under the grueling state duties of over 18 hours a day? The secret lay in a very unique and firm 'nap routine' he had every afternoon. Every afternoon between 2:00 and 2:30 PM, Churchill stopped all state reports and went to his bedroom, undressed completely, and took a deep nap for 1 to 2 hours. This schedule was strictly protected even during the war. Churchill boasted that thanks to his nap, he was able to split the day into 'a day with two independent mornings.' Today, BuildSelf shares the neuroscientific truth behind Churchill's nap and the Power Nap practice for modern people to completely reset their fatigue.",
      ja: "第二次世界大戦という人類史上未曾有の危機の中で、イギリスの首相として強力なドイツ抗戦を指揮し、連合軍の最終的な勝利を牽引したウィンストン・チャーチル。毎日18時間を超える過酷な国政業務と戦況報告の中でも、彼が疲れることなく知的覚醒度を最上に維持できた原動力は何だったのでしょうか？秘訣は、毎日の午後に持っていた非常にユニークで確固たる「昼寝ルーティン」にありました。チャーチルは毎日午後2時から2時30分の間になると、例外なくすべての報告を中断し、寝室に入って服を完全に脱いで横になり、1〜2時間深い昼寝をしました。本日BuildSelfでは、脳の疲労物質を掃除するパワーナップ（Power Nap）の実践法を伝えます。",
      zh: "温斯顿·丘吉尔在第二次世界大战期间担任英国首相，领导同盟国取得了最终胜利，同时他也是诺贝尔文学奖获得者。在每天超过18小时的繁重国政业务和战况报告下，他是如何保持最顶峰的精神觉醒状态而不感到疲惫的？秘诀就在于他每天下午都有着非常独特且固定的“午睡惯例”。每天下午2点到2点30分之间，丘吉尔会无一例外地中断所有国政报告，回到卧室脱光衣服躺下，进行1到2小时的深度午睡。这一日程在战争期间也得到了严格保护。丘吉尔自豪地宣称，得益于午睡，他能把一天一分为二。今天，BuildSelf为您分享丘吉尔午睡背后的脑科学奥秘，以及现代人如何通过强效午睡完全重置疲劳。",
      es: "Winston Churchill, el primer ministro británico durante la Segunda Guerra Mundial que lideró la lucha contra Alemania para asegurar la victoria final de los Aliados, y al mismo tiempo historiador y escritor ganador del Premio Nobel de Literatura. ¿Cómo era capaz de mantener su máximo estado de alerta mental sin agotarse bajo las agotadoras tareas estatales de más de 18 horas al día? El secreto residía en una rutina de siesta muy singular y firme que realizaba cada tarde. Cada tarde, entre las 2:00 y las 2:30 p. m., Churchill interrumpía todos los informes y se iba a su dormitorio, se desnudaba por completo y tomaba una siesta profunda de 1 a 2 horas. Hoy, BuildSelf comparte la verdad neurocientífica detrás de la siesta de Churchill y la siesta reparadora.",
      fr: "Winston Churchill, le Premier ministre britannique pendant la Seconde Guerre mondiale qui a mené la lutte contre l'Allemagne pour assurer la victoire finale des Alliés. Comment était-il capable de maintenir sa vigilance mentale maximale sans s'épuiser sous les tâches étatiques de plus de 18 heures par jour ? Le secret résidait dans une routine de sieste très singulière qu'il faisait chaque après-midi. Chaque après-midi, entre 14h00 et 14h30, Churchill interrompait tous les rapports et allait dans sa chambre, se déshabillait complètement et faisait une sieste profonde de 1 à 2 heures. Aujourd'hui, BuildSelf partage la vérité neuroscientifique derrière la sieste de Churchill.",
      de: "Winston Churchill, der britische Premierminister im Zweiten Weltkrieg, der den Kampf gegen Deutschland anführte, und Literaturnobelpreisträger. Wie konnte er bei einer täglichen Arbeitszeit von über 18 Stunden seine geistige Fitness aufrechterhalten? Das Geheimnis lag in einer Mittagschlaf-Routine. Jeden Nachmittag zwischen 14:00 und 14:30 Uhr unterbrach er alle Staatsgeschäfte, zog sich im Schlafzimmer komplett aus und schlief ein bis zwei Stunden tief. Heute stellt BuildSelf die wissenschaftlichen Erkenntnisse dahinter vor.",
      pt: "Winston Churchill, o primeiro-ministro britânico durante a Segunda Guerra Mundial que lideró la lucha contra la Alemania para garantizar la victoria final de los Aliados, y al mismo tiempo historiador y escritor vencedor del Prémio Nobel de Literatura. Como era capaz de manter o seu estado de alerta mental máximo sem se esgotar sob as tarefas estatais de mais de 18 horas por dia? O segredo residia numa rotina de sesta muito singular que realizava todas as tardes. Todas as tardes, entre as 14h00 e as 14h30, Churchill interrompia todos os relatórios e ia para o seu quarto, despia-se completamente e tirava uma sesta profunda de 1 a 2 horas. Hoje, o BuildSelf partilha a verdade neurocientífica por trás da sesta de Churchill.",
      id: "Winston Churchill, Perdana Menteri Inggris selama Perang Dunia II yang memimpin perjuangan kuat melawan Jerman untuk memastikan kemenangan akhir Sekutu, & pada saat yang sama seorang sejarawan & penulis pemenang Hadiah Nobel Sastra. Bagaimana dia bisa menjaga kewaspadaan mental puncaknya tanpa kelelahan di bawah tugas-tugas negara yang melelahkan selama lebih dari 18 jam sehari? Rahasianya terletak pada rutinitas tidur siang yang sangat unik & kokoh yang dia lakukan setiap sore. Setiap sore antara pukul 14.00 & 14.30, Churchill menghentikan semua laporan negara & pergi ke kamar tidurnya, menanggalkan pakaian sepenuhnya, & tidur nyenyak selama 1 hingga 2 jam."
    },
    whyTitle: {
      en: "The Science of Napping: Clearing the Brain's Waste",
      ja: "脳の老廃物を掃除する昼寝の科学",
      zh: "清除大脑垃圾的午睡科学",
      es: "La ciencia de la siesta: Limpiar los desechos del cerebro",
      fr: "La science de la sieste : Éliminer les toxines du cerveau",
      de: "Die Wissenschaft des Mittagschlafs: Den Gehirnabfall entsorgen",
      pt: "A ciência da sesta: Limpar os resíduos do cérebro",
      id: "Ilmu Tidur Siang: Membersihkan Kotoran Otak"
    },
    whyDesc: {
      en: "While humans are awake and active, a fatigue substance called adenosine constantly accumulates between brain cells. When adenosine accumulates above a certain level, the brain's cognitive ability drops sharply and information processing speed slows down. A short nap in the afternoon quickly decomposes this adenosine, clearing the fatigue of brain cells. In particular, a short nap of about 20 minutes is timed to wake up before the brain falls into deep sleep (NREM stage 3), so it restores high alertness and attention without 'sleep inertia' (the groggy state after waking up). The 'two days' Churchill mentioned is not just a feeling, but a scientific fact that the brain actually met morning alertness twice.",
      ja: "人が起きて活動する間、脳細胞の間にはアデノシン（Adenosine）という疲労物質が絶えず蓄積されます。アデノシンが一定量以上蓄積されると、脳は認知能力が急激に低下し、情報処理速度が遅くなります。午後の時間の短い昼寝は、このアデノシンを素早く分解して脳細胞の疲労を掃除してくれます。特に20分前後の短い昼寝は、脳が深い睡眠段階に陥る前に目覚めるように調整するため、睡眠慣性（Sleep Inertia）なしに、すぐに朝と同等の高度な警戒力と注意力を復旧してくれます。チャーチルが言った「二つの独立した朝」は、科学的な事実です。",
      zh: "当人类清醒并处于活动状态时，大脑细胞之间会不断积累一种名为腺苷（Adenosine）的疲劳物质。当腺苷积累到一定程度时，大脑的认知能力就会急剧下降，信息处理速度也会变慢。下午进行短暂的午睡可以迅速分解这种腺苷，清除脑细胞的疲劳。特别是20分钟左右的短时间午睡，可以让大脑在陷入深层睡眠（NREM第3阶段）之前醒来，因此能够恢复到像早晨一样高度的警觉性和注意力，而不会产生“睡眠惯性”（醒来后昏昏沉沉的状态）。丘吉尔所说的一天一分为二，是科学事实。",
      es: "Mientras los humanos están despiertos y activos, una sustancia de fatiga llamada adenosina se acumula constantemente entre las células cerebrales. Cuando se acumula por encima de cierto nivel, la capacidad cognitiva del cerebro disminuye drásticamente y la velocidad de procesamiento de la información se ralentiza. Una siesta corta descompone rápidamente esta adenosina, limpiando la fatiga de las células. En particular, una siesta de unos 20 minutos permite despertarse antes de caer en el sueño profundo, restaurando la alerta sin 'inercia del sueño'.",
      fr: "Lorsque nous sommes éveillés, une substance de fatigue appelée adénosine s'accumule constamment entre les cellules cérébrales. Au-delà d'un certain niveau, la capacité cognitive chute et le traitement des informations ralentit. Une courte sieste décompose rapidement cette adénosine, éliminant la fatigue. En particulier, une sieste de 20 minutes permet de se réveiller avant d'entrer en sommeil profond, restaurant la vigilance sans « inertie du sommeil ».",
      de: "Während wir wach sind, reichert sich zwischen den Gehirnzellen ständig der müdigkeitsfördernde Stoff Adenosin an. Wenn das Adenosin ein bestimmtes Niveau überschreitet, sinkt die kognitive Leistungsfähigkeit drastisch. Ein kurzer Mittagschlaf baut dieses Adenosin schnell ab und regeneriert die Gehirnzellen. Ein Power Nap von etwa 20 Minuten sorgt dafür, dass man aufwacht, bevor das Gehirn in den Tiefschlaf fällt, und stellt die Aufmerksamkeit ohne Schlaftrunkenheit wieder her.",
      pt: "Enquanto estamos acordados e ativos, uma substância de fadiga chamada adenosina acumula-se constantemente entre as células cerebrais. Quando esta se acumula acima de um certo nível, la capacidade cognitiva do cérebro diminui drasticamente e a velocidade de processamento da informação abranda. Uma sesta curta decompõe rapidamente esta adenosina, limpando a fadiga das células. En particular, uma sesta de cerca de 20 minutos permite acordar antes de entrar no sono profundo, restaurando o alerta sem 'inércia do sono'.",
      id: "Saat manusia terjaga dan aktif, zat kelelahan yang disebut adenosin terus menumpuk di antara sel-sel otak. Ketika adenosin menumpuk di atas tingkat tertentu, kemampuan kognitif otak menurun tajam dan kecepatan pemrosesan informasi melambat. Tidur siang singkat di sore hari dengan cepat mengurai adenosin ini, membersihkan kelelahan sel-sel otak. Secara khusus, tidur siang singkat sekitar 20 menit diatur waktunya untuk bangun sebelum otak tertidur lelap (NREM tahap 3), sehingga memulihkan kewaspadaan dan perhatian tinggi tanpa 'inersia tidur' (keadaan pusing setelah bangun tidur)."
    },
    steps: [
      {
        name: {
          en: "Set a timer between 1 PM and 2 PM",
          ja: "午後1時から2時の間にタイマーを設定する",
          zh: "在下午1点到2点之间设置定时器",
          es: "Establecer un temporizador entre la 1 p. m. y las 2 p. m.",
          fr: "Régler un minuteur entre 13h00 et 14h00",
          de: "Einen Timer zwischen 13:00 und 14:00 Uhr stellen",
          pt: "Definir um temporizador entre as 13h00 e as 14h00",
          id: "Atur pengatur waktu antara jam 1 siang dan 2 siang"
        },
        text: {
          en: "Between 1 PM and 2 PM, when drowsiness and fatigue peak after lunch, switch your smartphone to do-not-disturb mode. Set the alarm for exactly 20 minutes to prevent sleep inertia. It is best to finish before 3 PM so it does not interfere with nighttime sleep.",
          ja: "昼食後の眠気と疲労が集中する午後1時から2時の間に、スマートフォンを応答不可モードに切り替えます。そして睡眠慣性を防ぐために、アラームを正確に20分後に設定します。夜の睡眠を妨げないよう、午後3時前に終えるのが良いです。",
          zh: "午饭后困意和疲劳达到顶峰的下午1点到2点之间，将手机切换至免打扰模式。将闹钟精确设置为20分钟，以防止睡眠惯性。最好在下午3点之前结束，以免干扰夜间睡眠。",
          es: "Entre la 1 y las 2 p. m., cuando la somnolencia y la fatiga alcanzan su punto máximo después del almuerzo, pon tu teléfono en modo no molestar. Configura la alarma exactamente a los 20 minutos para evitar la inercia del sueño. Es mejor terminar antes de las 3 p. m.",
          fr: "Entre 13h00 et 14h00, lorsque la somnolence après le déjeuner est à son comble, passez votre smartphone en mode ne pas déranger. Réglez l'alarme sur 20 minutes exactement pour éviter l'inertie du sommeil. Terminez avant 15h00.",
          de: "Schalten Sie das Smartphone zwischen 13:00 und 14:00 Uhr, wenn die Müdigkeit nach dem Mittagessen am größten ist, in den Nicht-Stören-Modus. Stellen Sie den Wecker auf genau 20 Minuten. Beenden Sie den Schlaf vor 15:00 Uhr.",
          pt: "Entre as 13h00 e as 14h00, quando a sonolência e a fadiga atingem o pico após o almoço, coloque o smartphone no modo não incomodar. Defina o alarme para exatamente 20 minutos para evitar la inércia do sono. É melhor terminar antes das 15h00.",
          id: "Antara jam 1 siang dan 2 siang, saat rasa kantuk dan kelelahan memuncak setelah makan siang, alihkan ponsel Anda ke mode jangan ganggu. Atur alarm tepat 20 menit untuk mencegah inersia tidur. Sebaiknya selesaikan sebelum jam 3 sore."
        }
      },
      {
        name: {
          en: "Block visual information and close your eyes",
          ja: "視覚情報を遮断して目を閉じる",
          zh: "阻断视觉信息并闭上眼睛",
          es: "Bloquear la información visual y cerrar los ojos",
          fr: "Bloquer les informations visuelles et fermer les yeux",
          de: "Visuelle Reize ausblenden und die Augen schließen",
          pt: "Bloquear a informação visual e fechar os olhos",
          id: "Blokir informasi visual dan pejamkan mata Anda"
        },
        text: {
          en: "Lean back in a comfortable chair or lie in bed, and use an eye mask or earplugs to minimize external stimuli. Even if you cannot fall into a deep sleep, just closing your eyes and blocking visual information puts the visual cortex into rest mode, greatly reducing cognitive fatigue.",
          ja: "快適な椅子にもたれて座るかベッドに横たわった後、アイマスクや耳栓を活用して外部刺激を最小限に抑えます。目を閉じて視覚情報を遮断するだけで、脳の視覚皮質が休息モードに入り、認知疲労が大幅に減少します。",
          zh: "斜靠在舒适的椅子上或躺在床上，使用眼罩或耳塞将外部刺激降到最低。即使无法进入深度睡眠，仅闭上眼睛阻断视觉信息，也能让大脑的视觉皮层进入休息模式，大幅减轻认知疲劳。",
          es: "Apóyate en una silla cómoda o acuéstate en la cama, y usa un antifaz o tapones para los oídos para minimizar los estímulos externos. Incluso si no puedes conciliar un sueño profundo, cerrar los ojos reduce en gran medida la fatiga cognitiva.",
          fr: "Installez-vous confortablement et utilisez un masque ou des bouchons d'oreilles. Même si vous ne vous endormez pas profondément, le simple fait de fermer les yeux et de bloquer la lumière met le cortex visuel au repos, réduisant la fatigue.",
          de: "Lehnen Sie sich in einem bequemen Stuhl zurück oder legen Sie sich ins Bett. Nutzen Sie eine Schlafmaske oder Ohrstöpsel. Selbst wenn Sie nicht tief einschlafen, entlastet das bloße Schließen der Augen die Sehrinde und mindert die Müdigkeit.",
          pt: "Encoste-se numa cadeira confortável ou deite-se na cama, e use uma máscara de olhos ou protetores auriculares para minimizar estímulos externos. Mesmo que não consiga dormir profundamente, fechar os olhos reduz muito a fadiga cognitiva.",
          id: "Bersandarlah di kursi yang nyaman atau berbaring di tempat tidur, dan gunakan masker mata atau penyumbat telinga untuk meminimalkan rangsangan luar. Bahkan jika Anda tidak bisa tidur nyenyak, hanya memejamkan mata sangat mengurangi kelelahan kognitif."
        }
      },
      {
        name: {
          en: "Wake up immediately when the alarm rings",
          ja: "アラームが鳴ったら躊躇なく起きる",
          zh: "闹钟响起时毫不犹豫地起床",
          es: "Despertarse inmediatamente cuando suene la alarma",
          fr: "Se réveiller immédiatement lorsque l'alarme retentit",
          de: "Sofort aufstehen, wenn der Wecker klingelt",
          pt: "Acordar imediatamente quando o alarme tocar",
          id: "Bangun segera setelah alarm berbunyi"
        },
        text: {
          en: "When the 20-minute alarm rings, shake off the temptation to lie down longer and get up immediately. Drink a glass of cold water to awaken your body's senses and stretch lightly. Resume your afternoon work feeling your brain running fresh again like morning.",
          ja: "20分のアラームが鳴ったら、もっと横になっていたい誘惑を振り切ってすぐに起きます。冷たい水を一杯飲んで体の感覚を目覚めさせ、軽くストレッチをします。脳が再び朝のように爽快に動くのを感じながら、午後の業務を再開します。",
          zh: "当20分钟的闹钟响起时，甩掉多躺一会儿的诱惑，立即起床。喝一杯凉水唤醒身体的感官，做一下轻微的拉伸。感受大脑重新像早晨一样清醒，然后继续下午的工作。",
          es: "Cuando suene la alarma de 20 minutos, descarta la tentación de acostarte más tiempo y levántate de inmediato. Bebe un vaso de agua fría para despertar tus sentidos y estírate ligeramente. Reanuda tu trabajo sintiéndote renovado.",
          fr: "Lorsque l'alarme de 20 minutes retentit, surmontez la tentation de rester allongé et levez-vous immédiatement. Buvez un verre d'eau fraîche pour réveiller vos sens et étirez-vous légèrement. Reprenez votre travail l'esprit frais.",
          de: "Wenn der Wecker nach 20 Minuten klingelt, widerstehen Sie der Versuchung, liegen zu bleiben, und stehen Sie sofort auf. Trinken Sie ein Glas kaltes Wasser und dehnen Sie sich leicht. Setzen Sie Ihre Arbeit mit frischer Energie fort.",
          pt: "Quando o alarme de 20 minutos tocar, afaste a tentação de se deitar mais tempo e levante-se imediatamente. Beba um copo de água fria para despertar os sentidos e alongue levemente. Retome o trabalho sentindo-se renovado.",
          id: "Ketika alarm 20 menit berbunyi, hilangkan godaan untuk berbaring lebih lama & segera bangun. Minum air dingin."
        }
      }
    ],
    cautionTitle: {
      en: "A brain-scientific word for a successful routine",
      ja: "効果的なルーティンのための脳科学的な一言",
      zh: "成功惯例的脑科学建议",
      es: "Un consejo neurocientífico para una rutina exitosa",
      fr: "Un conseil neuroscientifique pour une routine réussie",
      de: "Ein gehirnwissenschaftlicher Ratschlag für eine erfolgreiche Routine",
      pt: "Um conselho neurocientífico para uma rotina de sucesso",
      id: "Saran ilmiah saraf untuk rutinitas yang sukses"
    },
    cautionDesc: {
      en: "Sitting blankly at your desk in the afternoon with low concentration greatly reduces productivity. Instead of forcing yourself through that inefficiency, recharge your focus with a 20-minute power nap like Churchill. Your brain will be optimized, allowing you to immerse yourself in the rest of the day with a fresh and clear mind.",
      ja: "午後に集中力が低下したまま机の前にぼんやりと座っている時間は、生産性を大幅に低下させます。その非効率を無理に耐える代わりに、チャーチルのようにたった20分の完全なパワーナップを通じて、午後の日課を新しく始めるエネルギーを充電してみてください。脳が最適化され、残りの一日を完全に新しく澄んだ精神で没頭できるようになります。",
      zh: "下午在注意力低下的情况下呆坐在书桌前会大大降低工作效率。与其强迫自己忍受这种低效，不如像丘吉尔一样，通过短暂的20分钟强效午睡来重获专注力。你的大脑将得到优化，让你在接下来的时间里以清新、清醒的头脑全身心投入工作。",
      es: "Sentarse sin pensar en el escritorio por la tarde con baja concentración reduce en gran medida la productividad. En lugar de forzarte a soportar esa ineficiencia, recarga tu enfoque con una siesta reparadora de 20 minutos como Churchill. Tu cerebro se optimizará, permitiéndote sumergirte en el resto del día.",
      fr: "Rester assis sans concentration l'après-midi réduit grandement la productivité. Plutôt que de forcer, rechargez vos batteries avec une sieste de 20 minutes comme Churchill. Votre cerveau sera optimisé, vous permettant de vous investir pour le reste de la journée.",
      de: "Nachmittags unkonzentriert am Schreibtisch zu sitzen, mindert die Produktivität. Anstatt sich durch diese Ineffizienz zu quälen, laden Sie Ihren Fokus mit einem 20-minütigen Power Nap auf. Ihr Gehirn wird optimiert, sodass Sie den Rest des Tages mit klarem Kopf arbeiten können.",
      pt: "Sentar-se sem concentração na secretária à tarde reduz muito a produtividade. Em vez de se forçar a sesta, recarregue o seu foco com uma sesta de 20 minutos como Churchill. O seu cérebro será otimizado, permitindo-lhe mergulhar no resto do dia.",
      id: "Duduk termenung di meja Anda di sore hari dengan konsentrasi rendah sangat mengurangi produktivitas. Daripada memaksakan diri melalui ketidakefisienan itu, isi ulang fokus Anda dengan tidur siang 20 menit seperti Churchill. Otak Anda akan dioptimalkan, memungkinkan Anda membenamkan diri dalam sisa hari itu."
    }
  }
};

function run() {
  let createdCount = 0;

  Object.entries(translationData).forEach(([blogSlug, data]) => {
    const koPath = pathModule.join(blogRoot, 'ko', `${blogSlug}.md`);
    if (!fs.existsSync(koPath)) {
      console.warn(`[경고] ko 원본 파일이 없습니다: ${blogSlug}.md`);
      return;
    }

    const koContent = fs.readFileSync(koPath, 'utf-8');
    const pubDateMatch = koContent.match(/pubDate:\s*"([^"]+)"/);
    const pubDate = pubDateMatch ? pubDateMatch[1] : '2026-06-30';
    const updatedDateMatch = koContent.match(/updatedDate:\s*"([^"]+)"/);
    const updatedDate = updatedDateMatch ? updatedDateMatch[1] : null;

    languages.forEach(lang => {
      const targetDir = pathModule.join(blogRoot, lang);
      const targetPath = pathModule.join(targetDir, `${blogSlug}.md`);

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      const title = data.title[lang];
      const description = data.description[lang];
      const authority = data.authority[lang];
      const intro = data.intro[lang];
      const whyTitle = data.whyTitle[lang];
      const whyDesc = data.whyDesc[lang];
      const cautionTitle = data.cautionTitle[lang];
      const cautionDesc = data.cautionDesc[lang];

      const rawTags = lang === 'en' 
        ? ["Great Habits", blogSlug.split('-')[0], "Routine", "Stamina"]
        : [data.title[lang].substring(0, 10), "Routine"];
      const tags = JSON.stringify(rawTags);

      const steps = [];
      const stepCards = [];

      data.steps.forEach((step, idx) => {
        const stepIdx = idx + 1;
        const sName = step.name[lang];
        const sText = step.text[lang];

        steps.push({ name: sName, text: sText });

        stepCards.push(`<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 tracking-wider">${lang === 'ja' ? 'ステップ' : lang === 'zh' ? '步骤' : lang === 'fr' ? 'ÉTAPE' : lang === 'es' || lang === 'pt' ? 'PASO' : lang === 'id' ? 'LANGKAH' : lang === 'de' ? 'SCHRITT' : 'STEP'} ${stepIdx}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${sName}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${sText}
  </p>
</div>`);
      });

      const stepsYaml = steps.map(s => `  - name: "${s.name.replace(/"/g, '\\"')}"\n    text: "${s.text.replace(/"/g, '\\"')}"`).join('\n');

      const fileContent = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
pubDate: "${pubDate}"
${updatedDate ? `updatedDate: "${updatedDate}"\n` : ''}category: "BuildSelf"
tags: ${tags}
heroImage: "/images/blog/${blogSlug.replace(/-/g, '_')}.png"
app: "buildself"
authority: "${authority.replace(/"/g, '\\"')}"
steps:
${stepsYaml}
---

${intro}

<div class="my-8 p-6 rounded-[2rem] border border-indigo-500/10 bg-indigo-500/5 dark:border-indigo-500/20 dark:bg-indigo-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-indigo-800 dark:text-indigo-300 m-0">
      ${lang === 'ja' ? '歴史的＆学術的根拠' : lang === 'zh' ? '历史与学术依据' : lang === 'es' ? 'Fundamento Histórico y Académico' : lang === 'fr' ? 'Fondement Historique & Académique' : lang === 'de' ? 'Historischer & Wissenschaftlicher Beleg' : lang === 'pt' ? 'Base Histórica e Acadêmica' : lang === 'id' ? 'Bukti Sejarah & Akademik' : 'Historical & Academic Evidence'}
    </h5>
    <p class="text-xs text-indigo-700/80 dark:text-indigo-400/80 m-0 mt-1.5 leading-relaxed">
      ${lang === 'ja' ? '本コンテンツは、' : lang === 'zh' ? '本内容基于' : lang === 'es' ? 'Este contenido se basa en' : lang === 'fr' ? 'Ce contenu est basé sur' : lang === 'de' ? 'Dieser Inhalt basiert auf' : lang === 'pt' ? 'Este conteúdo baseia-se em' : lang === 'id' ? 'Konten ini didasarkan pada' : 'This content is based on'} <strong>${authority}</strong>.
    </p>
  </div>
</div>

---

## 1. ${whyTitle}

${whyDesc}

---

## 2. ${lang === 'ja' ? '現代人のための実践ルーティン 3段階' : lang === 'zh' ? '适合现代人的三步实践惯例' : lang === 'es' ? 'Rutina Práctica de 3 Pasos para el Profesional Moderno' : lang === 'fr' ? 'Routine Pratique en 3 Étapes pour l’Homme Moderne' : lang === 'de' ? 'Praktische 3-Schritte-Routine für den Alltag' : lang === 'pt' ? 'Rotina Prática de 3 Passos para o Profissional Moderno' : lang === 'id' ? '3 Langkah Rutinitas Praktis untuk Manusia Modern' : '3-Step Practical Routine for Modern Professionals'}

${stepCards.join('\n\n')}

---

## 3. ${cautionTitle}

<div class="my-6 p-5 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-start gap-4">
  <span class="text-xl">💡</span>
  <div>
    <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
      ${cautionDesc}
    </p>
  </div>
</div>
`;

      fs.writeFileSync(targetPath, fileContent, 'utf-8');
      createdCount++;
    });
  });

  console.log(`[완료] 총 ${createdCount}개의 다국어 BuildSelf 습관 블로그 파일이 정상적으로 생성되었습니다!`);
}

run();
