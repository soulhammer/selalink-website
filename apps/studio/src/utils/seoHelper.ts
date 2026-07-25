export interface SchemaOptions {
  pathname: string;
  appId: string;
  ogType: string;
  description: string;
  canonicalUrl?: string;
  urlHref: string;
  siteUrl?: string;
  keywords?: string;
  t: (key: any) => string;
}

interface AppSeoMeta {
  appName: string;
  category: string;
  sameAs?: string;
  getAltNames: (t: (key: any) => string) => string[];
  getFeatures: (t: (key: any) => string) => string[];
  getKeywordsKey: string;
}

const APP_SEO_REGISTRY: Record<string, AppSeoMeta> = {
  buildself: {
    appName: "BuildSelf",
    category: "HealthApplication",
    sameAs: "https://play.google.com/store/apps/details?id=com.selalink.buildself",
    getAltNames: (t) => [t('app.buildself.title'), "빌드셀프", "BuildSelf"],
    getFeatures: (t) => (t('app.buildself.meta.features') || '').split(',').filter(Boolean),
    getKeywordsKey: 'app.buildself.meta.keywords'
  },
  buildsnap: {
    appName: "BuildSnap",
    category: "LifestyleApplication",
    getAltNames: (t) => [t('app.buildsnap.title') || "BuildSnap", "빌드스냅", "BuildSnap"],
    getFeatures: (t) => {
      const feats = (t('app.buildsnap.meta.features') || '').split(',').filter(Boolean);
      return feats.length > 0 ? feats : ["Habit Analytics", "Mentor Recommendations", "Routine Prescription"];
    },
    getKeywordsKey: 'app.buildsnap.meta.keywords'
  },
  freshself: {
    appName: "FreshSelf",
    category: "LifestyleApplication",
    sameAs: "https://play.google.com/store/apps/details?id=com.selalink.freshself",
    getAltNames: (t) => [t('app.freshself.title'), "프레시셀프", "프레쉬셀프", "FreshSelf"],
    getFeatures: (t) => (t('app.freshself.meta.features') || '').split(',').filter(Boolean),
    getKeywordsKey: 'app.freshself.meta.keywords'
  },
  freshsnap: {
    appName: "FreshSnap",
    category: "LifestyleApplication",
    sameAs: "https://play.google.com/store/apps/details?id=com.selalink.freshself",
    getAltNames: (t) => [t('app.freshsnap.title'), "프레시스냅", "FreshSnap"],
    getFeatures: (t) => (t('app.freshsnap.meta.features') || '').split(',').filter(Boolean),
    getKeywordsKey: 'app.freshsnap.meta.keywords'
  },
  logself: {
    appName: "logSelf",
    category: "LifestyleApplication",
    sameAs: "https://play.google.com/store/apps/details?id=com.selalink.logself",
    getAltNames: (t) => [t('app.logself.title'), "로그셀프", "logSelf"],
    getFeatures: (t) => (t('app.logself.meta.features') || '').split(',').filter(Boolean),
    getKeywordsKey: 'app.logself.meta.keywords'
  }
};

export function generateBaseSchema(options: SchemaOptions) {
  const {
    pathname,
    appId,
    ogType,
    description,
    canonicalUrl,
    urlHref,
    keywords,
    t
  } = options;

  let matchedKey = appId;
  if (!APP_SEO_REGISTRY[matchedKey]) {
    if (pathname.includes('/apps/buildself')) matchedKey = 'buildself';
    else if (pathname.includes('/apps/buildsnap')) matchedKey = 'buildsnap';
    else if (pathname.includes('/apps/freshsnap')) matchedKey = 'freshsnap';
    else if (pathname.includes('/apps/freshself')) matchedKey = 'freshself';
    else if (pathname.includes('/apps/logself')) matchedKey = 'logself';
  }

  const meta = APP_SEO_REGISTRY[matchedKey];
  const appName = meta ? meta.appName : "SelaLink Studio";
  const appCategory = meta ? meta.category : "HealthApplication";

  const rawUrl = canonicalUrl || urlHref;
  const formattedUrl = rawUrl.endsWith('/') ? rawUrl : rawUrl + '/';

  const sameAsLinks: string[] = meta?.sameAs ? [meta.sameAs] : ["https://www.youtube.com/channel/UChmmgdbcjP5PnVE-WGUspgA"];
  const alternateNames: string[] = meta ? meta.getAltNames(t).filter(Boolean) : [];
  const appFeatures: string[] = meta ? meta.getFeatures(t) : [];

  const pageKeywords = keywords || (meta ? (t(meta.getKeywordsKey as any) || t('meta.keywords')) : t('meta.keywords'));

  return {
    "@context": "https://schema.org",
    "@type": ogType === 'software' ? "SoftwareApplication" : "Organization",
    "name": ogType === 'software' ? appName : "SelaLink Studio",
    "alternateName": alternateNames.length > 0 ? alternateNames : undefined,
    "url": formattedUrl,
    "description": description,
    "keywords": pageKeywords,
    ...(ogType === 'software' ? {
      "applicationCategory": appCategory,
      "operatingSystem": "iOS, Android",
      "featureList": appFeatures.length > 0 ? appFeatures : undefined,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SelaLink Studio",
        "url": "https://selalink.net/"
      }
    } : {}),
    ...(sameAsLinks.length > 0 ? {
      "sameAs": sameAsLinks
    } : {})
  };
}
