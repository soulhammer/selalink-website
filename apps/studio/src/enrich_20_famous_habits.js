import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, 'data/blogs/habits');
const koMarkdownDir = path.join(__dirname, 'content/blog/ko');

const enrichedData = {
  "zhuge-liang-guqin-strategy": {
    ko: `동한 말기 삼국시대, 촉한(蜀漢)을 창건한 유비를 도와 천하삼분지계를 완성하고 위·촉·오의 치열한 대립 속에서 명상상(名宰相)으로 역사에 이름을 새긴 세기의 지략가, 제갈량(諸葛亮). 적벽대전과 남정, 그리고 승패가 교차하는 숱한 군사 작전 속에서 수십만 군사의 생사와 국가의 존망을 어깨에 짊어져야 했던 그는 극심한 정서적 압박과 심리적 중압감을 매일 견뎌내야 했습니다. 🪕

제갈량은 매일 새벽 맑은 공기가 서린 처마 끝에서 5음계로 이루어진 전통 현악기 구친(古琴)을 직접 연주하는 정적 루틴을 지켜냈습니다. 맑은 기운 속에서 거문고 줄을 튕기며 마음속의 군사적 집착과 노여움을 씻어내고, 밤이 되면 은하수가 흐르는 하늘 아래 서서 별자리와 기상의 변화를 관측하며 거시적인 판세를 가다듬었습니다. 그가 남긴 친필 지침 '계자서(戒子書)'의 핵심인 "마음이 담박하지 않으면 뜻을 밝힐 수 없고, 침착하여 조용하지 않으면 먼 이상에 이를 수 없다(非淡泊無以明志, 非寧靜無以致遠)"는 철학은 바로 이 새벽 연주 루틴에서 비롯되었습니다.

오늘 BuildSelf에서는 세기의 전략가 제갈량이 평생 실천했던 새벽 현악 연주와 시야 확장 루틴에 담긴 알파파 뇌파 유도 및 의사결정 클리어링의 인지과학적 과학을 소개합니다.`,
    en: `During the chaotic Three Kingdoms period of ancient China, Zhuge Liang guided Liu Bei to found Shu Han, masterminding legendary strategies that reshaped East Asian history. Burdened with managing the life and death of hundreds of thousands of soldiers and the survival of a state amidst fierce geopolitical rivalry, he faced daily unimaginable psychological pressure. 🪕

Every morning at dawn, Zhuge Liang sat under his quiet pavilion, playing the traditional five-tone zither, the Guqin. As the delicate acoustic vibrations cleared his mind of military tension and anger, he transformed stress into serene clarity. At night, he stood beneath the starry sky observing constellations to read macro weather and strategic trends. His famous motto in *Jiazi Shu*—"Without tranquility, one cannot clarify one's ambition; without quietude, one cannot reach far"—stemmed directly from this morning Guqin ritual.

Today, BuildSelf explores the cognitive science behind Zhuge Liang's dawn Guqin playing and night observation routine, revealing how acoustic relaxation and visual expansion refresh decision-making clarity.`,
    ja: `三国時代の熾烈な対立の中で、劉備を助けて蜀漢を建国し、後世まで語り継がれる天才軍師・政治家として歴史に名を刻んだ諸葛亮（孔明）。赤壁の戦いから数々の軍事作戦において数十万の兵の生死と国家の存亡を背負っていた彼は、毎日絶大な精神的プレッシャーを耐え抜いていました。 🪕

諸葛亮は毎朝の清らかな空気の中、伝統的な五音階の弦楽器「古琴（グーチン）」を静かに演奏する静寂ルーティンを守り抜きました。琴の響きに耳を澄ませて胸の中の執着や焦りを洗い流し、夜には満天の星空の下に立って気象と星座の変化を観察し、大局的な判断力を養いました。彼が遺した『戒子書』の「淡泊にあらざれば以て志を明らかにすること無く、寧静にあらざれば以て遠きに至ること無し」という名言は、まさにこの朝の演奏習慣から生まれたものです。

今日のBuildSelfでは、諸葛亮が一生実践した朝の古琴演奏と夜の視界拡張ルーティンに隠されたアルファ波誘導と意思決定クリアリングの認知科学的メカニズムを紹介します。`,
    zh: `三国时代，诸葛亮辅佐刘备缔造蜀汉，以出神入化的韬略奠定三分天下的格局。在赤壁之战与诸多生死攸关的军事对决中，他肩负着几十万大军的存亡与国家命运，每天承受着常人难以想象的心理巨压。 🪕

诸葛亮坚持每天清晨在袅袅晨雾中弹奏古琴。在清雅的五音律动中，他涤荡心中的浮躁与焦虑，令大脑恢复极致的宁静。入夜后，他静立于繁星之下，仰观天象气候的变化，在宏观视野中理清战略大局。他在《诫子书》中所著的名言“非淡泊无以明志，非宁静无以致远”，正是源自这一晨间弹琴与夜观星象的修身习惯。

今天 BuildSelf 将为您揭示诸葛亮晨间弹琴与夜观星象习惯背后的认知科学，带您领略声学放松与视野拓展如何帮助大脑清空焦虑、做出睿智决断。`,
    es: `Durante el caótico período de los Tres Reinos en la antigua China, Zhuge Liang guió a Liu Bei a fundar Shu Han, ideando estrategias legendarias. Soportando la responsabilidad sobre la vida de miles de soldados y la supervivencia de un imperio, enfrentaba a diario una presión psicológica inimaginable. 🪕

Cada mañana al amanecer, Zhuge Liang se sentaba en su pabellón a tocar el Guqin, un instrumento tradicional de cinco tonos. Las vibraciones acústicas limpian su mente del estrés militar y la tensión. De noche, contemplaba las estrellas para analizar las tendencias meteorológicas y estratégicas. Su famosa máxima en el *Jiazi Shu*—"Sin tranquilidad no hay ambición clara; sin calma no se llega lejos"—nació de este ritual matutino.

Hoy en BuildSelf, exploramos la ciencia cognitiva tras la rutina de Guqin y observación nocturna de Zhuge Liang, revelando cómo la relajación acústica y la expansión visual renuevan la claridad en la toma de decisiones.`,
    fr: `Pendant la période des Trois Royaumes, Zhuge Liang guida Liu Bei pour fonder le royaume de Shu. Portant le poids de la vie de centaines de milliers de soldats et la survie d'un État, il faisait face chaque jour à une pression psychologique colossale. 🪕

Chaque matin à l'aube, Zhuge Liang jouait du Guqin, une cithare traditionnelle à cinq tons. Les vibrations acoustiques libéraient son esprit des tensions militaires. La nuit, il observait les étoiles pour lire les tendances stratégiques. Sa célèbre citation du *Jiazi Shu*—"Sans sérénité, on ne peut clarifier son ambition"—est née de ce rituel.

Aujourd'hui, BuildSelf vous présente la science cognitive derrière la routine du Guqin et d'observation de Zhuge Liang, montrant comment la relaxation acoustique clarifie la prise de décision.`,
    de: `In der Ära der Drei Reiche führte Zhuge Liang Liu Bei zur Gründung von Shu Han und erdachte Strategien von historischem Ausmaß. Angesichts der Verantwortung für Hunderttausende Soldaten stand er täglich unter enormem Druck. 🪕

Jeden Morgen spielte Zhuge Liang auf der Guqin, einer traditionellen Zither. Die sanften Schwingungen befreiten seinen Geist von Stress. Nachts beobachtete er die Sterne, um meteorologische Trends zu erkennen. Sein berühmtes Zitat im *Jiazi Shu*—"Ohne Seelenruhe keine klare Ambition"—entstand aus diesem Morgenritual.

Heute präsentiert BuildSelf die kognitive Wissenschaft hinter Zhuge Liangs Guqin-Routine und zeigt, wie akustische Entspannung die Entscheidungsfindung schärft.`,
    pt: `Durante o período dos Três Reinos, Zhuge Liang liderou grandes estratégias militares e políticas. Carregando o peso de milhares de vidas e o destino de um reino, ele enfrentava diariamente uma pressão enorme. 🪕

Todas as manhãs ao amanhecer, Zhuge Liang tocava Guqin, uma cítara tradicional. As vibrações acústicas limpavam sua mente do estresse. À noite, observava o céu estrelado para ler tendências estratégicas. Sua célebre frase—"Sem tranquilidade, não há ambição clara"—nasceu desse ritual.

Hoje no BuildSelf, exploramos a ciência cognitiva por trás da rotina de Guqin e observação de Zhuge Liang, mostrando como a relaxação acústica renova a clareza decisória.`,
    id: `Pada era Tiga Kerajaan di Tiongkok kuno, Zhuge Liang memimpin strategi legendaris yang mengubah sejarah. Menanggung beban hidup ratusan ribu prajurit, ia menghadapi tekanan psikologis yang sangat besar setiap hari. 🪕

Setiap pagi saat fajar, Zhuge Liang memainkan Guqin, kecapi tradisional lima nada. Getaran akustiknya membersihkan pikirannya dari ketegangan militer. Pada malam hari, ia mengamati bintang untuk membaca tren strategis.

Hari ini BuildSelf mengungkap sains kognitif di balik rutinitas Guqin Zhuge Liang, menunjukkan bagaimana relaksasi akustik memperbarui kejelasan pengambilan keputusan.`
  },
  "zola-morning-writing-block": {
    ko: `19세기 프랑스 문학의 정점이자 리얼리즘·자연주의 문학을 개척하여 <나나>, <목로주점>, 그리고 드레퓌스 사건의 불의에 맞선 역사적 선언문 <나는 고발한다(J'Accuse...!)>를 남긴 대문호, 에밀 졸라(Émile Zola). 평생 수십 권의 대작을 발표하며 거대한 문학적 업적과 정교한 사회비판 논리를 구축해 낸 그의 폭발적인 창작열은 어디서 비롯되었을까요? ✒️

에밀 졸라는 자신의 서재 책상 앞에 "하루라도 글을 쓰지 않으면 안 된다(Nulla dies sine linea)"라는 고대 로마의 격언을 커다랗게 새겨두고 매일 아침 엄격한 3시간 몰입 루틴을 실천했습니다. 아침 9시가 되면 그는 어떠한 손님의 방문이나 편지 확인, 외부 소음도 완벽히 차단된 채 오직 펜과 원고지 앞에만 앉았습니다. 영감이 떠오르지 않는 날조차 책상을 떠나지 않고 정해진 3시간 동안 온전히 뇌를 글쓰기 모드로 유지하는 이 결연한 시공간 격리가 그를 세기의 작가로 만들었습니다.

오늘 BuildSelf에서는 에밀 졸라가 평생 고수한 아침 딥 워크 타임블록 루틴의 과학적 작동 원리와 전전두엽의 자아 고갈(Ego Depletion)을 제로로 만드는 현대적인 3단계 실천법을 알아봅니다.`,
    en: `A titan of 19th-century French literature and pioneer of Naturalism, Émile Zola authored masterpieces like *Germinal*, *Nana*, and the historic anti-injustice manifesto *J'Accuse...!*. Publishing dozens of voluminous novels while leading social reforms, how did he maintain such unstoppable literary momentum? ✒️

Inscribed prominently above his desk was the ancient Roman motto *Nulla dies sine linea* ("Not a day without a line"). Every morning at 9 AM, Zola blocked out exactly three uninterrupted hours. No visitors, no mail checks, and no external noise were permitted. Even when inspiration faltered, he remained at his desk, training his brain to activate deep focus on command. This rigorous spatial and temporal isolation fueled his prolific career.

Today, BuildSelf examines the neuroscience of Émile Zola's morning time-blocking routine, showing how environment isolation eliminates decision fatigue and triggers instant hyper-focus.`,
    ja: `19世紀フランス文学の巨匠であり自然主義文学を開拓し、『ナナ』『居酒屋』、そしてドレフュス事件に立ち向かった歴史的宣言『私は告発する（J'Accuse...!）』を遺した大文豪、エミール・ゾラ（Émile Zola）。生涯で数多くの大作を発表し、巨悪な社会批判の論理を構築した彼の圧倒的な執筆エネルギーはどこから生まれたのでしょうか？ ✒️

ゾラは書斎のデスクの前に「一行も書かない日があってはならない（Nulla dies sine linea）」という古代ローマの格言を大きく刻み、毎朝厳格な3時間没頭ルーティンを実践しました。朝9時になると、来客の訪問や手紙の確認、外部の騒音を完全に遮断し、万年筆と原稿用紙の前だけに座りました。インスピレーションが湧かない日でさえデスクを離れず、定められた3時間を完全に執筆モードに維持するこの決意の空間隔離が彼を世紀の作家に育て上げました。

今日のBuildSelfでは、エミール・ゾラが一生貫いた朝のディープワーク・タイムブロックの科学的メカニズムと前頭前野の意思決定疲れをゼロにする実践法を紹介します。`,
    zh: `19世纪法国自然主义文学巨匠埃米尔·左拉（Émile Zola），不仅创作了《萌芽》、《娜娜》等脍炙人口的名著，更在德雷福斯事件中发表了震惊世界的公开信《我控诉...！》（J'Accuse...!）。一生笔耕不辍、出版数十部巨著的他，究竟如何保持如此惊人的创作爆发力？ ✒️

左拉在书桌前赫然刻下古罗马名言“不可一日无一行”（Nulla dies sine linea）。每天早晨9点，他都会进行长达3小时的无干扰专注写作。在此期间，谢绝一切访客、信件与外界杂音。即使灵感匮乏，他也决不离开书桌，强健大脑对特定时段写作模式的反射。这种极具毅力的时空隔离成为了他爆发文思的核心引擎。

今天 BuildSelf 将为您剖析埃米尔·左拉晨间时间块专注习惯背后的神经科学，带您了解环境隔离如何消除决策疲劳、激发深度专注。`,
    es: `Un titán de la literatura francesa del siglo XIX, Émile Zola escribió obras maestras como *Germinal* y el histórico manifiesto *J'Accuse...!*. Publicando docenas de novelas mientras lideraba reformas sociales, ¿cómo mantenía un impulso literario tan imparable? ✒️

Sobre su escritorio estaba inscrita la máxima romana *Nulla dies sine linea* ("Ni un día sin una línea"). Cada mañana a las 9 AM, Zola bloqueaba exactamente tres horas ininterrumpidas. Sin visitas ni distracciones, entrenó a su cerebro para activar el enfoque profundo en todo momento.

Hoy en BuildSelf, examinamos la neurociencia de la rutina de bloqueo de tiempo de Émile Zola, mostrando cómo el aislamiento ambiental elimina la fatiga de decisión e impulsa la concentración.`,
    fr: `Géant de la littérature française du XIXe siècle, Émile Zola a écrit des chefs-d'œuvre comme *Germinal* et le manifeste *J'Accuse...!*. Comment maintenait-il un tel rythme d'écriture ? ✒️

Au-dessus de son bureau figurait la devise *Nulla dies sine linea* ("Pas un jour sans une ligne"). Chaque matin à 9h, Zola bloquait 3 heures ininterrompues. Sans aucune distraction, il entraînait son cerveau à un niveau de concentration maximal.

Aujourd'hui, BuildSelf examine la neurosciences derrière la routine de blocage de temps d'Émile Zola, montrant comment l'isolement environnemental élimine la fatigue décisionnelle.`,
    de: `Ein Titan der französischen Literatur des 19. Jahrhunderts, Émile Zola, verfasste Meisterwerke wie *Germinal* und das Manifest *J'Accuse...!*. Wie hielt er ein so unaufhaltsames Schreibtempo aufrecht? ✒️

Über seinem Schreibtisch stand das römische Motto *Nulla dies sine linea* ("Kein Tag ohne eine Zeile"). Jeden Morgen um 9 Uhr blockierte Zola genau 3 ununterbrochene Stunden. Ohne Ablenkungen trainierte er seinen Geist auf tiefen Fokus.

Heute untersucht BuildSelf die Neurowissenschaft hinter Émile Zolas Time-Blocking-Routine und zeigt, wie Umgebungsisolation kognitive Erschöpfung verhindert.`,
    pt: `Um gigante da literatura francesa do século XIX, Émile Zola escreveu obras-primas como *Germinal* e o manifesto *J'Accuse...!*. Como ele mantinha um ritmo de escrita tão imparável? ✒️

Acima de sua mesa estava gravada a máxima romana *Nulla dies sine linea* ("Nenhum dia sem uma linha"). Todas as manhãs às 9h, Zola bloqueava 3 horas ininterruptas. Sem distrações, ele treinava seu cérebro para foco profundo.

Hoje no BuildSelf, examinamos a neurociência por trás da rotina de bloqueio de tempo de Émile Zola, mostrando como o isolamento ambiental elimina a fadiga de decisão.`,
    id: `Raksasa sastra Prancis abad ke-19, Émile Zola menulis karya agung seperti *Germinal* dan manifesto *J'Accuse...!*. Bagaimana ia mempertahankan momentum menulis yang begitu luar biasa? ✒️

Di atas mejanya terukir motto *Nulla dies sine linea* ("Tidak ada hari tanpa sebaris kata"). Setiap pagi jam 9, Zola memblokir 3 jam tanpa gangguan untuk fokus menulis.

Hari ini BuildSelf memeriksa sains saraf di balik rutinitas time-blocking Émile Zola, menunjukkan bagaimana isolasi lingkungan menghilangkan kelelahan keputusan.`
  },
  "rosalind-franklin-diffraction-focus": {
    ko: `20세기 생명과학 역사상 가장 위대한 발견으로 손꼽히는 DNA 이중선구조 해독의 결정적 열쇠인 '51번 사진(Photo 51)'을 촬영하고 탄소 및 바이러스 결정학의 새 지평을 연 영국의 여성 물리화학자, 로잘린드 프랭클린(Rosalind Franklin). 수많은 편견과 척박한 연구 환경 속에서도 그녀가 도출해낸 실험 데이터들은 단 0.01%의 오차도 허용하지 않는 완벽함 그 자체였습니다. 🧬

킹스 컬리지 런던의 어두운 지하 실험실에서 로잘린드 프랭클린은 X선 회절 카메라의 각도를 0.1도 단위로 정밀 조율하며 수백 시간 동안 묵묵히 엑스선 사진을 촬영했습니다. 그녀는 현상된 필름 수치와 실제 기하학적 계산을 마이크로 단위로 직접 손으로 짚어가며 꼼꼼히 1:1 대조하고 검수했습니다. 감정이나 섣부른 추측에 의존하지 않고, 오직 엄밀한 데이터 검증만을 신뢰했던 그녀의 정량 검수 습관이 인류의 생명 비밀을 풀어내는 금빛 입자를 발견하게 만들었습니다.

오늘 BuildSelf에서는 로잘린드 프랭클린이 실천했던 0.1도 정밀 검수 및 데이터 대조 루틴에 담긴 두정엽 공간 인지 회로 강화와 업무 품질 100% 보장 가이드를 소개합니다.`,
    en: `The brilliant British physical chemist whose X-ray diffraction image, "Photo 51," provided the critical key to unlocking the DNA double helix structure, Rosalind Franklin transformed molecular biology and virus crystallography. Working under challenging academic environments, her scientific data was revered for its absolute 0.01% zero-error precision. 🧬

In the dimly lit basement laboratories of King's College London, Franklin spent hundreds of patient hours adjusting X-ray cameras by precise 0.1-degree increments. Rather than relying on guesswork or theoretical leaps, she painstakingly cross-checked diffraction pattern coordinates line-by-line using micro-rulers and manual calculations. This rigorous quantitative verification routine prevented premature cognitive bias and delivered unbreakable scientific truth.

Today, BuildSelf unveils the neuroscience behind Rosalind Franklin's precision cross-checking routine, showing how parietal lobe activation and deliberate verification guarantee error-free quality in modern work.`,
    ja: `20世紀の生命科学史上最も偉大な発見とされるDNA二重らせん構造解明の決定的な鍵「写真51号（Photo 51）」を撮影し、ウイルス結晶学の扉を開いた英国の女性物理化学者、ロザリンド・フランクリン（Rosalind Franklin）。過酷な研究環境の中でも彼女が導き出した実験データは、わずか0.01％の誤差も許さない完璧そのものでした。 🧬

キングス・カレッジ・ロンドンの薄暗い地下研究室で、フランクリンはX線回折カメラの角度を0.1度単位で精密に調整し、数百時間にわたり黙々と写真を撮影しました。現像されたフィルムの数値と実際の計算をマイクロ単位で手で直接追いながら、1:1で細かく照合・検証しました。推測に頼らず厳密なデータ検証のみを信頼した彼女の定量的照合習慣が、生命の秘密を解き明かす黄金の粒子を発見させました。

今日のBuildSelfでは、ロザリンド・フランクリンが実践した0.1度精密検証ルーティンに潜む頭頂葉空間認知回路の強化と業務品質100％保障ガイドを紹介します。`,
    zh: `作为20世纪生命科学史上最伟大的女性物理化学家，罗莎琳德·富兰克林（Rosalind Franklin）拍摄的“51号照片”（Photo 51）为解开DNA双螺旋结构提供了至关重要的决定性证据。在当时充满偏见的学术环境中，她出具的每一个实验数据都以0.01%误差以内的绝顶精确度著称。 🧬

在伦敦国王学院昏暗的地下实验室里，富兰克林细致地将X射线衍射相机的角度调整至0.1度。她花费数百个小时沉静拍摄，并用微型直尺与手工计算对衍射图样的数据点进行逐字逐行的1:1精确比对。这种拒绝凭空推测、只用数据说话的极致核对习惯，最终擦亮了揭示人类生命奥秘的光芒。

今天 BuildSelf 将为您揭秘罗莎琳德·富兰克林0.1度精准核对习惯背后的顶叶空间认知机制，带您领略严谨数据对比如何帮助现代职场人实现零失误的高质量交付。`,
    es: `La brillante fisicoquímica británica cuya "Foto 51" proporcionó la clave para desentrañar la estructura del ADN, Rosalind Franklin transformó la biología molecular. Sus datos experimentales eran admirados por su precisión absoluta del 0.01%. 🧬

En los laboratorios del King's College de Londres, Franklin pasaba cientos de horas ajustando cámaras de rayos X en incrementos de 0.1 grados. En lugar de especular, verificaba minuciosamente las coordenadas de difracción a mano. Esta rutina de verificación cuantitativa previno sesgos cognitivos y aseguró el éxito.

Hoy en BuildSelf, revelamos la neurociencia tras la rutina de verificación de precisión de Rosalind Franklin y cómo garantiza una calidad sin errores.`,
    fr: `La brillante physico-chimiste britannique dont la "Photo 51" a fourni la clé pour déchiffrer la structure en double hélice de l'ADN, Rosalind Franklin a transformé la biologie moléculaire. Ses données expérimentales étaient célébrées pour leur précision absolue. 🧬

Dans les laboratoires du King's College de Londres, Franklin passait des centaines d'heures à ajuster les caméras à rayons X à 0,1 degré près. Elle vérifiait minutieusement chaque coordonnée à la main, garantissant une rigueur scientifique sans faille.

Aujourd'hui, BuildSelf vous dévoile la neurosciences derrière la routine de vérification de précision de Rosalind Franklin et la prévention des erreurs.`,
    de: `Die britische Physiko-Chemikerin, deren "Foto 51" den Schlüssel zur Entschlüsselung der DNA-Doppelhelix lieferte, Rosalind Franklin, prägte die Molekularbiologie. Ihre Daten waren berühmt für ihre 0,01%-ige Präzision. 🧬

In den Laboratorien des King's College London verbrachte Franklin Hunderte von Stunden damit, Röntgenkameras um 0,1 Grad zu justieren. Sie überprüfte jedes Beugungsmuster akribisch von Hand und verhinderte so kognitive Fehler.

Heute enthüllt BuildSelf die Neurowissenschaft hinter Rosalind Franklins Präzisionsprüf-Routine und die Garantie für fehlerfreie Arbeit.`,
    pt: `A brilhante físico-química britânica cuja "Foto 51" forneceu a chave para desvendar a estrutura do DNA, Rosalind Franklin transformou a biologia molecular. Seus dados experimentais eram admirados por sua precisão absoluta. 🧬

Nos laboratórios do King's College de Londres, Franklin passava centenas de horas ajustando câmeras de raios X em incrementos de 0,1 grau. Ela verificava minuciosamente cada coordenada à mão.

Hoje no BuildSelf, revelamos a ciência cognitiva por trás da rotina de verificação de precisão de Rosalind Franklin e o segredo do trabalho sem erros.`,
    id: `Fisikawan kimia Inggris yang mengambil "Foto 51" sebagai kunci pembuka struktur heliks ganda DNA, Rosalind Franklin mengubah biologi molekuler. Data eksperimennya terkenal akan presisi 0,01% tanpa celah. 🧬

Di laboratorium King's College London, Franklin menghabiskan ratusan jam menyesuaikan kamera sinar-X hingga ketelitian 0,1 derajat. Ia memverifikasi koordinat difraksi secara manual baris demi baris.

Hari ini BuildSelf mengungkap sains saraf di balik rutinitas verifikasi presisi Rosalind Franklin dan cara menjamin kualitas bebas kesalahan.`
  },
  "bismarck-morning-ride-priority": {
    ko: `19세기 분열되어 있던 독일 제국을 통일하고 철혈 외교(Iron and Blood)를 통해 복잡한 유럽 대륙의 동맹 판도를 손바닥 다루듯 지배했던 강력한 재상, 오토 폰 비스마르크(Otto von Bismarck). 수십 개 국가의 외교 문서와 매일 쏟아지는 수백 건의 격문 속에서 그는 어떻게 마비에 빠지지 않고 냉철하고 정교한 국정 의사결정을 내릴 수 있었을까요? 🐎

비스마르크는 매일 아침 서재에 앉기 전, 안개가 자욱한 숲길로 나아가 1시간 동안 강렬한 보폭으로 말을 타는 승마 루틴을 결코 거르지 않았습니다. 신체 전신의 혈류를 끌어올리고 심폐 기능을 각성시킨 직후 서재 책상에 앉은 그는, 수많은 의제 중 파급력이 가장 큰 '단 3가지 핵심 우선순위'만을 빨간 깃펜으로 정리하여 선택하고 집중했습니다. 복잡함 속에서 본질만을 추출해낸 이 우선순위 선택 집착이 독일 제국의 기틀을 다진 동력이었습니다.

오늘 BuildSelf에서는 비스마르크의 신체 유산소 각성 및 TOP 3 선택 집중 루틴의 과학적 메커니즘과 현대인을 위한 전전두엽 포도당 예산 보호 실천법을 알아봅니다.`,
    en: `The Iron Chancellor who unified Germany in the 19th century and orchestrated complex European alliances through his legendary Realpolitik, Otto von Bismarck reshaped world history. Navigating hundreds of urgent cables and conflicting state pressures daily, how did he maintain razor-sharp decision clarity without experiencing mental paralysis? 🐎

Every morning before entering his study, Bismarck went out into the misty woods for an energetic one-hour horseback ride. This vigorous cardiovascular exercise boosted cerebral blood flow and oxygenation. Sitting down at his desk immediately after, he ignored trivial noise and used a red quill to write down only the TOP 3 most decisive priorities for the state. This ruthless focus on essence enabled him to govern with unmatched strategic authority.

Today, BuildSelf reveals the cognitive science behind Bismarck's morning horseback riding and TOP 3 priority routine, showing how physical activation and priority filtering optimize prefrontal glucose reserves.`,
    ja: `19世紀にドイツ帝国を統一し、「鉄血演説」と緻密なリアルポリティクス（現実政治）を通じて欧州の外交板図を支配した宰相、オットー・フォン・ビスマルク（Otto von Bismarck）。毎日のように押し寄せる数十の外交電報と錯綜する国家の利害関係の中で、彼はどのように判断麻痺に陥らず冷徹な決断を下し続けたのでしょうか？ 🐎

ビスマルクは毎朝書斎に座る前に、霧の漂う森へと出かけ、1時間激しいペースで馬を走らせる乗馬ルーティンを絶やしませんでした。脳への血流と酸素供給を最大化させた直後にデスクに向かった彼は、雑多な報告を排除し、最も波及効果の大きい「わずか3つの最優先課題」だけを赤ペンでノートに書き留めて集中しました。この本質抽出への執着が帝国の統一を支えた原動力でした。

今日のBuildSelfでは、ビスマルクの有酸素運動による覚醒とTOP 3優先順位選別ルーティンに隠された前頭前野のエネルギー保護のメカニズムを紹介します。`,
    zh: `在19世纪统一德国、并凭借现实主义“铁血外交”主导复杂欧洲局势的“铁血宰相”奥托·冯·俾斯麦（Otto von Bismarck）。面对每天如雪片般飞来的外交电报与纷繁复杂的国家事务，他是如何避免决策麻痹、始终保持冷静果断的？ 🐎

每天早晨在进入书桌前，俾斯麦都会前往晨雾缭绕的森林，骑马疾驰1小时。这一强烈的有氧运动大幅提升了大容量脑血流量与供氧。运动结束后坐回书桌，他会摒弃一切杂音，用红羽毛笔仅列出最具决定力的“3项核心优先级”进行全力突破。这种在极度复杂中提炼本质的专注力，成为了建构德国基业的核心支柱。

今天 BuildSelf 将为您揭秘俾斯麦晨间骑马与 TOP 3 优先级习惯背后的认知科学，带您了解身体激活与优先级过滤如何保护前额叶皮层的葡萄糖预算。`,
    es: `El Canciller de Hierro que unificó Alemania en el siglo XIX e ideó complejas alianzas diplomáticas, Otto von Bismarck cambió la historia mundial. Manejando cientos de cables urgentes a diario, ¿cómo mantenía una claridad de decisión tan afilada sin fatigarse? 🐎

Cada mañana antes de entrar a su estudio, Bismarck realizaba un vigoroso paseo a caballo de una hora. Este ejercicio cardiovascular impulsaba el flujo sanguíneo cerebral. Al sentarse en su escritorio inmediatamente después, escribía solo las TOP 3 prioridades decisivas para el estado.

Hoy en BuildSelf, revelamos la ciencia cognitiva tras la rutina de equitación y prioridades TOP 3 de Bismarck para optimizar las reservas de glucosa.`,
    fr: `Le Chancelier de Fer qui unifia l'Allemagne au XIXe siècle et orchestra de complexes alliances, Otto von Bismarck a façonné l'histoire. Gérant des centaines de dépêches urgentes par jour, comment évitait-il la paralysie décisionnelle ? 🐎

Chaque matin avant de travailler, Bismarck faisait une heure d'équitation dynamique en forêt. Cet exercice réactivait la circulation cérébrale. Dès son retour au bureau, il inscrivait uniquement les TOP 3 priorités absolues.

Aujourd'hui, BuildSelf vous dévoile la science cognitive derrière la routine d'équitation et de priorités TOP 3 de Bismarck.`,
    de: `Der Eiserne Kanzler, der Deutschland im 19. Jahrhundert einigte und Diplomatie auf höchstem Niveau betrieb, Otto von Bismarck, prägte die Weltgeschichte. Wie bewahrte er bei Hunderten täglichen Depeschen stets einen kühlen Kopf? 🐎

Jeden Morgen vor der Arbeit unternahm Bismarck einen einstündigen Ausritt im Wald. Diese kardiovaskuläre Aktivität steigerte die Gehirndurchblutung. Direkt danach schrieb er nur die TOP 3 entscheidenden Prioritäten auf.

Heute enthüllt BuildSelf die kognitive Wissenschaft hinter Bismarcks Ausritt- und TOP 3 Prioritäten-Routine.`,
    pt: `O Chanceler de Ferro que unificou a Alemanha no século XIX e articulou alianças complexas, Otto von Bismarck moldou a história. Lidando com centenas de telegramas urgentes diariamente, como ele mantinha a clareza mental? 🐎

Todas as manhãs antes de ir para o escritório, Bismarck cavalgava por uma hora na floresta. Esse exercício ativava a circulação cerebral. Ao sentar-se na mesa logo em seguida, ele anotava apenas as TOP 3 prioridades decisivas.

Hoje no BuildSelf, revelamos a ciência cognitiva por trás da rotina de cavalgada e prioridades TOP 3 de Bismarck.`,
    id: `Cendekiawan Besi yang menyatukan Jerman pada abad ke-19 dan memimpin diplomasi tingkat tinggi, Otto von Bismarck mengubah sejarah dunia. Bagaimana ia menjaga kejelasan keputusan di tengah ratusan telegram harian? 🐎

Setiap pagi sebelum bekerja, Bismarck menunggang kuda selama satu jam di hutan. Olahraga kardiovaskular ini meningkatkan aliran darah ke otak. Segera setelah duduk di mejanya, ia menuliskan hanya TOP 3 prioritas paling krusial.

Hari ini BuildSelf mengungkap sains kognitif di balik rutinitas menunggang kuda dan prioritas TOP 3 Bismarck.`
  },
  "adams-morning-walk": {
    ko: `미국 제6대 대통령이자 조지 워싱턴, 존 애덤스의 뒤를 이어 건국 초기의 외교와 기틀을 다지고 평생 성실함의 대명사로 불린 정치가, 존 퀸시 애덤스(John Quincy Adams). 극심한 정치적 대립과 대통령으로서의 막중한 중압감 속에서도 그가 80세가 넘도록 맑은 기억력과 강인한 인지 능력을 고수한 비결은 무엇이었을까요? 🏊‍♂️

애덤스는 매일 아침 해가 뜨기 전 포토맥강으로 나가 차가운 강물에서 수영을 하거나, 5마일(약 8km) 이상의 거친 숲길을 빠른 보폭으로 걷는 혹독한 신체 루틴을 평생 지켰습니다. 신체 전신의 혈류를 끌어올린 그는 저녁이 되면 조용히 서재에 앉아 오늘 하루 탐독한 책의 정수와 배운 점을 다이어리에 수기로 정성껏 기록했습니다. 신체 활력과 서사적 성찰이 조화를 이룬 이 루틴이 그의 인지 방어막이었습니다.

오늘 BuildSelf에서는 존 퀸시 애덤스의 아침 속보 산책 및 저녁 성찰 수기 루틴에 담긴 뇌 유전성 신경영양인자(BDNF) 방출과 시냅스 강화의 과학을 소개합니다.`,
    en: `The 6th U.S. President John Quincy Adams maintained extraordinary intellectual stamina and razor-sharp memory past his 80s. Serving as diplomat, president, and congressman over six decades of intense national turbulence, how did he protect his brain against cognitive aging and immense political stress? 🏊‍♂️

Every morning before sunrise, Adams plunged into the freezing Potomac River for a swim or embarked on a vigorous 5-mile power walk through rugged forest trails. Having stimulated his cerebral circulation, he spent quiet evenings writing detailed reflections and book excerpts in his diary by hand. This powerful synergy of physical exertion and evening introspection fortified his cognitive reserve.

Today, BuildSelf explores the cognitive science behind John Quincy Adams' power walk and evening reflection routine, demonstrating how aerobic movement and manual writing stimulate Brain-Derived Neurotrophic Factor (BDNF).`,
    ja: `米第6代大統領であり、生涯にわたって誠実さの代名詞と称された政治家、ジョン・クインシー・アダムズ（John Quincy Adams）。激しい政治的対立と大統領としての重圧の中で、彼が80歳を過ぎても明晰な記憶力と強靭な認知能力を維持できた秘密は何だったのでしょうか？ 🏊‍♂️

アダムズは毎朝日の出前にポトマック川で泳ぐか、5マイル（約8km）の険しい森の道を速足で歩く厳格な身体ルーティンを終生守り抜きました。全身の血流を高めた後、夜になると静かに書斎でその日読んだ本や学びを日記に手書きで丁寧に記録しました。身体的活力と精神的省察が調和したこのルーティンが彼の防壁でした。

今日のBuildSelfでは、ジョン・クインシー・アダムズの早歩き散歩と夜の省察日記ルーティンに潜む脳由来神経栄養因子（BDNF）放出とシナプス強化の科学を紹介します。`,
    zh: `作为美国第6任总统，约翰·昆西·亚当斯（John Quincy Adams）在长达六十年的政治生涯中保持着令人惊叹的高能智慧与极佳记忆力，直至80多岁高龄。在动荡的建国初期与高压的外交纷争中，他是如何抵御认知衰老与心理巨压的？ 🏊‍♂️

每天清晨日出前，亚当斯都会跳入波托马克河冷水中游泳，或在坎坷的林间快步走上5英里（约8公里）。在全面提升脑部血流后，每当夜幕降临，他便会静坐于书房，手写记录当天的读书心得与自身反思。这种强力有氧运动与夜间手写反思的协同作用，筑牢了他的认知防御墙。

今天 BuildSelf 将为您揭秘约翰·昆西·亚当斯快步散步与夜间手写反思习惯背后的神经科学，带您了解有氧运动与手写记录如何激发脑源性神经营养因子（BDNF）的分泌。`,
    es: `El sexto presidente de los Estados Unidos, John Quincy Adams, mantuvo una agudeza mental excepcional hasta pasados los 80 años. Enfrentando tensiones políticas extremas, ¿cómo protegió su salud cerebral? 🏊‍♂️

Cada mañana al amanecer, Adams realizaba una caminata a paso ligero de 5 millas o nadaba en las frías aguas del río Potomac, seguida de un diario de reflexión por la noche. Esta combinación de ejercicio cardiovascular e introspección diaria fue su escudo cognitivo.

Hoy en BuildSelf, exploramos la ciencia cognitiva tras la rutina de caminata y reflexión de John Quincy Adams, y cómo estimula el factor neurotrófico derivado del cerebro (BDNF).`,
    fr: `Le 6e président américain John Quincy Adams a conservé une agilité mentale exceptionnelle passé 80 ans. Face aux tensions politiques, comment protégeait-il son cerveau ? 🏊‍♂️

Chaque matin avant le lever du soleil, Adams effectuait une marche rapide de 8 km ou nageait dans la rivière Potomac, puis tenait un journal le soir. Cette synergie d'effort physique et d'introspection a fortifié ses capacités.

Aujourd'hui, BuildSelf vous présente la science cognitive derrière la routine de marche et de réflexion de John Quincy Adams.`,
    de: `Der 6. US-Präsident John Quincy Adams bewahrte bis ins hohe Alter von über 80 Jahren seine geistige Schärfe. Wie schützte er seine kognitiven Fähigkeiten vor Stress? 🏊‍♂️

Jeden Morgen vor Sonnenaufgang unternahm Adams einen 8 km langen strammen Marsch oder schwamm im kalten Fluss Potomac, gefolgt von einer abendlichen Tagebuchreflexion. Diese Kombination stärkte sein Gehirn nachhaltig.

Heute untersucht BuildSelf die kognitive Wissenschaft hinter John Quincy Adams' Marsch- und Tagebuch-Routine.`,
    pt: `O 6º presidente dos EUA, John Quincy Adams, manteve uma acuidade mental extraordinária até os 80 anos. Como ele protegia seu cérebro do estresse político? 🏊‍♂️

Todas as manhãs antes do nascer do sol, Adams fazia uma caminhada acelerada de 8 km ou nadava nas águas do rio Potomac, escrevendo um diário à noite. Essa sinergia de exercício e reflexão foi seu escudo.

Hoje no BuildSelf, exploramos a ciência cognitiva por trás da rotina de caminhada e reflexão de John Quincy Adams.`,
    id: `Presiden AS ke-6 John Quincy Adams mempertahankan stamina intelektual dan ingatan tajam hingga usia 80-an. Bagaimana ia melindungi otaknya dari penuaan dini? 🏊‍♂️

Setiap pagi sebelum fajar, Adams melakukan jalan cepat 8 km atau berenang di sungai Potomac, dilanjutkan dengan menulis diari pada malam hari. Sinergi ini memperkuat ketahanan otaknya.

Hari ini BuildSelf mengungkap sains kognitif di balik rutinitas jalan cepat dan refleksi malam John Quincy Adams.`
  }
};

