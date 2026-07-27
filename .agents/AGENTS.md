# BuildSelf 위인 습관 블로그 이미지 생성 가이드라인 (Image Generation Guidelines)

BuildSelf 앱의 위인 습관 관련 블로그 포스트 헤더 이미지(`heroImage`)를 생성할 때, 일관된 프리미엄 톤앤매너를 유지하기 위해 아래 가이드라인을 엄격히 준수합니다.

---

## 1. 이미지 스타일 및 컨셉 (Style & Concept)
*   **스타일**: 실사 사진이나 조잡한 3D 모델 대신, 세련되고 현대적인 **모던 벡터 일러스트(Modern Vector Illustration)** 또는 **2.5D 플랫 일러스트(Flat Illustration with Soft Gradients)** 스타일로 생성합니다.
*   **구도 및 묘사**: 각 위인의 **시대적 배경**과 **습관이 수행되는 실제 상황**이 시각적으로 명확하게 드러나야 합니다.
*   **인물/피사체 묘사 및 잘림 방지(Centered Subject & Safe Margins)**: 인물이나 동물 등 피사체가 이미지의 중심에 명확히 부각되어야 합니다. 블로그 목록 카드 썸네일이나 상세페이지 헤더 크롭 시 주인공이 잘리지 않도록, **캔버스 중앙(Eye-level Center)에 위치시키고 상하좌우에 충분한 여여백(Safe Margins)**을 확보해야 합니다. (프롬프트 작성 시 `perfectly centered subject, well-centered composition with ample safe margins` 명시)
*   **배색(Color Palette)**: 사이트의 대표 테마인 어두운 인디고, 바이올렛, 슬레이트 그레이 등의 차분한 다크 모드 톤을 배경으로 깔고, 금색(Gold)이나 앰버(Amber) 컬러의 부드러운 하이라이트/조명 효과를 활용하여 고급스러운(Premium) 느낌을 연출합니다.
*   **기타 규칙**: 이미지 내에 어떠한 불필요한 텍스트(글자)도 삽입하지 않습니다.

---

## 2. 이미지 생성 프롬프트 예시 (Prompt Templates)
아래의 프롬프트 공식을 참고하여 작성합니다.

> "A stylized modern vector illustration of [위인 이름] [습관 수행 상황]. [시대적/장소적 배경 묘사]. [조명 및 효과, 예: Warm ambient lighting, soft glowing lines]. [색상 조합, 예: Purple and indigo color scheme with gold accents]. Minimalist and premium design style for a blog post header. No text, high quality."

### 3가지 성공 사례 레퍼런스
1.  **알베르트 아인슈타인 (`einstein_violin_thinking.png`)**:
    *   *프롬프트*: `A stylized modern vector illustration of Albert Einstein playing a violin in a cozy study room. On the background blackboard, faint physics equations and formulas are written. Warm ambient lighting, soft glowing lines, purple and indigo color scheme with gold accents, minimalist and premium design style suitable for a modern web application blog post header. No text, high quality.`
2.  **르네 데카르트 (`descartes_lying_meditation.png`)**:
    *   *프롬프트*: `A stylized modern vector illustration of René Descartes lying in a cozy, classic bed next to a large sunny window in the morning. He looks calm and reflective, eyes slightly closed, meditating. Soft morning sunlight streaming in, gold and cream warm lighting, with soft indigo and blue accents in the room. Minimalist, clean and premium design style for a blog header. No text, high quality.`
3.  **스티브 잡스 (`jobs_uniform_minimalism.png`)**:
    *   *프롬프트*: `A stylized modern vector illustration of a clean, minimalist open closet featuring multiple identical black turtlenecks and blue jeans hanging neatly on wooden hangers. Next to the closet stands Steve Jobs in his signature outfit, looking reflective. Modern premium tech aesthetic, dark indigo and slate grey colors, clean lines, elegant lighting. Suitable as a blog post header. No text, high quality.`

---

## 3. 블로그 생성 시 날짜 관리 규칙 (Blog Date Management)
*   **신규 블로그 오늘 날짜 고정 (원칙)**: 습관, 반려동물, 식재료 보관 등 새로 생성하는 모든 카테고리의 신규 블로그 포스트 발행일(`pubDate`) 및 수정일(`updatedDate`)은 예외 없이 **작업을 진행하는 당일 날짜(오늘)**로 고정하여 작성해야 합니다. 이를 통해 신규 추가된 포스트가 항상 블로그 목록 최상단에 즉시 올바르게 노출되도록 보장합니다.
*   **날짜 임의 분산 절대 금지**: 새로운 블로그 포스트를 생성할 때 임의의 과거 날짜로 분산/배치해 주는 `distribute_blog_dates.js` 스크립트를 파이프라인 상에서 실행하거나 에이전트가 자율적으로 실행해서는 절대 안 됩니다.
*   **수동 명령에 의한 날짜 분산 허용**: 신규 블로그들이 목록 최상단에 노출되어 사용자가 검증을 마친 후, "과거 날짜로 분산해 달라"고 명시적인 수동 명령을 지시한 경우에만 `node src/distribute_blog_dates.js` 스크립트를 터미널에서 수동으로 호출하여 과거 날짜로 분산 및 배치할 수 있습니다.

