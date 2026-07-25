export interface LegalContent {
  title: { ko: string; en: string };
  backToText: string;
  contentKo: string;
  contentEn: string;
}

export interface AppLegalSet {
  privacy: LegalContent;
  terms: LegalContent;
  dataDeletion: LegalContent;
}

// BuildSelf HTML imports
import buildselfPrivacyKo from './buildself/privacy.ko.html?raw';
import buildselfPrivacyEn from './buildself/privacy.en.html?raw';
import buildselfTermsKo from './buildself/terms.ko.html?raw';
import buildselfTermsEn from './buildself/terms.en.html?raw';
import buildselfDataDeletionKo from './buildself/dataDeletion.ko.html?raw';
import buildselfDataDeletionEn from './buildself/dataDeletion.en.html?raw';

// FreshSelf HTML imports
import freshselfPrivacyKo from './freshself/privacy.ko.html?raw';
import freshselfPrivacyEn from './freshself/privacy.en.html?raw';
import freshselfTermsKo from './freshself/terms.ko.html?raw';
import freshselfTermsEn from './freshself/terms.en.html?raw';
import freshselfDataDeletionKo from './freshself/dataDeletion.ko.html?raw';
import freshselfDataDeletionEn from './freshself/dataDeletion.en.html?raw';

// LogSelf HTML imports
import logselfPrivacyKo from './logself/privacy.ko.html?raw';
import logselfPrivacyEn from './logself/privacy.en.html?raw';
import logselfTermsKo from './logself/terms.ko.html?raw';
import logselfTermsEn from './logself/terms.en.html?raw';
import logselfDataDeletionKo from './logself/dataDeletion.ko.html?raw';
import logselfDataDeletionEn from './logself/dataDeletion.en.html?raw';

export const appsLegalData: Record<string, AppLegalSet> = {
  buildself: {
    privacy: {
      title: { ko: "개인정보처리방침", en: "Privacy Policy" },
      backToText: "Back to BuildSelf",
      contentKo: buildselfPrivacyKo,
      contentEn: buildselfPrivacyEn,
    },
    terms: {
      title: { ko: "서비스 이용약관", en: "Terms of Service" },
      backToText: "Back to BuildSelf",
      contentKo: buildselfTermsKo,
      contentEn: buildselfTermsEn,
    },
    dataDeletion: {
      title: { ko: "데이터 삭제 요청 안내", en: "Data Deletion Request" },
      backToText: "Back to BuildSelf",
      contentKo: buildselfDataDeletionKo,
      contentEn: buildselfDataDeletionEn,
    },
  },
  freshself: {
    privacy: {
      title: { ko: "개인정보처리방침", en: "Privacy Policy" },
      backToText: "Back to FreshSelf",
      contentKo: freshselfPrivacyKo,
      contentEn: freshselfPrivacyEn,
    },
    terms: {
      title: { ko: "서비스 이용약관", en: "Terms of Service" },
      backToText: "Back to FreshSelf",
      contentKo: freshselfTermsKo,
      contentEn: freshselfTermsEn,
    },
    dataDeletion: {
      title: { ko: "데이터 삭제 요청 안내", en: "Data Deletion Request" },
      backToText: "Back to FreshSelf",
      contentKo: freshselfDataDeletionKo,
      contentEn: freshselfDataDeletionEn,
    },
  },
  logself: {
    privacy: {
      title: { ko: "개인정보처리방침", en: "Privacy Policy" },
      backToText: "Back to logSelf",
      contentKo: logselfPrivacyKo,
      contentEn: logselfPrivacyEn,
    },
    terms: {
      title: { ko: "서비스 이용약관", en: "Terms of Service" },
      backToText: "Back to logSelf",
      contentKo: logselfTermsKo,
      contentEn: logselfTermsEn,
    },
    dataDeletion: {
      title: { ko: "데이터 삭제 요청 안내", en: "Data Deletion Request" },
      backToText: "Back to logSelf",
      contentKo: logselfDataDeletionKo,
      contentEn: logselfDataDeletionEn,
    },
  },
};
