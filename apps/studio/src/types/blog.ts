/**
 * 다국어 블로그 시스템 통합 TypeScript 타입 정의
 */

export type SupportedLocale = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr' | 'de' | 'pt' | 'id';

export interface StepItem {
  name: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HabitLocaleContent {
  title?: string;
  description?: string;
  authority?: string;
  intro?: string;
  whyTitle?: string;
  whyDesc?: string;
  cautionTitle?: string;
  cautionDesc?: string;
  tags?: string[];
  steps?: StepItem[];
  faqs?: FaqItem[];
}

export interface HabitBlogMaster {
  pubDate?: string;
  updatedDate?: string;
  heroImage?: string;
  authority?: string;
  tags?: Record<SupportedLocale, string[]>;
  locales?: Partial<Record<SupportedLocale, HabitLocaleContent>>;
}

export interface PetProfile {
  breed: string;
  lifespan: string;
  sleep_pattern: string;
  temperament: string;
}

export interface PetLocaleContent {
  title: string;
  description: string;
  authority: string;
  intro: string;
  profile: PetProfile;
  whyTitle: string;
  whyDesc: string;
  tags?: string[];
  body_signals?: Array<{
    name: string;
    meaningText: string;
    responseText: string;
  }>;
  daily_routine?: Array<{
    name: string;
    text: string;
  }>;
  faqs?: FaqItem[];
}

export interface PetBlogMaster {
  pubDate?: string;
  updatedDate?: string;
  heroImage?: string;
  locales?: Partial<Record<SupportedLocale, PetLocaleContent>>;
}

export interface IngredientLocaleContent {
  title: string;
  description: string;
  steps: StepItem[];
  faqs?: FaqItem[];
}

export interface IngredientBlogMaster {
  ingId?: string;
  pubDate?: string;
  updatedDate?: string;
  heroImage?: string;
  locales?: Partial<Record<SupportedLocale, IngredientLocaleContent>>;
}

export interface BlogPostFrontmatter {
  layout: string;
  title: string;
  description: string;
  pubDate: string;
  updatedDate: string;
  category: string;
  tags: string[];
  heroImage: string;
  app: 'buildself' | 'freshsnap' | 'logself';
  formatVersion: number;
  authority?: string;
  steps?: StepItem[];
  faqs?: FaqItem[];
}
