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

  const isBuildSelf = pathname.includes('/apps/buildself') || appId === 'buildself';
  const isFreshSelf = (pathname.includes('/apps/freshself') && !pathname.includes('/apps/storeself')) || appId === 'freshself';
  const isStoreSelf = pathname.includes('/apps/storeself') || appId === 'storeself';
  const isLogSelf = pathname.includes('/apps/logself') || appId === 'logself';

  const appName = isBuildSelf ? "BuildSelf" : (isStoreSelf ? "StoreSelf" : (isFreshSelf ? "FreshSelf" : (isLogSelf ? "logSelf" : "SelaLink Studio")));
  const appCategory = isStoreSelf ? "LifestyleApplication" : (isFreshSelf || isLogSelf ? "LifestyleApplication" : "HealthApplication");

  const rawUrl = canonicalUrl || urlHref;
  const formattedUrl = rawUrl.endsWith('/') ? rawUrl : rawUrl + '/';

  const sameAsLinks: string[] = [];
  if (isBuildSelf) {
    sameAsLinks.push("https://play.google.com/store/apps/details?id=com.selalink.buildself");
  } else if (isFreshSelf || isStoreSelf) {
    sameAsLinks.push("https://play.google.com/store/apps/details?id=com.selalink.freshself");
  } else if (isLogSelf) {
    sameAsLinks.push("https://play.google.com/store/apps/details?id=com.selalink.logself");
  } else {
    sameAsLinks.push("https://www.youtube.com/channel/UChmmgdbcjP5PnVE-WGUspgA");
  }

  const alternateNames: string[] = [];
  if (isBuildSelf) {
    alternateNames.push(t('app.buildself.title'), "빌드셀프", "BuildSelf");
  } else if (isFreshSelf) {
    alternateNames.push(t('app.freshself.title'), "프레시셀프", "프레쉬셀프", "FreshSelf");
  } else if (isStoreSelf) {
    alternateNames.push(t('app.storeself.title'), "스토어셀프", "StoreSelf");
  } else if (isLogSelf) {
    alternateNames.push(t('app.logself.title'), "로그셀프", "logSelf");
  }

  let appFeatures: string[] = [];
  if (isBuildSelf) {
    appFeatures = (t('app.buildself.meta.features') || '').split(',');
  } else if (isFreshSelf) {
    appFeatures = (t('app.freshself.meta.features') || '').split(',');
  } else if (isStoreSelf) {
    appFeatures = (t('app.storeself.meta.features') || '').split(',');
  } else if (isLogSelf) {
    appFeatures = (t('app.logself.meta.features') || '').split(',');
  }

  let pageKeywords = keywords;
  if (!pageKeywords) {
    if (isBuildSelf) pageKeywords = t('app.buildself.meta.keywords');
    else if (isFreshSelf) pageKeywords = t('app.freshself.meta.keywords');
    else if (isStoreSelf) pageKeywords = t('app.storeself.meta.keywords');
    else if (isLogSelf) pageKeywords = t('app.logself.meta.keywords');
    else pageKeywords = t('meta.keywords');
  }

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