---

## 4. 반려동물 블로그 생성 규칙 및 이미지 가이드라인 (Pet Blog Content & Image Guidelines)
*   **세부 품종/종류 단위 작성**: 사용자가 반려동물(개, 고양이, 소형 동물 등) 관련 블로그 포스트를 추가하도록 요청할 때, '강아지 전체 케어법', '고양이 전체 케어법'처럼 광범위한 대분류 동물 단위로 작성해서는 절대 안 됩니다.
*   **정밀 타겟 품종 선정**: 반드시 세부 품종(견종, 묘종 및 구체적인 소형 동물의 세부 종류. 예: 골든 리트리버, 러시안 블루, 네덜란드 드워프 토끼, 골든 햄스터 등)을 특정하고 타겟하여 해당 품종의 구체적인 유전성 특성, 건강 수칙, 올바른 보살핌 방법을 분할해서 정밀하게 담은 포스트로 작성해야 합니다.
*   **이미지 스타일 및 컨셉 (Image Style & Concept)**:
    *   위인 습관 블로그와 동일하게 실사 사진이나 조잡한 3D 모델 대신, 세련되고 현대적인 **모던 벡터 일러스트(Modern Vector Illustration)** 또는 **2.5D 플랫 일러스트(Flat Illustration with Soft Gradients)** 스타일로 생성합니다.
    *   **배색 및 분위기(Color Palette)**: 어두운 인디고, 바이올렛, 슬레이트 그레이 등의 차분한 다크 모드 톤을 배경으로 깔고, 부드러운 조명(Soft lighting) 및 금색/앰버 컬러의 하이라이트 효과를 연출합니다.
    *   **구도 및 피사체 (Centered Subject & Safe Margins)**: 해당 반려동물의 특성과 주요 케어 환경(예: 침대, 은신처, 수조, 사육장 등)을 아늑하게 묘사하고, 블로그 카드 및 헤더 썸네일 크롭 시 주인공이 잘리지 않도록 **피사체가 캔버스 중앙(Eye-level Center)에 위치하며 상하좌우 여유 마진**을 갖추도록 구도를 잡습니다.
    *   **기타 규칙**: 이미지 내 불필요한 텍스트(글자)는 절대 삽입하지 않습니다.
*   **프롬프트 공식 예시**:
    > "A stylized modern vector illustration of [반려동물 품종 이름] [상황/장소 묘사, 예: sitting comfortably in a cozy dark-toned room]. Perfectly centered subject with ample safe margins on top and sides, eye-level composition. [조명 및 효과, 예: Warm ambient lighting, soft glowing lines]. [색상 조합, 예: Dark purple and indigo color scheme with amber accents]. Minimalist and premium design style for a pet care blog post header. No text, high quality."

---

## 5. FreshSnap 식재료 보관 블로그 이미지 생성 가이드라인 (Image Generation Guidelines)
*   **스타일**: 벡터 일러스트 스타일 대신, **밝고 환하며 세련된 현대적인 주방(Bright, airy modern kitchen)을 배경으로 하는 고품질 실사 사진(High-quality realistic photo)** 스타일로 생성합니다.
*   **구도 및 묘사**: 각 식재료가 신선하게 보관되고 있는 실제 행동 상태(예: 비닐 랩으로 밀봉된 모습, 키친타월에 싸인 모습, 전용 수납 용기나 바구니에 정리된 모습 등)가 중심 피사체로 선명하고 위생적으로 드러나야 합니다.
*   **배색(Color Palette)**: 화이트, 원목, 연한 베이지 등 내추럴하고 밝은 색상의 주방 환경을 기본 톤으로 활용하며, 부드러운 자연광(Soft natural window light)과 아웃포커싱(Shallow depth of field)을 조화시켜 프리미엄 푸드 매거진 같은 느낌을 연출합니다.
*   **기타 규칙**: 이미지 내에 어떠한 불필요한 텍스트(글자)도 삽입하지 않습니다.
*   **프롬프트 공식**:
    > "A high-quality realistic photo of [식재료 상태 묘사] on a clean kitchen countertop. In the background, a bright, airy modern kitchen with soft natural window light, shallow depth of field. Professional food styling, clean and hygienic presentation. No text, high quality."