// Helper: load JSON, update intro, write JSON back
let updatedCount = 0;

Object.keys(enrichedData).forEach(slug => {
  const jsonPath = path.join(blogDir, `${slug}.json`);
  if (fs.existsSync(jsonPath)) {
    const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    const itemKey = Object.keys(raw)[0];
    if (raw[itemKey] && raw[itemKey].intro) {
      Object.keys(enrichedData[slug]).forEach(lang => {
        raw[itemKey].intro[lang] = enrichedData[slug][lang];
      });
      fs.writeFileSync(jsonPath, JSON.stringify(raw, null, 2), 'utf-8');
      console.log(`✅ [JSON Updated] ${slug}.json intro enriched`);
      updatedCount++;
    }
  }

  // Update KO Master Markdown
  const koMdPath = path.join(koMarkdownDir, `${slug}.md`);
  if (fs.existsSync(koMdPath)) {
    const content = fs.readFileSync(koMdPath, 'utf-8');
    const parts = content.split('---');
    if (parts.length >= 3) {
      const frontmatter = parts[1];
      const body = parts.slice(2).join('---');
      // find the callout div start
      const calloutIdx = body.indexOf('<div class="my-8 p-6');
      if (calloutIdx !== -1) {
        const afterCallout = body.slice(calloutIdx);
        const newKoIntro = enrichedData[slug].ko;
        const updatedContent = `---${frontmatter}---\n\n${newKoIntro}\n\n${afterCallout}`;
        fs.writeFileSync(koMdPath, updatedContent, 'utf-8');
        console.log(`✅ [KO MD Updated] ${slug}.md intro enriched`);
      }
    }
  }
});

console.log(`🎉 Total ${updatedCount} blog posts enriched successfully!`);
