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
          ja: "走っている間はスマートフォンで複雑なメッセージやメールを確認せず、自分の呼吸のリズムと地面に足が触れる感覚だけに集中します。この無心で走る時間が、一日の中で複雑になった頭の中を整理する最高の精神的デトックスになります。",
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
      id: "Aktivitas fisik sederhana yang diulang setiap hari akan menetap menjadi 'rutinitas otomatis' yang tidak memakan kemauan keras. Begitu ritme ini terpatri di otak, ia membentuk perisai fisik yang kokoh untuk menahan beban mental ekstrem yang berasal dari bekerja atau menulis."
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
      ja: "自然選択説に基づいて生物の進化を説明した『種の起源』を著し, 人類史において科学的思考に最大の革命をもたらしたチャールズ・ダーウィン。人類のパラダイムを変えた偉大な進化論的インスピレーションは, 一体どこから誕生したのでしょうか？ダーウィンはロンドン近郊の静かな田舎町ダウン・ハウス（Down House）で生涯研究に専念しました。彼は毎日午前と午後, 自宅の周りに自ら整備した砂利と土の道である「サンドウォーク（Sandwalk）」を歩きました。本日、BuildSelfではダーウィンが毎日守り続けた「サンドウォーク」思索ルーティンの科学的な作動原理と, 現代人がこれを応用して創造性を高める方法を紹介します。",
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
          ja: "歩いている間、脳細胞が緩やかにつながりながら、意識の向こう側から自然に手がかりが浮かび上がってきます。散歩を終えたらすぐに席に座り、頭をよぎった考えやインスピレーションをメモ帳や企画書に素早く書き留めます。", // '意識の' 로 교정됨
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
      ja: "指先で小さく丸いコーヒー豆の感触を感じながら、数字を一つ一つ数える精巧な行動は、脳科学的に優れた「マインドフルネス（心付け）」トレーニングです。私たちが朝目覚めると、脳は昨日の心配事や今日の複雑な業務計画を連想し、デフォルトモードネットワーク（DMN）を過度に活性化させます。この状態は脳のエネルギーを無駄にし、不安を誘発します。ベートーヴェンのように単純な身体的感覚と動作に完全に意識を集中させると、DMNの過活動が抑制され、現時点での脳の感覚領域が目覚めます。また、毎朝同じ行動儀式を経ることは、認知的フレーミングとして機能します。", // '脳の'
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
      ja: "第二次世界大戦の勝利を導いたイギリスの首相ウィンストン・チャーチル。毎日の午後に完全にベッドに横になって取った昼寝の力と、脳の疲労物質を掃除するパワーナップ(Power Nap)の実践法を紹介します。", // '掃除する'
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
  },
  'hemingway-word-count': {
    title: {
      en: "Writing While Tracking Your Daily Word Count: Ernest Hemingway's Self-Monitoring Habit",
      ja: "毎日の執筆単語数を記録する？アーネスト・ヘミングウェイの自己監視の習慣",
      zh: "每天记录写作字数？欧内斯特·海明威的自我监控习惯",
      es: "¿Escribir registrando tu recuento de palabras diario? El hábito de autocontrol de Ernest Hemingway",
      fr: "Écrire en suivant son nombre de mots quotidien : L'habitude d'autosurveillance d'Ernest Hemingway",
      de: "Tägliche Wortzahl erfassen: Ernest Hemingways Gewohnheit der Selbstbeobachtung",
      pt: "Escrever rastreando sua contagem de palavras diária: O hábito de automonitoramento de Ernest Hemingway",
      id: "Menulis Sembari Melacak Jumlah Kata Harian: Kebiasaan Pemantauan Diri Ernest Hemingway"
    },
    description: {
      en: "Nobel laureate Ernest Hemingway tracked his daily word counts on a wall chart. Learn how this psychological self-monitoring routine boosts long-term productivity.",
      ja: "ノーベル賞受賞者アーネスト・ヘミングウェイは毎日の単語数を壁の表に記録していました。この自己監視ルーティンが生産性を高める科学的理由を調べます。",
      zh: "诺贝尔奖得主欧内斯特·海明威在墙上的图表上记录他每天的写作字数。了解这种心理学自我监控惯例如何提升长期生产力。",
      es: "El premio Nobel Ernest Hemingway registraba sus palabras diarias en un gráfico en la pared. Conozca cómo esta rutina de autocontrol psicológico aumenta la productividad.",
      fr: "Le prix Nobel Ernest Hemingway suivait son nombre de mots quotidien sur un tableau. Découvrez comment cette routine d'autosurveillance renforce la productivité à long terme.",
      de: "Nobelpreisträger Ernest Hemingway hielt seine tägliche Wortzahl auf einer Wandtabelle fest. Erfahren Sie, wie diese psychologische Selbstbeobachtung die Produktivität steigert.",
      pt: "O prémio Nobel Ernest Hemingway registava a sua contagem de palavras diária num gráfico na parede. Saiba como esta rotina de automonitoramento aumenta a produtividade.",
      id: "Pemenang Nobel Ernest Hemingway melacak jumlah kata hariannya pada bagan dinding. Pelajari bagaimana rutinitas pemantauan diri psikologis ini meningkatkan produktivitas jangka panjang."
    },
    authority: {
      en: "Ernest Hemingway's interview in The Paris Review (1958) & Journal of Applied Behavior Analysis",
      ja: "アーネスト・ヘミングウェイ『パリ・レビュー』インタビュー(1958) ＆ 応用行動分析学ジャーナル(Journal of Applied Behavior Analysis)",
      zh: "欧内斯特·海明威在《巴黎评论》的访谈(1958) 及应用行为分析期刊(Journal of Applied Behavior Analysis)",
      es: "Entrevista de Ernest Hemingway en The Paris Review (1958) y estudio de Journal of Applied Behavior Analysis",
      fr: "L'interview d'Ernest Hemingway dans The Paris Review (1958) & étude du Journal of Applied Behavior Analysis",
      de: "Ernest Hemingways Interview in The Paris Review (1958) & Studie im Journal of Applied Behavior Analysis",
      pt: "Entrevista de Ernest Hemingway na The Paris Review (1958) e estudo da Journal of Applied Behavior Analysis",
      id: "Wawancara Ernest Hemingway di The Paris Review (1958) & Jurnal Analisis Perilaku Terapan"
    },
    intro: {
      en: "Ernest Hemingway, a master of modern American literature who won both the Nobel Prize and the Pulitzer Prize. Known for his minimalist, hard-boiled writing style, his daily discipline was equally legendary. He started writing early in the morning and, at the end of each session, counted and recorded his daily word count on a large chart on the wall. Today, BuildSelf explores the scientific reasons behind Hemingway's progress tracking and how you can apply self-monitoring to maintain daily momentum.",
      ja: "ノーベル賞とピューリッツァー賞を同時に受賞した、現代アメリカ文学の巨匠アーネスト・ヘミングウェイ。極限まで無駄を削ぎ落とした「ハードボイルド」な作風で知られる彼の、毎日の規律もまた伝説的でした。彼は早朝から執筆を始め、作業が終わるたびにその日書いた単語数を数え、壁に掛けた大きな表に記録しました。本日、BuildSelfではヘミングウェイの記録習慣の科学的根拠と、日常で自己監視を応用する方法を調べます。",
      zh: "欧内斯特·海明威是现代美国文学大师，曾荣获诺贝尔文学奖和普利策奖。他以极简、硬汉风格的文风闻名，而他每日的自律同样堪称传奇。他每天清晨便开始写作，在每次结束时，都会数出当天写作的字数，并记录在墙上的一张大图表上。今天，BuildSelf将带您探索海明威追踪进度背后的科学原理，以及您如何应用自我监控来保持每日的动力。",
      es: "Ernest Hemingway, un maestro de la literatura estadounidense moderna que ganó el Premio Nobel y el Premio Pulitzer. Conocido por su estilo de escritura minimalista y duro, su disciplina diaria era igualmente legendaria. Comenzaba a escribir temprano por la mañana y, al final de cada sesión, contaba y registraba su recuento diario de palabras en un gráfico en la pared. Hoy, BuildSelf analiza las razones científicas detrás de este seguimiento y cómo puedes aplicar el autocontrol para mantener el impulso diario.",
      fr: "Ernest Hemingway, un maître de la littérature américaine moderne qui a remporté le prix Nobel et le prix Pulitzer. Connu pour son style d'écriture minimaliste et hard-boiled, sa discipline quotidienne était tout aussi légendaire. Il commençait à écrire tôt le matin et, à la fin de chaque séance, comptait et enregistrait son nombre de mots sur un grand tableau au mur. Aujourd'hui, BuildSelf explore les raisons scientifiques de ce suivi et comment appliquer l'autosurveillance.",
      de: "Ernest Hemingway, ein Meister der modernen amerikanischen Literatur, der sowohl den Nobelpreis als auch den Pulitzer-Preis erhielt. Bekannt für seinen minimalistischen Schreibstil, war seine tägliche Disziplin ebenso legendär. Er begann frühmorgens mit dem Schreiben und hielt am Ende jeder Sitzung seine tägliche Wortzahl auf einer Wandtabelle fest. Heute untersucht BuildSelf die wissenschaftlichen Gründe für Hemingways Fortschrittsverfolgung und wie Sie Selbstbeobachtung im Alltag nutzen können.",
      pt: "Ernest Hemingway, um mestre da literatura americana moderna que ganhou o Prémio Nobel e o Prémio Pulitzer. Conhecido pelo seu estilo de escrita minimalista, a sua disciplina diária era igualmente lendária. Começava a escrever de manhã cedo e, no final de cada sessão, contava e registava a sua contagem de palavras diária num gráfico na parede. Hoje, o BuildSelf explora as razões científicas por trás do rastreamento de progresso e como aplicar o automonitoramento.",
      id: "Ernest Hemingway, seorang maestro sastra Amerika modern yang memenangkan Hadiah Nobel dan Hadiah Pulitzer. Dikenal dengan gaya menulisnya yang minimalis dan lugas, disiplin hariannya juga legendaris. Dia mulai menulis pagi-pagi sekali and, di akhir setiap sesi, menghitung dan mencatat jumlah kata hariannya di bagan besar di dinding. Hari ini, BuildSelf mengeksplorasi alasan ilmiah di balik pelacakan kemajuan Hemingway."
    },
    whyTitle: {
      en: "The Psychology of Self-Monitoring and Dopamine Release",
      ja: "自己監視の心理学とドパミンの放出",
      zh: "自我监控的心理学与多巴胺释放",
      es: "La psicología del autocontrol y la liberación de dopamina",
      fr: "La psychologie de l'autosurveillance et la libération de dopamine",
      de: "Die Psychologie der Selbstbeobachtung und Dopaminfreisetzung",
      pt: "A psicologia do automonitoramento e a libertação de dopamina",
      id: "Psikologi Pemantauan Diri dan Pelepasan Dopamin"
    },
    whyDesc: {
      en: "Tracking your progress quantitatively triggers a cognitive process known in psychology as 'Self-Monitoring.' By visualizing daily output, the brain receives immediate feedback, triggering small releases of dopamine. This visual evidence of progress acts as a powerful intrinsic motivator, transforming vague efforts into structured accomplishments and boosting long-term behavioral consistency.",
      ja: "進捗を定量的に追跡することは、心理学で「自己監視(Self-Monitoring)」と呼ばれる認知プロセスを刺激します。毎日の成果を視覚化することで、脳は即座にフィードバックを受け取り、微量のドパミンを放出します。この視覚的な進捗の証拠は、強力な内的動機付けとして働き、曖昧な努力を構造化された成果へと変換し、長期的な行動の継続性を高めます。",
      zh: "定量追踪你的进度会触发心理学上称为“自我监控（Self-Monitoring）”的认知过程。通过将每日的产出可视化，大脑会收到即时反馈，从而触发微量多巴胺的释放。这种可见的进度证据可作为强大的内在驱动力，将模糊的努力转化为结构化的成就，并提升长期的行为一致性。",
      es: "El seguimiento cuantitativo del progreso activa un proceso cognitivo conocido en psicología como 'Autocontrol'. Al visualizar la producción diaria, el cerebro recibe retroalimentación inmediata, lo que desencadena pequeñas liberaciones de dopamina. Esta evidencia visual del progreso actúa como un poderoso motivador intrínseco, transformando esfuerzos vagos en logros estructurados.",
      fr: "Le suivi quantitatif du progrès déclenche un processus cognitif appelé « Autosurveillance ». En visualisant le travail accompli, le cerveau reçoit un feedback immédiat, ce qui libère de petites doses de dopamine. Cette preuve visuelle du progrès agit comme un puissant moteur intrinsèque, transformant des efforts vagues en réalisations structurées.",
      de: "Die quantitative Verfolgung Ihres Fortschritts löst einen kognitiven Prozess aus, der in der Psychologie als „Selbstbeobachtung“ bezeichnet wird. Durch die Visualisierung der täglichen Leistung erhält das Gehirn sofortiges Feedback, was kleine Mengen Dopamin freisetzt. Dieser sichtbare Beweis des Fortschritts wirkt als starker innerer Motivator.",
      pt: "Rastrear o seu progresso quantitativamente desencadeia um processo cognitivo conhecido na psicologia como 'Automonitoramento'. Ao visualizar a produção diária, o cérebro recebe feedback imediato, libertando pequenas doses de dopamina. Esta evidência visual de progresso funciona como um forte motivador intrínseco.",
      id: "Melacak kemajuan Anda secara kuantitatif memicu proses kognitif yang dikenal dalam psikologi sebagai 'Pemantauan Diri'. Dengan memvisualisasikan hasil harian, otak menerima umpan balik langsung, memicu pelepasan kecil dopamin. Bukti kemajuan visual ini bertindak sebagai motivator intrinsik yang kuat."
    },
    steps: [
      {
        name: {
          en: "Measure your daily core output quantitatively",
          ja: "毎日の中心的な成果を定量的に測定する",
          zh: "定量测量每日的核心产出",
          es: "Mide tu producción principal diaria de forma cuantitativa",
          fr: "Mesurer quantitativement votre production principale",
          de: "Messen Sie Ihre tägliche Kernleistung quantitativ",
          pt: "Meça a sua produção principal diária quantitativamente",
          id: "Ukur hasil inti harian Anda secara kuantitatif"
        },
        text: {
          en: "Instead of tracking vague goals like 'working hard,' measure a specific, countable metric such as pages read, words written, minutes of focused work, or reps completed.",
          ja: "「一生懸命やる」といった曖昧な目標を追跡する代わりに、読んだページ数、書いた文字数、集中した時間、完了した回数など、具体的で数えられる指標を測定します。",
          zh: "不要追踪如“努力工作”这样模糊的目标，而是测量具体、可计数的指标，例如阅读的页数、写作的字数、专注的时间或完成的运动组数。",
          es: "En lugar de hacer un seguimiento de objetivos vagos como 'trabajar duro', mide una métrica específica y contable, como páginas leídas, palabras escritas, minutos de trabajo concentrado o repeticiones completadas.",
          fr: "Au lieu de suivre des objectifs vagues comme « travailler dur », mesurez un indicateur précis et quantifiable, tel que le nombre de pages lues, de mots écrits, de minutes de travail concentré ou de répétitions effectuées.",
          de: "Anstatt vage Ziele wie „hart arbeiten“ zu verfolgen, messen Sie eine spezifische, zählbare Metrik wie gelesene Seiten, geschriebene Wörter, Minuten fokussierter Arbeit oder absolvierte Wiederholungen.",
          pt: "Em vez de rastrear objetivos vagos como 'trabalhar arduamente', meça uma métrica específica e quantificável, como páginas lidas, palavras escritas, minutos de trabalho focado ou repetições concluídas.",
          id: "Daripada melacak tujuan yang tidak jelas seperti 'bekerja keras', ukurlah metrik spesifik yang dapat dihitung seperti halaman yang dibaca, kata yang ditulis, menit kerja terfokus, atau repetisi yang diselesaikan."
        }
      },
      {
        name: {
          en: "Record the numbers honestly on a visual chart",
          ja: "数値を視覚的な表に正直に記録する",
          zh: "如实将数字记录在可视化图表上",
          es: "Registra los números con honestidad en un gráfico visual",
          fr: "Enregistrer honnêtement les chiffres sur un tableau",
          de: "Tragen Sie die Zahlen ehrlich in eine Tabelle ein",
          pt: "Registe os números honestamente num gráfico visual",
          id: "Catat angka-angka tersebut secara jujur pada bagan visual"
        },
        text: {
          en: "Keep a paper planner, a wall chart, or a simple spreadsheet to write down the exact numbers every single day. Make sure to record even on the days you did not perform well; honesty is crucial.",
          ja: "手帳や壁の表、シンプルなスプレッドシートを用意し、毎日正確な数値を書き留めます。うまくいかなかった日も含めて正直に記録することが不可欠です。",
          zh: "准备一个纸质计划本、墙面图表或简单的电子表格，每天写下确切的数字。即使在表现不佳的日子里，也务必如实记录；诚实至关重要。",
          es: "Lleva una agenda de papel, un gráfico en la pared o una hoja de cálculo simple para anotar los números exactos todos los días. Asegúrate de registrar incluso los días en que no te fue bien; la honestidad es fundamental.",
          fr: "Utilisez un agenda papier, un tableau mural ou un simple tableur pour noter les chiffres exacts chaque jour. Veillez à enregistrer même les jours où vous n'avez pas été performant ; l'honnêteté est essentielle.",
          de: "Nutzen Sie einen Papierplaner, eine Wandtabelle oder eine einfache Tabellenkalkulation, um täglich die genauen Zahlen aufzuschreiben. Tragen Sie diese auch an schlechten Tagen ehrlich ein.",
          pt: "Use uma agenda de papel, um gráfico na parede ou uma folha de cálculo simples para anotar os números exatos todos os dias. Certifique-se de registar mesmo nos dias em que não esteve bem; a honestidade é fundamental.",
          id: "Simpan perencana kertas, bagan dinding, atau spreadsheet sederhana untuk menuliskan angka pasti setiap hari. Pastikan untuk mencatat bahkan pada hari-hari Anda tidak berkinerja baik; kejujuran sangat penting."
        }
      },
      {
        name: {
          en: "Focus on the act of recording itself",
          ja: "記録する行為そのものに集中する",
          zh: "专注于记录行为本身",
          es: "Concéntrate en el acto de registrar en sí mismo",
          fr: "Se concentrer sur l'acte d'enregistrement lui-même",
          de: "Konzentrieren Sie sich auf den Akt des Aufschreibens selbst",
          pt: "Concentre-se no ato de registar em si mesmo",
          id: "Fokus pada tindakan pencatatan itu sendiri"
        },
        text: {
          en: "Do not judge your productivity based on a single day's low numbers. The act of recording itself builds self-awareness and maintains the momentum needed to start again the next day.",
          ja: "一日だけの低い数値で自分の生産性を判断しないでください。記録する行為そのものが自己認識を高め、翌日再び始めるために必要な弾みを維持します。",
          zh: "不要仅凭一天的低数字来判断自己的生产力。记录行为本身就能建立自我意识，并保持第二天重新开始所需的动力。",
          es: "No juzgues tu productividad en función de los números bajos de un solo día. El acto de registrar en sí mismo genera autoconciencia y mantiene el impulso necesario para comenzar de nuevo al día siguiente.",
          fr: "Ne jugez pas votre productivité sur les bas chiffres d'un seul jour. L'acte d'enregistrer en lui-même développe la conscience de soi et maintient l'élan nécessaire pour recommencer le lendemain.",
          de: "Beurteilen Sie Ihre Produktivität nicht anhand der niedrigen Zahlen eines einzelnen Tages. Der Akt des Aufschreibens selbst stärkt das Selbstbewusstsein und erhält den Schwung für den nächsten Tag.",
          pt: "Não julgue a sua produtividade com base nos números baixos de um único dia. O ato de registar em si desenvolve a autoconsciência e mantém o impulso necessário para recomeçar no dia seguinte.",
          id: "Jangan menilai produktivitas Anda berdasarkan angka rendah di satu hari. Tindakan mencatat itu sendiri membangun kesadaran diri dan menjaga momentum yang dibutuhkan untuk memulai lagi keesokan harinya."
        }
      }
    ],
    cautionTitle: {
      en: "A behavioral-scientific word for a successful routine",
      ja: "効果的なルーティンのための行動科学的な一言",
      zh: "成功惯例的行为科学建议",
      es: "Un consejo de la ciencia del comportamento para una rutina exitosa",
      fr: "Un conseil des sciences du comportement pour une routine réussie",
      de: "Ein verhaltenswissenschaftlicher Ratschlag für eine erfolgreiche Routine",
      pt: "Um conselho da ciência do comportamento para uma rotina de sucesso",
      id: "Saran ilmiah perilaku untuk rutinitas yang sukses"
    },
    cautionDesc: {
      en: "Vague efforts lead to vague results. When you start tracking your actions with exact numbers, your brain gains objective self-awareness. Even on days when your numbers are low, the simple act of writing them down preserves your connection to the habit and prevents you from giving up. Track your progress daily and let the numbers guide your consistency.",
      ja: "曖昧な努力は曖昧な結果を招きます。正確な数値で行動を追跡し始めると、脳は客観的な自己認識を得ます。数値が低い日であっても、単に記録する行為そのものが習慣とのつながりを維持し、挫折を防ぎます。毎日進捗を追跡し、数値に継続性を導かせてください。",
      zh: "模糊的努力会导致模糊的结果。当你开始用确切的数字追踪自己的行为时，你的大脑就会获得客观的自我意识。即使在数字偏低的日子里，仅仅是写下它们这一简单的动作也能维持你与习惯的联结，防止你放弃。每天追踪你的进度，让数字指引你的坚持。",
      es: "Los esfuerzos vagos conducen a resultados vagos. Cuando comienzas a registrar tus acciones con números exactos, tu cerebro adquiere un autoconocimiento objetivo. Incluso en los días en que tus números son bajos, el simple acto de escribirlos preserva tu conexión con el hábito y evita que te rindas. Registra tu progreso diariamente.",
      fr: "Des efforts vagues mènent à des résultats vagues. Lorsque vous suivez vos actions avec des chiffres exacts, votre cerveau acquiert une conscience de soi objective. Même les jours où vos chiffres sont bas, le simple fait de les écrire maintient le lien avec l'habitude et vous évite d'abandonner.",
      de: "Vage Bemühungen führen zu vagen Ergebnissen. Wenn Sie beginnen, Ihre Handlungen mit genauen Zahlen zu verfolgen, gewinnt Ihr Gehirn ein objektives Selbstbewusstsein. Selbst an Tagen mit niedrigen Zahlen bewahrt das bloße Aufschreiben die Verbindung zur Gewohnheit und verhindert das Aufgeben.",
      pt: "Esforços vagos levam a resultados vagos. Quando começa a registar as suas ações com números exatos, o seu cérebro adquire uma autoconsciência objetiva. Mesmo nos dias em que os números são baixos, o simples ato de os escrever preserva a sua ligação ao hábito e evita que desista.",
      id: "Usaha yang tidak jelas membuahkan hasil yang tidak jelas. Ketika Anda mulai melacak tindakan Anda dengan angka-angka pasti, otak Anda memperoleh kesadaran diri yang objektif. Bahkan pada hari-hari ketika angka Anda rendah, tindakan sederhana untuk menuliskannya mempertahankan hubungan Anda dengan kebiasaan tersebut."
    }
  },
  'angelou-hotel-isolation': {
    title: {
      en: "Creating a Sacred Space for Deep Focus: Maya Angelou's Hotel Isolation Routine",
      ja: "深い没頭のための神聖な空間作り：マヤ・アンジェロウのホテル隔離ルーティン",
      zh: "创造深度专注的神圣空间：马雅·安杰卢的旅馆隔离惯例",
      es: "Crear un espacio sagrado para el enfoque profundo: La rutina de aislamiento en hotel de Maya Angelou",
      fr: "Créer un espacio sacré pour une concentration profonde : La routine d'isolement à l'hôtel de Maya Angelou",
      de: "Einen heiligen Raum für tiefen Fokus schaffen: Maya Angelous Hotel-Isolations-Routine",
      pt: "Criar um espaço sagrado para foco profundo: A rotina de isolamento em hotel de Maya Angelou",
      id: "Menciptakan Ruang Suci untuk Fokus Mendalam: Rutinitas Isolasi Hotel Maya Angelou"
    },
    description: {
      en: "Renowned author and activist Maya Angelou wrote only in empty hotel rooms to minimize distraction. Learn the cognitive science behind environmental cue control.",
      ja: "著名な作家であり活動家のマヤ・アンジェロウは、気を散らすものを減らすために空のホテルの一室でのみ執筆しました。環境手がかり制御の認知科学を調べます。",
      zh: "著名作家兼活动家马雅·安杰卢只在空无一物的旅馆房间里写作，以最大程度地减少分心。了解环境线索控制背后的认知科学原理。",
      es: "La reconocida escritora y activista Maya Angelou escribía solo en habitaciones de hotel vacías para minimizar las distracciones. Conozca la ciencia cognitiva detrás del control de estímulos.",
      fr: "L'écrivaine et activiste Maya Angelou n'écrivait que dans des chambres d'hôtel vides pour limiter les distractions. Découvrez la science cognitive du contrôle des indices environnementaux.",
      de: "Die berühmte Autorin und Aktivistin Maya Angelou schrieb nur in leeren Hotelzimmern, um Ablenkungen zu minimieren. Erfahren Sie mehr über die kognitiven Aspekte der Umgebungskontrolle.",
      pt: "A renomada autora e ativista Maya Angelou escrevia apenas em quartos de hotel vazios para minimizar as distrações. Conheça a ciência cognitiva por trás do controle de pistas ambientais.",
      id: "Penulis dan aktivis terkenal Maya Angelou menulis hanya di kamar hotel kosong untuk meminimalkan gangguan. Pelajari ilmu kognitif di balik pengendalian isyarat lingkungan."
    },
    authority: {
      en: "Maya Angelou's interview in The Paris Review (1990) & Cognitive Psychology Study on Distraction Control",
      ja: "マヤ・アンジェロウ『パリ・レビュー』インタビュー(1990) ＆ 注意散漫制御に関する認知心理学研究",
      zh: "马雅·安杰卢在《巴黎评论》的访谈(1990) 及关于注意力分心控制的认知心理学研究",
      es: "Entrevista de Maya Angelou en The Paris Review (1990) y estudio de psicología cognitiva sobre control de distracciones",
      fr: "L'interview de Maya Angelou dans The Paris Review (1990) & étude de psychologie cognitive sur le contrôle des distractions",
      de: "Maya Angelous Interview in The Paris Review (1990) & kognitionspsychologische Studie zur Ablenkungskontrolle",
      pt: "Entrevista de Maya Angelou na The Paris Review (1990) e estudo de psicologia cognitiva sobre o controle de distrações",
      id: "Wawancara Maya Angelou di The Paris Review (1990) & Studi Psikologi Kognitif tentang Pengendalian Gangguan"
    },
    intro: {
      en: "Maya Angelou, an legendary American poet, memoirist, and civil rights activist who wrote the groundbreaking autobiography 'I Know Why the Caged Bird Sings.' To focus deeply, she checked into a local hotel room every morning at 6:30 AM. She requested the hotel staff to remove all paintings, photos, and decorations from the walls, leaving only a Bible, a dictionary, a deck of cards, and a bottle of sherry. Today, BuildSelf shares how creating an empty, distraction-free environment can drastically improve your cognitive output.",
      ja: "名著『歌え、翔べない鳥たちよ』で知られる伝説的なアメリカの詩人、自叙伝作家、そして人権活動家であるマヤ・アンジェロウ。彼女は深い没頭のために、毎朝6時30分に近くのホテルの部屋にチェックインしました。彼女はホテルのスタッフに、壁の絵画や写真、装飾品をすべて取り外すよう依頼し、聖書、辞書、トランプ一組、そしてシェリー酒のボトル一本だけを部屋に残しました。本日、BuildSelfでは、障害物のない空の環境を作ることが、いかに認知能力を劇的に向上させるかを紹介します。",
      zh: "马雅·安杰卢是美国传奇诗人、自传作家和民权活动家，著有开创性的自传《我知道笼中鸟为何歌唱》。为了深度专注，她每天早晨6:30都会入住当地的一家旅馆房间。她要求旅馆工作人员移走墙上的所有画作、照片和装饰品，房间里只留下一本圣书、一本词典、一副扑克牌和一瓶雪利酒。今天，BuildSelf将为您分享创造一个空无一物、毫无干扰的环境如何能大幅提升您的认知产出。",
      es: "Maya Angelou, la legendaria poeta, memorialista y activista por los derechos civiles estadounidense que escribió la innovadora autobiografía 'Sé por qué canta el pájaro enjaulado'. Para concentrarse profundamente, se registraba en una habitación de hotel local todas las mañanas a las 6:30 a. m. Solicitaba al personal del hotel que retirara todas las pinturas, fotos y decoraciones de las paredes, dejando solo una Biblia, un diccionario, una baraja de cartas y una botella de jerez. Hoy, BuildSelf comparte cómo crear un entorno vacío puede mejorar drásticamente tu rendimiento.",
      fr: "Maya Angelou, poétesse, mémorialiste et militante des droits civiques américaine légendaire, autrice de l'autobiographie « Je sais pourquoi chante l'oiseau en cage ». Pour se concentrer profondément, elle s'installait dans une chambre d'hôtel chaque matin à 6h30. Elle demandait au personnel de retirer tous les tableaux et décorations, ne gardant qu'une Bible, un dictionnaire, un jeu de cartes et une bouteille de sherry. Aujourd'hui, BuildSelf montre comment un environnement épuré améliore le rendement.",
      de: "Maya Angelou, eine legendäre amerikanische Dichterin, Autobiografin und Bürgerrechtlerin, die die bahnbrechende Autobiografie „Ich weiß, warum der gefangene Vogel singt“ schrieb. Um sich tief zu konzentrieren, mietete sie sich jeden Morgen um 6:30 Uhr in ein Hotelzimmer ein. Sie bat das Personal, alle Bilder und Dekorationen zu entfernen, sodass nur eine Bibel, ein Wörterbuch, ein Kartenspiel und eine Flasche Sherry übrig blieben. Heute zeigt BuildSelf, wie ein ablenkungsfreies Umfeld Ihre kognitive Leistung steigern kann.",
      pt: "Maya Angelou, a lendária poetisa, memorialista e ativista dos direitos civis americana que escreveu a autobiografia inovadora 'Sei por que o pássaro canta na gaiola'. Para se concentrar profundamente, ela hospedava-se num quarto de hotel local todas as manhãs às 6h30. Pedia à equipa do hotel para remover todos os quadros, fotos e decorações das paredes, deixando apenas uma Bíblia, um dicionário, um baralho de cartas e uma garrafa de xerez. Hoje, o BuildSelf partilha como a criação de um ambiente vazio melhora a produção.",
      id: "Maya Angelou, penyair legendaris Amerika, penulis memoar, dan aktivis hak-hak sipil yang menulis otobiografi terobosan 'I Know Why the Caged Bird Sings.' Untuk fokus secara mendalam, dia check-in ke kamar hotel setempat setiap pagi pukul 06.30. Dia meminta staf hotel untuk menghapus semua lukisan, foto, dan dekorasi dari dinding, hanya menyisakan sebuah Alkitab, kamus, dek kartu, dan sebotol sherry. Hari ini, BuildSelf membagikan bagaimana menciptakan lingkungan kosong dapat meningkatkan hasil kognitif Anda."
    },
    whyTitle: {
      en: "Environmental Cue Control and Cognitive Load Reduction",
      ja: "環境手がかり制御と認知負荷の軽減",
      zh: "环境线索控制与认知负荷减轻",
      es: "Control de estímulos ambientales y reducción de la carga cognitiva",
      fr: "Contrôle des indices environnementaux et réduction de la charge cognitive",
      de: "Umgebungskontrolle und Reduzierung der kognitiven Belastung",
      pt: "Controle de pistas ambientais e redução da carga cognitiva",
      id: "Pengendalian Isyarat Lingkungan dan Pengurangan Beban Kognitif"
    },
    whyDesc: {
      en: "Human brains are constantly scanning the environment for visual and auditory cues, consuming cognitive resources. By physically isolating yourself in a blank space, you practice 'Environmental Cue Control.' Removing distractions minimizes cognitive load, allowing the brain to allocate all its working memory to the creative or complex task at hand, facilitating immediate entry into a state of 'flow.'",
      ja: "人間の脳は常に視覚的・聴覚的な手がかりを求めて環境をスキャンしており、その過程で認知資源を消費しています。何もない空間に身を置くことで、「環境手がかり制御」を実践できます。気を散らすものを排除することで認知負荷が最小限に抑えられ、脳はワーキングメモリのすべてをクリエイティブまたは複雑な課題に割り当てることができ、即座に「フロー」状態に入るのを容易にします。",
      zh: "人类的大脑不断在环境中扫描视觉和听觉线索，从而消耗认知资源。通过将自己物理隔离在一个空无一物的空间里，你就是在实践“环境线索控制”。消除干扰可将认知负荷降至最低，使大脑能够将其所有的工作记忆分配给眼前的创造性或复杂任务，从而有助于立即进入“心流”状态。",
      es: "El cerebro humano escanea constantemente el entorno en busca de estímulos visuales y auditivos, lo que consume recursos cognitivos. Al aislarse físicamente en un espacio vacío, se practica el 'Control de estímulos ambientales'. Eliminar las distracciones minimiza la carga cognitiva, permitiendo al cerebro asignar toda su memoria de trabajo a la tarea creativa o compleja, facilitando la entrada en un estado de 'flujo'.",
      fr: "Le cerveau humain scanne constamment son environnement à la recherche d'indices visuels et auditifs, ce qui consomme des ressources cognitives. En s'isolant dans un espace vide, on pratique le « Contrôle des indices environnementaux ». Éliminer les distractions réduit la charge cognitive, permettant au cerveau d'allouer toute sa mémoire de travail à la tâche complexe et d'entrer en état de « flow ».",
      de: "Das menschliche Gehirn scannt die Umgebung ständig nach visuellen und auditiven Reizen ab, was kognitive Ressourcen verbraucht. Indem Sie sich in einem leeren Raum isolieren, praktizieren Sie „Umgebungskontrolle“. Das Entfernen von Ablenkungen minimiert die kognitive Belastung, sodass das Gehirn sein gesamtes Arbeitsgedächtnis für die kognitive oder komplexe Aufgabe nutzen kann, was den Einstieg in den „Flow“ erleichtert.",
      pt: "O cérebro humano está constantemente a fazer o varrimento do ambiente à procura de pistas visuais e auditivas, consumindo recursos cognitivos. Ao isolar-se fisicamente num espaço vazio, pratica o 'Controle de pistas ambientais'. A remoção de distrações minimiza a carga cognitiva, permitiendo que o cérebro aloque toda a sua memória de trabalho à tarefa criativa ou complexa, facilitando a entrada imediata num estado de 'fluxo'.",
      id: "Otak manusia terus-menerus memindai lingkungan untuk mencari isyarat visual dan pendengaran, yang mengonsumsi sumber daya kognitif. Dengan mengisolasi diri secara fisik di ruang kosong, Anda mempraktikkan 'Pengendalian Isyarat Lingkungan.' Menghilangkan gangguan meminimalkan beban kognitif, memungkinkan otak mengalokasikan semua memori kerjanya untuk tugas kreatif atau rumit, memfasilitasi masuk langsung ke keadaan 'flow.'"
    },
    steps: [
      {
        name: {
          en: "Designate a single space solely for deep work",
          ja: "ディープワーク専用の独立した空間を指定する",
          zh: "指定一个仅用于深度工作的空间",
          es: "Designa un único espacio exclusivo para el trabajo profundo",
          fr: "Désigner un espace unique réservé au travail profond",
          de: "Bestimmen Sie einen Raum ausschließlich für Deep Work",
          pt: "Designe um espaço único exclusivamente para trabalho profundo",
          id: "Tentukan satu ruang semata-mata untuk kerja mendalam"
        },
        text: {
          en: "Choose a specific desk, a library cubicle, or a quiet room and declare it as your sacred focus zone. Do not browse social media or rest in this space; use it strictly for work.",
          ja: "特定のデスク、図書館の自習ブース、または静かな部屋を選び、そこを神聖な集中ゾーンと宣言します。このスペースでSNSを見たり休んだりせず、厳密に作業のためだけに使用します。",
          zh: "选择一张特定的书桌、图书馆的隔间或一间安静的房间，将其声明为你的神圣专注区域。不要在这个空间里浏览社交媒体或休息；严格将其用于工作。",
          es: "Elige un escritorio específico, un cubículo de biblioteca o una habitación tranquila y decláralo como tu zona de enfoque sagrada. No navegues por redes sociales ni descanses en este espacio; úsalo estrictamente para trabajar.",
          fr: "Choisissez un bureau spécifique, une cabine de bibliothèque ou une pièce calme et déclarez-la comme votre zone de concentration sacrée. Ne naviguez pas sur les réseaux sociaux et ne vous reposez pas dans cet espace ; utilisez-le strictement pour le travail.",
          de: "Wählen Sie einen Schreibtisch, eine Bibliothekskabine oder einen ruhigen Raum und erklären Sie diesen zu Ihrer Fokuszone. Nutzen Sie diesen Bereich nicht für soziale Medien oder Pausen, sondern ausschließlich zum Arbeiten.",
          pt: "Escolha uma secretária específica, uma cabine de biblioteca ou uma sala silenciosa e declare-a como a sua zona de foco sagrada. Não navegue nas redes sociais nem descanse neste espaço; use-o estritamente para trabalhar.",
          id: "Pilihlah meja tertentu, bilik perpustakaan, atau ruangan yang tenang dan nyatakan sebagai zona fokus suci Anda. Jangan menjelajahi media sosial or beristirahat di ruang ini; gunakan hanya untuk bekerja."
        }
      },
      {
        name: {
          en: "Remove all visual and digital clutter",
          ja: "視覚的およびデジタルな雑音をすべて排除する",
          zh: "清除所有视觉和数字杂乱",
          es: "Elimina todo el desorden visual y digital",
          fr: "Éliminer tout encombrement visuel et numérique",
          de: "Entfernen Sie alle visuellen und digitalen Ablenkungen",
          pt: "Remova toda a desordem visual e digital",
          id: "Hapus semua kekacauan visual dan digital"
        },
        text: {
          en: "Clear your desk of any items that are unrelated to your current task. Turn off your smartphone, place it out of sight, or move it to another room to eliminate environmental triggers.",
          ja: "デスクの上から現在の作業に関係のないアイテムを片付けます。スマートフォンは電源を切るか、見えない場所に置くか、別の部屋に移動させて環境的な引き金をなくします。",
          zh: "清理书桌上与当前任务无关的任何物品。关闭智能手机，将其放在视线之外，或者移到另一个房间，以消除环境触发因素。",
          es: "Limpia tu escritorio de cualquier elemento que no esté relacionado con tu tarea actual. Apaga tu teléfono inteligente, colócalo fuera de la vista o muévelo a otra habitación para eliminar los desencadenantes ambientales.",
          fr: "Débarrassez votre bureau de tout objet sans rapport avec votre tâche. Éteignez votre smartphone, placez-le hors de portée de vue ou déplacez-le dans une autre pièce pour éliminer les déclencheurs environnementaux.",
          de: "Räumen Sie alle Gegenstände vom Schreibtisch, die nichts mit der aktuellen Aufgabe zu tun haben. Schalten Sie Ihr Smartphone aus und legen Sie es außer Sichtweite oder in einen anderen Raum.",
          pt: "Limpe a sua secretária de quaisquer itens que não estejam relacionados com a sua tarefa atual. Desligue o seu smartphone, coloque-o fora de vista ou leve-o para outra sala para eliminar gatilhos ambientais.",
          id: "Bersihkan meja Anda dari barang-barang yang tidak terkait dengan tugas Anda saat ini. Matikan ponsel cerdas Anda, letakkan di luar pandangan, atau pindahkan ke ruangan lain untuk menghilangkan pemicu lingkungan."
        }
      },
      {
        name: {
          en: "Establish a clear start and end ritual",
          ja: "明確な開始と終了の儀式を確立する",
          zh: "建立明确的开始和结束仪式",
          es: "Establece un ritual de inicio y fin claro",
          fr: "Établir un rituel de début et de fin clair",
          de: "Etablieren Sie ein klares Start- und Endritual",
          pt: "Estabeleça um ritual de início e fim claro",
          id: "Tetapkan ritual mulai dan selesai yang jelas"
        },
        text: {
          en: "Define exact times to enter and leave your focus zone. When your time is up, step away completely to return to your daily life, creating a psychological boundary between work and rest.",
          ja: "集中ゾーンに入り、そして出る正確な時間を定義します。時間が来たら完全にその場を離れて日常生活に戻り、仕事と休息の間に心理的な境界線を作ります。",
          zh: "定义进入和离开专注区域的确切时间。时间到了之后，请彻底离开该区域，回归日常生活，在工作和休息之间建立心理边界。",
          es: "Define horas exactas para entrar y salir de tu zona de enfoque. Cuando se acabe el tempo, aléjate por completo para volver a tu vida diaria, creando un límite psicológico entre el trabajo y el descanso.",
          fr: "Définissez des heures précises pour entrer et sortir de votre zone de concentration. Une fois le temps écoulé, éloignez-vous complètement pour retourner à votre vie quotidienne, créant une barrière psychologique entre travail et repos.",
          de: "Legen Sie genaue Zeiten fest, zu denen Sie Ihre Fokuszone betreten und verlassen. Wenn die Zeit abgelaufen ist, entfernen Sie sich vollständig, um eine Grenze zwischen Arbeit und Freizeit zu ziehen.",
          pt: "Defina horas exatas para entrar e sair da sua zona de foco. Quando o tempo acabar, afaste-se completamente para voltar à sua vida quotidiana, criando um limite psicológico entre o trabalho e o descanso.",
          id: "Tentukan waktu pasti untuk masuk dan keluar dari zona fokus Anda. Jika waktu Anda habis, menjauhlah sepenuhnya untuk kembali ke kehidupan sehari-hari, menciptakan batas psikologis antara kerja & istirahat."
        }
      }
    ],
    cautionTitle: {
      en: "A cognitive-psychological word for a successful routine",
      ja: "効果的なルーティンのための認知心理学的な一言",
      zh: "成功惯例的认知心理学建议",
      es: "Un consejo de la psicología cognitiva para una rutina exitosa",
      fr: "Un conseil de psychologie cognitive pour une routine réussie",
      de: "Ein kognitionspsychologischer Ratschlag für eine erfolgreiche Routine",
      pt: "Um conselho da psicologia cognitiva para uma rotina de sucesso",
      id: "Saran psikologi kognitif untuk rutinitas yang sukses"
    },
    cautionDesc: {
      en: "Willpower alone is rarely enough to fight distraction. True focus is built by designing a physical environment where temptation cannot exist. Clear your desk, isolate your phone, and let the simplicity of your surroundings command your brain to focus. Create your own distraction-free zone today.",
      ja: "意志の力だけで誘惑と戦うのは困難です。真の集中は、誘惑が存在し得ない物理的環境を設計することから生まれます。デスクを片付け、スマートフォンを隔離し、周囲の簡素さによって脳に集中を命じさせてください。",
      zh: "仅凭意志力很难与分心作斗争。真正的专注是通过设计一个不存在诱惑的物理环境来建立的。清理你的书桌，隔离你的手机，让周围环境的简约感指挥你的大脑去专注。今天就创建你自己的无干扰区域吧。",
      es: "La fuerza de voluntad por sí sola rara vez es suficiente para combatir la distracción. El verdadero enfoque se construye diseñando un entorno físico donde la tentación no pueda existir. Limpia tu escritorio, aísla tu teléfono y deja que la simplicidad del entorno guíe a tu cerebro.",
      fr: "La volonté seule suffit rarement à lutter contre la distraction. La véritable concentration s'obtient en concevant un environnement physique où la tentation ne peut exister. Épurez votre bureau, isolez votre téléphone et laissez la simplicité ambiante guider votre esprit.",
      de: "Willenskraft allein reicht selten aus, um Ablenkungen zu bekämpfen. Wahrer Fokus entsteht durch die Gestaltung einer physischen Umgebung, in der es keine Versuchungen gibt. Räumen Sie Ihren Schreibtisch auf, legen Sie Ihr Handy weg und lassen Sie die Einfachheit wirken.",
      pt: "A força de vontade por si só raramente é suficiente para combater a distração. O foco verdadeiro constrói-se ao desenhar um ambiente físico onde a tentação não possa existir. Limpe a sua secretária, isole o seu telemóvel e deixe que a simplicidade do ambiente comande o seu cérebro.",
      id: "Tekad saja jarang cukup untuk melawan gangguan. Fokus sejati dibangun dengan merancang lingkungan fisik di mana godaan tidak dapat eksis. Bersihkan meja Anda, isolasi telepon Anda, dan biarkan kesederhanaan lingkungan sekitar memerintahkan otak Anda to focus."
    }
  },
  'tchaikovsky-two-hour-walk': {
    title: {
      en: "Walking 2 Hours Daily for Musical Inspiration: Pyotr Tchaikovsky's Creative Walk",
      ja: "音楽的インスピレーションを得るための毎日2時間ずつの歩行：ピョートル・チャイコフスキーの創造的散歩",
      zh: "每日步行2小时汲取音乐灵感：彼得·柴可夫斯基的创造性散步",
      es: "Caminar 2 horas al día para obtener inspiración musical: La caminata creativa de Pyotr Tchaikovsky",
      fr: "Marcher 2 heures par jour pour l'inspiration musicale : La marche créative de Piotr Tchaïkovski",
      de: "Täglich 2 Stunden gehen für musikalische Inspiration: Pjotr Tschaikowskis kreativer Spaziergang",
      pt: "Caminhar 2 horas por dia para inspiração musical: A caminhada criativa de Pyotr Tchaikovsky",
      id: "Berjalan 2 Jam Setiap Hari untuk Inspirasi Musik: Jalan Kreatif Pyotr Tchaikovsky"
    },
    description: {
      en: "Composer Pyotr Tchaikovsky walked exactly two hours every day to spark musical ideas. Discover the neuroscience of long-distance walking and the default mode network.",
      ja: "作曲家ピョートル・チャイコフスキーは音楽的アイデアを生み出すために毎日正確に2時間歩きました。長距離歩行とデフォルトモードネットワークの脳科学を調べます。",
      zh: "作曲家彼得·柴可夫斯基每天坚持散步整整两小时，以此激发音乐灵感。探索长距离步行与默认模式网络背后的脑科学原理。",
      es: "El compositor Pyotr Tchaikovsky caminaba exactamente dos horas todos los días para generar ideas musicales. Conozca la neurociencia detrás de las largas caminatas y la red neuronal por defecto.",
      fr: "Le compositeur Piotr Tchaïkovski marchait exactement deux heures par jour pour stimuler ses idées. Découvrez la neuroscience de la marche de fond et le réseau du mode par défaut.",
      de: "Der Komponist Pjotr Tschaikowski ging jeden Tag genau zwei Stunden spazieren, um musikalische Ideen zu sammeln. Erfahren Sie mehr über die Neurowissenschaft des Gehens und das DMN.",
      pt: "O compositor Pyotr Tchaikovsky caminhava exatamente duas horas todos os dias para gerar ideias musicais. Descubra a neurociência por trás das caminhadas longas e a rede de modo padrão.",
      id: "Komposer Pyotr Tchaikovsky berjalan tepat dua jam setiap hari untuk memicu ide-ide musik. Temukan ilmu saraf dari jalan kaki jarak jauh dan jaringan mode default."
    },
    authority: {
      en: "Modest Tchaikovsky's 'The Life & Letters of Peter Ilich Tchaikovsky' & Frontiers in Neuroscience",
      ja: "モデスト・チャイコフスキー 著『チャイコフスキーの生涯と書簡』＆ Frontiers in Neuroscience 脳神経研究",
      zh: "莫杰斯特·柴可夫斯基著《柴可夫斯基的生命与书信》及 Frontiers in Neuroscience 脑科学研究",
      es: "Obra de Modest Tchaikovsky 'The Life & Letters of Peter Ilich Tchaikovsky' y estudio de Frontiers in Neuroscience",
      fr: "L'ouvrage de Modest Tchaïkovski 'The Life & Letters of Peter Ilich Tchaikovsky' & étude de Frontiers in Neuroscience",
      de: "Modest Tschaikowskis 'The Life & Letters of Peter Ilich Tchaikovsky' & Studie in Frontiers in Neuroscience",
      pt: "Obra de Modest Tchaikovsky 'The Life & Letters of Peter Ilich Tchaikovsky' e estudo da Frontiers in Neuroscience",
      id: "Buku Modest Tchaikovsky 'The Life & Letters of Peter Ilich Tchaikovsky' & Penelitian Frontiers in Neuroscience"
    },
    intro: {
      en: "Pyotr Ilyich Tchaikovsky, the legendary composer who elevated Russian romantic music to a world-class level with masterpieces like 'Swan Lake,' 'The Nutcracker,' and the 'Pathétique Symphony.' He maintained an incredibly strict schedule, separating his composing sessions into morning and afternoon. Especially, he went out for a walk for exactly two hours every single afternoon. He believed so strongly in this routine that he feared cutting it short by even a few minutes would cause physical illness or exhaust his musical inspiration. The musical themes that came to him during these walks were immediately written down in a small notebook he always carried in his pocket. Today, BuildSelf shares how a daily walk can spark your creative thoughts.",
      ja: "『白鳥の湖』、『くるみ割り人形』、交響曲第6番『悲愴』などの名作でロシア・ロマン派音楽を世界的なレベルに引き上げた伝説的な作曲家、ピョートル・イリイチ・チャイコフスキー。彼は朝と午後に作曲セッションを分けるなど、非常に厳格なスケジュールを維持しました。特に、彼は毎日午後になるとお決まりのように外出して正確に2時間散歩をしました。彼はこのルーティンを非常に重んじており、数分でも短くなると身体的な病気にかかったり、音楽的なインスピレーションが枯渇したりすることを恐れていました。散歩の最中に浮かんだ音楽のテーマは、彼が常にポケットに入れていた小さな手帳にすぐに書き留められました。本日、BuildSelfでは、毎日の散歩がどのように創造的な思考を引き出すかを紹介します。",
      zh: "彼得·伊里奇·柴可夫斯基是传奇作曲家，凭借《天鹅湖》、《胡桃夹子》和《悲怆交响曲》等杰作将俄罗斯浪漫主义音乐提升至世界级水平。他维持着极其严格的时间表，将他的创作分成上午和下午两部分。特别的是，他每天下午都会准时出门散步整整两小时。他对这一惯例深信不疑，以至于担心如果缩短几分钟就会导致身体生病或使音乐灵感枯竭。散步时脑海中浮现的音乐主题会被立即记录在他随身携带在口袋里的一个小笔记本上。今天，BuildSelf将为您分享每日散步如何能激发您的创造性思维。",
      es: "Pyotr Ilyich Tchaikovsky, el legendario compositor que elevó la música romántica rusa a un nivel mundial con obras maestras como 'El lago de los cisnes', 'El cascanueces' y la 'Sinfonía Patética'. Mantenía un horario increíblemente estricto, dividiendo sus sesiones de composición en mañana y tarde. En particular, salía a caminar exactamente dos horas todas las tardes. Creía tan firmemente en esta rutina que temía que acortarla aunque fuera unos minutos le causaría una enfermedad física o agotaría su inspiración musical. Los temas musicales que se le ocurrían durante estas caminatas se anotaban inmediatamente en un pequeño cuaderno que siempre llevaba en el bolsillo. Hoy, BuildSelf comparte cómo una caminata diaria puede despertar tus ideas creativas.",
      fr: "Piotr Ilyitch Tchaïkovski, le légendaire compositeur qui a élevé la musique romantique russe à un niveau mondial avec des chefs-d'œuvre comme « Le Lac des cygnes », « Casse-Noisette » et la « Symphonie Pathétique ». Il maintenait un emploi du temps incroyablement strict, divisant ses séances de composition entre le matin et l'après-midi. En particulier, il sortait se promener pendant exactement deux heures chaque après-midi. Il croyait si fermement à cette routine qu'il craignait que l'écourter même de quelques minutes ne le rende malade physiquement ou ne tarisse son inspiration. Les thèmes musicaux qui lui venaient à l'esprit pendant ses promenades étaient immédiatement notés sur un petit carnet qu'il gardait toujours sur lui. Aujourd'hui, BuildSelf montre comment une marche quotidienne stimule vos pensées créatives.",
      de: "Pjotr Iljitsch Tschaikowski, der legendäre Komponist, der die russische romantische Musik mit Meisterwerken wie „Schwanensee“, „Der Nussknacker“ und der „Sinfonie Pathétique“ auf weltweites Niveau hob. Er hielt einen strengen Zeitplan ein und teilte seine Arbeit in Vormittags- und Nachmittagssitzungen auf. Insbesondere ging er jeden Nachmittag exakt zwei Stunden spazieren. Er glaubte so fest an diese Routine, dass er befürchtete, eine Verkürzung um auch nur wenige Minuten würde ihn krank machen oder seine Inspiration versiegen lassen. Die musikalischen Themen, die ihm während dieser Spaziergänge einfielen, notierte er sofort in einem kleinen Notizbuch, das er stets in der Tasche trug. Heute zeigt BuildSelf, wie ein täglicher Spaziergang Ihre kreativen Gedanken anregen kann.",
      pt: "Pyotr Ilyich Tchaikovsky, o lendário compositor que elevou a música romântica russa a um nível mundial com obras-primas como 'O Lago dos Cisnes', 'O Quebra-Nozes' e a 'Sinfonia Patética'. Mantinha um horário incrivelmente rigoroso, dividindo as suas sessões de composição em manhã e tarde. Em particular, saía para caminhar exatamente duas horas todas as tardes. Acreditava tão firmemente nesta rotina que temia que encurtá-la mesmo por alguns minutos causaria uma doença física ou esgotaria a sua inspiração musical. Os temas que lhe surgiam durante estas caminhadas eram registados imediatamente num pequeno caderno no bolso. Hoje, o BuildSelf partilha como uma caminhada diária pode despertar os seus pensamentos criativos.",
      id: "Pyotr Ilyich Tchaikovsky, komposer legendaris yang mengangkat musik romantis Rusia ke tingkat kelas dunia dengan mahakarya seperti 'Swan Lake,' 'The Nutcracker,' dan 'Pathétique Symphony.' Dia mempertahankan jadwal yang sangat ketat, membagi sesi menggubah lagunya menjadi pagi dan sore. Khususnya, dia pergi berjalan-jalan selama tepat dua jam setiap sore. Dia sangat percaya pada rutinitas ini sehingga dia takut jika menguranginya beberapa menit saja akan menyebabkan penyakit fisik atau menghabiskan inspirasi musiknya. Tema musik yang muncul di kepalanya selama berjalan-jalan ini segera ditulis di buku catatan kecil yang selalu dibawanya di saku. Hari ini, BuildSelf membagikan bagaimana jalan kaki harian dapat memicu pemikiran kreatif Anda."
    },
    whyTitle: {
      en: "The Neuroscience of Walking to Unchain the Unconscious Mind",
      ja: "無意識の精神を解き放つ歩行の脳科学",
      zh: "释放无意识思维的步行脑科学",
      es: "La neurociencia de caminar para liberar la mente inconsciente",
      fr: "La neuroscience de la marche pour libérer l'esprit inconscient",
      de: "Die Neurowissenschaft des Gehens zur Befreiung des Unbewussten",
      pt: "A neurociência de caminhar para libertar a mente inconsciente",
      id: "Ilmu Saraf Berjalan untuk Membebaskan Pikiran Bawah Sadar"
    },
    whyDesc: {
      en: "Walking at a regular tempo for a prolonged period releases endorphins that reduce stress, and temporarily relaxes prefrontal cortex activity to promote 'unconscious association.' From a neuroscience perspective, walking activates the Default Mode Network (DMN), which organizes memories and solves problems creatively, allowing new insights to bubble up from the subconscious to the conscious mind.",
      ja: "規則的なテンポで長時間歩くことは、ストレスを軽減するエンドルフィンを放出し、前頭前野の活動を一時的に緩和して「無意識の連合」を促進します。脳科学の観点からは、歩行は記憶を整理し問題を創造的に解決するデフォルトモードネットワーク（DMN）を活性化し、無意識から意識へと新しい洞察が浮き上がるのを可能にします。",
      zh: "以规律的节奏长时间步行会释放内啡肽以减轻压力，并暂时放松前额叶皮层活动，以促进“无意识联想”。从脑科学的角度来看，步行能激活默认模式网络（DMN），该网络负责整理记忆并创造性地解决问题，使新的见解能从无意识中涌现到意识层面。",
      es: "Caminar a un ritmo regular durante un período prolongado libera endorfinas que reducen el estrés y relaja temporalmente la actividad de la corteza prefrontal para promover la 'asociación inconsciente'. Desde la perspectiva de la neurociencia, caminar activa la red neuronal por defecto (DMN), que organiza recuerdos y resuelve problemas creativamente.",
      fr: "Marcher à un rythme régulier libère des endorphines réduisant le stress et détend l'activité du cortex préfrontal pour favoriser « l'association inconsciente ». En neuroscience, la marche active le réseau du mode par défaut (DMN), qui organise les souvenirs et résout les problèmes de manière créative, laissant les idées émerger de l'inconscient.",
      de: "Das Gehen in gleichmäßigem Tempo über längere Zeit setzt Endorphine frei, die Stress abbauen, und entspannt vorübergehend die Aktivität des präfrontalen Cortex, um die „unbewusste Assoziation“ zu fördern. Aus Sicht der Neurowissenschaften aktiviert das Gehen das DMN, das Erinnerungen ordnet und Probleme kreativ löst.",
      pt: "Caminhar a um ritmo regular por um período prolongado liberta endorfinas que reduzem o stress, e relaxa temporariamente a atividade do córtex pré-frontal para promover a 'associação inconsciente'. Do ponto de vista da neurociência, caminhar ativa la rede de modo padrão (DMN), que organiza memórias e resolve problemas de forma criativa.",
      id: "Berjalan dengan tempo teratur dalam waktu lama melepaskan endorfin yang mengurangi stres, dan untuk sementara merilekskan aktivitas korteks prefrontal untuk mempromosikan 'asosiasi bawah sadar.' Dari sudut pandang ilmu saraf, berjalan mengaktifkan Default Mode Network (DMN), yang mengatur ingatan dan memecahkan masalah secara kreatif."
    },
    steps: [
      {
        name: {
          en: "Select a scenic, quiet route with contact with nature",
          ja: "自然と触れ合える静かで景色の良いルートを選ぶ",
          zh: "选择与自然接触的安静、风景优美的路线",
          es: "Selecciona una ruta escénica y tranquila con contacto con la naturaleza",
          fr: "Sélectionner un itinéraire calme et verdoyant en contact avec la nature",
          de: "Wählen Sie eine ruhige, landschaftlich schöne Route mit Naturkontakt",
          pt: "Selecione um percurso calmo e cénico com contacto com a natureza",
          id: "Pilih rute yang indah & tenang yang bersentuhan dengan alam"
        },
        text: {
          en: "Select a scenic, quiet route with contact with nature. Walking the same path repeatedly removes the need for active navigation, allowing your mind to wander freely.",
          ja: "自然と触れ合える静かで景色の良いルートを選びます。同じ道を繰り返し歩くことで、能動的にナビゲーションを考える必要がなくなり、心が自由にさまようことができるようになります。",
          zh: "选择一条风景优美、安静且能接触自然的路线。重复走同一条路可以免去主动导航的需要，让你的思绪自由漫游。",
          es: "Selecciona una ruta escénica y tranquila con contacto con la naturaleza. Caminar repetidamente por el mismo sendero elimina la necesidad de navegación activa, permitiendo que tu mente divague libremente.",
          fr: "Sélectionnez un itinéraire calme et verdoyant en contact avec la nature. Marcher sur le même chemin évite d'avoir à s'orienter activement, ce qui permet à l'esprit de vagabonder librement.",
          de: "Wählen Sie eine ruhige Route mit Naturkontakt. Wenn Sie denselben Weg wiederholt gehen, müssen Sie nicht aktiv navigieren, sodass Ihre Gedanken frei schweifen können.",
          pt: "Selecione um percurso calmo e cénico com contacto com a natureza. Caminhar repetidamente pelo mesmo caminho elimina a necessidade de navegação ativa, permitindo que a sua mente divague livremente.",
          id: "Pilih rute yang indah, tenang dengan kontak alam. Berjalan di jalur yang sama berulang kali menghilangkan kebutuhan navigasi aktif, memungkinkan pikiran Anda mengembara dengan bebas."
        }
      },
      {
        name: {
          en: "Disconnect completely from all digital inputs",
          ja: "すべてのデジタル入力から完全に切断する",
          zh: "彻底断开与所有数字输入的连接",
          es: "Desconéctate por completo de todas las entradas digitales",
          fr: "Se déconnecter complètement de toutes les sources numériques",
          de: "Trennen Sie sich vollständig von allen digitalen Kanälen",
          pt: "Desligue-se completamente de todas as fontes digitais",
          id: "Putuskan sambungan sepenuhnya dari semua input digital"
        },
        text: {
          en: "Leave your smartphone in your pocket and do not listen to music or podcasts. Silence is necessary to allow your subconscious thoughts to rise to the surface.",
          ja: "スマートフォンはポケットに入れたままにし、音楽やポッドキャストは聴かないようにします。無意識の思考が表面に浮かび上がるためには静寂が必要です。",
          zh: "把智能手机放在口袋里，不要听音乐或播客。必须保持安静，以便让潜意识中的想法浮出水面。",
          es: "Deja tu teléfono en el bolsillo y no escuches música ni podcasts. El silencio es necesario para permitir que tus pensamientos subconscientes salgan a la superficie.",
          fr: "Laissez votre smartphone dans votre poche, n'écoutez ni musique ni podcast. Le silence est nécessaire pour laisser les pensées subconscientes remonter à la surface.",
          de: "Lassen Sie Ihr Smartphone in der Tasche und hören Sie keine Musik oder Podcasts. Stille ist notwendig, damit Ihre unbewussten Gedanken an die Oberfläche steigen können.",
          pt: "Deixe o seu telemóvel no bolso e não ouça música nem podcasts. O silêncio é necessário para permitir que os seus pensamentos subconscientes subam à superfície.",
          id: "Tinggalkan ponsel cerdas Anda di saku dan jangan mendengarkan musik atau podcast. Keheningan diperlukan untuk membiarkan pikiran bawah sadar Anda muncul ke permukaan."
        }
      },
      {
        name: {
          en: "Capture your sudden ideas immediately",
          ja: "突然のアイデアを即座に捕らえる",
          zh: "立即捕捉你脑海中闪现的创意",
          es: "Captura tus ideas repentinas de inmediato",
          fr: "Saisir immédiatement vos idées soudaines",
          de: "Halten Sie plötzliche Ideen sofort fest",
          pt: "Capte as suas ideias repentinas de imediato",
          id: "Tangkap ide-ide mendadak Anda segera"
        },
        text: {
          en: "Carry a small notebook or use a quick voice recorder to capture fleeting thoughts as they appear during your walk, and review them once you return.",
          ja: "散歩中に浮かんだ一時的な考えをキャッチするために、小さなノートを持ち歩くか、簡単なボイスレコーダーを使用して記録し、戻ってから見直します。",
          zh: "携带一个小笔记本或使用快速语音录音机，以捕捉散步期间浮现的转瞬即逝的想法，并在返回后进行查看。",
          es: "Lleva un cuaderno pequeño o utiliza una grabadora de voz rápida para capturar los pensamientos fugaces a medida que aparecen durante tu caminata, y revísalos cuando regreses.",
          fr: "Portez un petit carnet ou utilisez un enregistreur vocal rapide pour saisir les pensées fugaces qui apparaissent pendant votre marche, puis relisez-les à votre retour.",
          de: "Tragen Sie ein kleines Notizbuch bei sich oder nutzen Sie ein Diktiergerät, um flüchtige Gedanken während des Spaziergangs festzuhalten und nach der Rückkehr zu überprüfen.",
          pt: "Lave um caderno pequeno ou use um gravador de voz rápido para capturar os pensamentos fugazes à medida que aparecem durante a caminhada, e reveja-os quando regressar.",
          id: "Bawalah buku catatan kecil atau gunakan perekam suara cepat untuk menangkap pikiran-pikiran sekilas saat muncul selama Anda berjalan, dan tinjau kembali setelah Anda kembali."
        }
      }
    ],
    cautionTitle: {
      en: "A neuroscientific word for a successful routine",
      ja: "効果的なルーティンのための脳科学的な一言",
      zh: "成功惯例的脑科学建议",
      es: "Un consejo neurocientífico para una rutina exitosa",
      fr: "Un conseil neuroscientifique pour une routine réussie",
      de: "Ein gehirnwissenschaftlicher Ratschlag für eine erfolgreiche Routine",
      pt: "Um conselho neurocientífico para uma rotina de sucesso",
      id: "Saran ilmiah saraf untuk rutinitas yang sukses"
    },
    cautionDesc: {
      en: "Inspiration is not a random gift; it is a guest that visits those who work for it daily. By stepping away from your screens and walking in silence, you give your brain the space it needs to connect the dots. Commit to a daily walk, embrace the silence, and let your subconscious solve your hardest problems.",
      ja: "インスピレーションはランダムな贈り物ではなく、毎日そのために働く人を訪れるゲストです。画面から離れて静寂の中を歩くことで、脳に点と点をつなぐために必要なスペースを与えることができます。毎日の散歩を約束し、静けさを受け入れ、無意識に最も困難な問題を解決させてください。",
      zh: "灵感绝非随机的恩赐；它是拜访那些每日为此付出努力之人的客人。通过远离屏幕并在安静中漫步，你给大脑提供了连接点滴所需的空间。坚持每日散步，拥抱宁静，让潜意识解决你最棘手的问题。",
      es: "La inspiración no es un regalo aleatorio; es una invitada que visita a quienes trabajan por ella a diario. Al alejarte de las pantallas y caminar en silencio, le das a tu cerebro el espacio que necesita para conectar los puntos. Comprométete con una caminata diaria.",
      fr: "L'inspiration n'est pas un don du hasard ; c'est un invité qui rend visite à ceux qui y travaillent quotidiennement. En vous éloignant des écrans et en marchant en silence, vous donnez à votre cerveau l'espace pour faire le lien entre les idées.",
      de: "Inspiration ist kein zufälliges Geschenk, sondern ein Gast, der diejenigen besucht, die täglich dafür arbeiten. Indem Sie Bildschirme meiden und in Stille gehen, geben Sie Ihrem Gehirn Raum, Zusammenhänge zu erkennen. Gehen Sie täglich spazieren.",
      pt: "A inspiração não é um presente aleatório; é uma convidada que visita quem trabalha para ela diariamente. Ao afastar-se dos ecrãs e caminhar em silêncio, dá ao seu cérebro o espaço necessário para ligar os pontos. Compromete-se com uma caminhada diária.",
      id: "Inspirasi bukanlah hadiah acak; itu adalah tamu yang mengunjungi mereka yang bekerja untuk itu setiap hari. Dengan menjauh dari layar & berjalan dalam keheningan, Anda memberikan otak Anda ruang yang dibutuhkan untuk menghubungkan titik-titik."
    }
  },
  'einstein-violin-thinking': {
          "title": {
              "ko": "생각의 막다른 길에서 바이올린을 켠 천재? 알베르트 아인슈타인의 리셋 루틴",
              "en": "The Genius Who Played the Violin at a Thinking Dead End? Albert Einstein's Reset Routine",
              "ja": "思考が行き詰まった時にバイオリンを弾いた天才？アルベルト・アインシュタインのリセットルーティン",
              "zh": "在思考死胡同里拉小提琴的天才？阿尔伯特·爱因斯坦的重置惯例",
              "es": "¿El genio que tocaba el violín en un callejón sin salida del pensamiento? La rutina de reinicio de Albert Einstein",
              "fr": "Le génie qui jouait du violon dans une impasse de réflexion ? La routine de réinitialisation d'Albert Einstein",
              "de": "Das Genie, das in einer Denksackgasse Geige spielte? Albert Einsteins Reset-Routine",
              "pt": "O gênio que tocava violino em um beco sem saída mental? A rotina de reinício de Albert Einstein",
              "id": "Sang Genius yang Bermain Biola Saat Buntu Berpikir? Rutinitas Reset Albert Einstein"
          },
          "description": {
              "ko": "물리학의 패러다임을 바꾼 알베르트 아인슈타인. 연구 도중 생각이 꽉 막힐 때마다 바이올린을 연주했던 그의 독특한 뇌 리셋법과 현대인을 위한 3단계 인지 전환 실천법을 알아봅니다.",
              "en": "Albert Einstein, the genius physicist who played the violin whenever he was stuck. Discover his cognitive reset routine and a 3-step practice for modern people.",
              "ja": "思考が行き詰まるたびにバイオリンを弾いていた天才物理学者アルベルト・アインシュタイン。彼の脳のリセット法と現代人のための3ステップ実践法を紹介します。",
              "zh": "阿尔伯特·爱因斯坦，每当思考受阻时就会拉小提琴的天才物理学家。介绍他的大脑重置方法以及现代人的三步实践指南。",
              "es": "Albert Einstein, el genio de la física que tocaba el violín cuando se estancaba. Descubra su rutina de reinicio cognitivo y una práctica de 3 pasos para personas modernas.",
              "fr": "Albert Einstein, le génie de la physique qui jouait du violon quand il était bloqué. Découvrez sa routine de réinitialisation cognitive et une pratique en 3 étapes.",
              "de": "Albert Einstein, das Physikergenie, das bei Denkblockaden Geige spielte. Entdecken Sie seine kognitive Reset-Routine und eine 3-Schritt-Praxis für moderne Menschen.",
              "pt": "Albert Einstein, o físico genial que tocava violino quando estava bloqueado. Descubra sua rotina de reinício cognitivo e um guia prático de 3 passos.",
              "id": "Albert Einstein, fisikawan genius yang bermain biola saat pikirannya buntu. Temukan rutinitas reset kognitifnya dan panduan praktis 3 langkah untuk manusia modern."
          },
          "authority": {
              "ko": "알베르트 아인슈타인 전기 'Einstein: A Life' 및 Frontiers in Psychology 학술지",
              "en": "Albert Einstein's Biography 'Einstein: A Life' & Frontiers in Psychology Journal",
              "ja": "アインシュタイン評伝「Einstein: A Life」および学術誌「Frontiers in Psychology」",
              "zh": "传记《Einstein: A Life》与学术期刊《Frontiers in Psychology》",
              "es": "Biografía de Albert Einstein 'Einstein: A Life' y revista Frontiers in Psychology",
              "fr": "Biographie d'Albert Einstein 'Einstein: A Life' & revue Frontiers in Psychology",
              "de": "Albert Einsteins Biografie 'Einstein: A Life' & Fachzeitschrift Frontiers in Psychology",
              "pt": "Biografia de Albert Einstein 'Einstein: A Life' & revista Frontiers in Psychology",
              "id": "Biografi Albert Einstein 'Einstein: A Life' & Jurnal Frontiers in Psychology"
          },
          "intro": {
              "ko": "상대성 이론을 발표하여 현대 물리학의 패러다임을 통째로 바꾸고 인류가 우주를 이해하는 방식을 혁명적으로 변화시킨 역사상 가장 위대한 물리학자, 알베르트 아인슈타인. 20세기 최고의 천재로 손꼽히는 그의 기발하고 혁신적인 아이디어들은 과연 어디서 탄생했을까요? 🎻\n\n아인슈타인은 복잡한 물리학 방정식을 연구하던 중 수학적 계산이 막다른 길에 다다르거나 생각이 꽉 막혀 더 이상 진전이 없을 때, 책상에서 일어나 바이올린 활을 잡았습니다. 그는 그의 어머니로부터 물려받은 소중한 바이올린이자 애칭이 붙은 '리나(Lina)'를 연주했습니다. 그는 바이올린을 켜는 동안 머릿속의 복잡한 물리 법칙들을 완전히 내려놓고 음악의 선율과 리듬에 온전히 몰입했습니다. 신기하게도 연주를 마치고 나면, 무의식 속에서 해결되지 않던 물리 문제들의 돌파구와 영감이 벼락처럼 떠오르곤 했습니다.\n\n오늘 BuildSelf에서는 아인슈타인이 평생 실천했던 '바이올린 리셋' 루틴의 과학적 작동 원리와 현대인들이 창의적 문제 해결을 위해 이를 어떻게 활용할 수 있는지 알아봅니다.",
              "en": "Albert Einstein, the greatest physicist in history who changed the paradigm of modern physics by publishing the theory of relativity and revolutionized the way mankind understands the universe. Where did the great physical inspirations that changed the paradigm of mankind come from? 🎻\n\nEinstein always got up from his desk and played the violin 'Lina', a precious violin inherited from his mother, whenever he ran into a difficult mathematical obstacle or was stuck in his research. While playing the violin, he completely let go of the complex physical laws in his head and immersed himself in the melody and rhythm of the music. Surprisingly, after playing, breakthroughs and inspirations for physics problems that were not resolved in his subconscious mind often came like lightning.\n\nToday, BuildSelf introduces the scientific principles behind Einstein's 'violin reset' routine and how modern people can use it to solve creative problems.",
              "ja": "相対性理論を発表して現代物理学のパラダイムを塗り替え、人類の宇宙観に革命をもたらした歴史上最も偉大な物理学者、アルベルト・アインシュタイン。20世紀最高の天才と呼ばれる彼の独創的なアイデアは、一体どこから生まれたのでしょうか？ 🎻\n\nアインシュタインは研究中、難しい数学的難問に直面したり、思考が行き詰まったりするたびに、いつでも机から立ち上がり、母親から受け継いだ大切なバイオリンであり、愛称までついた「リーナ（Lina）」を演奏しました。バイオリンを弾いている間、彼は頭の中の複雑な物理法則を完全に手放し、音楽の旋律とリズムに没頭しました。不思議なことに、演奏を終えると、無意識の中で解決できなかった物理の問題に対する突破口やインスピレーションが、稲妻のようにひらめくことがよくありました。\n\n今日のBuildSelfでは、アインシュタインが終生実践した「バイオリンリセット」ルーティンの科学的原理と、現代人が創造的な問題解決のためにこれをどのように活用できるかを紹介します。",
              "zh": "阿尔伯特·爱因斯坦，发表相对论、改写现代物理学范式，并彻底改变人类宇宙观的史诗级物理学家。改变人类思维范式的伟大物理灵感究竟源自何处？ 🎻\n\n爱因斯坦在研究中遇到复杂的数学瓶颈或思考卡壳时，总会离开书桌，拿起从母亲那里继承的珍贵小提琴——被他爱称为“莉娜（Lina）”的琴来演奏。在拉琴时，他彻底放下脑中复杂的物理定律，将自己完全沉浸在音乐的旋律和节奏中。令人惊奇的是，演奏结束之后，那些在潜意识中悬而未决的物理难题的突破口和灵感，往往会像闪电般浮现。\n\n今天，BuildSelf 将带您了解爱因斯坦“小提琴重置”惯例背后的科学原理，以及现代人如何利用它来解决创造性难题。",
              "es": "Albert Einstein, el físico más grande de la historia que cambió el paradigma de la física moderna al publicar la teoría de la relatividad y revolucionó la forma en que la humanidad comprende el universo. ¿De dónde surgieron las grandes inspiraciones físicas que cambiaron la mentalidad de la humanidad? 🎻\n\nEinstein siempre se levantaba de su escritorio y tocaba el violín 'Lina', un valioso violín heredado de su madre, cada vez que tropezaba con un obstáculo matemático difícil o se estancaba en su investigación. Mientras tocaba el violín, se desprendía por completo de las complejas leyes físicas de su cabeza y se sumergía en la melodía y el ritmo de la música. Sorprendentemente, tras tocar, los avances e inspiraciones para los problemas de física que no se resolvían en su mente subconsciente solían llegar como un relámpago.\n\nHoy, BuildSelf presenta los principios científicos que subyacen a la rutina de 'reinicio de violín' de Einstein y cómo las personas modernas pueden utilizarla para resolver problemas creativos.",
              "fr": "Albert Einstein, le plus grand physicien de l'histoire, qui a changé le paradigme de la physique moderne en publiant la théorie de la relativité et a révolutionné la façon dont l'humanité comprend l'univers. D'où sont nées les grandes inspirations physiques qui ont changé les mentalités ? 🎻\n\nEinstein se levait toujours de son bureau pour jouer du violon 'Lina', un précieux violon hérité de sa mère, dès qu'il se heurtait à un obstacle mathématique difficile ou qu'il était bloqué dans ses recherches. En jouant du violon, il se libérait complètement des lois physiques complexes qui lui trottaient dans la tête pour s'immerger dans la mélodie et le rythme. Étonnamment, après avoir joué, les solutions et inspirations aux problèmes de physique qui ne s'étaient pas résolus dans son subconscient lui apparaissaient souvent comme un éclair.\n\nAujourd'hui, BuildSelf présente les principes scientifiques qui sous-tendent la routine de 'réinitialisation par le violon' d'Einstein et comment les intégrer au quotidien pour résoudre des problèmes créatifs.",
              "de": "Albert Einstein, der größte Physiker der Geschichte, der mit der Relativitätstheorie das Paradigma der modernen Physik veränderte und das Weltbild der Menschheit revolutionierte. Woher stammten die großen physikalischen Inspirationen, die das Denken veränderten? 🎻\n\nEinstein stand immer von seinem Schreibtisch auf und spielte auf seiner Geige 'Lina' – einer kostbaren Geige, die er von seiner Mutter geerbt hatte –, wann immer er vor einem schwierigen mathematischen Hindernis stand oder in seiner Forschung feststeckte. Beim Geigenspiel ließ er die komplexen physikalischen Gesetze in seinem Kopf völlig los und tauchte in die Melodie und den Rhythmus der Musik ein. Überraschenderweise kamen ihm danach oft blitzartig Durchbrüche und Inspirationen für ungelöste Probleme.\n\nHeute stellt BuildSelf die wissenschaftlichen Prinzipien hinter Einsteins 'Geigen-Reset'-Routine vor und zeigt, wie moderne Menschen sie zur kreativen Problemlösung nutzen können.",
              "pt": "Albert Einstein, o maior físico da história, que mudou o paradigma da física moderna ao publicar a teoria da relatividade e revolucionou a forma como a humanidade compreende o universo. De onde vieram as grandes inspirações que mudaram a mente humana? 🎻\n\nEinstein sempre se levantava de sua mesa e tocava seu violino 'Lina' – um instrumento precioso herdado de sua mãe – sempre que encontrava um obstáculo matemático difícil ou se via bloqueado em suas pesquisas. Ao tocar violino, ele se desligava completamente das leis físicas complexas em sua cabeça e se entregava à melodia e ao ritmo. Surpreendentemente, depois de tocar, soluções e insights para problemas que pareciam insolúveis surgiam em sua mente como um raio.\n\nHoje, o BuildSelf apresenta os princípios científicos por trás da rotina de 'reinício pelo violino' de Einstein e como as pessoas modernas podem usá-la para resolver desafios de forma criativa.",
              "id": "Albert Einstein, fisikawan terbesar dalam sejarah yang mengubah paradigma fisika modern dengan merumuskan teori relativitas dan merevolusi cara manusia memahami semesta. Dari mana datangnya inspirasi fisik luar biasa yang mengubah pikiran manusia ini? 🎻\n\nEinstein selalu bangkit dari mejanya dan memainkan biola 'Lina' – sebuah biola berharga warisan ibunya – setiap kali menemui hambatan matematika yang sulit atau pikirannya buntu saat meneliti. Sembari bermain biola, ia melepaskan sepenuhnya beban hukum fisika yang rumit di kepalanya dan membenamkan diri dalam melodi serta irama musik. Ajaibnya, setelah bermain biola, terobosan dan inspirasi untuk memecahkan masalah fisika yang tak kunjung selesai di alam bawah sadarnya justru sering kali muncul seketika.\n\nHari ini, BuildSelf menyajikan prinsip-prinsip ilmiah di balik rutinitas 'reset biola' Einstein dan bagaimana manusia modern dapat menggunakannya untuk memecahkan masalah secara kreatif."
          },
          "whyTitle": {
              "ko": "뇌의 다른 영역을 깨우는 '인지적 전환'",
              "en": "'Cognitive Shifting' to Awaken Other Areas of the Brain",
              "ja": "脳の異なる領域を呼び覚ます「認知の切り替え」",
              "zh": "唤醒大脑其他区域的“认知转移”",
              "es": "'Cambio Cognitivo' para Despertar Otras Áreas del Cerebro",
              "fr": "La 'Bascule Cognitive' pour Éveiller d'Autres Zones du Cerveau",
              "de": "'Kognitiver Wechsel' zur Aktivierung anderer Gehirnareale",
              "pt": "'Mudança Cognitiva' para Despertar Outras Áreas do Cérebro",
              "id": "'Alih Kognitif' untuk Mengaktifkan Area Otak Lain"
          },
          "whyDesc": {
              "ko": "우리가 하나의 복잡한 문제에 지나치게 몰입해 있으면, 뇌는 생각의 덫에 갇혀 특정 신경 회로만을 반복적으로 활성화합니다. 이를 인지 심리학에서는 '터널 시야(Tunnel Vision)' 또는 '생각의 과부하' 상태라고 부릅니다. \n\n아인슈타인이 행한 바이올린 연주는 이 과부하된 신경 회로를 즉각 차단하고 뇌의 다른 영역을 활성화하는 완벽한 **'인지적 전환(Cognitive Shifting)'**의 도구였습니다. 악기를 연주하는 행위는 시각, 청각, 촉각을 동시에 자극하며 좌뇌와 우뇌를 연결하는 뇌량(Corpus Callosum)을 강하게 자극합니다. 집착하던 문제로부터 물리적, 정신적으로 한 걸음 물러나 음악에 온전히 주의를 집중하는 순간, 뇌는 무의식 상태(Default Mode Network)로 접어들어 흩어져 있던 정보들을 창의적으로 결합하여 해답을 유도하는 '아하 모먼트(Aha! Moment)'를 만들어 냅니다.",
              "en": "When we are overly immersed in a single complex problem, the brain is trapped in a thinking trap and repeatedly activates only a specific neural circuit. Cognitive psychology calls this state 'tunnel vision' or 'cognitive overload.'\n\nEinstein's violin playing was a tool for a perfect **'cognitive shifting'** that immediately cut off this overloaded neural circuit and activated other areas of the brain. Playing a musical instrument simultaneously stimulates sight, hearing, and touch, and strongly stimulates the corpus callosum that connects the left and right brains. The moment you step away physically and mentally from the problem you were obsessed with and focus your attention entirely on the music, the brain enters the default mode network and creatively combines scattered information to create an 'Aha! Moment' that leads to a solution.",
              "ja": "私たちが一つの複雑な問題に過度に没頭していると、脳は思考の罠に陥り、特定の神経回路のみを繰り返し活性化させます。これは認知心理学において「トンネル視野」または「認知の過負荷」状態と呼ばれます。\n\nアインシュタインが行ったバイオリン演奏は、この過負荷になった神経回路を即座に遮断し、脳の他の領域を活性化する完璧な**「認知の切り替え（Cognitive Shifting）」**ツールでした。楽器の演奏は、視覚・聴覚・触覚を同時に刺激し、左右の脳をつなぐ脳梁（Corpus Callosum）を強力に刺激します。執着していた問題から物理的・精神的に一歩退き、音楽に完全に注意を集中する瞬間、脳はデフォルトモードネットワーク（Default Mode Network）に入り、分散していた情報を創造的に結合して解決へと導く「アハ・モーメント（Aha! Moment）」を作り出すのです。",
              "zh": "当我们过度沉浸在某一个复杂的难题中时，大脑会陷入思维陷阱，反复激活特定的单一神经回路。认知心理学将这种状态称为“隧道视野”或“认知超载”。\n\n爱因斯坦演奏小提琴的举动，正是阻断这一超载神经回路并激活大脑其他区域的完美**“认知转移（Cognitive Shifting）”**工具。演奏乐器同时刺激视觉、听觉和触觉，并强烈刺激连接左右脑的胼胝体（Corpus Callosum）。当你从执着的难题中抽身（无论是物理上还是精神上），将注意力完全集中于音乐时，大脑就会进入默认模式网络（Default Mode Network），从而创造性地重组零散信息，产生引导问题解决的“顿悟时刻（Aha! Moment）”。",
              "es": "Cuando estamos demasiado inmersos en un único problema complejo, el cerebro se ve atrapado en una trampa de pensamiento y activa repetidamente sólo un circuito neural específico. La psicología cognitiva denomina a este estado 'visión de túnel' o 'sobrecarga cognitiva'.\n\nEl violín de Einstein era una herramienta para un perfecto **'cambio cognitivo (Cognitive Shifting)'** que cortaba inmediatamente este circuito neuronal sobrecargado y activaba otras áreas cerebrales. Tocar un instrumento estimula simultáneamente la vista, el oído y el tacto, y estimula con fuerza el cuerpo calloso que conecta los cerebros izquierdo y derecho. En el momento en que se aleja física y mentalmente del problema que le obsesionaba y centra su atención por completo en la música, el cerebro entra en la red neuronal por defecto y combina creativamente la información dispersa para crear un 'Momento Aha!' que conduce a una solución.",
              "fr": "Lorsque nous sommes trop plongés dans un seul problème complexe, le cerveau s'enferme dans un piège de pensée et active de manière répétée un seul circuit neuronal spécifique. La psychologie cognitive appelle cet état 'vision tunnel' ou 'surcharge cognitive'.\n\nLe violon d'Einstein était l'outil d'une parfaite **'bascule cognitive (Cognitive Shifting)'** qui coupait immédiatement ce circuit surchargé pour activer d'autres zones cérébrales. Jouer d'un instrument stimule simultanément la vue, l'ouïe et le toucher, et stimule fortement le corps calleux reliant les deux hémisphères. Dès que l'on s'éloigne physiquement et mentalement du problème pour se concentrer sur la musique, le cerveau passe en réseau du mode par défaut et combine les informations dispersées pour créer le 'Moment Eurêka !' qui mène à la solution.",
              "de": "Wenn wir uns zu sehr in ein einzelnes komplexes Problem vertiefen, gerät das Gehirn in eine Denkfalle und aktiviert wiederholt nur einen bestimmten Schaltkreis. Die kognitive Psychologie nennt diesen Zustand 'Tunnelblick' oder 'kognitive Überlastung'.\n\nEinsteins Geigenspiel war das Werkzeug für einen perfekten **'kognitiven Wechsel (Cognitive Shifting)'**, der diesen überlasteten Schaltkreis sofort unterbrach und andere Gehirnareale aktivierte. Das Spielen eines Instruments stimuliert Sehen, Hören und Fühlen gleichermaßen und regt den Balken (Corpus Callosum) an, der die Gehirnhälften verbindet. Sobald man sich physisch und mental von dem Problem entfernt und sich ganz auf die Musik konzentriert, schaltet das Gehirn in das Ruhezustandsnetzwerk (Default Mode Network) und verknüpft verstreute Informationen kreativ zu einem 'Aha-Erlebnis'.",
              "pt": "Quando estamos excessivamente imersos em um único problema complexo, o cérebro fica preso em uma armadilha mental e ativa repetidamente apenas um circuito neural específico. A psicologia cognitiva chama esse estado de 'visão de túnel' ou 'sobrecarga cognitiva'.\n\nO violino de Einstein funcionava como uma ferramenta para uma perfeita **'mudança cognitiva (Cognitive Shifting)'**, que interrompia imediatamente o circuito sobrecarregado e ativava outras áreas do cérebro. Tocar um instrumento estimula visão, audição e tato simultaneamente, ativando fortemente o corpo caloso que conecta os dois hemisférios. No momento em que você se afasta física e mentalmente do problema e foca sua atenção na música, o cérebro entra na rede de modo padrão (Default Mode Network) e combina informações dispersas de forma criativa, gerando o 'Momento Eureka!' que leva à solução.",
              "id": "Ketika kita terlalu terpaku pada satu masalah rumit, otak akan terjebak dalam perangkap berpikir dan berulang kali mengaktifkan sirkuit saraf tertentu saja. Psikologi kognitif menyebut kondisi ini sebagai 'tunnel vision' (pandangan sempit) atau 'kelebihan beban kognitif'.\n\nBiola Einstein berfungsi sebagai alat untuk melakukan **'alih kognitif (Cognitive Shifting)'** yang sempurna, yang langsung memutus sirkuit saraf yang kelebihan beban dan mengaktifkan area otak lainnya. Memainkan instrumen musik menstimulasi penglihatan, pendengaran, dan sentuhan secara bersamaan, serta merangsang korpus kalosum yang menghubungkan belahan otak kanan dan kiri. Saat Anda menjauh secara fisik dan mental dari masalah yang membuat Anda terobsesi dan memfokuskan perhatian pada musik, otak akan masuk ke jaringan mode default (Default Mode Network) dan menggabungkan informasi yang tersebar secara kreatif, menghasilkan 'Momen Eureka!' yang membawa solusi."
          },
          "cautionTitle": {
              "ko": "놓아주는 법을 알아야 새로운 아이디어가 보입니다",
              "en": "You must know how to let go to see new ideas",
              "ja": "手放す方法を知ってこそ、新しいアイデアが見えます",
              "zh": "唯有学会放手，才能看见新的灵感",
              "es": "Debe saber soltar para ver nuevas ideas",
              "fr": "Il faut savoir lâcher prise pour voir naître les idées",
              "de": "Man muss loslassen können, um neue Ideen zu sehen",
              "pt": "É preciso saber desapegar para enxergar novas ideias",
              "id": "Anda harus tahu cara melepas untuk melihat ide baru"
          },
          "cautionDesc": {
              "ko": "아인슈타인은 뛰어난 물리학자이자 훌륭한 바이올리니스트이기도 했습니다. 그에게 음악은 물리학 연구와 무관한 취미가 아니라, 오히려 뇌의 피로를 예방하고 창의적 영감을 깨우는 가장 강력한 생각의 윤활유였습니다. 아이디어가 막힐 때 더 억지로 매달리기보다 아인슈타인처럼 감각적 자극의 대상을 완전히 다르게 바꾸어 뇌가 리셋할 기회를 주세요.",
              "en": "Einstein was an outstanding physicist and also an excellent violinist. For him, music was not a hobby unrelated to physics research, but rather the most powerful lubricant of thought that prevented brain fatigue and awakened creative inspiration. When ideas are blocked, instead of hanging on by force, completely change the target of sensory stimulation like Einstein to give the brain a chance to reset.",
              "ja": "アインシュタインは優れた物理学者であると同時に、優れたバイオリニストでもありました。彼にとって音楽は物理学研究とは無関係の趣味ではなく、むしろ脳の疲労を防ぎ、創造的なインスピレーションを呼び覚ます強力な思考の潤滑油でした。アイデアが行き詰まった時は、無理に執着し続けるのではなく、アインシュタインのように感覚刺激の対象を完全に変えて、脳にリセットの機会を与えてください。",
              "zh": "爱因斯坦既是伟大的物理学家，也是出色的小提琴手。对他而言，音乐并非与物理研究无关的消遣，反而是防止大脑疲劳、唤醒创造性灵感的最强思维润滑剂。当灵感枯竭时，与其死磕，不如像爱因斯坦那样彻底改变感官刺激的对象，给大脑一个重置的机会。",
              "es": "Einstein era un físico excepcional y también un excelente violinista. Para él, la música no era un pasatiempo ajeno a la investigación física, sino el lubricante del pensamiento más potente que evitaba la fatiga cerebral y despertaba la inspiración creativa. Cuando las ideas estén bloqueadas, en lugar de aferrarse a ellas por la fuerza, cambie por completo el foco de estimulación sensorial como hizo Einstein para dar al cerebro la oportunidad de reiniciar.",
              "fr": "Einstein était un physicien hors pair mais aussi un excellent violoniste. Pour lui, la musique n'était pas un loisir déconnecté de ses travaux, mais le lubrifiant de pensée le plus puissant pour éviter la fatigue cérébrale et éveiller l'inspiration. Quand les idées bloquent, ne forcez pas : changez d'activité sensorielle comme lui pour réinitialiser le cerveau.",
              "de": "Einstein war ein herausragender Physiker und auch ein exzellenter Geiger. Musik war für ihn kein von der Forschung getrenntes Hobby, sondern das stärkste Denkschmiermittel, das Gehirnmüdigkeit verhinderte und kreative Inspirationen weckte. Wenn Sie feststecken, versuchen Sie, wie Einstein den Sinnesreiz komplett zu wechseln, um dem Gehirn eine Chance zum Zurücksetzen zu geben.",
              "pt": "Einstein era um físico brilhante e também um excelente violinista. Para ele, a música não era um hobby desconectado de suas pesquisas, mas sim o lubrificante mental mais potente para evitar a fadiga cerebral e despertar a inspiração. Quando as ideias travarem, não force: mude o foco sensorial como Einstein para dar ao cérebro a chance de reiniciar.",
              "id": "Einstein adalah fisikawan luar biasa sekaligus pemain biola yang hebat. Baginya, musik bukanlah hobi yang terpisah dari penelitian fisikanya, melainkan pelumas pikiran paling ampuh untuk mencegah kelelahan otak dan membangkitkan inspirasi kreatif. Ketika ide Anda buntu, jangan dipaksakan: alihkan fokus sensorik seperti Einstein untuk memberi otak kesempatan mereset diri."
          },
          "steps": [
              {
                  "name": {
                      "ko": "생각의 강제 정지 및 화면 차단",
                      "en": "Forced Stop of Thinking and Screen Blocking",
                      "ja": "思考の強制停止と画面の遮断",
                      "zh": "强行停止思考并屏蔽屏幕",
                      "es": "Parada Forzada del Pensamiento y Bloqueo de Pantallas",
                      "fr": "Arrêt Forcé de la Réflexion et Blocage des Écrans",
                      "de": "Erzwungener Denkstopp und Bildschirmsperre",
                      "pt": "Pausa Forçada no Pensamento e Bloqueio de Telas",
                      "id": "Hentikan Pikiran Secara Paksa dan Jauhi Layar"
                  },
                  "text": {
                      "ko": "업무나 공부 중 아이디어가 막히거나 스트레스가 차오르면 즉시 키보드에서 손을 떼고 스마트폰이나 모니터 화면을 보지 않는 곳으로 이동합니다. 뇌에 들어오는 시각적 정보 유입을 차단하는 것이 우선입니다.",
                      "en": "If you get stuck or feel stressed during work or study, immediately take your hands off the keyboard and move to a place where you do not see the smartphone or monitor screen. Cutting off the visual information flowing into the brain is the priority.",
                      "ja": "仕事や勉強の途中でアイデアが行き詰まったりストレスを感じたら、すぐにキーボードから手を離し、スマートフォンやモニターの画面が見えない場所に移動します。脳に入る視覚情報の流入を遮断することが最優先です。",
                      "zh": "如果在工作或学习中灵感卡壳或压力倍增，立即将手移开键盘，走到看不见手机或显示器屏幕的地方。阻断视觉信息输入大脑是首要一步。",
                      "es": "Si se bloquea o siente estrés durante el trabajo o el estudio, retire inmediatamente las manos del teclado y diríjase a un lugar donde no vea la pantalla del smartphone o del monitor. Cortar la información visual que fluye hacia el cerebro es la prioridad.",
                      "fr": "Si vous bloquez ou stressez au travail, lâchez immédiatement le clavier et déplacez-vous là où vous ne voyez ni smartphone ni écran. Couper les flux d'informations visuelles est la priorité absolue.",
                      "de": "Wenn Sie bei der Arbeit feststecken oder Stress spüren, nehmen Sie sofort die Hände von der Tastatur und gehen Sie an einen Ort, an dem Sie keinen Bildschirm sehen. Die Unterbrechung des visuellen Informationsflusses hat Priorität.",
                      "pt": "Se você travar ou sentir estresse no trabalho, tire imediatamente as mãos do teclado e vá para um local onde não veja a tela do celular ou computador. Cortar os estímulos visuais que chegam ao cérebro é a prioridade.",
                      "id": "Jika Anda buntu atau merasa stres saat bekerja atau belajar, segera lepaskan tangan dari keyboard dan pergilah ke tempat di mana Anda tidak melihat layar ponsel atau komputer. Memutus aliran informasi visual ke otak adalah prioritas utama."
                  }
              },
              {
                  "name": {
                      "ko": "5분간의 청각 및 리듬 집중 리추얼",
                      "en": "5-Minute Listening and Rhythm Focus Ritual",
                      "ja": "5分間の聴覚・リズム集中リチュアル",
                      "zh": "5分钟听觉与节奏专注仪式",
                      "es": "Ritual de 5 Minutos de Escucha y Enfoque en el Ritmo",
                      "fr": "Ritual de 5 Min d'Écoute et de Focus sur le Rythme",
                      "de": "5-minütiges Hör- und Rhythmusritual",
                      "pt": "Ritual de 5 Minutos de Foco na Audição e no Ritmo",
                      "id": "Ritual 5 Menit Fokus Mendengar dan Mengikuti Irama"
                  },
                  "text": {
                      "ko": "주변에 있는 가벼운 손악기(칼림바, 리코더, 우쿨렐레, 심지어 핑거 드럼 등)를 5분간 마음대로 연주해 봅니다. 악기가 없다면 가사가 없는 클래식이나 재즈 연주곡을 재생한 뒤 눈을 감고, 멜로디의 흐름과 타악기의 박자에 온 감각을 집중하여 손가락으로 가볍게 박자를 탑니다.",
                      "en": "Try playing a light hand instrument (kalimba, recorder, ukulele, or even finger drums) around you for 5 minutes. If you do not have an instrument, play a classical or jazz instrumental song with your eyes closed, focus all your senses on the flow of melody and the rhythm of the percussion, and lightly tap the rhythm with your fingers.",
                      "ja": "身の回りにある手軽な楽器（カリンバ、リコーダー、ウクレレ、あるいはフィンガードラムなど）を5分間自由に演奏してみましょう。楽器がない場合は、歌詞のないクラシックやジャズの演奏曲を再生して目を閉じ、メロディの響きとリズムに意識を集中させ、指で軽く拍子をとります。",
                      "zh": "尝试摆弄身边的简易手部乐器（如卡林巴琴、八孔竖笛、尤克里里，甚至指尖鼓）5分钟。如果没有乐器，闭上眼睛，播放一首无歌词的古典乐或爵士乐，将全部感官集中在旋律的流动和打击乐的节奏上，用手指轻轻打拍子。",
                      "es": "Pruebe a tocar un instrumento de mano ligero (kalimba, flauta dulce, ukelele o incluso tambores de dedos) a su alrededor durante 5 minutos. Si no dispone de un instrumento, reproduzca un tema instrumental clásico o de jazz con los ojos cerrados, concentre todos los sentidos en el fluir de la melodía y el compás, y marque ligeramente el ritmo con los dedos.",
                      "fr": "Essayez de jouer d'un instrument à main léger (kalimba, flûte, ukulélé, ou même pianoter avec les doigts) pendant 5 minutes. Sinon, fermez les yeux et écoutez un morceau instrumental de classique ou de jazz, concentrez vos sens sur la mélodie et marquez le rythme.",
                      "de": "Spielen Sie 5 Minuten lang ein einfaches Handinstrument (Kalimba, Blockflöte, Ukulele oder Fingertrommeln). Wenn Sie kein Instrument haben, spielen Sie mit geschlossenen Augen ein klassisches oder Jazz-Instrumentalstück ab, konzentrieren Sie sich auf die Melodie und klopfen Sie den Rhythmus mit den Fingern mit.",
                      "pt": "Tente tocar um instrumento manual leve (calimba, flauta, ukulele ou mesmo tambores de dedo) por 5 minutos. Se não tiver um instrumento, feche os olhos e ouça uma música instrumental clássica ou de jazz, concentrando-se na melodia e marcando o ritmo com os dedos.",
                      "id": "Cobalah memainkan instrumen musik tangan yang ringan (kalimba, suling, ukulele, atau bahkan mengetuk jari) selama 5 menit. Jika tidak memiliki instrumen, pejamkan mata dan dengarkan lagu instrumental klasik atau jazz, pusatkan seluruh indra pada melodi dan ikuti iramanya dengan jari Anda."
                  }
              },
              {
                  "name": {
                      "ko": "이완 후 떠오른 아이디어 즉시 외재화",
                      "en": "Immediate Externalization of Ideas After Relaxation",
                      "ja": "リラックス直後のアイデア即時メモ",
                      "zh": "放松后立即将灵感外在化",
                      "es": "Externalización Inmediata de Ideas Tras la Relajación",
                      "fr": "Externalisation Immédiate des Idées Après la Relaxation",
                      "de": "Sofortiges Aufschreiben von Ideen nach der Entspannung",
                      "pt": "Externalização Imediata das Ideias Após o Relaxamento",
                      "id": "Tulis Ide Segera Setelah Relaksasi"
                  },
                  "text": {
                      "ko": "5분간의 리셋 시간이 끝난 직후, 의도적으로 원래 하던 문제로 가볍게 시선을 돌립니다. 이때 뇌가 긴장에서 해방되며 무의식 속에서 정제되어 떠오르는 짧은 힌트나 키워드를 가볍게 메모장에 옮겨 적습니다.",
                      "en": "Immediately after the 5-minute reset time, intentionally turn your eyes back to the original problem. At this time, as the brain is released from tension, lightly write down short hints or keywords that naturally come up in your subconscious mind in a notepad.",
                      "ja": "5分間のリセットタイムが終わった直後、意識を元の問題に軽く戻します。この時、緊張から解放された脳の無意識から自然に浮かび上がってくる短いヒントやキーワードを、すぐにメモ帳に書き留めます。",
                      "zh": "5分钟重置结束后，有意识地将目光转回原本的问题上。此时，随着大脑压力释放，迅速将潜意识中自然浮现出的简短提示或关键词记录在备忘录上。",
                      "es": "Inmediatamente después del tiempo de reinicio de 5 minutos, vuelva intencionadamente la mirada al problema original. En este momento, a medida que el cerebro se libera de la tensión, anote rápidamente en un bloc de notas las pistas cortas o palabras clave que surjan de forma natural en su subconsciente.",
                      "fr": "Juste après les 5 minutes de pause, retournez vers le problème initial. Avec le relâchement des tensions, notez immédiatement sur un carnet les pistes ou mots-clés qui surgissent naturellement de votre subconscient.",
                      "de": "Kehren Sie direkt nach dem 5-minütigen Reset gedanklich zum ursprünglichen Problem zurück. Schreiben Sie die kurzen Hinweise oder Schlüsselwörter, die sich nun aus dem entspannten Unterbewusstsein lösen, sofort in ein Notizbuch.",
                      "pt": "Logo após os 5 minutos de pausa, volte sua atenção para o problema inicial. Com o relaxamento das tensões, anote rapidamente no bloco de notas as ideias ou palavras-chave que surgirem naturalmente do subconsciente.",
                      "id": "Sesaat setelah jeda 5 menit selesai, kembalikan perhatian Anda pada masalah awal. Dengan meredanya ketegangan, segera catat ide atau kata kunci yang muncul secara alami dari alam bawah sadar di buku catatan."
                  }
              }
          ],
          "faqs": [
              {
                  "question": {
                      "ko": "아인슈타인은 바이올린 연주 외에 다른 방식으로도 뇌를 리셋했나요?",
                      "en": "Did Einstein reset his brain in other ways besides playing the violin?",
                      "ja": "アインシュタインはバイオリン演奏以外にどのように脳をリセットしましたか？",
                      "zh": "除演奏小提琴外，爱因斯坦还通过什么方式重置大脑？",
                      "es": "¿Reajustaba Einstein su cerebro de otras formas además de tocar el violín?",
                      "fr": "Einstein réinitialisait-il son cerveau autrement qu'en jouant du violon ?",
                      "de": "Hat Einstein sein Gehirn auch auf andere Weise zurückgesetzt?",
                      "pt": "Einstein reiniciava o cérebro de outras formas além do violino?",
                      "id": "Apakah Einstein mereset otaknya dengan cara lain selain bermain biola?"
                  },
                  "answer": {
                      "ko": "네, 아인슈타인은 연구 도중 정기적으로 요트를 타고 바다로 나가 바람을 느끼며 명상을 하거나, 하루 10시간 이상 충분한 수면을 통해 잠재의식이 문제를 정리할 수 있도록 도왔습니다.",
                      "en": "Yes, Einstein regularly went sailing on the sea to feel the wind and meditate, or slept for over 10 hours a day to allow his subconscious to organize complex problems.",
                      "ja": "はい、アインシュタインは研究の合間に定期的にヨットに乗って海に出て、風を感じながら瞑想したり、1日10時間以上の十分な睡眠をとることで、無意識が課題を整理できるようにしました。",
                      "zh": "是的，爱因斯坦会定期乘帆船出海，在感受风吹的同时进行冥想，或者每天保持10小时以上的充足睡眠，让潜意识去整理复杂的科学难题。",
                      "es": "Sí, Einstein navegaba regularmente por el mar para sentir el viento y meditar, o dormía más de 10 horas al día para permitir que su subconsciente organizara problemas complejos.",
                      "fr": "Oui, Einstein faisait régulièrement de la voile pour sentir le vent et méditer, ou dormait plus de 10 heures par jour pour laisser son subconscient organiser les problèmes complexes.",
                      "de": "Ja, Einstein ging regelmäßig segeln, um den Wind zu spüren und zu meditieren, oder schlief mehr als 10 Stunden am Tag, damit sein Unterbewusstsein komplexe Probleme ordnen konnte.",
                      "pt": "Sim, Einstein costumava velejar no mar para sentir o vento e meditar, ou dormia mais de 10 horas por dia para permitir ao seu subconsciente organizar os problemas complexos.",
                      "id": "Ya, Einstein secara teratur pergi berlayar di laut untuk merasakan angin dan bermeditasi, atau tidur lebih dari 10 jam sehari agar alam bawah sadarnya dapat merapikan masalah rumit."
                  }
              },
              {
                  "question": {
                      "ko": "악기를 전혀 다룰 줄 모르는 사람도 이 루틴을 따라 할 수 있나요?",
                      "en": "Can someone who doesn't know how to play any instrument follow this routine?",
                      "ja": "楽器が全く弾けない人でもこのルーティンを実践できますか？",
                      "zh": "完全不会乐器的人也可以实践这个习惯吗？",
                      "es": "¿Puede seguir esta rutina alguien que no sepa tocar ningún instrumento?",
                      "fr": "Quelqu'un qui ne sait pas jouer d'un instrument peut-il suivre cette routine ?",
                      "de": "Kann jemand, der kein Instrument spielt, diese Routine anwenden?",
                      "pt": "Quem não sabe tocar nenhum instrumento pode seguir esta rotina?",
                      "id": "Bisakah seseorang yang tidak tahu cara bermain instrumen mengikuti rutinitas ini?"
                  },
                  "answer": {
                      "ko": "물론입니다. 악기를 직접 다루는 대신 클래식 음악에 집중하며 핑거 탭(손가락으로 리듬 타기)을 하거나, 심호흡을 하며 5분간 외부 자극을 완전히 차단하는 것만으로도 동일한 인지적 전환 효과를 낼 수 있습니다.",
                      "en": "Absolutely. Instead of playing an instrument, you can focus on classical music, do finger tapping to the rhythm, or simply practice deep breathing while blocking all external visual inputs for 5 minutes.",
                      "ja": "もちろんです。楽器を演奏する代わりにクラシック音楽に集中して指でリズムをとったり、5分間目をつぶって深呼吸し、外部の視覚刺激を完全に遮断するだけでも同様の認知切り替え効果を得られます。",
                      "zh": "当然可以。代替演奏乐器，闭上眼睛聆听古典音乐并用手指打拍子，或者仅仅在阻断外部视觉刺激的同时深呼吸5分钟，也能达到同样的认知转移效果。",
                      "es": "Por supuesto. En lugar de tocar, puede concentrarse en la música clásica, marcar el ritmo con los dedos o practicar respiraciones profundas mientras bloquea los estímulos visuales durante 5 minutos.",
                      "fr": "Absolument. Au lieu de jouer d'un instrument, vous pouvez écouter du classique en marquant le rythme avec vos doigts, ou faire des respirations profondes en coupant tout stimulus visuel pendant 5 minutes.",
                      "de": "Absolut. Statt ein Instrument zu spielen, können Sie sich auf klassische Musik konzentrieren, den Rhythmus mit den Fingern mitklopfen oder tief durchatmen, während Sie alle visuellen Reize für 5 Minuten ausblenden.",
                      "pt": "Com certeza. Em vez de tocar, pode concentrar-se na música clássica, marcar o ritmo com os dedos ou fazer respirações profundas enquanto bloqueia estímulos visuais por 5 minutos.",
                      "id": "Tentu saja. Alih-alih bermain instrumen, Anda dapat fokus pada musik klasik, mengetuk jari mengikuti irama, atau sekadar bernapas dalam-dalam sambil menutup mata selama 5 menit."
                  }
              }
          ],
          "stepImages": [
              "",
              "/images/blog/einstein_violin_relax.png",
              ""
          ]
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

        let imageHtml = '';
        if (data.stepImages && data.stepImages[idx]) {
          imageHtml = `\n  <div class="mt-6 flex justify-center">\n    <img src="${data.stepImages[idx]}" alt="${sName}" class="rounded-2xl max-w-full h-auto border border-slate-200/50 dark:border-slate-800/50 shadow-sm" />\n  </div>`;
        }

        stepCards.push(`<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 tracking-wider">${lang === 'ja' ? 'ステップ' : lang === 'zh' ? '步骤' : lang === 'fr' ? 'ÉTAPE' : lang === 'es' || lang === 'pt' ? 'PASO' : lang === 'id' ? 'LANGKAH' : lang === 'de' ? 'SCHRITT' : 'STEP'} ${stepIdx}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${sName}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${sText}
  </p>${imageHtml}
</div>`);
      });

      const stepsYaml = steps.map(s => `  - name: "${s.name.replace(/"/g, '\\"')}"\n    text: "${s.text.replace(/"/g, '\\"')}"`).join('\n');

      let faqSection = '';
      if (data.faqs && data.faqs.length > 0) {
        const faqTitle = lang === 'ja' ? '\u3088\u304f\u3042\u308b\u8cea\u554f (FAQ)'
          : lang === 'zh' ? '\u5e38\u89c1\u95ee\u9898 (FAQ)'
          : lang === 'es' ? 'Preguntas Frecuentes (FAQ)'
          : lang === 'fr' ? 'Foire Aux Questions (FAQ)'
          : lang === 'de' ? 'H\u00e4ufig gestellte Fragen (FAQ)'
          : lang === 'pt' ? 'Perguntas Frequentes (FAQ)'
          : lang === 'id' ? 'Pertanyaan Sering Diajukan (FAQ)'
          : 'Frequently Asked Questions (FAQ)';

        const faqItems = data.faqs.map((faq, faqIdx) => {
          const q = faq.question[lang] || faq.question['en'];
          const a = faq.answer[lang] || faq.answer['en'];
          const isOpen = faqIdx === 0 ? ' open' : '';
          const borderClass = faqIdx < data.faqs.length - 1 ? ' border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4' : '';
          return `  <details class="group${borderClass} cursor-pointer"${isOpen}>
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
      <span>${q}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">\u25bc</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${a}
    </p>
  </details>`;
        }).join('\n\n');

        faqSection = `\n---\n\n<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0 mb-6 flex items-center gap-2">
    <span>\ud83d\udccd</span> ${faqTitle}
  </h3>
  
${faqItems}
</div>\n`;
      }

      let faqsYaml = '';
      if (data.faqs && data.faqs.length > 0) {
        faqsYaml = 'faqs:\n' + data.faqs.map(faq => {
          const q = faq.question[lang] || faq.question['en'];
          const a = faq.answer[lang] || faq.answer['en'];
          return `  - question: "${q.replace(/"/g, '\\"')}"\n    answer: "${a.replace(/"/g, '\\"')}"`;
        }).join('\n') + '\n';
      }

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
${faqsYaml}---

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
${faqSection}`;

      fs.writeFileSync(targetPath, fileContent, 'utf-8');
      createdCount++;
    });
  });

  console.log(`[완료] 총 ${createdCount}개의 다국어 BuildSelf 습관 블로그 파일이 정상적으로 생성되었습니다!`);
}

run();