---

## 6. 마크다운 본문 내 수치 범위 표기 시 물결표(~) 사용 금지 규칙 (Strikethrough Strikethrough Avoidance Rule)
*   **물결표(~)에 의한 취소선 버그 절대 금지**: 마크다운(Markdown) 본문이나 JSON 텍스트 내에서 온도, 수명, 비율, 시간 등의 수치 범위를 표기할 때 물결표(`~`) 문자를 한 문장 안에 2개 이상 직접 사용하면, 마크다운 파서가 `~...~` 영역 전체를 **취소선(strikethrough)**으로 오인하여 텍스트 중간에 줄이 그어지는 현상이 발생합니다.
*   **올바른 수치 범위 표기 방식**:
    *   수치 범위 표기 시 `~` 문자 좌우에 공백을 명확히 두거나(`30 ~ 32°C`), 각 수치 뒤에 단위를 표기하고 공백을 두거나(`30°C ~ 32°C`), **하이픈/붙임표`-`** 또는 **`~` 대신 엔 다시 `–`**를 사용해야 합니다.
    *   **잘못된 표기 예시**: `핫존(30~32°C)과 쿨존(24~26°C)` ❌ (32°C)과 쿨존(24 부분이 취소선 처리됨)
    *   **올바른 표기 예시**: `핫존(30°C ~ 32°C)과 쿨존(24°C ~ 26°C)` ⭕ 또는 `핫존(30 - 32°C)과 쿨존(24 - 26°C)` ⭕

---

## 7. 블로그 Master JSON 파이프라인 및 인메모리 컴파일 원칙 (Blog Master JSON Pipeline Rule)
*   **Master JSON 9개 국어 보존**: `apps/studio/src/data/blogs/habits/*.json`, `pets/*.json`, `ingredients/*.json` 원천 파일 내에 사용자가 제공한 9개 국어(`ko`, `en`, `zh`, `ja`, `es`, `fr`, `de`, `pt`, `id`) 정밀 번역 데이터를 100% 축약/손실 없이 영구히 보관합니다.
*   **자동 번역 생성 스크립트 작성 및 실행 금지**: 빌드 파이프라인 상에서 텍스트를 기계적으로 축약하거나 요약하려는 임의의 자동 번역 스크립트 작성을 엄격히 금지합니다.
*   **1:1 슬롯 주입(Slot-In) 인메모리 컴파일**: 컴파일 파이프라인(`compile_habit_blogs.js`, `compile_pet_blogs.js`, `compile_storage_blogs.js`)은 빌드 실행 시 Master JSON 파일의 다국어 필드를 텍스트 손실 없이 그대로 읽어와 최종 다국어 마크다운 파일(`apps/studio/src/content/blog/{lang}/*.md`)로만 1:1 슬롯 주입 방식으로 직접 출력합니다.
*   **다층 폴백(Fallback) 보장**: 특정 Master JSON 파일에 아직 외국어 데이터가 채워지지 않은 경우, 한국어(`ko`) 데이터가 안전하게 폴백되어 빌드 크래시 없이 마크다운이 생성됩니다.
*   **[읽기 전용 검증 스크립트 전용 허용]**: 디스크 원본 데이터를 수정하지 않고 오직 유니코드 한글 잔류(`\uAC00-\uD7A3`) 및 타겟 언어 순도를 스캔하는 읽기 전용(Read-Only) 검증 스크립트만 제한적으로 허용합니다.

---

## 8. 대표 이미지 생성 실패 시 임시 복사 및 우회 엄금 원칙 (Strict Image Generation Failure Handling Rule)
*   **기존 이미지 임시 도용/복사 절대 금지**: 이미지 생성 API 장애(503 Service Unavailable, Quota Limit 등)로 인해 신규 포스트의 대표 이미지(`heroImage`) 생성이 실패하더라도, 테스트 검증기를 눈속임으로 통과시키기 위해 기존 타 포스트의 이미지를 복사하여 패딩/바이너리를 조작해 연결하는 편의적 임시 조치를 **엄격히 금지**합니다.
*   **명확한 장애 보고 및 재시도 원칙**: 이미지 생성 실패 시 실패 사실과 원인 에러를 명확히 사용자에게 보고하고, API 서버가 정상화되었을 때 정식 이미지 생성을 재시도하여 100% 본래 주제에 부합하는 전용 이미지를 생성·배치해야 합니다.

