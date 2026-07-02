# BuildSelf 위인 습관 블로그 이미지 생성 가이드라인 (Image Generation Guidelines)

BuildSelf 앱의 위인 습관 관련 블로그 포스트 헤더 이미지(`heroImage`)를 생성할 때, 일관된 프리미엄 톤앤매너를 유지하기 위해 아래 가이드라인을 엄격히 준수합니다.

---

## 1. 이미지 스타일 및 컨셉 (Style & Concept)
*   **스타일**: 실사 사진이나 조잡한 3D 모델 대신, 세련되고 현대적인 **모던 벡터 일러스트(Modern Vector Illustration)** 또는 **2.5D 플랫 일러스트(Flat Illustration with Soft Gradients)** 스타일로 생성합니다.
*   **구도 및 묘사**: 각 위인의 **시대적 배경**과 **습관이 수행되는 실제 상황**이 시각적으로 명확하게 드러나야 합니다.
*   **인물 묘사**: 인물이 이미지의 주체로 적절하게 등장해야 하며, 위인의 특징이 잘 묘사되어야 합니다.
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
*   **날짜 임의 분산 절대 금지**: 새로운 위인 습관이나 기타 블로그 포스트를 자율적으로 추가할 때, 날짜를 임의의 과거 날짜로 분산 및 배치해 주는 `distribute_blog_dates.js` 스크립트를 파이프라인 상에서 실행하거나 에이전트가 직접 터미널에서 호출하여 실행해서는 절대 안 됩니다.
*   **신규 블로그 날짜 고정**: 신규 추가하는 블로그 포스트의 발행일(`pubDate`) 및 수정일(`updatedDate`)은 항상 작업을 진행하는 당일 날짜(오늘)로 고정하여 작성해야 합니다. 이렇게 해야 신규 포스트가 항상 블로그 목록의 최상단에 올바르게 노출될 수 있습니다.

