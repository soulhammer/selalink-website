# AI Blog Generation Rules & Guidelines (SOP)

이 문서는 AI 에이전트가 본 저장소(selalink-website)에서 새로운 블로그 포스트를 자율 생성할 때 무조건 준수해야 하는 표준 운영 규칙(SOP)입니다. 이 지침을 따름으로써 다국어 사이트 레이아웃의 일관성과 무결성(HTML 태그 대칭 등)이 유지됩니다.

---

## 1. 다국어 지원 및 마스터 소스 원칙
*   **지원 언어 (총 9개)**: `ko` (한국어), `en` (영어), `ja` (일본어), `zh` (중국어 간체), `es` (스페인어), `fr` (프랑스어), `de` (독일어), `pt` (포르투갈어), `id` (인도네시아어)
*   **소스 마스터**: 영어(`en/[slug].md`) 또는 한국어(`ko/[slug].md`) 중 하나를 소스(원문)로 삼아 나머지 8개 다국어를 생성합니다.
*   **파일 구조**: 마스터 파일이 존재할 시, 나머지 다국어 폴더(`src/content/blog/[lang]/[slug].md`)에도 완전히 동일한 슬러그의 마크다운 파일이 대칭적으로 생성되어야 합니다.

---

## 2. 이미지 생성 및 가공 규격
*   **대표 이미지 (`heroImage`)**:
    *   블로그 목록 카드 및 최상단 헤더에 사용되는 마스터 이미지입니다.
    *   **비율 및 저장**: **1:1 비율**의 원본 일러스트를 그대로 생성하여 `/v3-app/public/images/blog/[slug].png` 경로에 적재합니다. (예: `einstein_violin_thinking.png`)
*   **본문 중간 보조 이미지 (Sub-Images)**:
    *   글을 읽는 독자의 지루함을 환기하기 위해 본문 중간(예: `STEP 2` 가이드 영역)에 배치하는 이미지입니다.
    *   **가공 및 저장**: 1:1 일러스트를 생성한 뒤, 이미지 처리 라이브러(PIL 등)를 사용해 상하단을 약 15%씩 잘라내어 **1.6:1 와이드 비율로 가공(Crop)**하여 저장합니다.
    *   **HTML 마크업**: 스텝 컨테이너 닫히는 `</div>` 바로 직전에 아래의 마크업 형식으로 주입합니다:
        ```html
        <div class="mt-6 flex justify-center">
          <img src="/images/blog/[보조이미지명].png" alt="[스텝이름]" class="rounded-2xl max-w-full h-auto border border-slate-200/50 dark:border-slate-800/50 shadow-sm" />
        </div>
        ```

---

## 3. 마크다운 본문 레이아웃 템플릿
모든 습관/보관법 포스트는 다음 마크업 구조를 준수해야 합니다.

### 🅰️ 3단계 실천 카드 (Steps)
*   세 개의 카드는 개별적으로 아래의 복잡하고 프리미엄한 `div` 구조로 감싸야 합니다:
    ```html
    <div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
      <div class="flex items-center gap-3 mb-4">
        <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 tracking-wider">STEP 1</span>
        <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">[스텝명]</h4>
      </div>
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
        [상세 내용]
      </p>
      <!-- 보조 이미지가 있을 경우 이곳에 삽입 -->
    </div>
    ```

### 🅱️ 주의사항 / 뇌과학적 한마디 (Caution Box)
*   본문 최하단 요약 영역은 아래의 전용 전구(💡) 박스 레이아웃을 사용하며, **H2 헤더 바로 다음 라인에 빈 줄 없이 붙여서** 작성합니다. (NLP 언어 감지 오탐 방지 목적)
    ```markdown
    ## 3. [소제목]
    <div class="my-6 p-5 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-start gap-4">
      <span class="text-xl">💡</span>
      <div>
        <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
          [주의사항 상세 문맥]
        </p>
      </div>
    </div>
    ```

### 🆃 FAQ 아코디언 섹션 (Accordion UI)
*   본문 최하단에 배치하며, `<details>` 접이식 구조를 가져야 합니다.
*   **첫 번째 질문**은 기본적으로 열린 상태(`open` 속성 추가)여야 합니다.
    ```html
    ---
    
    <div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
      <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0 mb-6 flex items-center gap-2">
        <span>📌</span> 자주 묻는 질문 (FAQ)
      </h3>
      
      <details class="group border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4 cursor-pointer" open>
        <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
          <span>[Q1 질문 내용]</span>
          <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
        </summary>
        <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
          [A1 답변 내용]
        </p>
      </details>
    
      <details class="group cursor-pointer">
        <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
          <span>[Q2 질문 내용]</span>
          <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
        </summary>
        <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
          [A2 답변 내용]
        </p>
      </details>
    </div>
    ```

---

## 4. 구글 SEO 메타데이터 필수 요건
*   Frontmatter에 반드시 `faqs` 구조화 배열 메타데이터가 아래 형식으로 포함되어 있어야만 Astro 템플릿 빌드 타임에 정상적인 JSON-LD 스키마가 생성됩니다.
    ```yaml
    faqs:
      - question: "질문 1"
        answer: "답변 1"
      - question: "질문 2"
        answer: "답변 2"
    ```
