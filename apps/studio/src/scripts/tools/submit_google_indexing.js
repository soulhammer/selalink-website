import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keyPath = path.join(__dirname, '../../../secrets/google-service-key.json');
const blogRoot = path.join(__dirname, '../../content/blog');

// 9개 지원 언어
const languages = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

async function run() {
  console.log('🚀 [Google Indexing] 자동 색인 제출 시스템 가동...');

  // 1. 서비스 계정 인증 키 파일 확인
  if (!fs.existsSync(keyPath)) {
    console.log('⚠️  [Google Indexing] secrets/google-service-key.json 파일이 존재하지 않습니다.');
    console.log('ℹ️  로컬 환경 또는 인증서 비활성 상태이므로 색인 요청 단계를 스킵하고 성공 처리합니다.');
    return;
  }

  let keys;
  try {
    keys = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
  } catch (err) {
    console.error('❌ [Google Indexing] 인증 키 JSON 파싱 에러:', err);
    return;
  }

  // 2. 구글 API 클라이언트 인증 정보 생성
  const jwtClient = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    null
  );

  let targetUrls = [];

  // 3. 메인 기본 다국어 페이지 등록 (유입 핵심)
  languages.forEach((lang) => {
    targetUrls.push(`https://selalink.net/${lang}/`);
  });

  // 4. 최근 7일 내의 블로그 포스트 수집
  const today = new Date();
  const limitDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000); // 7일 전

  try {
    languages.forEach((lang) => {
      const langDir = path.join(blogRoot, lang);
      if (!fs.existsSync(langDir)) return;

      const posts = fs.readdirSync(langDir);
      posts.forEach((file) => {
        if (!file.endsWith('.md')) return;

        const filePath = path.join(langDir, file);
        const content = fs.readFileSync(filePath, 'utf8');

        // pubDate / updatedDate 파싱
        const pubDateMatch = content.match(/pubDate:\s*"([^"]+)"/);
        const updatedDateMatch = content.match(/updatedDate:\s*"([^"]+)"/);

        const pubDateStr = pubDateMatch ? pubDateMatch[1] : null;
        const updatedDateStr = updatedDateMatch ? updatedDateMatch[1] : null;

        const targetDateStr = updatedDateStr || pubDateStr;
        if (targetDateStr) {
          const targetDate = new Date(targetDateStr);
          // 날짜 비교 (7일 이내에 속하는가)
          if (targetDate >= limitDate) {
            const blogSlug = file.replace('.md', '');
            targetUrls.push(`https://selalink.net/${lang}/blog/${blogSlug}/`);
          }
        }
      });
    });
  } catch (err) {
    console.error('❌ [Google Indexing] 최근 블로그 목록 추출 실패:', err);
  }

  // 중복 URL 제거
  targetUrls = [...new Set(targetUrls)];

  if (targetUrls.length === 0) {
    console.log('✅ [Google Indexing] 최근 7일 이내에 업데이트된 포스트가 없습니다.');
    return;
  }

  console.log(`📊 [Google Indexing] 총 ${targetUrls.length}개의 URL에 대해 구글 색인을 요청합니다.`);

  // 5. 구글 클라이언트 인증 및 전송
  try {
    await jwtClient.authorize();
    const indexer = google.indexing({
      version: 'v3',
      auth: jwtClient,
    });

    // 순차적으로 색인 API 호출 (일일 할당량 200개 제한 준수)
    for (const url of targetUrls) {
      try {
        const response = await indexer.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED',
          },
        });
        console.log(`✅ [성공] 색인 요청 완료: ${url} (HTTP ${response.status})`);
      } catch (apiErr) {
        console.error(`❌ [오류] API 호출 실패 (${url}):`, apiErr.message);
      }
    }
    console.log('🎉 [Google Indexing] 모든 대상 URL의 구글 색인 요청을 안전하게 완수했습니다!');
  } catch (authErr) {
    console.error('❌ [Google Indexing] Google API 인증 인증 에러:', authErr);
  }
}

run();
