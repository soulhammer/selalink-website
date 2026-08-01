export function getFormattedDate(pubDate: Date | string, lang: string): string {
  const localeMap: Record<string, string> = {
    ko: 'ko-KR',
    en: 'en-US',
    ja: 'ja-JP',
    zh: 'zh-CN',
    es: 'es-ES',
    fr: 'fr-FR',
    de: 'de-DE',
    pt: 'pt-PT',
    id: 'id-ID'
  };
  const locale = localeMap[lang || 'en'] || lang || 'en';

  return new Date(pubDate).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getPrevNextPost(allPosts: any[], currentPostId: string, lang: string) {
  const allPostsOfLang = allPosts
    .filter((p) => p.id.startsWith(lang + '/'))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
    
  const currentIndex = allPostsOfLang.findIndex((p) => p.id === currentPostId);
  const nextPost = currentIndex > 0 ? allPostsOfLang[currentIndex - 1] : null;
  const prevPost = currentIndex < allPostsOfLang.length - 1 ? allPostsOfLang[currentIndex + 1] : null;

  return { prevPost, nextPost };
}

export function generateStructuredData({
  title,
  description,
  heroImage,
  pubDate,
  updatedDate,
  postBody,
  postSteps,
  postFaqs,
  formattedUrl,
  siteOrigin
}: {
  title: string;
  description: string;
  heroImage?: string;
  pubDate: Date;
  updatedDate?: Date;
  postBody: string;
  postSteps?: any[];
  postFaqs?: any[];
  formattedUrl: string;
  siteOrigin: string;
}): any[] {
  const absoluteImage = heroImage ? new URL(heroImage, siteOrigin).href : undefined;
  
  const structuredDataList: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": description,
      "image": absoluteImage,
      "datePublished": new Date(pubDate).toISOString(),
      "dateModified": updatedDate ? new Date(updatedDate).toISOString() : new Date(pubDate).toISOString(),
      "author": {
        "@type": "Organization",
        "name": "SelaLink Studio",
        "url": "https://selalink.net/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SelaLink Studio",
        "logo": {
          "@type": "ImageObject",
          "url": "https://selalink.net/favicon.webp"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": formattedUrl
      }
    }
  ];

  // steps 파싱 및 주입
  let activeSteps = postSteps;
  if (!activeSteps || activeSteps.length === 0) {
    activeSteps = parseStepsFromHtml(postBody || '');
  }

  if (activeSteps && activeSteps.length > 0) {
    structuredDataList.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": title,
      "description": description,
      "image": absoluteImage,
      "step": activeSteps.map((step: any, idx: number) => ({
        "@type": "HowToStep",
        "name": step.name,
        "text": step.text,
        "url": `${formattedUrl}#step-${idx + 1}`
      }))
    });
  }

  // faqs 파싱 및 주입
  let activeFaqs = postFaqs;
  if (!activeFaqs || activeFaqs.length === 0) {
    activeFaqs = parseFaqsFromHtml(postBody || '');
  }

  if (activeFaqs && activeFaqs.length > 0) {
    structuredDataList.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": activeFaqs.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return structuredDataList;
}

export function parseStepsFromHtml(html: string): Array<{ name: string; text: string }> {
  const stepsParsed: Array<{ name: string; text: string }> = [];
  const stepRegex = /STEP\s*(\d+)[^]*?<h4[^>]*>([\s\S]*?)<\/h4>[^]*?<p[^>]*>([\s\S]*?)<\/p>/g;
  let match: RegExpExecArray | null;
  while ((match = stepRegex.exec(html)) !== null) {
    stepsParsed.push({
      name: match[2].replace(/<[^>]*>/g, '').trim(),
      text: match[3].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
    });
  }
  return stepsParsed;
}

export function parseFaqsFromHtml(html: string): Array<{ question: string; answer: string }> {
  const faqsParsed: Array<{ question: string; answer: string }> = [];
  const faqRegex = /<summary[^>]*>([\s\S]*?)<\/summary>[^]*?<p[^>]*>([\s\S]*?)<\/p>/g;
  let match: RegExpExecArray | null;
  while ((match = faqRegex.exec(html)) !== null) {
    const question = match[1].replace(/<[^>]*>/g, '').replace(/▼/g, '').trim();
    const answer = match[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    faqsParsed.push({ question, answer });
  }
  return faqsParsed;
}
